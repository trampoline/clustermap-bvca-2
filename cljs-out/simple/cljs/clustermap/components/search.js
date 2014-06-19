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
clustermap.components.search.search_result_link = (function search_result_link(p__12890,owner,p__12891){var map__12900 = p__12890;var map__12900__$1 = ((cljs.core.seq_QMARK_.call(null,map__12900))?cljs.core.apply.call(null,cljs.core.hash_map,map__12900):map__12900);var search_result = map__12900__$1;var type = cljs.core.get.call(null,map__12900__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__12900__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__12901 = p__12891;var map__12901__$1 = ((cljs.core.seq_QMARK_.call(null,map__12901))?cljs.core.apply.call(null,cljs.core.hash_map,map__12901):map__12901);var opts = map__12901__$1;var path_fn = cljs.core.get.call(null,map__12901__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12901__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t12902 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12902 = (function (map__12901,owner,path_fn,map__12900,search_result_link,p__12890,name,comm,search_result,type,p__12891,opts,meta12903){
this.map__12901 = map__12901;
this.owner = owner;
this.path_fn = path_fn;
this.map__12900 = map__12900;
this.search_result_link = search_result_link;
this.p__12890 = p__12890;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__12891 = p__12891;
this.opts = opts;
this.meta12903 = meta12903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12902.cljs$lang$type = true;
clustermap.components.search.t12902.cljs$lang$ctorStr = "clustermap.components.search/t12902";
clustermap.components.search.t12902.cljs$lang$ctorPrWriter = ((function (map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t12902");
});})(map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm))
;
clustermap.components.search.t12902.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12902.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm){
return (function (this$,p__12905){var self__ = this;
var map__12906 = p__12905;var map__12906__$1 = ((cljs.core.seq_QMARK_.call(null,map__12906))?cljs.core.apply.call(null,cljs.core.hash_map,map__12906):map__12906);var state = map__12906__$1;var selected = cljs.core.get.call(null,map__12906__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__12906,map__12906__$1,state,selected,map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__12907 = l;var G__12907__$1 = (((G__12907 == null))?null:jayq.core.$.call(null,G__12907));var G__12907__$2 = (((G__12907__$1 == null))?null:G__12907__$1.parents(".search-component"));var G__12907__$3 = (((G__12907__$2 == null))?null:G__12907__$2.toggle());return G__12907__$3;
});})(path,this$__$1,map__12906,map__12906__$1,state,selected,map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm))
;
clustermap.components.search.t12902.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm){
return (function (_12904){var self__ = this;
var _12904__$1 = this;return self__.meta12903;
});})(map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm))
;
clustermap.components.search.t12902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm){
return (function (_12904,meta12903__$1){var self__ = this;
var _12904__$1 = this;return (new clustermap.components.search.t12902(self__.map__12901,self__.owner,self__.path_fn,self__.map__12900,self__.search_result_link,self__.p__12890,self__.name,self__.comm,self__.search_result,self__.type,self__.p__12891,self__.opts,meta12903__$1));
});})(map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t12902 = ((function (map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm){
return (function __GT_t12902(map__12901__$2,owner__$1,path_fn__$1,map__12900__$2,search_result_link__$1,p__12890__$1,name__$1,comm__$1,search_result__$1,type__$1,p__12891__$1,opts__$1,meta12903){return (new clustermap.components.search.t12902(map__12901__$2,owner__$1,path_fn__$1,map__12900__$2,search_result_link__$1,p__12890__$1,name__$1,comm__$1,search_result__$1,type__$1,p__12891__$1,opts__$1,meta12903));
});})(map__12900,map__12900__$1,search_result,type,name,map__12901,map__12901__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t12902(map__12901__$1,owner,path_fn,map__12900__$1,search_result_link,p__12890,name,comm,search_result,type,p__12891,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__12908,n){var map__12910 = p__12908;var map__12910__$1 = ((cljs.core.seq_QMARK_.call(null,map__12910))?cljs.core.apply.call(null,cljs.core.hash_map,map__12910):map__12910);var investor_companies = cljs.core.get.call(null,map__12910__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12910__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12910__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3539__auto__ = constituencies;if(cljs.core.truth_(or__3539__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__12917 = cljs.core._EQ__EQ_;var expr__12918 = e.keyCode;if(cljs.core.truth_(pred__12917.call(null,clustermap.components.search.ESCAPE_KEY,expr__12918)))
{var G__12920 = om.core.get_node.call(null,owner,"search-component");var G__12920__$1 = (((G__12920 == null))?null:jayq.core.$.call(null,G__12920));var G__12920__$2 = (((G__12920__$1 == null))?null:G__12920__$1.toggle());return G__12920__$2;
} else
{if(cljs.core.truth_(pred__12917.call(null,clustermap.components.search.ENTER_KEY,expr__12918)))
{var vec__12921 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__12921,0,null);var res = cljs.core.nth.call(null,vec__12921,1,null);var G__12922_12923 = om.core.get_node.call(null,owner,"search-component");var G__12922_12924__$1 = (((G__12922_12923 == null))?null:jayq.core.$.call(null,G__12922_12923));var G__12922_12925__$2 = (((G__12922_12924__$1 == null))?null:G__12922_12924__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__12917.call(null,clustermap.components.search.UP_ARROW,expr__12918)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__12917.call(null,clustermap.components.search.DOWN_ARROW,expr__12918)))
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
clustermap.components.search.search_component = (function search_component(p__12926,owner){var map__12958 = p__12926;var map__12958__$1 = ((cljs.core.seq_QMARK_.call(null,map__12958))?cljs.core.apply.call(null,cljs.core.hash_map,map__12958):map__12958);var map__12959 = cljs.core.get.call(null,map__12958__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__12959__$1 = ((cljs.core.seq_QMARK_.call(null,map__12959))?cljs.core.apply.call(null,cljs.core.hash_map,map__12959):map__12959);var selection_type = cljs.core.get.call(null,map__12959__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__12959__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__12958__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__12958__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__12960 = om.core.get_shared.call(null,owner);var map__12960__$1 = ((cljs.core.seq_QMARK_.call(null,map__12960))?cljs.core.apply.call(null,cljs.core.hash_map,map__12960):map__12960);var path_fn = cljs.core.get.call(null,map__12960__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__12960__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__12961 = search_results;var map__12961__$1 = ((cljs.core.seq_QMARK_.call(null,map__12961))?cljs.core.apply.call(null,cljs.core.hash_map,map__12961):map__12961);var investor_companies = cljs.core.get.call(null,map__12961__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__12961__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__12961__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t12962 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t12962 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,map__12958,p__12926,constituencies,map__12960,investor_companies,map__12961,selection_value,map__12959,comm,selection_type,meta12963){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__12958 = map__12958;
this.p__12926 = p__12926;
this.constituencies = constituencies;
this.map__12960 = map__12960;
this.investor_companies = investor_companies;
this.map__12961 = map__12961;
this.selection_value = selection_value;
this.map__12959 = map__12959;
this.comm = comm;
this.selection_type = selection_type;
this.meta12963 = meta12963;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t12962.cljs$lang$type = true;
clustermap.components.search.t12962.cljs$lang$ctorStr = "clustermap.components.search/t12962";
clustermap.components.search.t12962.cljs$lang$ctorPrWriter = ((function (map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t12962");
});})(map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t12962.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t12962.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
});})(this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function iter__12965(s__12966){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (){var s__12966__$1 = s__12966;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12966__$1);if(temp__4126__auto__)
{var s__12966__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12966__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__12966__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__12968 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__12967 = 0;while(true){
if((i__12967 < size__4263__auto__))
{var vec__12971 = cljs.core._nth.call(null,c__4262__auto__,i__12967);var idx = cljs.core.nth.call(null,vec__12971,0,null);var con = cljs.core.nth.call(null,vec__12971,1,null);cljs.core.chunk_append.call(null,b__12968,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12967,vec__12971,idx,con,c__4262__auto__,size__4263__auto__,b__12968,s__12966__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(i__12967,vec__12971,idx,con,c__4262__auto__,size__4263__auto__,b__12968,s__12966__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12989 = (i__12967 + 1);
i__12967 = G__12989;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12968),iter__12965.call(null,cljs.core.chunk_rest.call(null,s__12966__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12968),null);
}
} else
{var vec__12972 = cljs.core.first.call(null,s__12966__$2);var idx = cljs.core.nth.call(null,vec__12972,0,null);var con = cljs.core.nth.call(null,vec__12972,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12972,idx,con,s__12966__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(vec__12972,idx,con,s__12966__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12965.call(null,cljs.core.rest.call(null,s__12966__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function iter__12973(s__12974){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (){var s__12974__$1 = s__12974;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12974__$1);if(temp__4126__auto__)
{var s__12974__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12974__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__12974__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__12976 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__12975 = 0;while(true){
if((i__12975 < size__4263__auto__))
{var vec__12979 = cljs.core._nth.call(null,c__4262__auto__,i__12975);var idx = cljs.core.nth.call(null,vec__12979,0,null);var pc = cljs.core.nth.call(null,vec__12979,1,null);cljs.core.chunk_append.call(null,b__12976,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12975,vec__12979,idx,pc,c__4262__auto__,size__4263__auto__,b__12976,s__12974__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(i__12975,vec__12979,idx,pc,c__4262__auto__,size__4263__auto__,b__12976,s__12974__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12990 = (i__12975 + 1);
i__12975 = G__12990;
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
{var vec__12980 = cljs.core.first.call(null,s__12974__$2);var idx = cljs.core.nth.call(null,vec__12980,0,null);var pc = cljs.core.nth.call(null,vec__12980,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12980,idx,pc,s__12974__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(vec__12980,idx,pc,s__12974__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12973.call(null,cljs.core.rest.call(null,s__12974__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function iter__12981(s__12982){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (){var s__12982__$1 = s__12982;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12982__$1);if(temp__4126__auto__)
{var s__12982__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12982__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__12982__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__12984 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__12983 = 0;while(true){
if((i__12983 < size__4263__auto__))
{var vec__12987 = cljs.core._nth.call(null,c__4262__auto__,i__12983);var idx = cljs.core.nth.call(null,vec__12987,0,null);var inv = cljs.core.nth.call(null,vec__12987,1,null);cljs.core.chunk_append.call(null,b__12984,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__12983,vec__12987,idx,inv,c__4262__auto__,size__4263__auto__,b__12984,s__12982__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(i__12983,vec__12987,idx,inv,c__4262__auto__,size__4263__auto__,b__12984,s__12982__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__12991 = (i__12983 + 1);
i__12983 = G__12991;
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
{var vec__12988 = cljs.core.first.call(null,s__12982__$2);var idx = cljs.core.nth.call(null,vec__12988,0,null);var inv = cljs.core.nth.call(null,vec__12988,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__12988,idx,inv,s__12982__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(vec__12988,idx,inv,s__12982__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__12981.call(null,cljs.core.rest.call(null,s__12982__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t12962.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (_12964){var self__ = this;
var _12964__$1 = this;return self__.meta12963;
});})(map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t12962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function (_12964,meta12963__$1){var self__ = this;
var _12964__$1 = this;return (new clustermap.components.search.t12962(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__12958,self__.p__12926,self__.constituencies,self__.map__12960,self__.investor_companies,self__.map__12961,self__.selection_value,self__.map__12959,self__.comm,self__.selection_type,meta12963__$1));
});})(map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t12962 = ((function (map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results){
return (function __GT_t12962(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__12958__$2,p__12926__$1,constituencies__$1,map__12960__$2,investor_companies__$1,map__12961__$2,selection_value__$1,map__12959__$2,comm__$1,selection_type__$1,meta12963){return (new clustermap.components.search.t12962(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__12958__$2,p__12926__$1,constituencies__$1,map__12960__$2,investor_companies__$1,map__12961__$2,selection_value__$1,map__12959__$2,comm__$1,selection_type__$1,meta12963));
});})(map__12960,map__12960__$1,path_fn,comm,path_fn__$1,map__12961,map__12961__$1,investor_companies,portfolio_companies,constituencies,map__12958,map__12958__$1,map__12959,map__12959__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t12962(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,map__12958__$1,p__12926,constituencies,map__12960__$1,investor_companies,map__12961__$1,selection_value,map__12959__$1,comm,selection_type,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
