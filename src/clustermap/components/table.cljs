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
                (apply concat
                       (for [col columns]
                         (for [[col-key col-name] col]
                           (do
                             ;; (.log js/console (clj->js ["KEYS" col-key (type col-key) col-name (type col-name) (get record col-key)]))
                             [:td (get record col-key)])))))
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
  (html
   [:div.full-report-list
    (om/build paginate {:controls controls :table-data table-data})
    [:label "Filter by view"
     [:input {:type "checkbox" :name "filter-by-view" :value (str (boolean filter-by-view))
              :onChange (fn [e] (let [val (-> e .-target .-checked)]
                                  (om/update! controls [:filter-by-view] val)))}]]

     [:div.table-responsive
      [:table.table
       [:thead
        (into [:tr]
              (apply concat
                     (for [col columns]
                       (for [[col-key col-name] col]
                         [:th col-name]))))]
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
      filter-by-view :filter-by-view
      columns :columns
      :as controls} :controls
     :as table-state} :table-state
    filter-spec :filter
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
                     next-filter-by-view :filter-by-view
                     :as next-controls} :controls
                    :as next-table-state} :table-state
                    next-filter-spec :filter
                    next-bounds :bounds
                   :as next-props}
                  {table-data-resource :table-data-resource
                   :as next-state}]

      (when (or (not next-table-data)
                (not= next-controls controls)
                (not= next-filter-spec filter-spec)
                (and next-filter-by-view
                     (or (not filter-by-view)
                         (not= next-bounds bounds))))

        (request-table-data table-data-resource
                            next-index
                            next-index-type
                            next-filter-spec
                            (when next-filter-by-view next-bounds)
                            next-sort-spec
                            next-from
                            next-size))
      )))
