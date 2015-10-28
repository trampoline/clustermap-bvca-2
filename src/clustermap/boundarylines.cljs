(ns clustermap.boundarylines
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as async :refer [<! chan close! put! sliding-buffer to-chan]]
   [clustermap.bvca-api :as api]))

(def ^:private zoom-tolerances
  [[7 0.01]
   [9 0.002]
   [12 0.0003]
   [nil 0]])

(defn ideal-tolerance
  [zoom]
  (or (some (fn [[z t]] (when (and z (<= zoom z)) t)) zoom-tolerances)
      0))

(defn best-available-tolerance
  [zoom available-tolerances]
  (let [i-tol (ideal-tolerance zoom)
        coarser (->> zoom-tolerances
                     (map last)
                     (filter (fn [t] (> t i-tol)))
                     reverse)
        finer (->> zoom-tolerances
                   (map last)
                   (filter (fn [t] (< t i-tol))))

        avail-set (set available-tolerances)]

    (or (get avail-set i-tol)
        (some avail-set finer)
        (some avail-set coarser))))


(defn fetch-boundaryline
  "fetch a boundaryline for a given tolerance and add it to the cache"
  [app-state korks boundaryline-id tolerance]
;;  (.log js/console (clj->js ["rq" app-state boundaryline-id tolerance]))
  (let [comm (api/boundarylines boundaryline-id tolerance :raw true)
        use-korks (if (sequential? korks) korks [korks])
        path (concat use-korks [boundaryline-id tolerance])]
    (go
     (let [bl (<! comm)]
;;       (.log js/console (clj->js ["rx" app-state boundaryline-id tolerance bl]))
       (swap! app-state update-in path (fn [old] bl))))))


(defn get-or-fetch-best-boundaryline
  "gets the best boundaryline version for a zoom level...
   if the best isn't available, fetches it async and immediately
   returns the next best available
   - default : default value to return if nothing currently available
   - min-zoom : if (<= zoom min-zoom) do nothing and return the default
   returns [tolerance, boundaryline] or default if nothing is available or
           (<= zoom min-zoom)"
  [app-state korks boundaryline-id zoom & {:keys [min-zoom]}]
;;  (.log js/console (clj->js ["get-or-fetch" app-state korks boundaryline-id zoom]))
  (when-not (and min-zoom
                 (<= zoom min-zoom))

    (let [use-korks (if (sequential? korks) korks [korks])
          boundarylines (get-in @app-state use-korks)
          bl-versions (get boundarylines boundaryline-id)
          i-tol (ideal-tolerance zoom)
          use-tol (best-available-tolerance zoom (keys bl-versions))
          use-bl (get-in boundarylines [boundaryline-id use-tol])]

      (when (not= i-tol use-tol)
        (fetch-boundaryline app-state korks boundaryline-id i-tol))

      (when use-bl
        [use-tol use-bl]))))
