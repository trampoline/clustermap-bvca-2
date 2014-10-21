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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__44450 = cljs.core._EQ_;var expr__44451 = type;if(cljs.core.truth_((pred__44450.cljs$core$IFn$_invoke$arity$2 ? pred__44450.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1256,expr__44451) : pred__44450.call(null,cljs.core.constant$keyword$1256,expr__44451))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__44450.cljs$core$IFn$_invoke$arity$2 ? pred__44450.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1257,expr__44451) : pred__44450.call(null,cljs.core.constant$keyword$1257,expr__44451))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__44450.cljs$core$IFn$_invoke$arity$2 ? pred__44450.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1258,expr__44451) : pred__44450.call(null,cljs.core.constant$keyword$1258,expr__44451))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__44451))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__44453,owner){var map__44464 = p__44453;var map__44464__$1 = ((cljs.core.seq_QMARK_(map__44464))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44464):map__44464);var selection = map__44464__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44464__$1,cljs.core.constant$keyword$1245);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44464__$1,cljs.core.constant$keyword$1138);var map__44465 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__44465__$1 = ((cljs.core.seq_QMARK_(map__44465))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44465):map__44465);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44465__$1,cljs.core.constant$keyword$1563);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44465__$1,cljs.core.constant$keyword$1466);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44465__$1,cljs.core.constant$keyword$1282);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$1509);var type_descr = (function (){var G__44466 = selection;var G__44466__$1 = (((G__44466 == null))?null:cljs.core.constant$keyword$1138.cljs$core$IFn$_invoke$arity$1(G__44466));var G__44466__$2 = (((G__44466__$1 == null))?null:clustermap.components.page_title.describe_type(G__44466__$1));return G__44466__$2;
})();var name = (function (){var G__44467 = selection;var G__44467__$1 = (((G__44467 == null))?null:cljs.core.constant$keyword$1245.cljs$core$IFn$_invoke$arity$1(G__44467));var G__44467__$2 = (((G__44467__$1 == null))?null:cljs.core.constant$keyword$1244.cljs$core$IFn$_invoke$arity$1(G__44467__$1));return G__44467__$2;
})();var url = (function (){var G__44468 = selection;var G__44468__$1 = (((G__44468 == null))?null:cljs.core.constant$keyword$1245.cljs$core$IFn$_invoke$arity$1(G__44468));var G__44468__$2 = (((G__44468__$1 == null))?null:cljs.core.constant$keyword$1564.cljs$core$IFn$_invoke$arity$1(G__44468__$1));return G__44468__$2;
})();if(typeof clustermap.components.page_title.t44469 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t44469 = (function (selection,owner,path_fn,type_descr,map__44465,p__44453,value,name,comm,page_title_component,type,view_path_fn,map__44464,url,meta44470){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__44465 = map__44465;
this.p__44453 = p__44453;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__44464 = map__44464;
this.url = url;
this.meta44470 = meta44470;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t44469.cljs$lang$type = true;
clustermap.components.page_title.t44469.cljs$lang$ctorStr = "clustermap.components.page-title/t44469";
clustermap.components.page_title.t44469.cljs$lang$ctorPrWriter = ((function (map__44465,map__44465__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__44464,map__44464__$1,selection,value,type){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.page-title/t44469");
});})(map__44465,map__44465__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__44464,map__44464__$1,selection,value,type))
;
clustermap.components.page_title.t44469.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t44469.prototype.om$core$IRender$render$arity$1 = ((function (map__44465,map__44465__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__44464,map__44464__$1,selection,value,type){
return (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": (self__.view_path_fn.cljs$core$IFn$_invoke$arity$1 ? self__.view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1326) : self__.view_path_fn.call(null,cljs.core.constant$keyword$1326))},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs44472 = (function (){var or__3558__auto__ = self__.type_descr;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs44472))?sablono.interpreter.attributes(attrs44472):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44472))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44472)], null))));
})(),(function (){var attrs44473 = (function (){var or__3558__auto__ = self__.name;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs44473))?sablono.interpreter.attributes(attrs44473):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44473))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1258))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1565,"\u00A0(",cljs.core.constant$keyword$1566.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1567.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44473),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$1258))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1565,"\u00A0(",cljs.core.constant$keyword$1566.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$1567.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__44465,map__44465__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__44464,map__44464__$1,selection,value,type))
;
clustermap.components.page_title.t44469.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44465,map__44465__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__44464,map__44464__$1,selection,value,type){
return (function (_44471){var self__ = this;
var _44471__$1 = this;return self__.meta44470;
});})(map__44465,map__44465__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__44464,map__44464__$1,selection,value,type))
;
clustermap.components.page_title.t44469.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44465,map__44465__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__44464,map__44464__$1,selection,value,type){
return (function (_44471,meta44470__$1){var self__ = this;
var _44471__$1 = this;return (new clustermap.components.page_title.t44469(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.map__44465,self__.p__44453,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__44464,self__.url,meta44470__$1));
});})(map__44465,map__44465__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__44464,map__44464__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t44469 = ((function (map__44465,map__44465__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__44464,map__44464__$1,selection,value,type){
return (function __GT_t44469(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__44465__$2,p__44453__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__44464__$2,url__$1,meta44470){return (new clustermap.components.page_title.t44469(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__44465__$2,p__44453__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__44464__$2,url__$1,meta44470));
});})(map__44465,map__44465__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__44464,map__44464__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t44469(selection,owner,path_fn__$1,type_descr,map__44465__$1,p__44453,value,name,comm,page_title_component,type,view_path_fn,map__44464__$1,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$1486),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1221,shared,cljs.core.constant$keyword$1224,document.getElementById(elem_id)], null));
});
