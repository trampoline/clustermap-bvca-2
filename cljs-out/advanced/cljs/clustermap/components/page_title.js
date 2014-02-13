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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__22130 = cljs.core._EQ_;var expr__22131 = type;if(cljs.core.truth_((pred__22130.cljs$core$IFn$_invoke$arity$2 ? pred__22130.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,expr__22131) : pred__22130.call(null,cljs.core.constant$keyword$275,expr__22131))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__22130.cljs$core$IFn$_invoke$arity$2 ? pred__22130.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$276,expr__22131) : pred__22130.call(null,cljs.core.constant$keyword$276,expr__22131))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__22130.cljs$core$IFn$_invoke$arity$2 ? pred__22130.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$277,expr__22131) : pred__22130.call(null,cljs.core.constant$keyword$277,expr__22131))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22131)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$278);var type = (function (){var G__22140 = selection;var G__22140__$1 = (((G__22140 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__22140));var G__22140__$2 = (((G__22140__$1 == null))?null:clustermap.components.page_title.describe_type(G__22140__$1));return G__22140__$2;
})();var name = (function (){var G__22141 = selection;var G__22141__$1 = (((G__22141 == null))?null:cljs.core.constant$keyword$210.cljs$core$IFn$_invoke$arity$1(G__22141));var G__22141__$2 = (((G__22141__$1 == null))?null:cljs.core.constant$keyword$252.cljs$core$IFn$_invoke$arity$1(G__22141__$1));return G__22141__$2;
})();if(typeof clustermap.components.page_title.t22142 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t22142 = (function (name,type,comm,owner,selection,page_title_component,meta22143){
this.name = name;
this.type = type;
this.comm = comm;
this.owner = owner;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta22143 = meta22143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t22142.cljs$lang$type = true;
clustermap.components.page_title.t22142.cljs$lang$ctorStr = "clustermap.components.page-title/t22142";
clustermap.components.page_title.t22142.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t22142");
});
clustermap.components.page_title.t22142.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t22142.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,"map"], null));
})},"View on map"),(function (){var attrs22145 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs22145))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22145),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22145));
}
})(),(function (){var attrs22146 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs22146))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22146),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22146));
}
})());
});
clustermap.components.page_title.t22142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22144){var self__ = this;
var _22144__$1 = this;return self__.meta22143;
});
clustermap.components.page_title.t22142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22144,meta22143__$1){var self__ = this;
var _22144__$1 = this;return (new clustermap.components.page_title.t22142(self__.name,self__.type,self__.comm,self__.owner,self__.selection,self__.page_title_component,meta22143__$1));
});
clustermap.components.page_title.__GT_t22142 = (function __GT_t22142(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta22143){return (new clustermap.components.page_title.t22142(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta22143));
});
}
return (new clustermap.components.page_title.t22142(name,type,comm,owner,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$280),document.getElementById(elem_id));
});
