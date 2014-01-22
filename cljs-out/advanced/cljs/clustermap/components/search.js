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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__20897){var map__20902 = p__20897;var map__20902__$1 = ((cljs.core.seq_QMARK_(map__20902))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20902):map__20902);var opts = map__20902__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20902__$1,cljs.core.constant$keyword$158);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20902__$1,cljs.core.constant$keyword$219);if(typeof clustermap.components.search.t20903 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t20903 = (function (comm,type,opts,map__20902,p__20897,owner,search_result,search_result_link,meta20904){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__20902 = map__20902;
this.p__20897 = p__20897;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta20904 = meta20904;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t20903.cljs$lang$type = true;
clustermap.components.search.t20903.cljs$lang$ctorStr = "clustermap.components.search/t20903";
clustermap.components.search.t20903.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t20903");
});
clustermap.components.search.t20903.prototype.om$core$IRender$ = true;
clustermap.components.search.t20903.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.li({},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,om.core.read.cljs$core$IFn$_invoke$arity$2(self__.search_result,om.core.value)], null)], null));
})},(self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1("name") : self__.search_result.call(null,"name"))));
});
clustermap.components.search.t20903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20905){var self__ = this;
var _20905__$1 = this;return self__.meta20904;
});
clustermap.components.search.t20903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20905,meta20904__$1){var self__ = this;
var _20905__$1 = this;return (new clustermap.components.search.t20903(self__.comm,self__.type,self__.opts,self__.map__20902,self__.p__20897,self__.owner,self__.search_result,self__.search_result_link,meta20904__$1));
});
clustermap.components.search.__GT_t20903 = (function __GT_t20903(comm__$1,type__$1,opts__$1,map__20902__$2,p__20897__$1,owner__$1,search_result__$1,search_result_link__$1,meta20904){return (new clustermap.components.search.t20903(comm__$1,type__$1,opts__$1,map__20902__$2,p__20897__$1,owner__$1,search_result__$1,search_result_link__$1,meta20904));
});
}
return (new clustermap.components.search.t20903(comm,type,opts,map__20902__$1,p__20897,owner,search_result,search_result_link,null));
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__20910 = cljs.core._EQ__EQ_;var expr__20911 = e.keyCode;if(cljs.core.truth_((pred__20910.cljs$core$IFn$_invoke$arity$2 ? pred__20910.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__20911) : pred__20910.call(null,clustermap.components.search.ESCAPE_KEY,expr__20911))))
{var G__20913 = om.core.get_node(owner,"search-component");var G__20913__$1 = (((G__20913 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__20913));var G__20913__$2 = (((G__20913__$1 == null))?null:G__20913__$1.toggle());return G__20913__$2;
} else
{return null;
}
});
clustermap.components.search.search_box = (function search_box(comm,p__20914,owner){var map__20920 = p__20914;var map__20920__$1 = ((cljs.core.seq_QMARK_(map__20920))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20920):map__20920);var data = map__20920__$1;var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20920__$1,cljs.core.constant$keyword$220);var map__20921 = search_results;var map__20921__$1 = ((cljs.core.seq_QMARK_(map__20921))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20921):map__20921);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20921__$1,"investor_companies");var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20921__$1,"portfolio_companies");var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20921__$1,"constituencies");if(typeof clustermap.components.search.t20922 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t20922 = (function (p__20914,investor_companies,search_box,map__20920,map__20921,portfolio_companies,data,comm,owner,constituencies,search_results,meta20923){
this.p__20914 = p__20914;
this.investor_companies = investor_companies;
this.search_box = search_box;
this.map__20920 = map__20920;
this.map__20921 = map__20921;
this.portfolio_companies = portfolio_companies;
this.data = data;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta20923 = meta20923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t20922.cljs$lang$type = true;
clustermap.components.search.t20922.cljs$lang$ctorStr = "clustermap.components.search/t20922";
clustermap.components.search.t20922.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t20922");
});
clustermap.components.search.t20922.prototype.om$core$IRender$ = true;
clustermap.components.search.t20922.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div({"onKeyDown": om.core.bind.cljs$core$IFn$_invoke$arity$4(clustermap.components.search.key_down,self__.search_results,self__.owner,self__.comm), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$221,""], null));
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
})())?React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(self__.constituencies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.constituencies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$219,self__.comm,cljs.core.constant$keyword$158,cljs.core.constant$keyword$206], null)], null))], null):null),(cljs.core.truth_(cljs.core.not_empty(self__.portfolio_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.portfolio_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$219,self__.comm,cljs.core.constant$keyword$158,cljs.core.constant$keyword$203], null)], null))], null):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(self__.investor_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.investor_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$185,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$219,self__.comm,cljs.core.constant$keyword$158,cljs.core.constant$keyword$205], null)], null))], null):null)], 0)))):null));
});
clustermap.components.search.t20922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20924){var self__ = this;
var _20924__$1 = this;return self__.meta20923;
});
clustermap.components.search.t20922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20924,meta20923__$1){var self__ = this;
var _20924__$1 = this;return (new clustermap.components.search.t20922(self__.p__20914,self__.investor_companies,self__.search_box,self__.map__20920,self__.map__20921,self__.portfolio_companies,self__.data,self__.comm,self__.owner,self__.constituencies,self__.search_results,meta20923__$1));
});
clustermap.components.search.__GT_t20922 = (function __GT_t20922(p__20914__$1,investor_companies__$1,search_box__$1,map__20920__$2,map__20921__$2,portfolio_companies__$1,data__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta20923){return (new clustermap.components.search.t20922(p__20914__$1,investor_companies__$1,search_box__$1,map__20920__$2,map__20921__$2,portfolio_companies__$1,data__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta20923));
});
}
return (new clustermap.components.search.t20922(p__20914,investor_companies,search_box,map__20920__$1,map__20921__$1,portfolio_companies,data,comm,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root(app_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.search_box,comm),document.getElementById(elem_id));
});
