(ns clustermap.core
  (:require [clojure.browser.repl :as repl]
            [clustermap.api :as api]
            [clustermap.nav :as nav]
            [clustermap.map :as map]
            [clustermap.app :as app]))

(defn init []
  (nav/init)
  (app/init))

(init)
