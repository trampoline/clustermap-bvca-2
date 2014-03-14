(ns clustermap.components.full-report
  (:require [om.core :as om :include-macros true]
            [jayq.core :refer [$]]
            [sablono.core :as html :refer-macros [html]]
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

  (let [{:keys [comm path-fn link-fn]} (om/get-shared owner)
        path-fn (partial path-fn :lists)
        link-fn (partial link-fn :lists)]
    (reify
      om/IRender
      (render [this]
        (html [:div
               (om/build overview/overview data {:opts {:comm comm} :react-key "overview"})
               (om/build charts/charts data {:opts {:comm comm} :react-key "details"})
               (if (single-company-selection? selector)
                 (when (:selection-investments data)
                   (om/build company-site-list/company-site-list (:selection-investments data) {:opts {:comm comm :link-fn link-fn :path-fn path-fn}
                                                                                                            :react-key "selection-investments"}))
                 (when (:selection-investment-aggs data)
                   (om/build company-list/company-list (:selection-investment-aggs data) {:opts {:comm comm :link-fn link-fn :path-fn path-fn}
                                                                                      :react-key "selection-investments-by-company"})))]))
      om/IDidUpdate
      (did-update [this prev-props prev-state]
        (let [root-node (om/get-node owner)]
          (-> "[data-toggle='tooltip']" ($ root-node) (.data "bs.tooltip" false)) ;; remove any existing tooltip
          (-> "[data-toggle='tooltip']" ($ root-node) .tooltip)) ;; and add again
        ))))

(defn mount
  [app-state elem-id shared]
  (om/root full-report-component
           app-state
           {:target (.getElementById js/document elem-id)
            :shared shared}))
