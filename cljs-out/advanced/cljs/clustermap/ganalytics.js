// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__58586 = window;var G__58586__$1 = (((G__58586 == null))?null:G__58586.config);var G__58586__$2 = (((G__58586__$1 == null))?null:G__58586__$1.ua);var G__58586__$3 = (((G__58586__$2 == null))?null:G__58586__$2.code);return G__58586__$3;
})();if(cljs.core.truth_((function (){var and__3625__auto__ = window.ga;if(cljs.core.truth_(and__3625__auto__))
{return ua_code;
} else
{return and__3625__auto__;
}
})()))
{var G__58587 = "send";var G__58588 = "pageview";var G__58589 = path;return ga(G__58587,G__58588,G__58589);
} else
{return null;
}
});
