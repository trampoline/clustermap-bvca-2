(ns clustermap.om)

(defn burrow
  "wraps a component constructor function so that
   the components state is found at path korks in
   the app-state"
  [component-fn korks]
  (let [use-korks (if (sequential? korks) korks [korks])]
    (fn [& args] (apply component-fn (get-in (first args) use-korks) (rest args)))))
