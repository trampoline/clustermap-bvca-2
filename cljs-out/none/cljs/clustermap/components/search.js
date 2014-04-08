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
clustermap.components.search.search_result_link = (function search_result_link(p__12613,owner,p__12614){var map__12623 = p__12613;var map__12623__$1 = ((cljs.core.seq_QMARK_.call(null,map__12623))?cljs.core.apply.call(null,cljs.core.hash_map,map__12623):map__12623);var search_result = map__12623__$1;var type = cljs.core.get.call(null,map__12623__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12623__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12624 = p__12614;var map__12624__$1 = ((cljs.core.seq_QMARK_.call(null,map__12624))?cljs.core.apply.call(null,cljs.core.hash_map,map__12624):map__12624);var opts = map__12624__$1;var path_fn = cljs.core.get.call(null,map__12624__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12624__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12625 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12625 = (function (opts,p__12614,path_fn,map__12624,p__12613,map__12623,name,comm,search_result,owner,type,search_result_link,meta12626){
this.opts = opts;
this.p__12614 = p__12614;
this.path_fn = path_fn;
this.map__12624 = map__12624;
this.p__12613 = p__12613;
this.map__12623 = map__12623;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta12626 = meta12626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12625.cljs$lang$type = true;
clustermap.components.search.t12625.cljs$lang$ctorStr = "clustermap.components.search/t12625";
clustermap.components.search.t12625.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t12625");
});
clustermap.components.search.t12625.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12625.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12628){var self__ = this;
var map__12629 = p__12628;var map__12629__$1 = ((cljs.core.seq_QMARK_.call(null,map__12629))?cljs.core.apply.call(null,cljs.core.hash_map,map__12629):map__12629);var state = map__12629__$1;var selected = cljs.core.get.call(null,map__12629__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12630 = l;var G__12630__$1 = (((G__12630 == null))?null:jayq.core.$.call(null,G__12630));var G__12630__$2 = (((G__12630__$1 == null))?null:G__12630__$1.parents(".search-component"));var G__12630__$3 = (((G__12630__$2 == null))?null:G__12630__$2.toggle());return G__12630__$3;
})},sablono.interpreter.interpret.call(null,self__.name)));
});
clustermap.components.search.t12625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12627){var self__ = this;
var _12627__$1 = this;return self__.meta12626;
});
clustermap.components.search.t12625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12627,meta12626__$1){var self__ = this;
var _12627__$1 = this;return (new clustermap.components.search.t12625(self__.opts,self__.p__12614,self__.path_fn,self__.map__12624,self__.p__12613,self__.map__12623,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta12626__$1));
});
clustermap.components.search.__GT_t12625 = (function __GT_t12625(opts__$1,p__12614__$1,path_fn__$1,map__12624__$2,p__12613__$1,map__12623__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta12626){return (new clustermap.components.search.t12625(opts__$1,p__12614__$1,path_fn__$1,map__12624__$2,p__12613__$1,map__12623__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta12626));
});
}
return (new clustermap.components.search.t12625(opts,p__12614,path_fn,map__12624__$1,p__12613,map__12623__$1,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12631,n){var map__12633 = p__12631;var map__12633__$1 = ((cljs.core.seq_QMARK_.call(null,map__12633))?cljs.core.apply.call(null,cljs.core.hash_map,map__12633):map__12633);var investor_companies = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12633__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12640 = cljs.core._EQ__EQ_;var expr__12641 = e.keyCode;if(cljs.core.truth_(pred__12640.call(null,clustermap.components.search.ESCAPE_KEY,expr__12641)))
{var G__12643 = om.core.get_node.call(null,owner,"search-component");var G__12643__$1 = (((G__12643 == null))?null:jayq.core.$.call(null,G__12643));var G__12643__$2 = (((G__12643__$1 == null))?null:G__12643__$1.toggle());return G__12643__$2;
} else
{if(cljs.core.truth_(pred__12640.call(null,clustermap.components.search.ENTER_KEY,expr__12641)))
{var vec__12644 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12644,0,null);var res = cljs.core.nth.call(null,vec__12644,1,null);var G__12645_12646 = om.core.get_node.call(null,owner,"search-component");var G__12645_12647__$1 = (((G__12645_12646 == null))?null:jayq.core.$.call(null,G__12645_12646));var G__12645_12648__$2 = (((G__12645_12647__$1 == null))?null:G__12645_12647__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12640.call(null,clustermap.components.search.UP_ARROW,expr__12641)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12640.call(null,clustermap.components.search.DOWN_ARROW,expr__12641)))
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
clustermap.components.search.search_component = (function search_component(p__12649,owner){var map__12681 = p__12649;var map__12681__$1 = ((cljs.core.seq_QMARK_.call(null,map__12681))?cljs.core.apply.call(null,cljs.core.hash_map,map__12681):map__12681);var map__12682 = cljs.core.get.call(null,map__12681__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__12682__$1 = ((cljs.core.seq_QMARK_.call(null,map__12682))?cljs.core.apply.call(null,cljs.core.hash_map,map__12682):map__12682);var selection_type = cljs.core.get.call(null,map__12682__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__12682__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__12681__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__12681__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__12683 = om.core.get_shared.call(null,owner);var map__12683__$1 = ((cljs.core.seq_QMARK_.call(null,map__12683))?cljs.core.apply.call(null,cljs.core.hash_map,map__12683):map__12683);var path_fn = cljs.core.get.call(null,map__12683__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12683__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__12684 = search_results;var map__12684__$1 = ((cljs.core.seq_QMARK_.call(null,map__12684))?cljs.core.apply.call(null,cljs.core.hash_map,map__12684):map__12684);var investor_companies = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12685 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12685 = (function (investor_companies,selection_value,path_fn,portfolio_companies,view,search_component,p__12649,comm,map__12683,map__12684,selection_type,owner,constituencies,map__12682,map__12681,search_results,meta12686){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.view = view;
this.search_component = search_component;
this.p__12649 = p__12649;
this.comm = comm;
this.map__12683 = map__12683;
this.map__12684 = map__12684;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.map__12682 = map__12682;
this.map__12681 = map__12681;
this.search_results = search_results;
this.meta12686 = meta12686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12685.cljs$lang$type = true;
clustermap.components.search.t12685.cljs$lang$ctorStr = "clustermap.components.search/t12685";
clustermap.components.search.t12685.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t12685");
});
clustermap.components.search.t12685.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12685.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__12688(s__12689){return (new cljs.core.LazySeq(null,(function (){var s__12689__$1 = s__12689;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12689__$1);if(temp__4092__auto__)
{var s__12689__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12689__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12689__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12691 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12690 = 0;while(true){
if((i__12690 < size__4157__auto__))
{var vec__12694 = cljs.core._nth.call(null,c__4156__auto__,i__12690);var idx = cljs.core.nth.call(null,vec__12694,0,null);var con = cljs.core.nth.call(null,vec__12694,1,null);cljs.core.chunk_append.call(null,b__12691,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12690,vec__12694,idx,con,c__4156__auto__,size__4157__auto__,b__12691,s__12689__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12690,vec__12694,idx,con,c__4156__auto__,size__4157__auto__,b__12691,s__12689__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12712 = (i__12690 + 1);
i__12690 = G__12712;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12691),iter__12688.call(null,cljs.core.chunk_rest.call(null,s__12689__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12691),null);
}
} else
{var vec__12695 = cljs.core.first.call(null,s__12689__$2);var idx = cljs.core.nth.call(null,vec__12695,0,null);var con = cljs.core.nth.call(null,vec__12695,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12695,idx,con,s__12689__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12695,idx,con,s__12689__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12688.call(null,cljs.core.rest.call(null,s__12689__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__12696(s__12697){return (new cljs.core.LazySeq(null,(function (){var s__12697__$1 = s__12697;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12697__$1);if(temp__4092__auto__)
{var s__12697__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12697__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12697__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12699 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12698 = 0;while(true){
if((i__12698 < size__4157__auto__))
{var vec__12702 = cljs.core._nth.call(null,c__4156__auto__,i__12698);var idx = cljs.core.nth.call(null,vec__12702,0,null);var pc = cljs.core.nth.call(null,vec__12702,1,null);cljs.core.chunk_append.call(null,b__12699,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12698,vec__12702,idx,pc,c__4156__auto__,size__4157__auto__,b__12699,s__12697__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12698,vec__12702,idx,pc,c__4156__auto__,size__4157__auto__,b__12699,s__12697__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12713 = (i__12698 + 1);
i__12698 = G__12713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12699),iter__12696.call(null,cljs.core.chunk_rest.call(null,s__12697__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12699),null);
}
} else
{var vec__12703 = cljs.core.first.call(null,s__12697__$2);var idx = cljs.core.nth.call(null,vec__12703,0,null);var pc = cljs.core.nth.call(null,vec__12703,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12703,idx,pc,s__12697__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12703,idx,pc,s__12697__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12696.call(null,cljs.core.rest.call(null,s__12697__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__12704(s__12705){return (new cljs.core.LazySeq(null,(function (){var s__12705__$1 = s__12705;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12705__$1);if(temp__4092__auto__)
{var s__12705__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12705__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12705__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12707 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12706 = 0;while(true){
if((i__12706 < size__4157__auto__))
{var vec__12710 = cljs.core._nth.call(null,c__4156__auto__,i__12706);var idx = cljs.core.nth.call(null,vec__12710,0,null);var inv = cljs.core.nth.call(null,vec__12710,1,null);cljs.core.chunk_append.call(null,b__12707,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12706,vec__12710,idx,inv,c__4156__auto__,size__4157__auto__,b__12707,s__12705__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12706,vec__12710,idx,inv,c__4156__auto__,size__4157__auto__,b__12707,s__12705__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12714 = (i__12706 + 1);
i__12706 = G__12714;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12707),iter__12704.call(null,cljs.core.chunk_rest.call(null,s__12705__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12707),null);
}
} else
{var vec__12711 = cljs.core.first.call(null,s__12705__$2);var idx = cljs.core.nth.call(null,vec__12711,0,null);var inv = cljs.core.nth.call(null,vec__12711,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12711,idx,inv,s__12705__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12711,idx,inv,s__12705__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12704.call(null,cljs.core.rest.call(null,s__12705__$2)));
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
clustermap.components.search.t12685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12687){var self__ = this;
var _12687__$1 = this;return self__.meta12686;
});
clustermap.components.search.t12685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12687,meta12686__$1){var self__ = this;
var _12687__$1 = this;return (new clustermap.components.search.t12685(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.view,self__.search_component,self__.p__12649,self__.comm,self__.map__12683,self__.map__12684,self__.selection_type,self__.owner,self__.constituencies,self__.map__12682,self__.map__12681,self__.search_results,meta12686__$1));
});
clustermap.components.search.__GT_t12685 = (function __GT_t12685(investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,p__12649__$1,comm__$1,map__12683__$2,map__12684__$2,selection_type__$1,owner__$1,constituencies__$1,map__12682__$2,map__12681__$2,search_results__$1,meta12686){return (new clustermap.components.search.t12685(investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,p__12649__$1,comm__$1,map__12683__$2,map__12684__$2,selection_type__$1,owner__$1,constituencies__$1,map__12682__$2,map__12681__$2,search_results__$1,meta12686));
});
}
return (new clustermap.components.search.t12685(investor_companies,selection_value,path_fn__$1,portfolio_companies,view,search_component,p__12649,comm,map__12683__$1,map__12684__$1,selection_type,owner,constituencies,map__12682__$1,map__12681__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map