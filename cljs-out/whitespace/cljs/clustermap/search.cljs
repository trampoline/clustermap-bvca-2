(ns clustermap.search
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]))

(defn search-box
  [data]
  (om/component
   (html [:div#search
          [:h2 "Search"]
          [:div
           [:input {:type "text" :placeholder (:message data)}]
           [:button {:type "reset"} "\u00D7"]]])))

(defn mount
  [app-state elem-id]
  (om/root app-state search-box (.getElementById js/document elem-id)))
