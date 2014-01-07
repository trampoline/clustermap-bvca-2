(ns clustermap.app
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [<!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [clustermap.api :as api]
   [clustermap.map :as map]
   [clustermap.map-report :as map-report]))

(def state (atom {:selection {:type nil
                              :value nil}
                  :all-portfolio-company-sites []
                  :all-portfolio-companies-summary {}
                  :message "boo"
                  }))
(defn set-state
  [key value]
  (swap! state (fn [s] (assoc s key value))))

(defn load-all-portfolio-companies-summary
  []
  (go
   (let [pcs (<! (api/all-portfolio-companies-summary))]
     (set-state :all-portfolio-companies-summary pcs))))

(defn load-all-portfolio-company-sites
  []
  (go
     (let [pcs (<! (api/all-portfolio-company-sites))]
       (set-state :all-portfolio-company-sites pcs)
       (map/display-sites (:map @state) (:all-portfolio-company-sites @state)))))

(defn do-init
  []
  (set-state :map (map/create-map))
  (load-all-portfolio-company-sites)
  (map-report/mount state))

(defn init
  []
  (cond

   js/config.repl
   (js/setTimeout do-init 1000)

   true
   (do-init)))
