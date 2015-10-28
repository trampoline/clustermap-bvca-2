(ns clustermap.core
  (:require clojure.browser.repl
            [clustermap.bvca-app :as app]))

(defn init []
  (app/init))

(cond
   ;; need this delay here when developing, otherwise Leaflet.js init seems to bork cljs REPL init
   js/config.repl
   (js/setTimeout init 2000)

   true
   (init))
