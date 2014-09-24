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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__38755 = cljs.core._EQ_;var expr__38756 = type;if(cljs.core.truth_((pred__38755.cljs$core$IFn$_invoke$arity$2 ? pred__38755.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$966,expr__38756) : pred__38755.call(null,cljs.core.constant$keyword$966,expr__38756))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__38755.cljs$core$IFn$_invoke$arity$2 ? pred__38755.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$967,expr__38756) : pred__38755.call(null,cljs.core.constant$keyword$967,expr__38756))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__38755.cljs$core$IFn$_invoke$arity$2 ? pred__38755.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$969,expr__38756) : pred__38755.call(null,cljs.core.constant$keyword$969,expr__38756))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38756))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__38758,owner){var map__38769 = p__38758;var map__38769__$1 = ((cljs.core.seq_QMARK_(map__38769))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38769):map__38769);var selection = map__38769__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38769__$1,cljs.core.constant$keyword$913);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38769__$1,cljs.core.constant$keyword$880);var map__38770 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38770__$1 = ((cljs.core.seq_QMARK_(map__38770))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38770):map__38770);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38770__$1,cljs.core.constant$keyword$1072);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38770__$1,cljs.core.constant$keyword$964);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38770__$1,cljs.core.constant$keyword$974);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1050);var type_descr = (function (){var G__38771 = selection;var G__38771__$1 = (((G__38771 == null))?null:cljs.core.constant$keyword$880.cljs$core$IFn$_invoke$arity$1(G__38771));var G__38771__$2 = (((G__38771__$1 == null))?null:clustermap.components.page_title.describe_type(G__38771__$1));return G__38771__$2;
})();var name = (function (){var G__38772 = selection;var G__38772__$1 = (((G__38772 == null))?null:cljs.core.constant$keyword$913.cljs$core$IFn$_invoke$arity$1(G__38772));var G__38772__$2 = (((G__38772__$1 == null))?null:cljs.core.constant$keyword$912.cljs$core$IFn$_invoke$arity$1(G__38772__$1));return G__38772__$2;
})();var url = (function (){var G__38773 = selection;var G__38773__$1 = (((G__38773 == null))?null:cljs.core.constant$keyword$913.cljs$core$IFn$_invoke$arity$1(G__38773));var G__38773__$2 = (((G__38773__$1 == null))?null:cljs.core.constant$keyword$1140.cljs$core$IFn$_invoke$arity$1(G__38773__$1));return G__38773__$2;
})();if(typeof clustermap.components.page_title.t38774 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t38774 = (function (selection,owner,path_fn,type_descr,map__38769,value,name,comm,page_title_component,type,view_path_fn,map__38770,p__38758,url,meta38775){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__38769 = map__38769;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__38770 = map__38770;
this.p__38758 = p__38758;
this.url = url;
this.meta38775 = meta38775;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t38774.cljs$lang$type = true;
clustermap.components.page_title.t38774.cljs$lang$ctorStr = "clustermap.components.page-title/t38774";
clustermap.components.page_title.t38774.cljs$lang$ctorPrWriter = ((function (map__38770,map__38770__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38769,map__38769__$1,selection,value,type){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.page-title/t38774");
});})(map__38770,map__38770__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38769,map__38769__$1,selection,value,type))
;
clustermap.components.page_title.t38774.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t38774.prototype.om$core$IRender$render$arity$1 = ((function (map__38770,map__38770__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38769,map__38769__$1,selection,value,type){
return (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1141) : self__.view_path_fn.call(null,cljs.core.constant$keyword$1141))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs38777 = (function (){var or__3558__auto__ = self__.type_descr;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs38777))?sablono.interpreter.attributes(attrs38777):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38777))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38777)], null))));
})(),(function (){var attrs38778 = (function (){var or__3558__auto__ = self__.name;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38778))?sablono.interpreter.attributes(attrs38778):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38778))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$969))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1142,"\u00A0(",cljs.core.constant$keyword$1143.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1144.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38778),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$969))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1142,"\u00A0(",cljs.core.constant$keyword$1143.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1144.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__38770,map__38770__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38769,map__38769__$1,selection,value,type))
;
clustermap.components.page_title.t38774.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38770,map__38770__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38769,map__38769__$1,selection,value,type){
return (function (_38776){var self__ = this;
var _38776__$1 = this;return self__.meta38775;
});})(map__38770,map__38770__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38769,map__38769__$1,selection,value,type))
;
clustermap.components.page_title.t38774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38770,map__38770__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38769,map__38769__$1,selection,value,type){
return (function (_38776,meta38775__$1){var self__ = this;
var _38776__$1 = this;return (new clustermap.components.page_title.t38774(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.map__38769,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__38770,self__.p__38758,self__.url,meta38775__$1));
});})(map__38770,map__38770__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38769,map__38769__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t38774 = ((function (map__38770,map__38770__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38769,map__38769__$1,selection,value,type){
return (function __GT_t38774(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__38769__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__38770__$2,p__38758__$1,url__$1,meta38775){return (new clustermap.components.page_title.t38774(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__38769__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__38770__$2,p__38758__$1,url__$1,meta38775));
});})(map__38770,map__38770__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38769,map__38769__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t38774(selection,owner,path_fn__$1,type_descr,map__38769__$1,value,name,comm,page_title_component,type,view_path_fn,map__38770__$1,p__38758,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$1028),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$959,shared,cljs.core.constant$keyword$962,document.getElementById(elem_id)], null));
});
