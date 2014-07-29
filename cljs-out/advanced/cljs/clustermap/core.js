// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('weasel.repl');
goog.require('weasel.repl');
clustermap.core.init = (function init(){return clustermap.app.init();
});
if(cljs.core.truth_(config.repl))
{weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic("ws://localhost:9001",cljs.core.array_seq([cljs.core.constant$keyword$1148,true], 0));
clustermap.core.init();
} else
{if(true)
{clustermap.core.init();
} else
{}
}
