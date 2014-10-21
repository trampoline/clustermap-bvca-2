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
clustermap.components.search.search_result_link = (function search_result_link(p__24280,owner,p__24281){var map__24290 = p__24280;var map__24290__$1 = ((cljs.core.seq_QMARK_.call(null,map__24290))?cljs.core.apply.call(null,cljs.core.hash_map,map__24290):map__24290);var search_result = map__24290__$1;var type = cljs.core.get.call(null,map__24290__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__24290__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__24291 = p__24281;var map__24291__$1 = ((cljs.core.seq_QMARK_.call(null,map__24291))?cljs.core.apply.call(null,cljs.core.hash_map,map__24291):map__24291);var opts = map__24291__$1;var path_fn = cljs.core.get.call(null,map__24291__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__24291__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t24292 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t24292 = (function (p__24281,owner,path_fn,search_result_link,name,map__24290,comm,map__24291,search_result,p__24280,type,opts,meta24293){
this.p__24281 = p__24281;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.map__24290 = map__24290;
this.comm = comm;
this.map__24291 = map__24291;
this.search_result = search_result;
this.p__24280 = p__24280;
this.type = type;
this.opts = opts;
this.meta24293 = meta24293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t24292.cljs$lang$type = true;
clustermap.components.search.t24292.cljs$lang$ctorStr = "clustermap.components.search/t24292";
clustermap.components.search.t24292.cljs$lang$ctorPrWriter = ((function (map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.search/t24292");
});})(map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm))
;
clustermap.components.search.t24292.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t24292.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm){
return (function (this$,p__24295){var self__ = this;
var map__24296 = p__24295;var map__24296__$1 = ((cljs.core.seq_QMARK_.call(null,map__24296))?cljs.core.apply.call(null,cljs.core.hash_map,map__24296):map__24296);var state = map__24296__$1;var selected = cljs.core.get.call(null,map__24296__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__24296,map__24296__$1,state,selected,map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__24297 = l;var G__24297__$1 = (((G__24297 == null))?null:jayq.core.$.call(null,G__24297));var G__24297__$2 = (((G__24297__$1 == null))?null:G__24297__$1.parents(".search-component"));var G__24297__$3 = (((G__24297__$2 == null))?null:G__24297__$2.toggle());return G__24297__$3;
});})(path,this$__$1,map__24296,map__24296__$1,state,selected,map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm))
;
clustermap.components.search.t24292.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm){
return (function (_24294){var self__ = this;
var _24294__$1 = this;return self__.meta24293;
});})(map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm))
;
clustermap.components.search.t24292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm){
return (function (_24294,meta24293__$1){var self__ = this;
var _24294__$1 = this;return (new clustermap.components.search.t24292(self__.p__24281,self__.owner,self__.path_fn,self__.search_result_link,self__.name,self__.map__24290,self__.comm,self__.map__24291,self__.search_result,self__.p__24280,self__.type,self__.opts,meta24293__$1));
});})(map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t24292 = ((function (map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm){
return (function __GT_t24292(p__24281__$1,owner__$1,path_fn__$1,search_result_link__$1,name__$1,map__24290__$2,comm__$1,map__24291__$2,search_result__$1,p__24280__$1,type__$1,opts__$1,meta24293){return (new clustermap.components.search.t24292(p__24281__$1,owner__$1,path_fn__$1,search_result_link__$1,name__$1,map__24290__$2,comm__$1,map__24291__$2,search_result__$1,p__24280__$1,type__$1,opts__$1,meta24293));
});})(map__24290,map__24290__$1,search_result,type,name,map__24291,map__24291__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t24292(p__24281,owner,path_fn,search_result_link,name,map__24290__$1,comm,map__24291__$1,search_result,p__24280,type,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__24298,n){var map__24300 = p__24298;var map__24300__$1 = ((cljs.core.seq_QMARK_.call(null,map__24300))?cljs.core.apply.call(null,cljs.core.hash_map,map__24300):map__24300);var investor_companies = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__24300__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3637__auto__ = constituencies;if(cljs.core.truth_(or__3637__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__24307 = cljs.core._EQ__EQ_;var expr__24308 = e.keyCode;if(cljs.core.truth_(pred__24307.call(null,clustermap.components.search.ESCAPE_KEY,expr__24308)))
{var G__24310 = om.core.get_node.call(null,owner,"search-component");var G__24310__$1 = (((G__24310 == null))?null:jayq.core.$.call(null,G__24310));var G__24310__$2 = (((G__24310__$1 == null))?null:G__24310__$1.toggle());return G__24310__$2;
} else
{if(cljs.core.truth_(pred__24307.call(null,clustermap.components.search.ENTER_KEY,expr__24308)))
{var vec__24311 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__24311,(0),null);var res = cljs.core.nth.call(null,vec__24311,(1),null);var G__24312_24313 = om.core.get_node.call(null,owner,"search-component");var G__24312_24314__$1 = (((G__24312_24313 == null))?null:jayq.core.$.call(null,G__24312_24313));var G__24312_24315__$2 = (((G__24312_24314__$1 == null))?null:G__24312_24314__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__24307.call(null,clustermap.components.search.UP_ARROW,expr__24308)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__24307.call(null,clustermap.components.search.DOWN_ARROW,expr__24308)))
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
clustermap.components.search.search_component = (function search_component(p__24316,owner){var map__24348 = p__24316;var map__24348__$1 = ((cljs.core.seq_QMARK_.call(null,map__24348))?cljs.core.apply.call(null,cljs.core.hash_map,map__24348):map__24348);var map__24349 = cljs.core.get.call(null,map__24348__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__24349__$1 = ((cljs.core.seq_QMARK_.call(null,map__24349))?cljs.core.apply.call(null,cljs.core.hash_map,map__24349):map__24349);var selection_type = cljs.core.get.call(null,map__24349__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__24349__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__24348__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__24348__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__24350 = om.core.get_shared.call(null,owner);var map__24350__$1 = ((cljs.core.seq_QMARK_.call(null,map__24350))?cljs.core.apply.call(null,cljs.core.hash_map,map__24350):map__24350);var path_fn = cljs.core.get.call(null,map__24350__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__24350__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__24351 = search_results;var map__24351__$1 = ((cljs.core.seq_QMARK_.call(null,map__24351))?cljs.core.apply.call(null,cljs.core.hash_map,map__24351):map__24351);var investor_companies = cljs.core.get.call(null,map__24351__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__24351__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__24351__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t24352 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t24352 = (function (search_results,map__24350,map__24349,p__24316,search_component,owner,path_fn,map__24351,view,portfolio_companies,constituencies,investor_companies,map__24348,selection_value,comm,selection_type,meta24353){
this.search_results = search_results;
this.map__24350 = map__24350;
this.map__24349 = map__24349;
this.p__24316 = p__24316;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.map__24351 = map__24351;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__24348 = map__24348;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.meta24353 = meta24353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t24352.cljs$lang$type = true;
clustermap.components.search.t24352.cljs$lang$ctorStr = "clustermap.components.search/t24352";
clustermap.components.search.t24352.cljs$lang$ctorPrWriter = ((function (map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.search/t24352");
});})(map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24352.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t24352.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function iter__24355(s__24356){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24356__$1 = s__24356;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24356__$1);if(temp__4126__auto__)
{var s__24356__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24356__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__24356__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__24358 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__24357 = (0);while(true){
if((i__24357 < size__4374__auto__))
{var vec__24361 = cljs.core._nth.call(null,c__4373__auto__,i__24357);var idx = cljs.core.nth.call(null,vec__24361,(0),null);var con = cljs.core.nth.call(null,vec__24361,(1),null);cljs.core.chunk_append.call(null,b__24358,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__24357,vec__24361,idx,con,c__4373__auto__,size__4374__auto__,b__24358,s__24356__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__24357,vec__24361,idx,con,c__4373__auto__,size__4374__auto__,b__24358,s__24356__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__24379 = (i__24357 + (1));
i__24357 = G__24379;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24358),iter__24355.call(null,cljs.core.chunk_rest.call(null,s__24356__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24358),null);
}
} else
{var vec__24362 = cljs.core.first.call(null,s__24356__$2);var idx = cljs.core.nth.call(null,vec__24362,(0),null);var con = cljs.core.nth.call(null,vec__24362,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__24362,idx,con,s__24356__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__24362,idx,con,s__24356__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__24355.call(null,cljs.core.rest.call(null,s__24356__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function iter__24363(s__24364){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24364__$1 = s__24364;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24364__$1);if(temp__4126__auto__)
{var s__24364__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24364__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__24364__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__24366 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__24365 = (0);while(true){
if((i__24365 < size__4374__auto__))
{var vec__24369 = cljs.core._nth.call(null,c__4373__auto__,i__24365);var idx = cljs.core.nth.call(null,vec__24369,(0),null);var pc = cljs.core.nth.call(null,vec__24369,(1),null);cljs.core.chunk_append.call(null,b__24366,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__24365,vec__24369,idx,pc,c__4373__auto__,size__4374__auto__,b__24366,s__24364__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__24365,vec__24369,idx,pc,c__4373__auto__,size__4374__auto__,b__24366,s__24364__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__24380 = (i__24365 + (1));
i__24365 = G__24380;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24366),iter__24363.call(null,cljs.core.chunk_rest.call(null,s__24364__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24366),null);
}
} else
{var vec__24370 = cljs.core.first.call(null,s__24364__$2);var idx = cljs.core.nth.call(null,vec__24370,(0),null);var pc = cljs.core.nth.call(null,vec__24370,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__24370,idx,pc,s__24364__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__24370,idx,pc,s__24364__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__24363.call(null,cljs.core.rest.call(null,s__24364__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function iter__24371(s__24372){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24372__$1 = s__24372;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24372__$1);if(temp__4126__auto__)
{var s__24372__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24372__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__24372__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__24374 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__24373 = (0);while(true){
if((i__24373 < size__4374__auto__))
{var vec__24377 = cljs.core._nth.call(null,c__4373__auto__,i__24373);var idx = cljs.core.nth.call(null,vec__24377,(0),null);var inv = cljs.core.nth.call(null,vec__24377,(1),null);cljs.core.chunk_append.call(null,b__24374,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__24373,vec__24377,idx,inv,c__4373__auto__,size__4374__auto__,b__24374,s__24372__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__24373,vec__24377,idx,inv,c__4373__auto__,size__4374__auto__,b__24374,s__24372__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__24381 = (i__24373 + (1));
i__24373 = G__24381;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24374),iter__24371.call(null,cljs.core.chunk_rest.call(null,s__24372__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24374),null);
}
} else
{var vec__24378 = cljs.core.first.call(null,s__24372__$2);var idx = cljs.core.nth.call(null,vec__24378,(0),null);var inv = cljs.core.nth.call(null,vec__24378,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__24378,idx,inv,s__24372__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__24378,idx,inv,s__24372__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__24371.call(null,cljs.core.rest.call(null,s__24372__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (_24354){var self__ = this;
var _24354__$1 = this;return self__.meta24353;
});})(map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function (_24354,meta24353__$1){var self__ = this;
var _24354__$1 = this;return (new clustermap.components.search.t24352(self__.search_results,self__.map__24350,self__.map__24349,self__.p__24316,self__.search_component,self__.owner,self__.path_fn,self__.map__24351,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.map__24348,self__.selection_value,self__.comm,self__.selection_type,meta24353__$1));
});})(map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t24352 = ((function (map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results){
return (function __GT_t24352(search_results__$1,map__24350__$2,map__24349__$2,p__24316__$1,search_component__$1,owner__$1,path_fn__$2,map__24351__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__24348__$2,selection_value__$1,comm__$1,selection_type__$1,meta24353){return (new clustermap.components.search.t24352(search_results__$1,map__24350__$2,map__24349__$2,p__24316__$1,search_component__$1,owner__$1,path_fn__$2,map__24351__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__24348__$2,selection_value__$1,comm__$1,selection_type__$1,meta24353));
});})(map__24350,map__24350__$1,path_fn,comm,path_fn__$1,map__24351,map__24351__$1,investor_companies,portfolio_companies,constituencies,map__24348,map__24348__$1,map__24349,map__24349__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t24352(search_results,map__24350__$1,map__24349__$1,p__24316,search_component,owner,path_fn__$1,map__24351__$1,view,portfolio_companies,constituencies,investor_companies,map__24348__$1,selection_value,comm,selection_type,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
