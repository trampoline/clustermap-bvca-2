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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__46272 = cljs.core._EQ_;var expr__46273 = type;if(cljs.core.truth_(pred__46272.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__46273)))
{return "Investor-backed company";
} else
{if(cljs.core.truth_(pred__46272.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__46273)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__46272.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__46273)))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__46273))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__46275,owner){var map__46286 = p__46275;var map__46286__$1 = ((cljs.core.seq_QMARK_.call(null,map__46286))?cljs.core.apply.call(null,cljs.core.hash_map,map__46286):map__46286);var selection = map__46286__$1;var value = cljs.core.get.call(null,map__46286__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__46286__$1,new cljs.core.Keyword(null,"type","type",1017479852));var map__46287 = om.core.get_shared.call(null,owner);var map__46287__$1 = ((cljs.core.seq_QMARK_.call(null,map__46287))?cljs.core.apply.call(null,cljs.core.hash_map,map__46287):map__46287);var path_fn = cljs.core.get.call(null,map__46287__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__46287__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",1116886791));var type_descr = (function (){var G__46288 = selection;var G__46288__$1 = (((G__46288 == null))?null:new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__46288));var G__46288__$2 = (((G__46288__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__46288__$1));return G__46288__$2;
})();var name = (function (){var G__46289 = selection;var G__46289__$1 = (((G__46289 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__46289));var G__46289__$2 = (((G__46289__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__46289__$1));return G__46289__$2;
})();var url = (function (){var G__46290 = selection;var G__46290__$1 = (((G__46290 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__46290));var G__46290__$2 = (((G__46290__$1 == null))?null:new cljs.core.Keyword(null,"web_url","web_url",2237655414).cljs$core$IFn$_invoke$arity$1(G__46290__$1));return G__46290__$2;
})();if(typeof clustermap.components.page_title.t46291 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t46291 = (function (selection,owner,path_fn,type_descr,map__46286,value,name,comm,page_title_component,type,p__46275,map__46287,url,meta46292){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__46286 = map__46286;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.p__46275 = p__46275;
this.map__46287 = map__46287;
this.url = url;
this.meta46292 = meta46292;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t46291.cljs$lang$type = true;
clustermap.components.page_title.t46291.cljs$lang$ctorStr = "clustermap.components.page-title/t46291";
clustermap.components.page_title.t46291.cljs$lang$ctorPrWriter = ((function (map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.page-title/t46291");
});})(map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type))
;
clustermap.components.page_title.t46291.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t46291.prototype.om$core$IRender$render$arity$1 = ((function (map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": ((function (this__9410__auto____$1,map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"map"], null));
});})(this__9410__auto____$1,map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type))
},"View on map"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn):null)),(function (){var attrs46294 = (function (){var or__3539__auto__ = self__.type_descr;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs46294))?sablono.interpreter.attributes.call(null,attrs46294):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46294))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46294)], null))));
})(),(function (){var attrs46295 = (function (){var or__3539__auto__ = self__.name;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs46295))?sablono.interpreter.attributes.call(null,attrs46295):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs46295))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs46295),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret.call(null,self__.url)):null));
});})(map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type))
;
clustermap.components.page_title.t46291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type){
return (function (_46293){var self__ = this;
var _46293__$1 = this;return self__.meta46292;
});})(map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type))
;
clustermap.components.page_title.t46291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type){
return (function (_46293,meta46292__$1){var self__ = this;
var _46293__$1 = this;return (new clustermap.components.page_title.t46291(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.map__46286,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.p__46275,self__.map__46287,self__.url,meta46292__$1));
});})(map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t46291 = ((function (map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type){
return (function __GT_t46291(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__46286__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,p__46275__$1,map__46287__$2,url__$1,meta46292){return (new clustermap.components.page_title.t46291(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__46286__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,p__46275__$1,map__46287__$2,url__$1,meta46292));
});})(map__46287,map__46287__$1,path_fn,comm,path_fn__$1,type_descr,name,url,map__46286,map__46286__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t46291(selection,owner,path_fn__$1,type_descr,map__46286__$1,value,name,comm,page_title_component,type,p__46275,map__46287__$1,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",3592905982)),app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
