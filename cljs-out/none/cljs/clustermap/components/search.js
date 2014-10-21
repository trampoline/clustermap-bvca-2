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
clustermap.components.search.search_result_link = (function search_result_link(p__79170,owner,p__79171){var map__79180 = p__79170;var map__79180__$1 = ((cljs.core.seq_QMARK_.call(null,map__79180))?cljs.core.apply.call(null,cljs.core.hash_map,map__79180):map__79180);var search_result = map__79180__$1;var type = cljs.core.get.call(null,map__79180__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__79180__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__79181 = p__79171;var map__79181__$1 = ((cljs.core.seq_QMARK_.call(null,map__79181))?cljs.core.apply.call(null,cljs.core.hash_map,map__79181):map__79181);var opts = map__79181__$1;var path_fn = cljs.core.get.call(null,map__79181__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__79181__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t79182 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t79182 = (function (owner,path_fn,search_result_link,map__79181,name,comm,search_result,type,p__79170,map__79180,p__79171,opts,meta79183){
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.map__79181 = map__79181;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__79170 = p__79170;
this.map__79180 = map__79180;
this.p__79171 = p__79171;
this.opts = opts;
this.meta79183 = meta79183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t79182.cljs$lang$type = true;
clustermap.components.search.t79182.cljs$lang$ctorStr = "clustermap.components.search/t79182";
clustermap.components.search.t79182.cljs$lang$ctorPrWriter = ((function (map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.search/t79182");
});})(map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm))
;
clustermap.components.search.t79182.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t79182.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm){
return (function (this$,p__79185){var self__ = this;
var map__79186 = p__79185;var map__79186__$1 = ((cljs.core.seq_QMARK_.call(null,map__79186))?cljs.core.apply.call(null,cljs.core.hash_map,map__79186):map__79186);var state = map__79186__$1;var selected = cljs.core.get.call(null,map__79186__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__79186,map__79186__$1,state,selected,map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__79187 = l;var G__79187__$1 = (((G__79187 == null))?null:jayq.core.$.call(null,G__79187));var G__79187__$2 = (((G__79187__$1 == null))?null:G__79187__$1.parents(".search-component"));var G__79187__$3 = (((G__79187__$2 == null))?null:G__79187__$2.toggle());return G__79187__$3;
});})(path,this$__$1,map__79186,map__79186__$1,state,selected,map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm))
;
clustermap.components.search.t79182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm){
return (function (_79184){var self__ = this;
var _79184__$1 = this;return self__.meta79183;
});})(map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm))
;
clustermap.components.search.t79182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm){
return (function (_79184,meta79183__$1){var self__ = this;
var _79184__$1 = this;return (new clustermap.components.search.t79182(self__.owner,self__.path_fn,self__.search_result_link,self__.map__79181,self__.name,self__.comm,self__.search_result,self__.type,self__.p__79170,self__.map__79180,self__.p__79171,self__.opts,meta79183__$1));
});})(map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t79182 = ((function (map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm){
return (function __GT_t79182(owner__$1,path_fn__$1,search_result_link__$1,map__79181__$2,name__$1,comm__$1,search_result__$1,type__$1,p__79170__$1,map__79180__$2,p__79171__$1,opts__$1,meta79183){return (new clustermap.components.search.t79182(owner__$1,path_fn__$1,search_result_link__$1,map__79181__$2,name__$1,comm__$1,search_result__$1,type__$1,p__79170__$1,map__79180__$2,p__79171__$1,opts__$1,meta79183));
});})(map__79180,map__79180__$1,search_result,type,name,map__79181,map__79181__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t79182(owner,path_fn,search_result_link,map__79181__$1,name,comm,search_result,type,p__79170,map__79180__$1,p__79171,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__79188,n){var map__79190 = p__79188;var map__79190__$1 = ((cljs.core.seq_QMARK_.call(null,map__79190))?cljs.core.apply.call(null,cljs.core.hash_map,map__79190):map__79190);var investor_companies = cljs.core.get.call(null,map__79190__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__79190__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__79190__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3637__auto__ = constituencies;if(cljs.core.truth_(or__3637__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__79197 = cljs.core._EQ__EQ_;var expr__79198 = e.keyCode;if(cljs.core.truth_(pred__79197.call(null,clustermap.components.search.ESCAPE_KEY,expr__79198)))
{var G__79200 = om.core.get_node.call(null,owner,"search-component");var G__79200__$1 = (((G__79200 == null))?null:jayq.core.$.call(null,G__79200));var G__79200__$2 = (((G__79200__$1 == null))?null:G__79200__$1.toggle());return G__79200__$2;
} else
{if(cljs.core.truth_(pred__79197.call(null,clustermap.components.search.ENTER_KEY,expr__79198)))
{var vec__79201 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__79201,(0),null);var res = cljs.core.nth.call(null,vec__79201,(1),null);var G__79202_79203 = om.core.get_node.call(null,owner,"search-component");var G__79202_79204__$1 = (((G__79202_79203 == null))?null:jayq.core.$.call(null,G__79202_79203));var G__79202_79205__$2 = (((G__79202_79204__$1 == null))?null:G__79202_79204__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__79197.call(null,clustermap.components.search.UP_ARROW,expr__79198)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3637__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__79197.call(null,clustermap.components.search.DOWN_ARROW,expr__79198)))
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
clustermap.components.search.search_component = (function search_component(p__79206,owner){var map__79238 = p__79206;var map__79238__$1 = ((cljs.core.seq_QMARK_.call(null,map__79238))?cljs.core.apply.call(null,cljs.core.hash_map,map__79238):map__79238);var map__79239 = cljs.core.get.call(null,map__79238__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__79239__$1 = ((cljs.core.seq_QMARK_.call(null,map__79239))?cljs.core.apply.call(null,cljs.core.hash_map,map__79239):map__79239);var selection_type = cljs.core.get.call(null,map__79239__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__79239__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__79238__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__79238__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__79240 = om.core.get_shared.call(null,owner);var map__79240__$1 = ((cljs.core.seq_QMARK_.call(null,map__79240))?cljs.core.apply.call(null,cljs.core.hash_map,map__79240):map__79240);var path_fn = cljs.core.get.call(null,map__79240__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__79240__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__79241 = search_results;var map__79241__$1 = ((cljs.core.seq_QMARK_.call(null,map__79241))?cljs.core.apply.call(null,cljs.core.hash_map,map__79241):map__79241);var investor_companies = cljs.core.get.call(null,map__79241__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__79241__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__79241__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t79242 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t79242 = (function (search_results,search_component,owner,p__79206,path_fn,view,map__79239,portfolio_companies,constituencies,map__79241,investor_companies,map__79240,selection_value,comm,map__79238,selection_type,meta79243){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.p__79206 = p__79206;
this.path_fn = path_fn;
this.view = view;
this.map__79239 = map__79239;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__79241 = map__79241;
this.investor_companies = investor_companies;
this.map__79240 = map__79240;
this.selection_value = selection_value;
this.comm = comm;
this.map__79238 = map__79238;
this.selection_type = selection_type;
this.meta79243 = meta79243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t79242.cljs$lang$type = true;
clustermap.components.search.t79242.cljs$lang$ctorStr = "clustermap.components.search/t79242";
clustermap.components.search.t79242.cljs$lang$ctorPrWriter = ((function (map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.search/t79242");
});})(map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t79242.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t79242.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function iter__79245(s__79246){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (){var s__79246__$1 = s__79246;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__79246__$1);if(temp__4126__auto__)
{var s__79246__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79246__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__79246__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__79248 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__79247 = (0);while(true){
if((i__79247 < size__4374__auto__))
{var vec__79251 = cljs.core._nth.call(null,c__4373__auto__,i__79247);var idx = cljs.core.nth.call(null,vec__79251,(0),null);var con = cljs.core.nth.call(null,vec__79251,(1),null);cljs.core.chunk_append.call(null,b__79248,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__79247,vec__79251,idx,con,c__4373__auto__,size__4374__auto__,b__79248,s__79246__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__79247,vec__79251,idx,con,c__4373__auto__,size__4374__auto__,b__79248,s__79246__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__79269 = (i__79247 + (1));
i__79247 = G__79269;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79248),iter__79245.call(null,cljs.core.chunk_rest.call(null,s__79246__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79248),null);
}
} else
{var vec__79252 = cljs.core.first.call(null,s__79246__$2);var idx = cljs.core.nth.call(null,vec__79252,(0),null);var con = cljs.core.nth.call(null,vec__79252,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__79252,idx,con,s__79246__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__79252,idx,con,s__79246__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__79245.call(null,cljs.core.rest.call(null,s__79246__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function iter__79253(s__79254){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (){var s__79254__$1 = s__79254;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__79254__$1);if(temp__4126__auto__)
{var s__79254__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79254__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__79254__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__79256 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__79255 = (0);while(true){
if((i__79255 < size__4374__auto__))
{var vec__79259 = cljs.core._nth.call(null,c__4373__auto__,i__79255);var idx = cljs.core.nth.call(null,vec__79259,(0),null);var pc = cljs.core.nth.call(null,vec__79259,(1),null);cljs.core.chunk_append.call(null,b__79256,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__79255,vec__79259,idx,pc,c__4373__auto__,size__4374__auto__,b__79256,s__79254__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__79255,vec__79259,idx,pc,c__4373__auto__,size__4374__auto__,b__79256,s__79254__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__79270 = (i__79255 + (1));
i__79255 = G__79270;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79256),iter__79253.call(null,cljs.core.chunk_rest.call(null,s__79254__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79256),null);
}
} else
{var vec__79260 = cljs.core.first.call(null,s__79254__$2);var idx = cljs.core.nth.call(null,vec__79260,(0),null);var pc = cljs.core.nth.call(null,vec__79260,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__79260,idx,pc,s__79254__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__79260,idx,pc,s__79254__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__79253.call(null,cljs.core.rest.call(null,s__79254__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function iter__79261(s__79262){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (){var s__79262__$1 = s__79262;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__79262__$1);if(temp__4126__auto__)
{var s__79262__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__79262__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__79262__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__79264 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__79263 = (0);while(true){
if((i__79263 < size__4374__auto__))
{var vec__79267 = cljs.core._nth.call(null,c__4373__auto__,i__79263);var idx = cljs.core.nth.call(null,vec__79267,(0),null);var inv = cljs.core.nth.call(null,vec__79267,(1),null);cljs.core.chunk_append.call(null,b__79264,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__79263,vec__79267,idx,inv,c__4373__auto__,size__4374__auto__,b__79264,s__79262__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__79263,vec__79267,idx,inv,c__4373__auto__,size__4374__auto__,b__79264,s__79262__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__79271 = (i__79263 + (1));
i__79263 = G__79271;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79264),iter__79261.call(null,cljs.core.chunk_rest.call(null,s__79262__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__79264),null);
}
} else
{var vec__79268 = cljs.core.first.call(null,s__79262__$2);var idx = cljs.core.nth.call(null,vec__79268,(0),null);var inv = cljs.core.nth.call(null,vec__79268,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__79268,idx,inv,s__79262__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__79268,idx,inv,s__79262__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__79261.call(null,cljs.core.rest.call(null,s__79262__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t79242.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (_79244){var self__ = this;
var _79244__$1 = this;return self__.meta79243;
});})(map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t79242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function (_79244,meta79243__$1){var self__ = this;
var _79244__$1 = this;return (new clustermap.components.search.t79242(self__.search_results,self__.search_component,self__.owner,self__.p__79206,self__.path_fn,self__.view,self__.map__79239,self__.portfolio_companies,self__.constituencies,self__.map__79241,self__.investor_companies,self__.map__79240,self__.selection_value,self__.comm,self__.map__79238,self__.selection_type,meta79243__$1));
});})(map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t79242 = ((function (map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results){
return (function __GT_t79242(search_results__$1,search_component__$1,owner__$1,p__79206__$1,path_fn__$2,view__$1,map__79239__$2,portfolio_companies__$1,constituencies__$1,map__79241__$2,investor_companies__$1,map__79240__$2,selection_value__$1,comm__$1,map__79238__$2,selection_type__$1,meta79243){return (new clustermap.components.search.t79242(search_results__$1,search_component__$1,owner__$1,p__79206__$1,path_fn__$2,view__$1,map__79239__$2,portfolio_companies__$1,constituencies__$1,map__79241__$2,investor_companies__$1,map__79240__$2,selection_value__$1,comm__$1,map__79238__$2,selection_type__$1,meta79243));
});})(map__79240,map__79240__$1,path_fn,comm,path_fn__$1,map__79241,map__79241__$1,investor_companies,portfolio_companies,constituencies,map__79238,map__79238__$1,map__79239,map__79239__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t79242(search_results,search_component,owner,p__79206,path_fn__$1,view,map__79239__$1,portfolio_companies,constituencies,map__79241__$1,investor_companies,map__79240__$1,selection_value,comm,map__79238__$1,selection_type,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map