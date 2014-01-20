(ns clustermap.components.search
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [jayq.core :as jayq :refer [$]]
            [cljs.core.async :refer [put!]]))

(def ESCAPE_KEY 27)
(def ENTER_KEY 13)

(defn search-result-link
  [search-result owner {:keys [comm type] :as opts}]
  (om/component
   (dom/li #js {}
           (dom/a #js {:onClick (fn [e] (put! comm [:select [type (om/read search-result om/value)]]))}
                  (search-result "name")))))

(defn key-down [e search-results owner comm]
  (condp == (.-keyCode e)
    ESCAPE_KEY (some-> (om/get-node owner "search-component") $ .toggle)
    nil))

(defn search-box
  [comm {:keys [search-results] :as data} owner]
  (let [{:strs [constituencies portfolio_companies investor_companies]} search-results]
    (om/component
     (dom/div #js {:ref "search-component"
                   :id "search"
                   :onKeyDown (om/bind key-down search-results owner comm)}
              (dom/h2 nil "Search")
              (dom/div nil
                       (dom/input #js {:ref "search-field"
                                       :type "text"
                                       :placeholder "Enter your search"
                                       :onChange (fn [e]  (put! comm [:search (.. e -target -value)]))})
                       (dom/button #js {:type "reset"
                                        :onClick (fn [e]
                                                   (put! comm [:search ""])
                                                   (set! (.-value (om/get-node owner "search-field")) ""))}
                                   "\u00D7"))
              (when (or (not-empty constituencies) (not-empty portfolio_companies) (not-empty investor_companies))
                (dom/div #js {:className "search-results"}
                         (apply dom/ul #js {}
                                (concat
                                 (when (not-empty constituencies)
                                   [(dom/li #js {:className "search-results-header"} "Constituencies")
                                    (om/build-all search-result-link constituencies {:opts {:comm comm :type :constituency}})])
                                 (when (not-empty portfolio_companies)
                                   [(dom/li #js {:className "search-results-header"} "Companies")
                                    (om/build-all search-result-link portfolio_companies {:opts {:comm comm :type :portfolio-company}})])
                                 (when (not-empty investor_companies)
                                   [(dom/li #js {:className "search-results-header"} "Investors")
                                    (om/build-all search-result-link investor_companies {:opts {:comm comm :type :investor-company}})])))))))))

(defn mount
  [app-state elem-id comm]
  (om/root app-state (partial search-box comm) (.getElementById js/document elem-id)))
