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
clustermap.components.search.search_result_link = (function search_result_link(p__12307,owner,p__12308){var map__12317 = p__12307;var map__12317__$1 = ((cljs.core.seq_QMARK_.call(null,map__12317))?cljs.core.apply.call(null,cljs.core.hash_map,map__12317):map__12317);var search_result = map__12317__$1;var type = cljs.core.get.call(null,map__12317__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12317__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12318 = p__12308;var map__12318__$1 = ((cljs.core.seq_QMARK_.call(null,map__12318))?cljs.core.apply.call(null,cljs.core.hash_map,map__12318):map__12318);var opts = map__12318__$1;var path_fn = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12319 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12319 = (function (opts,path_fn,name,comm,search_result,owner,p__12308,p__12307,map__12317,map__12318,type,search_result_link,meta12320){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.p__12308 = p__12308;
this.p__12307 = p__12307;
this.map__12317 = map__12317;
this.map__12318 = map__12318;
this.type = type;
this.search_result_link = search_result_link;
this.meta12320 = meta12320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12319.cljs$lang$type = true;
clustermap.components.search.t12319.cljs$lang$ctorStr = "clustermap.components.search/t12319";
clustermap.components.search.t12319.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12319");
});
clustermap.components.search.t12319.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12319.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12322){var self__ = this;
var map__12323 = p__12322;var map__12323__$1 = ((cljs.core.seq_QMARK_.call(null,map__12323))?cljs.core.apply.call(null,cljs.core.hash_map,map__12323):map__12323);var state = map__12323__$1;var selected = cljs.core.get.call(null,map__12323__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12324 = l;var G__12324__$1 = (((G__12324 == null))?null:jayq.core.$.call(null,G__12324));var G__12324__$2 = (((G__12324__$1 == null))?null:G__12324__$1.parents(".search-component"));var G__12324__$3 = (((G__12324__$2 == null))?null:G__12324__$2.toggle());return G__12324__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t12319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12321){var self__ = this;
var _12321__$1 = this;return self__.meta12320;
});
clustermap.components.search.t12319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12321,meta12320__$1){var self__ = this;
var _12321__$1 = this;return (new clustermap.components.search.t12319(self__.opts,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.p__12308,self__.p__12307,self__.map__12317,self__.map__12318,self__.type,self__.search_result_link,meta12320__$1));
});
clustermap.components.search.__GT_t12319 = (function __GT_t12319(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__12308__$1,p__12307__$1,map__12317__$2,map__12318__$2,type__$1,search_result_link__$1,meta12320){return (new clustermap.components.search.t12319(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__12308__$1,p__12307__$1,map__12317__$2,map__12318__$2,type__$1,search_result_link__$1,meta12320));
});
}
return (new clustermap.components.search.t12319(opts,path_fn,name,comm,search_result,owner,p__12308,p__12307,map__12317__$1,map__12318__$1,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12325,n){var map__12327 = p__12325;var map__12327__$1 = ((cljs.core.seq_QMARK_.call(null,map__12327))?cljs.core.apply.call(null,cljs.core.hash_map,map__12327):map__12327);var investor_companies = cljs.core.get.call(null,map__12327__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12327__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12327__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12334 = cljs.core._EQ__EQ_;var expr__12335 = e.keyCode;if(cljs.core.truth_(pred__12334.call(null,clustermap.components.search.ESCAPE_KEY,expr__12335)))
{var G__12337 = om.core.get_node.call(null,owner,"search-component");var G__12337__$1 = (((G__12337 == null))?null:jayq.core.$.call(null,G__12337));var G__12337__$2 = (((G__12337__$1 == null))?null:G__12337__$1.toggle());return G__12337__$2;
} else
{if(cljs.core.truth_(pred__12334.call(null,clustermap.components.search.ENTER_KEY,expr__12335)))
{var vec__12338 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12338,0,null);var res = cljs.core.nth.call(null,vec__12338,1,null);var G__12339_12340 = om.core.get_node.call(null,owner,"search-component");var G__12339_12341__$1 = (((G__12339_12340 == null))?null:jayq.core.$.call(null,G__12339_12340));var G__12339_12342__$2 = (((G__12339_12341__$1 == null))?null:G__12339_12341__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12334.call(null,clustermap.components.search.UP_ARROW,expr__12335)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12334.call(null,clustermap.components.search.DOWN_ARROW,expr__12335)))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var map__12374 = om.core.get_shared.call(null,owner);var map__12374__$1 = ((cljs.core.seq_QMARK_.call(null,map__12374))?cljs.core.apply.call(null,cljs.core.hash_map,map__12374):map__12374);var path_fn = cljs.core.get.call(null,map__12374__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12374__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__12375 = search_results;var map__12375__$1 = ((cljs.core.seq_QMARK_.call(null,map__12375))?cljs.core.apply.call(null,cljs.core.hash_map,map__12375):map__12375);var investor_companies = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12375__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12376 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12376 = (function (investor_companies,path_fn,portfolio_companies,search_component,comm,owner,constituencies,map__12375,search_results,map__12374,meta12377){
this.investor_companies = investor_companies;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.map__12375 = map__12375;
this.search_results = search_results;
this.map__12374 = map__12374;
this.meta12377 = meta12377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12376.cljs$lang$type = true;
clustermap.components.search.t12376.cljs$lang$ctorStr = "clustermap.components.search/t12376";
clustermap.components.search.t12376.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12376");
});
clustermap.components.search.t12376.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12376.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__12381(s__12382){return (new cljs.core.LazySeq(null,(function (){var s__12382__$1 = s__12382;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12382__$1);if(temp__4092__auto__)
{var s__12382__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12382__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12382__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12384 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12383 = 0;while(true){
if((i__12383 < size__4116__auto__))
{var vec__12387 = cljs.core._nth.call(null,c__4115__auto__,i__12383);var idx = cljs.core.nth.call(null,vec__12387,0,null);var con = cljs.core.nth.call(null,vec__12387,1,null);cljs.core.chunk_append.call(null,b__12384,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12383,vec__12387,idx,con,c__4115__auto__,size__4116__auto__,b__12384,s__12382__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12383,vec__12387,idx,con,c__4115__auto__,size__4116__auto__,b__12384,s__12382__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12405 = (i__12383 + 1);
i__12383 = G__12405;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12384),iter__12381.call(null,cljs.core.chunk_rest.call(null,s__12382__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12384),null);
}
} else
{var vec__12388 = cljs.core.first.call(null,s__12382__$2);var idx = cljs.core.nth.call(null,vec__12388,0,null);var con = cljs.core.nth.call(null,vec__12388,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12388,idx,con,s__12382__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12388,idx,con,s__12382__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12381.call(null,cljs.core.rest.call(null,s__12382__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__12389(s__12390){return (new cljs.core.LazySeq(null,(function (){var s__12390__$1 = s__12390;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12390__$1);if(temp__4092__auto__)
{var s__12390__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12390__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12390__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12392 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12391 = 0;while(true){
if((i__12391 < size__4116__auto__))
{var vec__12395 = cljs.core._nth.call(null,c__4115__auto__,i__12391);var idx = cljs.core.nth.call(null,vec__12395,0,null);var pc = cljs.core.nth.call(null,vec__12395,1,null);cljs.core.chunk_append.call(null,b__12392,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12391,vec__12395,idx,pc,c__4115__auto__,size__4116__auto__,b__12392,s__12390__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12391,vec__12395,idx,pc,c__4115__auto__,size__4116__auto__,b__12392,s__12390__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12406 = (i__12391 + 1);
i__12391 = G__12406;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12392),iter__12389.call(null,cljs.core.chunk_rest.call(null,s__12390__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12392),null);
}
} else
{var vec__12396 = cljs.core.first.call(null,s__12390__$2);var idx = cljs.core.nth.call(null,vec__12396,0,null);var pc = cljs.core.nth.call(null,vec__12396,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12396,idx,pc,s__12390__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12396,idx,pc,s__12390__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12389.call(null,cljs.core.rest.call(null,s__12390__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__12397(s__12398){return (new cljs.core.LazySeq(null,(function (){var s__12398__$1 = s__12398;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12398__$1);if(temp__4092__auto__)
{var s__12398__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12398__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12398__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12400 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12399 = 0;while(true){
if((i__12399 < size__4116__auto__))
{var vec__12403 = cljs.core._nth.call(null,c__4115__auto__,i__12399);var idx = cljs.core.nth.call(null,vec__12403,0,null);var inv = cljs.core.nth.call(null,vec__12403,1,null);cljs.core.chunk_append.call(null,b__12400,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12399,vec__12403,idx,inv,c__4115__auto__,size__4116__auto__,b__12400,s__12398__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12399,vec__12403,idx,inv,c__4115__auto__,size__4116__auto__,b__12400,s__12398__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12407 = (i__12399 + 1);
i__12399 = G__12407;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12400),iter__12397.call(null,cljs.core.chunk_rest.call(null,s__12398__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12400),null);
}
} else
{var vec__12404 = cljs.core.first.call(null,s__12398__$2);var idx = cljs.core.nth.call(null,vec__12404,0,null);var inv = cljs.core.nth.call(null,vec__12404,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12404,idx,inv,s__12398__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12404,idx,inv,s__12398__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12397.call(null,cljs.core.rest.call(null,s__12398__$2)));
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
clustermap.components.search.t12376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12378){var self__ = this;
var _12378__$1 = this;return self__.meta12377;
});
clustermap.components.search.t12376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12378,meta12377__$1){var self__ = this;
var _12378__$1 = this;return (new clustermap.components.search.t12376(self__.investor_companies,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.owner,self__.constituencies,self__.map__12375,self__.search_results,self__.map__12374,meta12377__$1));
});
clustermap.components.search.__GT_t12376 = (function __GT_t12376(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,owner__$1,constituencies__$1,map__12375__$2,search_results__$1,map__12374__$2,meta12377){return (new clustermap.components.search.t12376(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,owner__$1,constituencies__$1,map__12375__$2,search_results__$1,map__12374__$2,meta12377));
});
}
return (new clustermap.components.search.t12376(investor_companies,path_fn,portfolio_companies,search_component,comm,owner,constituencies,map__12375__$1,search_results,map__12374__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map