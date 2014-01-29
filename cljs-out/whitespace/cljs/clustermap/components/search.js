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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__31789){var map__31794 = p__31789;var map__31794__$1 = ((cljs.core.seq_QMARK_.call(null,map__31794))?cljs.core.apply.call(null,cljs.core.hash_map,map__31794):map__31794);var opts = map__31794__$1;var type = cljs.core.get.call(null,map__31794__$1,new cljs.core.Keyword(null,"type","type",1017479852));var comm = cljs.core.get.call(null,map__31794__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t31795 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t31795 = (function (comm,type,opts,map__31794,p__31789,owner,search_result,search_result_link,meta31796){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__31794 = map__31794;
this.p__31789 = p__31789;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta31796 = meta31796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t31795.cljs$lang$type = true;
clustermap.components.search.t31795.cljs$lang$ctorStr = "clustermap.components.search/t31795";
clustermap.components.search.t31795.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t31795");
});
clustermap.components.search.t31795.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t31795.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref.call(null,self__.search_result)], null)], null));
})},sablono.interpreter.interpret.call(null,self__.search_result.call(null,new cljs.core.Keyword(null,"name","name",1017277949))),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t31795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31797){var self__ = this;
var _31797__$1 = this;return self__.meta31796;
});
clustermap.components.search.t31795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31797,meta31796__$1){var self__ = this;
var _31797__$1 = this;return (new clustermap.components.search.t31795(self__.comm,self__.type,self__.opts,self__.map__31794,self__.p__31789,self__.owner,self__.search_result,self__.search_result_link,meta31796__$1));
});
clustermap.components.search.__GT_t31795 = (function __GT_t31795(comm__$1,type__$1,opts__$1,map__31794__$2,p__31789__$1,owner__$1,search_result__$1,search_result_link__$1,meta31796){return (new clustermap.components.search.t31795(comm__$1,type__$1,opts__$1,map__31794__$2,p__31789__$1,owner__$1,search_result__$1,search_result_link__$1,meta31796));
});
}
return (new clustermap.components.search.t31795(comm,type,opts,map__31794__$1,p__31789,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__31798,n){var map__31800 = p__31798;var map__31800__$1 = ((cljs.core.seq_QMARK_.call(null,map__31800))?cljs.core.apply.call(null,cljs.core.hash_map,map__31800):map__31800);var investor_companies = cljs.core.get.call(null,map__31800__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__31800__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__31800__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
var pred__31807 = cljs.core._EQ__EQ_;var expr__31808 = e.keyCode;if(cljs.core.truth_(pred__31807.call(null,clustermap.components.search.ESCAPE_KEY,expr__31808)))
{var G__31810 = om.core.get_node.call(null,owner,"search-component");var G__31810__$1 = (((G__31810 == null))?null:jayq.core.$.call(null,G__31810));var G__31810__$2 = (((G__31810__$1 == null))?null:G__31810__$1.toggle());return G__31810__$2;
} else
{if(cljs.core.truth_(pred__31807.call(null,clustermap.components.search.ENTER_KEY,expr__31808)))
{var vec__31811 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__31811,0,null);var res = cljs.core.nth.call(null,vec__31811,1,null);var G__31812_31813 = om.core.get_node.call(null,owner,"search-component");var G__31812_31814__$1 = (((G__31812_31813 == null))?null:jayq.core.$.call(null,G__31812_31813));var G__31812_31815__$2 = (((G__31812_31814__$1 == null))?null:G__31812_31814__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_(pred__31807.call(null,clustermap.components.search.UP_ARROW,expr__31808)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__31807.call(null,clustermap.components.search.DOWN_ARROW,expr__31808)))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__31844 = search_results;var map__31844__$1 = ((cljs.core.seq_QMARK_.call(null,map__31844))?cljs.core.apply.call(null,cljs.core.hash_map,map__31844):map__31844);var investor_companies = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__31844__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t31845 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t31845 = (function (constituencies,portfolio_companies,investor_companies,map__31844,comm,owner,search_results,search_component,meta31846){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__31844 = map__31844;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta31846 = meta31846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t31845.cljs$lang$type = true;
clustermap.components.search.t31845.cljs$lang$ctorStr = "clustermap.components.search/t31845";
clustermap.components.search.t31845.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t31845");
});
clustermap.components.search.t31845.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t31845.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.call(null,om.dom.ul,{},cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__31848(s__31849){return (new cljs.core.LazySeq(null,(function (){var s__31849__$1 = s__31849;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31849__$1);if(temp__4092__auto__)
{var s__31849__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31849__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__31849__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__31851 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__31850 = 0;while(true){
if((i__31850 < size__4116__auto__))
{var vec__31854 = cljs.core._nth.call(null,c__4115__auto__,i__31850);var idx = cljs.core.nth.call(null,vec__31854,0,null);var con = cljs.core.nth.call(null,vec__31854,1,null);cljs.core.chunk_append.call(null,b__31851,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)));
{
var G__31872 = (i__31850 + 1);
i__31850 = G__31872;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31851),iter__31848.call(null,cljs.core.chunk_rest.call(null,s__31849__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31851),null);
}
} else
{var vec__31855 = cljs.core.first.call(null,s__31849__$2);var idx = cljs.core.nth.call(null,vec__31855,0,null);var con = cljs.core.nth.call(null,vec__31855,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)),iter__31848.call(null,cljs.core.rest.call(null,s__31849__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__31856(s__31857){return (new cljs.core.LazySeq(null,(function (){var s__31857__$1 = s__31857;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31857__$1);if(temp__4092__auto__)
{var s__31857__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31857__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__31857__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__31859 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__31858 = 0;while(true){
if((i__31858 < size__4116__auto__))
{var vec__31862 = cljs.core._nth.call(null,c__4115__auto__,i__31858);var idx = cljs.core.nth.call(null,vec__31862,0,null);var pc = cljs.core.nth.call(null,vec__31862,1,null);cljs.core.chunk_append.call(null,b__31859,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)));
{
var G__31873 = (i__31858 + 1);
i__31858 = G__31873;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31859),iter__31856.call(null,cljs.core.chunk_rest.call(null,s__31857__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31859),null);
}
} else
{var vec__31863 = cljs.core.first.call(null,s__31857__$2);var idx = cljs.core.nth.call(null,vec__31863,0,null);var pc = cljs.core.nth.call(null,vec__31863,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)),iter__31856.call(null,cljs.core.rest.call(null,s__31857__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__31864(s__31865){return (new cljs.core.LazySeq(null,(function (){var s__31865__$1 = s__31865;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__31865__$1);if(temp__4092__auto__)
{var s__31865__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31865__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__31865__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__31867 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__31866 = 0;while(true){
if((i__31866 < size__4116__auto__))
{var vec__31870 = cljs.core._nth.call(null,c__4115__auto__,i__31866);var idx = cljs.core.nth.call(null,vec__31870,0,null);var inv = cljs.core.nth.call(null,vec__31870,1,null);cljs.core.chunk_append.call(null,b__31867,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)));
{
var G__31874 = (i__31866 + 1);
i__31866 = G__31874;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31867),iter__31864.call(null,cljs.core.chunk_rest.call(null,s__31865__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31867),null);
}
} else
{var vec__31871 = cljs.core.first.call(null,s__31865__$2);var idx = cljs.core.nth.call(null,vec__31871,0,null);var inv = cljs.core.nth.call(null,vec__31871,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null)], null)),iter__31864.call(null,cljs.core.rest.call(null,s__31865__$2)));
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
clustermap.components.search.t31845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31847){var self__ = this;
var _31847__$1 = this;return self__.meta31846;
});
clustermap.components.search.t31845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31847,meta31846__$1){var self__ = this;
var _31847__$1 = this;return (new clustermap.components.search.t31845(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__31844,self__.comm,self__.owner,self__.search_results,self__.search_component,meta31846__$1));
});
clustermap.components.search.__GT_t31845 = (function __GT_t31845(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__31844__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta31846){return (new clustermap.components.search.t31845(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__31844__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta31846));
});
}
return (new clustermap.components.search.t31845(constituencies,portfolio_companies,investor_companies,map__31844__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});
