// Compiled by ClojureScript 0.0-2322
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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__47090 = cljs.core._EQ_;var expr__47091 = type;if(cljs.core.truth_((pred__47090.cljs$core$IFn$_invoke$arity$2 ? pred__47090.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1376,expr__47091) : pred__47090.call(null,cljs.core.constant$keyword$1376,expr__47091))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__47090.cljs$core$IFn$_invoke$arity$2 ? pred__47090.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1377,expr__47091) : pred__47090.call(null,cljs.core.constant$keyword$1377,expr__47091))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__47090.cljs$core$IFn$_invoke$arity$2 ? pred__47090.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1379,expr__47091) : pred__47090.call(null,cljs.core.constant$keyword$1379,expr__47091))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__47091))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__47093,owner){var map__47104 = p__47093;var map__47104__$1 = ((cljs.core.seq_QMARK_(map__47104))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47104):map__47104);var selection = map__47104__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47104__$1,cljs.core.constant$keyword$1147);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47104__$1,cljs.core.constant$keyword$1135);var map__47105 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__47105__$1 = ((cljs.core.seq_QMARK_(map__47105))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47105):map__47105);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47105__$1,cljs.core.constant$keyword$1452);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47105__$1,cljs.core.constant$keyword$1374);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47105__$1,cljs.core.constant$keyword$1385);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1432);var type_descr = (function (){var G__47106 = selection;var G__47106__$1 = (((G__47106 == null))?null:cljs.core.constant$keyword$1135.cljs$core$IFn$_invoke$arity$1(G__47106));var G__47106__$2 = (((G__47106__$1 == null))?null:clustermap.components.page_title.describe_type(G__47106__$1));return G__47106__$2;
})();var name = (function (){var G__47107 = selection;var G__47107__$1 = (((G__47107 == null))?null:cljs.core.constant$keyword$1147.cljs$core$IFn$_invoke$arity$1(G__47107));var G__47107__$2 = (((G__47107__$1 == null))?null:cljs.core.constant$keyword$1156.cljs$core$IFn$_invoke$arity$1(G__47107__$1));return G__47107__$2;
})();var url = (function (){var G__47108 = selection;var G__47108__$1 = (((G__47108 == null))?null:cljs.core.constant$keyword$1147.cljs$core$IFn$_invoke$arity$1(G__47108));var G__47108__$2 = (((G__47108__$1 == null))?null:cljs.core.constant$keyword$1522.cljs$core$IFn$_invoke$arity$1(G__47108__$1));return G__47108__$2;
})();if(typeof clustermap.components.page_title.t47109 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t47109 = (function (selection,p__47093,owner,path_fn,type_descr,map__47104,value,name,map__47105,comm,page_title_component,type,view_path_fn,url,meta47110){
this.selection = selection;
this.p__47093 = p__47093;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__47104 = map__47104;
this.value = value;
this.name = name;
this.map__47105 = map__47105;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.url = url;
this.meta47110 = meta47110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t47109.cljs$lang$type = true;
clustermap.components.page_title.t47109.cljs$lang$ctorStr = "clustermap.components.page-title/t47109";
clustermap.components.page_title.t47109.cljs$lang$ctorPrWriter = ((function (map__47105,map__47105__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47104,map__47104__$1,selection,value,type){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.page-title/t47109");
});})(map__47105,map__47105__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47104,map__47104__$1,selection,value,type))
;
clustermap.components.page_title.t47109.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t47109.prototype.om$core$IRender$render$arity$1 = ((function (map__47105,map__47105__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47104,map__47104__$1,selection,value,type){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1169) : self__.view_path_fn.call(null,cljs.core.constant$keyword$1169))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs47112 = (function (){var or__3558__auto__ = self__.type_descr;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs47112))?sablono.interpreter.attributes(attrs47112):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47112))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47112)], null))));
})(),(function (){var attrs47113 = (function (){var or__3558__auto__ = self__.name;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs47113))?sablono.interpreter.attributes(attrs47113):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47113))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1379))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1523,"\u00A0(",cljs.core.constant$keyword$1524.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1525.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47113),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1379))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1523,"\u00A0(",cljs.core.constant$keyword$1524.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1525.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__47105,map__47105__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47104,map__47104__$1,selection,value,type))
;
clustermap.components.page_title.t47109.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47105,map__47105__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47104,map__47104__$1,selection,value,type){
return (function (_47111){var self__ = this;
var _47111__$1 = this;return self__.meta47110;
});})(map__47105,map__47105__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47104,map__47104__$1,selection,value,type))
;
clustermap.components.page_title.t47109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47105,map__47105__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47104,map__47104__$1,selection,value,type){
return (function (_47111,meta47110__$1){var self__ = this;
var _47111__$1 = this;return (new clustermap.components.page_title.t47109(self__.selection,self__.p__47093,self__.owner,self__.path_fn,self__.type_descr,self__.map__47104,self__.value,self__.name,self__.map__47105,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.url,meta47110__$1));
});})(map__47105,map__47105__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47104,map__47104__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t47109 = ((function (map__47105,map__47105__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47104,map__47104__$1,selection,value,type){
return (function __GT_t47109(selection__$1,p__47093__$1,owner__$1,path_fn__$2,type_descr__$1,map__47104__$2,value__$1,name__$1,map__47105__$2,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta47110){return (new clustermap.components.page_title.t47109(selection__$1,p__47093__$1,owner__$1,path_fn__$2,type_descr__$1,map__47104__$2,value__$1,name__$1,map__47105__$2,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta47110));
});})(map__47105,map__47105__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47104,map__47104__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t47109(selection,p__47093,owner,path_fn__$1,type_descr,map__47104__$1,value,name,map__47105__$1,comm,page_title_component,type,view_path_fn,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$1409),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1205,document.getElementById(elem_id)], null));
});
