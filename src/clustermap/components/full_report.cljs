(ns clustermap.components.full-report
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jayq.core :refer [$]]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]))


(defn all-portfolio-companies-overview-data
  [data]
  (let [pc-summ (:all-portfolio-companies-summary data)
        pc-count (some-> pc-summ (aget "count"))
        ic-summ (:all-investor-companies-summary data)
        ic-count (some-> ic-summ (aget "count"))]

    {:selection {:name "All portfolio companies"
                 :description "Totals over all portfolio companies"
                 :portfolio-companies (fnum pc-count :default "-")
                 :investor-companies (fnum ic-count :default "-")
                 :turnover (fmoney (some-> pc-summ (aget "latest_turnover_stats" "total")) :sf 2 :default "-")
                 :employee-count (fnum (some-> pc-summ (aget "latest_employee_count_stats" "total")) :sf 2 :default "-")}
     :averages {:name "Average"
                :description "Averages over all portfolio companies"
                :portfolio-companies ""
                :investor-companies ""
                :turnover (fmoney (some-> pc-summ (aget "latest_turnover_stats" "mean")) :sf 2 :default "-")
                :employee-count (fnum (some-> pc-summ (aget "latest_employee_count_stats" "mean")) :dec 0 :default "-")}}))

(defn portfolio-company-overview-data
  [data]
  (let [pc-summ (:all-portfolio-companies-summary data)
        pc-count (some-> pc-summ (aget "count"))
        sel (-> data :selection :value)
        sel-ic-count (-> sel (aget "investor_companies") count)]

    {:selection {:name (aget sel "name")
                 :description "Headline statistics"
                 :portfolio-companies (fnum 1)
                 :investor-companies (fnum sel-ic-count :default "-")
                 :turnover (fmoney (aget sel "latest_turnover") :sf 2 :default "-")
                 :employee-count (fnum (aget sel "latest_employee_count") :sf 2 :default "-")}
     :averages {:name "Average"
                :description "Averages over all portfolio companies"
                :portfolio-companies ""
                :investor-companies ""
                :turnover (fmoney (some-> pc-summ (aget "latest_turnover_stats" "mean")) :sf 2 :default "-")
                :employee-count (fnum (some-> pc-summ (aget "latest_employee_count_stats" "mean")) :dec 0 :default "-")}}
    )
  )

(defn investor-company-overview-data
  [data]
  )

(defn constituency-overview-data
  [data])

(defn overview
  [{:keys [selection] :as data}]
  (let [{:keys [selection averages]} (condp = (:type selection)
                                       :portfolio-company (portfolio-company-overview-data data)
                                       :investor-company (investor-company-overview-data data)
                                       :constituency-overview (constituency-overview-data data)
                                       (all-portfolio-companies-overview-data data))]
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
                [:th "Revenue (\u00A3)"]
                [:th "Employees"]]]
              [:tbody
               [:tr
                [:th [:i.icon-info {:data-toggle "tooltip" :data-container "body" :title (selection :description)}] (selection :name)]
                [:td [:span.selection (selection :portfolio-companies)]]
                [:td [:span.selection (selection :investor-companies)]]
                [:td [:span.selection (selection :turnover)]]
                [:td [:span.selection (selection :employee-count)]]]
               [:tr
                [:th [:i.icon-info {:data-toggle "tooltip" :data-container "body" :title (averages :description)}] (averages :name)]
                [:td [:span.averages (averages :portfolio-companies)]]
                [:td [:span.averages (averages :investor-companies)]]
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
