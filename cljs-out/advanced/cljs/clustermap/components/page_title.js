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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__22981 = cljs.core._EQ_;var expr__22982 = type;if(cljs.core.truth_((pred__22981.cljs$core$IFn$_invoke$arity$2 ? pred__22981.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,expr__22982) : pred__22981.call(null,cljs.core.constant$keyword$310,expr__22982))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__22981.cljs$core$IFn$_invoke$arity$2 ? pred__22981.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$311,expr__22982) : pred__22981.call(null,cljs.core.constant$keyword$311,expr__22982))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__22981.cljs$core$IFn$_invoke$arity$2 ? pred__22981.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$312,expr__22982) : pred__22981.call(null,cljs.core.constant$keyword$312,expr__22982))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22982)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__22984,owner){var map__22994 = p__22984;var map__22994__$1 = ((cljs.core.seq_QMARK_(map__22994))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22994):map__22994);var selection = map__22994__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22994__$1,cljs.core.constant$keyword$242);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22994__$1,cljs.core.constant$keyword$277);var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$313);var type_descr = (function (){var G__22995 = selection;var G__22995__$1 = (((G__22995 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__22995));var G__22995__$2 = (((G__22995__$1 == null))?null:clustermap.components.page_title.describe_type(G__22995__$1));return G__22995__$2;
})();var name = (function (){var G__22996 = selection;var G__22996__$1 = (((G__22996 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__22996));var G__22996__$2 = (((G__22996__$1 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__22996__$1));return G__22996__$2;
})();var url = (function (){var G__22997 = selection;var G__22997__$1 = (((G__22997 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__22997));var G__22997__$2 = (((G__22997__$1 == null))?null:cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(G__22997__$1));return G__22997__$2;
})();if(typeof clustermap.components.page_title.t22998 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t22998 = (function (value,map__22994,type_descr,selection,name,comm,page_title_component,owner,p__22984,url,type,meta22999){
this.value = value;
this.map__22994 = map__22994;
this.type_descr = type_descr;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.owner = owner;
this.p__22984 = p__22984;
this.url = url;
this.type = type;
this.meta22999 = meta22999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t22998.cljs$lang$type = true;
clustermap.components.page_title.t22998.cljs$lang$ctorStr = "clustermap.components.page-title/t22998";
clustermap.components.page_title.t22998.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t22998");
});
clustermap.components.page_title.t22998.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t22998.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,"map"], null));
})},"View on map"),(function (){var attrs23001 = (function (){var or__3406__auto__ = self__.type_descr;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs23001))
{return React.DOM.h2(sablono.interpreter.attributes(attrs23001),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs23001));
}
})(),(function (){var attrs23002 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs23002))
{return React.DOM.h3(sablono.interpreter.attributes(attrs23002),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$312))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$316,"\u00A0(",cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs23002),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$312))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$316,"\u00A0(",cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t22998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23000){var self__ = this;
var _23000__$1 = this;return self__.meta22999;
});
clustermap.components.page_title.t22998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23000,meta22999__$1){var self__ = this;
var _23000__$1 = this;return (new clustermap.components.page_title.t22998(self__.value,self__.map__22994,self__.type_descr,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.owner,self__.p__22984,self__.url,self__.type,meta22999__$1));
});
clustermap.components.page_title.__GT_t22998 = (function __GT_t22998(value__$1,map__22994__$2,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,p__22984__$1,url__$1,type__$1,meta22999){return (new clustermap.components.page_title.t22998(value__$1,map__22994__$2,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,p__22984__$1,url__$1,type__$1,meta22999));
});
}
return (new clustermap.components.page_title.t22998(value,map__22994__$1,type_descr,selection,name,comm,page_title_component,owner,p__22984,url,type,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$319),document.getElementById(elem_id));
});
