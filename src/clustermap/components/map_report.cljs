(ns clustermap.components.map-report
  (:require [cljs.core.async :refer [put!]]
            [domina.events :as events]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.api :as api]
            [clustermap.ordered-resource :as ordered-resource]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.formats.string :as sf :refer [pluralize]]
            [clustermap.components.reset-selection-button :as rsb]))

(defn full-report-button
  [comm view-path-fn]
  (html [:a.btn.btn-link {:href (view-path-fn :lists)}
         [:i.icon-lists-sm]
         "Full report"]))

(defn summary-stats-report
  [comm view-path-fn
   {{{sum-employee-count :sum count :viewfilter_doc_count} :!latest_employee_count
     {sum-turnover :sum} :!latest_turnover
     :as data} :data
    :as summary-stats-data}]
  (html [:div
           [:div.header.secondary
            [:h2 "Summary stats"]
            ;; [:h3 "UK wide"]
            ]
           [:ul
            [:li (fnum count :default "-") [:small "Companies"]]
            [:li (fmoney sum-turnover :sf 2 :default "-") [:small "Total revenue"]]
            [:li (fnum sum-employee-count :dec 0 :default "-") [:small "Total employees"]]]
           (full-report-button comm view-path-fn)]))

(defn request-summary-stats
  [resource index index-type attrs filter bounds]
  (ordered-resource/api-call resource
                             api/summary-stats
                             index
                             index-type
                             attrs
                             filter
                             bounds))

(defn map-report-component
  [{filt :filter
    {{{:keys [index index-type variables]
       :as summary-stats} :summary-stats
       :as controls} :controls
       summary-stats-data :summary-stats-data
       :as map-report} :map-report
    :as data}
   owner]

  (reify
    om/IDidMount
    (did-mount [_]
      (let [ssr (ordered-resource/make-discard-stale-resource "summary-stats")]
        (om/set-state! owner :summary-stats-resource ssr)
        (ordered-resource/retrieve-responses ssr (fn [ss] (om/update! map-report [:summary-stats-data] ss)))))

    om/IRenderState
    (render-state [_ state]
      (let [{:keys [comm path-fn view-path-fn]} (om/get-shared owner)]
        (summary-stats-report comm view-path-fn summary-stats-data))
      )

    om/IWillUpdate
    (will-update [_
                  {next-filt :filter
                   {{{next-index :index
                      next-index-type :index-type
                      next-variables :variables
                      :as next-summary-stats} :summary-stats
                      :as next-controls} :controls
                      next-summary-stats-data :summary-stats-data
                    :as next-map-report} :map-report
                   :as next-data}
                  {:keys [summary-stats-resource]
                   :as next-state}]

      (when (or (not next-summary-stats-data)
                (not= next-filt filt))

        (request-summary-stats summary-stats-resource
                               next-index
                               next-index-type
                               next-variables
                               next-filt
                               nil)))

    )
  )
