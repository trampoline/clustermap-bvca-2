(ns clustermap.app
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [chan <! put! sliding-buffer]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [clustermap.api :as api]
   [clustermap.map :as map]
   [clustermap.map-report :as map-report]
   [clustermap.search :as search]))

(def state (atom {:selection nil
                  :all-portfolio-company-sites nil
                  :all-portfolio-companies-summary nil
                  :all-investor-companies-summary nil
                  :search-results nil
                  }))
(defn set-state
  [key value]
  (swap! state (fn [s] (assoc s key value))))

(defn load-all-portfolio-companies-summary
  []
  (go
   (let [pcs (<! (api/all-portfolio-companies-summary))]
     (set-state :all-portfolio-companies-summary pcs))))

(defn load-all-investor-companies-summary
  []
  (go
   (let [pcs (<! (api/all-investor-companies-summary))]
     (set-state :all-investor-companies-summary pcs))))

(defn load-all-portfolio-company-sites
  []
  (go
     (let [pcs (<! (api/all-portfolio-company-sites))]
       (set-state :all-portfolio-company-sites pcs)
       (map/display-sites (:map @state) (:all-portfolio-company-sites @state)))))

(defn process-search-results
  [comm]
  (go
   (while true
     (let [srchan (<! comm)
           sr (<! srchan)]
       (set-state :search-results (js->clj sr))))))

(defn handle-event
  [{:keys [searches]} type val]

  (cond
     (= type :search) (put! searches (api/search val))))

(defn do-init
  []
  (set-state :map (map/create-map))

  ;; (load-all-portfolio-company-sites)
  (load-all-portfolio-companies-summary)
  (load-all-investor-companies-summary)

  (let [comm (chan)
        {:keys [searches] :as order-ops} {:searches (chan)}
        _ (process-search-results searches)]

    (search/mount state "search-component" comm)
    (map-report/mount state "map-report-content")

    (go
     (while true
       (let [[type val] (<! comm)]

         (handle-event order-ops type val))))))

(defn init
  []
  (cond

   ;; need this delay here when developing, otherwise Leaflet.js init seems to bork cljs REPL init
   js/config.repl
   (js/setTimeout do-init 2000)

   true
   (do-init)))
