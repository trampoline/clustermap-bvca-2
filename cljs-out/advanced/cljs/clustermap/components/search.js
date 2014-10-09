// Compiled by ClojureScript 0.0-2322
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
clustermap.components.search.search_result_link = (function search_result_link(p__40359,owner,p__40360){var map__40369 = p__40359;var map__40369__$1 = ((cljs.core.seq_QMARK_(map__40369))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40369):map__40369);var search_result = map__40369__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40369__$1,cljs.core.constant$keyword$904);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40369__$1,cljs.core.constant$keyword$933);var map__40370 = p__40360;var map__40370__$1 = ((cljs.core.seq_QMARK_(map__40370))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40370):map__40370);var opts = map__40370__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40370__$1,cljs.core.constant$keyword$1004);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40370__$1,cljs.core.constant$keyword$1015);if(typeof clustermap.components.search.t40371 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t40371 = (function (owner,p__40359,path_fn,map__40369,search_result_link,name,comm,search_result,map__40370,type,p__40360,opts,meta40372){
this.owner = owner;
this.p__40359 = p__40359;
this.path_fn = path_fn;
this.map__40369 = map__40369;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.map__40370 = map__40370;
this.type = type;
this.p__40360 = p__40360;
this.opts = opts;
this.meta40372 = meta40372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t40371.cljs$lang$type = true;
clustermap.components.search.t40371.cljs$lang$ctorStr = "clustermap.components.search/t40371";
clustermap.components.search.t40371.cljs$lang$ctorPrWriter = ((function (map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t40371");
});})(map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm))
;
clustermap.components.search.t40371.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t40371.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm){
return (function (this$,p__40374){var self__ = this;
var map__40375 = p__40374;var map__40375__$1 = ((cljs.core.seq_QMARK_(map__40375))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40375):map__40375);var state = map__40375__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40375__$1,cljs.core.constant$keyword$938);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__40375,map__40375__$1,state,selected,map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__40376 = l;var G__40376__$1 = (((G__40376 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__40376));var G__40376__$2 = (((G__40376__$1 == null))?null:G__40376__$1.parents(".search-component"));var G__40376__$3 = (((G__40376__$2 == null))?null:G__40376__$2.toggle());return G__40376__$3;
});})(path,this$__$1,map__40375,map__40375__$1,state,selected,map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm))
;
clustermap.components.search.t40371.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm){
return (function (_40373){var self__ = this;
var _40373__$1 = this;return self__.meta40372;
});})(map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm))
;
clustermap.components.search.t40371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm){
return (function (_40373,meta40372__$1){var self__ = this;
var _40373__$1 = this;return (new clustermap.components.search.t40371(self__.owner,self__.p__40359,self__.path_fn,self__.map__40369,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.map__40370,self__.type,self__.p__40360,self__.opts,meta40372__$1));
});})(map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t40371 = ((function (map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm){
return (function __GT_t40371(owner__$1,p__40359__$1,path_fn__$1,map__40369__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,map__40370__$2,type__$1,p__40360__$1,opts__$1,meta40372){return (new clustermap.components.search.t40371(owner__$1,p__40359__$1,path_fn__$1,map__40369__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,map__40370__$2,type__$1,p__40360__$1,opts__$1,meta40372));
});})(map__40369,map__40369__$1,search_result,type,name,map__40370,map__40370__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t40371(owner,p__40359,path_fn,map__40369__$1,search_result_link,name,comm,search_result,map__40370__$1,type,p__40360,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__40377,n){var map__40379 = p__40377;var map__40379__$1 = ((cljs.core.seq_QMARK_(map__40379))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40379):map__40379);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40379__$1,cljs.core.constant$keyword$1008);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40379__$1,cljs.core.constant$keyword$1095);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40379__$1,cljs.core.constant$keyword$1077);var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3558__auto__ = portfolio_companies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3558__auto__ = investor_companies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1009,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1006,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1007,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__40386 = cljs.core._EQ__EQ_;var expr__40387 = e.keyCode;if(cljs.core.truth_((pred__40386.cljs$core$IFn$_invoke$arity$2 ? pred__40386.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__40387) : pred__40386.call(null,clustermap.components.search.ESCAPE_KEY,expr__40387))))
{var G__40389 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__40389__$1 = (((G__40389 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__40389));var G__40389__$2 = (((G__40389__$1 == null))?null:G__40389__$1.toggle());return G__40389__$2;
} else
{if(cljs.core.truth_((pred__40386.cljs$core$IFn$_invoke$arity$2 ? pred__40386.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__40387) : pred__40386.call(null,clustermap.components.search.ENTER_KEY,expr__40387))))
{var vec__40390 = clustermap.components.search.nth_search_result((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_results) : cljs.core.deref.call(null,search_results)),(function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1096);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40390,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40390,(1),null);var G__40391_40392 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__40391_40393__$1 = (((G__40391_40392 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__40391_40392));var G__40391_40394__$2 = (((G__40391_40393__$1 == null))?null:G__40391_40393__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$940,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__40386.cljs$core$IFn$_invoke$arity$2 ? pred__40386.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__40387) : pred__40386.call(null,clustermap.components.search.UP_ARROW,expr__40387))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1096,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1096);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__40386.cljs$core$IFn$_invoke$arity$2 ? pred__40386.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__40387) : pred__40386.call(null,clustermap.components.search.DOWN_ARROW,expr__40387))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1096,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1096);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
clustermap.components.search.search_component = (function search_component(p__40395,owner){var map__40427 = p__40395;var map__40427__$1 = ((cljs.core.seq_QMARK_(map__40427))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40427):map__40427);var map__40428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40427__$1,cljs.core.constant$keyword$1070);var map__40428__$1 = ((cljs.core.seq_QMARK_(map__40428))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40428):map__40428);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40428__$1,cljs.core.constant$keyword$904);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40428__$1,cljs.core.constant$keyword$934);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40427__$1,cljs.core.constant$keyword$1097);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40427__$1,cljs.core.constant$keyword$1098);var map__40429 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__40429__$1 = ((cljs.core.seq_QMARK_(map__40429))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40429):map__40429);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40429__$1,cljs.core.constant$keyword$1004);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40429__$1,cljs.core.constant$keyword$1015);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__40430 = search_results;var map__40430__$1 = ((cljs.core.seq_QMARK_(map__40430))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40430):map__40430);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430__$1,cljs.core.constant$keyword$1008);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430__$1,cljs.core.constant$keyword$1095);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40430__$1,cljs.core.constant$keyword$1077);if(typeof clustermap.components.search.t40431 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t40431 = (function (search_results,map__40430,search_component,owner,path_fn,view,portfolio_companies,constituencies,investor_companies,selection_value,comm,map__40427,selection_type,p__40395,map__40428,map__40429,meta40432){
this.search_results = search_results;
this.map__40430 = map__40430;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__40427 = map__40427;
this.selection_type = selection_type;
this.p__40395 = p__40395;
this.map__40428 = map__40428;
this.map__40429 = map__40429;
this.meta40432 = meta40432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t40431.cljs$lang$type = true;
clustermap.components.search.t40431.cljs$lang$ctorStr = "clustermap.components.search/t40431";
clustermap.components.search.t40431.cljs$lang$ctorPrWriter = ((function (map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t40431");
});})(map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t40431.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t40431.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,e.target.value], null));
});})(this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,e.target.value], null));
});})(this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1099,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3558__auto__ = cljs.core.constant$keyword$1096.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$1096.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1096,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1100,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$927,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$928,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function iter__40434(s__40435){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (){var s__40435__$1 = s__40435;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40435__$1);if(temp__4126__auto__)
{var s__40435__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40435__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40435__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40437 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40436 = (0);while(true){
if((i__40436 < size__4282__auto__))
{var vec__40440 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40436);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40440,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40440,(1),null);cljs.core.chunk_append(b__40437,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$969,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1015,self__.comm,cljs.core.constant$keyword$1004,self__.path_fn], null),cljs.core.constant$keyword$968,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$938,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$963,((function (i__40436,vec__40440,idx,con,c__4281__auto__,size__4282__auto__,b__40437,s__40435__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$904,cljs.core.constant$keyword$1009,cljs.core.array_seq([cljs.core.constant$keyword$906,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$907),cljs.core.constant$keyword$1101,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$907)))], 0));
});})(i__40436,vec__40440,idx,con,c__4281__auto__,size__4282__auto__,b__40437,s__40435__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$966,cljs.core.constant$keyword$1101], null)));
{
var G__40458 = (i__40436 + (1));
i__40436 = G__40458;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40437),iter__40434(cljs.core.chunk_rest(s__40435__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40437),null);
}
} else
{var vec__40441 = cljs.core.first(s__40435__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40441,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40441,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$969,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1015,self__.comm,cljs.core.constant$keyword$1004,self__.path_fn], null),cljs.core.constant$keyword$968,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$938,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$963,((function (vec__40441,idx,con,s__40435__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$904,cljs.core.constant$keyword$1009,cljs.core.array_seq([cljs.core.constant$keyword$906,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$907),cljs.core.constant$keyword$1101,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$907)))], 0));
});})(vec__40441,idx,con,s__40435__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$966,cljs.core.constant$keyword$1101], null)),iter__40434(cljs.core.rest(s__40435__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_cons);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$928,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function iter__40442(s__40443){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (){var s__40443__$1 = s__40443;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40443__$1);if(temp__4126__auto__)
{var s__40443__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40443__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40443__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40445 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40444 = (0);while(true){
if((i__40444 < size__4282__auto__))
{var vec__40448 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40444);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40448,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40448,(1),null);cljs.core.chunk_append(b__40445,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$969,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1015,self__.comm,cljs.core.constant$keyword$1004,self__.path_fn], null),cljs.core.constant$keyword$968,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$938,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$963,((function (i__40444,vec__40448,idx,pc,c__4281__auto__,size__4282__auto__,b__40445,s__40443__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$904,cljs.core.constant$keyword$1006,cljs.core.array_seq([cljs.core.constant$keyword$906,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1018),cljs.core.constant$keyword$1101,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1018)))], 0));
});})(i__40444,vec__40448,idx,pc,c__4281__auto__,size__4282__auto__,b__40445,s__40443__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$966,cljs.core.constant$keyword$1101], null)));
{
var G__40459 = (i__40444 + (1));
i__40444 = G__40459;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40445),iter__40442(cljs.core.chunk_rest(s__40443__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40445),null);
}
} else
{var vec__40449 = cljs.core.first(s__40443__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40449,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40449,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$969,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1015,self__.comm,cljs.core.constant$keyword$1004,self__.path_fn], null),cljs.core.constant$keyword$968,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$938,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$963,((function (vec__40449,idx,pc,s__40443__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$904,cljs.core.constant$keyword$1006,cljs.core.array_seq([cljs.core.constant$keyword$906,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1018),cljs.core.constant$keyword$1101,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1018)))], 0));
});})(vec__40449,idx,pc,s__40443__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$966,cljs.core.constant$keyword$1101], null)),iter__40442(cljs.core.rest(s__40443__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_pcs);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$928,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$915,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function iter__40450(s__40451){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (){var s__40451__$1 = s__40451;while(true){
var temp__4126__auto__ = cljs.core.seq(s__40451__$1);if(temp__4126__auto__)
{var s__40451__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__40451__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__40451__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__40453 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__40452 = (0);while(true){
if((i__40452 < size__4282__auto__))
{var vec__40456 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__40452);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40456,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40456,(1),null);cljs.core.chunk_append(b__40453,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$969,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1015,self__.comm,cljs.core.constant$keyword$1004,self__.path_fn], null),cljs.core.constant$keyword$968,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$938,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$963,((function (i__40452,vec__40456,idx,inv,c__4281__auto__,size__4282__auto__,b__40453,s__40451__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$904,cljs.core.constant$keyword$1007,cljs.core.array_seq([cljs.core.constant$keyword$906,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1021),cljs.core.constant$keyword$1101,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1021)))], 0));
});})(i__40452,vec__40456,idx,inv,c__4281__auto__,size__4282__auto__,b__40453,s__40451__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$966,cljs.core.constant$keyword$1101], null)));
{
var G__40460 = (i__40452 + (1));
i__40452 = G__40460;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__40453),iter__40450(cljs.core.chunk_rest(s__40451__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__40453),null);
}
} else
{var vec__40457 = cljs.core.first(s__40451__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40457,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40457,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$969,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1015,self__.comm,cljs.core.constant$keyword$1004,self__.path_fn], null),cljs.core.constant$keyword$968,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$938,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$963,((function (vec__40457,idx,inv,s__40451__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$904,cljs.core.constant$keyword$1007,cljs.core.array_seq([cljs.core.constant$keyword$906,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1021),cljs.core.constant$keyword$1101,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1021)))], 0));
});})(vec__40457,idx,inv,s__40451__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$966,cljs.core.constant$keyword$1101], null)),iter__40450(cljs.core.rest(s__40451__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t40431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (_40433){var self__ = this;
var _40433__$1 = this;return self__.meta40432;
});})(map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t40431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function (_40433,meta40432__$1){var self__ = this;
var _40433__$1 = this;return (new clustermap.components.search.t40431(self__.search_results,self__.map__40430,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.selection_value,self__.comm,self__.map__40427,self__.selection_type,self__.p__40395,self__.map__40428,self__.map__40429,meta40432__$1));
});})(map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t40431 = ((function (map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results){
return (function __GT_t40431(search_results__$1,map__40430__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,map__40427__$2,selection_type__$1,p__40395__$1,map__40428__$2,map__40429__$2,meta40432){return (new clustermap.components.search.t40431(search_results__$1,map__40430__$2,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,selection_value__$1,comm__$1,map__40427__$2,selection_type__$1,p__40395__$1,map__40428__$2,map__40429__$2,meta40432));
});})(map__40429,map__40429__$1,path_fn,comm,path_fn__$1,map__40430,map__40430__$1,investor_companies,portfolio_companies,constituencies,map__40427,map__40427__$1,map__40428,map__40428__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t40431(search_results,map__40430__$1,search_component,owner,path_fn__$1,view,portfolio_companies,constituencies,investor_companies,selection_value,comm,map__40427__$1,selection_type,p__40395,map__40428__$1,map__40429__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$971,shared,cljs.core.constant$keyword$974,document.getElementById(elem_id)], null));
});
