// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.formats.time');
goog.require('cljs.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
goog.require('cljs_time.format');
clustermap.formats.time.get_year = (function get_year(t){var G__62692 = t;var G__62692__$1 = (((G__62692 == null))?null:(new Date(G__62692)));var G__62692__$2 = (((G__62692__$1 == null))?null:G__62692__$1.getYear());var G__62692__$3 = (((G__62692__$2 == null))?null:(G__62692__$2 + (1900)));return G__62692__$3;
});
clustermap.formats.time.date_formatter = cljs_time.format.formatters.call(null,new cljs.core.Keyword(null,"date","date",-1463434462));
clustermap.formats.time.format_date = (function format_date(t){var G__62694 = t;var G__62694__$1 = (((G__62694 == null))?null:cljs_time.coerce.from_string.call(null,G__62694));var G__62694__$2 = (((G__62694__$1 == null))?null:cljs_time.format.unparse.call(null,clustermap.formats.time.date_formatter,G__62694__$1));return G__62694__$2;
});

//# sourceMappingURL=time.js.map