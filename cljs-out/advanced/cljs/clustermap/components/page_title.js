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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__21279 = cljs.core._EQ_;var expr__21280 = type;if(cljs.core.truth_((pred__21279.cljs$core$IFn$_invoke$arity$2 ? pred__21279.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,expr__21280) : pred__21279.call(null,cljs.core.constant$keyword$229,expr__21280))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__21279.cljs$core$IFn$_invoke$arity$2 ? pred__21279.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__21280) : pred__21279.call(null,cljs.core.constant$keyword$230,expr__21280))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__21279.cljs$core$IFn$_invoke$arity$2 ? pred__21279.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$231,expr__21280) : pred__21279.call(null,cljs.core.constant$keyword$231,expr__21280))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21280)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection){var type = (function (){var G__21291 = selection;var G__21291__$1 = (((G__21291 == null))?null:cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(G__21291));var G__21291__$2 = (((G__21291__$1 == null))?null:clustermap.components.page_title.describe_type(G__21291__$1));return G__21291__$2;
})();var name = (function (){var G__21292 = selection;var G__21292__$1 = (((G__21292 == null))?null:cljs.core.constant$keyword$164.cljs$core$IFn$_invoke$arity$1(G__21292));var G__21292__$2 = (((G__21292__$1 == null))?null:cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(G__21292__$1));return G__21292__$2;
})();if(typeof clustermap.components.page_title.t21293 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t21293 = (function (name,type,selection,page_title_component,meta21294){
this.name = name;
this.type = type;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta21294 = meta21294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t21293.cljs$lang$type = true;
clustermap.components.page_title.t21293.cljs$lang$ctorStr = "clustermap.components.page-title/t21293";
clustermap.components.page_title.t21293.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t21293");
});
clustermap.components.page_title.t21293.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t21293.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs21298 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs21298))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21298),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21298));
}
})(),(function (){var attrs21299 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs21299))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21299),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21299));
}
})());
});
clustermap.components.page_title.t21293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21295){var self__ = this;
var _21295__$1 = this;return self__.meta21294;
});
clustermap.components.page_title.t21293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21295,meta21294__$1){var self__ = this;
var _21295__$1 = this;return (new clustermap.components.page_title.t21293(self__.name,self__.type,self__.selection,self__.page_title_component,meta21294__$1));
});
clustermap.components.page_title.__GT_t21293 = (function __GT_t21293(name__$1,type__$1,selection__$1,page_title_component__$1,meta21294){return (new clustermap.components.page_title.t21293(name__$1,type__$1,selection__$1,page_title_component__$1,meta21294));
});
}
return (new clustermap.components.page_title.t21293(name,type,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$232),document.getElementById(elem_id));
});
