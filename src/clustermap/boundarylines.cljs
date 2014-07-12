(ns clustermap.boundarylines
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as async :refer [<! chan close! put! sliding-buffer to-chan]]
   [clustermap.api :as api]))

(def ^:private zoom-tolerances
  [[7 0.01]
   [9 0.002]
   [12 0.0003]
   [nil 0]])

(defn- ideal-tolerance
  [zoom]
  (or (some (fn [[z t]] (when (and z (<= zoom z)) t)) zoom-tolerances)
      0))

(defn- best-available-tolerance
  [zoom available-tolerances]
  (let [i-tol (ideal-tolerance zoom)
        coarser (->> zoom-tolerances
                     (map last)
                     (filter (fn [t] (> t i-tol)))
                     reverse)
        finer (->> zoom-tolerances
                   (map last)
                   (filter (fn [t] (< t i-tol))))

        avail-set (set available-tolerances)]

    (or (get avail-set i-tol)
        (some avail-set finer)
        (some avail-set coarser))))


(defn- fetch-boundaryline
  "fetch a boundaryline for a given tolerance and add it to the cache"
  [app-state korks boundaryline-id tolerance]
;;  (.log js/console (clj->js ["rq" app-state boundaryline-id tolerance]))
  (let [comm (api/boundarylines boundaryline-id tolerance :raw true)
        use-korks (if (sequential? korks) korks [korks])
        path (concat use-korks [boundaryline-id tolerance])]
    (go
     (let [bl (<! comm)]
;;       (.log js/console (clj->js ["rx" app-state boundaryline-id tolerance bl]))
       (swap! app-state update-in path (fn [old] bl))))))


(defn- fetch-from-index
  [index boundaryline-id]
  (let [default-bl (when index (aget index (name boundaryline-id)))
        default-tol (when default-bl (aget default-bl "tolerance"))]
    (when (and default-bl default-tol)
      [default-tol default-bl])))

(defn get-or-fetch-best-boundaryline
  "gets the best boundaryline version for a zoom level...
   if the best isn't available, fetches it async and immediately
   returns the next best available
   - default : default value to return if nothing currently available
   - min-zoom : if (<= zoom min-zoom) do nothing and return the default
   returns [tolerance, boundaryline] or default if nothing is available or
           (<= zoom min-zoom)"
  [app-state korks collection-id boundaryline-id zoom & {:keys [min-zoom]}]
  ;;  (.log js/console (clj->js ["get-or-fetch" app-state korks boundaryline-id zoom]))
  (let [all-collections-path (if (sequential? korks) korks [korks])
        collection-path (concat all-collections-path [collection-id])
        index-path (concat collection-path [:index])
        index (get-in @app-state index-path)]

    (if (and min-zoom (<= zoom min-zoom))

      ;; zoom <= min-zoom... fetch from the index if it exists
      (fetch-from-index index boundaryline-id)

      ;; zoom > min-zoom...
      (let [boundarylines-path (concat collection-path [:boundarylines])
            boundarylines (get-in @app-state boundarylines-path)

            bl-versions (get boundarylines boundaryline-id)
            i-tol (ideal-tolerance zoom)
            use-tol (best-available-tolerance zoom (keys bl-versions))
            use-bl (get-in boundarylines [boundaryline-id use-tol])]

        (when (not= i-tol use-tol)
          (fetch-boundaryline app-state boundarylines-path boundaryline-id i-tol))

        (if use-bl
          [use-tol use-bl]

          (fetch-from-index index boundaryline-id))))))

(defn boundaryline-collection-rtree
  "atomically fetch or create the rtree index object for a collection"
  [app-state boundaryline-collections-path collection-id]
  (let [all-collections-path (if (sequential? boundaryline-collections-path) boundaryline-collections-path [boundaryline-collections-path])
        collection-path (concat all-collections-path [collection-id])
        rtree-path (concat collection-path [:rtree])]
    (swap! app-state update-in rtree-path (fn [old] (if old old (js/RTree. 10))))
    (get-in @app-state rtree-path)))

(defn- rtree-index
  "take a geojson boundaryline collection index and stuff it into an rtree

   first put each geojson geometry into a geojson featurecollection, along
   with properties (including the original index object, for later retrieval)"
  [rtree js-index]
  (let [keys (js/Object.keys js-index)
        features (array)
        js-feature-coll (clj->js {:type "FeatureCollection"})
        _ (aset js-feature-coll "features" features)]
    (doseq [k keys]
      (let [obj (aget js-index k)
            geom (aget obj "geojson")
            feature (clj->js {:type "Feature"
                              :properties {:id (aget obj "id")
                                           :boundaryline_id (aget obj "id")
                                           :compact_name (aget obj "compact_name")}})
            ;; use aset to avoid any recodings of js objects
            _ (aset feature "geometry" geom)
            _ (aset (aget feature "properties") "index_object" obj)]
        (.push features feature)))
    (.geoJSON rtree js-feature-coll)
    rtree))

(defn fetch-boundaryline-collection-index
  [app-state boundaryline-collections-path collection-id]
  (let [all-collections-path (if (sequential? boundaryline-collections-path) boundaryline-collections-path [boundaryline-collections-path])
        collection-path (concat all-collections-path [collection-id])
        index-path (concat collection-path [:index])
        index (get-in @app-state index-path)
        rtree (boundaryline-collection-rtree app-state boundaryline-collections-path collection-id)]
    (when-not index
      (go
        (let [bl-coll-index (<! (api/boundaryline-collection-index collection-id :raw true))]

          (swap! app-state update-in index-path (fn [old] (if old old bl-coll-index)))

          ;; add to the rtree index if this swap! was succesful
          (if (= (get-in @app-state index-path) bl-coll-index)
            (rtree-index rtree bl-coll-index)))))))


(defn point-in-boundarylines
  "use the rtree index to find which paths from a collection a point is inside.
   returns a list of boundaryline objects"
  [app-state boundaryline-collections-path collection-id x y]
  (let [all-collections-path (if (sequential? boundaryline-collections-path) boundaryline-collections-path [boundaryline-collections-path])
        collection-path (concat all-collections-path [collection-id])
        rtree-path (concat collection-path [:rtree])
        rtree (get-in @app-state rtree-path)
        hits (when rtree (.search rtree (clj->js {:x x :y y :w 0 :h 0})))]
    (->> (or hits [])
         (filter (fn [hit]
                   (js/gju.pointInPolygon (clj->js {:type "Point"
                                                    :coordinates [x y]})
                                          (.-geometry hit))))
         (map (fn [hit]
                {:id (-> hit .-properties .-id)
                 :compact_name (-> hit .-properties .-compact_name)})))))
