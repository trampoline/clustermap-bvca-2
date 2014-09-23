(ns clustermap.ordered-resource
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as async :refer [chan <! >!]]))

(defprotocol IOrderedResource
  (add-request [this ch])
  (get-response-chan [this]))

(deftype DiscardStaleResource [name ticket response-chan]
  IOrderedResource
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
  [name]
  (DiscardStaleResource. name (atom 0) (chan)))

(defn api-call
  [ordered-resource api-fn & args]
  (add-request ordered-resource (apply api-fn args)))
