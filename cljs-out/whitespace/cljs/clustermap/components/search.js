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
clustermap.components.search.search_result_link = (function search_result_link(p__17045,owner,p__17046){var map__17055 = p__17045;var map__17055__$1 = ((cljs.core.seq_QMARK_.call(null,map__17055))?cljs.core.apply.call(null,cljs.core.hash_map,map__17055):map__17055);var search_result = map__17055__$1;var type = cljs.core.get.call(null,map__17055__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__17055__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__17056 = p__17046;var map__17056__$1 = ((cljs.core.seq_QMARK_.call(null,map__17056))?cljs.core.apply.call(null,cljs.core.hash_map,map__17056):map__17056);var opts = map__17056__$1;var path_fn = cljs.core.get.call(null,map__17056__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__17056__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t17057 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t17057 = (function (owner,path_fn,search_result_link,name,comm,search_result,type,p__17045,map__17055,p__17046,opts,map__17056,meta17058){
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__17045 = p__17045;
this.map__17055 = map__17055;
this.p__17046 = p__17046;
this.opts = opts;
this.map__17056 = map__17056;
this.meta17058 = meta17058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t17057.cljs$lang$type = true;
clustermap.components.search.t17057.cljs$lang$ctorStr = "clustermap.components.search/t17057";
clustermap.components.search.t17057.cljs$lang$ctorPrWriter = ((function (map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.search/t17057");
});})(map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm))
;
clustermap.components.search.t17057.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t17057.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm){
return (function (this$,p__17060){var self__ = this;
var map__17061 = p__17060;var map__17061__$1 = ((cljs.core.seq_QMARK_.call(null,map__17061))?cljs.core.apply.call(null,cljs.core.hash_map,map__17061):map__17061);var state = map__17061__$1;var selected = cljs.core.get.call(null,map__17061__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__17061,map__17061__$1,state,selected,map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__17062 = l;var G__17062__$1 = (((G__17062 == null))?null:jayq.core.$.call(null,G__17062));var G__17062__$2 = (((G__17062__$1 == null))?null:G__17062__$1.parents(".search-component"));var G__17062__$3 = (((G__17062__$2 == null))?null:G__17062__$2.toggle());return G__17062__$3;
});})(path,this$__$1,map__17061,map__17061__$1,state,selected,map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm))
;
clustermap.components.search.t17057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm){
return (function (_17059){var self__ = this;
var _17059__$1 = this;return self__.meta17058;
});})(map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm))
;
clustermap.components.search.t17057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm){
return (function (_17059,meta17058__$1){var self__ = this;
var _17059__$1 = this;return (new clustermap.components.search.t17057(self__.owner,self__.path_fn,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.p__17045,self__.map__17055,self__.p__17046,self__.opts,self__.map__17056,meta17058__$1));
});})(map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t17057 = ((function (map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm){
return (function __GT_t17057(owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__17045__$1,map__17055__$2,p__17046__$1,opts__$1,map__17056__$2,meta17058){return (new clustermap.components.search.t17057(owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__17045__$1,map__17055__$2,p__17046__$1,opts__$1,map__17056__$2,meta17058));
});})(map__17055,map__17055__$1,search_result,type,name,map__17056,map__17056__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t17057(owner,path_fn,search_result_link,name,comm,search_result,type,p__17045,map__17055__$1,p__17046,opts,map__17056__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__17063,n){var map__17065 = p__17063;var map__17065__$1 = ((cljs.core.seq_QMARK_.call(null,map__17065))?cljs.core.apply.call(null,cljs.core.hash_map,map__17065):map__17065);var investor_companies = cljs.core.get.call(null,map__17065__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__17065__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__17065__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3637__auto__ = constituencies;if(cljs.core.truth_(or__3637__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__17072 = cljs.core._EQ__EQ_;var expr__17073 = e.keyCode;if(cljs.core.truth_(pred__17072.call(null,clustermap.components.search.ESCAPE_KEY,expr__17073)))
{var G__17075 = om.core.get_node.call(null,owner,"search-component");var G__17075__$1 = (((G__17075 == null))?null:jayq.core.$.call(null,G__17075));var G__17075__$2 = (((G__17075__$1 == null))?null:G__17075__$1.toggle());return G__17075__$2;
} else
{if(cljs.core.truth_(pred__17072.call(null,clustermap.components.search.ENTER_KEY,expr__17073)))
{var vec__17076 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__17076,(0),null);var res = cljs.core.nth.call(null,vec__17076,(1),null);var G__17077_17078 = om.core.get_node.call(null,owner,"search-component");var G__17077_17079__$1 = (((G__17077_17078 == null))?null:jayq.core.$.call(null,G__17077_17078));var G__17077_17080__$2 = (((G__17077_17079__$1 == null))?null:G__17077_17079__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__17072.call(null,clustermap.components.search.UP_ARROW,expr__17073)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__17072.call(null,clustermap.components.search.DOWN_ARROW,expr__17073)))
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
clustermap.components.search.search_component = (function search_component(p__17081,owner){var map__17113 = p__17081;var map__17113__$1 = ((cljs.core.seq_QMARK_.call(null,map__17113))?cljs.core.apply.call(null,cljs.core.hash_map,map__17113):map__17113);var map__17114 = cljs.core.get.call(null,map__17113__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__17114__$1 = ((cljs.core.seq_QMARK_.call(null,map__17114))?cljs.core.apply.call(null,cljs.core.hash_map,map__17114):map__17114);var selection_type = cljs.core.get.call(null,map__17114__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__17114__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__17113__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__17113__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__17115 = om.core.get_shared.call(null,owner);var map__17115__$1 = ((cljs.core.seq_QMARK_.call(null,map__17115))?cljs.core.apply.call(null,cljs.core.hash_map,map__17115):map__17115);var path_fn = cljs.core.get.call(null,map__17115__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__17115__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__17116 = search_results;var map__17116__$1 = ((cljs.core.seq_QMARK_.call(null,map__17116))?cljs.core.apply.call(null,cljs.core.hash_map,map__17116):map__17116);var investor_companies = cljs.core.get.call(null,map__17116__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__17116__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__17116__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t17117 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t17117 = (function (map__17116,search_results,search_component,owner,path_fn,view,map__17114,portfolio_companies,constituencies,investor_companies,p__17081,selection_value,comm,selection_type,map__17113,map__17115,meta17118){
this.map__17116 = map__17116;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__17114 = map__17114;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.p__17081 = p__17081;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__17113 = map__17113;
this.map__17115 = map__17115;
this.meta17118 = meta17118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t17117.cljs$lang$type = true;
clustermap.components.search.t17117.cljs$lang$ctorStr = "clustermap.components.search/t17117";
clustermap.components.search.t17117.cljs$lang$ctorPrWriter = ((function (map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.search/t17117");
});})(map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t17117.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t17117.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function iter__17120(s__17121){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (){var s__17121__$1 = s__17121;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17121__$1);if(temp__4126__auto__)
{var s__17121__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17121__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__17121__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__17123 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__17122 = (0);while(true){
if((i__17122 < size__4374__auto__))
{var vec__17126 = cljs.core._nth.call(null,c__4373__auto__,i__17122);var idx = cljs.core.nth.call(null,vec__17126,(0),null);var con = cljs.core.nth.call(null,vec__17126,(1),null);cljs.core.chunk_append.call(null,b__17123,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__17122,vec__17126,idx,con,c__4373__auto__,size__4374__auto__,b__17123,s__17121__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__17122,vec__17126,idx,con,c__4373__auto__,size__4374__auto__,b__17123,s__17121__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__17144 = (i__17122 + (1));
i__17122 = G__17144;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17123),iter__17120.call(null,cljs.core.chunk_rest.call(null,s__17121__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17123),null);
}
} else
{var vec__17127 = cljs.core.first.call(null,s__17121__$2);var idx = cljs.core.nth.call(null,vec__17127,(0),null);var con = cljs.core.nth.call(null,vec__17127,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__17127,idx,con,s__17121__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__17127,idx,con,s__17121__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__17120.call(null,cljs.core.rest.call(null,s__17121__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function iter__17128(s__17129){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (){var s__17129__$1 = s__17129;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17129__$1);if(temp__4126__auto__)
{var s__17129__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17129__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__17129__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__17131 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__17130 = (0);while(true){
if((i__17130 < size__4374__auto__))
{var vec__17134 = cljs.core._nth.call(null,c__4373__auto__,i__17130);var idx = cljs.core.nth.call(null,vec__17134,(0),null);var pc = cljs.core.nth.call(null,vec__17134,(1),null);cljs.core.chunk_append.call(null,b__17131,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__17130,vec__17134,idx,pc,c__4373__auto__,size__4374__auto__,b__17131,s__17129__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__17130,vec__17134,idx,pc,c__4373__auto__,size__4374__auto__,b__17131,s__17129__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__17145 = (i__17130 + (1));
i__17130 = G__17145;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17131),iter__17128.call(null,cljs.core.chunk_rest.call(null,s__17129__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17131),null);
}
} else
{var vec__17135 = cljs.core.first.call(null,s__17129__$2);var idx = cljs.core.nth.call(null,vec__17135,(0),null);var pc = cljs.core.nth.call(null,vec__17135,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__17135,idx,pc,s__17129__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__17135,idx,pc,s__17129__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__17128.call(null,cljs.core.rest.call(null,s__17129__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function iter__17136(s__17137){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (){var s__17137__$1 = s__17137;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__17137__$1);if(temp__4126__auto__)
{var s__17137__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__17137__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__17137__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__17139 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__17138 = (0);while(true){
if((i__17138 < size__4374__auto__))
{var vec__17142 = cljs.core._nth.call(null,c__4373__auto__,i__17138);var idx = cljs.core.nth.call(null,vec__17142,(0),null);var inv = cljs.core.nth.call(null,vec__17142,(1),null);cljs.core.chunk_append.call(null,b__17139,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__17138,vec__17142,idx,inv,c__4373__auto__,size__4374__auto__,b__17139,s__17137__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__17138,vec__17142,idx,inv,c__4373__auto__,size__4374__auto__,b__17139,s__17137__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__17146 = (i__17138 + (1));
i__17138 = G__17146;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17139),iter__17136.call(null,cljs.core.chunk_rest.call(null,s__17137__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17139),null);
}
} else
{var vec__17143 = cljs.core.first.call(null,s__17137__$2);var idx = cljs.core.nth.call(null,vec__17143,(0),null);var inv = cljs.core.nth.call(null,vec__17143,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__17143,idx,inv,s__17137__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__17143,idx,inv,s__17137__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__17136.call(null,cljs.core.rest.call(null,s__17137__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t17117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (_17119){var self__ = this;
var _17119__$1 = this;return self__.meta17118;
});})(map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t17117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function (_17119,meta17118__$1){var self__ = this;
var _17119__$1 = this;return (new clustermap.components.search.t17117(self__.map__17116,self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.map__17114,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.p__17081,self__.selection_value,self__.comm,self__.selection_type,self__.map__17113,self__.map__17115,meta17118__$1));
});})(map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t17117 = ((function (map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results){
return (function __GT_t17117(map__17116__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__17114__$2,portfolio_companies__$1,constituencies__$1,investor_companies__$1,p__17081__$1,selection_value__$1,comm__$1,selection_type__$1,map__17113__$2,map__17115__$2,meta17118){return (new clustermap.components.search.t17117(map__17116__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__17114__$2,portfolio_companies__$1,constituencies__$1,investor_companies__$1,p__17081__$1,selection_value__$1,comm__$1,selection_type__$1,map__17113__$2,map__17115__$2,meta17118));
});})(map__17115,map__17115__$1,path_fn,comm,path_fn__$1,map__17116,map__17116__$1,investor_companies,portfolio_companies,constituencies,map__17113,map__17113__$1,map__17114,map__17114__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t17117(map__17116__$1,search_results,search_component,owner,path_fn__$1,view,map__17114__$1,portfolio_companies,constituencies,investor_companies,p__17081,selection_value,comm,selection_type,map__17113__$1,map__17115__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
