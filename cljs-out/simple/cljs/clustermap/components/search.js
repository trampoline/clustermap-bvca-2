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
clustermap.components.search.search_result_link = (function search_result_link(p__12673,owner,p__12674){var map__12683 = p__12673;var map__12683__$1 = ((cljs.core.seq_QMARK_.call(null,map__12683))?cljs.core.apply.call(null,cljs.core.hash_map,map__12683):map__12683);var search_result = map__12683__$1;var type = cljs.core.get.call(null,map__12683__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12683__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12684 = p__12674;var map__12684__$1 = ((cljs.core.seq_QMARK_.call(null,map__12684))?cljs.core.apply.call(null,cljs.core.hash_map,map__12684):map__12684);var opts = map__12684__$1;var path_fn = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12684__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12685 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12685 = (function (opts,path_fn,name,comm,map__12683,search_result,map__12684,owner,p__12673,p__12674,type,search_result_link,meta12686){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.map__12683 = map__12683;
this.search_result = search_result;
this.map__12684 = map__12684;
this.owner = owner;
this.p__12673 = p__12673;
this.p__12674 = p__12674;
this.type = type;
this.search_result_link = search_result_link;
this.meta12686 = meta12686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12685.cljs$lang$type = true;
clustermap.components.search.t12685.cljs$lang$ctorStr = "clustermap.components.search/t12685";
clustermap.components.search.t12685.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t12685");
});
clustermap.components.search.t12685.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12685.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12688){var self__ = this;
var map__12689 = p__12688;var map__12689__$1 = ((cljs.core.seq_QMARK_.call(null,map__12689))?cljs.core.apply.call(null,cljs.core.hash_map,map__12689):map__12689);var state = map__12689__$1;var selected = cljs.core.get.call(null,map__12689__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12690 = l;var G__12690__$1 = (((G__12690 == null))?null:jayq.core.$.call(null,G__12690));var G__12690__$2 = (((G__12690__$1 == null))?null:G__12690__$1.parents(".search-component"));var G__12690__$3 = (((G__12690__$2 == null))?null:G__12690__$2.toggle());return G__12690__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t12685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12687){var self__ = this;
var _12687__$1 = this;return self__.meta12686;
});
clustermap.components.search.t12685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12687,meta12686__$1){var self__ = this;
var _12687__$1 = this;return (new clustermap.components.search.t12685(self__.opts,self__.path_fn,self__.name,self__.comm,self__.map__12683,self__.search_result,self__.map__12684,self__.owner,self__.p__12673,self__.p__12674,self__.type,self__.search_result_link,meta12686__$1));
});
clustermap.components.search.__GT_t12685 = (function __GT_t12685(opts__$1,path_fn__$1,name__$1,comm__$1,map__12683__$2,search_result__$1,map__12684__$2,owner__$1,p__12673__$1,p__12674__$1,type__$1,search_result_link__$1,meta12686){return (new clustermap.components.search.t12685(opts__$1,path_fn__$1,name__$1,comm__$1,map__12683__$2,search_result__$1,map__12684__$2,owner__$1,p__12673__$1,p__12674__$1,type__$1,search_result_link__$1,meta12686));
});
}
return (new clustermap.components.search.t12685(opts,path_fn,name,comm,map__12683__$1,search_result,map__12684__$1,owner,p__12673,p__12674,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12691,n){var map__12693 = p__12691;var map__12693__$1 = ((cljs.core.seq_QMARK_.call(null,map__12693))?cljs.core.apply.call(null,cljs.core.hash_map,map__12693):map__12693);var investor_companies = cljs.core.get.call(null,map__12693__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12693__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12693__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12700 = cljs.core._EQ__EQ_;var expr__12701 = e.keyCode;if(cljs.core.truth_(pred__12700.call(null,clustermap.components.search.ESCAPE_KEY,expr__12701)))
{var G__12703 = om.core.get_node.call(null,owner,"search-component");var G__12703__$1 = (((G__12703 == null))?null:jayq.core.$.call(null,G__12703));var G__12703__$2 = (((G__12703__$1 == null))?null:G__12703__$1.toggle());return G__12703__$2;
} else
{if(cljs.core.truth_(pred__12700.call(null,clustermap.components.search.ENTER_KEY,expr__12701)))
{var vec__12704 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12704,0,null);var res = cljs.core.nth.call(null,vec__12704,1,null);var G__12705_12706 = om.core.get_node.call(null,owner,"search-component");var G__12705_12707__$1 = (((G__12705_12706 == null))?null:jayq.core.$.call(null,G__12705_12706));var G__12705_12708__$2 = (((G__12705_12707__$1 == null))?null:G__12705_12707__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12700.call(null,clustermap.components.search.UP_ARROW,expr__12701)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12700.call(null,clustermap.components.search.DOWN_ARROW,expr__12701)))
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
clustermap.components.search.search_component = (function search_component(p__12709,owner){var map__12741 = p__12709;var map__12741__$1 = ((cljs.core.seq_QMARK_.call(null,map__12741))?cljs.core.apply.call(null,cljs.core.hash_map,map__12741):map__12741);var map__12742 = cljs.core.get.call(null,map__12741__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__12742__$1 = ((cljs.core.seq_QMARK_.call(null,map__12742))?cljs.core.apply.call(null,cljs.core.hash_map,map__12742):map__12742);var selection_type = cljs.core.get.call(null,map__12742__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__12742__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__12741__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__12743 = om.core.get_shared.call(null,owner);var map__12743__$1 = ((cljs.core.seq_QMARK_.call(null,map__12743))?cljs.core.apply.call(null,cljs.core.hash_map,map__12743):map__12743);var path_fn = cljs.core.get.call(null,map__12743__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12743__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__12744 = search_results;var map__12744__$1 = ((cljs.core.seq_QMARK_.call(null,map__12744))?cljs.core.apply.call(null,cljs.core.hash_map,map__12744):map__12744);var investor_companies = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12744__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12745 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12745 = (function (map__12741,investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__12744,map__12743,map__12742,comm,selection_type,owner,constituencies,p__12709,search_results,meta12746){
this.map__12741 = map__12741;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__12744 = map__12744;
this.map__12743 = map__12743;
this.map__12742 = map__12742;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.p__12709 = p__12709;
this.search_results = search_results;
this.meta12746 = meta12746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12745.cljs$lang$type = true;
clustermap.components.search.t12745.cljs$lang$ctorStr = "clustermap.components.search/t12745";
clustermap.components.search.t12745.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t12745");
});
clustermap.components.search.t12745.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12745.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__12748(s__12749){return (new cljs.core.LazySeq(null,(function (){var s__12749__$1 = s__12749;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12749__$1);if(temp__4092__auto__)
{var s__12749__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12749__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12749__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12751 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12750 = 0;while(true){
if((i__12750 < size__4157__auto__))
{var vec__12754 = cljs.core._nth.call(null,c__4156__auto__,i__12750);var idx = cljs.core.nth.call(null,vec__12754,0,null);var con = cljs.core.nth.call(null,vec__12754,1,null);cljs.core.chunk_append.call(null,b__12751,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12750,vec__12754,idx,con,c__4156__auto__,size__4157__auto__,b__12751,s__12749__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12750,vec__12754,idx,con,c__4156__auto__,size__4157__auto__,b__12751,s__12749__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12772 = (i__12750 + 1);
i__12750 = G__12772;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12751),iter__12748.call(null,cljs.core.chunk_rest.call(null,s__12749__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12751),null);
}
} else
{var vec__12755 = cljs.core.first.call(null,s__12749__$2);var idx = cljs.core.nth.call(null,vec__12755,0,null);var con = cljs.core.nth.call(null,vec__12755,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12755,idx,con,s__12749__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12755,idx,con,s__12749__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12748.call(null,cljs.core.rest.call(null,s__12749__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__12756(s__12757){return (new cljs.core.LazySeq(null,(function (){var s__12757__$1 = s__12757;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12757__$1);if(temp__4092__auto__)
{var s__12757__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12757__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12757__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12759 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12758 = 0;while(true){
if((i__12758 < size__4157__auto__))
{var vec__12762 = cljs.core._nth.call(null,c__4156__auto__,i__12758);var idx = cljs.core.nth.call(null,vec__12762,0,null);var pc = cljs.core.nth.call(null,vec__12762,1,null);cljs.core.chunk_append.call(null,b__12759,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12758,vec__12762,idx,pc,c__4156__auto__,size__4157__auto__,b__12759,s__12757__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12758,vec__12762,idx,pc,c__4156__auto__,size__4157__auto__,b__12759,s__12757__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12773 = (i__12758 + 1);
i__12758 = G__12773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12759),iter__12756.call(null,cljs.core.chunk_rest.call(null,s__12757__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12759),null);
}
} else
{var vec__12763 = cljs.core.first.call(null,s__12757__$2);var idx = cljs.core.nth.call(null,vec__12763,0,null);var pc = cljs.core.nth.call(null,vec__12763,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12763,idx,pc,s__12757__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12763,idx,pc,s__12757__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12756.call(null,cljs.core.rest.call(null,s__12757__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__12764(s__12765){return (new cljs.core.LazySeq(null,(function (){var s__12765__$1 = s__12765;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12765__$1);if(temp__4092__auto__)
{var s__12765__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12765__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__12765__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__12767 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__12766 = 0;while(true){
if((i__12766 < size__4157__auto__))
{var vec__12770 = cljs.core._nth.call(null,c__4156__auto__,i__12766);var idx = cljs.core.nth.call(null,vec__12770,0,null);var inv = cljs.core.nth.call(null,vec__12770,1,null);cljs.core.chunk_append.call(null,b__12767,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12766,vec__12770,idx,inv,c__4156__auto__,size__4157__auto__,b__12767,s__12765__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12766,vec__12770,idx,inv,c__4156__auto__,size__4157__auto__,b__12767,s__12765__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12774 = (i__12766 + 1);
i__12766 = G__12774;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12767),iter__12764.call(null,cljs.core.chunk_rest.call(null,s__12765__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12767),null);
}
} else
{var vec__12771 = cljs.core.first.call(null,s__12765__$2);var idx = cljs.core.nth.call(null,vec__12771,0,null);var inv = cljs.core.nth.call(null,vec__12771,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12771,idx,inv,s__12765__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12771,idx,inv,s__12765__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12764.call(null,cljs.core.rest.call(null,s__12765__$2)));
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
clustermap.components.search.t12745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12747){var self__ = this;
var _12747__$1 = this;return self__.meta12746;
});
clustermap.components.search.t12745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12747,meta12746__$1){var self__ = this;
var _12747__$1 = this;return (new clustermap.components.search.t12745(self__.map__12741,self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__12744,self__.map__12743,self__.map__12742,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.p__12709,self__.search_results,meta12746__$1));
});
clustermap.components.search.__GT_t12745 = (function __GT_t12745(map__12741__$2,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__12744__$2,map__12743__$2,map__12742__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__12709__$1,search_results__$1,meta12746){return (new clustermap.components.search.t12745(map__12741__$2,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__12744__$2,map__12743__$2,map__12742__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__12709__$1,search_results__$1,meta12746));
});
}
return (new clustermap.components.search.t12745(map__12741__$1,investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__12744__$1,map__12743__$1,map__12742__$1,comm,selection_type,owner,constituencies,p__12709,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
