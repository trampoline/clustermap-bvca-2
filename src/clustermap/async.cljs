(ns clustermap.async
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as async :refer [chan <! >! onto-chan timeout]]))

(defn map-async
  "asynchronously maps a function over some colls"
  [f & colls]
  (let [coll-chs (->> colls (map (fn [coll]
                                   (let [ch (chan)]
                                     (onto-chan ch coll)
                                     ch))))]
    (async/map f coll-chs)))

(defn dorun-async
  "async consume all values from a channel"
  [ch & {:keys [log delay]}]
  (go
   (while (when-let [v (<! ch)]
            (if delay (<! (timeout delay)))
            (if log (.log js/console (clj->js v)))
            v)))
  nil)
