// Compiled by ClojureScript 0.0-2227
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__46485 = window;var G__46485__$1 = (((G__46485 == null))?null:G__46485.config);var G__46485__$2 = (((G__46485__$1 == null))?null:G__46485__$1.ua);var G__46485__$3 = (((G__46485__$2 == null))?null:G__46485__$2.code);return G__46485__$3;
})();if(cljs.core.truth_((function (){var and__3529__auto__ = window.ga;if(cljs.core.truth_(and__3529__auto__))
{return ua_code;
} else
{return and__3529__auto__;
}
})()))
{return ga("send","pageview",path);
} else
{return null;
}
});

//# sourceMappingURL=ganalytics.js.map