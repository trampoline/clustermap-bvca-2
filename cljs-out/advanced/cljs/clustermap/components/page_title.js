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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__22252 = cljs.core._EQ_;var expr__22253 = type;if(cljs.core.truth_((pred__22252.cljs$core$IFn$_invoke$arity$2 ? pred__22252.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$284,expr__22253) : pred__22252.call(null,cljs.core.constant$keyword$284,expr__22253))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__22252.cljs$core$IFn$_invoke$arity$2 ? pred__22252.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$285,expr__22253) : pred__22252.call(null,cljs.core.constant$keyword$285,expr__22253))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__22252.cljs$core$IFn$_invoke$arity$2 ? pred__22252.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$286,expr__22253) : pred__22252.call(null,cljs.core.constant$keyword$286,expr__22253))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22253)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(selection,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$287);var type = (function (){var G__22262 = selection;var G__22262__$1 = (((G__22262 == null))?null:cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(G__22262));var G__22262__$2 = (((G__22262__$1 == null))?null:clustermap.components.page_title.describe_type(G__22262__$1));return G__22262__$2;
})();var name = (function (){var G__22263 = selection;var G__22263__$1 = (((G__22263 == null))?null:cljs.core.constant$keyword$218.cljs$core$IFn$_invoke$arity$1(G__22263));var G__22263__$2 = (((G__22263__$1 == null))?null:cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(G__22263__$1));return G__22263__$2;
})();if(typeof clustermap.components.page_title.t22264 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t22264 = (function (name,type,comm,owner,selection,page_title_component,meta22265){
this.name = name;
this.type = type;
this.comm = comm;
this.owner = owner;
this.selection = selection;
this.page_title_component = page_title_component;
this.meta22265 = meta22265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t22264.cljs$lang$type = true;
clustermap.components.page_title.t22264.cljs$lang$ctorStr = "clustermap.components.page-title/t22264";
clustermap.components.page_title.t22264.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t22264");
});
clustermap.components.page_title.t22264.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t22264.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$288,"map"], null));
})},"View on map"),(function (){var attrs22267 = (function (){var or__3406__auto__ = self__.type;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs22267))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22267),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22267));
}
})(),(function (){var attrs22268 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs22268))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22268),null);
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22268));
}
})());
});
clustermap.components.page_title.t22264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22266){var self__ = this;
var _22266__$1 = this;return self__.meta22265;
});
clustermap.components.page_title.t22264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22266,meta22265__$1){var self__ = this;
var _22266__$1 = this;return (new clustermap.components.page_title.t22264(self__.name,self__.type,self__.comm,self__.owner,self__.selection,self__.page_title_component,meta22265__$1));
});
clustermap.components.page_title.__GT_t22264 = (function __GT_t22264(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta22265){return (new clustermap.components.page_title.t22264(name__$1,type__$1,comm__$1,owner__$1,selection__$1,page_title_component__$1,meta22265));
});
}
return (new clustermap.components.page_title.t22264(name,type,comm,owner,selection,page_title_component,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$289),document.getElementById(elem_id));
});
