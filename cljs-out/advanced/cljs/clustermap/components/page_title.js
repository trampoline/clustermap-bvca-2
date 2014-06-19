// Compiled by ClojureScript 0.0-2227
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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__35118 = cljs.core._EQ_;var expr__35119 = type;if(cljs.core.truth_((pred__35118.cljs$core$IFn$_invoke$arity$2 ? pred__35118.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,expr__35119) : pred__35118.call(null,cljs.core.constant$keyword$700,expr__35119))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__35118.cljs$core$IFn$_invoke$arity$2 ? pred__35118.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,expr__35119) : pred__35118.call(null,cljs.core.constant$keyword$701,expr__35119))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__35118.cljs$core$IFn$_invoke$arity$2 ? pred__35118.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$703,expr__35119) : pred__35118.call(null,cljs.core.constant$keyword$703,expr__35119))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35119))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__35121,owner){var map__35132 = p__35121;var map__35132__$1 = ((cljs.core.seq_QMARK_(map__35132))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35132):map__35132);var selection = map__35132__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,cljs.core.constant$keyword$585);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,cljs.core.constant$keyword$614);var map__35133 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35133__$1 = ((cljs.core.seq_QMARK_(map__35133))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35133):map__35133);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35133__$1,cljs.core.constant$keyword$800);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35133__$1,cljs.core.constant$keyword$698);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35133__$1,cljs.core.constant$keyword$709);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$785);var type_descr = (function (){var G__35134 = selection;var G__35134__$1 = (((G__35134 == null))?null:cljs.core.constant$keyword$614.cljs$core$IFn$_invoke$arity$1(G__35134));var G__35134__$2 = (((G__35134__$1 == null))?null:clustermap.components.page_title.describe_type(G__35134__$1));return G__35134__$2;
})();var name = (function (){var G__35135 = selection;var G__35135__$1 = (((G__35135 == null))?null:cljs.core.constant$keyword$585.cljs$core$IFn$_invoke$arity$1(G__35135));var G__35135__$2 = (((G__35135__$1 == null))?null:cljs.core.constant$keyword$645.cljs$core$IFn$_invoke$arity$1(G__35135__$1));return G__35135__$2;
})();var url = (function (){var G__35136 = selection;var G__35136__$1 = (((G__35136 == null))?null:cljs.core.constant$keyword$585.cljs$core$IFn$_invoke$arity$1(G__35136));var G__35136__$2 = (((G__35136__$1 == null))?null:cljs.core.constant$keyword$812.cljs$core$IFn$_invoke$arity$1(G__35136__$1));return G__35136__$2;
})();if(typeof clustermap.components.page_title.t35137 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t35137 = (function (selection,owner,path_fn,type_descr,value,name,comm,map__35133,page_title_component,type,view_path_fn,map__35132,url,p__35121,meta35138){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.value = value;
this.name = name;
this.comm = comm;
this.map__35133 = map__35133;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__35132 = map__35132;
this.url = url;
this.p__35121 = p__35121;
this.meta35138 = meta35138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t35137.cljs$lang$type = true;
clustermap.components.page_title.t35137.cljs$lang$ctorStr = "clustermap.components.page-title/t35137";
clustermap.components.page_title.t35137.cljs$lang$ctorPrWriter = ((function (map__35133,map__35133__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35132,map__35132__$1,selection,value,type){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.page-title/t35137");
});})(map__35133,map__35133__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35132,map__35132__$1,selection,value,type))
;
clustermap.components.page_title.t35137.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t35137.prototype.om$core$IRender$render$arity$1 = ((function (map__35133,map__35133__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35132,map__35132__$1,selection,value,type){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$801) : self__.view_path_fn.call(null,cljs.core.constant$keyword$801))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs35140 = (function (){var or__3539__auto__ = self__.type_descr;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs35140))?sablono.interpreter.attributes(attrs35140):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35140))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35140)], null))));
})(),(function (){var attrs35141 = (function (){var or__3539__auto__ = self__.name;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35141))?sablono.interpreter.attributes(attrs35141):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35141))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$703))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$813,"\u00A0(",cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35141),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$703))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$813,"\u00A0(",cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__35133,map__35133__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35132,map__35132__$1,selection,value,type))
;
clustermap.components.page_title.t35137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35133,map__35133__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35132,map__35132__$1,selection,value,type){
return (function (_35139){var self__ = this;
var _35139__$1 = this;return self__.meta35138;
});})(map__35133,map__35133__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35132,map__35132__$1,selection,value,type))
;
clustermap.components.page_title.t35137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35133,map__35133__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35132,map__35132__$1,selection,value,type){
return (function (_35139,meta35138__$1){var self__ = this;
var _35139__$1 = this;return (new clustermap.components.page_title.t35137(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.value,self__.name,self__.comm,self__.map__35133,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__35132,self__.url,self__.p__35121,meta35138__$1));
});})(map__35133,map__35133__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35132,map__35132__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t35137 = ((function (map__35133,map__35133__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35132,map__35132__$1,selection,value,type){
return (function __GT_t35137(selection__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,map__35133__$2,page_title_component__$1,type__$1,view_path_fn__$1,map__35132__$2,url__$1,p__35121__$1,meta35138){return (new clustermap.components.page_title.t35137(selection__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,map__35133__$2,page_title_component__$1,type__$1,view_path_fn__$1,map__35132__$2,url__$1,p__35121__$1,meta35138));
});})(map__35133,map__35133__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35132,map__35132__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t35137(selection,owner,path_fn__$1,type_descr,value,name,comm,map__35133__$1,page_title_component,type,view_path_fn,map__35132__$1,url,p__35121,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$763),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$693,shared,cljs.core.constant$keyword$696,document.getElementById(elem_id)], null));
});
