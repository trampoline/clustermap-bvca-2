(ns clustermap.routes
  (:require [sablono.core :as html :refer [html] :include-macros true]))

(def type-name-keys
  {:portfolio-company :name
   :investor-company :name
   :constituency :compact_name})

(defn name-for
  [type obj]
  (get obj (get type-name-keys type)))

(defn portfolio-company-path
  [app-state obj]
  "l'portfolio company"
  )

(defn investor-company-path
  [app-state obj]
  "l'investor")

(defn constituency-path
  [app-state obj]
  "l'constituency")

(def type-paths
  {:portfolio-company portfolio-company-path
   :investor-company investor-company-path
   :constituency constituency-path})

(defn path-for
  [app-state type obj]
  (-> type-paths
      (get type)
      (apply [obj])))

(defn link-for
  [app-state type obj]
  (html
   [:a {:href (path-for app-state type obj)}
    (name-for type obj)]))
