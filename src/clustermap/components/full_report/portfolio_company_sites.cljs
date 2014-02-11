(ns clustermap.components.full-report.portfolio-company-sites
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.time :refer [get-year]]))

(defn render-many-links
  [link-fn owner-path type objs]
  (let [first-obj (first objs)
        next-objs (next objs)]
    (if next-objs
      (html
       [:div (link-fn type first-obj)
        [:a {:href owner-path} "\u00A0(" (count next-objs) " more...)"]])
      (link-fn type first-obj))))

(defn portfolio-company-site
  [site owner {:keys [link-fn path-fn] :as opts}]
  (let [company-path (path-fn :portfolio-company site)]
    (om/component
     (html
      [:tr
       [:td (link-fn :portfolio-company site)]
       [:td (render-many-links link-fn company-path :investor-company (:investor_companies site))]
       [:td (render-many-links link-fn company-path :constituency (some->> site :boundarylines (filter (fn [bl] (= "uk_constituencies" (:collection_id bl))))))]
       [:td (fmoney (:latest_turnover site) :sf 2 :default "-")
        [:small "\u00A0(" (get-year (:latest_accounts_date site)) ")" ]]
       [:td (fmoney (:latest_turnover_delta site) :sf 2 :default "-")]
       [:td (fnum (:latest_employee_count site) :default "-")
        [:small "\u00A0(" (get-year (:latest_accounts_date site)) ")" ]]
       [:td (fnum (:latest_employee_count_delta site) :default "-")]]))))

(defn portfolio-company-sites
  [selection-portfolio-company-sites owner opts]
  (om/component
       (html
        [:div.full-report-portfolio-company-sites
         [:div.table-responsive
          [:table.table
           [:thead
            [:tr
             [:th "Portfolio Company"]
             [:th "Investor"]
             [:th "Constituency"]
             [:th "Revenue"]
             [:th "Rev. change"]
             [:th "Employees"]
             [:th "Emp. change"]]]
           [:tbody
            (om/build-all portfolio-company-site (:records selection-portfolio-company-sites) {:key :portfolio_company_id :opts opts})]]]])))
