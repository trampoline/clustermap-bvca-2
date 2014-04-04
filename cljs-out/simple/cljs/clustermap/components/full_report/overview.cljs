(ns clustermap.components.full-report.overview
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.formats.number :refer [fnum]]
            [clustermap.formats.money :refer [fmoney]]))

(defn- describe-selection
  [{:keys [type value]}]
  (condp = type
    :portfolio-company {:selection {:name "Total"
                                    :description "Totals for the selected Portfolio Company"}
                        :averages {:name "Mean"
                                   :description "Mean for the selected Portfolio Company"}
                        :benchmark {:name "Benchmark"
                                    :description "Mean over all UK Companies"}}
    :investor-company {:selection {:name "Total"
                                   :description "Totals for the Portfolio Companies of the selected Investor"}
                       :averages {:name "Mean"
                                  :description "Mean over the Portfolio Companies of the selected Investor"}
                       :benchmark {:name "Benchmark"
                                   :description "Mean over all UK Companies"}}
    :constituency {:selection {:name "Total"
                               :description "Totals for the selected Constituency"}
                   :averages {:name "Mean"
                              :description "Mean over the Portfolio Companies with sites in the selected Constituency"}
                   :benchmark {:name "Benchmark"
                               :description "Mean over all UK Companies"}}
    {:selection {:name "Total"
                 :description "Totals over all Portfolio Companies"}
     :averages {:name "Mean"
                :description "Mean over all Portfolio Companies"}
     :benchmark {:name "Benchmark"
                 :description "Mean over all UK Companies"}}))

(defn- overview-data
  [{:keys [all-investment-stats
           selection
           selection-investment-stats]}]
  (let [sel-descrs (describe-selection selection)
        site-stats (or selection-investment-stats all-investment-stats)]

    {:selection (merge (:selection sel-descrs)
                       {:portfolio-companies (fnum (some-> site-stats :portfolio_company_count) :default "-")
                        :investor-companies (fnum (some-> site-stats :investor_company_count) :default "-")
                        :constituencies (fnum (some-> site-stats :constituency_count) :default "-")
                        :turnover (fmoney (some-> site-stats :turnover :total) :sf 2 :default "-")
                        :turnover-delta-val (some-> site-stats :turnover_delta :total)
                        :turnover-delta (fmoney (some-> site-stats :turnover_delta :total) :sf 2 :default "-")
                        :employee-count (fnum (some-> site-stats :employee_count :total) :dec 0 :default "-")
                        :employee-count-delta-val (some-> site-stats :employee_count_delta :total)
                        :employee-count-delta (fnum (some-> site-stats :employee_count_delta :total) :dec 0 :default "-")})
     :averages (merge (:averages sel-descrs)
                      {:portfolio-companies "\u00A0"
                       :investor-companies "\u00A0"
                       :constituencies "\u00A0"
                       :turnover (fmoney (some-> site-stats :turnover :mean) :sf 2 :default "-")
                       :turnover-delta-val (some-> site-stats :turnover_delta :mean)
                       :turnover-delta (fmoney (some-> site-stats :turnover_delta :mean) :sf 2 :default "-")
                       :employee-count (fnum (some-> site-stats :employee_count :mean) :dec 0 :default "-")
                       :employee-count-delta-val (some-> site-stats :employee_count_delta :mean)
                       :employee-count-delta (fnum (some-> site-stats :employee_count_delta :mean) :dec 0 :default "-")})
     :benchmark (merge (:benchmark sel-descrs)
                       {:portfolio-companies (fnum (some-> all-investment-stats :portfolio_company_count) :default "-")
                        :investor-companies (fnum (some-> all-investment-stats :investor_company_count) :default "-")
                        :constituencies (fnum (some-> all-investment-stats :constituency_count) :default "-")
                        :turnover (fmoney (some-> all-investment-stats :turnover :mean) :sf 2 :default "-")
                        :turnover-delta-val (some-> all-investment-stats :turnover_delta :total)
                        :turnover-delta (fmoney (some-> all-investment-stats :turnover_delta :mean) :sf 2 :default "-")
                        :employee-count (fnum (some-> all-investment-stats :employee_count :mean) :dec 0 :default "-")
                        :employee-count-delta-val (some-> all-investment-stats :employee_count_delta :mean)
                        :employee-count-delta (fnum (some-> all-investment-stats :employee_count_delta :mean) :dec 0 :default "-")})}))

(defn pos-neg
  [value]
  (cond
   (nil? value) nil
   (> value 0) (html [:i.icon-positive])
   (< value 0) (html [:i.icon-negative])
   true nil))

(defn overview
  [data]
  (let [{:keys [selection averages benchmark]} (overview-data data)]

    (om/component
     (html [:div.full-report-overview
            [:h4 "Overview of latest filings"
             [:small "\u00a0(may span years : see table below for details)"]]

            [:div.table-responsive
             [:table.table-stats
              [:thead
               [:tr
                [:th "\u00A0"]
                [:th "Investor-backed companies"]
                [:th "Investors"]
                [:th "Constituencies"]
                [:th "Revenue"]
                [:th {:colSpan "2"} "Rev. change"]
                [:th "Employees"]
                ;;[:th {:colSpan "2"} "Emp. change"]
                ]]
              [:tbody
               [:tr
                [:th [:i.icon-info {:data-toggle "tooltip" :data-container "body" :title (selection :description)}] (selection :name)]
                [:td [:span.selection (:portfolio-companies selection)]]
                [:td [:span.selection (:investor-companies selection)]]
                [:td [:span.selection (:constituencies selection)]]
                [:td [:span.selection (:turnover selection)]]
                [:td [:span.selection (pos-neg (:turnover-delta-val selection))]]
                [:td [:span.selection (:turnover-delta selection)]]
                [:td [:span.selection (:employee-count selection)]]
                ;; [:td [:span.selection (pos-neg (:employee-count-delta-val selection))]]
                ;;[:td [:span.selection (:employee-count-delta selection)]]
                ]
               ;; [:tr
               ;;  [:th [:i.icon-info {:data-toggle "tooltip" :data-container "body" :title (averages :description)}] (averages :name)]
               ;;  [:td [:span.averages (:portfolio-companies averages)]]
               ;;  [:td [:span.averages (:investor-companies averages)]]
               ;;  [:td [:span.averages (:constituencies averages)]]
               ;;  [:td [:span.averages (:turnover averages)]]
               ;;  [:td [:span.averages (pos-neg (:turnover-delta-val averages))]]
               ;;  [:td [:span.averages (:turnover-delta averages)]]
               ;;  [:td [:span.averages (:employee-count averages)]]
               ;;  ;; [:td [:span.averages (pos-neg (:employee-count-delta-val averages))]]
               ;;  ;; [:td [:span.averages (:employee-count-delta averages)]]
               ;;  ]
               ;; [:tr
               ;;  [:th [:i.icon-info {:data-toggle "tooltip" :data-container "body" :title (benchmark :description)}] (benchmark :name)]
               ;;  [:td [:span.benchmark (:portfolio-companies benchmark)]]
               ;;  [:td [:span.benchmark (:investor-companies benchmark)]]
               ;;  [:td [:span.benchmark (:constituencies benchmark)]]
               ;;  [:td [:span.benchmark (:turnover benchmark)]]
               ;;  [:td [:span.benchmark (pos-neg (:turnover-delta-val benchmark))]]
               ;;  [:td [:span.benchmark (:turnover-delta benchmark)]]
               ;;  [:td [:span.benchmark (:employee-count benchmark)]]
               ;;  ;; [:td [:span.benchmark (pos-neg (:employee-count-delta-val benchmark))]]
               ;;  ;; [:td [:span.benchmark (:employee-count-delta benchmark)]]
               ;;  ]
               ]]]]))))
