(ns clustermap.nav
  (:require [domina :as dom]
            [domina.css :as css]
            [domina.xpath :as xpath]
            [domina.events :as events]
            [jayq.core :as jayq :refer [$]]
            [cljs.core.async :refer [put! chan <!]]))

(defn init-bootstrap-tooltips
  []
  (-> "[data-toggle='tooltip']"
      $
      .tooltip))

(defn toggle-nav-search
  []
  (events/listen! (css/sel "#nav .search > a")
                  :click
                  (fn [e]
                    (let [target (events/target e)
                          parent (xpath/xpath target "..")]

                      (events/prevent-default e)
                      (dom/toggle-class! parent "open")
                      (-> (css/sel "#search") dom/nodes first $ .toggle)))))

(defn clear-search
  []
  (events/listen! (css/sel "#search button")
                  :click
                  (fn [e]
                    (let [search-input (css/sel "#search input")]
                      (dom/set-value! search-input "")))))

(def body-view-classes
  {"map" "view-map"
   "lists" "view-lists"})

(defn switch-view
  []
  (events/listen! (css/sel "#nav .map > a, #nav .lists > a")
                  :click
                  (fn [e]
                    (let [target (events/target e)
                          li (xpath/xpath target "..")
                          ul (xpath/xpath li "..")
                          active-li (css/sel ul "> .active")
                          body (css/sel "body")]

                      (events/prevent-default e)
                      (dom/remove-class! active-li "active")
                      (dom/add-class! li "active")

                      (->> body-view-classes
                           (map (fn [[li-class body-class]]
                                  (if (dom/has-class? li li-class)
                                    (dom/add-class! body body-class)
                                    (dom/remove-class! body body-class))
                                  ))
                           dorun)))))

(defn map-report
  []
  (events/listen! (css/sel "#map-report > a")
                  :click
                  (fn [e]
                    (let [target (events/target e)
                          mr (css/sel "#map-report")]

                      (events/prevent-default e)
                      (cond

                       (dom/has-class? mr "open")
                       (do
                         (dom/remove-class! mr "open")
                         (-> mr dom/nodes first $ (jayq/anim {"right" "-270px"} 400)))

                       true
                       (do
                         (dom/add-class! mr "open")
                         (-> mr dom/nodes first $ (jayq/anim {"right" "0px"} 400))))))))


(defn init
  []
  (toggle-nav-search)
  (switch-view)
  (clear-search)
  (init-bootstrap-tooltips)
  (map-report))
