// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.om');
goog.require('clustermap.model');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.model');
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
clustermap.components.search.search_result_link = (function search_result_link(p__45568,owner,p__45569){var map__45578 = p__45568;var map__45578__$1 = ((cljs.core.seq_QMARK_.call(null,map__45578))?cljs.core.apply.call(null,cljs.core.hash_map,map__45578):map__45578);var search_result = map__45578__$1;var type = cljs.core.get.call(null,map__45578__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__45578__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__45579 = p__45569;var map__45579__$1 = ((cljs.core.seq_QMARK_.call(null,map__45579))?cljs.core.apply.call(null,cljs.core.hash_map,map__45579):map__45579);var opts = map__45579__$1;var path_fn = cljs.core.get.call(null,map__45579__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45579__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t45580 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t45580 = (function (opts,path_fn,p__45568,map__45579,p__45569,map__45578,name,comm,search_result,owner,type,search_result_link,meta45581){
this.opts = opts;
this.path_fn = path_fn;
this.p__45568 = p__45568;
this.map__45579 = map__45579;
this.p__45569 = p__45569;
this.map__45578 = map__45578;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta45581 = meta45581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t45580.cljs$lang$type = true;
clustermap.components.search.t45580.cljs$lang$ctorStr = "clustermap.components.search/t45580";
clustermap.components.search.t45580.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t45580");
});
clustermap.components.search.t45580.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t45580.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__45583){var self__ = this;
var map__45584 = p__45583;var map__45584__$1 = ((cljs.core.seq_QMARK_.call(null,map__45584))?cljs.core.apply.call(null,cljs.core.hash_map,map__45584):map__45584);var state = map__45584__$1;var selected = cljs.core.get.call(null,map__45584__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__45585 = l;var G__45585__$1 = (((G__45585 == null))?null:jayq.core.$.call(null,G__45585));var G__45585__$2 = (((G__45585__$1 == null))?null:G__45585__$1.parents(".search-component"));var G__45585__$3 = (((G__45585__$2 == null))?null:G__45585__$2.toggle());return G__45585__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t45580.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45582){var self__ = this;
var _45582__$1 = this;return self__.meta45581;
});
clustermap.components.search.t45580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45582,meta45581__$1){var self__ = this;
var _45582__$1 = this;return (new clustermap.components.search.t45580(self__.opts,self__.path_fn,self__.p__45568,self__.map__45579,self__.p__45569,self__.map__45578,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta45581__$1));
});
clustermap.components.search.__GT_t45580 = (function __GT_t45580(opts__$1,path_fn__$1,p__45568__$1,map__45579__$2,p__45569__$1,map__45578__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta45581){return (new clustermap.components.search.t45580(opts__$1,path_fn__$1,p__45568__$1,map__45579__$2,p__45569__$1,map__45578__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta45581));
});
}
return (new clustermap.components.search.t45580(opts,path_fn,p__45568,map__45579__$1,p__45569,map__45578__$1,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__45586,n){var map__45588 = p__45586;var map__45588__$1 = ((cljs.core.seq_QMARK_.call(null,map__45588))?cljs.core.apply.call(null,cljs.core.hash_map,map__45588):map__45588);var investor_companies = cljs.core.get.call(null,map__45588__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__45588__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__45588__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3441__auto__ = portfolio_companies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3441__auto__ = investor_companies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__45595 = cljs.core._EQ__EQ_;var expr__45596 = e.keyCode;if(cljs.core.truth_(pred__45595.call(null,clustermap.components.search.ESCAPE_KEY,expr__45596)))
{var G__45598 = om.core.get_node.call(null,owner,"search-component");var G__45598__$1 = (((G__45598 == null))?null:jayq.core.$.call(null,G__45598));var G__45598__$2 = (((G__45598__$1 == null))?null:G__45598__$1.toggle());return G__45598__$2;
} else
{if(cljs.core.truth_(pred__45595.call(null,clustermap.components.search.ENTER_KEY,expr__45596)))
{var vec__45599 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__45599,0,null);var res = cljs.core.nth.call(null,vec__45599,1,null);var G__45600_45601 = om.core.get_node.call(null,owner,"search-component");var G__45600_45602__$1 = (((G__45600_45601 == null))?null:jayq.core.$.call(null,G__45600_45601));var G__45600_45603__$2 = (((G__45600_45602__$1 == null))?null:G__45600_45602__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__45595.call(null,clustermap.components.search.UP_ARROW,expr__45596)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__45595.call(null,clustermap.components.search.DOWN_ARROW,expr__45596)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() + 1));
} else
{return null;
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(p__45604,owner){var map__45636 = p__45604;var map__45636__$1 = ((cljs.core.seq_QMARK_.call(null,map__45636))?cljs.core.apply.call(null,cljs.core.hash_map,map__45636):map__45636);var map__45637 = cljs.core.get.call(null,map__45636__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__45637__$1 = ((cljs.core.seq_QMARK_.call(null,map__45637))?cljs.core.apply.call(null,cljs.core.hash_map,map__45637):map__45637);var selection_type = cljs.core.get.call(null,map__45637__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__45637__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__45636__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__45638 = om.core.get_shared.call(null,owner);var map__45638__$1 = ((cljs.core.seq_QMARK_.call(null,map__45638))?cljs.core.apply.call(null,cljs.core.hash_map,map__45638):map__45638);var path_fn = cljs.core.get.call(null,map__45638__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45638__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__45639 = search_results;var map__45639__$1 = ((cljs.core.seq_QMARK_.call(null,map__45639))?cljs.core.apply.call(null,cljs.core.hash_map,map__45639):map__45639);var investor_companies = cljs.core.get.call(null,map__45639__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__45639__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__45639__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t45640 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t45640 = (function (p__45604,investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,map__45636,map__45637,owner,map__45638,constituencies,map__45639,search_results,meta45641){
this.p__45604 = p__45604;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.map__45636 = map__45636;
this.map__45637 = map__45637;
this.owner = owner;
this.map__45638 = map__45638;
this.constituencies = constituencies;
this.map__45639 = map__45639;
this.search_results = search_results;
this.meta45641 = meta45641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t45640.cljs$lang$type = true;
clustermap.components.search.t45640.cljs$lang$ctorStr = "clustermap.components.search/t45640";
clustermap.components.search.t45640.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t45640");
});
clustermap.components.search.t45640.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t45640.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
})})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
})},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3441__auto____$1))
{return or__3441__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3441__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__45643(s__45644){return (new cljs.core.LazySeq(null,(function (){var s__45644__$1 = s__45644;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45644__$1);if(temp__4092__auto__)
{var s__45644__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45644__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45644__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45646 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45645 = 0;while(true){
if((i__45645 < size__4157__auto__))
{var vec__45649 = cljs.core._nth.call(null,c__4156__auto__,i__45645);var idx = cljs.core.nth.call(null,vec__45649,0,null);var con = cljs.core.nth.call(null,vec__45649,1,null);cljs.core.chunk_append.call(null,b__45646,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45645,vec__45649,idx,con,c__4156__auto__,size__4157__auto__,b__45646,s__45644__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__45645,vec__45649,idx,con,c__4156__auto__,size__4157__auto__,b__45646,s__45644__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45667 = (i__45645 + 1);
i__45645 = G__45667;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45646),iter__45643.call(null,cljs.core.chunk_rest.call(null,s__45644__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45646),null);
}
} else
{var vec__45650 = cljs.core.first.call(null,s__45644__$2);var idx = cljs.core.nth.call(null,vec__45650,0,null);var con = cljs.core.nth.call(null,vec__45650,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45650,idx,con,s__45644__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__45650,idx,con,s__45644__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45643.call(null,cljs.core.rest.call(null,s__45644__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__45651(s__45652){return (new cljs.core.LazySeq(null,(function (){var s__45652__$1 = s__45652;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45652__$1);if(temp__4092__auto__)
{var s__45652__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45652__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45652__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45654 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45653 = 0;while(true){
if((i__45653 < size__4157__auto__))
{var vec__45657 = cljs.core._nth.call(null,c__4156__auto__,i__45653);var idx = cljs.core.nth.call(null,vec__45657,0,null);var pc = cljs.core.nth.call(null,vec__45657,1,null);cljs.core.chunk_append.call(null,b__45654,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45653,vec__45657,idx,pc,c__4156__auto__,size__4157__auto__,b__45654,s__45652__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__45653,vec__45657,idx,pc,c__4156__auto__,size__4157__auto__,b__45654,s__45652__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45668 = (i__45653 + 1);
i__45653 = G__45668;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45654),iter__45651.call(null,cljs.core.chunk_rest.call(null,s__45652__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45654),null);
}
} else
{var vec__45658 = cljs.core.first.call(null,s__45652__$2);var idx = cljs.core.nth.call(null,vec__45658,0,null);var pc = cljs.core.nth.call(null,vec__45658,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45658,idx,pc,s__45652__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__45658,idx,pc,s__45652__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45651.call(null,cljs.core.rest.call(null,s__45652__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__45659(s__45660){return (new cljs.core.LazySeq(null,(function (){var s__45660__$1 = s__45660;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45660__$1);if(temp__4092__auto__)
{var s__45660__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45660__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45660__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45662 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45661 = 0;while(true){
if((i__45661 < size__4157__auto__))
{var vec__45665 = cljs.core._nth.call(null,c__4156__auto__,i__45661);var idx = cljs.core.nth.call(null,vec__45665,0,null);var inv = cljs.core.nth.call(null,vec__45665,1,null);cljs.core.chunk_append.call(null,b__45662,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45661,vec__45665,idx,inv,c__4156__auto__,size__4157__auto__,b__45662,s__45660__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__45661,vec__45665,idx,inv,c__4156__auto__,size__4157__auto__,b__45662,s__45660__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45669 = (i__45661 + 1);
i__45661 = G__45669;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45662),iter__45659.call(null,cljs.core.chunk_rest.call(null,s__45660__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45662),null);
}
} else
{var vec__45666 = cljs.core.first.call(null,s__45660__$2);var idx = cljs.core.nth.call(null,vec__45666,0,null);var inv = cljs.core.nth.call(null,vec__45666,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45666,idx,inv,s__45660__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__45666,idx,inv,s__45660__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45659.call(null,cljs.core.rest.call(null,s__45660__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_invs);
})()):null)], null)], null);
})():null)));
});
clustermap.components.search.t45640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45642){var self__ = this;
var _45642__$1 = this;return self__.meta45641;
});
clustermap.components.search.t45640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45642,meta45641__$1){var self__ = this;
var _45642__$1 = this;return (new clustermap.components.search.t45640(self__.p__45604,self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.selection_type,self__.map__45636,self__.map__45637,self__.owner,self__.map__45638,self__.constituencies,self__.map__45639,self__.search_results,meta45641__$1));
});
clustermap.components.search.__GT_t45640 = (function __GT_t45640(p__45604__$1,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,map__45636__$2,map__45637__$2,owner__$1,map__45638__$2,constituencies__$1,map__45639__$2,search_results__$1,meta45641){return (new clustermap.components.search.t45640(p__45604__$1,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,map__45636__$2,map__45637__$2,owner__$1,map__45638__$2,constituencies__$1,map__45639__$2,search_results__$1,meta45641));
});
}
return (new clustermap.components.search.t45640(p__45604,investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,map__45636__$1,map__45637__$1,owner,map__45638__$1,constituencies,map__45639__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
