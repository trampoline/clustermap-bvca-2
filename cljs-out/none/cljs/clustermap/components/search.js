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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__11340){var map__11345 = p__11340;var map__11345__$1 = ((cljs.core.seq_QMARK_.call(null,map__11345))?cljs.core.apply.call(null,cljs.core.hash_map,map__11345):map__11345);var opts = map__11345__$1;var type = cljs.core.get.call(null,map__11345__$1,new cljs.core.Keyword(null,"type","type",1017479852));var comm = cljs.core.get.call(null,map__11345__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t11346 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t11346 = (function (comm,type,opts,map__11345,p__11340,owner,search_result,search_result_link,meta11347){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__11345 = map__11345;
this.p__11340 = p__11340;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta11347 = meta11347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t11346.cljs$lang$type = true;
clustermap.components.search.t11346.cljs$lang$ctorStr = "clustermap.components.search/t11346";
clustermap.components.search.t11346.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t11346");
});
clustermap.components.search.t11346.prototype.om$core$IRender$ = true;
clustermap.components.search.t11346.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.li({},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,om.core.read.call(null,self__.search_result,om.core.value)], null)], null));
})},self__.search_result.call(null,"name")));
});
clustermap.components.search.t11346.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11348){var self__ = this;
var _11348__$1 = this;return self__.meta11347;
});
clustermap.components.search.t11346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11348,meta11347__$1){var self__ = this;
var _11348__$1 = this;return (new clustermap.components.search.t11346(self__.comm,self__.type,self__.opts,self__.map__11345,self__.p__11340,self__.owner,self__.search_result,self__.search_result_link,meta11347__$1));
});
clustermap.components.search.__GT_t11346 = (function __GT_t11346(comm__$1,type__$1,opts__$1,map__11345__$2,p__11340__$1,owner__$1,search_result__$1,search_result_link__$1,meta11347){return (new clustermap.components.search.t11346(comm__$1,type__$1,opts__$1,map__11345__$2,p__11340__$1,owner__$1,search_result__$1,search_result_link__$1,meta11347));
});
}
return (new clustermap.components.search.t11346(comm,type,opts,map__11345__$1,p__11340,owner,search_result,search_result_link,null));
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__11353 = cljs.core._EQ__EQ_;var expr__11354 = e.keyCode;if(cljs.core.truth_(pred__11353.call(null,clustermap.components.search.ESCAPE_KEY,expr__11354)))
{var G__11356 = om.core.get_node.call(null,owner,"search-component");var G__11356__$1 = (((G__11356 == null))?null:jayq.core.$.call(null,G__11356));var G__11356__$2 = (((G__11356__$1 == null))?null:G__11356__$1.toggle());return G__11356__$2;
} else
{return null;
}
});
clustermap.components.search.search_box = (function search_box(comm,p__11357,owner){var map__11363 = p__11357;var map__11363__$1 = ((cljs.core.seq_QMARK_.call(null,map__11363))?cljs.core.apply.call(null,cljs.core.hash_map,map__11363):map__11363);var data = map__11363__$1;var search_results = cljs.core.get.call(null,map__11363__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__11364 = search_results;var map__11364__$1 = ((cljs.core.seq_QMARK_.call(null,map__11364))?cljs.core.apply.call(null,cljs.core.hash_map,map__11364):map__11364);var investor_companies = cljs.core.get.call(null,map__11364__$1,"investor_companies");var portfolio_companies = cljs.core.get.call(null,map__11364__$1,"portfolio_companies");var constituencies = cljs.core.get.call(null,map__11364__$1,"constituencies");if(typeof clustermap.components.search.t11365 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t11365 = (function (investor_companies,search_box,portfolio_companies,p__11357,data,comm,owner,constituencies,map__11363,map__11364,search_results,meta11366){
this.investor_companies = investor_companies;
this.search_box = search_box;
this.portfolio_companies = portfolio_companies;
this.p__11357 = p__11357;
this.data = data;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.map__11363 = map__11363;
this.map__11364 = map__11364;
this.search_results = search_results;
this.meta11366 = meta11366;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t11365.cljs$lang$type = true;
clustermap.components.search.t11365.cljs$lang$ctorStr = "clustermap.components.search/t11365";
clustermap.components.search.t11365.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t11365");
});
clustermap.components.search.t11365.prototype.om$core$IRender$ = true;
clustermap.components.search.t11365.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div({"onKeyDown": om.core.bind.call(null,clustermap.components.search.key_down,self__.search_results,self__.owner,self__.comm), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
}), "type": "reset"},"\u00D7")),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?React.DOM.div({"className": "search-results"},cljs.core.apply.call(null,om.dom.ul,{},cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,self__.constituencies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies"),om.core.build_all.call(null,clustermap.components.search.search_result_link,self__.constituencies,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null)], null))], null):null),(cljs.core.truth_(cljs.core.not_empty.call(null,self__.portfolio_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies"),om.core.build_all.call(null,clustermap.components.search.search_result_link,self__.portfolio_companies,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null)], null))], null):null),(cljs.core.truth_(cljs.core.not_empty.call(null,self__.investor_companies))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors"),om.core.build_all.call(null,clustermap.components.search.search_result_link,self__.investor_companies,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null)], null))], null):null)))):null));
});
clustermap.components.search.t11365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11367){var self__ = this;
var _11367__$1 = this;return self__.meta11366;
});
clustermap.components.search.t11365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11367,meta11366__$1){var self__ = this;
var _11367__$1 = this;return (new clustermap.components.search.t11365(self__.investor_companies,self__.search_box,self__.portfolio_companies,self__.p__11357,self__.data,self__.comm,self__.owner,self__.constituencies,self__.map__11363,self__.map__11364,self__.search_results,meta11366__$1));
});
clustermap.components.search.__GT_t11365 = (function __GT_t11365(investor_companies__$1,search_box__$1,portfolio_companies__$1,p__11357__$1,data__$1,comm__$1,owner__$1,constituencies__$1,map__11363__$2,map__11364__$2,search_results__$1,meta11366){return (new clustermap.components.search.t11365(investor_companies__$1,search_box__$1,portfolio_companies__$1,p__11357__$1,data__$1,comm__$1,owner__$1,constituencies__$1,map__11363__$2,map__11364__$2,search_results__$1,meta11366));
});
}
return (new clustermap.components.search.t11365(investor_companies,search_box,portfolio_companies,p__11357,data,comm,owner,constituencies,map__11363__$1,map__11364__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,cljs.core.partial.call(null,clustermap.components.search.search_box,comm),document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map