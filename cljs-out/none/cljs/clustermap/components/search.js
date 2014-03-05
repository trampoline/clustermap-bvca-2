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
clustermap.components.search.search_result_link = (function search_result_link(p__23694,owner,p__23695){var map__23704 = p__23694;var map__23704__$1 = ((cljs.core.seq_QMARK_.call(null,map__23704))?cljs.core.apply.call(null,cljs.core.hash_map,map__23704):map__23704);var search_result = map__23704__$1;var type = cljs.core.get.call(null,map__23704__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__23704__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__23705 = p__23695;var map__23705__$1 = ((cljs.core.seq_QMARK_.call(null,map__23705))?cljs.core.apply.call(null,cljs.core.hash_map,map__23705):map__23705);var opts = map__23705__$1;var path_fn = cljs.core.get.call(null,map__23705__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23705__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t23706 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23706 = (function (p__23695,p__23694,opts,path_fn,map__23704,map__23705,name,comm,search_result,owner,type,search_result_link,meta23707){
this.p__23695 = p__23695;
this.p__23694 = p__23694;
this.opts = opts;
this.path_fn = path_fn;
this.map__23704 = map__23704;
this.map__23705 = map__23705;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta23707 = meta23707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23706.cljs$lang$type = true;
clustermap.components.search.t23706.cljs$lang$ctorStr = "clustermap.components.search/t23706";
clustermap.components.search.t23706.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t23706");
});
clustermap.components.search.t23706.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23706.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23709){var self__ = this;
var map__23710 = p__23709;var map__23710__$1 = ((cljs.core.seq_QMARK_.call(null,map__23710))?cljs.core.apply.call(null,cljs.core.hash_map,map__23710):map__23710);var state = map__23710__$1;var selected = cljs.core.get.call(null,map__23710__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__23711 = l;var G__23711__$1 = (((G__23711 == null))?null:jayq.core.$.call(null,G__23711));var G__23711__$2 = (((G__23711__$1 == null))?null:G__23711__$1.parents(".search-component"));var G__23711__$3 = (((G__23711__$2 == null))?null:G__23711__$2.toggle());return G__23711__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t23706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23708){var self__ = this;
var _23708__$1 = this;return self__.meta23707;
});
clustermap.components.search.t23706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23708,meta23707__$1){var self__ = this;
var _23708__$1 = this;return (new clustermap.components.search.t23706(self__.p__23695,self__.p__23694,self__.opts,self__.path_fn,self__.map__23704,self__.map__23705,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta23707__$1));
});
clustermap.components.search.__GT_t23706 = (function __GT_t23706(p__23695__$1,p__23694__$1,opts__$1,path_fn__$1,map__23704__$2,map__23705__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta23707){return (new clustermap.components.search.t23706(p__23695__$1,p__23694__$1,opts__$1,path_fn__$1,map__23704__$2,map__23705__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta23707));
});
}
return (new clustermap.components.search.t23706(p__23695,p__23694,opts,path_fn,map__23704__$1,map__23705__$1,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__23712,n){var map__23714 = p__23712;var map__23714__$1 = ((cljs.core.seq_QMARK_.call(null,map__23714))?cljs.core.apply.call(null,cljs.core.hash_map,map__23714):map__23714);var investor_companies = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__23721 = cljs.core._EQ__EQ_;var expr__23722 = e.keyCode;if(cljs.core.truth_(pred__23721.call(null,clustermap.components.search.ESCAPE_KEY,expr__23722)))
{var G__23724 = om.core.get_node.call(null,owner,"search-component");var G__23724__$1 = (((G__23724 == null))?null:jayq.core.$.call(null,G__23724));var G__23724__$2 = (((G__23724__$1 == null))?null:G__23724__$1.toggle());return G__23724__$2;
} else
{if(cljs.core.truth_(pred__23721.call(null,clustermap.components.search.ENTER_KEY,expr__23722)))
{var vec__23725 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__23725,0,null);var res = cljs.core.nth.call(null,vec__23725,1,null);var G__23726_23727 = om.core.get_node.call(null,owner,"search-component");var G__23726_23728__$1 = (((G__23726_23727 == null))?null:jayq.core.$.call(null,G__23726_23727));var G__23726_23729__$2 = (((G__23726_23728__$1 == null))?null:G__23726_23728__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__23721.call(null,clustermap.components.search.UP_ARROW,expr__23722)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__23721.call(null,clustermap.components.search.DOWN_ARROW,expr__23722)))
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
clustermap.components.search.search_component = (function search_component(p__23730,owner){var map__23762 = p__23730;var map__23762__$1 = ((cljs.core.seq_QMARK_.call(null,map__23762))?cljs.core.apply.call(null,cljs.core.hash_map,map__23762):map__23762);var map__23763 = cljs.core.get.call(null,map__23762__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__23763__$1 = ((cljs.core.seq_QMARK_.call(null,map__23763))?cljs.core.apply.call(null,cljs.core.hash_map,map__23763):map__23763);var selection_type = cljs.core.get.call(null,map__23763__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__23763__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__23762__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__23764 = om.core.get_shared.call(null,owner);var map__23764__$1 = ((cljs.core.seq_QMARK_.call(null,map__23764))?cljs.core.apply.call(null,cljs.core.hash_map,map__23764):map__23764);var path_fn = cljs.core.get.call(null,map__23764__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23764__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__23765 = search_results;var map__23765__$1 = ((cljs.core.seq_QMARK_.call(null,map__23765))?cljs.core.apply.call(null,cljs.core.hash_map,map__23765):map__23765);var investor_companies = cljs.core.get.call(null,map__23765__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__23765__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__23765__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t23766 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23766 = (function (p__23730,investor_companies,selection_value,path_fn,portfolio_companies,map__23765,search_component,map__23764,map__23762,map__23763,comm,selection_type,owner,constituencies,search_results,meta23767){
this.p__23730 = p__23730;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.map__23765 = map__23765;
this.search_component = search_component;
this.map__23764 = map__23764;
this.map__23762 = map__23762;
this.map__23763 = map__23763;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta23767 = meta23767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23766.cljs$lang$type = true;
clustermap.components.search.t23766.cljs$lang$ctorStr = "clustermap.components.search/t23766";
clustermap.components.search.t23766.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t23766");
});
clustermap.components.search.t23766.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23766.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__23769(s__23770){return (new cljs.core.LazySeq(null,(function (){var s__23770__$1 = s__23770;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23770__$1);if(temp__4092__auto__)
{var s__23770__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23770__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23770__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23772 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23771 = 0;while(true){
if((i__23771 < size__4157__auto__))
{var vec__23775 = cljs.core._nth.call(null,c__4156__auto__,i__23771);var idx = cljs.core.nth.call(null,vec__23775,0,null);var con = cljs.core.nth.call(null,vec__23775,1,null);cljs.core.chunk_append.call(null,b__23772,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23771,vec__23775,idx,con,c__4156__auto__,size__4157__auto__,b__23772,s__23770__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__23771,vec__23775,idx,con,c__4156__auto__,size__4157__auto__,b__23772,s__23770__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23793 = (i__23771 + 1);
i__23771 = G__23793;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23772),iter__23769.call(null,cljs.core.chunk_rest.call(null,s__23770__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23772),null);
}
} else
{var vec__23776 = cljs.core.first.call(null,s__23770__$2);var idx = cljs.core.nth.call(null,vec__23776,0,null);var con = cljs.core.nth.call(null,vec__23776,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23776,idx,con,s__23770__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__23776,idx,con,s__23770__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23769.call(null,cljs.core.rest.call(null,s__23770__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__23777(s__23778){return (new cljs.core.LazySeq(null,(function (){var s__23778__$1 = s__23778;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23778__$1);if(temp__4092__auto__)
{var s__23778__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23778__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23778__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23780 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23779 = 0;while(true){
if((i__23779 < size__4157__auto__))
{var vec__23783 = cljs.core._nth.call(null,c__4156__auto__,i__23779);var idx = cljs.core.nth.call(null,vec__23783,0,null);var pc = cljs.core.nth.call(null,vec__23783,1,null);cljs.core.chunk_append.call(null,b__23780,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23779,vec__23783,idx,pc,c__4156__auto__,size__4157__auto__,b__23780,s__23778__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__23779,vec__23783,idx,pc,c__4156__auto__,size__4157__auto__,b__23780,s__23778__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23794 = (i__23779 + 1);
i__23779 = G__23794;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23780),iter__23777.call(null,cljs.core.chunk_rest.call(null,s__23778__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23780),null);
}
} else
{var vec__23784 = cljs.core.first.call(null,s__23778__$2);var idx = cljs.core.nth.call(null,vec__23784,0,null);var pc = cljs.core.nth.call(null,vec__23784,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23784,idx,pc,s__23778__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__23784,idx,pc,s__23778__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23777.call(null,cljs.core.rest.call(null,s__23778__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__23785(s__23786){return (new cljs.core.LazySeq(null,(function (){var s__23786__$1 = s__23786;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23786__$1);if(temp__4092__auto__)
{var s__23786__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23786__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23786__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23788 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23787 = 0;while(true){
if((i__23787 < size__4157__auto__))
{var vec__23791 = cljs.core._nth.call(null,c__4156__auto__,i__23787);var idx = cljs.core.nth.call(null,vec__23791,0,null);var inv = cljs.core.nth.call(null,vec__23791,1,null);cljs.core.chunk_append.call(null,b__23788,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23787,vec__23791,idx,inv,c__4156__auto__,size__4157__auto__,b__23788,s__23786__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__23787,vec__23791,idx,inv,c__4156__auto__,size__4157__auto__,b__23788,s__23786__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23795 = (i__23787 + 1);
i__23787 = G__23795;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23788),iter__23785.call(null,cljs.core.chunk_rest.call(null,s__23786__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23788),null);
}
} else
{var vec__23792 = cljs.core.first.call(null,s__23786__$2);var idx = cljs.core.nth.call(null,vec__23792,0,null);var inv = cljs.core.nth.call(null,vec__23792,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23792,idx,inv,s__23786__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__23792,idx,inv,s__23786__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23785.call(null,cljs.core.rest.call(null,s__23786__$2)));
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
clustermap.components.search.t23766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23768){var self__ = this;
var _23768__$1 = this;return self__.meta23767;
});
clustermap.components.search.t23766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23768,meta23767__$1){var self__ = this;
var _23768__$1 = this;return (new clustermap.components.search.t23766(self__.p__23730,self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.map__23765,self__.search_component,self__.map__23764,self__.map__23762,self__.map__23763,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,meta23767__$1));
});
clustermap.components.search.__GT_t23766 = (function __GT_t23766(p__23730__$1,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,map__23765__$2,search_component__$1,map__23764__$2,map__23762__$2,map__23763__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta23767){return (new clustermap.components.search.t23766(p__23730__$1,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,map__23765__$2,search_component__$1,map__23764__$2,map__23762__$2,map__23763__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta23767));
});
}
return (new clustermap.components.search.t23766(p__23730,investor_companies,selection_value,path_fn,portfolio_companies,map__23765__$1,search_component,map__23764__$1,map__23762__$1,map__23763__$1,comm,selection_type,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map