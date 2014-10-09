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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__47081 = cljs.core._EQ_;var expr__47082 = type;if(cljs.core.truth_((pred__47081.cljs$core$IFn$_invoke$arity$2 ? pred__47081.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1376,expr__47082) : pred__47081.call(null,cljs.core.constant$keyword$1376,expr__47082))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__47081.cljs$core$IFn$_invoke$arity$2 ? pred__47081.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1377,expr__47082) : pred__47081.call(null,cljs.core.constant$keyword$1377,expr__47082))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__47081.cljs$core$IFn$_invoke$arity$2 ? pred__47081.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1379,expr__47082) : pred__47081.call(null,cljs.core.constant$keyword$1379,expr__47082))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__47082))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__47084,owner){var map__47095 = p__47084;var map__47095__$1 = ((cljs.core.seq_QMARK_(map__47095))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47095):map__47095);var selection = map__47095__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47095__$1,cljs.core.constant$keyword$1147);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47095__$1,cljs.core.constant$keyword$1135);var map__47096 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__47096__$1 = ((cljs.core.seq_QMARK_(map__47096))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47096):map__47096);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47096__$1,cljs.core.constant$keyword$1452);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47096__$1,cljs.core.constant$keyword$1374);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47096__$1,cljs.core.constant$keyword$1385);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1432);var type_descr = (function (){var G__47097 = selection;var G__47097__$1 = (((G__47097 == null))?null:cljs.core.constant$keyword$1135.cljs$core$IFn$_invoke$arity$1(G__47097));var G__47097__$2 = (((G__47097__$1 == null))?null:clustermap.components.page_title.describe_type(G__47097__$1));return G__47097__$2;
})();var name = (function (){var G__47098 = selection;var G__47098__$1 = (((G__47098 == null))?null:cljs.core.constant$keyword$1147.cljs$core$IFn$_invoke$arity$1(G__47098));var G__47098__$2 = (((G__47098__$1 == null))?null:cljs.core.constant$keyword$1156.cljs$core$IFn$_invoke$arity$1(G__47098__$1));return G__47098__$2;
})();var url = (function (){var G__47099 = selection;var G__47099__$1 = (((G__47099 == null))?null:cljs.core.constant$keyword$1147.cljs$core$IFn$_invoke$arity$1(G__47099));var G__47099__$2 = (((G__47099__$1 == null))?null:cljs.core.constant$keyword$1518.cljs$core$IFn$_invoke$arity$1(G__47099__$1));return G__47099__$2;
})();if(typeof clustermap.components.page_title.t47100 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t47100 = (function (p__47084,selection,owner,path_fn,type_descr,map__47095,map__47096,value,name,comm,page_title_component,type,view_path_fn,url,meta47101){
this.p__47084 = p__47084;
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__47095 = map__47095;
this.map__47096 = map__47096;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.url = url;
this.meta47101 = meta47101;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t47100.cljs$lang$type = true;
clustermap.components.page_title.t47100.cljs$lang$ctorStr = "clustermap.components.page-title/t47100";
clustermap.components.page_title.t47100.cljs$lang$ctorPrWriter = ((function (map__47096,map__47096__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47095,map__47095__$1,selection,value,type){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.page-title/t47100");
});})(map__47096,map__47096__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47095,map__47095__$1,selection,value,type))
;
clustermap.components.page_title.t47100.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t47100.prototype.om$core$IRender$render$arity$1 = ((function (map__47096,map__47096__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47095,map__47095__$1,selection,value,type){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1169) : self__.view_path_fn.call(null,cljs.core.constant$keyword$1169))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs47103 = (function (){var or__3558__auto__ = self__.type_descr;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs47103))?sablono.interpreter.attributes(attrs47103):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47103))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47103)], null))));
})(),(function (){var attrs47104 = (function (){var or__3558__auto__ = self__.name;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs47104))?sablono.interpreter.attributes(attrs47104):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47104))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1379))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1519,"\u00A0(",cljs.core.constant$keyword$1520.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1521.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47104),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1379))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1519,"\u00A0(",cljs.core.constant$keyword$1520.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1521.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__47096,map__47096__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47095,map__47095__$1,selection,value,type))
;
clustermap.components.page_title.t47100.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47096,map__47096__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47095,map__47095__$1,selection,value,type){
return (function (_47102){var self__ = this;
var _47102__$1 = this;return self__.meta47101;
});})(map__47096,map__47096__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47095,map__47095__$1,selection,value,type))
;
clustermap.components.page_title.t47100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47096,map__47096__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47095,map__47095__$1,selection,value,type){
return (function (_47102,meta47101__$1){var self__ = this;
var _47102__$1 = this;return (new clustermap.components.page_title.t47100(self__.p__47084,self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.map__47095,self__.map__47096,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.url,meta47101__$1));
});})(map__47096,map__47096__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47095,map__47095__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t47100 = ((function (map__47096,map__47096__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47095,map__47095__$1,selection,value,type){
return (function __GT_t47100(p__47084__$1,selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__47095__$2,map__47096__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta47101){return (new clustermap.components.page_title.t47100(p__47084__$1,selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__47095__$2,map__47096__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta47101));
});})(map__47096,map__47096__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__47095,map__47095__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t47100(p__47084,selection,owner,path_fn__$1,type_descr,map__47095__$1,map__47096__$1,value,name,comm,page_title_component,type,view_path_fn,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$1409),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1205,document.getElementById(elem_id)], null));
});
