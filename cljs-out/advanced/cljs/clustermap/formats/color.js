// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.color');
goog.require('cljs.core');
clustermap.formats.color.rgb = (function rgb(col){var vec__74367 = col;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74367,(0),null);var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74367,(1),null);var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74367,(2),null);var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74367,(3),null);var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74367,(4),null);var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74367,(5),null);var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74367,(6),null);var r = (function (){var G__74368 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r2));var G__74369 = (16);return Number.parseInt(G__74368,G__74369);
})();var g = (function (){var G__74370 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g2));var G__74371 = (16);return Number.parseInt(G__74370,G__74371);
})();var b = (function (){var G__74372 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b2));var G__74373 = (16);return Number.parseInt(G__74372,G__74373);
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
});
/**
* returns true if the color is lighter than #808080
*/
clustermap.formats.color.is_light_color_QMARK_ = (function is_light_color_QMARK_(col){var vec__74375 = clustermap.formats.color.rgb(col);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74375,(0),null);var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74375,(1),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74375,(2),null);return (((r + g) + b) > ((128) * (3)));
});
clustermap.formats.color.stand_out_color = (function stand_out_color(col){var vec__74381 = clustermap.formats.color.rgb(col);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74381,(0),null);var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74381,(1),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74381,(2),null);var lightness = (function (){var G__74382 = (function (){var G__74383 = Math.E;var G__74384 = ((function (){var G__74385 = ((r * g) * b);return Math.log(G__74385);
})() / 3.0);return Math.pow(G__74383,G__74384);
})();return Math.ceil(G__74382);
})();var standout = ((255) - lightness);var hex = (((standout < (16)))?("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(standout.toString((16)))):standout.toString((16)));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex));
});
