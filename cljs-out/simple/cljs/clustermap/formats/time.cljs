(ns clustermap.formats.time
  (:require [cljs-time.format :as format]
            [cljs-time.coerce :as coerce]))

(defn get-year
  [t]
  (some-> t
          js/Date.
          .getYear
          (+ 1900)))

(def date-formatter (format/formatters :date))

(defn format-date
  [t]
  (some->> t
           coerce/from-string
           (format/unparse date-formatter)))
