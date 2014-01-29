(ns clustermap.nav
  (:require [domina :as dom]
            [domina.css :as css]
            [domina.xpath :as xpath]
            [domina.events :as events]
            [jayq.core :as jayq :refer [$]]
            [cljs.core.async :refer [put! chan <!]]))

(defn- init-bootstrap-tooltips
  []
  (-> "[data-toggle='tooltip']"
      $
      .tooltip))

(defn- handle-toggle-nav-search
  []
  (events/listen! (css/sel "#nav .search > a")
                  :click
                  (fn [e]
                    (let [target (events/target e)
                          parent (xpath/xpath target "..")]

                      (events/prevent-default e)
                      (dom/toggle-class! parent "open")
                      (-> (css/sel "#search") dom/nodes first $ .toggle)))))

(defn- handle-hide-show-map-report
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

(def body-view-classes
  {"map" "view-map"
   "lists" "view-lists"})

(defn change-view
  "do the DOM manip to change the view"
  [view]
  (when-not (get body-view-classes view) (throw (js/Error. (str "unknown view: " view))))
  (let [body (css/sel "body")
        target-selector (str "#nav ." view)
        target-li (css/sel target-selector)
        ul (xpath/xpath target-li "..")
        active-li (css/sel ul "> .active")]

    (dom/remove-class! active-li "active")
    (dom/add-class! target-li "active")

    (doseq [[v body-class] body-view-classes]
      (if (= v view)
        (dom/add-class! body body-class)
        (dom/remove-class! body body-class)))

    (-> js/window $ (.trigger "resize"))))

(defn- handle-view-switches
  "sends [:change-view <view>] messages to the command channel"
  [comm]
  (doseq [[v _] body-view-classes]
    (events/listen! (css/sel (str "#nav ." v " > a"))
                    :click
                    (fn [e]
                      (events/prevent-default e)
                      (put! comm [:change-view v])))))

(defn init
  [comm]
  (init-bootstrap-tooltips)
  (handle-toggle-nav-search)
  (handle-hide-show-map-report)
  (handle-view-switches comm))
