// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
clustermap.search.ESCAPE_KEY = 27;
clustermap.search.ENTER_KEY = 13;
clustermap.search.search_result_link = (function search_result_link(search_result,owner,p__20632){var map__20637 = p__20632;var map__20637__$1 = ((cljs.core.seq_QMARK_(map__20637))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20637):map__20637);var opts = map__20637__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637__$1,cljs.core.constant$keyword$153);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20637__$1,cljs.core.constant$keyword$158);if(typeof clustermap.search.t20638 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t20638 = (function (comm,type,opts,map__20637,p__20632,owner,search_result,search_result_link,meta20639){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__20637 = map__20637;
this.p__20632 = p__20632;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta20639 = meta20639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t20638.cljs$lang$type = true;
clustermap.search.t20638.cljs$lang$ctorStr = "clustermap.search/t20638";
clustermap.search.t20638.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.search/t20638");
});
clustermap.search.t20638.prototype.om$core$IRender$ = true;
clustermap.search.t20638.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.li({},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,om.core.read.cljs$core$IFn$_invoke$arity$2(self__.search_result,om.core.value)], null)], null));
})},(self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1("name") : self__.search_result.call(null,"name"))));
});
clustermap.search.t20638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20640){var self__ = this;
var _20640__$1 = this;return self__.meta20639;
});
clustermap.search.t20638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20640,meta20639__$1){var self__ = this;
var _20640__$1 = this;return (new clustermap.search.t20638(self__.comm,self__.type,self__.opts,self__.map__20637,self__.p__20632,self__.owner,self__.search_result,self__.search_result_link,meta20639__$1));
});
clustermap.search.__GT_t20638 = (function __GT_t20638(comm__$1,type__$1,opts__$1,map__20637__$2,p__20632__$1,owner__$1,search_result__$1,search_result_link__$1,meta20639){return (new clustermap.search.t20638(comm__$1,type__$1,opts__$1,map__20637__$2,p__20632__$1,owner__$1,search_result__$1,search_result_link__$1,meta20639));
});
}
return (new clustermap.search.t20638(comm,type,opts,map__20637__$1,p__20632,owner,search_result,search_result_link,null));
});
clustermap.search.key_down = (function key_down(e,search_results,owner,comm){var pred__20645 = cljs.core._EQ__EQ_;var expr__20646 = e.keyCode;if(cljs.core.truth_((pred__20645.cljs$core$IFn$_invoke$arity$2 ? pred__20645.cljs$core$IFn$_invoke$arity$2(clustermap.search.ESCAPE_KEY,expr__20646) : pred__20645.call(null,clustermap.search.ESCAPE_KEY,expr__20646))))
{var G__20648 = om.core.get_node(owner,"search-component");var G__20648__$1 = (((G__20648 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__20648));var G__20648__$2 = (((G__20648__$1 == null))?null:G__20648__$1.toggle());return G__20648__$2;
} else
{return null;
}
});
clustermap.search.search_box = (function search_box(comm,p__20649,owner){var map__20655 = p__20649;var map__20655__$1 = ((cljs.core.seq_QMARK_(map__20655))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20655):map__20655);var data = map__20655__$1;var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20655__$1,cljs.core.constant$keyword$160);var map__20656 = search_results;var map__20656__$1 = ((cljs.core.seq_QMARK_(map__20656))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20656):map__20656);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20656__$1,"investor_companies");var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20656__$1,"portfolio_companies");var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20656__$1,"constituencies");if(typeof clustermap.search.t20657 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t20657 = (function (investor_companies,search_box,portfolio_companies,data,comm,owner,constituencies,p__20649,search_results,map__20655,map__20656,meta20658){
this.investor_companies = investor_companies;
this.search_box = search_box;
this.portfolio_companies = portfolio_companies;
this.data = data;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.p__20649 = p__20649;
this.search_results = search_results;
this.map__20655 = map__20655;
this.map__20656 = map__20656;
this.meta20658 = meta20658;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t20657.cljs$lang$type = true;
clustermap.search.t20657.cljs$lang$ctorStr = "clustermap.search/t20657";
clustermap.search.t20657.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.search/t20657");
});
clustermap.search.t20657.prototype.om$core$IRender$ = true;
clustermap.search.t20657.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div({"onKeyDown": om.core.bind.cljs$core$IFn$_invoke$arity$4(clustermap.search.key_down,self__.search_results,self__.owner,self__.comm), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$161,""], null));
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
})())?React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(self__.constituencies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.search.search_result_link,self__.constituencies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,self__.comm,cljs.core.constant$keyword$153,cljs.core.constant$keyword$162], null)], null))], null):null),(cljs.core.truth_(cljs.core.not_empty(self__.portfolio_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.search.search_result_link,self__.portfolio_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,self__.comm,cljs.core.constant$keyword$153,cljs.core.constant$keyword$163], null)], null))], null):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(self__.investor_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.search.search_result_link,self__.investor_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$158,self__.comm,cljs.core.constant$keyword$153,cljs.core.constant$keyword$164], null)], null))], null):null)], 0)))):null));
});
clustermap.search.t20657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20659){var self__ = this;
var _20659__$1 = this;return self__.meta20658;
});
clustermap.search.t20657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20659,meta20658__$1){var self__ = this;
var _20659__$1 = this;return (new clustermap.search.t20657(self__.investor_companies,self__.search_box,self__.portfolio_companies,self__.data,self__.comm,self__.owner,self__.constituencies,self__.p__20649,self__.search_results,self__.map__20655,self__.map__20656,meta20658__$1));
});
clustermap.search.__GT_t20657 = (function __GT_t20657(investor_companies__$1,search_box__$1,portfolio_companies__$1,data__$1,comm__$1,owner__$1,constituencies__$1,p__20649__$1,search_results__$1,map__20655__$2,map__20656__$2,meta20658){return (new clustermap.search.t20657(investor_companies__$1,search_box__$1,portfolio_companies__$1,data__$1,comm__$1,owner__$1,constituencies__$1,p__20649__$1,search_results__$1,map__20655__$2,map__20656__$2,meta20658));
});
}
return (new clustermap.search.t20657(investor_companies,search_box,portfolio_companies,data,comm,owner,constituencies,p__20649,search_results,map__20655__$1,map__20656__$1,null));
});
clustermap.search.mount = (function mount(app_state,elem_id,comm){return om.core.root(app_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.search.search_box,comm),document.getElementById(elem_id));
});
