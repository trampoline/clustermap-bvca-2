(ns clustermap.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as dom]
            [goog.events :as events]
            [cljs.core.async :refer [put! chan <!]]
            [clustermap.nav :as nav]
            [clojure.browser.repl :as repl]
            )
  (:import [goog.net Jsonp]
           [goog Uri]))

;; (repl/connect "http://localhost:9000/repl")

(def wiki-search-url
  "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=")

(defn listen [el type]
  (let [out (chan)]
    (events/listen el type
      (fn [e] (put! out e)))
    out))

(defn jsonp [uri]
  (let [out (chan)
        req (Jsonp. (Uri. uri))]
    (.send req nil (fn [res] (put! out res)))
    out))

(defn query-url [q]
  (str wiki-search-url q))

(defn user-query []
  (.-value (dom/getElement "query")))

(defn render-query [results]
  (str
    "<ul>"
    (apply str
      (for [result results]
        (str "<li>" result "</li>")))
    "</ul>"))

(defn init []
  (nav/init)

  (let [clicks (listen (dom/getElement "query") "keyup")
        results-view (dom/getElement "results")]
    (go (while true
          (<! clicks)
          (let [[_ results] (<! (jsonp (query-url (user-query))))
                long-results (conj (vec results) "bar")]
            (.log js/console results)

            (set! (.-innerHTML results-view) (render-query long-results))))))
  )

(init)
