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
clustermap.components.search.search_result_link = (function search_result_link(p__40598,owner,p__40599){var map__40608 = p__40598;var map__40608__$1 = ((cljs.core.seq_QMARK_.call(null,map__40608))?cljs.core.apply.call(null,cljs.core.hash_map,map__40608):map__40608);var search_result = map__40608__$1;var type = cljs.core.get.call(null,map__40608__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__40608__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__40609 = p__40599;var map__40609__$1 = ((cljs.core.seq_QMARK_.call(null,map__40609))?cljs.core.apply.call(null,cljs.core.hash_map,map__40609):map__40609);var opts = map__40609__$1;var path_fn = cljs.core.get.call(null,map__40609__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__40609__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t40610 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t40610 = (function (owner,path_fn,map__40608,search_result_link,map__40609,name,comm,search_result,type,p__40599,p__40598,opts,meta40611){
this.owner = owner;
this.path_fn = path_fn;
this.map__40608 = map__40608;
this.search_result_link = search_result_link;
this.map__40609 = map__40609;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__40599 = p__40599;
this.p__40598 = p__40598;
this.opts = opts;
this.meta40611 = meta40611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t40610.cljs$lang$type = true;
clustermap.components.search.t40610.cljs$lang$ctorStr = "clustermap.components.search/t40610";
clustermap.components.search.t40610.cljs$lang$ctorPrWriter = ((function (map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.search/t40610");
});})(map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm))
;
clustermap.components.search.t40610.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t40610.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm){
return (function (this$,p__40613){var self__ = this;
var map__40614 = p__40613;var map__40614__$1 = ((cljs.core.seq_QMARK_.call(null,map__40614))?cljs.core.apply.call(null,cljs.core.hash_map,map__40614):map__40614);var state = map__40614__$1;var selected = cljs.core.get.call(null,map__40614__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__40614,map__40614__$1,state,selected,map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__40615 = l;var G__40615__$1 = (((G__40615 == null))?null:jayq.core.$.call(null,G__40615));var G__40615__$2 = (((G__40615__$1 == null))?null:G__40615__$1.parents(".search-component"));var G__40615__$3 = (((G__40615__$2 == null))?null:G__40615__$2.toggle());return G__40615__$3;
});})(path,this$__$1,map__40614,map__40614__$1,state,selected,map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm))
;
clustermap.components.search.t40610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm){
return (function (_40612){var self__ = this;
var _40612__$1 = this;return self__.meta40611;
});})(map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm))
;
clustermap.components.search.t40610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm){
return (function (_40612,meta40611__$1){var self__ = this;
var _40612__$1 = this;return (new clustermap.components.search.t40610(self__.owner,self__.path_fn,self__.map__40608,self__.search_result_link,self__.map__40609,self__.name,self__.comm,self__.search_result,self__.type,self__.p__40599,self__.p__40598,self__.opts,meta40611__$1));
});})(map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t40610 = ((function (map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm){
return (function __GT_t40610(owner__$1,path_fn__$1,map__40608__$2,search_result_link__$1,map__40609__$2,name__$1,comm__$1,search_result__$1,type__$1,p__40599__$1,p__40598__$1,opts__$1,meta40611){return (new clustermap.components.search.t40610(owner__$1,path_fn__$1,map__40608__$2,search_result_link__$1,map__40609__$2,name__$1,comm__$1,search_result__$1,type__$1,p__40599__$1,p__40598__$1,opts__$1,meta40611));
});})(map__40608,map__40608__$1,search_result,type,name,map__40609,map__40609__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t40610(owner,path_fn,map__40608__$1,search_result_link,map__40609__$1,name,comm,search_result,type,p__40599,p__40598,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__40616,n){var map__40618 = p__40616;var map__40618__$1 = ((cljs.core.seq_QMARK_.call(null,map__40618))?cljs.core.apply.call(null,cljs.core.hash_map,map__40618):map__40618);var investor_companies = cljs.core.get.call(null,map__40618__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__40618__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__40618__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3637__auto__ = constituencies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3637__auto__ = portfolio_companies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3637__auto__ = investor_companies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__40625 = cljs.core._EQ__EQ_;var expr__40626 = e.keyCode;if(cljs.core.truth_(pred__40625.call(null,clustermap.components.search.ESCAPE_KEY,expr__40626)))
{var G__40628 = om.core.get_node.call(null,owner,"search-component");var G__40628__$1 = (((G__40628 == null))?null:jayq.core.$.call(null,G__40628));var G__40628__$2 = (((G__40628__$1 == null))?null:G__40628__$1.toggle());return G__40628__$2;
} else
{if(cljs.core.truth_(pred__40625.call(null,clustermap.components.search.ENTER_KEY,expr__40626)))
{var vec__40629 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__40629,(0),null);var res = cljs.core.nth.call(null,vec__40629,(1),null);var G__40630_40631 = om.core.get_node.call(null,owner,"search-component");var G__40630_40632__$1 = (((G__40630_40631 == null))?null:jayq.core.$.call(null,G__40630_40631));var G__40630_40633__$2 = (((G__40630_40632__$1 == null))?null:G__40630_40632__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__40625.call(null,clustermap.components.search.UP_ARROW,expr__40626)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__40625.call(null,clustermap.components.search.DOWN_ARROW,expr__40626)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
clustermap.components.search.search_component = (function search_component(p__40634,owner){var map__40666 = p__40634;var map__40666__$1 = ((cljs.core.seq_QMARK_.call(null,map__40666))?cljs.core.apply.call(null,cljs.core.hash_map,map__40666):map__40666);var map__40667 = cljs.core.get.call(null,map__40666__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__40667__$1 = ((cljs.core.seq_QMARK_.call(null,map__40667))?cljs.core.apply.call(null,cljs.core.hash_map,map__40667):map__40667);var selection_type = cljs.core.get.call(null,map__40667__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__40667__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__40666__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__40666__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__40668 = om.core.get_shared.call(null,owner);var map__40668__$1 = ((cljs.core.seq_QMARK_.call(null,map__40668))?cljs.core.apply.call(null,cljs.core.hash_map,map__40668):map__40668);var path_fn = cljs.core.get.call(null,map__40668__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__40668__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__40669 = search_results;var map__40669__$1 = ((cljs.core.seq_QMARK_.call(null,map__40669))?cljs.core.apply.call(null,cljs.core.hash_map,map__40669):map__40669);var investor_companies = cljs.core.get.call(null,map__40669__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__40669__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__40669__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t40670 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t40670 = (function (map__40667,search_results,map__40669,search_component,owner,path_fn,view,map__40668,portfolio_companies,constituencies,investor_companies,selection_value,comm,p__40634,selection_type,map__40666,meta40671){
this.map__40667 = map__40667;
this.search_results = search_results;
this.map__40669 = map__40669;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__40668 = map__40668;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.p__40634 = p__40634;
this.selection_type = selection_type;
this.map__40666 = map__40666;
this.meta40671 = meta40671;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t40670.cljs$lang$type = true;
clustermap.components.search.t40670.cljs$lang$ctorStr = "clustermap.components.search/t40670";
clustermap.components.search.t40670.cljs$lang$ctorPrWriter = ((function (map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.search/t40670");
});})(map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t40670.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t40670.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3637__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function iter__40673(s__40674){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (){var s__40674__$1 = s__40674;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40674__$1);if(temp__4126__auto__)
{var s__40674__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40674__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__40674__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__40676 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__40675 = (0);while(true){
if((i__40675 < size__4374__auto__))
{var vec__40679 = cljs.core._nth.call(null,c__4373__auto__,i__40675);var idx = cljs.core.nth.call(null,vec__40679,(0),null);var con = cljs.core.nth.call(null,vec__40679,(1),null);cljs.core.chunk_append.call(null,b__40676,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__40675,vec__40679,idx,con,c__4373__auto__,size__4374__auto__,b__40676,s__40674__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__40675,vec__40679,idx,con,c__4373__auto__,size__4374__auto__,b__40676,s__40674__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__40697 = (i__40675 + (1));
i__40675 = G__40697;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40676),iter__40673.call(null,cljs.core.chunk_rest.call(null,s__40674__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40676),null);
}
} else
{var vec__40680 = cljs.core.first.call(null,s__40674__$2);var idx = cljs.core.nth.call(null,vec__40680,(0),null);var con = cljs.core.nth.call(null,vec__40680,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__40680,idx,con,s__40674__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__40680,idx,con,s__40674__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__40673.call(null,cljs.core.rest.call(null,s__40674__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function iter__40681(s__40682){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (){var s__40682__$1 = s__40682;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40682__$1);if(temp__4126__auto__)
{var s__40682__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40682__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__40682__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__40684 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__40683 = (0);while(true){
if((i__40683 < size__4374__auto__))
{var vec__40687 = cljs.core._nth.call(null,c__4373__auto__,i__40683);var idx = cljs.core.nth.call(null,vec__40687,(0),null);var pc = cljs.core.nth.call(null,vec__40687,(1),null);cljs.core.chunk_append.call(null,b__40684,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__40683,vec__40687,idx,pc,c__4373__auto__,size__4374__auto__,b__40684,s__40682__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__40683,vec__40687,idx,pc,c__4373__auto__,size__4374__auto__,b__40684,s__40682__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__40698 = (i__40683 + (1));
i__40683 = G__40698;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40684),iter__40681.call(null,cljs.core.chunk_rest.call(null,s__40682__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40684),null);
}
} else
{var vec__40688 = cljs.core.first.call(null,s__40682__$2);var idx = cljs.core.nth.call(null,vec__40688,(0),null);var pc = cljs.core.nth.call(null,vec__40688,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__40688,idx,pc,s__40682__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__40688,idx,pc,s__40682__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__40681.call(null,cljs.core.rest.call(null,s__40682__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function iter__40689(s__40690){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (){var s__40690__$1 = s__40690;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40690__$1);if(temp__4126__auto__)
{var s__40690__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40690__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__40690__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__40692 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__40691 = (0);while(true){
if((i__40691 < size__4374__auto__))
{var vec__40695 = cljs.core._nth.call(null,c__4373__auto__,i__40691);var idx = cljs.core.nth.call(null,vec__40695,(0),null);var inv = cljs.core.nth.call(null,vec__40695,(1),null);cljs.core.chunk_append.call(null,b__40692,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__40691,vec__40695,idx,inv,c__4373__auto__,size__4374__auto__,b__40692,s__40690__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__40691,vec__40695,idx,inv,c__4373__auto__,size__4374__auto__,b__40692,s__40690__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__40699 = (i__40691 + (1));
i__40691 = G__40699;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40692),iter__40689.call(null,cljs.core.chunk_rest.call(null,s__40690__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40692),null);
}
} else
{var vec__40696 = cljs.core.first.call(null,s__40690__$2);var idx = cljs.core.nth.call(null,vec__40696,(0),null);var inv = cljs.core.nth.call(null,vec__40696,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__40696,idx,inv,s__40690__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__40696,idx,inv,s__40690__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__40689.call(null,cljs.core.rest.call(null,s__40690__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t40670.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (_40672){var self__ = this;
var _40672__$1 = this;return self__.meta40671;
});})(map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t40670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function (_40672,meta40671__$1){var self__ = this;
var _40672__$1 = this;return (new clustermap.components.search.t40670(self__.map__40667,self__.search_results,self__.map__40669,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.map__40668,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.selection_value,self__.comm,self__.p__40634,self__.selection_type,self__.map__40666,meta40671__$1));
});})(map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t40670 = ((function (map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results){
return (function __GT_t40670(map__40667__$2,search_results__$1,map__40669__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,map__40668__$2,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,p__40634__$1,selection_type__$1,map__40666__$2,meta40671){return (new clustermap.components.search.t40670(map__40667__$2,search_results__$1,map__40669__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,map__40668__$2,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,p__40634__$1,selection_type__$1,map__40666__$2,meta40671));
});})(map__40668,map__40668__$1,path_fn,comm,path_fn__$1,map__40669,map__40669__$1,investor_companies,portfolio_companies,constituencies,map__40666,map__40666__$1,map__40667,map__40667__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t40670(map__40667__$1,search_results,map__40669__$1,search_component,owner,path_fn__$1,view,map__40668__$1,portfolio_companies,constituencies,investor_companies,selection_value,comm,p__40634,selection_type,map__40666__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
