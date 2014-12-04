// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
clustermap.components.search.ESCAPE_KEY = (27);
clustermap.components.search.ENTER_KEY = (13);
clustermap.components.search.LEFT_ARROW = (37);
clustermap.components.search.UP_ARROW = (38);
clustermap.components.search.RIGHT_ARROW = (39);
clustermap.components.search.DOWN_ARROW = (40);
clustermap.components.search.search_result_link = (function search_result_link(p__13657,owner,p__13658){var map__13667 = p__13657;var map__13667__$1 = ((cljs.core.seq_QMARK_.call(null,map__13667))?cljs.core.apply.call(null,cljs.core.hash_map,map__13667):map__13667);var search_result = map__13667__$1;var type = cljs.core.get.call(null,map__13667__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__13667__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__13668 = p__13658;var map__13668__$1 = ((cljs.core.seq_QMARK_.call(null,map__13668))?cljs.core.apply.call(null,cljs.core.hash_map,map__13668):map__13668);var opts = map__13668__$1;var path_fn = cljs.core.get.call(null,map__13668__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13668__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t13669 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t13669 = (function (map__13667,owner,path_fn,map__13668,search_result_link,name,comm,search_result,type,p__13658,p__13657,opts,meta13670){
this.map__13667 = map__13667;
this.owner = owner;
this.path_fn = path_fn;
this.map__13668 = map__13668;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__13658 = p__13658;
this.p__13657 = p__13657;
this.opts = opts;
this.meta13670 = meta13670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t13669.cljs$lang$type = true;
clustermap.components.search.t13669.cljs$lang$ctorStr = "clustermap.components.search/t13669";
clustermap.components.search.t13669.cljs$lang$ctorPrWriter = ((function (map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t13669");
});})(map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm))
;
clustermap.components.search.t13669.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t13669.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm){
return (function (this$,p__13672){var self__ = this;
var map__13673 = p__13672;var map__13673__$1 = ((cljs.core.seq_QMARK_.call(null,map__13673))?cljs.core.apply.call(null,cljs.core.hash_map,map__13673):map__13673);var state = map__13673__$1;var selected = cljs.core.get.call(null,map__13673__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__13673,map__13673__$1,state,selected,map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__13674 = l;var G__13674__$1 = (((G__13674 == null))?null:jayq.core.$.call(null,G__13674));var G__13674__$2 = (((G__13674__$1 == null))?null:G__13674__$1.parents(".search-component"));var G__13674__$3 = (((G__13674__$2 == null))?null:G__13674__$2.toggle());return G__13674__$3;
});})(path,this$__$1,map__13673,map__13673__$1,state,selected,map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm))
;
clustermap.components.search.t13669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm){
return (function (_13671){var self__ = this;
var _13671__$1 = this;return self__.meta13670;
});})(map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm))
;
clustermap.components.search.t13669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm){
return (function (_13671,meta13670__$1){var self__ = this;
var _13671__$1 = this;return (new clustermap.components.search.t13669(self__.map__13667,self__.owner,self__.path_fn,self__.map__13668,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.p__13658,self__.p__13657,self__.opts,meta13670__$1));
});})(map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t13669 = ((function (map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm){
return (function __GT_t13669(map__13667__$2,owner__$1,path_fn__$1,map__13668__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__13658__$1,p__13657__$1,opts__$1,meta13670){return (new clustermap.components.search.t13669(map__13667__$2,owner__$1,path_fn__$1,map__13668__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__13658__$1,p__13657__$1,opts__$1,meta13670));
});})(map__13667,map__13667__$1,search_result,type,name,map__13668,map__13668__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t13669(map__13667__$1,owner,path_fn,map__13668__$1,search_result_link,name,comm,search_result,type,p__13658,p__13657,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__13675,n){var map__13677 = p__13675;var map__13677__$1 = ((cljs.core.seq_QMARK_.call(null,map__13677))?cljs.core.apply.call(null,cljs.core.hash_map,map__13677):map__13677);var investor_companies = cljs.core.get.call(null,map__13677__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__13677__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__13677__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3639__auto__ = constituencies;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3639__auto__ = portfolio_companies;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3639__auto__ = investor_companies;if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count.call(null,cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),cljs.core.get.call(null,constituencies,n)], null);
} else
{if((n < (cljs.core.count.call(null,cons) + cljs.core.count.call(null,pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),cljs.core.get.call(null,pcs,(n - cljs.core.count.call(null,cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investor-company","investor-company",13706558),cljs.core.get.call(null,invs,((n - cljs.core.count.call(null,cons)) - cljs.core.count.call(null,pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__13684 = cljs.core._EQ__EQ_;var expr__13685 = e.keyCode;if(cljs.core.truth_(pred__13684.call(null,clustermap.components.search.ESCAPE_KEY,expr__13685)))
{var G__13687 = om.core.get_node.call(null,owner,"search-component");var G__13687__$1 = (((G__13687 == null))?null:jayq.core.$.call(null,G__13687));var G__13687__$2 = (((G__13687__$1 == null))?null:G__13687__$1.toggle());return G__13687__$2;
} else
{if(cljs.core.truth_(pred__13684.call(null,clustermap.components.search.ENTER_KEY,expr__13685)))
{var vec__13688 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3639__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__13688,(0),null);var res = cljs.core.nth.call(null,vec__13688,(1),null);var G__13689_13690 = om.core.get_node.call(null,owner,"search-component");var G__13689_13691__$1 = (((G__13689_13690 == null))?null:jayq.core.$.call(null,G__13689_13690));var G__13689_13692__$2 = (((G__13689_13691__$1 == null))?null:G__13689_13691__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__13684.call(null,clustermap.components.search.UP_ARROW,expr__13685)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3639__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__13684.call(null,clustermap.components.search.DOWN_ARROW,expr__13685)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3639__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})() + (1)));
} else
{return null;
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(p__13693,owner){var map__13725 = p__13693;var map__13725__$1 = ((cljs.core.seq_QMARK_.call(null,map__13725))?cljs.core.apply.call(null,cljs.core.hash_map,map__13725):map__13725);var map__13726 = cljs.core.get.call(null,map__13725__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__13726__$1 = ((cljs.core.seq_QMARK_.call(null,map__13726))?cljs.core.apply.call(null,cljs.core.hash_map,map__13726):map__13726);var selection_type = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__13725__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__13725__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__13727 = om.core.get_shared.call(null,owner);var map__13727__$1 = ((cljs.core.seq_QMARK_.call(null,map__13727))?cljs.core.apply.call(null,cljs.core.hash_map,map__13727):map__13727);var path_fn = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__13728 = search_results;var map__13728__$1 = ((cljs.core.seq_QMARK_.call(null,map__13728))?cljs.core.apply.call(null,cljs.core.hash_map,map__13728):map__13728);var investor_companies = cljs.core.get.call(null,map__13728__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__13728__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__13728__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t13729 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t13729 = (function (search_results,map__13727,search_component,owner,path_fn,view,map__13728,portfolio_companies,map__13725,constituencies,map__13726,investor_companies,selection_value,comm,selection_type,p__13693,meta13730){
this.search_results = search_results;
this.map__13727 = map__13727;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__13728 = map__13728;
this.portfolio_companies = portfolio_companies;
this.map__13725 = map__13725;
this.constituencies = constituencies;
this.map__13726 = map__13726;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.p__13693 = p__13693;
this.meta13730 = meta13730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t13729.cljs$lang$type = true;
clustermap.components.search.t13729.cljs$lang$ctorStr = "clustermap.components.search/t13729";
clustermap.components.search.t13729.cljs$lang$ctorPrWriter = ((function (map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (this__4215__auto__,writer__4216__auto__,opt__4217__auto__){return cljs.core._write.call(null,writer__4216__auto__,"clustermap.components.search/t13729");
});})(map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t13729.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t13729.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3639__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{var or__3639__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3639__auto____$1))
{return or__3639__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3639__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3639__auto__))
{return or__3639__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4377__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function iter__13732(s__13733){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (){var s__13733__$1 = s__13733;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13733__$1);if(temp__4126__auto__)
{var s__13733__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13733__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__13733__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__13735 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__13734 = (0);while(true){
if((i__13734 < size__4376__auto__))
{var vec__13738 = cljs.core._nth.call(null,c__4375__auto__,i__13734);var idx = cljs.core.nth.call(null,vec__13738,(0),null);var con = cljs.core.nth.call(null,vec__13738,(1),null);cljs.core.chunk_append.call(null,b__13735,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__13734,vec__13738,idx,con,c__4375__auto__,size__4376__auto__,b__13735,s__13733__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__13734,vec__13738,idx,con,c__4375__auto__,size__4376__auto__,b__13735,s__13733__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__13756 = (i__13734 + (1));
i__13734 = G__13756;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13735),iter__13732.call(null,cljs.core.chunk_rest.call(null,s__13733__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13735),null);
}
} else
{var vec__13739 = cljs.core.first.call(null,s__13733__$2);var idx = cljs.core.nth.call(null,vec__13739,(0),null);var con = cljs.core.nth.call(null,vec__13739,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__13739,idx,con,s__13733__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__13739,idx,con,s__13733__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__13732.call(null,cljs.core.rest.call(null,s__13733__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
;return iter__4377__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4377__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function iter__13740(s__13741){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (){var s__13741__$1 = s__13741;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13741__$1);if(temp__4126__auto__)
{var s__13741__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13741__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__13741__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__13743 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__13742 = (0);while(true){
if((i__13742 < size__4376__auto__))
{var vec__13746 = cljs.core._nth.call(null,c__4375__auto__,i__13742);var idx = cljs.core.nth.call(null,vec__13746,(0),null);var pc = cljs.core.nth.call(null,vec__13746,(1),null);cljs.core.chunk_append.call(null,b__13743,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__13742,vec__13746,idx,pc,c__4375__auto__,size__4376__auto__,b__13743,s__13741__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__13742,vec__13746,idx,pc,c__4375__auto__,size__4376__auto__,b__13743,s__13741__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__13757 = (i__13742 + (1));
i__13742 = G__13757;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13743),iter__13740.call(null,cljs.core.chunk_rest.call(null,s__13741__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13743),null);
}
} else
{var vec__13747 = cljs.core.first.call(null,s__13741__$2);var idx = cljs.core.nth.call(null,vec__13747,(0),null);var pc = cljs.core.nth.call(null,vec__13747,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__13747,idx,pc,s__13741__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__13747,idx,pc,s__13741__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__13740.call(null,cljs.core.rest.call(null,s__13741__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
;return iter__4377__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4377__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function iter__13748(s__13749){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (){var s__13749__$1 = s__13749;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__13749__$1);if(temp__4126__auto__)
{var s__13749__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__13749__$2))
{var c__4375__auto__ = cljs.core.chunk_first.call(null,s__13749__$2);var size__4376__auto__ = cljs.core.count.call(null,c__4375__auto__);var b__13751 = cljs.core.chunk_buffer.call(null,size__4376__auto__);if((function (){var i__13750 = (0);while(true){
if((i__13750 < size__4376__auto__))
{var vec__13754 = cljs.core._nth.call(null,c__4375__auto__,i__13750);var idx = cljs.core.nth.call(null,vec__13754,(0),null);var inv = cljs.core.nth.call(null,vec__13754,(1),null);cljs.core.chunk_append.call(null,b__13751,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__13750,vec__13754,idx,inv,c__4375__auto__,size__4376__auto__,b__13751,s__13749__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__13750,vec__13754,idx,inv,c__4375__auto__,size__4376__auto__,b__13751,s__13749__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__13758 = (i__13750 + (1));
i__13750 = G__13758;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13751),iter__13748.call(null,cljs.core.chunk_rest.call(null,s__13749__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__13751),null);
}
} else
{var vec__13755 = cljs.core.first.call(null,s__13749__$2);var idx = cljs.core.nth.call(null,vec__13755,(0),null);var inv = cljs.core.nth.call(null,vec__13755,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__13755,idx,inv,s__13749__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__13755,idx,inv,s__13749__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__13748.call(null,cljs.core.rest.call(null,s__13749__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
;return iter__4377__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t13729.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (_13731){var self__ = this;
var _13731__$1 = this;return self__.meta13730;
});})(map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t13729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function (_13731,meta13730__$1){var self__ = this;
var _13731__$1 = this;return (new clustermap.components.search.t13729(self__.search_results,self__.map__13727,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.map__13728,self__.portfolio_companies,self__.map__13725,self__.constituencies,self__.map__13726,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.p__13693,meta13730__$1));
});})(map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t13729 = ((function (map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results){
return (function __GT_t13729(search_results__$1,map__13727__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,map__13728__$2,portfolio_companies__$1,map__13725__$2,constituencies__$1,map__13726__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,p__13693__$1,meta13730){return (new clustermap.components.search.t13729(search_results__$1,map__13727__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,map__13728__$2,portfolio_companies__$1,map__13725__$2,constituencies__$1,map__13726__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,p__13693__$1,meta13730));
});})(map__13727,map__13727__$1,path_fn,comm,path_fn__$1,map__13728,map__13728__$1,investor_companies,portfolio_companies,constituencies,map__13725,map__13725__$1,map__13726,map__13726__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t13729(search_results,map__13727__$1,search_component,owner,path_fn__$1,view,map__13728__$1,portfolio_companies,map__13725__$1,constituencies,map__13726__$1,investor_companies,selection_value,comm,selection_type,p__13693,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
