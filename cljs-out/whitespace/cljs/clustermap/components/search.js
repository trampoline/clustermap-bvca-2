// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('sablono.core');
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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__32222){var map__32228 = p__32222;var map__32228__$1 = ((cljs.core.seq_QMARK_.call(null,map__32228))?cljs.core.apply.call(null,cljs.core.hash_map,map__32228):map__32228);var opts = map__32228__$1;var type = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"type","type",1017479852));var comm = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t32229 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t32229 = (function (comm,type,opts,map__32228,p__32222,owner,search_result,search_result_link,meta32230){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__32228 = map__32228;
this.p__32222 = p__32222;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta32230 = meta32230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t32229.cljs$lang$type = true;
clustermap.components.search.t32229.cljs$lang$ctorStr = "clustermap.components.search/t32229";
clustermap.components.search.t32229.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t32229");
});
clustermap.components.search.t32229.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t32229.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__32232_32233 = l;var G__32232_32234__$1 = (((G__32232_32233 == null))?null:jayq.core.$.call(null,G__32232_32233));var G__32232_32235__$2 = (((G__32232_32234__$1 == null))?null:G__32232_32234__$1.parents(".search-component"));var G__32232_32236__$3 = (((G__32232_32235__$2 == null))?null:G__32232_32235__$2.toggle());return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref.call(null,self__.search_result)], null)], null));
})},sablono.interpreter.interpret.call(null,self__.search_result.call(null,new cljs.core.Keyword(null,"name","name",1017277949))),(cljs.core.truth_(new cljs.core.Keyword(null,"selected","selected",2205476365).cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t32229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32231){var self__ = this;
var _32231__$1 = this;return self__.meta32230;
});
clustermap.components.search.t32229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32231,meta32230__$1){var self__ = this;
var _32231__$1 = this;return (new clustermap.components.search.t32229(self__.comm,self__.type,self__.opts,self__.map__32228,self__.p__32222,self__.owner,self__.search_result,self__.search_result_link,meta32230__$1));
});
clustermap.components.search.__GT_t32229 = (function __GT_t32229(comm__$1,type__$1,opts__$1,map__32228__$2,p__32222__$1,owner__$1,search_result__$1,search_result_link__$1,meta32230){return (new clustermap.components.search.t32229(comm__$1,type__$1,opts__$1,map__32228__$2,p__32222__$1,owner__$1,search_result__$1,search_result_link__$1,meta32230));
});
}
return (new clustermap.components.search.t32229(comm,type,opts,map__32228__$1,p__32222,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__32237,n){var map__32239 = p__32237;var map__32239__$1 = ((cljs.core.seq_QMARK_.call(null,map__32239))?cljs.core.apply.call(null,cljs.core.hash_map,map__32239):map__32239);var investor_companies = cljs.core.get.call(null,map__32239__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__32239__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__32239__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__32246 = cljs.core._EQ__EQ_;var expr__32247 = e.keyCode;if(cljs.core.truth_(pred__32246.call(null,clustermap.components.search.ESCAPE_KEY,expr__32247)))
{var G__32249 = om.core.get_node.call(null,owner,"search-component");var G__32249__$1 = (((G__32249 == null))?null:jayq.core.$.call(null,G__32249));var G__32249__$2 = (((G__32249__$1 == null))?null:G__32249__$1.toggle());return G__32249__$2;
} else
{if(cljs.core.truth_(pred__32246.call(null,clustermap.components.search.ENTER_KEY,expr__32247)))
{var vec__32250 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__32250,0,null);var res = cljs.core.nth.call(null,vec__32250,1,null);var G__32251_32252 = om.core.get_node.call(null,owner,"search-component");var G__32251_32253__$1 = (((G__32251_32252 == null))?null:jayq.core.$.call(null,G__32251_32252));var G__32251_32254__$2 = (((G__32251_32253__$1 == null))?null:G__32251_32253__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_(pred__32246.call(null,clustermap.components.search.UP_ARROW,expr__32247)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3406__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__32246.call(null,clustermap.components.search.DOWN_ARROW,expr__32247)))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var map__32283 = search_results;var map__32283__$1 = ((cljs.core.seq_QMARK_.call(null,map__32283))?cljs.core.apply.call(null,cljs.core.hash_map,map__32283):map__32283);var investor_companies = cljs.core.get.call(null,map__32283__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__32283__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__32283__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t32284 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t32284 = (function (constituencies,portfolio_companies,investor_companies,map__32283,comm,owner,search_results,search_component,meta32285){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__32283 = map__32283;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta32285 = meta32285;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t32284.cljs$lang$type = true;
clustermap.components.search.t32284.cljs$lang$ctorStr = "clustermap.components.search/t32284";
clustermap.components.search.t32284.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.search/t32284");
});
clustermap.components.search.t32284.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t32284.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
}), "type": "reset"},"\u00D7")),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.call(null,om.dom.ul,{},cljs.core.concat.call(null,(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__32287(s__32288){return (new cljs.core.LazySeq(null,(function (){var s__32288__$1 = s__32288;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32288__$1);if(temp__4092__auto__)
{var s__32288__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32288__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__32288__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__32290 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__32289 = 0;while(true){
if((i__32289 < size__4116__auto__))
{var vec__32293 = cljs.core._nth.call(null,c__4115__auto__,i__32289);var idx = cljs.core.nth.call(null,vec__32293,0,null);var con = cljs.core.nth.call(null,vec__32293,1,null);cljs.core.chunk_append.call(null,b__32290,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__32289,vec__32293,idx,con,c__4115__auto__,size__4116__auto__,b__32290,s__32288__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__32289,vec__32293,idx,con,c__4115__auto__,size__4116__auto__,b__32290,s__32288__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__32311 = (i__32289 + 1);
i__32289 = G__32311;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32290),iter__32287.call(null,cljs.core.chunk_rest.call(null,s__32288__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32290),null);
}
} else
{var vec__32294 = cljs.core.first.call(null,s__32288__$2);var idx = cljs.core.nth.call(null,vec__32294,0,null);var con = cljs.core.nth.call(null,vec__32294,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__32294,idx,con,s__32288__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__32294,idx,con,s__32288__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__32287.call(null,cljs.core.rest.call(null,s__32288__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__32295(s__32296){return (new cljs.core.LazySeq(null,(function (){var s__32296__$1 = s__32296;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32296__$1);if(temp__4092__auto__)
{var s__32296__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32296__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__32296__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__32298 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__32297 = 0;while(true){
if((i__32297 < size__4116__auto__))
{var vec__32301 = cljs.core._nth.call(null,c__4115__auto__,i__32297);var idx = cljs.core.nth.call(null,vec__32301,0,null);var pc = cljs.core.nth.call(null,vec__32301,1,null);cljs.core.chunk_append.call(null,b__32298,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__32297,vec__32301,idx,pc,c__4115__auto__,size__4116__auto__,b__32298,s__32296__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__32297,vec__32301,idx,pc,c__4115__auto__,size__4116__auto__,b__32298,s__32296__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__32312 = (i__32297 + 1);
i__32297 = G__32312;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32298),iter__32295.call(null,cljs.core.chunk_rest.call(null,s__32296__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32298),null);
}
} else
{var vec__32302 = cljs.core.first.call(null,s__32296__$2);var idx = cljs.core.nth.call(null,vec__32302,0,null);var pc = cljs.core.nth.call(null,vec__32302,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__32302,idx,pc,s__32296__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__32302,idx,pc,s__32296__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__32295.call(null,cljs.core.rest.call(null,s__32296__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__32303(s__32304){return (new cljs.core.LazySeq(null,(function (){var s__32304__$1 = s__32304;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__32304__$1);if(temp__4092__auto__)
{var s__32304__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32304__$2))
{var c__4115__auto__ = cljs.core.chunk_first.call(null,s__32304__$2);var size__4116__auto__ = cljs.core.count.call(null,c__4115__auto__);var b__32306 = cljs.core.chunk_buffer.call(null,size__4116__auto__);if((function (){var i__32305 = 0;while(true){
if((i__32305 < size__4116__auto__))
{var vec__32309 = cljs.core._nth.call(null,c__4115__auto__,i__32305);var idx = cljs.core.nth.call(null,vec__32309,0,null);var inv = cljs.core.nth.call(null,vec__32309,1,null);cljs.core.chunk_append.call(null,b__32306,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__32305,vec__32309,idx,inv,c__4115__auto__,size__4116__auto__,b__32306,s__32304__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__32305,vec__32309,idx,inv,c__4115__auto__,size__4116__auto__,b__32306,s__32304__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__32313 = (i__32305 + 1);
i__32305 = G__32313;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32306),iter__32303.call(null,cljs.core.chunk_rest.call(null,s__32304__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32306),null);
}
} else
{var vec__32310 = cljs.core.first.call(null,s__32304__$2);var idx = cljs.core.nth.call(null,vec__32310,0,null);var inv = cljs.core.nth.call(null,vec__32310,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762)], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__32310,idx,inv,s__32304__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__32310,idx,inv,s__32304__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__32303.call(null,cljs.core.rest.call(null,s__32304__$2)));
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
clustermap.components.search.t32284.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32286){var self__ = this;
var _32286__$1 = this;return self__.meta32285;
});
clustermap.components.search.t32284.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32286,meta32285__$1){var self__ = this;
var _32286__$1 = this;return (new clustermap.components.search.t32284(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__32283,self__.comm,self__.owner,self__.search_results,self__.search_component,meta32285__$1));
});
clustermap.components.search.__GT_t32284 = (function __GT_t32284(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__32283__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta32285){return (new clustermap.components.search.t32284(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__32283__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta32285));
});
}
return (new clustermap.components.search.t32284(constituencies,portfolio_companies,investor_companies,map__32283__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.om.burrow.call(null,clustermap.components.search.search_component,new cljs.core.Keyword(null,"search-results","search-results",1025331267)),document.getElementById(elem_id));
});
