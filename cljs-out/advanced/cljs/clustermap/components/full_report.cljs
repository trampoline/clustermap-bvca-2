(ns clustermap.components.full-report
  (:require [om.core :as om :include-macros true]
            [jayq.core :refer [$]]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.components.full-report.overview :as overview]
            [clustermap.components.full-report.company-list :as company-list]
            [clustermap.components.full-report.company-site-list :as company-site-list]
            [clustermap.components.full-report.charts :as charts]))

(defn single-company-selection?
  [selector]
  (and (= 1 (count selector))
       (= :portfolio-company (some-> selector keys first))))

(defn full-report-component
  [{:keys [selector selection all-portfolio-companies-summary] :as data} owner]

  (let [{:keys [comm path-fn link-fn]} (om/get-shared owner)]
    (reify
      om/IRender
      (render [this]
        (html [:div
               (om/build overview/overview data {:opts {:comm comm} :react-key "overview"})
               (om/build charts/charts data {:opts {:comm comm} :react-key "details"})
               (if (single-company-selection? selector)
                 (when (:selection-portfolio-companies data)
                   (om/build company-site-list/company-site-list (:selection-portfolio-company-sites data) {:opts {:comm comm :link-fn link-fn :path-fn path-fn}
                                                                                                            :react-key "selection-portfolio-companies"}))
                 (when (:selection-portfolio-companies data)
                   (om/build company-list/company-list (:selection-portfolio-companies data) {:opts {:comm comm :link-fn link-fn :path-fn path-fn}
                                                                                              :react-key "selection-portfolio-companies"})))]))
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
