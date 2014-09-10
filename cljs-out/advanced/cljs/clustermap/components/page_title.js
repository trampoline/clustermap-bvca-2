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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__38611 = cljs.core._EQ_;var expr__38612 = type;if(cljs.core.truth_((pred__38611.cljs$core$IFn$_invoke$arity$2 ? pred__38611.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$907,expr__38612) : pred__38611.call(null,cljs.core.constant$keyword$907,expr__38612))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__38611.cljs$core$IFn$_invoke$arity$2 ? pred__38611.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$908,expr__38612) : pred__38611.call(null,cljs.core.constant$keyword$908,expr__38612))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__38611.cljs$core$IFn$_invoke$arity$2 ? pred__38611.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$910,expr__38612) : pred__38611.call(null,cljs.core.constant$keyword$910,expr__38612))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38612))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__38614,owner){var map__38625 = p__38614;var map__38625__$1 = ((cljs.core.seq_QMARK_(map__38625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38625):map__38625);var selection = map__38625__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38625__$1,cljs.core.constant$keyword$853);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38625__$1,cljs.core.constant$keyword$822);var map__38626 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38626__$1 = ((cljs.core.seq_QMARK_(map__38626))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38626):map__38626);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38626__$1,cljs.core.constant$keyword$1006);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38626__$1,cljs.core.constant$keyword$905);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38626__$1,cljs.core.constant$keyword$915);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$991);var type_descr = (function (){var G__38627 = selection;var G__38627__$1 = (((G__38627 == null))?null:cljs.core.constant$keyword$822.cljs$core$IFn$_invoke$arity$1(G__38627));var G__38627__$2 = (((G__38627__$1 == null))?null:clustermap.components.page_title.describe_type(G__38627__$1));return G__38627__$2;
})();var name = (function (){var G__38628 = selection;var G__38628__$1 = (((G__38628 == null))?null:cljs.core.constant$keyword$853.cljs$core$IFn$_invoke$arity$1(G__38628));var G__38628__$2 = (((G__38628__$1 == null))?null:cljs.core.constant$keyword$852.cljs$core$IFn$_invoke$arity$1(G__38628__$1));return G__38628__$2;
})();var url = (function (){var G__38629 = selection;var G__38629__$1 = (((G__38629 == null))?null:cljs.core.constant$keyword$853.cljs$core$IFn$_invoke$arity$1(G__38629));var G__38629__$2 = (((G__38629__$1 == null))?null:cljs.core.constant$keyword$1074.cljs$core$IFn$_invoke$arity$1(G__38629__$1));return G__38629__$2;
})();if(typeof clustermap.components.page_title.t38630 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t38630 = (function (selection,owner,path_fn,map__38625,type_descr,map__38626,value,name,comm,page_title_component,type,p__38614,view_path_fn,url,meta38631){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.map__38625 = map__38625;
this.type_descr = type_descr;
this.map__38626 = map__38626;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.p__38614 = p__38614;
this.view_path_fn = view_path_fn;
this.url = url;
this.meta38631 = meta38631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t38630.cljs$lang$type = true;
clustermap.components.page_title.t38630.cljs$lang$ctorStr = "clustermap.components.page-title/t38630";
clustermap.components.page_title.t38630.cljs$lang$ctorPrWriter = ((function (map__38626,map__38626__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38625,map__38625__$1,selection,value,type){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.page-title/t38630");
});})(map__38626,map__38626__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38625,map__38625__$1,selection,value,type))
;
clustermap.components.page_title.t38630.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t38630.prototype.om$core$IRender$render$arity$1 = ((function (map__38626,map__38626__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38625,map__38625__$1,selection,value,type){
return (function (this__9492__auto__){var self__ = this;
var this__9492__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1007) : self__.view_path_fn.call(null,cljs.core.constant$keyword$1007))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs38633 = (function (){var or__3541__auto__ = self__.type_descr;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs38633))?sablono.interpreter.attributes(attrs38633):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38633))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38633)], null))));
})(),(function (){var attrs38634 = (function (){var or__3541__auto__ = self__.name;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38634))?sablono.interpreter.attributes(attrs38634):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38634))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$910))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,"\u00A0(",cljs.core.constant$keyword$1004.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1005.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38634),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$910))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1075,"\u00A0(",cljs.core.constant$keyword$1004.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1005.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__38626,map__38626__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38625,map__38625__$1,selection,value,type))
;
clustermap.components.page_title.t38630.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38626,map__38626__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38625,map__38625__$1,selection,value,type){
return (function (_38632){var self__ = this;
var _38632__$1 = this;return self__.meta38631;
});})(map__38626,map__38626__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38625,map__38625__$1,selection,value,type))
;
clustermap.components.page_title.t38630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38626,map__38626__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38625,map__38625__$1,selection,value,type){
return (function (_38632,meta38631__$1){var self__ = this;
var _38632__$1 = this;return (new clustermap.components.page_title.t38630(self__.selection,self__.owner,self__.path_fn,self__.map__38625,self__.type_descr,self__.map__38626,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.p__38614,self__.view_path_fn,self__.url,meta38631__$1));
});})(map__38626,map__38626__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38625,map__38625__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t38630 = ((function (map__38626,map__38626__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38625,map__38625__$1,selection,value,type){
return (function __GT_t38630(selection__$1,owner__$1,path_fn__$2,map__38625__$2,type_descr__$1,map__38626__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,p__38614__$1,view_path_fn__$1,url__$1,meta38631){return (new clustermap.components.page_title.t38630(selection__$1,owner__$1,path_fn__$2,map__38625__$2,type_descr__$1,map__38626__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,p__38614__$1,view_path_fn__$1,url__$1,meta38631));
});})(map__38626,map__38626__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38625,map__38625__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t38630(selection,owner,path_fn__$1,map__38625__$1,type_descr,map__38626__$1,value,name,comm,page_title_component,type,p__38614,view_path_fn,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$969),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$900,shared,cljs.core.constant$keyword$903,document.getElementById(elem_id)], null));
});
