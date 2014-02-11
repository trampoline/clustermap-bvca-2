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
     :paths (atom {})}))

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

(defn create-path
  "create a Leaflet path for a boundaryline"
  [fetch-boundaryline-fn uk-constituencies leaflet-map boundaryline-id]
  (if-let [[tolerance cons] (tolerance-boundaryline fetch-boundaryline-fn uk-constituencies boundaryline-id (.getZoom leaflet-map))]
    (let [path (js/L.geoJson (aget cons "geojson"))
          bounds (postgis-envelope->latlngbounds (aget cons "envelope"))]
      (.addTo path leaflet-map)
      {:tolerance tolerance
       :path path
       :bounds bounds})
    (.log js/console (str "missing boundaryline metadata: " boundaryline-id))))

(defn update-path
  "update a Leaflet path for a boundaryline"
  [fetch-boundaryline-fn uk-constituencies leaflet-map path boundaryline-id]
  (if-let [[tolerance cons] (tolerance-boundaryline fetch-boundaryline-fn uk-constituencies boundaryline-id (.getZoom leaflet-map))]
    (if (not= tolerance (:tolerance path))
      (let [new-path (js/L.geoJson (aget cons "geojson"))
            bounds (postgis-envelope->latlngbounds (aget cons "envelope"))]
        (.addTo new-path leaflet-map)
        (.removeLayer leaflet-map (:path path))
        {:tolerance tolerance
         :path new-path
         :bounds bounds})
      path)
    path))

(defn remove-path
  "remove a leaflet path"
  [leaflet-map path]
;;  (.log js/console (clj->js ["remove-path" path]))
  (some->>
   path
   :path
   (.removeLayer leaflet-map)))

(defn update-paths
  [fetch-boundaryline-fn uk-constituencies leaflet-map paths-atom new-locations]
  (when uk-constituencies ;; don't try and render paths until we have path metadata !
    (let [paths @paths-atom
          path-keys (-> paths keys set)
          location-path-keys (->> new-locations vals (apply concat) (map (comp :uk_constituencies :boundarylinecolls)) (apply concat) set)

          update-path-keys (set/intersection path-keys location-path-keys)
          new-path-keys (set/difference location-path-keys path-keys)
          remove-path-keys (set/difference path-keys location-path-keys)

          new-paths (->> new-path-keys
                         (map (fn [k] [k (create-path fetch-boundaryline-fn uk-constituencies leaflet-map k)]))
                         (filter (fn [[k v]] (identity v)))
                         (into {}))
          updated-paths (->> update-path-keys
                             (map (fn [k] [k (update-path fetch-boundaryline-fn uk-constituencies leaflet-map (get paths k) k)]))
                             (into {}))
          _ (doseq [k remove-path-keys] (remove-path leaflet-map (get paths k)))]

      (reset! paths-atom (merge updated-paths new-paths)))))

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
            {{:keys [leaflet-map markers paths]} :map
             pan-pending :pan-pending} (om/get-state owner)]

        (update-markers path-fn leaflet-map markers next-locations)
        (update-paths fetch-boundaryline-fn next-uk-constituencies leaflet-map paths next-locations)

        (when (not= next-selection selection)
          (if (not-empty @paths)
            (pan-to-selection leaflet-map @paths)
            (om/set-state! owner :pan-pending true)))

        (when (and pan-pending (not-empty @paths))
          (pan-to-selection leaflet-map @paths)
          (om/set-state! owner :pan-pending false))))))

(defn mount
  [app-state elem-id shared]
  (om/root app-state
           (merge shared
                  {:app-state app-state
                   :fetch-boundaryline-fn (partial bl/get-or-fetch-best-boundaryline app-state :boundarylines)})
           map-component
           (.getElementById js/document elem-id)))
