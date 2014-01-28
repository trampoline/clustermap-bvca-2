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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__21330 = cljs.core._EQ_;var expr__21331 = type;if(cljs.core.truth_((pred__21330.cljs$core$IFn$_invoke$arity$2 ? pred__21330.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$252,expr__21331) : pred__21330.call(null,cljs.core.constant$keyword$252,expr__21331))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__21330.cljs$core$IFn$_invoke$arity$2 ? pred__21330.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$253,expr__21331) : pred__21330.call(null,cljs.core.constant$keyword$253,expr__21331))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__21330.cljs$core$IFn$_invoke$arity$2 ? pred__21330.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$254,expr__21331) : pred__21330.call(null,cljs.core.constant$keyword$254,expr__21331))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21331)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection){var type = (function (){var G__21342 = selection;var G__21342__$1 = (((G__21342 == null))?null:cljs.core.constant$keyword$217.cljs$core$IFn$_invoke$arity$1(G__21342));var G__21342__$2 = (((G__21342__$1 == null))?null:clustermap.components.page_title.describe_type(G__21342__$1));return G__21342__$2;
})();var name = (function (){var G__21343 = selection;var G__21343__$1 = (((G__21343 == null))?null:cljs.core.constant$keyword$187.cljs$core$IFn$_invoke$arity$1(G__21343));var G__21343__$2 = (((G__21343__$1 == null))?null:cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(G__21343__$1));return G__21343__$2;
})();if(typeof clustermap.components.page_title.t21344 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t21344 = (function (name,type,selection,page_title_component,meta21345){
this.name = name;
this.type = type;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta21345 = meta21345;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t21344.cljs$lang$type = true;
clustermap.components.page_title.t21344.cljs$lang$ctorStr = "clustermap.components.page-title/t21344";
clustermap.components.page_title.t21344.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t21344");
});
clustermap.components.page_title.t21344.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t21344.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button"},"View on map"),(function (){var attrs21349 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs21349))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21349),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21349));
}
})(),(function (){var attrs21350 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs21350))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21350),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21350));
}
})());
});
clustermap.components.page_title.t21344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21346){var self__ = this;
var _21346__$1 = this;return self__.meta21345;
});
clustermap.components.page_title.t21344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21346,meta21345__$1){var self__ = this;
var _21346__$1 = this;return (new clustermap.components.page_title.t21344(self__.name,self__.type,self__.selection,self__.page_title_component,meta21345__$1));
});
clustermap.components.page_title.__GT_t21344 = (function __GT_t21344(name__$1,type__$1,selection__$1,page_title_component__$1,meta21345){return (new clustermap.components.page_title.t21344(name__$1,type__$1,selection__$1,page_title_component__$1,meta21345));
});
}
return (new clustermap.components.page_title.t21344(name,type,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$255),document.getElementById(elem_id));
});
