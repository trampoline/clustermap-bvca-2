// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.page_title');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__34647 = cljs.core._EQ_;var expr__34648 = type;if(cljs.core.truth_((pred__34647.cljs$core$IFn$_invoke$arity$2 ? pred__34647.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34648) : pred__34647.call(null,cljs.core.constant$keyword$629,expr__34648))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__34647.cljs$core$IFn$_invoke$arity$2 ? pred__34647.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__34648) : pred__34647.call(null,cljs.core.constant$keyword$630,expr__34648))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__34647.cljs$core$IFn$_invoke$arity$2 ? pred__34647.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34648) : pred__34647.call(null,cljs.core.constant$keyword$631,expr__34648))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34648)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__34650,owner){var map__34661 = p__34650;var map__34661__$1 = ((cljs.core.seq_QMARK_(map__34661))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34661):map__34661);var selection = map__34661__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34661__$1,cljs.core.constant$keyword$545);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34661__$1,cljs.core.constant$keyword$584);var map__34662 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34662__$1 = ((cljs.core.seq_QMARK_(map__34662))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34662):map__34662);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34662__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34662__$1,cljs.core.constant$keyword$633);var type_descr = (function (){var G__34663 = selection;var G__34663__$1 = (((G__34663 == null))?null:cljs.core.constant$keyword$584.cljs$core$IFn$_invoke$arity$1(G__34663));var G__34663__$2 = (((G__34663__$1 == null))?null:clustermap.components.page_title.describe_type(G__34663__$1));return G__34663__$2;
})();var name = (function (){var G__34664 = selection;var G__34664__$1 = (((G__34664 == null))?null:cljs.core.constant$keyword$545.cljs$core$IFn$_invoke$arity$1(G__34664));var G__34664__$2 = (((G__34664__$1 == null))?null:cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(G__34664__$1));return G__34664__$2;
})();var url = (function (){var G__34665 = selection;var G__34665__$1 = (((G__34665 == null))?null:cljs.core.constant$keyword$545.cljs$core$IFn$_invoke$arity$1(G__34665));var G__34665__$2 = (((G__34665__$1 == null))?null:cljs.core.constant$keyword$634.cljs$core$IFn$_invoke$arity$1(G__34665__$1));return G__34665__$2;
})();if(typeof clustermap.components.page_title.t34666 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t34666 = (function (value,path_fn,type_descr,selection,name,comm,page_title_component,map__34661,map__34662,owner,p__34650,url,type,meta34667){
this.value = value;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.map__34661 = map__34661;
this.map__34662 = map__34662;
this.owner = owner;
this.p__34650 = p__34650;
this.url = url;
this.type = type;
this.meta34667 = meta34667;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t34666.cljs$lang$type = true;
clustermap.components.page_title.t34666.cljs$lang$ctorStr = "clustermap.components.page-title/t34666";
clustermap.components.page_title.t34666.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.page-title/t34666");
});
clustermap.components.page_title.t34666.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t34666.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,"map"], null));
})},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs34669 = (function (){var or__3441__auto__ = self__.type_descr;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs34669))
{return React.DOM.h2(sablono.interpreter.attributes(attrs34669),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs34669));
}
})(),(function (){var attrs34670 = (function (){var or__3441__auto__ = self__.name;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs34670))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34670),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$631))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,"\u00A0(",cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34670),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$631))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,"\u00A0(",cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t34666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34668){var self__ = this;
var _34668__$1 = this;return self__.meta34667;
});
clustermap.components.page_title.t34666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34668,meta34667__$1){var self__ = this;
var _34668__$1 = this;return (new clustermap.components.page_title.t34666(self__.value,self__.path_fn,self__.type_descr,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.map__34661,self__.map__34662,self__.owner,self__.p__34650,self__.url,self__.type,meta34667__$1));
});
clustermap.components.page_title.__GT_t34666 = (function __GT_t34666(value__$1,path_fn__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,map__34661__$2,map__34662__$2,owner__$1,p__34650__$1,url__$1,type__$1,meta34667){return (new clustermap.components.page_title.t34666(value__$1,path_fn__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,map__34661__$2,map__34662__$2,owner__$1,p__34650__$1,url__$1,type__$1,meta34667));
});
}
return (new clustermap.components.page_title.t34666(value,path_fn,type_descr,selection,name,comm,page_title_component,map__34661__$1,map__34662__$1,owner,p__34650,url,type,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$639),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
