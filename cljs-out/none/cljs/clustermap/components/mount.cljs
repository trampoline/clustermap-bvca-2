(ns clustermap.components.mount
  (:require [om.core :as om :include-macros true]))

(defn- make-sequential
  [v]
  (cond
   (nil? v) nil
   (sequential? v) v
   true [v]))

(defn- extract-paths
  [path paths cursor]
  (om/allow-reads
   (cond
    (and path paths) (ex-info (print-str "can't give both :path and :paths : " {:path path :paths paths}) {:path path :paths paths})
    path (get-in cursor (make-sequential path))
    (nil? paths) cursor
    (sequential? paths) (for [path paths] (get-in cursor (make-sequential path)))
    (map? paths) (into {} (for [[key path] paths] [key (get-in cursor (make-sequential path))]))
    true (throw (ex-info (print-str "what are those paths ? :" paths) {:paths paths})))))

(defn mount
  "mount a component, with some decoration
   - target : may be an element-id (keyword or string) or an element
   - path | paths : extract a single path or multiple paths from the root cursor
                    to bind in the component"
  [f value & {:keys [target path paths] :as options}]
  (let [target (if (or (string? target) (keyword? target))
                 (.getElementById js/document (name target))
                 target)
        cursor-fn (partial extract-paths path paths)
        options (-> options
                    (dissoc :path :paths)
                    (assoc :target target)
                    (assoc :fn cursor-fn))]
    (om/root f value options)))