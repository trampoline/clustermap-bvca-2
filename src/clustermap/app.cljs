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
   [clustermap.formats.money :as money]
   [clustermap.formats.time :as time]
   [clustermap.formats.number :as num]
   [clustermap.components.mount :as mount]
   [clustermap.components.map :as map]
   [clustermap.components.filter :as filter]
   [clustermap.components.select-chooser :as select-chooser]
   [clustermap.components.color-scale :as color-scale]
   [clustermap.components.map-report :as map-report]
   [clustermap.components.full-report :as full-report]
   [clustermap.components.page-title :as page-title]
   [clustermap.components.search :as search]
   [clustermap.components.table :as table]
   [clustermap.components.timeline-chart :as timeline-chart]
   [clustermap.boundarylines :as bl]
   [clustermap.data.colorchooser :as colorchooser])
  (:import [goog History]
           [goog.history EventType]))

(def initial-state
  {:boundarylines {
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

   :filter-spec {:components {}
                 :filter-by-view false
                 :bounds nil
                 :compiled nil}

   :map {:type :geoport
         :datasource "companies"
         ;; :boundaryline-collections [[0 "nuts_0"] [4 "nuts_1"] [6 "nuts_2"] [7 "nuts_3"] [8 "uk_boroughs"] [10 "uk_wards"]]
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

   :map-report {:controls {:summary-stats {:index "companies"
                                           :index-type "company"
                                           :variables ["!latest_employee_count" "!latest_turnover"]}}
                :summary-stats nil
                }

   :table  {:type :table
            :controls {:index "companies"
                       :index-type "company"
                       :sort-spec {:!latest_turnover {:order "desc"}}
                       :from 0
                       :size 50
                       :columns [[:!name "Name"]
                                 [:!postcode "Postcode"]
                                 [:!formation_date "Formation date" #(time/format-date %)]
                                 [:!latest_accounts_date "Filing date" #(time/format-date %)]
                                 [:!latest_employee_count "Employees" #(num/readable % :dec 0)]
                                 [:!latest_turnover "Turnover" #(money/readable % :sf 3 :curr "")]]}
            :table-data nil}

   :turnover-timeline {:type :timeline
                       :datasource "company_accounts"
                       :controls {:index "company-accounts"
                                  :index-type "accounts"
                                  :time-variable "?accounts_date"
                                  :measure-variables "!turnover"
                                  :interval "year"}
                       :timeline-data nil}

   :view :map


   })

(def components
  [{:name :map
    :f map/map-component
    :target "map-component"
    :paths {:map-state [:map]
            :filter [:filter-spec :compiled]}}

   {:name :map-report
    :f map-report/map-report-component
    :target "map-report-component"
    :paths {:filter-spec [:filter-spec]
            :map-controls [:map :controls]
            :map-report [:map-report]}}

   {:name :search
    :f filter/filter-component
    :target "search-component"
    :paths {:filter-spec [:filter-spec]
            :bounds [:map :controls :bounds]}}

   {:name :var-select
    :f (partial select-chooser/select-chooser-component "Variable" :variable [["!latest_employee_count" "Employee count"] ["!latest_turnover" "Turnover"]])
    :target "variable-selection-component"
    :path [:map :controls :boundaryline-agg]}

   {:name :stat-select
    :f (partial select-chooser/select-chooser-component "Statistic" :variable [["sum" "Sum"] ["max" "Maximum"] ["avg" "Mean"] ["boundaryline_id_doc_count" "Count"]])
    :target "stat-selection-component"
    :path [:map :controls :colorchooser]}

   {:name :scale-select
    :f (partial select-chooser/select-chooser-component "Scale" :scale [["log" "Log"] ["linear" "Linear"]])
    :target "scale-selection-component"
    :path [:map :controls :colorchooser]}

   {:name :color-scale
    :f color-scale/color-scale-component
    :target "color-scale-component"
    :path [:map :controls :threshold-colors]}

   {:name :table
    :f table/table-component
    :target "full-report-table"
    :paths {:table-state [:table]
            :filter-spec [:filter-spec]
            :bounds [:map :controls :bounds]}}

   {:name :turnover-timeline
    :f timeline-chart/timeline-chart
    :target "turnover-timeline"
    :paths {:timeline-chart [:turnover-timeline]
            :filter-spec [:filter-spec]
            :bounds [:map :controls :bounds]
            }}

   ]
  )


(defn- new-state
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
  [state & {:as path-values}]
  (swap! state new-state path-values))

(defn get-state
  [state & path]
  (get-in @state (flatten path)))

;;;;;;;;;;;;;;;;;;;;;;;; load and index boundarylines

(def bl-collections ["uk_regions" "uk_counties" "uk_boroughs" "uk_wards"])

(defn load-boundaryline-collection-indexes
  [state]
  (doseq [blcoll bl-collections]
    (bl/fetch-boundaryline-collection-index state :boundarylines blcoll)))

;;;;;;;;;;;;;;;;;;;;;;;

(defn change-view
  [state view]
  (let [view (keyword view)]
    (when (not= view (:view @state))
      (set-state state :view view)
      (nav/change-view (name view)))))

(defn set-route
  [history view type id]
  (cond
   (and type id)
   (.setToken history (str "/" (-> view (or "map") name) "/" (name type) "/" (name id)))

   view
   (.setToken history (str "/" (name view)))

   true
   (.setToken history (str ""))))

(defn parse-route
  [history]
  (let [fragment (.getToken history)
        [_ view type id] (re-matches #"/([^/]+)(?:/([^/]+)/(.+))?$" fragment)
        type (when (> (some-> type str/trim count) 0) (str/trim type))
        id (when (> (some-> id str/trim count) 0) (str/trim id))]
    {:view view
     :type type
     :id id}))

(defn set-view-route
  [history view]
  (let [{:keys [type id]} (parse-route history)]
    (set-route history view type id)))

(defn create-event-handlers-map
  [state history]
  {:change-view (partial set-view-route history)
   :route-change-view (partial change-view state)
   :select (fn [t v] (.log js/console (clj->js [":select (ignored)" t v])))})

(defn choose-event-handler
  [event-handlers-map type val]
  (let [handler (get event-handlers-map type)]
    (if-not handler (throw (js/Error. (str "no handler for event-type: " type))))
    (handler val)))

;;; routing

(defn init-routes
  [history comm]

  (defroute "" []
    ;; (put! comm [:route-select nil])
    )

  (defroute "/" []
    ;; (put! comm [:route-select nil])
    )

  (defroute "/:view" [view]
    (put! comm [:route-change-view view])
    ;; (put! comm [:route-select nil])
    )

  (defroute "/:view/:type/:id" [view type id]
    (put! comm [:route-change-view view])
    ;; (put! comm [:route-select [(keyword type) id]])
    )

  (events/listen history
                 EventType.NAVIGATE
                 (fn [e]
                   (let [token (.-token e)]
                     ;; (ga/send-pageview token)
                     (secretary/dispatch! token))))

  (.setEnabled history true))

(def ^:private history* (History.))

(defprotocol IApp
  (start [this])
  (stop [this])
  (value [this]))

(defn create-app-instance
  [initial-state-value]
  (let [comm (chan)
        state (atom initial-state-value)
        event-handlers-map (create-event-handlers-map state history*)
        handle-event (partial choose-event-handler event-handlers-map)]

    (reify
      IApp
      (start [_]
        (let [path-fn routes/path-for
              link-fn routes/link-for
              shared {:comm comm
                      :path-fn path-fn
                      :link-fn link-fn
                      :view-path-fn (partial routes/path-for-view (partial parse-route history*))
                      :fetch-boundarylines-fn (partial bl/get-or-fetch-best-boundarylines state :boundarylines)
                      :point-in-boundarylines-fn (partial bl/point-in-boundarylines state :boundarylines :uk_boroughs)}]

          (nav/init comm)
          (init-routes history* comm)

          (load-boundaryline-collection-indexes state)

          (doseq [{:keys [name f target path paths]} components]
            (.log js/console (clj->js ["component" name f target paths]))
            (mount/mount name
                         f
                         state
                         :target target
                         :shared shared
                         :path path
                         :paths paths))

          ;; (search/mount state "search-component" shared)
          ;; (map-report/mount state "map-report-component" shared)
          ;; (page-title/mount state "page-title-component" shared)
          ;; (full-report/mount state "full-report-component" shared)

          (go
            (while true
              (let [[type val] (<! comm)]
                (handle-event type val))))
          ))

      (stop [_]
        (.removeAllListeners history*)
        (secretary/reset-routes!)

        (doseq [{:keys [target]} components]
          (mount/unmount target)))

      (value [_]
        @state)
      )))

(def app-instance (atom nil))

(defn start-or-restart-app
  []
  (swap! app-instance
         (fn [a]
           (when a (stop a))
           (let [new-app (create-app-instance initial-state)]
             (start new-app)
             (.log js/console new-app)
             new-app)
           )))
