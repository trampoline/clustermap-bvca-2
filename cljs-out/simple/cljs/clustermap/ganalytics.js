// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__13105 = window;var G__13105__$1 = (((G__13105 == null))?null:G__13105.config);var G__13105__$2 = (((G__13105__$1 == null))?null:G__13105__$1.ua);var G__13105__$3 = (((G__13105__$2 == null))?null:G__13105__$2.code);return G__13105__$3;
})();if(cljs.core.truth_((function (){var and__3527__auto__ = window.ga;if(cljs.core.truth_(and__3527__auto__))
{return ua_code;
} else
{return and__3527__auto__;
}
})()))
{return ga("send","pageview",path);
} else
{return null;
}
});
