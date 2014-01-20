(ns clustermap.components.full-report
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]))


(defn overview
  [data owner]
  (om/component
   (html [:div.full-report-overview "overview"])))

(defn portfolio-company-sites
  [data owner]
  (om/component
   (html [:div.full-report-portfolio-company-sites "portfolio-company-sites"])))

(defn details
  [data owner]
  (om/component
   (html [:div.full-report-details "details"])))

(defn full-report-component
  [data owner]
  (om/component
   (html [:div
          (om/build overview data)
          (om/build portfolio-company-sites data)
          (om/build details data)])))

(defn mount
  [app-state elem-id]
  (om/root app-state full-report-component (.getElementById js/document elem-id)))
