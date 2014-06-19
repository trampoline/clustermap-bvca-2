(ns clustermap.routes
  (:require [sablono.core :as html :refer-macros [html]]
            [clojure.string :as str]))

(def type-name-keys
  {:portfolio-company :name
   :investor-company :name
   :constituency :compact_name})

(defn name-for
  [type obj]
  (get obj (get type-name-keys type)))

(defn portfolio-company-path
  [view-id obj]
  (str "#/" (name view-id) "/portfolio-company/" (:company_no obj)))

(defn investor-company-path
  [view-id obj]
  (str "#/" (name view-id) "/investor-company/" (:investor_company_uid obj)))

(defn constituency-path
  [view-id obj]
  (str "#/" (name view-id) "/constituency/" (:boundaryline_id obj)))

(defn no-selection-path
  [view-id _]
  (str "#/" (name view-id)))

(def type-paths
  {:portfolio-company portfolio-company-path
   :investor-company investor-company-path
   :constituency constituency-path
   nil no-selection-path})

(defn path-for
  [view-id type obj]
  (-> type-paths
      (get type)
      (apply [view-id obj])))

(defn link-for
  [view-id type obj]
  (html
   [:a {:href (path-for view-id type obj)}
    (name-for type obj)]))

(defn path-for-view
  [current-route-fn view-id]
  (let [r (current-route-fn)
        comps ["#" (name view-id) (:type r) (:id r)]]
    (str/join "/" (filter identity comps))))
