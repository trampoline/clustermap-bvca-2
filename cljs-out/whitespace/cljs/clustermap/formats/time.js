// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.formats.time');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
clustermap.formats.time.get_year = (function get_year(t){var G__17792 = t;var G__17792__$1 = (((G__17792 == null))?null:(new Date(G__17792)));var G__17792__$2 = (((G__17792__$1 == null))?null:G__17792__$1.getYear());var G__17792__$3 = (((G__17792__$2 == null))?null:(G__17792__$2 + (1900)));return G__17792__$3;
});
clustermap.formats.time.date_formatter = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
clustermap.formats.time.format_date = (function format_date(t){var G__17794 = t;var G__17794__$1 = (((G__17794 == null))?null:cljs_time.coerce.from_string.call(null,G__17794));var G__17794__$2 = (((G__17794__$1 == null))?null:cljs_time.format.unparse.call(null,clustermap.formats.time.date_formatter,G__17794__$1));return G__17794__$2;
});
