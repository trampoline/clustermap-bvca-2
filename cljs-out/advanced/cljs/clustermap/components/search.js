// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('clustermap.om');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
clustermap.components.search.ESCAPE_KEY = 27;
clustermap.components.search.ENTER_KEY = 13;
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__21107){var map__21112 = p__21107;var map__21112__$1 = ((cljs.core.seq_QMARK_(map__21112))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21112):map__21112);var opts = map__21112__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21112__$1,cljs.core.constant$keyword$191);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21112__$1,cljs.core.constant$keyword$263);if(typeof clustermap.components.search.t21113 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21113 = (function (comm,type,opts,map__21112,p__21107,owner,search_result,search_result_link,meta21114){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__21112 = map__21112;
this.p__21107 = p__21107;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta21114 = meta21114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21113.cljs$lang$type = true;
clustermap.components.search.t21113.cljs$lang$ctorStr = "clustermap.components.search/t21113";
clustermap.components.search.t21113.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21113");
});
clustermap.components.search.t21113.prototype.om$core$IRender$ = true;
clustermap.components.search.t21113.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.li({},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,om.core.read.cljs$core$IFn$_invoke$arity$2(self__.search_result,om.core.value)], null)], null));
})},(self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$202) : self__.search_result.call(null,cljs.core.constant$keyword$202))));
});
clustermap.components.search.t21113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21115){var self__ = this;
var _21115__$1 = this;return self__.meta21114;
});
clustermap.components.search.t21113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21115,meta21114__$1){var self__ = this;
var _21115__$1 = this;return (new clustermap.components.search.t21113(self__.comm,self__.type,self__.opts,self__.map__21112,self__.p__21107,self__.owner,self__.search_result,self__.search_result_link,meta21114__$1));
});
clustermap.components.search.__GT_t21113 = (function __GT_t21113(comm__$1,type__$1,opts__$1,map__21112__$2,p__21107__$1,owner__$1,search_result__$1,search_result_link__$1,meta21114){return (new clustermap.components.search.t21113(comm__$1,type__$1,opts__$1,map__21112__$2,p__21107__$1,owner__$1,search_result__$1,search_result_link__$1,meta21114));
});
}
return (new clustermap.components.search.t21113(comm,type,opts,map__21112__$1,p__21107,owner,search_result,search_result_link,null));
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__21120 = cljs.core._EQ__EQ_;var expr__21121 = e.keyCode;if(cljs.core.truth_((pred__21120.cljs$core$IFn$_invoke$arity$2 ? pred__21120.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__21121) : pred__21120.call(null,clustermap.components.search.ESCAPE_KEY,expr__21121))))
{var G__21123 = om.core.get_node(owner,"search-component");var G__21123__$1 = (((G__21123 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21123));var G__21123__$2 = (((G__21123__$1 == null))?null:G__21123__$1.toggle());return G__21123__$2;
} else
{return null;
}
});
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$263);var map__21128 = search_results;var map__21128__$1 = ((cljs.core.seq_QMARK_(map__21128))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21128):map__21128);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.constant$keyword$264);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.constant$keyword$265);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21128__$1,cljs.core.constant$keyword$236);if(typeof clustermap.components.search.t21129 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21129 = (function (constituencies,portfolio_companies,investor_companies,map__21128,comm,owner,search_results,search_component,meta21130){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__21128 = map__21128;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta21130 = meta21130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21129.cljs$lang$type = true;
clustermap.components.search.t21129.cljs$lang$ctorStr = "clustermap.components.search/t21129";
clustermap.components.search.t21129.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21129");
});
clustermap.components.search.t21129.prototype.om$core$IRender$ = true;
clustermap.components.search.t21129.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div({"onKeyDown": om.core.bind.cljs$core$IFn$_invoke$arity$4(clustermap.components.search.key_down,self__.search_results,self__.owner,self__.comm), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$266,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
}), "type": "reset"},"\u00D7")),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(self__.constituencies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.constituencies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,self__.comm,cljs.core.constant$keyword$191,cljs.core.constant$keyword$228], null)], null))], null):null),(cljs.core.truth_(cljs.core.not_empty(self__.portfolio_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.portfolio_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,self__.comm,cljs.core.constant$keyword$191,cljs.core.constant$keyword$226], null)], null))], null):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(self__.investor_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.investor_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$220,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,self__.comm,cljs.core.constant$keyword$191,cljs.core.constant$keyword$227], null)], null))], null):null)], 0)))):null));
});
clustermap.components.search.t21129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21131){var self__ = this;
var _21131__$1 = this;return self__.meta21130;
});
clustermap.components.search.t21129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21131,meta21130__$1){var self__ = this;
var _21131__$1 = this;return (new clustermap.components.search.t21129(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__21128,self__.comm,self__.owner,self__.search_results,self__.search_component,meta21130__$1));
});
clustermap.components.search.__GT_t21129 = (function __GT_t21129(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21128__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21130){return (new clustermap.components.search.t21129(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21128__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21130));
});
}
return (new clustermap.components.search.t21129(constituencies,portfolio_companies,investor_companies,map__21128__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$263,comm], null),clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$267),document.getElementById(elem_id));
});
