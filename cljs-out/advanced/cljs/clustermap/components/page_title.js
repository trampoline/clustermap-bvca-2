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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__38683 = cljs.core._EQ_;var expr__38684 = type;if(cljs.core.truth_((pred__38683.cljs$core$IFn$_invoke$arity$2 ? pred__38683.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$957,expr__38684) : pred__38683.call(null,cljs.core.constant$keyword$957,expr__38684))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__38683.cljs$core$IFn$_invoke$arity$2 ? pred__38683.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$958,expr__38684) : pred__38683.call(null,cljs.core.constant$keyword$958,expr__38684))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__38683.cljs$core$IFn$_invoke$arity$2 ? pred__38683.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$960,expr__38684) : pred__38683.call(null,cljs.core.constant$keyword$960,expr__38684))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__38684))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__38686,owner){var map__38697 = p__38686;var map__38697__$1 = ((cljs.core.seq_QMARK_(map__38697))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38697):map__38697);var selection = map__38697__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38697__$1,cljs.core.constant$keyword$904);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38697__$1,cljs.core.constant$keyword$871);var map__38698 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38698__$1 = ((cljs.core.seq_QMARK_(map__38698))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38698):map__38698);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38698__$1,cljs.core.constant$keyword$1060);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38698__$1,cljs.core.constant$keyword$955);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38698__$1,cljs.core.constant$keyword$965);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1041);var type_descr = (function (){var G__38699 = selection;var G__38699__$1 = (((G__38699 == null))?null:cljs.core.constant$keyword$871.cljs$core$IFn$_invoke$arity$1(G__38699));var G__38699__$2 = (((G__38699__$1 == null))?null:clustermap.components.page_title.describe_type(G__38699__$1));return G__38699__$2;
})();var name = (function (){var G__38700 = selection;var G__38700__$1 = (((G__38700 == null))?null:cljs.core.constant$keyword$904.cljs$core$IFn$_invoke$arity$1(G__38700));var G__38700__$2 = (((G__38700__$1 == null))?null:cljs.core.constant$keyword$903.cljs$core$IFn$_invoke$arity$1(G__38700__$1));return G__38700__$2;
})();var url = (function (){var G__38701 = selection;var G__38701__$1 = (((G__38701 == null))?null:cljs.core.constant$keyword$904.cljs$core$IFn$_invoke$arity$1(G__38701));var G__38701__$2 = (((G__38701__$1 == null))?null:cljs.core.constant$keyword$1128.cljs$core$IFn$_invoke$arity$1(G__38701__$1));return G__38701__$2;
})();if(typeof clustermap.components.page_title.t38702 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t38702 = (function (selection,owner,path_fn,map__38698,type_descr,value,name,comm,p__38686,page_title_component,type,view_path_fn,map__38697,url,meta38703){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.map__38698 = map__38698;
this.type_descr = type_descr;
this.value = value;
this.name = name;
this.comm = comm;
this.p__38686 = p__38686;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__38697 = map__38697;
this.url = url;
this.meta38703 = meta38703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t38702.cljs$lang$type = true;
clustermap.components.page_title.t38702.cljs$lang$ctorStr = "clustermap.components.page-title/t38702";
clustermap.components.page_title.t38702.cljs$lang$ctorPrWriter = ((function (map__38698,map__38698__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38697,map__38697__$1,selection,value,type){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.page-title/t38702");
});})(map__38698,map__38698__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38697,map__38697__$1,selection,value,type))
;
clustermap.components.page_title.t38702.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t38702.prototype.om$core$IRender$render$arity$1 = ((function (map__38698,map__38698__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38697,map__38697__$1,selection,value,type){
return (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1129) : self__.view_path_fn.call(null,cljs.core.constant$keyword$1129))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs38705 = (function (){var or__3558__auto__ = self__.type_descr;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs38705))?sablono.interpreter.attributes(attrs38705):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38705))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38705)], null))));
})(),(function (){var attrs38706 = (function (){var or__3558__auto__ = self__.name;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs38706))?sablono.interpreter.attributes(attrs38706):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38706))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$960))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1130,"\u00A0(",cljs.core.constant$keyword$1131.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1132.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38706),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$960))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1130,"\u00A0(",cljs.core.constant$keyword$1131.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1132.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__38698,map__38698__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38697,map__38697__$1,selection,value,type))
;
clustermap.components.page_title.t38702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38698,map__38698__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38697,map__38697__$1,selection,value,type){
return (function (_38704){var self__ = this;
var _38704__$1 = this;return self__.meta38703;
});})(map__38698,map__38698__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38697,map__38697__$1,selection,value,type))
;
clustermap.components.page_title.t38702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38698,map__38698__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38697,map__38697__$1,selection,value,type){
return (function (_38704,meta38703__$1){var self__ = this;
var _38704__$1 = this;return (new clustermap.components.page_title.t38702(self__.selection,self__.owner,self__.path_fn,self__.map__38698,self__.type_descr,self__.value,self__.name,self__.comm,self__.p__38686,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__38697,self__.url,meta38703__$1));
});})(map__38698,map__38698__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38697,map__38697__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t38702 = ((function (map__38698,map__38698__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38697,map__38697__$1,selection,value,type){
return (function __GT_t38702(selection__$1,owner__$1,path_fn__$2,map__38698__$2,type_descr__$1,value__$1,name__$1,comm__$1,p__38686__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__38697__$2,url__$1,meta38703){return (new clustermap.components.page_title.t38702(selection__$1,owner__$1,path_fn__$2,map__38698__$2,type_descr__$1,value__$1,name__$1,comm__$1,p__38686__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__38697__$2,url__$1,meta38703));
});})(map__38698,map__38698__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__38697,map__38697__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t38702(selection,owner,path_fn__$1,map__38698__$1,type_descr,value,name,comm,p__38686,page_title_component,type,view_path_fn,map__38697__$1,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$1019),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$950,shared,cljs.core.constant$keyword$953,document.getElementById(elem_id)], null));
});
