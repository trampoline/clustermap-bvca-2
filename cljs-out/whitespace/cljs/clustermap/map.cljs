(ns clustermap.map
  (:require
   [domina :as dom]
   [domina.css :as css]
   [domina.xpath :as xpath]
   [domina.events :as events]
   [jayq.core :as jayq :refer [$]]
   [cljs.core.async :refer [put! chan <!]]
   [clustermap.async :as casync]))

(defn locate-map
  [m]
    (.fitBounds m
                (clj->js [[59.54 2.3] [49.29 -11.29]])
                (clj->js {"paddingTopLeft" [0 0]
                          "paddingBottomRight" [0 0]})))

(defn create-map
  []
  (let [m ((-> js/L .-map) "map" #js {:zoomControl false})
        tiles ((-> js/L .-mapbox .-tileLayer) "mccraigmccraig.map-gqkcbi1g" #js {:detectRetina true})
        zoom ((-> js/L .-control .-zoom) #js {:position "bottomright"})]
    (.addLayer m tiles)
    (.addControl m zoom)
    (locate-map m)
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
  (let [location (-> site (aget "location") reverse clj->js)
        options (-> {:title (str (aget site "name") ", " (aget site "postcode") ", " (aget site "company_no"))} clj->js)
        marker (js/L.marker location options)]
    (.addTo marker m)))

(defn display-sites
  [m sites]
  (->> sites
       (casync/map-async (partial display-site m))
       ((fn [c] (casync/dorun-async c :delay nil)))
       ))
