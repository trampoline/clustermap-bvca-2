// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.ganalytics');
goog.require('cljs.core');
clustermap.ganalytics.send_pageview = (function send_pageview(path){var ua_code = (function (){var G__45795 = window;var G__45795__$1 = (((G__45795 == null))?null:G__45795.config);var G__45795__$2 = (((G__45795__$1 == null))?null:G__45795__$1.ua);var G__45795__$3 = (((G__45795__$2 == null))?null:G__45795__$2.code);return G__45795__$3;
})();if(cljs.core.truth_((function (){var and__3429__auto__ = window.ga;if(cljs.core.truth_(and__3429__auto__))
{return ua_code;
} else
{return and__3429__auto__;
}
})()))
{return ga(new cljs.core.Symbol(null,"send'","send'",-1531208872,null),new cljs.core.Symbol(null,"pageview'","pageview'",-735743316,null),path);
} else
{return null;
}
});
