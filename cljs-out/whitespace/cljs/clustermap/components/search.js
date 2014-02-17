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
clustermap.components.search.search_result_link = (function search_result_link(p__33177,owner,p__33178){var map__33187 = p__33177;var map__33187__$1 = ((cljs.core.seq_QMARK_.call(null,map__33187))?cljs.core.apply.call(null,cljs.core.hash_map,map__33187):map__33187);var search_result = map__33187__$1;var type = cljs.core.get.call(null,map__33187__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__33187__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__33188 = p__33178;var map__33188__$1 = ((cljs.core.seq_QMARK_.call(null,map__33188))?cljs.core.apply.call(null,cljs.core.hash_map,map__33188):map__33188);var opts = map__33188__$1;var path_fn = cljs.core.get.call(null,map__33188__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33188__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t33189 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33189 = (function (p__33177,opts,p__33178,path_fn,name,comm,search_result,owner,map__33187,map__33188,type,search_result_link,meta33190){
this.p__33177 = p__33177;
this.opts = opts;
this.p__33178 = p__33178;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.map__33187 = map__33187;
this.map__33188 = map__33188;
this.type = type;
this.search_result_link = search_result_link;
this.meta33190 = meta33190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33189.cljs$lang$type = true;
clustermap.components.search.t33189.cljs$lang$ctorStr = "clustermap.components.search/t33189";
clustermap.components.search.t33189.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33189");
});
clustermap.components.search.t33189.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33189.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__33192){var self__ = this;
var map__33193 = p__33192;var map__33193__$1 = ((cljs.core.seq_QMARK_.call(null,map__33193))?cljs.core.apply.call(null,cljs.core.hash_map,map__33193):map__33193);var state = map__33193__$1;var selected = cljs.core.get.call(null,map__33193__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__33194 = l;var G__33194__$1 = (((G__33194 == null))?null:jayq.core.$.call(null,G__33194));var G__33194__$2 = (((G__33194__$1 == null))?null:G__33194__$1.parents(".search-component"));var G__33194__$3 = (((G__33194__$2 == null))?null:G__33194__$2.toggle());return G__33194__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t33189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33191){var self__ = this;
var _33191__$1 = this;return self__.meta33190;
});
clustermap.components.search.t33189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33191,meta33190__$1){var self__ = this;
var _33191__$1 = this;return (new clustermap.components.search.t33189(self__.p__33177,self__.opts,self__.p__33178,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.map__33187,self__.map__33188,self__.type,self__.search_result_link,meta33190__$1));
});
clustermap.components.search.__GT_t33189 = (function __GT_t33189(p__33177__$1,opts__$1,p__33178__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__33187__$2,map__33188__$2,type__$1,search_result_link__$1,meta33190){return (new clustermap.components.search.t33189(p__33177__$1,opts__$1,p__33178__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__33187__$2,map__33188__$2,type__$1,search_result_link__$1,meta33190));
});
}
return (new clustermap.components.search.t33189(p__33177,opts,p__33178,path_fn,name,comm,search_result,owner,map__33187__$1,map__33188__$1,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__33195,n){var map__33197 = p__33195;var map__33197__$1 = ((cljs.core.seq_QMARK_.call(null,map__33197))?cljs.core.apply.call(null,cljs.core.hash_map,map__33197):map__33197);var investor_companies = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33197__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__33204 = cljs.core._EQ__EQ_;var expr__33205 = e.keyCode;if(cljs.core.truth_(pred__33204.call(null,clustermap.components.search.ESCAPE_KEY,expr__33205)))
{var G__33207 = om.core.get_node.call(null,owner,"search-component");var G__33207__$1 = (((G__33207 == null))?null:jayq.core.$.call(null,G__33207));var G__33207__$2 = (((G__33207__$1 == null))?null:G__33207__$1.toggle());return G__33207__$2;
} else
{if(cljs.core.truth_(pred__33204.call(null,clustermap.components.search.ENTER_KEY,expr__33205)))
{var vec__33208 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__33208,0,null);var res = cljs.core.nth.call(null,vec__33208,1,null);var G__33209_33210 = om.core.get_node.call(null,owner,"search-component");var G__33209_33211__$1 = (((G__33209_33210 == null))?null:jayq.core.$.call(null,G__33209_33210));var G__33209_33212__$2 = (((G__33209_33211__$1 == null))?null:G__33209_33211__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__33204.call(null,clustermap.components.search.UP_ARROW,expr__33205)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__33204.call(null,clustermap.components.search.DOWN_ARROW,expr__33205)))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var map__33244 = om.core.get_shared.call(null,owner);var map__33244__$1 = ((cljs.core.seq_QMARK_.call(null,map__33244))?cljs.core.apply.call(null,cljs.core.hash_map,map__33244):map__33244);var path_fn = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33244__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__33245 = search_results;var map__33245__$1 = ((cljs.core.seq_QMARK_.call(null,map__33245))?cljs.core.apply.call(null,cljs.core.hash_map,map__33245):map__33245);var investor_companies = cljs.core.get.call(null,map__33245__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33245__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33245__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t33246 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33246 = (function (investor_companies,path_fn,portfolio_companies,search_component,map__33244,map__33245,comm,owner,constituencies,search_results,meta33247){
this.investor_companies = investor_companies;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__33244 = map__33244;
this.map__33245 = map__33245;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta33247 = meta33247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33246.cljs$lang$type = true;
clustermap.components.search.t33246.cljs$lang$ctorStr = "clustermap.components.search/t33246";
clustermap.components.search.t33246.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33246");
});
clustermap.components.search.t33246.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33246.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__33251(s__33252){return (new cljs.core.LazySeq(null,(function (){var s__33252__$1 = s__33252;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33252__$1);if(temp__4092__auto__)
{var s__33252__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33252__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33252__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33254 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33253 = 0;while(true){
if((i__33253 < size__4116__auto__))
{var vec__33257 = cljs.core._nth.call(null,c__4115__auto__,i__33253);var idx = cljs.core.nth.call(null,vec__33257,0,null);var con = cljs.core.nth.call(null,vec__33257,1,null);cljs.core.chunk_append.call(null,b__33254,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33253,vec__33257,idx,con,c__4115__auto__,size__4116__auto__,b__33254,s__33252__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__33253,vec__33257,idx,con,c__4115__auto__,size__4116__auto__,b__33254,s__33252__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33275 = (i__33253 + 1);
i__33253 = G__33275;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33254),iter__33251.call(null,cljs.core.chunk_rest.call(null,s__33252__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33254),null);
}
} else
{var vec__33258 = cljs.core.first.call(null,s__33252__$2);var idx = cljs.core.nth.call(null,vec__33258,0,null);var con = cljs.core.nth.call(null,vec__33258,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33258,idx,con,s__33252__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__33258,idx,con,s__33252__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33251.call(null,cljs.core.rest.call(null,s__33252__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__33259(s__33260){return (new cljs.core.LazySeq(null,(function (){var s__33260__$1 = s__33260;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33260__$1);if(temp__4092__auto__)
{var s__33260__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33260__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33260__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33262 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33261 = 0;while(true){
if((i__33261 < size__4116__auto__))
{var vec__33265 = cljs.core._nth.call(null,c__4115__auto__,i__33261);var idx = cljs.core.nth.call(null,vec__33265,0,null);var pc = cljs.core.nth.call(null,vec__33265,1,null);cljs.core.chunk_append.call(null,b__33262,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33261,vec__33265,idx,pc,c__4115__auto__,size__4116__auto__,b__33262,s__33260__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__33261,vec__33265,idx,pc,c__4115__auto__,size__4116__auto__,b__33262,s__33260__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33276 = (i__33261 + 1);
i__33261 = G__33276;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33262),iter__33259.call(null,cljs.core.chunk_rest.call(null,s__33260__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33262),null);
}
} else
{var vec__33266 = cljs.core.first.call(null,s__33260__$2);var idx = cljs.core.nth.call(null,vec__33266,0,null);var pc = cljs.core.nth.call(null,vec__33266,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33266,idx,pc,s__33260__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__33266,idx,pc,s__33260__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33259.call(null,cljs.core.rest.call(null,s__33260__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__33267(s__33268){return (new cljs.core.LazySeq(null,(function (){var s__33268__$1 = s__33268;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33268__$1);if(temp__4092__auto__)
{var s__33268__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33268__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33268__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33270 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33269 = 0;while(true){
if((i__33269 < size__4116__auto__))
{var vec__33273 = cljs.core._nth.call(null,c__4115__auto__,i__33269);var idx = cljs.core.nth.call(null,vec__33273,0,null);var inv = cljs.core.nth.call(null,vec__33273,1,null);cljs.core.chunk_append.call(null,b__33270,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33269,vec__33273,idx,inv,c__4115__auto__,size__4116__auto__,b__33270,s__33268__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__33269,vec__33273,idx,inv,c__4115__auto__,size__4116__auto__,b__33270,s__33268__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33277 = (i__33269 + 1);
i__33269 = G__33277;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33270),iter__33267.call(null,cljs.core.chunk_rest.call(null,s__33268__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33270),null);
}
} else
{var vec__33274 = cljs.core.first.call(null,s__33268__$2);var idx = cljs.core.nth.call(null,vec__33274,0,null);var inv = cljs.core.nth.call(null,vec__33274,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33274,idx,inv,s__33268__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__33274,idx,inv,s__33268__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33267.call(null,cljs.core.rest.call(null,s__33268__$2)));
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
clustermap.components.search.t33246.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33248){var self__ = this;
var _33248__$1 = this;return self__.meta33247;
});
clustermap.components.search.t33246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33248,meta33247__$1){var self__ = this;
var _33248__$1 = this;return (new clustermap.components.search.t33246(self__.investor_companies,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__33244,self__.map__33245,self__.comm,self__.owner,self__.constituencies,self__.search_results,meta33247__$1));
});
clustermap.components.search.__GT_t33246 = (function __GT_t33246(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__33244__$2,map__33245__$2,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta33247){return (new clustermap.components.search.t33246(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__33244__$2,map__33245__$2,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta33247));
});
}
return (new clustermap.components.search.t33246(investor_companies,path_fn,portfolio_companies,search_component,map__33244__$1,map__33245__$1,comm,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});
