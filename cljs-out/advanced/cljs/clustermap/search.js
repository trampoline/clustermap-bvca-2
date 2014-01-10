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
clustermap.search.search_result_link = (function search_result_link(search_result,owner,opts){if(typeof clustermap.search.t19808 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t19808 = (function (opts,owner,search_result,search_result_link,meta19809){
this.opts = opts;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta19809 = meta19809;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t19808.cljs$lang$type = true;
clustermap.search.t19808.cljs$lang$ctorStr = "clustermap.search/t19808";
clustermap.search.t19808.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.search/t19808");
});
clustermap.search.t19808.prototype.om$core$IRender$ = true;
clustermap.search.t19808.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.li({},React.DOM.a({},(self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1("name") : self__.search_result.call(null,"name"))));
});
clustermap.search.t19808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19810){var self__ = this;
var _19810__$1 = this;return self__.meta19809;
});
clustermap.search.t19808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19810,meta19809__$1){var self__ = this;
var _19810__$1 = this;return (new clustermap.search.t19808(self__.opts,self__.owner,self__.search_result,self__.search_result_link,meta19809__$1));
});
clustermap.search.__GT_t19808 = (function __GT_t19808(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta19809){return (new clustermap.search.t19808(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta19809));
});
}
return (new clustermap.search.t19808(opts,owner,search_result,search_result_link,null));
});
clustermap.search.search_box = (function search_box(comm,p__19811,owner){var map__19817 = p__19811;var map__19817__$1 = ((cljs.core.seq_QMARK_(map__19817))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19817):map__19817);var data = map__19817__$1;var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19817__$1,cljs.core.constant$keyword$173);var map__19818 = search_results;var map__19818__$1 = ((cljs.core.seq_QMARK_(map__19818))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19818):map__19818);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19818__$1,"investor_companies");var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19818__$1,"portfolio_companies");var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19818__$1,"constituencies");if(typeof clustermap.search.t19819 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t19819 = (function (investor_companies,search_box,portfolio_companies,data,map__19818,map__19817,comm,p__19811,owner,constituencies,search_results,meta19820){
this.investor_companies = investor_companies;
this.search_box = search_box;
this.portfolio_companies = portfolio_companies;
this.data = data;
this.map__19818 = map__19818;
this.map__19817 = map__19817;
this.comm = comm;
this.p__19811 = p__19811;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta19820 = meta19820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t19819.cljs$lang$type = true;
clustermap.search.t19819.cljs$lang$ctorStr = "clustermap.search/t19819";
clustermap.search.t19819.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.search/t19819");
});
clustermap.search.t19819.prototype.om$core$IRender$ = true;
clustermap.search.t19819.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
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
clustermap.search.t19819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19821){var self__ = this;
var _19821__$1 = this;return self__.meta19820;
});
clustermap.search.t19819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19821,meta19820__$1){var self__ = this;
var _19821__$1 = this;return (new clustermap.search.t19819(self__.investor_companies,self__.search_box,self__.portfolio_companies,self__.data,self__.map__19818,self__.map__19817,self__.comm,self__.p__19811,self__.owner,self__.constituencies,self__.search_results,meta19820__$1));
});
clustermap.search.__GT_t19819 = (function __GT_t19819(investor_companies__$1,search_box__$1,portfolio_companies__$1,data__$1,map__19818__$2,map__19817__$2,comm__$1,p__19811__$1,owner__$1,constituencies__$1,search_results__$1,meta19820){return (new clustermap.search.t19819(investor_companies__$1,search_box__$1,portfolio_companies__$1,data__$1,map__19818__$2,map__19817__$2,comm__$1,p__19811__$1,owner__$1,constituencies__$1,search_results__$1,meta19820));
});
}
return (new clustermap.search.t19819(investor_companies,search_box,portfolio_companies,data,map__19818__$1,map__19817__$1,comm,p__19811,owner,constituencies,search_results,null));
});
clustermap.search.mount = (function mount(app_state,elem_id,comm){return om.core.root(app_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.search.search_box,comm),document.getElementById(elem_id));
});
