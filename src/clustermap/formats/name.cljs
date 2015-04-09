(ns clustermap.formats.name
  (:require [clojure.string :as str]))

(defn reverse-name
  "if a name is 'surname, forename' reverse to 'forename surname'"
  [n]
  (some-> n
          (str/split #",")
          reverse
          (#(str/join " " %))))
