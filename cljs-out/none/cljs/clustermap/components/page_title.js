// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('clustermap.formats.number');
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__11349 = cljs.core._EQ_;var expr__11350 = type;if(cljs.core.truth_(pred__11349.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11350)))
{return "Portfolio Company";
} else
{if(cljs.core.truth_(pred__11349.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11350)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__11349.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11350)))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11350)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection){var type = (function (){var G__11361 = selection;var G__11361__$1 = (((G__11361 == null))?null:new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__11361));var G__11361__$2 = (((G__11361__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__11361__$1));return G__11361__$2;
})();var name = (function (){var G__11362 = selection;var G__11362__$1 = (((G__11362 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__11362));var G__11362__$2 = (((G__11362__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__11362__$1));return G__11362__$2;
})();if(typeof clustermap.components.page_title.t11363 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t11363 = (function (name,type,selection,page_title_component,meta11364){
this.name = name;
this.type = type;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta11364 = meta11364;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t11363.cljs$lang$type = true;
clustermap.components.page_title.t11363.cljs$lang$ctorStr = "clustermap.components.page-title/t11363";
clustermap.components.page_title.t11363.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.page-title/t11363");
});
clustermap.components.page_title.t11363.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t11363.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs11368 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_.call(null,attrs11368))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11368),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11368));
}
})(),(function (){var attrs11369 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_.call(null,attrs11369))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11369),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11369));
}
})());
});
clustermap.components.page_title.t11363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11365){var self__ = this;
var _11365__$1 = this;return self__.meta11364;
});
clustermap.components.page_title.t11363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11365,meta11364__$1){var self__ = this;
var _11365__$1 = this;return (new clustermap.components.page_title.t11363(self__.name,self__.type,self__.selection,self__.page_title_component,meta11364__$1));
});
clustermap.components.page_title.__GT_t11363 = (function __GT_t11363(name__$1,type__$1,selection__$1,page_title_component__$1,meta11364){return (new clustermap.components.page_title.t11363(name__$1,type__$1,selection__$1,page_title_component__$1,meta11364));
});
}
return (new clustermap.components.page_title.t11363(name,type,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",3592905982)),document.getElementById(elem_id));
});

//# sourceMappingURL=page_title.js.map