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
clustermap.components.search.search_result_link = (function search_result_link(p__26095,owner,p__26096){var map__26105 = p__26095;var map__26105__$1 = ((cljs.core.seq_QMARK_.call(null,map__26105))?cljs.core.apply.call(null,cljs.core.hash_map,map__26105):map__26105);var search_result = map__26105__$1;var type = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__26105__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__26106 = p__26096;var map__26106__$1 = ((cljs.core.seq_QMARK_.call(null,map__26106))?cljs.core.apply.call(null,cljs.core.hash_map,map__26106):map__26106);var opts = map__26106__$1;var path_fn = cljs.core.get.call(null,map__26106__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__26106__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t26107 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t26107 = (function (owner,path_fn,search_result_link,name,comm,p__26095,search_result,type,map__26106,opts,p__26096,map__26105,meta26108){
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.p__26095 = p__26095;
this.search_result = search_result;
this.type = type;
this.map__26106 = map__26106;
this.opts = opts;
this.p__26096 = p__26096;
this.map__26105 = map__26105;
this.meta26108 = meta26108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t26107.cljs$lang$type = true;
clustermap.components.search.t26107.cljs$lang$ctorStr = "clustermap.components.search/t26107";
clustermap.components.search.t26107.cljs$lang$ctorPrWriter = ((function (map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t26107");
});})(map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm))
;
clustermap.components.search.t26107.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t26107.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm){
return (function (this$,p__26110){var self__ = this;
var map__26111 = p__26110;var map__26111__$1 = ((cljs.core.seq_QMARK_.call(null,map__26111))?cljs.core.apply.call(null,cljs.core.hash_map,map__26111):map__26111);var state = map__26111__$1;var selected = cljs.core.get.call(null,map__26111__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__26111,map__26111__$1,state,selected,map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__26112 = l;var G__26112__$1 = (((G__26112 == null))?null:jayq.core.$.call(null,G__26112));var G__26112__$2 = (((G__26112__$1 == null))?null:G__26112__$1.parents(".search-component"));var G__26112__$3 = (((G__26112__$2 == null))?null:G__26112__$2.toggle());return G__26112__$3;
});})(path,this$__$1,map__26111,map__26111__$1,state,selected,map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm))
;
clustermap.components.search.t26107.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm){
return (function (_26109){var self__ = this;
var _26109__$1 = this;return self__.meta26108;
});})(map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm))
;
clustermap.components.search.t26107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm){
return (function (_26109,meta26108__$1){var self__ = this;
var _26109__$1 = this;return (new clustermap.components.search.t26107(self__.owner,self__.path_fn,self__.search_result_link,self__.name,self__.comm,self__.p__26095,self__.search_result,self__.type,self__.map__26106,self__.opts,self__.p__26096,self__.map__26105,meta26108__$1));
});})(map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t26107 = ((function (map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm){
return (function __GT_t26107(owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,p__26095__$1,search_result__$1,type__$1,map__26106__$2,opts__$1,p__26096__$1,map__26105__$2,meta26108){return (new clustermap.components.search.t26107(owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,p__26095__$1,search_result__$1,type__$1,map__26106__$2,opts__$1,p__26096__$1,map__26105__$2,meta26108));
});})(map__26105,map__26105__$1,search_result,type,name,map__26106,map__26106__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t26107(owner,path_fn,search_result_link,name,comm,p__26095,search_result,type,map__26106__$1,opts,p__26096,map__26105__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__26113,n){var map__26115 = p__26113;var map__26115__$1 = ((cljs.core.seq_QMARK_.call(null,map__26115))?cljs.core.apply.call(null,cljs.core.hash_map,map__26115):map__26115);var investor_companies = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__26115__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__26122 = cljs.core._EQ__EQ_;var expr__26123 = e.keyCode;if(cljs.core.truth_(pred__26122.call(null,clustermap.components.search.ESCAPE_KEY,expr__26123)))
{var G__26125 = om.core.get_node.call(null,owner,"search-component");var G__26125__$1 = (((G__26125 == null))?null:jayq.core.$.call(null,G__26125));var G__26125__$2 = (((G__26125__$1 == null))?null:G__26125__$1.toggle());return G__26125__$2;
} else
{if(cljs.core.truth_(pred__26122.call(null,clustermap.components.search.ENTER_KEY,expr__26123)))
{var vec__26126 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__26126,(0),null);var res = cljs.core.nth.call(null,vec__26126,(1),null);var G__26127_26128 = om.core.get_node.call(null,owner,"search-component");var G__26127_26129__$1 = (((G__26127_26128 == null))?null:jayq.core.$.call(null,G__26127_26128));var G__26127_26130__$2 = (((G__26127_26129__$1 == null))?null:G__26127_26129__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__26122.call(null,clustermap.components.search.UP_ARROW,expr__26123)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__26122.call(null,clustermap.components.search.DOWN_ARROW,expr__26123)))
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
clustermap.components.search.search_component = (function search_component(p__26131,owner){var map__26163 = p__26131;var map__26163__$1 = ((cljs.core.seq_QMARK_.call(null,map__26163))?cljs.core.apply.call(null,cljs.core.hash_map,map__26163):map__26163);var map__26164 = cljs.core.get.call(null,map__26163__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__26164__$1 = ((cljs.core.seq_QMARK_.call(null,map__26164))?cljs.core.apply.call(null,cljs.core.hash_map,map__26164):map__26164);var selection_type = cljs.core.get.call(null,map__26164__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__26164__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__26163__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__26163__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__26165 = om.core.get_shared.call(null,owner);var map__26165__$1 = ((cljs.core.seq_QMARK_.call(null,map__26165))?cljs.core.apply.call(null,cljs.core.hash_map,map__26165):map__26165);var path_fn = cljs.core.get.call(null,map__26165__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__26165__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__26166 = search_results;var map__26166__$1 = ((cljs.core.seq_QMARK_.call(null,map__26166))?cljs.core.apply.call(null,cljs.core.hash_map,map__26166):map__26166);var investor_companies = cljs.core.get.call(null,map__26166__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__26166__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__26166__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t26167 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t26167 = (function (search_results,search_component,owner,path_fn,view,map__26164,portfolio_companies,constituencies,investor_companies,map__26163,selection_value,comm,map__26165,p__26131,selection_type,map__26166,meta26168){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.map__26164 = map__26164;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__26163 = map__26163;
this.selection_value = selection_value;
this.comm = comm;
this.map__26165 = map__26165;
this.p__26131 = p__26131;
this.selection_type = selection_type;
this.map__26166 = map__26166;
this.meta26168 = meta26168;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t26167.cljs$lang$type = true;
clustermap.components.search.t26167.cljs$lang$ctorStr = "clustermap.components.search/t26167";
clustermap.components.search.t26167.cljs$lang$ctorPrWriter = ((function (map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t26167");
});})(map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t26167.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t26167.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function iter__26170(s__26171){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (){var s__26171__$1 = s__26171;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26171__$1);if(temp__4126__auto__)
{var s__26171__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26171__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__26171__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__26173 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__26172 = (0);while(true){
if((i__26172 < size__4267__auto__))
{var vec__26176 = cljs.core._nth.call(null,c__4266__auto__,i__26172);var idx = cljs.core.nth.call(null,vec__26176,(0),null);var con = cljs.core.nth.call(null,vec__26176,(1),null);cljs.core.chunk_append.call(null,b__26173,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__26172,vec__26176,idx,con,c__4266__auto__,size__4267__auto__,b__26173,s__26171__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__26172,vec__26176,idx,con,c__4266__auto__,size__4267__auto__,b__26173,s__26171__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__26194 = (i__26172 + (1));
i__26172 = G__26194;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26173),iter__26170.call(null,cljs.core.chunk_rest.call(null,s__26171__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26173),null);
}
} else
{var vec__26177 = cljs.core.first.call(null,s__26171__$2);var idx = cljs.core.nth.call(null,vec__26177,(0),null);var con = cljs.core.nth.call(null,vec__26177,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__26177,idx,con,s__26171__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__26177,idx,con,s__26171__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__26170.call(null,cljs.core.rest.call(null,s__26171__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function iter__26178(s__26179){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (){var s__26179__$1 = s__26179;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26179__$1);if(temp__4126__auto__)
{var s__26179__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26179__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__26179__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__26181 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__26180 = (0);while(true){
if((i__26180 < size__4267__auto__))
{var vec__26184 = cljs.core._nth.call(null,c__4266__auto__,i__26180);var idx = cljs.core.nth.call(null,vec__26184,(0),null);var pc = cljs.core.nth.call(null,vec__26184,(1),null);cljs.core.chunk_append.call(null,b__26181,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__26180,vec__26184,idx,pc,c__4266__auto__,size__4267__auto__,b__26181,s__26179__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__26180,vec__26184,idx,pc,c__4266__auto__,size__4267__auto__,b__26181,s__26179__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__26195 = (i__26180 + (1));
i__26180 = G__26195;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26181),iter__26178.call(null,cljs.core.chunk_rest.call(null,s__26179__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26181),null);
}
} else
{var vec__26185 = cljs.core.first.call(null,s__26179__$2);var idx = cljs.core.nth.call(null,vec__26185,(0),null);var pc = cljs.core.nth.call(null,vec__26185,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__26185,idx,pc,s__26179__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__26185,idx,pc,s__26179__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__26178.call(null,cljs.core.rest.call(null,s__26179__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function iter__26186(s__26187){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (){var s__26187__$1 = s__26187;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__26187__$1);if(temp__4126__auto__)
{var s__26187__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__26187__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__26187__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__26189 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__26188 = (0);while(true){
if((i__26188 < size__4267__auto__))
{var vec__26192 = cljs.core._nth.call(null,c__4266__auto__,i__26188);var idx = cljs.core.nth.call(null,vec__26192,(0),null);var inv = cljs.core.nth.call(null,vec__26192,(1),null);cljs.core.chunk_append.call(null,b__26189,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__26188,vec__26192,idx,inv,c__4266__auto__,size__4267__auto__,b__26189,s__26187__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__26188,vec__26192,idx,inv,c__4266__auto__,size__4267__auto__,b__26189,s__26187__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__26196 = (i__26188 + (1));
i__26188 = G__26196;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26189),iter__26186.call(null,cljs.core.chunk_rest.call(null,s__26187__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__26189),null);
}
} else
{var vec__26193 = cljs.core.first.call(null,s__26187__$2);var idx = cljs.core.nth.call(null,vec__26193,(0),null);var inv = cljs.core.nth.call(null,vec__26193,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__26193,idx,inv,s__26187__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__26193,idx,inv,s__26187__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__26186.call(null,cljs.core.rest.call(null,s__26187__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t26167.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (_26169){var self__ = this;
var _26169__$1 = this;return self__.meta26168;
});})(map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t26167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function (_26169,meta26168__$1){var self__ = this;
var _26169__$1 = this;return (new clustermap.components.search.t26167(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.map__26164,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.map__26163,self__.selection_value,self__.comm,self__.map__26165,self__.p__26131,self__.selection_type,self__.map__26166,meta26168__$1));
});})(map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t26167 = ((function (map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results){
return (function __GT_t26167(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__26164__$2,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__26163__$2,selection_value__$1,comm__$1,map__26165__$2,p__26131__$1,selection_type__$1,map__26166__$2,meta26168){return (new clustermap.components.search.t26167(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,map__26164__$2,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__26163__$2,selection_value__$1,comm__$1,map__26165__$2,p__26131__$1,selection_type__$1,map__26166__$2,meta26168));
});})(map__26165,map__26165__$1,path_fn,comm,path_fn__$1,map__26166,map__26166__$1,investor_companies,portfolio_companies,constituencies,map__26163,map__26163__$1,map__26164,map__26164__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t26167(search_results,search_component,owner,path_fn__$1,view,map__26164__$1,portfolio_companies,constituencies,investor_companies,map__26163__$1,selection_value,comm,map__26165__$1,p__26131,selection_type,map__26166__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
