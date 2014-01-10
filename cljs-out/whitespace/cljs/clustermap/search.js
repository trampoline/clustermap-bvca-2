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
clustermap.search.search_result_link = (function search_result_link(search_result,owner,opts){if(typeof clustermap.search.t28754 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t28754 = (function (opts,owner,search_result,search_result_link,meta28755){
this.opts = opts;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta28755 = meta28755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t28754.cljs$lang$type = true;
clustermap.search.t28754.cljs$lang$ctorStr = "clustermap.search/t28754";
clustermap.search.t28754.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.search/t28754");
});
clustermap.search.t28754.prototype.om$core$IRender$ = true;
clustermap.search.t28754.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.li({},React.DOM.a({},self__.search_result.call(null,"name")));
});
clustermap.search.t28754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28756){var self__ = this;
var _28756__$1 = this;return self__.meta28755;
});
clustermap.search.t28754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28756,meta28755__$1){var self__ = this;
var _28756__$1 = this;return (new clustermap.search.t28754(self__.opts,self__.owner,self__.search_result,self__.search_result_link,meta28755__$1));
});
clustermap.search.__GT_t28754 = (function __GT_t28754(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta28755){return (new clustermap.search.t28754(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta28755));
});
}
return (new clustermap.search.t28754(opts,owner,search_result,search_result_link,null));
});
clustermap.search.search_box = (function search_box(comm,p__28757,owner){var map__28763 = p__28757;var map__28763__$1 = ((cljs.core.seq_QMARK_.call(null,map__28763))?cljs.core.apply.call(null,cljs.core.hash_map,map__28763):map__28763);var data = map__28763__$1;var search_results = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__28764 = search_results;var map__28764__$1 = ((cljs.core.seq_QMARK_.call(null,map__28764))?cljs.core.apply.call(null,cljs.core.hash_map,map__28764):map__28764);var investor_companies = cljs.core.get.call(null,map__28764__$1,"investor_companies");var portfolio_companies = cljs.core.get.call(null,map__28764__$1,"portfolio_companies");var constituencies = cljs.core.get.call(null,map__28764__$1,"constituencies");if(typeof clustermap.search.t28765 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t28765 = (function (investor_companies,search_box,map__28764,portfolio_companies,map__28763,data,p__28757,comm,owner,constituencies,search_results,meta28766){
this.investor_companies = investor_companies;
this.search_box = search_box;
this.map__28764 = map__28764;
this.portfolio_companies = portfolio_companies;
this.map__28763 = map__28763;
this.data = data;
this.p__28757 = p__28757;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta28766 = meta28766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t28765.cljs$lang$type = true;
clustermap.search.t28765.cljs$lang$ctorStr = "clustermap.search/t28765";
clustermap.search.t28765.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.search/t28765");
});
clustermap.search.t28765.prototype.om$core$IRender$ = true;
clustermap.search.t28765.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.div({"id": "search"},React.DOM.h2(null,"Search"),React.DOM.div(null,om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
}), "placeholder": "Enter your search", "type": "text"}),React.DOM.button({"type": "reset"},"\u00D7")),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?React.DOM.div({"className": "search-results"},cljs.core.apply.call(null,om.dom.ul,{},cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,self__.constituencies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies"),om.core.build_all.call(null,clustermap.search.search_result_link,self__.constituencies,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),"Constituency"], null)], null))], null):null),(cljs.core.truth_(cljs.core.not_empty.call(null,self__.portfolio_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies"),om.core.build_all.call(null,clustermap.search.search_result_link,self__.portfolio_companies,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),"Company"], null)], null))], null):null),(cljs.core.truth_(cljs.core.not_empty.call(null,self__.investor_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors"),om.core.build_all.call(null,clustermap.search.search_result_link,self__.investor_companies,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),"Investor"], null)], null))], null):null)))):null));
});
clustermap.search.t28765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28767){var self__ = this;
var _28767__$1 = this;return self__.meta28766;
});
clustermap.search.t28765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28767,meta28766__$1){var self__ = this;
var _28767__$1 = this;return (new clustermap.search.t28765(self__.investor_companies,self__.search_box,self__.map__28764,self__.portfolio_companies,self__.map__28763,self__.data,self__.p__28757,self__.comm,self__.owner,self__.constituencies,self__.search_results,meta28766__$1));
});
clustermap.search.__GT_t28765 = (function __GT_t28765(investor_companies__$1,search_box__$1,map__28764__$2,portfolio_companies__$1,map__28763__$2,data__$1,p__28757__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta28766){return (new clustermap.search.t28765(investor_companies__$1,search_box__$1,map__28764__$2,portfolio_companies__$1,map__28763__$2,data__$1,p__28757__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta28766));
});
}
return (new clustermap.search.t28765(investor_companies,search_box,map__28764__$1,portfolio_companies,map__28763__$1,data,p__28757,comm,owner,constituencies,search_results,null));
});
clustermap.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,cljs.core.partial.call(null,clustermap.search.search_box,comm),document.getElementById(elem_id));
});
