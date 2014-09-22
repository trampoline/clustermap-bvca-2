// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('weasel.repl');
goog.require('weasel.repl');
clustermap.core.init = (function init(){return clustermap.app.init.call(null);
});
if(cljs.core.truth_(config.repl))
{weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
clustermap.core.init.call(null);
} else
{clustermap.core.init.call(null);

}

//# sourceMappingURL=core.js.map