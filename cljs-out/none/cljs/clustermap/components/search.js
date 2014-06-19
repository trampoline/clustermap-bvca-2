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
clustermap.components.search.search_result_link = (function search_result_link(p__24016,owner,p__24017){var map__24026 = p__24016;var map__24026__$1 = ((cljs.core.seq_QMARK_.call(null,map__24026))?cljs.core.apply.call(null,cljs.core.hash_map,map__24026):map__24026);var search_result = map__24026__$1;var type = cljs.core.get.call(null,map__24026__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__24026__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__24027 = p__24017;var map__24027__$1 = ((cljs.core.seq_QMARK_.call(null,map__24027))?cljs.core.apply.call(null,cljs.core.hash_map,map__24027):map__24027);var opts = map__24027__$1;var path_fn = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__24027__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t24028 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t24028 = (function (map__24027,p__24017,owner,path_fn,map__24026,search_result_link,p__24016,name,comm,search_result,type,opts,meta24029){
this.map__24027 = map__24027;
this.p__24017 = p__24017;
this.owner = owner;
this.path_fn = path_fn;
this.map__24026 = map__24026;
this.search_result_link = search_result_link;
this.p__24016 = p__24016;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.meta24029 = meta24029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t24028.cljs$lang$type = true;
clustermap.components.search.t24028.cljs$lang$ctorStr = "clustermap.components.search/t24028";
clustermap.components.search.t24028.cljs$lang$ctorPrWriter = ((function (map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t24028");
});})(map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm))
;
clustermap.components.search.t24028.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t24028.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm){
return (function (this$,p__24031){var self__ = this;
var map__24032 = p__24031;var map__24032__$1 = ((cljs.core.seq_QMARK_.call(null,map__24032))?cljs.core.apply.call(null,cljs.core.hash_map,map__24032):map__24032);var state = map__24032__$1;var selected = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__24032,map__24032__$1,state,selected,map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__24033 = l;var G__24033__$1 = (((G__24033 == null))?null:jayq.core.$.call(null,G__24033));var G__24033__$2 = (((G__24033__$1 == null))?null:G__24033__$1.parents(".search-component"));var G__24033__$3 = (((G__24033__$2 == null))?null:G__24033__$2.toggle());return G__24033__$3;
});})(path,this$__$1,map__24032,map__24032__$1,state,selected,map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm))
;
clustermap.components.search.t24028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm){
return (function (_24030){var self__ = this;
var _24030__$1 = this;return self__.meta24029;
});})(map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm))
;
clustermap.components.search.t24028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm){
return (function (_24030,meta24029__$1){var self__ = this;
var _24030__$1 = this;return (new clustermap.components.search.t24028(self__.map__24027,self__.p__24017,self__.owner,self__.path_fn,self__.map__24026,self__.search_result_link,self__.p__24016,self__.name,self__.comm,self__.search_result,self__.type,self__.opts,meta24029__$1));
});})(map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t24028 = ((function (map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm){
return (function __GT_t24028(map__24027__$2,p__24017__$1,owner__$1,path_fn__$1,map__24026__$2,search_result_link__$1,p__24016__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,meta24029){return (new clustermap.components.search.t24028(map__24027__$2,p__24017__$1,owner__$1,path_fn__$1,map__24026__$2,search_result_link__$1,p__24016__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,meta24029));
});})(map__24026,map__24026__$1,search_result,type,name,map__24027,map__24027__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t24028(map__24027__$1,p__24017,owner,path_fn,map__24026__$1,search_result_link,p__24016,name,comm,search_result,type,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__24034,n){var map__24036 = p__24034;var map__24036__$1 = ((cljs.core.seq_QMARK_.call(null,map__24036))?cljs.core.apply.call(null,cljs.core.hash_map,map__24036):map__24036);var investor_companies = cljs.core.get.call(null,map__24036__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__24036__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__24036__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3539__auto__ = constituencies;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3539__auto__ = portfolio_companies;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3539__auto__ = investor_companies;if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__24043 = cljs.core._EQ__EQ_;var expr__24044 = e.keyCode;if(cljs.core.truth_(pred__24043.call(null,clustermap.components.search.ESCAPE_KEY,expr__24044)))
{var G__24046 = om.core.get_node.call(null,owner,"search-component");var G__24046__$1 = (((G__24046 == null))?null:jayq.core.$.call(null,G__24046));var G__24046__$2 = (((G__24046__$1 == null))?null:G__24046__$1.toggle());return G__24046__$2;
} else
{if(cljs.core.truth_(pred__24043.call(null,clustermap.components.search.ENTER_KEY,expr__24044)))
{var vec__24047 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__24047,0,null);var res = cljs.core.nth.call(null,vec__24047,1,null);var G__24048_24049 = om.core.get_node.call(null,owner,"search-component");var G__24048_24050__$1 = (((G__24048_24049 == null))?null:jayq.core.$.call(null,G__24048_24049));var G__24048_24051__$2 = (((G__24048_24050__$1 == null))?null:G__24048_24050__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__24043.call(null,clustermap.components.search.UP_ARROW,expr__24044)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__24043.call(null,clustermap.components.search.DOWN_ARROW,expr__24044)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
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
clustermap.components.search.search_component = (function search_component(p__24052,owner){var map__24084 = p__24052;var map__24084__$1 = ((cljs.core.seq_QMARK_.call(null,map__24084))?cljs.core.apply.call(null,cljs.core.hash_map,map__24084):map__24084);var map__24085 = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__24085__$1 = ((cljs.core.seq_QMARK_.call(null,map__24085))?cljs.core.apply.call(null,cljs.core.hash_map,map__24085):map__24085);var selection_type = cljs.core.get.call(null,map__24085__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__24085__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__24084__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__24086 = om.core.get_shared.call(null,owner);var map__24086__$1 = ((cljs.core.seq_QMARK_.call(null,map__24086))?cljs.core.apply.call(null,cljs.core.hash_map,map__24086):map__24086);var path_fn = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__24086__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__24087 = search_results;var map__24087__$1 = ((cljs.core.seq_QMARK_.call(null,map__24087))?cljs.core.apply.call(null,cljs.core.hash_map,map__24087):map__24087);var investor_companies = cljs.core.get.call(null,map__24087__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__24087__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__24087__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t24088 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t24088 = (function (map__24087,map__24085,search_results,search_component,owner,path_fn,view,portfolio_companies,constituencies,investor_companies,map__24084,selection_value,comm,selection_type,p__24052,map__24086,meta24089){
this.map__24087 = map__24087;
this.map__24085 = map__24085;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__24084 = map__24084;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.p__24052 = p__24052;
this.map__24086 = map__24086;
this.meta24089 = meta24089;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t24088.cljs$lang$type = true;
clustermap.components.search.t24088.cljs$lang$ctorStr = "clustermap.components.search/t24088";
clustermap.components.search.t24088.cljs$lang$ctorPrWriter = ((function (map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t24088");
});})(map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24088.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t24088.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
});})(this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret.call(null,(cljs.core.truth_((function (){var or__3539__auto__ = cljs.core.not_empty.call(null,self__.constituencies);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{var or__3539__auto____$1 = cljs.core.not_empty.call(null,self__.portfolio_companies);if(cljs.core.truth_(or__3539__auto____$1))
{return or__3539__auto____$1;
} else
{return cljs.core.not_empty.call(null,self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,cljs.core.count.call(null,idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.call(null,cljs.core.vector,cljs.core.iterate.call(null,cljs.core.inc,(cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod.call(null,(function (){var or__3539__auto__ = new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function iter__24091(s__24092){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24092__$1 = s__24092;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24092__$1);if(temp__4126__auto__)
{var s__24092__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24092__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__24092__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__24094 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__24093 = 0;while(true){
if((i__24093 < size__4263__auto__))
{var vec__24097 = cljs.core._nth.call(null,c__4262__auto__,i__24093);var idx = cljs.core.nth.call(null,vec__24097,0,null);var con = cljs.core.nth.call(null,vec__24097,1,null);cljs.core.chunk_append.call(null,b__24094,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__24093,vec__24097,idx,con,c__4262__auto__,size__4263__auto__,b__24094,s__24092__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(i__24093,vec__24097,idx,con,c__4262__auto__,size__4263__auto__,b__24094,s__24092__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__24115 = (i__24093 + 1);
i__24093 = G__24115;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24094),iter__24091.call(null,cljs.core.chunk_rest.call(null,s__24092__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24094),null);
}
} else
{var vec__24098 = cljs.core.first.call(null,s__24092__$2);var idx = cljs.core.nth.call(null,vec__24098,0,null);var con = cljs.core.nth.call(null,vec__24098,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__24098,idx,con,s__24092__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(vec__24098,idx,con,s__24092__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__24091.call(null,cljs.core.rest.call(null,s__24092__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function iter__24099(s__24100){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24100__$1 = s__24100;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24100__$1);if(temp__4126__auto__)
{var s__24100__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24100__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__24100__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__24102 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__24101 = 0;while(true){
if((i__24101 < size__4263__auto__))
{var vec__24105 = cljs.core._nth.call(null,c__4262__auto__,i__24101);var idx = cljs.core.nth.call(null,vec__24105,0,null);var pc = cljs.core.nth.call(null,vec__24105,1,null);cljs.core.chunk_append.call(null,b__24102,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__24101,vec__24105,idx,pc,c__4262__auto__,size__4263__auto__,b__24102,s__24100__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(i__24101,vec__24105,idx,pc,c__4262__auto__,size__4263__auto__,b__24102,s__24100__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__24116 = (i__24101 + 1);
i__24101 = G__24116;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24102),iter__24099.call(null,cljs.core.chunk_rest.call(null,s__24100__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24102),null);
}
} else
{var vec__24106 = cljs.core.first.call(null,s__24100__$2);var idx = cljs.core.nth.call(null,vec__24106,0,null);var pc = cljs.core.nth.call(null,vec__24106,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__24106,idx,pc,s__24100__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(vec__24106,idx,pc,s__24100__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__24099.call(null,cljs.core.rest.call(null,s__24100__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function iter__24107(s__24108){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24108__$1 = s__24108;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24108__$1);if(temp__4126__auto__)
{var s__24108__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24108__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__24108__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__24110 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__24109 = 0;while(true){
if((i__24109 < size__4263__auto__))
{var vec__24113 = cljs.core._nth.call(null,c__4262__auto__,i__24109);var idx = cljs.core.nth.call(null,vec__24113,0,null);var inv = cljs.core.nth.call(null,vec__24113,1,null);cljs.core.chunk_append.call(null,b__24110,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__24109,vec__24113,idx,inv,c__4262__auto__,size__4263__auto__,b__24110,s__24108__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(i__24109,vec__24113,idx,inv,c__4262__auto__,size__4263__auto__,b__24110,s__24108__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__24117 = (i__24109 + 1);
i__24109 = G__24117;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24110),iter__24107.call(null,cljs.core.chunk_rest.call(null,s__24108__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24110),null);
}
} else
{var vec__24114 = cljs.core.first.call(null,s__24108__$2);var idx = cljs.core.nth.call(null,vec__24114,0,null);var inv = cljs.core.nth.call(null,vec__24114,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__24114,idx,inv,s__24108__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(vec__24114,idx,inv,s__24108__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__24107.call(null,cljs.core.rest.call(null,s__24108__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24088.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (_24090){var self__ = this;
var _24090__$1 = this;return self__.meta24089;
});})(map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24088.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function (_24090,meta24089__$1){var self__ = this;
var _24090__$1 = this;return (new clustermap.components.search.t24088(self__.map__24087,self__.map__24085,self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.map__24084,self__.selection_value,self__.comm,self__.selection_type,self__.p__24052,self__.map__24086,meta24089__$1));
});})(map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t24088 = ((function (map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results){
return (function __GT_t24088(map__24087__$2,map__24085__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__24084__$2,selection_value__$1,comm__$1,selection_type__$1,p__24052__$1,map__24086__$2,meta24089){return (new clustermap.components.search.t24088(map__24087__$2,map__24085__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__24084__$2,selection_value__$1,comm__$1,selection_type__$1,p__24052__$1,map__24086__$2,meta24089));
});})(map__24086,map__24086__$1,path_fn,comm,path_fn__$1,map__24087,map__24087__$1,investor_companies,portfolio_companies,constituencies,map__24084,map__24084__$1,map__24085,map__24085__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t24088(map__24087__$1,map__24085__$1,search_results,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,investor_companies,map__24084__$1,selection_value,comm,selection_type,p__24052,map__24086__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map