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
  (let [x-labels (map first data)
        y-mean (map :mean data)
        y-count (map :count data)
        yt (->> data (map :total) (map (fn [t] {:y t})))
        ;; y-total (into [] (concat (butlast yt) [(merge (last yt) {:color "#FF9900" :name "Not all data received for year"})]))
        y-total yt
        ]
    (-> node
        $
        (.highcharts
         (clj->js
          {:chart {:width nil}
           :title {:text nil}
           :xAxis {:categories x-labels
                   :labels {:rotation 270}}
           :yAxis [{:title {:text y0-title}
                    ;; :type "logarithmic"
                    }
                   ;; {:title {:text y1-title} :opposite true}
                   ]
           :series [{:name y0-title
                     :type "boxplot"
                     :yAxis 0
                     :data data}
                    ;; {:name (str "Mean " y0-title)
                    ;;  :type "line"
                    ;;  :yAxis 0
                    ;;  :data y-mean}
                    ;; {:name y1-title
                    ;;  :type "line"
                    ;;  :yAxis 1
                    ;;  :data y-count}
                    ]})))))

(defn timeline-chart
  [data owner opts]
  (reify
    om/IRender
    (render [this]
      (html [:div.timeline-chart {:ref "chart"}]))

    om/IDidMount
    (did-mount [this node]
      (create-chart data (om/get-node owner "chart") opts))

    om/IDidUpdate
    (did-update [this prev-props prev-state root-node]
      (create-chart data (om/get-node owner "chart") opts))))
