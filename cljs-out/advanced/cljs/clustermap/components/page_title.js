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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__37247 = cljs.core._EQ_;var expr__37248 = type;if(cljs.core.truth_((pred__37247.cljs$core$IFn$_invoke$arity$2 ? pred__37247.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$880,expr__37248) : pred__37247.call(null,cljs.core.constant$keyword$880,expr__37248))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__37247.cljs$core$IFn$_invoke$arity$2 ? pred__37247.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$881,expr__37248) : pred__37247.call(null,cljs.core.constant$keyword$881,expr__37248))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__37247.cljs$core$IFn$_invoke$arity$2 ? pred__37247.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$883,expr__37248) : pred__37247.call(null,cljs.core.constant$keyword$883,expr__37248))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__37248))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__37250,owner){var map__37261 = p__37250;var map__37261__$1 = ((cljs.core.seq_QMARK_(map__37261))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37261):map__37261);var selection = map__37261__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,cljs.core.constant$keyword$826);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37261__$1,cljs.core.constant$keyword$795);var map__37262 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__37262__$1 = ((cljs.core.seq_QMARK_(map__37262))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37262):map__37262);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37262__$1,cljs.core.constant$keyword$979);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37262__$1,cljs.core.constant$keyword$878);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37262__$1,cljs.core.constant$keyword$888);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$964);var type_descr = (function (){var G__37263 = selection;var G__37263__$1 = (((G__37263 == null))?null:cljs.core.constant$keyword$795.cljs$core$IFn$_invoke$arity$1(G__37263));var G__37263__$2 = (((G__37263__$1 == null))?null:clustermap.components.page_title.describe_type(G__37263__$1));return G__37263__$2;
})();var name = (function (){var G__37264 = selection;var G__37264__$1 = (((G__37264 == null))?null:cljs.core.constant$keyword$826.cljs$core$IFn$_invoke$arity$1(G__37264));var G__37264__$2 = (((G__37264__$1 == null))?null:cljs.core.constant$keyword$825.cljs$core$IFn$_invoke$arity$1(G__37264__$1));return G__37264__$2;
})();var url = (function (){var G__37265 = selection;var G__37265__$1 = (((G__37265 == null))?null:cljs.core.constant$keyword$826.cljs$core$IFn$_invoke$arity$1(G__37265));var G__37265__$2 = (((G__37265__$1 == null))?null:cljs.core.constant$keyword$1047.cljs$core$IFn$_invoke$arity$1(G__37265__$1));return G__37265__$2;
})();if(typeof clustermap.components.page_title.t37266 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t37266 = (function (selection,owner,path_fn,type_descr,p__37250,map__37262,value,name,comm,page_title_component,type,map__37261,view_path_fn,url,meta37267){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.p__37250 = p__37250;
this.map__37262 = map__37262;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.map__37261 = map__37261;
this.view_path_fn = view_path_fn;
this.url = url;
this.meta37267 = meta37267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t37266.cljs$lang$type = true;
clustermap.components.page_title.t37266.cljs$lang$ctorStr = "clustermap.components.page-title/t37266";
clustermap.components.page_title.t37266.cljs$lang$ctorPrWriter = ((function (map__37262,map__37262__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37261,map__37261__$1,selection,value,type){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.page-title/t37266");
});})(map__37262,map__37262__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37261,map__37261__$1,selection,value,type))
;
clustermap.components.page_title.t37266.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t37266.prototype.om$core$IRender$render$arity$1 = ((function (map__37262,map__37262__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37261,map__37261__$1,selection,value,type){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$980) : self__.view_path_fn.call(null,cljs.core.constant$keyword$980))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs37269 = (function (){var or__3543__auto__ = self__.type_descr;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs37269))?sablono.interpreter.attributes(attrs37269):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37269))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37269)], null))));
})(),(function (){var attrs37270 = (function (){var or__3543__auto__ = self__.name;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37270))?sablono.interpreter.attributes(attrs37270):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37270))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$883))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,"\u00A0(",cljs.core.constant$keyword$977.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37270),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$883))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1048,"\u00A0(",cljs.core.constant$keyword$977.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$978.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__37262,map__37262__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37261,map__37261__$1,selection,value,type))
;
clustermap.components.page_title.t37266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37262,map__37262__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37261,map__37261__$1,selection,value,type){
return (function (_37268){var self__ = this;
var _37268__$1 = this;return self__.meta37267;
});})(map__37262,map__37262__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37261,map__37261__$1,selection,value,type))
;
clustermap.components.page_title.t37266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37262,map__37262__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37261,map__37261__$1,selection,value,type){
return (function (_37268,meta37267__$1){var self__ = this;
var _37268__$1 = this;return (new clustermap.components.page_title.t37266(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.p__37250,self__.map__37262,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.map__37261,self__.view_path_fn,self__.url,meta37267__$1));
});})(map__37262,map__37262__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37261,map__37261__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t37266 = ((function (map__37262,map__37262__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37261,map__37261__$1,selection,value,type){
return (function __GT_t37266(selection__$1,owner__$1,path_fn__$2,type_descr__$1,p__37250__$1,map__37262__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,map__37261__$2,view_path_fn__$1,url__$1,meta37267){return (new clustermap.components.page_title.t37266(selection__$1,owner__$1,path_fn__$2,type_descr__$1,p__37250__$1,map__37262__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,map__37261__$2,view_path_fn__$1,url__$1,meta37267));
});})(map__37262,map__37262__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37261,map__37261__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t37266(selection,owner,path_fn__$1,type_descr,p__37250,map__37262__$1,value,name,comm,page_title_component,type,map__37261__$1,view_path_fn,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$942),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$873,shared,cljs.core.constant$keyword$876,document.getElementById(elem_id)], null));
});
