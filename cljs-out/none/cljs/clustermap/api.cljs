(ns clustermap.api
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [cljs.core.async :refer [<! chan close! put! sliding-buffer to-chan]]
   [goog.net.XhrIo :as xhr]))

(defn GET [url]
  "send a GET request, returning a channel with a single result value"
  (let [comm (chan 1)]
    (xhr/send url
              (fn [event]
                (put! comm (-> event .-target .getResponseText JSON/parse (aget "data")))
                (close! comm)))
    comm))

(defn- ordered-api-results
  [ocomm handler]
  (go
   (while true
     (let [rcomm (<! ocomm)
           result (<! rcomm)]
       (handler result)))))

(defn ordered-api
  "order responses from an async API according to the order of requests
   - request-handler: fn to send an async API request, returning a channel of a single result value
   - result-handler: single-param function of API result"
  [request-handler result-handler]

  (let [ocomm (chan (sliding-buffer 1))
        _ (ordered-api-results ocomm result-handler)]
    (fn [& req-args]
      (let [rcomm (apply request-handler req-args)]
        (put! ocomm rcomm)))))


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
