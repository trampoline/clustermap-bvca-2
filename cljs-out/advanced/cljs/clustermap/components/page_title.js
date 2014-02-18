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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__22895 = cljs.core._EQ_;var expr__22896 = type;if(cljs.core.truth_((pred__22895.cljs$core$IFn$_invoke$arity$2 ? pred__22895.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$303,expr__22896) : pred__22895.call(null,cljs.core.constant$keyword$303,expr__22896))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__22895.cljs$core$IFn$_invoke$arity$2 ? pred__22895.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$304,expr__22896) : pred__22895.call(null,cljs.core.constant$keyword$304,expr__22896))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__22895.cljs$core$IFn$_invoke$arity$2 ? pred__22895.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$305,expr__22896) : pred__22895.call(null,cljs.core.constant$keyword$305,expr__22896))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22896)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$306);var type = (function (){var G__22906 = selection;var G__22906__$1 = (((G__22906 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__22906));var G__22906__$2 = (((G__22906__$1 == null))?null:clustermap.components.page_title.describe_type(G__22906__$1));return G__22906__$2;
})();var name = (function (){var G__22907 = selection;var G__22907__$1 = (((G__22907 == null))?null:cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(G__22907));var G__22907__$2 = (((G__22907__$1 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__22907__$1));return G__22907__$2;
})();var url = (function (){var G__22908 = selection;var G__22908__$1 = (((G__22908 == null))?null:cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(G__22908));var G__22908__$2 = (((G__22908__$1 == null))?null:cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(G__22908__$1));return G__22908__$2;
})();if(typeof clustermap.components.page_title.t22909 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t22909 = (function (url,name,type,comm,owner,selection,page_title_component,meta22910){
this.url = url;
this.name = name;
this.type = type;
this.comm = comm;
this.owner = owner;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta22910 = meta22910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t22909.cljs$lang$type = true;
clustermap.components.page_title.t22909.cljs$lang$ctorStr = "clustermap.components.page-title/t22909";
clustermap.components.page_title.t22909.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t22909");
});
clustermap.components.page_title.t22909.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t22909.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,"map"], null));
})},"View on map"),(function (){var attrs22912 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs22912))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22912),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22912));
}
})(),(function (){var attrs22913 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs22913))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22913),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22913));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t22909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22911){var self__ = this;
var _22911__$1 = this;return self__.meta22910;
});
clustermap.components.page_title.t22909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22911,meta22910__$1){var self__ = this;
var _22911__$1 = this;return (new clustermap.components.page_title.t22909(self__.url,self__.name,self__.type,self__.comm,self__.owner,self__.selection,self__.page_title_component,meta22910__$1));
});
clustermap.components.page_title.__GT_t22909 = (function __GT_t22909(url__$1,name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta22910){return (new clustermap.components.page_title.t22909(url__$1,name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta22910));
});
}
return (new clustermap.components.page_title.t22909(url,name,type,comm,owner,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$309),document.getElementById(elem_id));
});
