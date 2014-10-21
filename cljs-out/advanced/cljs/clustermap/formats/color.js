// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.color');
goog.require('cljs.core');
clustermap.formats.color.rgb = (function rgb(col){var vec__57320 = col;var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57320,(0),null);var r1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57320,(1),null);var r2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57320,(2),null);var g1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57320,(3),null);var g2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57320,(4),null);var b1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57320,(5),null);var b2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57320,(6),null);var r = (function (){var G__57321 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(r2));var G__57322 = (16);return Number.parseInt(G__57321,G__57322);
})();var g = (function (){var G__57323 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(g2));var G__57324 = (16);return Number.parseInt(G__57323,G__57324);
})();var b = (function (){var G__57325 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(b2));var G__57326 = (16);return Number.parseInt(G__57325,G__57326);
})();return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
});
/**
* returns true if the color is lighter than #808080
*/
clustermap.formats.color.is_light_color_QMARK_ = (function is_light_color_QMARK_(col){var vec__57328 = clustermap.formats.color.rgb(col);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57328,(0),null);var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57328,(1),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57328,(2),null);return (((r + g) + b) > ((128) * (3)));
});
clustermap.formats.color.stand_out_color = (function stand_out_color(col){var vec__57334 = clustermap.formats.color.rgb(col);var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57334,(0),null);var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57334,(1),null);var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57334,(2),null);var lightness = (function (){var G__57335 = (function (){var G__57336 = Math.E;var G__57337 = ((function (){var G__57338 = ((r * g) * b);return Math.log(G__57338);
})() / 3.0);return Math.pow(G__57336,G__57337);
})();return Math.ceil(G__57335);
})();var standout = ((255) - lightness);var hex = (((standout < (16)))?("0"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(standout.toString((16)))):standout.toString((16)));return ("#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(hex));
});
