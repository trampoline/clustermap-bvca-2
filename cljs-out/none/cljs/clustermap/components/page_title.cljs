(ns clustermap.components.page-title
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clustermap.om :as omu]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]))

(defn describe-type
  [type]
  (condp = type
    :portfolio-company "Portfolio Company"
    :investor-company "Investor"
    :constituency "Constituency"))

(defn page-title-component
  [selection]
  (let [type (some-> selection :type describe-type)
        name (some-> selection :value :name)]
    (om/component
     (html [:div#page-title
            [:button.btn {:type "button"} "View on map"]
            [:h2 (or type "All portfolio companies")]
            [:h3 (or name "UK wide")]]))))

(defn mount
  [app-state elem-id]
  (om/root app-state
           (omu/burrow page-title-component :selection)
           (.getElementById js/document elem-id)))
