(ns clustermap.app
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
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
     (map/display-sites (:map @state) (:portfolio-company-sites @state))
     )))

(defn do-init
  []
  (set-state :map (map/create-map))
  (load-sites))

(defn init
  []
  (cond

   js/config.repl
   (js/setTimeout do-init 1000)

   true
   do-init))
