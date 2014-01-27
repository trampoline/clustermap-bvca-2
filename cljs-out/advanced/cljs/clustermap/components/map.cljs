(ns clustermap.components.map
  (:require-macros [hiccups.core :as hiccups])
  (:require
   [clojure.set :as set]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [jayq.core :refer [$]]
   [sablono.core :as html :refer [html] :include-macros true]
   [hiccups.runtime :as hiccupsrt]))

(defn locate-map
  [m]
  (.fitBounds m
              (clj->js [[59.54 2.3] [49.29 -11.29]])
              (clj->js {"paddingTopLeft" [0 0]
                        "paddingBottomRight" [0 0]})))

(defn create-map
  [id-or-el]
  (let [m ((-> js/L .-map) id-or-el #js {:zoomControl false})
        tiles ((-> js/L .-mapbox .-tileLayer) "mccraigmccraig.map-gqkcbi1g" #js {:detectRetina true})
        zoom ((-> js/L .-control .-zoom) #js {:position "bottomright"})]
    (.addLayer m tiles)
    (.addControl m zoom)
    (locate-map m)

    {:leaflet-map m
     :markers (atom [])
     :paths (atom [])}))

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
  (let [fb (first all-bounds)
        fb-copy (new js/L.LatLngBounds (.getSouthWest fb) (.getNorthEast fb))
        super-bounds (reduce (fn [sb bounds] (.extend sb bounds))
                             fb-copy
                             (rest all-bounds))]
    (.fitBounds m super-bounds)))

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
  [location-sites]
  (hiccups/html
   (->> location-sites
        (map (fn [site]
               ;; (.log js/console (clj->js site))
               (hiccups/html [:p (:name site)]))))))

(defn create-marker
  [leaflet-map location-sites]
  ;; extract the location-sites from the first record... they are all the same
  (if-let [latlong (some-> location-sites first :location reverse clj->js)]
    (let [marker (js/L.marker latlong)
          popup-content (marker-popup-content location-sites)]
      ;; (.log js/console popup-content)
      (.bindPopup marker popup-content)
      (.addTo marker leaflet-map)
      marker)))

(defn update-marker
  [leaflet-map marker location]
  (.setPopupContent marker (marker-popup-content location)))

(defn remove-marker
  [leaflet-map marker]
  (.removeLayer leaflet-map marker))

(defn update-markers
  [leaflet-map markers-atom old-locations new-locations]
  (let [markers @markers-atom
        marker-keys (-> markers keys set)
        location-keys (-> new-locations keys set)

        update-marker-keys (set/intersection marker-keys location-keys)
        new-marker-keys (set/difference location-keys marker-keys)
        remove-marker-keys (set/difference marker-keys location-keys)

        new-markers (->> new-marker-keys
                         (map (fn [k] [k (create-marker leaflet-map (get new-locations k))]))
                         (into {}))

        updated-markers (->> update-marker-keys
                             (map (fn [k] [k (update-marker leaflet-map (get markers k) (get new-locations k))]))
                             (into {}))

        _ (doseq [k remove-marker-keys] (remove-marker leaflet-map (get markers k)))]

    (reset! markers-atom (merge updated-markers new-markers))))

(defn postgis-envelope->latlngbounds
  "turns a PostGIS envelope into a L.LatLngBounds"
  [envelope]
  (let [{[[[miny0 minx0] [maxy1 minx1] [maxy2 maxx2] [miny3 maxx3] [miny4 minx4] :as inner] :as coords] "coordinates" :as clj-envelope} (js->clj envelope)]
    (js/L.latLngBounds (clj->js [[minx0 miny0] [maxx2 maxy2]]))))

(defn create-path
  [leaflet-map uk-constituencies boundaryline-id]
  (when-let [cons (aget uk-constituencies boundaryline-id)]
    (let [path (js/L.geoJson (aget cons "geojson"))
          bounds (postgis-envelope->latlngbounds (aget cons "envelope"))]
      (.addTo path leaflet-map)
      {:path path
       :bounds bounds})))

(defn update-path
  [leaflet-map uk-constituencies path boundaryline-id])

(defn remove-path
  [leaflet-map path]
  (some->>
   path
   :path
   (.removeLayer leaflet-map)))

(defn update-paths
  [leaflet-map uk-constituencies paths-atom old-locations new-locations]
  (let [paths @paths-atom
        path-keys (-> paths keys set)
        location-path-keys (->> new-locations vals (apply concat) (map (comp :uk_constituencies :boundarylinecolls)) (apply concat) set)

        update-path-keys (set/intersection path-keys location-path-keys)
        new-path-keys (set/difference location-path-keys path-keys)
        remove-path-keys (set/difference path-keys location-path-keys)

        new-paths (->> new-path-keys
                       (map (fn [k] [k (create-path leaflet-map uk-constituencies k)]))
                       (into {}))
        updated-paths (->> update-path-keys
                           (map (fn [k] [k (update-path leaflet-map uk-constituencies (get paths k) k)]))
                           (into {}))
        _ (doseq [k remove-path-keys] (remove-path leaflet-map (get paths k)))]

    (reset! paths-atom (merge updated-paths new-paths))))

(defn pan-to-selection
  [leaflet-map paths]
  (let [bounds (some->> paths vals (map :bounds))]
    (when bounds
      (apply pan-to-show leaflet-map bounds))))

(defn map-component
  "put the leaflet map as state in the om component"
  [{:keys [selection selection-portfolio-company-sites selection-portfolio-company-locations uk-constituencies]} owner]
  (reify
    om/IRenderState
    (render-state [this {{:keys [leaflet-map markers paths]} :map locations :locations}]

      (let [new-locations (if selection-portfolio-company-locations (om/value selection-portfolio-company-locations))]
        (when-not (identical? locations new-locations)
          ;; update markers and paths, then store locations in the state for comparison next render
          (update-markers leaflet-map markers locations new-locations)
          (update-paths leaflet-map uk-constituencies paths locations new-locations)

          (om/set-state! owner :locations new-locations)

          (pan-to-selection leaflet-map @paths)))

      (html [:div.map {:ref "map"}]))

    om/IDidMount
    (did-mount [this node]
      (om/set-state! owner :map (create-map node)))))

(defn mount
  [app-state elem-id comm]
  (om/root app-state {:comm comm} map-component (.getElementById js/document elem-id)))
