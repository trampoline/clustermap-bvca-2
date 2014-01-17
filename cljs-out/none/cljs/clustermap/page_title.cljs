(ns clustermap.page-title
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]))

(defn page-title
  [data]
  (let [type (some-> data (get-in [:selection :type]) name)
        name (some-> data (get-in [:selection :value]) (aget "name"))]
    (om/component
     (html [:div#page-title
            [:button.btn {:type "button"} "View on map"]
            [:h2 (or type "All portfolio companies")]
            [:h3 (or name "UK wide")]]))))

(defn mount
  [app-state elem-id]
  (om/root app-state page-title (.getElementById js/document elem-id)))
