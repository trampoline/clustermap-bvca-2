(ns clustermap.formats.number
  (:require
   [clojure.string :as str]
   [goog.string :as gstring]
   [goog.string.format]))

(defn round-decimal
  [n dec-places]
  (if dec-places
    (/ (js/Math.round (* n (js/Math.pow 10 dec-places)))
       (js/Math.pow 10 dec-places))
    n))

(defn- prefix-sign
  [n-str n plus?]
  (cond
   (< n 0) (str "-" n-str)
   (and plus? (> n 0)) (str "+" n-str)
   true n-str))

(defn- split-thousands
  [n-str]
  (->> n-str
       reverse
       (partition 3 3 [])
       (map reverse)
       reverse
       (map #(apply str %))
       (str/join ",")))

(defn eng-notation
  "splits a number into a [coefficient, exponent] pair, where
   exponent is a multiple of 3
   :sigfigs : # of significant figures"
  [n & {:keys [sigfigs]}]
  (let [sign (cond (> n 0) 1 (= n 0) 0 (< n 0) -1)
        abs-n (js/Math.abs n)
        ;; [i d] (.split (goog.string.format "%.20f" abs-n) ".") ;; format is better, but slow
        [i d] (.split (str abs-n) ".")
        exp (cond (>= abs-n 1) (* 3 (int (/ (-> i count dec) 3)))
                  (> abs-n 0) (* -3 (int (/ (->> d (take-while (fn [c] (= c \0))) count (+ 3)) 3)))
                  true 0)

        usig (* abs-n (js/Math.pow 10 (* -1 exp)))

        ;; now truncate to a given number of significant figures... first need to round,
        ;; then textually truncate to deal with fp junk
        ;; [usig-i usig-d] (when sigfigs (.split (goog.string.format "%.20f" usig) ".")) ;; format is better, but slow
        [usig-i usig-d] (when sigfigs (.split (str usig) "."))
        sigmult (when (and sigfigs (> usig 0)) (js/Math.pow 10 (- (count usig-i) sigfigs)))
        round-usig-str (when sigmult (str (* sigmult (js/Math.round (/ usig sigmult)))))
        [round-usig-i round-usig-d] (when round-usig-str (.split round-usig-str "."))
        trunc-usig-str (when round-usig-str (->> [(take sigfigs round-usig-i)
                                                  (repeat (- (count round-usig-i) sigfigs) "0")
                                                  (if (> (count round-usig-d) 0)
                                                    ["." (take (- sigfigs (count round-usig-i)) round-usig-d)])]
                                                 flatten
                                                 (filter identity)
                                                 concat
                                                 (apply str)))
        trunc-usig (js/parseFloat trunc-usig-str)
        sig (* sign (or trunc-usig usig))]
    [sig exp]))

(defn format-readable-number
  "format a human readable number, with commas between groups of thousands
   :dec - number of decimal places
   :plus? - include a leading + for positive numbers"
  [n & {:keys [dec plus?]}]
  (let [abs-n (js/Math.abs n)
        round-n (round-decimal abs-n dec)
        round-n-str (str round-n)
        [i-str d-str] (str/split round-n-str #"\.")
        t-str (split-thousands i-str)
        t-dec-str (str/join "." (filter identity [t-str d-str]))]
    (prefix-sign t-dec-str n plus?)))
