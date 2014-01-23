(ns clustermap.core
  (:require clustermap.repl
            [clustermap.nav :as nav]
            [clustermap.app :as app]))

(defn init []
  (nav/init)
  (app/init))

(init)
