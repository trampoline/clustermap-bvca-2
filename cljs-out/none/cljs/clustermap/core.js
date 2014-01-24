// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('clustermap.nav');
goog.require('clustermap.nav');
goog.require('clustermap.repl');
clustermap.core.init = (function init(){clustermap.nav.init.call(null);
return clustermap.app.init.call(null);
});
if(cljs.core.truth_(config.repl))
{setTimeout(clustermap.core.init,2000);
} else
{if(true)
{clustermap.core.init.call(null);
} else
{}
}

//# sourceMappingURL=core.js.map