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
     (let [[rcomm result-handler-args] (<! ocomm)
           result (<! rcomm)]
       (apply handler result result-handler-args)))))

(defn ordered-api
  "order responses from an async API according to the order of requests
   - request-handler: fn to send an async API request, returning a channel of a single result value,
                      and optional additional args for the result-handler. return nil to
                      abandon request
   - result-handler: function of API result and optional additional args from request-handler result"
  [request-handler result-handler]

  (let [ocomm (chan (sliding-buffer 1))
        _ (ordered-api-results ocomm result-handler)]
    (fn [& req-args]
      (if-let [r (apply request-handler req-args)]
        (let [rseq (if (sequential? r) r [r])
              [rcomm & result-handler-args] rseq]
          (put! ocomm [rcomm result-handler-args]))))))

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

(defn portfolio-company-sites
  []
  (GET "/api/bvca/portfolio-company-sites"))

(defn constituencies
  []
  (GET "/api/bvca/constituencies"))

(defn constituency
  [id]
  (GET (str "/api/bvca/constituencies/" id)))

(defn portfolio-companies-summary
  []
  (GET "/api/bvca/portfolio-companies-summary"))

(defn portfolio-company
  [id]
  (GET (str "/api/bvca/portfolio-companies/" id)))

(defn investor-companies-summary
  []
  (GET "/api/bvca/investor-companies-summary"))

(defn investor-company
  [id]
  (GET (str "/api/bvca/investor-companies/" id)))
