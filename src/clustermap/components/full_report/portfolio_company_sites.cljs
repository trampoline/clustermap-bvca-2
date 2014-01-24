(ns clustermap.components.full-report.portfolio-company-sites
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jayq.core :refer [$]]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]))


(defn portfolio-company-site
  [site owner]
  (om/component
   (html
    [:tr
     [:td (:name site)]
     [:td (:postcode site)]
     [:td "investor"]
     [:td "constituency"]
     [:td (fmoney (:latest_turnover site) :sf 2 :default "-")]
     [:td (fmoney (:latest_turnover_delta site) :sf 2 :default "-")]
     [:td (fnum (:latest_employee_count site) :default "-")]
     [:td (fnum (:latest_employee_count_delta site) :default "-")]])))

(defn portfolio-company-sites
  [selection-portfolio-company-sites owner]
  (om/component
       (html
        [:div.full-report-portfolio-company-sites
         [:div.table-responsive
          [:table.table
           [:thead
            [:tr
             [:th "Portfolio Company"]
             [:th "Postcode"]
             [:th "Investor"]
             [:th "Constituency"]
             [:th "Revenue"]
             [:th "Rev. change"]
             [:th "Employees"]
             [:th "Emp. change"]]]
           [:tbody
            (om/build-all portfolio-company-site selection-portfolio-company-sites)]]]])))
