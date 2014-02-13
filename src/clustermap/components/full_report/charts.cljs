(ns clustermap.components.full-report.charts
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.components.timeline-chart :as tl]))

(defn charts
  [data owner]
  (om/component
   (html
    [:div.full-report-charts
     (if-let [timelines (:selection-portfolio-company-site-account-timelines data)]
       [:div.grid
        [:div.tbl
         [:div.tbl-cell.charts
          [:div.tbl
           [:div.tbl-row
            [:div.tbl-cell
             [:div.box.box-first
              [:header "Turnover"]
              (om/build tl/timeline-chart (:turnover timelines) {:opts {:y0-title "Turnover" :y1-title "# Filings"}
                                                                 :react-key "turnover-chart"})
              ]]
            [:div.tbl-cell
             [:div.box.box-last
              [:header "Employment"]
              (om/build tl/timeline-chart (:employee_count timelines) {:opts {:y0-title "Employment" :y1-title "# Filings"}
                                                                       :react-key "employment-chart"})
              ]]]]]]])])))
