(ns clustermap.boundarylines)

(def ^:private boundarylines (atom nil))

(def ^:private zoom-tolerances
  [[7 0.01]
   [9 0.002]
   [12 0.0003]])

(defn choose-tolerance
  [zoom]
  (or (some (fn [[z t]] (when (<= zoom z) t)) zoom-tolerances)
      0))

(defn- create-boundarylines-map
  [blseq]
  (->> blseq
       (reduce (fn [m bl]
                 (aset m (aget bl "id") (clj->js {(aget bl "tolerance") bl}))
                 m)
               #js {})))

(defn init-boundarylines
  "initialise with minimum resolution versions"
  [blseq]
  (reset! boundarylines (create-boundarylines-map blseq))
  nil)

(defn get-boundaryline
  [id zoom]
  (let [versions (aget @boundarylines id)]


    )
  )
