(ns clustermap.api
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [cljs.core.async :as async :refer [<! chan close! put! sliding-buffer to-chan]]
   [goog.net.XhrIo :as xhr]))

(defn GET [url & {:keys [raw]}]
  "send a GET request, returning a channel with a single result value"
  (let [comm (chan 1)]
    (xhr/send url
              (fn [event]
                (put! comm (-> event
                               .-target
                               .getResponseText
                               JSON/parse
                               (aget "data")
                               ((fn [d]
                                  (if raw
                                    d
                                    (js->clj d :keywordize-keys true))))))
                (close! comm)))
    comm))

(defn- ordered-api-results
  "- ocomm : a channel containing [result-chans result-handler-args]
             gather results from the one-or-more result-chans, and
             pass them to the handler along with any result-handler-args
   - handler : invoked with (apply handler result-or-results result-handler-args)"
  [ocomm handler]
  (go
   (while true
     (let [[rcomms result-handler-args] (<! ocomm)
           result (if (sequential? rcomms)
                    (loop [rem rcomms
                           results []]
                      (if (empty? rem)
                        results
                        (recur (rest rem) (conj results (when (first rem) (<! (first rem)))))))
                    (when rcomms (<! rcomms)))]
       ;; (.log js/console (clj->js result))
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

(defn map-json-params
  [m]
  (->> m
       (map (fn [[k v]] (str (name k) "=" (js/JSON.stringify (clj->js v)))))
       (str/join "&")))

(def api-prefix js/config.api.prefix)

;; boundarylines

(defn boundarylines
  [id tolerance & opts]
  (apply GET (str "/api/boundarylines/" id "/" tolerance) opts))

(defn boundaryline-collection-index
  [id & opts]
  (apply GET (str "/api/boundaryline-collection-index/" id) opts))


;; search

(defn search
  [q]
  (if (> (-> q str/trim count) 0)
    (GET (str "/api/" api-prefix "/search?q=" q))
    (to-chan [#js {}])))


;; constituencies

(defn constituency
  [id]
  (GET (str "/api/" api-prefix "/constituencies/" id)))

(defn constituencies
  [& [type-ids]]
  (GET "/api/" api-prefix "/constituencies?" (map-json-params type-ids)))



;; portfolio-companies

(defn portfolio-company
  [id]
  (GET (str "/api/" api-prefix "/portfolio-companies/" id)))

(defn portfolio-companies
  [& [type-ids]]
  (GET (str "/api/" api-prefix "/portfolio-companies?sort={\"!latest_turnover\":\"desc\"}&" (map-json-params type-ids))))

(defn portfolio-company-stats
  [& [type-ids]]
  (GET (str "/api/" api-prefix "/portfolio-company-stats?" (map-json-params type-ids))))

(defn portfolio-company-account-stats
  [& [type-ids]]
  (GET (str "/api/" api-prefix "/portfolio-company-account-stats?" (map-json-params type-ids))))



;; portfolio-company-sites

(defn portfolio-company-sites
  [& [type-ids]]
  (let [type-ids (merge {:sort ["?boundarylinecolls.uk_constituencies"]} type-ids)]
    (GET (str "/api/" api-prefix "/portfolio-company-sites?" (map-json-params type-ids)))))

(defn portfolio-company-locations
  [& [type-ids]]
  (GET (str "/api/" api-prefix "/portfolio-company-locations?" (map-json-params type-ids))))

(defn portfolio-company-site-stats
  [& [type-ids]]
  (GET (str "/api/" api-prefix "/portfolio-company-site-stats?" (map-json-params type-ids))))

(defn portfolio-company-site-account-timelines
  [& [type-ids]]
  (GET (str "/api/" api-prefix "/portfolio-company-site-account-timelines?" (map-json-params type-ids))))



;; investor-companies

(defn investor-company
  [id]
  (GET (str "/api/" api-prefix "/investor-companies/" id)))

(defn investor-comapnies
  [& [type-ids]]
  (GET (str "/api/" api-prefix "/investor-companies?" (map-json-params type-ids))))
