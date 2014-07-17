// Compiled by ClojureScript 0.0-2261
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
clustermap.components.search.search_result_link = (function search_result_link(p__49490,owner,p__49491){var map__49500 = p__49490;var map__49500__$1 = ((cljs.core.seq_QMARK_.call(null,map__49500))?cljs.core.apply.call(null,cljs.core.hash_map,map__49500):map__49500);var search_result = map__49500__$1;var type = cljs.core.get.call(null,map__49500__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__49500__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__49501 = p__49491;var map__49501__$1 = ((cljs.core.seq_QMARK_.call(null,map__49501))?cljs.core.apply.call(null,cljs.core.hash_map,map__49501):map__49501);var opts = map__49501__$1;var path_fn = cljs.core.get.call(null,map__49501__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__49501__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t49502 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t49502 = (function (owner,path_fn,search_result_link,name,p__49490,comm,search_result,type,p__49491,map__49500,map__49501,opts,meta49503){
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.p__49490 = p__49490;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__49491 = p__49491;
this.map__49500 = map__49500;
this.map__49501 = map__49501;
this.opts = opts;
this.meta49503 = meta49503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t49502.cljs$lang$type = true;
clustermap.components.search.t49502.cljs$lang$ctorStr = "clustermap.components.search/t49502";
clustermap.components.search.t49502.cljs$lang$ctorPrWriter = ((function (map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t49502");
});})(map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm))
;
clustermap.components.search.t49502.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t49502.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm){
return (function (this$,p__49505){var self__ = this;
var map__49506 = p__49505;var map__49506__$1 = ((cljs.core.seq_QMARK_.call(null,map__49506))?cljs.core.apply.call(null,cljs.core.hash_map,map__49506):map__49506);var state = map__49506__$1;var selected = cljs.core.get.call(null,map__49506__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__49506,map__49506__$1,state,selected,map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__49507 = l;var G__49507__$1 = (((G__49507 == null))?null:jayq.core.$.call(null,G__49507));var G__49507__$2 = (((G__49507__$1 == null))?null:G__49507__$1.parents(".search-component"));var G__49507__$3 = (((G__49507__$2 == null))?null:G__49507__$2.toggle());return G__49507__$3;
});})(path,this$__$1,map__49506,map__49506__$1,state,selected,map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm))
;
clustermap.components.search.t49502.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm){
return (function (_49504){var self__ = this;
var _49504__$1 = this;return self__.meta49503;
});})(map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm))
;
clustermap.components.search.t49502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm){
return (function (_49504,meta49503__$1){var self__ = this;
var _49504__$1 = this;return (new clustermap.components.search.t49502(self__.owner,self__.path_fn,self__.search_result_link,self__.name,self__.p__49490,self__.comm,self__.search_result,self__.type,self__.p__49491,self__.map__49500,self__.map__49501,self__.opts,meta49503__$1));
});})(map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t49502 = ((function (map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm){
return (function __GT_t49502(owner__$1,path_fn__$1,search_result_link__$1,name__$1,p__49490__$1,comm__$1,search_result__$1,type__$1,p__49491__$1,map__49500__$2,map__49501__$2,opts__$1,meta49503){return (new clustermap.components.search.t49502(owner__$1,path_fn__$1,search_result_link__$1,name__$1,p__49490__$1,comm__$1,search_result__$1,type__$1,p__49491__$1,map__49500__$2,map__49501__$2,opts__$1,meta49503));
});})(map__49500,map__49500__$1,search_result,type,name,map__49501,map__49501__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t49502(owner,path_fn,search_result_link,name,p__49490,comm,search_result,type,p__49491,map__49500__$1,map__49501__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__49508,n){var map__49510 = p__49508;var map__49510__$1 = ((cljs.core.seq_QMARK_.call(null,map__49510))?cljs.core.apply.call(null,cljs.core.hash_map,map__49510):map__49510);var investor_companies = cljs.core.get.call(null,map__49510__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__49510__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__49510__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3543__auto__ = portfolio_companies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3543__auto__ = investor_companies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__49517 = cljs.core._EQ__EQ_;var expr__49518 = e.keyCode;if(cljs.core.truth_(pred__49517.call(null,clustermap.components.search.ESCAPE_KEY,expr__49518)))
{var G__49520 = om.core.get_node.call(null,owner,"search-component");var G__49520__$1 = (((G__49520 == null))?null:jayq.core.$.call(null,G__49520));var G__49520__$2 = (((G__49520__$1 == null))?null:G__49520__$1.toggle());return G__49520__$2;
} else
{if(cljs.core.truth_(pred__49517.call(null,clustermap.components.search.ENTER_KEY,expr__49518)))
{var vec__49521 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__49521,(0),null);var res = cljs.core.nth.call(null,vec__49521,(1),null);var G__49522_49523 = om.core.get_node.call(null,owner,"search-component");var G__49522_49524__$1 = (((G__49522_49523 == null))?null:jayq.core.$.call(null,G__49522_49523));var G__49522_49525__$2 = (((G__49522_49524__$1 == null))?null:G__49522_49524__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__49517.call(null,clustermap.components.search.UP_ARROW,expr__49518)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__49517.call(null,clustermap.components.search.DOWN_ARROW,expr__49518)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
clustermap.components.search.search_component = (function search_component(p__49526,owner){var map__49558 = p__49526;var map__49558__$1 = ((cljs.core.seq_QMARK_.call(null,map__49558))?cljs.core.apply.call(null,cljs.core.hash_map,map__49558):map__49558);var map__49559 = cljs.core.get.call(null,map__49558__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__49559__$1 = ((cljs.core.seq_QMARK_.call(null,map__49559))?cljs.core.apply.call(null,cljs.core.hash_map,map__49559):map__49559);var selection_type = cljs.core.get.call(null,map__49559__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__49559__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__49558__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__49558__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__49560 = om.core.get_shared.call(null,owner);var map__49560__$1 = ((cljs.core.seq_QMARK_.call(null,map__49560))?cljs.core.apply.call(null,cljs.core.hash_map,map__49560):map__49560);var path_fn = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__49560__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__49561 = search_results;var map__49561__$1 = ((cljs.core.seq_QMARK_.call(null,map__49561))?cljs.core.apply.call(null,cljs.core.hash_map,map__49561):map__49561);var investor_companies = cljs.core.get.call(null,map__49561__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__49561__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__49561__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t49562 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t49562 = (function (search_results,search_component,owner,path_fn,view,map__49559,portfolio_companies,constituencies,map__49558,investor_companies,selection_value,comm,map__49560,p__49526,selection_type,map__49561,meta49563){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__49559 = map__49559;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__49558 = map__49558;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__49560 = map__49560;
this.p__49526 = p__49526;
this.selection_type = selection_type;
this.map__49561 = map__49561;
this.meta49563 = meta49563;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t49562.cljs$lang$type = true;
clustermap.components.search.t49562.cljs$lang$ctorStr = "clustermap.components.search/t49562";
clustermap.components.search.t49562.cljs$lang$ctorPrWriter = ((function (map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t49562");
});})(map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t49562.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t49562.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3543__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function iter__49565(s__49566){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (){var s__49566__$1 = s__49566;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49566__$1);if(temp__4126__auto__)
{var s__49566__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49566__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__49566__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__49568 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__49567 = (0);while(true){
if((i__49567 < size__4267__auto__))
{var vec__49571 = cljs.core._nth.call(null,c__4266__auto__,i__49567);var idx = cljs.core.nth.call(null,vec__49571,(0),null);var con = cljs.core.nth.call(null,vec__49571,(1),null);cljs.core.chunk_append.call(null,b__49568,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__49567,vec__49571,idx,con,c__4266__auto__,size__4267__auto__,b__49568,s__49566__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__49567,vec__49571,idx,con,c__4266__auto__,size__4267__auto__,b__49568,s__49566__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__49589 = (i__49567 + (1));
i__49567 = G__49589;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49568),iter__49565.call(null,cljs.core.chunk_rest.call(null,s__49566__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49568),null);
}
} else
{var vec__49572 = cljs.core.first.call(null,s__49566__$2);var idx = cljs.core.nth.call(null,vec__49572,(0),null);var con = cljs.core.nth.call(null,vec__49572,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__49572,idx,con,s__49566__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__49572,idx,con,s__49566__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__49565.call(null,cljs.core.rest.call(null,s__49566__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function iter__49573(s__49574){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (){var s__49574__$1 = s__49574;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49574__$1);if(temp__4126__auto__)
{var s__49574__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49574__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__49574__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__49576 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__49575 = (0);while(true){
if((i__49575 < size__4267__auto__))
{var vec__49579 = cljs.core._nth.call(null,c__4266__auto__,i__49575);var idx = cljs.core.nth.call(null,vec__49579,(0),null);var pc = cljs.core.nth.call(null,vec__49579,(1),null);cljs.core.chunk_append.call(null,b__49576,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__49575,vec__49579,idx,pc,c__4266__auto__,size__4267__auto__,b__49576,s__49574__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__49575,vec__49579,idx,pc,c__4266__auto__,size__4267__auto__,b__49576,s__49574__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__49590 = (i__49575 + (1));
i__49575 = G__49590;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49576),iter__49573.call(null,cljs.core.chunk_rest.call(null,s__49574__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49576),null);
}
} else
{var vec__49580 = cljs.core.first.call(null,s__49574__$2);var idx = cljs.core.nth.call(null,vec__49580,(0),null);var pc = cljs.core.nth.call(null,vec__49580,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__49580,idx,pc,s__49574__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__49580,idx,pc,s__49574__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__49573.call(null,cljs.core.rest.call(null,s__49574__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function iter__49581(s__49582){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (){var s__49582__$1 = s__49582;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49582__$1);if(temp__4126__auto__)
{var s__49582__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49582__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__49582__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__49584 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__49583 = (0);while(true){
if((i__49583 < size__4267__auto__))
{var vec__49587 = cljs.core._nth.call(null,c__4266__auto__,i__49583);var idx = cljs.core.nth.call(null,vec__49587,(0),null);var inv = cljs.core.nth.call(null,vec__49587,(1),null);cljs.core.chunk_append.call(null,b__49584,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__49583,vec__49587,idx,inv,c__4266__auto__,size__4267__auto__,b__49584,s__49582__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__49583,vec__49587,idx,inv,c__4266__auto__,size__4267__auto__,b__49584,s__49582__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__49591 = (i__49583 + (1));
i__49583 = G__49591;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49584),iter__49581.call(null,cljs.core.chunk_rest.call(null,s__49582__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49584),null);
}
} else
{var vec__49588 = cljs.core.first.call(null,s__49582__$2);var idx = cljs.core.nth.call(null,vec__49588,(0),null);var inv = cljs.core.nth.call(null,vec__49588,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__49588,idx,inv,s__49582__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__49588,idx,inv,s__49582__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__49581.call(null,cljs.core.rest.call(null,s__49582__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t49562.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (_49564){var self__ = this;
var _49564__$1 = this;return self__.meta49563;
});})(map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t49562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function (_49564,meta49563__$1){var self__ = this;
var _49564__$1 = this;return (new clustermap.components.search.t49562(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.map__49559,self__.portfolio_companies,self__.constituencies,self__.map__49558,self__.investor_companies,self__.selection_value,self__.comm,self__.map__49560,self__.p__49526,self__.selection_type,self__.map__49561,meta49563__$1));
});})(map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t49562 = ((function (map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results){
return (function __GT_t49562(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__49559__$2,portfolio_companies__$1,constituencies__$1,map__49558__$2,investor_companies__$1,selection_value__$1,comm__$1,map__49560__$2,p__49526__$1,selection_type__$1,map__49561__$2,meta49563){return (new clustermap.components.search.t49562(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__49559__$2,portfolio_companies__$1,constituencies__$1,map__49558__$2,investor_companies__$1,selection_value__$1,comm__$1,map__49560__$2,p__49526__$1,selection_type__$1,map__49561__$2,meta49563));
});})(map__49560,map__49560__$1,path_fn,comm,path_fn__$1,map__49561,map__49561__$1,investor_companies,portfolio_companies,constituencies,map__49558,map__49558__$1,map__49559,map__49559__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t49562(search_results,search_component,owner,path_fn__$1,view,map__49559__$1,portfolio_companies,constituencies,map__49558__$1,investor_companies,selection_value,comm,map__49560__$1,p__49526,selection_type,map__49561__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map