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
   [clustermap.full-report :as full-report]
   [clustermap.page-title :as page-title]
   [clustermap.search :as search]))

(def state (atom {:selection nil
                  :all-portfolio-company-sites nil
                  :all-portfolio-companies-summary nil
                  :all-investor-companies-summary nil
                  :search-results {}
                  }))
(defn set-state
  [key value]
  (swap! state (fn [s] (assoc s key value))))

(defn load-all-portfolio-companies-summary
  []
  (go
   (let [pcs (<! (api/portfolio-companies-summary))]
     (set-state :all-portfolio-companies-summary pcs))))

(defn load-all-investor-companies-summary
  []
  (go
   (let [pcs (<! (api/investor-companies-summary))]
     (set-state :all-investor-companies-summary pcs))))

(defn load-all-portfolio-company-sites
  []
  (go
     (let [pcs (<! (api/portfolio-company-sites))]
       (set-state :all-portfolio-company-sites pcs)
       (map/display-sites (:map @state) (:all-portfolio-company-sites @state)))))

(defn process-search-results
  "process a search"
  [results]
  (set-state :search-results (js->clj results)))

(defn process-selection
  [result type]
  ;; (.log js/console (clj->js [result type]))
  (set-state :selection {:type type
                         :value result}))

(defn make-selection
  [[type val]]
  ;; (.log js/console (clj->js val))
  (condp == type
    :portfolio-company [(api/portfolio-company (get val "company_no")) type]
    :investor-company [(api/investor-company (get val "name")) type]
    :constituency [(api/constituency (get val "boundaryline_id")) type]
    nil))

(def event-handlers
  {:search (api/ordered-api api/search process-search-results)
   :select (api/ordered-api make-selection process-selection)})

(defn handle-event
  [type val]
  (let [handler (get event-handlers type)]
    (if-not handler (throw (js/Error. (str "no handler for event-type: " type))))
    (handler val)))

(defn do-init
  []
  (set-state :map (map/create-map))

  ;; (load-all-portfolio-company-sites)
  (load-all-portfolio-companies-summary)
  (load-all-investor-companies-summary)

  (let [comm (chan)]

    (search/mount state "search-component" comm)
    (map-report/mount state "map-report-component")
    (page-title/mount state "page-title-component")

    (go
     (while true
       (let [[type val] (<! comm)]
         (handle-event type val))))))

(defn init
  []
  (cond

   ;; need this delay here when developing, otherwise Leaflet.js init seems to bork cljs REPL init
   js/config.repl
   (js/setTimeout do-init 2000)

   true
   (do-init)))
