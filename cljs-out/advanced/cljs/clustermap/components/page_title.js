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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__34659 = cljs.core._EQ_;var expr__34660 = type;if(cljs.core.truth_((pred__34659.cljs$core$IFn$_invoke$arity$2 ? pred__34659.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34660) : pred__34659.call(null,cljs.core.constant$keyword$629,expr__34660))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__34659.cljs$core$IFn$_invoke$arity$2 ? pred__34659.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__34660) : pred__34659.call(null,cljs.core.constant$keyword$630,expr__34660))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__34659.cljs$core$IFn$_invoke$arity$2 ? pred__34659.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34660) : pred__34659.call(null,cljs.core.constant$keyword$631,expr__34660))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34660)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__34662,owner){var map__34673 = p__34662;var map__34673__$1 = ((cljs.core.seq_QMARK_(map__34673))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34673):map__34673);var selection = map__34673__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34673__$1,cljs.core.constant$keyword$545);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34673__$1,cljs.core.constant$keyword$584);var map__34674 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34674__$1 = ((cljs.core.seq_QMARK_(map__34674))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34674):map__34674);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34674__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34674__$1,cljs.core.constant$keyword$633);var type_descr = (function (){var G__34675 = selection;var G__34675__$1 = (((G__34675 == null))?null:cljs.core.constant$keyword$584.cljs$core$IFn$_invoke$arity$1(G__34675));var G__34675__$2 = (((G__34675__$1 == null))?null:clustermap.components.page_title.describe_type(G__34675__$1));return G__34675__$2;
})();var name = (function (){var G__34676 = selection;var G__34676__$1 = (((G__34676 == null))?null:cljs.core.constant$keyword$545.cljs$core$IFn$_invoke$arity$1(G__34676));var G__34676__$2 = (((G__34676__$1 == null))?null:cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(G__34676__$1));return G__34676__$2;
})();var url = (function (){var G__34677 = selection;var G__34677__$1 = (((G__34677 == null))?null:cljs.core.constant$keyword$545.cljs$core$IFn$_invoke$arity$1(G__34677));var G__34677__$2 = (((G__34677__$1 == null))?null:cljs.core.constant$keyword$634.cljs$core$IFn$_invoke$arity$1(G__34677__$1));return G__34677__$2;
})();if(typeof clustermap.components.page_title.t34678 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t34678 = (function (p__34662,value,path_fn,type_descr,selection,name,comm,page_title_component,owner,map__34674,map__34673,url,type,meta34679){
this.p__34662 = p__34662;
this.value = value;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.owner = owner;
this.map__34674 = map__34674;
this.map__34673 = map__34673;
this.url = url;
this.type = type;
this.meta34679 = meta34679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t34678.cljs$lang$type = true;
clustermap.components.page_title.t34678.cljs$lang$ctorStr = "clustermap.components.page-title/t34678";
clustermap.components.page_title.t34678.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.page-title/t34678");
});
clustermap.components.page_title.t34678.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t34678.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,"map"], null));
})},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs34681 = (function (){var or__3441__auto__ = self__.type_descr;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs34681))
{return React.DOM.h2(sablono.interpreter.attributes(attrs34681),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs34681));
}
})(),(function (){var attrs34682 = (function (){var or__3441__auto__ = self__.name;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs34682))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34682),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$631))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,"\u00A0(",cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34682),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$631))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,"\u00A0(",cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t34678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34680){var self__ = this;
var _34680__$1 = this;return self__.meta34679;
});
clustermap.components.page_title.t34678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34680,meta34679__$1){var self__ = this;
var _34680__$1 = this;return (new clustermap.components.page_title.t34678(self__.p__34662,self__.value,self__.path_fn,self__.type_descr,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.owner,self__.map__34674,self__.map__34673,self__.url,self__.type,meta34679__$1));
});
clustermap.components.page_title.__GT_t34678 = (function __GT_t34678(p__34662__$1,value__$1,path_fn__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,map__34674__$2,map__34673__$2,url__$1,type__$1,meta34679){return (new clustermap.components.page_title.t34678(p__34662__$1,value__$1,path_fn__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,map__34674__$2,map__34673__$2,url__$1,type__$1,meta34679));
});
}
return (new clustermap.components.page_title.t34678(p__34662,value,path_fn,type_descr,selection,name,comm,page_title_component,owner,map__34674__$1,map__34673__$1,url,type,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$639),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
