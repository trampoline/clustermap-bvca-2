(ns clustermap.formats.color)

(defn rgb
  [col]
    (let [[_ r1 r2 g1 g2 b1 b2] col
        r (js/Number.parseInt (str r1 r2), 16)
        g (js/Number.parseInt (str g1 g2), 16)
        b (js/Number.parseInt (str b1 b2), 16)]
      [r g b]))

(defn is-light-color?
  "returns true if the color is lighter than #808080"
  [col]
  (let [[r g b] (rgb col)]
    (> (+ r g b) (* 128 3))))

(defn stand-out-color
  [col]
  (let [[r g b] (rgb col)
        lightness (js/Math.ceil (js/Math.pow js/Math.E (/ (js/Math.log (* r g b)) 3.0)))
        standout (- 255 lightness)
        hex (if (< standout 16) (str "0" (.toString standout 16)) (.toString standout 16))]
    (str "#" hex hex hex)))
