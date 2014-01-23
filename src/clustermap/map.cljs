(ns clustermap.map
  (:require
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [jayq.core :refer [$]]
   [sablono.core :as html :refer [html] :include-macros true]))

(defn locate-map
  [m]
    (.fitBounds m
                (clj->js [[59.54 2.3] [49.29 -11.29]])
                (clj->js {"paddingTopLeft" [0 0]
                          "paddingBottomRight" [0 0]})))

(defn create-map
  [id-or-el]
  (let [m ((-> js/L .-map) id-or-el #js {:zoomControl false})
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

(defn map-component
  "put the leaflet map as state in the om component"
  [data owner]
  (reify
    om/IRender
    (render [this]
      (html [:div.map {:ref "map"}]))

    om/IDidMount
    (did-mount [this node]
      (om/set-state! owner :map (create-map node)))))

(defn mount
  [app-state elem-id]
  (om/root app-state map-component (.getElementById js/document elem-id)))
