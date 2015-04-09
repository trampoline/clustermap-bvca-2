(ns clustermap.components.map-report
  (:require [cljs.core.async :refer [put!]]
            [domina.events :as events]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.string :as sf :refer [pluralize]]
            [clustermap.formats.name :as n :refer [reverse-name]]
            [clustermap.components.reset-selection-button :as rsb]))

(defn full-report-button
  [comm view-path-fn]
  (html [:a.btn.btn-link {:href (view-path-fn :lists)}
         [:i.icon-lists-sm]
         "Full report"]))

(defn type-counts
  [site-stats]
  {:pc-count (some-> site-stats :portfolio_company_count)
   :ic-count (some-> site-stats :investor_company_count)
   :const-count (some-> site-stats :constituency_count)})

(defn all-portfolio-companies-summary-report
  [site-stats comm view-path-fn]
  (let [{:keys [pc-count ic-count const-count]} (type-counts site-stats)]

    (om/component
     (html [:div
            [:div.header.secondary
             [:h2 "All investor-backed companies"]
             [:h3 "UK wide"]]
            [:ul
             [:li (fnum pc-count :default "-") [:small "Investor-backed companies"]]
             [:li (fnum ic-count :default "-") [:small "Investors"]]
             [:li (fnum const-count :default "-") [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> site-stats :turnover :total) :sf 2 :default "-") [:small "Total revenue"]]
             [:li (fnum (some-> site-stats :employee_count :total) :dec 0 :default "-") [:small "Total employees"]]]
            (full-report-button comm view-path-fn)]))))

(defn portfolio-company-report
  [portfolio-company site-stats comm path-fn view-path-fn]
  (let [{:keys [pc-count ic-count const-count]} (type-counts site-stats)]
    (om/component
     (html [:div
            [:div.header.secondary
             [:h2 "Investor-backed company"]
             [:h3 (:name portfolio-company)]
             (rsb/reset-selection-button path-fn)]
            [:ul
             [:li (fnum ic-count) [:small (pluralize ic-count "Investor")]]
             [:li (fnum const-count) [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> site-stats :turnover :total) :sf 2 :default "-") [:small "Total revenue"]]
             [:li (fnum (some-> site-stats :employee_count :total) :dec 0 :default "-") [:small "Total employees"]]]
            (full-report-button comm view-path-fn)]))))

(defn investor-company-report
  [investor-company site-stats comm path-fn view-path-fn]
  (let [{:keys [pc-count ic-count const-count]} (type-counts site-stats)]
    (om/component
     (html [:div
            [:div.header.secondary
             [:h2 "Investor"]
             [:h3 (:name investor-company)]
             (rsb/reset-selection-button path-fn)]
            [:ul
             [:li (fnum pc-count) [:small (pluralize pc-count "Investor-backed company" "Investor-backed companies")]]
             [:li (fnum const-count) [:small (pluralize const-count "Constituency" "Constituencies")]]
             [:li (fmoney (some-> site-stats :turnover :total) :sf 2 :default "-") [:small "Total revenue"]]
             [:li (fnum (some-> site-stats :employee_count :total) :dec 0 :default "-") [:small "Total employees"]]]
            (full-report-button comm view-path-fn)]))))

(defn constituency-report
  [constituency site-stats comm path-fn view-path-fn]
  (let [{:keys [pc-count ic-count const-count]} (type-counts site-stats)]
    (om/component
     (html [:div
            [:div.header.secondary
             [:h2 "Constituency"]
             [:h3 (:name constituency)
              [:br]
              (if (or (:mp constituency) (:political_party constituency))
                [:small "(" (reverse-name (:mp constituency)) ", " (:political_party constituency) ")"])]
             (rsb/reset-selection-button path-fn)]
            [:ul
             [:li (fnum pc-count) [:small (pluralize pc-count "Investor-backed company" "Investor-backed companies")]]
             [:li (fnum ic-count) [:small (pluralize ic-count "Investor")]]
             [:li (fmoney (some-> site-stats :turnover :total) :sf 2 :default "-") [:small "Total revenue"]]
             [:li (fnum (some-> site-stats :employee_count :total) :dec 0 :default "-") [:small "Total employees"]]]
            (full-report-button comm view-path-fn)]))))

(defn map-report-component [data owner]
  (let [{:keys [comm path-fn view-path-fn]} (om/get-shared owner)
        path-fn (partial path-fn :map)
        type (get-in data [:selection :type])
        value (get-in data [:selection :value])
        site-stats (:selection-investment-stats data)]
    (condp == type
        :portfolio-company (portfolio-company-report value site-stats comm path-fn view-path-fn)
        :investor-company (investor-company-report value site-stats comm path-fn view-path-fn)
        :constituency (constituency-report value site-stats comm path-fn view-path-fn)
        (all-portfolio-companies-summary-report site-stats comm view-path-fn))))

(defn mount
  [app-state elem-id shared]
  (om/root map-report-component
           app-state
           {:shared shared
            :target (.getElementById js/document elem-id)}))
