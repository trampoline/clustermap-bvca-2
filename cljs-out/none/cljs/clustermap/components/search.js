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
goog.require('om.dom');
goog.require('om.core');
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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__12260){var map__12266 = p__12260;var map__12266__$1 = ((cljs.core.seq_QMARK_.call(null,map__12266))?cljs.core.apply.call(null,cljs.core.hash_map,map__12266):map__12266);var opts = map__12266__$1;var path_fn = cljs.core.get.call(null,map__12266__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var type = cljs.core.get.call(null,map__12266__$1,new cljs.core.Keyword(null,"type","type",1017479852));var comm = cljs.core.get.call(null,map__12266__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12267 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12267 = (function (comm,type,path_fn,opts,map__12266,p__12260,owner,search_result,search_result_link,meta12268){
this.comm = comm;
this.type = type;
this.path_fn = path_fn;
this.opts = opts;
this.map__12266 = map__12266;
this.p__12260 = p__12260;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta12268 = meta12268;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12267.cljs$lang$type = true;
clustermap.components.search.t12267.cljs$lang$ctorStr = "clustermap.components.search/t12267";
clustermap.components.search.t12267.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12267");
});
clustermap.components.search.t12267.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12267.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12270 = l;var G__12270__$1 = (((G__12270 == null))?null:jayq.core.$.call(null,G__12270));var G__12270__$2 = (((G__12270__$1 == null))?null:G__12270__$1.parents(".search-component"));var G__12270__$3 = (((G__12270__$2 == null))?null:G__12270__$2.toggle());return G__12270__$3;
})},sablono.interpreter.interpret.call(null,self__.search_result.call(null,new cljs.core.Keyword(null,"name","name",1017277949))),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t12267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12269){var self__ = this;
var _12269__$1 = this;return self__.meta12268;
});
clustermap.components.search.t12267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12269,meta12268__$1){var self__ = this;
var _12269__$1 = this;return (new clustermap.components.search.t12267(self__.comm,self__.type,self__.path_fn,self__.opts,self__.map__12266,self__.p__12260,self__.owner,self__.search_result,self__.search_result_link,meta12268__$1));
});
clustermap.components.search.__GT_t12267 = (function __GT_t12267(comm__$1,type__$1,path_fn__$1,opts__$1,map__12266__$2,p__12260__$1,owner__$1,search_result__$1,search_result_link__$1,meta12268){return (new clustermap.components.search.t12267(comm__$1,type__$1,path_fn__$1,opts__$1,map__12266__$2,p__12260__$1,owner__$1,search_result__$1,search_result_link__$1,meta12268));
});
}
return (new clustermap.components.search.t12267(comm,type,path_fn,opts,map__12266__$1,p__12260,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12271,n){var map__12273 = p__12271;var map__12273__$1 = ((cljs.core.seq_QMARK_.call(null,map__12273))?cljs.core.apply.call(null,cljs.core.hash_map,map__12273):map__12273);var investor_companies = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12273__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12280 = cljs.core._EQ__EQ_;var expr__12281 = e.keyCode;if(cljs.core.truth_(pred__12280.call(null,clustermap.components.search.ESCAPE_KEY,expr__12281)))
{var G__12283 = om.core.get_node.call(null,owner,"search-component");var G__12283__$1 = (((G__12283 == null))?null:jayq.core.$.call(null,G__12283));var G__12283__$2 = (((G__12283__$1 == null))?null:G__12283__$1.toggle());return G__12283__$2;
} else
{if(cljs.core.truth_(pred__12280.call(null,clustermap.components.search.ENTER_KEY,expr__12281)))
{var vec__12284 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12284,0,null);var res = cljs.core.nth.call(null,vec__12284,1,null);var G__12285_12286 = om.core.get_node.call(null,owner,"search-component");var G__12285_12287__$1 = (((G__12285_12286 == null))?null:jayq.core.$.call(null,G__12285_12286));var G__12285_12288__$2 = (((G__12285_12287__$1 == null))?null:G__12285_12287__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_(pred__12280.call(null,clustermap.components.search.UP_ARROW,expr__12281)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12280.call(null,clustermap.components.search.DOWN_ARROW,expr__12281)))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var map__12318 = om.core.get_shared.call(null,owner);var map__12318__$1 = ((cljs.core.seq_QMARK_.call(null,map__12318))?cljs.core.apply.call(null,cljs.core.hash_map,map__12318):map__12318);var path_fn = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__12319 = search_results;var map__12319__$1 = ((cljs.core.seq_QMARK_.call(null,map__12319))?cljs.core.apply.call(null,cljs.core.hash_map,map__12319):map__12319);var investor_companies = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12320 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12320 = (function (investor_companies,path_fn,portfolio_companies,search_component,comm,owner,constituencies,search_results,map__12318,map__12319,meta12321){
this.investor_companies = investor_companies;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.map__12318 = map__12318;
this.map__12319 = map__12319;
this.meta12321 = meta12321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12320.cljs$lang$type = true;
clustermap.components.search.t12320.cljs$lang$ctorStr = "clustermap.components.search/t12320";
clustermap.components.search.t12320.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12320");
});
clustermap.components.search.t12320.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12320.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"style": {"width": "100%"}, "className": "tbl-cell"},om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
}), "placeholder": "Search", "type": "text", "ref": "search-field"})),React.DOM.div({"style": {"width": "34"}, "className": "tbl-cell"},React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
}), "type": "reset"},"\u00D7")),React.DOM.div({"style": {"width": "136"}, "className": "tbl-cell"},React.DOM.button({"type": "reset", "className": "btn-reset"},"Reset to UK wide"))),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.call(null,om.dom.ul,{},cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__12323(s__12324){return (new cljs.core.LazySeq(null,(function (){var s__12324__$1 = s__12324;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12324__$1);if(temp__4092__auto__)
{var s__12324__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12324__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12324__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12326 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12325 = 0;while(true){
if((i__12325 < size__4116__auto__))
{var vec__12329 = cljs.core._nth.call(null,c__4115__auto__,i__12325);var idx = cljs.core.nth.call(null,vec__12329,0,null);var con = cljs.core.nth.call(null,vec__12329,1,null);cljs.core.chunk_append.call(null,b__12326,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12325,vec__12329,idx,con,c__4115__auto__,size__4116__auto__,b__12326,s__12324__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12325,vec__12329,idx,con,c__4115__auto__,size__4116__auto__,b__12326,s__12324__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12347 = (i__12325 + 1);
i__12325 = G__12347;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12326),iter__12323.call(null,cljs.core.chunk_rest.call(null,s__12324__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12326),null);
}
} else
{var vec__12330 = cljs.core.first.call(null,s__12324__$2);var idx = cljs.core.nth.call(null,vec__12330,0,null);var con = cljs.core.nth.call(null,vec__12330,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12330,idx,con,s__12324__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12330,idx,con,s__12324__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12323.call(null,cljs.core.rest.call(null,s__12324__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__12331(s__12332){return (new cljs.core.LazySeq(null,(function (){var s__12332__$1 = s__12332;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12332__$1);if(temp__4092__auto__)
{var s__12332__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12332__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12332__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12334 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12333 = 0;while(true){
if((i__12333 < size__4116__auto__))
{var vec__12337 = cljs.core._nth.call(null,c__4115__auto__,i__12333);var idx = cljs.core.nth.call(null,vec__12337,0,null);var pc = cljs.core.nth.call(null,vec__12337,1,null);cljs.core.chunk_append.call(null,b__12334,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12333,vec__12337,idx,pc,c__4115__auto__,size__4116__auto__,b__12334,s__12332__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12333,vec__12337,idx,pc,c__4115__auto__,size__4116__auto__,b__12334,s__12332__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12348 = (i__12333 + 1);
i__12333 = G__12348;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12334),iter__12331.call(null,cljs.core.chunk_rest.call(null,s__12332__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12334),null);
}
} else
{var vec__12338 = cljs.core.first.call(null,s__12332__$2);var idx = cljs.core.nth.call(null,vec__12338,0,null);var pc = cljs.core.nth.call(null,vec__12338,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12338,idx,pc,s__12332__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12338,idx,pc,s__12332__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12331.call(null,cljs.core.rest.call(null,s__12332__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__12339(s__12340){return (new cljs.core.LazySeq(null,(function (){var s__12340__$1 = s__12340;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12340__$1);if(temp__4092__auto__)
{var s__12340__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12340__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12340__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12342 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12341 = 0;while(true){
if((i__12341 < size__4116__auto__))
{var vec__12345 = cljs.core._nth.call(null,c__4115__auto__,i__12341);var idx = cljs.core.nth.call(null,vec__12345,0,null);var inv = cljs.core.nth.call(null,vec__12345,1,null);cljs.core.chunk_append.call(null,b__12342,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12341,vec__12345,idx,inv,c__4115__auto__,size__4116__auto__,b__12342,s__12340__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12341,vec__12345,idx,inv,c__4115__auto__,size__4116__auto__,b__12342,s__12340__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12349 = (i__12341 + 1);
i__12341 = G__12349;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12342),iter__12339.call(null,cljs.core.chunk_rest.call(null,s__12340__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12342),null);
}
} else
{var vec__12346 = cljs.core.first.call(null,s__12340__$2);var idx = cljs.core.nth.call(null,vec__12346,0,null);var inv = cljs.core.nth.call(null,vec__12346,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12346,idx,inv,s__12340__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12346,idx,inv,s__12340__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12339.call(null,cljs.core.rest.call(null,s__12340__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_invs);
})()):null))));
})():null));
});
clustermap.components.search.t12320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12322){var self__ = this;
var _12322__$1 = this;return self__.meta12321;
});
clustermap.components.search.t12320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12322,meta12321__$1){var self__ = this;
var _12322__$1 = this;return (new clustermap.components.search.t12320(self__.investor_companies,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.owner,self__.constituencies,self__.search_results,self__.map__12318,self__.map__12319,meta12321__$1));
});
clustermap.components.search.__GT_t12320 = (function __GT_t12320(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,map__12318__$2,map__12319__$2,meta12321){return (new clustermap.components.search.t12320(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,map__12318__$2,map__12319__$2,meta12321));
});
}
return (new clustermap.components.search.t12320(investor_companies,path_fn,portfolio_companies,search_component,comm,owner,constituencies,search_results,map__12318__$1,map__12319__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map