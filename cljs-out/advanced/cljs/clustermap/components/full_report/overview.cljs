(ns clustermap.components.full-report.overview
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :refer [fnum]]
            [clustermap.formats.money :refer [fmoney]]))

(defn- describe-selection
  [{:keys [type value]}]
  (condp = type
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
                :description "Averages over all Portfolio Companies"}}))

(defn- overview-data
  [{:keys [all-portfolio-company-stats
           selection
           selection-portfolio-company-stats
           selection-portfolio-company-site-stats]}]
  (let [sel-descrs (describe-selection selection)
        co-stats (or selection-portfolio-company-stats all-portfolio-company-stats)
        site-stats (or selection-portfolio-company-site-stats all-portfolio-company-stats)]

    {:selection (merge (:selection sel-descrs)
                       {:portfolio-companies (fnum (some-> co-stats :portfolio_company_count) :default "-")
                        :investor-companies (fnum (some-> co-stats :investor_company_count) :default "-")
                        :constituencies (fnum (some-> co-stats :constituency_count) :default "-")
                        :turnover (fmoney (some-> site-stats :turnover :total) :sf 2 :default "-")
                        :employee-count (fnum (some-> site-stats :employee_count :total) :sf 2 :default "-")})
     :averages (merge (:averages sel-descrs)
                      {:portfolio-companies "\u00A0"
                       :investor-companies "\u00A0"
                       :constituencies "\u00A0"
                       :turnover (fmoney (some-> site-stats :turnover :mean) :sf 2 :default "-")
                       :employee-count (fnum (some-> site-stats :employee_count :mean) :dec 0 :default "-")})}))

(defn overview
  [data]
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
                [:td [:span.selection (:portfolio-companies selection)]]
                [:td [:span.selection (:investor-companies selection)]]
                [:td [:span.selection (:constituencies selection)]]
                [:td [:span.selection (:turnover selection)]]
                [:td [:span.selection (:employee-count selection)]]]
               [:tr
                [:th [:i.icon-info {:data-toggle "tooltip" :data-container "body" :title (averages :description)}] (averages :name)]
                [:td [:span.averages (:portfolio-companies averages)]]
                [:td [:span.averages (:investor-companies averages)]]
                [:td [:span.averages (:constituencies averages)]]
                [:td [:span.averages (:turnover averages)]]
                [:td [:span.averages (:employee-count averages)]]]
               ]]]]))))
