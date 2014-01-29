(ns clustermap.components.full-report
  (:require [om.core :as om :include-macros true]
            [jayq.core :refer [$]]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.components.full-report.overview :as overview]
            [clustermap.components.full-report.portfolio-company-sites :as pcs]
            [clustermap.components.full-report.details :as details]))

(defn full-report-component
  [{:keys [selection all-portfolio-companies-summary] :as data} owner]

  (let [comm (om/get-shared owner :comm)]
    (reify
      om/IRender
      (render [this]
        (html [:div
               (om/build overview/overview data {:opts {:comm comm}})
               (om/build details/details data {:opts {:comm comm}})
               (when (:selection-portfolio-company-sites data)
                 (om/build pcs/portfolio-company-sites (:selection-portfolio-company-sites data) {:opts {:comm comm}}))]))
      om/IDidUpdate
      (did-update [this prev-props prev-state root-node]
        (-> "[data-toggle='tooltip']" ($ root-node) (.data "bs.tooltip" false)) ;; remove any existing tooltip
        (-> "[data-toggle='tooltip']" ($ root-node) .tooltip) ;; and add again
        ))))

(defn mount
  [app-state elem-id comm]
  (om/root app-state
           {:comm comm}
           full-report-component
           (.getElementById js/document elem-id)))
