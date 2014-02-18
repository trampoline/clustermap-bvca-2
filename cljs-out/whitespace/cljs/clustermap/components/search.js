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
clustermap.components.search.search_result_link = (function search_result_link(p__33472,owner,p__33473){var map__33482 = p__33472;var map__33482__$1 = ((cljs.core.seq_QMARK_.call(null,map__33482))?cljs.core.apply.call(null,cljs.core.hash_map,map__33482):map__33482);var search_result = map__33482__$1;var type = cljs.core.get.call(null,map__33482__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__33482__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__33483 = p__33473;var map__33483__$1 = ((cljs.core.seq_QMARK_.call(null,map__33483))?cljs.core.apply.call(null,cljs.core.hash_map,map__33483):map__33483);var opts = map__33483__$1;var path_fn = cljs.core.get.call(null,map__33483__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33483__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t33484 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33484 = (function (opts,path_fn,map__33483,map__33482,p__33472,name,comm,p__33473,search_result,owner,type,search_result_link,meta33485){
this.opts = opts;
this.path_fn = path_fn;
this.map__33483 = map__33483;
this.map__33482 = map__33482;
this.p__33472 = p__33472;
this.name = name;
this.comm = comm;
this.p__33473 = p__33473;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta33485 = meta33485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33484.cljs$lang$type = true;
clustermap.components.search.t33484.cljs$lang$ctorStr = "clustermap.components.search/t33484";
clustermap.components.search.t33484.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33484");
});
clustermap.components.search.t33484.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33484.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__33487){var self__ = this;
var map__33488 = p__33487;var map__33488__$1 = ((cljs.core.seq_QMARK_.call(null,map__33488))?cljs.core.apply.call(null,cljs.core.hash_map,map__33488):map__33488);var state = map__33488__$1;var selected = cljs.core.get.call(null,map__33488__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__33489 = l;var G__33489__$1 = (((G__33489 == null))?null:jayq.core.$.call(null,G__33489));var G__33489__$2 = (((G__33489__$1 == null))?null:G__33489__$1.parents(".search-component"));var G__33489__$3 = (((G__33489__$2 == null))?null:G__33489__$2.toggle());return G__33489__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t33484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33486){var self__ = this;
var _33486__$1 = this;return self__.meta33485;
});
clustermap.components.search.t33484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33486,meta33485__$1){var self__ = this;
var _33486__$1 = this;return (new clustermap.components.search.t33484(self__.opts,self__.path_fn,self__.map__33483,self__.map__33482,self__.p__33472,self__.name,self__.comm,self__.p__33473,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta33485__$1));
});
clustermap.components.search.__GT_t33484 = (function __GT_t33484(opts__$1,path_fn__$1,map__33483__$2,map__33482__$2,p__33472__$1,name__$1,comm__$1,p__33473__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta33485){return (new clustermap.components.search.t33484(opts__$1,path_fn__$1,map__33483__$2,map__33482__$2,p__33472__$1,name__$1,comm__$1,p__33473__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta33485));
});
}
return (new clustermap.components.search.t33484(opts,path_fn,map__33483__$1,map__33482__$1,p__33472,name,comm,p__33473,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__33490,n){var map__33492 = p__33490;var map__33492__$1 = ((cljs.core.seq_QMARK_.call(null,map__33492))?cljs.core.apply.call(null,cljs.core.hash_map,map__33492):map__33492);var investor_companies = cljs.core.get.call(null,map__33492__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33492__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33492__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__33499 = cljs.core._EQ__EQ_;var expr__33500 = e.keyCode;if(cljs.core.truth_(pred__33499.call(null,clustermap.components.search.ESCAPE_KEY,expr__33500)))
{var G__33502 = om.core.get_node.call(null,owner,"search-component");var G__33502__$1 = (((G__33502 == null))?null:jayq.core.$.call(null,G__33502));var G__33502__$2 = (((G__33502__$1 == null))?null:G__33502__$1.toggle());return G__33502__$2;
} else
{if(cljs.core.truth_(pred__33499.call(null,clustermap.components.search.ENTER_KEY,expr__33500)))
{var vec__33503 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__33503,0,null);var res = cljs.core.nth.call(null,vec__33503,1,null);var G__33504_33505 = om.core.get_node.call(null,owner,"search-component");var G__33504_33506__$1 = (((G__33504_33505 == null))?null:jayq.core.$.call(null,G__33504_33505));var G__33504_33507__$2 = (((G__33504_33506__$1 == null))?null:G__33504_33506__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__33499.call(null,clustermap.components.search.UP_ARROW,expr__33500)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__33499.call(null,clustermap.components.search.DOWN_ARROW,expr__33500)))
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
clustermap.components.search.search_component = (function search_component(p__33508,owner){var map__33540 = p__33508;var map__33540__$1 = ((cljs.core.seq_QMARK_.call(null,map__33540))?cljs.core.apply.call(null,cljs.core.hash_map,map__33540):map__33540);var map__33541 = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__33541__$1 = ((cljs.core.seq_QMARK_.call(null,map__33541))?cljs.core.apply.call(null,cljs.core.hash_map,map__33541):map__33541);var selection_type = cljs.core.get.call(null,map__33541__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__33541__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__33540__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__33542 = om.core.get_shared.call(null,owner);var map__33542__$1 = ((cljs.core.seq_QMARK_.call(null,map__33542))?cljs.core.apply.call(null,cljs.core.hash_map,map__33542):map__33542);var path_fn = cljs.core.get.call(null,map__33542__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33542__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__33543 = search_results;var map__33543__$1 = ((cljs.core.seq_QMARK_.call(null,map__33543))?cljs.core.apply.call(null,cljs.core.hash_map,map__33543):map__33543);var investor_companies = cljs.core.get.call(null,map__33543__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33543__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33543__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t33544 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33544 = (function (p__33508,investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,map__33543,map__33541,map__33542,map__33540,search_results,meta33545){
this.p__33508 = p__33508;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.map__33543 = map__33543;
this.map__33541 = map__33541;
this.map__33542 = map__33542;
this.map__33540 = map__33540;
this.search_results = search_results;
this.meta33545 = meta33545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33544.cljs$lang$type = true;
clustermap.components.search.t33544.cljs$lang$ctorStr = "clustermap.components.search/t33544";
clustermap.components.search.t33544.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33544");
});
clustermap.components.search.t33544.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33544.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__33547(s__33548){return (new cljs.core.LazySeq(null,(function (){var s__33548__$1 = s__33548;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33548__$1);if(temp__4092__auto__)
{var s__33548__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33548__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33548__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33550 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33549 = 0;while(true){
if((i__33549 < size__4116__auto__))
{var vec__33553 = cljs.core._nth.call(null,c__4115__auto__,i__33549);var idx = cljs.core.nth.call(null,vec__33553,0,null);var con = cljs.core.nth.call(null,vec__33553,1,null);cljs.core.chunk_append.call(null,b__33550,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33549,vec__33553,idx,con,c__4115__auto__,size__4116__auto__,b__33550,s__33548__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__33549,vec__33553,idx,con,c__4115__auto__,size__4116__auto__,b__33550,s__33548__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33571 = (i__33549 + 1);
i__33549 = G__33571;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33550),iter__33547.call(null,cljs.core.chunk_rest.call(null,s__33548__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33550),null);
}
} else
{var vec__33554 = cljs.core.first.call(null,s__33548__$2);var idx = cljs.core.nth.call(null,vec__33554,0,null);var con = cljs.core.nth.call(null,vec__33554,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33554,idx,con,s__33548__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__33554,idx,con,s__33548__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33547.call(null,cljs.core.rest.call(null,s__33548__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__33555(s__33556){return (new cljs.core.LazySeq(null,(function (){var s__33556__$1 = s__33556;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33556__$1);if(temp__4092__auto__)
{var s__33556__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33556__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33556__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33558 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33557 = 0;while(true){
if((i__33557 < size__4116__auto__))
{var vec__33561 = cljs.core._nth.call(null,c__4115__auto__,i__33557);var idx = cljs.core.nth.call(null,vec__33561,0,null);var pc = cljs.core.nth.call(null,vec__33561,1,null);cljs.core.chunk_append.call(null,b__33558,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33557,vec__33561,idx,pc,c__4115__auto__,size__4116__auto__,b__33558,s__33556__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__33557,vec__33561,idx,pc,c__4115__auto__,size__4116__auto__,b__33558,s__33556__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33572 = (i__33557 + 1);
i__33557 = G__33572;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33558),iter__33555.call(null,cljs.core.chunk_rest.call(null,s__33556__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33558),null);
}
} else
{var vec__33562 = cljs.core.first.call(null,s__33556__$2);var idx = cljs.core.nth.call(null,vec__33562,0,null);var pc = cljs.core.nth.call(null,vec__33562,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33562,idx,pc,s__33556__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__33562,idx,pc,s__33556__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33555.call(null,cljs.core.rest.call(null,s__33556__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__33563(s__33564){return (new cljs.core.LazySeq(null,(function (){var s__33564__$1 = s__33564;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33564__$1);if(temp__4092__auto__)
{var s__33564__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33564__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33564__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33566 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33565 = 0;while(true){
if((i__33565 < size__4116__auto__))
{var vec__33569 = cljs.core._nth.call(null,c__4115__auto__,i__33565);var idx = cljs.core.nth.call(null,vec__33569,0,null);var inv = cljs.core.nth.call(null,vec__33569,1,null);cljs.core.chunk_append.call(null,b__33566,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33565,vec__33569,idx,inv,c__4115__auto__,size__4116__auto__,b__33566,s__33564__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__33565,vec__33569,idx,inv,c__4115__auto__,size__4116__auto__,b__33566,s__33564__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33573 = (i__33565 + 1);
i__33565 = G__33573;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33566),iter__33563.call(null,cljs.core.chunk_rest.call(null,s__33564__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33566),null);
}
} else
{var vec__33570 = cljs.core.first.call(null,s__33564__$2);var idx = cljs.core.nth.call(null,vec__33570,0,null);var inv = cljs.core.nth.call(null,vec__33570,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33570,idx,inv,s__33564__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__33570,idx,inv,s__33564__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33563.call(null,cljs.core.rest.call(null,s__33564__$2)));
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
clustermap.components.search.t33544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33546){var self__ = this;
var _33546__$1 = this;return self__.meta33545;
});
clustermap.components.search.t33544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33546,meta33545__$1){var self__ = this;
var _33546__$1 = this;return (new clustermap.components.search.t33544(self__.p__33508,self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.map__33543,self__.map__33541,self__.map__33542,self__.map__33540,self__.search_results,meta33545__$1));
});
clustermap.components.search.__GT_t33544 = (function __GT_t33544(p__33508__$1,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__33543__$2,map__33541__$2,map__33542__$2,map__33540__$2,search_results__$1,meta33545){return (new clustermap.components.search.t33544(p__33508__$1,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__33543__$2,map__33541__$2,map__33542__$2,map__33540__$2,search_results__$1,meta33545));
});
}
return (new clustermap.components.search.t33544(p__33508,investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,map__33543__$1,map__33541__$1,map__33542__$1,map__33540__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
