// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('clustermap.om');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
clustermap.components.search.ESCAPE_KEY = 27;
clustermap.components.search.ENTER_KEY = 13;
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__30790){var map__30795 = p__30790;var map__30795__$1 = ((cljs.core.seq_QMARK_.call(null,map__30795))?cljs.core.apply.call(null,cljs.core.hash_map,map__30795):map__30795);var opts = map__30795__$1;var type = cljs.core.get.call(null,map__30795__$1,new cljs.core.Keyword(null,"type","type",1017479852));var comm = cljs.core.get.call(null,map__30795__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t30796 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t30796 = (function (comm,type,opts,map__30795,p__30790,owner,search_result,search_result_link,meta30797){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__30795 = map__30795;
this.p__30790 = p__30790;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta30797 = meta30797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t30796.cljs$lang$type = true;
clustermap.components.search.t30796.cljs$lang$ctorStr = "clustermap.components.search/t30796";
clustermap.components.search.t30796.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t30796");
});
clustermap.components.search.t30796.prototype.om$core$IRender$ = true;
clustermap.components.search.t30796.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.li({},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,om.core.read.call(null,self__.search_result,om.core.value)], null)], null));
})},self__.search_result.call(null,new cljs.core.Keyword(null,"name","name",1017277949))));
});
clustermap.components.search.t30796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30798){var self__ = this;
var _30798__$1 = this;return self__.meta30797;
});
clustermap.components.search.t30796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30798,meta30797__$1){var self__ = this;
var _30798__$1 = this;return (new clustermap.components.search.t30796(self__.comm,self__.type,self__.opts,self__.map__30795,self__.p__30790,self__.owner,self__.search_result,self__.search_result_link,meta30797__$1));
});
clustermap.components.search.__GT_t30796 = (function __GT_t30796(comm__$1,type__$1,opts__$1,map__30795__$2,p__30790__$1,owner__$1,search_result__$1,search_result_link__$1,meta30797){return (new clustermap.components.search.t30796(comm__$1,type__$1,opts__$1,map__30795__$2,p__30790__$1,owner__$1,search_result__$1,search_result_link__$1,meta30797));
});
}
return (new clustermap.components.search.t30796(comm,type,opts,map__30795__$1,p__30790,owner,search_result,search_result_link,null));
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__30803 = cljs.core._EQ__EQ_;var expr__30804 = e.keyCode;if(cljs.core.truth_(pred__30803.call(null,clustermap.components.search.ESCAPE_KEY,expr__30804)))
{var G__30806 = om.core.get_node.call(null,owner,"search-component");var G__30806__$1 = (((G__30806 == null))?null:jayq.core.$.call(null,G__30806));var G__30806__$2 = (((G__30806__$1 == null))?null:G__30806__$1.toggle());return G__30806__$2;
} else
{return null;
}
});
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__30811 = search_results;var map__30811__$1 = ((cljs.core.seq_QMARK_.call(null,map__30811))?cljs.core.apply.call(null,cljs.core.hash_map,map__30811):map__30811);var investor_companies = cljs.core.get.call(null,map__30811__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__30811__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__30811__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t30812 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t30812 = (function (constituencies,portfolio_companies,investor_companies,map__30811,comm,owner,search_results,search_component,meta30813){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__30811 = map__30811;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta30813 = meta30813;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t30812.cljs$lang$type = true;
clustermap.components.search.t30812.cljs$lang$ctorStr = "clustermap.components.search/t30812";
clustermap.components.search.t30812.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t30812");
});
clustermap.components.search.t30812.prototype.om$core$IRender$ = true;
clustermap.components.search.t30812.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div({"onKeyDown": om.core.bind.call(null,clustermap.components.search.key_down,self__.search_results,self__.owner,self__.comm), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
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
clustermap.components.search.t30812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30814){var self__ = this;
var _30814__$1 = this;return self__.meta30813;
});
clustermap.components.search.t30812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30814,meta30813__$1){var self__ = this;
var _30814__$1 = this;return (new clustermap.components.search.t30812(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__30811,self__.comm,self__.owner,self__.search_results,self__.search_component,meta30813__$1));
});
clustermap.components.search.__GT_t30812 = (function __GT_t30812(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__30811__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta30813){return (new clustermap.components.search.t30812(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__30811__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta30813));
});
}
return (new clustermap.components.search.t30812(constituencies,portfolio_companies,investor_companies,map__30811__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});
