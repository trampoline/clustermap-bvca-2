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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__23610 = cljs.core._EQ_;var expr__23611 = type;if(cljs.core.truth_(pred__23610.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__23611)))
{return "Portfolio Company";
} else
{if(cljs.core.truth_(pred__23610.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__23611)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__23610.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__23611)))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23611)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__23613,owner){var map__23624 = p__23613;var map__23624__$1 = ((cljs.core.seq_QMARK_.call(null,map__23624))?cljs.core.apply.call(null,cljs.core.hash_map,map__23624):map__23624);var selection = map__23624__$1;var value = cljs.core.get.call(null,map__23624__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__23624__$1,new cljs.core.Keyword(null,"type","type",1017479852));var map__23625 = om.core.get_shared.call(null,owner);var map__23625__$1 = ((cljs.core.seq_QMARK_.call(null,map__23625))?cljs.core.apply.call(null,cljs.core.hash_map,map__23625):map__23625);var path_fn = cljs.core.get.call(null,map__23625__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23625__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var type_descr = (function (){var G__23626 = selection;var G__23626__$1 = (((G__23626 == null))?null:new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__23626));var G__23626__$2 = (((G__23626__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__23626__$1));return G__23626__$2;
})();var name = (function (){var G__23627 = selection;var G__23627__$1 = (((G__23627 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__23627));var G__23627__$2 = (((G__23627__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__23627__$1));return G__23627__$2;
})();var url = (function (){var G__23628 = selection;var G__23628__$1 = (((G__23628 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__23628));var G__23628__$2 = (((G__23628__$1 == null))?null:new cljs.core.Keyword(null,"web_url","web_url",2237655414).cljs$core$IFn$_invoke$arity$1(G__23628__$1));return G__23628__$2;
})();if(typeof clustermap.components.page_title.t23629 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t23629 = (function (value,p__23613,path_fn,type_descr,map__23625,selection,name,comm,page_title_component,map__23624,owner,url,type,meta23630){
this.value = value;
this.p__23613 = p__23613;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.map__23625 = map__23625;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.map__23624 = map__23624;
this.owner = owner;
this.url = url;
this.type = type;
this.meta23630 = meta23630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t23629.cljs$lang$type = true;
clustermap.components.page_title.t23629.cljs$lang$ctorStr = "clustermap.components.page-title/t23629";
clustermap.components.page_title.t23629.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.page-title/t23629");
});
clustermap.components.page_title.t23629.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t23629.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"map"], null));
})},"View on map"),sablono.interpreter.interpret.call(null,(cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button.call(null,self__.path_fn):null)),(function (){var attrs23632 = (function (){var or__3441__auto__ = self__.type_descr;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_.call(null,attrs23632))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs23632),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs23632));
}
})(),(function (){var attrs23633 = (function (){var or__3441__auto__ = self__.name;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_.call(null,attrs23633))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs23633),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs23633),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret.call(null,self__.url)):null));
});
clustermap.components.page_title.t23629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23631){var self__ = this;
var _23631__$1 = this;return self__.meta23630;
});
clustermap.components.page_title.t23629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23631,meta23630__$1){var self__ = this;
var _23631__$1 = this;return (new clustermap.components.page_title.t23629(self__.value,self__.p__23613,self__.path_fn,self__.type_descr,self__.map__23625,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.map__23624,self__.owner,self__.url,self__.type,meta23630__$1));
});
clustermap.components.page_title.__GT_t23629 = (function __GT_t23629(value__$1,p__23613__$1,path_fn__$1,type_descr__$1,map__23625__$2,selection__$1,name__$1,comm__$1,page_title_component__$1,map__23624__$2,owner__$1,url__$1,type__$1,meta23630){return (new clustermap.components.page_title.t23629(value__$1,p__23613__$1,path_fn__$1,type_descr__$1,map__23625__$2,selection__$1,name__$1,comm__$1,page_title_component__$1,map__23624__$2,owner__$1,url__$1,type__$1,meta23630));
});
}
return (new clustermap.components.page_title.t23629(value,p__23613,path_fn,type_descr,map__23625__$1,selection,name,comm,page_title_component,map__23624__$1,owner,url,type,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",3592905982)),app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=page_title.js.map