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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__35891 = cljs.core._EQ_;var expr__35892 = type;if(cljs.core.truth_((pred__35891.cljs$core$IFn$_invoke$arity$2 ? pred__35891.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$859,expr__35892) : pred__35891.call(null,cljs.core.constant$keyword$859,expr__35892))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__35891.cljs$core$IFn$_invoke$arity$2 ? pred__35891.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$860,expr__35892) : pred__35891.call(null,cljs.core.constant$keyword$860,expr__35892))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__35891.cljs$core$IFn$_invoke$arity$2 ? pred__35891.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$862,expr__35892) : pred__35891.call(null,cljs.core.constant$keyword$862,expr__35892))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35892))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__35894,owner){var map__35905 = p__35894;var map__35905__$1 = ((cljs.core.seq_QMARK_(map__35905))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35905):map__35905);var selection = map__35905__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,cljs.core.constant$keyword$804);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35905__$1,cljs.core.constant$keyword$772);var map__35906 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35906__$1 = ((cljs.core.seq_QMARK_(map__35906))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35906):map__35906);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,cljs.core.constant$keyword$958);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,cljs.core.constant$keyword$857);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35906__$1,cljs.core.constant$keyword$867);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$943);var type_descr = (function (){var G__35907 = selection;var G__35907__$1 = (((G__35907 == null))?null:cljs.core.constant$keyword$772.cljs$core$IFn$_invoke$arity$1(G__35907));var G__35907__$2 = (((G__35907__$1 == null))?null:clustermap.components.page_title.describe_type(G__35907__$1));return G__35907__$2;
})();var name = (function (){var G__35908 = selection;var G__35908__$1 = (((G__35908 == null))?null:cljs.core.constant$keyword$804.cljs$core$IFn$_invoke$arity$1(G__35908));var G__35908__$2 = (((G__35908__$1 == null))?null:cljs.core.constant$keyword$803.cljs$core$IFn$_invoke$arity$1(G__35908__$1));return G__35908__$2;
})();var url = (function (){var G__35909 = selection;var G__35909__$1 = (((G__35909 == null))?null:cljs.core.constant$keyword$804.cljs$core$IFn$_invoke$arity$1(G__35909));var G__35909__$2 = (((G__35909__$1 == null))?null:cljs.core.constant$keyword$1016.cljs$core$IFn$_invoke$arity$1(G__35909__$1));return G__35909__$2;
})();if(typeof clustermap.components.page_title.t35910 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t35910 = (function (selection,owner,path_fn,type_descr,map__35906,p__35894,value,name,comm,page_title_component,type,view_path_fn,map__35905,url,meta35911){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__35906 = map__35906;
this.p__35894 = p__35894;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__35905 = map__35905;
this.url = url;
this.meta35911 = meta35911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t35910.cljs$lang$type = true;
clustermap.components.page_title.t35910.cljs$lang$ctorStr = "clustermap.components.page-title/t35910";
clustermap.components.page_title.t35910.cljs$lang$ctorPrWriter = ((function (map__35906,map__35906__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35905,map__35905__$1,selection,value,type){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.page-title/t35910");
});})(map__35906,map__35906__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35905,map__35905__$1,selection,value,type))
;
clustermap.components.page_title.t35910.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t35910.prototype.om$core$IRender$render$arity$1 = ((function (map__35906,map__35906__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35905,map__35905__$1,selection,value,type){
return (function (this__9438__auto__){var self__ = this;
var this__9438__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$959) : self__.view_path_fn.call(null,cljs.core.constant$keyword$959))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs35913 = (function (){var or__3543__auto__ = self__.type_descr;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs35913))?sablono.interpreter.attributes(attrs35913):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35913))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35913)], null))));
})(),(function (){var attrs35914 = (function (){var or__3543__auto__ = self__.name;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35914))?sablono.interpreter.attributes(attrs35914):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35914))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$862))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1017,"\u00A0(",cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$957.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35914),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$862))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1017,"\u00A0(",cljs.core.constant$keyword$956.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$957.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__35906,map__35906__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35905,map__35905__$1,selection,value,type))
;
clustermap.components.page_title.t35910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35906,map__35906__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35905,map__35905__$1,selection,value,type){
return (function (_35912){var self__ = this;
var _35912__$1 = this;return self__.meta35911;
});})(map__35906,map__35906__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35905,map__35905__$1,selection,value,type))
;
clustermap.components.page_title.t35910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35906,map__35906__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35905,map__35905__$1,selection,value,type){
return (function (_35912,meta35911__$1){var self__ = this;
var _35912__$1 = this;return (new clustermap.components.page_title.t35910(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.map__35906,self__.p__35894,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__35905,self__.url,meta35911__$1));
});})(map__35906,map__35906__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35905,map__35905__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t35910 = ((function (map__35906,map__35906__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35905,map__35905__$1,selection,value,type){
return (function __GT_t35910(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__35906__$2,p__35894__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__35905__$2,url__$1,meta35911){return (new clustermap.components.page_title.t35910(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__35906__$2,p__35894__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__35905__$2,url__$1,meta35911));
});})(map__35906,map__35906__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__35905,map__35905__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t35910(selection,owner,path_fn__$1,type_descr,map__35906__$1,p__35894,value,name,comm,page_title_component,type,view_path_fn,map__35905__$1,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$921),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$852,shared,cljs.core.constant$keyword$855,document.getElementById(elem_id)], null));
});
