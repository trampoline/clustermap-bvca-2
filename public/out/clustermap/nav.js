// Compiled by ClojureScript 0.0-2080
goog.provide('clustermap.nav');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.dom.query');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom.classes');
goog.require('goog.dom.classes');
goog.require('goog.dom');
goog.require('goog.dom');
clustermap.nav.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,(function (e){return cljs.core.async.put_BANG_.call(null,out,e);
}));
return out;
});
clustermap.nav.init = (function init(){return goog.events.listen((goog.dom.query("#nav .search > a")[0]),"click",(function (e){console.log("boo");
return e.preventDefault();
}));
});

//# sourceMappingURL=nav.js.map