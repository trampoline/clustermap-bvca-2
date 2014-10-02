// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('weasel.repl');
goog.require('weasel.repl');
clustermap.core.init = (function init(){return clustermap.app.init();
});
if(cljs.core.truth_(config.repl))
{weasel.repl.connect.cljs$core$IFn$_invoke$arity$variadic("ws://localhost:9001",cljs.core.array_seq([cljs.core.constant$keyword$1271,true], 0));
figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$1277,"ws://localhost:3449/figwheel-ws",cljs.core.constant$keyword$1289,(function (){return console.log("reloaded");
})], 0));
clustermap.core.init();
} else
{clustermap.core.init();

}
