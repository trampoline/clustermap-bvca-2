(ns clustermap.core
  (:require clustermap.repl
            [clustermap.api :as api]
            [clustermap.nav :as nav]
            [clustermap.map :as map]
            [clustermap.app :as app]))

(defn init []
  (nav/init)
  (app/init)
  )

(init)
