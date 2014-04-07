(ns clustermap.components.map
  (:require-macros [hiccups.core :as hiccups])
  (:require
   [clojure.set :as set]
   [cljs.core.async :refer [put!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [jayq.core :refer [$]]
   [sablono.core :as html :refer-macros [html]]
   [hiccups.runtime :as hiccupsrt]
   [clustermap.boundarylines :as bl]
   [clustermap.rtree :as rtree]))

(def initial-bounds [[59.54 2.3] [49.29 -11.29]])

(defn locate-map
  [m]
  (.fitBounds m
              (clj->js initial-bounds)
              (clj->js {"paddingTopLeft" [0 0]
                        "paddingBottomRight" [0 0]})))

(def api-key (or (some-> js/config .-components .-map .-api_key)
                 "mccraigmccraig.h4f921b9"))

(defn create-map
  [id-or-el]
  (let [m ((-> js/L .-map) id-or-el #js {:zoomControl false})
        tiles ((-> js/L .-mapbox .-tileLayer) api-key #js {:detectRetina (not js/config.repl)})
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

(defn marker-popup-content
  [path-fn location-sites]
  (hiccups/html
   [:ul.map-marker-popup-location-list
    (->> location-sites
         (map (fn [site]
                ;; (.log js/console (clj->js site))
                (hiccups/html
                 [:a {:href (path-fn :map :portfolio-company site)} [:li (:name site)]]))))]))

(defn create-marker
  [path-fn leaflet-map location-sites]
  ;; extract the location-sites from the first record... they are all the same
  (if-let [latlong (some-> location-sites first :location reverse clj->js)]
    (let [icon (js/L.divIcon (clj->js {:className "map-marker" :iconSize [24,28] :iconAnchor [12 14] :popupAnchor [0, -8] })) ;;
          marker (js/L.marker latlong (clj->js {:icon icon}) ) ;;
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

;; path-utilities

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

;; manage paths

(defn style-leaflet-path
  [leaflet-path {:keys [selected highlighted]}]
  (cond (and selected highlighted) (.setStyle leaflet-path (clj->js {:color "#0000aa" :weight 2 :opacity 1 :fill true :fillOpacity 0.2}))
        selected                   (.setStyle leaflet-path (clj->js {:color "#0000aa" :weight 2 :opacity 1 :fill true :fillOpacity 0.2}))
        highlighted                (.setStyle leaflet-path (clj->js {:color "#000000" :weight 2 :opacity 1 :fill false}))
        true                       (.setStyle leaflet-path (clj->js {:color "#ff0000" :weight 2 :opacity 0 :fill false :fillOpacity 0}))))

(defn create-path
  [comm leaflet-map boundaryline-id js-boundaryline {:keys [selected] :as path-attrs}]
  (let [tolerance (aget js-boundaryline "tolerance")
        bounds (postgis-envelope->latlngbounds (aget js-boundaryline "envelope"))
        leaflet-path (js/L.geoJson (aget js-boundaryline "geojson"))]
    (style-leaflet-path leaflet-path path-attrs)
    (.addTo leaflet-path leaflet-map)
    (.on leaflet-path "click" (fn [e]
                                (put! comm [:select [:constituency boundaryline-id]])))
    {:id boundaryline-id
     :tolerance tolerance
     :selected selected
     :leaflet-path leaflet-path
     :bounds bounds}))

(defn fetch-create-path
  "create leaflet paths for every boundaryline in boundaryline-index"
  [comm fetch-boundaryline-fn js-boundaryline-index leaflet-map boundaryline-id path-attrs]
;;  (.log js/console (clj->js ["fetch-create" boundaryline-id]))
  (if-let [[tolerance js-boundaryline] (tolerance-boundaryline fetch-boundaryline-fn js-boundaryline-index boundaryline-id (.getZoom leaflet-map))]
    (create-path comm leaflet-map boundaryline-id js-boundaryline path-attrs)))

(defn replace-path
  [comm leaflet-map boundaryline-id old-path js-boundaryline path-attrs]
  (.removeLayer leaflet-map (:leaflet-path old-path))
  (create-path comm leaflet-map (:id old-path) js-boundaryline path-attrs))

(defn update-path
  "update a Leaflet path for a boundaryline"
  [comm fetch-boundaryline-fn js-boundaryline-index leaflet-map {boundaryline-id :id :as path} path-attrs]
;;  (.log js/console (clj->js ["update" boundaryline-id]))
  (if-let [[tolerance js-boundaryline] (tolerance-boundaryline fetch-boundaryline-fn js-boundaryline-index boundaryline-id (.getZoom leaflet-map))]
    (if (not= tolerance (:tolerance path))
      (replace-path comm leaflet-map boundaryline-id path js-boundaryline path-attrs)
      (do (style-leaflet-path (:leaflet-path path) path-attrs)
          path))
    path))

(defn delete-path
  [leaflet-map path]
;;  (.log js/console (clj->js ["update" (:id path)]))
  (.removeLayer leaflet-map (:leaflet-path path)))

(defn update-paths
  [comm fetch-boundaryline-fn js-boundaryline-index leaflet-map paths-atom path-selections-atom new-path-highlights new-selection-locations]
  (when js-boundaryline-index ;; don't try and render paths until we have path metadata !
    (let [paths @paths-atom
          path-keys (-> paths keys set)

          old-selection-path-keys @path-selections-atom
          new-selection-path-keys (->> new-selection-locations vals (apply concat) (map (comp :uk_constituencies :boundarylinecolls)) (apply concat) set)

          live-path-keys (set/union new-selection-path-keys new-path-highlights)

          create-path-keys (set/difference live-path-keys path-keys)
          delete-path-keys (set/difference path-keys live-path-keys)
          update-path-keys (set/intersection path-keys live-path-keys)

          created-paths (->> create-path-keys
                             (map (fn [k] (fetch-create-path comm fetch-boundaryline-fn js-boundaryline-index leaflet-map k {:selected (contains? new-selection-path-keys k)
                                                                                                                             :highlighted (contains? new-path-highlights k)}))))

          updated-paths (->> update-path-keys
                             (map (fn [k] (update-path comm fetch-boundaryline-fn js-boundaryline-index leaflet-map (get paths k) {:selected (contains? new-selection-path-keys k)
                                                                                                                                   :highlighted (contains? new-path-highlights k)}))))

          _ (doseq [k delete-path-keys] (if-let [path (get paths k)] (delete-path leaflet-map path)))

          new-paths (->> (concat created-paths updated-paths)
                         (filter identity)
                         (reduce (fn [m {:keys [id] :as path}] (assoc m id path))
                                 {}))]

      (reset! path-selections-atom new-selection-path-keys)
      (reset! paths-atom new-paths))))

(defn pan-to-selection
  [owner leaflet-map paths-atom path-selections-atom]
  (let [paths @paths-atom
        path-selections @path-selections-atom]
    ;; (.log js/console (clj->js ["pan-to-selection"]))
    (if (empty? path-selections)
      (do
        ;; (.log js/console (clj->js ["empty selection" path-selections]))
        (locate-map leaflet-map)
          ;; (om/set-state! owner :pan-pending true)
          )
      (if (empty? paths)
        (do
          ;; (.log js/console (clj->js ["non-empty selection : empty paths" path-selections]))
          (om/set-state owner :pan-pending true))
        (do
          ;; (.log js/console (clj->js ["non-empty selection" path-selections]))
          (if (om/get-state owner :pan-pending) (om/set-state! owner :pan-pending false))
          (if-let [bounds (some->> (select-keys paths path-selections) vals (map :bounds) not-empty)]
            (apply pan-to-show leaflet-map bounds)
            (pan-to-show initial-bounds)))
        ))))

(defn map-component
  "put the leaflet map as state in the om component"
  [{:keys [selection] :as app-state} owner]
  (reify
    om/IRender
    (render [this]
      (html [:div.map {:ref "map"}]))

    om/IDidMount
    (did-mount [this]
      (let [node (om/get-node owner)
            {:keys [leaflet-map markers path] :as map} (create-map node)]
        (om/set-state! owner :map map)
        (om/set-state! owner :path-highlights #{})

        ;; yeuch
        (.on leaflet-map "zoomend" (fn [e] (swap! (om/get-shared owner :app-state) assoc :zoom (.getZoom leaflet-map))))

        ;; discard mousemoves on open popups...
        (.on leaflet-map "popupopen" (fn [e]
                                       (let [popup-el (-> e .-popup .-_container)
                                             marker-popup-location-list-cnt (-> popup-el $ (.find ".map-marker-popup-location-list") .-length)]
                                         (if (> marker-popup-location-list-cnt 0)
                                           (om/set-state! owner :popup-selected true))
                                         (-> popup-el
                                             $
                                             (.on "mousemove" (fn [e] (.preventDefault e) false))))))

        (.on leaflet-map "popupclose" (fn [e] (om/set-state! owner :popup-selected nil)))

        (-> js/document $ (.on "clustermap-change-view"(fn [e]
                                                         ;; (.log js/console "change-view")
                                                         (let [{{:keys [paths path-selections]} :map} (om/get-state owner)]
                                                           (.invalidateSize leaflet-map)
                                                           (pan-to-selection owner leaflet-map paths path-selections)))))


        (om/update! app-state assoc :zoom (.getZoom leaflet-map))))

    om/IWillUpdate
    (will-update [this
                  {next-selection :selection
                   next-locations :selection-portfolio-company-locations
                   next-uk-constituencies :uk-constituencies
                   next-uk-constituencies-rtree :uk-constituencies-rtree
                   next-boundarylines :boundarylines
                   next-zoom :zoom}
                  {next-path-highlights :path-highlights}]

      (let [{:keys [uk-constituencies-rtree]} (om/get-props owner)
            {:keys [comm fetch-boundaryline-fn link-fn path-fn]} (om/get-shared owner)
            {{:keys [leaflet-map markers paths path-selections]} :map
             pan-pending :pan-pending
             path-highlights :path-highlights
             mousemove-listener :mousemove-listener
             click-listener :click-listener} (om/get-state owner)]

        (update-markers path-fn leaflet-map markers next-locations)

        (when (not= next-uk-constituencies-rtree uk-constituencies-rtree)
          (om/set-state! owner
                         :mousemove-listener
                         (fn [e]
                           (let [lat (-> e .-latlng .-lat)
                                 lng (-> e .-latlng .-lng)

                                 hits (rtree/point-in-polygons next-uk-constituencies-rtree lng lat)
                                 hit-path-ids (map (fn [hit] (-> hit .-properties .-id)) hits)

                                 highlight-hit (first hits)
                                 highlight-path-ids (set (take 1 hit-path-ids))

                                 old-path-highlights (om/get-state owner :path-highlights)]

                             (when (and highlight-hit
                                        (not= old-path-highlights highlight-path-ids)
                                        (not (om/get-state owner :popup-selected)))
                               (doto (js/L.popup)
                                 (.setLatLng (clj->js [lat lng]))
                                 (.setContent (str "<p class=\"map-marker-constituency-name\">" (some-> highlight-hit .-properties .-compact_name ) "</p>"))
                                 (.openOn leaflet-map)))

                             (om/set-state! owner :path-highlights highlight-path-ids))))

          (if mousemove-listener (.off leaflet-map "mousemove" mousemove-listener))
          (.on leaflet-map "mousemove" (om/get-state owner :mousemove-listener))

          (om/set-state! owner
                         :click-listener
                         (fn [e]
                           (let [hits (rtree/point-in-polygons next-uk-constituencies-rtree (-> e .-latlng .-lng) (-> e .-latlng .-lat))
                                 hit-path-ids (map (fn [hit] (-> hit .-properties .-id)) hits)]
                             (put! comm [:select [:constituency (first hit-path-ids)]]))))

          (if click-listener (.off leaflet-map "click" click-listener))
          (.on leaflet-map "click" (om/get-state owner :click-listener)))

        (when next-uk-constituencies
          ;;(create-paths comm next-uk-constituencies leaflet-map paths)
          (update-paths comm fetch-boundaryline-fn next-uk-constituencies leaflet-map paths path-selections next-path-highlights next-locations))

        (when (or pan-pending (not= next-selection selection))
          (pan-to-selection owner leaflet-map paths path-selections))))))

(defn mount
  [app-state elem-id shared]
  (om/root map-component
           app-state
           {:shared (merge shared
                           {:app-state app-state
                            :fetch-boundaryline-fn (partial bl/get-or-fetch-best-boundaryline app-state :boundarylines)})
            :target (.getElementById js/document elem-id)
            }))
