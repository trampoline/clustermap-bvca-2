(ns clustermap.debounce
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :refer [chan <! put! sliding-buffer]]))

(defn- debounce-api-results
  [db-comm handler]
  (go
   (while true
     (let [rcomm (<! db-comm)
           result (<! rcomm)]
       (handler result)))))

(defn debounce-api
  "debounce responses from an API : the last received response will be processed, earlier
   unprocessed responses will be discarded
   - request-handler: fn to send an async API request, returning a channel of a single result value
   - result-handler: single-param function of API result"
  [request-handler result-handler]

  (let [db-comm (chan (sliding-buffer 1))
        _ (debounce-api-results db-comm result-handler)]
    (fn [& req-args]
      (let [rcomm (apply request-handler req-args)]
        (put! db-comm rcomm)))))
