(ns clustermap.components.reset-selection-button
  (:require
   [cljs.core.async :refer [put!]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [sablono.core :as html :refer-macros [html]]))


(defn reset-selection-button
  [path-fn]
  (html
   [:a.btn.btn-link.btn-reset {href (path-fn nil nil)} "Reset to UK wide"]))
