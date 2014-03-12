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
clustermap.components.search.search_result_link = (function search_result_link(p__12697,owner,p__12698){var map__12707 = p__12697;var map__12707__$1 = ((cljs.core.seq_QMARK_.call(null,map__12707))?cljs.core.apply.call(null,cljs.core.hash_map,map__12707):map__12707);var search_result = map__12707__$1;var type = cljs.core.get.call(null,map__12707__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12707__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12708 = p__12698;var map__12708__$1 = ((cljs.core.seq_QMARK_.call(null,map__12708))?cljs.core.apply.call(null,cljs.core.hash_map,map__12708):map__12708);var opts = map__12708__$1;var path_fn = cljs.core.get.call(null,map__12708__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12708__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12709 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12709 = (function (opts,path_fn,p__12697,p__12698,name,comm,search_result,owner,map__12707,map__12708,type,search_result_link,meta12710){
this.opts = opts;
this.path_fn = path_fn;
this.p__12697 = p__12697;
this.p__12698 = p__12698;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.map__12707 = map__12707;
this.map__12708 = map__12708;
this.type = type;
this.search_result_link = search_result_link;
this.meta12710 = meta12710;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12709.cljs$lang$type = true;
clustermap.components.search.t12709.cljs$lang$ctorStr = "clustermap.components.search/t12709";
clustermap.components.search.t12709.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t12709");
});
clustermap.components.search.t12709.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12709.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12712){var self__ = this;
var map__12713 = p__12712;var map__12713__$1 = ((cljs.core.seq_QMARK_.call(null,map__12713))?cljs.core.apply.call(null,cljs.core.hash_map,map__12713):map__12713);var state = map__12713__$1;var selected = cljs.core.get.call(null,map__12713__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12714 = l;var G__12714__$1 = (((G__12714 == null))?null:jayq.core.$.call(null,G__12714));var G__12714__$2 = (((G__12714__$1 == null))?null:G__12714__$1.parents(".search-component"));var G__12714__$3 = (((G__12714__$2 == null))?null:G__12714__$2.toggle());return G__12714__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t12709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12711){var self__ = this;
var _12711__$1 = this;return self__.meta12710;
});
clustermap.components.search.t12709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12711,meta12710__$1){var self__ = this;
var _12711__$1 = this;return (new clustermap.components.search.t12709(self__.opts,self__.path_fn,self__.p__12697,self__.p__12698,self__.name,self__.comm,self__.search_result,self__.owner,self__.map__12707,self__.map__12708,self__.type,self__.search_result_link,meta12710__$1));
});
clustermap.components.search.__GT_t12709 = (function __GT_t12709(opts__$1,path_fn__$1,p__12697__$1,p__12698__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__12707__$2,map__12708__$2,type__$1,search_result_link__$1,meta12710){return (new clustermap.components.search.t12709(opts__$1,path_fn__$1,p__12697__$1,p__12698__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__12707__$2,map__12708__$2,type__$1,search_result_link__$1,meta12710));
});
}
return (new clustermap.components.search.t12709(opts,path_fn,p__12697,p__12698,name,comm,search_result,owner,map__12707__$1,map__12708__$1,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12715,n){var map__12717 = p__12715;var map__12717__$1 = ((cljs.core.seq_QMARK_.call(null,map__12717))?cljs.core.apply.call(null,cljs.core.hash_map,map__12717):map__12717);var investor_companies = cljs.core.get.call(null,map__12717__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12717__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12717__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12724 = cljs.core._EQ__EQ_;var expr__12725 = e.keyCode;if(cljs.core.truth_(pred__12724.call(null,clustermap.components.search.ESCAPE_KEY,expr__12725)))
{var G__12727 = om.core.get_node.call(null,owner,"search-component");var G__12727__$1 = (((G__12727 == null))?null:jayq.core.$.call(null,G__12727));var G__12727__$2 = (((G__12727__$1 == null))?null:G__12727__$1.toggle());return G__12727__$2;
} else
{if(cljs.core.truth_(pred__12724.call(null,clustermap.components.search.ENTER_KEY,expr__12725)))
{var vec__12728 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12728,0,null);var res = cljs.core.nth.call(null,vec__12728,1,null);var G__12729_12730 = om.core.get_node.call(null,owner,"search-component");var G__12729_12731__$1 = (((G__12729_12730 == null))?null:jayq.core.$.call(null,G__12729_12730));var G__12729_12732__$2 = (((G__12729_12731__$1 == null))?null:G__12729_12731__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12724.call(null,clustermap.components.search.UP_ARROW,expr__12725)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12724.call(null,clustermap.components.search.DOWN_ARROW,expr__12725)))
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
clustermap.components.search.search_component = (function search_component(p__12733,owner){var map__12765 = p__12733;var map__12765__$1 = ((cljs.core.seq_QMARK_.call(null,map__12765))?cljs.core.apply.call(null,cljs.core.hash_map,map__12765):map__12765);var map__12766 = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__12766__$1 = ((cljs.core.seq_QMARK_.call(null,map__12766))?cljs.core.apply.call(null,cljs.core.hash_map,map__12766):map__12766);var selection_type = cljs.core.get.call(null,map__12766__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__12766__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__12765__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__12767 = om.core.get_shared.call(null,owner);var map__12767__$1 = ((cljs.core.seq_QMARK_.call(null,map__12767))?cljs.core.apply.call(null,cljs.core.hash_map,map__12767):map__12767);var path_fn = cljs.core.get.call(null,map__12767__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12767__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__12768 = search_results;var map__12768__$1 = ((cljs.core.seq_QMARK_.call(null,map__12768))?cljs.core.apply.call(null,cljs.core.hash_map,map__12768):map__12768);var investor_companies = cljs.core.get.call(null,map__12768__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12768__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12768__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12769 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12769 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__12733,comm,selection_type,map__12768,owner,constituencies,map__12767,search_results,map__12766,map__12765,meta12770){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.p__12733 = p__12733;
this.comm = comm;
this.selection_type = selection_type;
this.map__12768 = map__12768;
this.owner = owner;
this.constituencies = constituencies;
this.map__12767 = map__12767;
this.search_results = search_results;
this.map__12766 = map__12766;
this.map__12765 = map__12765;
this.meta12770 = meta12770;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12769.cljs$lang$type = true;
clustermap.components.search.t12769.cljs$lang$ctorStr = "clustermap.components.search/t12769";
clustermap.components.search.t12769.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t12769");
});
clustermap.components.search.t12769.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12769.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__12772(s__12773){return (new cljs.core.LazySeq(null,(function (){var s__12773__$1 = s__12773;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12773__$1);if(temp__4092__auto__)
{var s__12773__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12773__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12773__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12775 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12774 = 0;while(true){
if((i__12774 < size__4157__auto__))
{var vec__12778 = cljs.core._nth.call(null,c__4156__auto__,i__12774);var idx = cljs.core.nth.call(null,vec__12778,0,null);var con = cljs.core.nth.call(null,vec__12778,1,null);cljs.core.chunk_append.call(null,b__12775,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12774,vec__12778,idx,con,c__4156__auto__,size__4157__auto__,b__12775,s__12773__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12774,vec__12778,idx,con,c__4156__auto__,size__4157__auto__,b__12775,s__12773__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12796 = (i__12774 + 1);
i__12774 = G__12796;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12775),iter__12772.call(null,cljs.core.chunk_rest.call(null,s__12773__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12775),null);
}
} else
{var vec__12779 = cljs.core.first.call(null,s__12773__$2);var idx = cljs.core.nth.call(null,vec__12779,0,null);var con = cljs.core.nth.call(null,vec__12779,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12779,idx,con,s__12773__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12779,idx,con,s__12773__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12772.call(null,cljs.core.rest.call(null,s__12773__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__12780(s__12781){return (new cljs.core.LazySeq(null,(function (){var s__12781__$1 = s__12781;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12781__$1);if(temp__4092__auto__)
{var s__12781__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12781__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12781__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12783 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12782 = 0;while(true){
if((i__12782 < size__4157__auto__))
{var vec__12786 = cljs.core._nth.call(null,c__4156__auto__,i__12782);var idx = cljs.core.nth.call(null,vec__12786,0,null);var pc = cljs.core.nth.call(null,vec__12786,1,null);cljs.core.chunk_append.call(null,b__12783,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12782,vec__12786,idx,pc,c__4156__auto__,size__4157__auto__,b__12783,s__12781__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12782,vec__12786,idx,pc,c__4156__auto__,size__4157__auto__,b__12783,s__12781__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12797 = (i__12782 + 1);
i__12782 = G__12797;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12783),iter__12780.call(null,cljs.core.chunk_rest.call(null,s__12781__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12783),null);
}
} else
{var vec__12787 = cljs.core.first.call(null,s__12781__$2);var idx = cljs.core.nth.call(null,vec__12787,0,null);var pc = cljs.core.nth.call(null,vec__12787,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12787,idx,pc,s__12781__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12787,idx,pc,s__12781__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12780.call(null,cljs.core.rest.call(null,s__12781__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__12788(s__12789){return (new cljs.core.LazySeq(null,(function (){var s__12789__$1 = s__12789;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12789__$1);if(temp__4092__auto__)
{var s__12789__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12789__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12789__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12791 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12790 = 0;while(true){
if((i__12790 < size__4157__auto__))
{var vec__12794 = cljs.core._nth.call(null,c__4156__auto__,i__12790);var idx = cljs.core.nth.call(null,vec__12794,0,null);var inv = cljs.core.nth.call(null,vec__12794,1,null);cljs.core.chunk_append.call(null,b__12791,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12790,vec__12794,idx,inv,c__4156__auto__,size__4157__auto__,b__12791,s__12789__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12790,vec__12794,idx,inv,c__4156__auto__,size__4157__auto__,b__12791,s__12789__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12798 = (i__12790 + 1);
i__12790 = G__12798;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12791),iter__12788.call(null,cljs.core.chunk_rest.call(null,s__12789__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12791),null);
}
} else
{var vec__12795 = cljs.core.first.call(null,s__12789__$2);var idx = cljs.core.nth.call(null,vec__12795,0,null);var inv = cljs.core.nth.call(null,vec__12795,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12795,idx,inv,s__12789__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12795,idx,inv,s__12789__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12788.call(null,cljs.core.rest.call(null,s__12789__$2)));
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
clustermap.components.search.t12769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12771){var self__ = this;
var _12771__$1 = this;return self__.meta12770;
});
clustermap.components.search.t12769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12771,meta12770__$1){var self__ = this;
var _12771__$1 = this;return (new clustermap.components.search.t12769(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.p__12733,self__.comm,self__.selection_type,self__.map__12768,self__.owner,self__.constituencies,self__.map__12767,self__.search_results,self__.map__12766,self__.map__12765,meta12770__$1));
});
clustermap.components.search.__GT_t12769 = (function __GT_t12769(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__12733__$1,comm__$1,selection_type__$1,map__12768__$2,owner__$1,constituencies__$1,map__12767__$2,search_results__$1,map__12766__$2,map__12765__$2,meta12770){return (new clustermap.components.search.t12769(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__12733__$1,comm__$1,selection_type__$1,map__12768__$2,owner__$1,constituencies__$1,map__12767__$2,search_results__$1,map__12766__$2,map__12765__$2,meta12770));
});
}
return (new clustermap.components.search.t12769(investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__12733,comm,selection_type,map__12768__$1,owner,constituencies,map__12767__$1,search_results,map__12766__$1,map__12765__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
