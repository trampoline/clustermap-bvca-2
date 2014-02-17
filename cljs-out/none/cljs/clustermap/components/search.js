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
clustermap.components.search.search_result_link = (function search_result_link(p__12283,owner,p__12284){var map__12293 = p__12283;var map__12293__$1 = ((cljs.core.seq_QMARK_.call(null,map__12293))?cljs.core.apply.call(null,cljs.core.hash_map,map__12293):map__12293);var search_result = map__12293__$1;var type = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12293__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12294 = p__12284;var map__12294__$1 = ((cljs.core.seq_QMARK_.call(null,map__12294))?cljs.core.apply.call(null,cljs.core.hash_map,map__12294):map__12294);var opts = map__12294__$1;var path_fn = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12294__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12295 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12295 = (function (opts,map__12293,path_fn,name,comm,search_result,owner,p__12283,p__12284,type,map__12294,search_result_link,meta12296){
this.opts = opts;
this.map__12293 = map__12293;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.p__12283 = p__12283;
this.p__12284 = p__12284;
this.type = type;
this.map__12294 = map__12294;
this.search_result_link = search_result_link;
this.meta12296 = meta12296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12295.cljs$lang$type = true;
clustermap.components.search.t12295.cljs$lang$ctorStr = "clustermap.components.search/t12295";
clustermap.components.search.t12295.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12295");
});
clustermap.components.search.t12295.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12295.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12298){var self__ = this;
var map__12299 = p__12298;var map__12299__$1 = ((cljs.core.seq_QMARK_.call(null,map__12299))?cljs.core.apply.call(null,cljs.core.hash_map,map__12299):map__12299);var state = map__12299__$1;var selected = cljs.core.get.call(null,map__12299__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12300 = l;var G__12300__$1 = (((G__12300 == null))?null:jayq.core.$.call(null,G__12300));var G__12300__$2 = (((G__12300__$1 == null))?null:G__12300__$1.parents(".search-component"));var G__12300__$3 = (((G__12300__$2 == null))?null:G__12300__$2.toggle());return G__12300__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t12295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12297){var self__ = this;
var _12297__$1 = this;return self__.meta12296;
});
clustermap.components.search.t12295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12297,meta12296__$1){var self__ = this;
var _12297__$1 = this;return (new clustermap.components.search.t12295(self__.opts,self__.map__12293,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.p__12283,self__.p__12284,self__.type,self__.map__12294,self__.search_result_link,meta12296__$1));
});
clustermap.components.search.__GT_t12295 = (function __GT_t12295(opts__$1,map__12293__$2,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__12283__$1,p__12284__$1,type__$1,map__12294__$2,search_result_link__$1,meta12296){return (new clustermap.components.search.t12295(opts__$1,map__12293__$2,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__12283__$1,p__12284__$1,type__$1,map__12294__$2,search_result_link__$1,meta12296));
});
}
return (new clustermap.components.search.t12295(opts,map__12293__$1,path_fn,name,comm,search_result,owner,p__12283,p__12284,type,map__12294__$1,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12301,n){var map__12303 = p__12301;var map__12303__$1 = ((cljs.core.seq_QMARK_.call(null,map__12303))?cljs.core.apply.call(null,cljs.core.hash_map,map__12303):map__12303);var investor_companies = cljs.core.get.call(null,map__12303__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12303__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12303__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12310 = cljs.core._EQ__EQ_;var expr__12311 = e.keyCode;if(cljs.core.truth_(pred__12310.call(null,clustermap.components.search.ESCAPE_KEY,expr__12311)))
{var G__12313 = om.core.get_node.call(null,owner,"search-component");var G__12313__$1 = (((G__12313 == null))?null:jayq.core.$.call(null,G__12313));var G__12313__$2 = (((G__12313__$1 == null))?null:G__12313__$1.toggle());return G__12313__$2;
} else
{if(cljs.core.truth_(pred__12310.call(null,clustermap.components.search.ENTER_KEY,expr__12311)))
{var vec__12314 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12314,0,null);var res = cljs.core.nth.call(null,vec__12314,1,null);var G__12315_12316 = om.core.get_node.call(null,owner,"search-component");var G__12315_12317__$1 = (((G__12315_12316 == null))?null:jayq.core.$.call(null,G__12315_12316));var G__12315_12318__$2 = (((G__12315_12317__$1 == null))?null:G__12315_12317__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12310.call(null,clustermap.components.search.UP_ARROW,expr__12311)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12310.call(null,clustermap.components.search.DOWN_ARROW,expr__12311)))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var map__12350 = om.core.get_shared.call(null,owner);var map__12350__$1 = ((cljs.core.seq_QMARK_.call(null,map__12350))?cljs.core.apply.call(null,cljs.core.hash_map,map__12350):map__12350);var path_fn = cljs.core.get.call(null,map__12350__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12350__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__12351 = search_results;var map__12351__$1 = ((cljs.core.seq_QMARK_.call(null,map__12351))?cljs.core.apply.call(null,cljs.core.hash_map,map__12351):map__12351);var investor_companies = cljs.core.get.call(null,map__12351__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12351__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12351__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12352 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12352 = (function (investor_companies,path_fn,portfolio_companies,search_component,map__12350,map__12351,comm,owner,constituencies,search_results,meta12353){
this.investor_companies = investor_companies;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__12350 = map__12350;
this.map__12351 = map__12351;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta12353 = meta12353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12352.cljs$lang$type = true;
clustermap.components.search.t12352.cljs$lang$ctorStr = "clustermap.components.search/t12352";
clustermap.components.search.t12352.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12352");
});
clustermap.components.search.t12352.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12352.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
})})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
})},"\u00D7")),React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": self__.path_fn.call(null,null,null)},React.DOM.button({"className": "btn-reset", "type": "reset"},"Reset to UK wide")))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__12357(s__12358){return (new cljs.core.LazySeq(null,(function (){var s__12358__$1 = s__12358;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12358__$1);if(temp__4092__auto__)
{var s__12358__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12358__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12358__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12360 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12359 = 0;while(true){
if((i__12359 < size__4116__auto__))
{var vec__12363 = cljs.core._nth.call(null,c__4115__auto__,i__12359);var idx = cljs.core.nth.call(null,vec__12363,0,null);var con = cljs.core.nth.call(null,vec__12363,1,null);cljs.core.chunk_append.call(null,b__12360,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12359,vec__12363,idx,con,c__4115__auto__,size__4116__auto__,b__12360,s__12358__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12359,vec__12363,idx,con,c__4115__auto__,size__4116__auto__,b__12360,s__12358__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12381 = (i__12359 + 1);
i__12359 = G__12381;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12360),iter__12357.call(null,cljs.core.chunk_rest.call(null,s__12358__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12360),null);
}
} else
{var vec__12364 = cljs.core.first.call(null,s__12358__$2);var idx = cljs.core.nth.call(null,vec__12364,0,null);var con = cljs.core.nth.call(null,vec__12364,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12364,idx,con,s__12358__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12364,idx,con,s__12358__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12357.call(null,cljs.core.rest.call(null,s__12358__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__12365(s__12366){return (new cljs.core.LazySeq(null,(function (){var s__12366__$1 = s__12366;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12366__$1);if(temp__4092__auto__)
{var s__12366__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12366__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12366__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12368 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12367 = 0;while(true){
if((i__12367 < size__4116__auto__))
{var vec__12371 = cljs.core._nth.call(null,c__4115__auto__,i__12367);var idx = cljs.core.nth.call(null,vec__12371,0,null);var pc = cljs.core.nth.call(null,vec__12371,1,null);cljs.core.chunk_append.call(null,b__12368,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12367,vec__12371,idx,pc,c__4115__auto__,size__4116__auto__,b__12368,s__12366__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12367,vec__12371,idx,pc,c__4115__auto__,size__4116__auto__,b__12368,s__12366__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12382 = (i__12367 + 1);
i__12367 = G__12382;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12368),iter__12365.call(null,cljs.core.chunk_rest.call(null,s__12366__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12368),null);
}
} else
{var vec__12372 = cljs.core.first.call(null,s__12366__$2);var idx = cljs.core.nth.call(null,vec__12372,0,null);var pc = cljs.core.nth.call(null,vec__12372,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12372,idx,pc,s__12366__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12372,idx,pc,s__12366__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12365.call(null,cljs.core.rest.call(null,s__12366__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__12373(s__12374){return (new cljs.core.LazySeq(null,(function (){var s__12374__$1 = s__12374;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12374__$1);if(temp__4092__auto__)
{var s__12374__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12374__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12374__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12376 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12375 = 0;while(true){
if((i__12375 < size__4116__auto__))
{var vec__12379 = cljs.core._nth.call(null,c__4115__auto__,i__12375);var idx = cljs.core.nth.call(null,vec__12379,0,null);var inv = cljs.core.nth.call(null,vec__12379,1,null);cljs.core.chunk_append.call(null,b__12376,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12375,vec__12379,idx,inv,c__4115__auto__,size__4116__auto__,b__12376,s__12374__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12375,vec__12379,idx,inv,c__4115__auto__,size__4116__auto__,b__12376,s__12374__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12383 = (i__12375 + 1);
i__12375 = G__12383;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12376),iter__12373.call(null,cljs.core.chunk_rest.call(null,s__12374__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12376),null);
}
} else
{var vec__12380 = cljs.core.first.call(null,s__12374__$2);var idx = cljs.core.nth.call(null,vec__12380,0,null);var inv = cljs.core.nth.call(null,vec__12380,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12380,idx,inv,s__12374__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12380,idx,inv,s__12374__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12373.call(null,cljs.core.rest.call(null,s__12374__$2)));
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
clustermap.components.search.t12352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12354){var self__ = this;
var _12354__$1 = this;return self__.meta12353;
});
clustermap.components.search.t12352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12354,meta12353__$1){var self__ = this;
var _12354__$1 = this;return (new clustermap.components.search.t12352(self__.investor_companies,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__12350,self__.map__12351,self__.comm,self__.owner,self__.constituencies,self__.search_results,meta12353__$1));
});
clustermap.components.search.__GT_t12352 = (function __GT_t12352(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__12350__$2,map__12351__$2,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta12353){return (new clustermap.components.search.t12352(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__12350__$2,map__12351__$2,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta12353));
});
}
return (new clustermap.components.search.t12352(investor_companies,path_fn,portfolio_companies,search_component,map__12350__$1,map__12351__$1,comm,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map