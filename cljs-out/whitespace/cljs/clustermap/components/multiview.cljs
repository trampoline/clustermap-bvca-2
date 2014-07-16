(ns clustermap.components.multiview
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :as html :refer-macros [html]]
            [clustermap.om :as omu]
            [clustermap.routes :as routes]
            [clustermap.model :as model]
            [jayq.core :as jayq :refer [$]]
            [cljs.core.async :refer [put!]]
            [clustermap.components.filter :as filter-component]))

(defn multiview-component
  [{filter-spec :filter :as cursor} owner]

  (reify

    om/IRenderState
    (render-state [this state]
      (html
       [:div.search-component#search
        (om/build filter-component/filter-component filter-spec)]))

    om/IWillUpdate
    (will-update [this
                  {{next-compiled-filter :compiled} :filter
                   next-views :views}
                  next-state]
      (let [{{compiled-filter :compiled} :filter
             views :views} (om/get-props owner)]

        (when (not= next-compiled-filter compiled-filter)
          (doseq [view-key (keys next-views)]
            (om/update! cursor [:views view-key :filter] next-compiled-filter)))))))

(defn mount
  [app-state path elem-id shared]
  (om/root multiview-component
           app-state
           {:shared shared
            :target (.getElementById js/document elem-id)
            :path path}))
