(ns clustermap.api
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [cljs.core.async :as async :refer [<! chan close! put! sliding-buffer to-chan]]
   [goog.net.XhrIo :as xhr]))

(defn AJAX [url & {:keys [raw method content] :as opts}]
  "send a GET request, returning a channel with a single result value"
  (let [comm (chan 1)]
    (xhr/send url
              (fn [event]
                (put! comm (-> event
                               .-target
                               .getResponseText
                               js/JSON.parse
                               (aget "data")
                               ((fn [d]
                                  (if raw
                                    d
                                    (js->clj d :keywordize-keys true))))))
                (close! comm))
              (or (some-> method name str/upper-case) "GET")
              (when content (js/JSON.stringify (clj->js content)))
              (when content (clj->js {"Content-Type" "application/json"})))
    comm))

(defn GET [url & {:as opts}]
  (apply AJAX url (apply concat (merge opts {:method "GET"}))))

(defn POST [url content & {:as opts}]
  (apply AJAX url (apply concat (merge opts {:method "POST" :content content}))))

(defn PUT [url content & {:as opts}]
  (apply AJAX url (apply concat (merge opts {:method "PUT" :content content}))))

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

(defn fetch
  "put the results of an api call into an atom... makes ad-hoc api calls easy"
  [comm]
  (let [r (atom nil)]
    (go
      (reset! r (<! comm)))
    r))

(def api-prefix js/config.api.prefix)

;; boundarylines

(defn boundarylines
  [id tolerance & opts]
  (apply GET (str "/api/boundarylines/" id "/" tolerance) opts))

(defn boundaryline-collection-index
  [id & opts]
  (apply GET (str "/api/boundaryline-collection-index/" (name id)) opts))

(defn boundaryline-set
  "fetch a whole set of boundarylines in one api hit"
  [ids tolerance & opts]
  (apply POST "/api/boundaryline-set"
         {:ids ids
          :tolerance tolerance}
         opts))

(defn boundaryline-collection-view
  [collection-id tolerance bounds & {:keys [boundaryline-ids] :as opts}]
  (let [opts (-> opts (dissoc :boundaryline-ids) seq flatten)]
    (apply POST (str "/api/boundaryline-collection-view/" (name collection-id) "/" tolerance)
           {:bounds bounds
            :boundaryline-ids boundaryline-ids}
           opts)))

;; aggregation over boundarylines

(defn boundaryline-aggregation
  [index type blcoll attr filter bounds & [type-ids]]
  (POST (str "/api/" api-prefix "/boundaryline-agg/" index "/" type "/" blcoll "/" attr "?" (map-json-params type-ids))
      {:filter filter
       :bounds bounds}))

;; summary stats
(defn summary-stats
  [index type statsattr filter bounds & [type-ids]]
  (POST (str "/api/" api-prefix "/summary-stats/" index "/" type "/" statsattr "?" (map-json-params type-ids))
      {:filter filter
       :bounds bounds}))

;; points in view
(defn location-lists
  [index type location-attr attrs max-count filter bounds & [type-ids]]
  (POST (str "/api/" api-prefix "/location-lists/" index "/" type "/" location-attr "?" (map-json-params type-ids))
      {:max-count max-count
       :attrs attrs
       :filter filter
       :bounds bounds}))

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

;; portfolio-companies

(defn portfolio-company
  [id]
  (GET (str "/api/" api-prefix "/portfolio-companies/" id)))

;; portfolio-company-sites

(defn portfolio-company-sites
  [& [type-ids]]
  (let [type-ids (merge {:size 100 :sort [{:!latest_turnover "desc"}]} type-ids)]
    (GET (str "/api/" api-prefix "/portfolio-company-sites?" (map-json-params type-ids)))))

(defn portfolio-company-sites-by-company
  [& [type-ids]]
  (let [type-ids (merge {:size 100 :sort [{:!latest_turnover "desc"}]} type-ids)]
    (GET (str "/api/" api-prefix "/portfolio-company-sites-by-company?" (map-json-params type-ids)))))

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


;; investment-account-timelines
(defn investment-account-timelines
  [& [type-ids]]
  (GET (str "/api/" api-prefix "/investment-account-timelines?" (map-json-params type-ids))))

(defn investment-stats
  [& [type-ids]]
  (GET (str "/api/" api-prefix "/investment-stats?" (map-json-params type-ids))))

(defn investment-aggs
  [& [type-ids]]
  (let [type-ids (merge {:size 50 :order {:latest_turnover "desc"}} type-ids)]
    (GET (str "/api/" api-prefix "/investment-aggs?" (map-json-params type-ids)))))

(defn investments
  [& [type-ids]]
  (let [type-ids (merge {:size 50 :order [{:?boundaryline_compact_name_na "asc"} {:?investor_company_name_na "asc"}]} type-ids)]
    (GET (str "/api/" api-prefix "/investments?" (map-json-params type-ids)))))
