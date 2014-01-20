(ns clustermap.components.map-report
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.string :as sf :refer [pluralize]]))

(defn all-portfolio-companies-summary-report
  [data]
  (let [pc-summ (:all-portfolio-companies-summary data)
        pc-count (some-> pc-summ (aget "count"))
        ic-summ (:all-investor-companies-summary data)
        ic-count (some-> ic-summ (aget "count"))]

    (om/component
     (html [:div
            [:header.secondary
             [:h2 "All portfolio companies"]
             [:h3 "UK wide"]]
            [:ul
             [:li (fnum pc-count :default "-") [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum ic-count :default "-") [:small (pluralize ic-count "Investor")]]
             [:li (fmoney (some-> pc-summ (aget "latest_turnover_stats" "total")) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> pc-summ (aget "latest_employee_count_stats" "total")) :default "-") [:small "Portfolio Company Employees"]]
             ]]))))

(defn portfolio-company-report
  [data]
  (let [ic-count (some-> data (aget "investor_companies") count)
        const-count (some-> data (aget "boundarylinecolls" "uk_constituencies") count)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 (aget data "name")]]
            [:ul
             [:li (fnum ic-count) [:small (pluralize ic-count "Investor")]]
             [:li (fnum const-count) [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> data (aget "latest_turnover")) :sf 2 :default "-") [:small "Turnover"]]
             [:li (fnum (some-> data (aget "latest_employee_count")) :default "-") [:small "Employees"]]]]))))

(defn investor-company-report
  [data]
  (let [pc-count (some-> data (aget "portfolio_companies") count)
        const-count (some-> data (aget "boundarylinecolls" "uk_constituencies") count)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 (aget data "name")]]
            [:ul
             [:li (fnum pc-count) [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum const-count) [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> data (aget "total_turnover")) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> data (aget "total_employee_count")) :default "-") [:small "Portfolio Company Employees"]]]]))))

(defn constituency-report
  [data]
  (let [pc-count (some-> data (aget "portfolio_companies") count)
        ic-count (some-> data (aget "investor_companies") count)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 (aget data "name")]
             [:h3 (aget data "mp")
              [:small "(" (aget data "political_party") ")"]]]
            [:ul
             [:li (fnum pc-count) [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum ic-count) [:small (pluralize ic-count "Investor")]]
             [:li (fmoney (some-> data (aget "total_turnover")) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> data (aget "total_employee_count")) :default "-") [:small "Portfolio Company Employees"]]]]))))

(defn widget [data]
  (let [type (get-in data [:selection :type])
        value (get-in data [:selection :value])]
    (condp == type
        :portfolio-company (portfolio-company-report value)
        :investor-company (investor-company-report value)
        :constituency (constituency-report value)
        (all-portfolio-companies-summary-report data))))

(defn mount
  [app-state elem-id]
  (om/root app-state widget (.getElementById js/document elem-id)))
