(ns clustermap.components.search
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :refer [html] :include-macros true]
            [clustermap.om :as omu]
            [jayq.core :as jayq :refer [$]]
            [cljs.core.async :refer [put!]]))

(def ESCAPE_KEY 27)
(def ENTER_KEY 13)
(def LEFT_ARROW 37)
(def UP_ARROW 38)
(def RIGHT_ARROW 39)
(def DOWN_ARROW 40)

(defn search-result-link
  [search-result owner {:keys [comm type] :as opts}]
  (reify
    om/IRenderState
    (render-state [this state]
      (html [:li {:class (when (:selected state) "selected")}
             [:a {:onClick (fn [e] (put! comm [:select [type @search-result]]))}
              (search-result :name)
              (if (:selected state) "*")]]))))

(defn nth-search-result
  [{:keys [constituencies portfolio_companies investor_companies]} n]
  (cond
   (< (count (or constituencies [])))
   [:constituency (get constituencies n)]

   (< (+ (count (or constituencies []))
         (count (or portfolio_companies []))))
   [:portfolio-company (get portfolio_companies (- n (count (or constituencies []))))]

   true
   [:investor-company
    (get (or investor_companies []) (- n (count (or constituencies [])) (count (or portfolio_companies []))))]))

(defn key-down [e search-results owner comm]
  (.log js/console (om/get-state owner :selected-idx))
  (condp == (.-keyCode e)
    ESCAPE_KEY (some-> (om/get-node owner "search-component") $ .toggle)
    ENTER_KEY (let [[type res] (nth-search-result @search-results (or (om/get-state owner :selected-idx) 0))]
                (put! comm [:select [type res]]))
    UP_ARROW (om/set-state! owner :selected-idx (dec (or (om/get-state owner :selected-idx) 0)))
    DOWN_ARROW (om/set-state! owner :selected-idx (inc (or (om/get-state owner :selected-idx) 0)))
    (.log js/console (.-keyCode e))))

(defn search-component
  [search-results owner]
  (let [comm (om/get-shared owner :comm)
        {:keys [constituencies portfolio_companies investor_companies]} search-results]
    (reify
      om/IRenderState
      (render-state [this state]
        (dom/div #js {:ref "search-component"
                      :id "search"
                      :onKeyDown (fn [e] (key-down e search-results owner comm))}
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
                   (let [idx-cons (map vector (iterate inc 0) constituencies)
                         idx-pcs (map vector (iterate inc (count idx-cons)) portfolio_companies)
                         idx-invs (map vector (iterate inc (+ (count idx-cons) (count idx-pcs))) investor_companies)
                         selected-idx (mod (or (:selected-idx state) 0) (+ (count idx-cons) (count idx-pcs) (count idx-invs)))
                         _ (if (not= selected-idx (:selected-idx state)) (om/set-state! owner :selected-idx selected-idx))]
                     (dom/div #js {:className "search-results"}
                              (apply dom/ul #js {}
                                     (concat
                                      (when (not-empty idx-cons)
                                        (into
                                         [(dom/li #js {:className "search-results-header"} "Constituencies")]
                                         (for [[idx con] idx-cons]
                                           (om/build search-result-link con {:opts {:comm comm :type :constituency} :state {:selected (= idx selected-idx)}}))))
                                      (when (not-empty idx-pcs)
                                        (into
                                         [(dom/li #js {:className "search-results-header"} "Companies")]
                                         (for [[idx pc] idx-pcs]
                                           (om/build search-result-link pc {:opts {:comm comm :type :portfolio-company} :state {:selected (= idx selected-idx)}}))))
                                      (when (not-empty idx-invs)
                                        (into
                                         [(dom/li #js {:className "search-results-header"} "Investors")]
                                         (for [[idx inv] idx-invs]
                                           (om/build search-result-link inv {:opts {:comm comm :type :investor-company} :state {:selected (= idx selected-idx)}}))))))))))
        ))))

(defn mount
  [app-state elem-id comm]
  (om/root app-state
           {:comm comm}
           (omu/burrow search-component :search-results)
           (.getElementById js/document elem-id)))
