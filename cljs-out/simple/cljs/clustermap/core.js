// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('clojure.browser.repl');
clustermap.core.init = (function init(){return clustermap.app.init.call(null);
});
if(cljs.core.truth_(config.repl))
{setTimeout(clustermap.core.init,(2000));
} else
{clustermap.core.init.call(null);

}
