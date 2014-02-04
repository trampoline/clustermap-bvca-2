(ns clustermap.boundarylines
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.core.async :as async :refer [<! chan close! put! sliding-buffer to-chan]]
   [clustermap.api :as api]))

(def ^:private boundarylines (atom nil))

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
  (let [comm (api/boundarylines boundaryline-id tolerance)
        use-korks (if (sequential? korks) korks [korks])
        path (concat use-korks [boundaryline-id tolerance])]
    (go
     (let [bl (<! comm)]
       (swap! app-state update-in path (fn [old] bl))))))


(defn get-or-fetch-best-boundaryline
  "gets the best boundaryline version for a zoom level...
   if the best isn't available, fetches it and immediately
   returns the next best available"
  [app-state korks boundaryline-id zoom]
  (let [use-korks (if (sequential? korks) korks [korks])
        boundarylines (get-in @app-state use-korks)
        bl-versions (get boundarylines boundaryline-id)
        i-tol (ideal-tolerance zoom)
        use-tol (best-available-tolerance zoom (keys bl-versions))
        use-bl (get-in boundarylines [boundaryline-id use-tol])]

    (when (not= i-tol use-tol)
      (fetch-boundaryline app-state korks boundaryline-id i-tol))

    use-bl))
