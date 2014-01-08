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
  [summary]
  (om/component
   (html [:div
          [:header.secondary
           [:h2 "All portfolio companies"]
           [:h3 "UK wide"]]
          [:ul
           [:li (nform/readable (aget summary "count")) [:small "Companies"]]
           [:li "2" [:small "Investors"]]
           [:li (mform/readable (aget summary "latest_turnover_stats" "total") :sf 2) [:small "Turnover"]]
           [:li (nform/readable (aget summary "latest_employee_count_stats" "total")) [:small "Employees"]]]])))

(defn selection-report
  [data]
  (om/component
   (html [:div "boo"])))

(defn widget [data]
  (cond
   (and (-> data :selection nil?)  (-> data :all-portfolio-companies-summary nil?)) (empty-report)
   (-> data :selection nil?) (all-portfolio-companies-summary-report (:all-portfolio-companies-summary data))
   (= :portfolio-company (get-in data [:selection :type])) (selection-report (:selection data))))

(defn mount
  [app-state]
  (om/root app-state widget (.getElementById js/document "map-report-content")))
