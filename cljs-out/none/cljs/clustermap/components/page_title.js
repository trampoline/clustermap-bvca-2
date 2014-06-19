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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__23992 = cljs.core._EQ_;var expr__23993 = type;if(cljs.core.truth_(pred__23992.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23993)))
{return "Investor-backed company";
} else
{if(cljs.core.truth_(pred__23992.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23993)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__23992.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23993)))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__23993))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__23995,owner){var map__24006 = p__23995;var map__24006__$1 = ((cljs.core.seq_QMARK_.call(null,map__24006))?cljs.core.apply.call(null,cljs.core.hash_map,map__24006):map__24006);var selection = map__24006__$1;var value = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__24006__$1,new cljs.core.Keyword(null,"type","type",1017479852));var map__24007 = om.core.get_shared.call(null,owner);var map__24007__$1 = ((cljs.core.seq_QMARK_.call(null,map__24007))?cljs.core.apply.call(null,cljs.core.hash_map,map__24007):map__24007);var view_path_fn = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",978272186));var path_fn = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__24007__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",1116886791));var type_descr = (function (){var G__24008 = selection;var G__24008__$1 = (((G__24008 == null))?null:new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__24008));var G__24008__$2 = (((G__24008__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__24008__$1));return G__24008__$2;
})();var name = (function (){var G__24009 = selection;var G__24009__$1 = (((G__24009 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__24009));var G__24009__$2 = (((G__24009__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__24009__$1));return G__24009__$2;
})();var url = (function (){var G__24010 = selection;var G__24010__$1 = (((G__24010 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__24010));var G__24010__$2 = (((G__24010__$1 == null))?null:new cljs.core.Keyword(null,"web_url","web_url",2237655414).cljs$core$IFn$_invoke$arity$1(G__24010__$1));return G__24010__$2;
})();if(typeof clustermap.components.page_title.t24011 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t24011 = (function (selection,owner,path_fn,type_descr,p__23995,value,name,comm,map__24007,page_title_component,type,view_path_fn,map__24006,url,meta24012){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.p__23995 = p__23995;
this.value = value;
this.name = name;
this.comm = comm;
this.map__24007 = map__24007;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__24006 = map__24006;
this.url = url;
this.meta24012 = meta24012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t24011.cljs$lang$type = true;
clustermap.components.page_title.t24011.cljs$lang$ctorStr = "clustermap.components.page-title/t24011";
clustermap.components.page_title.t24011.cljs$lang$ctorPrWriter = ((function (map__24007,map__24007__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__24006,map__24006__$1,selection,value,type){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.page-title/t24011");
});})(map__24007,map__24007__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__24006,map__24006__$1,selection,value,type))
;
clustermap.components.page_title.t24011.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t24011.prototype.om$core$IRender$render$arity$1 = ((function (map__24007,map__24007__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__24006,map__24006__$1,selection,value,type){
return (function (this__9410__auto__){var self__ = this;
var this__9410__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": self__.view_path_fn.call(null,new cljs.core.Keyword(null,"map","map",1014012110))},"View on map"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn):null)),(function (){var attrs24014 = (function (){var or__3539__auto__ = self__.type_descr;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs24014))?sablono.interpreter.attributes.call(null,attrs24014):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24014))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24014)], null))));
})(),(function (){var attrs24015 = (function (){var or__3539__auto__ = self__.name;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs24015))?sablono.interpreter.attributes.call(null,attrs24015):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24015))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24015),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret.call(null,self__.url)):null));
});})(map__24007,map__24007__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__24006,map__24006__$1,selection,value,type))
;
clustermap.components.page_title.t24011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24007,map__24007__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__24006,map__24006__$1,selection,value,type){
return (function (_24013){var self__ = this;
var _24013__$1 = this;return self__.meta24012;
});})(map__24007,map__24007__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__24006,map__24006__$1,selection,value,type))
;
clustermap.components.page_title.t24011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24007,map__24007__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__24006,map__24006__$1,selection,value,type){
return (function (_24013,meta24012__$1){var self__ = this;
var _24013__$1 = this;return (new clustermap.components.page_title.t24011(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.p__23995,self__.value,self__.name,self__.comm,self__.map__24007,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__24006,self__.url,meta24012__$1));
});})(map__24007,map__24007__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__24006,map__24006__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t24011 = ((function (map__24007,map__24007__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__24006,map__24006__$1,selection,value,type){
return (function __GT_t24011(selection__$1,owner__$1,path_fn__$2,type_descr__$1,p__23995__$1,value__$1,name__$1,comm__$1,map__24007__$2,page_title_component__$1,type__$1,view_path_fn__$1,map__24006__$2,url__$1,meta24012){return (new clustermap.components.page_title.t24011(selection__$1,owner__$1,path_fn__$2,type_descr__$1,p__23995__$1,value__$1,name__$1,comm__$1,map__24007__$2,page_title_component__$1,type__$1,view_path_fn__$1,map__24006__$2,url__$1,meta24012));
});})(map__24007,map__24007__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__24006,map__24006__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t24011(selection,owner,path_fn__$1,type_descr,p__23995,value,name,comm,map__24007__$1,page_title_component,type,view_path_fn,map__24006__$1,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",3592905982)),app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=page_title.js.map