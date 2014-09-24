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
  [map-report-data comm view-path-fn
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
          [:li [:input {:type "checkbox" :name "filter-by-view" :value "true"
                        :onChange (fn [e] (let [val (-> e .-target .-checked)]
                                            (om/update! map-report-data [:controls :summary-stats :filter-by-view] val)))}]
           [:small "Filter by view"]]
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
    {{{:keys [index index-type variables filter-by-view]
       :as summary-stats} :summary-stats
       :as controls} :controls
       summary-stats-data :summary-stats-data
       :as map-report} :map-report
    {:keys [bounds]} :map-controls
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
        (summary-stats-report map-report comm view-path-fn summary-stats-data))
      )

    om/IWillUpdate
    (will-update [_
                  {next-filt :filter
                   {{{next-index :index
                      next-index-type :index-type
                      next-variables :variables
                      next-filter-by-view :filter-by-view
                      :as next-summary-stats} :summary-stats
                      :as next-controls} :controls
                      next-summary-stats-data :summary-stats-data
                      :as next-map-report} :map-report
                   {next-bounds :bounds :as map-controls} :map-controls
                   :as next-data}
                  {:keys [summary-stats-resource]
                   :as next-state}]

      (when (or (not next-summary-stats-data)
                (not= next-filt filt)
                (not= next-filter-by-view filter-by-view)
                (and next-filter-by-view (not= next-bounds bounds)))

        (request-summary-stats summary-stats-resource
                               next-index
                               next-index-type
                               next-variables
                               next-filt
                               (when next-filter-by-view (om/-value next-bounds)))))

    )
  )
