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
clustermap.components.search.search_result_link = (function search_result_link(p__34319,owner,p__34320){var map__34329 = p__34319;var map__34329__$1 = ((cljs.core.seq_QMARK_.call(null,map__34329))?cljs.core.apply.call(null,cljs.core.hash_map,map__34329):map__34329);var search_result = map__34329__$1;var type = cljs.core.get.call(null,map__34329__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__34329__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__34330 = p__34320;var map__34330__$1 = ((cljs.core.seq_QMARK_.call(null,map__34330))?cljs.core.apply.call(null,cljs.core.hash_map,map__34330):map__34330);var opts = map__34330__$1;var path_fn = cljs.core.get.call(null,map__34330__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__34330__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t34331 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34331 = (function (p__34319,opts,path_fn,map__34329,map__34330,name,comm,p__34320,search_result,owner,type,search_result_link,meta34332){
this.p__34319 = p__34319;
this.opts = opts;
this.path_fn = path_fn;
this.map__34329 = map__34329;
this.map__34330 = map__34330;
this.name = name;
this.comm = comm;
this.p__34320 = p__34320;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta34332 = meta34332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34331.cljs$lang$type = true;
clustermap.components.search.t34331.cljs$lang$ctorStr = "clustermap.components.search/t34331";
clustermap.components.search.t34331.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t34331");
});
clustermap.components.search.t34331.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34331.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__34334){var self__ = this;
var map__34335 = p__34334;var map__34335__$1 = ((cljs.core.seq_QMARK_.call(null,map__34335))?cljs.core.apply.call(null,cljs.core.hash_map,map__34335):map__34335);var state = map__34335__$1;var selected = cljs.core.get.call(null,map__34335__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__34336 = l;var G__34336__$1 = (((G__34336 == null))?null:jayq.core.$.call(null,G__34336));var G__34336__$2 = (((G__34336__$1 == null))?null:G__34336__$1.parents(".search-component"));var G__34336__$3 = (((G__34336__$2 == null))?null:G__34336__$2.toggle());return G__34336__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t34331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34333){var self__ = this;
var _34333__$1 = this;return self__.meta34332;
});
clustermap.components.search.t34331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34333,meta34332__$1){var self__ = this;
var _34333__$1 = this;return (new clustermap.components.search.t34331(self__.p__34319,self__.opts,self__.path_fn,self__.map__34329,self__.map__34330,self__.name,self__.comm,self__.p__34320,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta34332__$1));
});
clustermap.components.search.__GT_t34331 = (function __GT_t34331(p__34319__$1,opts__$1,path_fn__$1,map__34329__$2,map__34330__$2,name__$1,comm__$1,p__34320__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta34332){return (new clustermap.components.search.t34331(p__34319__$1,opts__$1,path_fn__$1,map__34329__$2,map__34330__$2,name__$1,comm__$1,p__34320__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta34332));
});
}
return (new clustermap.components.search.t34331(p__34319,opts,path_fn,map__34329__$1,map__34330__$1,name,comm,p__34320,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__34337,n){var map__34339 = p__34337;var map__34339__$1 = ((cljs.core.seq_QMARK_.call(null,map__34339))?cljs.core.apply.call(null,cljs.core.hash_map,map__34339):map__34339);var investor_companies = cljs.core.get.call(null,map__34339__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__34339__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__34339__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__34346 = cljs.core._EQ__EQ_;var expr__34347 = e.keyCode;if(cljs.core.truth_(pred__34346.call(null,clustermap.components.search.ESCAPE_KEY,expr__34347)))
{var G__34349 = om.core.get_node.call(null,owner,"search-component");var G__34349__$1 = (((G__34349 == null))?null:jayq.core.$.call(null,G__34349));var G__34349__$2 = (((G__34349__$1 == null))?null:G__34349__$1.toggle());return G__34349__$2;
} else
{if(cljs.core.truth_(pred__34346.call(null,clustermap.components.search.ENTER_KEY,expr__34347)))
{var vec__34350 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__34350,0,null);var res = cljs.core.nth.call(null,vec__34350,1,null);var G__34351_34352 = om.core.get_node.call(null,owner,"search-component");var G__34351_34353__$1 = (((G__34351_34352 == null))?null:jayq.core.$.call(null,G__34351_34352));var G__34351_34354__$2 = (((G__34351_34353__$1 == null))?null:G__34351_34353__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__34346.call(null,clustermap.components.search.UP_ARROW,expr__34347)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__34346.call(null,clustermap.components.search.DOWN_ARROW,expr__34347)))
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
clustermap.components.search.search_component = (function search_component(p__34355,owner){var map__34387 = p__34355;var map__34387__$1 = ((cljs.core.seq_QMARK_.call(null,map__34387))?cljs.core.apply.call(null,cljs.core.hash_map,map__34387):map__34387);var map__34388 = cljs.core.get.call(null,map__34387__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__34388__$1 = ((cljs.core.seq_QMARK_.call(null,map__34388))?cljs.core.apply.call(null,cljs.core.hash_map,map__34388):map__34388);var selection_type = cljs.core.get.call(null,map__34388__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__34388__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__34387__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__34389 = om.core.get_shared.call(null,owner);var map__34389__$1 = ((cljs.core.seq_QMARK_.call(null,map__34389))?cljs.core.apply.call(null,cljs.core.hash_map,map__34389):map__34389);var path_fn = cljs.core.get.call(null,map__34389__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__34389__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__34390 = search_results;var map__34390__$1 = ((cljs.core.seq_QMARK_.call(null,map__34390))?cljs.core.apply.call(null,cljs.core.hash_map,map__34390):map__34390);var investor_companies = cljs.core.get.call(null,map__34390__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__34390__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__34390__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t34391 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34391 = (function (map__34390,investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__34355,comm,map__34388,map__34389,map__34387,selection_type,owner,constituencies,search_results,meta34392){
this.map__34390 = map__34390;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.p__34355 = p__34355;
this.comm = comm;
this.map__34388 = map__34388;
this.map__34389 = map__34389;
this.map__34387 = map__34387;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta34392 = meta34392;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34391.cljs$lang$type = true;
clustermap.components.search.t34391.cljs$lang$ctorStr = "clustermap.components.search/t34391";
clustermap.components.search.t34391.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t34391");
});
clustermap.components.search.t34391.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34391.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
})})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
})},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__34394(s__34395){return (new cljs.core.LazySeq(null,(function (){var s__34395__$1 = s__34395;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34395__$1);if(temp__4092__auto__)
{var s__34395__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34395__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34395__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34397 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34396 = 0;while(true){
if((i__34396 < size__4116__auto__))
{var vec__34400 = cljs.core._nth.call(null,c__4115__auto__,i__34396);var idx = cljs.core.nth.call(null,vec__34400,0,null);var con = cljs.core.nth.call(null,vec__34400,1,null);cljs.core.chunk_append.call(null,b__34397,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__34396,vec__34400,idx,con,c__4115__auto__,size__4116__auto__,b__34397,s__34395__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__34396,vec__34400,idx,con,c__4115__auto__,size__4116__auto__,b__34397,s__34395__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__34418 = (i__34396 + 1);
i__34396 = G__34418;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34397),iter__34394.call(null,cljs.core.chunk_rest.call(null,s__34395__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34397),null);
}
} else
{var vec__34401 = cljs.core.first.call(null,s__34395__$2);var idx = cljs.core.nth.call(null,vec__34401,0,null);var con = cljs.core.nth.call(null,vec__34401,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__34401,idx,con,s__34395__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__34401,idx,con,s__34395__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__34394.call(null,cljs.core.rest.call(null,s__34395__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__34402(s__34403){return (new cljs.core.LazySeq(null,(function (){var s__34403__$1 = s__34403;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34403__$1);if(temp__4092__auto__)
{var s__34403__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34403__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34403__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34405 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34404 = 0;while(true){
if((i__34404 < size__4116__auto__))
{var vec__34408 = cljs.core._nth.call(null,c__4115__auto__,i__34404);var idx = cljs.core.nth.call(null,vec__34408,0,null);var pc = cljs.core.nth.call(null,vec__34408,1,null);cljs.core.chunk_append.call(null,b__34405,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__34404,vec__34408,idx,pc,c__4115__auto__,size__4116__auto__,b__34405,s__34403__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__34404,vec__34408,idx,pc,c__4115__auto__,size__4116__auto__,b__34405,s__34403__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__34419 = (i__34404 + 1);
i__34404 = G__34419;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34405),iter__34402.call(null,cljs.core.chunk_rest.call(null,s__34403__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34405),null);
}
} else
{var vec__34409 = cljs.core.first.call(null,s__34403__$2);var idx = cljs.core.nth.call(null,vec__34409,0,null);var pc = cljs.core.nth.call(null,vec__34409,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__34409,idx,pc,s__34403__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__34409,idx,pc,s__34403__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__34402.call(null,cljs.core.rest.call(null,s__34403__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__34410(s__34411){return (new cljs.core.LazySeq(null,(function (){var s__34411__$1 = s__34411;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__34411__$1);if(temp__4092__auto__)
{var s__34411__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34411__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__34411__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__34413 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__34412 = 0;while(true){
if((i__34412 < size__4116__auto__))
{var vec__34416 = cljs.core._nth.call(null,c__4115__auto__,i__34412);var idx = cljs.core.nth.call(null,vec__34416,0,null);var inv = cljs.core.nth.call(null,vec__34416,1,null);cljs.core.chunk_append.call(null,b__34413,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__34412,vec__34416,idx,inv,c__4115__auto__,size__4116__auto__,b__34413,s__34411__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__34412,vec__34416,idx,inv,c__4115__auto__,size__4116__auto__,b__34413,s__34411__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__34420 = (i__34412 + 1);
i__34412 = G__34420;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34413),iter__34410.call(null,cljs.core.chunk_rest.call(null,s__34411__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34413),null);
}
} else
{var vec__34417 = cljs.core.first.call(null,s__34411__$2);var idx = cljs.core.nth.call(null,vec__34417,0,null);var inv = cljs.core.nth.call(null,vec__34417,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__34417,idx,inv,s__34411__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__34417,idx,inv,s__34411__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__34410.call(null,cljs.core.rest.call(null,s__34411__$2)));
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
clustermap.components.search.t34391.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34393){var self__ = this;
var _34393__$1 = this;return self__.meta34392;
});
clustermap.components.search.t34391.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34393,meta34392__$1){var self__ = this;
var _34393__$1 = this;return (new clustermap.components.search.t34391(self__.map__34390,self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.p__34355,self__.comm,self__.map__34388,self__.map__34389,self__.map__34387,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,meta34392__$1));
});
clustermap.components.search.__GT_t34391 = (function __GT_t34391(map__34390__$2,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__34355__$1,comm__$1,map__34388__$2,map__34389__$2,map__34387__$2,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta34392){return (new clustermap.components.search.t34391(map__34390__$2,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__34355__$1,comm__$1,map__34388__$2,map__34389__$2,map__34387__$2,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta34392));
});
}
return (new clustermap.components.search.t34391(map__34390__$1,investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__34355,comm,map__34388__$1,map__34389__$1,map__34387__$1,selection_type,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
