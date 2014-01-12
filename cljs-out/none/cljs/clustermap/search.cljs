(ns clustermap.search
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put!]]
            [sablono.core :as html :refer [html] :include-macros true]))


(defn search-result-link
  [search-result owner opts]
  (om/component
   (dom/li #js {}
           (dom/a #js {:href= "#"
                       :onClick (fn [e] (.log js/console #js [e search-result]))}
                  (search-result "name")))))

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
              (when (or (not-empty constituencies) (not-empty portfolio_companies) (not-empty investor_companies))
                (dom/div #js {:className "search-results"}
                         (apply dom/ul #js {}
                                (concat
                                 (when (not-empty constituencies)
                                   [(dom/li #js {:className "search-results-header"} "Constituencies")
                                    (om/build-all search-result-link constituencies {:opts {:comm comm :type "Constituency"}})])
                                 (when (not-empty portfolio_companies)
                                   [(dom/li #js {:className "search-results-header"} "Companies")
                                    (om/build-all search-result-link portfolio_companies {:opts {:comm comm :type "Company"}})])
                                 (when (not-empty investor_companies)
                                   [(dom/li #js {:className "search-results-header"} "Investors")
                                    (om/build-all search-result-link investor_companies {:opts {:comm comm :type "Investor"}})])))))))))

(defn mount
  [app-state elem-id comm]
  (om/root app-state (partial search-box comm) (.getElementById js/document elem-id)))
