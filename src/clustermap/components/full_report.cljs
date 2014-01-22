(ns clustermap.components.full-report
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jayq.core :refer [$]]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]))


(defn describe-selection
  [data]
  (let [sel (:selection data)
        val (:value sel)]
    (condp = (:type sel)
      :portfolio-company {:name (aget val "name")
                          :description "Totals for the selected Portfolio Company"}
      :investor-company {:name (aget val "name")
                         :description "Totals for the Portfolio Companies of the selected Investor"}
      :constituency {:name (aget val "name")
                     :description "Totals for the selected Constituency"}
      {:name "All Portfolio Companies"
       :description "Totals over all Portfolio Companies"})))

(defn overview-data
  [data]
  (let [apc-stats (:all-portfolio-company-stats data)
        sel-stats (or (:selection-portfolio-company-stats data) apc-stats)
        sel-descr (describe-selection data)]

    {:selection (merge sel-descr
                       {:portfolio-companies (fnum (some-> sel-stats (aget "portfolio_company_count")) :default "-")
                        :investor-companies (fnum (some-> sel-stats (aget "investor_company_count")) :default "-")
                        :constituencies (fnum (some-> sel-stats (aget "constituency_count")) :default "-")
                        :turnover (fmoney (some-> sel-stats (aget "turnover" "total")) :sf 2 :default "-")
                        :employee-count (fnum (some-> sel-stats (aget "employee_count" "total")) :sf 2 :default "-")})
     :averages {:name "Average"
                :description "Averages over all portfolio companies"
                :portfolio-companies "\u00A0"
                :investor-companies "\u00A0"
                :constituencies "\u00A0"
                :turnover (fmoney (some-> apc-stats (aget "turnover" "mean")) :sf 2 :default "-")
                :employee-count (fnum (some-> apc-stats (aget "employee_count" "mean")) :dec 0 :default "-")}}))

(defn overview
  [{:keys [selection] :as data}]
  (let [{:keys [selection averages]} (overview-data data)]

    (om/component
     (html [:div.full-report-overview
            [:h4 "2012 Overview"]

            [:div.table-responsive
             [:table.table-stats
              [:thead
               [:tr
                [:th "\u00A0"]
                [:th "Portfolio Companies"]
                [:th "Investors"]
                [:th "Constituencies"]
                [:th "Revenue (\u00A3)"]
                [:th "Employees"]]]
              [:tbody
               [:tr
                [:th [:i.icon-info {:data-toggle "tooltip" :data-container "body" :title (selection :description)}] (selection :name)]
                [:td [:span.selection (selection :portfolio-companies)]]
                [:td [:span.selection (selection :investor-companies)]]
                [:td [:span.selection (selection :constituencies)]]
                [:td [:span.selection (selection :turnover)]]
                [:td [:span.selection (selection :employee-count)]]]
               [:tr
                [:th [:i.icon-info {:data-toggle "tooltip" :data-container "body" :title (averages :description)}] (averages :name)]
                [:td [:span.averages (averages :portfolio-companies)]]
                [:td [:span.averages (averages :investor-companies)]]
                [:td [:span.averages (averages :constituencies)]]
                [:td [:span.averages (averages :turnover)]]
                [:td [:span.averages (averages :employee-count)]]]
               ]]]]))))

(defn portfolio-company-sites
  [{:keys [selection all-portfolio-companies-summary] :as data}]
  (html
    [:div.full-report-portfolio-company-sites "portfolio-company-sites"]))

(defn details
  [{:keys [selection all-portfolio-companies-summary] :as data}]
  (html
    [:div.full-report-details "details"]))

(defn full-report-component
  [{:keys [selection all-portfolio-companies-summary] :as data} owner]

  (reify
    om/IRender
    (render [this]
      (html [:div
          (om/build overview data)
          (portfolio-company-sites data)
          (details data)
             ]))
    om/IDidUpdate
    (did-update [this prev-props prev-state root-node]
      (-> "[data-toggle='tooltip']" ($ root-node) (.data "bs.tooltip" false)) ;; remove any existing tooltip
      (-> "[data-toggle='tooltip']" ($ root-node) .tooltip) ;; and add again
      )))

(defn mount
  [app-state elem-id]
  (om/root app-state full-report-component (.getElementById js/document elem-id)))
