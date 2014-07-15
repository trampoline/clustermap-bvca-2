(ns clustermap.data.picker)

(defn pick-variable
  [variable data]
  (->> data
       (map (fn [d] (get d variable)))))
