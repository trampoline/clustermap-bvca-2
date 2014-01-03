(ns clustermap.api
  (:require-macros
   [purnam.js :refer [?]]
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [put! chan <! close!]]
   [purnam.cljs :as pjs :refer [aget-in aset-in js-lookup]]
   [goog.net.XhrIo :as xhr]))

(defn GET [url]
  (let [ch (chan 1)]
    (xhr/send url
              (fn [event]
                (put! ch (-> event .-target .getResponseText JSON/parse (js-lookup "data")))
                (close! ch)))
    ch))

(defn portfolio-company-sites
  []
  (go
   (<! (GET "/api/bvca/portfolio-company-sites"))))

(defn log-portfolio-company-sites
  []
  (go
   (let [ch (portfolio-company-sites)]
     (.log js/console (<! ch)))))
