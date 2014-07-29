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

(defn make-sequential
  [x]
  (cond (nil? x) nil
        (sequential? x) x
        true [x]))

(defn cache-boundarylines
  "cache a seq of boundarylines in the general and collection-specific caches"
  [app-state boundarylines-path collection-boundarylines-path boundarylines]
  (let [boundarylines-path (make-sequential boundarylines-path)
        collection-boundarylines-path (make-sequential collection-boundarylines-path)]

    (doseq [bl boundarylines]
      (let [boundaryline-id (aget bl "id")
            tolerance (aget bl "tolerance")
            general-cache-path (concat boundarylines-path [boundaryline-id tolerance])
            collection-cache-path (when collection-boundarylines-path (concat collection-boundarylines-path [boundaryline-id tolerance]))]
        ;;       (.log js/console (clj->js ["rx" app-state boundaryline-id tolerance bl]))
        (swap! app-state update-in general-cache-path (fn [old] bl))
        (when collection-cache-path
          (swap! app-state update-in collection-cache-path (fn [old] bl)))))))

(defn fetch-boundarylines
  "fetch a set of boundarylines for a given tolerance in one API call, add the results to the collection-specific and
   general caches. returns a single value true on the go-block channel when complete"
  [app-state boundarylines-path collection-boundarylines-path collection-id tolerance & {:keys [boundaryline-ids bounds]}]
  (let [comm (api/boundaryline-collection-view collection-id tolerance bounds :boundaryline-ids boundaryline-ids :raw true)]
    (go
      (let [bls (<! comm)]
        (cache-boundarylines app-state boundarylines-path collection-boundarylines-path bls))
      true)))

(defn- fetch-from-index
  [index boundaryline-id]
  (let [default-bl (when index (aget index (name boundaryline-id)))
        default-tol (when default-bl (aget default-bl "tolerance"))]
    (when (and default-bl default-tol)
      [default-tol default-bl])))

(defn best-version
  [collection-index collection-cache general-cache zoom boundaryline-id]
  (let [bl-versions (or (get collection-cache boundaryline-id) (get general-cache boundaryline-id))
        i-tol (ideal-tolerance zoom)
        use-tol (best-available-tolerance zoom (keys bl-versions))
        use-bl (get bl-versions use-tol)]
    (if use-bl
      [use-tol use-bl]
      (fetch-from-index collection-index boundaryline-id))))

(defn get-or-fetch-best-boundarylines
  "gets the best boundaryline versions for a zoom level... where the best are not
   immediately available, fetches it asynchronously and returns the best immediately
   available
   - app-state : atom containing app-state
   - boundarylines-path : path in app-state of boundarylines state
   - collection-id : id of boundaryline collection to retrieve from
   - zoom : zoom level to retrieve for
   - boundaryline-ids : ids of boundarylines required
   - bounds : "
  [app-state boundarylines-path collection-id bounds zoom & {:keys [boundaryline-ids]}]
  (let [boundarylines-path (make-sequential boundarylines-path)

        all-collections-path (concat boundarylines-path [:collections])

        general-cache-path (concat boundarylines-path [:boundarylines])
        general-cache (get-in @app-state general-cache-path)

        collection-path (when collection-id (concat all-collections-path [collection-id]))
        collection-index-path (when collection-id (concat collection-path [:index]))
        collection-index (when collection-id (get-in @app-state collection-index-path))
        collection-cache-path (when collection-path (concat collection-path [:boundarylines]))
        collection-cache (get-in @app-state collection-cache-path)

        i-tol (ideal-tolerance zoom)

        best-versions (->> boundaryline-ids
                           (map (fn [blid]
                                  [blid (best-version collection-index collection-cache general-cache zoom blid)]))
                           (into {}))

        required (->> best-versions
                      (filter (fn [[blid [tol bl]]] (not= tol i-tol)))
                      (map first))
        ;;_     (.log js/console (clj->js ["required" required]))
        notify-chan (when (not-empty required)
                      (fetch-boundarylines app-state general-cache-path collection-cache-path collection-id i-tol :boundaryline-ids required :bounds bounds))]

    [best-versions notify-chan]))

(defn boundaryline-collection-rtree
  "atomically fetch or create the rtree index object for a collection"
  [app-state boundarylines-path collection-id]
  (let [boundarylines-path (make-sequential boundarylines-path)
        all-collections-path (concat boundarylines-path [:collections])
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
  [app-state boundarylines-path collection-id]
  (let [boundarylines-path (make-sequential boundarylines-path)
        all-collections-path (concat boundarylines-path [:collections])
        collection-path (concat all-collections-path [collection-id])
        index-path (concat collection-path [:index])
        index (get-in @app-state index-path)
        rtree (boundaryline-collection-rtree app-state boundarylines-path collection-id)]
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
  [app-state boundarylines-path collection-id x y]
  (let [boundarylines-path (make-sequential boundarylines-path)
        all-collections-path (concat boundarylines-path [:collections])
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
