(ns clustermap.core
  (:require
   [clojure.string :as str]
   [weasel.repl :as ws-repl]
   [figwheel.client :as fw :include-macros true]
   [clustermap.app :as app]
   [clustermap.formats.time :as time]
   [clustermap.formats.number :as num]
   [clustermap.formats.money :as money]
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
   [clustermap.routes :as routes]
   [clustermap.boundarylines :as bl]
   [clustermap.nav :as nav]
   [secretary.core :as secretary :include-macros true :refer [defroute]]
   [cljs.core.async :refer [chan <! put! sliding-buffer]]


))

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

;;;;;;;;;;;;;;;;;;;;;;;; load and index boundarylines

(def bl-collections ["uk_regions" "uk_counties" "uk_boroughs" "uk_wards"])

(defn load-boundaryline-collection-indexes
  [state]
  (doseq [blcoll bl-collections]
    (bl/fetch-boundaryline-collection-index state :boundarylines blcoll)))

;;;;;;;;;;;;;;;;;;;;;;;

(defn parse-route
  [history]
  (let [fragment (.getToken history)
        [_ view type id] (re-matches #"/([^/]+)(?:/([^/]+)/(.+))?$" fragment)
        type (when (> (some-> type str/trim count) 0) (str/trim type))
        id (when (> (some-> id str/trim count) 0) (str/trim id))]
    {:view view
     :type type
     :id id}))

(defn change-view
  [state view]
  (let [view (keyword view)]
    (when (not= view (:view @state))
      (swap! state assoc :view view)
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
    ))


(defn create-app-service
  []
  (let [event-handlers (atom nil)]
    (reify
      app/IAppService
      (init [this app]

        (nav/init (app/get-comm app))
        (init-routes (app/get-history app) (app/get-comm app))
        (load-boundaryline-collection-indexes (app/get-state app))
        (reset! event-handlers (create-event-handlers-map (app/get-state app) (app/get-history app)))

        {:path-fn routes/path-for
         :link-fn routes/link-for
         :view-path-fn (partial routes/path-for-view (partial parse-route (app/get-history app)))
         :fetch-boundarylines-fn (partial bl/get-or-fetch-best-boundarylines (app/get-state app) :boundarylines)
         :point-in-boundarylines-fn (partial bl/point-in-boundarylines (app/get-state app) :boundarylines :uk_boroughs)})

      (destroy [this app])

      (handle-event [this app type val]
        (choose-event-handler @event-handlers type val)))))

;; the IApp object
(def ^:private app-instance (atom nil))

(defn init
  []
  (app/start-or-restart-app app-instance initial-state components (create-app-service)))

(cond

 ;; dev mode : configure repl and figwheel code-reloading
 js/config.repl
 (do
   (ws-repl/connect "ws://localhost:9001" :verbose true)
   (fw/watch-and-reload
    :websocket-url "ws://localhost:3449/figwheel-ws"
    :jsload-callback (fn []
                       (init)
                       (.log js/console "restarted")))
   (init))

 ;; production : just run the app
 true
 (init))
