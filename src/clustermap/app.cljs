(ns clustermap.app
  (:require-macros
   [cljs.core.async.macros :refer [go]])
  (:require
   [clojure.string :as str]
   [goog.events :as events]
   [cljs.core.async :refer [chan <! put! sliding-buffer]]
   [secretary.core :as secretary :include-macros true :refer [defroute]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [clustermap.api :as api]
   [clustermap.routes :as routes]
   [clustermap.nav :as nav]
   [clustermap.ganalytics :as ga]
   [clustermap.components.mount :as mount]
   [clustermap.boundarylines :as bl]
   [clustermap.data.colorchooser :as colorchooser])
  (:import [goog History]
           [goog.history EventType]))


(def ^:private history* (History.))

(defprotocol IAppService
  ;; initialise : returns component shared state
  (init [this app])
  ;; destroy any resources created in init
  (destroy [this app])
  ;; handle an even from the app channel
  (handle-event [this app type val]))

(defprotocol IAppControl
  (start [this])
  (stop [this]))

(defprotocol IApp
  (get-state [this])
  (get-comm [this])
  (get-history [this]))

(defn create-app-instance
  [initial-state-value component-defs app-service]
  (let [comm (chan)
        state (atom initial-state-value)

        ;; event-handlers-map (create-event-handlers-map state history*)
        ;; handle-event (partial choose-event-handler event-handlers-map)
        ]

    (reify
      IAppControl
      (start [this]
        (let [shared (merge (init app-service this) {:comm comm})]

          (events/listen history*
                 EventType.NAVIGATE
                 (fn [e]
                   (let [token (.-token e)]
                     ;; (ga/send-pageview token)
                     (secretary/dispatch! token))))
          (.setEnabled history* true)

          (doseq [{:keys [name f target path paths]} component-defs]
            (.log js/console (clj->js ["component" name f target paths]))
            (mount/mount name
                         f
                         state
                         :target target
                         :shared shared
                         :path path
                         :paths paths))

          (go
            (while true
              (let [[type val] (<! comm)]
                (handle-event app-service this type val))))
          ))

      (stop [_]
        (.removeAllListeners history*)
        (secretary/reset-routes!)

        (doseq [{:keys [target]} component-defs]
          (mount/unmount target)))

      IApp
      (get-state [_]
        state)

      (get-comm [_]
        comm)

      (get-history [_]
        history*)
      )))

(defn start-or-restart-app
  [app-instance-atom initial-state components app-service]
  (swap! app-instance-atom
         (fn [a initial-state components app-service]
           (when a (stop a))
           (let [new-app (create-app-instance initial-state components app-service)]
             (start new-app)
             new-app))
         initial-state
         components
         app-service))
