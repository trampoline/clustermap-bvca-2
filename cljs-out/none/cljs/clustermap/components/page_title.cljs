(ns clustermap.components.page-title
  (:require [cljs.core.async :refer [put!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [clustermap.om :as omu]
            [sablono.core :as html :refer [html] :include-macros true]
            [clustermap.formats.number :as nf :refer [fnum]]
            [clustermap.formats.money :as mf :refer [fmoney]]
            [clustermap.components.reset-selection-button :as rsb]))

(defn describe-type
  [type]
  (condp = type
    :portfolio-company "Portfolio Company"
    :investor-company "Investor"
    :constituency "Constituency"))

(defn page-title-component
  [{:keys [type value] :as selection} owner]
  (let [{:keys [comm path-fn]} (om/get-shared owner)
        type-descr (some-> selection :type describe-type)
        name (some-> selection :value :name)
        url (some-> selection :value :web_url)]
    (om/component
     (html [:div#page-title
            [:button.btn {:type "button"
                          :onClick (fn [e] (put! comm [:change-view "map"]))}
             "View on map"]
            (when type-descr
              (rsb/reset-selection-button path-fn))
            [:h2 (or type-descr "All portfolio companies")]
            [:h3 (or name "UK wide")
             (when (= type :constituency) [:small "\u00A0(" (:mp value) ", " (:political_party value) ")"])]
            (if url [:a {:href url :target "_blank"} url])
            ]))))

(defn mount
  [app-state elem-id shared]
  (om/root app-state
           shared
           (omu/burrow page-title-component :selection)
           (.getElementById js/document elem-id)))
