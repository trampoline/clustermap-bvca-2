(ns clustermap.nav
  (:require [goog.dom :as dom]
            [goog.dom.classes :as cl]
            [goog.events :as events]
            [cljs.core.async :refer [put! chan <!]])
  (:import [goog.dom query]))

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

(defn init
  []
  (events/listen (aget (query "#nav .search > a") 0)
                 "click"
                 (fn [e]
                   (.log js/console "boo")
                   (.preventDefault e)
;;                   (cl/toggle)
                   ))

;;  (clicks (listen dom/ ""))
;;  (go (while true)
;;      (<! )  )
  )
