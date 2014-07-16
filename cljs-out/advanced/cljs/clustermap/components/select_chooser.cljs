(ns clustermap.components.select-chooser
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.om :as omu]
            [clustermap.routes :as routes]
            [clustermap.model :as model]
            [jayq.core :as jayq :refer [$]]
            [cljs.core.async :refer [put!]]))

(defn select-chooser-component
  [title key value-descriptions {:as cursor} owner]
  (om/component
   (html
    [:div.select-chooser
     [:div.tbl
      [:div.tbl-row
       [:div.tbl-cell title]
       [:div.tbl-cell
        [:select {:onChange (fn [e]
                              (let [val (-> e .-target .-value)]
                                (.log js/console val)
                                (om/update! cursor key val)))}
         (for [[value description] value-descriptions]
           [:option {:value value} description])]]]]])))

(defn mount
  [app-state path elem-id shared title key value-descriptions]
  (om/root (partial select-chooser-component title key value-descriptions)
           app-state
           {:shared shared
            :target (.getElementById js/document elem-id)
            :path path}))
