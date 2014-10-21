// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__59276 = window;var G__59276__$1 = (((G__59276 == null))?null:G__59276.config);var G__59276__$2 = (((G__59276__$1 == null))?null:G__59276__$1.ua);var G__59276__$3 = (((G__59276__$2 == null))?null:G__59276__$2.code);return G__59276__$3;
})();if(cljs.core.truth_((function (){var and__3546__auto__ = window.ga;if(cljs.core.truth_(and__3546__auto__))
{return ua_code;
} else
{return and__3546__auto__;
}
})()))
{return ga("send","pageview",path);
} else
{return null;
}
});

//# sourceMappingURL=ganalytics.js.map