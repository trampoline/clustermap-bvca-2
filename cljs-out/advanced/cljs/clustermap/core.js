// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.core');
goog.require('cljs.core');
goog.require('clustermap.app');
goog.require('clustermap.app');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('clustermap.nav');
goog.require('clustermap.nav');
goog.require('clustermap.api');
goog.require('clustermap.api');
goog.require('clustermap.repl');
clustermap.core.init = (function init(){clustermap.nav.init();
return clustermap.app.init();
});
clustermap.core.init();
