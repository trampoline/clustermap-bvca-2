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
clustermap.components.page_title.describe_type = (function describe_type(type){var pred__34575 = cljs.core._EQ_;var expr__34576 = type;if(cljs.core.truth_((pred__34575.cljs$core$IFn$_invoke$arity$2 ? pred__34575.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$629,expr__34576) : pred__34575.call(null,cljs.core.constant$keyword$629,expr__34576))))
{return "Portfolio Company";
} else
{if(cljs.core.truth_((pred__34575.cljs$core$IFn$_invoke$arity$2 ? pred__34575.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$630,expr__34576) : pred__34575.call(null,cljs.core.constant$keyword$630,expr__34576))))
{return "Investor";
} else
{if(cljs.core.truth_((pred__34575.cljs$core$IFn$_invoke$arity$2 ? pred__34575.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$631,expr__34576) : pred__34575.call(null,cljs.core.constant$keyword$631,expr__34576))))
{return "Constituency";
} else
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34576)].join('')));
}
}
}
});
clustermap.components.page_title.page_title_component = (function page_title_component(p__34578,owner){var map__34589 = p__34578;var map__34589__$1 = ((cljs.core.seq_QMARK_(map__34589))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34589):map__34589);var selection = map__34589__$1;var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34589__$1,cljs.core.constant$keyword$545);var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34589__$1,cljs.core.constant$keyword$584);var map__34590 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34590__$1 = ((cljs.core.seq_QMARK_(map__34590))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34590):map__34590);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34590__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34590__$1,cljs.core.constant$keyword$633);var type_descr = (function (){var G__34591 = selection;var G__34591__$1 = (((G__34591 == null))?null:cljs.core.constant$keyword$584.cljs$core$IFn$_invoke$arity$1(G__34591));var G__34591__$2 = (((G__34591__$1 == null))?null:clustermap.components.page_title.describe_type(G__34591__$1));return G__34591__$2;
})();var name = (function (){var G__34592 = selection;var G__34592__$1 = (((G__34592 == null))?null:cljs.core.constant$keyword$545.cljs$core$IFn$_invoke$arity$1(G__34592));var G__34592__$2 = (((G__34592__$1 == null))?null:cljs.core.constant$keyword$594.cljs$core$IFn$_invoke$arity$1(G__34592__$1));return G__34592__$2;
})();var url = (function (){var G__34593 = selection;var G__34593__$1 = (((G__34593 == null))?null:cljs.core.constant$keyword$545.cljs$core$IFn$_invoke$arity$1(G__34593));var G__34593__$2 = (((G__34593__$1 == null))?null:cljs.core.constant$keyword$634.cljs$core$IFn$_invoke$arity$1(G__34593__$1));return G__34593__$2;
})();if(typeof clustermap.components.page_title.t34594 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.page_title.t34594 = (function (map__34590,value,path_fn,type_descr,selection,name,comm,page_title_component,owner,url,type,map__34589,p__34578,meta34595){
this.map__34590 = map__34590;
this.value = value;
this.path_fn = path_fn;
this.type_descr = type_descr;
this.selection = selection;
this.name = name;
this.comm = comm;
this.page_title_component = page_title_component;
this.owner = owner;
this.url = url;
this.type = type;
this.map__34589 = map__34589;
this.p__34578 = p__34578;
this.meta34595 = meta34595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.page_title.t34594.cljs$lang$type = true;
clustermap.components.page_title.t34594.cljs$lang$ctorStr = "clustermap.components.page-title/t34594";
clustermap.components.page_title.t34594.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.page-title/t34594");
});
clustermap.components.page_title.t34594.prototype.om$core$IRender$ = true;
clustermap.components.page_title.t34594.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.div({"id": "page-title"},React.DOM.button({"className": "btn", "type": "button", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,"map"], null));
})},"View on map"),sablono.interpreter.interpret((cljs.core.truth_(self__.type_descr)?clustermap.components.reset_selection_button.reset_selection_button(self__.path_fn):null)),(function (){var attrs34597 = (function (){var or__3441__auto__ = self__.type_descr;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "All portfolio companies";
}
})();if(cljs.core.map_QMARK_(attrs34597))
{return React.DOM.h2(sablono.interpreter.attributes(attrs34597),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs34597));
}
})(),(function (){var attrs34598 = (function (){var or__3441__auto__ = self__.name;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return "UK wide";
}
})();if(cljs.core.map_QMARK_(attrs34598))
{return React.DOM.h3(sablono.interpreter.attributes(attrs34598),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$631))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,"\u00A0(",cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs34598),sablono.interpreter.interpret(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,cljs.core.constant$keyword$631))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$636,"\u00A0(",cljs.core.constant$keyword$637.cljs$core$IFn$_invoke$arity$1(self__.value),", ",cljs.core.constant$keyword$638.cljs$core$IFn$_invoke$arity$1(self__.value),")"], null):null)));
}
})(),(cljs.core.truth_(self__.url)?React.DOM.a({"href": self__.url, "target": "_blank"},sablono.interpreter.interpret(self__.url)):null));
});
clustermap.components.page_title.t34594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34596){var self__ = this;
var _34596__$1 = this;return self__.meta34595;
});
clustermap.components.page_title.t34594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34596,meta34595__$1){var self__ = this;
var _34596__$1 = this;return (new clustermap.components.page_title.t34594(self__.map__34590,self__.value,self__.path_fn,self__.type_descr,self__.selection,self__.name,self__.comm,self__.page_title_component,self__.owner,self__.url,self__.type,self__.map__34589,self__.p__34578,meta34595__$1));
});
clustermap.components.page_title.__GT_t34594 = (function __GT_t34594(map__34590__$2,value__$1,path_fn__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,url__$1,type__$1,map__34589__$2,p__34578__$1,meta34595){return (new clustermap.components.page_title.t34594(map__34590__$2,value__$1,path_fn__$1,type_descr__$1,selection__$1,name__$1,comm__$1,page_title_component__$1,owner__$1,url__$1,type__$1,map__34589__$2,p__34578__$1,meta34595));
});
}
return (new clustermap.components.page_title.t34594(map__34590__$1,value,path_fn,type_descr,selection,name,comm,page_title_component,owner,url,type,map__34589__$1,p__34578,null));
});
clustermap.components.page_title.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.om.burrow(clustermap.components.page_title.page_title_component,cljs.core.constant$keyword$639),app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
