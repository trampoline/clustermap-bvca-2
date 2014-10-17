// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__32863 = window;var G__32863__$1 = (((G__32863 == null))?null:G__32863.config);var G__32863__$2 = (((G__32863__$1 == null))?null:G__32863__$1.ua);var G__32863__$3 = (((G__32863__$2 == null))?null:G__32863__$2.code);return G__32863__$3;
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
