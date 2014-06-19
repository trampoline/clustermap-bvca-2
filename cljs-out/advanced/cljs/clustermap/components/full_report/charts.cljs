(ns clustermap.components.full-report.charts
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.components.timeline-chart :as tl]))

(defn charts
  [data owner]
  (om/component
   (html
    [:div.full-report-charts
     (if-let [timelines (:selection-investment-account-timelines data)]
       [:div.grid
        [:div.tbl
         [:div.tbl-cell.charts
          [:div.tbl
           [:div.tbl-row
            [:div.tbl-cell
             [:div.box.box-first
              ;; fool sablono compiler into assigning react-ids
              (filter identity [[:header "Revenue"]])
              (om/build tl/timeline-chart (:turnover timelines) {:opts {:id "turnover-timeline-chart"
                                                                        :y0-title "Revenue"
                                                                        :y1-title "# Filings"}
                                                                 :react-key "turnover-timeline-chart"})
              ]]
            ;; [:div.tbl-cell
            ;;  [:div.box.box-last
            ;;   [:header "Employees"]
            ;;   (om/build tl/timeline-chart (:employee_count timelines) {:opts {:id "employment-timeline-chart"
            ;;                                                                   :y0-title "Employees"
            ;;                                                                   :y1-title "# Filings"}
            ;;                                                            :react-key "employment-timeline-chart"})
            ;;   ]]
            ]]]]])])))
