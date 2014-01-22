(ns clustermap.formats.string)

(defn pluralize [n word & [irreg]]
  (if (== n 1)
    word
    (or irreg (str word "s"))))
