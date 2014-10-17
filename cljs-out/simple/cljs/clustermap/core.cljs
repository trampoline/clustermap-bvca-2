(ns clustermap.core
  (:require
   [weasel.repl :as ws-repl]
   [figwheel.client :as fw :include-macros true]
   [clustermap.app :as app]))

(defn init []
  (app/start-or-restart-app))

(cond
   ;; need this delay here when developing, otherwise Leaflet.js init seems to bork cljs REPL init
 js/config.repl
 (do
   (ws-repl/connect "ws://localhost:9001" :verbose true)
   (fw/watch-and-reload
    :websocket-url "ws://localhost:3449/figwheel-ws"
    :jsload-callback (fn []
                       (init)
                       (.log js/console "restarted")))
   (init))

 true
 (init))
