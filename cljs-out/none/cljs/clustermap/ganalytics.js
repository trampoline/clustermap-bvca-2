// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__50662 = window;var G__50662__$1 = (((G__50662 == null))?null:G__50662.config);var G__50662__$2 = (((G__50662__$1 == null))?null:G__50662__$1.ua);var G__50662__$3 = (((G__50662__$2 == null))?null:G__50662__$2.code);return G__50662__$3;
})();if(cljs.core.truth_((function (){var and__3531__auto__ = window.ga;if(cljs.core.truth_(and__3531__auto__))
{return ua_code;
} else
{return and__3531__auto__;
}
})()))
{return ga("send","pageview",path);
} else
{return null;
}
});

//# sourceMappingURL=ganalytics.js.map