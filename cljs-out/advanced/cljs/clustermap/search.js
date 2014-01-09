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
clustermap.search.search_result_link = (function search_result_link(search_result,owner,opts){if(typeof clustermap.search.t19722 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t19722 = (function (opts,owner,search_result,search_result_link,meta19723){
this.opts = opts;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta19723 = meta19723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t19722.cljs$lang$type = true;
clustermap.search.t19722.cljs$lang$ctorStr = "clustermap.search/t19722";
clustermap.search.t19722.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.search/t19722");
});
clustermap.search.t19722.prototype.om$core$IRender$ = true;
clustermap.search.t19722.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.li(null,React.DOM.a(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$173,"#"], null),(self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1("name") : self__.search_result.call(null,"name")),React.DOM.small(null,[cljs.core.str(" ("),cljs.core.str(cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(self__.opts)),cljs.core.str(")")].join(''))));
});
clustermap.search.t19722.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19724){var self__ = this;
var _19724__$1 = this;return self__.meta19723;
});
clustermap.search.t19722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19724,meta19723__$1){var self__ = this;
var _19724__$1 = this;return (new clustermap.search.t19722(self__.opts,self__.owner,self__.search_result,self__.search_result_link,meta19723__$1));
});
clustermap.search.__GT_t19722 = (function __GT_t19722(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta19723){return (new clustermap.search.t19722(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta19723));
});
}
return (new clustermap.search.t19722(opts,owner,search_result,search_result_link,null));
});
clustermap.search.search_box = (function search_box(comm,p__19725,owner){var map__19731 = p__19725;var map__19731__$1 = ((cljs.core.seq_QMARK_(map__19731))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19731):map__19731);var data = map__19731__$1;var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19731__$1,cljs.core.constant$keyword$174);var map__19732 = search_results;var map__19732__$1 = ((cljs.core.seq_QMARK_(map__19732))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19732):map__19732);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19732__$1,"investor_companies");var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19732__$1,"portfolio_companies");var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19732__$1,"constituencies");if(typeof clustermap.search.t19733 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t19733 = (function (investor_companies,search_box,map__19731,portfolio_companies,map__19732,data,p__19725,comm,owner,constituencies,search_results,meta19734){
this.investor_companies = investor_companies;
this.search_box = search_box;
this.map__19731 = map__19731;
this.portfolio_companies = portfolio_companies;
this.map__19732 = map__19732;
this.data = data;
this.p__19725 = p__19725;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta19734 = meta19734;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t19733.cljs$lang$type = true;
clustermap.search.t19733.cljs$lang$ctorStr = "clustermap.search/t19733";
clustermap.search.t19733.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.search/t19733");
});
clustermap.search.t19733.prototype.om$core$IRender$ = true;
clustermap.search.t19733.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div({"id": "search"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text"})),React.DOM.button({"type": "reset"},"\u00D7")),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?React.DOM.div({"id": "results"},React.DOM.ul(null,om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.search.search_result_link,self__.constituencies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$176,self__.comm,cljs.core.constant$keyword$142,"Constituency"], null)], null))),React.DOM.ul(null,om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.search.search_result_link,self__.portfolio_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$176,self__.comm,cljs.core.constant$keyword$142,"Company"], null)], null))),React.DOM.ul(null,om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.search.search_result_link,self__.investor_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$171,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$176,self__.comm,cljs.core.constant$keyword$142,"Investor"], null)], null)))):null));
});
clustermap.search.t19733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19735){var self__ = this;
var _19735__$1 = this;return self__.meta19734;
});
clustermap.search.t19733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19735,meta19734__$1){var self__ = this;
var _19735__$1 = this;return (new clustermap.search.t19733(self__.investor_companies,self__.search_box,self__.map__19731,self__.portfolio_companies,self__.map__19732,self__.data,self__.p__19725,self__.comm,self__.owner,self__.constituencies,self__.search_results,meta19734__$1));
});
clustermap.search.__GT_t19733 = (function __GT_t19733(investor_companies__$1,search_box__$1,map__19731__$2,portfolio_companies__$1,map__19732__$2,data__$1,p__19725__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta19734){return (new clustermap.search.t19733(investor_companies__$1,search_box__$1,map__19731__$2,portfolio_companies__$1,map__19732__$2,data__$1,p__19725__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta19734));
});
}
return (new clustermap.search.t19733(investor_companies,search_box,map__19731__$1,portfolio_companies,map__19732__$1,data,p__19725,comm,owner,constituencies,search_results,null));
});
clustermap.search.mount = (function mount(app_state,elem_id,comm){return om.core.root(app_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.search.search_box,comm),document.getElementById(elem_id));
});
