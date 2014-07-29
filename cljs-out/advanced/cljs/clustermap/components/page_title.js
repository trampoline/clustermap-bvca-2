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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__38292 = cljs.core._EQ_;var expr__38293 = type;if(cljs.core.truth_((pred__38292.cljs$core$IFn$_invoke$arity$2 ? pred__38292.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$895,expr__38293) : pred__38292.call(null,cljs.core.constant$keyword$895,expr__38293))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__38292.cljs$core$IFn$_invoke$arity$2 ? pred__38292.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$896,expr__38293) : pred__38292.call(null,cljs.core.constant$keyword$896,expr__38293))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__38292.cljs$core$IFn$_invoke$arity$2 ? pred__38292.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$898,expr__38293) : pred__38292.call(null,cljs.core.constant$keyword$898,expr__38293))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38293))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__38295,owner){var map__38306 = p__38295;var map__38306__$1 = ((cljs.core.seq_QMARK_(map__38306))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38306):map__38306);var selection = map__38306__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38306__$1,cljs.core.constant$keyword$841);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38306__$1,cljs.core.constant$keyword$810);var map__38307 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38307__$1 = ((cljs.core.seq_QMARK_(map__38307))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38307):map__38307);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38307__$1,cljs.core.constant$keyword$994);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38307__$1,cljs.core.constant$keyword$893);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38307__$1,cljs.core.constant$keyword$903);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$979);var type_descr = (function (){var G__38308 = selection;var G__38308__$1 = (((G__38308 == null))?null:cljs.core.constant$keyword$810.cljs$core$IFn$_invoke$arity$1(G__38308));var G__38308__$2 = (((G__38308__$1 == null))?null:clustermap.components.page_title.describe_type(G__38308__$1));return G__38308__$2;
})();var name = (function (){var G__38309 = selection;var G__38309__$1 = (((G__38309 == null))?null:cljs.core.constant$keyword$841.cljs$core$IFn$_invoke$arity$1(G__38309));var G__38309__$2 = (((G__38309__$1 == null))?null:cljs.core.constant$keyword$840.cljs$core$IFn$_invoke$arity$1(G__38309__$1));return G__38309__$2;
})();var url = (function (){var G__38310 = selection;var G__38310__$1 = (((G__38310 == null))?null:cljs.core.constant$keyword$841.cljs$core$IFn$_invoke$arity$1(G__38310));var G__38310__$2 = (((G__38310__$1 == null))?null:cljs.core.constant$keyword$1062.cljs$core$IFn$_invoke$arity$1(G__38310__$1));return G__38310__$2;
})();if(typeof clustermap.components.page_title.t38311 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t38311 = (function (selection,owner,path_fn,type_descr,map__38307,value,name,comm,page_title_component,type,map__38306,view_path_fn,url,p__38295,meta38312){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__38307 = map__38307;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.map__38306 = map__38306;
this.view_path_fn = view_path_fn;
this.url = url;
this.p__38295 = p__38295;
this.meta38312 = meta38312;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t38311.cljs$lang$type = true;
clustermap.components.page_title.t38311.cljs$lang$ctorStr = "clustermap.components.page-title/t38311";
clustermap.components.page_title.t38311.cljs$lang$ctorPrWriter = ((function (map__38307,map__38307__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38306,map__38306__$1,selection,value,type){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.page-title/t38311");
});})(map__38307,map__38307__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38306,map__38306__$1,selection,value,type))
;
clustermap.components.page_title.t38311.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t38311.prototype.om$core$IRender$render$arity$1 = ((function (map__38307,map__38307__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38306,map__38306__$1,selection,value,type){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$995) : self__.view_path_fn.call(null,cljs.core.constant$keyword$995))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs38314 = (function (){var or__3543__auto__ = self__.type_descr;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs38314))?sablono.interpreter.attributes(attrs38314):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38314))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38314)], null))));
})(),(function (){var attrs38315 = (function (){var or__3543__auto__ = self__.name;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38315))?sablono.interpreter.attributes(attrs38315):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38315))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$898))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,"\u00A0(",cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38315),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$898))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,"\u00A0(",cljs.core.constant$keyword$992.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$993.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__38307,map__38307__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38306,map__38306__$1,selection,value,type))
;
clustermap.components.page_title.t38311.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38307,map__38307__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38306,map__38306__$1,selection,value,type){
return (function (_38313){var self__ = this;
var _38313__$1 = this;return self__.meta38312;
});})(map__38307,map__38307__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38306,map__38306__$1,selection,value,type))
;
clustermap.components.page_title.t38311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38307,map__38307__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38306,map__38306__$1,selection,value,type){
return (function (_38313,meta38312__$1){var self__ = this;
var _38313__$1 = this;return (new clustermap.components.page_title.t38311(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.map__38307,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.map__38306,self__.view_path_fn,self__.url,self__.p__38295,meta38312__$1));
});})(map__38307,map__38307__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38306,map__38306__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t38311 = ((function (map__38307,map__38307__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38306,map__38306__$1,selection,value,type){
return (function __GT_t38311(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__38307__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,map__38306__$2,view_path_fn__$1,url__$1,p__38295__$1,meta38312){return (new clustermap.components.page_title.t38311(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__38307__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,map__38306__$2,view_path_fn__$1,url__$1,p__38295__$1,meta38312));
});})(map__38307,map__38307__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38306,map__38306__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t38311(selection,owner,path_fn__$1,type_descr,map__38307__$1,value,name,comm,page_title_component,type,map__38306__$1,view_path_fn,url,p__38295,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$957),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$888,shared,cljs.core.constant$keyword$891,document.getElementById(elem_id)], null));
});
