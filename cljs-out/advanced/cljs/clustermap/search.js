// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.search');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
clustermap.search.search_result_link = (function search_result_link(search_result,owner,opts){if(typeof clustermap.search.t19859 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t19859 = (function (opts,owner,search_result,search_result_link,meta19860){
this.opts = opts;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta19860 = meta19860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t19859.cljs$lang$type = true;
clustermap.search.t19859.cljs$lang$ctorStr = "clustermap.search/t19859";
clustermap.search.t19859.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.search/t19859");
});
clustermap.search.t19859.prototype.om$core$IRender$ = true;
clustermap.search.t19859.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.li({},React.DOM.a({},(self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1("name") : self__.search_result.call(null,"name"))));
});
clustermap.search.t19859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19861){var self__ = this;
var _19861__$1 = this;return self__.meta19860;
});
clustermap.search.t19859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19861,meta19860__$1){var self__ = this;
var _19861__$1 = this;return (new clustermap.search.t19859(self__.opts,self__.owner,self__.search_result,self__.search_result_link,meta19860__$1));
});
clustermap.search.__GT_t19859 = (function __GT_t19859(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta19860){return (new clustermap.search.t19859(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta19860));
});
}
return (new clustermap.search.t19859(opts,owner,search_result,search_result_link,null));
});
clustermap.search.search_box = (function search_box(comm,p__19862,owner){var map__19868 = p__19862;var map__19868__$1 = ((cljs.core.seq_QMARK_(map__19868))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19868):map__19868);var data = map__19868__$1;var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19868__$1,cljs.core.constant$keyword$173);var map__19869 = search_results;var map__19869__$1 = ((cljs.core.seq_QMARK_(map__19869))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19869):map__19869);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19869__$1,"investor_companies");var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19869__$1,"portfolio_companies");var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19869__$1,"constituencies");if(typeof clustermap.search.t19870 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t19870 = (function (investor_companies,search_box,p__19862,portfolio_companies,map__19868,data,map__19869,comm,owner,constituencies,search_results,meta19871){
this.investor_companies = investor_companies;
this.search_box = search_box;
this.p__19862 = p__19862;
this.portfolio_companies = portfolio_companies;
this.map__19868 = map__19868;
this.data = data;
this.map__19869 = map__19869;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta19871 = meta19871;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t19870.cljs$lang$type = true;
clustermap.search.t19870.cljs$lang$ctorStr = "clustermap.search/t19870";
clustermap.search.t19870.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.search/t19870");
});
clustermap.search.t19870.prototype.om$core$IRender$ = true;
clustermap.search.t19870.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div({"id": "search"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$174,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$174,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text"})),React.DOM.button({"type": "reset"},"\u00D7")),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(self__.constituencies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.search.search_result_link,self__.constituencies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$175,self__.comm,cljs.core.constant$keyword$142,"Constituency"], null)], null))], null):null),(cljs.core.truth_(cljs.core.not_empty(self__.portfolio_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.search.search_result_link,self__.portfolio_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$175,self__.comm,cljs.core.constant$keyword$142,"Company"], null)], null))], null):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(self__.investor_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.search.search_result_link,self__.investor_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$175,self__.comm,cljs.core.constant$keyword$142,"Investor"], null)], null))], null):null)], 0)))):null));
});
clustermap.search.t19870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19872){var self__ = this;
var _19872__$1 = this;return self__.meta19871;
});
clustermap.search.t19870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19872,meta19871__$1){var self__ = this;
var _19872__$1 = this;return (new clustermap.search.t19870(self__.investor_companies,self__.search_box,self__.p__19862,self__.portfolio_companies,self__.map__19868,self__.data,self__.map__19869,self__.comm,self__.owner,self__.constituencies,self__.search_results,meta19871__$1));
});
clustermap.search.__GT_t19870 = (function __GT_t19870(investor_companies__$1,search_box__$1,p__19862__$1,portfolio_companies__$1,map__19868__$2,data__$1,map__19869__$2,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta19871){return (new clustermap.search.t19870(investor_companies__$1,search_box__$1,p__19862__$1,portfolio_companies__$1,map__19868__$2,data__$1,map__19869__$2,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta19871));
});
}
return (new clustermap.search.t19870(investor_companies,search_box,p__19862,portfolio_companies,map__19868__$1,data,map__19869__$1,comm,owner,constituencies,search_results,null));
});
clustermap.search.mount = (function mount(app_state,elem_id,comm){return om.core.root(app_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.search.search_box,comm),document.getElementById(elem_id));
});
