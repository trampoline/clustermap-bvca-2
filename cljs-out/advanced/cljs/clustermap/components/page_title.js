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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__35138 = cljs.core._EQ_;var expr__35139 = type;if(cljs.core.truth_((pred__35138.cljs$core$IFn$_invoke$arity$2 ? pred__35138.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$698,expr__35139) : pred__35138.call(null,cljs.core.constant$keyword$698,expr__35139))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__35138.cljs$core$IFn$_invoke$arity$2 ? pred__35138.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$699,expr__35139) : pred__35138.call(null,cljs.core.constant$keyword$699,expr__35139))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__35138.cljs$core$IFn$_invoke$arity$2 ? pred__35138.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$701,expr__35139) : pred__35138.call(null,cljs.core.constant$keyword$701,expr__35139))))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__35139))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__35141,owner){var map__35152 = p__35141;var map__35152__$1 = ((cljs.core.seq_QMARK_(map__35152))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35152):map__35152);var selection = map__35152__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35152__$1,cljs.core.constant$keyword$583);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35152__$1,cljs.core.constant$keyword$612);var map__35153 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35153__$1 = ((cljs.core.seq_QMARK_(map__35153))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35153):map__35153);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,cljs.core.constant$keyword$696);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35153__$1,cljs.core.constant$keyword$707);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,cljs.core.constant$keyword$783);var type_descr = (function (){var G__35154 = selection;var G__35154__$1 = (((G__35154 == null))?null:cljs.core.constant$keyword$612.cljs$core$IFn$_invoke$arity$1(G__35154));var G__35154__$2 = (((G__35154__$1 == null))?null:clustermap.components.page_title.describe_type(G__35154__$1));return G__35154__$2;
})();var name = (function (){var G__35155 = selection;var G__35155__$1 = (((G__35155 == null))?null:cljs.core.constant$keyword$583.cljs$core$IFn$_invoke$arity$1(G__35155));var G__35155__$2 = (((G__35155__$1 == null))?null:cljs.core.constant$keyword$643.cljs$core$IFn$_invoke$arity$1(G__35155__$1));return G__35155__$2;
})();var url = (function (){var G__35156 = selection;var G__35156__$1 = (((G__35156 == null))?null:cljs.core.constant$keyword$583.cljs$core$IFn$_invoke$arity$1(G__35156));var G__35156__$2 = (((G__35156__$1 == null))?null:cljs.core.constant$keyword$809.cljs$core$IFn$_invoke$arity$1(G__35156__$1));return G__35156__$2;
})();if(typeof clustermap.components.page_title.t35157 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t35157 = (function (selection,p__35141,owner,path_fn,type_descr,value,name,comm,page_title_component,type,url,map__35152,map__35153,meta35158){
this.selection = selection;
this.p__35141 = p__35141;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.url = url;
this.map__35152 = map__35152;
this.map__35153 = map__35153;
this.meta35158 = meta35158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t35157.cljs$lang$type = true;
clustermap.components.page_title.t35157.cljs$lang$ctorStr = "clustermap.components.page-title/t35157";
clustermap.components.page_title.t35157.cljs$lang$ctorPrWriter = ((function (map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.page-title/t35157");
});})(map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type))
;
clustermap.components.page_title.t35157.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t35157.prototype.om$core$IRender$render$arity$1 = ((function (map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": ((function (this__9410__auto____$1,map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$793,"map"], null));
});})(this__9410__auto____$1,map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type))
},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs35160 = (function (){var or__3539__auto__ = self__.type_descr;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h2,((cljs.core.map_QMARK_(attrs35160))?sablono.interpreter.attributes(attrs35160):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35160))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35160)], null))));
})(),(function (){var attrs35161 = (function (){var or__3539__auto__ = self__.name;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.h3,((cljs.core.map_QMARK_(attrs35161))?sablono.interpreter.attributes(attrs35161):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs35161))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$701))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$810,"\u00A0(",cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs35161),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$701))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$810,"\u00A0(",cljs.core.constant$keyword$797.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$798.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});})(map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type))
;
clustermap.components.page_title.t35157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type){
return (function (_35159){var self__ = this;
var _35159__$1 = this;return self__.meta35158;
});})(map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type))
;
clustermap.components.page_title.t35157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type){
return (function (_35159,meta35158__$1){var self__ = this;
var _35159__$1 = this;return (new clustermap.components.page_title.t35157(self__.selection,self__.p__35141,self__.owner,self__.path_fn,self__.type_descr,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.url,self__.map__35152,self__.map__35153,meta35158__$1));
});})(map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t35157 = ((function (map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type){
return (function __GT_t35157(selection__$1,p__35141__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,url__$1,map__35152__$2,map__35153__$2,meta35158){return (new clustermap.components.page_title.t35157(selection__$1,p__35141__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,url__$1,map__35152__$2,map__35153__$2,meta35158));
});})(map__35153,map__35153__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__35152,map__35152__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t35157(selection,p__35141,owner,path_fn__$1,type_descr,value,name,comm,page_title_component,type,url,map__35152__$1,map__35153__$1,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$761),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$691,shared,cljs.core.constant$keyword$694,document.getElementById(elem_id)], null));
});
