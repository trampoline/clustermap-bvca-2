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
clustermap.components.search.search_result_link = (function search_result_link(p__13979,owner,p__13980){var map__13989 = p__13979;var map__13989__$1 = ((cljs.core.seq_QMARK_.call(null,map__13989))?cljs.core.apply.call(null,cljs.core.hash_map,map__13989):map__13989);var search_result = map__13989__$1;var type = cljs.core.get.call(null,map__13989__$1,new cljs.core.Keyword(null,"type","type",1174270348));var name = cljs.core.get.call(null,map__13989__$1,new cljs.core.Keyword(null,"name","name",1843675177));var map__13990 = p__13980;var map__13990__$1 = ((cljs.core.seq_QMARK_.call(null,map__13990))?cljs.core.apply.call(null,cljs.core.hash_map,map__13990):map__13990);var opts = map__13990__$1;var path_fn = cljs.core.get.call(null,map__13990__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13990__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));if(typeof clustermap.components.search.t13991 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t13991 = (function (owner,path_fn,search_result_link,p__13980,map__13989,name,comm,map__13990,search_result,type,p__13979,opts,meta13992){
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.p__13980 = p__13980;
this.map__13989 = map__13989;
this.name = name;
this.comm = comm;
this.map__13990 = map__13990;
this.search_result = search_result;
this.type = type;
this.p__13979 = p__13979;
this.opts = opts;
this.meta13992 = meta13992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t13991.cljs$lang$type = true;
clustermap.components.search.t13991.cljs$lang$ctorStr = "clustermap.components.search/t13991";
clustermap.components.search.t13991.cljs$lang$ctorPrWriter = ((function (map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.search/t13991");
});})(map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm))
;
clustermap.components.search.t13991.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t13991.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm){
return (function (this$,p__13994){var self__ = this;
var map__13995 = p__13994;var map__13995__$1 = ((cljs.core.seq_QMARK_.call(null,map__13995))?cljs.core.apply.call(null,cljs.core.hash_map,map__13995):map__13995);var state = map__13995__$1;var selected = cljs.core.get.call(null,map__13995__$1,new cljs.core.Keyword(null,"selected","selected",574897764));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__13995,map__13995__$1,state,selected,map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__13996 = l;var G__13996__$1 = (((G__13996 == null))?null:jayq.core.$.call(null,G__13996));var G__13996__$2 = (((G__13996__$1 == null))?null:G__13996__$1.parents(".search-component"));var G__13996__$3 = (((G__13996__$2 == null))?null:G__13996__$2.toggle());return G__13996__$3;
});})(path,this$__$1,map__13995,map__13995__$1,state,selected,map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm))
;
clustermap.components.search.t13991.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm){
return (function (_13993){var self__ = this;
var _13993__$1 = this;return self__.meta13992;
});})(map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm))
;
clustermap.components.search.t13991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm){
return (function (_13993,meta13992__$1){var self__ = this;
var _13993__$1 = this;return (new clustermap.components.search.t13991(self__.owner,self__.path_fn,self__.search_result_link,self__.p__13980,self__.map__13989,self__.name,self__.comm,self__.map__13990,self__.search_result,self__.type,self__.p__13979,self__.opts,meta13992__$1));
});})(map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t13991 = ((function (map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm){
return (function __GT_t13991(owner__$1,path_fn__$1,search_result_link__$1,p__13980__$1,map__13989__$2,name__$1,comm__$1,map__13990__$2,search_result__$1,type__$1,p__13979__$1,opts__$1,meta13992){return (new clustermap.components.search.t13991(owner__$1,path_fn__$1,search_result_link__$1,p__13980__$1,map__13989__$2,name__$1,comm__$1,map__13990__$2,search_result__$1,type__$1,p__13979__$1,opts__$1,meta13992));
});})(map__13989,map__13989__$1,search_result,type,name,map__13990,map__13990__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t13991(owner,path_fn,search_result_link,p__13980,map__13989__$1,name,comm,map__13990__$1,search_result,type,p__13979,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__13997,n){var map__13999 = p__13997;var map__13999__$1 = ((cljs.core.seq_QMARK_.call(null,map__13999))?cljs.core.apply.call(null,cljs.core.hash_map,map__13999):map__13999);var investor_companies = cljs.core.get.call(null,map__13999__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__13999__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__13999__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));var cons = (function (){var or__3541__auto__ = constituencies;if(cljs.core.truth_(or__3541__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__14006 = cljs.core._EQ__EQ_;var expr__14007 = e.keyCode;if(cljs.core.truth_(pred__14006.call(null,clustermap.components.search.ESCAPE_KEY,expr__14007)))
{var G__14009 = om.core.get_node.call(null,owner,"search-component");var G__14009__$1 = (((G__14009 == null))?null:jayq.core.$.call(null,G__14009));var G__14009__$2 = (((G__14009__$1 == null))?null:G__14009__$1.toggle());return G__14009__$2;
} else
{if(cljs.core.truth_(pred__14006.call(null,clustermap.components.search.ENTER_KEY,expr__14007)))
{var vec__14010 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3541__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.call(null,vec__14010,(0),null);var res = cljs.core.nth.call(null,vec__14010,(1),null);var G__14011_14012 = om.core.get_node.call(null,owner,"search-component");var G__14011_14013__$1 = (((G__14011_14012 == null))?null:jayq.core.$.call(null,G__14011_14012));var G__14011_14014__$2 = (((G__14011_14013__$1 == null))?null:G__14011_14013__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__14006.call(null,clustermap.components.search.UP_ARROW,expr__14007)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),((function (){var or__3541__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_(pred__14006.call(null,clustermap.components.search.DOWN_ARROW,expr__14007)))
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
clustermap.components.search.search_component = (function search_component(p__14015,owner){var map__14047 = p__14015;var map__14047__$1 = ((cljs.core.seq_QMARK_.call(null,map__14047))?cljs.core.apply.call(null,cljs.core.hash_map,map__14047):map__14047);var map__14048 = cljs.core.get.call(null,map__14047__$1,new cljs.core.Keyword(null,"selection","selection",975998651));var map__14048__$1 = ((cljs.core.seq_QMARK_.call(null,map__14048))?cljs.core.apply.call(null,cljs.core.hash_map,map__14048):map__14048);var selection_type = cljs.core.get.call(null,map__14048__$1,new cljs.core.Keyword(null,"type","type",1174270348));var selection_value = cljs.core.get.call(null,map__14048__$1,new cljs.core.Keyword(null,"value","value",305978217));var view = cljs.core.get.call(null,map__14047__$1,new cljs.core.Keyword(null,"view","view",1247994814));var search_results = cljs.core.get.call(null,map__14047__$1,new cljs.core.Keyword(null,"search-results","search-results",306464634));var map__14049 = om.core.get_shared.call(null,owner);var map__14049__$1 = ((cljs.core.seq_QMARK_.call(null,map__14049))?cljs.core.apply.call(null,cljs.core.hash_map,map__14049):map__14049);var path_fn = cljs.core.get.call(null,map__14049__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__14049__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__14050 = search_results;var map__14050__$1 = ((cljs.core.seq_QMARK_.call(null,map__14050))?cljs.core.apply.call(null,cljs.core.hash_map,map__14050):map__14050);var investor_companies = cljs.core.get.call(null,map__14050__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",493714407));var portfolio_companies = cljs.core.get.call(null,map__14050__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",1223322975));var constituencies = cljs.core.get.call(null,map__14050__$1,new cljs.core.Keyword(null,"constituencies","constituencies",-1590769020));if(typeof clustermap.components.search.t14051 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t14051 = (function (search_results,search_component,owner,path_fn,p__14015,view,portfolio_companies,map__14047,constituencies,investor_companies,map__14049,selection_value,comm,selection_type,map__14048,map__14050,meta14052){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.p__14015 = p__14015;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__14047 = map__14047;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__14049 = map__14049;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__14048 = map__14048;
this.map__14050 = map__14050;
this.meta14052 = meta14052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t14051.cljs$lang$type = true;
clustermap.components.search.t14051.cljs$lang$ctorStr = "clustermap.components.search/t14051";
clustermap.components.search.t14051.cljs$lang$ctorPrWriter = ((function (map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.search/t14051");
});})(map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t14051.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t14051.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),e.target.value], null));
});})(this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",1564939822),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",1303670439),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function iter__14054(s__14055){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (){var s__14055__$1 = s__14055;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14055__$1);if(temp__4126__auto__)
{var s__14055__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14055__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__14055__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__14057 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__14056 = (0);while(true){
if((i__14056 < size__4265__auto__))
{var vec__14060 = cljs.core._nth.call(null,c__4264__auto__,i__14056);var idx = cljs.core.nth.call(null,vec__14060,(0),null);var con = cljs.core.nth.call(null,vec__14060,(1),null);cljs.core.chunk_append.call(null,b__14057,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__14056,vec__14060,idx,con,c__4264__auto__,size__4265__auto__,b__14057,s__14055__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(i__14056,vec__14060,idx,con,c__4264__auto__,size__4265__auto__,b__14057,s__14055__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__14078 = (i__14056 + (1));
i__14056 = G__14078;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14057),iter__14054.call(null,cljs.core.chunk_rest.call(null,s__14055__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14057),null);
}
} else
{var vec__14061 = cljs.core.first.call(null,s__14055__$2);var idx = cljs.core.nth.call(null,vec__14061,(0),null);var con = cljs.core.nth.call(null,vec__14061,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__14061,idx,con,s__14055__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"constituency","constituency",1803637324),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",-1827697395)))));
});})(vec__14061,idx,con,s__14055__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__14054.call(null,cljs.core.rest.call(null,s__14055__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function iter__14062(s__14063){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (){var s__14063__$1 = s__14063;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14063__$1);if(temp__4126__auto__)
{var s__14063__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14063__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__14063__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__14065 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__14064 = (0);while(true){
if((i__14064 < size__4265__auto__))
{var vec__14068 = cljs.core._nth.call(null,c__4264__auto__,i__14064);var idx = cljs.core.nth.call(null,vec__14068,(0),null);var pc = cljs.core.nth.call(null,vec__14068,(1),null);cljs.core.chunk_append.call(null,b__14065,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__14064,vec__14068,idx,pc,c__4264__auto__,size__4265__auto__,b__14065,s__14063__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(i__14064,vec__14068,idx,pc,c__4264__auto__,size__4265__auto__,b__14065,s__14063__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__14079 = (i__14064 + (1));
i__14064 = G__14079;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14065),iter__14062.call(null,cljs.core.chunk_rest.call(null,s__14063__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14065),null);
}
} else
{var vec__14069 = cljs.core.first.call(null,s__14063__$2);var idx = cljs.core.nth.call(null,vec__14069,(0),null);var pc = cljs.core.nth.call(null,vec__14069,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__14069,idx,pc,s__14063__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",2036028415),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",1886326649)))));
});})(vec__14069,idx,pc,s__14063__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__14062.call(null,cljs.core.rest.call(null,s__14063__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function iter__14070(s__14071){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (){var s__14071__$1 = s__14071;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14071__$1);if(temp__4126__auto__)
{var s__14071__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14071__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__14071__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__14073 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__14072 = (0);while(true){
if((i__14072 < size__4265__auto__))
{var vec__14076 = cljs.core._nth.call(null,c__4264__auto__,i__14072);var idx = cljs.core.nth.call(null,vec__14076,(0),null);var inv = cljs.core.nth.call(null,vec__14076,(1),null);cljs.core.chunk_append.call(null,b__14073,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (i__14072,vec__14076,idx,inv,c__4264__auto__,size__4265__auto__,b__14073,s__14071__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(i__14072,vec__14076,idx,inv,c__4264__auto__,size__4265__auto__,b__14073,s__14071__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)));
{
var G__14080 = (i__14072 + (1));
i__14072 = G__14080;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14073),iter__14070.call(null,cljs.core.chunk_rest.call(null,s__14071__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14073),null);
}
} else
{var vec__14077 = cljs.core.first.call(null,s__14071__$2);var idx = cljs.core.nth.call(null,vec__14077,(0),null);var inv = cljs.core.nth.call(null,vec__14077,(1),null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",-1689770614),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),((function (vec__14077,idx,inv,s__14071__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"investor-company","investor-company",13706558),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)),new cljs.core.Keyword(null,"uid","uid",-1447769400),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",-841847830)))));
});})(vec__14077,idx,inv,s__14071__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null)),iter__14070.call(null,cljs.core.rest.call(null,s__14071__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t14051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (_14053){var self__ = this;
var _14053__$1 = this;return self__.meta14052;
});})(map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t14051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function (_14053,meta14052__$1){var self__ = this;
var _14053__$1 = this;return (new clustermap.components.search.t14051(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.p__14015,self__.view,self__.portfolio_companies,self__.map__14047,self__.constituencies,self__.investor_companies,self__.map__14049,self__.selection_value,self__.comm,self__.selection_type,self__.map__14048,self__.map__14050,meta14052__$1));
});})(map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t14051 = ((function (map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results){
return (function __GT_t14051(search_results__$1,search_component__$1,owner__$1,path_fn__$2,p__14015__$1,view__$1,portfolio_companies__$1,map__14047__$2,constituencies__$1,investor_companies__$1,map__14049__$2,selection_value__$1,comm__$1,selection_type__$1,map__14048__$2,map__14050__$2,meta14052){return (new clustermap.components.search.t14051(search_results__$1,search_component__$1,owner__$1,path_fn__$2,p__14015__$1,view__$1,portfolio_companies__$1,map__14047__$2,constituencies__$1,investor_companies__$1,map__14049__$2,selection_value__$1,comm__$1,selection_type__$1,map__14048__$2,map__14050__$2,meta14052));
});})(map__14049,map__14049__$1,path_fn,comm,path_fn__$1,map__14050,map__14050__$1,investor_companies,portfolio_companies,constituencies,map__14047,map__14047__$1,map__14048,map__14048__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t14051(search_results,search_component,owner,path_fn__$1,p__14015,view,portfolio_companies,map__14047__$1,constituencies,investor_companies,map__14049__$1,selection_value,comm,selection_type,map__14048__$1,map__14050__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id)], null));
});
