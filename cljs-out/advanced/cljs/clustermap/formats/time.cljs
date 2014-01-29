(ns clustermap.formats.time)

(defn get-year
  [t]
  (some-> t
          js/Date.
          .getYear
          (+ 1900)))
