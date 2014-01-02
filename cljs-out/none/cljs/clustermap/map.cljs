(ns clustermap.map
  (:require
   [domina :as dom]
   [domina.css :as css]
   [domina.xpath :as xpath]
   [domina.events :as events]
   [purnam.cljs :refer [aget-in aset-in]]
   [jayq.core :as jayq :refer [$]]
   [cljs.core.async :refer [put! chan <!]])
  (:require-macros
   [purnam.js :as p]))

(def map (atom nil))

(defn create-map
  []
  (let [factory-fn (-> js/L .-mapbox .-map)
        map (factory-fn "map" "mccraigmccraig.map-gqkcbi1g")]
    (.fitBounds map
                (p/arr [[61 2.5] [48.7 -11.5]])
                {"paddingTopLeft" (p/arr [0 0])
                 "paddingBottomRight" (p/arr [0 0])})
    map))

(defn pan-to-show
  [map & all-bounds]
  (let [fb (first all-bounds)
        fb-copy (new js/L.LatLngBounds (.getSouthWest fb) (.getNorthEast fb))
        super-bounds (reduce (fn [sb bounds] (.extend sb bounds))
                             fb-copy
                             (rest fb))]
    (.fitBounds map super-bounds)))

(defn init
  []
  (reset! map (create-map)))
