// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__35776 = window;var G__35776__$1 = (((G__35776 == null))?null:G__35776.config);var G__35776__$2 = (((G__35776__$1 == null))?null:G__35776__$1.ua);var G__35776__$3 = (((G__35776__$2 == null))?null:G__35776__$2.code);return G__35776__$3;
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
