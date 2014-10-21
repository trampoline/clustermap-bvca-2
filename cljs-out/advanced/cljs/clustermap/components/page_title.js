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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__56169 = cljs.core._EQ_;var expr__56170 = type;if(cljs.core.truth_((function (){var G__56172 = cljs.core.constant$keyword$1286;var G__56173 = expr__56170;return (pred__56169.cljs$core$IFn$_invoke$arity$2 ? pred__56169.cljs$core$IFn$_invoke$arity$2(G__56172,G__56173) : pred__56169.call(null,G__56172,G__56173));
})()))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((function (){var G__56174 = cljs.core.constant$keyword$1287;var G__56175 = expr__56170;return (pred__56169.cljs$core$IFn$_invoke$arity$2 ? pred__56169.cljs$core$IFn$_invoke$arity$2(G__56174,G__56175) : pred__56169.call(null,G__56174,G__56175));
})()))
{return "Investor";
} else
{if(cljs.core.truth_((function (){var G__56176 = cljs.core.constant$keyword$1288;var G__56177 = expr__56170;return (pred__56169.cljs$core$IFn$_invoke$arity$2 ? pred__56169.cljs$core$IFn$_invoke$arity$2(G__56176,G__56177) : pred__56169.call(null,G__56176,G__56177));
})()))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__56170))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__56178,owner){var map__56200 = p__56178;var map__56200__$1 = ((cljs.core.seq_QMARK_(map__56200))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56200):map__56200);var selection = map__56200__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56200__$1,cljs.core.constant$keyword$1275);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56200__$1,cljs.core.constant$keyword$1160);var map__56201 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__56201__$1 = ((cljs.core.seq_QMARK_(map__56201))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56201):map__56201);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56201__$1,cljs.core.constant$keyword$1593);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56201__$1,cljs.core.constant$keyword$1496);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56201__$1,cljs.core.constant$keyword$1312);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1539);var type_descr = (function (){var G__56202 = selection;var G__56202__$1 = (((G__56202 == null))?null:cljs.core.constant$keyword$1160.cljs$core$IFn$_invoke$arity$1(G__56202));var G__56202__$2 = (((G__56202__$1 == null))?null:clustermap.components.page_title.describe_type(G__56202__$1));return G__56202__$2;
})();var name = (function (){var G__56203 = selection;var G__56203__$1 = (((G__56203 == null))?null:cljs.core.constant$keyword$1275.cljs$core$IFn$_invoke$arity$1(G__56203));var G__56203__$2 = (((G__56203__$1 == null))?null:cljs.core.constant$keyword$1274.cljs$core$IFn$_invoke$arity$1(G__56203__$1));return G__56203__$2;
})();var url = (function (){var G__56204 = selection;var G__56204__$1 = (((G__56204 == null))?null:cljs.core.constant$keyword$1275.cljs$core$IFn$_invoke$arity$1(G__56204));var G__56204__$2 = (((G__56204__$1 == null))?null:cljs.core.constant$keyword$1594.cljs$core$IFn$_invoke$arity$1(G__56204__$1));return G__56204__$2;
})();if(typeof clustermap.components.page_title.t56205 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t56205 = (function (selection,owner,path_fn,p__56178,type_descr,map__56201,value,name,comm,map__56200,page_title_component,type,view_path_fn,url,meta56206){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.p__56178 = p__56178;
this.type_descr = type_descr;
this.map__56201 = map__56201;
this.value = value;
this.name = name;
this.comm = comm;
this.map__56200 = map__56200;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.url = url;
this.meta56206 = meta56206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t56205.cljs$lang$type = true;
clustermap.components.page_title.t56205.cljs$lang$ctorStr = "clustermap.components.page-title/t56205";
clustermap.components.page_title.t56205.cljs$lang$ctorPrWriter = ((function (map__56201,map__56201__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__56200,map__56200__$1,selection,value,type){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.page-title/t56205");
});})(map__56201,map__56201__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__56200,map__56200__$1,selection,value,type))
;
clustermap.components.page_title.t56205.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t56205.prototype.om$core$IRender$render$arity$1 = ((function (map__56201,map__56201__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__56200,map__56200__$1,selection,value,type){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var G__56210 = {"id": "page-title"};var G__56211 = (function (){var G__56216 = {"className": "btn btn-link", "href": (function (){var G__56218 = cljs.core.constant$keyword$1356;return (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(G__56218) : self__.view_path_fn.call(null,G__56218));
})()};var G__56217 = "View on map";return React.DOM.a(G__56216,G__56217);
})();var G__56212 = sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null));var G__56213 = (function (){var attrs56208 = (function (){var or__3637__auto__ = self__.type_descr;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs56208))?sablono.interpreter.attributes(attrs56208):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56208))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56208)], null))));
})();var G__56214 = (function (){var attrs56209 = (function (){var or__3637__auto__ = self__.name;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs56209))?sablono.interpreter.attributes(attrs56209):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56209))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1288))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1595,"\u00A0(",cljs.core.constant$keyword$1596.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1597.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56209),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1288))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1595,"\u00A0(",cljs.core.constant$keyword$1596.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1597.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})();var G__56215 = (cljs.core.truth_(self__.url)?(function (){var G__56219 = {"href": self__.url, "target": "_blank"};var G__56220 = sablono.interpreter.interpret(self__.url);return React.DOM.a(G__56219,G__56220);
})():null);return React.DOM.div(G__56210,G__56211,G__56212,G__56213,G__56214,G__56215);
});})(map__56201,map__56201__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__56200,map__56200__$1,selection,value,type))
;
clustermap.components.page_title.t56205.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__56201,map__56201__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__56200,map__56200__$1,selection,value,type){
return (function (_56207){var self__ = this;
var _56207__$1 = this;return self__.meta56206;
});})(map__56201,map__56201__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__56200,map__56200__$1,selection,value,type))
;
clustermap.components.page_title.t56205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__56201,map__56201__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__56200,map__56200__$1,selection,value,type){
return (function (_56207,meta56206__$1){var self__ = this;
var _56207__$1 = this;return (new clustermap.components.page_title.t56205(self__.selection,self__.owner,self__.path_fn,self__.p__56178,self__.type_descr,self__.map__56201,self__.value,self__.name,self__.comm,self__.map__56200,self__.page_title_component,self__.type,self__.view_path_fn,self__.url,meta56206__$1));
});})(map__56201,map__56201__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__56200,map__56200__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t56205 = ((function (map__56201,map__56201__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__56200,map__56200__$1,selection,value,type){
return (function __GT_t56205(selection__$1,owner__$1,path_fn__$2,p__56178__$1,type_descr__$1,map__56201__$2,value__$1,name__$1,comm__$1,map__56200__$2,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta56206){return (new clustermap.components.page_title.t56205(selection__$1,owner__$1,path_fn__$2,p__56178__$1,type_descr__$1,map__56201__$2,value__$1,name__$1,comm__$1,map__56200__$2,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta56206));
});})(map__56201,map__56201__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__56200,map__56200__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t56205(selection,owner,path_fn__$1,p__56178,type_descr,map__56201__$1,value,name,comm,map__56200__$1,page_title_component,type,view_path_fn,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$1516),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1248,shared,cljs.core.constant$keyword$1252,document.getElementById(elem_id)], null));
});
