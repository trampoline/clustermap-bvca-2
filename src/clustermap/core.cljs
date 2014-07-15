(ns clustermap.core
  (:require
   [weasel.repl :as ws-repl]
   [clustermap.app :as app]))

(defn init []
  (app/init))

(cond
   ;; need this delay here when developing, otherwise Leaflet.js init seems to bork cljs REPL init
 js/config.repl
 (do
   (ws-repl/connect "ws://localhost:9001" :verbose true)
   (init))

 true
 (init))
