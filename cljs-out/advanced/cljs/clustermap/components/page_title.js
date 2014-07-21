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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__39471 = cljs.core._EQ_;var expr__39472 = type;if(cljs.core.truth_((pred__39471.cljs$core$IFn$_invoke$arity$2 ? pred__39471.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$890,expr__39472) : pred__39471.call(null,cljs.core.constant$keyword$890,expr__39472))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__39471.cljs$core$IFn$_invoke$arity$2 ? pred__39471.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$891,expr__39472) : pred__39471.call(null,cljs.core.constant$keyword$891,expr__39472))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__39471.cljs$core$IFn$_invoke$arity$2 ? pred__39471.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$893,expr__39472) : pred__39471.call(null,cljs.core.constant$keyword$893,expr__39472))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__39472))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__39474,owner){var map__39485 = p__39474;var map__39485__$1 = ((cljs.core.seq_QMARK_(map__39485))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39485):map__39485);var selection = map__39485__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39485__$1,cljs.core.constant$keyword$836);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39485__$1,cljs.core.constant$keyword$805);var map__39486 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__39486__$1 = ((cljs.core.seq_QMARK_(map__39486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39486):map__39486);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39486__$1,cljs.core.constant$keyword$989);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39486__$1,cljs.core.constant$keyword$888);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39486__$1,cljs.core.constant$keyword$898);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$974);var type_descr = (function (){var G__39487 = selection;var G__39487__$1 = (((G__39487 == null))?null:cljs.core.constant$keyword$805.cljs$core$IFn$_invoke$arity$1(G__39487));var G__39487__$2 = (((G__39487__$1 == null))?null:clustermap.components.page_title.describe_type(G__39487__$1));return G__39487__$2;
})();var name = (function (){var G__39488 = selection;var G__39488__$1 = (((G__39488 == null))?null:cljs.core.constant$keyword$836.cljs$core$IFn$_invoke$arity$1(G__39488));var G__39488__$2 = (((G__39488__$1 == null))?null:cljs.core.constant$keyword$835.cljs$core$IFn$_invoke$arity$1(G__39488__$1));return G__39488__$2;
})();var url = (function (){var G__39489 = selection;var G__39489__$1 = (((G__39489 == null))?null:cljs.core.constant$keyword$836.cljs$core$IFn$_invoke$arity$1(G__39489));var G__39489__$2 = (((G__39489__$1 == null))?null:cljs.core.constant$keyword$1057.cljs$core$IFn$_invoke$arity$1(G__39489__$1));return G__39489__$2;
})();if(typeof clustermap.components.page_title.t39490 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t39490 = (function (map__39485,selection,owner,map__39486,path_fn,p__39474,type_descr,value,name,comm,page_title_component,type,view_path_fn,url,meta39491){
this.map__39485 = map__39485;
this.selection = selection;
this.owner = owner;
this.map__39486 = map__39486;
this.path_fn = path_fn;
this.p__39474 = p__39474;
this.type_descr = type_descr;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.url = url;
this.meta39491 = meta39491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t39490.cljs$lang$type = true;
clustermap.components.page_title.t39490.cljs$lang$ctorStr = "clustermap.components.page-title/t39490";
clustermap.components.page_title.t39490.cljs$lang$ctorPrWriter = ((function (map__39486,map__39486__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39485,map__39485__$1,selection,value,type){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.page-title/t39490");
});})(map__39486,map__39486__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39485,map__39485__$1,selection,value,type))
;
clustermap.components.page_title.t39490.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t39490.prototype.om$core$IRender$render$arity$1 = ((function (map__39486,map__39486__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39485,map__39485__$1,selection,value,type){
return (function (this__9486__auto__){var self__ = this;
var this__9486__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$990) : self__.view_path_fn.call(null,cljs.core.constant$keyword$990))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs39493 = (function (){var or__3543__auto__ = self__.type_descr;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs39493))?sablono.interpreter.attributes(attrs39493):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39493))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39493)], null))));
})(),(function (){var attrs39494 = (function (){var or__3543__auto__ = self__.name;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs39494))?sablono.interpreter.attributes(attrs39494):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39494))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$893))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1058,"\u00A0(",cljs.core.constant$keyword$987.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39494),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$893))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1058,"\u00A0(",cljs.core.constant$keyword$987.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$988.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__39486,map__39486__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39485,map__39485__$1,selection,value,type))
;
clustermap.components.page_title.t39490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39486,map__39486__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39485,map__39485__$1,selection,value,type){
return (function (_39492){var self__ = this;
var _39492__$1 = this;return self__.meta39491;
});})(map__39486,map__39486__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39485,map__39485__$1,selection,value,type))
;
clustermap.components.page_title.t39490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39486,map__39486__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39485,map__39485__$1,selection,value,type){
return (function (_39492,meta39491__$1){var self__ = this;
var _39492__$1 = this;return (new clustermap.components.page_title.t39490(self__.map__39485,self__.selection,self__.owner,self__.map__39486,self__.path_fn,self__.p__39474,self__.type_descr,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.url,meta39491__$1));
});})(map__39486,map__39486__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39485,map__39485__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t39490 = ((function (map__39486,map__39486__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39485,map__39485__$1,selection,value,type){
return (function __GT_t39490(map__39485__$2,selection__$1,owner__$1,map__39486__$2,path_fn__$2,p__39474__$1,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta39491){return (new clustermap.components.page_title.t39490(map__39485__$2,selection__$1,owner__$1,map__39486__$2,path_fn__$2,p__39474__$1,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta39491));
});})(map__39486,map__39486__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__39485,map__39485__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t39490(map__39485__$1,selection,owner,map__39486__$1,path_fn__$1,p__39474,type_descr,value,name,comm,page_title_component,type,view_path_fn,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$952),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$883,shared,cljs.core.constant$keyword$886,document.getElementById(elem_id)], null));
});
