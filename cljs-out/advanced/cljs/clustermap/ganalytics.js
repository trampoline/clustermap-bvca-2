// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__57407 = window;var G__57407__$1 = (((G__57407 == null))?null:G__57407.config);var G__57407__$2 = (((G__57407__$1 == null))?null:G__57407__$1.ua);var G__57407__$3 = (((G__57407__$2 == null))?null:G__57407__$2.code);return G__57407__$3;
})();if(cljs.core.truth_((function (){var and__3625__auto__ = window.ga;if(cljs.core.truth_(and__3625__auto__))
{return ua_code;
} else
{return and__3625__auto__;
}
})()))
{var G__57408 = "send";var G__57409 = "pageview";var G__57410 = path;return ga(G__57408,G__57409,G__57410);
} else
{return null;
}
});
