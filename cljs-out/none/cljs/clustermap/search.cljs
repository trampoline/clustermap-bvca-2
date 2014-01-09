(ns clustermap.search
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put!]]
            [sablono.core :as html :refer [html] :include-macros true]))


(defn search-result-link
  [search-result owner opts]
  (om/component
   (dom/li nil
           (dom/a {:href= "#"}
                  (search-result "name")
                  (dom/small nil (str " (" (:type opts) ")"))))))

(defn search-box
  [comm {:keys [search-results] :as data} owner]
  (let [{:strs [constituencies portfolio_companies investor_companies]} search-results]
    (om/component
     (dom/div #js {:id "search"}
              (dom/h2 nil "Search")
              (dom/div nil
                       (dom/input #js {:type "text"
                                       :placeholder "Enter your search"
                                       :onChange (fn [e]  (put! comm [:search (.. e -target -value)]))})
                       (dom/button #js {:type "reset"} "\u00D7"))
              (if (or (not-empty constituencies) (not-empty portfolio_companies) (not-empty investor_companies))
                (dom/div #js {:id "results"}
                         (dom/ul nil
                                 (om/build-all search-result-link constituencies {:opts {:comm comm :type "Constituency"}}))
                         (dom/ul nil
                                 (om/build-all search-result-link portfolio_companies {:opts {:comm comm :type "Company"}}))
                         (dom/ul nil
                                 (om/build-all search-result-link investor_companies {:opts {:comm comm :type "Investor"}}))))))))

(defn mount
  [app-state elem-id comm]
  (om/root app-state (partial search-box comm) (.getElementById js/document elem-id)))
