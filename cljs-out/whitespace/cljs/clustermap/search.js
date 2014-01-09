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
clustermap.search.search_result_link = (function search_result_link(search_result,owner,opts){if(typeof clustermap.search.t28625 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t28625 = (function (opts,owner,search_result,search_result_link,meta28626){
this.opts = opts;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta28626 = meta28626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t28625.cljs$lang$type = true;
clustermap.search.t28625.cljs$lang$ctorStr = "clustermap.search/t28625";
clustermap.search.t28625.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.search/t28625");
});
clustermap.search.t28625.prototype.om$core$IRender$ = true;
clustermap.search.t28625.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.li(null,React.DOM.a(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href=","href=",1113446884),"#"], null),self__.search_result.call(null,"name"),React.DOM.small(null,[cljs.core.str(" ("),cljs.core.str(new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(self__.opts)),cljs.core.str(")")].join(''))));
});
clustermap.search.t28625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28627){var self__ = this;
var _28627__$1 = this;return self__.meta28626;
});
clustermap.search.t28625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28627,meta28626__$1){var self__ = this;
var _28627__$1 = this;return (new clustermap.search.t28625(self__.opts,self__.owner,self__.search_result,self__.search_result_link,meta28626__$1));
});
clustermap.search.__GT_t28625 = (function __GT_t28625(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta28626){return (new clustermap.search.t28625(opts__$1,owner__$1,search_result__$1,search_result_link__$1,meta28626));
});
}
return (new clustermap.search.t28625(opts,owner,search_result,search_result_link,null));
});
clustermap.search.search_box = (function search_box(comm,p__28628,owner){var map__28634 = p__28628;var map__28634__$1 = ((cljs.core.seq_QMARK_.call(null,map__28634))?cljs.core.apply.call(null,cljs.core.hash_map,map__28634):map__28634);var data = map__28634__$1;var search_results = cljs.core.get.call(null,map__28634__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__28635 = search_results;var map__28635__$1 = ((cljs.core.seq_QMARK_.call(null,map__28635))?cljs.core.apply.call(null,cljs.core.hash_map,map__28635):map__28635);var investor_companies = cljs.core.get.call(null,map__28635__$1,"investor_companies");var portfolio_companies = cljs.core.get.call(null,map__28635__$1,"portfolio_companies");var constituencies = cljs.core.get.call(null,map__28635__$1,"constituencies");if(typeof clustermap.search.t28636 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.search.t28636 = (function (investor_companies,p__28628,search_box,portfolio_companies,data,comm,owner,constituencies,map__28635,map__28634,search_results,meta28637){
this.investor_companies = investor_companies;
this.p__28628 = p__28628;
this.search_box = search_box;
this.portfolio_companies = portfolio_companies;
this.data = data;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.map__28635 = map__28635;
this.map__28634 = map__28634;
this.search_results = search_results;
this.meta28637 = meta28637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.search.t28636.cljs$lang$type = true;
clustermap.search.t28636.cljs$lang$ctorStr = "clustermap.search/t28636";
clustermap.search.t28636.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.search/t28636");
});
clustermap.search.t28636.prototype.om$core$IRender$ = true;
clustermap.search.t28636.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div({"id": "search"},React.DOM.h2(null,"Search"),React.DOM.div(null,om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
}), "placeholder": "Enter your search", "type": "text"}),React.DOM.button({"type": "reset"},"\u00D7")),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?React.DOM.div({"id": "results"},React.DOM.ul(null,om.core.build_all.call(null,clustermap.search.search_result_link,self__.constituencies,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),"Constituency"], null)], null))),React.DOM.ul(null,om.core.build_all.call(null,clustermap.search.search_result_link,self__.portfolio_companies,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),"Company"], null)], null))),React.DOM.ul(null,om.core.build_all.call(null,clustermap.search.search_result_link,self__.investor_companies,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),"Investor"], null)], null)))):null));
});
clustermap.search.t28636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28638){var self__ = this;
var _28638__$1 = this;return self__.meta28637;
});
clustermap.search.t28636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28638,meta28637__$1){var self__ = this;
var _28638__$1 = this;return (new clustermap.search.t28636(self__.investor_companies,self__.p__28628,self__.search_box,self__.portfolio_companies,self__.data,self__.comm,self__.owner,self__.constituencies,self__.map__28635,self__.map__28634,self__.search_results,meta28637__$1));
});
clustermap.search.__GT_t28636 = (function __GT_t28636(investor_companies__$1,p__28628__$1,search_box__$1,portfolio_companies__$1,data__$1,comm__$1,owner__$1,constituencies__$1,map__28635__$2,map__28634__$2,search_results__$1,meta28637){return (new clustermap.search.t28636(investor_companies__$1,p__28628__$1,search_box__$1,portfolio_companies__$1,data__$1,comm__$1,owner__$1,constituencies__$1,map__28635__$2,map__28634__$2,search_results__$1,meta28637));
});
}
return (new clustermap.search.t28636(investor_companies,p__28628,search_box,portfolio_companies,data,comm,owner,constituencies,map__28635__$1,map__28634__$1,search_results,null));
});
clustermap.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,cljs.core.partial.call(null,clustermap.search.search_box,comm),document.getElementById(elem_id));
});
