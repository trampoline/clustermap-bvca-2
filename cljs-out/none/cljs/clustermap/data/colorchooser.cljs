(ns clustermap.data.colorchooser
  (:require [clustermap.data.picker :as picker]
            [clustermap.data.colorbrewer :as colorbrewer]))

(defn linear-scale
  [min max steps]
  (let [step (/ (- max min) steps)]
    (->> (range 1 steps)
         (map (fn [i] (+ min (* i step)))))))

(defn log-scale
  [min max steps]
  (let [translation (- 1 min) ;; translate to avoid NaNs

        log-min (Math/log min)
        log-max (Math/log (+ max translation))

        log-linear-scale (linear-scale 1 log-max steps)]
    (->> log-linear-scale
         (map (fn [n] (- (Math/pow Math/E n) translation))))))

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
  [color-scheme-spec scale key variable data]
  (let [color-scheme (get-in colorbrewer/schemes color-scheme-spec )
        col-count (count color-scheme)
        values (picker/pick-variable variable data)
        min-value (apply min values)
        max-value (apply max values)
        thresholds (if (= scale :log)
                     (log-scale min-value max-value col-count)
                     (linear-scale min-value max-value col-count))
        chooser (partial choose-from-scheme color-scheme thresholds)
        value-colors (->> data
                          (map (fn [r]
                                 [(get r key) (chooser (get r variable))]))
                          (into {}))
        threshold-colors (map vector (concat thresholds [max-value]) color-scheme)]
    [threshold-colors value-colors]))
