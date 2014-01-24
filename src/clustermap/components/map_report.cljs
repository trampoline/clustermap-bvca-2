(ns clustermap.components.map-report
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.string :as sf :refer [pluralize]]))

(defn all-portfolio-companies-summary-report
  [apc-stats]
  (let [pc-count (some-> apc-stats :portfolio_company_count)
        ic-count (some-> apc-stats :investor_company_count)]

    (om/component
     (html [:div
            [:header.secondary
             [:h2 "All portfolio companies"]
             [:h3 "UK wide"]]
            [:ul
             [:li (fnum pc-count :default "-") [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum ic-count :default "-") [:small (pluralize ic-count "Investor")]]
             [:li (fmoney (some-> apc-stats :turnover :total) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> apc-stats :employee_count :total) :default "-") [:small "Portfolio Company Employees"]]
             ]]))))

(defn portfolio-company-report
  [portfolio-company]
  (let [ic-count (some-> portfolio-company :investor_companies count)
        const-count (some-> portfolio-company :boundarylinecolls :uk_constituencies count)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 (:name portfolio-company)]]
            [:ul
             [:li (fnum ic-count) [:small (pluralize ic-count "Investor")]]
             [:li (fnum const-count) [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> portfolio-company :latest_turnover) :sf 2 :default "-") [:small "Turnover"]]
             [:li (fnum (some-> portfolio-company :latest_employee_count) :default "-") [:small "Employees"]]]]))))

(defn investor-company-report
  [investor-company]
  (let [pc-count (some-> investor-company :portfolio_companies count)
        const-count (some-> investor-company :boundarylinecolls :uk_constituencies count)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 (:name investor-company)]]
            [:ul
             [:li (fnum pc-count) [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum const-count) [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> investor-company :total_turnover) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> investor-company :total_employee_count) :default "-") [:small "Portfolio Company Employees"]]]]))))

(defn constituency-report
  [constituency]
  (let [pc-count (some-> constituency :portfolio_companies count)
        ic-count (some-> constituency :investor_companies count)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 (:name constituency)]
             [:h3 (:mp constituency)
              [:small "(" (:political_party constituency) ")"]]]
            [:ul
             [:li (fnum pc-count) [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum ic-count) [:small (pluralize ic-count "Investor")]]
             [:li (fmoney (some-> constituency :total_turnover) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> constituency :total_employee_count) :default "-") [:small "Portfolio Company Employees"]]]]))))

(defn widget [data]
  (let [type (get-in data [:selection :type])
        value (get-in data [:selection :value])]
    (condp == type
        :portfolio-company (portfolio-company-report value)
        :investor-company (investor-company-report value)
        :constituency (constituency-report value)
        (all-portfolio-companies-summary-report (:all-portfolio-company-stats data)))))

(defn mount
  [app-state elem-id]
  (om/root app-state
           widget
           (.getElementById js/document elem-id)))
