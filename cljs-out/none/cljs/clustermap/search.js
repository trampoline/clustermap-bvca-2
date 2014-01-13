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
clustermap.search.search_result_link = (function search_result_link(search_result,owner,opts){if(typeof clustermap.search.t10867 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t10867 = (function (opts,owner,search_result,search_result_link,meta10868){
this.opts = opts;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta10868 = meta10868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t10867.cljs$lang$type = true;
clustermap.search.t10867.cljs$lang$ctorStr = "clustermap.search/t10867";
clustermap.search.t10867.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.search/t10867");
});
clustermap.search.t10867.prototype.om$core$IRender$ = true;
clustermap.search.t10867.prototype.om$core$IRender$render$arity$1 = (function (this__9036__auto__){var self__ = this;
var this__9036__auto____$1 = this;return React.DOM.li({},React.DOM.a({},self__.search_result.call(null,"name")));
});
clustermap.search.t10867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10869){var self__ = this;
var _10869__$1 = this;return self__.meta10868;
});
clustermap.search.t10867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10869,meta10868__$1){var self__ = this;
var _10869__$1 = this;return (new clustermap.search.t10867(self__.opts,self__.owner,self__.search_result,self__.search_result_link,meta10868__$1));
});
clustermap.search.__GT_t10867 = (function __GT_t10867(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta10868){return (new clustermap.search.t10867(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta10868));
});
}
return (new clustermap.search.t10867(opts,owner,search_result,search_result_link,null));
});
clustermap.search.search_box = (function search_box(comm,p__10870,owner){var map__10876 = p__10870;var map__10876__$1 = ((cljs.core.seq_QMARK_.call(null,map__10876))?cljs.core.apply.call(null,cljs.core.hash_map,map__10876):map__10876);var data = map__10876__$1;var search_results = cljs.core.get.call(null,map__10876__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__10877 = search_results;var map__10877__$1 = ((cljs.core.seq_QMARK_.call(null,map__10877))?cljs.core.apply.call(null,cljs.core.hash_map,map__10877):map__10877);var investor_companies = cljs.core.get.call(null,map__10877__$1,"investor_companies");var portfolio_companies = cljs.core.get.call(null,map__10877__$1,"portfolio_companies");var constituencies = cljs.core.get.call(null,map__10877__$1,"constituencies");if(typeof clustermap.search.t10878 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t10878 = (function (investor_companies,search_box,portfolio_companies,data,p__10870,map__10876,map__10877,comm,owner,constituencies,search_results,meta10879){
this.investor_companies = investor_companies;
this.search_box = search_box;
this.portfolio_companies = portfolio_companies;
this.data = data;
this.p__10870 = p__10870;
this.map__10876 = map__10876;
this.map__10877 = map__10877;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta10879 = meta10879;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t10878.cljs$lang$type = true;
clustermap.search.t10878.cljs$lang$ctorStr = "clustermap.search/t10878";
clustermap.search.t10878.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.search/t10878");
});
clustermap.search.t10878.prototype.om$core$IRender$ = true;
clustermap.search.t10878.prototype.om$core$IRender$render$arity$1 = (function (this__9036__auto__){var self__ = this;
var this__9036__auto____$1 = this;return React.DOM.div({"id": "search"},React.DOM.h2(null,"Search"),React.DOM.div(null,om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
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
clustermap.search.t10878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10880){var self__ = this;
var _10880__$1 = this;return self__.meta10879;
});
clustermap.search.t10878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10880,meta10879__$1){var self__ = this;
var _10880__$1 = this;return (new clustermap.search.t10878(self__.investor_companies,self__.search_box,self__.portfolio_companies,self__.data,self__.p__10870,self__.map__10876,self__.map__10877,self__.comm,self__.owner,self__.constituencies,self__.search_results,meta10879__$1));
});
clustermap.search.__GT_t10878 = (function __GT_t10878(investor_companies__$1,search_box__$1,portfolio_companies__$1,data__$1,p__10870__$1,map__10876__$2,map__10877__$2,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta10879){return (new clustermap.search.t10878(investor_companies__$1,search_box__$1,portfolio_companies__$1,data__$1,p__10870__$1,map__10876__$2,map__10877__$2,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta10879));
});
}
return (new clustermap.search.t10878(investor_companies,search_box,portfolio_companies,data,p__10870,map__10876__$1,map__10877__$1,comm,owner,constituencies,search_results,null));
});
clustermap.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,cljs.core.partial.call(null,clustermap.search.search_box,comm),document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map