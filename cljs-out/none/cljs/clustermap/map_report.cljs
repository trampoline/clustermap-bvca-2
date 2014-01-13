(ns clustermap.map-report
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]))

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
             [:li (fnum (some-> pc-summ (aget "count")) :default "-") [:small "Companies"]]
             [:li (fnum (some-> ic-summ (aget "count")) :default "-") [:small "Investors"]]
             [:li (fmoney (some-> pc-summ (aget "latest_turnover_stats" "total")) :sf 2 :default "-") [:small "Turnover"]]
             [:li (fnum (some-> pc-summ (aget "latest_employee_count_stats" "total")) :default "-") [:small "Employees"]]
             ]]))))

(defn selection-report
  [data]
  (om/component
   (html [:div
          [:header.secondary
           [:h2 (aget data "name")]]
          [:ul
           [:li (fnum (some-> data (aget "sites") count)) [:small "Investors"]]
           [:li (fmoney (some-> data (aget "latest_turnover")) :sf 2 :default "-") [:small "Turnover"]]
           [:li (fnum (some-> data (aget "latest_employee_count")) :default "-") [:small "Employees"]]]])))

(defn widget [data]
  (let [type (get-in data [:selection :type])
        value (get-in data [:selection :value])]
    (condp == type
        :portfolio-company (selection-report value)
        :investor-company (selection-report value)
        :constituency (selection-report value)
        (all-portfolio-companies-summary-report data))))

(defn mount
  [app-state elem-id]
  (om/root app-state widget (.getElementById js/document elem-id)))
