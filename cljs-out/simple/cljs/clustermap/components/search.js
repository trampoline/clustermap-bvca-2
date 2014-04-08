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
clustermap.components.search.search_result_link = (function search_result_link(p__12621,owner,p__12622){var map__12631 = p__12621;var map__12631__$1 = ((cljs.core.seq_QMARK_.call(null,map__12631))?cljs.core.apply.call(null,cljs.core.hash_map,map__12631):map__12631);var search_result = map__12631__$1;var type = cljs.core.get.call(null,map__12631__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12631__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12632 = p__12622;var map__12632__$1 = ((cljs.core.seq_QMARK_.call(null,map__12632))?cljs.core.apply.call(null,cljs.core.hash_map,map__12632):map__12632);var opts = map__12632__$1;var path_fn = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12632__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12633 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12633 = (function (opts,path_fn,map__12632,map__12631,name,comm,search_result,p__12621,owner,p__12622,type,search_result_link,meta12634){
this.opts = opts;
this.path_fn = path_fn;
this.map__12632 = map__12632;
this.map__12631 = map__12631;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.p__12621 = p__12621;
this.owner = owner;
this.p__12622 = p__12622;
this.type = type;
this.search_result_link = search_result_link;
this.meta12634 = meta12634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12633.cljs$lang$type = true;
clustermap.components.search.t12633.cljs$lang$ctorStr = "clustermap.components.search/t12633";
clustermap.components.search.t12633.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t12633");
});
clustermap.components.search.t12633.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12633.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12636){var self__ = this;
var map__12637 = p__12636;var map__12637__$1 = ((cljs.core.seq_QMARK_.call(null,map__12637))?cljs.core.apply.call(null,cljs.core.hash_map,map__12637):map__12637);var state = map__12637__$1;var selected = cljs.core.get.call(null,map__12637__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12638 = l;var G__12638__$1 = (((G__12638 == null))?null:jayq.core.$.call(null,G__12638));var G__12638__$2 = (((G__12638__$1 == null))?null:G__12638__$1.parents(".search-component"));var G__12638__$3 = (((G__12638__$2 == null))?null:G__12638__$2.toggle());return G__12638__$3;
})},sablono.interpreter.interpret.call(null,self__.name)));
});
clustermap.components.search.t12633.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12635){var self__ = this;
var _12635__$1 = this;return self__.meta12634;
});
clustermap.components.search.t12633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12635,meta12634__$1){var self__ = this;
var _12635__$1 = this;return (new clustermap.components.search.t12633(self__.opts,self__.path_fn,self__.map__12632,self__.map__12631,self__.name,self__.comm,self__.search_result,self__.p__12621,self__.owner,self__.p__12622,self__.type,self__.search_result_link,meta12634__$1));
});
clustermap.components.search.__GT_t12633 = (function __GT_t12633(opts__$1,path_fn__$1,map__12632__$2,map__12631__$2,name__$1,comm__$1,search_result__$1,p__12621__$1,owner__$1,p__12622__$1,type__$1,search_result_link__$1,meta12634){return (new clustermap.components.search.t12633(opts__$1,path_fn__$1,map__12632__$2,map__12631__$2,name__$1,comm__$1,search_result__$1,p__12621__$1,owner__$1,p__12622__$1,type__$1,search_result_link__$1,meta12634));
});
}
return (new clustermap.components.search.t12633(opts,path_fn,map__12632__$1,map__12631__$1,name,comm,search_result,p__12621,owner,p__12622,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12639,n){var map__12641 = p__12639;var map__12641__$1 = ((cljs.core.seq_QMARK_.call(null,map__12641))?cljs.core.apply.call(null,cljs.core.hash_map,map__12641):map__12641);var investor_companies = cljs.core.get.call(null,map__12641__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12641__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12641__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12648 = cljs.core._EQ__EQ_;var expr__12649 = e.keyCode;if(cljs.core.truth_(pred__12648.call(null,clustermap.components.search.ESCAPE_KEY,expr__12649)))
{var G__12651 = om.core.get_node.call(null,owner,"search-component");var G__12651__$1 = (((G__12651 == null))?null:jayq.core.$.call(null,G__12651));var G__12651__$2 = (((G__12651__$1 == null))?null:G__12651__$1.toggle());return G__12651__$2;
} else
{if(cljs.core.truth_(pred__12648.call(null,clustermap.components.search.ENTER_KEY,expr__12649)))
{var vec__12652 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12652,0,null);var res = cljs.core.nth.call(null,vec__12652,1,null);var G__12653_12654 = om.core.get_node.call(null,owner,"search-component");var G__12653_12655__$1 = (((G__12653_12654 == null))?null:jayq.core.$.call(null,G__12653_12654));var G__12653_12656__$2 = (((G__12653_12655__$1 == null))?null:G__12653_12655__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12648.call(null,clustermap.components.search.UP_ARROW,expr__12649)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12648.call(null,clustermap.components.search.DOWN_ARROW,expr__12649)))
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
clustermap.components.search.search_component = (function search_component(p__12657,owner){var map__12689 = p__12657;var map__12689__$1 = ((cljs.core.seq_QMARK_.call(null,map__12689))?cljs.core.apply.call(null,cljs.core.hash_map,map__12689):map__12689);var map__12690 = cljs.core.get.call(null,map__12689__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__12690__$1 = ((cljs.core.seq_QMARK_.call(null,map__12690))?cljs.core.apply.call(null,cljs.core.hash_map,map__12690):map__12690);var selection_type = cljs.core.get.call(null,map__12690__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__12690__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__12689__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__12689__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__12691 = om.core.get_shared.call(null,owner);var map__12691__$1 = ((cljs.core.seq_QMARK_.call(null,map__12691))?cljs.core.apply.call(null,cljs.core.hash_map,map__12691):map__12691);var path_fn = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__12692 = search_results;var map__12692__$1 = ((cljs.core.seq_QMARK_.call(null,map__12692))?cljs.core.apply.call(null,cljs.core.hash_map,map__12692):map__12692);var investor_companies = cljs.core.get.call(null,map__12692__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12692__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12692__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12693 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12693 = (function (investor_companies,selection_value,path_fn,portfolio_companies,view,search_component,p__12657,comm,selection_type,owner,constituencies,map__12691,search_results,map__12690,map__12689,map__12692,meta12694){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.view = view;
this.search_component = search_component;
this.p__12657 = p__12657;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.map__12691 = map__12691;
this.search_results = search_results;
this.map__12690 = map__12690;
this.map__12689 = map__12689;
this.map__12692 = map__12692;
this.meta12694 = meta12694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12693.cljs$lang$type = true;
clustermap.components.search.t12693.cljs$lang$ctorStr = "clustermap.components.search/t12693";
clustermap.components.search.t12693.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t12693");
});
clustermap.components.search.t12693.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12693.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__12696(s__12697){return (new cljs.core.LazySeq(null,(function (){var s__12697__$1 = s__12697;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12697__$1);if(temp__4092__auto__)
{var s__12697__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12697__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12697__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12699 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12698 = 0;while(true){
if((i__12698 < size__4157__auto__))
{var vec__12702 = cljs.core._nth.call(null,c__4156__auto__,i__12698);var idx = cljs.core.nth.call(null,vec__12702,0,null);var con = cljs.core.nth.call(null,vec__12702,1,null);cljs.core.chunk_append.call(null,b__12699,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12698,vec__12702,idx,con,c__4156__auto__,size__4157__auto__,b__12699,s__12697__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12698,vec__12702,idx,con,c__4156__auto__,size__4157__auto__,b__12699,s__12697__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12720 = (i__12698 + 1);
i__12698 = G__12720;
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
{var vec__12703 = cljs.core.first.call(null,s__12697__$2);var idx = cljs.core.nth.call(null,vec__12703,0,null);var con = cljs.core.nth.call(null,vec__12703,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12703,idx,con,s__12697__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12703,idx,con,s__12697__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12696.call(null,cljs.core.rest.call(null,s__12697__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__12704(s__12705){return (new cljs.core.LazySeq(null,(function (){var s__12705__$1 = s__12705;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12705__$1);if(temp__4092__auto__)
{var s__12705__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12705__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12705__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12707 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12706 = 0;while(true){
if((i__12706 < size__4157__auto__))
{var vec__12710 = cljs.core._nth.call(null,c__4156__auto__,i__12706);var idx = cljs.core.nth.call(null,vec__12710,0,null);var pc = cljs.core.nth.call(null,vec__12710,1,null);cljs.core.chunk_append.call(null,b__12707,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12706,vec__12710,idx,pc,c__4156__auto__,size__4157__auto__,b__12707,s__12705__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12706,vec__12710,idx,pc,c__4156__auto__,size__4157__auto__,b__12707,s__12705__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12721 = (i__12706 + 1);
i__12706 = G__12721;
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
{var vec__12711 = cljs.core.first.call(null,s__12705__$2);var idx = cljs.core.nth.call(null,vec__12711,0,null);var pc = cljs.core.nth.call(null,vec__12711,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12711,idx,pc,s__12705__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12711,idx,pc,s__12705__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12704.call(null,cljs.core.rest.call(null,s__12705__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__12712(s__12713){return (new cljs.core.LazySeq(null,(function (){var s__12713__$1 = s__12713;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12713__$1);if(temp__4092__auto__)
{var s__12713__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12713__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12713__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12715 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12714 = 0;while(true){
if((i__12714 < size__4157__auto__))
{var vec__12718 = cljs.core._nth.call(null,c__4156__auto__,i__12714);var idx = cljs.core.nth.call(null,vec__12718,0,null);var inv = cljs.core.nth.call(null,vec__12718,1,null);cljs.core.chunk_append.call(null,b__12715,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12714,vec__12718,idx,inv,c__4156__auto__,size__4157__auto__,b__12715,s__12713__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12714,vec__12718,idx,inv,c__4156__auto__,size__4157__auto__,b__12715,s__12713__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12722 = (i__12714 + 1);
i__12714 = G__12722;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12715),iter__12712.call(null,cljs.core.chunk_rest.call(null,s__12713__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12715),null);
}
} else
{var vec__12719 = cljs.core.first.call(null,s__12713__$2);var idx = cljs.core.nth.call(null,vec__12719,0,null);var inv = cljs.core.nth.call(null,vec__12719,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12719,idx,inv,s__12713__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12719,idx,inv,s__12713__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12712.call(null,cljs.core.rest.call(null,s__12713__$2)));
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
clustermap.components.search.t12693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12695){var self__ = this;
var _12695__$1 = this;return self__.meta12694;
});
clustermap.components.search.t12693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12695,meta12694__$1){var self__ = this;
var _12695__$1 = this;return (new clustermap.components.search.t12693(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.view,self__.search_component,self__.p__12657,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.map__12691,self__.search_results,self__.map__12690,self__.map__12689,self__.map__12692,meta12694__$1));
});
clustermap.components.search.__GT_t12693 = (function __GT_t12693(investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,p__12657__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__12691__$2,search_results__$1,map__12690__$2,map__12689__$2,map__12692__$2,meta12694){return (new clustermap.components.search.t12693(investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,p__12657__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__12691__$2,search_results__$1,map__12690__$2,map__12689__$2,map__12692__$2,meta12694));
});
}
return (new clustermap.components.search.t12693(investor_companies,selection_value,path_fn__$1,portfolio_companies,view,search_component,p__12657,comm,selection_type,owner,constituencies,map__12691__$1,search_results,map__12690__$1,map__12689__$1,map__12692__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
