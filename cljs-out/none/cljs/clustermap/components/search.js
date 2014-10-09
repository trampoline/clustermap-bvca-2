// Compiled by ClojureScript 0.0-2322
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
clustermap.components.search.search_result_link = (function search_result_link(p__53572,owner,p__53573){var map__53582 = p__53572;var map__53582__$1 = ((cljs.core.seq_QMARK_.call(null,map__53582))?cljs.core.apply.call(null,cljs.core.hash_map,map__53582):map__53582);var search_result = map__53582__$1;var type = cljs.core.get.call(null,map__53582__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__53582__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__53583 = p__53573;var map__53583__$1 = ((cljs.core.seq_QMARK_.call(null,map__53583))?cljs.core.apply.call(null,cljs.core.hash_map,map__53583):map__53583);var opts = map__53583__$1;var path_fn = cljs.core.get.call(null,map__53583__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__53583__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t53584 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t53584 = (function (owner,path_fn,p__53572,search_result_link,name,comm,p__53573,search_result,type,opts,map__53582,map__53583,meta53585){
this.owner = owner;
this.path_fn = path_fn;
this.p__53572 = p__53572;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.p__53573 = p__53573;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.map__53582 = map__53582;
this.map__53583 = map__53583;
this.meta53585 = meta53585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t53584.cljs$lang$type = true;
clustermap.components.search.t53584.cljs$lang$ctorStr = "clustermap.components.search/t53584";
clustermap.components.search.t53584.cljs$lang$ctorPrWriter = ((function (map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t53584");
});})(map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm))
;
clustermap.components.search.t53584.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t53584.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm){
return (function (this$,p__53587){var self__ = this;
var map__53588 = p__53587;var map__53588__$1 = ((cljs.core.seq_QMARK_.call(null,map__53588))?cljs.core.apply.call(null,cljs.core.hash_map,map__53588):map__53588);var state = map__53588__$1;var selected = cljs.core.get.call(null,map__53588__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__53588,map__53588__$1,state,selected,map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__53589 = l;var G__53589__$1 = (((G__53589 == null))?null:jayq.core.$.call(null,G__53589));var G__53589__$2 = (((G__53589__$1 == null))?null:G__53589__$1.parents(".search-component"));var G__53589__$3 = (((G__53589__$2 == null))?null:G__53589__$2.toggle());return G__53589__$3;
});})(path,this$__$1,map__53588,map__53588__$1,state,selected,map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm))
;
clustermap.components.search.t53584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm){
return (function (_53586){var self__ = this;
var _53586__$1 = this;return self__.meta53585;
});})(map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm))
;
clustermap.components.search.t53584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm){
return (function (_53586,meta53585__$1){var self__ = this;
var _53586__$1 = this;return (new clustermap.components.search.t53584(self__.owner,self__.path_fn,self__.p__53572,self__.search_result_link,self__.name,self__.comm,self__.p__53573,self__.search_result,self__.type,self__.opts,self__.map__53582,self__.map__53583,meta53585__$1));
});})(map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t53584 = ((function (map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm){
return (function __GT_t53584(owner__$1,path_fn__$1,p__53572__$1,search_result_link__$1,name__$1,comm__$1,p__53573__$1,search_result__$1,type__$1,opts__$1,map__53582__$2,map__53583__$2,meta53585){return (new clustermap.components.search.t53584(owner__$1,path_fn__$1,p__53572__$1,search_result_link__$1,name__$1,comm__$1,p__53573__$1,search_result__$1,type__$1,opts__$1,map__53582__$2,map__53583__$2,meta53585));
});})(map__53582,map__53582__$1,search_result,type,name,map__53583,map__53583__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t53584(owner,path_fn,p__53572,search_result_link,name,comm,p__53573,search_result,type,opts,map__53582__$1,map__53583__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__53590,n){var map__53592 = p__53590;var map__53592__$1 = ((cljs.core.seq_QMARK_.call(null,map__53592))?cljs.core.apply.call(null,cljs.core.hash_map,map__53592):map__53592);var investor_companies = cljs.core.get.call(null,map__53592__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__53592__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__53592__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3558__auto__ = portfolio_companies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3558__auto__ = investor_companies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__53599 = cljs.core._EQ__EQ_;var expr__53600 = e.keyCode;if(cljs.core.truth_(pred__53599.call(null,clustermap.components.search.ESCAPE_KEY,expr__53600)))
{var G__53602 = om.core.get_node.call(null,owner,"search-component");var G__53602__$1 = (((G__53602 == null))?null:jayq.core.$.call(null,G__53602));var G__53602__$2 = (((G__53602__$1 == null))?null:G__53602__$1.toggle());return G__53602__$2;
} else
{if(cljs.core.truth_(pred__53599.call(null,clustermap.components.search.ENTER_KEY,expr__53600)))
{var vec__53603 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__53603,(0),null);var res = cljs.core.nth.call(null,vec__53603,(1),null);var G__53604_53605 = om.core.get_node.call(null,owner,"search-component");var G__53604_53606__$1 = (((G__53604_53605 == null))?null:jayq.core.$.call(null,G__53604_53605));var G__53604_53607__$2 = (((G__53604_53606__$1 == null))?null:G__53604_53606__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__53599.call(null,clustermap.components.search.UP_ARROW,expr__53600)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__53599.call(null,clustermap.components.search.DOWN_ARROW,expr__53600)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
clustermap.components.search.search_component = (function search_component(p__53608,owner){var map__53640 = p__53608;var map__53640__$1 = ((cljs.core.seq_QMARK_.call(null,map__53640))?cljs.core.apply.call(null,cljs.core.hash_map,map__53640):map__53640);var map__53641 = cljs.core.get.call(null,map__53640__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__53641__$1 = ((cljs.core.seq_QMARK_.call(null,map__53641))?cljs.core.apply.call(null,cljs.core.hash_map,map__53641):map__53641);var selection_type = cljs.core.get.call(null,map__53641__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__53641__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__53640__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__53640__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__53642 = om.core.get_shared.call(null,owner);var map__53642__$1 = ((cljs.core.seq_QMARK_.call(null,map__53642))?cljs.core.apply.call(null,cljs.core.hash_map,map__53642):map__53642);var path_fn = cljs.core.get.call(null,map__53642__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__53642__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__53643 = search_results;var map__53643__$1 = ((cljs.core.seq_QMARK_.call(null,map__53643))?cljs.core.apply.call(null,cljs.core.hash_map,map__53643):map__53643);var investor_companies = cljs.core.get.call(null,map__53643__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__53643__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__53643__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t53644 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t53644 = (function (search_results,search_component,owner,path_fn,view,map__53643,portfolio_companies,p__53608,constituencies,map__53641,investor_companies,selection_value,comm,map__53640,selection_type,map__53642,meta53645){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__53643 = map__53643;
this.portfolio_companies = portfolio_companies;
this.p__53608 = p__53608;
this.constituencies = constituencies;
this.map__53641 = map__53641;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__53640 = map__53640;
this.selection_type = selection_type;
this.map__53642 = map__53642;
this.meta53645 = meta53645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t53644.cljs$lang$type = true;
clustermap.components.search.t53644.cljs$lang$ctorStr = "clustermap.components.search/t53644";
clustermap.components.search.t53644.cljs$lang$ctorPrWriter = ((function (map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t53644");
});})(map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t53644.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t53644.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3558__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function iter__53647(s__53648){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (){var s__53648__$1 = s__53648;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53648__$1);if(temp__4126__auto__)
{var s__53648__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53648__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53648__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53650 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53649 = (0);while(true){
if((i__53649 < size__4282__auto__))
{var vec__53653 = cljs.core._nth.call(null,c__4281__auto__,i__53649);var idx = cljs.core.nth.call(null,vec__53653,(0),null);var con = cljs.core.nth.call(null,vec__53653,(1),null);cljs.core.chunk_append.call(null,b__53650,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__53649,vec__53653,idx,con,c__4281__auto__,size__4282__auto__,b__53650,s__53648__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__53649,vec__53653,idx,con,c__4281__auto__,size__4282__auto__,b__53650,s__53648__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__53671 = (i__53649 + (1));
i__53649 = G__53671;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53650),iter__53647.call(null,cljs.core.chunk_rest.call(null,s__53648__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53650),null);
}
} else
{var vec__53654 = cljs.core.first.call(null,s__53648__$2);var idx = cljs.core.nth.call(null,vec__53654,(0),null);var con = cljs.core.nth.call(null,vec__53654,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__53654,idx,con,s__53648__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__53654,idx,con,s__53648__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__53647.call(null,cljs.core.rest.call(null,s__53648__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function iter__53655(s__53656){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (){var s__53656__$1 = s__53656;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53656__$1);if(temp__4126__auto__)
{var s__53656__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53656__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53656__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53658 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53657 = (0);while(true){
if((i__53657 < size__4282__auto__))
{var vec__53661 = cljs.core._nth.call(null,c__4281__auto__,i__53657);var idx = cljs.core.nth.call(null,vec__53661,(0),null);var pc = cljs.core.nth.call(null,vec__53661,(1),null);cljs.core.chunk_append.call(null,b__53658,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__53657,vec__53661,idx,pc,c__4281__auto__,size__4282__auto__,b__53658,s__53656__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__53657,vec__53661,idx,pc,c__4281__auto__,size__4282__auto__,b__53658,s__53656__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__53672 = (i__53657 + (1));
i__53657 = G__53672;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53658),iter__53655.call(null,cljs.core.chunk_rest.call(null,s__53656__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53658),null);
}
} else
{var vec__53662 = cljs.core.first.call(null,s__53656__$2);var idx = cljs.core.nth.call(null,vec__53662,(0),null);var pc = cljs.core.nth.call(null,vec__53662,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__53662,idx,pc,s__53656__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__53662,idx,pc,s__53656__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__53655.call(null,cljs.core.rest.call(null,s__53656__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function iter__53663(s__53664){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (){var s__53664__$1 = s__53664;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__53664__$1);if(temp__4126__auto__)
{var s__53664__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__53664__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__53664__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__53666 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__53665 = (0);while(true){
if((i__53665 < size__4282__auto__))
{var vec__53669 = cljs.core._nth.call(null,c__4281__auto__,i__53665);var idx = cljs.core.nth.call(null,vec__53669,(0),null);var inv = cljs.core.nth.call(null,vec__53669,(1),null);cljs.core.chunk_append.call(null,b__53666,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__53665,vec__53669,idx,inv,c__4281__auto__,size__4282__auto__,b__53666,s__53664__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__53665,vec__53669,idx,inv,c__4281__auto__,size__4282__auto__,b__53666,s__53664__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__53673 = (i__53665 + (1));
i__53665 = G__53673;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53666),iter__53663.call(null,cljs.core.chunk_rest.call(null,s__53664__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53666),null);
}
} else
{var vec__53670 = cljs.core.first.call(null,s__53664__$2);var idx = cljs.core.nth.call(null,vec__53670,(0),null);var inv = cljs.core.nth.call(null,vec__53670,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__53670,idx,inv,s__53664__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__53670,idx,inv,s__53664__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__53663.call(null,cljs.core.rest.call(null,s__53664__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t53644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (_53646){var self__ = this;
var _53646__$1 = this;return self__.meta53645;
});})(map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t53644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function (_53646,meta53645__$1){var self__ = this;
var _53646__$1 = this;return (new clustermap.components.search.t53644(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.map__53643,self__.portfolio_companies,self__.p__53608,self__.constituencies,self__.map__53641,self__.investor_companies,self__.selection_value,self__.comm,self__.map__53640,self__.selection_type,self__.map__53642,meta53645__$1));
});})(map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t53644 = ((function (map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results){
return (function __GT_t53644(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__53643__$2,portfolio_companies__$1,p__53608__$1,constituencies__$1,map__53641__$2,investor_companies__$1,selection_value__$1,comm__$1,map__53640__$2,selection_type__$1,map__53642__$2,meta53645){return (new clustermap.components.search.t53644(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__53643__$2,portfolio_companies__$1,p__53608__$1,constituencies__$1,map__53641__$2,investor_companies__$1,selection_value__$1,comm__$1,map__53640__$2,selection_type__$1,map__53642__$2,meta53645));
});})(map__53642,map__53642__$1,path_fn,comm,path_fn__$1,map__53643,map__53643__$1,investor_companies,portfolio_companies,constituencies,map__53640,map__53640__$1,map__53641,map__53641__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t53644(search_results,search_component,owner,path_fn__$1,view,map__53643__$1,portfolio_companies,p__53608,constituencies,map__53641__$1,investor_companies,selection_value,comm,map__53640__$1,selection_type,map__53642__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map