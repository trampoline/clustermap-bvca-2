(ns clustermap.ordered-resource
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as async :refer [chan <! >!]]))

(defprotocol IOrderedResource

  (add-request [this ch]
    "add a channel of a single response value")

  (get-response-chan [this]
    "return the response channel, from which can be read
     valid responses"))

(deftype DiscardStaleResource [name ticket response-chan]

  IOrderedResource

  ;; assigns a ticket number to the request by incrementing
  ;; the instances ticket value, then reads
  ;; the response from ch. when the response is received,
  ;; if the instances ticket value is still the same as
  ;; the request ticket number then put the response onto
  ;; the response-chan, otherwise discard the response as stale
  (add-request [this ch]
    (let [rq-ticket (swap! ticket inc)]
      (go
        (let [response (<! ch)]
          (if (= rq-ticket @ticket)
            (>! response-chan response)
            (.log js/console (str name ": discarded result " @ticket)))))
      nil))

  (get-response-chan [this]
    response-chan))

(defn make-discard-stale-resource
  "creates an ordered-resource which will discard a response if
   a response to a later request has already been received"
  [name]
  (DiscardStaleResource. name (atom 0) (chan)))

(defn api-call
  "make an api call and put the result channel into an ordered-resource
   - ordered-resource : the ordered resources
   - api-fn : makes an api-call and returns a channel of a single result value
   - args : to be passed to the api-fn"
  [ordered-resource api-fn & args]
  (add-request ordered-resource (apply api-fn args)))
