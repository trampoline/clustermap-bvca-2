(ns clustermap.app
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [chan <! put! sliding-buffer]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [clustermap.api :as api]
   [clustermap.map :as map]
   [clustermap.components.map-report :as map-report]
   [clustermap.components.full-report :as full-report]
   [clustermap.components.page-title :as page-title]
   [clustermap.components.search :as search]))

(def state (atom {:selector {}

                  :selection nil
                  :selection-portfolio-company-stats nil
                  :selection-portfolio-company-sites {}

                  :all-portfolio-company-stats nil

                  :search-results {}
                  }))
(defn set-state
  [key value]
  (swap! state (fn [s] (assoc s key value))))

(defn load-all-portfolio-company-stats
  []
  (go
   (let [pcs (<! (api/portfolio-company-stats))]
     (set-state :all-portfolio-company-stats pcs))))

(defn process-search-results
  "process a search"
  [results]
  (set-state :search-results (js->clj results)))

(defn process-selection
  [[selection selection-portfolio-company-stats] type]
  ;; (.log js/console (clj->js [result type]))
  (set-state :selection {:type type
                         :value selection})
  (set-state :selection-portfolio-company-stats selection-portfolio-company-stats))

(defn make-selection
  "set the selection
   - extractor selector id
   - record selector
   - kick-off selection retrievals"
  [[type val]]
  ;; (.log js/console (clj->js val))
  (let [id (condp = type
             :portfolio-company (get val "company_no")
             :investor-company (get val "name")
             :constituency (get val "boundaryline_id"))
        selector {type id}]

    (set-state :selector selector)

    (condp = type
      :portfolio-company [[(api/portfolio-company id)
                           (api/portfolio-company-stats selector)
                           (api/portfolio-company-sites selector)] type]
      :investor-company [[(api/investor-company id)
                          (api/portfolio-company-stats selector)
                          (api/portfolio-company-sites selector)] type]
      :constituency [[(api/constituency id)
                      (api/portfolio-company-stats selector)
                      (api/portfolio-company-sites selector)] type]
      nil)))

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
  (load-all-portfolio-company-stats)

  (let [comm (chan)]

    (search/mount state "search-component" comm)
    (map-report/mount state "map-report-component")
    (page-title/mount state "page-title-component")
    (full-report/mount state "full-report-component")

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
