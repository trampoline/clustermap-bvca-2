(ns clustermap.components.map-report
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.string :as sf :refer [pluralize]]))

(defn full-report-button
  [comm]
  (html [:a {:href "#"
             :onClick (fn [e] (put! comm [:change-view "lists"]))}
         [:button.btn {:type "button"}
          [:i.icon-lists-sm]
          "Full report"]]))

(defn all-portfolio-companies-summary-report
  [apc-stats comm]
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
             ]
            (full-report-button comm)]))))

(defn portfolio-company-report
  [portfolio-company comm]
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
             [:li (fnum (some-> portfolio-company :latest_employee_count) :default "-") [:small "Employees"]]]
            (full-report-button comm)]))))

(defn investor-company-report
  [investor-company comm]
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
             [:li (fnum (some-> investor-company :total_employee_count) :default "-") [:small "Portfolio Company Employees"]]]
            (full-report-button comm)]))))

(defn constituency-report
  [constituency comm]
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
             [:li (fnum (some-> constituency :total_employee_count) :default "-") [:small "Portfolio Company Employees"]]]
            (full-report-button comm)]))))

(defn map-report-component [data owner]
  (let [comm (om/get-shared owner :comm)
        type (get-in data [:selection :type])
        value (get-in data [:selection :value])]
    (condp == type
        :portfolio-company (portfolio-company-report value comm)
        :investor-company (investor-company-report value comm)
        :constituency (constituency-report value comm)
        (all-portfolio-companies-summary-report (:selection-portfolio-company-stats data) comm))))

(defn mount
  [app-state elem-id comm]
  (om/root app-state
           {:comm comm}
           map-report-component
           (.getElementById js/document elem-id)))
