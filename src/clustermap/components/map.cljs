(ns clustermap.components.map
  (:require-macros [hiccups.core :as hiccups]
                   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.set :as set]
   [cljs.core.async :refer [put! <!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [jayq.core :refer [$]]
   [sablono.core :as html :refer-macros [html]]
   [hiccups.runtime :as hiccupsrt]
   [clustermap.api :as api]
   [clustermap.boundarylines :as bl]
   [clustermap.data.colorchooser :as colorchooser]))

(defn bounds-array
  "convert a Leaflet LatLngBounds object into nested-array form"
  [bounds]
  (if (instance? js/L.LatLngBounds bounds)
    [[(.getSouth bounds) (.getWest bounds)] [(.getNorth bounds) (.getEast bounds)]]
    bounds))

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

(defn locate-map
  [m initial-bounds]
  (.fitBounds m
              (clj->js initial-bounds)
              (clj->js {"paddingTopLeft" [0 0]
                        "paddingBottomRight" [0 0]})))

(def api-key (or (some-> js/config .-components .-map .-api_key)
                 "mccraigmccraig.h4f921b9"))

(defn create-map
  [id-or-el initial-bounds]
  (let [m ((-> js/L .-map) id-or-el #js {:zoomControl false})
        tiles ((-> js/L .-mapbox .-tileLayer) api-key #js {:detectRetina (not js/config.repl)})
        zoom ((-> js/L .-control .-zoom) #js {:position "bottomright"})]
    (.addLayer m tiles)
    (.addControl m zoom)

    (locate-map m initial-bounds)

    {:leaflet-map m
     :markers (atom {})
     :paths (atom {})
     :path-selections (atom #{})}))

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
                 [:li [:a {:href (path-fn :map :portfolio-company site)} (:name site)]]))))]))

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

;; manage paths

(defn style-leaflet-path
  [leaflet-path {:keys [selected highlighted fill-color]}]
  (cond (and selected highlighted) (.setStyle leaflet-path (clj->js {:color "#000000" :fillColor fill-color :weight 2 :opacity 1 :fill true :fillOpacity 0.6}))
        selected                   (.setStyle leaflet-path (clj->js {:color "#8c2d04" :fillColor fill-color :weight 1 :opacity 1 :fill true :fillOpacity 0.6}))
        highlighted                (.setStyle leaflet-path (clj->js {:color "#000000" :fillColor fill-color :weight 2 :opacity 1 :fill false}))
        true                       (.setStyle leaflet-path (clj->js {:color "#8c2d04" :fillColor fill-color :weight 1 :opacity 0 :fill false :fillOpacity 0}))))

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
  [comm leaflet-map boundaryline-id tolerance js-boundaryline path-attrs]
  ;;  (.log js/console (clj->js ["fetch-create" boundaryline-id]))
  (create-path comm leaflet-map boundaryline-id js-boundaryline path-attrs))

(defn replace-path
  [comm leaflet-map boundaryline-id old-path js-boundaryline path-attrs]
  ;; (.log js/console (clj->js ["replace-path" boundaryline-id old-path js-boundaryline path-attrs]))
  (.removeLayer leaflet-map (:leaflet-path old-path))
  (create-path comm leaflet-map (:id old-path) js-boundaryline path-attrs))

(defn update-path
  "update a Leaflet path for a boundaryline"
  [comm leaflet-map {boundaryline-id :id :as path} tolerance js-boundaryline path-attrs]
  ;; (.log js/console (clj->js ["update-path" boundaryline-id path tolerance js-boundaryline path-attrs]))
  (if (not= tolerance (:tolerance path))
    (replace-path comm leaflet-map boundaryline-id path js-boundaryline path-attrs)
    (do (style-leaflet-path (:leaflet-path path) path-attrs)
        path)))

(defn delete-path
  [leaflet-map path]
;;  (.log js/console (clj->js ["update" (:id path)]))
  (.removeLayer leaflet-map (:leaflet-path path)))

(defn update-paths
  [comm fetch-boundarylines-fn leaflet-map paths-atom path-selections-atom new-path-highlights new-selection-paths]
  (let [paths @paths-atom
        path-keys (-> paths keys set)

        old-selection-path-keys @path-selections-atom
        new-selection-path-keys (-> new-selection-paths keys set)
        ;; _ (.log js/console (clj->js ["new-selection-path-keys" new-selection-path-keys]))

        live-path-keys (set/union new-selection-path-keys new-path-highlights)

        create-path-keys (set/difference live-path-keys path-keys)
        delete-path-keys (set/difference path-keys live-path-keys)
        update-path-keys (set/intersection path-keys live-path-keys)

        tolerance-paths (fetch-boundarylines-fn live-path-keys (.getZoom leaflet-map))

        ;; _ (.log js/console (clj->js tolerance-paths))

        created-paths (->> create-path-keys
                           (map (fn [k] (let [[tolerance js-boundaryline] (get tolerance-paths k)]
                                          (when (and k tolerance js-boundaryline)
                                            [k tolerance js-boundaryline]))))
                           (filter identity)
                           (map (fn [[k tolerance js-boundaryline]] (fetch-create-path comm
                                                                                     leaflet-map
                                                                                     k
                                                                                     tolerance
                                                                                     js-boundaryline
                                                                                     {:selected (contains? new-selection-path-keys k)
                                                                                      :fill-color (new-selection-paths k)
                                                                                      :highlighted (contains? new-path-highlights k)}))))

        updated-paths (->> update-path-keys
                           (map (fn [k] (let [[tolerance js-boundaryline] (get tolerance-paths k)]
                                          (when (and k tolerance js-boundaryline)
                                            [k tolerance js-boundaryline]))))
                           (filter identity)
                           (map (fn [[k tolerance js-boundaryline]] (update-path comm
                                                                               leaflet-map
                                                                               (get paths k)
                                                                               tolerance
                                                                               js-boundaryline
                                                                               {:selected (contains? new-selection-path-keys k)
                                                                                :fill-color (new-selection-paths k)
                                                                                :highlighted (contains? new-path-highlights k)})))
                           )

        _ (doseq [k delete-path-keys] (if-let [path (get paths k)] (delete-path leaflet-map path)))

        ;; _ (.log js/console (clj->js updated-paths))

        new-paths (->> (concat created-paths updated-paths)
                       (filter identity)
                       (reduce (fn [m {:keys [id] :as path}] (assoc m id path))
                               {}))]

    (reset! path-selections-atom new-selection-path-keys)
    (reset! paths-atom new-paths)))

;; (defn pan-to-selection
;;   [owner leaflet-map paths-atom path-selections-atom]
;;   (let [paths @paths-atom
;;         path-selections @path-selections-atom]
;;     ;; (.log js/console (clj->js ["pan-to-selection"]))
;;     (if (empty? path-selections)
;;       (do
;;         ;; (.log js/console (clj->js ["empty selection" path-selections]))
;;         (locate-map leaflet-map)
;;           ;; (om/set-state! owner :pan-pending true)
;;           )
;;       (if (empty? paths)
;;         (do
;;           ;; (.log js/console (clj->js ["non-empty selection : empty paths" path-selections]))
;;           (om/set-state owner :pan-pending true))
;;         (do
;;           ;; (.log js/console (clj->js ["non-empty selection" path-selections]))
;;           (if (om/get-state owner :pan-pending) (om/set-state! owner :pan-pending false))
;;           (if-let [bounds (some->> (select-keys paths path-selections) vals (map :bounds) not-empty)]
;;             (apply pan-to-show leaflet-map bounds)
;;             (pan-to-show initial-bounds)))
;;         ))))

(defn constituency-marker-popup-content
  [path-fn constituency]
  (let [bl-id (:id constituency)
        bl-name (:compact_name constituency) ]
    (hiccups/html
     [:a {:href (path-fn :map :constituency {:boundaryline_id bl-id :compact_name bl-name})}
      [:span.map-marker-constituency-name bl-name]])))

(defn choose-boundaryline-collection
  [threshold-collections zoom]
  (->> threshold-collections
       (filter (fn [[tz collection]] (>= zoom tz)))
       reverse
       first
       last))

(defn fetch-aggregation-data
  [set-app-state-fn index index-type blcoll variable filter]
  (go
    (let [employment (<! (api/boundaryline-aggregation index index-type blcoll variable filter))]
      (set-app-state-fn [:multiview :views :map :data] employment))))

(defn map-component
  "put the leaflet map as state in the om component"
  [{{:keys [initial-bounds]} :controls :as cursor}
   owner]
  (reify
    om/IRender
    (render [this]
      (html [:div.map {:ref "map"}]))

    om/IDidMount
    (did-mount [this]
      (let [node (om/get-node owner)
            {:keys [leaflet-map markers path] :as map} (create-map node initial-bounds)
            {:keys [comm fetch-boundarylines-fn point-in-boundarylines-fn link-fn path-fn]} (om/get-shared owner)]

        ;; reflect bounds and zoom in controls immediately
        (om/update! cursor [:controls :zoom] (.getZoom leaflet-map))
        (om/update! cursor [:controls :bounds] (bounds-array (.getBounds leaflet-map)))

        (om/set-state! owner :map map)
        (om/set-state! owner :path-highlights #{})

        ;; yeuch
        (.on leaflet-map "zoomend" (fn [e]
                                     (om/update! cursor [:controls :zoom] (.getZoom leaflet-map))
                                     (om/update! cursor [:controls :bounds] (bounds-array (.getBounds leaflet-map)))))

        (.on leaflet-map "moveend" (fn [e]
                                     (om/update! cursor [:controls :zoom] (.getZoom leaflet-map))
                                     (om/update! cursor [:controls :bounds] (bounds-array (.getBounds leaflet-map)))))

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




        ;; (-> js/document $ (.on "clustermap-change-view"(fn [e]
        ;;                                                  ;; (.log js/console "change-view")
        ;;                                                  (let [{{:keys [paths path-selections]} :map} (om/get-state owner)]
        ;;                                                    (.invalidateSize leaflet-map)
        ;;                                                    (pan-to-selection owner leaflet-map paths path-selections)))))

        (.on leaflet-map "mousemove" (fn [e]
                                       (let [lat (-> e .-latlng .-lat)
                                             lng (-> e .-latlng .-lng)

                                             hits (point-in-boundarylines-fn lng lat)
                                             highlight-hit (first hits)
                                             highlight-path-id (:id highlight-hit)
                                             highlight-path-ids (when highlight-path-id (set [highlight-path-id]))
                                             ;; _ (when highlight-path-id (.log js/console highlight-path-id))

                                             old-path-highlights (om/get-state owner :path-highlights)]

                                         (when (and highlight-hit
                                                    (not= old-path-highlights highlight-path-ids)
                                                    (not (om/get-state owner :popup-selected)))
                                           (doto (js/L.popup)
                                             (.setLatLng (clj->js [lat lng]))
                                             (.setContent (constituency-marker-popup-content path-fn highlight-hit))
                                             (.openOn leaflet-map)))

                                         (om/set-state! owner :path-highlights highlight-path-ids))))

        (.on leaflet-map "click" (fn [e]
                                   (let [hits (point-in-boundarylines-fn (-> e .-latlng .-lng) (-> e .-latlng .-lat))
                                         boundaryline-id (some-> hits first :id)]
                                     (when boundaryline-id
                                       (put! comm [:select [:constituency boundaryline-id]])))))))

    om/IWillUpdate
    (will-update [this
                  {next-filter :filter
                   next-data :data
                   next-boundaryline-collections :boundaryline-collections
                   {next-zoom :zoom
                    next-bounds :bounds
                    next-boundaryline-collection :boundaryline-collection
                    next-colorchooser-control :colorchooser
                    next-boundaryline-agg :boundaryline-agg
                    next-threshold-colors :threshold-colors} :controls}
                  {next-path-highlights :path-highlights}]

      (let [{filter :filter
             data :data
             boundaryline-collections :boundaryline-collections
             {:keys [initial-bounds bounds zoom boundaryline-collection colorchooser-control boundaryline-agg threshold-colors]} :controls} (om/get-props owner)
            {:keys [comm path-fn link-fn fetch-boundarylines-fn point-in-boundarylines-fn set-app-state-fn ]} (om/get-shared owner)
            {{:keys [leaflet-map markers paths path-selections]} :map
             pan-pending :pan-pending
             path-highlights :path-highlights} (om/get-state owner)]

        ;; apply any requested but not-yet-applied zoom
        (when (and leaflet-map next-zoom (not= next-zoom zoom) (not= next-zoom (.getZoom leaflet-map)))
          (.setZoom leaflet-map next-zoom))

        ;; apply any requested but not-yet-applied bounds changes
        (when (and leaflet-map next-bounds (not= next-bounds bounds) (not= next-bounds (bounds-array (.getBounds leaflet-map))))
          (.fitBounds leaflet-map (clj->js next-bounds))
          (om/update! cursor [:controls :bounds] (bounds-array (.getBounds leaflet-map))))

        (when (and leaflet-map boundaryline-collections (not= next-boundaryline-collection (choose-boundaryline-collection next-boundaryline-collections (.getZoom leaflet-map))))
          (.log js/console (clj->js ["change-collection" (choose-boundaryline-collection next-boundaryline-collections (.getZoom leaflet-map))]))
          (om/update! cursor [:controls :boundaryline-collection] (choose-boundaryline-collection next-boundaryline-collections (.getZoom leaflet-map))))

        ;; (update-markers path-fn leaflet-map markers next-locations)

        (when (and next-boundaryline-collection
                   (or (and next-boundaryline-agg (not= next-boundaryline-agg boundaryline-agg))
                       (not= next-boundaryline-collection boundaryline-collection)
                       (not= next-filter filter)))
          ;; time for some new data !
          (fetch-aggregation-data set-app-state-fn
                                  (:index next-boundaryline-agg)
                                  (:index-type next-boundaryline-agg)
                                  next-boundaryline-collection
                                  (:variable next-boundaryline-agg)
                                  (om/-value next-filter)))


        (let [[new-threshold-colors selection-path-colours] (colorchooser/choose
                                                             (:scheme next-colorchooser-control)
                                                             (keyword (:scale next-colorchooser-control))
                                                             :boundaryline_id
                                                             (keyword (:variable next-colorchooser-control))
                                                             (:records next-data))]

          (when (not= new-threshold-colors next-threshold-colors)
            (om/update! cursor [:controls :threshold-colors] new-threshold-colors))

          (when (not= next-data data)
            (.log js/console (clj->js ["next-data" next-data]))

            (.log js/console (clj->js ["threshold-colors" new-threshold-colors]))
            (.log js/console (clj->js ["selection-path-colors" selection-path-colours]))

            )

          (update-paths comm (partial fetch-boundarylines-fn next-boundaryline-collection) leaflet-map paths path-selections next-path-highlights selection-path-colours)

          )

        ;; (when (or pan-pending (not= next-selection selection))
        ;;   (pan-to-selection owner leaflet-map paths path-selections))
        ))))

(defn mount
  [app-state path elem-id shared]
  (om/root map-component
           app-state
           {:shared shared
            :target (.getElementById js/document elem-id)
            :path path}))
