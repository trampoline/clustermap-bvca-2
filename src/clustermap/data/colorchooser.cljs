(ns clustermap.data.colorchooser
  (:require [clustermap.data.picker :as picker]))


(def brewer-green
  ["#f7fcfd" "#e5f5f9" "#ccece6" "#99d8c9" "#66c2a4" "#41ae76" "#238b45" "#06d2c" "#0441b"])

(defn linear-scale
  [min max steps]
  (let [step (/ (- max min) steps)]
    (->> (range 1 steps)
         (map (fn [i] (+ min (* i step)))))))

(defn log-scale
  [min max steps]
  (let [log-min (Math/log min)
        log-max (Math/log max)
        log-linear-scale (linear-scale log-min log-max steps)]
    (->> log-linear-scale
         (map (fn [n] (Math/pow Math/E n))))))

(defn choose-from-scheme
  [scheme thresholds value]
  (let [scheme-thresholds (map vector thresholds scheme)
        chosen (->> scheme-thresholds
                    (filter (fn [[t i]] (<= value t)))
                    first
                    last)]
    (or chosen (last scheme))))

(defn choose
  "return a map of {key-value => colours}"
  [color-scheme scale key variable data]

  (let [col-count (count color-scheme)
        values (picker/pick-variable variable data)
        min-value (apply min values)
        max-value (apply max values)
        thresholds (if (= scale :log)
                     (log-scale min-value max-value col-count)
                     (linear-scale min-value max-value col-count))
        chooser (partial choose-from-scheme color-scheme thresholds)]
    (->> data
         (map (fn [r]
                [(get r key) (chooser (get r variable))]))
         (into {}))))
