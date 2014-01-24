(ns clustermap.core
  (:require clustermap.repl
            [clustermap.nav :as nav]
            [clustermap.app :as app]))

(defn init []
  (nav/init)
  (app/init))

(cond
   ;; need this delay here when developing, otherwise Leaflet.js init seems to bork cljs REPL init
   js/config.repl
   (js/setTimeout init 2000)

   true
   (init))
