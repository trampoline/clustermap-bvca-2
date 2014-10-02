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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__39788 = cljs.core._EQ_;var expr__39789 = type;if(cljs.core.truth_((pred__39788.cljs$core$IFn$_invoke$arity$2 ? pred__39788.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1014,expr__39789) : pred__39788.call(null,cljs.core.constant$keyword$1014,expr__39789))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__39788.cljs$core$IFn$_invoke$arity$2 ? pred__39788.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1015,expr__39789) : pred__39788.call(null,cljs.core.constant$keyword$1015,expr__39789))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__39788.cljs$core$IFn$_invoke$arity$2 ? pred__39788.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1017,expr__39789) : pred__39788.call(null,cljs.core.constant$keyword$1017,expr__39789))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39789))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__39791,owner){var map__39802 = p__39791;var map__39802__$1 = ((cljs.core.seq_QMARK_(map__39802))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39802):map__39802);var selection = map__39802__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39802__$1,cljs.core.constant$keyword$942);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39802__$1,cljs.core.constant$keyword$912);var map__39803 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__39803__$1 = ((cljs.core.seq_QMARK_(map__39803))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39803):map__39803);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39803__$1,cljs.core.constant$keyword$1120);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39803__$1,cljs.core.constant$keyword$1012);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39803__$1,cljs.core.constant$keyword$1023);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1100);var type_descr = (function (){var G__39804 = selection;var G__39804__$1 = (((G__39804 == null))?null:cljs.core.constant$keyword$912.cljs$core$IFn$_invoke$arity$1(G__39804));var G__39804__$2 = (((G__39804__$1 == null))?null:clustermap.components.page_title.describe_type(G__39804__$1));return G__39804__$2;
})();var name = (function (){var G__39805 = selection;var G__39805__$1 = (((G__39805 == null))?null:cljs.core.constant$keyword$942.cljs$core$IFn$_invoke$arity$1(G__39805));var G__39805__$2 = (((G__39805__$1 == null))?null:cljs.core.constant$keyword$941.cljs$core$IFn$_invoke$arity$1(G__39805__$1));return G__39805__$2;
})();var url = (function (){var G__39806 = selection;var G__39806__$1 = (((G__39806 == null))?null:cljs.core.constant$keyword$942.cljs$core$IFn$_invoke$arity$1(G__39806));var G__39806__$2 = (((G__39806__$1 == null))?null:cljs.core.constant$keyword$1188.cljs$core$IFn$_invoke$arity$1(G__39806__$1));return G__39806__$2;
})();if(typeof clustermap.components.page_title.t39807 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t39807 = (function (selection,owner,path_fn,type_descr,value,name,comm,page_title_component,type,view_path_fn,map__39802,p__39791,map__39803,url,meta39808){
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
this.map__39802 = map__39802;
this.p__39791 = p__39791;
this.map__39803 = map__39803;
this.url = url;
this.meta39808 = meta39808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t39807.cljs$lang$type = true;
clustermap.components.page_title.t39807.cljs$lang$ctorStr = "clustermap.components.page-title/t39807";
clustermap.components.page_title.t39807.cljs$lang$ctorPrWriter = ((function (map__39803,map__39803__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39802,map__39802__$1,selection,value,type){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.page-title/t39807");
});})(map__39803,map__39803__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39802,map__39802__$1,selection,value,type))
;
clustermap.components.page_title.t39807.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t39807.prototype.om$core$IRender$render$arity$1 = ((function (map__39803,map__39803__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39802,map__39802__$1,selection,value,type){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1189) : self__.view_path_fn.call(null,cljs.core.constant$keyword$1189))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs39810 = (function (){var or__3558__auto__ = self__.type_descr;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs39810))?sablono.interpreter.attributes(attrs39810):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39810))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39810)], null))));
})(),(function (){var attrs39811 = (function (){var or__3558__auto__ = self__.name;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs39811))?sablono.interpreter.attributes(attrs39811):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39811))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1017))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1190,"\u00A0(",cljs.core.constant$keyword$1191.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1192.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39811),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1017))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1190,"\u00A0(",cljs.core.constant$keyword$1191.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1192.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__39803,map__39803__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39802,map__39802__$1,selection,value,type))
;
clustermap.components.page_title.t39807.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39803,map__39803__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39802,map__39802__$1,selection,value,type){
return (function (_39809){var self__ = this;
var _39809__$1 = this;return self__.meta39808;
});})(map__39803,map__39803__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39802,map__39802__$1,selection,value,type))
;
clustermap.components.page_title.t39807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39803,map__39803__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39802,map__39802__$1,selection,value,type){
return (function (_39809,meta39808__$1){var self__ = this;
var _39809__$1 = this;return (new clustermap.components.page_title.t39807(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__39802,self__.p__39791,self__.map__39803,self__.url,meta39808__$1));
});})(map__39803,map__39803__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39802,map__39802__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t39807 = ((function (map__39803,map__39803__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39802,map__39802__$1,selection,value,type){
return (function __GT_t39807(selection__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__39802__$2,p__39791__$1,map__39803__$2,url__$1,meta39808){return (new clustermap.components.page_title.t39807(selection__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__39802__$2,p__39791__$1,map__39803__$2,url__$1,meta39808));
});})(map__39803,map__39803__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39802,map__39802__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t39807(selection,owner,path_fn__$1,type_descr,value,name,comm,page_title_component,type,view_path_fn,map__39802__$1,p__39791,map__39803__$1,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$1078),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$979,shared,cljs.core.constant$keyword$982,document.getElementById(elem_id)], null));
});
