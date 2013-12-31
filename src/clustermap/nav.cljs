(ns clustermap.nav
  (:require [domina :as dom]
            [domina.css :as css]
            [domina.xpath :as xpath]
            [domina.events :as events]
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
                      (-> (css/sel "#search") dom/nodes first js/$ .toggle)))))

(defn switch-view
  []
  (events/listen! (css/sel "#nav .map > a, #nav .lists > a")
                  :click
                  (fn [e]
                    (events/prevent-default e)
                    (let [target (events/target e)
                          parent (xpath/xpath target "..")
                          active-links (css/sel parent "> .active")]
                      (dom/remove-class! active-links "active")
                      (dom/add-class! parent "active")
                      )
                    ))

  )


(defn init
  []
  (toggle-nav-search)
  (switch-view)
  )
