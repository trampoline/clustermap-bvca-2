(ns clustermap.components.page-title
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
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
  [selection owner]
  (let [comm (om/get-shared owner :comm)
        type (some-> selection :type describe-type)
        name (some-> selection :value :name)]
    (om/component
     (html [:div#page-title
            [:button.btn {:type "button"
                          :onClick (fn [e] (put! comm [:change-view "map"]))}
             "View on map"]
            [:h2 (or type "All portfolio companies")]
            [:h3 (or name "UK wide")]]))))

(defn mount
  [app-state elem-id shared]
  (om/root app-state
           shared
           (omu/burrow page-title-component :selection)
           (.getElementById js/document elem-id)))
