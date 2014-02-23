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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__22973 = cljs.core._EQ_;var expr__22974 = type;if(cljs.core.truth_((pred__22973.cljs$core$IFn$_invoke$arity$2 ? pred__22973.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,expr__22974) : pred__22973.call(null,cljs.core.constant$keyword$310,expr__22974))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__22973.cljs$core$IFn$_invoke$arity$2 ? pred__22973.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$311,expr__22974) : pred__22973.call(null,cljs.core.constant$keyword$311,expr__22974))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__22973.cljs$core$IFn$_invoke$arity$2 ? pred__22973.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$312,expr__22974) : pred__22973.call(null,cljs.core.constant$keyword$312,expr__22974))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__22974)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__22976,owner){var map__22986 = p__22976;var map__22986__$1 = ((cljs.core.seq_QMARK_(map__22986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22986):map__22986);var selection = map__22986__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22986__$1,cljs.core.constant$keyword$242);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22986__$1,cljs.core.constant$keyword$277);var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$313);var type_descr = (function (){var G__22987 = selection;var G__22987__$1 = (((G__22987 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__22987));var G__22987__$2 = (((G__22987__$1 == null))?null:clustermap.components.page_title.describe_type(G__22987__$1));return G__22987__$2;
})();var name = (function (){var G__22988 = selection;var G__22988__$1 = (((G__22988 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__22988));var G__22988__$2 = (((G__22988__$1 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__22988__$1));return G__22988__$2;
})();var url = (function (){var G__22989 = selection;var G__22989__$1 = (((G__22989 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__22989));var G__22989__$2 = (((G__22989__$1 == null))?null:cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(G__22989__$1));return G__22989__$2;
})();if(typeof clustermap.components.page_title.t22990 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t22990 = (function (p__22976,value,type_descr,map__22986,selection,name,comm,page_title_component,owner,url,type,meta22991){
this.p__22976 = p__22976;
this.value = value;
this.type_descr = type_descr;
this.map__22986 = map__22986;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.owner = owner;
this.url = url;
this.type = type;
this.meta22991 = meta22991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t22990.cljs$lang$type = true;
clustermap.components.page_title.t22990.cljs$lang$ctorStr = "clustermap.components.page-title/t22990";
clustermap.components.page_title.t22990.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t22990");
});
clustermap.components.page_title.t22990.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t22990.prototype.om$core$IRender$render$arity$1 = (function (this__9216__auto__){var self__ = this;
var this__9216__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$315,"map"], null));
})},"View on map"),(function (){var attrs22993 = (function (){var or__3406__auto__ = self__.type_descr;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs22993))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22993),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22993));
}
})(),(function (){var attrs22994 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs22994))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22994),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$312))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$316,"\u00A0(",cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22994),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$312))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$316,"\u00A0(",cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t22990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22992){var self__ = this;
var _22992__$1 = this;return self__.meta22991;
});
clustermap.components.page_title.t22990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22992,meta22991__$1){var self__ = this;
var _22992__$1 = this;return (new clustermap.components.page_title.t22990(self__.p__22976,self__.value,self__.type_descr,self__.map__22986,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.owner,self__.url,self__.type,meta22991__$1));
});
clustermap.components.page_title.__GT_t22990 = (function __GT_t22990(p__22976__$1,value__$1,type_descr__$1,map__22986__$2,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,url__$1,type__$1,meta22991){return (new clustermap.components.page_title.t22990(p__22976__$1,value__$1,type_descr__$1,map__22986__$2,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,url__$1,type__$1,meta22991));
});
}
return (new clustermap.components.page_title.t22990(p__22976,value,type_descr,map__22986__$1,selection,name,comm,page_title_component,owner,url,type,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$319),document.getElementById(elem_id));
});
