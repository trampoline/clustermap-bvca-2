(ns clustermap.app
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [goog.events :as events]
   [cljs.core.async :refer [chan <! put! sliding-buffer]]
   [secretary.core :as secretary :include-macros true :refer [defroute]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [clustermap.api :as api]
   [clustermap.routes :as routes]
   [clustermap.nav :as nav]
   [clustermap.ganalytics :as ga]
   [clustermap.components.mount :as mount]
   [clustermap.components.map :as map]
   [clustermap.components.filter :as filter]
   [clustermap.components.select-chooser :as select-chooser]
   [clustermap.components.color-scale :as color-scale]
   [clustermap.components.map-report :as map-report]
   [clustermap.components.full-report :as full-report]
   [clustermap.components.page-title :as page-title]
   [clustermap.components.search :as search]
   [clustermap.boundarylines :as bl]
   [clustermap.data.colorchooser :as colorchooser])
  (:import [goog History]
           [goog.history EventType]))

(def state (atom {
;;;;;;;;;;;;;;;;;;;;;;;;;

                  :boundarylinesa
                  {
                   :collections {
                                 "uk_boroughs" {:index nil
                                               :rtree nil
                                               :boundarylines {}}
                                 "uk_wards" {:index nil
                                             :rtree nil
                                             :boundarylines {}}
                                 "uk_regions" {:index nil
                                               :rtree nil
                                               :boundarylines {}}}
                   :boundarylines {}}

                  :filter {:components {}
                           :compiled nil}

                  :map {:type :geoport
                        :datasource "companies"
                        :boundaryline-collections [[0 "uk_regions"] [5 "uk_counties"] [7 "uk_boroughs"] [10 "uk_wards"]]
                        :controls {:initial-bounds [[59.54 2.3] [49.29 -11.29]]
                                   :zoom nil
                                   :bounds nil
                                   :boundaryline-collection nil
                                   :boundaryline-agg {:type :stats
                                                      :index "companies"
                                                      :index-type "company"
                                                      :key "boundaryline_id"
                                                      :variable "!latest_employee_count"}
                                   :colorchooser {:scheme [:Oranges :9]
                                                  :scale :log
                                                  :variable :sum}}
                        :data nil}

                  :turnover_timeline {:type :timeline
                                      :datasource "company_accounts"
                                      :controls {:variable "accounts_date"
                                                 :after "2003-01-01"
                                                 :before "2012-01-01"
                                                 :interval "year"}
                                      :data nil}

                  :table  {:type :table
                           :datasource "companies"
                           :controls {:order nil
                                      :offset 0
                                      :limit 50
                                      :variables ["!name" "!postcode" "!formation_date" "!sic07"
                                                  "!latest_accounts_date" "!latest_employee_count"
                                                  "!latest_turnover"]}
                           :data nil}


;;;;;;;;;;;;;;;;;;;;;;;;;;

                  :uk-constituencies nil
                  :uk-constituencies-rtree nil
                  :zoom nil
                  :view :map

                  :all-investment-stats nil
                  :all-portfolio-company-site-stats nil

                  :search-results {}

                  :selector nil
                  :selection-investments-table-view nil
                  :selection-investment-aggs-table-view nil

                  :selection nil
                  :selection-investment-stats nil
                  :selection-investment-account-timelines nil
                  :selection-investment-aggs nil
                  :selection-investments nil
                  :selection-portfolio-company-locations nil
                  }))

(defn new-state
  "create a new app-state based on the old state
   - state : the old state
   - path-values : a seq of [key-or-path value-or-fn] pairs
       - key-or-path : a single key or sequence of keys
                       describing a path into the state
       - value-or-fn : a new value or a function to mutate
                       the previous value "
  [state path-values]
  (reduce (fn [s [key-or-path value-or-fn]]
            (let [path (if (sequential? key-or-path) key-or-path [key-or-path])]
              (update-in s path (if (fn? value-or-fn) value-or-fn (fn [ov] value-or-fn)))))
          state
          path-values))

(defn set-state
  [& {:as path-values}]
  (swap! state new-state path-values))

(defn get-state
  [& path]
  (get-in @state (flatten path)))

;;;;;;;;;;;;;;;;;;;;;;;; load and index boundarylines

(def bl-collections ["uk_regions" "uk_boroughs" "uk_wards"])

(defn load-boundaryline-collection-indexes
  []
  (doseq [blcoll bl-collections]
    (bl/fetch-boundaryline-collection-index state :boundarylines blcoll)))

;;;;;;;;;;;;;;;;;;;;;;;


(defn load-all-investment-stats
  []
  (go
    (let [all-investment-stats (<! (api/investment-stats))]
      (set-state :all-investment-stats all-investment-stats))))



(defn process-search-results
  "process a search"
  [results]
  (set-state :search-results (js->clj results)))

(defn process-selection
  [[selection
    selection-investment-stats
    selection-investment-account-timelines
    selection-investment-aggs
    selection-investments
    selection-portfolio-company-locations] type]
  ;; (.log js/console (clj->js [result type]))
  (set-state :selection {:type type :value selection}
             :selection-investment-stats selection-investment-stats
             :selection-investment-account-timelines selection-investment-account-timelines
             :selection-investment-aggs selection-investment-aggs
             :selection-investments selection-investments
             :selection-portfolio-company-locations) selection-portfolio-company-locations)

(defn make-selection
  "set the selection
   - extractor selector id
   - record selector
   - kick-off selection retrievals"
  [[type id]]
  ;; (.log js/console (clj->js val))
  (let [selector (if type {type id} {})
        old-selector (:selector @state)]

    (when (not= selector old-selector)
      (set-state :selector selector)

      (condp = type
        :portfolio-company [[(api/portfolio-company id)
                             (api/investment-stats selector)
                             (api/investment-account-timelines selector)
                             (api/investment-aggs selector)
                             (api/investments selector)
                             (api/portfolio-company-locations selector)] type]
        :investor-company [[(api/investor-company id)
                            (api/investment-stats selector)
                            (api/investment-account-timelines selector)
                            (api/investment-aggs selector)
                            (api/investments selector)
                            (api/portfolio-company-locations selector)] type]
        :constituency [[(api/constituency id)
                        (api/investment-stats selector)
                        (api/investment-account-timelines selector)
                        (api/investment-aggs selector)
                        (api/investments selector)
                        (api/portfolio-company-locations selector)] type]
        [[nil
          (api/investment-stats selector)
          (api/investment-account-timelines selector)
          (api/investment-aggs selector)
          (api/investments selector)
          nil ;; (api/portfolio-company-locations selector)
          ] type]))))

(defn change-view
  [view]
  (let [view (keyword view)]
    (when (not= view (:view @state))
      (set-state :view view)
      (nav/change-view (name view)))))

(def history (History.))

(defn set-route
  [view type id]
  (cond
   (and type id)
   (.setToken history (str "/" (-> view (or "map") name) "/" (name type) "/" (name id)))

   view
   (.setToken history (str "/" (name view)))

   true
   (.setToken history (str ""))))

(defn parse-route
  []
  (let [fragment (.getToken history)
        [_ view type id] (re-matches #"/([^/]+)(?:/([^/]+)/(.+))?$" fragment)
        type (when (> (some-> type str/trim count) 0) (str/trim type))
        id (when (> (some-> id str/trim count) 0) (str/trim id))]
    {:view view
     :type type
     :id id}))

(def change-view-path
  (partial routes/path-for-view parse-route))

(defn set-selection-route
  [[type id]]
  (let [{:keys [view]} (parse-route)]
    (set-route view type id)))

(defn set-view-route
  [view]
  (let [{:keys [type id]} (parse-route)]
    (set-route view type id)))

(defn update-selection-investment-aggs-table-view
  [table-view]
  (go
    (let [new-view (merge (:selection-investment-aggs-table-view @state) table-view)
          r (<! (api/investment-aggs (merge (:selector @state) new-view)))]
      (set-state :selection-investment-aggs-table-view new-view
                 :selection-investment-aggs r))))

(defn update-selection-investments-table-view
  [table-view]
  (go
    (let [new-view (merge (:selection-investments-table-view @state) table-view)
          r (<! (api/investments (merge (:selector @state) new-view)))]
      (set-state :selection-investments-table-view new-view
                 :selection-investments r))))

(def event-handlers
  {:search (api/ordered-api api/search process-search-results)
   :select set-selection-route
   :route-select (api/ordered-api make-selection process-selection)
   :change-view set-view-route
   :route-change-view change-view
   :update-selection-investment-aggs-table-view update-selection-investment-aggs-table-view
   :update-selection-investments-table-view update-selection-investments-table-view})

(defn handle-event
  [type val]
  (let [handler (get event-handlers type)]
    (if-not handler (throw (js/Error. (str "no handler for event-type: " type))))
    (handler val)))

;;; routing

(defn init-routes
  [comm]

  (defroute "" []
    (put! comm [:route-select nil]))

  (defroute "/" []
    (put! comm [:route-select nil]))

  (defroute "/:view" [view]
    (put! comm [:route-change-view view])
    (put! comm [:route-select nil]))

  (defroute "/:view/:type/:id" [view type id]
    (put! comm [:route-change-view view])
    (put! comm [:route-select [(keyword type) id]]))

  (events/listen history
                 EventType.NAVIGATE
                 (fn [e]
                   (let [token (.-token e)]
                     (ga/send-pageview token)
                     (secretary/dispatch! token))))

  (.setEnabled history true))

(defn init
  []
  (let [comm (chan)
        path-fn routes/path-for
        link-fn routes/link-for
        shared {:comm comm
                :path-fn path-fn
                :link-fn link-fn
                :view-path-fn change-view-path
                :fetch-boundarylines-fn (partial bl/get-or-fetch-best-boundarylines state :boundarylines)
                :point-in-boundarylines-fn (partial bl/point-in-boundarylines state :boundarylines :uk_boroughs)
                :get-app-state-fn get-state
                :set-app-state-fn set-state}]
    (nav/init comm)
    ;; (init-routes comm)

    (load-boundaryline-collection-indexes)

    ;; (map/mount state [:multiview :views :map] "map-component" shared)
    (mount/mount map/map-component
                 state
                 :target "map-component"
                 :shared shared
                 :paths {:map-state [:map]
                         :filter [:filter :compiled]})

    (mount/mount filter/filter-component
                 state
                 :target "search-component"
                 :shared shared
                 :path [:filter])

    (select-chooser/mount state [:map :controls :boundaryline-agg] "variable-selection-component" shared "Variable" :variable [["!latest_employee_count" "Employee count"] ["!latest_turnover" "Turnover"]])

    (select-chooser/mount state [:map :controls :colorchooser] "stat-selection-component" shared "Statistic" :variable [["sum" "Sum"] ["max" "Maximum"] ["avg" "Mean"] ["boundaryline_id_doc_count" "Count"]])

    (select-chooser/mount state [:map :controls :colorchooser] "scale-selection-component" shared "Scale" :scale [["log" "Log"] ["linear" "Linear"]])

    (color-scale/mount state [:map :controls :threshold-colors] "color-scale-component" shared)

    ;; (search/mount state "search-component" shared)
    ;; (map-report/mount state "map-report-component" shared)
    ;; (page-title/mount state "page-title-component" shared)
    ;; (full-report/mount state "full-report-component" shared)

    ;; (go
    ;;  (while true
    ;;    (let [[type val] (<! comm)]
    ;;      (handle-event type val))))
    ))
