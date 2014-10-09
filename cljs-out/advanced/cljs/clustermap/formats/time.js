// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.formats.time');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
clustermap.formats.time.get_year = (function get_year(t){var G__47772 = t;var G__47772__$1 = (((G__47772 == null))?null:(new Date(G__47772)));var G__47772__$2 = (((G__47772__$1 == null))?null:G__47772__$1.getYear());var G__47772__$3 = (((G__47772__$2 == null))?null:(G__47772__$2 + (1900)));return G__47772__$3;
});
clustermap.formats.time.date_formatter = (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1300) : cljs_time.format.formatters.call(null,cljs.core.constant$keyword$1300));
clustermap.formats.time.format_date = (function format_date(t){var G__47774 = t;var G__47774__$1 = (((G__47774 == null))?null:cljs_time.coerce.from_string(G__47774));var G__47774__$2 = (((G__47774__$1 == null))?null:cljs_time.format.unparse(clustermap.formats.time.date_formatter,G__47774__$1));return G__47774__$2;
});
