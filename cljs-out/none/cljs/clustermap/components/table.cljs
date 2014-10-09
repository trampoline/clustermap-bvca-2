(ns clustermap.components.table
  (:require
   [cljs.core.async :refer [put!]]
   [om.core :as om :include-macros true]
   [sablono.core :as html :refer-macros [html]]
   [clustermap.api :as api]
   [clustermap.ordered-resource :as ordered-resource]
))

(defn order-col
  "generate a table-ordering link for table-headers"
  [controls
   {current-sort-spec :sort-spec :as table-data}
   col-key
   col-name]
  (let [current-sort-spec (if (sequential? current-sort-spec) (first current-sort-spec) current-sort-spec)
        current-sort-key (some-> current-sort-spec keys first)
        current-sort-dir (some-> current-sort-spec current-sort-key :order)]
    (html
     [:a
      {:href "#"
       :onClick (fn [e]
                  (.preventDefault e)
                  (condp = current-sort-dir
                    "asc" (om/update! controls :sort-spec {col-key {:order :desc}})
                    "desc" (om/update! controls :sort-spec {col-key {:order :asc}})
                    (om/update! controls :sort-spec {col-key {:order :desc}})))}
      col-name
      (if (= current-sort-key col-key)
        (condp = current-sort-dir
          "asc" [:i.icon-asc]
          [:i.icon-desc]))])))


(defn paginate
  "generate a table pagination control"
  [{controls :controls
    {count :count
     from :from
     size :size
     :as table-data} :table-data} owner opts]
  (om/component
   (html
    [:div.paginate
     (if (and from (> from 0))
       [:span.prev
        [:a {:href "#"
             :onClick (fn [e]
                        (.preventDefault e)
                        (om/update! controls :from (max 0 (- from size))))}
         [:i.icon-arrow-left]]]
       [:span.prev [:i.icon-arrow-left]])
     [:span.page
      (str (inc from) "-" (min (+ from size) count) " of " count)]
     (if (< (+ from size) count)
       [:span.next
        [:a {:href "#"
             :onClick (fn [e]
                        (.preventDefault e)
                        (om/update! controls :from (+ from size))
                        )}
         [:i.icon-arrow-right]]]
       [:span.next [:i.icon-arrow-right]])])))

(defn- render-table-row
  [{:keys [columns record]}]
  (om/component
   (html
    (let [row
          (into [:tr]
                (for [col columns]
                  (let [[col-key col-name formatter] col
                        formatter (or formatter identity)]
                    ;; (.log js/console (clj->js [col-key col-name]))
                    ;; (.log js/console (clj->js ["KEYS" col-key (type col-key) col-name (type col-name) (get record col-key)]))
                    [:td (formatter (get record col-key))])))
          ;; _ (.log js/console (clj->js ["ROW" columns record row]))
          ]
      row))))

(defn- render-table
  [{table-data :table-data
    {columns :columns
     filter-by-view :filter-by-view
     :as controls} :controls
    :as props}
   owner
   opts]
  (.log js/console (clj->js ["COLUMNS" columns]))
  (html
   [:div.full-report-list
    (om/build paginate {:controls controls :table-data table-data})
     [:div.table-responsive
      [:table.table
       [:thead
        (into [:tr]
              (for [col columns]
                       (let [[col-key col-name] col]
                         ;; (.log js/console (clj->js [col-key col-name]))
                         [:th (order-col controls table-data col-key col-name)])))]
       [:tbody
        (om/build-all render-table-row (:data table-data) {:key :key :fn (fn [r] {:columns columns
                                                                                  :record r
                                                                                  :key (:?natural_id r )})})
        ]]]
    (om/build paginate {:controls controls :table-data table-data})
     ])
  )

(defn- request-table-data
  [resource index index-type filter-spec bounds sort-spec from size]
  (ordered-resource/api-call resource
                             api/simple-table
                             index
                             index-type
                             filter-spec
                             bounds
                             sort-spec
                             from
                             size))

(defn table-component
  [{{table-data :table-data
     {index :index
      sort-spec :sort-spec
      from :from
      size :size
      columns :columns
      :as controls} :controls
     :as table-state} :table-state
     {filter-by-view :filter-by-view
      filter-spec :compiled} :filter-spec
    bounds :bounds
    :as props}
   owner]

  (reify
    om/IDidMount
    (did-mount [_]
      (let [tdr (ordered-resource/make-discard-stale-resource "table-data-resource")]
        (om/set-state! owner :table-data-resource tdr)
        (ordered-resource/retrieve-responses tdr (fn [data] (om/update! table-state [:table-data] data))))
      )

    om/IRender
    (render [_]
      (render-table {:table-data table-data :controls controls} owner {}))

    om/IWillUpdate
    (will-update [_
                  {{next-table-data :table-data
                    {next-index :index
                     next-index-type :index-type
                     next-sort-spec :sort-spec
                     next-from :from
                     next-size :size
                          :as next-controls} :controls
                    :as next-table-state} :table-state
                    {next-filter-by-view :filter-by-view
                     next-filter-spec :compiled} :filter-spec
                    next-bounds :bounds
                   :as next-props}
                  {table-data-resource :table-data-resource
                   :as next-state}]

      (when (or (not next-table-data)
                (not= next-controls controls)
                (not= next-sort-spec sort-spec)
                (not= next-filter-spec filter-spec)
                (not= next-filter-by-view filter-by-view)
                (and next-filter-by-view (not= next-bounds bounds)))

        (request-table-data table-data-resource
                            next-index
                            next-index-type
                            next-filter-spec
                            (when next-filter-by-view next-bounds)
                            next-sort-spec
                            next-from
                            next-size))
      )))
