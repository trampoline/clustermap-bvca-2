// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__74395 = cljs.core._EQ_;var expr__74396 = type;if(cljs.core.truth_((function (){var G__74398 = cljs.core.constant$keyword$1286;var G__74399 = expr__74396;return (pred__74395.cljs$core$IFn$_invoke$arity$2 ? pred__74395.cljs$core$IFn$_invoke$arity$2(G__74398,G__74399) : pred__74395.call(null,G__74398,G__74399));
})()))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((function (){var G__74400 = cljs.core.constant$keyword$1287;var G__74401 = expr__74396;return (pred__74395.cljs$core$IFn$_invoke$arity$2 ? pred__74395.cljs$core$IFn$_invoke$arity$2(G__74400,G__74401) : pred__74395.call(null,G__74400,G__74401));
})()))
{return "Investor";
} else
{if(cljs.core.truth_((function (){var G__74402 = cljs.core.constant$keyword$1288;var G__74403 = expr__74396;return (pred__74395.cljs$core$IFn$_invoke$arity$2 ? pred__74395.cljs$core$IFn$_invoke$arity$2(G__74402,G__74403) : pred__74395.call(null,G__74402,G__74403));
})()))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__74396))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__74404,owner){var map__74426 = p__74404;var map__74426__$1 = ((cljs.core.seq_QMARK_(map__74426))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74426):map__74426);var selection = map__74426__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74426__$1,cljs.core.constant$keyword$1275);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74426__$1,cljs.core.constant$keyword$1160);var map__74427 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__74427__$1 = ((cljs.core.seq_QMARK_(map__74427))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__74427):map__74427);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74427__$1,cljs.core.constant$keyword$1563);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74427__$1,cljs.core.constant$keyword$1491);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74427__$1,cljs.core.constant$keyword$1312);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1543);var type_descr = (function (){var G__74428 = selection;var G__74428__$1 = (((G__74428 == null))?null:cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(G__74428));var G__74428__$2 = (((G__74428__$1 == null))?null:clustermap.components.page_title.describe_type(G__74428__$1));return G__74428__$2;
})();var name = (function (){var G__74429 = selection;var G__74429__$1 = (((G__74429 == null))?null:cljs.core.constant$keyword$1275.cljs$core$IFn$_invoke$arity$1(G__74429));var G__74429__$2 = (((G__74429__$1 == null))?null:cljs.core.constant$keyword$1274.cljs$core$IFn$_invoke$arity$1(G__74429__$1));return G__74429__$2;
})();var url = (function (){var G__74430 = selection;var G__74430__$1 = (((G__74430 == null))?null:cljs.core.constant$keyword$1275.cljs$core$IFn$_invoke$arity$1(G__74430));var G__74430__$2 = (((G__74430__$1 == null))?null:cljs.core.constant$keyword$1598.cljs$core$IFn$_invoke$arity$1(G__74430__$1));return G__74430__$2;
})();if(typeof clustermap.components.page_title.t74431 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t74431 = (function (map__74426,selection,owner,path_fn,type_descr,value,name,comm,page_title_component,type,view_path_fn,p__74404,map__74427,url,meta74432){
this.map__74426 = map__74426;
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.p__74404 = p__74404;
this.map__74427 = map__74427;
this.url = url;
this.meta74432 = meta74432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t74431.cljs$lang$type = true;
clustermap.components.page_title.t74431.cljs$lang$ctorStr = "clustermap.components.page-title/t74431";
clustermap.components.page_title.t74431.cljs$lang$ctorPrWriter = ((function (map__74427,map__74427__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__74426,map__74426__$1,selection,value,type){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.page-title/t74431");
});})(map__74427,map__74427__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__74426,map__74426__$1,selection,value,type))
;
clustermap.components.page_title.t74431.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t74431.prototype.om$core$IRender$render$arity$1 = ((function (map__74427,map__74427__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__74426,map__74426__$1,selection,value,type){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var G__74436 = {"id": "page-title"};var G__74437 = (function (){var G__74442 = {"className": "btn btn-link", "href": (function (){var G__74444 = cljs.core.constant$keyword$1339;return (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(G__74444) : self__.view_path_fn.call(null,G__74444));
})()};var G__74443 = "View on map";return React.DOM.a(G__74442,G__74443);
})();var G__74438 = sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null));var G__74439 = (function (){var attrs74434 = (function (){var or__3637__auto__ = self__.type_descr;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs74434))?sablono.interpreter.attributes(attrs74434):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs74434))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs74434)], null))));
})();var G__74440 = (function (){var attrs74435 = (function (){var or__3637__auto__ = self__.name;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs74435))?sablono.interpreter.attributes(attrs74435):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs74435))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1288))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1599,"\u00A0(",cljs.core.constant$keyword$1600.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1601.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs74435),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1288))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1599,"\u00A0(",cljs.core.constant$keyword$1600.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1601.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})();var G__74441 = (cljs.core.truth_(self__.url)?(function (){var G__74445 = {"href": self__.url, "target": "_blank"};var G__74446 = sablono.interpreter.interpret(self__.url);return React.DOM.a(G__74445,G__74446);
})():null);return React.DOM.div(G__74436,G__74437,G__74438,G__74439,G__74440,G__74441);
});})(map__74427,map__74427__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__74426,map__74426__$1,selection,value,type))
;
clustermap.components.page_title.t74431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__74427,map__74427__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__74426,map__74426__$1,selection,value,type){
return (function (_74433){var self__ = this;
var _74433__$1 = this;return self__.meta74432;
});})(map__74427,map__74427__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__74426,map__74426__$1,selection,value,type))
;
clustermap.components.page_title.t74431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__74427,map__74427__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__74426,map__74426__$1,selection,value,type){
return (function (_74433,meta74432__$1){var self__ = this;
var _74433__$1 = this;return (new clustermap.components.page_title.t74431(self__.map__74426,self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.p__74404,self__.map__74427,self__.url,meta74432__$1));
});})(map__74427,map__74427__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__74426,map__74426__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t74431 = ((function (map__74427,map__74427__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__74426,map__74426__$1,selection,value,type){
return (function __GT_t74431(map__74426__$2,selection__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,p__74404__$1,map__74427__$2,url__$1,meta74432){return (new clustermap.components.page_title.t74431(map__74426__$2,selection__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,p__74404__$1,map__74427__$2,url__$1,meta74432));
});})(map__74427,map__74427__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__74426,map__74426__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t74431(map__74426__$1,selection,owner,path_fn__$1,type_descr,value,name,comm,page_title_component,type,view_path_fn,p__74404,map__74427__$1,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$1520),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1248,shared,cljs.core.constant$keyword$1252,document.getElementById(elem_id)], null));
});
