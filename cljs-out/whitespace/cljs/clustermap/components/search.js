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
clustermap.components.search.search_result_link = (function search_result_link(p__46268,owner,p__46269){var map__46278 = p__46268;var map__46278__$1 = ((cljs.core.seq_QMARK_.call(null,map__46278))?cljs.core.apply.call(null,cljs.core.hash_map,map__46278):map__46278);var search_result = map__46278__$1;var type = cljs.core.get.call(null,map__46278__$1,new cljs.core.Keyword(null,"type","type",1017479852));var name = cljs.core.get.call(null,map__46278__$1,new cljs.core.Keyword(null,"name","name",1017277949));var map__46279 = p__46269;var map__46279__$1 = ((cljs.core.seq_QMARK_.call(null,map__46279))?cljs.core.apply.call(null,cljs.core.hash_map,map__46279):map__46279);var opts = map__46279__$1;var path_fn = cljs.core.get.call(null,map__46279__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__46279__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.search.t46280 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t46280 = (function (owner,path_fn,p__46268,map__46279,search_result_link,name,comm,search_result,type,p__46269,map__46278,opts,meta46281){
this.owner = owner;
this.path_fn = path_fn;
this.p__46268 = p__46268;
this.map__46279 = map__46279;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__46269 = p__46269;
this.map__46278 = map__46278;
this.opts = opts;
this.meta46281 = meta46281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t46280.cljs$lang$type = true;
clustermap.components.search.t46280.cljs$lang$ctorStr = "clustermap.components.search/t46280";
clustermap.components.search.t46280.cljs$lang$ctorPrWriter = ((function (map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t46280");
});})(map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm))
;
clustermap.components.search.t46280.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t46280.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm){
return (function (this$,p__46283){var self__ = this;
var map__46284 = p__46283;var map__46284__$1 = ((cljs.core.seq_QMARK_.call(null,map__46284))?cljs.core.apply.call(null,cljs.core.hash_map,map__46284):map__46284);var state = map__46284__$1;var selected = cljs.core.get.call(null,map__46284__$1,new cljs.core.Keyword(null,"selected","selected",2205476365));var this$__$1 = this;var path = self__.path_fn.call(null,self__.type,self__.search_result);return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__46284,map__46284__$1,state,selected,map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.call(null,self__.owner,"link");var G__46285 = l;var G__46285__$1 = (((G__46285 == null))?null:jayq.core.$.call(null,G__46285));var G__46285__$2 = (((G__46285__$1 == null))?null:G__46285__$1.parents(".search-component"));var G__46285__$3 = (((G__46285__$2 == null))?null:G__46285__$2.toggle());return G__46285__$3;
});})(path,this$__$1,map__46284,map__46284__$1,state,selected,map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm))
},sablono.interpreter.interpret.call(null,self__.name)));
});})(map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm))
;
clustermap.components.search.t46280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm){
return (function (_46282){var self__ = this;
var _46282__$1 = this;return self__.meta46281;
});})(map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm))
;
clustermap.components.search.t46280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm){
return (function (_46282,meta46281__$1){var self__ = this;
var _46282__$1 = this;return (new clustermap.components.search.t46280(self__.owner,self__.path_fn,self__.p__46268,self__.map__46279,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.p__46269,self__.map__46278,self__.opts,meta46281__$1));
});})(map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t46280 = ((function (map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm){
return (function __GT_t46280(owner__$1,path_fn__$1,p__46268__$1,map__46279__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__46269__$1,map__46278__$2,opts__$1,meta46281){return (new clustermap.components.search.t46280(owner__$1,path_fn__$1,p__46268__$1,map__46279__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__46269__$1,map__46278__$2,opts__$1,meta46281));
});})(map__46278,map__46278__$1,search_result,type,name,map__46279,map__46279__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t46280(owner,path_fn,p__46268,map__46279__$1,search_result_link,name,comm,search_result,type,p__46269,map__46278__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__46286,n){var map__46288 = p__46286;var map__46288__$1 = ((cljs.core.seq_QMARK_.call(null,map__46288))?cljs.core.apply.call(null,cljs.core.hash_map,map__46288):map__46288);var investor_companies = cljs.core.get.call(null,map__46288__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__46288__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__46288__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));var cons = (function (){var or__3539__auto__ = constituencies;if(cljs.core.truth_(or__3539__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__46295 = cljs.core._EQ__EQ_;var expr__46296 = e.keyCode;if(cljs.core.truth_(pred__46295.call(null,clustermap.components.search.ESCAPE_KEY,expr__46296)))
{var G__46298 = om.core.get_node.call(null,owner,"search-component");var G__46298__$1 = (((G__46298 == null))?null:jayq.core.$.call(null,G__46298));var G__46298__$2 = (((G__46298__$1 == null))?null:G__46298__$1.toggle());return G__46298__$2;
} else
{if(cljs.core.truth_(pred__46295.call(null,clustermap.components.search.ENTER_KEY,expr__46296)))
{var vec__46299 = clustermap.components.search.nth_search_result.call(null,cljs.core.deref.call(null,search_results),(function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.call(null,vec__46299,0,null);var res = cljs.core.nth.call(null,vec__46299,1,null);var G__46300_46301 = om.core.get_node.call(null,owner,"search-component");var G__46300_46302__$1 = (((G__46300_46301 == null))?null:jayq.core.$.call(null,G__46300_46301));var G__46300_46303__$2 = (((G__46300_46302__$1 == null))?null:G__46300_46302__$1.toggle());return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id.call(null,type,res)], null)], null));
} else
{if(cljs.core.truth_(pred__46295.call(null,clustermap.components.search.UP_ARROW,expr__46296)))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),((function (){var or__3539__auto__ = om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109));if(cljs.core.truth_(or__3539__auto__))
{return or__3539__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_(pred__46295.call(null,clustermap.components.search.DOWN_ARROW,expr__46296)))
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
clustermap.components.search.search_component = (function search_component(p__46304,owner){var map__46336 = p__46304;var map__46336__$1 = ((cljs.core.seq_QMARK_.call(null,map__46336))?cljs.core.apply.call(null,cljs.core.hash_map,map__46336):map__46336);var map__46337 = cljs.core.get.call(null,map__46336__$1,new cljs.core.Keyword(null,"selection","selection",3592905982));var map__46337__$1 = ((cljs.core.seq_QMARK_.call(null,map__46337))?cljs.core.apply.call(null,cljs.core.hash_map,map__46337):map__46337);var selection_type = cljs.core.get.call(null,map__46337__$1,new cljs.core.Keyword(null,"type","type",1017479852));var selection_value = cljs.core.get.call(null,map__46337__$1,new cljs.core.Keyword(null,"value","value",1125876963));var view = cljs.core.get.call(null,map__46336__$1,new cljs.core.Keyword(null,"view","view",1017523735));var search_results = cljs.core.get.call(null,map__46336__$1,new cljs.core.Keyword(null,"search-results","search-results",1025331267));var map__46338 = om.core.get_shared.call(null,owner);var map__46338__$1 = ((cljs.core.seq_QMARK_.call(null,map__46338))?cljs.core.apply.call(null,cljs.core.hash_map,map__46338):map__46338);var path_fn = cljs.core.get.call(null,map__46338__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var comm = cljs.core.get.call(null,map__46338__$1,new cljs.core.Keyword(null,"comm","comm",1016963710));var path_fn__$1 = cljs.core.partial.call(null,path_fn,view);var map__46339 = search_results;var map__46339__$1 = ((cljs.core.seq_QMARK_.call(null,map__46339))?cljs.core.apply.call(null,cljs.core.hash_map,map__46339):map__46339);var investor_companies = cljs.core.get.call(null,map__46339__$1,new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630));var portfolio_companies = cljs.core.get.call(null,map__46339__$1,new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150));var constituencies = cljs.core.get.call(null,map__46339__$1,new cljs.core.Keyword(null,"constituencies","constituencies",2756015190));if(typeof clustermap.components.search.t46340 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t46340 = (function (map__46339,search_results,search_component,owner,path_fn,view,portfolio_companies,constituencies,map__46336,investor_companies,p__46304,selection_value,comm,map__46337,map__46338,selection_type,meta46341){
this.map__46339 = map__46339;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__46336 = map__46336;
this.investor_companies = investor_companies;
this.p__46304 = p__46304;
this.selection_value = selection_value;
this.comm = comm;
this.map__46337 = map__46337;
this.map__46338 = map__46338;
this.selection_type = selection_type;
this.meta46341 = meta46341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t46340.cljs$lang$type = true;
clustermap.components.search.t46340.cljs$lang$ctorStr = "clustermap.components.search/t46340";
clustermap.components.search.t46340.cljs$lang$ctorPrWriter = ((function (map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write.call(null,writer__4107__auto__,"clustermap.components.search/t46340");
});})(map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t46340.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t46340.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down.call(null,e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),e.target.value], null));
});})(this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
})),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.call(null,self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"search","search",4402534682),""], null));
return om.core.get_node.call(null,self__.owner,"search-field").value = "";
});})(this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count.call(null,idx_cons) + cljs.core.count.call(null,idx_pcs)) + cljs.core.count.call(null,idx_invs)));var _ = ((cljs.core.not_EQ_.call(null,selected_idx,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109).cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"selected-idx","selected-idx",3553242109),selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_cons))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function iter__46343(s__46344){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (){var s__46344__$1 = s__46344;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46344__$1);if(temp__4126__auto__)
{var s__46344__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46344__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__46344__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__46346 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__46345 = 0;while(true){
if((i__46345 < size__4263__auto__))
{var vec__46349 = cljs.core._nth.call(null,c__4262__auto__,i__46345);var idx = cljs.core.nth.call(null,vec__46349,0,null);var con = cljs.core.nth.call(null,vec__46349,1,null);cljs.core.chunk_append.call(null,b__46346,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__46345,vec__46349,idx,con,c__4262__auto__,size__4263__auto__,b__46346,s__46344__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(i__46345,vec__46349,idx,con,c__4262__auto__,size__4263__auto__,b__46346,s__46344__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__46367 = (i__46345 + 1);
i__46345 = G__46367;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46346),iter__46343.call(null,cljs.core.chunk_rest.call(null,s__46344__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46346),null);
}
} else
{var vec__46350 = cljs.core.first.call(null,s__46344__$2);var idx = cljs.core.nth.call(null,vec__46350,0,null);var con = cljs.core.nth.call(null,vec__46350,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__46350,idx,con,s__46344__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)),new cljs.core.Keyword(null,"uid","uid",1014020034),("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318)))));
});})(vec__46350,idx,con,s__46344__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__46343.call(null,cljs.core.rest.call(null,s__46344__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_cons);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_pcs))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function iter__46351(s__46352){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (){var s__46352__$1 = s__46352;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46352__$1);if(temp__4126__auto__)
{var s__46352__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46352__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__46352__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__46354 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__46353 = 0;while(true){
if((i__46353 < size__4263__auto__))
{var vec__46357 = cljs.core._nth.call(null,c__4262__auto__,i__46353);var idx = cljs.core.nth.call(null,vec__46357,0,null);var pc = cljs.core.nth.call(null,vec__46357,1,null);cljs.core.chunk_append.call(null,b__46354,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__46353,vec__46357,idx,pc,c__4262__auto__,size__4263__auto__,b__46354,s__46352__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(i__46353,vec__46357,idx,pc,c__4262__auto__,size__4263__auto__,b__46354,s__46352__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__46368 = (i__46353 + 1);
i__46353 = G__46368;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46354),iter__46351.call(null,cljs.core.chunk_rest.call(null,s__46352__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46354),null);
}
} else
{var vec__46358 = cljs.core.first.call(null,s__46352__$2);var idx = cljs.core.nth.call(null,vec__46358,0,null);var pc = cljs.core.nth.call(null,vec__46358,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__46358,idx,pc,s__46352__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)),new cljs.core.Keyword(null,"uid","uid",1014020034),("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"company_no","company_no",4461198389)))));
});})(vec__46358,idx,pc,s__46352__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__46351.call(null,cljs.core.rest.call(null,s__46352__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_pcs);
})():null),cljs.core.filter.call(null,cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty.call(null,idx_invs))?(function (){var iter__4264__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function iter__46359(s__46360){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (){var s__46360__$1 = s__46360;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46360__$1);if(temp__4126__auto__)
{var s__46360__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46360__$2))
{var c__4262__auto__ = cljs.core.chunk_first.call(null,s__46360__$2);var size__4263__auto__ = cljs.core.count.call(null,c__4262__auto__);var b__46362 = cljs.core.chunk_buffer.call(null,size__4263__auto__);if((function (){var i__46361 = 0;while(true){
if((i__46361 < size__4263__auto__))
{var vec__46365 = cljs.core._nth.call(null,c__4262__auto__,i__46361);var idx = cljs.core.nth.call(null,vec__46365,0,null);var inv = cljs.core.nth.call(null,vec__46365,1,null);cljs.core.chunk_append.call(null,b__46362,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (i__46361,vec__46365,idx,inv,c__4262__auto__,size__4263__auto__,b__46362,s__46360__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(i__46361,vec__46365,idx,inv,c__4262__auto__,size__4263__auto__,b__46362,s__46360__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)));
{
var G__46369 = (i__46361 + 1);
i__46361 = G__46369;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46362),iter__46359.call(null,cljs.core.chunk_rest.call(null,s__46360__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46362),null);
}
} else
{var vec__46366 = cljs.core.first.call(null,s__46360__$2);var idx = cljs.core.nth.call(null,vec__46366,0,null);var inv = cljs.core.nth.call(null,vec__46366,1,null);return cljs.core.cons.call(null,om.core.build.call(null,clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"comm","comm",1016963710),self__.comm,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570),self__.path_fn], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,idx,selected_idx)], null),new cljs.core.Keyword(null,"fn","fn",1013907514),((function (vec__46366,idx,inv,s__46360__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)),new cljs.core.Keyword(null,"uid","uid",1014020034),("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,data,new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593)))));
});})(vec__46366,idx,inv,s__46360__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
,new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"uid","uid",1014020034)], null)),iter__46359.call(null,cljs.core.rest.call(null,s__46360__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
;return iter__4264__auto__.call(null,idx_invs);
})():null)], null)], null);
})():null)));
});})(map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t46340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (_46342){var self__ = this;
var _46342__$1 = this;return self__.meta46341;
});})(map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t46340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function (_46342,meta46341__$1){var self__ = this;
var _46342__$1 = this;return (new clustermap.components.search.t46340(self__.map__46339,self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.map__46336,self__.investor_companies,self__.p__46304,self__.selection_value,self__.comm,self__.map__46337,self__.map__46338,self__.selection_type,meta46341__$1));
});})(map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t46340 = ((function (map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results){
return (function __GT_t46340(map__46339__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__46336__$2,investor_companies__$1,p__46304__$1,selection_value__$1,comm__$1,map__46337__$2,map__46338__$2,selection_type__$1,meta46341){return (new clustermap.components.search.t46340(map__46339__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__46336__$2,investor_companies__$1,p__46304__$1,selection_value__$1,comm__$1,map__46337__$2,map__46338__$2,selection_type__$1,meta46341));
});})(map__46338,map__46338__$1,path_fn,comm,path_fn__$1,map__46339,map__46339__$1,investor_companies,portfolio_companies,constituencies,map__46336,map__46336__$1,map__46337,map__46337__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t46340(map__46339__$1,search_results,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,map__46336__$1,investor_companies,p__46304,selection_value,comm,map__46337__$1,map__46338__$1,selection_type,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shared","shared",4405305303),shared,new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById(elem_id)], null));
});
