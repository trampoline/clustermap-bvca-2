// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('cljs.core.async');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__45498 = cljs.core._EQ_;var expr__45499 = type;if(cljs.core.truth_(pred__45498.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__45499)))
{return "Investor-backed company";
} else
{if(cljs.core.truth_(pred__45498.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__45499)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__45498.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__45499)))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45499)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__45501,owner){var map__45512 = p__45501;var map__45512__$1 = ((cljs.core.seq_QMARK_.call(null,map__45512))?cljs.core.apply.call(null,cljs.core.hash_map,map__45512):map__45512);var selection = map__45512__$1;var value = cljs.core.get.call(null,map__45512__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__45512__$1,new cljs.core.Keyword(null,"type","type",1017479852));var map__45513 = om.core.get_shared.call(null,owner);var map__45513__$1 = ((cljs.core.seq_QMARK_.call(null,map__45513))?cljs.core.apply.call(null,cljs.core.hash_map,map__45513):map__45513);var path_fn = cljs.core.get.call(null,map__45513__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45513__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,new cljs.core.Keyword(null,"lists","lists",1116886791));var type_descr = (function (){var G__45514 = selection;var G__45514__$1 = (((G__45514 == null))?null:new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__45514));var G__45514__$2 = (((G__45514__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__45514__$1));return G__45514__$2;
})();var name = (function (){var G__45515 = selection;var G__45515__$1 = (((G__45515 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__45515));var G__45515__$2 = (((G__45515__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__45515__$1));return G__45515__$2;
})();var url = (function (){var G__45516 = selection;var G__45516__$1 = (((G__45516 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__45516));var G__45516__$2 = (((G__45516__$1 == null))?null:new cljs.core.Keyword(null,"web_url","web_url",2237655414).cljs$core$IFn$_invoke$arity$1(G__45516__$1));return G__45516__$2;
})();if(typeof clustermap.components.page_title.t45517 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t45517 = (function (value,path_fn,type_descr,selection,name,comm,page_title_component,owner,url,type,map__45513,map__45512,p__45501,meta45518){
this.value = value;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.owner = owner;
this.url = url;
this.type = type;
this.map__45513 = map__45513;
this.map__45512 = map__45512;
this.p__45501 = p__45501;
this.meta45518 = meta45518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t45517.cljs$lang$type = true;
clustermap.components.page_title.t45517.cljs$lang$ctorStr = "clustermap.components.page-title/t45517";
clustermap.components.page_title.t45517.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.page-title/t45517");
});
clustermap.components.page_title.t45517.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t45517.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"map"], null));
})},"View on map"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn):null)),(function (){var attrs45520 = (function (){var or__3441__auto__ = self__.type_descr;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "All investor-backed companies";
}
})();if(cljs.core.map_QMARK_.call(null,attrs45520))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs45520),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs45520));
}
})(),(function (){var attrs45521 = (function (){var or__3441__auto__ = self__.name;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_.call(null,attrs45521))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs45521),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs45521),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret.call(null,self__.url)):null));
});
clustermap.components.page_title.t45517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45519){var self__ = this;
var _45519__$1 = this;return self__.meta45518;
});
clustermap.components.page_title.t45517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45519,meta45518__$1){var self__ = this;
var _45519__$1 = this;return (new clustermap.components.page_title.t45517(self__.value,self__.path_fn,self__.type_descr,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.owner,self__.url,self__.type,self__.map__45513,self__.map__45512,self__.p__45501,meta45518__$1));
});
clustermap.components.page_title.__GT_t45517 = (function __GT_t45517(value__$1,path_fn__$2,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,url__$1,type__$1,map__45513__$2,map__45512__$2,p__45501__$1,meta45518){return (new clustermap.components.page_title.t45517(value__$1,path_fn__$2,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,url__$1,type__$1,map__45513__$2,map__45512__$2,p__45501__$1,meta45518));
});
}
return (new clustermap.components.page_title.t45517(value,path_fn__$1,type_descr,selection,name,comm,page_title_component,owner,url,type,map__45513__$1,map__45512__$1,p__45501,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",3592905982)),app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
