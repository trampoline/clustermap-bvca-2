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
clustermap.components.search.search_result_link = (function search_result_link(p__25440,owner,p__25441){var map__25450 = p__25440;var map__25450__$1 = ((cljs.core.seq_QMARK_.call(null,map__25450))?cljs.core.apply.call(null,cljs.core.hash_map,map__25450):map__25450);var search_result = map__25450__$1;var type = cljs.core.get.call(null,map__25450__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__25450__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__25451 = p__25441;var map__25451__$1 = ((cljs.core.seq_QMARK_.call(null,map__25451))?cljs.core.apply.call(null,cljs.core.hash_map,map__25451):map__25451);var opts = map__25451__$1;var path_fn = cljs.core.get.call(null,map__25451__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__25451__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t25452 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t25452 = (function (p__25440,owner,p__25441,path_fn,search_result_link,name,comm,search_result,type,map__25451,opts,map__25450,meta25453){
this.p__25440 = p__25440;
this.owner = owner;
this.p__25441 = p__25441;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__25451 = map__25451;
this.opts = opts;
this.map__25450 = map__25450;
this.meta25453 = meta25453;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t25452.cljs$lang$type = true;
clustermap.components.search.t25452.cljs$lang$ctorStr = "clustermap.components.search/t25452";
clustermap.components.search.t25452.cljs$lang$ctorPrWriter = ((function (map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t25452");
});})(map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm))
;
clustermap.components.search.t25452.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t25452.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm){
return (function (this$,p__25455){var self__ = this;
var map__25456 = p__25455;var map__25456__$1 = ((cljs.core.seq_QMARK_.call(null,map__25456))?cljs.core.apply.call(null,cljs.core.hash_map,map__25456):map__25456);var state = map__25456__$1;var selected = cljs.core.get.call(null,map__25456__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__25456,map__25456__$1,state,selected,map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__25457 = l;var G__25457__$1 = (((G__25457 == null))?null:jayq.core.$.call(null,G__25457));var G__25457__$2 = (((G__25457__$1 == null))?null:G__25457__$1.parents(".search-component"));var G__25457__$3 = (((G__25457__$2 == null))?null:G__25457__$2.toggle());return G__25457__$3;
});})(path,this$__$1,map__25456,map__25456__$1,state,selected,map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm))
;
clustermap.components.search.t25452.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm){
return (function (_25454){var self__ = this;
var _25454__$1 = this;return self__.meta25453;
});})(map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm))
;
clustermap.components.search.t25452.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm){
return (function (_25454,meta25453__$1){var self__ = this;
var _25454__$1 = this;return (new clustermap.components.search.t25452(self__.p__25440,self__.owner,self__.p__25441,self__.path_fn,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.map__25451,self__.opts,self__.map__25450,meta25453__$1));
});})(map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t25452 = ((function (map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm){
return (function __GT_t25452(p__25440__$1,owner__$1,p__25441__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__25451__$2,opts__$1,map__25450__$2,meta25453){return (new clustermap.components.search.t25452(p__25440__$1,owner__$1,p__25441__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,map__25451__$2,opts__$1,map__25450__$2,meta25453));
});})(map__25450,map__25450__$1,search_result,type,name,map__25451,map__25451__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t25452(p__25440,owner,p__25441,path_fn,search_result_link,name,comm,search_result,type,map__25451__$1,opts,map__25450__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__25458,n){var map__25460 = p__25458;var map__25460__$1 = ((cljs.core.seq_QMARK_.call(null,map__25460))?cljs.core.apply.call(null,cljs.core.hash_map,map__25460):map__25460);var investor_companies = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__25460__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__25467 = cljs.core._EQ__EQ_;var expr__25468 = e.keyCode;if(cljs.core.truth_(pred__25467.call(null,clustermap.components.search.ESCAPE_KEY,expr__25468)))
{var G__25470 = om.core.get_node.call(null,owner,"search-component");var G__25470__$1 = (((G__25470 == null))?null:jayq.core.$.call(null,G__25470));var G__25470__$2 = (((G__25470__$1 == null))?null:G__25470__$1.toggle());return G__25470__$2;
} else
{if(cljs.core.truth_(pred__25467.call(null,clustermap.components.search.ENTER_KEY,expr__25468)))
{var vec__25471 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__25471,(0),null);var res = cljs.core.nth.call(null,vec__25471,(1),null);var G__25472_25473 = om.core.get_node.call(null,owner,"search-component");var G__25472_25474__$1 = (((G__25472_25473 == null))?null:jayq.core.$.call(null,G__25472_25473));var G__25472_25475__$2 = (((G__25472_25474__$1 == null))?null:G__25472_25474__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__25467.call(null,clustermap.components.search.UP_ARROW,expr__25468)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__25467.call(null,clustermap.components.search.DOWN_ARROW,expr__25468)))
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
clustermap.components.search.search_component = (function search_component(p__25476,owner){var map__25508 = p__25476;var map__25508__$1 = ((cljs.core.seq_QMARK_.call(null,map__25508))?cljs.core.apply.call(null,cljs.core.hash_map,map__25508):map__25508);var map__25509 = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__25509__$1 = ((cljs.core.seq_QMARK_.call(null,map__25509))?cljs.core.apply.call(null,cljs.core.hash_map,map__25509):map__25509);var selection_type = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__25508__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__25510 = om.core.get_shared.call(null,owner);var map__25510__$1 = ((cljs.core.seq_QMARK_.call(null,map__25510))?cljs.core.apply.call(null,cljs.core.hash_map,map__25510):map__25510);var path_fn = cljs.core.get.call(null,map__25510__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__25510__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__25511 = search_results;var map__25511__$1 = ((cljs.core.seq_QMARK_.call(null,map__25511))?cljs.core.apply.call(null,cljs.core.hash_map,map__25511):map__25511);var investor_companies = cljs.core.get.call(null,map__25511__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__25511__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__25511__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t25512 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t25512 = (function (search_results,search_component,owner,path_fn,p__25476,view,portfolio_companies,map__25510,constituencies,investor_companies,selection_value,comm,map__25508,map__25509,selection_type,map__25511,meta25513){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.p__25476 = p__25476;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__25510 = map__25510;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__25508 = map__25508;
this.map__25509 = map__25509;
this.selection_type = selection_type;
this.map__25511 = map__25511;
this.meta25513 = meta25513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t25512.cljs$lang$type = true;
clustermap.components.search.t25512.cljs$lang$ctorStr = "clustermap.components.search/t25512";
clustermap.components.search.t25512.cljs$lang$ctorPrWriter = ((function (map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t25512");
});})(map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t25512.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t25512.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function iter__25515(s__25516){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (){var s__25516__$1 = s__25516;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25516__$1);if(temp__4126__auto__)
{var s__25516__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25516__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__25516__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__25518 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__25517 = (0);while(true){
if((i__25517 < size__4267__auto__))
{var vec__25521 = cljs.core._nth.call(null,c__4266__auto__,i__25517);var idx = cljs.core.nth.call(null,vec__25521,(0),null);var con = cljs.core.nth.call(null,vec__25521,(1),null);cljs.core.chunk_append.call(null,b__25518,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__25517,vec__25521,idx,con,c__4266__auto__,size__4267__auto__,b__25518,s__25516__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__25517,vec__25521,idx,con,c__4266__auto__,size__4267__auto__,b__25518,s__25516__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__25539 = (i__25517 + (1));
i__25517 = G__25539;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25518),iter__25515.call(null,cljs.core.chunk_rest.call(null,s__25516__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25518),null);
}
} else
{var vec__25522 = cljs.core.first.call(null,s__25516__$2);var idx = cljs.core.nth.call(null,vec__25522,(0),null);var con = cljs.core.nth.call(null,vec__25522,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__25522,idx,con,s__25516__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__25522,idx,con,s__25516__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__25515.call(null,cljs.core.rest.call(null,s__25516__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function iter__25523(s__25524){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (){var s__25524__$1 = s__25524;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25524__$1);if(temp__4126__auto__)
{var s__25524__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25524__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__25524__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__25526 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__25525 = (0);while(true){
if((i__25525 < size__4267__auto__))
{var vec__25529 = cljs.core._nth.call(null,c__4266__auto__,i__25525);var idx = cljs.core.nth.call(null,vec__25529,(0),null);var pc = cljs.core.nth.call(null,vec__25529,(1),null);cljs.core.chunk_append.call(null,b__25526,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__25525,vec__25529,idx,pc,c__4266__auto__,size__4267__auto__,b__25526,s__25524__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__25525,vec__25529,idx,pc,c__4266__auto__,size__4267__auto__,b__25526,s__25524__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__25540 = (i__25525 + (1));
i__25525 = G__25540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25526),iter__25523.call(null,cljs.core.chunk_rest.call(null,s__25524__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25526),null);
}
} else
{var vec__25530 = cljs.core.first.call(null,s__25524__$2);var idx = cljs.core.nth.call(null,vec__25530,(0),null);var pc = cljs.core.nth.call(null,vec__25530,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__25530,idx,pc,s__25524__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__25530,idx,pc,s__25524__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__25523.call(null,cljs.core.rest.call(null,s__25524__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function iter__25531(s__25532){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (){var s__25532__$1 = s__25532;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25532__$1);if(temp__4126__auto__)
{var s__25532__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__25532__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__25532__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__25534 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__25533 = (0);while(true){
if((i__25533 < size__4267__auto__))
{var vec__25537 = cljs.core._nth.call(null,c__4266__auto__,i__25533);var idx = cljs.core.nth.call(null,vec__25537,(0),null);var inv = cljs.core.nth.call(null,vec__25537,(1),null);cljs.core.chunk_append.call(null,b__25534,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__25533,vec__25537,idx,inv,c__4266__auto__,size__4267__auto__,b__25534,s__25532__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__25533,vec__25537,idx,inv,c__4266__auto__,size__4267__auto__,b__25534,s__25532__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__25541 = (i__25533 + (1));
i__25533 = G__25541;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25534),iter__25531.call(null,cljs.core.chunk_rest.call(null,s__25532__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25534),null);
}
} else
{var vec__25538 = cljs.core.first.call(null,s__25532__$2);var idx = cljs.core.nth.call(null,vec__25538,(0),null);var inv = cljs.core.nth.call(null,vec__25538,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__25538,idx,inv,s__25532__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__25538,idx,inv,s__25532__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__25531.call(null,cljs.core.rest.call(null,s__25532__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t25512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (_25514){var self__ = this;
var _25514__$1 = this;return self__.meta25513;
});})(map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t25512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function (_25514,meta25513__$1){var self__ = this;
var _25514__$1 = this;return (new clustermap.components.search.t25512(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.p__25476,self__.view,self__.portfolio_companies,self__.map__25510,self__.constituencies,self__.investor_companies,self__.selection_value,self__.comm,self__.map__25508,self__.map__25509,self__.selection_type,self__.map__25511,meta25513__$1));
});})(map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t25512 = ((function (map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results){
return (function __GT_t25512(search_results__$1,search_component__$1,owner__$1,path_fn__$2,p__25476__$1,view__$1,portfolio_companies__$1,map__25510__$2,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,map__25508__$2,map__25509__$2,selection_type__$1,map__25511__$2,meta25513){return (new clustermap.components.search.t25512(search_results__$1,search_component__$1,owner__$1,path_fn__$2,p__25476__$1,view__$1,portfolio_companies__$1,map__25510__$2,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,map__25508__$2,map__25509__$2,selection_type__$1,map__25511__$2,meta25513));
});})(map__25510,map__25510__$1,path_fn,comm,path_fn__$1,map__25511,map__25511__$1,investor_companies,portfolio_companies,constituencies,map__25508,map__25508__$1,map__25509,map__25509__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t25512(search_results,search_component,owner,path_fn__$1,p__25476,view,portfolio_companies,map__25510__$1,constituencies,investor_companies,selection_value,comm,map__25508__$1,map__25509__$1,selection_type,map__25511__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
