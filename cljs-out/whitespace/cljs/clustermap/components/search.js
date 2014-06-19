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
clustermap.components.search.search_result_link = (function search_result_link(p__46300,owner,p__46301){var map__46310 = p__46300;var map__46310__$1 = ((cljs.core.seq_QMARK_.call(null,map__46310))?cljs.core.apply.call(null,cljs.core.hash_map,map__46310):map__46310);var search_result = map__46310__$1;var type = cljs.core.get.call(null,map__46310__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__46310__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__46311 = p__46301;var map__46311__$1 = ((cljs.core.seq_QMARK_.call(null,map__46311))?cljs.core.apply.call(null,cljs.core.hash_map,map__46311):map__46311);var opts = map__46311__$1;var path_fn = cljs.core.get.call(null,map__46311__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__46311__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t46312 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t46312 = (function (map__46310,owner,path_fn,search_result_link,map__46311,name,comm,search_result,p__46301,type,p__46300,opts,meta46313){
this.map__46310 = map__46310;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.map__46311 = map__46311;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.p__46301 = p__46301;
this.type = type;
this.p__46300 = p__46300;
this.opts = opts;
this.meta46313 = meta46313;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t46312.cljs$lang$type = true;
clustermap.components.search.t46312.cljs$lang$ctorStr = "clustermap.components.search/t46312";
clustermap.components.search.t46312.cljs$lang$ctorPrWriter = ((function (map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t46312");
});})(map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm))
;
clustermap.components.search.t46312.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t46312.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm){
return (function (this$,p__46315){var self__ = this;
var map__46316 = p__46315;var map__46316__$1 = ((cljs.core.seq_QMARK_.call(null,map__46316))?cljs.core.apply.call(null,cljs.core.hash_map,map__46316):map__46316);var state = map__46316__$1;var selected = cljs.core.get.call(null,map__46316__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__46316,map__46316__$1,state,selected,map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__46317 = l;var G__46317__$1 = (((G__46317 == null))?null:jayq.core.$.call(null,G__46317));var G__46317__$2 = (((G__46317__$1 == null))?null:G__46317__$1.parents(".search-component"));var G__46317__$3 = (((G__46317__$2 == null))?null:G__46317__$2.toggle());return G__46317__$3;
});})(path,this$__$1,map__46316,map__46316__$1,state,selected,map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm))
;
clustermap.components.search.t46312.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm){
return (function (_46314){var self__ = this;
var _46314__$1 = this;return self__.meta46313;
});})(map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm))
;
clustermap.components.search.t46312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm){
return (function (_46314,meta46313__$1){var self__ = this;
var _46314__$1 = this;return (new clustermap.components.search.t46312(self__.map__46310,self__.owner,self__.path_fn,self__.search_result_link,self__.map__46311,self__.name,self__.comm,self__.search_result,self__.p__46301,self__.type,self__.p__46300,self__.opts,meta46313__$1));
});})(map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t46312 = ((function (map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm){
return (function __GT_t46312(map__46310__$2,owner__$1,path_fn__$1,search_result_link__$1,map__46311__$2,name__$1,comm__$1,search_result__$1,p__46301__$1,type__$1,p__46300__$1,opts__$1,meta46313){return (new clustermap.components.search.t46312(map__46310__$2,owner__$1,path_fn__$1,search_result_link__$1,map__46311__$2,name__$1,comm__$1,search_result__$1,p__46301__$1,type__$1,p__46300__$1,opts__$1,meta46313));
});})(map__46310,map__46310__$1,search_result,type,name,map__46311,map__46311__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t46312(map__46310__$1,owner,path_fn,search_result_link,map__46311__$1,name,comm,search_result,p__46301,type,p__46300,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__46318,n){var map__46320 = p__46318;var map__46320__$1 = ((cljs.core.seq_QMARK_.call(null,map__46320))?cljs.core.apply.call(null,cljs.core.hash_map,map__46320):map__46320);var investor_companies = cljs.core.get.call(null,map__46320__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__46320__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__46320__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3539__auto__ = constituencies;if(cljs.core.truth_(or__3539__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__46327 = cljs.core._EQ__EQ_;var expr__46328 = e.keyCode;if(cljs.core.truth_(pred__46327.call(null,clustermap.components.search.ESCAPE_KEY,expr__46328)))
{var G__46330 = om.core.get_node.call(null,owner,"search-component");var G__46330__$1 = (((G__46330 == null))?null:jayq.core.$.call(null,G__46330));var G__46330__$2 = (((G__46330__$1 == null))?null:G__46330__$1.toggle());return G__46330__$2;
} else
{if(cljs.core.truth_(pred__46327.call(null,clustermap.components.search.ENTER_KEY,expr__46328)))
{var vec__46331 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__46331,0,null);var res = cljs.core.nth.call(null,vec__46331,1,null);var G__46332_46333 = om.core.get_node.call(null,owner,"search-component");var G__46332_46334__$1 = (((G__46332_46333 == null))?null:jayq.core.$.call(null,G__46332_46333));var G__46332_46335__$2 = (((G__46332_46334__$1 == null))?null:G__46332_46334__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__46327.call(null,clustermap.components.search.UP_ARROW,expr__46328)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__46327.call(null,clustermap.components.search.DOWN_ARROW,expr__46328)))
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
clustermap.components.search.search_component = (function search_component(p__46336,owner){var map__46368 = p__46336;var map__46368__$1 = ((cljs.core.seq_QMARK_.call(null,map__46368))?cljs.core.apply.call(null,cljs.core.hash_map,map__46368):map__46368);var map__46369 = cljs.core.get.call(null,map__46368__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__46369__$1 = ((cljs.core.seq_QMARK_.call(null,map__46369))?cljs.core.apply.call(null,cljs.core.hash_map,map__46369):map__46369);var selection_type = cljs.core.get.call(null,map__46369__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__46369__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__46368__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__46368__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__46370 = om.core.get_shared.call(null,owner);var map__46370__$1 = ((cljs.core.seq_QMARK_.call(null,map__46370))?cljs.core.apply.call(null,cljs.core.hash_map,map__46370):map__46370);var path_fn = cljs.core.get.call(null,map__46370__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__46370__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__46371 = search_results;var map__46371__$1 = ((cljs.core.seq_QMARK_.call(null,map__46371))?cljs.core.apply.call(null,cljs.core.hash_map,map__46371):map__46371);var investor_companies = cljs.core.get.call(null,map__46371__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__46371__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__46371__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t46372 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t46372 = (function (map__46368,search_results,search_component,owner,path_fn,view,portfolio_companies,map__46369,map__46371,constituencies,investor_companies,map__46370,selection_value,comm,p__46336,selection_type,meta46373){
this.map__46368 = map__46368;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__46369 = map__46369;
this.map__46371 = map__46371;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__46370 = map__46370;
this.selection_value = selection_value;
this.comm = comm;
this.p__46336 = p__46336;
this.selection_type = selection_type;
this.meta46373 = meta46373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t46372.cljs$lang$type = true;
clustermap.components.search.t46372.cljs$lang$ctorStr = "clustermap.components.search/t46372";
clustermap.components.search.t46372.cljs$lang$ctorPrWriter = ((function (map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t46372");
});})(map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t46372.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t46372.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
});})(this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function iter__46375(s__46376){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (){var s__46376__$1 = s__46376;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46376__$1);if(temp__4126__auto__)
{var s__46376__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46376__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__46376__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__46378 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__46377 = 0;while(true){
if((i__46377 < size__4263__auto__))
{var vec__46381 = cljs.core._nth.call(null,c__4262__auto__,i__46377);var idx = cljs.core.nth.call(null,vec__46381,0,null);var con = cljs.core.nth.call(null,vec__46381,1,null);cljs.core.chunk_append.call(null,b__46378,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__46377,vec__46381,idx,con,c__4262__auto__,size__4263__auto__,b__46378,s__46376__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(i__46377,vec__46381,idx,con,c__4262__auto__,size__4263__auto__,b__46378,s__46376__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__46399 = (i__46377 + 1);
i__46377 = G__46399;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46378),iter__46375.call(null,cljs.core.chunk_rest.call(null,s__46376__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46378),null);
}
} else
{var vec__46382 = cljs.core.first.call(null,s__46376__$2);var idx = cljs.core.nth.call(null,vec__46382,0,null);var con = cljs.core.nth.call(null,vec__46382,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__46382,idx,con,s__46376__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(vec__46382,idx,con,s__46376__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__46375.call(null,cljs.core.rest.call(null,s__46376__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function iter__46383(s__46384){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (){var s__46384__$1 = s__46384;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46384__$1);if(temp__4126__auto__)
{var s__46384__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46384__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__46384__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__46386 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__46385 = 0;while(true){
if((i__46385 < size__4263__auto__))
{var vec__46389 = cljs.core._nth.call(null,c__4262__auto__,i__46385);var idx = cljs.core.nth.call(null,vec__46389,0,null);var pc = cljs.core.nth.call(null,vec__46389,1,null);cljs.core.chunk_append.call(null,b__46386,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__46385,vec__46389,idx,pc,c__4262__auto__,size__4263__auto__,b__46386,s__46384__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(i__46385,vec__46389,idx,pc,c__4262__auto__,size__4263__auto__,b__46386,s__46384__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__46400 = (i__46385 + 1);
i__46385 = G__46400;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46386),iter__46383.call(null,cljs.core.chunk_rest.call(null,s__46384__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46386),null);
}
} else
{var vec__46390 = cljs.core.first.call(null,s__46384__$2);var idx = cljs.core.nth.call(null,vec__46390,0,null);var pc = cljs.core.nth.call(null,vec__46390,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__46390,idx,pc,s__46384__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(vec__46390,idx,pc,s__46384__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__46383.call(null,cljs.core.rest.call(null,s__46384__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function iter__46391(s__46392){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (){var s__46392__$1 = s__46392;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46392__$1);if(temp__4126__auto__)
{var s__46392__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46392__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__46392__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__46394 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__46393 = 0;while(true){
if((i__46393 < size__4263__auto__))
{var vec__46397 = cljs.core._nth.call(null,c__4262__auto__,i__46393);var idx = cljs.core.nth.call(null,vec__46397,0,null);var inv = cljs.core.nth.call(null,vec__46397,1,null);cljs.core.chunk_append.call(null,b__46394,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__46393,vec__46397,idx,inv,c__4262__auto__,size__4263__auto__,b__46394,s__46392__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(i__46393,vec__46397,idx,inv,c__4262__auto__,size__4263__auto__,b__46394,s__46392__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__46401 = (i__46393 + 1);
i__46393 = G__46401;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46394),iter__46391.call(null,cljs.core.chunk_rest.call(null,s__46392__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46394),null);
}
} else
{var vec__46398 = cljs.core.first.call(null,s__46392__$2);var idx = cljs.core.nth.call(null,vec__46398,0,null);var inv = cljs.core.nth.call(null,vec__46398,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__46398,idx,inv,s__46392__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(vec__46398,idx,inv,s__46392__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__46391.call(null,cljs.core.rest.call(null,s__46392__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_invs);
})()):null)], null)], null);
})():null)));
});})(map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t46372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (_46374){var self__ = this;
var _46374__$1 = this;return self__.meta46373;
});})(map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t46372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function (_46374,meta46373__$1){var self__ = this;
var _46374__$1 = this;return (new clustermap.components.search.t46372(self__.map__46368,self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__46369,self__.map__46371,self__.constituencies,self__.investor_companies,self__.map__46370,self__.selection_value,self__.comm,self__.p__46336,self__.selection_type,meta46373__$1));
});})(map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t46372 = ((function (map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results){
return (function __GT_t46372(map__46368__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__46369__$2,map__46371__$2,constituencies__$1,investor_companies__$1,map__46370__$2,selection_value__$1,comm__$1,p__46336__$1,selection_type__$1,meta46373){return (new clustermap.components.search.t46372(map__46368__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__46369__$2,map__46371__$2,constituencies__$1,investor_companies__$1,map__46370__$2,selection_value__$1,comm__$1,p__46336__$1,selection_type__$1,meta46373));
});})(map__46370,map__46370__$1,path_fn,comm,path_fn__$1,map__46371,map__46371__$1,investor_companies,portfolio_companies,constituencies,map__46368,map__46368__$1,map__46369,map__46369__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t46372(map__46368__$1,search_results,search_component,owner,path_fn__$1,view,portfolio_companies,map__46369__$1,map__46371__$1,constituencies,investor_companies,map__46370__$1,selection_value,comm,p__46336,selection_type,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
