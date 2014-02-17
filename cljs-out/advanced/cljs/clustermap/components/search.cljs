(ns clustermap.components.search
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [sablono.core :refer [html] :include-macros true]
            [clustermap.om :as omu]
            [clustermap.routes :as routes]
            [clustermap.model :as model]
            [jayq.core :as jayq :refer [$]]
            [cljs.core.async :refer [put!]]))

(def ESCAPE_KEY 27)
(def ENTER_KEY 13)
(def LEFT_ARROW 37)
(def UP_ARROW 38)
(def RIGHT_ARROW 39)
(def DOWN_ARROW 40)

(defn search-result-link
  [{:keys [name type] :as search-result} owner {:keys [comm path-fn] :as opts}]
  (reify
    om/IRenderState
    (render-state [this {:keys [selected] :as state}]
      (let [path (path-fn type search-result)]
        (html [:li {:class (when selected "selected")}
               [:a {:href path
                    :ref "link"
                    :onClick (fn [e]
                               (let [l (om/get-node owner "link")]
                                 (some-> l $ (.parents ".search-component") .toggle)))}
                name
                (if selected "*")]])))))

(defn nth-search-result
  [{:keys [constituencies portfolio_companies investor_companies]} n]
  (let [cons (or constituencies [])
        pcs (or portfolio_companies [])
        invs (or investor_companies [])]
    (cond
     (< n (count cons))
     [:constituency (get constituencies n)]

     (< n (+ (count cons) (count pcs)))
     [:portfolio-company (get pcs (- n (count cons)))]

     true
     [:investor-company
      (get invs (- n (count cons) (count pcs)))])))

(defn key-down [e search-results owner comm]
  (condp == (.-keyCode e)
    ESCAPE_KEY (some-> (om/get-node owner "search-component") $ .toggle)
    ENTER_KEY (let [[type res] (nth-search-result @search-results (or (om/get-state owner :selected-idx) 0))]
                (some-> (om/get-node owner "search-component") $ .toggle)
                (put! comm [:select [type (model/extract-id type res)]]))
    UP_ARROW (om/set-state! owner :selected-idx (dec (or (om/get-state owner :selected-idx) 0)))
    DOWN_ARROW (om/set-state! owner :selected-idx (inc (or (om/get-state owner :selected-idx) 0)))
    nil))

(defn search-component
  [search-results owner]
  (let [{:keys [comm path-fn]} (om/get-shared owner)
        {:keys [constituencies portfolio_companies investor_companies]} search-results]
    (reify
      om/IRenderState
      (render-state [this state]
        (html
         [:div {:ref "search-component"
                :class "search-component"
                :id "search"
                :onKeyDown (fn [e] (key-down e search-results owner comm))}

          [:div {:class "tbl"}
           [:div {:class "tbl-cell" :style {:width "100%"}}
            [:input {:ref "search-field"
                     :type "text"
                     :placeholder "Search"
                     :onChange (fn [e]  (put! comm [:search (.. e -target -value)]))}]]
           [:div {:class "tbl-cell" :style {:width "34"}}
            [:button {:type "reset"
                      :onClick (fn [e] (put! comm [:search ""])
                                 (set! (.-value (om/get-node owner "search-field")) ""))}
             "\u00D7"]]
           [:div {:class "tbl-cell" :style {:width "136"}}
            [:a {:href (path-fn nil nil)}
             [:button {:class "btn-reset" :type "reset"}
              "Reset to UK wide"]]]]

          (when (or (not-empty constituencies) (not-empty portfolio_companies) (not-empty investor_companies))
            (let [idx-cons (map vector (iterate inc 0) constituencies)
                  idx-pcs (map vector (iterate inc (count idx-cons)) portfolio_companies)
                  idx-invs (map vector (iterate inc (+ (count idx-cons) (count idx-pcs))) investor_companies)
                  selected-idx (mod (or (:selected-idx state) 0) (+ (count idx-cons) (count idx-pcs) (count idx-invs)))
                  _ (if (not= selected-idx (:selected-idx state)) (om/set-state! owner :selected-idx selected-idx))]
              [:div {:class "search-results"}
               [:ul
                (when (not-empty idx-cons)
                  (into
                   [:div [:li {:class "search-results-header"} "Constituencies"]]
                   (for [[idx con] idx-cons]
                     (om/build search-result-link con {:opts {:comm comm :path-fn path-fn}
                                                       :state {:selected (= idx selected-idx)}
                                                       :fn (fn [data] (assoc data
                                                                        :type :constituency
                                                                        :id (get data :boundaryline_id)
                                                                        :uid (str "constituency:" (get data :boundaryline_id))))
                                                       :key :uid})))
                  )
                (when (not-empty idx-pcs)
                  (into
                   [:div [:li {:class "search-results-header"} "Companies"]]
                   (for [[idx pc] idx-pcs]
                     (om/build search-result-link pc {:opts {:comm comm :path-fn path-fn}
                                                      :state {:selected (= idx selected-idx)}
                                                      :fn (fn [data] (assoc data
                                                                       :type :portfolio-company
                                                                       :id (get data :company_no)
                                                                       :uid (str "portfolio-company:" (get data :company_no))))
                                                      :key :uid}))))

                (when (not-empty idx-invs)
                  (into
                   [:div [:li {:class "search-results-header"} "Investors"]]
                   (for [[idx inv] idx-invs]
                     (om/build search-result-link inv {:opts {:comm comm :path-fn path-fn}
                                                       :state {:selected (= idx selected-idx)}
                                                       :fn (fn [data] (assoc data
                                                                        :type :investor-company
                                                                        :id (get data :investor_company_uid)
                                                                        :uid (str "investor-company:" (get data :investor_company_uid))))
                                                       :key :uid}))))]]))])))))

(defn mount
  [app-state elem-id shared]
  (om/root app-state
           shared
           (omu/burrow search-component :search-results)
           (.getElementById js/document elem-id)))
