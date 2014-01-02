(ns clustermap.nav
  (:require [domina :as dom]
            [domina.css :as css]
            [domina.xpath :as xpath]
            [domina.events :as events]
            [jayq.core :refer [$]]
            [cljs.core.async :refer [put! chan <!]]))

(defn toggle-nav-search
  []
  (events/listen! (css/sel "#nav .search > a")
                  :click
                  (fn [e]
                    (events/prevent-default e)
                    (let [target (events/target e)
                          parent (xpath/xpath target "..")]

                      (dom/toggle-class! parent "open")
                      (-> (css/sel "#search") dom/nodes first $ .toggle)))))

(defn switch-view
  []
  (events/listen! (css/sel "#nav .map > a, #nav .lists > a")
                  :click
                  (fn [e]
                    (events/prevent-default e)
                    (let [target (events/target e)
                          li (xpath/xpath target "..")
                          ul (xpath/xpath li "..")
                          active-li (css/sel ul "> .active")]

                      (dom/remove-class! active-li "active")
                      (dom/add-class! li "active")))))


(defn init
  []
  (toggle-nav-search)
  (switch-view)
  )
