(ns clustermap.components.reset-selection-button
  (:require
   [cljs.core.async :refer [put!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer [html] :include-macros true]))


(defn reset-selection-button
  [path-fn]
  (html
   [:a {href (path-fn nil nil)}
    [:button.btn.btn-link.btn-reset {:type "reset"} "Reset to UK wide"]]))
