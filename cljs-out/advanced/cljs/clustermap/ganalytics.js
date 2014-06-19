// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__35381 = window;var G__35381__$1 = (((G__35381 == null))?null:G__35381.config);var G__35381__$2 = (((G__35381__$1 == null))?null:G__35381__$1.ua);var G__35381__$3 = (((G__35381__$2 == null))?null:G__35381__$2.code);return G__35381__$3;
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
