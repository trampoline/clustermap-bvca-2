(ns clustermap.components.full-report.overview
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jayq.core :refer [$]]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]))

(defn- describe-selection
  [data]
  (let [sel (:selection data)
        val (:value sel)]
    (condp = (:type sel)
      :portfolio-company {:selection {:name "Total"
                                      :description "Totals for the selected Portfolio Company"}
                          :averages {:name "Average"
                                     :description "Averages for the selected Portfolio Company"}}
      :investor-company {:selection {:name "Total"
                                     :description "Totals for the Portfolio Companies of the selected Investor"}
                         :averages {:name "Average"
                                    :description "Averages over the Portfolio Companies of the selected Investor"}}
      :constituency {:selection {:name "Total"
                                 :description "Totals for the selected Constituency"}
                     :averages {:name "Average"
                                :description "Averages over the Portfolio Companies with sites in the selected Constituency"}}
      {:selection {:name "Total"
                   :description "Totals over all Portfolio Companies"}
       :averages {:name "Average"
                  :description "Averages over all Portfolio Companies"}})))

(defn- overview-data
  [data]
  (let [apc-stats (:all-portfolio-company-stats data)
        sel-stats (or (:selection-portfolio-company-stats data) apc-stats)
        sel-descrs (describe-selection data)]

    {:selection (merge (:selection sel-descrs)
                       {:portfolio-companies (fnum (some-> sel-stats :portfolio_company_count) :default "-")
                        :investor-companies (fnum (some-> sel-stats :investor_company_count) :default "-")
                        :constituencies (fnum (some-> sel-stats :constituency_count) :default "-")
                        :turnover (fmoney (some-> sel-stats :turnover :total) :sf 2 :default "-")
                        :employee-count (fnum (some-> sel-stats :employee_count :total) :sf 2 :default "-")})
     :averages (merge (:averages sel-descrs)
                      {:portfolio-companies "\u00A0"
                       :investor-companies "\u00A0"
                       :constituencies "\u00A0"
                       :turnover (fmoney (some-> sel-stats :turnover :mean) :sf 2 :default "-")
                       :employee-count (fnum (some-> sel-stats :employee_count :mean) :dec 0 :default "-")})}))

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
