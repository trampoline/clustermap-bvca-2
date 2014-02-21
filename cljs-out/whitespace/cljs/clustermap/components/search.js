// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.routes');
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
clustermap.components.search.search_result_link = (function search_result_link(p__33530,owner,p__33531){var map__33540 = p__33530;var map__33540__$1 = ((cljs.core.seq_QMARK_.call(null,map__33540))?cljs.core.apply.call(null,cljs.core.hash_map,map__33540):map__33540);var search_result = map__33540__$1;var type = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__33541 = p__33531;var map__33541__$1 = ((cljs.core.seq_QMARK_.call(null,map__33541))?cljs.core.apply.call(null,cljs.core.hash_map,map__33541):map__33541);var opts = map__33541__$1;var path_fn = cljs.core.get.call(null,map__33541__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33541__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t33542 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33542 = (function (opts,p__33531,p__33530,path_fn,name,comm,search_result,owner,map__33541,map__33540,type,search_result_link,meta33543){
this.opts = opts;
this.p__33531 = p__33531;
this.p__33530 = p__33530;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.map__33541 = map__33541;
this.map__33540 = map__33540;
this.type = type;
this.search_result_link = search_result_link;
this.meta33543 = meta33543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33542.cljs$lang$type = true;
clustermap.components.search.t33542.cljs$lang$ctorStr = "clustermap.components.search/t33542";
clustermap.components.search.t33542.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33542");
});
clustermap.components.search.t33542.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33542.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__33545){var self__ = this;
var map__33546 = p__33545;var map__33546__$1 = ((cljs.core.seq_QMARK_.call(null,map__33546))?cljs.core.apply.call(null,cljs.core.hash_map,map__33546):map__33546);var state = map__33546__$1;var selected = cljs.core.get.call(null,map__33546__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__33547 = l;var G__33547__$1 = (((G__33547 == null))?null:jayq.core.$.call(null,G__33547));var G__33547__$2 = (((G__33547__$1 == null))?null:G__33547__$1.parents(".search-component"));var G__33547__$3 = (((G__33547__$2 == null))?null:G__33547__$2.toggle());return G__33547__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t33542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33544){var self__ = this;
var _33544__$1 = this;return self__.meta33543;
});
clustermap.components.search.t33542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33544,meta33543__$1){var self__ = this;
var _33544__$1 = this;return (new clustermap.components.search.t33542(self__.opts,self__.p__33531,self__.p__33530,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.map__33541,self__.map__33540,self__.type,self__.search_result_link,meta33543__$1));
});
clustermap.components.search.__GT_t33542 = (function __GT_t33542(opts__$1,p__33531__$1,p__33530__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__33541__$2,map__33540__$2,type__$1,search_result_link__$1,meta33543){return (new clustermap.components.search.t33542(opts__$1,p__33531__$1,p__33530__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__33541__$2,map__33540__$2,type__$1,search_result_link__$1,meta33543));
});
}
return (new clustermap.components.search.t33542(opts,p__33531,p__33530,path_fn,name,comm,search_result,owner,map__33541__$1,map__33540__$1,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__33548,n){var map__33550 = p__33548;var map__33550__$1 = ((cljs.core.seq_QMARK_.call(null,map__33550))?cljs.core.apply.call(null,cljs.core.hash_map,map__33550):map__33550);var investor_companies = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33550__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__33557 = cljs.core._EQ__EQ_;var expr__33558 = e.keyCode;if(cljs.core.truth_(pred__33557.call(null,clustermap.components.search.ESCAPE_KEY,expr__33558)))
{var G__33560 = om.core.get_node.call(null,owner,"search-component");var G__33560__$1 = (((G__33560 == null))?null:jayq.core.$.call(null,G__33560));var G__33560__$2 = (((G__33560__$1 == null))?null:G__33560__$1.toggle());return G__33560__$2;
} else
{if(cljs.core.truth_(pred__33557.call(null,clustermap.components.search.ENTER_KEY,expr__33558)))
{var vec__33561 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__33561,0,null);var res = cljs.core.nth.call(null,vec__33561,1,null);var G__33562_33563 = om.core.get_node.call(null,owner,"search-component");var G__33562_33564__$1 = (((G__33562_33563 == null))?null:jayq.core.$.call(null,G__33562_33563));var G__33562_33565__$2 = (((G__33562_33564__$1 == null))?null:G__33562_33564__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__33557.call(null,clustermap.components.search.UP_ARROW,expr__33558)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__33557.call(null,clustermap.components.search.DOWN_ARROW,expr__33558)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
clustermap.components.search.search_component = (function search_component(p__33566,owner){var map__33598 = p__33566;var map__33598__$1 = ((cljs.core.seq_QMARK_.call(null,map__33598))?cljs.core.apply.call(null,cljs.core.hash_map,map__33598):map__33598);var map__33599 = cljs.core.get.call(null,map__33598__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__33599__$1 = ((cljs.core.seq_QMARK_.call(null,map__33599))?cljs.core.apply.call(null,cljs.core.hash_map,map__33599):map__33599);var selection_type = cljs.core.get.call(null,map__33599__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__33599__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__33598__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__33600 = om.core.get_shared.call(null,owner);var map__33600__$1 = ((cljs.core.seq_QMARK_.call(null,map__33600))?cljs.core.apply.call(null,cljs.core.hash_map,map__33600):map__33600);var path_fn = cljs.core.get.call(null,map__33600__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33600__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__33601 = search_results;var map__33601__$1 = ((cljs.core.seq_QMARK_.call(null,map__33601))?cljs.core.apply.call(null,cljs.core.hash_map,map__33601):map__33601);var investor_companies = cljs.core.get.call(null,map__33601__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33601__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33601__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t33602 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33602 = (function (investor_companies,map__33601,selection_value,path_fn,map__33600,portfolio_companies,search_component,map__33599,map__33598,comm,selection_type,owner,constituencies,search_results,p__33566,meta33603){
this.investor_companies = investor_companies;
this.map__33601 = map__33601;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.map__33600 = map__33600;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__33599 = map__33599;
this.map__33598 = map__33598;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.p__33566 = p__33566;
this.meta33603 = meta33603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33602.cljs$lang$type = true;
clustermap.components.search.t33602.cljs$lang$ctorStr = "clustermap.components.search/t33602";
clustermap.components.search.t33602.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33602");
});
clustermap.components.search.t33602.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33602.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
})})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
})},"\u00D7")),(cljs.core.truth_(self__.selection_value)?React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": self__.path_fn.call(null,null,null)},React.DOM.button({"className": "btn-reset", "type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
})},"Reset to UK wide"))):null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__33605(s__33606){return (new cljs.core.LazySeq(null,(function (){var s__33606__$1 = s__33606;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33606__$1);if(temp__4092__auto__)
{var s__33606__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33606__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33606__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33608 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33607 = 0;while(true){
if((i__33607 < size__4116__auto__))
{var vec__33611 = cljs.core._nth.call(null,c__4115__auto__,i__33607);var idx = cljs.core.nth.call(null,vec__33611,0,null);var con = cljs.core.nth.call(null,vec__33611,1,null);cljs.core.chunk_append.call(null,b__33608,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33607,vec__33611,idx,con,c__4115__auto__,size__4116__auto__,b__33608,s__33606__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__33607,vec__33611,idx,con,c__4115__auto__,size__4116__auto__,b__33608,s__33606__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33629 = (i__33607 + 1);
i__33607 = G__33629;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33608),iter__33605.call(null,cljs.core.chunk_rest.call(null,s__33606__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33608),null);
}
} else
{var vec__33612 = cljs.core.first.call(null,s__33606__$2);var idx = cljs.core.nth.call(null,vec__33612,0,null);var con = cljs.core.nth.call(null,vec__33612,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33612,idx,con,s__33606__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__33612,idx,con,s__33606__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33605.call(null,cljs.core.rest.call(null,s__33606__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__33613(s__33614){return (new cljs.core.LazySeq(null,(function (){var s__33614__$1 = s__33614;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33614__$1);if(temp__4092__auto__)
{var s__33614__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33614__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33614__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33616 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33615 = 0;while(true){
if((i__33615 < size__4116__auto__))
{var vec__33619 = cljs.core._nth.call(null,c__4115__auto__,i__33615);var idx = cljs.core.nth.call(null,vec__33619,0,null);var pc = cljs.core.nth.call(null,vec__33619,1,null);cljs.core.chunk_append.call(null,b__33616,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33615,vec__33619,idx,pc,c__4115__auto__,size__4116__auto__,b__33616,s__33614__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__33615,vec__33619,idx,pc,c__4115__auto__,size__4116__auto__,b__33616,s__33614__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33630 = (i__33615 + 1);
i__33615 = G__33630;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33616),iter__33613.call(null,cljs.core.chunk_rest.call(null,s__33614__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33616),null);
}
} else
{var vec__33620 = cljs.core.first.call(null,s__33614__$2);var idx = cljs.core.nth.call(null,vec__33620,0,null);var pc = cljs.core.nth.call(null,vec__33620,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33620,idx,pc,s__33614__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__33620,idx,pc,s__33614__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33613.call(null,cljs.core.rest.call(null,s__33614__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__33621(s__33622){return (new cljs.core.LazySeq(null,(function (){var s__33622__$1 = s__33622;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33622__$1);if(temp__4092__auto__)
{var s__33622__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33622__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33622__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33624 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33623 = 0;while(true){
if((i__33623 < size__4116__auto__))
{var vec__33627 = cljs.core._nth.call(null,c__4115__auto__,i__33623);var idx = cljs.core.nth.call(null,vec__33627,0,null);var inv = cljs.core.nth.call(null,vec__33627,1,null);cljs.core.chunk_append.call(null,b__33624,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33623,vec__33627,idx,inv,c__4115__auto__,size__4116__auto__,b__33624,s__33622__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__33623,vec__33627,idx,inv,c__4115__auto__,size__4116__auto__,b__33624,s__33622__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33631 = (i__33623 + 1);
i__33623 = G__33631;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33624),iter__33621.call(null,cljs.core.chunk_rest.call(null,s__33622__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33624),null);
}
} else
{var vec__33628 = cljs.core.first.call(null,s__33622__$2);var idx = cljs.core.nth.call(null,vec__33628,0,null);var inv = cljs.core.nth.call(null,vec__33628,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33628,idx,inv,s__33622__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__33628,idx,inv,s__33622__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33621.call(null,cljs.core.rest.call(null,s__33622__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_invs);
})()):null)], null)], null);
})():null)));
});
clustermap.components.search.t33602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33604){var self__ = this;
var _33604__$1 = this;return self__.meta33603;
});
clustermap.components.search.t33602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33604,meta33603__$1){var self__ = this;
var _33604__$1 = this;return (new clustermap.components.search.t33602(self__.investor_companies,self__.map__33601,self__.selection_value,self__.path_fn,self__.map__33600,self__.portfolio_companies,self__.search_component,self__.map__33599,self__.map__33598,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,self__.p__33566,meta33603__$1));
});
clustermap.components.search.__GT_t33602 = (function __GT_t33602(investor_companies__$1,map__33601__$2,selection_value__$1,path_fn__$1,map__33600__$2,portfolio_companies__$1,search_component__$1,map__33599__$2,map__33598__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,p__33566__$1,meta33603){return (new clustermap.components.search.t33602(investor_companies__$1,map__33601__$2,selection_value__$1,path_fn__$1,map__33600__$2,portfolio_companies__$1,search_component__$1,map__33599__$2,map__33598__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,p__33566__$1,meta33603));
});
}
return (new clustermap.components.search.t33602(investor_companies,map__33601__$1,selection_value,path_fn,map__33600__$1,portfolio_companies,search_component,map__33599__$1,map__33598__$1,comm,selection_type,owner,constituencies,search_results,p__33566,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
