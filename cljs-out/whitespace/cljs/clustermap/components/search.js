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
clustermap.components.search.search_result_link = (function search_result_link(p__45316,owner,p__45317){var map__45326 = p__45316;var map__45326__$1 = ((cljs.core.seq_QMARK_.call(null,map__45326))?cljs.core.apply.call(null,cljs.core.hash_map,map__45326):map__45326);var search_result = map__45326__$1;var type = cljs.core.get.call(null,map__45326__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__45326__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__45327 = p__45317;var map__45327__$1 = ((cljs.core.seq_QMARK_.call(null,map__45327))?cljs.core.apply.call(null,cljs.core.hash_map,map__45327):map__45327);var opts = map__45327__$1;var path_fn = cljs.core.get.call(null,map__45327__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45327__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t45328 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t45328 = (function (opts,p__45316,path_fn,p__45317,name,comm,search_result,map__45327,map__45326,owner,type,search_result_link,meta45329){
this.opts = opts;
this.p__45316 = p__45316;
this.path_fn = path_fn;
this.p__45317 = p__45317;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.map__45327 = map__45327;
this.map__45326 = map__45326;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta45329 = meta45329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t45328.cljs$lang$type = true;
clustermap.components.search.t45328.cljs$lang$ctorStr = "clustermap.components.search/t45328";
clustermap.components.search.t45328.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t45328");
});
clustermap.components.search.t45328.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t45328.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__45331){var self__ = this;
var map__45332 = p__45331;var map__45332__$1 = ((cljs.core.seq_QMARK_.call(null,map__45332))?cljs.core.apply.call(null,cljs.core.hash_map,map__45332):map__45332);var state = map__45332__$1;var selected = cljs.core.get.call(null,map__45332__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__45333 = l;var G__45333__$1 = (((G__45333 == null))?null:jayq.core.$.call(null,G__45333));var G__45333__$2 = (((G__45333__$1 == null))?null:G__45333__$1.parents(".search-component"));var G__45333__$3 = (((G__45333__$2 == null))?null:G__45333__$2.toggle());return G__45333__$3;
})},sablono.interpreter.interpret.call(null,self__.name)));
});
clustermap.components.search.t45328.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45330){var self__ = this;
var _45330__$1 = this;return self__.meta45329;
});
clustermap.components.search.t45328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45330,meta45329__$1){var self__ = this;
var _45330__$1 = this;return (new clustermap.components.search.t45328(self__.opts,self__.p__45316,self__.path_fn,self__.p__45317,self__.name,self__.comm,self__.search_result,self__.map__45327,self__.map__45326,self__.owner,self__.type,self__.search_result_link,meta45329__$1));
});
clustermap.components.search.__GT_t45328 = (function __GT_t45328(opts__$1,p__45316__$1,path_fn__$1,p__45317__$1,name__$1,comm__$1,search_result__$1,map__45327__$2,map__45326__$2,owner__$1,type__$1,search_result_link__$1,meta45329){return (new clustermap.components.search.t45328(opts__$1,p__45316__$1,path_fn__$1,p__45317__$1,name__$1,comm__$1,search_result__$1,map__45327__$2,map__45326__$2,owner__$1,type__$1,search_result_link__$1,meta45329));
});
}
return (new clustermap.components.search.t45328(opts,p__45316,path_fn,p__45317,name,comm,search_result,map__45327__$1,map__45326__$1,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__45334,n){var map__45336 = p__45334;var map__45336__$1 = ((cljs.core.seq_QMARK_.call(null,map__45336))?cljs.core.apply.call(null,cljs.core.hash_map,map__45336):map__45336);var investor_companies = cljs.core.get.call(null,map__45336__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__45336__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__45336__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__45343 = cljs.core._EQ__EQ_;var expr__45344 = e.keyCode;if(cljs.core.truth_(pred__45343.call(null,clustermap.components.search.ESCAPE_KEY,expr__45344)))
{var G__45346 = om.core.get_node.call(null,owner,"search-component");var G__45346__$1 = (((G__45346 == null))?null:jayq.core.$.call(null,G__45346));var G__45346__$2 = (((G__45346__$1 == null))?null:G__45346__$1.toggle());return G__45346__$2;
} else
{if(cljs.core.truth_(pred__45343.call(null,clustermap.components.search.ENTER_KEY,expr__45344)))
{var vec__45347 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__45347,0,null);var res = cljs.core.nth.call(null,vec__45347,1,null);var G__45348_45349 = om.core.get_node.call(null,owner,"search-component");var G__45348_45350__$1 = (((G__45348_45349 == null))?null:jayq.core.$.call(null,G__45348_45349));var G__45348_45351__$2 = (((G__45348_45350__$1 == null))?null:G__45348_45350__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__45343.call(null,clustermap.components.search.UP_ARROW,expr__45344)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__45343.call(null,clustermap.components.search.DOWN_ARROW,expr__45344)))
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
clustermap.components.search.search_component = (function search_component(p__45352,owner){var map__45384 = p__45352;var map__45384__$1 = ((cljs.core.seq_QMARK_.call(null,map__45384))?cljs.core.apply.call(null,cljs.core.hash_map,map__45384):map__45384);var map__45385 = cljs.core.get.call(null,map__45384__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__45385__$1 = ((cljs.core.seq_QMARK_.call(null,map__45385))?cljs.core.apply.call(null,cljs.core.hash_map,map__45385):map__45385);var selection_type = cljs.core.get.call(null,map__45385__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__45385__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__45384__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__45384__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__45386 = om.core.get_shared.call(null,owner);var map__45386__$1 = ((cljs.core.seq_QMARK_.call(null,map__45386))?cljs.core.apply.call(null,cljs.core.hash_map,map__45386):map__45386);var path_fn = cljs.core.get.call(null,map__45386__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__45386__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__45387 = search_results;var map__45387__$1 = ((cljs.core.seq_QMARK_.call(null,map__45387))?cljs.core.apply.call(null,cljs.core.hash_map,map__45387):map__45387);var investor_companies = cljs.core.get.call(null,map__45387__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__45387__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__45387__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t45388 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t45388 = (function (investor_companies,selection_value,path_fn,portfolio_companies,view,search_component,map__45386,map__45387,map__45385,map__45384,comm,selection_type,owner,constituencies,search_results,p__45352,meta45389){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.view = view;
this.search_component = search_component;
this.map__45386 = map__45386;
this.map__45387 = map__45387;
this.map__45385 = map__45385;
this.map__45384 = map__45384;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.p__45352 = p__45352;
this.meta45389 = meta45389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t45388.cljs$lang$type = true;
clustermap.components.search.t45388.cljs$lang$ctorStr = "clustermap.components.search/t45388";
clustermap.components.search.t45388.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t45388");
});
clustermap.components.search.t45388.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t45388.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__45391(s__45392){return (new cljs.core.LazySeq(null,(function (){var s__45392__$1 = s__45392;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45392__$1);if(temp__4092__auto__)
{var s__45392__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45392__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45392__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45394 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45393 = 0;while(true){
if((i__45393 < size__4157__auto__))
{var vec__45397 = cljs.core._nth.call(null,c__4156__auto__,i__45393);var idx = cljs.core.nth.call(null,vec__45397,0,null);var con = cljs.core.nth.call(null,vec__45397,1,null);cljs.core.chunk_append.call(null,b__45394,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45393,vec__45397,idx,con,c__4156__auto__,size__4157__auto__,b__45394,s__45392__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__45393,vec__45397,idx,con,c__4156__auto__,size__4157__auto__,b__45394,s__45392__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45415 = (i__45393 + 1);
i__45393 = G__45415;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45394),iter__45391.call(null,cljs.core.chunk_rest.call(null,s__45392__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45394),null);
}
} else
{var vec__45398 = cljs.core.first.call(null,s__45392__$2);var idx = cljs.core.nth.call(null,vec__45398,0,null);var con = cljs.core.nth.call(null,vec__45398,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45398,idx,con,s__45392__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__45398,idx,con,s__45392__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45391.call(null,cljs.core.rest.call(null,s__45392__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__45399(s__45400){return (new cljs.core.LazySeq(null,(function (){var s__45400__$1 = s__45400;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45400__$1);if(temp__4092__auto__)
{var s__45400__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45400__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45400__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45402 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45401 = 0;while(true){
if((i__45401 < size__4157__auto__))
{var vec__45405 = cljs.core._nth.call(null,c__4156__auto__,i__45401);var idx = cljs.core.nth.call(null,vec__45405,0,null);var pc = cljs.core.nth.call(null,vec__45405,1,null);cljs.core.chunk_append.call(null,b__45402,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45401,vec__45405,idx,pc,c__4156__auto__,size__4157__auto__,b__45402,s__45400__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__45401,vec__45405,idx,pc,c__4156__auto__,size__4157__auto__,b__45402,s__45400__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45416 = (i__45401 + 1);
i__45401 = G__45416;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45402),iter__45399.call(null,cljs.core.chunk_rest.call(null,s__45400__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45402),null);
}
} else
{var vec__45406 = cljs.core.first.call(null,s__45400__$2);var idx = cljs.core.nth.call(null,vec__45406,0,null);var pc = cljs.core.nth.call(null,vec__45406,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45406,idx,pc,s__45400__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__45406,idx,pc,s__45400__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45399.call(null,cljs.core.rest.call(null,s__45400__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__45407(s__45408){return (new cljs.core.LazySeq(null,(function (){var s__45408__$1 = s__45408;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__45408__$1);if(temp__4092__auto__)
{var s__45408__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__45408__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__45408__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__45410 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__45409 = 0;while(true){
if((i__45409 < size__4157__auto__))
{var vec__45413 = cljs.core._nth.call(null,c__4156__auto__,i__45409);var idx = cljs.core.nth.call(null,vec__45413,0,null);var inv = cljs.core.nth.call(null,vec__45413,1,null);cljs.core.chunk_append.call(null,b__45410,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__45409,vec__45413,idx,inv,c__4156__auto__,size__4157__auto__,b__45410,s__45408__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__45409,vec__45413,idx,inv,c__4156__auto__,size__4157__auto__,b__45410,s__45408__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__45417 = (i__45409 + 1);
i__45409 = G__45417;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45410),iter__45407.call(null,cljs.core.chunk_rest.call(null,s__45408__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45410),null);
}
} else
{var vec__45414 = cljs.core.first.call(null,s__45408__$2);var idx = cljs.core.nth.call(null,vec__45414,0,null);var inv = cljs.core.nth.call(null,vec__45414,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__45414,idx,inv,s__45408__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__45414,idx,inv,s__45408__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__45407.call(null,cljs.core.rest.call(null,s__45408__$2)));
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
clustermap.components.search.t45388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45390){var self__ = this;
var _45390__$1 = this;return self__.meta45389;
});
clustermap.components.search.t45388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45390,meta45389__$1){var self__ = this;
var _45390__$1 = this;return (new clustermap.components.search.t45388(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.view,self__.search_component,self__.map__45386,self__.map__45387,self__.map__45385,self__.map__45384,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,self__.p__45352,meta45389__$1));
});
clustermap.components.search.__GT_t45388 = (function __GT_t45388(investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,map__45386__$2,map__45387__$2,map__45385__$2,map__45384__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,p__45352__$1,meta45389){return (new clustermap.components.search.t45388(investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,map__45386__$2,map__45387__$2,map__45385__$2,map__45384__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,p__45352__$1,meta45389));
});
}
return (new clustermap.components.search.t45388(investor_companies,selection_value,path_fn__$1,portfolio_companies,view,search_component,map__45386__$1,map__45387__$1,map__45385__$1,map__45384__$1,comm,selection_type,owner,constituencies,search_results,p__45352,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
