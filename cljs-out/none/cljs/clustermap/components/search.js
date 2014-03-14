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
clustermap.components.search.search_result_link = (function search_result_link(p__23638,owner,p__23639){var map__23648 = p__23638;var map__23648__$1 = ((cljs.core.seq_QMARK_.call(null,map__23648))?cljs.core.apply.call(null,cljs.core.hash_map,map__23648):map__23648);var search_result = map__23648__$1;var type = cljs.core.get.call(null,map__23648__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__23648__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__23649 = p__23639;var map__23649__$1 = ((cljs.core.seq_QMARK_.call(null,map__23649))?cljs.core.apply.call(null,cljs.core.hash_map,map__23649):map__23649);var opts = map__23649__$1;var path_fn = cljs.core.get.call(null,map__23649__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23649__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t23650 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23650 = (function (opts,path_fn,name,comm,search_result,owner,p__23639,p__23638,map__23648,type,map__23649,search_result_link,meta23651){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.p__23639 = p__23639;
this.p__23638 = p__23638;
this.map__23648 = map__23648;
this.type = type;
this.map__23649 = map__23649;
this.search_result_link = search_result_link;
this.meta23651 = meta23651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23650.cljs$lang$type = true;
clustermap.components.search.t23650.cljs$lang$ctorStr = "clustermap.components.search/t23650";
clustermap.components.search.t23650.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t23650");
});
clustermap.components.search.t23650.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23650.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23653){var self__ = this;
var map__23654 = p__23653;var map__23654__$1 = ((cljs.core.seq_QMARK_.call(null,map__23654))?cljs.core.apply.call(null,cljs.core.hash_map,map__23654):map__23654);var state = map__23654__$1;var selected = cljs.core.get.call(null,map__23654__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__23655 = l;var G__23655__$1 = (((G__23655 == null))?null:jayq.core.$.call(null,G__23655));var G__23655__$2 = (((G__23655__$1 == null))?null:G__23655__$1.parents(".search-component"));var G__23655__$3 = (((G__23655__$2 == null))?null:G__23655__$2.toggle());return G__23655__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t23650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23652){var self__ = this;
var _23652__$1 = this;return self__.meta23651;
});
clustermap.components.search.t23650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23652,meta23651__$1){var self__ = this;
var _23652__$1 = this;return (new clustermap.components.search.t23650(self__.opts,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.p__23639,self__.p__23638,self__.map__23648,self__.type,self__.map__23649,self__.search_result_link,meta23651__$1));
});
clustermap.components.search.__GT_t23650 = (function __GT_t23650(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__23639__$1,p__23638__$1,map__23648__$2,type__$1,map__23649__$2,search_result_link__$1,meta23651){return (new clustermap.components.search.t23650(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__23639__$1,p__23638__$1,map__23648__$2,type__$1,map__23649__$2,search_result_link__$1,meta23651));
});
}
return (new clustermap.components.search.t23650(opts,path_fn,name,comm,search_result,owner,p__23639,p__23638,map__23648__$1,type,map__23649__$1,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__23656,n){var map__23658 = p__23656;var map__23658__$1 = ((cljs.core.seq_QMARK_.call(null,map__23658))?cljs.core.apply.call(null,cljs.core.hash_map,map__23658):map__23658);var investor_companies = cljs.core.get.call(null,map__23658__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__23658__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__23658__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__23665 = cljs.core._EQ__EQ_;var expr__23666 = e.keyCode;if(cljs.core.truth_(pred__23665.call(null,clustermap.components.search.ESCAPE_KEY,expr__23666)))
{var G__23668 = om.core.get_node.call(null,owner,"search-component");var G__23668__$1 = (((G__23668 == null))?null:jayq.core.$.call(null,G__23668));var G__23668__$2 = (((G__23668__$1 == null))?null:G__23668__$1.toggle());return G__23668__$2;
} else
{if(cljs.core.truth_(pred__23665.call(null,clustermap.components.search.ENTER_KEY,expr__23666)))
{var vec__23669 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__23669,0,null);var res = cljs.core.nth.call(null,vec__23669,1,null);var G__23670_23671 = om.core.get_node.call(null,owner,"search-component");var G__23670_23672__$1 = (((G__23670_23671 == null))?null:jayq.core.$.call(null,G__23670_23671));var G__23670_23673__$2 = (((G__23670_23672__$1 == null))?null:G__23670_23672__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__23665.call(null,clustermap.components.search.UP_ARROW,expr__23666)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__23665.call(null,clustermap.components.search.DOWN_ARROW,expr__23666)))
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
clustermap.components.search.search_component = (function search_component(p__23674,owner){var map__23706 = p__23674;var map__23706__$1 = ((cljs.core.seq_QMARK_.call(null,map__23706))?cljs.core.apply.call(null,cljs.core.hash_map,map__23706):map__23706);var map__23707 = cljs.core.get.call(null,map__23706__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__23707__$1 = ((cljs.core.seq_QMARK_.call(null,map__23707))?cljs.core.apply.call(null,cljs.core.hash_map,map__23707):map__23707);var selection_type = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__23707__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__23706__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__23708 = om.core.get_shared.call(null,owner);var map__23708__$1 = ((cljs.core.seq_QMARK_.call(null,map__23708))?cljs.core.apply.call(null,cljs.core.hash_map,map__23708):map__23708);var path_fn = cljs.core.get.call(null,map__23708__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23708__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__23709 = search_results;var map__23709__$1 = ((cljs.core.seq_QMARK_.call(null,map__23709))?cljs.core.apply.call(null,cljs.core.hash_map,map__23709):map__23709);var investor_companies = cljs.core.get.call(null,map__23709__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__23709__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__23709__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t23710 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23710 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__23707,comm,map__23706,map__23709,p__23674,map__23708,selection_type,owner,constituencies,search_results,meta23711){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__23707 = map__23707;
this.comm = comm;
this.map__23706 = map__23706;
this.map__23709 = map__23709;
this.p__23674 = p__23674;
this.map__23708 = map__23708;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta23711 = meta23711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23710.cljs$lang$type = true;
clustermap.components.search.t23710.cljs$lang$ctorStr = "clustermap.components.search/t23710";
clustermap.components.search.t23710.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t23710");
});
clustermap.components.search.t23710.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23710.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__23713(s__23714){return (new cljs.core.LazySeq(null,(function (){var s__23714__$1 = s__23714;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23714__$1);if(temp__4092__auto__)
{var s__23714__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23714__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23714__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23716 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23715 = 0;while(true){
if((i__23715 < size__4157__auto__))
{var vec__23719 = cljs.core._nth.call(null,c__4156__auto__,i__23715);var idx = cljs.core.nth.call(null,vec__23719,0,null);var con = cljs.core.nth.call(null,vec__23719,1,null);cljs.core.chunk_append.call(null,b__23716,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23715,vec__23719,idx,con,c__4156__auto__,size__4157__auto__,b__23716,s__23714__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__23715,vec__23719,idx,con,c__4156__auto__,size__4157__auto__,b__23716,s__23714__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23737 = (i__23715 + 1);
i__23715 = G__23737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23716),iter__23713.call(null,cljs.core.chunk_rest.call(null,s__23714__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23716),null);
}
} else
{var vec__23720 = cljs.core.first.call(null,s__23714__$2);var idx = cljs.core.nth.call(null,vec__23720,0,null);var con = cljs.core.nth.call(null,vec__23720,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23720,idx,con,s__23714__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__23720,idx,con,s__23714__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23713.call(null,cljs.core.rest.call(null,s__23714__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__23721(s__23722){return (new cljs.core.LazySeq(null,(function (){var s__23722__$1 = s__23722;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23722__$1);if(temp__4092__auto__)
{var s__23722__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23722__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23722__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23724 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23723 = 0;while(true){
if((i__23723 < size__4157__auto__))
{var vec__23727 = cljs.core._nth.call(null,c__4156__auto__,i__23723);var idx = cljs.core.nth.call(null,vec__23727,0,null);var pc = cljs.core.nth.call(null,vec__23727,1,null);cljs.core.chunk_append.call(null,b__23724,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23723,vec__23727,idx,pc,c__4156__auto__,size__4157__auto__,b__23724,s__23722__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__23723,vec__23727,idx,pc,c__4156__auto__,size__4157__auto__,b__23724,s__23722__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23738 = (i__23723 + 1);
i__23723 = G__23738;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23724),iter__23721.call(null,cljs.core.chunk_rest.call(null,s__23722__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23724),null);
}
} else
{var vec__23728 = cljs.core.first.call(null,s__23722__$2);var idx = cljs.core.nth.call(null,vec__23728,0,null);var pc = cljs.core.nth.call(null,vec__23728,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23728,idx,pc,s__23722__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__23728,idx,pc,s__23722__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23721.call(null,cljs.core.rest.call(null,s__23722__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__23729(s__23730){return (new cljs.core.LazySeq(null,(function (){var s__23730__$1 = s__23730;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23730__$1);if(temp__4092__auto__)
{var s__23730__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23730__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23730__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23732 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23731 = 0;while(true){
if((i__23731 < size__4157__auto__))
{var vec__23735 = cljs.core._nth.call(null,c__4156__auto__,i__23731);var idx = cljs.core.nth.call(null,vec__23735,0,null);var inv = cljs.core.nth.call(null,vec__23735,1,null);cljs.core.chunk_append.call(null,b__23732,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23731,vec__23735,idx,inv,c__4156__auto__,size__4157__auto__,b__23732,s__23730__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__23731,vec__23735,idx,inv,c__4156__auto__,size__4157__auto__,b__23732,s__23730__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23739 = (i__23731 + 1);
i__23731 = G__23739;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23732),iter__23729.call(null,cljs.core.chunk_rest.call(null,s__23730__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23732),null);
}
} else
{var vec__23736 = cljs.core.first.call(null,s__23730__$2);var idx = cljs.core.nth.call(null,vec__23736,0,null);var inv = cljs.core.nth.call(null,vec__23736,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23736,idx,inv,s__23730__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__23736,idx,inv,s__23730__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23729.call(null,cljs.core.rest.call(null,s__23730__$2)));
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
clustermap.components.search.t23710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23712){var self__ = this;
var _23712__$1 = this;return self__.meta23711;
});
clustermap.components.search.t23710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23712,meta23711__$1){var self__ = this;
var _23712__$1 = this;return (new clustermap.components.search.t23710(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__23707,self__.comm,self__.map__23706,self__.map__23709,self__.p__23674,self__.map__23708,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,meta23711__$1));
});
clustermap.components.search.__GT_t23710 = (function __GT_t23710(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__23707__$2,comm__$1,map__23706__$2,map__23709__$2,p__23674__$1,map__23708__$2,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta23711){return (new clustermap.components.search.t23710(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__23707__$2,comm__$1,map__23706__$2,map__23709__$2,p__23674__$1,map__23708__$2,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta23711));
});
}
return (new clustermap.components.search.t23710(investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__23707__$1,comm,map__23706__$1,map__23709__$1,p__23674,map__23708__$1,selection_type,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map