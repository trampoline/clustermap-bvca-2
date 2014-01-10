(ns clustermap.api
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [cljs.core.async :refer [put! chan <! close! to-chan]]
   [goog.net.XhrIo :as xhr]))

(defn GET [url]
  (let [comm (chan 1)]
    (xhr/send url
              (fn [event]
                (put! comm (-> event .-target .getResponseText JSON/parse (aget "data")))
                (close! comm)))
    comm))

(defn log-api
  [f & args]
  (let [ch (apply f args)]
    (go
     (.log js/console (<! ch)))))

(defn search
  [q]
  (if (> (-> q str/trim count) 0)
    (GET (str "/api/bvca/search?q=" q))
    (to-chan [#js {}])))

(defn all-portfolio-company-sites
  []
  (GET "/api/bvca/all-portfolio-company-sites"))

(defn all-constituencies
  []
  (GET "/api/bvca/all-constituencies"))

(defn constituency-detail
  [id]
  (GET (str "/api/bvca/constituency-detail/" id)))

(defn all-portfolio-companies-summary
  []
  (GET "/api/bvca/all-portfolio-companies-summary"))

(defn portfolio-company-detail
  [id]
  (GET (str "/api/bvca/portfolio-company-detail/" id)))

(defn all-investor-companies-summary
  []
  (GET "/api/bvca/all-investor-companies-summary"))

(defn investor-company-detail
  [id]
  (GET (str "/api/bvca/investor-company-detail/" id)))
