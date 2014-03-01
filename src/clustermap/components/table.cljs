(ns clustermap.components.table
  (:require
   [cljs.core.async :refer [put!]]
   [sablono.core :as html :refer [html] :include-macros true]))

(defn order-col
  "generate a table-ordering link for table-headers"
  [comm collection view-update-key title col]
  (let [current-order (:order collection)
        current-order (if (sequential? current-order) (first current-order) current-order)
        current-order-key (-> current-order keys first)
        current-order-dir (-> current-order vals first)]
    (html
     [:a
      {:href "#"
       :onClick (fn [e]
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


(defn paginate
  "generate a table pagination control"
  [comm {:keys [count from size] :as collection} view-update-key]
  (html
   [:div.paginate
    (if (> from 0)
      [:span.prev
       [:a {:href "#"
            :onClick (fn [e]
                       (.preventDefault e)
                       (put! comm [view-update-key {:from (max (- from size) 0)}]))}
        [:i.icon-arrow-left]]]
      [:span.prev [:i.icon-arrow-left]])
    [:span.page
     (str (inc from) "-" (min (+ from size) count) " of " count)]
    (if (< (+ from size) count)
      [:span.next
       [:a {:href "#"
            :onClick (fn [e]
                       (.preventDefault e)
                       (put! comm [view-update-key {:from (min (+ from size) (- count size))}]))}
        [:i.icon-arrow-right]]]
      [:span.next [:i.icon-arrow-right]])]))
