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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__21809 = cljs.core._EQ_;var expr__21810 = type;if(cljs.core.truth_((pred__21809.cljs$core$IFn$_invoke$arity$2 ? pred__21809.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$255,expr__21810) : pred__21809.call(null,cljs.core.constant$keyword$255,expr__21810))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__21809.cljs$core$IFn$_invoke$arity$2 ? pred__21809.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$256,expr__21810) : pred__21809.call(null,cljs.core.constant$keyword$256,expr__21810))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__21809.cljs$core$IFn$_invoke$arity$2 ? pred__21809.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21810) : pred__21809.call(null,cljs.core.constant$keyword$257,expr__21810))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21810)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$258);var type = (function (){var G__21819 = selection;var G__21819__$1 = (((G__21819 == null))?null:cljs.core.constant$keyword$220.cljs$core$IFn$_invoke$arity$1(G__21819));var G__21819__$2 = (((G__21819__$1 == null))?null:clustermap.components.page_title.describe_type(G__21819__$1));return G__21819__$2;
})();var name = (function (){var G__21820 = selection;var G__21820__$1 = (((G__21820 == null))?null:cljs.core.constant$keyword$190.cljs$core$IFn$_invoke$arity$1(G__21820));var G__21820__$2 = (((G__21820__$1 == null))?null:cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(G__21820__$1));return G__21820__$2;
})();if(typeof clustermap.components.page_title.t21821 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t21821 = (function (name,type,comm,owner,selection,page_title_component,meta21822){
this.name = name;
this.type = type;
this.comm = comm;
this.owner = owner;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta21822 = meta21822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t21821.cljs$lang$type = true;
clustermap.components.page_title.t21821.cljs$lang$ctorStr = "clustermap.components.page-title/t21821";
clustermap.components.page_title.t21821.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t21821");
});
clustermap.components.page_title.t21821.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t21821.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,"map"], null));
})},"View on map"),(function (){var attrs21824 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs21824))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21824),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21824));
}
})(),(function (){var attrs21825 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs21825))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21825),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21825));
}
})());
});
clustermap.components.page_title.t21821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21823){var self__ = this;
var _21823__$1 = this;return self__.meta21822;
});
clustermap.components.page_title.t21821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21823,meta21822__$1){var self__ = this;
var _21823__$1 = this;return (new clustermap.components.page_title.t21821(self__.name,self__.type,self__.comm,self__.owner,self__.selection,self__.page_title_component,meta21822__$1));
});
clustermap.components.page_title.__GT_t21821 = (function __GT_t21821(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta21822){return (new clustermap.components.page_title.t21821(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta21822));
});
}
return (new clustermap.components.page_title.t21821(name,type,comm,owner,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$258,comm], null),clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$260),document.getElementById(elem_id));
});
