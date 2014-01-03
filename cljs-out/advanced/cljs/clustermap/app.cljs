(ns clustermap.app
  (:require-macros
   [purnam.js :refer [?]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [purnam.cljs :as pjs :refer [aget-in aset-in js-lookup]]
   [cljs.core.async :refer [<!]]
   [clustermap.api :as api]
   [clustermap.map :as map]))

(def state (atom {}))
(defn set-state
  [key value]
  (swap! state (fn [s] (assoc s key value))))

(defn load-sites
  []
  (go
   (let [pcs (<! (api/portfolio-company-sites))]
     (set-state :portfolio-company-sites pcs)
     (map/display-sites (:map @state) (:portfolio-company-sites @state)))))

(defn init
  []
  (set-state :map (map/create-map))
  (load-sites))
