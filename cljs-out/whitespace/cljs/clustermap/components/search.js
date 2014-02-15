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
goog.require('om.dom');
goog.require('om.core');
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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__33082){var map__33088 = p__33082;var map__33088__$1 = ((cljs.core.seq_QMARK_.call(null,map__33088))?cljs.core.apply.call(null,cljs.core.hash_map,map__33088):map__33088);var opts = map__33088__$1;var path_fn = cljs.core.get.call(null,map__33088__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var type = cljs.core.get.call(null,map__33088__$1,new cljs.core.Keyword(null,"type","type",1017479852));var comm = cljs.core.get.call(null,map__33088__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t33089 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33089 = (function (comm,type,path_fn,opts,map__33088,p__33082,owner,search_result,search_result_link,meta33090){
this.comm = comm;
this.type = type;
this.path_fn = path_fn;
this.opts = opts;
this.map__33088 = map__33088;
this.p__33082 = p__33082;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta33090 = meta33090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33089.cljs$lang$type = true;
clustermap.components.search.t33089.cljs$lang$ctorStr = "clustermap.components.search/t33089";
clustermap.components.search.t33089.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33089");
});
clustermap.components.search.t33089.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33089.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__33092 = l;var G__33092__$1 = (((G__33092 == null))?null:jayq.core.$.call(null,G__33092));var G__33092__$2 = (((G__33092__$1 == null))?null:G__33092__$1.parents(".search-component"));var G__33092__$3 = (((G__33092__$2 == null))?null:G__33092__$2.toggle());return G__33092__$3;
})},sablono.interpreter.interpret.call(null,self__.search_result.call(null,new cljs.core.Keyword(null,"name","name",1017277949))),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t33089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33091){var self__ = this;
var _33091__$1 = this;return self__.meta33090;
});
clustermap.components.search.t33089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33091,meta33090__$1){var self__ = this;
var _33091__$1 = this;return (new clustermap.components.search.t33089(self__.comm,self__.type,self__.path_fn,self__.opts,self__.map__33088,self__.p__33082,self__.owner,self__.search_result,self__.search_result_link,meta33090__$1));
});
clustermap.components.search.__GT_t33089 = (function __GT_t33089(comm__$1,type__$1,path_fn__$1,opts__$1,map__33088__$2,p__33082__$1,owner__$1,search_result__$1,search_result_link__$1,meta33090){return (new clustermap.components.search.t33089(comm__$1,type__$1,path_fn__$1,opts__$1,map__33088__$2,p__33082__$1,owner__$1,search_result__$1,search_result_link__$1,meta33090));
});
}
return (new clustermap.components.search.t33089(comm,type,path_fn,opts,map__33088__$1,p__33082,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__33093,n){var map__33095 = p__33093;var map__33095__$1 = ((cljs.core.seq_QMARK_.call(null,map__33095))?cljs.core.apply.call(null,cljs.core.hash_map,map__33095):map__33095);var investor_companies = cljs.core.get.call(null,map__33095__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33095__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33095__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__33102 = cljs.core._EQ__EQ_;var expr__33103 = e.keyCode;if(cljs.core.truth_(pred__33102.call(null,clustermap.components.search.ESCAPE_KEY,expr__33103)))
{var G__33105 = om.core.get_node.call(null,owner,"search-component");var G__33105__$1 = (((G__33105 == null))?null:jayq.core.$.call(null,G__33105));var G__33105__$2 = (((G__33105__$1 == null))?null:G__33105__$1.toggle());return G__33105__$2;
} else
{if(cljs.core.truth_(pred__33102.call(null,clustermap.components.search.ENTER_KEY,expr__33103)))
{var vec__33106 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__33106,0,null);var res = cljs.core.nth.call(null,vec__33106,1,null);var G__33107_33108 = om.core.get_node.call(null,owner,"search-component");var G__33107_33109__$1 = (((G__33107_33108 == null))?null:jayq.core.$.call(null,G__33107_33108));var G__33107_33110__$2 = (((G__33107_33109__$1 == null))?null:G__33107_33109__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_(pred__33102.call(null,clustermap.components.search.UP_ARROW,expr__33103)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__33102.call(null,clustermap.components.search.DOWN_ARROW,expr__33103)))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var map__33140 = om.core.get_shared.call(null,owner);var map__33140__$1 = ((cljs.core.seq_QMARK_.call(null,map__33140))?cljs.core.apply.call(null,cljs.core.hash_map,map__33140):map__33140);var path_fn = cljs.core.get.call(null,map__33140__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__33140__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__33141 = search_results;var map__33141__$1 = ((cljs.core.seq_QMARK_.call(null,map__33141))?cljs.core.apply.call(null,cljs.core.hash_map,map__33141):map__33141);var investor_companies = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__33141__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t33142 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t33142 = (function (investor_companies,path_fn,portfolio_companies,search_component,comm,owner,constituencies,map__33140,search_results,map__33141,meta33143){
this.investor_companies = investor_companies;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.map__33140 = map__33140;
this.search_results = search_results;
this.map__33141 = map__33141;
this.meta33143 = meta33143;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t33142.cljs$lang$type = true;
clustermap.components.search.t33142.cljs$lang$ctorStr = "clustermap.components.search/t33142";
clustermap.components.search.t33142.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t33142");
});
clustermap.components.search.t33142.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t33142.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.div({"className": "tbl"},React.DOM.div({"style": {"width": "100%"}, "className": "tbl-cell"},om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
}), "placeholder": "Search", "type": "text", "ref": "search-field"})),React.DOM.div({"style": {"width": "34"}, "className": "tbl-cell"},React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
}), "type": "reset"},"\u00D7")),React.DOM.div({"style": {"width": "136"}, "className": "tbl-cell"},React.DOM.button({"type": "reset", "className": "btn-reset"},"Reset to UK wide"))),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.call(null,om.dom.ul,{},cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__33145(s__33146){return (new cljs.core.LazySeq(null,(function (){var s__33146__$1 = s__33146;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33146__$1);if(temp__4092__auto__)
{var s__33146__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33146__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33146__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33148 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33147 = 0;while(true){
if((i__33147 < size__4116__auto__))
{var vec__33151 = cljs.core._nth.call(null,c__4115__auto__,i__33147);var idx = cljs.core.nth.call(null,vec__33151,0,null);var con = cljs.core.nth.call(null,vec__33151,1,null);cljs.core.chunk_append.call(null,b__33148,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33147,vec__33151,idx,con,c__4115__auto__,size__4116__auto__,b__33148,s__33146__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__33147,vec__33151,idx,con,c__4115__auto__,size__4116__auto__,b__33148,s__33146__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33169 = (i__33147 + 1);
i__33147 = G__33169;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33148),iter__33145.call(null,cljs.core.chunk_rest.call(null,s__33146__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33148),null);
}
} else
{var vec__33152 = cljs.core.first.call(null,s__33146__$2);var idx = cljs.core.nth.call(null,vec__33152,0,null);var con = cljs.core.nth.call(null,vec__33152,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33152,idx,con,s__33146__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__33152,idx,con,s__33146__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33145.call(null,cljs.core.rest.call(null,s__33146__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__33153(s__33154){return (new cljs.core.LazySeq(null,(function (){var s__33154__$1 = s__33154;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33154__$1);if(temp__4092__auto__)
{var s__33154__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33154__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33154__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33156 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33155 = 0;while(true){
if((i__33155 < size__4116__auto__))
{var vec__33159 = cljs.core._nth.call(null,c__4115__auto__,i__33155);var idx = cljs.core.nth.call(null,vec__33159,0,null);var pc = cljs.core.nth.call(null,vec__33159,1,null);cljs.core.chunk_append.call(null,b__33156,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33155,vec__33159,idx,pc,c__4115__auto__,size__4116__auto__,b__33156,s__33154__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__33155,vec__33159,idx,pc,c__4115__auto__,size__4116__auto__,b__33156,s__33154__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33170 = (i__33155 + 1);
i__33155 = G__33170;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33156),iter__33153.call(null,cljs.core.chunk_rest.call(null,s__33154__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33156),null);
}
} else
{var vec__33160 = cljs.core.first.call(null,s__33154__$2);var idx = cljs.core.nth.call(null,vec__33160,0,null);var pc = cljs.core.nth.call(null,vec__33160,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33160,idx,pc,s__33154__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__33160,idx,pc,s__33154__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33153.call(null,cljs.core.rest.call(null,s__33154__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__33161(s__33162){return (new cljs.core.LazySeq(null,(function (){var s__33162__$1 = s__33162;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__33162__$1);if(temp__4092__auto__)
{var s__33162__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__33162__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__33162__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__33164 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__33163 = 0;while(true){
if((i__33163 < size__4116__auto__))
{var vec__33167 = cljs.core._nth.call(null,c__4115__auto__,i__33163);var idx = cljs.core.nth.call(null,vec__33167,0,null);var inv = cljs.core.nth.call(null,vec__33167,1,null);cljs.core.chunk_append.call(null,b__33164,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__33163,vec__33167,idx,inv,c__4115__auto__,size__4116__auto__,b__33164,s__33162__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__33163,vec__33167,idx,inv,c__4115__auto__,size__4116__auto__,b__33164,s__33162__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__33171 = (i__33163 + 1);
i__33163 = G__33171;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33164),iter__33161.call(null,cljs.core.chunk_rest.call(null,s__33162__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33164),null);
}
} else
{var vec__33168 = cljs.core.first.call(null,s__33162__$2);var idx = cljs.core.nth.call(null,vec__33168,0,null);var inv = cljs.core.nth.call(null,vec__33168,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__33168,idx,inv,s__33162__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__33168,idx,inv,s__33162__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__33161.call(null,cljs.core.rest.call(null,s__33162__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_invs);
})()):null))));
})():null));
});
clustermap.components.search.t33142.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33144){var self__ = this;
var _33144__$1 = this;return self__.meta33143;
});
clustermap.components.search.t33142.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33144,meta33143__$1){var self__ = this;
var _33144__$1 = this;return (new clustermap.components.search.t33142(self__.investor_companies,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.owner,self__.constituencies,self__.map__33140,self__.search_results,self__.map__33141,meta33143__$1));
});
clustermap.components.search.__GT_t33142 = (function __GT_t33142(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,owner__$1,constituencies__$1,map__33140__$2,search_results__$1,map__33141__$2,meta33143){return (new clustermap.components.search.t33142(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,owner__$1,constituencies__$1,map__33140__$2,search_results__$1,map__33141__$2,meta33143));
});
}
return (new clustermap.components.search.t33142(investor_companies,path_fn,portfolio_companies,search_component,comm,owner,constituencies,map__33140__$1,search_results,map__33141__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});
