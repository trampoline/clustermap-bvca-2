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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__21474 = cljs.core._EQ_;var expr__21475 = type;if(cljs.core.truth_((pred__21474.cljs$core$IFn$_invoke$arity$2 ? pred__21474.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$253,expr__21475) : pred__21474.call(null,cljs.core.constant$keyword$253,expr__21475))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__21474.cljs$core$IFn$_invoke$arity$2 ? pred__21474.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$254,expr__21475) : pred__21474.call(null,cljs.core.constant$keyword$254,expr__21475))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__21474.cljs$core$IFn$_invoke$arity$2 ? pred__21474.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$255,expr__21475) : pred__21474.call(null,cljs.core.constant$keyword$255,expr__21475))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21475)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection){var type = (function (){var G__21486 = selection;var G__21486__$1 = (((G__21486 == null))?null:cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(G__21486));var G__21486__$2 = (((G__21486__$1 == null))?null:clustermap.components.page_title.describe_type(G__21486__$1));return G__21486__$2;
})();var name = (function (){var G__21487 = selection;var G__21487__$1 = (((G__21487 == null))?null:cljs.core.constant$keyword$188.cljs$core$IFn$_invoke$arity$1(G__21487));var G__21487__$2 = (((G__21487__$1 == null))?null:cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(G__21487__$1));return G__21487__$2;
})();if(typeof clustermap.components.page_title.t21488 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t21488 = (function (name,type,selection,page_title_component,meta21489){
this.name = name;
this.type = type;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta21489 = meta21489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t21488.cljs$lang$type = true;
clustermap.components.page_title.t21488.cljs$lang$ctorStr = "clustermap.components.page-title/t21488";
clustermap.components.page_title.t21488.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t21488");
});
clustermap.components.page_title.t21488.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t21488.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs21493 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs21493))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21493),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21493));
}
})(),(function (){var attrs21494 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs21494))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21494),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21494));
}
})());
});
clustermap.components.page_title.t21488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21490){var self__ = this;
var _21490__$1 = this;return self__.meta21489;
});
clustermap.components.page_title.t21488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21490,meta21489__$1){var self__ = this;
var _21490__$1 = this;return (new clustermap.components.page_title.t21488(self__.name,self__.type,self__.selection,self__.page_title_component,meta21489__$1));
});
clustermap.components.page_title.__GT_t21488 = (function __GT_t21488(name__$1,type__$1,selection__$1,page_title_component__$1,meta21489){return (new clustermap.components.page_title.t21488(name__$1,type__$1,selection__$1,page_title_component__$1,meta21489));
});
}
return (new clustermap.components.page_title.t21488(name,type,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$256),document.getElementById(elem_id));
});
