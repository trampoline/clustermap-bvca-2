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
clustermap.components.search.search_result_link = (function search_result_link(p__51370,owner,p__51371){var map__51380 = p__51370;var map__51380__$1 = ((cljs.core.seq_QMARK_.call(null,map__51380))?cljs.core.apply.call(null,cljs.core.hash_map,map__51380):map__51380);var search_result = map__51380__$1;var type = cljs.core.get.call(null,map__51380__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__51380__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__51381 = p__51371;var map__51381__$1 = ((cljs.core.seq_QMARK_.call(null,map__51381))?cljs.core.apply.call(null,cljs.core.hash_map,map__51381):map__51381);var opts = map__51381__$1;var path_fn = cljs.core.get.call(null,map__51381__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__51381__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t51382 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t51382 = (function (owner,path_fn,map__51380,search_result_link,p__51371,name,comm,search_result,type,p__51370,map__51381,opts,meta51383){
this.owner = owner;
this.path_fn = path_fn;
this.map__51380 = map__51380;
this.search_result_link = search_result_link;
this.p__51371 = p__51371;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__51370 = p__51370;
this.map__51381 = map__51381;
this.opts = opts;
this.meta51383 = meta51383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t51382.cljs$lang$type = true;
clustermap.components.search.t51382.cljs$lang$ctorStr = "clustermap.components.search/t51382";
clustermap.components.search.t51382.cljs$lang$ctorPrWriter = ((function (map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t51382");
});})(map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm))
;
clustermap.components.search.t51382.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t51382.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm){
return (function (this$,p__51385){var self__ = this;
var map__51386 = p__51385;var map__51386__$1 = ((cljs.core.seq_QMARK_.call(null,map__51386))?cljs.core.apply.call(null,cljs.core.hash_map,map__51386):map__51386);var state = map__51386__$1;var selected = cljs.core.get.call(null,map__51386__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__51386,map__51386__$1,state,selected,map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__51387 = l;var G__51387__$1 = (((G__51387 == null))?null:jayq.core.$.call(null,G__51387));var G__51387__$2 = (((G__51387__$1 == null))?null:G__51387__$1.parents(".search-component"));var G__51387__$3 = (((G__51387__$2 == null))?null:G__51387__$2.toggle());return G__51387__$3;
});})(path,this$__$1,map__51386,map__51386__$1,state,selected,map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm))
;
clustermap.components.search.t51382.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm){
return (function (_51384){var self__ = this;
var _51384__$1 = this;return self__.meta51383;
});})(map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm))
;
clustermap.components.search.t51382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm){
return (function (_51384,meta51383__$1){var self__ = this;
var _51384__$1 = this;return (new clustermap.components.search.t51382(self__.owner,self__.path_fn,self__.map__51380,self__.search_result_link,self__.p__51371,self__.name,self__.comm,self__.search_result,self__.type,self__.p__51370,self__.map__51381,self__.opts,meta51383__$1));
});})(map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t51382 = ((function (map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm){
return (function __GT_t51382(owner__$1,path_fn__$1,map__51380__$2,search_result_link__$1,p__51371__$1,name__$1,comm__$1,search_result__$1,type__$1,p__51370__$1,map__51381__$2,opts__$1,meta51383){return (new clustermap.components.search.t51382(owner__$1,path_fn__$1,map__51380__$2,search_result_link__$1,p__51371__$1,name__$1,comm__$1,search_result__$1,type__$1,p__51370__$1,map__51381__$2,opts__$1,meta51383));
});})(map__51380,map__51380__$1,search_result,type,name,map__51381,map__51381__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t51382(owner,path_fn,map__51380__$1,search_result_link,p__51371,name,comm,search_result,type,p__51370,map__51381__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__51388,n){var map__51390 = p__51388;var map__51390__$1 = ((cljs.core.seq_QMARK_.call(null,map__51390))?cljs.core.apply.call(null,cljs.core.hash_map,map__51390):map__51390);var investor_companies = cljs.core.get.call(null,map__51390__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__51390__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__51390__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__51397 = cljs.core._EQ__EQ_;var expr__51398 = e.keyCode;if(cljs.core.truth_(pred__51397.call(null,clustermap.components.search.ESCAPE_KEY,expr__51398)))
{var G__51400 = om.core.get_node.call(null,owner,"search-component");var G__51400__$1 = (((G__51400 == null))?null:jayq.core.$.call(null,G__51400));var G__51400__$2 = (((G__51400__$1 == null))?null:G__51400__$1.toggle());return G__51400__$2;
} else
{if(cljs.core.truth_(pred__51397.call(null,clustermap.components.search.ENTER_KEY,expr__51398)))
{var vec__51401 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__51401,(0),null);var res = cljs.core.nth.call(null,vec__51401,(1),null);var G__51402_51403 = om.core.get_node.call(null,owner,"search-component");var G__51402_51404__$1 = (((G__51402_51403 == null))?null:jayq.core.$.call(null,G__51402_51403));var G__51402_51405__$2 = (((G__51402_51404__$1 == null))?null:G__51402_51404__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__51397.call(null,clustermap.components.search.UP_ARROW,expr__51398)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__51397.call(null,clustermap.components.search.DOWN_ARROW,expr__51398)))
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
clustermap.components.search.search_component = (function search_component(p__51406,owner){var map__51438 = p__51406;var map__51438__$1 = ((cljs.core.seq_QMARK_.call(null,map__51438))?cljs.core.apply.call(null,cljs.core.hash_map,map__51438):map__51438);var map__51439 = cljs.core.get.call(null,map__51438__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__51439__$1 = ((cljs.core.seq_QMARK_.call(null,map__51439))?cljs.core.apply.call(null,cljs.core.hash_map,map__51439):map__51439);var selection_type = cljs.core.get.call(null,map__51439__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__51439__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__51438__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__51438__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__51440 = om.core.get_shared.call(null,owner);var map__51440__$1 = ((cljs.core.seq_QMARK_.call(null,map__51440))?cljs.core.apply.call(null,cljs.core.hash_map,map__51440):map__51440);var path_fn = cljs.core.get.call(null,map__51440__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__51440__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__51441 = search_results;var map__51441__$1 = ((cljs.core.seq_QMARK_.call(null,map__51441))?cljs.core.apply.call(null,cljs.core.hash_map,map__51441):map__51441);var investor_companies = cljs.core.get.call(null,map__51441__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__51441__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__51441__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t51442 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t51442 = (function (search_results,search_component,owner,path_fn,view,p__51406,portfolio_companies,constituencies,map__51439,investor_companies,map__51438,selection_value,comm,selection_type,map__51441,map__51440,meta51443){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.p__51406 = p__51406;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__51439 = map__51439;
this.investor_companies = investor_companies;
this.map__51438 = map__51438;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__51441 = map__51441;
this.map__51440 = map__51440;
this.meta51443 = meta51443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t51442.cljs$lang$type = true;
clustermap.components.search.t51442.cljs$lang$ctorStr = "clustermap.components.search/t51442";
clustermap.components.search.t51442.cljs$lang$ctorPrWriter = ((function (map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t51442");
});})(map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t51442.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t51442.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function iter__51445(s__51446){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (){var s__51446__$1 = s__51446;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51446__$1);if(temp__4126__auto__)
{var s__51446__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51446__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__51446__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__51448 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__51447 = (0);while(true){
if((i__51447 < size__4282__auto__))
{var vec__51451 = cljs.core._nth.call(null,c__4281__auto__,i__51447);var idx = cljs.core.nth.call(null,vec__51451,(0),null);var con = cljs.core.nth.call(null,vec__51451,(1),null);cljs.core.chunk_append.call(null,b__51448,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__51447,vec__51451,idx,con,c__4281__auto__,size__4282__auto__,b__51448,s__51446__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__51447,vec__51451,idx,con,c__4281__auto__,size__4282__auto__,b__51448,s__51446__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__51469 = (i__51447 + (1));
i__51447 = G__51469;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51448),iter__51445.call(null,cljs.core.chunk_rest.call(null,s__51446__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51448),null);
}
} else
{var vec__51452 = cljs.core.first.call(null,s__51446__$2);var idx = cljs.core.nth.call(null,vec__51452,(0),null);var con = cljs.core.nth.call(null,vec__51452,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__51452,idx,con,s__51446__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__51452,idx,con,s__51446__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__51445.call(null,cljs.core.rest.call(null,s__51446__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function iter__51453(s__51454){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (){var s__51454__$1 = s__51454;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51454__$1);if(temp__4126__auto__)
{var s__51454__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51454__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__51454__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__51456 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__51455 = (0);while(true){
if((i__51455 < size__4282__auto__))
{var vec__51459 = cljs.core._nth.call(null,c__4281__auto__,i__51455);var idx = cljs.core.nth.call(null,vec__51459,(0),null);var pc = cljs.core.nth.call(null,vec__51459,(1),null);cljs.core.chunk_append.call(null,b__51456,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__51455,vec__51459,idx,pc,c__4281__auto__,size__4282__auto__,b__51456,s__51454__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__51455,vec__51459,idx,pc,c__4281__auto__,size__4282__auto__,b__51456,s__51454__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__51470 = (i__51455 + (1));
i__51455 = G__51470;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51456),iter__51453.call(null,cljs.core.chunk_rest.call(null,s__51454__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51456),null);
}
} else
{var vec__51460 = cljs.core.first.call(null,s__51454__$2);var idx = cljs.core.nth.call(null,vec__51460,(0),null);var pc = cljs.core.nth.call(null,vec__51460,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__51460,idx,pc,s__51454__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__51460,idx,pc,s__51454__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__51453.call(null,cljs.core.rest.call(null,s__51454__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function iter__51461(s__51462){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (){var s__51462__$1 = s__51462;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51462__$1);if(temp__4126__auto__)
{var s__51462__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51462__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__51462__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__51464 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__51463 = (0);while(true){
if((i__51463 < size__4282__auto__))
{var vec__51467 = cljs.core._nth.call(null,c__4281__auto__,i__51463);var idx = cljs.core.nth.call(null,vec__51467,(0),null);var inv = cljs.core.nth.call(null,vec__51467,(1),null);cljs.core.chunk_append.call(null,b__51464,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__51463,vec__51467,idx,inv,c__4281__auto__,size__4282__auto__,b__51464,s__51462__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__51463,vec__51467,idx,inv,c__4281__auto__,size__4282__auto__,b__51464,s__51462__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__51471 = (i__51463 + (1));
i__51463 = G__51471;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51464),iter__51461.call(null,cljs.core.chunk_rest.call(null,s__51462__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51464),null);
}
} else
{var vec__51468 = cljs.core.first.call(null,s__51462__$2);var idx = cljs.core.nth.call(null,vec__51468,(0),null);var inv = cljs.core.nth.call(null,vec__51468,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__51468,idx,inv,s__51462__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__51468,idx,inv,s__51462__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__51461.call(null,cljs.core.rest.call(null,s__51462__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t51442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (_51444){var self__ = this;
var _51444__$1 = this;return self__.meta51443;
});})(map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t51442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function (_51444,meta51443__$1){var self__ = this;
var _51444__$1 = this;return (new clustermap.components.search.t51442(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.p__51406,self__.portfolio_companies,self__.constituencies,self__.map__51439,self__.investor_companies,self__.map__51438,self__.selection_value,self__.comm,self__.selection_type,self__.map__51441,self__.map__51440,meta51443__$1));
});})(map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t51442 = ((function (map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results){
return (function __GT_t51442(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,p__51406__$1,portfolio_companies__$1,constituencies__$1,map__51439__$2,investor_companies__$1,map__51438__$2,selection_value__$1,comm__$1,selection_type__$1,map__51441__$2,map__51440__$2,meta51443){return (new clustermap.components.search.t51442(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,p__51406__$1,portfolio_companies__$1,constituencies__$1,map__51439__$2,investor_companies__$1,map__51438__$2,selection_value__$1,comm__$1,selection_type__$1,map__51441__$2,map__51440__$2,meta51443));
});})(map__51440,map__51440__$1,path_fn,comm,path_fn__$1,map__51441,map__51441__$1,investor_companies,portfolio_companies,constituencies,map__51438,map__51438__$1,map__51439,map__51439__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t51442(search_results,search_component,owner,path_fn__$1,view,p__51406,portfolio_companies,constituencies,map__51439__$1,investor_companies,map__51438__$1,selection_value,comm,selection_type,map__51441__$1,map__51440__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map