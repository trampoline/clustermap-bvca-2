// Compiled by ClojureScript 0.0-2227
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
clustermap.components.search.ESCAPE_KEY = 27;
clustermap.components.search.ENTER_KEY = 13;
clustermap.components.search.LEFT_ARROW = 37;
clustermap.components.search.UP_ARROW = 38;
clustermap.components.search.RIGHT_ARROW = 39;
clustermap.components.search.DOWN_ARROW = 40;
clustermap.components.search.search_result_link = (function search_result_link(p__24018,owner,p__24019){var map__24028 = p__24018;var map__24028__$1 = ((cljs.core.seq_QMARK_.call(null,map__24028))?cljs.core.apply.call(null,cljs.core.hash_map,map__24028):map__24028);var search_result = map__24028__$1;var type = cljs.core.get.call(null,map__24028__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__24028__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__24029 = p__24019;var map__24029__$1 = ((cljs.core.seq_QMARK_.call(null,map__24029))?cljs.core.apply.call(null,cljs.core.hash_map,map__24029):map__24029);var opts = map__24029__$1;var path_fn = cljs.core.get.call(null,map__24029__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__24029__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t24030 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t24030 = (function (p__24019,owner,path_fn,search_result_link,p__24018,name,comm,map__24029,search_result,type,map__24028,opts,meta24031){
this.p__24019 = p__24019;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.p__24018 = p__24018;
this.name = name;
this.comm = comm;
this.map__24029 = map__24029;
this.search_result = search_result;
this.type = type;
this.map__24028 = map__24028;
this.opts = opts;
this.meta24031 = meta24031;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t24030.cljs$lang$type = true;
clustermap.components.search.t24030.cljs$lang$ctorStr = "clustermap.components.search/t24030";
clustermap.components.search.t24030.cljs$lang$ctorPrWriter = ((function (map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.search/t24030");
});})(map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm))
;
clustermap.components.search.t24030.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t24030.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm){
return (function (this$,p__24033){var self__ = this;
var map__24034 = p__24033;var map__24034__$1 = ((cljs.core.seq_QMARK_.call(null,map__24034))?cljs.core.apply.call(null,cljs.core.hash_map,map__24034):map__24034);var state = map__24034__$1;var selected = cljs.core.get.call(null,map__24034__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__24034,map__24034__$1,state,selected,map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__24035 = l;var G__24035__$1 = (((G__24035 == null))?null:jayq.core.$.call(null,G__24035));var G__24035__$2 = (((G__24035__$1 == null))?null:G__24035__$1.parents(".search-component"));var G__24035__$3 = (((G__24035__$2 == null))?null:G__24035__$2.toggle());return G__24035__$3;
});})(path,this$__$1,map__24034,map__24034__$1,state,selected,map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm))
;
clustermap.components.search.t24030.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm){
return (function (_24032){var self__ = this;
var _24032__$1 = this;return self__.meta24031;
});})(map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm))
;
clustermap.components.search.t24030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm){
return (function (_24032,meta24031__$1){var self__ = this;
var _24032__$1 = this;return (new clustermap.components.search.t24030(self__.p__24019,self__.owner,self__.path_fn,self__.search_result_link,self__.p__24018,self__.name,self__.comm,self__.map__24029,self__.search_result,self__.type,self__.map__24028,self__.opts,meta24031__$1));
});})(map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t24030 = ((function (map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm){
return (function __GT_t24030(p__24019__$1,owner__$1,path_fn__$1,search_result_link__$1,p__24018__$1,name__$1,comm__$1,map__24029__$2,search_result__$1,type__$1,map__24028__$2,opts__$1,meta24031){return (new clustermap.components.search.t24030(p__24019__$1,owner__$1,path_fn__$1,search_result_link__$1,p__24018__$1,name__$1,comm__$1,map__24029__$2,search_result__$1,type__$1,map__24028__$2,opts__$1,meta24031));
});})(map__24028,map__24028__$1,search_result,type,name,map__24029,map__24029__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t24030(p__24019,owner,path_fn,search_result_link,p__24018,name,comm,map__24029__$1,search_result,type,map__24028__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__24036,n){var map__24038 = p__24036;var map__24038__$1 = ((cljs.core.seq_QMARK_.call(null,map__24038))?cljs.core.apply.call(null,cljs.core.hash_map,map__24038):map__24038);var investor_companies = cljs.core.get.call(null,map__24038__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__24038__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__24038__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3541__auto__ = constituencies;if(cljs.core.truth_(or__3541__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"constituency","constituency",3902864696),cljs.core.get.call(null,constituencies,n)], null);
} else
{if((n < (cljs.core.count.call(null,cons) + cljs.core.count.call(null,pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),cljs.core.get.call(null,pcs,(n - cljs.core.count.call(null,cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),cljs.core.get.call(null,invs,((n - cljs.core.count.call(null,cons)) - cljs.core.count.call(null,pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__24045 = cljs.core._EQ__EQ_;var expr__24046 = e.keyCode;if(cljs.core.truth_(pred__24045.call(null,clustermap.components.search.ESCAPE_KEY,expr__24046)))
{var G__24048 = om.core.get_node.call(null,owner,"search-component");var G__24048__$1 = (((G__24048 == null))?null:jayq.core.$.call(null,G__24048));var G__24048__$2 = (((G__24048__$1 == null))?null:G__24048__$1.toggle());return G__24048__$2;
} else
{if(cljs.core.truth_(pred__24045.call(null,clustermap.components.search.ENTER_KEY,expr__24046)))
{var vec__24049 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3541__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__24049,0,null);var res = cljs.core.nth.call(null,vec__24049,1,null);var G__24050_24051 = om.core.get_node.call(null,owner,"search-component");var G__24050_24052__$1 = (((G__24050_24051 == null))?null:jayq.core.$.call(null,G__24050_24051));var G__24050_24053__$2 = (((G__24050_24052__$1 == null))?null:G__24050_24052__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__24045.call(null,clustermap.components.search.UP_ARROW,expr__24046)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3541__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__24045.call(null,clustermap.components.search.DOWN_ARROW,expr__24046)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3541__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return 0;
}
})() + 1));
} else
{return null;
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(p__24054,owner){var map__24086 = p__24054;var map__24086__$1 = ((cljs.core.seq_QMARK_.call(null,map__24086))?cljs.core.apply.call(null,cljs.core.hash_map,map__24086):map__24086);var map__24087 = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__24087__$1 = ((cljs.core.seq_QMARK_.call(null,map__24087))?cljs.core.apply.call(null,cljs.core.hash_map,map__24087):map__24087);var selection_type = cljs.core.get.call(null,map__24087__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__24087__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__24088 = om.core.get_shared.call(null,owner);var map__24088__$1 = ((cljs.core.seq_QMARK_.call(null,map__24088))?cljs.core.apply.call(null,cljs.core.hash_map,map__24088):map__24088);var path_fn = cljs.core.get.call(null,map__24088__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__24088__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__24089 = search_results;var map__24089__$1 = ((cljs.core.seq_QMARK_.call(null,map__24089))?cljs.core.apply.call(null,cljs.core.hash_map,map__24089):map__24089);var investor_companies = cljs.core.get.call(null,map__24089__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__24089__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__24089__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t24090 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t24090 = (function (map__24087,search_results,search_component,owner,path_fn,view,portfolio_companies,constituencies,p__24054,investor_companies,selection_value,comm,map__24088,selection_type,map__24089,map__24086,meta24091){
this.map__24087 = map__24087;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.p__24054 = p__24054;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__24088 = map__24088;
this.selection_type = selection_type;
this.map__24089 = map__24089;
this.map__24086 = map__24086;
this.meta24091 = meta24091;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t24090.cljs$lang$type = true;
clustermap.components.search.t24090.cljs$lang$ctorStr = "clustermap.components.search/t24090";
clustermap.components.search.t24090.cljs$lang$ctorPrWriter = ((function (map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.search/t24090");
});})(map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24090.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t24090.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
});})(this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3541__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3541__auto____$1))
{return or__3541__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3541__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return 0;
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function iter__24093(s__24094){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24094__$1 = s__24094;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24094__$1);if(temp__4126__auto__)
{var s__24094__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24094__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__24094__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__24096 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__24095 = 0;while(true){
if((i__24095 < size__4265__auto__))
{var vec__24099 = cljs.core._nth.call(null,c__4264__auto__,i__24095);var idx = cljs.core.nth.call(null,vec__24099,0,null);var con = cljs.core.nth.call(null,vec__24099,1,null);cljs.core.chunk_append.call(null,b__24096,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__24095,vec__24099,idx,con,c__4264__auto__,size__4265__auto__,b__24096,s__24094__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(i__24095,vec__24099,idx,con,c__4264__auto__,size__4265__auto__,b__24096,s__24094__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__24117 = (i__24095 + 1);
i__24095 = G__24117;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24096),iter__24093.call(null,cljs.core.chunk_rest.call(null,s__24094__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24096),null);
}
} else
{var vec__24100 = cljs.core.first.call(null,s__24094__$2);var idx = cljs.core.nth.call(null,vec__24100,0,null);var con = cljs.core.nth.call(null,vec__24100,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__24100,idx,con,s__24094__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(vec__24100,idx,con,s__24094__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__24093.call(null,cljs.core.rest.call(null,s__24094__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function iter__24101(s__24102){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24102__$1 = s__24102;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24102__$1);if(temp__4126__auto__)
{var s__24102__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24102__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__24102__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__24104 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__24103 = 0;while(true){
if((i__24103 < size__4265__auto__))
{var vec__24107 = cljs.core._nth.call(null,c__4264__auto__,i__24103);var idx = cljs.core.nth.call(null,vec__24107,0,null);var pc = cljs.core.nth.call(null,vec__24107,1,null);cljs.core.chunk_append.call(null,b__24104,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__24103,vec__24107,idx,pc,c__4264__auto__,size__4265__auto__,b__24104,s__24102__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(i__24103,vec__24107,idx,pc,c__4264__auto__,size__4265__auto__,b__24104,s__24102__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__24118 = (i__24103 + 1);
i__24103 = G__24118;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24104),iter__24101.call(null,cljs.core.chunk_rest.call(null,s__24102__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24104),null);
}
} else
{var vec__24108 = cljs.core.first.call(null,s__24102__$2);var idx = cljs.core.nth.call(null,vec__24108,0,null);var pc = cljs.core.nth.call(null,vec__24108,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__24108,idx,pc,s__24102__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(vec__24108,idx,pc,s__24102__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__24101.call(null,cljs.core.rest.call(null,s__24102__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4266__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function iter__24109(s__24110){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24110__$1 = s__24110;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24110__$1);if(temp__4126__auto__)
{var s__24110__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24110__$2))
{var c__4264__auto__ = cljs.core.chunk_first.call(null,s__24110__$2);var size__4265__auto__ = cljs.core.count.call(null,c__4264__auto__);var b__24112 = cljs.core.chunk_buffer.call(null,size__4265__auto__);if((function (){var i__24111 = 0;while(true){
if((i__24111 < size__4265__auto__))
{var vec__24115 = cljs.core._nth.call(null,c__4264__auto__,i__24111);var idx = cljs.core.nth.call(null,vec__24115,0,null);var inv = cljs.core.nth.call(null,vec__24115,1,null);cljs.core.chunk_append.call(null,b__24112,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__24111,vec__24115,idx,inv,c__4264__auto__,size__4265__auto__,b__24112,s__24110__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(i__24111,vec__24115,idx,inv,c__4264__auto__,size__4265__auto__,b__24112,s__24110__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__24119 = (i__24111 + 1);
i__24111 = G__24119;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24112),iter__24109.call(null,cljs.core.chunk_rest.call(null,s__24110__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24112),null);
}
} else
{var vec__24116 = cljs.core.first.call(null,s__24110__$2);var idx = cljs.core.nth.call(null,vec__24116,0,null);var inv = cljs.core.nth.call(null,vec__24116,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__24116,idx,inv,s__24110__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(vec__24116,idx,inv,s__24110__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__24109.call(null,cljs.core.rest.call(null,s__24110__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
;return iter__4266__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24090.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (_24092){var self__ = this;
var _24092__$1 = this;return self__.meta24091;
});})(map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function (_24092,meta24091__$1){var self__ = this;
var _24092__$1 = this;return (new clustermap.components.search.t24090(self__.map__24087,self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.p__24054,self__.investor_companies,self__.selection_value,self__.comm,self__.map__24088,self__.selection_type,self__.map__24089,self__.map__24086,meta24091__$1));
});})(map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t24090 = ((function (map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results){
return (function __GT_t24090(map__24087__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,p__24054__$1,investor_companies__$1,selection_value__$1,comm__$1,map__24088__$2,selection_type__$1,map__24089__$2,map__24086__$2,meta24091){return (new clustermap.components.search.t24090(map__24087__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,p__24054__$1,investor_companies__$1,selection_value__$1,comm__$1,map__24088__$2,selection_type__$1,map__24089__$2,map__24086__$2,meta24091));
});})(map__24088,map__24088__$1,path_fn,comm,path_fn__$1,map__24089,map__24089__$1,investor_companies,portfolio_companies,constituencies,map__24086,map__24086__$1,map__24087,map__24087__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t24090(map__24087__$1,search_results,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,p__24054,investor_companies,selection_value,comm,map__24088__$1,selection_type,map__24089__$1,map__24086__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
