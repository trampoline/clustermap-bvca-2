// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.formats.time');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
clustermap.formats.time.get_year = (function get_year(t){var G__45206 = t;var G__45206__$1 = (((G__45206 == null))?null:(new Date(G__45206)));var G__45206__$2 = (((G__45206__$1 == null))?null:G__45206__$1.getYear());var G__45206__$3 = (((G__45206__$2 == null))?null:(G__45206__$2 + (1900)));return G__45206__$3;
});
clustermap.formats.time.date_formatter = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1393) : cljs_time.format.formatters.call(null,cljs.core.constant$keyword$1393));
clustermap.formats.time.format_date = (function format_date(t){var G__45208 = t;var G__45208__$1 = (((G__45208 == null))?null:cljs_time.coerce.from_string(G__45208));var G__45208__$2 = (((G__45208__$1 == null))?null:cljs_time.format.unparse(clustermap.formats.time.date_formatter,G__45208__$1));return G__45208__$2;
});
