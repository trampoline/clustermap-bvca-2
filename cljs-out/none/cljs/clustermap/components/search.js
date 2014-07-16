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
clustermap.components.search.search_result_link = (function search_result_link(p__49102,owner,p__49103){var map__49112 = p__49102;var map__49112__$1 = ((cljs.core.seq_QMARK_.call(null,map__49112))?cljs.core.apply.call(null,cljs.core.hash_map,map__49112):map__49112);var search_result = map__49112__$1;var type = cljs.core.get.call(null,map__49112__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__49112__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__49113 = p__49103;var map__49113__$1 = ((cljs.core.seq_QMARK_.call(null,map__49113))?cljs.core.apply.call(null,cljs.core.hash_map,map__49113):map__49113);var opts = map__49113__$1;var path_fn = cljs.core.get.call(null,map__49113__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__49113__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t49114 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t49114 = (function (owner,path_fn,map__49112,search_result_link,p__49103,name,comm,search_result,type,map__49113,opts,p__49102,meta49115){
this.owner = owner;
this.path_fn = path_fn;
this.map__49112 = map__49112;
this.search_result_link = search_result_link;
this.p__49103 = p__49103;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__49113 = map__49113;
this.opts = opts;
this.p__49102 = p__49102;
this.meta49115 = meta49115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t49114.cljs$lang$type = true;
clustermap.components.search.t49114.cljs$lang$ctorStr = "clustermap.components.search/t49114";
clustermap.components.search.t49114.cljs$lang$ctorPrWriter = ((function (map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t49114");
});})(map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm))
;
clustermap.components.search.t49114.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t49114.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm){
return (function (this$,p__49117){var self__ = this;
var map__49118 = p__49117;var map__49118__$1 = ((cljs.core.seq_QMARK_.call(null,map__49118))?cljs.core.apply.call(null,cljs.core.hash_map,map__49118):map__49118);var state = map__49118__$1;var selected = cljs.core.get.call(null,map__49118__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__49118,map__49118__$1,state,selected,map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__49119 = l;var G__49119__$1 = (((G__49119 == null))?null:jayq.core.$.call(null,G__49119));var G__49119__$2 = (((G__49119__$1 == null))?null:G__49119__$1.parents(".search-component"));var G__49119__$3 = (((G__49119__$2 == null))?null:G__49119__$2.toggle());return G__49119__$3;
});})(path,this$__$1,map__49118,map__49118__$1,state,selected,map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm))
;
clustermap.components.search.t49114.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm){
return (function (_49116){var self__ = this;
var _49116__$1 = this;return self__.meta49115;
});})(map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm))
;
clustermap.components.search.t49114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm){
return (function (_49116,meta49115__$1){var self__ = this;
var _49116__$1 = this;return (new clustermap.components.search.t49114(self__.owner,self__.path_fn,self__.map__49112,self__.search_result_link,self__.p__49103,self__.name,self__.comm,self__.search_result,self__.type,self__.map__49113,self__.opts,self__.p__49102,meta49115__$1));
});})(map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t49114 = ((function (map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm){
return (function __GT_t49114(owner__$1,path_fn__$1,map__49112__$2,search_result_link__$1,p__49103__$1,name__$1,comm__$1,search_result__$1,type__$1,map__49113__$2,opts__$1,p__49102__$1,meta49115){return (new clustermap.components.search.t49114(owner__$1,path_fn__$1,map__49112__$2,search_result_link__$1,p__49103__$1,name__$1,comm__$1,search_result__$1,type__$1,map__49113__$2,opts__$1,p__49102__$1,meta49115));
});})(map__49112,map__49112__$1,search_result,type,name,map__49113,map__49113__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t49114(owner,path_fn,map__49112__$1,search_result_link,p__49103,name,comm,search_result,type,map__49113__$1,opts,p__49102,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__49120,n){var map__49122 = p__49120;var map__49122__$1 = ((cljs.core.seq_QMARK_.call(null,map__49122))?cljs.core.apply.call(null,cljs.core.hash_map,map__49122):map__49122);var investor_companies = cljs.core.get.call(null,map__49122__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__49122__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__49122__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__49129 = cljs.core._EQ__EQ_;var expr__49130 = e.keyCode;if(cljs.core.truth_(pred__49129.call(null,clustermap.components.search.ESCAPE_KEY,expr__49130)))
{var G__49132 = om.core.get_node.call(null,owner,"search-component");var G__49132__$1 = (((G__49132 == null))?null:jayq.core.$.call(null,G__49132));var G__49132__$2 = (((G__49132__$1 == null))?null:G__49132__$1.toggle());return G__49132__$2;
} else
{if(cljs.core.truth_(pred__49129.call(null,clustermap.components.search.ENTER_KEY,expr__49130)))
{var vec__49133 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__49133,(0),null);var res = cljs.core.nth.call(null,vec__49133,(1),null);var G__49134_49135 = om.core.get_node.call(null,owner,"search-component");var G__49134_49136__$1 = (((G__49134_49135 == null))?null:jayq.core.$.call(null,G__49134_49135));var G__49134_49137__$2 = (((G__49134_49136__$1 == null))?null:G__49134_49136__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__49129.call(null,clustermap.components.search.UP_ARROW,expr__49130)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3543__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__49129.call(null,clustermap.components.search.DOWN_ARROW,expr__49130)))
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
clustermap.components.search.search_component = (function search_component(p__49138,owner){var map__49170 = p__49138;var map__49170__$1 = ((cljs.core.seq_QMARK_.call(null,map__49170))?cljs.core.apply.call(null,cljs.core.hash_map,map__49170):map__49170);var map__49171 = cljs.core.get.call(null,map__49170__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__49171__$1 = ((cljs.core.seq_QMARK_.call(null,map__49171))?cljs.core.apply.call(null,cljs.core.hash_map,map__49171):map__49171);var selection_type = cljs.core.get.call(null,map__49171__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__49171__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__49170__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__49170__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__49172 = om.core.get_shared.call(null,owner);var map__49172__$1 = ((cljs.core.seq_QMARK_.call(null,map__49172))?cljs.core.apply.call(null,cljs.core.hash_map,map__49172):map__49172);var path_fn = cljs.core.get.call(null,map__49172__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__49172__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__49173 = search_results;var map__49173__$1 = ((cljs.core.seq_QMARK_.call(null,map__49173))?cljs.core.apply.call(null,cljs.core.hash_map,map__49173):map__49173);var investor_companies = cljs.core.get.call(null,map__49173__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__49173__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__49173__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t49174 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t49174 = (function (search_results,map__49173,search_component,owner,path_fn,view,portfolio_companies,map__49170,constituencies,map__49171,investor_companies,selection_value,comm,selection_type,p__49138,map__49172,meta49175){
this.search_results = search_results;
this.map__49173 = map__49173;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__49170 = map__49170;
this.constituencies = constituencies;
this.map__49171 = map__49171;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.p__49138 = p__49138;
this.map__49172 = map__49172;
this.meta49175 = meta49175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t49174.cljs$lang$type = true;
clustermap.components.search.t49174.cljs$lang$ctorStr = "clustermap.components.search/t49174";
clustermap.components.search.t49174.cljs$lang$ctorPrWriter = ((function (map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.search/t49174");
});})(map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t49174.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t49174.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function iter__49177(s__49178){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (){var s__49178__$1 = s__49178;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49178__$1);if(temp__4126__auto__)
{var s__49178__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49178__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__49178__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__49180 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__49179 = (0);while(true){
if((i__49179 < size__4267__auto__))
{var vec__49183 = cljs.core._nth.call(null,c__4266__auto__,i__49179);var idx = cljs.core.nth.call(null,vec__49183,(0),null);var con = cljs.core.nth.call(null,vec__49183,(1),null);cljs.core.chunk_append.call(null,b__49180,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__49179,vec__49183,idx,con,c__4266__auto__,size__4267__auto__,b__49180,s__49178__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__49179,vec__49183,idx,con,c__4266__auto__,size__4267__auto__,b__49180,s__49178__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__49201 = (i__49179 + (1));
i__49179 = G__49201;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49180),iter__49177.call(null,cljs.core.chunk_rest.call(null,s__49178__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49180),null);
}
} else
{var vec__49184 = cljs.core.first.call(null,s__49178__$2);var idx = cljs.core.nth.call(null,vec__49184,(0),null);var con = cljs.core.nth.call(null,vec__49184,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__49184,idx,con,s__49178__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__49184,idx,con,s__49178__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__49177.call(null,cljs.core.rest.call(null,s__49178__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function iter__49185(s__49186){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (){var s__49186__$1 = s__49186;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49186__$1);if(temp__4126__auto__)
{var s__49186__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49186__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__49186__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__49188 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__49187 = (0);while(true){
if((i__49187 < size__4267__auto__))
{var vec__49191 = cljs.core._nth.call(null,c__4266__auto__,i__49187);var idx = cljs.core.nth.call(null,vec__49191,(0),null);var pc = cljs.core.nth.call(null,vec__49191,(1),null);cljs.core.chunk_append.call(null,b__49188,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__49187,vec__49191,idx,pc,c__4266__auto__,size__4267__auto__,b__49188,s__49186__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__49187,vec__49191,idx,pc,c__4266__auto__,size__4267__auto__,b__49188,s__49186__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__49202 = (i__49187 + (1));
i__49187 = G__49202;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49188),iter__49185.call(null,cljs.core.chunk_rest.call(null,s__49186__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49188),null);
}
} else
{var vec__49192 = cljs.core.first.call(null,s__49186__$2);var idx = cljs.core.nth.call(null,vec__49192,(0),null);var pc = cljs.core.nth.call(null,vec__49192,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__49192,idx,pc,s__49186__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__49192,idx,pc,s__49186__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__49185.call(null,cljs.core.rest.call(null,s__49186__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function iter__49193(s__49194){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (){var s__49194__$1 = s__49194;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__49194__$1);if(temp__4126__auto__)
{var s__49194__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__49194__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__49194__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__49196 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__49195 = (0);while(true){
if((i__49195 < size__4267__auto__))
{var vec__49199 = cljs.core._nth.call(null,c__4266__auto__,i__49195);var idx = cljs.core.nth.call(null,vec__49199,(0),null);var inv = cljs.core.nth.call(null,vec__49199,(1),null);cljs.core.chunk_append.call(null,b__49196,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__49195,vec__49199,idx,inv,c__4266__auto__,size__4267__auto__,b__49196,s__49194__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__49195,vec__49199,idx,inv,c__4266__auto__,size__4267__auto__,b__49196,s__49194__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__49203 = (i__49195 + (1));
i__49195 = G__49203;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49196),iter__49193.call(null,cljs.core.chunk_rest.call(null,s__49194__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__49196),null);
}
} else
{var vec__49200 = cljs.core.first.call(null,s__49194__$2);var idx = cljs.core.nth.call(null,vec__49200,(0),null);var inv = cljs.core.nth.call(null,vec__49200,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__49200,idx,inv,s__49194__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__49200,idx,inv,s__49194__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__49193.call(null,cljs.core.rest.call(null,s__49194__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t49174.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (_49176){var self__ = this;
var _49176__$1 = this;return self__.meta49175;
});})(map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t49174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function (_49176,meta49175__$1){var self__ = this;
var _49176__$1 = this;return (new clustermap.components.search.t49174(self__.search_results,self__.map__49173,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__49170,self__.constituencies,self__.map__49171,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.p__49138,self__.map__49172,meta49175__$1));
});})(map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t49174 = ((function (map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results){
return (function __GT_t49174(search_results__$1,map__49173__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__49170__$2,constituencies__$1,map__49171__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,p__49138__$1,map__49172__$2,meta49175){return (new clustermap.components.search.t49174(search_results__$1,map__49173__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__49170__$2,constituencies__$1,map__49171__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,p__49138__$1,map__49172__$2,meta49175));
});})(map__49172,map__49172__$1,path_fn,comm,path_fn__$1,map__49173,map__49173__$1,investor_companies,portfolio_companies,constituencies,map__49170,map__49170__$1,map__49171,map__49171__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t49174(search_results,map__49173__$1,search_component,owner,path_fn__$1,view,portfolio_companies,map__49170__$1,constituencies,map__49171__$1,investor_companies,selection_value,comm,selection_type,p__49138,map__49172__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map