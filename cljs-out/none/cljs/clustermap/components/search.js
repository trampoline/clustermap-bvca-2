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
clustermap.components.search.search_result_link = (function search_result_link(p__51274,owner,p__51275){var map__51284 = p__51274;var map__51284__$1 = ((cljs.core.seq_QMARK_.call(null,map__51284))?cljs.core.apply.call(null,cljs.core.hash_map,map__51284):map__51284);var search_result = map__51284__$1;var type = cljs.core.get.call(null,map__51284__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__51284__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__51285 = p__51275;var map__51285__$1 = ((cljs.core.seq_QMARK_.call(null,map__51285))?cljs.core.apply.call(null,cljs.core.hash_map,map__51285):map__51285);var opts = map__51285__$1;var path_fn = cljs.core.get.call(null,map__51285__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__51285__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t51286 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t51286 = (function (owner,path_fn,map__51285,search_result_link,name,comm,p__51274,search_result,type,map__51284,opts,p__51275,meta51287){
this.owner = owner;
this.path_fn = path_fn;
this.map__51285 = map__51285;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.p__51274 = p__51274;
this.search_result = search_result;
this.type = type;
this.map__51284 = map__51284;
this.opts = opts;
this.p__51275 = p__51275;
this.meta51287 = meta51287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t51286.cljs$lang$type = true;
clustermap.components.search.t51286.cljs$lang$ctorStr = "clustermap.components.search/t51286";
clustermap.components.search.t51286.cljs$lang$ctorPrWriter = ((function (map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t51286");
});})(map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm))
;
clustermap.components.search.t51286.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t51286.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm){
return (function (this$,p__51289){var self__ = this;
var map__51290 = p__51289;var map__51290__$1 = ((cljs.core.seq_QMARK_.call(null,map__51290))?cljs.core.apply.call(null,cljs.core.hash_map,map__51290):map__51290);var state = map__51290__$1;var selected = cljs.core.get.call(null,map__51290__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__51290,map__51290__$1,state,selected,map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__51291 = l;var G__51291__$1 = (((G__51291 == null))?null:jayq.core.$.call(null,G__51291));var G__51291__$2 = (((G__51291__$1 == null))?null:G__51291__$1.parents(".search-component"));var G__51291__$3 = (((G__51291__$2 == null))?null:G__51291__$2.toggle());return G__51291__$3;
});})(path,this$__$1,map__51290,map__51290__$1,state,selected,map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm))
;
clustermap.components.search.t51286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm){
return (function (_51288){var self__ = this;
var _51288__$1 = this;return self__.meta51287;
});})(map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm))
;
clustermap.components.search.t51286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm){
return (function (_51288,meta51287__$1){var self__ = this;
var _51288__$1 = this;return (new clustermap.components.search.t51286(self__.owner,self__.path_fn,self__.map__51285,self__.search_result_link,self__.name,self__.comm,self__.p__51274,self__.search_result,self__.type,self__.map__51284,self__.opts,self__.p__51275,meta51287__$1));
});})(map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t51286 = ((function (map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm){
return (function __GT_t51286(owner__$1,path_fn__$1,map__51285__$2,search_result_link__$1,name__$1,comm__$1,p__51274__$1,search_result__$1,type__$1,map__51284__$2,opts__$1,p__51275__$1,meta51287){return (new clustermap.components.search.t51286(owner__$1,path_fn__$1,map__51285__$2,search_result_link__$1,name__$1,comm__$1,p__51274__$1,search_result__$1,type__$1,map__51284__$2,opts__$1,p__51275__$1,meta51287));
});})(map__51284,map__51284__$1,search_result,type,name,map__51285,map__51285__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t51286(owner,path_fn,map__51285__$1,search_result_link,name,comm,p__51274,search_result,type,map__51284__$1,opts,p__51275,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__51292,n){var map__51294 = p__51292;var map__51294__$1 = ((cljs.core.seq_QMARK_.call(null,map__51294))?cljs.core.apply.call(null,cljs.core.hash_map,map__51294):map__51294);var investor_companies = cljs.core.get.call(null,map__51294__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__51294__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__51294__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__51301 = cljs.core._EQ__EQ_;var expr__51302 = e.keyCode;if(cljs.core.truth_(pred__51301.call(null,clustermap.components.search.ESCAPE_KEY,expr__51302)))
{var G__51304 = om.core.get_node.call(null,owner,"search-component");var G__51304__$1 = (((G__51304 == null))?null:jayq.core.$.call(null,G__51304));var G__51304__$2 = (((G__51304__$1 == null))?null:G__51304__$1.toggle());return G__51304__$2;
} else
{if(cljs.core.truth_(pred__51301.call(null,clustermap.components.search.ENTER_KEY,expr__51302)))
{var vec__51305 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__51305,(0),null);var res = cljs.core.nth.call(null,vec__51305,(1),null);var G__51306_51307 = om.core.get_node.call(null,owner,"search-component");var G__51306_51308__$1 = (((G__51306_51307 == null))?null:jayq.core.$.call(null,G__51306_51307));var G__51306_51309__$2 = (((G__51306_51308__$1 == null))?null:G__51306_51308__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__51301.call(null,clustermap.components.search.UP_ARROW,expr__51302)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3558__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__51301.call(null,clustermap.components.search.DOWN_ARROW,expr__51302)))
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
clustermap.components.search.search_component = (function search_component(p__51310,owner){var map__51342 = p__51310;var map__51342__$1 = ((cljs.core.seq_QMARK_.call(null,map__51342))?cljs.core.apply.call(null,cljs.core.hash_map,map__51342):map__51342);var map__51343 = cljs.core.get.call(null,map__51342__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__51343__$1 = ((cljs.core.seq_QMARK_.call(null,map__51343))?cljs.core.apply.call(null,cljs.core.hash_map,map__51343):map__51343);var selection_type = cljs.core.get.call(null,map__51343__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__51343__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__51342__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__51342__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__51344 = om.core.get_shared.call(null,owner);var map__51344__$1 = ((cljs.core.seq_QMARK_.call(null,map__51344))?cljs.core.apply.call(null,cljs.core.hash_map,map__51344):map__51344);var path_fn = cljs.core.get.call(null,map__51344__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__51344__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__51345 = search_results;var map__51345__$1 = ((cljs.core.seq_QMARK_.call(null,map__51345))?cljs.core.apply.call(null,cljs.core.hash_map,map__51345):map__51345);var investor_companies = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__51345__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t51346 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t51346 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,constituencies,map__51344,investor_companies,map__51343,map__51342,selection_value,comm,map__51345,selection_type,p__51310,meta51347){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__51344 = map__51344;
this.investor_companies = investor_companies;
this.map__51343 = map__51343;
this.map__51342 = map__51342;
this.selection_value = selection_value;
this.comm = comm;
this.map__51345 = map__51345;
this.selection_type = selection_type;
this.p__51310 = p__51310;
this.meta51347 = meta51347;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t51346.cljs$lang$type = true;
clustermap.components.search.t51346.cljs$lang$ctorStr = "clustermap.components.search/t51346";
clustermap.components.search.t51346.cljs$lang$ctorPrWriter = ((function (map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.search/t51346");
});})(map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t51346.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t51346.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function iter__51349(s__51350){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (){var s__51350__$1 = s__51350;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51350__$1);if(temp__4126__auto__)
{var s__51350__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51350__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__51350__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__51352 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__51351 = (0);while(true){
if((i__51351 < size__4282__auto__))
{var vec__51355 = cljs.core._nth.call(null,c__4281__auto__,i__51351);var idx = cljs.core.nth.call(null,vec__51355,(0),null);var con = cljs.core.nth.call(null,vec__51355,(1),null);cljs.core.chunk_append.call(null,b__51352,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__51351,vec__51355,idx,con,c__4281__auto__,size__4282__auto__,b__51352,s__51350__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__51351,vec__51355,idx,con,c__4281__auto__,size__4282__auto__,b__51352,s__51350__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__51373 = (i__51351 + (1));
i__51351 = G__51373;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51352),iter__51349.call(null,cljs.core.chunk_rest.call(null,s__51350__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51352),null);
}
} else
{var vec__51356 = cljs.core.first.call(null,s__51350__$2);var idx = cljs.core.nth.call(null,vec__51356,(0),null);var con = cljs.core.nth.call(null,vec__51356,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__51356,idx,con,s__51350__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__51356,idx,con,s__51350__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__51349.call(null,cljs.core.rest.call(null,s__51350__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function iter__51357(s__51358){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (){var s__51358__$1 = s__51358;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51358__$1);if(temp__4126__auto__)
{var s__51358__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51358__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__51358__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__51360 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__51359 = (0);while(true){
if((i__51359 < size__4282__auto__))
{var vec__51363 = cljs.core._nth.call(null,c__4281__auto__,i__51359);var idx = cljs.core.nth.call(null,vec__51363,(0),null);var pc = cljs.core.nth.call(null,vec__51363,(1),null);cljs.core.chunk_append.call(null,b__51360,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__51359,vec__51363,idx,pc,c__4281__auto__,size__4282__auto__,b__51360,s__51358__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__51359,vec__51363,idx,pc,c__4281__auto__,size__4282__auto__,b__51360,s__51358__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__51374 = (i__51359 + (1));
i__51359 = G__51374;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51360),iter__51357.call(null,cljs.core.chunk_rest.call(null,s__51358__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51360),null);
}
} else
{var vec__51364 = cljs.core.first.call(null,s__51358__$2);var idx = cljs.core.nth.call(null,vec__51364,(0),null);var pc = cljs.core.nth.call(null,vec__51364,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__51364,idx,pc,s__51358__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__51364,idx,pc,s__51358__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__51357.call(null,cljs.core.rest.call(null,s__51358__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function iter__51365(s__51366){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (){var s__51366__$1 = s__51366;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__51366__$1);if(temp__4126__auto__)
{var s__51366__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__51366__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__51366__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__51368 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__51367 = (0);while(true){
if((i__51367 < size__4282__auto__))
{var vec__51371 = cljs.core._nth.call(null,c__4281__auto__,i__51367);var idx = cljs.core.nth.call(null,vec__51371,(0),null);var inv = cljs.core.nth.call(null,vec__51371,(1),null);cljs.core.chunk_append.call(null,b__51368,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__51367,vec__51371,idx,inv,c__4281__auto__,size__4282__auto__,b__51368,s__51366__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__51367,vec__51371,idx,inv,c__4281__auto__,size__4282__auto__,b__51368,s__51366__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__51375 = (i__51367 + (1));
i__51367 = G__51375;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51368),iter__51365.call(null,cljs.core.chunk_rest.call(null,s__51366__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__51368),null);
}
} else
{var vec__51372 = cljs.core.first.call(null,s__51366__$2);var idx = cljs.core.nth.call(null,vec__51372,(0),null);var inv = cljs.core.nth.call(null,vec__51372,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__51372,idx,inv,s__51366__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__51372,idx,inv,s__51366__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__51365.call(null,cljs.core.rest.call(null,s__51366__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t51346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (_51348){var self__ = this;
var _51348__$1 = this;return self__.meta51347;
});})(map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t51346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function (_51348,meta51347__$1){var self__ = this;
var _51348__$1 = this;return (new clustermap.components.search.t51346(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.map__51344,self__.investor_companies,self__.map__51343,self__.map__51342,self__.selection_value,self__.comm,self__.map__51345,self__.selection_type,self__.p__51310,meta51347__$1));
});})(map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t51346 = ((function (map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results){
return (function __GT_t51346(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__51344__$2,investor_companies__$1,map__51343__$2,map__51342__$2,selection_value__$1,comm__$1,map__51345__$2,selection_type__$1,p__51310__$1,meta51347){return (new clustermap.components.search.t51346(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__51344__$2,investor_companies__$1,map__51343__$2,map__51342__$2,selection_value__$1,comm__$1,map__51345__$2,selection_type__$1,p__51310__$1,meta51347));
});})(map__51344,map__51344__$1,path_fn,comm,path_fn__$1,map__51345,map__51345__$1,investor_companies,portfolio_companies,constituencies,map__51342,map__51342__$1,map__51343,map__51343__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t51346(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,map__51344__$1,investor_companies,map__51343__$1,map__51342__$1,selection_value,comm,map__51345__$1,selection_type,p__51310,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map