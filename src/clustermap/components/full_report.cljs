(ns clustermap.components.full-report
  (:require [om.core :as om :include-macros true]
            [jayq.core :refer [$]]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.components.full-report.overview :as overview]
            [clustermap.components.full-report.list :as list]
            [clustermap.components.full-report.charts :as charts]))

(defn full-report-component
  [{:keys [selection all-portfolio-companies-summary] :as data} owner]

  (let [{:keys [comm path-fn link-fn]} (om/get-shared owner)]
    (reify
      om/IRender
      (render [this]
        (html [:div
               (om/build overview/overview data {:opts {:comm comm} :react-key "overview"})
               (om/build charts/charts data {:opts {:comm comm} :react-key "details"})
               (when (:selection-portfolio-companies data)
                 (om/build list/list (:selection-portfolio-companies data) {:opts {:comm comm :link-fn link-fn :path-fn path-fn}
                                                                                              :react-key "selection-portfolio-companies"})
                 )]))
      om/IDidUpdate
      (did-update [this prev-props prev-state root-node]
        (-> "[data-toggle='tooltip']" ($ root-node) (.data "bs.tooltip" false)) ;; remove any existing tooltip
        (-> "[data-toggle='tooltip']" ($ root-node) .tooltip) ;; and add again
        ))))

(defn mount
  [app-state elem-id shared]
  (om/root app-state
           shared
           full-report-component
           (.getElementById js/document elem-id)))
