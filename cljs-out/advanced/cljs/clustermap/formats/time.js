// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.time');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
clustermap.formats.time.get_year = (function get_year(t){var G__57399 = t;var G__57399__$1 = (((G__57399 == null))?null:(new Date(G__57399)));var G__57399__$2 = (((G__57399__$1 == null))?null:G__57399__$1.getYear());var G__57399__$3 = (((G__57399__$2 == null))?null:(G__57399__$2 + (1900)));return G__57399__$3;
});
clustermap.formats.time.date_formatter = (function (){var G__57400 = cljs.core.constant$keyword$1423;return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__57400) : cljs_time.format.formatters.call(null,G__57400));
})();
clustermap.formats.time.format_date = (function format_date(t){var G__57402 = t;var G__57402__$1 = (((G__57402 == null))?null:cljs_time.coerce.from_string(G__57402));var G__57402__$2 = (((G__57402__$1 == null))?null:cljs_time.format.unparse(clustermap.formats.time.date_formatter,G__57402__$1));return G__57402__$2;
});
