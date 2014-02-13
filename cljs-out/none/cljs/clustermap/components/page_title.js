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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__11967 = cljs.core._EQ_;var expr__11968 = type;if(cljs.core.truth_(pred__11967.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11968)))
{return "Portfolio Company";
} else
{if(cljs.core.truth_(pred__11967.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11968)))
{return "Investor";
} else
{if(cljs.core.truth_(pred__11967.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11968)))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11968)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = (function (){var G__11977 = selection;var G__11977__$1 = (((G__11977 == null))?null:new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(G__11977));var G__11977__$2 = (((G__11977__$1 == null))?null:clustermap.components.page_title.describe_type.call(null,G__11977__$1));return G__11977__$2;
})();var name = (function (){var G__11978 = selection;var G__11978__$1 = (((G__11978 == null))?null:new cljs.core.Keyword(null,"value","value",1125876963).cljs$core$IFn$_invoke$arity$1(G__11978));var G__11978__$2 = (((G__11978__$1 == null))?null:new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(G__11978__$1));return G__11978__$2;
})();if(typeof clustermap.components.page_title.t11979 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t11979 = (function (name,type,comm,owner,selection,page_title_component,meta11980){
this.name = name;
this.type = type;
this.comm = comm;
this.owner = owner;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta11980 = meta11980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t11979.cljs$lang$type = true;
clustermap.components.page_title.t11979.cljs$lang$ctorStr = "clustermap.components.page-title/t11979";
clustermap.components.page_title.t11979.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.page-title/t11979");
});
clustermap.components.page_title.t11979.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t11979.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"map"], null));
})},"View on map"),(function (){var attrs11982 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_.call(null,attrs11982))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11982),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11982));
}
})(),(function (){var attrs11983 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_.call(null,attrs11983))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11983),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11983));
}
})());
});
clustermap.components.page_title.t11979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11981){var self__ = this;
var _11981__$1 = this;return self__.meta11980;
});
clustermap.components.page_title.t11979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11981,meta11980__$1){var self__ = this;
var _11981__$1 = this;return (new clustermap.components.page_title.t11979(self__.name,self__.type,self__.comm,self__.owner,self__.selection,self__.page_title_component,meta11980__$1));
});
clustermap.components.page_title.__GT_t11979 = (function __GT_t11979(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta11980){return (new clustermap.components.page_title.t11979(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta11980));
});
}
return (new clustermap.components.page_title.t11979(name,type,comm,owner,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.om.burrow.call(null,clustermap.components.page_title.page_title_component,new cljs.core.Keyword(null,"selection","selection",3592905982)),document.getElementById(elem_id));
});

//# sourceMappingURL=page_title.js.map