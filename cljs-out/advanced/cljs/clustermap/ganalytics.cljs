(ns clustermap.ganalytics)

(defn send-pageview
  [path]
  (let [ua-code (some-> js/window .-config .-ua .-code)]
    (when (and js/window.ga ua-code)
      (js/ga 'send' 'pageview' path)
;;      (.log js/console (clj->js ["GA pageview sent: " path]))
      )))
