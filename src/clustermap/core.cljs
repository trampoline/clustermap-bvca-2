(ns clustermap.core
  (:require
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

;; the IApp object
(def app-instance (atom nil))

(defn start-or-restart-app
  []
  (swap! app-instance
         (fn [a]
           (when a (app/stop a))
           (let [new-app (app/create-app-instance initial-state components)]
             (app/start new-app)
             new-app))))

(cond

 js/config.repl
 (do
   (ws-repl/connect "ws://localhost:9001" :verbose true)
   (fw/watch-and-reload
    :websocket-url "ws://localhost:3449/figwheel-ws"
    :jsload-callback (fn []
                       (start-or-restart-app)
                       (.log js/console "restarted")))
   (start-or-restart-app))

 true
 (start-or-restart-app))
