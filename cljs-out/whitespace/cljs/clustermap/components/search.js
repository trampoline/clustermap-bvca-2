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
clustermap.components.search.search_result_link = (function search_result_link(p__45582,owner,p__45583){var map__45592 = p__45582;var map__45592__$1 = ((cljs.core.seq_QMARK_.call(null,map__45592))?cljs.core.apply.call(null,cljs.core.hash_map,map__45592):map__45592);var search_result = map__45592__$1;var type = cljs.core.get.call(null,map__45592__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__45592__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__45593 = p__45583;var map__45593__$1 = ((cljs.core.seq_QMARK_.call(null,map__45593))?cljs.core.apply.call(null,cljs.core.hash_map,map__45593):map__45593);var opts = map__45593__$1;var path_fn = cljs.core.get.call(null,map__45593__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45593__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t45594 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t45594 = (function (opts,path_fn,p__45582,p__45583,name,comm,search_result,map__45592,owner,map__45593,type,search_result_link,meta45595){
this.opts = opts;
this.path_fn = path_fn;
this.p__45582 = p__45582;
this.p__45583 = p__45583;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.map__45592 = map__45592;
this.owner = owner;
this.map__45593 = map__45593;
this.type = type;
this.search_result_link = search_result_link;
this.meta45595 = meta45595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t45594.cljs$lang$type = true;
clustermap.components.search.t45594.cljs$lang$ctorStr = "clustermap.components.search/t45594";
clustermap.components.search.t45594.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t45594");
});
clustermap.components.search.t45594.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t45594.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__45597){var self__ = this;
var map__45598 = p__45597;var map__45598__$1 = ((cljs.core.seq_QMARK_.call(null,map__45598))?cljs.core.apply.call(null,cljs.core.hash_map,map__45598):map__45598);var state = map__45598__$1;var selected = cljs.core.get.call(null,map__45598__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__45599 = l;var G__45599__$1 = (((G__45599 == null))?null:jayq.core.$.call(null,G__45599));var G__45599__$2 = (((G__45599__$1 == null))?null:G__45599__$1.parents(".search-component"));var G__45599__$3 = (((G__45599__$2 == null))?null:G__45599__$2.toggle());return G__45599__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t45594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45596){var self__ = this;
var _45596__$1 = this;return self__.meta45595;
});
clustermap.components.search.t45594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45596,meta45595__$1){var self__ = this;
var _45596__$1 = this;return (new clustermap.components.search.t45594(self__.opts,self__.path_fn,self__.p__45582,self__.p__45583,self__.name,self__.comm,self__.search_result,self__.map__45592,self__.owner,self__.map__45593,self__.type,self__.search_result_link,meta45595__$1));
});
clustermap.components.search.__GT_t45594 = (function __GT_t45594(opts__$1,path_fn__$1,p__45582__$1,p__45583__$1,name__$1,comm__$1,search_result__$1,map__45592__$2,owner__$1,map__45593__$2,type__$1,search_result_link__$1,meta45595){return (new clustermap.components.search.t45594(opts__$1,path_fn__$1,p__45582__$1,p__45583__$1,name__$1,comm__$1,search_result__$1,map__45592__$2,owner__$1,map__45593__$2,type__$1,search_result_link__$1,meta45595));
});
}
return (new clustermap.components.search.t45594(opts,path_fn,p__45582,p__45583,name,comm,search_result,map__45592__$1,owner,map__45593__$1,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__45600,n){var map__45602 = p__45600;var map__45602__$1 = ((cljs.core.seq_QMARK_.call(null,map__45602))?cljs.core.apply.call(null,cljs.core.hash_map,map__45602):map__45602);var investor_companies = cljs.core.get.call(null,map__45602__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__45602__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__45602__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__45609 = cljs.core._EQ__EQ_;var expr__45610 = e.keyCode;if(cljs.core.truth_(pred__45609.call(null,clustermap.components.search.ESCAPE_KEY,expr__45610)))
{var G__45612 = om.core.get_node.call(null,owner,"search-component");var G__45612__$1 = (((G__45612 == null))?null:jayq.core.$.call(null,G__45612));var G__45612__$2 = (((G__45612__$1 == null))?null:G__45612__$1.toggle());return G__45612__$2;
} else
{if(cljs.core.truth_(pred__45609.call(null,clustermap.components.search.ENTER_KEY,expr__45610)))
{var vec__45613 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__45613,0,null);var res = cljs.core.nth.call(null,vec__45613,1,null);var G__45614_45615 = om.core.get_node.call(null,owner,"search-component");var G__45614_45616__$1 = (((G__45614_45615 == null))?null:jayq.core.$.call(null,G__45614_45615));var G__45614_45617__$2 = (((G__45614_45616__$1 == null))?null:G__45614_45616__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__45609.call(null,clustermap.components.search.UP_ARROW,expr__45610)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__45609.call(null,clustermap.components.search.DOWN_ARROW,expr__45610)))
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
clustermap.components.search.search_component = (function search_component(p__45618,owner){var map__45650 = p__45618;var map__45650__$1 = ((cljs.core.seq_QMARK_.call(null,map__45650))?cljs.core.apply.call(null,cljs.core.hash_map,map__45650):map__45650);var map__45651 = cljs.core.get.call(null,map__45650__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__45651__$1 = ((cljs.core.seq_QMARK_.call(null,map__45651))?cljs.core.apply.call(null,cljs.core.hash_map,map__45651):map__45651);var selection_type = cljs.core.get.call(null,map__45651__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__45651__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__45650__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__45652 = om.core.get_shared.call(null,owner);var map__45652__$1 = ((cljs.core.seq_QMARK_.call(null,map__45652))?cljs.core.apply.call(null,cljs.core.hash_map,map__45652):map__45652);var path_fn = cljs.core.get.call(null,map__45652__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45652__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__45653 = search_results;var map__45653__$1 = ((cljs.core.seq_QMARK_.call(null,map__45653))?cljs.core.apply.call(null,cljs.core.hash_map,map__45653):map__45653);var investor_companies = cljs.core.get.call(null,map__45653__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__45653__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__45653__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t45654 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t45654 = (function (map__45652,map__45653,investor_companies,map__45650,map__45651,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,p__45618,search_results,meta45655){
this.map__45652 = map__45652;
this.map__45653 = map__45653;
this.investor_companies = investor_companies;
this.map__45650 = map__45650;
this.map__45651 = map__45651;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.p__45618 = p__45618;
this.search_results = search_results;
this.meta45655 = meta45655;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t45654.cljs$lang$type = true;
clustermap.components.search.t45654.cljs$lang$ctorStr = "clustermap.components.search/t45654";
clustermap.components.search.t45654.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t45654");
});
clustermap.components.search.t45654.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t45654.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__45657(s__45658){return (new cljs.core.LazySeq(null,(function (){var s__45658__$1 = s__45658;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45658__$1);if(temp__4092__auto__)
{var s__45658__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45658__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45658__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45660 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45659 = 0;while(true){
if((i__45659 < size__4157__auto__))
{var vec__45663 = cljs.core._nth.call(null,c__4156__auto__,i__45659);var idx = cljs.core.nth.call(null,vec__45663,0,null);var con = cljs.core.nth.call(null,vec__45663,1,null);cljs.core.chunk_append.call(null,b__45660,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45659,vec__45663,idx,con,c__4156__auto__,size__4157__auto__,b__45660,s__45658__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__45659,vec__45663,idx,con,c__4156__auto__,size__4157__auto__,b__45660,s__45658__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45681 = (i__45659 + 1);
i__45659 = G__45681;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45660),iter__45657.call(null,cljs.core.chunk_rest.call(null,s__45658__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45660),null);
}
} else
{var vec__45664 = cljs.core.first.call(null,s__45658__$2);var idx = cljs.core.nth.call(null,vec__45664,0,null);var con = cljs.core.nth.call(null,vec__45664,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45664,idx,con,s__45658__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__45664,idx,con,s__45658__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45657.call(null,cljs.core.rest.call(null,s__45658__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__45665(s__45666){return (new cljs.core.LazySeq(null,(function (){var s__45666__$1 = s__45666;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45666__$1);if(temp__4092__auto__)
{var s__45666__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45666__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45666__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45668 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45667 = 0;while(true){
if((i__45667 < size__4157__auto__))
{var vec__45671 = cljs.core._nth.call(null,c__4156__auto__,i__45667);var idx = cljs.core.nth.call(null,vec__45671,0,null);var pc = cljs.core.nth.call(null,vec__45671,1,null);cljs.core.chunk_append.call(null,b__45668,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45667,vec__45671,idx,pc,c__4156__auto__,size__4157__auto__,b__45668,s__45666__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__45667,vec__45671,idx,pc,c__4156__auto__,size__4157__auto__,b__45668,s__45666__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45682 = (i__45667 + 1);
i__45667 = G__45682;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45668),iter__45665.call(null,cljs.core.chunk_rest.call(null,s__45666__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45668),null);
}
} else
{var vec__45672 = cljs.core.first.call(null,s__45666__$2);var idx = cljs.core.nth.call(null,vec__45672,0,null);var pc = cljs.core.nth.call(null,vec__45672,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45672,idx,pc,s__45666__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__45672,idx,pc,s__45666__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45665.call(null,cljs.core.rest.call(null,s__45666__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__45673(s__45674){return (new cljs.core.LazySeq(null,(function (){var s__45674__$1 = s__45674;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45674__$1);if(temp__4092__auto__)
{var s__45674__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45674__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45674__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45676 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45675 = 0;while(true){
if((i__45675 < size__4157__auto__))
{var vec__45679 = cljs.core._nth.call(null,c__4156__auto__,i__45675);var idx = cljs.core.nth.call(null,vec__45679,0,null);var inv = cljs.core.nth.call(null,vec__45679,1,null);cljs.core.chunk_append.call(null,b__45676,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45675,vec__45679,idx,inv,c__4156__auto__,size__4157__auto__,b__45676,s__45674__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__45675,vec__45679,idx,inv,c__4156__auto__,size__4157__auto__,b__45676,s__45674__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45683 = (i__45675 + 1);
i__45675 = G__45683;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45676),iter__45673.call(null,cljs.core.chunk_rest.call(null,s__45674__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45676),null);
}
} else
{var vec__45680 = cljs.core.first.call(null,s__45674__$2);var idx = cljs.core.nth.call(null,vec__45680,0,null);var inv = cljs.core.nth.call(null,vec__45680,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45680,idx,inv,s__45674__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__45680,idx,inv,s__45674__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45673.call(null,cljs.core.rest.call(null,s__45674__$2)));
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
clustermap.components.search.t45654.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45656){var self__ = this;
var _45656__$1 = this;return self__.meta45655;
});
clustermap.components.search.t45654.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45656,meta45655__$1){var self__ = this;
var _45656__$1 = this;return (new clustermap.components.search.t45654(self__.map__45652,self__.map__45653,self__.investor_companies,self__.map__45650,self__.map__45651,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.p__45618,self__.search_results,meta45655__$1));
});
clustermap.components.search.__GT_t45654 = (function __GT_t45654(map__45652__$2,map__45653__$2,investor_companies__$1,map__45650__$2,map__45651__$2,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__45618__$1,search_results__$1,meta45655){return (new clustermap.components.search.t45654(map__45652__$2,map__45653__$2,investor_companies__$1,map__45650__$2,map__45651__$2,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__45618__$1,search_results__$1,meta45655));
});
}
return (new clustermap.components.search.t45654(map__45652__$1,map__45653__$1,investor_companies,map__45650__$1,map__45651__$1,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,p__45618,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
