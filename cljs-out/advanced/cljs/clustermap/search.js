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
clustermap.search.search_result_link = (function search_result_link(search_result,owner,p__20128){var map__20133 = p__20128;var map__20133__$1 = ((cljs.core.seq_QMARK_(map__20133))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20133):map__20133);var opts = map__20133__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20133__$1,cljs.core.constant$keyword$153);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20133__$1,cljs.core.constant$keyword$158);if(typeof clustermap.search.t20134 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t20134 = (function (comm,type,opts,map__20133,p__20128,owner,search_result,search_result_link,meta20135){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__20133 = map__20133;
this.p__20128 = p__20128;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta20135 = meta20135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t20134.cljs$lang$type = true;
clustermap.search.t20134.cljs$lang$ctorStr = "clustermap.search/t20134";
clustermap.search.t20134.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.search/t20134");
});
clustermap.search.t20134.prototype.om$core$IRender$ = true;
clustermap.search.t20134.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.li({},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$159,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,om.core.read.cljs$core$IFn$_invoke$arity$2(self__.search_result,om.core.value)], null)], null));
})},(self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1("name") : self__.search_result.call(null,"name"))));
});
clustermap.search.t20134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20136){var self__ = this;
var _20136__$1 = this;return self__.meta20135;
});
clustermap.search.t20134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20136,meta20135__$1){var self__ = this;
var _20136__$1 = this;return (new clustermap.search.t20134(self__.comm,self__.type,self__.opts,self__.map__20133,self__.p__20128,self__.owner,self__.search_result,self__.search_result_link,meta20135__$1));
});
clustermap.search.__GT_t20134 = (function __GT_t20134(comm__$1,type__$1,opts__$1,map__20133__$2,p__20128__$1,owner__$1,search_result__$1,search_result_link__$1,meta20135){return (new clustermap.search.t20134(comm__$1,type__$1,opts__$1,map__20133__$2,p__20128__$1,owner__$1,search_result__$1,search_result_link__$1,meta20135));
});
}
return (new clustermap.search.t20134(comm,type,opts,map__20133__$1,p__20128,owner,search_result,search_result_link,null));
});
clustermap.search.key_down = (function key_down(e,search_results,owner,comm){var pred__20141 = cljs.core._EQ__EQ_;var expr__20142 = e.keyCode;if(cljs.core.truth_((pred__20141.cljs$core$IFn$_invoke$arity$2 ? pred__20141.cljs$core$IFn$_invoke$arity$2(clustermap.search.ESCAPE_KEY,expr__20142) : pred__20141.call(null,clustermap.search.ESCAPE_KEY,expr__20142))))
{var G__20144 = om.core.get_node(owner,"search-component");var G__20144__$1 = (((G__20144 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__20144));var G__20144__$2 = (((G__20144__$1 == null))?null:G__20144__$1.toggle());return G__20144__$2;
} else
{return null;
}
});
clustermap.search.search_box = (function search_box(comm,p__20145,owner){var map__20151 = p__20145;var map__20151__$1 = ((cljs.core.seq_QMARK_(map__20151))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20151):map__20151);var data = map__20151__$1;var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20151__$1,cljs.core.constant$keyword$160);var map__20152 = search_results;var map__20152__$1 = ((cljs.core.seq_QMARK_(map__20152))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20152):map__20152);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20152__$1,"investor_companies");var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20152__$1,"portfolio_companies");var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20152__$1,"constituencies");if(typeof clustermap.search.t20153 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t20153 = (function (investor_companies,search_box,p__20145,portfolio_companies,data,comm,owner,constituencies,map__20152,search_results,map__20151,meta20154){
this.investor_companies = investor_companies;
this.search_box = search_box;
this.p__20145 = p__20145;
this.portfolio_companies = portfolio_companies;
this.data = data;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.map__20152 = map__20152;
this.search_results = search_results;
this.map__20151 = map__20151;
this.meta20154 = meta20154;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t20153.cljs$lang$type = true;
clustermap.search.t20153.cljs$lang$ctorStr = "clustermap.search/t20153";
clustermap.search.t20153.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.search/t20153");
});
clustermap.search.t20153.prototype.om$core$IRender$ = true;
clustermap.search.t20153.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
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
clustermap.search.t20153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20155){var self__ = this;
var _20155__$1 = this;return self__.meta20154;
});
clustermap.search.t20153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20155,meta20154__$1){var self__ = this;
var _20155__$1 = this;return (new clustermap.search.t20153(self__.investor_companies,self__.search_box,self__.p__20145,self__.portfolio_companies,self__.data,self__.comm,self__.owner,self__.constituencies,self__.map__20152,self__.search_results,self__.map__20151,meta20154__$1));
});
clustermap.search.__GT_t20153 = (function __GT_t20153(investor_companies__$1,search_box__$1,p__20145__$1,portfolio_companies__$1,data__$1,comm__$1,owner__$1,constituencies__$1,map__20152__$2,search_results__$1,map__20151__$2,meta20154){return (new clustermap.search.t20153(investor_companies__$1,search_box__$1,p__20145__$1,portfolio_companies__$1,data__$1,comm__$1,owner__$1,constituencies__$1,map__20152__$2,search_results__$1,map__20151__$2,meta20154));
});
}
return (new clustermap.search.t20153(investor_companies,search_box,p__20145,portfolio_companies,data,comm,owner,constituencies,map__20152__$1,search_results,map__20151__$1,null));
});
clustermap.search.mount = (function mount(app_state,elem_id,comm){return om.core.root(app_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.search.search_box,comm),document.getElementById(elem_id));
});
