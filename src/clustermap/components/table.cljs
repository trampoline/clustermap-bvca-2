(ns clustermap.components.table
  (:require
   [cljs.core.async :refer [put!]]
   [sablono.core :as html :refer [html] :include-macros true]))

(defn order-col
  [comm collection view-update-key title col]
  (let [current-order (:order collection)
        current-order (if (sequential? current-order) (first current-order) current-order)
        current-order-key (-> current-order keys first)
        current-order-dir (-> current-order vals first)]
    (html
     [:a
      {:onClick (fn [e]
                  (.preventDefault e)
                  (condp = current-order-dir
                    "asc" (put! comm [view-update-key {:order {col :desc}}])
                    "desc" (put! comm [view-update-key {:order {col :asc}}])
                    (put! comm [view-update-key {:order {col :desc}}])))}
      title
      (if (= current-order-key col)
        (condp = current-order-dir
          "asc" [:i.icon-asc]
          [:i.icon-desc]))])))
