// Compiled by ClojureScript 0.0-2261
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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__35525 = cljs.core._EQ_;var expr__35526 = type;if(cljs.core.truth_((pred__35525.cljs$core$IFn$_invoke$arity$2 ? pred__35525.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$766,expr__35526) : pred__35525.call(null,cljs.core.constant$keyword$766,expr__35526))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__35525.cljs$core$IFn$_invoke$arity$2 ? pred__35525.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$767,expr__35526) : pred__35525.call(null,cljs.core.constant$keyword$767,expr__35526))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__35525.cljs$core$IFn$_invoke$arity$2 ? pred__35525.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$769,expr__35526) : pred__35525.call(null,cljs.core.constant$keyword$769,expr__35526))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35526))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__35528,owner){var map__35539 = p__35528;var map__35539__$1 = ((cljs.core.seq_QMARK_(map__35539))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35539):map__35539);var selection = map__35539__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35539__$1,cljs.core.constant$keyword$711);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35539__$1,cljs.core.constant$keyword$679);var map__35540 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35540__$1 = ((cljs.core.seq_QMARK_(map__35540))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35540):map__35540);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540__$1,cljs.core.constant$keyword$865);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540__$1,cljs.core.constant$keyword$764);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35540__$1,cljs.core.constant$keyword$774);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$850);var type_descr = (function (){var G__35541 = selection;var G__35541__$1 = (((G__35541 == null))?null:cljs.core.constant$keyword$679.cljs$core$IFn$_invoke$arity$1(G__35541));var G__35541__$2 = (((G__35541__$1 == null))?null:clustermap.components.page_title.describe_type(G__35541__$1));return G__35541__$2;
})();var name = (function (){var G__35542 = selection;var G__35542__$1 = (((G__35542 == null))?null:cljs.core.constant$keyword$711.cljs$core$IFn$_invoke$arity$1(G__35542));var G__35542__$2 = (((G__35542__$1 == null))?null:cljs.core.constant$keyword$710.cljs$core$IFn$_invoke$arity$1(G__35542__$1));return G__35542__$2;
})();var url = (function (){var G__35543 = selection;var G__35543__$1 = (((G__35543 == null))?null:cljs.core.constant$keyword$711.cljs$core$IFn$_invoke$arity$1(G__35543));var G__35543__$2 = (((G__35543__$1 == null))?null:cljs.core.constant$keyword$878.cljs$core$IFn$_invoke$arity$1(G__35543__$1));return G__35543__$2;
})();if(typeof clustermap.components.page_title.t35544 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t35544 = (function (selection,map__35540,owner,path_fn,map__35539,type_descr,p__35528,value,name,comm,page_title_component,type,view_path_fn,url,meta35545){
this.selection = selection;
this.map__35540 = map__35540;
this.owner = owner;
this.path_fn = path_fn;
this.map__35539 = map__35539;
this.type_descr = type_descr;
this.p__35528 = p__35528;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.url = url;
this.meta35545 = meta35545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t35544.cljs$lang$type = true;
clustermap.components.page_title.t35544.cljs$lang$ctorStr = "clustermap.components.page-title/t35544";
clustermap.components.page_title.t35544.cljs$lang$ctorPrWriter = ((function (map__35540,map__35540__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35539,map__35539__$1,selection,value,type){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.page-title/t35544");
});})(map__35540,map__35540__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35539,map__35539__$1,selection,value,type))
;
clustermap.components.page_title.t35544.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t35544.prototype.om$core$IRender$render$arity$1 = ((function (map__35540,map__35540__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35539,map__35539__$1,selection,value,type){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$866) : self__.view_path_fn.call(null,cljs.core.constant$keyword$866))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs35547 = (function (){var or__3543__auto__ = self__.type_descr;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs35547))?sablono.interpreter.attributes(attrs35547):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35547))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35547)], null))));
})(),(function (){var attrs35548 = (function (){var or__3543__auto__ = self__.name;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35548))?sablono.interpreter.attributes(attrs35548):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35548))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$769))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$879,"\u00A0(",cljs.core.constant$keyword$863.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35548),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$769))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$879,"\u00A0(",cljs.core.constant$keyword$863.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$864.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__35540,map__35540__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35539,map__35539__$1,selection,value,type))
;
clustermap.components.page_title.t35544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35540,map__35540__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35539,map__35539__$1,selection,value,type){
return (function (_35546){var self__ = this;
var _35546__$1 = this;return self__.meta35545;
});})(map__35540,map__35540__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35539,map__35539__$1,selection,value,type))
;
clustermap.components.page_title.t35544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35540,map__35540__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35539,map__35539__$1,selection,value,type){
return (function (_35546,meta35545__$1){var self__ = this;
var _35546__$1 = this;return (new clustermap.components.page_title.t35544(self__.selection,self__.map__35540,self__.owner,self__.path_fn,self__.map__35539,self__.type_descr,self__.p__35528,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.url,meta35545__$1));
});})(map__35540,map__35540__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35539,map__35539__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t35544 = ((function (map__35540,map__35540__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35539,map__35539__$1,selection,value,type){
return (function __GT_t35544(selection__$1,map__35540__$2,owner__$1,path_fn__$2,map__35539__$2,type_descr__$1,p__35528__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta35545){return (new clustermap.components.page_title.t35544(selection__$1,map__35540__$2,owner__$1,path_fn__$2,map__35539__$2,type_descr__$1,p__35528__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta35545));
});})(map__35540,map__35540__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35539,map__35539__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t35544(selection,map__35540__$1,owner,path_fn__$1,map__35539__$1,type_descr,p__35528,value,name,comm,page_title_component,type,view_path_fn,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$828),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$759,shared,cljs.core.constant$keyword$762,document.getElementById(elem_id)], null));
});
