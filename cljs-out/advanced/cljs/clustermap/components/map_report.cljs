(ns clustermap.components.map-report
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.string :as sf :refer [pluralize]]))

(defn all-portfolio-companies-summary-report
  [data]
  (let [pc-stats (:all-portfolio-company-stats data)
        pc-count (some-> pc-stats :portfolio_company_count)
        ic-count (some-> pc-stats :investor_company_count)]

    (om/component
     (html [:div
            [:header.secondary
             [:h2 "All portfolio companies"]
             [:h3 "UK wide"]]
            [:ul
             [:li (fnum pc-count :default "-") [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum ic-count :default "-") [:small (pluralize ic-count "Investor")]]
             [:li (fmoney (some-> pc-stats :turnover :total) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> pc-stats :employee_count :total) :default "-") [:small "Portfolio Company Employees"]]
             ]]))))

(defn portfolio-company-report
  [data]
  (let [ic-count (some-> data :investor_companies count)
        const-count (some-> data :boundarylinecolls :uk_constituencies count)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 (:name data)]]
            [:ul
             [:li (fnum ic-count) [:small (pluralize ic-count "Investor")]]
             [:li (fnum const-count) [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> data :latest_turnover) :sf 2 :default "-") [:small "Turnover"]]
             [:li (fnum (some-> data :latest_employee_count) :default "-") [:small "Employees"]]]]))))

(defn investor-company-report
  [data]
  (let [pc-count (some-> data :portfolio_companies count)
        const-count (some-> data :boundarylinecolls :uk_constituencies count)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 (:name data)]]
            [:ul
             [:li (fnum pc-count) [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum const-count) [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> data :total_turnover) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> data :total_employee_count) :default "-") [:small "Portfolio Company Employees"]]]]))))

(defn constituency-report
  [data]
  (let [pc-count (some-> data :portfolio_companies count)
        ic-count (some-> data :investor_companies count)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 (:name data)]
             [:h3 (:mp data)
              [:small "(" (:political_party data) ")"]]]
            [:ul
             [:li (fnum pc-count) [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum ic-count) [:small (pluralize ic-count "Investor")]]
             [:li (fmoney (some-> data :total_turnover) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> data :total_employee_count) :default "-") [:small "Portfolio Company Employees"]]]]))))

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
