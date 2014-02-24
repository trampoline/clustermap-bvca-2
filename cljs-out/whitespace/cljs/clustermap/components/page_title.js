// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
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
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__33512 = cljs.core._EQ_;var expr__33513 = type;if(cljs.core.truth_(pred__33512.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__33513)))
{return "Portfolio Company";
} else
{if(cljs.core.truth_(pred__33512.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__33513)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__33512.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__33513)))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33513)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__33515,owner){var map__33525 = p__33515;var map__33525__$1 = ((cljs.core.seq_QMARK_.call(null,map__33525))?cljs.core.apply.call(null,cljs.core.hash_map,map__33525):map__33525);var selection = map__33525__$1;var value = cljs.core.get.call(null,map__33525__$1,new cljs.core.Keyword(null,"value","value",1125876963));var type = cljs.core.get.call(null,map__33525__$1,new cljs.core.Keyword(null,"type","type",1017479852));var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type_descr = (function (){var G__33526 = selection;var G__33526__$1 = (((G__33526 == null))?null:new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__33526));var G__33526__$2 = (((G__33526__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__33526__$1));return G__33526__$2;
})();var name = (function (){var G__33527 = selection;var G__33527__$1 = (((G__33527 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__33527));var G__33527__$2 = (((G__33527__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__33527__$1));return G__33527__$2;
})();var url = (function (){var G__33528 = selection;var G__33528__$1 = (((G__33528 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__33528));var G__33528__$2 = (((G__33528__$1 == null))?null:new cljs.core.Keyword(null,"web_url","web_url",2237655414).cljs$core$IFn$_invoke$arity$1(G__33528__$1));return G__33528__$2;
})();if(typeof clustermap.components.page_title.t33529 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t33529 = (function (value,type_descr,selection,name,comm,page_title_component,owner,p__33515,url,map__33525,type,meta33530){
this.value = value;
this.type_descr = type_descr;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.owner = owner;
this.p__33515 = p__33515;
this.url = url;
this.map__33525 = map__33525;
this.type = type;
this.meta33530 = meta33530;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t33529.cljs$lang$type = true;
clustermap.components.page_title.t33529.cljs$lang$ctorStr = "clustermap.components.page-title/t33529";
clustermap.components.page_title.t33529.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.page-title/t33529");
});
clustermap.components.page_title.t33529.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t33529.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"map"], null));
})},"View on map"),(function (){var attrs33532 = (function (){var or__3406__auto__ = self__.type_descr;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_.call(null,attrs33532))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs33532),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs33532));
}
})(),(function (){var attrs33533 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_.call(null,attrs33533))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs33533),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs33533),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"constituency","constituency",3902864696)))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",1123453049),"\u00A0(",new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.value),", ",new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret.call(null,self__.url)):null));
});
clustermap.components.page_title.t33529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33531){var self__ = this;
var _33531__$1 = this;return self__.meta33530;
});
clustermap.components.page_title.t33529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33531,meta33530__$1){var self__ = this;
var _33531__$1 = this;return (new clustermap.components.page_title.t33529(self__.value,self__.type_descr,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.owner,self__.p__33515,self__.url,self__.map__33525,self__.type,meta33530__$1));
});
clustermap.components.page_title.__GT_t33529 = (function __GT_t33529(value__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,p__33515__$1,url__$1,map__33525__$2,type__$1,meta33530){return (new clustermap.components.page_title.t33529(value__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,p__33515__$1,url__$1,map__33525__$2,type__$1,meta33530));
});
}
return (new clustermap.components.page_title.t33529(value,type_descr,selection,name,comm,page_title_component,owner,p__33515,url,map__33525__$1,type,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",3592905982)),document.getElementById(elem_id));
});
