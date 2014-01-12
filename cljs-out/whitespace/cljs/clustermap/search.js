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
clustermap.search.search_result_link = (function search_result_link(search_result,owner,opts){if(typeof clustermap.search.t28846 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t28846 = (function (opts,owner,search_result,search_result_link,meta28847){
this.opts = opts;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta28847 = meta28847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t28846.cljs$lang$type = true;
clustermap.search.t28846.cljs$lang$ctorStr = "clustermap.search/t28846";
clustermap.search.t28846.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.search/t28846");
});
clustermap.search.t28846.prototype.om$core$IRender$ = true;
clustermap.search.t28846.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
var this__8966__auto____$1 = this;return React.DOM.li({},React.DOM.a({},self__.search_result.call(null,"name")));
});
clustermap.search.t28846.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28848){var self__ = this;
var _28848__$1 = this;return self__.meta28847;
});
clustermap.search.t28846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28848,meta28847__$1){var self__ = this;
var _28848__$1 = this;return (new clustermap.search.t28846(self__.opts,self__.owner,self__.search_result,self__.search_result_link,meta28847__$1));
});
clustermap.search.__GT_t28846 = (function __GT_t28846(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta28847){return (new clustermap.search.t28846(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta28847));
});
}
return (new clustermap.search.t28846(opts,owner,search_result,search_result_link,null));
});
clustermap.search.search_box = (function search_box(comm,p__28849,owner){var map__28855 = p__28849;var map__28855__$1 = ((cljs.core.seq_QMARK_.call(null,map__28855))?cljs.core.apply.call(null,cljs.core.hash_map,map__28855):map__28855);var data = map__28855__$1;var search_results = cljs.core.get.call(null,map__28855__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__28856 = search_results;var map__28856__$1 = ((cljs.core.seq_QMARK_.call(null,map__28856))?cljs.core.apply.call(null,cljs.core.hash_map,map__28856):map__28856);var investor_companies = cljs.core.get.call(null,map__28856__$1,"investor_companies");var portfolio_companies = cljs.core.get.call(null,map__28856__$1,"portfolio_companies");var constituencies = cljs.core.get.call(null,map__28856__$1,"constituencies");if(typeof clustermap.search.t28857 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t28857 = (function (investor_companies,search_box,portfolio_companies,map__28855,map__28856,data,comm,p__28849,owner,constituencies,search_results,meta28858){
this.investor_companies = investor_companies;
this.search_box = search_box;
this.portfolio_companies = portfolio_companies;
this.map__28855 = map__28855;
this.map__28856 = map__28856;
this.data = data;
this.comm = comm;
this.p__28849 = p__28849;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta28858 = meta28858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t28857.cljs$lang$type = true;
clustermap.search.t28857.cljs$lang$ctorStr = "clustermap.search/t28857";
clustermap.search.t28857.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.search/t28857");
});
clustermap.search.t28857.prototype.om$core$IRender$ = true;
clustermap.search.t28857.prototype.om$core$IRender$render$arity$1 = (function (this__8966__auto__){var self__ = this;
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
clustermap.search.t28857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28859){var self__ = this;
var _28859__$1 = this;return self__.meta28858;
});
clustermap.search.t28857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28859,meta28858__$1){var self__ = this;
var _28859__$1 = this;return (new clustermap.search.t28857(self__.investor_companies,self__.search_box,self__.portfolio_companies,self__.map__28855,self__.map__28856,self__.data,self__.comm,self__.p__28849,self__.owner,self__.constituencies,self__.search_results,meta28858__$1));
});
clustermap.search.__GT_t28857 = (function __GT_t28857(investor_companies__$1,search_box__$1,portfolio_companies__$1,map__28855__$2,map__28856__$2,data__$1,comm__$1,p__28849__$1,owner__$1,constituencies__$1,search_results__$1,meta28858){return (new clustermap.search.t28857(investor_companies__$1,search_box__$1,portfolio_companies__$1,map__28855__$2,map__28856__$2,data__$1,comm__$1,p__28849__$1,owner__$1,constituencies__$1,search_results__$1,meta28858));
});
}
return (new clustermap.search.t28857(investor_companies,search_box,portfolio_companies,map__28855__$1,map__28856__$1,data,comm,p__28849,owner,constituencies,search_results,null));
});
clustermap.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,cljs.core.partial.call(null,clustermap.search.search_box,comm),document.getElementById(elem_id));
});
