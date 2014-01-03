(ns clustermap.map
  (:require
   [domina :as dom]
   [domina.css :as css]
   [domina.xpath :as xpath]
   [domina.events :as events]
   [purnam.cljs :refer [aget-in aset-in js-lookup]]
   [jayq.core :as jayq :refer [$]]
   [cljs.core.async :refer [put! chan <!]]
   [clustermap.async :as casync])
  (:require-macros
   [purnam.js :as p]))

(defn create-map
  []
  (let [factory-fn (-> js/L .-mapbox .-map)
        m (factory-fn "map" "mccraigmccraig.map-gqkcbi1g")]
    (.fitBounds m
                (p/arr [[59.54 2.3] [49.29 -11.29]])
                {"paddingTopLeft" (p/arr [0 0])
                 "paddingBottomRight" (p/arr [0 0])})
    m))

(defn pan-to-show
  [m & all-bounds]
  (let [fb (first all-bounds)
        fb-copy (new js/L.LatLngBounds (.getSouthWest fb) (.getNorthEast fb))
        super-bounds (reduce (fn [sb bounds] (.extend sb bounds))
                             fb-copy
                             (rest fb))]
    (.fitBounds m super-bounds)))

(defn display-site
  [m site]
  (let [location (-> site (js-lookup "location") reverse clj->js)
        options (-> {:title (str (js-lookup site "name") ", " (js-lookup site "postcode") ", " (js-lookup site "company_no"))} clj->js)
        marker (js/L.marker location options)]
    (.addTo marker m)))

(defn display-sites
  [m sites]
  (->> sites
       (casync/map-async (partial display-site m))
       casync/dorun-async))
