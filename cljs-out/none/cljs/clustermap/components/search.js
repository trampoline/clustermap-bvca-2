// Compiled by ClojureScript 0.0-2268
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
clustermap.components.search.search_result_link = (function search_result_link(p__50963,owner,p__50964){var map__50973 = p__50963;var map__50973__$1 = ((cljs.core.seq_QMARK_.call(null,map__50973))?cljs.core.apply.call(null,cljs.core.hash_map,map__50973):map__50973);var search_result = map__50973__$1;var type = cljs.core.get.call(null,map__50973__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__50973__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__50974 = p__50964;var map__50974__$1 = ((cljs.core.seq_QMARK_.call(null,map__50974))?cljs.core.apply.call(null,cljs.core.hash_map,map__50974):map__50974);var opts = map__50974__$1;var path_fn = cljs.core.get.call(null,map__50974__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__50974__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t50975 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t50975 = (function (map__50973,p__50964,owner,path_fn,p__50963,map__50974,search_result_link,name,comm,search_result,type,opts,meta50976){
this.map__50973 = map__50973;
this.p__50964 = p__50964;
this.owner = owner;
this.path_fn = path_fn;
this.p__50963 = p__50963;
this.map__50974 = map__50974;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.meta50976 = meta50976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t50975.cljs$lang$type = true;
clustermap.components.search.t50975.cljs$lang$ctorStr = "clustermap.components.search/t50975";
clustermap.components.search.t50975.cljs$lang$ctorPrWriter = ((function (map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.search/t50975");
});})(map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm))
;
clustermap.components.search.t50975.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t50975.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm){
return (function (this$,p__50978){var self__ = this;
var map__50979 = p__50978;var map__50979__$1 = ((cljs.core.seq_QMARK_.call(null,map__50979))?cljs.core.apply.call(null,cljs.core.hash_map,map__50979):map__50979);var state = map__50979__$1;var selected = cljs.core.get.call(null,map__50979__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__50979,map__50979__$1,state,selected,map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__50980 = l;var G__50980__$1 = (((G__50980 == null))?null:jayq.core.$.call(null,G__50980));var G__50980__$2 = (((G__50980__$1 == null))?null:G__50980__$1.parents(".search-component"));var G__50980__$3 = (((G__50980__$2 == null))?null:G__50980__$2.toggle());return G__50980__$3;
});})(path,this$__$1,map__50979,map__50979__$1,state,selected,map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm))
;
clustermap.components.search.t50975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm){
return (function (_50977){var self__ = this;
var _50977__$1 = this;return self__.meta50976;
});})(map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm))
;
clustermap.components.search.t50975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm){
return (function (_50977,meta50976__$1){var self__ = this;
var _50977__$1 = this;return (new clustermap.components.search.t50975(self__.map__50973,self__.p__50964,self__.owner,self__.path_fn,self__.p__50963,self__.map__50974,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.opts,meta50976__$1));
});})(map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t50975 = ((function (map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm){
return (function __GT_t50975(map__50973__$2,p__50964__$1,owner__$1,path_fn__$1,p__50963__$1,map__50974__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,meta50976){return (new clustermap.components.search.t50975(map__50973__$2,p__50964__$1,owner__$1,path_fn__$1,p__50963__$1,map__50974__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,meta50976));
});})(map__50973,map__50973__$1,search_result,type,name,map__50974,map__50974__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t50975(map__50973__$1,p__50964,owner,path_fn,p__50963,map__50974__$1,search_result_link,name,comm,search_result,type,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__50981,n){var map__50983 = p__50981;var map__50983__$1 = ((cljs.core.seq_QMARK_.call(null,map__50983))?cljs.core.apply.call(null,cljs.core.hash_map,map__50983):map__50983);var investor_companies = cljs.core.get.call(null,map__50983__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__50983__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__50983__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3541__auto__ = constituencies;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3541__auto__ = portfolio_companies;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3541__auto__ = investor_companies;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count.call(null,cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",1803637324),cljs.core.get.call(null,constituencies,n)], null);
} else
{if((n < (cljs.core.count.call(null,cons) + cljs.core.count.call(null,pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),cljs.core.get.call(null,pcs,(n - cljs.core.count.call(null,cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investor-company","investor-company",13706558),cljs.core.get.call(null,invs,((n - cljs.core.count.call(null,cons)) - cljs.core.count.call(null,pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__50990 = cljs.core._EQ__EQ_;var expr__50991 = e.keyCode;if(cljs.core.truth_(pred__50990.call(null,clustermap.components.search.ESCAPE_KEY,expr__50991)))
{var G__50993 = om.core.get_node.call(null,owner,"search-component");var G__50993__$1 = (((G__50993 == null))?null:jayq.core.$.call(null,G__50993));var G__50993__$2 = (((G__50993__$1 == null))?null:G__50993__$1.toggle());return G__50993__$2;
} else
{if(cljs.core.truth_(pred__50990.call(null,clustermap.components.search.ENTER_KEY,expr__50991)))
{var vec__50994 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3541__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__50994,(0),null);var res = cljs.core.nth.call(null,vec__50994,(1),null);var G__50995_50996 = om.core.get_node.call(null,owner,"search-component");var G__50995_50997__$1 = (((G__50995_50996 == null))?null:jayq.core.$.call(null,G__50995_50996));var G__50995_50998__$2 = (((G__50995_50997__$1 == null))?null:G__50995_50997__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__50990.call(null,clustermap.components.search.UP_ARROW,expr__50991)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3541__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__50990.call(null,clustermap.components.search.DOWN_ARROW,expr__50991)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3541__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
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
clustermap.components.search.search_component = (function search_component(p__50999,owner){var map__51031 = p__50999;var map__51031__$1 = ((cljs.core.seq_QMARK_.call(null,map__51031))?cljs.core.apply.call(null,cljs.core.hash_map,map__51031):map__51031);var map__51032 = cljs.core.get.call(null,map__51031__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__51032__$1 = ((cljs.core.seq_QMARK_.call(null,map__51032))?cljs.core.apply.call(null,cljs.core.hash_map,map__51032):map__51032);var selection_type = cljs.core.get.call(null,map__51032__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__51032__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__51031__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__51031__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__51033 = om.core.get_shared.call(null,owner);var map__51033__$1 = ((cljs.core.seq_QMARK_.call(null,map__51033))?cljs.core.apply.call(null,cljs.core.hash_map,map__51033):map__51033);var path_fn = cljs.core.get.call(null,map__51033__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__51033__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__51034 = search_results;var map__51034__$1 = ((cljs.core.seq_QMARK_.call(null,map__51034))?cljs.core.apply.call(null,cljs.core.hash_map,map__51034):map__51034);var investor_companies = cljs.core.get.call(null,map__51034__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__51034__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__51034__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t51035 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t51035 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,constituencies,investor_companies,map__51031,selection_value,comm,map__51032,selection_type,p__50999,map__51034,map__51033,meta51036){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__51031 = map__51031;
this.selection_value = selection_value;
this.comm = comm;
this.map__51032 = map__51032;
this.selection_type = selection_type;
this.p__50999 = p__50999;
this.map__51034 = map__51034;
this.map__51033 = map__51033;
this.meta51036 = meta51036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t51035.cljs$lang$type = true;
clustermap.components.search.t51035.cljs$lang$ctorStr = "clustermap.components.search/t51035";
clustermap.components.search.t51035.cljs$lang$ctorPrWriter = ((function (map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.search/t51035");
});})(map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t51035.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t51035.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3541__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3541__auto____$1))
{return or__3541__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3541__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function iter__51038(s__51039){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (){var s__51039__$1 = s__51039;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51039__$1);if(temp__4126__auto__)
{var s__51039__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51039__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__51039__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__51041 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__51040 = (0);while(true){
if((i__51040 < size__4265__auto__))
{var vec__51044 = cljs.core._nth.call(null,c__4264__auto__,i__51040);var idx = cljs.core.nth.call(null,vec__51044,(0),null);var con = cljs.core.nth.call(null,vec__51044,(1),null);cljs.core.chunk_append.call(null,b__51041,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__51040,vec__51044,idx,con,c__4264__auto__,size__4265__auto__,b__51041,s__51039__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__51040,vec__51044,idx,con,c__4264__auto__,size__4265__auto__,b__51041,s__51039__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__51062 = (i__51040 + (1));
i__51040 = G__51062;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51041),iter__51038.call(null,cljs.core.chunk_rest.call(null,s__51039__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51041),null);
}
} else
{var vec__51045 = cljs.core.first.call(null,s__51039__$2);var idx = cljs.core.nth.call(null,vec__51045,(0),null);var con = cljs.core.nth.call(null,vec__51045,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__51045,idx,con,s__51039__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__51045,idx,con,s__51039__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__51038.call(null,cljs.core.rest.call(null,s__51039__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function iter__51046(s__51047){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (){var s__51047__$1 = s__51047;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51047__$1);if(temp__4126__auto__)
{var s__51047__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51047__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__51047__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__51049 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__51048 = (0);while(true){
if((i__51048 < size__4265__auto__))
{var vec__51052 = cljs.core._nth.call(null,c__4264__auto__,i__51048);var idx = cljs.core.nth.call(null,vec__51052,(0),null);var pc = cljs.core.nth.call(null,vec__51052,(1),null);cljs.core.chunk_append.call(null,b__51049,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__51048,vec__51052,idx,pc,c__4264__auto__,size__4265__auto__,b__51049,s__51047__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__51048,vec__51052,idx,pc,c__4264__auto__,size__4265__auto__,b__51049,s__51047__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__51063 = (i__51048 + (1));
i__51048 = G__51063;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51049),iter__51046.call(null,cljs.core.chunk_rest.call(null,s__51047__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51049),null);
}
} else
{var vec__51053 = cljs.core.first.call(null,s__51047__$2);var idx = cljs.core.nth.call(null,vec__51053,(0),null);var pc = cljs.core.nth.call(null,vec__51053,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__51053,idx,pc,s__51047__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__51053,idx,pc,s__51047__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__51046.call(null,cljs.core.rest.call(null,s__51047__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function iter__51054(s__51055){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (){var s__51055__$1 = s__51055;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51055__$1);if(temp__4126__auto__)
{var s__51055__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51055__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__51055__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__51057 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__51056 = (0);while(true){
if((i__51056 < size__4265__auto__))
{var vec__51060 = cljs.core._nth.call(null,c__4264__auto__,i__51056);var idx = cljs.core.nth.call(null,vec__51060,(0),null);var inv = cljs.core.nth.call(null,vec__51060,(1),null);cljs.core.chunk_append.call(null,b__51057,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__51056,vec__51060,idx,inv,c__4264__auto__,size__4265__auto__,b__51057,s__51055__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__51056,vec__51060,idx,inv,c__4264__auto__,size__4265__auto__,b__51057,s__51055__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__51064 = (i__51056 + (1));
i__51056 = G__51064;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51057),iter__51054.call(null,cljs.core.chunk_rest.call(null,s__51055__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51057),null);
}
} else
{var vec__51061 = cljs.core.first.call(null,s__51055__$2);var idx = cljs.core.nth.call(null,vec__51061,(0),null);var inv = cljs.core.nth.call(null,vec__51061,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__51061,idx,inv,s__51055__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__51061,idx,inv,s__51055__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__51054.call(null,cljs.core.rest.call(null,s__51055__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t51035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (_51037){var self__ = this;
var _51037__$1 = this;return self__.meta51036;
});})(map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t51035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function (_51037,meta51036__$1){var self__ = this;
var _51037__$1 = this;return (new clustermap.components.search.t51035(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.map__51031,self__.selection_value,self__.comm,self__.map__51032,self__.selection_type,self__.p__50999,self__.map__51034,self__.map__51033,meta51036__$1));
});})(map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t51035 = ((function (map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results){
return (function __GT_t51035(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__51031__$2,selection_value__$1,comm__$1,map__51032__$2,selection_type__$1,p__50999__$1,map__51034__$2,map__51033__$2,meta51036){return (new clustermap.components.search.t51035(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__51031__$2,selection_value__$1,comm__$1,map__51032__$2,selection_type__$1,p__50999__$1,map__51034__$2,map__51033__$2,meta51036));
});})(map__51033,map__51033__$1,path_fn,comm,path_fn__$1,map__51034,map__51034__$1,investor_companies,portfolio_companies,constituencies,map__51031,map__51031__$1,map__51032,map__51032__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t51035(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,investor_companies,map__51031__$1,selection_value,comm,map__51032__$1,selection_type,p__50999,map__51034__$1,map__51033__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map