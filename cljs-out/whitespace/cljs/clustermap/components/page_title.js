// Compiled by ClojureScript 0.0-2356
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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__25307 = cljs.core._EQ_;var expr__25308 = type;if(cljs.core.truth_(pred__25307.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__25308)))
{return "Investor-backed company";
} else
{if(cljs.core.truth_(pred__25307.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__25308)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__25307.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__25308)))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__25308))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__25310,owner){var map__25321 = p__25310;var map__25321__$1 = ((cljs.core.seq_QMARK_.call(null,map__25321))?cljs.core.apply.call(null,cljs.core.hash_map,map__25321):map__25321);var selection = map__25321__$1;var value = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"value","value",305978217));var type = cljs.core.get.call(null,map__25321__$1,new cljs.core.Keyword(null,"type","type",1174270348));var map__25322 = om.core.get_shared.call(null,owner);var map__25322__$1 = ((cljs.core.seq_QMARK_.call(null,map__25322))?cljs.core.apply.call(null,cljs.core.hash_map,map__25322):map__25322);var view_path_fn = cljs.core.get.call(null,map__25322__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__25322__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__25322__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",-884730684));var type_descr = (function (){var G__25323 = selection;var G__25323__$1 = (((G__25323 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__25323));var G__25323__$2 = (((G__25323__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__25323__$1));return G__25323__$2;
})();var name = (function (){var G__25324 = selection;var G__25324__$1 = (((G__25324 == null))?null:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__25324));var G__25324__$2 = (((G__25324__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__25324__$1));return G__25324__$2;
})();var url = (function (){var G__25325 = selection;var G__25325__$1 = (((G__25325 == null))?null:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__25325));var G__25325__$2 = (((G__25325__$1 == null))?null:new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(G__25325__$1));return G__25325__$2;
})();if(typeof clustermap.components.page_title.t25326 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t25326 = (function (selection,owner,path_fn,type_descr,p__25310,value,name,map__25321,comm,page_title_component,type,view_path_fn,map__25322,url,meta25327){
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.p__25310 = p__25310;
this.value = value;
this.name = name;
this.map__25321 = map__25321;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__25322 = map__25322;
this.url = url;
this.meta25327 = meta25327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t25326.cljs$lang$type = true;
clustermap.components.page_title.t25326.cljs$lang$ctorStr = "clustermap.components.page-title/t25326";
clustermap.components.page_title.t25326.cljs$lang$ctorPrWriter = ((function (map__25322,map__25322__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__25321,map__25321__$1,selection,value,type){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.page-title/t25326");
});})(map__25322,map__25322__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__25321,map__25321__$1,selection,value,type))
;
clustermap.components.page_title.t25326.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t25326.prototype.om$core$IRender$render$arity$1 = ((function (map__25322,map__25322__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__25321,map__25321__$1,selection,value,type){
return (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": self__.view_path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461))},"View on map"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn):null)),(function (){var attrs25329 = (function (){var or__3637__auto__ = self__.type_descr;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs25329))?sablono.interpreter.attributes.call(null,attrs25329):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25329))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25329)], null))));
})(),(function (){var attrs25330 = (function (){var or__3637__auto__ = self__.name;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs25330))?sablono.interpreter.attributes.call(null,attrs25330):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25330))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",1803637324)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25330),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",1803637324)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret.call(null,self__.url)):null));
});})(map__25322,map__25322__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__25321,map__25321__$1,selection,value,type))
;
clustermap.components.page_title.t25326.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25322,map__25322__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__25321,map__25321__$1,selection,value,type){
return (function (_25328){var self__ = this;
var _25328__$1 = this;return self__.meta25327;
});})(map__25322,map__25322__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__25321,map__25321__$1,selection,value,type))
;
clustermap.components.page_title.t25326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25322,map__25322__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__25321,map__25321__$1,selection,value,type){
return (function (_25328,meta25327__$1){var self__ = this;
var _25328__$1 = this;return (new clustermap.components.page_title.t25326(self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.p__25310,self__.value,self__.name,self__.map__25321,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__25322,self__.url,meta25327__$1));
});})(map__25322,map__25322__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__25321,map__25321__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t25326 = ((function (map__25322,map__25322__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__25321,map__25321__$1,selection,value,type){
return (function __GT_t25326(selection__$1,owner__$1,path_fn__$2,type_descr__$1,p__25310__$1,value__$1,name__$1,map__25321__$2,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__25322__$2,url__$1,meta25327){return (new clustermap.components.page_title.t25326(selection__$1,owner__$1,path_fn__$2,type_descr__$1,p__25310__$1,value__$1,name__$1,map__25321__$2,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__25322__$2,url__$1,meta25327));
});})(map__25322,map__25322__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__25321,map__25321__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t25326(selection,owner,path_fn__$1,type_descr,p__25310,value,name,map__25321__$1,comm,page_title_component,type,view_path_fn,map__25322__$1,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",975998651)),app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
