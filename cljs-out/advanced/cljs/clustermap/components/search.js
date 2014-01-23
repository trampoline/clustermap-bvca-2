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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__21032){var map__21037 = p__21032;var map__21037__$1 = ((cljs.core.seq_QMARK_(map__21037))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21037):map__21037);var opts = map__21037__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037__$1,cljs.core.constant$keyword$183);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21037__$1,cljs.core.constant$keyword$258);if(typeof clustermap.components.search.t21038 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21038 = (function (comm,type,opts,map__21037,p__21032,owner,search_result,search_result_link,meta21039){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__21037 = map__21037;
this.p__21032 = p__21032;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta21039 = meta21039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21038.cljs$lang$type = true;
clustermap.components.search.t21038.cljs$lang$ctorStr = "clustermap.components.search/t21038";
clustermap.components.search.t21038.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21038");
});
clustermap.components.search.t21038.prototype.om$core$IRender$ = true;
clustermap.components.search.t21038.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.li({},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$200,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,om.core.read.cljs$core$IFn$_invoke$arity$2(self__.search_result,om.core.value)], null)], null));
})},(self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$194) : self__.search_result.call(null,cljs.core.constant$keyword$194))));
});
clustermap.components.search.t21038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21040){var self__ = this;
var _21040__$1 = this;return self__.meta21039;
});
clustermap.components.search.t21038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21040,meta21039__$1){var self__ = this;
var _21040__$1 = this;return (new clustermap.components.search.t21038(self__.comm,self__.type,self__.opts,self__.map__21037,self__.p__21032,self__.owner,self__.search_result,self__.search_result_link,meta21039__$1));
});
clustermap.components.search.__GT_t21038 = (function __GT_t21038(comm__$1,type__$1,opts__$1,map__21037__$2,p__21032__$1,owner__$1,search_result__$1,search_result_link__$1,meta21039){return (new clustermap.components.search.t21038(comm__$1,type__$1,opts__$1,map__21037__$2,p__21032__$1,owner__$1,search_result__$1,search_result_link__$1,meta21039));
});
}
return (new clustermap.components.search.t21038(comm,type,opts,map__21037__$1,p__21032,owner,search_result,search_result_link,null));
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__21045 = cljs.core._EQ__EQ_;var expr__21046 = e.keyCode;if(cljs.core.truth_((pred__21045.cljs$core$IFn$_invoke$arity$2 ? pred__21045.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__21046) : pred__21045.call(null,clustermap.components.search.ESCAPE_KEY,expr__21046))))
{var G__21048 = om.core.get_node(owner,"search-component");var G__21048__$1 = (((G__21048 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21048));var G__21048__$2 = (((G__21048__$1 == null))?null:G__21048__$1.toggle());return G__21048__$2;
} else
{return null;
}
});
clustermap.components.search.search_box = (function search_box(comm,p__21049,owner){var map__21055 = p__21049;var map__21055__$1 = ((cljs.core.seq_QMARK_(map__21055))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21055):map__21055);var data = map__21055__$1;var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21055__$1,cljs.core.constant$keyword$259);var map__21056 = search_results;var map__21056__$1 = ((cljs.core.seq_QMARK_(map__21056))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21056):map__21056);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21056__$1,cljs.core.constant$keyword$260);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21056__$1,cljs.core.constant$keyword$261);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21056__$1,cljs.core.constant$keyword$239);if(typeof clustermap.components.search.t21057 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21057 = (function (map__21056,investor_companies,map__21055,search_box,portfolio_companies,data,p__21049,comm,owner,constituencies,search_results,meta21058){
this.map__21056 = map__21056;
this.investor_companies = investor_companies;
this.map__21055 = map__21055;
this.search_box = search_box;
this.portfolio_companies = portfolio_companies;
this.data = data;
this.p__21049 = p__21049;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta21058 = meta21058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21057.cljs$lang$type = true;
clustermap.components.search.t21057.cljs$lang$ctorStr = "clustermap.components.search/t21057";
clustermap.components.search.t21057.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21057");
});
clustermap.components.search.t21057.prototype.om$core$IRender$ = true;
clustermap.components.search.t21057.prototype.om$core$IRender$render$arity$1 = (function (this__9148__auto__){var self__ = this;
var this__9148__auto____$1 = this;return React.DOM.div({"onKeyDown": om.core.bind.cljs$core$IFn$_invoke$arity$4(clustermap.components.search.key_down,self__.search_results,self__.owner,self__.comm), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,""], null));
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
})())?React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(self__.constituencies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.constituencies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$258,self__.comm,cljs.core.constant$keyword$183,cljs.core.constant$keyword$234], null)], null))], null):null),(cljs.core.truth_(cljs.core.not_empty(self__.portfolio_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.portfolio_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$258,self__.comm,cljs.core.constant$keyword$183,cljs.core.constant$keyword$230], null)], null))], null):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(self__.investor_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors"),om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,self__.investor_companies,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$212,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$258,self__.comm,cljs.core.constant$keyword$183,cljs.core.constant$keyword$233], null)], null))], null):null)], 0)))):null));
});
clustermap.components.search.t21057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21059){var self__ = this;
var _21059__$1 = this;return self__.meta21058;
});
clustermap.components.search.t21057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21059,meta21058__$1){var self__ = this;
var _21059__$1 = this;return (new clustermap.components.search.t21057(self__.map__21056,self__.investor_companies,self__.map__21055,self__.search_box,self__.portfolio_companies,self__.data,self__.p__21049,self__.comm,self__.owner,self__.constituencies,self__.search_results,meta21058__$1));
});
clustermap.components.search.__GT_t21057 = (function __GT_t21057(map__21056__$2,investor_companies__$1,map__21055__$2,search_box__$1,portfolio_companies__$1,data__$1,p__21049__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta21058){return (new clustermap.components.search.t21057(map__21056__$2,investor_companies__$1,map__21055__$2,search_box__$1,portfolio_companies__$1,data__$1,p__21049__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta21058));
});
}
return (new clustermap.components.search.t21057(map__21056__$1,investor_companies,map__21055__$1,search_box,portfolio_companies,data,p__21049,comm,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.search_box,comm),document.getElementById(elem_id));
});
