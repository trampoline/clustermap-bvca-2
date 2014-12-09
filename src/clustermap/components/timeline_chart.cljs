(ns clustermap.components.timeline-chart
  (:require-macros [hiccups.core :as hiccups])
  (:require
   [clojure.set :as set]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [jayq.core :refer [$]]
   [sablono.core :as html :refer-macros [html]]
   [hiccups.runtime :as hiccupsrt]
   [clustermap.formats.number :as num]
   [clustermap.formats.money :as money]))

(defn create-chart
  [data node {:keys [y0-title y1-title] :as opts}]
  (let [x-labels (map :date data)
        stats (map :stats data)
        y-median (map (comp #(num/round-decimal % 0) #(get-in % [:stats :median])) data)
        y-mean (map (comp #(num/round-decimal % 0) #(get-in % [:stats :mean])) data)
        y-total (map (comp #(num/round-decimal % 0) #(get-in % [:stats :total])) data)
        ;; y-total (into [] (concat (butlast yt) [(merge (last yt) {:color "#FF9900" :name "Not all data received for year"})]))
        ]

    (-> node
        $
        (.highcharts
         (clj->js
          {:chart {:width nil
                   :height 300}
           :title {:text nil}
           :xAxis {:categories x-labels
                   :labels {:rotation 270}}
           :yAxis [{:title {:text y0-title}
                    :min 0
                    :labels {:formatter (fn [] (this-as this (money/readable (.-value this) :sf 3 :curr "")))}
                    ;; :type "logarithmic"
                    }
                   ;; {:title {:text y1-title} :opposite true}
                   ]
           :series [
                    ;; {:name (str "Median " y0-title)
                    ;;  :type "line"
                    ;;  :yAxis 0
                    ;;  :data y-median}
                    {:name (str "Total " y0-title)
                     :type "line"
                     :yAxis 0
                     :data y-total}
                    ;; {:name y1-title
                    ;;  :type "line"
                    ;;  :yAxis 1
                    ;;  :data y-count}
                    ]})))))

(defn timeline-chart
  [data owner {:keys [id] :as opts}]
  (reify
    om/IRender
    (render [this]
      (html [:div.timeline-chart {:id id :ref "chart"}]))

    om/IDidMount
    (did-mount [this]
      (let [node (om/get-node owner)]
        (create-chart data (om/get-node owner "chart") opts)

        (-> js/document
            $
            (.on "clustermap-change-view" (fn [e]
                                            ;; only reflow charts when they are visible
                                            ;; they disappear otherwise
                                            (let [chart (-> (om/get-node owner "chart") $)]
                                              (when (.is chart ":visible")
                                                (-> chart
                                                    .highcharts
                                                    .reflow))))))))

    om/IDidUpdate
    (did-update [this prev-props prev-state]
      (let [root-node (om/get-node owner)]
        (create-chart data (om/get-node owner "chart") opts)))))
