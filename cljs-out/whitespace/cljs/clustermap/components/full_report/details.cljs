(ns clustermap.components.full-report.details
  (:require [om.core :as om :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]))

(defn details
  [data owner]
  (om/component
   (html
    [:div.full-report-details "details"])))
