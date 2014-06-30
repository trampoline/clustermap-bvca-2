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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__35120 = cljs.core._EQ_;var expr__35121 = type;if(cljs.core.truth_((pred__35120.cljs$core$IFn$_invoke$arity$2 ? pred__35120.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$700,expr__35121) : pred__35120.call(null,cljs.core.constant$keyword$700,expr__35121))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__35120.cljs$core$IFn$_invoke$arity$2 ? pred__35120.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,expr__35121) : pred__35120.call(null,cljs.core.constant$keyword$701,expr__35121))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__35120.cljs$core$IFn$_invoke$arity$2 ? pred__35120.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$703,expr__35121) : pred__35120.call(null,cljs.core.constant$keyword$703,expr__35121))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35121))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__35123,owner){var map__35134 = p__35123;var map__35134__$1 = ((cljs.core.seq_QMARK_(map__35134))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35134):map__35134);var selection = map__35134__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35134__$1,cljs.core.constant$keyword$585);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35134__$1,cljs.core.constant$keyword$614);var map__35135 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35135__$1 = ((cljs.core.seq_QMARK_(map__35135))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35135):map__35135);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,cljs.core.constant$keyword$800);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,cljs.core.constant$keyword$698);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35135__$1,cljs.core.constant$keyword$709);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$785);var type_descr = (function (){var G__35136 = selection;var G__35136__$1 = (((G__35136 == null))?null:cljs.core.constant$keyword$614.cljs$core$IFn$_invoke$arity$1(G__35136));var G__35136__$2 = (((G__35136__$1 == null))?null:clustermap.components.page_title.describe_type(G__35136__$1));return G__35136__$2;
})();var name = (function (){var G__35137 = selection;var G__35137__$1 = (((G__35137 == null))?null:cljs.core.constant$keyword$585.cljs$core$IFn$_invoke$arity$1(G__35137));var G__35137__$2 = (((G__35137__$1 == null))?null:cljs.core.constant$keyword$645.cljs$core$IFn$_invoke$arity$1(G__35137__$1));return G__35137__$2;
})();var url = (function (){var G__35138 = selection;var G__35138__$1 = (((G__35138 == null))?null:cljs.core.constant$keyword$585.cljs$core$IFn$_invoke$arity$1(G__35138));var G__35138__$2 = (((G__35138__$1 == null))?null:cljs.core.constant$keyword$812.cljs$core$IFn$_invoke$arity$1(G__35138__$1));return G__35138__$2;
})();if(typeof clustermap.components.page_title.t35139 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t35139 = (function (selection,owner,path_fn,type_descr,map__35135,value,name,comm,page_title_component,type,view_path_fn,map__35134,url,p__35123,meta35140){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__35135 = map__35135;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__35134 = map__35134;
this.url = url;
this.p__35123 = p__35123;
this.meta35140 = meta35140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t35139.cljs$lang$type = true;
clustermap.components.page_title.t35139.cljs$lang$ctorStr = "clustermap.components.page-title/t35139";
clustermap.components.page_title.t35139.cljs$lang$ctorPrWriter = ((function (map__35135,map__35135__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35134,map__35134__$1,selection,value,type){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.page-title/t35139");
});})(map__35135,map__35135__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35134,map__35134__$1,selection,value,type))
;
clustermap.components.page_title.t35139.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t35139.prototype.om$core$IRender$render$arity$1 = ((function (map__35135,map__35135__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35134,map__35134__$1,selection,value,type){
return (function (this__9412__auto__){var self__ = this;
var this__9412__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$801) : self__.view_path_fn.call(null,cljs.core.constant$keyword$801))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs35142 = (function (){var or__3541__auto__ = self__.type_descr;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs35142))?sablono.interpreter.attributes(attrs35142):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35142))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35142)], null))));
})(),(function (){var attrs35143 = (function (){var or__3541__auto__ = self__.name;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35143))?sablono.interpreter.attributes(attrs35143):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35143))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$703))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$813,"\u00A0(",cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35143),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$703))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$813,"\u00A0(",cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$799.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__35135,map__35135__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35134,map__35134__$1,selection,value,type))
;
clustermap.components.page_title.t35139.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35135,map__35135__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35134,map__35134__$1,selection,value,type){
return (function (_35141){var self__ = this;
var _35141__$1 = this;return self__.meta35140;
});})(map__35135,map__35135__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35134,map__35134__$1,selection,value,type))
;
clustermap.components.page_title.t35139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35135,map__35135__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35134,map__35134__$1,selection,value,type){
return (function (_35141,meta35140__$1){var self__ = this;
var _35141__$1 = this;return (new clustermap.components.page_title.t35139(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.map__35135,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__35134,self__.url,self__.p__35123,meta35140__$1));
});})(map__35135,map__35135__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35134,map__35134__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t35139 = ((function (map__35135,map__35135__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35134,map__35134__$1,selection,value,type){
return (function __GT_t35139(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__35135__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__35134__$2,url__$1,p__35123__$1,meta35140){return (new clustermap.components.page_title.t35139(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__35135__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__35134__$2,url__$1,p__35123__$1,meta35140));
});})(map__35135,map__35135__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35134,map__35134__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t35139(selection,owner,path_fn__$1,type_descr,map__35135__$1,value,name,comm,page_title_component,type,view_path_fn,map__35134__$1,url,p__35123,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$763),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$693,shared,cljs.core.constant$keyword$696,document.getElementById(elem_id)], null));
});
