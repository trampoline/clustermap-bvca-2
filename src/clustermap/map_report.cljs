(ns clustermap.map-report
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer [html] :include-macros true]))

(defn widget [data]
  (om/component
   (html [:div (:message data)])))

(def app (atom nil))

(defn mount
  [state]
  (om/root state widget (.getElementById js/document "map-report")))
