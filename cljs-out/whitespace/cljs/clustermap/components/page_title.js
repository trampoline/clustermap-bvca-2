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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__13816 = cljs.core._EQ_;var expr__13817 = type;if(cljs.core.truth_(pred__13816.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),expr__13817)))
{return "Investor-backed company";
} else
{if(cljs.core.truth_(pred__13816.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",13706558),expr__13817)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__13816.call(null,new cljs.core.Keyword(null,"constituency","constituency",1803637324),expr__13817)))
{return "Constituency";
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__13817))));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__13819,owner){var map__13830 = p__13819;var map__13830__$1 = ((cljs.core.seq_QMARK_.call(null,map__13830))?cljs.core.apply.call(null,cljs.core.hash_map,map__13830):map__13830);var selection = map__13830__$1;var value = cljs.core.get.call(null,map__13830__$1,new cljs.core.Keyword(null,"value","value",305978217));var type = cljs.core.get.call(null,map__13830__$1,new cljs.core.Keyword(null,"type","type",1174270348));var map__13831 = om.core.get_shared.call(null,owner);var map__13831__$1 = ((cljs.core.seq_QMARK_.call(null,map__13831))?cljs.core.apply.call(null,cljs.core.hash_map,map__13831):map__13831);var view_path_fn = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13831__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",-884730684));var type_descr = (function (){var G__13832 = selection;var G__13832__$1 = (((G__13832 == null))?null:new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__13832));var G__13832__$2 = (((G__13832__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__13832__$1));return G__13832__$2;
})();var name = (function (){var G__13833 = selection;var G__13833__$1 = (((G__13833 == null))?null:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__13833));var G__13833__$2 = (((G__13833__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__13833__$1));return G__13833__$2;
})();var url = (function (){var G__13834 = selection;var G__13834__$1 = (((G__13834 == null))?null:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__13834));var G__13834__$2 = (((G__13834__$1 == null))?null:new cljs.core.Keyword(null,"web_url","web_url",2107881046).cljs$core$IFn$_invoke$arity$1(G__13834__$1));return G__13834__$2;
})();if(typeof clustermap.components.page_title.t13835 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t13835 = (function (map__13830,selection,owner,path_fn,type_descr,p__13819,map__13831,value,name,comm,page_title_component,type,view_path_fn,url,meta13836){
this.map__13830 = map__13830;
this.selection = selection;
this.owner = owner;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.p__13819 = p__13819;
this.map__13831 = map__13831;
this.value = value;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.type = type;
this.view_path_fn = view_path_fn;
this.url = url;
this.meta13836 = meta13836;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t13835.cljs$lang$type = true;
clustermap.components.page_title.t13835.cljs$lang$ctorStr = "clustermap.components.page-title/t13835";
clustermap.components.page_title.t13835.cljs$lang$ctorPrWriter = ((function (map__13831,map__13831__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13830,map__13830__$1,selection,value,type){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.page-title/t13835");
});})(map__13831,map__13831__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13830,map__13830__$1,selection,value,type))
;
clustermap.components.page_title.t13835.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t13835.prototype.om$core$IRender$render$arity$1 = ((function (map__13831,map__13831__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13830,map__13830__$1,selection,value,type){
return (function (this__9490__auto__){var self__ = this;
var this__9490__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.a({"className": "btn btn-link", "href": self__.view_path_fn.call(null,new cljs.core.Keyword(null,"map","map",1371690461))},"View on map"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn):null)),(function (){var attrs13838 = (function (){var or__3543__auto__ = self__.type_descr;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "All investor-backed companies";
}
})();return cljs.core.apply.call(null,React.DOM.h2,((cljs.core.map_QMARK_.call(null,attrs13838))?sablono.interpreter.attributes.call(null,attrs13838):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13838))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13838)], null))));
})(),(function (){var attrs13839 = (function (){var or__3543__auto__ = self__.name;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return "UK wide";
}
})();return cljs.core.apply.call(null,React.DOM.h3,((cljs.core.map_QMARK_.call(null,attrs13839))?sablono.interpreter.attributes.call(null,attrs13839):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13839))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",1803637324)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13839),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",1803637324)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",-480607843).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",1372996762).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null))], null))));
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret.call(null,self__.url)):null));
});})(map__13831,map__13831__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13830,map__13830__$1,selection,value,type))
;
clustermap.components.page_title.t13835.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13831,map__13831__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13830,map__13830__$1,selection,value,type){
return (function (_13837){var self__ = this;
var _13837__$1 = this;return self__.meta13836;
});})(map__13831,map__13831__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13830,map__13830__$1,selection,value,type))
;
clustermap.components.page_title.t13835.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13831,map__13831__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13830,map__13830__$1,selection,value,type){
return (function (_13837,meta13836__$1){var self__ = this;
var _13837__$1 = this;return (new clustermap.components.page_title.t13835(self__.map__13830,self__.selection,self__.owner,self__.path_fn,self__.type_descr,self__.p__13819,self__.map__13831,self__.value,self__.name,self__.comm,self__.page_title_component,self__.type,self__.view_path_fn,self__.url,meta13836__$1));
});})(map__13831,map__13831__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13830,map__13830__$1,selection,value,type))
;
clustermap.components.page_title.__GT_t13835 = ((function (map__13831,map__13831__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13830,map__13830__$1,selection,value,type){
return (function __GT_t13835(map__13830__$2,selection__$1,owner__$1,path_fn__$2,type_descr__$1,p__13819__$1,map__13831__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta13836){return (new clustermap.components.page_title.t13835(map__13830__$2,selection__$1,owner__$1,path_fn__$2,type_descr__$1,p__13819__$1,map__13831__$2,value__$1,name__$1,comm__$1,page_title_component__$1,type__$1,view_path_fn__$1,url__$1,meta13836));
});})(map__13831,map__13831__$1,view_path_fn,path_fn,comm,path_fn__$1,type_descr,name,url,map__13830,map__13830__$1,selection,value,type))
;
}
return (new clustermap.components.page_title.t13835(map__13830__$1,selection,owner,path_fn__$1,type_descr,p__13819,map__13831__$1,value,name,comm,page_title_component,type,view_path_fn,url,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",975998651)),app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
