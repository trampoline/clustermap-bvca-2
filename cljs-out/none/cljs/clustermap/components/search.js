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
clustermap.components.search.search_result_link = (function search_result_link(p__12372,owner,p__12373){var map__12382 = p__12372;var map__12382__$1 = ((cljs.core.seq_QMARK_.call(null,map__12382))?cljs.core.apply.call(null,cljs.core.hash_map,map__12382):map__12382);var search_result = map__12382__$1;var type = cljs.core.get.call(null,map__12382__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12382__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12383 = p__12373;var map__12383__$1 = ((cljs.core.seq_QMARK_.call(null,map__12383))?cljs.core.apply.call(null,cljs.core.hash_map,map__12383):map__12383);var opts = map__12383__$1;var path_fn = cljs.core.get.call(null,map__12383__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12383__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12384 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12384 = (function (opts,map__12383,path_fn,map__12382,name,comm,search_result,p__12372,owner,p__12373,type,search_result_link,meta12385){
this.opts = opts;
this.map__12383 = map__12383;
this.path_fn = path_fn;
this.map__12382 = map__12382;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.p__12372 = p__12372;
this.owner = owner;
this.p__12373 = p__12373;
this.type = type;
this.search_result_link = search_result_link;
this.meta12385 = meta12385;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12384.cljs$lang$type = true;
clustermap.components.search.t12384.cljs$lang$ctorStr = "clustermap.components.search/t12384";
clustermap.components.search.t12384.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12384");
});
clustermap.components.search.t12384.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12384.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__12387){var self__ = this;
var map__12388 = p__12387;var map__12388__$1 = ((cljs.core.seq_QMARK_.call(null,map__12388))?cljs.core.apply.call(null,cljs.core.hash_map,map__12388):map__12388);var state = map__12388__$1;var selected = cljs.core.get.call(null,map__12388__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12389 = l;var G__12389__$1 = (((G__12389 == null))?null:jayq.core.$.call(null,G__12389));var G__12389__$2 = (((G__12389__$1 == null))?null:G__12389__$1.parents(".search-component"));var G__12389__$3 = (((G__12389__$2 == null))?null:G__12389__$2.toggle());return G__12389__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t12384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12386){var self__ = this;
var _12386__$1 = this;return self__.meta12385;
});
clustermap.components.search.t12384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12386,meta12385__$1){var self__ = this;
var _12386__$1 = this;return (new clustermap.components.search.t12384(self__.opts,self__.map__12383,self__.path_fn,self__.map__12382,self__.name,self__.comm,self__.search_result,self__.p__12372,self__.owner,self__.p__12373,self__.type,self__.search_result_link,meta12385__$1));
});
clustermap.components.search.__GT_t12384 = (function __GT_t12384(opts__$1,map__12383__$2,path_fn__$1,map__12382__$2,name__$1,comm__$1,search_result__$1,p__12372__$1,owner__$1,p__12373__$1,type__$1,search_result_link__$1,meta12385){return (new clustermap.components.search.t12384(opts__$1,map__12383__$2,path_fn__$1,map__12382__$2,name__$1,comm__$1,search_result__$1,p__12372__$1,owner__$1,p__12373__$1,type__$1,search_result_link__$1,meta12385));
});
}
return (new clustermap.components.search.t12384(opts,map__12383__$1,path_fn,map__12382__$1,name,comm,search_result,p__12372,owner,p__12373,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12390,n){var map__12392 = p__12390;var map__12392__$1 = ((cljs.core.seq_QMARK_.call(null,map__12392))?cljs.core.apply.call(null,cljs.core.hash_map,map__12392):map__12392);var investor_companies = cljs.core.get.call(null,map__12392__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12392__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12392__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12399 = cljs.core._EQ__EQ_;var expr__12400 = e.keyCode;if(cljs.core.truth_(pred__12399.call(null,clustermap.components.search.ESCAPE_KEY,expr__12400)))
{var G__12402 = om.core.get_node.call(null,owner,"search-component");var G__12402__$1 = (((G__12402 == null))?null:jayq.core.$.call(null,G__12402));var G__12402__$2 = (((G__12402__$1 == null))?null:G__12402__$1.toggle());return G__12402__$2;
} else
{if(cljs.core.truth_(pred__12399.call(null,clustermap.components.search.ENTER_KEY,expr__12400)))
{var vec__12403 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12403,0,null);var res = cljs.core.nth.call(null,vec__12403,1,null);var G__12404_12405 = om.core.get_node.call(null,owner,"search-component");var G__12404_12406__$1 = (((G__12404_12405 == null))?null:jayq.core.$.call(null,G__12404_12405));var G__12404_12407__$2 = (((G__12404_12406__$1 == null))?null:G__12404_12406__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12399.call(null,clustermap.components.search.UP_ARROW,expr__12400)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12399.call(null,clustermap.components.search.DOWN_ARROW,expr__12400)))
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
clustermap.components.search.search_component = (function search_component(p__12408,owner){var map__12440 = p__12408;var map__12440__$1 = ((cljs.core.seq_QMARK_.call(null,map__12440))?cljs.core.apply.call(null,cljs.core.hash_map,map__12440):map__12440);var map__12441 = cljs.core.get.call(null,map__12440__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__12441__$1 = ((cljs.core.seq_QMARK_.call(null,map__12441))?cljs.core.apply.call(null,cljs.core.hash_map,map__12441):map__12441);var selection_type = cljs.core.get.call(null,map__12441__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__12441__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__12440__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__12442 = om.core.get_shared.call(null,owner);var map__12442__$1 = ((cljs.core.seq_QMARK_.call(null,map__12442))?cljs.core.apply.call(null,cljs.core.hash_map,map__12442):map__12442);var path_fn = cljs.core.get.call(null,map__12442__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12442__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__12443 = search_results;var map__12443__$1 = ((cljs.core.seq_QMARK_.call(null,map__12443))?cljs.core.apply.call(null,cljs.core.hash_map,map__12443):map__12443);var investor_companies = cljs.core.get.call(null,map__12443__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12443__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12443__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12444 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12444 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__12408,map__12443,comm,map__12441,map__12442,selection_type,map__12440,owner,constituencies,search_results,meta12445){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.p__12408 = p__12408;
this.map__12443 = map__12443;
this.comm = comm;
this.map__12441 = map__12441;
this.map__12442 = map__12442;
this.selection_type = selection_type;
this.map__12440 = map__12440;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta12445 = meta12445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12444.cljs$lang$type = true;
clustermap.components.search.t12444.cljs$lang$ctorStr = "clustermap.components.search/t12444";
clustermap.components.search.t12444.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t12444");
});
clustermap.components.search.t12444.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12444.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__12447(s__12448){return (new cljs.core.LazySeq(null,(function (){var s__12448__$1 = s__12448;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12448__$1);if(temp__4092__auto__)
{var s__12448__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12448__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12448__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12450 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12449 = 0;while(true){
if((i__12449 < size__4116__auto__))
{var vec__12453 = cljs.core._nth.call(null,c__4115__auto__,i__12449);var idx = cljs.core.nth.call(null,vec__12453,0,null);var con = cljs.core.nth.call(null,vec__12453,1,null);cljs.core.chunk_append.call(null,b__12450,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12449,vec__12453,idx,con,c__4115__auto__,size__4116__auto__,b__12450,s__12448__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__12449,vec__12453,idx,con,c__4115__auto__,size__4116__auto__,b__12450,s__12448__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12471 = (i__12449 + 1);
i__12449 = G__12471;
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
{var vec__12454 = cljs.core.first.call(null,s__12448__$2);var idx = cljs.core.nth.call(null,vec__12454,0,null);var con = cljs.core.nth.call(null,vec__12454,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12454,idx,con,s__12448__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__12454,idx,con,s__12448__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12447.call(null,cljs.core.rest.call(null,s__12448__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__12455(s__12456){return (new cljs.core.LazySeq(null,(function (){var s__12456__$1 = s__12456;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12456__$1);if(temp__4092__auto__)
{var s__12456__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12456__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12456__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12458 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12457 = 0;while(true){
if((i__12457 < size__4116__auto__))
{var vec__12461 = cljs.core._nth.call(null,c__4115__auto__,i__12457);var idx = cljs.core.nth.call(null,vec__12461,0,null);var pc = cljs.core.nth.call(null,vec__12461,1,null);cljs.core.chunk_append.call(null,b__12458,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12457,vec__12461,idx,pc,c__4115__auto__,size__4116__auto__,b__12458,s__12456__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__12457,vec__12461,idx,pc,c__4115__auto__,size__4116__auto__,b__12458,s__12456__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12472 = (i__12457 + 1);
i__12457 = G__12472;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12458),iter__12455.call(null,cljs.core.chunk_rest.call(null,s__12456__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12458),null);
}
} else
{var vec__12462 = cljs.core.first.call(null,s__12456__$2);var idx = cljs.core.nth.call(null,vec__12462,0,null);var pc = cljs.core.nth.call(null,vec__12462,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12462,idx,pc,s__12456__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__12462,idx,pc,s__12456__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12455.call(null,cljs.core.rest.call(null,s__12456__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__12463(s__12464){return (new cljs.core.LazySeq(null,(function (){var s__12464__$1 = s__12464;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__12464__$1);if(temp__4092__auto__)
{var s__12464__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12464__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__12464__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__12466 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__12465 = 0;while(true){
if((i__12465 < size__4116__auto__))
{var vec__12469 = cljs.core._nth.call(null,c__4115__auto__,i__12465);var idx = cljs.core.nth.call(null,vec__12469,0,null);var inv = cljs.core.nth.call(null,vec__12469,1,null);cljs.core.chunk_append.call(null,b__12466,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12465,vec__12469,idx,inv,c__4115__auto__,size__4116__auto__,b__12466,s__12464__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__12465,vec__12469,idx,inv,c__4115__auto__,size__4116__auto__,b__12466,s__12464__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12473 = (i__12465 + 1);
i__12465 = G__12473;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12466),iter__12463.call(null,cljs.core.chunk_rest.call(null,s__12464__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12466),null);
}
} else
{var vec__12470 = cljs.core.first.call(null,s__12464__$2);var idx = cljs.core.nth.call(null,vec__12470,0,null);var inv = cljs.core.nth.call(null,vec__12470,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12470,idx,inv,s__12464__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__12470,idx,inv,s__12464__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12463.call(null,cljs.core.rest.call(null,s__12464__$2)));
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
clustermap.components.search.t12444.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12446){var self__ = this;
var _12446__$1 = this;return self__.meta12445;
});
clustermap.components.search.t12444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12446,meta12445__$1){var self__ = this;
var _12446__$1 = this;return (new clustermap.components.search.t12444(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.p__12408,self__.map__12443,self__.comm,self__.map__12441,self__.map__12442,self__.selection_type,self__.map__12440,self__.owner,self__.constituencies,self__.search_results,meta12445__$1));
});
clustermap.components.search.__GT_t12444 = (function __GT_t12444(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__12408__$1,map__12443__$2,comm__$1,map__12441__$2,map__12442__$2,selection_type__$1,map__12440__$2,owner__$1,constituencies__$1,search_results__$1,meta12445){return (new clustermap.components.search.t12444(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__12408__$1,map__12443__$2,comm__$1,map__12441__$2,map__12442__$2,selection_type__$1,map__12440__$2,owner__$1,constituencies__$1,search_results__$1,meta12445));
});
}
return (new clustermap.components.search.t12444(investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__12408,map__12443__$1,comm,map__12441__$1,map__12442__$1,selection_type,map__12440__$1,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});

//# sourceMappingURL=search.js.map