// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('weasel.repl');
goog.require('weasel.repl');
clustermap.core.init = (function init(){return clustermap.app.init.call(null);
});
if(cljs.core.truth_(config.repl))
{weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){return console.log("reloaded");
}));
clustermap.core.init.call(null);
} else
{clustermap.core.init.call(null);

}
