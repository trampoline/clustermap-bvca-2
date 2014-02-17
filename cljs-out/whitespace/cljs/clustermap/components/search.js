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
clustermap.components.search.search_result_link = (function search_result_link(p__33254,owner,p__33255){var map__33264 = p__33254;var map__33264__$1 = ((cljs.core.seq_QMARK_.call(null,map__33264))?cljs.core.apply.call(null,cljs.core.hash_map,map__33264):map__33264);var search_result = map__33264__$1;var type = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__33264__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__33265 = p__33255;var map__33265__$1 = ((cljs.core.seq_QMARK_.call(null,map__33265))?cljs.core.apply.call(null,cljs.core.hash_map,map__33265):map__33265);var opts = map__33265__$1;var path_fn = cljs.core.get.call(null,map__33265__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33265__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t33266 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33266 = (function (p__33254,opts,p__33255,path_fn,name,comm,search_result,owner,map__33264,map__33265,type,search_result_link,meta33267){
this.p__33254 = p__33254;
this.opts = opts;
this.p__33255 = p__33255;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.map__33264 = map__33264;
this.map__33265 = map__33265;
this.type = type;
this.search_result_link = search_result_link;
this.meta33267 = meta33267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33266.cljs$lang$type = true;
clustermap.components.search.t33266.cljs$lang$ctorStr = "clustermap.components.search/t33266";
clustermap.components.search.t33266.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33266");
});
clustermap.components.search.t33266.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33266.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__33269){var self__ = this;
var map__33270 = p__33269;var map__33270__$1 = ((cljs.core.seq_QMARK_.call(null,map__33270))?cljs.core.apply.call(null,cljs.core.hash_map,map__33270):map__33270);var state = map__33270__$1;var selected = cljs.core.get.call(null,map__33270__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__33271 = l;var G__33271__$1 = (((G__33271 == null))?null:jayq.core.$.call(null,G__33271));var G__33271__$2 = (((G__33271__$1 == null))?null:G__33271__$1.parents(".search-component"));var G__33271__$3 = (((G__33271__$2 == null))?null:G__33271__$2.toggle());return G__33271__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t33266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33268){var self__ = this;
var _33268__$1 = this;return self__.meta33267;
});
clustermap.components.search.t33266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33268,meta33267__$1){var self__ = this;
var _33268__$1 = this;return (new clustermap.components.search.t33266(self__.p__33254,self__.opts,self__.p__33255,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.map__33264,self__.map__33265,self__.type,self__.search_result_link,meta33267__$1));
});
clustermap.components.search.__GT_t33266 = (function __GT_t33266(p__33254__$1,opts__$1,p__33255__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__33264__$2,map__33265__$2,type__$1,search_result_link__$1,meta33267){return (new clustermap.components.search.t33266(p__33254__$1,opts__$1,p__33255__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,map__33264__$2,map__33265__$2,type__$1,search_result_link__$1,meta33267));
});
}
return (new clustermap.components.search.t33266(p__33254,opts,p__33255,path_fn,name,comm,search_result,owner,map__33264__$1,map__33265__$1,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__33272,n){var map__33274 = p__33272;var map__33274__$1 = ((cljs.core.seq_QMARK_.call(null,map__33274))?cljs.core.apply.call(null,cljs.core.hash_map,map__33274):map__33274);var investor_companies = cljs.core.get.call(null,map__33274__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33274__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33274__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__33281 = cljs.core._EQ__EQ_;var expr__33282 = e.keyCode;if(cljs.core.truth_(pred__33281.call(null,clustermap.components.search.ESCAPE_KEY,expr__33282)))
{var G__33284 = om.core.get_node.call(null,owner,"search-component");var G__33284__$1 = (((G__33284 == null))?null:jayq.core.$.call(null,G__33284));var G__33284__$2 = (((G__33284__$1 == null))?null:G__33284__$1.toggle());return G__33284__$2;
} else
{if(cljs.core.truth_(pred__33281.call(null,clustermap.components.search.ENTER_KEY,expr__33282)))
{var vec__33285 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__33285,0,null);var res = cljs.core.nth.call(null,vec__33285,1,null);var G__33286_33287 = om.core.get_node.call(null,owner,"search-component");var G__33286_33288__$1 = (((G__33286_33287 == null))?null:jayq.core.$.call(null,G__33286_33287));var G__33286_33289__$2 = (((G__33286_33288__$1 == null))?null:G__33286_33288__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__33281.call(null,clustermap.components.search.UP_ARROW,expr__33282)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__33281.call(null,clustermap.components.search.DOWN_ARROW,expr__33282)))
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
clustermap.components.search.search_component = (function search_component(p__33290,owner){var map__33322 = p__33290;var map__33322__$1 = ((cljs.core.seq_QMARK_.call(null,map__33322))?cljs.core.apply.call(null,cljs.core.hash_map,map__33322):map__33322);var map__33323 = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__33323__$1 = ((cljs.core.seq_QMARK_.call(null,map__33323))?cljs.core.apply.call(null,cljs.core.hash_map,map__33323):map__33323);var selection_type = cljs.core.get.call(null,map__33323__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__33323__$1,new cljs.core.Keyword(null,"value","value",1125876963));var search_results = cljs.core.get.call(null,map__33322__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__33324 = om.core.get_shared.call(null,owner);var map__33324__$1 = ((cljs.core.seq_QMARK_.call(null,map__33324))?cljs.core.apply.call(null,cljs.core.hash_map,map__33324):map__33324);var path_fn = cljs.core.get.call(null,map__33324__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33324__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__33325 = search_results;var map__33325__$1 = ((cljs.core.seq_QMARK_.call(null,map__33325))?cljs.core.apply.call(null,cljs.core.hash_map,map__33325):map__33325);var investor_companies = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33325__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t33326 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33326 = (function (investor_companies,selection_value,map__33325,path_fn,map__33324,p__33290,portfolio_companies,map__33323,search_component,map__33322,comm,selection_type,owner,constituencies,search_results,meta33327){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.map__33325 = map__33325;
this.path_fn = path_fn;
this.map__33324 = map__33324;
this.p__33290 = p__33290;
this.portfolio_companies = portfolio_companies;
this.map__33323 = map__33323;
this.search_component = search_component;
this.map__33322 = map__33322;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta33327 = meta33327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33326.cljs$lang$type = true;
clustermap.components.search.t33326.cljs$lang$ctorStr = "clustermap.components.search/t33326";
clustermap.components.search.t33326.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33326");
});
clustermap.components.search.t33326.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33326.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__33329(s__33330){return (new cljs.core.LazySeq(null,(function (){var s__33330__$1 = s__33330;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33330__$1);if(temp__4092__auto__)
{var s__33330__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33330__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33330__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33332 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33331 = 0;while(true){
if((i__33331 < size__4116__auto__))
{var vec__33335 = cljs.core._nth.call(null,c__4115__auto__,i__33331);var idx = cljs.core.nth.call(null,vec__33335,0,null);var con = cljs.core.nth.call(null,vec__33335,1,null);cljs.core.chunk_append.call(null,b__33332,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33331,vec__33335,idx,con,c__4115__auto__,size__4116__auto__,b__33332,s__33330__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__33331,vec__33335,idx,con,c__4115__auto__,size__4116__auto__,b__33332,s__33330__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33353 = (i__33331 + 1);
i__33331 = G__33353;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33332),iter__33329.call(null,cljs.core.chunk_rest.call(null,s__33330__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33332),null);
}
} else
{var vec__33336 = cljs.core.first.call(null,s__33330__$2);var idx = cljs.core.nth.call(null,vec__33336,0,null);var con = cljs.core.nth.call(null,vec__33336,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33336,idx,con,s__33330__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__33336,idx,con,s__33330__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33329.call(null,cljs.core.rest.call(null,s__33330__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__33337(s__33338){return (new cljs.core.LazySeq(null,(function (){var s__33338__$1 = s__33338;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33338__$1);if(temp__4092__auto__)
{var s__33338__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33338__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33338__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33340 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33339 = 0;while(true){
if((i__33339 < size__4116__auto__))
{var vec__33343 = cljs.core._nth.call(null,c__4115__auto__,i__33339);var idx = cljs.core.nth.call(null,vec__33343,0,null);var pc = cljs.core.nth.call(null,vec__33343,1,null);cljs.core.chunk_append.call(null,b__33340,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33339,vec__33343,idx,pc,c__4115__auto__,size__4116__auto__,b__33340,s__33338__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__33339,vec__33343,idx,pc,c__4115__auto__,size__4116__auto__,b__33340,s__33338__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33354 = (i__33339 + 1);
i__33339 = G__33354;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33340),iter__33337.call(null,cljs.core.chunk_rest.call(null,s__33338__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33340),null);
}
} else
{var vec__33344 = cljs.core.first.call(null,s__33338__$2);var idx = cljs.core.nth.call(null,vec__33344,0,null);var pc = cljs.core.nth.call(null,vec__33344,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33344,idx,pc,s__33338__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__33344,idx,pc,s__33338__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33337.call(null,cljs.core.rest.call(null,s__33338__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__33345(s__33346){return (new cljs.core.LazySeq(null,(function (){var s__33346__$1 = s__33346;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33346__$1);if(temp__4092__auto__)
{var s__33346__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33346__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33346__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33348 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33347 = 0;while(true){
if((i__33347 < size__4116__auto__))
{var vec__33351 = cljs.core._nth.call(null,c__4115__auto__,i__33347);var idx = cljs.core.nth.call(null,vec__33351,0,null);var inv = cljs.core.nth.call(null,vec__33351,1,null);cljs.core.chunk_append.call(null,b__33348,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33347,vec__33351,idx,inv,c__4115__auto__,size__4116__auto__,b__33348,s__33346__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__33347,vec__33351,idx,inv,c__4115__auto__,size__4116__auto__,b__33348,s__33346__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33355 = (i__33347 + 1);
i__33347 = G__33355;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33348),iter__33345.call(null,cljs.core.chunk_rest.call(null,s__33346__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33348),null);
}
} else
{var vec__33352 = cljs.core.first.call(null,s__33346__$2);var idx = cljs.core.nth.call(null,vec__33352,0,null);var inv = cljs.core.nth.call(null,vec__33352,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33352,idx,inv,s__33346__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__33352,idx,inv,s__33346__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33345.call(null,cljs.core.rest.call(null,s__33346__$2)));
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
clustermap.components.search.t33326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33328){var self__ = this;
var _33328__$1 = this;return self__.meta33327;
});
clustermap.components.search.t33326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33328,meta33327__$1){var self__ = this;
var _33328__$1 = this;return (new clustermap.components.search.t33326(self__.investor_companies,self__.selection_value,self__.map__33325,self__.path_fn,self__.map__33324,self__.p__33290,self__.portfolio_companies,self__.map__33323,self__.search_component,self__.map__33322,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,meta33327__$1));
});
clustermap.components.search.__GT_t33326 = (function __GT_t33326(investor_companies__$1,selection_value__$1,map__33325__$2,path_fn__$1,map__33324__$2,p__33290__$1,portfolio_companies__$1,map__33323__$2,search_component__$1,map__33322__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta33327){return (new clustermap.components.search.t33326(investor_companies__$1,selection_value__$1,map__33325__$2,path_fn__$1,map__33324__$2,p__33290__$1,portfolio_companies__$1,map__33323__$2,search_component__$1,map__33322__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta33327));
});
}
return (new clustermap.components.search.t33326(investor_companies,selection_value,map__33325__$1,path_fn,map__33324__$1,p__33290,portfolio_companies,map__33323__$1,search_component,map__33322__$1,comm,selection_type,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
