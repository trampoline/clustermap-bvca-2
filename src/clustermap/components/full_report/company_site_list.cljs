(ns clustermap.components.full-report.company-site-list
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.time :refer [get-year]]
            [clustermap.components.table :as table]))

(defn investment
  [investment owner {:keys [link-fn path-fn] :as opts}]
  (let [company-path (path-fn :portfolio-company investment)]
    (om/component
     (html
      [:tr
       [:td (link-fn :portfolio-company {:company_no (:portfolio_company_no investment)
                                         :name (:portfolio_company_name investment)})]
       [:td (:portfolio_company_site_postcode investment)]
       [:td (link-fn :investor-company {:investor_company_uid (:investor_company_uid investment)
                                        :name (:investor_company_name investment)})]
       [:td (link-fn :constituency {:boundaryline_id (:boundaryline_id investment)
                                    :compact_name (:boundaryline_compact_name investment)})]]))))

(defn company-site-list
  [investments owner opts]
  (let [comm (om/get-shared owner :comm)]
    (om/component
     (html
      [:div.full-report-list
       [:div.table-responsive
        [:table.table
         [:thead
          [:tr
           [:th (table/order-col comm investments :update-selection-investments-table-view "Portfolio Company" :!portfolio_company_name_na)]
           [:th (table/order-col comm investments :update-selection-investments-table-view "Postcode" :?portfolio_company_site_postcode)]
           [:th (table/order-col comm investments :update-selection-investments-table-view "Investor" :?investor_company_name_na)]
           [:th (table/order-col comm investments :update-selection-investments-table-view "Constituency" :?boundaryline_compact_name_na)]]]
         [:tbody
          (om/build-all investment (:records investments) {:key :investment_uid :opts opts})]]]]))))
