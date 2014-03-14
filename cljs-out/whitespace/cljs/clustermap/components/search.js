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
clustermap.components.search.search_result_link = (function search_result_link(p__45526,owner,p__45527){var map__45536 = p__45526;var map__45536__$1 = ((cljs.core.seq_QMARK_.call(null,map__45536))?cljs.core.apply.call(null,cljs.core.hash_map,map__45536):map__45536);var search_result = map__45536__$1;var type = cljs.core.get.call(null,map__45536__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__45536__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__45537 = p__45527;var map__45537__$1 = ((cljs.core.seq_QMARK_.call(null,map__45537))?cljs.core.apply.call(null,cljs.core.hash_map,map__45537):map__45537);var opts = map__45537__$1;var path_fn = cljs.core.get.call(null,map__45537__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45537__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t45538 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t45538 = (function (opts,p__45527,p__45526,map__45537,path_fn,map__45536,name,comm,search_result,owner,type,search_result_link,meta45539){
this.opts = opts;
this.p__45527 = p__45527;
this.p__45526 = p__45526;
this.map__45537 = map__45537;
this.path_fn = path_fn;
this.map__45536 = map__45536;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta45539 = meta45539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t45538.cljs$lang$type = true;
clustermap.components.search.t45538.cljs$lang$ctorStr = "clustermap.components.search/t45538";
clustermap.components.search.t45538.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t45538");
});
clustermap.components.search.t45538.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t45538.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__45541){var self__ = this;
var map__45542 = p__45541;var map__45542__$1 = ((cljs.core.seq_QMARK_.call(null,map__45542))?cljs.core.apply.call(null,cljs.core.hash_map,map__45542):map__45542);var state = map__45542__$1;var selected = cljs.core.get.call(null,map__45542__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__45543 = l;var G__45543__$1 = (((G__45543 == null))?null:jayq.core.$.call(null,G__45543));var G__45543__$2 = (((G__45543__$1 == null))?null:G__45543__$1.parents(".search-component"));var G__45543__$3 = (((G__45543__$2 == null))?null:G__45543__$2.toggle());return G__45543__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t45538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45540){var self__ = this;
var _45540__$1 = this;return self__.meta45539;
});
clustermap.components.search.t45538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45540,meta45539__$1){var self__ = this;
var _45540__$1 = this;return (new clustermap.components.search.t45538(self__.opts,self__.p__45527,self__.p__45526,self__.map__45537,self__.path_fn,self__.map__45536,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta45539__$1));
});
clustermap.components.search.__GT_t45538 = (function __GT_t45538(opts__$1,p__45527__$1,p__45526__$1,map__45537__$2,path_fn__$1,map__45536__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta45539){return (new clustermap.components.search.t45538(opts__$1,p__45527__$1,p__45526__$1,map__45537__$2,path_fn__$1,map__45536__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta45539));
});
}
return (new clustermap.components.search.t45538(opts,p__45527,p__45526,map__45537__$1,path_fn,map__45536__$1,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__45544,n){var map__45546 = p__45544;var map__45546__$1 = ((cljs.core.seq_QMARK_.call(null,map__45546))?cljs.core.apply.call(null,cljs.core.hash_map,map__45546):map__45546);var investor_companies = cljs.core.get.call(null,map__45546__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__45546__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__45546__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__45553 = cljs.core._EQ__EQ_;var expr__45554 = e.keyCode;if(cljs.core.truth_(pred__45553.call(null,clustermap.components.search.ESCAPE_KEY,expr__45554)))
{var G__45556 = om.core.get_node.call(null,owner,"search-component");var G__45556__$1 = (((G__45556 == null))?null:jayq.core.$.call(null,G__45556));var G__45556__$2 = (((G__45556__$1 == null))?null:G__45556__$1.toggle());return G__45556__$2;
} else
{if(cljs.core.truth_(pred__45553.call(null,clustermap.components.search.ENTER_KEY,expr__45554)))
{var vec__45557 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__45557,0,null);var res = cljs.core.nth.call(null,vec__45557,1,null);var G__45558_45559 = om.core.get_node.call(null,owner,"search-component");var G__45558_45560__$1 = (((G__45558_45559 == null))?null:jayq.core.$.call(null,G__45558_45559));var G__45558_45561__$2 = (((G__45558_45560__$1 == null))?null:G__45558_45560__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__45553.call(null,clustermap.components.search.UP_ARROW,expr__45554)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__45553.call(null,clustermap.components.search.DOWN_ARROW,expr__45554)))
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
clustermap.components.search.search_component = (function search_component(p__45562,owner){var map__45594 = p__45562;var map__45594__$1 = ((cljs.core.seq_QMARK_.call(null,map__45594))?cljs.core.apply.call(null,cljs.core.hash_map,map__45594):map__45594);var map__45595 = cljs.core.get.call(null,map__45594__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__45595__$1 = ((cljs.core.seq_QMARK_.call(null,map__45595))?cljs.core.apply.call(null,cljs.core.hash_map,map__45595):map__45595);var selection_type = cljs.core.get.call(null,map__45595__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__45595__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__45594__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__45594__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__45596 = om.core.get_shared.call(null,owner);var map__45596__$1 = ((cljs.core.seq_QMARK_.call(null,map__45596))?cljs.core.apply.call(null,cljs.core.hash_map,map__45596):map__45596);var path_fn = cljs.core.get.call(null,map__45596__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45596__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__45597 = search_results;var map__45597__$1 = ((cljs.core.seq_QMARK_.call(null,map__45597))?cljs.core.apply.call(null,cljs.core.hash_map,map__45597):map__45597);var investor_companies = cljs.core.get.call(null,map__45597__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__45597__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__45597__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t45598 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t45598 = (function (investor_companies,selection_value,path_fn,portfolio_companies,view,search_component,p__45562,map__45597,comm,map__45595,map__45596,selection_type,owner,constituencies,map__45594,search_results,meta45599){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.view = view;
this.search_component = search_component;
this.p__45562 = p__45562;
this.map__45597 = map__45597;
this.comm = comm;
this.map__45595 = map__45595;
this.map__45596 = map__45596;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.map__45594 = map__45594;
this.search_results = search_results;
this.meta45599 = meta45599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t45598.cljs$lang$type = true;
clustermap.components.search.t45598.cljs$lang$ctorStr = "clustermap.components.search/t45598";
clustermap.components.search.t45598.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t45598");
});
clustermap.components.search.t45598.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t45598.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__45601(s__45602){return (new cljs.core.LazySeq(null,(function (){var s__45602__$1 = s__45602;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45602__$1);if(temp__4092__auto__)
{var s__45602__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45602__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45602__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45604 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45603 = 0;while(true){
if((i__45603 < size__4157__auto__))
{var vec__45607 = cljs.core._nth.call(null,c__4156__auto__,i__45603);var idx = cljs.core.nth.call(null,vec__45607,0,null);var con = cljs.core.nth.call(null,vec__45607,1,null);cljs.core.chunk_append.call(null,b__45604,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45603,vec__45607,idx,con,c__4156__auto__,size__4157__auto__,b__45604,s__45602__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__45603,vec__45607,idx,con,c__4156__auto__,size__4157__auto__,b__45604,s__45602__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45625 = (i__45603 + 1);
i__45603 = G__45625;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45604),iter__45601.call(null,cljs.core.chunk_rest.call(null,s__45602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45604),null);
}
} else
{var vec__45608 = cljs.core.first.call(null,s__45602__$2);var idx = cljs.core.nth.call(null,vec__45608,0,null);var con = cljs.core.nth.call(null,vec__45608,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45608,idx,con,s__45602__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__45608,idx,con,s__45602__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45601.call(null,cljs.core.rest.call(null,s__45602__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__45609(s__45610){return (new cljs.core.LazySeq(null,(function (){var s__45610__$1 = s__45610;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45610__$1);if(temp__4092__auto__)
{var s__45610__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45610__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45610__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45612 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45611 = 0;while(true){
if((i__45611 < size__4157__auto__))
{var vec__45615 = cljs.core._nth.call(null,c__4156__auto__,i__45611);var idx = cljs.core.nth.call(null,vec__45615,0,null);var pc = cljs.core.nth.call(null,vec__45615,1,null);cljs.core.chunk_append.call(null,b__45612,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45611,vec__45615,idx,pc,c__4156__auto__,size__4157__auto__,b__45612,s__45610__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__45611,vec__45615,idx,pc,c__4156__auto__,size__4157__auto__,b__45612,s__45610__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45626 = (i__45611 + 1);
i__45611 = G__45626;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45612),iter__45609.call(null,cljs.core.chunk_rest.call(null,s__45610__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45612),null);
}
} else
{var vec__45616 = cljs.core.first.call(null,s__45610__$2);var idx = cljs.core.nth.call(null,vec__45616,0,null);var pc = cljs.core.nth.call(null,vec__45616,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45616,idx,pc,s__45610__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__45616,idx,pc,s__45610__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45609.call(null,cljs.core.rest.call(null,s__45610__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__45617(s__45618){return (new cljs.core.LazySeq(null,(function (){var s__45618__$1 = s__45618;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45618__$1);if(temp__4092__auto__)
{var s__45618__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45618__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45618__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45620 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45619 = 0;while(true){
if((i__45619 < size__4157__auto__))
{var vec__45623 = cljs.core._nth.call(null,c__4156__auto__,i__45619);var idx = cljs.core.nth.call(null,vec__45623,0,null);var inv = cljs.core.nth.call(null,vec__45623,1,null);cljs.core.chunk_append.call(null,b__45620,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45619,vec__45623,idx,inv,c__4156__auto__,size__4157__auto__,b__45620,s__45618__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__45619,vec__45623,idx,inv,c__4156__auto__,size__4157__auto__,b__45620,s__45618__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45627 = (i__45619 + 1);
i__45619 = G__45627;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45620),iter__45617.call(null,cljs.core.chunk_rest.call(null,s__45618__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45620),null);
}
} else
{var vec__45624 = cljs.core.first.call(null,s__45618__$2);var idx = cljs.core.nth.call(null,vec__45624,0,null);var inv = cljs.core.nth.call(null,vec__45624,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45624,idx,inv,s__45618__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__45624,idx,inv,s__45618__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45617.call(null,cljs.core.rest.call(null,s__45618__$2)));
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
clustermap.components.search.t45598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45600){var self__ = this;
var _45600__$1 = this;return self__.meta45599;
});
clustermap.components.search.t45598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45600,meta45599__$1){var self__ = this;
var _45600__$1 = this;return (new clustermap.components.search.t45598(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.view,self__.search_component,self__.p__45562,self__.map__45597,self__.comm,self__.map__45595,self__.map__45596,self__.selection_type,self__.owner,self__.constituencies,self__.map__45594,self__.search_results,meta45599__$1));
});
clustermap.components.search.__GT_t45598 = (function __GT_t45598(investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,p__45562__$1,map__45597__$2,comm__$1,map__45595__$2,map__45596__$2,selection_type__$1,owner__$1,constituencies__$1,map__45594__$2,search_results__$1,meta45599){return (new clustermap.components.search.t45598(investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,p__45562__$1,map__45597__$2,comm__$1,map__45595__$2,map__45596__$2,selection_type__$1,owner__$1,constituencies__$1,map__45594__$2,search_results__$1,meta45599));
});
}
return (new clustermap.components.search.t45598(investor_companies,selection_value,path_fn__$1,portfolio_companies,view,search_component,p__45562,map__45597__$1,comm,map__45595__$1,map__45596__$1,selection_type,owner,constituencies,map__45594__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
