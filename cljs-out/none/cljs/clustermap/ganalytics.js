// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__21992 = window;var G__21992__$1 = (((G__21992 == null))?null:G__21992.config);var G__21992__$2 = (((G__21992__$1 == null))?null:G__21992__$1.ua);var G__21992__$3 = (((G__21992__$2 == null))?null:G__21992__$2.code);return G__21992__$3;
})();if(cljs.core.truth_((function (){var and__7888__auto__ = window.ga;if(cljs.core.truth_(and__7888__auto__))
{return ua_code;
} else
{return and__7888__auto__;
}
})()))
{return ga("send","pageview",path);
} else
{return null;
}
});

//# sourceMappingURL=ganalytics.js.map