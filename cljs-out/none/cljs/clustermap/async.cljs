(ns clustermap.async
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as async :refer [chan <! >! onto-chan]]))

(defn map-async
  [f & colls]
  (let [coll-chs (->> colls (map (fn [coll]
                                   (let [ch (chan)]
                                     (onto-chan ch coll)
                                     ch))))]
    (async/map f coll-chs)))

(defn dorun-async
  [ch & {:keys [log]}]
  (go
   (while (when-let [v (<! ch)]
            (if log (.log js/console (clj->js v)))
            v)))
  nil)
