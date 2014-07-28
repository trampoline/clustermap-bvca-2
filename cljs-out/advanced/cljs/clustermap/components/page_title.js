// Compiled by ClojureScript 0.0-2268
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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__39486 = cljs.core._EQ_;var expr__39487 = type;if(cljs.core.truth_((pred__39486.cljs$core$IFn$_invoke$arity$2 ? pred__39486.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$891,expr__39487) : pred__39486.call(null,cljs.core.constant$keyword$891,expr__39487))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__39486.cljs$core$IFn$_invoke$arity$2 ? pred__39486.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$892,expr__39487) : pred__39486.call(null,cljs.core.constant$keyword$892,expr__39487))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__39486.cljs$core$IFn$_invoke$arity$2 ? pred__39486.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$894,expr__39487) : pred__39486.call(null,cljs.core.constant$keyword$894,expr__39487))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39487))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__39489,owner){var map__39500 = p__39489;var map__39500__$1 = ((cljs.core.seq_QMARK_(map__39500))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39500):map__39500);var selection = map__39500__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39500__$1,cljs.core.constant$keyword$837);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39500__$1,cljs.core.constant$keyword$806);var map__39501 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__39501__$1 = ((cljs.core.seq_QMARK_(map__39501))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39501):map__39501);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501__$1,cljs.core.constant$keyword$990);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501__$1,cljs.core.constant$keyword$889);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39501__$1,cljs.core.constant$keyword$899);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$975);var type_descr = (function (){var G__39502 = selection;var G__39502__$1 = (((G__39502 == null))?null:cljs.core.constant$keyword$806.cljs$core$IFn$_invoke$arity$1(G__39502));var G__39502__$2 = (((G__39502__$1 == null))?null:clustermap.components.page_title.describe_type(G__39502__$1));return G__39502__$2;
})();var name = (function (){var G__39503 = selection;var G__39503__$1 = (((G__39503 == null))?null:cljs.core.constant$keyword$837.cljs$core$IFn$_invoke$arity$1(G__39503));var G__39503__$2 = (((G__39503__$1 == null))?null:cljs.core.constant$keyword$836.cljs$core$IFn$_invoke$arity$1(G__39503__$1));return G__39503__$2;
})();var url = (function (){var G__39504 = selection;var G__39504__$1 = (((G__39504 == null))?null:cljs.core.constant$keyword$837.cljs$core$IFn$_invoke$arity$1(G__39504));var G__39504__$2 = (((G__39504__$1 == null))?null:cljs.core.constant$keyword$1058.cljs$core$IFn$_invoke$arity$1(G__39504__$1));return G__39504__$2;
})();if(typeof clustermap.components.page_title.t39505 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t39505 = (function (selection,map__39500,owner,path_fn,type_descr,value,name,comm,page_title_component,type,view_path_fn,map__39501,p__39489,url,meta39506){
this.selection = selection;
this.map__39500 = map__39500;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__39501 = map__39501;
this.p__39489 = p__39489;
this.url = url;
this.meta39506 = meta39506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t39505.cljs$lang$type = true;
clustermap.components.page_title.t39505.cljs$lang$ctorStr = "clustermap.components.page-title/t39505";
clustermap.components.page_title.t39505.cljs$lang$ctorPrWriter = ((function (map__39501,map__39501__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39500,map__39500__$1,selection,value,type){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.page-title/t39505");
});})(map__39501,map__39501__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39500,map__39500__$1,selection,value,type))
;
clustermap.components.page_title.t39505.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t39505.prototype.om$core$IRender$render$arity$1 = ((function (map__39501,map__39501__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39500,map__39500__$1,selection,value,type){
return (function (this__9487__auto__){var self__ = this;
var this__9487__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$991) : self__.view_path_fn.call(null,cljs.core.constant$keyword$991))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs39508 = (function (){var or__3543__auto__ = self__.type_descr;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs39508))?sablono.interpreter.attributes(attrs39508):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39508))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39508)], null))));
})(),(function (){var attrs39509 = (function (){var or__3543__auto__ = self__.name;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs39509))?sablono.interpreter.attributes(attrs39509):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39509))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$894))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1059,"\u00A0(",cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$989.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39509),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$894))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1059,"\u00A0(",cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$989.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__39501,map__39501__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39500,map__39500__$1,selection,value,type))
;
clustermap.components.page_title.t39505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39501,map__39501__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39500,map__39500__$1,selection,value,type){
return (function (_39507){var self__ = this;
var _39507__$1 = this;return self__.meta39506;
});})(map__39501,map__39501__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39500,map__39500__$1,selection,value,type))
;
clustermap.components.page_title.t39505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39501,map__39501__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39500,map__39500__$1,selection,value,type){
return (function (_39507,meta39506__$1){var self__ = this;
var _39507__$1 = this;return (new clustermap.components.page_title.t39505(self__.selection,self__.map__39500,self__.owner,self__.path_fn,self__.type_descr,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__39501,self__.p__39489,self__.url,meta39506__$1));
});})(map__39501,map__39501__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39500,map__39500__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t39505 = ((function (map__39501,map__39501__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39500,map__39500__$1,selection,value,type){
return (function __GT_t39505(selection__$1,map__39500__$2,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__39501__$2,p__39489__$1,url__$1,meta39506){return (new clustermap.components.page_title.t39505(selection__$1,map__39500__$2,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__39501__$2,p__39489__$1,url__$1,meta39506));
});})(map__39501,map__39501__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39500,map__39500__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t39505(selection,map__39500__$1,owner,path_fn__$1,type_descr,value,name,comm,page_title_component,type,view_path_fn,map__39501__$1,p__39489,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$953),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$884,shared,cljs.core.constant$keyword$887,document.getElementById(elem_id)], null));
});
