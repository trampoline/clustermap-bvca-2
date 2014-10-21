// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.time');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
clustermap.formats.time.get_year = (function get_year(t){var G__73565 = t;var G__73565__$1 = (((G__73565 == null))?null:(new Date(G__73565)));var G__73565__$2 = (((G__73565__$1 == null))?null:G__73565__$1.getYear());var G__73565__$3 = (((G__73565__$2 == null))?null:(G__73565__$2 + (1900)));return G__73565__$3;
});
clustermap.formats.time.date_formatter = (function (){var G__73566 = cljs.core.constant$keyword$1419;return (cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1 ? cljs_time.format.formatters.cljs$core$IFn$_invoke$arity$1(G__73566) : cljs_time.format.formatters.call(null,G__73566));
})();
clustermap.formats.time.format_date = (function format_date(t){var G__73568 = t;var G__73568__$1 = (((G__73568 == null))?null:cljs_time.coerce.from_string(G__73568));var G__73568__$2 = (((G__73568__$1 == null))?null:cljs_time.format.unparse(clustermap.formats.time.date_formatter,G__73568__$1));return G__73568__$2;
});
