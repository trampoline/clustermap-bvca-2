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
clustermap.components.search.search_result_link = (function search_result_link(p__23644,owner,p__23645){var map__23654 = p__23644;var map__23654__$1 = ((cljs.core.seq_QMARK_.call(null,map__23654))?cljs.core.apply.call(null,cljs.core.hash_map,map__23654):map__23654);var search_result = map__23654__$1;var type = cljs.core.get.call(null,map__23654__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__23654__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__23655 = p__23645;var map__23655__$1 = ((cljs.core.seq_QMARK_.call(null,map__23655))?cljs.core.apply.call(null,cljs.core.hash_map,map__23655):map__23655);var opts = map__23655__$1;var path_fn = cljs.core.get.call(null,map__23655__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23655__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t23656 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23656 = (function (opts,path_fn,name,comm,search_result,owner,p__23645,type,map__23655,p__23644,search_result_link,map__23654,meta23657){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.p__23645 = p__23645;
this.type = type;
this.map__23655 = map__23655;
this.p__23644 = p__23644;
this.search_result_link = search_result_link;
this.map__23654 = map__23654;
this.meta23657 = meta23657;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23656.cljs$lang$type = true;
clustermap.components.search.t23656.cljs$lang$ctorStr = "clustermap.components.search/t23656";
clustermap.components.search.t23656.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t23656");
});
clustermap.components.search.t23656.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23656.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23659){var self__ = this;
var map__23660 = p__23659;var map__23660__$1 = ((cljs.core.seq_QMARK_.call(null,map__23660))?cljs.core.apply.call(null,cljs.core.hash_map,map__23660):map__23660);var state = map__23660__$1;var selected = cljs.core.get.call(null,map__23660__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__23661 = l;var G__23661__$1 = (((G__23661 == null))?null:jayq.core.$.call(null,G__23661));var G__23661__$2 = (((G__23661__$1 == null))?null:G__23661__$1.parents(".search-component"));var G__23661__$3 = (((G__23661__$2 == null))?null:G__23661__$2.toggle());return G__23661__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t23656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23658){var self__ = this;
var _23658__$1 = this;return self__.meta23657;
});
clustermap.components.search.t23656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23658,meta23657__$1){var self__ = this;
var _23658__$1 = this;return (new clustermap.components.search.t23656(self__.opts,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.p__23645,self__.type,self__.map__23655,self__.p__23644,self__.search_result_link,self__.map__23654,meta23657__$1));
});
clustermap.components.search.__GT_t23656 = (function __GT_t23656(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__23645__$1,type__$1,map__23655__$2,p__23644__$1,search_result_link__$1,map__23654__$2,meta23657){return (new clustermap.components.search.t23656(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__23645__$1,type__$1,map__23655__$2,p__23644__$1,search_result_link__$1,map__23654__$2,meta23657));
});
}
return (new clustermap.components.search.t23656(opts,path_fn,name,comm,search_result,owner,p__23645,type,map__23655__$1,p__23644,search_result_link,map__23654__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__23662,n){var map__23664 = p__23662;var map__23664__$1 = ((cljs.core.seq_QMARK_.call(null,map__23664))?cljs.core.apply.call(null,cljs.core.hash_map,map__23664):map__23664);var investor_companies = cljs.core.get.call(null,map__23664__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__23664__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__23664__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__23671 = cljs.core._EQ__EQ_;var expr__23672 = e.keyCode;if(cljs.core.truth_(pred__23671.call(null,clustermap.components.search.ESCAPE_KEY,expr__23672)))
{var G__23674 = om.core.get_node.call(null,owner,"search-component");var G__23674__$1 = (((G__23674 == null))?null:jayq.core.$.call(null,G__23674));var G__23674__$2 = (((G__23674__$1 == null))?null:G__23674__$1.toggle());return G__23674__$2;
} else
{if(cljs.core.truth_(pred__23671.call(null,clustermap.components.search.ENTER_KEY,expr__23672)))
{var vec__23675 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__23675,0,null);var res = cljs.core.nth.call(null,vec__23675,1,null);var G__23676_23677 = om.core.get_node.call(null,owner,"search-component");var G__23676_23678__$1 = (((G__23676_23677 == null))?null:jayq.core.$.call(null,G__23676_23677));var G__23676_23679__$2 = (((G__23676_23678__$1 == null))?null:G__23676_23678__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__23671.call(null,clustermap.components.search.UP_ARROW,expr__23672)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__23671.call(null,clustermap.components.search.DOWN_ARROW,expr__23672)))
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
clustermap.components.search.search_component = (function search_component(p__23680,owner){var map__23712 = p__23680;var map__23712__$1 = ((cljs.core.seq_QMARK_.call(null,map__23712))?cljs.core.apply.call(null,cljs.core.hash_map,map__23712):map__23712);var map__23713 = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__23713__$1 = ((cljs.core.seq_QMARK_.call(null,map__23713))?cljs.core.apply.call(null,cljs.core.hash_map,map__23713):map__23713);var selection_type = cljs.core.get.call(null,map__23713__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__23713__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__23712__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__23714 = om.core.get_shared.call(null,owner);var map__23714__$1 = ((cljs.core.seq_QMARK_.call(null,map__23714))?cljs.core.apply.call(null,cljs.core.hash_map,map__23714):map__23714);var path_fn = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23714__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__23715 = search_results;var map__23715__$1 = ((cljs.core.seq_QMARK_.call(null,map__23715))?cljs.core.apply.call(null,cljs.core.hash_map,map__23715):map__23715);var investor_companies = cljs.core.get.call(null,map__23715__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__23715__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__23715__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t23716 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23716 = (function (investor_companies,map__23713,selection_value,path_fn,p__23680,map__23714,portfolio_companies,map__23715,search_component,map__23712,comm,selection_type,owner,constituencies,search_results,meta23717){
this.investor_companies = investor_companies;
this.map__23713 = map__23713;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.p__23680 = p__23680;
this.map__23714 = map__23714;
this.portfolio_companies = portfolio_companies;
this.map__23715 = map__23715;
this.search_component = search_component;
this.map__23712 = map__23712;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta23717 = meta23717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23716.cljs$lang$type = true;
clustermap.components.search.t23716.cljs$lang$ctorStr = "clustermap.components.search/t23716";
clustermap.components.search.t23716.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t23716");
});
clustermap.components.search.t23716.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23716.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__23719(s__23720){return (new cljs.core.LazySeq(null,(function (){var s__23720__$1 = s__23720;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23720__$1);if(temp__4092__auto__)
{var s__23720__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23720__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23720__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23722 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23721 = 0;while(true){
if((i__23721 < size__4157__auto__))
{var vec__23725 = cljs.core._nth.call(null,c__4156__auto__,i__23721);var idx = cljs.core.nth.call(null,vec__23725,0,null);var con = cljs.core.nth.call(null,vec__23725,1,null);cljs.core.chunk_append.call(null,b__23722,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23721,vec__23725,idx,con,c__4156__auto__,size__4157__auto__,b__23722,s__23720__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__23721,vec__23725,idx,con,c__4156__auto__,size__4157__auto__,b__23722,s__23720__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23743 = (i__23721 + 1);
i__23721 = G__23743;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23722),iter__23719.call(null,cljs.core.chunk_rest.call(null,s__23720__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23722),null);
}
} else
{var vec__23726 = cljs.core.first.call(null,s__23720__$2);var idx = cljs.core.nth.call(null,vec__23726,0,null);var con = cljs.core.nth.call(null,vec__23726,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23726,idx,con,s__23720__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__23726,idx,con,s__23720__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23719.call(null,cljs.core.rest.call(null,s__23720__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__23727(s__23728){return (new cljs.core.LazySeq(null,(function (){var s__23728__$1 = s__23728;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23728__$1);if(temp__4092__auto__)
{var s__23728__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23728__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23728__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23730 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23729 = 0;while(true){
if((i__23729 < size__4157__auto__))
{var vec__23733 = cljs.core._nth.call(null,c__4156__auto__,i__23729);var idx = cljs.core.nth.call(null,vec__23733,0,null);var pc = cljs.core.nth.call(null,vec__23733,1,null);cljs.core.chunk_append.call(null,b__23730,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23729,vec__23733,idx,pc,c__4156__auto__,size__4157__auto__,b__23730,s__23728__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__23729,vec__23733,idx,pc,c__4156__auto__,size__4157__auto__,b__23730,s__23728__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23744 = (i__23729 + 1);
i__23729 = G__23744;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23730),iter__23727.call(null,cljs.core.chunk_rest.call(null,s__23728__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23730),null);
}
} else
{var vec__23734 = cljs.core.first.call(null,s__23728__$2);var idx = cljs.core.nth.call(null,vec__23734,0,null);var pc = cljs.core.nth.call(null,vec__23734,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23734,idx,pc,s__23728__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__23734,idx,pc,s__23728__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23727.call(null,cljs.core.rest.call(null,s__23728__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__23735(s__23736){return (new cljs.core.LazySeq(null,(function (){var s__23736__$1 = s__23736;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23736__$1);if(temp__4092__auto__)
{var s__23736__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23736__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23736__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23738 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23737 = 0;while(true){
if((i__23737 < size__4157__auto__))
{var vec__23741 = cljs.core._nth.call(null,c__4156__auto__,i__23737);var idx = cljs.core.nth.call(null,vec__23741,0,null);var inv = cljs.core.nth.call(null,vec__23741,1,null);cljs.core.chunk_append.call(null,b__23738,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23737,vec__23741,idx,inv,c__4156__auto__,size__4157__auto__,b__23738,s__23736__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__23737,vec__23741,idx,inv,c__4156__auto__,size__4157__auto__,b__23738,s__23736__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23745 = (i__23737 + 1);
i__23737 = G__23745;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23738),iter__23735.call(null,cljs.core.chunk_rest.call(null,s__23736__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23738),null);
}
} else
{var vec__23742 = cljs.core.first.call(null,s__23736__$2);var idx = cljs.core.nth.call(null,vec__23742,0,null);var inv = cljs.core.nth.call(null,vec__23742,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23742,idx,inv,s__23736__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__23742,idx,inv,s__23736__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23735.call(null,cljs.core.rest.call(null,s__23736__$2)));
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
clustermap.components.search.t23716.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23718){var self__ = this;
var _23718__$1 = this;return self__.meta23717;
});
clustermap.components.search.t23716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23718,meta23717__$1){var self__ = this;
var _23718__$1 = this;return (new clustermap.components.search.t23716(self__.investor_companies,self__.map__23713,self__.selection_value,self__.path_fn,self__.p__23680,self__.map__23714,self__.portfolio_companies,self__.map__23715,self__.search_component,self__.map__23712,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,meta23717__$1));
});
clustermap.components.search.__GT_t23716 = (function __GT_t23716(investor_companies__$1,map__23713__$2,selection_value__$1,path_fn__$1,p__23680__$1,map__23714__$2,portfolio_companies__$1,map__23715__$2,search_component__$1,map__23712__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta23717){return (new clustermap.components.search.t23716(investor_companies__$1,map__23713__$2,selection_value__$1,path_fn__$1,p__23680__$1,map__23714__$2,portfolio_companies__$1,map__23715__$2,search_component__$1,map__23712__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta23717));
});
}
return (new clustermap.components.search.t23716(investor_companies,map__23713__$1,selection_value,path_fn,p__23680,map__23714__$1,portfolio_companies,map__23715__$1,search_component,map__23712__$1,comm,selection_type,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map