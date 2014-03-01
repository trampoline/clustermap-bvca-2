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
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('clustermap.formats.number');
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__23438 = cljs.core._EQ_;var expr__23439 = type;if(cljs.core.truth_((pred__23438.cljs$core$IFn$_invoke$arity$2 ? pred__23438.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$338,expr__23439) : pred__23438.call(null,cljs.core.constant$keyword$338,expr__23439))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__23438.cljs$core$IFn$_invoke$arity$2 ? pred__23438.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$339,expr__23439) : pred__23438.call(null,cljs.core.constant$keyword$339,expr__23439))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__23438.cljs$core$IFn$_invoke$arity$2 ? pred__23438.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$340,expr__23439) : pred__23438.call(null,cljs.core.constant$keyword$340,expr__23439))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__23439)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__23441,owner){var map__23452 = p__23441;var map__23452__$1 = ((cljs.core.seq_QMARK_(map__23452))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23452):map__23452);var selection = map__23452__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23452__$1,cljs.core.constant$keyword$266);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23452__$1,cljs.core.constant$keyword$305);var map__23453 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23453__$1 = ((cljs.core.seq_QMARK_(map__23453))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23453):map__23453);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23453__$1,cljs.core.constant$keyword$341);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23453__$1,cljs.core.constant$keyword$342);var type_descr = (function (){var G__23454 = selection;var G__23454__$1 = (((G__23454 == null))?null:cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(G__23454));var G__23454__$2 = (((G__23454__$1 == null))?null:clustermap.components.page_title.describe_type(G__23454__$1));return G__23454__$2;
})();var name = (function (){var G__23455 = selection;var G__23455__$1 = (((G__23455 == null))?null:cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(G__23455));var G__23455__$2 = (((G__23455__$1 == null))?null:cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(G__23455__$1));return G__23455__$2;
})();var url = (function (){var G__23456 = selection;var G__23456__$1 = (((G__23456 == null))?null:cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(G__23456));var G__23456__$2 = (((G__23456__$1 == null))?null:cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(G__23456__$1));return G__23456__$2;
})();if(typeof clustermap.components.page_title.t23457 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t23457 = (function (value,path_fn,type_descr,selection,name,comm,page_title_component,map__23452,map__23453,owner,p__23441,url,type,meta23458){
this.value = value;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.map__23452 = map__23452;
this.map__23453 = map__23453;
this.owner = owner;
this.p__23441 = p__23441;
this.url = url;
this.type = type;
this.meta23458 = meta23458;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t23457.cljs$lang$type = true;
clustermap.components.page_title.t23457.cljs$lang$ctorStr = "clustermap.components.page-title/t23457";
clustermap.components.page_title.t23457.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.page-title/t23457");
});
clustermap.components.page_title.t23457.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t23457.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$344,"map"], null));
})},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs23460 = (function (){var or__3406__auto__ = self__.type_descr;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs23460))
{return React.DOM.h2(sablono.interpreter.attributes(attrs23460),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs23460));
}
})(),(function (){var attrs23461 = (function (){var or__3406__auto__ = self__.name;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs23461))
{return React.DOM.h3(sablono.interpreter.attributes(attrs23461),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$340))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$345,"\u00A0(",cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs23461),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$340))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$345,"\u00A0(",cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t23457.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23459){var self__ = this;
var _23459__$1 = this;return self__.meta23458;
});
clustermap.components.page_title.t23457.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23459,meta23458__$1){var self__ = this;
var _23459__$1 = this;return (new clustermap.components.page_title.t23457(self__.value,self__.path_fn,self__.type_descr,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.map__23452,self__.map__23453,self__.owner,self__.p__23441,self__.url,self__.type,meta23458__$1));
});
clustermap.components.page_title.__GT_t23457 = (function __GT_t23457(value__$1,path_fn__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,map__23452__$2,map__23453__$2,owner__$1,p__23441__$1,url__$1,type__$1,meta23458){return (new clustermap.components.page_title.t23457(value__$1,path_fn__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,map__23452__$2,map__23453__$2,owner__$1,p__23441__$1,url__$1,type__$1,meta23458));
});
}
return (new clustermap.components.page_title.t23457(value,path_fn,type_descr,selection,name,comm,page_title_component,map__23452__$1,map__23453__$1,owner,p__23441,url,type,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$348),document.getElementById(elem_id));
});
