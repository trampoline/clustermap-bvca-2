(ns clustermap.components.color-scale
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.om :as omu]
            [clustermap.routes :as routes]
            [clustermap.model :as model]
            [clustermap.formats.number :as number]
            [clustermap.formats.money :as money]
            [clustermap.formats.color :as color]
            [jayq.core :as jayq :refer [$]]
            [cljs.core.async :refer [put!]]))

(defn color-scale-component
  [threshold-colors owner]
  (om/component
   (html
    [:div.color-scale
     [:div.tbl
      [:div.tbl-row
       (for [[threshold color] threshold-colors]
         [:div.tbl-cell {:style {:background-color color
                                 :color (color/stand-out-color color)}}
          (money/readable threshold :sf 2 :curr "" :default "")])
]]])))
