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
clustermap.components.search.search_result_link = (function search_result_link(p__33249,owner,p__33250){var map__33259 = p__33249;var map__33259__$1 = ((cljs.core.seq_QMARK_.call(null,map__33259))?cljs.core.apply.call(null,cljs.core.hash_map,map__33259):map__33259);var search_result = map__33259__$1;var type = cljs.core.get.call(null,map__33259__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__33259__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__33260 = p__33250;var map__33260__$1 = ((cljs.core.seq_QMARK_.call(null,map__33260))?cljs.core.apply.call(null,cljs.core.hash_map,map__33260):map__33260);var opts = map__33260__$1;var path_fn = cljs.core.get.call(null,map__33260__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33260__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t33261 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33261 = (function (opts,path_fn,name,comm,search_result,owner,map__33259,p__33250,p__33249,type,map__33260,search_result_link,meta33262){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.map__33259 = map__33259;
this.p__33250 = p__33250;
this.p__33249 = p__33249;
this.type = type;
this.map__33260 = map__33260;
this.search_result_link = search_result_link;
this.meta33262 = meta33262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33261.cljs$lang$type = true;
clustermap.components.search.t33261.cljs$lang$ctorStr = "clustermap.components.search/t33261";
clustermap.components.search.t33261.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33261");
});
clustermap.components.search.t33261.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33261.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__33264){var self__ = this;
var map__33265 = p__33264;var map__33265__$1 = ((cljs.core.seq_QMARK_.call(null,map__33265))?cljs.core.apply.call(null,cljs.core.hash_map,map__33265):map__33265);var state = map__33265__$1;var selected = cljs.core.get.call(null,map__33265__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__33266 = l;var G__33266__$1 = (((G__33266 == null))?null:jayq.core.$.call(null,G__33266));var G__33266__$2 = (((G__33266__$1 == null))?null:G__33266__$1.parents(".search-component"));var G__33266__$3 = (((G__33266__$2 == null))?null:G__33266__$2.toggle());return G__33266__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t33261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33263){var self__ = this;
var _33263__$1 = this;return self__.meta33262;
});
clustermap.components.search.t33261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33263,meta33262__$1){var self__ = this;
var _33263__$1 = this;return (new clustermap.components.search.t33261(self__.opts,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.map__33259,self__.p__33250,self__.p__33249,self__.type,self__.map__33260,self__.search_result_link,meta33262__$1));
});
clustermap.components.search.__GT_t33261 = (function __GT_t33261(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__33259__$2,p__33250__$1,p__33249__$1,type__$1,map__33260__$2,search_result_link__$1,meta33262){return (new clustermap.components.search.t33261(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__33259__$2,p__33250__$1,p__33249__$1,type__$1,map__33260__$2,search_result_link__$1,meta33262));
});
}
return (new clustermap.components.search.t33261(opts,path_fn,name,comm,search_result,owner,map__33259__$1,p__33250,p__33249,type,map__33260__$1,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__33267,n){var map__33269 = p__33267;var map__33269__$1 = ((cljs.core.seq_QMARK_.call(null,map__33269))?cljs.core.apply.call(null,cljs.core.hash_map,map__33269):map__33269);var investor_companies = cljs.core.get.call(null,map__33269__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33269__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33269__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__33276 = cljs.core._EQ__EQ_;var expr__33277 = e.keyCode;if(cljs.core.truth_(pred__33276.call(null,clustermap.components.search.ESCAPE_KEY,expr__33277)))
{var G__33279 = om.core.get_node.call(null,owner,"search-component");var G__33279__$1 = (((G__33279 == null))?null:jayq.core.$.call(null,G__33279));var G__33279__$2 = (((G__33279__$1 == null))?null:G__33279__$1.toggle());return G__33279__$2;
} else
{if(cljs.core.truth_(pred__33276.call(null,clustermap.components.search.ENTER_KEY,expr__33277)))
{var vec__33280 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__33280,0,null);var res = cljs.core.nth.call(null,vec__33280,1,null);var G__33281_33282 = om.core.get_node.call(null,owner,"search-component");var G__33281_33283__$1 = (((G__33281_33282 == null))?null:jayq.core.$.call(null,G__33281_33282));var G__33281_33284__$2 = (((G__33281_33283__$1 == null))?null:G__33281_33283__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__33276.call(null,clustermap.components.search.UP_ARROW,expr__33277)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__33276.call(null,clustermap.components.search.DOWN_ARROW,expr__33277)))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var map__33316 = om.core.get_shared.call(null,owner);var map__33316__$1 = ((cljs.core.seq_QMARK_.call(null,map__33316))?cljs.core.apply.call(null,cljs.core.hash_map,map__33316):map__33316);var path_fn = cljs.core.get.call(null,map__33316__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33316__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__33317 = search_results;var map__33317__$1 = ((cljs.core.seq_QMARK_.call(null,map__33317))?cljs.core.apply.call(null,cljs.core.hash_map,map__33317):map__33317);var investor_companies = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33317__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t33318 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33318 = (function (investor_companies,map__33316,path_fn,map__33317,portfolio_companies,search_component,comm,owner,constituencies,search_results,meta33319){
this.investor_companies = investor_companies;
this.map__33316 = map__33316;
this.path_fn = path_fn;
this.map__33317 = map__33317;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta33319 = meta33319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33318.cljs$lang$type = true;
clustermap.components.search.t33318.cljs$lang$ctorStr = "clustermap.components.search/t33318";
clustermap.components.search.t33318.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33318");
});
clustermap.components.search.t33318.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33318.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__33323(s__33324){return (new cljs.core.LazySeq(null,(function (){var s__33324__$1 = s__33324;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33324__$1);if(temp__4092__auto__)
{var s__33324__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33324__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33324__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33326 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33325 = 0;while(true){
if((i__33325 < size__4116__auto__))
{var vec__33329 = cljs.core._nth.call(null,c__4115__auto__,i__33325);var idx = cljs.core.nth.call(null,vec__33329,0,null);var con = cljs.core.nth.call(null,vec__33329,1,null);cljs.core.chunk_append.call(null,b__33326,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33325,vec__33329,idx,con,c__4115__auto__,size__4116__auto__,b__33326,s__33324__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__33325,vec__33329,idx,con,c__4115__auto__,size__4116__auto__,b__33326,s__33324__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33347 = (i__33325 + 1);
i__33325 = G__33347;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33326),iter__33323.call(null,cljs.core.chunk_rest.call(null,s__33324__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33326),null);
}
} else
{var vec__33330 = cljs.core.first.call(null,s__33324__$2);var idx = cljs.core.nth.call(null,vec__33330,0,null);var con = cljs.core.nth.call(null,vec__33330,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33330,idx,con,s__33324__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__33330,idx,con,s__33324__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33323.call(null,cljs.core.rest.call(null,s__33324__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__33331(s__33332){return (new cljs.core.LazySeq(null,(function (){var s__33332__$1 = s__33332;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33332__$1);if(temp__4092__auto__)
{var s__33332__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33332__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33332__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33334 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33333 = 0;while(true){
if((i__33333 < size__4116__auto__))
{var vec__33337 = cljs.core._nth.call(null,c__4115__auto__,i__33333);var idx = cljs.core.nth.call(null,vec__33337,0,null);var pc = cljs.core.nth.call(null,vec__33337,1,null);cljs.core.chunk_append.call(null,b__33334,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33333,vec__33337,idx,pc,c__4115__auto__,size__4116__auto__,b__33334,s__33332__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__33333,vec__33337,idx,pc,c__4115__auto__,size__4116__auto__,b__33334,s__33332__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33348 = (i__33333 + 1);
i__33333 = G__33348;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33334),iter__33331.call(null,cljs.core.chunk_rest.call(null,s__33332__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33334),null);
}
} else
{var vec__33338 = cljs.core.first.call(null,s__33332__$2);var idx = cljs.core.nth.call(null,vec__33338,0,null);var pc = cljs.core.nth.call(null,vec__33338,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33338,idx,pc,s__33332__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__33338,idx,pc,s__33332__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33331.call(null,cljs.core.rest.call(null,s__33332__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__33339(s__33340){return (new cljs.core.LazySeq(null,(function (){var s__33340__$1 = s__33340;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33340__$1);if(temp__4092__auto__)
{var s__33340__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33340__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33340__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33342 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33341 = 0;while(true){
if((i__33341 < size__4116__auto__))
{var vec__33345 = cljs.core._nth.call(null,c__4115__auto__,i__33341);var idx = cljs.core.nth.call(null,vec__33345,0,null);var inv = cljs.core.nth.call(null,vec__33345,1,null);cljs.core.chunk_append.call(null,b__33342,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33341,vec__33345,idx,inv,c__4115__auto__,size__4116__auto__,b__33342,s__33340__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__33341,vec__33345,idx,inv,c__4115__auto__,size__4116__auto__,b__33342,s__33340__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33349 = (i__33341 + 1);
i__33341 = G__33349;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33342),iter__33339.call(null,cljs.core.chunk_rest.call(null,s__33340__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33342),null);
}
} else
{var vec__33346 = cljs.core.first.call(null,s__33340__$2);var idx = cljs.core.nth.call(null,vec__33346,0,null);var inv = cljs.core.nth.call(null,vec__33346,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33346,idx,inv,s__33340__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__33346,idx,inv,s__33340__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33339.call(null,cljs.core.rest.call(null,s__33340__$2)));
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
clustermap.components.search.t33318.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33320){var self__ = this;
var _33320__$1 = this;return self__.meta33319;
});
clustermap.components.search.t33318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33320,meta33319__$1){var self__ = this;
var _33320__$1 = this;return (new clustermap.components.search.t33318(self__.investor_companies,self__.map__33316,self__.path_fn,self__.map__33317,self__.portfolio_companies,self__.search_component,self__.comm,self__.owner,self__.constituencies,self__.search_results,meta33319__$1));
});
clustermap.components.search.__GT_t33318 = (function __GT_t33318(investor_companies__$1,map__33316__$2,path_fn__$1,map__33317__$2,portfolio_companies__$1,search_component__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta33319){return (new clustermap.components.search.t33318(investor_companies__$1,map__33316__$2,path_fn__$1,map__33317__$2,portfolio_companies__$1,search_component__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta33319));
});
}
return (new clustermap.components.search.t33318(investor_companies,map__33316__$1,path_fn,map__33317__$1,portfolio_companies,search_component,comm,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});
