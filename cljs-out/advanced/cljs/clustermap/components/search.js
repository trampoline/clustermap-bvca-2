// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.search');
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
clustermap.components.search.ESCAPE_KEY = 27;
clustermap.components.search.ENTER_KEY = 13;
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__20796){var map__20801 = p__20796;var map__20801__$1 = ((cljs.core.seq_QMARK_(map__20801))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20801):map__20801);var opts = map__20801__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,cljs.core.constant$keyword$148);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20801__$1,cljs.core.constant$keyword$197);if(typeof clustermap.components.search.t20802 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t20802 = (function (comm,type,opts,map__20801,p__20796,owner,search_result,search_result_link,meta20803){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__20801 = map__20801;
this.p__20796 = p__20796;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta20803 = meta20803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t20802.cljs$lang$type = true;
clustermap.components.search.t20802.cljs$lang$ctorStr = "clustermap.components.search/t20802";
clustermap.components.search.t20802.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t20802");
});
clustermap.components.search.t20802.prototype.om$core$IRender$ = true;
clustermap.components.search.t20802.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.li({},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$166,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,om.core.read.cljs$core$IFn$_invoke$arity$2(self__.search_result,om.core.value)], null)], null));
})},(self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1("name") : self__.search_result.call(null,"name"))));
});
clustermap.components.search.t20802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20804){var self__ = this;
var _20804__$1 = this;return self__.meta20803;
});
clustermap.components.search.t20802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20804,meta20803__$1){var self__ = this;
var _20804__$1 = this;return (new clustermap.components.search.t20802(self__.comm,self__.type,self__.opts,self__.map__20801,self__.p__20796,self__.owner,self__.search_result,self__.search_result_link,meta20803__$1));
});
clustermap.components.search.__GT_t20802 = (function __GT_t20802(comm__$1,type__$1,opts__$1,map__20801__$2,p__20796__$1,owner__$1,search_result__$1,search_result_link__$1,meta20803){return (new clustermap.components.search.t20802(comm__$1,type__$1,opts__$1,map__20801__$2,p__20796__$1,owner__$1,search_result__$1,search_result_link__$1,meta20803));
});
}
return (new clustermap.components.search.t20802(comm,type,opts,map__20801__$1,p__20796,owner,search_result,search_result_link,null));
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__20809 = cljs.core._EQ__EQ_;var expr__20810 = e.keyCode;if(cljs.core.truth_((pred__20809.cljs$core$IFn$_invoke$arity$2 ? pred__20809.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__20810) : pred__20809.call(null,clustermap.components.search.ESCAPE_KEY,expr__20810))))
{var G__20812 = om.core.get_node(owner,"search-component");var G__20812__$1 = (((G__20812 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__20812));var G__20812__$2 = (((G__20812__$1 == null))?null:G__20812__$1.toggle());return G__20812__$2;
} else
{return null;
}
});
clustermap.components.search.search_box = (function search_box(comm,p__20813,owner){var map__20819 = p__20813;var map__20819__$1 = ((cljs.core.seq_QMARK_(map__20819))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20819):map__20819);var data = map__20819__$1;var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20819__$1,cljs.core.constant$keyword$198);var map__20820 = search_results;var map__20820__$1 = ((cljs.core.seq_QMARK_(map__20820))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20820):map__20820);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20820__$1,"investor_companies");var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20820__$1,"portfolio_companies");var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20820__$1,"constituencies");if(typeof clustermap.components.search.t20821 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t20821 = (function (investor_companies,search_box,map__20819,portfolio_companies,data,p__20813,comm,map__20820,owner,constituencies,search_results,meta20822){
this.investor_companies = investor_companies;
this.search_box = search_box;
this.map__20819 = map__20819;
this.portfolio_companies = portfolio_companies;
this.data = data;
this.p__20813 = p__20813;
this.comm = comm;
this.map__20820 = map__20820;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta20822 = meta20822;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t20821.cljs$lang$type = true;
clustermap.components.search.t20821.cljs$lang$ctorStr = "clustermap.components.search/t20821";
clustermap.components.search.t20821.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t20821");
});
clustermap.components.search.t20821.prototype.om$core$IRender$ = true;
clustermap.components.search.t20821.prototype.om$core$IRender$render$arity$1 = (function (this__9046__auto__){var self__ = this;
var this__9046__auto____$1 = this;return React.DOM.div({"onKeyDown": om.core.bind.cljs$core$IFn$_invoke$arity$4(clustermap.components.search.key_down,self__.search_results,self__.owner,self__.comm), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$199,""], null));
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
})())?React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(self__.constituencies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.constituencies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$197,self__.comm,cljs.core.constant$keyword$148,cljs.core.constant$keyword$200], null)], null))], null):null),(cljs.core.truth_(cljs.core.not_empty(self__.portfolio_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.portfolio_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$197,self__.comm,cljs.core.constant$keyword$148,cljs.core.constant$keyword$201], null)], null))], null):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(self__.investor_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.investor_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$176,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$197,self__.comm,cljs.core.constant$keyword$148,cljs.core.constant$keyword$202], null)], null))], null):null)], 0)))):null));
});
clustermap.components.search.t20821.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20823){var self__ = this;
var _20823__$1 = this;return self__.meta20822;
});
clustermap.components.search.t20821.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20823,meta20822__$1){var self__ = this;
var _20823__$1 = this;return (new clustermap.components.search.t20821(self__.investor_companies,self__.search_box,self__.map__20819,self__.portfolio_companies,self__.data,self__.p__20813,self__.comm,self__.map__20820,self__.owner,self__.constituencies,self__.search_results,meta20822__$1));
});
clustermap.components.search.__GT_t20821 = (function __GT_t20821(investor_companies__$1,search_box__$1,map__20819__$2,portfolio_companies__$1,data__$1,p__20813__$1,comm__$1,map__20820__$2,owner__$1,constituencies__$1,search_results__$1,meta20822){return (new clustermap.components.search.t20821(investor_companies__$1,search_box__$1,map__20819__$2,portfolio_companies__$1,data__$1,p__20813__$1,comm__$1,map__20820__$2,owner__$1,constituencies__$1,search_results__$1,meta20822));
});
}
return (new clustermap.components.search.t20821(investor_companies,search_box,map__20819__$1,portfolio_companies,data,p__20813,comm,map__20820__$1,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root(app_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.search_box,comm),document.getElementById(elem_id));
});
