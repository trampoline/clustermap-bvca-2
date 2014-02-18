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
clustermap.components.search.search_result_link = (function search_result_link(p__12356,owner,p__12357){var map__12366 = p__12356;var map__12366__$1 = ((cljs.core.seq_QMARK_.call(null,map__12366))?cljs.core.apply.call(null,cljs.core.hash_map,map__12366):map__12366);var search_result = map__12366__$1;var type = cljs.core.get.call(null,map__12366__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12366__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12367 = p__12357;var map__12367__$1 = ((cljs.core.seq_QMARK_.call(null,map__12367))?cljs.core.apply.call(null,cljs.core.hash_map,map__12367):map__12367);var opts = map__12367__$1;var path_fn = cljs.core.get.call(null,map__12367__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12367__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12368 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12368 = (function (opts,path_fn,name,map__12366,comm,map__12367,search_result,owner,p__12356,type,p__12357,search_result_link,meta12369){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.map__12366 = map__12366;
this.comm = comm;
this.map__12367 = map__12367;
this.search_result = search_result;
this.owner = owner;
this.p__12356 = p__12356;
this.type = type;
this.p__12357 = p__12357;
this.search_result_link = search_result_link;
this.meta12369 = meta12369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12368.cljs$lang$type = true;
clustermap.components.search.t12368.cljs$lang$ctorStr = "clustermap.components.search/t12368";
clustermap.components.search.t12368.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12368");
});
clustermap.components.search.t12368.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12368.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12371){var self__ = this;
var map__12372 = p__12371;var map__12372__$1 = ((cljs.core.seq_QMARK_.call(null,map__12372))?cljs.core.apply.call(null,cljs.core.hash_map,map__12372):map__12372);var state = map__12372__$1;var selected = cljs.core.get.call(null,map__12372__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12373 = l;var G__12373__$1 = (((G__12373 == null))?null:jayq.core.$.call(null,G__12373));var G__12373__$2 = (((G__12373__$1 == null))?null:G__12373__$1.parents(".search-component"));var G__12373__$3 = (((G__12373__$2 == null))?null:G__12373__$2.toggle());return G__12373__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t12368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12370){var self__ = this;
var _12370__$1 = this;return self__.meta12369;
});
clustermap.components.search.t12368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12370,meta12369__$1){var self__ = this;
var _12370__$1 = this;return (new clustermap.components.search.t12368(self__.opts,self__.path_fn,self__.name,self__.map__12366,self__.comm,self__.map__12367,self__.search_result,self__.owner,self__.p__12356,self__.type,self__.p__12357,self__.search_result_link,meta12369__$1));
});
clustermap.components.search.__GT_t12368 = (function __GT_t12368(opts__$1,path_fn__$1,name__$1,map__12366__$2,comm__$1,map__12367__$2,search_result__$1,owner__$1,p__12356__$1,type__$1,p__12357__$1,search_result_link__$1,meta12369){return (new clustermap.components.search.t12368(opts__$1,path_fn__$1,name__$1,map__12366__$2,comm__$1,map__12367__$2,search_result__$1,owner__$1,p__12356__$1,type__$1,p__12357__$1,search_result_link__$1,meta12369));
});
}
return (new clustermap.components.search.t12368(opts,path_fn,name,map__12366__$1,comm,map__12367__$1,search_result,owner,p__12356,type,p__12357,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12374,n){var map__12376 = p__12374;var map__12376__$1 = ((cljs.core.seq_QMARK_.call(null,map__12376))?cljs.core.apply.call(null,cljs.core.hash_map,map__12376):map__12376);var investor_companies = cljs.core.get.call(null,map__12376__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12376__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12376__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12383 = cljs.core._EQ__EQ_;var expr__12384 = e.keyCode;if(cljs.core.truth_(pred__12383.call(null,clustermap.components.search.ESCAPE_KEY,expr__12384)))
{var G__12386 = om.core.get_node.call(null,owner,"search-component");var G__12386__$1 = (((G__12386 == null))?null:jayq.core.$.call(null,G__12386));var G__12386__$2 = (((G__12386__$1 == null))?null:G__12386__$1.toggle());return G__12386__$2;
} else
{if(cljs.core.truth_(pred__12383.call(null,clustermap.components.search.ENTER_KEY,expr__12384)))
{var vec__12387 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12387,0,null);var res = cljs.core.nth.call(null,vec__12387,1,null);var G__12388_12389 = om.core.get_node.call(null,owner,"search-component");var G__12388_12390__$1 = (((G__12388_12389 == null))?null:jayq.core.$.call(null,G__12388_12389));var G__12388_12391__$2 = (((G__12388_12390__$1 == null))?null:G__12388_12390__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12383.call(null,clustermap.components.search.UP_ARROW,expr__12384)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12383.call(null,clustermap.components.search.DOWN_ARROW,expr__12384)))
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
clustermap.components.search.search_component = (function search_component(p__12392,owner){var map__12424 = p__12392;var map__12424__$1 = ((cljs.core.seq_QMARK_.call(null,map__12424))?cljs.core.apply.call(null,cljs.core.hash_map,map__12424):map__12424);var map__12425 = cljs.core.get.call(null,map__12424__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__12425__$1 = ((cljs.core.seq_QMARK_.call(null,map__12425))?cljs.core.apply.call(null,cljs.core.hash_map,map__12425):map__12425);var selection_type = cljs.core.get.call(null,map__12425__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__12425__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__12424__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__12426 = om.core.get_shared.call(null,owner);var map__12426__$1 = ((cljs.core.seq_QMARK_.call(null,map__12426))?cljs.core.apply.call(null,cljs.core.hash_map,map__12426):map__12426);var path_fn = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12426__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__12427 = search_results;var map__12427__$1 = ((cljs.core.seq_QMARK_.call(null,map__12427))?cljs.core.apply.call(null,cljs.core.hash_map,map__12427):map__12427);var investor_companies = cljs.core.get.call(null,map__12427__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12427__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12427__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12428 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12428 = (function (investor_companies,map__12427,selection_value,path_fn,portfolio_companies,search_component,map__12426,p__12392,map__12425,map__12424,comm,selection_type,owner,constituencies,search_results,meta12429){
this.investor_companies = investor_companies;
this.map__12427 = map__12427;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__12426 = map__12426;
this.p__12392 = p__12392;
this.map__12425 = map__12425;
this.map__12424 = map__12424;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta12429 = meta12429;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12428.cljs$lang$type = true;
clustermap.components.search.t12428.cljs$lang$ctorStr = "clustermap.components.search/t12428";
clustermap.components.search.t12428.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12428");
});
clustermap.components.search.t12428.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12428.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
})})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
})},"\u00D7")),(cljs.core.truth_(self__.selection_value)?React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": self__.path_fn.call(null,null,null)},React.DOM.button({"className": "btn-reset", "type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
})},"Reset to UK wide"))):null)),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__12431(s__12432){return (new cljs.core.LazySeq(null,(function (){var s__12432__$1 = s__12432;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12432__$1);if(temp__4092__auto__)
{var s__12432__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12432__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12432__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12434 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12433 = 0;while(true){
if((i__12433 < size__4116__auto__))
{var vec__12437 = cljs.core._nth.call(null,c__4115__auto__,i__12433);var idx = cljs.core.nth.call(null,vec__12437,0,null);var con = cljs.core.nth.call(null,vec__12437,1,null);cljs.core.chunk_append.call(null,b__12434,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12433,vec__12437,idx,con,c__4115__auto__,size__4116__auto__,b__12434,s__12432__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12433,vec__12437,idx,con,c__4115__auto__,size__4116__auto__,b__12434,s__12432__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12455 = (i__12433 + 1);
i__12433 = G__12455;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12434),iter__12431.call(null,cljs.core.chunk_rest.call(null,s__12432__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12434),null);
}
} else
{var vec__12438 = cljs.core.first.call(null,s__12432__$2);var idx = cljs.core.nth.call(null,vec__12438,0,null);var con = cljs.core.nth.call(null,vec__12438,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12438,idx,con,s__12432__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12438,idx,con,s__12432__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12431.call(null,cljs.core.rest.call(null,s__12432__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__12439(s__12440){return (new cljs.core.LazySeq(null,(function (){var s__12440__$1 = s__12440;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12440__$1);if(temp__4092__auto__)
{var s__12440__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12440__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12440__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12442 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12441 = 0;while(true){
if((i__12441 < size__4116__auto__))
{var vec__12445 = cljs.core._nth.call(null,c__4115__auto__,i__12441);var idx = cljs.core.nth.call(null,vec__12445,0,null);var pc = cljs.core.nth.call(null,vec__12445,1,null);cljs.core.chunk_append.call(null,b__12442,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12441,vec__12445,idx,pc,c__4115__auto__,size__4116__auto__,b__12442,s__12440__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12441,vec__12445,idx,pc,c__4115__auto__,size__4116__auto__,b__12442,s__12440__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12456 = (i__12441 + 1);
i__12441 = G__12456;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12442),iter__12439.call(null,cljs.core.chunk_rest.call(null,s__12440__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12442),null);
}
} else
{var vec__12446 = cljs.core.first.call(null,s__12440__$2);var idx = cljs.core.nth.call(null,vec__12446,0,null);var pc = cljs.core.nth.call(null,vec__12446,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12446,idx,pc,s__12440__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12446,idx,pc,s__12440__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12439.call(null,cljs.core.rest.call(null,s__12440__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__12447(s__12448){return (new cljs.core.LazySeq(null,(function (){var s__12448__$1 = s__12448;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12448__$1);if(temp__4092__auto__)
{var s__12448__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12448__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12448__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12450 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12449 = 0;while(true){
if((i__12449 < size__4116__auto__))
{var vec__12453 = cljs.core._nth.call(null,c__4115__auto__,i__12449);var idx = cljs.core.nth.call(null,vec__12453,0,null);var inv = cljs.core.nth.call(null,vec__12453,1,null);cljs.core.chunk_append.call(null,b__12450,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12449,vec__12453,idx,inv,c__4115__auto__,size__4116__auto__,b__12450,s__12448__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12449,vec__12453,idx,inv,c__4115__auto__,size__4116__auto__,b__12450,s__12448__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12457 = (i__12449 + 1);
i__12449 = G__12457;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12450),iter__12447.call(null,cljs.core.chunk_rest.call(null,s__12448__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12450),null);
}
} else
{var vec__12454 = cljs.core.first.call(null,s__12448__$2);var idx = cljs.core.nth.call(null,vec__12454,0,null);var inv = cljs.core.nth.call(null,vec__12454,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12454,idx,inv,s__12448__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12454,idx,inv,s__12448__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12447.call(null,cljs.core.rest.call(null,s__12448__$2)));
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
clustermap.components.search.t12428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12430){var self__ = this;
var _12430__$1 = this;return self__.meta12429;
});
clustermap.components.search.t12428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12430,meta12429__$1){var self__ = this;
var _12430__$1 = this;return (new clustermap.components.search.t12428(self__.investor_companies,self__.map__12427,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__12426,self__.p__12392,self__.map__12425,self__.map__12424,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,meta12429__$1));
});
clustermap.components.search.__GT_t12428 = (function __GT_t12428(investor_companies__$1,map__12427__$2,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__12426__$2,p__12392__$1,map__12425__$2,map__12424__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta12429){return (new clustermap.components.search.t12428(investor_companies__$1,map__12427__$2,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__12426__$2,p__12392__$1,map__12425__$2,map__12424__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta12429));
});
}
return (new clustermap.components.search.t12428(investor_companies,map__12427__$1,selection_value,path_fn,portfolio_companies,search_component,map__12426__$1,p__12392,map__12425__$1,map__12424__$1,comm,selection_type,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map