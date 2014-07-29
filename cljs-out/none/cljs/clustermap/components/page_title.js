// Compiled by ClojureScript 0.0-2268
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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__50513 = cljs.core._EQ_;var expr__50514 = type;if(cljs.core.truth_(pred__50513.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__50514)))
{return "Investor-backed company";
} else
{if(cljs.core.truth_(pred__50513.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__50514)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__50513.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__50514)))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__50514))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__50516,owner){var map__50527 = p__50516;var map__50527__$1 = ((cljs.core.seq_QMARK_.call(null,map__50527))?cljs.core.apply.call(null,cljs.core.hash_map,map__50527):map__50527);var selection = map__50527__$1;var value = cljs.core.get.call(null,map__50527__$1,new cljs.core.Keyword(null,"value","value",305978217));var type = cljs.core.get.call(null,map__50527__$1,new cljs.core.Keyword(null,"type","type",1174270348));var map__50528 = om.core.get_shared.call(null,owner);var map__50528__$1 = ((cljs.core.seq_QMARK_.call(null,map__50528))?cljs.core.apply.call(null,cljs.core.hash_map,map__50528):map__50528);var view_path_fn = cljs.core.get.call(null,map__50528__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__50528__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__50528__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",-884730684));var type_descr = (function (){var G__50529 = selection;var G__50529__$1 = (((G__50529 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__50529));var G__50529__$2 = (((G__50529__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__50529__$1));return G__50529__$2;
})();var name = (function (){var G__50530 = selection;var G__50530__$1 = (((G__50530 == null))?null:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__50530));var G__50530__$2 = (((G__50530__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__50530__$1));return G__50530__$2;
})();var url = (function (){var G__50531 = selection;var G__50531__$1 = (((G__50531 == null))?null:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__50531));var G__50531__$2 = (((G__50531__$1 == null))?null:new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(G__50531__$1));return G__50531__$2;
})();if(typeof clustermap.components.page_title.t50532 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t50532 = (function (map__50527,selection,owner,path_fn,type_descr,value,name,comm,page_title_component,type,view_path_fn,map__50528,p__50516,url,meta50533){
this.map__50527 = map__50527;
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.map__50528 = map__50528;
this.p__50516 = p__50516;
this.url = url;
this.meta50533 = meta50533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t50532.cljs$lang$type = true;
clustermap.components.page_title.t50532.cljs$lang$ctorStr = "clustermap.components.page-title/t50532";
clustermap.components.page_title.t50532.cljs$lang$ctorPrWriter = ((function (map__50528,map__50528__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__50527,map__50527__$1,selection,value,type){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.page-title/t50532");
});})(map__50528,map__50528__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__50527,map__50527__$1,selection,value,type))
;
clustermap.components.page_title.t50532.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t50532.prototype.om$core$IRender$render$arity$1 = ((function (map__50528,map__50528__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__50527,map__50527__$1,selection,value,type){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": self__.view_path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461))},"View on map"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn):null)),(function (){var attrs50535 = (function (){var or__3543__auto__ = self__.type_descr;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs50535))?sablono.interpreter.attributes.call(null,attrs50535):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50535))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50535)], null))));
})(),(function (){var attrs50536 = (function (){var or__3543__auto__ = self__.name;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs50536))?sablono.interpreter.attributes.call(null,attrs50536):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50536))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",1803637324)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50536),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",1803637324)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret.call(null,self__.url)):null));
});})(map__50528,map__50528__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__50527,map__50527__$1,selection,value,type))
;
clustermap.components.page_title.t50532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50528,map__50528__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__50527,map__50527__$1,selection,value,type){
return (function (_50534){var self__ = this;
var _50534__$1 = this;return self__.meta50533;
});})(map__50528,map__50528__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__50527,map__50527__$1,selection,value,type))
;
clustermap.components.page_title.t50532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50528,map__50528__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__50527,map__50527__$1,selection,value,type){
return (function (_50534,meta50533__$1){var self__ = this;
var _50534__$1 = this;return (new clustermap.components.page_title.t50532(self__.map__50527,self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.map__50528,self__.p__50516,self__.url,meta50533__$1));
});})(map__50528,map__50528__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__50527,map__50527__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t50532 = ((function (map__50528,map__50528__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__50527,map__50527__$1,selection,value,type){
return (function __GT_t50532(map__50527__$2,selection__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__50528__$2,p__50516__$1,url__$1,meta50533){return (new clustermap.components.page_title.t50532(map__50527__$2,selection__$1,owner__$1,path_fn__$2,type_descr__$1,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,map__50528__$2,p__50516__$1,url__$1,meta50533));
});})(map__50528,map__50528__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__50527,map__50527__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t50532(map__50527__$1,selection,owner,path_fn__$1,type_descr,value,name,comm,page_title_component,type,view_path_fn,map__50528__$1,p__50516,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",975998651)),app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=page_title.js.map