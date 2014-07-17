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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__37531 = cljs.core._EQ_;var expr__37532 = type;if(cljs.core.truth_((pred__37531.cljs$core$IFn$_invoke$arity$2 ? pred__37531.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$886,expr__37532) : pred__37531.call(null,cljs.core.constant$keyword$886,expr__37532))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__37531.cljs$core$IFn$_invoke$arity$2 ? pred__37531.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$887,expr__37532) : pred__37531.call(null,cljs.core.constant$keyword$887,expr__37532))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__37531.cljs$core$IFn$_invoke$arity$2 ? pred__37531.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$889,expr__37532) : pred__37531.call(null,cljs.core.constant$keyword$889,expr__37532))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__37532))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__37534,owner){var map__37545 = p__37534;var map__37545__$1 = ((cljs.core.seq_QMARK_(map__37545))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37545):map__37545);var selection = map__37545__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545__$1,cljs.core.constant$keyword$832);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545__$1,cljs.core.constant$keyword$801);var map__37546 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__37546__$1 = ((cljs.core.seq_QMARK_(map__37546))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37546):map__37546);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546__$1,cljs.core.constant$keyword$985);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546__$1,cljs.core.constant$keyword$884);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37546__$1,cljs.core.constant$keyword$894);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$970);var type_descr = (function (){var G__37547 = selection;var G__37547__$1 = (((G__37547 == null))?null:cljs.core.constant$keyword$801.cljs$core$IFn$_invoke$arity$1(G__37547));var G__37547__$2 = (((G__37547__$1 == null))?null:clustermap.components.page_title.describe_type(G__37547__$1));return G__37547__$2;
})();var name = (function (){var G__37548 = selection;var G__37548__$1 = (((G__37548 == null))?null:cljs.core.constant$keyword$832.cljs$core$IFn$_invoke$arity$1(G__37548));var G__37548__$2 = (((G__37548__$1 == null))?null:cljs.core.constant$keyword$831.cljs$core$IFn$_invoke$arity$1(G__37548__$1));return G__37548__$2;
})();var url = (function (){var G__37549 = selection;var G__37549__$1 = (((G__37549 == null))?null:cljs.core.constant$keyword$832.cljs$core$IFn$_invoke$arity$1(G__37549));var G__37549__$2 = (((G__37549__$1 == null))?null:cljs.core.constant$keyword$1053.cljs$core$IFn$_invoke$arity$1(G__37549__$1));return G__37549__$2;
})();if(typeof clustermap.components.page_title.t37550 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t37550 = (function (selection,map__37545,map__37546,owner,path_fn,type_descr,value,name,comm,page_title_component,type,view_path_fn,url,p__37534,meta37551){
this.selection = selection;
this.map__37545 = map__37545;
this.map__37546 = map__37546;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.url = url;
this.p__37534 = p__37534;
this.meta37551 = meta37551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t37550.cljs$lang$type = true;
clustermap.components.page_title.t37550.cljs$lang$ctorStr = "clustermap.components.page-title/t37550";
clustermap.components.page_title.t37550.cljs$lang$ctorPrWriter = ((function (map__37546,map__37546__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37545,map__37545__$1,selection,value,type){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.page-title/t37550");
});})(map__37546,map__37546__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37545,map__37545__$1,selection,value,type))
;
clustermap.components.page_title.t37550.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t37550.prototype.om$core$IRender$render$arity$1 = ((function (map__37546,map__37546__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37545,map__37545__$1,selection,value,type){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$986) : self__.view_path_fn.call(null,cljs.core.constant$keyword$986))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs37553 = (function (){var or__3543__auto__ = self__.type_descr;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs37553))?sablono.interpreter.attributes(attrs37553):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37553))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37553)], null))));
})(),(function (){var attrs37554 = (function (){var or__3543__auto__ = self__.name;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs37554))?sablono.interpreter.attributes(attrs37554):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37554))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$889))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1054,"\u00A0(",cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37554),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$889))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1054,"\u00A0(",cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$984.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__37546,map__37546__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37545,map__37545__$1,selection,value,type))
;
clustermap.components.page_title.t37550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37546,map__37546__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37545,map__37545__$1,selection,value,type){
return (function (_37552){var self__ = this;
var _37552__$1 = this;return self__.meta37551;
});})(map__37546,map__37546__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37545,map__37545__$1,selection,value,type))
;
clustermap.components.page_title.t37550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37546,map__37546__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37545,map__37545__$1,selection,value,type){
return (function (_37552,meta37551__$1){var self__ = this;
var _37552__$1 = this;return (new clustermap.components.page_title.t37550(self__.selection,self__.map__37545,self__.map__37546,self__.owner,self__.path_fn,self__.type_descr,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.url,self__.p__37534,meta37551__$1));
});})(map__37546,map__37546__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37545,map__37545__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t37550 = ((function (map__37546,map__37546__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37545,map__37545__$1,selection,value,type){
return (function __GT_t37550(selection__$1,map__37545__$2,map__37546__$2,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,p__37534__$1,meta37551){return (new clustermap.components.page_title.t37550(selection__$1,map__37545__$2,map__37546__$2,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,p__37534__$1,meta37551));
});})(map__37546,map__37546__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__37545,map__37545__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t37550(selection,map__37545__$1,map__37546__$1,owner,path_fn__$1,type_descr,value,name,comm,page_title_component,type,view_path_fn,url,p__37534,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$948),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$879,shared,cljs.core.constant$keyword$882,document.getElementById(elem_id)], null));
});
