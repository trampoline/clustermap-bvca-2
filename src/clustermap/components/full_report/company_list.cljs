(ns clustermap.components.full-report.company-list
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.time :refer [get-year]]
            [clustermap.components.table :as table]))

(defn render-many-links
  [link-fn owner-path type objs]
  (let [first-obj (first objs)
        next-objs (next objs)]
    (if next-objs
      (html
       [:div (link-fn type first-obj)
        [:a {:href owner-path} "\u00A0(more...)"]])
      (link-fn type first-obj))))

(defn pos-neg
  [value]
  (cond
   (nil? value) nil
   (> value 0) (html [:i.icon-positive])
   (< value 0) (html [:i.icon-negative])
   true nil))

(defn value-or-default
  "if the value is non-nil and non-zero then format and display the year"
  [value-formatter value & [{:keys [year default]}]]
  (if (and value (not= value 0))
    [:td (value-formatter value) (when year [:small "\u00A0(" year ")"])]
    default))

(def money-or-default
  (partial value-or-default #(fmoney % :sf 2 :default "-")))

(def int-or-default
  (partial value-or-default #(fnum % :dec 0 :default "-")))

(defn portfolio-company
  [company owner {:keys [link-fn path-fn] :as opts}]
  (let [company-path (path-fn :portfolio-company company)]
    (om/component
     (html
      [:tr
       [:td (link-fn :portfolio-company company)]
       [:td (render-many-links link-fn company-path :investor-company (:investor_companies company))]
       [:td (render-many-links link-fn company-path :constituency (some->> company :boundarylines (filter (fn [bl] (= "uk_constituencies" (:collection_id bl))))))]
       (money-or-default (:latest_turnover company) {:year (get-year (:latest_accounts_date company)) :default [:td [:small "\u00A0(n/a)"]]})
       ;; [:td (fmoney (:latest_turnover company) :sf 2 :default "-") [:small "\u00A0(" (or (get-year (:latest_accounts_date company)) "no info") ")" ]]
       [:td (pos-neg (:latest_turnover_delta company))]
       (money-or-default (and (:latest_turnover company) (:latest_turnover_delta company)) {:default [:td [:small "\u00A0(n/a)"]]})
       ;; [:td (fmoney (:latest_turnover_delta company) :sf 2 :default "-")]
       (int-or-default (:latest_employee_count company) {:year (get-year (:latest_accounts_date company)) :default [:td [:small "\u00A0(n/a)"]]})
       ;; [:td (fnum (:latest_employee_count company) :dec 0 :default "-") [:small "\u00A0(" (or (get-year (:latest_accounts_date company)) "no info") ")" ]]
       ;; [:td (pos-neg (:latest_employee_count_delta company))]
       ;;[:td (fnum (:latest_employee_count_delta company) :dec 0 :default "-") ]
       ]))))

(defn company-list
  [companies owner opts]
  (let [comm (om/get-shared owner :comm)]
    (om/component
     (html
      [:div.full-report-list
       (table/paginate comm companies :update-selection-investment-aggs-table-view)
       [:div.table-responsive
        [:table.table
         [:thead
          [:tr
           [:th (table/order-col comm companies :update-selection-investment-aggs-table-view "Investor-backed company" :name)]
           [:th "Investor"]
           [:th "Constituency"]
           [:th (table/order-col comm companies :update-selection-investment-aggs-table-view "Revenue" :latest_turnover)]
           [:th {:colSpan "2"} (table/order-col comm companies :update-selection-investment-aggs-table-view "Rev. change" :latest_turnover_delta)]
           [:th (table/order-col comm companies :update-selection-investment-aggs-table-view "Employees" :latest_employee_count)]
;;           [:th {:colSpan "2"} (table/order-col comm companies :update-selection-investment-aggs-table-view "Emp. change" :latest_employee_count_delta)]
           ]]
         [:tbody
          (om/build-all portfolio-company (:records companies) {:key :company_no :opts opts})]]]
       (table/paginate comm companies :update-selection-investment-aggs-table-view)]))))
