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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__34585 = cljs.core._EQ_;var expr__34586 = type;if(cljs.core.truth_((pred__34585.cljs$core$IFn$_invoke$arity$2 ? pred__34585.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$627,expr__34586) : pred__34585.call(null,cljs.core.constant$keyword$627,expr__34586))))
{return "Investor-backed company";
} else
{if(cljs.core.truth_((pred__34585.cljs$core$IFn$_invoke$arity$2 ? pred__34585.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$628,expr__34586) : pred__34585.call(null,cljs.core.constant$keyword$628,expr__34586))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__34585.cljs$core$IFn$_invoke$arity$2 ? pred__34585.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34586) : pred__34585.call(null,cljs.core.constant$keyword$629,expr__34586))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34586)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__34588,owner){var map__34599 = p__34588;var map__34599__$1 = ((cljs.core.seq_QMARK_(map__34599))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34599):map__34599);var selection = map__34599__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34599__$1,cljs.core.constant$keyword$543);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34599__$1,cljs.core.constant$keyword$582);var map__34600 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34600__$1 = ((cljs.core.seq_QMARK_(map__34600))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34600):map__34600);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34600__$1,cljs.core.constant$keyword$630);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34600__$1,cljs.core.constant$keyword$631);var type_descr = (function (){var G__34601 = selection;var G__34601__$1 = (((G__34601 == null))?null:cljs.core.constant$keyword$582.cljs$core$IFn$_invoke$arity$1(G__34601));var G__34601__$2 = (((G__34601__$1 == null))?null:clustermap.components.page_title.describe_type(G__34601__$1));return G__34601__$2;
})();var name = (function (){var G__34602 = selection;var G__34602__$1 = (((G__34602 == null))?null:cljs.core.constant$keyword$543.cljs$core$IFn$_invoke$arity$1(G__34602));var G__34602__$2 = (((G__34602__$1 == null))?null:cljs.core.constant$keyword$592.cljs$core$IFn$_invoke$arity$1(G__34602__$1));return G__34602__$2;
})();var url = (function (){var G__34603 = selection;var G__34603__$1 = (((G__34603 == null))?null:cljs.core.constant$keyword$543.cljs$core$IFn$_invoke$arity$1(G__34603));var G__34603__$2 = (((G__34603__$1 == null))?null:cljs.core.constant$keyword$632.cljs$core$IFn$_invoke$arity$1(G__34603__$1));return G__34603__$2;
})();if(typeof clustermap.components.page_title.t34604 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t34604 = (function (value,path_fn,p__34588,type_descr,map__34600,selection,name,comm,page_title_component,owner,map__34599,url,type,meta34605){
this.value = value;
this.path_fn = path_fn;
this.p__34588 = p__34588;
this.type_descr = type_descr;
this.map__34600 = map__34600;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.owner = owner;
this.map__34599 = map__34599;
this.url = url;
this.type = type;
this.meta34605 = meta34605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t34604.cljs$lang$type = true;
clustermap.components.page_title.t34604.cljs$lang$ctorStr = "clustermap.components.page-title/t34604";
clustermap.components.page_title.t34604.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.page-title/t34604");
});
clustermap.components.page_title.t34604.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t34604.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,"map"], null));
})},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs34607 = (function (){var or__3441__auto__ = self__.type_descr;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "All investor-backed companies";
}
})();if(cljs.core.map_QMARK_(attrs34607))
{return React.DOM.h2(sablono.interpreter.attributes(attrs34607),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs34607));
}
})(),(function (){var attrs34608 = (function (){var or__3441__auto__ = self__.name;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs34608))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34608),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$629))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$634,"\u00A0(",cljs.core.constant$keyword$635.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$636.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34608),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$629))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$634,"\u00A0(",cljs.core.constant$keyword$635.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$636.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t34604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34606){var self__ = this;
var _34606__$1 = this;return self__.meta34605;
});
clustermap.components.page_title.t34604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34606,meta34605__$1){var self__ = this;
var _34606__$1 = this;return (new clustermap.components.page_title.t34604(self__.value,self__.path_fn,self__.p__34588,self__.type_descr,self__.map__34600,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.owner,self__.map__34599,self__.url,self__.type,meta34605__$1));
});
clustermap.components.page_title.__GT_t34604 = (function __GT_t34604(value__$1,path_fn__$1,p__34588__$1,type_descr__$1,map__34600__$2,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,map__34599__$2,url__$1,type__$1,meta34605){return (new clustermap.components.page_title.t34604(value__$1,path_fn__$1,p__34588__$1,type_descr__$1,map__34600__$2,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,map__34599__$2,url__$1,type__$1,meta34605));
});
}
return (new clustermap.components.page_title.t34604(value,path_fn,p__34588,type_descr,map__34600__$1,selection,name,comm,page_title_component,owner,map__34599__$1,url,type,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$637),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,shared,cljs.core.constant$keyword$622,document.getElementById(elem_id)], null));
});
