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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__21847 = cljs.core._EQ_;var expr__21848 = type;if(cljs.core.truth_((pred__21847.cljs$core$IFn$_invoke$arity$2 ? pred__21847.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21848) : pred__21847.call(null,cljs.core.constant$keyword$259,expr__21848))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__21847.cljs$core$IFn$_invoke$arity$2 ? pred__21847.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260,expr__21848) : pred__21847.call(null,cljs.core.constant$keyword$260,expr__21848))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__21847.cljs$core$IFn$_invoke$arity$2 ? pred__21847.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261,expr__21848) : pred__21847.call(null,cljs.core.constant$keyword$261,expr__21848))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__21848)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$262);var type = (function (){var G__21857 = selection;var G__21857__$1 = (((G__21857 == null))?null:cljs.core.constant$keyword$224.cljs$core$IFn$_invoke$arity$1(G__21857));var G__21857__$2 = (((G__21857__$1 == null))?null:clustermap.components.page_title.describe_type(G__21857__$1));return G__21857__$2;
})();var name = (function (){var G__21858 = selection;var G__21858__$1 = (((G__21858 == null))?null:cljs.core.constant$keyword$194.cljs$core$IFn$_invoke$arity$1(G__21858));var G__21858__$2 = (((G__21858__$1 == null))?null:cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(G__21858__$1));return G__21858__$2;
})();if(typeof clustermap.components.page_title.t21859 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t21859 = (function (name,type,comm,owner,selection,page_title_component,meta21860){
this.name = name;
this.type = type;
this.comm = comm;
this.owner = owner;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta21860 = meta21860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t21859.cljs$lang$type = true;
clustermap.components.page_title.t21859.cljs$lang$ctorStr = "clustermap.components.page-title/t21859";
clustermap.components.page_title.t21859.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t21859");
});
clustermap.components.page_title.t21859.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t21859.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,"map"], null));
})},"View on map"),(function (){var attrs21862 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs21862))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21862),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21862));
}
})(),(function (){var attrs21863 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs21863))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21863),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21863));
}
})());
});
clustermap.components.page_title.t21859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21861){var self__ = this;
var _21861__$1 = this;return self__.meta21860;
});
clustermap.components.page_title.t21859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21861,meta21860__$1){var self__ = this;
var _21861__$1 = this;return (new clustermap.components.page_title.t21859(self__.name,self__.type,self__.comm,self__.owner,self__.selection,self__.page_title_component,meta21860__$1));
});
clustermap.components.page_title.__GT_t21859 = (function __GT_t21859(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta21860){return (new clustermap.components.page_title.t21859(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta21860));
});
}
return (new clustermap.components.page_title.t21859(name,type,comm,owner,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,comm], null),clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$264),document.getElementById(elem_id));
});
