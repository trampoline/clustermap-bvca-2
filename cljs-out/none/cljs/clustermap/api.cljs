(ns clustermap.api
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [put! chan <! close!]]
   [goog.net.XhrIo :as xhr]))

(defn GET [url]
  (let [ch (chan 1)]
    (xhr/send url
              (fn [event]
                (put! ch (-> event .-target .getResponseText JSON/parse (aget "data")))
                (close! ch)))
    ch))

(defn search
  [q]
  (go
   (<! (GET (str "/api/bvca/search/" q)))))

(defn all-portfolio-company-sites
  []
  (go
   (<! (GET "/api/bvca/all-portfolio-company-sites"))))

(defn all-constituencies
  []
  (go
   (<! (GET "/api/bvca/all-constituencies"))))

(defn constituency-detail
  [id]
  (go
   (<! (GET (str "/api/bvca/constituency-detail/" id)))))

(defn all-portfolio-companies-summary
  []
  (go
   (<! (GET "/api/bvca/all-portfolio-companies-summary"))))

(defn portfolio-company-detail
  [id]
  (go
   (<! (GET (str "/api/bvca/portfolio-company-detail/" id)))))

(defn all-investor-companies-summary
  []
  (go
   (<! (GET "/api/bvca/all-investor-companies-summary"))))

(defn investor-company-detail
  [id]
  (go
   (<! (GET (str "/api/bvca/investor-company-detail/" id)))))
