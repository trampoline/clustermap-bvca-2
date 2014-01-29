// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('jayq.core');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.search.ESCAPE_KEY = 27;
clustermap.components.search.ENTER_KEY = 13;
clustermap.components.search.LEFT_ARROW = 37;
clustermap.components.search.UP_ARROW = 38;
clustermap.components.search.RIGHT_ARROW = 39;
clustermap.components.search.DOWN_ARROW = 40;
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__31763){var map__31768 = p__31763;var map__31768__$1 = ((cljs.core.seq_QMARK_.call(null,map__31768))?cljs.core.apply.call(null,cljs.core.hash_map,map__31768):map__31768);var opts = map__31768__$1;var type = cljs.core.get.call(null,map__31768__$1,new cljs.core.Keyword(null,"type","type",1017479852));var comm = cljs.core.get.call(null,map__31768__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t31769 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t31769 = (function (comm,type,opts,map__31768,p__31763,owner,search_result,search_result_link,meta31770){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__31768 = map__31768;
this.p__31763 = p__31763;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta31770 = meta31770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t31769.cljs$lang$type = true;
clustermap.components.search.t31769.cljs$lang$ctorStr = "clustermap.components.search/t31769";
clustermap.components.search.t31769.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t31769");
});
clustermap.components.search.t31769.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t31769.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref.call(null,self__.search_result)], null)], null));
})},sablono.interpreter.interpret.call(null,self__.search_result.call(null,new cljs.core.Keyword(null,"name","name",1017277949))),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t31769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31771){var self__ = this;
var _31771__$1 = this;return self__.meta31770;
});
clustermap.components.search.t31769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31771,meta31770__$1){var self__ = this;
var _31771__$1 = this;return (new clustermap.components.search.t31769(self__.comm,self__.type,self__.opts,self__.map__31768,self__.p__31763,self__.owner,self__.search_result,self__.search_result_link,meta31770__$1));
});
clustermap.components.search.__GT_t31769 = (function __GT_t31769(comm__$1,type__$1,opts__$1,map__31768__$2,p__31763__$1,owner__$1,search_result__$1,search_result_link__$1,meta31770){return (new clustermap.components.search.t31769(comm__$1,type__$1,opts__$1,map__31768__$2,p__31763__$1,owner__$1,search_result__$1,search_result_link__$1,meta31770));
});
}
return (new clustermap.components.search.t31769(comm,type,opts,map__31768__$1,p__31763,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__31772,n){var map__31774 = p__31772;var map__31774__$1 = ((cljs.core.seq_QMARK_.call(null,map__31774))?cljs.core.apply.call(null,cljs.core.hash_map,map__31774):map__31774);var investor_companies = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__31774__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3406__auto__ = portfolio_companies;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3406__auto__ = investor_companies;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count.call(null,cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),cljs.core.get.call(null,constituencies,n)], null);
} else
{if((n < (cljs.core.count.call(null,cons) + cljs.core.count.call(null,pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),cljs.core.get.call(null,pcs,(n - cljs.core.count.call(null,cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),cljs.core.get.call(null,invs,((n - cljs.core.count.call(null,cons)) - cljs.core.count.call(null,pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){console.log(om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109)));
var pred__31781 = cljs.core._EQ__EQ_;var expr__31782 = e.keyCode;if(cljs.core.truth_(pred__31781.call(null,clustermap.components.search.ESCAPE_KEY,expr__31782)))
{var G__31784 = om.core.get_node.call(null,owner,"search-component");var G__31784__$1 = (((G__31784 == null))?null:jayq.core.$.call(null,G__31784));var G__31784__$2 = (((G__31784__$1 == null))?null:G__31784__$1.toggle());return G__31784__$2;
} else
{if(cljs.core.truth_(pred__31781.call(null,clustermap.components.search.ENTER_KEY,expr__31782)))
{var vec__31785 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__31785,0,null);var res = cljs.core.nth.call(null,vec__31785,1,null);var G__31786_31787 = om.core.get_node.call(null,owner,"search-component");var G__31786_31788__$1 = (((G__31786_31787 == null))?null:jayq.core.$.call(null,G__31786_31787));var G__31786_31789__$2 = (((G__31786_31788__$1 == null))?null:G__31786_31788__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_(pred__31781.call(null,clustermap.components.search.UP_ARROW,expr__31782)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__31781.call(null,clustermap.components.search.DOWN_ARROW,expr__31782)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() + 1));
} else
{return console.log(e.keyCode);
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__31818 = search_results;var map__31818__$1 = ((cljs.core.seq_QMARK_.call(null,map__31818))?cljs.core.apply.call(null,cljs.core.hash_map,map__31818):map__31818);var investor_companies = cljs.core.get.call(null,map__31818__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__31818__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__31818__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t31819 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t31819 = (function (constituencies,portfolio_companies,investor_companies,map__31818,comm,owner,search_results,search_component,meta31820){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__31818 = map__31818;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta31820 = meta31820;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t31819.cljs$lang$type = true;
clustermap.components.search.t31819.cljs$lang$ctorStr = "clustermap.components.search/t31819";
clustermap.components.search.t31819.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t31819");
});
clustermap.components.search.t31819.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t31819.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
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
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3406__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.call(null,om.dom.ul,{},cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__31822(s__31823){return (new cljs.core.LazySeq(null,(function (){var s__31823__$1 = s__31823;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31823__$1);if(temp__4092__auto__)
{var s__31823__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31823__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__31823__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__31825 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__31824 = 0;while(true){
if((i__31824 < size__4116__auto__))
{var vec__31828 = cljs.core._nth.call(null,c__4115__auto__,i__31824);var idx = cljs.core.nth.call(null,vec__31828,0,null);var con = cljs.core.nth.call(null,vec__31828,1,null);cljs.core.chunk_append.call(null,b__31825,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)));
{
var G__31846 = (i__31824 + 1);
i__31824 = G__31846;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31825),iter__31822.call(null,cljs.core.chunk_rest.call(null,s__31823__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31825),null);
}
} else
{var vec__31829 = cljs.core.first.call(null,s__31823__$2);var idx = cljs.core.nth.call(null,vec__31829,0,null);var con = cljs.core.nth.call(null,vec__31829,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)),iter__31822.call(null,cljs.core.rest.call(null,s__31823__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__31830(s__31831){return (new cljs.core.LazySeq(null,(function (){var s__31831__$1 = s__31831;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31831__$1);if(temp__4092__auto__)
{var s__31831__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31831__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__31831__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__31833 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__31832 = 0;while(true){
if((i__31832 < size__4116__auto__))
{var vec__31836 = cljs.core._nth.call(null,c__4115__auto__,i__31832);var idx = cljs.core.nth.call(null,vec__31836,0,null);var pc = cljs.core.nth.call(null,vec__31836,1,null);cljs.core.chunk_append.call(null,b__31833,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)));
{
var G__31847 = (i__31832 + 1);
i__31832 = G__31847;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31833),iter__31830.call(null,cljs.core.chunk_rest.call(null,s__31831__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31833),null);
}
} else
{var vec__31837 = cljs.core.first.call(null,s__31831__$2);var idx = cljs.core.nth.call(null,vec__31837,0,null);var pc = cljs.core.nth.call(null,vec__31837,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)),iter__31830.call(null,cljs.core.rest.call(null,s__31831__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__31838(s__31839){return (new cljs.core.LazySeq(null,(function (){var s__31839__$1 = s__31839;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31839__$1);if(temp__4092__auto__)
{var s__31839__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31839__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__31839__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__31841 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__31840 = 0;while(true){
if((i__31840 < size__4116__auto__))
{var vec__31844 = cljs.core._nth.call(null,c__4115__auto__,i__31840);var idx = cljs.core.nth.call(null,vec__31844,0,null);var inv = cljs.core.nth.call(null,vec__31844,1,null);cljs.core.chunk_append.call(null,b__31841,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)));
{
var G__31848 = (i__31840 + 1);
i__31840 = G__31848;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31841),iter__31838.call(null,cljs.core.chunk_rest.call(null,s__31839__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31841),null);
}
} else
{var vec__31845 = cljs.core.first.call(null,s__31839__$2);var idx = cljs.core.nth.call(null,vec__31845,0,null);var inv = cljs.core.nth.call(null,vec__31845,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)),iter__31838.call(null,cljs.core.rest.call(null,s__31839__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_invs);
})()):null))));
})():null));
});
clustermap.components.search.t31819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31821){var self__ = this;
var _31821__$1 = this;return self__.meta31820;
});
clustermap.components.search.t31819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31821,meta31820__$1){var self__ = this;
var _31821__$1 = this;return (new clustermap.components.search.t31819(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__31818,self__.comm,self__.owner,self__.search_results,self__.search_component,meta31820__$1));
});
clustermap.components.search.__GT_t31819 = (function __GT_t31819(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__31818__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta31820){return (new clustermap.components.search.t31819(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__31818__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta31820));
});
}
return (new clustermap.components.search.t31819(constituencies,portfolio_companies,investor_companies,map__31818__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});
