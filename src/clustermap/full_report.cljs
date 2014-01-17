(ns clustermap.full-report
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]))


(defn report-component
  [data])


(defn mount
  [app-state elem-id]
  (om/root app-state report-component (.getElementById js/document elem-id)))
