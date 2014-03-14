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
clustermap.components.search.search_result_link = (function search_result_link(p__23620,owner,p__23621){var map__23630 = p__23620;var map__23630__$1 = ((cljs.core.seq_QMARK_.call(null,map__23630))?cljs.core.apply.call(null,cljs.core.hash_map,map__23630):map__23630);var search_result = map__23630__$1;var type = cljs.core.get.call(null,map__23630__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__23630__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__23631 = p__23621;var map__23631__$1 = ((cljs.core.seq_QMARK_.call(null,map__23631))?cljs.core.apply.call(null,cljs.core.hash_map,map__23631):map__23631);var opts = map__23631__$1;var path_fn = cljs.core.get.call(null,map__23631__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23631__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t23632 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23632 = (function (map__23630,map__23631,opts,path_fn,p__23620,p__23621,name,comm,search_result,owner,type,search_result_link,meta23633){
this.map__23630 = map__23630;
this.map__23631 = map__23631;
this.opts = opts;
this.path_fn = path_fn;
this.p__23620 = p__23620;
this.p__23621 = p__23621;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta23633 = meta23633;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23632.cljs$lang$type = true;
clustermap.components.search.t23632.cljs$lang$ctorStr = "clustermap.components.search/t23632";
clustermap.components.search.t23632.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t23632");
});
clustermap.components.search.t23632.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23632.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23635){var self__ = this;
var map__23636 = p__23635;var map__23636__$1 = ((cljs.core.seq_QMARK_.call(null,map__23636))?cljs.core.apply.call(null,cljs.core.hash_map,map__23636):map__23636);var state = map__23636__$1;var selected = cljs.core.get.call(null,map__23636__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__23637 = l;var G__23637__$1 = (((G__23637 == null))?null:jayq.core.$.call(null,G__23637));var G__23637__$2 = (((G__23637__$1 == null))?null:G__23637__$1.parents(".search-component"));var G__23637__$3 = (((G__23637__$2 == null))?null:G__23637__$2.toggle());return G__23637__$3;
})},sablono.interpreter.interpret.call(null,self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t23632.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23634){var self__ = this;
var _23634__$1 = this;return self__.meta23633;
});
clustermap.components.search.t23632.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23634,meta23633__$1){var self__ = this;
var _23634__$1 = this;return (new clustermap.components.search.t23632(self__.map__23630,self__.map__23631,self__.opts,self__.path_fn,self__.p__23620,self__.p__23621,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta23633__$1));
});
clustermap.components.search.__GT_t23632 = (function __GT_t23632(map__23630__$2,map__23631__$2,opts__$1,path_fn__$1,p__23620__$1,p__23621__$1,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta23633){return (new clustermap.components.search.t23632(map__23630__$2,map__23631__$2,opts__$1,path_fn__$1,p__23620__$1,p__23621__$1,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta23633));
});
}
return (new clustermap.components.search.t23632(map__23630__$1,map__23631__$1,opts,path_fn,p__23620,p__23621,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__23638,n){var map__23640 = p__23638;var map__23640__$1 = ((cljs.core.seq_QMARK_.call(null,map__23640))?cljs.core.apply.call(null,cljs.core.hash_map,map__23640):map__23640);var investor_companies = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__23640__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__23647 = cljs.core._EQ__EQ_;var expr__23648 = e.keyCode;if(cljs.core.truth_(pred__23647.call(null,clustermap.components.search.ESCAPE_KEY,expr__23648)))
{var G__23650 = om.core.get_node.call(null,owner,"search-component");var G__23650__$1 = (((G__23650 == null))?null:jayq.core.$.call(null,G__23650));var G__23650__$2 = (((G__23650__$1 == null))?null:G__23650__$1.toggle());return G__23650__$2;
} else
{if(cljs.core.truth_(pred__23647.call(null,clustermap.components.search.ENTER_KEY,expr__23648)))
{var vec__23651 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__23651,0,null);var res = cljs.core.nth.call(null,vec__23651,1,null);var G__23652_23653 = om.core.get_node.call(null,owner,"search-component");var G__23652_23654__$1 = (((G__23652_23653 == null))?null:jayq.core.$.call(null,G__23652_23653));var G__23652_23655__$2 = (((G__23652_23654__$1 == null))?null:G__23652_23654__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__23647.call(null,clustermap.components.search.UP_ARROW,expr__23648)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3441__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__23647.call(null,clustermap.components.search.DOWN_ARROW,expr__23648)))
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
clustermap.components.search.search_component = (function search_component(p__23656,owner){var map__23688 = p__23656;var map__23688__$1 = ((cljs.core.seq_QMARK_.call(null,map__23688))?cljs.core.apply.call(null,cljs.core.hash_map,map__23688):map__23688);var map__23689 = cljs.core.get.call(null,map__23688__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__23689__$1 = ((cljs.core.seq_QMARK_.call(null,map__23689))?cljs.core.apply.call(null,cljs.core.hash_map,map__23689):map__23689);var selection_type = cljs.core.get.call(null,map__23689__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__23689__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__23688__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__23688__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__23690 = om.core.get_shared.call(null,owner);var map__23690__$1 = ((cljs.core.seq_QMARK_.call(null,map__23690))?cljs.core.apply.call(null,cljs.core.hash_map,map__23690):map__23690);var path_fn = cljs.core.get.call(null,map__23690__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__23690__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__23691 = search_results;var map__23691__$1 = ((cljs.core.seq_QMARK_.call(null,map__23691))?cljs.core.apply.call(null,cljs.core.hash_map,map__23691):map__23691);var investor_companies = cljs.core.get.call(null,map__23691__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__23691__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__23691__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t23692 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23692 = (function (investor_companies,p__23656,selection_value,path_fn,map__23689,portfolio_companies,map__23688,view,search_component,comm,selection_type,map__23691,map__23690,owner,constituencies,search_results,meta23693){
this.investor_companies = investor_companies;
this.p__23656 = p__23656;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.map__23689 = map__23689;
this.portfolio_companies = portfolio_companies;
this.map__23688 = map__23688;
this.view = view;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.map__23691 = map__23691;
this.map__23690 = map__23690;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta23693 = meta23693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23692.cljs$lang$type = true;
clustermap.components.search.t23692.cljs$lang$ctorStr = "clustermap.components.search/t23692";
clustermap.components.search.t23692.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.search/t23692");
});
clustermap.components.search.t23692.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23692.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__23695(s__23696){return (new cljs.core.LazySeq(null,(function (){var s__23696__$1 = s__23696;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23696__$1);if(temp__4092__auto__)
{var s__23696__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23696__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23696__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23698 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23697 = 0;while(true){
if((i__23697 < size__4157__auto__))
{var vec__23701 = cljs.core._nth.call(null,c__4156__auto__,i__23697);var idx = cljs.core.nth.call(null,vec__23701,0,null);var con = cljs.core.nth.call(null,vec__23701,1,null);cljs.core.chunk_append.call(null,b__23698,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23697,vec__23701,idx,con,c__4156__auto__,size__4157__auto__,b__23698,s__23696__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(i__23697,vec__23701,idx,con,c__4156__auto__,size__4157__auto__,b__23698,s__23696__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23719 = (i__23697 + 1);
i__23697 = G__23719;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23698),iter__23695.call(null,cljs.core.chunk_rest.call(null,s__23696__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23698),null);
}
} else
{var vec__23702 = cljs.core.first.call(null,s__23696__$2);var idx = cljs.core.nth.call(null,vec__23702,0,null);var con = cljs.core.nth.call(null,vec__23702,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23702,idx,con,s__23696__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))].join(''));
});})(vec__23702,idx,con,s__23696__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23695.call(null,cljs.core.rest.call(null,s__23696__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__23703(s__23704){return (new cljs.core.LazySeq(null,(function (){var s__23704__$1 = s__23704;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23704__$1);if(temp__4092__auto__)
{var s__23704__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23704__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23704__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23706 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23705 = 0;while(true){
if((i__23705 < size__4157__auto__))
{var vec__23709 = cljs.core._nth.call(null,c__4156__auto__,i__23705);var idx = cljs.core.nth.call(null,vec__23709,0,null);var pc = cljs.core.nth.call(null,vec__23709,1,null);cljs.core.chunk_append.call(null,b__23706,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23705,vec__23709,idx,pc,c__4156__auto__,size__4157__auto__,b__23706,s__23704__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(i__23705,vec__23709,idx,pc,c__4156__auto__,size__4157__auto__,b__23706,s__23704__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23720 = (i__23705 + 1);
i__23705 = G__23720;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23706),iter__23703.call(null,cljs.core.chunk_rest.call(null,s__23704__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23706),null);
}
} else
{var vec__23710 = cljs.core.first.call(null,s__23704__$2);var idx = cljs.core.nth.call(null,vec__23710,0,null);var pc = cljs.core.nth.call(null,vec__23710,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23710,idx,pc,s__23704__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))].join(''));
});})(vec__23710,idx,pc,s__23704__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23703.call(null,cljs.core.rest.call(null,s__23704__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__23711(s__23712){return (new cljs.core.LazySeq(null,(function (){var s__23712__$1 = s__23712;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__23712__$1);if(temp__4092__auto__)
{var s__23712__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__23712__$2))
{var c__4156__auto__ = cljs.core.chunk_first.call(null,s__23712__$2);var size__4157__auto__ = cljs.core.count.call(null,c__4156__auto__);var b__23714 = cljs.core.chunk_buffer.call(null,size__4157__auto__);if((function (){var i__23713 = 0;while(true){
if((i__23713 < size__4157__auto__))
{var vec__23717 = cljs.core._nth.call(null,c__4156__auto__,i__23713);var idx = cljs.core.nth.call(null,vec__23717,0,null);var inv = cljs.core.nth.call(null,vec__23717,1,null);cljs.core.chunk_append.call(null,b__23714,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__23713,vec__23717,idx,inv,c__4156__auto__,size__4157__auto__,b__23714,s__23712__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(i__23713,vec__23717,idx,inv,c__4156__auto__,size__4157__auto__,b__23714,s__23712__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__23721 = (i__23713 + 1);
i__23713 = G__23721;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23714),iter__23711.call(null,cljs.core.chunk_rest.call(null,s__23712__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23714),null);
}
} else
{var vec__23718 = cljs.core.first.call(null,s__23712__$2);var idx = cljs.core.nth.call(null,vec__23718,0,null);var inv = cljs.core.nth.call(null,vec__23718,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__23718,idx,inv,s__23712__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))].join(''));
});})(vec__23718,idx,inv,s__23712__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__23711.call(null,cljs.core.rest.call(null,s__23712__$2)));
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
clustermap.components.search.t23692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23694){var self__ = this;
var _23694__$1 = this;return self__.meta23693;
});
clustermap.components.search.t23692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23694,meta23693__$1){var self__ = this;
var _23694__$1 = this;return (new clustermap.components.search.t23692(self__.investor_companies,self__.p__23656,self__.selection_value,self__.path_fn,self__.map__23689,self__.portfolio_companies,self__.map__23688,self__.view,self__.search_component,self__.comm,self__.selection_type,self__.map__23691,self__.map__23690,self__.owner,self__.constituencies,self__.search_results,meta23693__$1));
});
clustermap.components.search.__GT_t23692 = (function __GT_t23692(investor_companies__$1,p__23656__$1,selection_value__$1,path_fn__$2,map__23689__$2,portfolio_companies__$1,map__23688__$2,view__$1,search_component__$1,comm__$1,selection_type__$1,map__23691__$2,map__23690__$2,owner__$1,constituencies__$1,search_results__$1,meta23693){return (new clustermap.components.search.t23692(investor_companies__$1,p__23656__$1,selection_value__$1,path_fn__$2,map__23689__$2,portfolio_companies__$1,map__23688__$2,view__$1,search_component__$1,comm__$1,selection_type__$1,map__23691__$2,map__23690__$2,owner__$1,constituencies__$1,search_results__$1,meta23693));
});
}
return (new clustermap.components.search.t23692(investor_companies,p__23656,selection_value,path_fn__$1,map__23689__$1,portfolio_companies,map__23688__$1,view,search_component,comm,selection_type,map__23691__$1,map__23690__$1,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map