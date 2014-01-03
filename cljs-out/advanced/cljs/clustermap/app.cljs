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

(defn init
  []
  ;; TODO remove this timeout when we aren't starting a REPL : the
  ;; map creation seems to cause the crosspagechannel used by the REPL to fail
  (js/setTimeout (fn []
                   (set-state :map (map/create-map))
                   (load-sites))
                 1000))
