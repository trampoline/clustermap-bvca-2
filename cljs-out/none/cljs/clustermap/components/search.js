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
clustermap.components.search.search_result_link = (function search_result_link(p__24032,owner,p__24033){var map__24042 = p__24032;var map__24042__$1 = ((cljs.core.seq_QMARK_.call(null,map__24042))?cljs.core.apply.call(null,cljs.core.hash_map,map__24042):map__24042);var search_result = map__24042__$1;var type = cljs.core.get.call(null,map__24042__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__24042__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__24043 = p__24033;var map__24043__$1 = ((cljs.core.seq_QMARK_.call(null,map__24043))?cljs.core.apply.call(null,cljs.core.hash_map,map__24043):map__24043);var opts = map__24043__$1;var path_fn = cljs.core.get.call(null,map__24043__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__24043__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t24044 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t24044 = (function (map__24043,owner,path_fn,search_result_link,name,p__24033,comm,search_result,type,map__24042,p__24032,opts,meta24045){
this.map__24043 = map__24043;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.p__24033 = p__24033;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__24042 = map__24042;
this.p__24032 = p__24032;
this.opts = opts;
this.meta24045 = meta24045;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t24044.cljs$lang$type = true;
clustermap.components.search.t24044.cljs$lang$ctorStr = "clustermap.components.search/t24044";
clustermap.components.search.t24044.cljs$lang$ctorPrWriter = ((function (map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t24044");
});})(map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm))
;
clustermap.components.search.t24044.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t24044.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm){
return (function (this$,p__24047){var self__ = this;
var map__24048 = p__24047;var map__24048__$1 = ((cljs.core.seq_QMARK_.call(null,map__24048))?cljs.core.apply.call(null,cljs.core.hash_map,map__24048):map__24048);var state = map__24048__$1;var selected = cljs.core.get.call(null,map__24048__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__24048,map__24048__$1,state,selected,map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__24049 = l;var G__24049__$1 = (((G__24049 == null))?null:jayq.core.$.call(null,G__24049));var G__24049__$2 = (((G__24049__$1 == null))?null:G__24049__$1.parents(".search-component"));var G__24049__$3 = (((G__24049__$2 == null))?null:G__24049__$2.toggle());return G__24049__$3;
});})(path,this$__$1,map__24048,map__24048__$1,state,selected,map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm))
;
clustermap.components.search.t24044.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm){
return (function (_24046){var self__ = this;
var _24046__$1 = this;return self__.meta24045;
});})(map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm))
;
clustermap.components.search.t24044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm){
return (function (_24046,meta24045__$1){var self__ = this;
var _24046__$1 = this;return (new clustermap.components.search.t24044(self__.map__24043,self__.owner,self__.path_fn,self__.search_result_link,self__.name,self__.p__24033,self__.comm,self__.search_result,self__.type,self__.map__24042,self__.p__24032,self__.opts,meta24045__$1));
});})(map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t24044 = ((function (map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm){
return (function __GT_t24044(map__24043__$2,owner__$1,path_fn__$1,search_result_link__$1,name__$1,p__24033__$1,comm__$1,search_result__$1,type__$1,map__24042__$2,p__24032__$1,opts__$1,meta24045){return (new clustermap.components.search.t24044(map__24043__$2,owner__$1,path_fn__$1,search_result_link__$1,name__$1,p__24033__$1,comm__$1,search_result__$1,type__$1,map__24042__$2,p__24032__$1,opts__$1,meta24045));
});})(map__24042,map__24042__$1,search_result,type,name,map__24043,map__24043__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t24044(map__24043__$1,owner,path_fn,search_result_link,name,p__24033,comm,search_result,type,map__24042__$1,p__24032,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__24050,n){var map__24052 = p__24050;var map__24052__$1 = ((cljs.core.seq_QMARK_.call(null,map__24052))?cljs.core.apply.call(null,cljs.core.hash_map,map__24052):map__24052);var investor_companies = cljs.core.get.call(null,map__24052__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__24052__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__24052__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3539__auto__ = constituencies;if(cljs.core.truth_(or__3539__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__24059 = cljs.core._EQ__EQ_;var expr__24060 = e.keyCode;if(cljs.core.truth_(pred__24059.call(null,clustermap.components.search.ESCAPE_KEY,expr__24060)))
{var G__24062 = om.core.get_node.call(null,owner,"search-component");var G__24062__$1 = (((G__24062 == null))?null:jayq.core.$.call(null,G__24062));var G__24062__$2 = (((G__24062__$1 == null))?null:G__24062__$1.toggle());return G__24062__$2;
} else
{if(cljs.core.truth_(pred__24059.call(null,clustermap.components.search.ENTER_KEY,expr__24060)))
{var vec__24063 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__24063,0,null);var res = cljs.core.nth.call(null,vec__24063,1,null);var G__24064_24065 = om.core.get_node.call(null,owner,"search-component");var G__24064_24066__$1 = (((G__24064_24065 == null))?null:jayq.core.$.call(null,G__24064_24065));var G__24064_24067__$2 = (((G__24064_24066__$1 == null))?null:G__24064_24066__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__24059.call(null,clustermap.components.search.UP_ARROW,expr__24060)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__24059.call(null,clustermap.components.search.DOWN_ARROW,expr__24060)))
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
clustermap.components.search.search_component = (function search_component(p__24068,owner){var map__24100 = p__24068;var map__24100__$1 = ((cljs.core.seq_QMARK_.call(null,map__24100))?cljs.core.apply.call(null,cljs.core.hash_map,map__24100):map__24100);var map__24101 = cljs.core.get.call(null,map__24100__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__24101__$1 = ((cljs.core.seq_QMARK_.call(null,map__24101))?cljs.core.apply.call(null,cljs.core.hash_map,map__24101):map__24101);var selection_type = cljs.core.get.call(null,map__24101__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__24101__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__24100__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__24100__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__24102 = om.core.get_shared.call(null,owner);var map__24102__$1 = ((cljs.core.seq_QMARK_.call(null,map__24102))?cljs.core.apply.call(null,cljs.core.hash_map,map__24102):map__24102);var path_fn = cljs.core.get.call(null,map__24102__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__24102__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__24103 = search_results;var map__24103__$1 = ((cljs.core.seq_QMARK_.call(null,map__24103))?cljs.core.apply.call(null,cljs.core.hash_map,map__24103):map__24103);var investor_companies = cljs.core.get.call(null,map__24103__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__24103__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__24103__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t24104 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t24104 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,map__24100,constituencies,p__24068,investor_companies,selection_value,comm,map__24101,selection_type,map__24102,map__24103,meta24105){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__24100 = map__24100;
this.constituencies = constituencies;
this.p__24068 = p__24068;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__24101 = map__24101;
this.selection_type = selection_type;
this.map__24102 = map__24102;
this.map__24103 = map__24103;
this.meta24105 = meta24105;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t24104.cljs$lang$type = true;
clustermap.components.search.t24104.cljs$lang$ctorStr = "clustermap.components.search/t24104";
clustermap.components.search.t24104.cljs$lang$ctorPrWriter = ((function (map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t24104");
});})(map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24104.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t24104.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
});})(this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function iter__24107(s__24108){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24108__$1 = s__24108;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24108__$1);if(temp__4126__auto__)
{var s__24108__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24108__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__24108__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__24110 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__24109 = 0;while(true){
if((i__24109 < size__4263__auto__))
{var vec__24113 = cljs.core._nth.call(null,c__4262__auto__,i__24109);var idx = cljs.core.nth.call(null,vec__24113,0,null);var con = cljs.core.nth.call(null,vec__24113,1,null);cljs.core.chunk_append.call(null,b__24110,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__24109,vec__24113,idx,con,c__4262__auto__,size__4263__auto__,b__24110,s__24108__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(i__24109,vec__24113,idx,con,c__4262__auto__,size__4263__auto__,b__24110,s__24108__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__24131 = (i__24109 + 1);
i__24109 = G__24131;
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
{var vec__24114 = cljs.core.first.call(null,s__24108__$2);var idx = cljs.core.nth.call(null,vec__24114,0,null);var con = cljs.core.nth.call(null,vec__24114,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__24114,idx,con,s__24108__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(vec__24114,idx,con,s__24108__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__24107.call(null,cljs.core.rest.call(null,s__24108__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function iter__24115(s__24116){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24116__$1 = s__24116;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24116__$1);if(temp__4126__auto__)
{var s__24116__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24116__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__24116__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__24118 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__24117 = 0;while(true){
if((i__24117 < size__4263__auto__))
{var vec__24121 = cljs.core._nth.call(null,c__4262__auto__,i__24117);var idx = cljs.core.nth.call(null,vec__24121,0,null);var pc = cljs.core.nth.call(null,vec__24121,1,null);cljs.core.chunk_append.call(null,b__24118,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__24117,vec__24121,idx,pc,c__4262__auto__,size__4263__auto__,b__24118,s__24116__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(i__24117,vec__24121,idx,pc,c__4262__auto__,size__4263__auto__,b__24118,s__24116__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__24132 = (i__24117 + 1);
i__24117 = G__24132;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24118),iter__24115.call(null,cljs.core.chunk_rest.call(null,s__24116__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24118),null);
}
} else
{var vec__24122 = cljs.core.first.call(null,s__24116__$2);var idx = cljs.core.nth.call(null,vec__24122,0,null);var pc = cljs.core.nth.call(null,vec__24122,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__24122,idx,pc,s__24116__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(vec__24122,idx,pc,s__24116__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__24115.call(null,cljs.core.rest.call(null,s__24116__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function iter__24123(s__24124){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (){var s__24124__$1 = s__24124;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__24124__$1);if(temp__4126__auto__)
{var s__24124__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__24124__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__24124__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__24126 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__24125 = 0;while(true){
if((i__24125 < size__4263__auto__))
{var vec__24129 = cljs.core._nth.call(null,c__4262__auto__,i__24125);var idx = cljs.core.nth.call(null,vec__24129,0,null);var inv = cljs.core.nth.call(null,vec__24129,1,null);cljs.core.chunk_append.call(null,b__24126,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__24125,vec__24129,idx,inv,c__4262__auto__,size__4263__auto__,b__24126,s__24124__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(i__24125,vec__24129,idx,inv,c__4262__auto__,size__4263__auto__,b__24126,s__24124__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__24133 = (i__24125 + 1);
i__24125 = G__24133;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24126),iter__24123.call(null,cljs.core.chunk_rest.call(null,s__24124__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24126),null);
}
} else
{var vec__24130 = cljs.core.first.call(null,s__24124__$2);var idx = cljs.core.nth.call(null,vec__24130,0,null);var inv = cljs.core.nth.call(null,vec__24130,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__24130,idx,inv,s__24124__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(vec__24130,idx,inv,s__24124__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__24123.call(null,cljs.core.rest.call(null,s__24124__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_invs);
})()):null)], null)], null);
})():null)));
});})(map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24104.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (_24106){var self__ = this;
var _24106__$1 = this;return self__.meta24105;
});})(map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t24104.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function (_24106,meta24105__$1){var self__ = this;
var _24106__$1 = this;return (new clustermap.components.search.t24104(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__24100,self__.constituencies,self__.p__24068,self__.investor_companies,self__.selection_value,self__.comm,self__.map__24101,self__.selection_type,self__.map__24102,self__.map__24103,meta24105__$1));
});})(map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t24104 = ((function (map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results){
return (function __GT_t24104(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__24100__$2,constituencies__$1,p__24068__$1,investor_companies__$1,selection_value__$1,comm__$1,map__24101__$2,selection_type__$1,map__24102__$2,map__24103__$2,meta24105){return (new clustermap.components.search.t24104(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__24100__$2,constituencies__$1,p__24068__$1,investor_companies__$1,selection_value__$1,comm__$1,map__24101__$2,selection_type__$1,map__24102__$2,map__24103__$2,meta24105));
});})(map__24102,map__24102__$1,path_fn,comm,path_fn__$1,map__24103,map__24103__$1,investor_companies,portfolio_companies,constituencies,map__24100,map__24100__$1,map__24101,map__24101__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t24104(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,map__24100__$1,constituencies,p__24068,investor_companies,selection_value,comm,map__24101__$1,selection_type,map__24102__$1,map__24103__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});

//# sourceMappingURL=search.js.map