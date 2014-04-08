(ns clustermap.rtree)


(defn rtree-index
  "take a geojson boundaryline collection index and stuff it into an rtree

   first put each geojson geometry into a geojson featurecollection, along
   with properties"
  [js-index]
  (let [rtree (js/RTree. 10)
        keys (js/Object.keys js-index)
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
            _ (aset feature "geometry" geom)]
        (.push features feature)))
    (.geoJSON rtree js-feature-coll)
    rtree))

(defn point-in-polygons
  [js-index x y]
  (let [hits (.search js-index (clj->js {:x x :y y :w 0 :h 0}))]
    (->> hits
         (filter (fn [hit]
                   (js/gju.pointInPolygon (clj->js {:type "Point"
                                                    :coordinates [x y]})
                                          (.-geometry hit)))))))
