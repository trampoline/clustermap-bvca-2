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
clustermap.components.search.search_result_link = (function search_result_link(p__12308,owner,p__12309){var map__12318 = p__12308;var map__12318__$1 = ((cljs.core.seq_QMARK_.call(null,map__12318))?cljs.core.apply.call(null,cljs.core.hash_map,map__12318):map__12318);var search_result = map__12318__$1;var type = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12318__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12319 = p__12309;var map__12319__$1 = ((cljs.core.seq_QMARK_.call(null,map__12319))?cljs.core.apply.call(null,cljs.core.hash_map,map__12319):map__12319);var opts = map__12319__$1;var path_fn = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12319__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12320 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12320 = (function (opts,path_fn,name,comm,search_result,owner,p__12309,p__12308,map__12318,type,map__12319,search_result_link,meta12321){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.p__12309 = p__12309;
this.p__12308 = p__12308;
this.map__12318 = map__12318;
this.type = type;
this.map__12319 = map__12319;
this.search_result_link = search_result_link;
this.meta12321 = meta12321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12320.cljs$lang$type = true;
clustermap.components.search.t12320.cljs$lang$ctorStr = "clustermap.components.search/t12320";
clustermap.components.search.t12320.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12320");
});
clustermap.components.search.t12320.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12320.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12323){var self__ = this;
var map__12324 = p__12323;var map__12324__$1 = ((cljs.core.seq_QMARK_.call(null,map__12324))?cljs.core.apply.call(null,cljs.core.hash_map,map__12324):map__12324);var state = map__12324__$1;var selected = cljs.core.get.call(null,map__12324__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12325 = l;var G__12325__$1 = (((G__12325 == null))?null:jayq.core.$.call(null,G__12325));var G__12325__$2 = (((G__12325__$1 == null))?null:G__12325__$1.parents(".search-component"));var G__12325__$3 = (((G__12325__$2 == null))?null:G__12325__$2.toggle());return G__12325__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t12320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12322){var self__ = this;
var _12322__$1 = this;return self__.meta12321;
});
clustermap.components.search.t12320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12322,meta12321__$1){var self__ = this;
var _12322__$1 = this;return (new clustermap.components.search.t12320(self__.opts,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.p__12309,self__.p__12308,self__.map__12318,self__.type,self__.map__12319,self__.search_result_link,meta12321__$1));
});
clustermap.components.search.__GT_t12320 = (function __GT_t12320(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__12309__$1,p__12308__$1,map__12318__$2,type__$1,map__12319__$2,search_result_link__$1,meta12321){return (new clustermap.components.search.t12320(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__12309__$1,p__12308__$1,map__12318__$2,type__$1,map__12319__$2,search_result_link__$1,meta12321));
});
}
return (new clustermap.components.search.t12320(opts,path_fn,name,comm,search_result,owner,p__12309,p__12308,map__12318__$1,type,map__12319__$1,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12326,n){var map__12328 = p__12326;var map__12328__$1 = ((cljs.core.seq_QMARK_.call(null,map__12328))?cljs.core.apply.call(null,cljs.core.hash_map,map__12328):map__12328);var investor_companies = cljs.core.get.call(null,map__12328__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12328__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12328__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12335 = cljs.core._EQ__EQ_;var expr__12336 = e.keyCode;if(cljs.core.truth_(pred__12335.call(null,clustermap.components.search.ESCAPE_KEY,expr__12336)))
{var G__12338 = om.core.get_node.call(null,owner,"search-component");var G__12338__$1 = (((G__12338 == null))?null:jayq.core.$.call(null,G__12338));var G__12338__$2 = (((G__12338__$1 == null))?null:G__12338__$1.toggle());return G__12338__$2;
} else
{if(cljs.core.truth_(pred__12335.call(null,clustermap.components.search.ENTER_KEY,expr__12336)))
{var vec__12339 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12339,0,null);var res = cljs.core.nth.call(null,vec__12339,1,null);var G__12340_12341 = om.core.get_node.call(null,owner,"search-component");var G__12340_12342__$1 = (((G__12340_12341 == null))?null:jayq.core.$.call(null,G__12340_12341));var G__12340_12343__$2 = (((G__12340_12342__$1 == null))?null:G__12340_12342__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12335.call(null,clustermap.components.search.UP_ARROW,expr__12336)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12335.call(null,clustermap.components.search.DOWN_ARROW,expr__12336)))
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
clustermap.components.search.search_component = (function search_component(p__12344,owner){var map__12376 = p__12344;var map__12376__$1 = ((cljs.core.seq_QMARK_.call(null,map__12376))?cljs.core.apply.call(null,cljs.core.hash_map,map__12376):map__12376);var map__12377 = cljs.core.get.call(null,map__12376__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__12377__$1 = ((cljs.core.seq_QMARK_.call(null,map__12377))?cljs.core.apply.call(null,cljs.core.hash_map,map__12377):map__12377);var selection_type = cljs.core.get.call(null,map__12377__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__12377__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__12376__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__12378 = om.core.get_shared.call(null,owner);var map__12378__$1 = ((cljs.core.seq_QMARK_.call(null,map__12378))?cljs.core.apply.call(null,cljs.core.hash_map,map__12378):map__12378);var path_fn = cljs.core.get.call(null,map__12378__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12378__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__12379 = search_results;var map__12379__$1 = ((cljs.core.seq_QMARK_.call(null,map__12379))?cljs.core.apply.call(null,cljs.core.hash_map,map__12379):map__12379);var investor_companies = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12379__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12380 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12380 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,p__12344,selection_type,owner,constituencies,map__12379,map__12377,map__12378,map__12376,search_results,meta12381){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.p__12344 = p__12344;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.map__12379 = map__12379;
this.map__12377 = map__12377;
this.map__12378 = map__12378;
this.map__12376 = map__12376;
this.search_results = search_results;
this.meta12381 = meta12381;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12380.cljs$lang$type = true;
clustermap.components.search.t12380.cljs$lang$ctorStr = "clustermap.components.search/t12380";
clustermap.components.search.t12380.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12380");
});
clustermap.components.search.t12380.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12380.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__12383(s__12384){return (new cljs.core.LazySeq(null,(function (){var s__12384__$1 = s__12384;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12384__$1);if(temp__4092__auto__)
{var s__12384__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12384__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12384__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12386 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12385 = 0;while(true){
if((i__12385 < size__4116__auto__))
{var vec__12389 = cljs.core._nth.call(null,c__4115__auto__,i__12385);var idx = cljs.core.nth.call(null,vec__12389,0,null);var con = cljs.core.nth.call(null,vec__12389,1,null);cljs.core.chunk_append.call(null,b__12386,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12385,vec__12389,idx,con,c__4115__auto__,size__4116__auto__,b__12386,s__12384__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12385,vec__12389,idx,con,c__4115__auto__,size__4116__auto__,b__12386,s__12384__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12407 = (i__12385 + 1);
i__12385 = G__12407;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12386),iter__12383.call(null,cljs.core.chunk_rest.call(null,s__12384__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12386),null);
}
} else
{var vec__12390 = cljs.core.first.call(null,s__12384__$2);var idx = cljs.core.nth.call(null,vec__12390,0,null);var con = cljs.core.nth.call(null,vec__12390,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12390,idx,con,s__12384__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12390,idx,con,s__12384__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12383.call(null,cljs.core.rest.call(null,s__12384__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__12391(s__12392){return (new cljs.core.LazySeq(null,(function (){var s__12392__$1 = s__12392;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12392__$1);if(temp__4092__auto__)
{var s__12392__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12392__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12392__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12394 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12393 = 0;while(true){
if((i__12393 < size__4116__auto__))
{var vec__12397 = cljs.core._nth.call(null,c__4115__auto__,i__12393);var idx = cljs.core.nth.call(null,vec__12397,0,null);var pc = cljs.core.nth.call(null,vec__12397,1,null);cljs.core.chunk_append.call(null,b__12394,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12393,vec__12397,idx,pc,c__4115__auto__,size__4116__auto__,b__12394,s__12392__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12393,vec__12397,idx,pc,c__4115__auto__,size__4116__auto__,b__12394,s__12392__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12408 = (i__12393 + 1);
i__12393 = G__12408;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12394),iter__12391.call(null,cljs.core.chunk_rest.call(null,s__12392__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12394),null);
}
} else
{var vec__12398 = cljs.core.first.call(null,s__12392__$2);var idx = cljs.core.nth.call(null,vec__12398,0,null);var pc = cljs.core.nth.call(null,vec__12398,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12398,idx,pc,s__12392__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12398,idx,pc,s__12392__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12391.call(null,cljs.core.rest.call(null,s__12392__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__12399(s__12400){return (new cljs.core.LazySeq(null,(function (){var s__12400__$1 = s__12400;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12400__$1);if(temp__4092__auto__)
{var s__12400__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12400__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12400__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12402 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12401 = 0;while(true){
if((i__12401 < size__4116__auto__))
{var vec__12405 = cljs.core._nth.call(null,c__4115__auto__,i__12401);var idx = cljs.core.nth.call(null,vec__12405,0,null);var inv = cljs.core.nth.call(null,vec__12405,1,null);cljs.core.chunk_append.call(null,b__12402,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12401,vec__12405,idx,inv,c__4115__auto__,size__4116__auto__,b__12402,s__12400__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12401,vec__12405,idx,inv,c__4115__auto__,size__4116__auto__,b__12402,s__12400__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12409 = (i__12401 + 1);
i__12401 = G__12409;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12402),iter__12399.call(null,cljs.core.chunk_rest.call(null,s__12400__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12402),null);
}
} else
{var vec__12406 = cljs.core.first.call(null,s__12400__$2);var idx = cljs.core.nth.call(null,vec__12406,0,null);var inv = cljs.core.nth.call(null,vec__12406,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12406,idx,inv,s__12400__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12406,idx,inv,s__12400__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12399.call(null,cljs.core.rest.call(null,s__12400__$2)));
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
clustermap.components.search.t12380.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12382){var self__ = this;
var _12382__$1 = this;return self__.meta12381;
});
clustermap.components.search.t12380.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12382,meta12381__$1){var self__ = this;
var _12382__$1 = this;return (new clustermap.components.search.t12380(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.p__12344,self__.selection_type,self__.owner,self__.constituencies,self__.map__12379,self__.map__12377,self__.map__12378,self__.map__12376,self__.search_results,meta12381__$1));
});
clustermap.components.search.__GT_t12380 = (function __GT_t12380(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,p__12344__$1,selection_type__$1,owner__$1,constituencies__$1,map__12379__$2,map__12377__$2,map__12378__$2,map__12376__$2,search_results__$1,meta12381){return (new clustermap.components.search.t12380(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,p__12344__$1,selection_type__$1,owner__$1,constituencies__$1,map__12379__$2,map__12377__$2,map__12378__$2,map__12376__$2,search_results__$1,meta12381));
});
}
return (new clustermap.components.search.t12380(investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,p__12344,selection_type,owner,constituencies,map__12379__$1,map__12377__$1,map__12378__$1,map__12376__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map