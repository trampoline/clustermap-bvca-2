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
clustermap.components.search.search_result_link = (function search_result_link(p__38316,owner,p__38317){var map__38326 = p__38316;var map__38326__$1 = ((cljs.core.seq_QMARK_(map__38326))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38326):map__38326);var search_result = map__38326__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38326__$1,cljs.core.constant$keyword$810);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38326__$1,cljs.core.constant$keyword$840);var map__38327 = p__38317;var map__38327__$1 = ((cljs.core.seq_QMARK_(map__38327))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38327):map__38327);var opts = map__38327__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38327__$1,cljs.core.constant$keyword$893);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38327__$1,cljs.core.constant$keyword$903);if(typeof clustermap.components.search.t38328 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t38328 = (function (owner,path_fn,p__38317,map__38327,search_result_link,p__38316,name,comm,search_result,type,opts,map__38326,meta38329){
this.owner = owner;
this.path_fn = path_fn;
this.p__38317 = p__38317;
this.map__38327 = map__38327;
this.search_result_link = search_result_link;
this.p__38316 = p__38316;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.map__38326 = map__38326;
this.meta38329 = meta38329;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t38328.cljs$lang$type = true;
clustermap.components.search.t38328.cljs$lang$ctorStr = "clustermap.components.search/t38328";
clustermap.components.search.t38328.cljs$lang$ctorPrWriter = ((function (map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t38328");
});})(map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm))
;
clustermap.components.search.t38328.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t38328.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm){
return (function (this$,p__38331){var self__ = this;
var map__38332 = p__38331;var map__38332__$1 = ((cljs.core.seq_QMARK_(map__38332))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38332):map__38332);var state = map__38332__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38332__$1,cljs.core.constant$keyword$846);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__38332,map__38332__$1,state,selected,map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__38333 = l;var G__38333__$1 = (((G__38333 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38333));var G__38333__$2 = (((G__38333__$1 == null))?null:G__38333__$1.parents(".search-component"));var G__38333__$3 = (((G__38333__$2 == null))?null:G__38333__$2.toggle());return G__38333__$3;
});})(path,this$__$1,map__38332,map__38332__$1,state,selected,map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm))
;
clustermap.components.search.t38328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm){
return (function (_38330){var self__ = this;
var _38330__$1 = this;return self__.meta38329;
});})(map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm))
;
clustermap.components.search.t38328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm){
return (function (_38330,meta38329__$1){var self__ = this;
var _38330__$1 = this;return (new clustermap.components.search.t38328(self__.owner,self__.path_fn,self__.p__38317,self__.map__38327,self__.search_result_link,self__.p__38316,self__.name,self__.comm,self__.search_result,self__.type,self__.opts,self__.map__38326,meta38329__$1));
});})(map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t38328 = ((function (map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm){
return (function __GT_t38328(owner__$1,path_fn__$1,p__38317__$1,map__38327__$2,search_result_link__$1,p__38316__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,map__38326__$2,meta38329){return (new clustermap.components.search.t38328(owner__$1,path_fn__$1,p__38317__$1,map__38327__$2,search_result_link__$1,p__38316__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,map__38326__$2,meta38329));
});})(map__38326,map__38326__$1,search_result,type,name,map__38327,map__38327__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t38328(owner,path_fn,p__38317,map__38327__$1,search_result_link,p__38316,name,comm,search_result,type,opts,map__38326__$1,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__38334,n){var map__38336 = p__38334;var map__38336__$1 = ((cljs.core.seq_QMARK_(map__38336))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38336):map__38336);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38336__$1,cljs.core.constant$keyword$897);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38336__$1,cljs.core.constant$keyword$982);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38336__$1,cljs.core.constant$keyword$964);var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$898,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$895,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$896,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__38343 = cljs.core._EQ__EQ_;var expr__38344 = e.keyCode;if(cljs.core.truth_((pred__38343.cljs$core$IFn$_invoke$arity$2 ? pred__38343.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__38344) : pred__38343.call(null,clustermap.components.search.ESCAPE_KEY,expr__38344))))
{var G__38346 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__38346__$1 = (((G__38346 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38346));var G__38346__$2 = (((G__38346__$1 == null))?null:G__38346__$1.toggle());return G__38346__$2;
} else
{if(cljs.core.truth_((pred__38343.cljs$core$IFn$_invoke$arity$2 ? pred__38343.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__38344) : pred__38343.call(null,clustermap.components.search.ENTER_KEY,expr__38344))))
{var vec__38347 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$983);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38347,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38347,(1),null);var G__38348_38349 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__38348_38350__$1 = (((G__38348_38349 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__38348_38349));var G__38348_38351__$2 = (((G__38348_38350__$1 == null))?null:G__38348_38350__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$848,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__38343.cljs$core$IFn$_invoke$arity$2 ? pred__38343.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__38344) : pred__38343.call(null,clustermap.components.search.UP_ARROW,expr__38344))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$983,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$983);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__38343.cljs$core$IFn$_invoke$arity$2 ? pred__38343.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__38344) : pred__38343.call(null,clustermap.components.search.DOWN_ARROW,expr__38344))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$983,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$983);if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.search_component = (function search_component(p__38352,owner){var map__38384 = p__38352;var map__38384__$1 = ((cljs.core.seq_QMARK_(map__38384))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38384):map__38384);var map__38385 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38384__$1,cljs.core.constant$keyword$957);var map__38385__$1 = ((cljs.core.seq_QMARK_(map__38385))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38385):map__38385);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38385__$1,cljs.core.constant$keyword$810);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38385__$1,cljs.core.constant$keyword$841);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38384__$1,cljs.core.constant$keyword$984);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38384__$1,cljs.core.constant$keyword$985);var map__38386 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__38386__$1 = ((cljs.core.seq_QMARK_(map__38386))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38386):map__38386);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38386__$1,cljs.core.constant$keyword$893);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38386__$1,cljs.core.constant$keyword$903);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__38387 = search_results;var map__38387__$1 = ((cljs.core.seq_QMARK_(map__38387))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38387):map__38387);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38387__$1,cljs.core.constant$keyword$897);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38387__$1,cljs.core.constant$keyword$982);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38387__$1,cljs.core.constant$keyword$964);if(typeof clustermap.components.search.t38388 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t38388 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,map__38385,constituencies,investor_companies,selection_value,comm,map__38387,selection_type,map__38384,map__38386,p__38352,meta38389){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__38385 = map__38385;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__38387 = map__38387;
this.selection_type = selection_type;
this.map__38384 = map__38384;
this.map__38386 = map__38386;
this.p__38352 = p__38352;
this.meta38389 = meta38389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t38388.cljs$lang$type = true;
clustermap.components.search.t38388.cljs$lang$ctorStr = "clustermap.components.search/t38388";
clustermap.components.search.t38388.cljs$lang$ctorPrWriter = ((function (map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t38388");
});})(map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38388.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t38388.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$986,e.target.value], null));
});})(this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$986,e.target.value], null));
});})(this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$986,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3543__auto__ = cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$983.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$983,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$987,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$823,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$834,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$823,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function iter__38391(s__38392){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38392__$1 = s__38392;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38392__$1);if(temp__4126__auto__)
{var s__38392__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38392__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__38392__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__38394 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__38393 = (0);while(true){
if((i__38393 < size__4267__auto__))
{var vec__38397 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__38393);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38397,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38397,(1),null);cljs.core.chunk_append(b__38394,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$886,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,self__.comm,cljs.core.constant$keyword$893,self__.path_fn], null),cljs.core.constant$keyword$885,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$846,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$880,((function (i__38393,vec__38397,idx,con,c__4266__auto__,size__4267__auto__,b__38394,s__38392__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$810,cljs.core.constant$keyword$898,cljs.core.array_seq([cljs.core.constant$keyword$812,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$813),cljs.core.constant$keyword$988,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$813)))], 0));
});})(i__38393,vec__38397,idx,con,c__4266__auto__,size__4267__auto__,b__38394,s__38392__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$883,cljs.core.constant$keyword$988], null)));
{
var G__38415 = (i__38393 + (1));
i__38393 = G__38415;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38394),iter__38391(cljs.core.chunk_rest(s__38392__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38394),null);
}
} else
{var vec__38398 = cljs.core.first(s__38392__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38398,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38398,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$886,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,self__.comm,cljs.core.constant$keyword$893,self__.path_fn], null),cljs.core.constant$keyword$885,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$846,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$880,((function (vec__38398,idx,con,s__38392__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$810,cljs.core.constant$keyword$898,cljs.core.array_seq([cljs.core.constant$keyword$812,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$813),cljs.core.constant$keyword$988,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$813)))], 0));
});})(vec__38398,idx,con,s__38392__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$883,cljs.core.constant$keyword$988], null)),iter__38391(cljs.core.rest(s__38392__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$823,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function iter__38399(s__38400){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38400__$1 = s__38400;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38400__$1);if(temp__4126__auto__)
{var s__38400__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38400__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__38400__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__38402 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__38401 = (0);while(true){
if((i__38401 < size__4267__auto__))
{var vec__38405 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__38401);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38405,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38405,(1),null);cljs.core.chunk_append(b__38402,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$886,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,self__.comm,cljs.core.constant$keyword$893,self__.path_fn], null),cljs.core.constant$keyword$885,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$846,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$880,((function (i__38401,vec__38405,idx,pc,c__4266__auto__,size__4267__auto__,b__38402,s__38400__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$810,cljs.core.constant$keyword$895,cljs.core.array_seq([cljs.core.constant$keyword$812,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$906),cljs.core.constant$keyword$988,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$906)))], 0));
});})(i__38401,vec__38405,idx,pc,c__4266__auto__,size__4267__auto__,b__38402,s__38400__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$883,cljs.core.constant$keyword$988], null)));
{
var G__38416 = (i__38401 + (1));
i__38401 = G__38416;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38402),iter__38399(cljs.core.chunk_rest(s__38400__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38402),null);
}
} else
{var vec__38406 = cljs.core.first(s__38400__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38406,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38406,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$886,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,self__.comm,cljs.core.constant$keyword$893,self__.path_fn], null),cljs.core.constant$keyword$885,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$846,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$880,((function (vec__38406,idx,pc,s__38400__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$810,cljs.core.constant$keyword$895,cljs.core.array_seq([cljs.core.constant$keyword$812,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$906),cljs.core.constant$keyword$988,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$906)))], 0));
});})(vec__38406,idx,pc,s__38400__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$883,cljs.core.constant$keyword$988], null)),iter__38399(cljs.core.rest(s__38400__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$823,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function iter__38407(s__38408){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (){var s__38408__$1 = s__38408;while(true){
var temp__4126__auto__ = cljs.core.seq(s__38408__$1);if(temp__4126__auto__)
{var s__38408__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__38408__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__38408__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__38410 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__38409 = (0);while(true){
if((i__38409 < size__4267__auto__))
{var vec__38413 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__38409);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38413,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38413,(1),null);cljs.core.chunk_append(b__38410,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$886,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,self__.comm,cljs.core.constant$keyword$893,self__.path_fn], null),cljs.core.constant$keyword$885,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$846,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$880,((function (i__38409,vec__38413,idx,inv,c__4266__auto__,size__4267__auto__,b__38410,s__38408__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$810,cljs.core.constant$keyword$896,cljs.core.array_seq([cljs.core.constant$keyword$812,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$909),cljs.core.constant$keyword$988,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$909)))], 0));
});})(i__38409,vec__38413,idx,inv,c__4266__auto__,size__4267__auto__,b__38410,s__38408__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$883,cljs.core.constant$keyword$988], null)));
{
var G__38417 = (i__38409 + (1));
i__38409 = G__38417;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__38410),iter__38407(cljs.core.chunk_rest(s__38408__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__38410),null);
}
} else
{var vec__38414 = cljs.core.first(s__38408__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38414,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38414,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$886,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$903,self__.comm,cljs.core.constant$keyword$893,self__.path_fn], null),cljs.core.constant$keyword$885,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$846,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$880,((function (vec__38414,idx,inv,s__38408__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$810,cljs.core.constant$keyword$896,cljs.core.array_seq([cljs.core.constant$keyword$812,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$909),cljs.core.constant$keyword$988,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$909)))], 0));
});})(vec__38414,idx,inv,s__38408__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$883,cljs.core.constant$keyword$988], null)),iter__38407(cljs.core.rest(s__38408__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (_38390){var self__ = this;
var _38390__$1 = this;return self__.meta38389;
});})(map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t38388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function (_38390,meta38389__$1){var self__ = this;
var _38390__$1 = this;return (new clustermap.components.search.t38388(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__38385,self__.constituencies,self__.investor_companies,self__.selection_value,self__.comm,self__.map__38387,self__.selection_type,self__.map__38384,self__.map__38386,self__.p__38352,meta38389__$1));
});})(map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t38388 = ((function (map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results){
return (function __GT_t38388(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__38385__$2,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,map__38387__$2,selection_type__$1,map__38384__$2,map__38386__$2,p__38352__$1,meta38389){return (new clustermap.components.search.t38388(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__38385__$2,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,map__38387__$2,selection_type__$1,map__38384__$2,map__38386__$2,p__38352__$1,meta38389));
});})(map__38386,map__38386__$1,path_fn,comm,path_fn__$1,map__38387,map__38387__$1,investor_companies,portfolio_companies,constituencies,map__38384,map__38384__$1,map__38385,map__38385__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t38388(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,map__38385__$1,constituencies,investor_companies,selection_value,comm,map__38387__$1,selection_type,map__38384__$1,map__38386__$1,p__38352,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$888,shared,cljs.core.constant$keyword$891,document.getElementById(elem_id)], null));
});
