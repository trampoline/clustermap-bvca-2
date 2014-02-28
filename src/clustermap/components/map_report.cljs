(ns clustermap.components.map-report
  (:require [cljs.core.async :refer [put!]]
            [domina.events :as events]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.string :as sf :refer [pluralize]]))

(defn full-report-button
  [comm]
  (html [:button.btn {:type "button"
                      :onClick (fn [e] (put! comm [:change-view "lists"]))}
         [:i.icon-lists-sm]
         "Full report"]))

(defn type-counts
  [site-stats]
  {:pc-count (some-> site-stats :portfolio_company_count)
   :ic-count (some-> site-stats :investor_company_count)
   :const-count (some-> site-stats :constituency_count)})

(defn all-portfolio-companies-summary-report
  [site-stats comm]
  (let [{:keys [pc-count ic-count const-count]} (type-counts site-stats)]

    (om/component
     (html [:div
            [:header.secondary
             [:h2 "All portfolio companies"]
             [:h3 "UK wide"]]
            [:ul
             [:li (fnum pc-count :default "-") [:small "Portfolio Companies listed"]]
             [:li (fnum ic-count :default "-") [:small "Investors listed"]]
             [:li (fnum const-count :default "-") [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> site-stats :turnover :total) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> site-stats :employee_count :total) :dec 0 :default "-") [:small "Portfolio Company Employees"]]
             ]
            (full-report-button comm)]))))

(defn portfolio-company-report
  [portfolio-company site-stats comm]
  (let [{:keys [pc-count ic-count const-count]} (type-counts site-stats)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 "Portfolio Company"]
             [:h3 (:name portfolio-company)]]
            [:ul
             [:li (fnum ic-count) [:small (pluralize ic-count "Investor")]]
             [:li (fnum const-count) [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> site-stats :turnover :total) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> site-stats :employee_count :total) :dec 0 :default "-") [:small "Portfolio Company Employees"]]]
            (full-report-button comm)]))))

(defn investor-company-report
  [investor-company site-stats comm]
  (let [{:keys [pc-count ic-count const-count]} (type-counts site-stats)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 "Investor"]
             [:h3 (:name investor-company)]]
            [:ul
             [:li (fnum pc-count) [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum const-count) [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> site-stats :turnover :total) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> site-stats :employee_count :total) :dec 0 :default "-") [:small "Portfolio Company Employees"]]]
            (full-report-button comm)]))))

(defn constituency-report
  [constituency site-stats comm]
  (let [{:keys [pc-count ic-count const-count]} (type-counts site-stats)]
    (om/component
     (html [:div
            [:header.secondary
             [:h2 "Constituency"]
             [:h3 (:name constituency)
              [:br]
              (if (or (:mp constituency) (:political_party constituency))
                [:small "(" (:mp constituency) ", " (:political_party constituency) ")"])]]
            [:ul
             [:li (fnum pc-count) [:small (pluralize pc-count "Portfolio Company" "Portfolio Companies")]]
             [:li (fnum ic-count) [:small (pluralize ic-count "Investor")]]
             [:li (fmoney (some-> site-stats :turnover :total) :sf 2 :default "-") [:small "Portfolio Company Turnover"]]
             [:li (fnum (some-> site-stats :employee_count :total) :dec 0 :default "-") [:small "Portfolio Company Employees"]]]
            (full-report-button comm)]))))

(defn map-report-component [data owner]
  (let [comm (om/get-shared owner :comm)
        type (get-in data [:selection :type])
        value (get-in data [:selection :value])
        site-stats (:selection-investment-stats data)]
    (condp == type
        :portfolio-company (portfolio-company-report value site-stats comm)
        :investor-company (investor-company-report value site-stats comm)
        :constituency (constituency-report value site-stats comm)
        (all-portfolio-companies-summary-report site-stats comm))))

(defn mount
  [app-state elem-id shared]
  (om/root app-state
           shared
           map-report-component
           (.getElementById js/document elem-id)))
