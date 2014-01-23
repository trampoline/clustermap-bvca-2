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
     [:td "name"]
     [:td "postcode"]
     [:td "investor"]
     [:td "revenue"]
     [:td "rev change"]
     [:td "employees"]
     [:td "emp change"]])))

(defn portfolio-company-sites
  [data owner]
;;  (.log js/console data)
  (let [sites (-lookup data :selection-portfolio-company-sites)]
;;    (.log js/console sites)
    (om/component
       (html
        [:div.full-report-portfolio-company-sites
         [:div.table-responsive
          [:table.table
           [:thead
            [:tr
             [:th "Company"]
             [:th "Postcode"]
             [:th "Investor"]
             [:th "Revenue"]
             [:th "Rev. change"]
             [:th "Employees"]
             [:th "Emp. change"]]]
           [:tbody
            (when sites
              (om/build-all portfolio-company-site sites))]]

          ]]))))
