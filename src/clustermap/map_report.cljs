(ns clustermap.map-report
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nform]
            [clustermap.formats.money :as mform]))

(defn empty-report
  []
  (om/component
   (html [:div
          [:header.secondary
           [:h2 "-"]
           [:h3 "-"]]
          [:ul
           [:li "-" [:small "Companies"]]
           [:li "-" [:small "Investors"]]
           [:li "-" [:small "Turnover"]]
           [:li "-" [:small "Employees"]]]])))

(defn all-portfolio-companies-summary-report
  [data]
  (let [pc-summ (:all-portfolio-companies-summary data)
        ic-summ (:all-investor-companies-summary data)]

    (om/component
     (html [:div
            [:header.secondary
             [:h2 "All portfolio companies"]
             [:h3 "UK wide"]]
            [:ul
             [:li (nform/readable (some-> pc-summ (aget "count"))) [:small "Companies"]]
             [:li (nform/readable (some-> ic-summ (aget "count"))) [:small "Investors"]]
             [:li (mform/readable (some-> pc-summ (aget "latest_turnover_stats" "total")) :sf 2) [:small "Turnover"]]
             [:li (nform/readable (some-> pc-summ (aget "latest_employee_count_stats" "total"))) [:small "Employees"]]
             ]]))))

(defn selection-report
  [data]
  (om/component
   (html [:div "boo"])))

(defn widget [data]
  (cond
   (-> data :selection nil?) (all-portfolio-companies-summary-report data)
   (= :portfolio-company (get-in data [:selection :type])) (selection-report (:selection data))))

(defn mount
  [app-state]
  (om/root app-state widget (.getElementById js/document "map-report-content")))
