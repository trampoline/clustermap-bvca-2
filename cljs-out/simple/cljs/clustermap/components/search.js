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
clustermap.components.search.search_result_link = (function search_result_link(p__12898,owner,p__12899){var map__12908 = p__12898;var map__12908__$1 = ((cljs.core.seq_QMARK_.call(null,map__12908))?cljs.core.apply.call(null,cljs.core.hash_map,map__12908):map__12908);var search_result = map__12908__$1;var type = cljs.core.get.call(null,map__12908__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12908__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12909 = p__12899;var map__12909__$1 = ((cljs.core.seq_QMARK_.call(null,map__12909))?cljs.core.apply.call(null,cljs.core.hash_map,map__12909):map__12909);var opts = map__12909__$1;var path_fn = cljs.core.get.call(null,map__12909__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12909__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12910 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12910 = (function (map__12908,p__12899,owner,path_fn,search_result_link,name,comm,search_result,p__12898,type,map__12909,opts,meta12911){
this.map__12908 = map__12908;
this.p__12899 = p__12899;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.p__12898 = p__12898;
this.type = type;
this.map__12909 = map__12909;
this.opts = opts;
this.meta12911 = meta12911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12910.cljs$lang$type = true;
clustermap.components.search.t12910.cljs$lang$ctorStr = "clustermap.components.search/t12910";
clustermap.components.search.t12910.cljs$lang$ctorPrWriter = ((function (map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t12910");
});})(map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm))
;
clustermap.components.search.t12910.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12910.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm){
return (function (this$,p__12913){var self__ = this;
var map__12914 = p__12913;var map__12914__$1 = ((cljs.core.seq_QMARK_.call(null,map__12914))?cljs.core.apply.call(null,cljs.core.hash_map,map__12914):map__12914);var state = map__12914__$1;var selected = cljs.core.get.call(null,map__12914__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__12914,map__12914__$1,state,selected,map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12915 = l;var G__12915__$1 = (((G__12915 == null))?null:jayq.core.$.call(null,G__12915));var G__12915__$2 = (((G__12915__$1 == null))?null:G__12915__$1.parents(".search-component"));var G__12915__$3 = (((G__12915__$2 == null))?null:G__12915__$2.toggle());return G__12915__$3;
});})(path,this$__$1,map__12914,map__12914__$1,state,selected,map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm))
;
clustermap.components.search.t12910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm){
return (function (_12912){var self__ = this;
var _12912__$1 = this;return self__.meta12911;
});})(map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm))
;
clustermap.components.search.t12910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm){
return (function (_12912,meta12911__$1){var self__ = this;
var _12912__$1 = this;return (new clustermap.components.search.t12910(self__.map__12908,self__.p__12899,self__.owner,self__.path_fn,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.p__12898,self__.type,self__.map__12909,self__.opts,meta12911__$1));
});})(map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t12910 = ((function (map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm){
return (function __GT_t12910(map__12908__$2,p__12899__$1,owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,p__12898__$1,type__$1,map__12909__$2,opts__$1,meta12911){return (new clustermap.components.search.t12910(map__12908__$2,p__12899__$1,owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,p__12898__$1,type__$1,map__12909__$2,opts__$1,meta12911));
});})(map__12908,map__12908__$1,search_result,type,name,map__12909,map__12909__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t12910(map__12908__$1,p__12899,owner,path_fn,search_result_link,name,comm,search_result,p__12898,type,map__12909__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12916,n){var map__12918 = p__12916;var map__12918__$1 = ((cljs.core.seq_QMARK_.call(null,map__12918))?cljs.core.apply.call(null,cljs.core.hash_map,map__12918):map__12918);var investor_companies = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12918__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3539__auto__ = constituencies;if(cljs.core.truth_(or__3539__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12925 = cljs.core._EQ__EQ_;var expr__12926 = e.keyCode;if(cljs.core.truth_(pred__12925.call(null,clustermap.components.search.ESCAPE_KEY,expr__12926)))
{var G__12928 = om.core.get_node.call(null,owner,"search-component");var G__12928__$1 = (((G__12928 == null))?null:jayq.core.$.call(null,G__12928));var G__12928__$2 = (((G__12928__$1 == null))?null:G__12928__$1.toggle());return G__12928__$2;
} else
{if(cljs.core.truth_(pred__12925.call(null,clustermap.components.search.ENTER_KEY,expr__12926)))
{var vec__12929 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12929,0,null);var res = cljs.core.nth.call(null,vec__12929,1,null);var G__12930_12931 = om.core.get_node.call(null,owner,"search-component");var G__12930_12932__$1 = (((G__12930_12931 == null))?null:jayq.core.$.call(null,G__12930_12931));var G__12930_12933__$2 = (((G__12930_12932__$1 == null))?null:G__12930_12932__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12925.call(null,clustermap.components.search.UP_ARROW,expr__12926)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12925.call(null,clustermap.components.search.DOWN_ARROW,expr__12926)))
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
clustermap.components.search.search_component = (function search_component(p__12934,owner){var map__12966 = p__12934;var map__12966__$1 = ((cljs.core.seq_QMARK_.call(null,map__12966))?cljs.core.apply.call(null,cljs.core.hash_map,map__12966):map__12966);var map__12967 = cljs.core.get.call(null,map__12966__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__12967__$1 = ((cljs.core.seq_QMARK_.call(null,map__12967))?cljs.core.apply.call(null,cljs.core.hash_map,map__12967):map__12967);var selection_type = cljs.core.get.call(null,map__12967__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__12967__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__12966__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__12966__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__12968 = om.core.get_shared.call(null,owner);var map__12968__$1 = ((cljs.core.seq_QMARK_.call(null,map__12968))?cljs.core.apply.call(null,cljs.core.hash_map,map__12968):map__12968);var path_fn = cljs.core.get.call(null,map__12968__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12968__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__12969 = search_results;var map__12969__$1 = ((cljs.core.seq_QMARK_.call(null,map__12969))?cljs.core.apply.call(null,cljs.core.hash_map,map__12969):map__12969);var investor_companies = cljs.core.get.call(null,map__12969__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12969__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12969__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12970 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12970 = (function (search_results,map__12969,search_component,owner,path_fn,view,portfolio_companies,constituencies,investor_companies,map__12966,selection_value,comm,map__12967,selection_type,map__12968,p__12934,meta12971){
this.search_results = search_results;
this.map__12969 = map__12969;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__12966 = map__12966;
this.selection_value = selection_value;
this.comm = comm;
this.map__12967 = map__12967;
this.selection_type = selection_type;
this.map__12968 = map__12968;
this.p__12934 = p__12934;
this.meta12971 = meta12971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12970.cljs$lang$type = true;
clustermap.components.search.t12970.cljs$lang$ctorStr = "clustermap.components.search/t12970";
clustermap.components.search.t12970.cljs$lang$ctorPrWriter = ((function (map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t12970");
});})(map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t12970.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12970.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
});})(this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function iter__12973(s__12974){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (){var s__12974__$1 = s__12974;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12974__$1);if(temp__4126__auto__)
{var s__12974__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12974__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__12974__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__12976 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__12975 = 0;while(true){
if((i__12975 < size__4263__auto__))
{var vec__12979 = cljs.core._nth.call(null,c__4262__auto__,i__12975);var idx = cljs.core.nth.call(null,vec__12979,0,null);var con = cljs.core.nth.call(null,vec__12979,1,null);cljs.core.chunk_append.call(null,b__12976,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12975,vec__12979,idx,con,c__4262__auto__,size__4263__auto__,b__12976,s__12974__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(i__12975,vec__12979,idx,con,c__4262__auto__,size__4263__auto__,b__12976,s__12974__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12997 = (i__12975 + 1);
i__12975 = G__12997;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12976),iter__12973.call(null,cljs.core.chunk_rest.call(null,s__12974__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12976),null);
}
} else
{var vec__12980 = cljs.core.first.call(null,s__12974__$2);var idx = cljs.core.nth.call(null,vec__12980,0,null);var con = cljs.core.nth.call(null,vec__12980,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12980,idx,con,s__12974__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(vec__12980,idx,con,s__12974__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12973.call(null,cljs.core.rest.call(null,s__12974__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function iter__12981(s__12982){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (){var s__12982__$1 = s__12982;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12982__$1);if(temp__4126__auto__)
{var s__12982__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12982__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__12982__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__12984 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__12983 = 0;while(true){
if((i__12983 < size__4263__auto__))
{var vec__12987 = cljs.core._nth.call(null,c__4262__auto__,i__12983);var idx = cljs.core.nth.call(null,vec__12987,0,null);var pc = cljs.core.nth.call(null,vec__12987,1,null);cljs.core.chunk_append.call(null,b__12984,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12983,vec__12987,idx,pc,c__4262__auto__,size__4263__auto__,b__12984,s__12982__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(i__12983,vec__12987,idx,pc,c__4262__auto__,size__4263__auto__,b__12984,s__12982__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12998 = (i__12983 + 1);
i__12983 = G__12998;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12984),iter__12981.call(null,cljs.core.chunk_rest.call(null,s__12982__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12984),null);
}
} else
{var vec__12988 = cljs.core.first.call(null,s__12982__$2);var idx = cljs.core.nth.call(null,vec__12988,0,null);var pc = cljs.core.nth.call(null,vec__12988,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12988,idx,pc,s__12982__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(vec__12988,idx,pc,s__12982__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12981.call(null,cljs.core.rest.call(null,s__12982__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function iter__12989(s__12990){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (){var s__12990__$1 = s__12990;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12990__$1);if(temp__4126__auto__)
{var s__12990__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12990__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__12990__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__12992 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__12991 = 0;while(true){
if((i__12991 < size__4263__auto__))
{var vec__12995 = cljs.core._nth.call(null,c__4262__auto__,i__12991);var idx = cljs.core.nth.call(null,vec__12995,0,null);var inv = cljs.core.nth.call(null,vec__12995,1,null);cljs.core.chunk_append.call(null,b__12992,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12991,vec__12995,idx,inv,c__4262__auto__,size__4263__auto__,b__12992,s__12990__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(i__12991,vec__12995,idx,inv,c__4262__auto__,size__4263__auto__,b__12992,s__12990__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12999 = (i__12991 + 1);
i__12991 = G__12999;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12992),iter__12989.call(null,cljs.core.chunk_rest.call(null,s__12990__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12992),null);
}
} else
{var vec__12996 = cljs.core.first.call(null,s__12990__$2);var idx = cljs.core.nth.call(null,vec__12996,0,null);var inv = cljs.core.nth.call(null,vec__12996,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12996,idx,inv,s__12990__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(vec__12996,idx,inv,s__12990__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12989.call(null,cljs.core.rest.call(null,s__12990__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_invs);
})()):null)], null)], null);
})():null)));
});})(map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t12970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (_12972){var self__ = this;
var _12972__$1 = this;return self__.meta12971;
});})(map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t12970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function (_12972,meta12971__$1){var self__ = this;
var _12972__$1 = this;return (new clustermap.components.search.t12970(self__.search_results,self__.map__12969,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.map__12966,self__.selection_value,self__.comm,self__.map__12967,self__.selection_type,self__.map__12968,self__.p__12934,meta12971__$1));
});})(map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t12970 = ((function (map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results){
return (function __GT_t12970(search_results__$1,map__12969__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__12966__$2,selection_value__$1,comm__$1,map__12967__$2,selection_type__$1,map__12968__$2,p__12934__$1,meta12971){return (new clustermap.components.search.t12970(search_results__$1,map__12969__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__12966__$2,selection_value__$1,comm__$1,map__12967__$2,selection_type__$1,map__12968__$2,p__12934__$1,meta12971));
});})(map__12968,map__12968__$1,path_fn,comm,path_fn__$1,map__12969,map__12969__$1,investor_companies,portfolio_companies,constituencies,map__12966,map__12966__$1,map__12967,map__12967__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t12970(search_results,map__12969__$1,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,investor_companies,map__12966__$1,selection_value,comm,map__12967__$1,selection_type,map__12968__$1,p__12934,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
