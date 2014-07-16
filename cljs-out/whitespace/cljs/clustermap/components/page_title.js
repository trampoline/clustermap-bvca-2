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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__13585 = cljs.core._EQ_;var expr__13586 = type;if(cljs.core.truth_(pred__13585.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13586)))
{return "Investor-backed company";
} else
{if(cljs.core.truth_(pred__13585.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13586)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__13585.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13586)))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13586))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__13588,owner){var map__13599 = p__13588;var map__13599__$1 = ((cljs.core.seq_QMARK_.call(null,map__13599))?cljs.core.apply.call(null,cljs.core.hash_map,map__13599):map__13599);var selection = map__13599__$1;var value = cljs.core.get.call(null,map__13599__$1,new cljs.core.Keyword(null,"value","value",305978217));var type = cljs.core.get.call(null,map__13599__$1,new cljs.core.Keyword(null,"type","type",1174270348));var map__13600 = om.core.get_shared.call(null,owner);var map__13600__$1 = ((cljs.core.seq_QMARK_.call(null,map__13600))?cljs.core.apply.call(null,cljs.core.hash_map,map__13600):map__13600);var view_path_fn = cljs.core.get.call(null,map__13600__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13600__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13600__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",-884730684));var type_descr = (function (){var G__13601 = selection;var G__13601__$1 = (((G__13601 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__13601));var G__13601__$2 = (((G__13601__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__13601__$1));return G__13601__$2;
})();var name = (function (){var G__13602 = selection;var G__13602__$1 = (((G__13602 == null))?null:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__13602));var G__13602__$2 = (((G__13602__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__13602__$1));return G__13602__$2;
})();var url = (function (){var G__13603 = selection;var G__13603__$1 = (((G__13603 == null))?null:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__13603));var G__13603__$2 = (((G__13603__$1 == null))?null:new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(G__13603__$1));return G__13603__$2;
})();if(typeof clustermap.components.page_title.t13604 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t13604 = (function (selection,owner,path_fn,type_descr,map__13600,value,name,p__13588,comm,page_title_component,type,view_path_fn,map__13599,url,meta13605){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__13600 = map__13600;
this.value = value;
this.name = name;
this.p__13588 = p__13588;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__13599 = map__13599;
this.url = url;
this.meta13605 = meta13605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t13604.cljs$lang$type = true;
clustermap.components.page_title.t13604.cljs$lang$ctorStr = "clustermap.components.page-title/t13604";
clustermap.components.page_title.t13604.cljs$lang$ctorPrWriter = ((function (map__13600,map__13600__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13599,map__13599__$1,selection,value,type){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.page-title/t13604");
});})(map__13600,map__13600__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13599,map__13599__$1,selection,value,type))
;
clustermap.components.page_title.t13604.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t13604.prototype.om$core$IRender$render$arity$1 = ((function (map__13600,map__13600__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13599,map__13599__$1,selection,value,type){
return (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": self__.view_path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461))},"View on map"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn):null)),(function (){var attrs13607 = (function (){var or__3543__auto__ = self__.type_descr;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs13607))?sablono.interpreter.attributes.call(null,attrs13607):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13607))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13607)], null))));
})(),(function (){var attrs13608 = (function (){var or__3543__auto__ = self__.name;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13608))?sablono.interpreter.attributes.call(null,attrs13608):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13608))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",1803637324)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13608),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",1803637324)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret.call(null,self__.url)):null));
});})(map__13600,map__13600__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13599,map__13599__$1,selection,value,type))
;
clustermap.components.page_title.t13604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13600,map__13600__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13599,map__13599__$1,selection,value,type){
return (function (_13606){var self__ = this;
var _13606__$1 = this;return self__.meta13605;
});})(map__13600,map__13600__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13599,map__13599__$1,selection,value,type))
;
clustermap.components.page_title.t13604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13600,map__13600__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13599,map__13599__$1,selection,value,type){
return (function (_13606,meta13605__$1){var self__ = this;
var _13606__$1 = this;return (new clustermap.components.page_title.t13604(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.map__13600,self__.value,self__.name,self__.p__13588,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__13599,self__.url,meta13605__$1));
});})(map__13600,map__13600__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13599,map__13599__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t13604 = ((function (map__13600,map__13600__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13599,map__13599__$1,selection,value,type){
return (function __GT_t13604(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__13600__$2,value__$1,name__$1,p__13588__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__13599__$2,url__$1,meta13605){return (new clustermap.components.page_title.t13604(selection__$1,owner__$1,path_fn__$2,type_descr__$1,map__13600__$2,value__$1,name__$1,p__13588__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__13599__$2,url__$1,meta13605));
});})(map__13600,map__13600__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13599,map__13599__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t13604(selection,owner,path_fn__$1,type_descr,map__13600__$1,value,name,p__13588,comm,page_title_component,type,view_path_fn,map__13599__$1,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",975998651)),app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
