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
clustermap.components.search.search_result_link = (function search_result_link(p__21306,owner,p__21307){var map__21316 = p__21306;var map__21316__$1 = ((cljs.core.seq_QMARK_.call(null,map__21316))?cljs.core.apply.call(null,cljs.core.hash_map,map__21316):map__21316);var search_result = map__21316__$1;var type = cljs.core.get.call(null,map__21316__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__21316__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__21317 = p__21307;var map__21317__$1 = ((cljs.core.seq_QMARK_.call(null,map__21317))?cljs.core.apply.call(null,cljs.core.hash_map,map__21317):map__21317);var opts = map__21317__$1;var path_fn = cljs.core.get.call(null,map__21317__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__21317__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t21318 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21318 = (function (p__21307,map__21317,owner,path_fn,p__21306,search_result_link,name,comm,map__21316,search_result,type,opts,meta21319){
this.p__21307 = p__21307;
this.map__21317 = map__21317;
this.owner = owner;
this.path_fn = path_fn;
this.p__21306 = p__21306;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.map__21316 = map__21316;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.meta21319 = meta21319;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21318.cljs$lang$type = true;
clustermap.components.search.t21318.cljs$lang$ctorStr = "clustermap.components.search/t21318";
clustermap.components.search.t21318.cljs$lang$ctorPrWriter = ((function (map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.components.search/t21318");
});})(map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm))
;
clustermap.components.search.t21318.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21318.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm){
return (function (this$,p__21321){var self__ = this;
var map__21322 = p__21321;var map__21322__$1 = ((cljs.core.seq_QMARK_.call(null,map__21322))?cljs.core.apply.call(null,cljs.core.hash_map,map__21322):map__21322);var state = map__21322__$1;var selected = cljs.core.get.call(null,map__21322__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__21322,map__21322__$1,state,selected,map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__21323 = l;var G__21323__$1 = (((G__21323 == null))?null:jayq.core.$.call(null,G__21323));var G__21323__$2 = (((G__21323__$1 == null))?null:G__21323__$1.parents(".search-component"));var G__21323__$3 = (((G__21323__$2 == null))?null:G__21323__$2.toggle());return G__21323__$3;
});})(path,this$__$1,map__21322,map__21322__$1,state,selected,map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm))
;
clustermap.components.search.t21318.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm){
return (function (_21320){var self__ = this;
var _21320__$1 = this;return self__.meta21319;
});})(map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm))
;
clustermap.components.search.t21318.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm){
return (function (_21320,meta21319__$1){var self__ = this;
var _21320__$1 = this;return (new clustermap.components.search.t21318(self__.p__21307,self__.map__21317,self__.owner,self__.path_fn,self__.p__21306,self__.search_result_link,self__.name,self__.comm,self__.map__21316,self__.search_result,self__.type,self__.opts,meta21319__$1));
});})(map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t21318 = ((function (map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm){
return (function __GT_t21318(p__21307__$1,map__21317__$2,owner__$1,path_fn__$1,p__21306__$1,search_result_link__$1,name__$1,comm__$1,map__21316__$2,search_result__$1,type__$1,opts__$1,meta21319){return (new clustermap.components.search.t21318(p__21307__$1,map__21317__$2,owner__$1,path_fn__$1,p__21306__$1,search_result_link__$1,name__$1,comm__$1,map__21316__$2,search_result__$1,type__$1,opts__$1,meta21319));
});})(map__21316,map__21316__$1,search_result,type,name,map__21317,map__21317__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t21318(p__21307,map__21317__$1,owner,path_fn,p__21306,search_result_link,name,comm,map__21316__$1,search_result,type,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__21324,n){var map__21326 = p__21324;var map__21326__$1 = ((cljs.core.seq_QMARK_.call(null,map__21326))?cljs.core.apply.call(null,cljs.core.hash_map,map__21326):map__21326);var investor_companies = cljs.core.get.call(null,map__21326__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__21326__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__21326__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__7900__auto__ = constituencies;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__7900__auto__ = portfolio_companies;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__7900__auto__ = investor_companies;if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__21333 = cljs.core._EQ__EQ_;var expr__21334 = e.keyCode;if(cljs.core.truth_(pred__21333.call(null,clustermap.components.search.ESCAPE_KEY,expr__21334)))
{var G__21336 = om.core.get_node.call(null,owner,"search-component");var G__21336__$1 = (((G__21336 == null))?null:jayq.core.$.call(null,G__21336));var G__21336__$2 = (((G__21336__$1 == null))?null:G__21336__$1.toggle());return G__21336__$2;
} else
{if(cljs.core.truth_(pred__21333.call(null,clustermap.components.search.ENTER_KEY,expr__21334)))
{var vec__21337 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__7900__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__21337,(0),null);var res = cljs.core.nth.call(null,vec__21337,(1),null);var G__21338_21339 = om.core.get_node.call(null,owner,"search-component");var G__21338_21340__$1 = (((G__21338_21339 == null))?null:jayq.core.$.call(null,G__21338_21339));var G__21338_21341__$2 = (((G__21338_21340__$1 == null))?null:G__21338_21340__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__21333.call(null,clustermap.components.search.UP_ARROW,expr__21334)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__7900__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__21333.call(null,clustermap.components.search.DOWN_ARROW,expr__21334)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__7900__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
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
clustermap.components.search.search_component = (function search_component(p__21342,owner){var map__21374 = p__21342;var map__21374__$1 = ((cljs.core.seq_QMARK_.call(null,map__21374))?cljs.core.apply.call(null,cljs.core.hash_map,map__21374):map__21374);var map__21375 = cljs.core.get.call(null,map__21374__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__21375__$1 = ((cljs.core.seq_QMARK_.call(null,map__21375))?cljs.core.apply.call(null,cljs.core.hash_map,map__21375):map__21375);var selection_type = cljs.core.get.call(null,map__21375__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__21375__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__21374__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__21374__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__21376 = om.core.get_shared.call(null,owner);var map__21376__$1 = ((cljs.core.seq_QMARK_.call(null,map__21376))?cljs.core.apply.call(null,cljs.core.hash_map,map__21376):map__21376);var path_fn = cljs.core.get.call(null,map__21376__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__21376__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__21377 = search_results;var map__21377__$1 = ((cljs.core.seq_QMARK_.call(null,map__21377))?cljs.core.apply.call(null,cljs.core.hash_map,map__21377):map__21377);var investor_companies = cljs.core.get.call(null,map__21377__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__21377__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__21377__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t21378 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21378 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,constituencies,investor_companies,p__21342,selection_value,comm,map__21376,map__21375,selection_type,map__21377,map__21374,meta21379){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.p__21342 = p__21342;
this.selection_value = selection_value;
this.comm = comm;
this.map__21376 = map__21376;
this.map__21375 = map__21375;
this.selection_type = selection_type;
this.map__21377 = map__21377;
this.map__21374 = map__21374;
this.meta21379 = meta21379;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21378.cljs$lang$type = true;
clustermap.components.search.t21378.cljs$lang$ctorStr = "clustermap.components.search/t21378";
clustermap.components.search.t21378.cljs$lang$ctorPrWriter = ((function (map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.components.search/t21378");
});})(map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t21378.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21378.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__7900__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__7900__auto____$1))
{return or__7900__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__7900__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__7900__auto__))
{return or__7900__auto__;
} else
{return (0);
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__8625__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function iter__21381(s__21382){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (){var s__21382__$1 = s__21382;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21382__$1);if(temp__4126__auto__)
{var s__21382__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21382__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__21382__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__21384 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__21383 = (0);while(true){
if((i__21383 < size__8624__auto__))
{var vec__21387 = cljs.core._nth.call(null,c__8623__auto__,i__21383);var idx = cljs.core.nth.call(null,vec__21387,(0),null);var con = cljs.core.nth.call(null,vec__21387,(1),null);cljs.core.chunk_append.call(null,b__21384,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__21383,vec__21387,idx,con,c__8623__auto__,size__8624__auto__,b__21384,s__21382__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__21383,vec__21387,idx,con,c__8623__auto__,size__8624__auto__,b__21384,s__21382__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__21405 = (i__21383 + (1));
i__21383 = G__21405;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21384),iter__21381.call(null,cljs.core.chunk_rest.call(null,s__21382__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21384),null);
}
} else
{var vec__21388 = cljs.core.first.call(null,s__21382__$2);var idx = cljs.core.nth.call(null,vec__21388,(0),null);var con = cljs.core.nth.call(null,vec__21388,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__21388,idx,con,s__21382__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__21388,idx,con,s__21382__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__21381.call(null,cljs.core.rest.call(null,s__21382__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
;return iter__8625__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__8625__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function iter__21389(s__21390){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (){var s__21390__$1 = s__21390;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21390__$1);if(temp__4126__auto__)
{var s__21390__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21390__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__21390__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__21392 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__21391 = (0);while(true){
if((i__21391 < size__8624__auto__))
{var vec__21395 = cljs.core._nth.call(null,c__8623__auto__,i__21391);var idx = cljs.core.nth.call(null,vec__21395,(0),null);var pc = cljs.core.nth.call(null,vec__21395,(1),null);cljs.core.chunk_append.call(null,b__21392,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__21391,vec__21395,idx,pc,c__8623__auto__,size__8624__auto__,b__21392,s__21390__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__21391,vec__21395,idx,pc,c__8623__auto__,size__8624__auto__,b__21392,s__21390__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__21406 = (i__21391 + (1));
i__21391 = G__21406;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21392),iter__21389.call(null,cljs.core.chunk_rest.call(null,s__21390__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21392),null);
}
} else
{var vec__21396 = cljs.core.first.call(null,s__21390__$2);var idx = cljs.core.nth.call(null,vec__21396,(0),null);var pc = cljs.core.nth.call(null,vec__21396,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__21396,idx,pc,s__21390__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__21396,idx,pc,s__21390__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__21389.call(null,cljs.core.rest.call(null,s__21390__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
;return iter__8625__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__8625__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function iter__21397(s__21398){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (){var s__21398__$1 = s__21398;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__21398__$1);if(temp__4126__auto__)
{var s__21398__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__21398__$2))
{var c__8623__auto__ = cljs.core.chunk_first.call(null,s__21398__$2);var size__8624__auto__ = cljs.core.count.call(null,c__8623__auto__);var b__21400 = cljs.core.chunk_buffer.call(null,size__8624__auto__);if((function (){var i__21399 = (0);while(true){
if((i__21399 < size__8624__auto__))
{var vec__21403 = cljs.core._nth.call(null,c__8623__auto__,i__21399);var idx = cljs.core.nth.call(null,vec__21403,(0),null);var inv = cljs.core.nth.call(null,vec__21403,(1),null);cljs.core.chunk_append.call(null,b__21400,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__21399,vec__21403,idx,inv,c__8623__auto__,size__8624__auto__,b__21400,s__21398__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__21399,vec__21403,idx,inv,c__8623__auto__,size__8624__auto__,b__21400,s__21398__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__21407 = (i__21399 + (1));
i__21399 = G__21407;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21400),iter__21397.call(null,cljs.core.chunk_rest.call(null,s__21398__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__21400),null);
}
} else
{var vec__21404 = cljs.core.first.call(null,s__21398__$2);var idx = cljs.core.nth.call(null,vec__21404,(0),null);var inv = cljs.core.nth.call(null,vec__21404,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__21404,idx,inv,s__21398__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__21404,idx,inv,s__21398__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__21397.call(null,cljs.core.rest.call(null,s__21398__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
;return iter__8625__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t21378.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (_21380){var self__ = this;
var _21380__$1 = this;return self__.meta21379;
});})(map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t21378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function (_21380,meta21379__$1){var self__ = this;
var _21380__$1 = this;return (new clustermap.components.search.t21378(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.p__21342,self__.selection_value,self__.comm,self__.map__21376,self__.map__21375,self__.selection_type,self__.map__21377,self__.map__21374,meta21379__$1));
});})(map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t21378 = ((function (map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results){
return (function __GT_t21378(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,p__21342__$1,selection_value__$1,comm__$1,map__21376__$2,map__21375__$2,selection_type__$1,map__21377__$2,map__21374__$2,meta21379){return (new clustermap.components.search.t21378(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,p__21342__$1,selection_value__$1,comm__$1,map__21376__$2,map__21375__$2,selection_type__$1,map__21377__$2,map__21374__$2,meta21379));
});})(map__21376,map__21376__$1,path_fn,comm,path_fn__$1,map__21377,map__21377__$1,investor_companies,portfolio_companies,constituencies,map__21374,map__21374__$1,map__21375,map__21375__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t21378(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,investor_companies,p__21342,selection_value,comm,map__21376__$1,map__21375__$1,selection_type,map__21377__$1,map__21374__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map