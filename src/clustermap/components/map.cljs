(ns clustermap.components.map
  (:require-macros [hiccups.core :as hiccups])
  (:require
   [clojure.set :as set]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [jayq.core :refer [$]]
   [sablono.core :as html :refer [html] :include-macros true]
   [hiccups.runtime :as hiccupsrt]
   [clustermap.boundarylines :as bl]))

(defn locate-map
  [m]
  (.fitBounds m
              (clj->js [[59.54 2.3] [49.29 -11.29]])
              (clj->js {"paddingTopLeft" [0 0]
                        "paddingBottomRight" [0 0]})))

(def api-key (or (some-> js/config .-components .-map .-api_key)
                 "mccraigmccraig.h4f921b9"))

(defn create-map
  [id-or-el]
  (let [m ((-> js/L .-map) id-or-el #js {:zoomControl false})
        tiles ((-> js/L .-mapbox .-tileLayer) api-key #js {:detectRetina true})
        zoom ((-> js/L .-control .-zoom) #js {:position "bottomright"})]
    (.addLayer m tiles)
    (.addControl m zoom)
    (locate-map m)

    {:leaflet-map m
     :markers (atom {})
     :paths (atom {})
     :path-selections (atom #{})}))

(defn geojson-point-bounds
  "return a single LatLngBounds object containing all
   given latlongs"
  [longlats]
  (let [s (apply min (map last longlats))
        w (apply min (map first longlats))
        n (apply max (map last longlats))
        e (apply max (map first longlats))]
    (when (and s w n e)
      (js/L.latLngBounds (clj->js [[s w] [n e]])))))

(defn pan-to-show
  [m & all-bounds]
  (if (not-empty all-bounds)
    (let [fb (first all-bounds)
          fb-copy (new js/L.LatLngBounds (.getSouthWest fb) (.getNorthEast fb))
          super-bounds (reduce (fn [sb bounds] (.extend sb bounds))
                               fb-copy
                               (rest all-bounds))]
      (.fitBounds m super-bounds))))

(defn display-site
  [m site]
  (let [location (-> site (aget "location") reverse clj->js)
        options (-> {:title (str (aget site "name") ", " (aget site "postcode") ", " (aget site "company_no"))} clj->js)
        marker (js/L.marker location options)]
    (.addTo marker m)))

(defn display-sites
  [m sites]
  (->> sites
       (casync/map-async (partial display-site m))
       ((fn [c] (casync/dorun-async c :delay nil)))))

(defn marker-popup-content
  [path-fn location-sites]
  (hiccups/html
   [:ul
    (->> location-sites
         (map (fn [site]
                ;; (.log js/console (clj->js site))
                (hiccups/html
                 [:li
                  [:a {:href (path-fn :portfolio-company site)} (:name site)]]))))]))

(defn create-marker
  [path-fn leaflet-map location-sites]
  ;; extract the location-sites from the first record... they are all the same
  (if-let [latlong (some-> location-sites first :location reverse clj->js)]
    (let [marker (js/L.marker latlong)
          popup-content (marker-popup-content path-fn location-sites)]
      ;; (.log js/console popup-content)
      (.bindPopup marker popup-content)
      (.addTo marker leaflet-map)
      marker)
    (.log js/console (str "missing location: " (with-out-str (pr location-sites))))))

(defn update-marker
  [path-fn leaflet-map marker location]
  (.setPopupContent marker (marker-popup-content path-fn location))
  marker)

(defn remove-marker
  [leaflet-map marker]
  (.removeLayer leaflet-map marker))

(defn update-markers
  [path-fn leaflet-map markers-atom new-locations]
  (let [markers @markers-atom
        marker-keys (-> markers keys set)
        location-keys (-> new-locations keys set)

        update-marker-keys (set/intersection marker-keys location-keys)
        new-marker-keys (set/difference location-keys marker-keys)
        remove-marker-keys (set/difference marker-keys location-keys)

        new-markers (->> new-marker-keys
                         (map (fn [k] [k (create-marker path-fn leaflet-map (get new-locations k))]))
                         (into {}))

        updated-markers (->> update-marker-keys
                             (map (fn [k] [k (update-marker path-fn leaflet-map (get markers k) (get new-locations k))]))
                             (into {}))

        _ (doseq [k remove-marker-keys] (remove-marker leaflet-map (get markers k)))]

    (reset! markers-atom (merge updated-markers new-markers))))

(defn postgis-envelope->latlngbounds
  "turns a PostGIS envelope into a L.LatLngBounds"
  [envelope]
  (let [{[[[miny0 minx0] [maxy1 minx1] [maxy2 maxx2] [miny3 maxx3] [miny4 minx4] :as inner] :as coords] "coordinates" :as clj-envelope} (js->clj envelope)]
    (js/L.latLngBounds (clj->js [[minx0 miny0] [maxx2 maxy2]]))))

(defn tolerance-boundaryline
  "get the best cached boundaryline, async fetch a better one if required"
  [fetch-boundaryline-fn index boundaryline-id zoom]
  (let [default-bl (when index (aget index boundaryline-id))
        default-tolerance (when default-bl (aget default-bl "tolerance"))
        default (when default-bl [default-tolerance default-bl])]
    (or (fetch-boundaryline-fn boundaryline-id zoom :min-zoom 7)
        default)))

;; create paths

(defn style-leaflet-path
  [path {:keys [selected]}]
  (if selected
    (.setStyle path (clj->js {:color "#0000ff" :weight 3 :opacity 1 :fillOpacity 0.3}))
    (.setStyle path (clj->js {:opacity 0 :fillOpacity 0}))))

(defn create-boundaryline-path
  [leaflet-map js-boundaryline {:keys [selected] :as path-attrs}]
  (let [tolerance (aget js-boundaryline "tolerance")
        bounds (postgis-envelope->latlngbounds (aget js-boundaryline "envelope"))
        leaflet-path (js/L.geoJson (aget js-boundaryline "geojson"))]
    (style-leaflet-path leaflet-path path-attrs)
    (.addTo leaflet-path leaflet-map)
    {:tolerance tolerance
     :selected selected
     :leaflet-path leaflet-path
     :bounds bounds}))

(defn create-paths
  "create leaflet paths for every boundaryline in boundaryline-index"
  [js-boundaryline-index leaflet-map paths-atom]
  (when (empty? @paths-atom)
    (when-let [keys (not-empty (js/Object.keys js-boundaryline-index))]
      (reset! paths-atom (->> keys
                              (map (fn [k] [k (create-boundaryline-path leaflet-map (aget js-boundaryline-index k) {:selected false})]))
                              (into {}))))))

;; style paths on selection / deselection

(defn replace-boundaryline-path
  [leaflet-map old-path js-boundaryline path-attrs]
  (.removeLayer leaflet-map (:leaflet-path old-path))
  (create-boundaryline-path leaflet-map js-boundaryline path-attrs))

(defn update-path
  "update a Leaflet path for a boundaryline"
  [fetch-boundaryline-fn js-boundaryline-index leaflet-map path boundaryline-id path-attrs]
;;  (.log js/console (str "UPDATE: " boundaryline-id))
  (if-let [[tolerance js-boundaryline] (tolerance-boundaryline fetch-boundaryline-fn js-boundaryline-index boundaryline-id (.getZoom leaflet-map))]
    (if (not= tolerance (:tolerance path))
      (replace-boundaryline-path leaflet-map path js-boundaryline path-attrs)
      (do (style-leaflet-path (:leaflet-path path) path-attrs)
          path))
    path))

(defn update-paths
  [fetch-boundaryline-fn js-boundaryline-index leaflet-map paths-atom path-selections-atom new-selection-locations]
  (when js-boundaryline-index ;; don't try and render paths until we have path metadata !
    (let [paths @paths-atom
          path-keys (-> paths keys set)

          old-selection-path-keys @path-selections-atom
          new-selection-path-keys (->> new-selection-locations vals (apply concat) (map (comp :uk_constituencies :boundarylinecolls)) (apply concat) set)

          select-path-keys (into (set/intersection old-selection-path-keys new-selection-path-keys)
                                 (set/difference new-selection-path-keys old-selection-path-keys))
          deselect-path-keys (set/difference old-selection-path-keys new-selection-path-keys)

          selected-paths (->> select-path-keys
                              (map (fn [k] [k (update-path fetch-boundaryline-fn js-boundaryline-index leaflet-map (get paths k) k {:selected true})]))
                              (filter (fn [[k v]] (identity v)))
                              (into {}))
          deselected-paths (->> deselect-path-keys
                                (map (fn [k] [k (update-path fetch-boundaryline-fn js-boundaryline-index leaflet-map (get paths k) k {:selected false})]))
                                (filter (fn [[k v]] (identity v)))
                                (into {}))]

      (reset! path-selections-atom new-selection-path-keys)
      (reset! paths-atom (merge paths selected-paths deselected-paths)))))

(defn pan-to-selection
  [leaflet-map paths]
;;  (.log js/console (clj->js paths))
  (let [bounds (some->> paths vals (map :bounds))]
    (when bounds
      (apply pan-to-show leaflet-map bounds))))

(defn map-component
  "put the leaflet map as state in the om component"
  [{:keys [selection] :as app-state} owner]
  (reify
    om/IRender
    (render [this]
      (html [:div.map {:ref "map"}]))

    om/IDidMount
    (did-mount [this node]
      (let [{:keys [leaflet-map markers path] :as map} (create-map node)]
        (om/set-state! owner :map map)

        ;; yeuch
        (.on leaflet-map "zoomend" (fn [e] (swap! (om/get-shared owner :app-state) assoc :zoom (.getZoom leaflet-map))))
        (-> js/document $ (.on "clustermap-change-view"(fn [e]
                                                         (.log js/console "change-view")
                                                         (let [{{:keys [paths]} :map} (om/get-state owner)]
                                                           (.invalidateSize leaflet-map)
                                                           (if (not-empty @paths)
                                                               (pan-to-selection leaflet-map @paths)
                                                               (locate-map leaflet-map))))))

        (om/update! app-state assoc :zoom (.getZoom leaflet-map))))

    om/IWillUpdate
    (will-update [this
                  {next-selection :selection
                   next-locations :selection-portfolio-company-locations
                   next-uk-constituencies :uk-constituencies
                   next-boundarylines :boundarylines
                   next-zoom :zoom}
                  next-state]

      (let [{:keys [fetch-boundaryline-fn link-fn path-fn]} (om/get-shared owner)
            {{:keys [leaflet-map markers paths path-selections]} :map pan-pending :pan-pending} (om/get-state owner)]

        (update-markers path-fn leaflet-map markers next-locations)

        (when next-uk-constituencies
          (create-paths next-uk-constituencies leaflet-map paths)
          (update-paths fetch-boundaryline-fn next-uk-constituencies leaflet-map paths path-selections next-locations))

        (when (not= next-selection selection)
          (if (not-empty @paths)
            (pan-to-selection leaflet-map (select-keys @paths @path-selections))
            (om/set-state! owner :pan-pending true)))

        (when (and pan-pending (not-empty @paths))
          (pan-to-selection leaflet-map (select-keys @paths @path-selections))
          (om/set-state! owner :pan-pending false))))))

(defn mount
  [app-state elem-id shared]
  (om/root app-state
           (merge shared
                  {:app-state app-state
                   :fetch-boundaryline-fn (partial bl/get-or-fetch-best-boundaryline app-state :boundarylines)})
           map-component
           (.getElementById js/document elem-id)))
