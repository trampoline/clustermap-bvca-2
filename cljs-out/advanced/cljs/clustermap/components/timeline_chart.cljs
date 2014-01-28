(ns clustermap.components.timeline-chart
  (:require-macros [hiccups.core :as hiccups])
  (:require
   [clojure.set :as set]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [jayq.core :refer [$]]
   [sablono.core :as html :refer [html] :include-macros true]
   [hiccups.runtime :as hiccupsrt]))

(defn create-chart
  [data node {:keys [y0-title y1-title] :as opts}]
  (.log js/console (clj->js opts))
  (let [x-labels (map :time data)
        y-total (map :total data)
        y-mean (map :mean data)
        y-count (map :count data)]
    (-> node
        $
        (.highcharts
         (clj->js
          {:title {:text nil}
           :xAxis {:categories x-labels
                   :labels {:rotation 270}}
           :yAxis [{:title {:text y0-title}}
                   {:title {:text y1-title}
                    :opposite true}]
           :series [{:name y0-title
                     :type "column"
                     :yAxis 0
                     :data y-total}
                    {:name (str "Mean " y0-title)
                     :type "line"
                     :yAxis 0
                     :data y-mean}
                    {:name y1-title
                     :type "line"
                     :yAxis 1
                     :data y-count}]})))))

(defn timeline-chart
  [data owner opts]
  (.log js/console (clj->js ["OPTS:" opts]))
  (reify
    om/IRenderState
    (render-state [this {rendered-data :rendered-data}]

      (let [new-data @data]
        (when-not (= rendered-data new-data)
          (om/set-state! owner :rendered-data new-data)))

      (html [:div.timeline-chart {:ref "chart"}]))

    om/IDidUpdate
    (did-update [this prev-props prev-state root-node]

      (create-chart @data (om/get-node owner "chart") opts))))
