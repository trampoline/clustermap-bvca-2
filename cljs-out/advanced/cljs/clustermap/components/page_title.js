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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__22713 = cljs.core._EQ_;var expr__22714 = type;if(cljs.core.truth_((pred__22713.cljs$core$IFn$_invoke$arity$2 ? pred__22713.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,expr__22714) : pred__22713.call(null,cljs.core.constant$keyword$296,expr__22714))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__22713.cljs$core$IFn$_invoke$arity$2 ? pred__22713.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,expr__22714) : pred__22713.call(null,cljs.core.constant$keyword$297,expr__22714))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__22713.cljs$core$IFn$_invoke$arity$2 ? pred__22713.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$298,expr__22714) : pred__22713.call(null,cljs.core.constant$keyword$298,expr__22714))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22714)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$299);var type = (function (){var G__22723 = selection;var G__22723__$1 = (((G__22723 == null))?null:cljs.core.constant$keyword$263.cljs$core$IFn$_invoke$arity$1(G__22723));var G__22723__$2 = (((G__22723__$1 == null))?null:clustermap.components.page_title.describe_type(G__22723__$1));return G__22723__$2;
})();var name = (function (){var G__22724 = selection;var G__22724__$1 = (((G__22724 == null))?null:cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(G__22724));var G__22724__$2 = (((G__22724__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__22724__$1));return G__22724__$2;
})();if(typeof clustermap.components.page_title.t22725 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t22725 = (function (name,type,comm,owner,selection,page_title_component,meta22726){
this.name = name;
this.type = type;
this.comm = comm;
this.owner = owner;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta22726 = meta22726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t22725.cljs$lang$type = true;
clustermap.components.page_title.t22725.cljs$lang$ctorStr = "clustermap.components.page-title/t22725";
clustermap.components.page_title.t22725.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t22725");
});
clustermap.components.page_title.t22725.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t22725.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$300,"map"], null));
})},"View on map"),(function (){var attrs22728 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs22728))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22728),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22728));
}
})(),(function (){var attrs22729 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs22729))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22729),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22729));
}
})());
});
clustermap.components.page_title.t22725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22727){var self__ = this;
var _22727__$1 = this;return self__.meta22726;
});
clustermap.components.page_title.t22725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22727,meta22726__$1){var self__ = this;
var _22727__$1 = this;return (new clustermap.components.page_title.t22725(self__.name,self__.type,self__.comm,self__.owner,self__.selection,self__.page_title_component,meta22726__$1));
});
clustermap.components.page_title.__GT_t22725 = (function __GT_t22725(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta22726){return (new clustermap.components.page_title.t22725(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta22726));
});
}
return (new clustermap.components.page_title.t22725(name,type,comm,owner,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$301),document.getElementById(elem_id));
});
