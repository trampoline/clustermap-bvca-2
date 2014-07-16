// Compiled by ClojureScript 0.0-2261
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
clustermap.components.search.search_result_link = (function search_result_link(p__37420,owner,p__37421){var map__37430 = p__37420;var map__37430__$1 = ((cljs.core.seq_QMARK_(map__37430))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37430):map__37430);var search_result = map__37430__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37430__$1,cljs.core.constant$keyword$797);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37430__$1,cljs.core.constant$keyword$827);var map__37431 = p__37421;var map__37431__$1 = ((cljs.core.seq_QMARK_(map__37431))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37431):map__37431);var opts = map__37431__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,cljs.core.constant$keyword$880);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37431__$1,cljs.core.constant$keyword$890);if(typeof clustermap.components.search.t37432 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t37432 = (function (p__37420,map__37431,map__37430,owner,path_fn,search_result_link,name,comm,search_result,type,p__37421,opts,meta37433){
this.p__37420 = p__37420;
this.map__37431 = map__37431;
this.map__37430 = map__37430;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__37421 = p__37421;
this.opts = opts;
this.meta37433 = meta37433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t37432.cljs$lang$type = true;
clustermap.components.search.t37432.cljs$lang$ctorStr = "clustermap.components.search/t37432";
clustermap.components.search.t37432.cljs$lang$ctorPrWriter = ((function (map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t37432");
});})(map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm))
;
clustermap.components.search.t37432.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t37432.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm){
return (function (this$,p__37435){var self__ = this;
var map__37436 = p__37435;var map__37436__$1 = ((cljs.core.seq_QMARK_(map__37436))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37436):map__37436);var state = map__37436__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37436__$1,cljs.core.constant$keyword$833);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__37436,map__37436__$1,state,selected,map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__37437 = l;var G__37437__$1 = (((G__37437 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__37437));var G__37437__$2 = (((G__37437__$1 == null))?null:G__37437__$1.parents(".search-component"));var G__37437__$3 = (((G__37437__$2 == null))?null:G__37437__$2.toggle());return G__37437__$3;
});})(path,this$__$1,map__37436,map__37436__$1,state,selected,map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm))
;
clustermap.components.search.t37432.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm){
return (function (_37434){var self__ = this;
var _37434__$1 = this;return self__.meta37433;
});})(map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm))
;
clustermap.components.search.t37432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm){
return (function (_37434,meta37433__$1){var self__ = this;
var _37434__$1 = this;return (new clustermap.components.search.t37432(self__.p__37420,self__.map__37431,self__.map__37430,self__.owner,self__.path_fn,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.p__37421,self__.opts,meta37433__$1));
});})(map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t37432 = ((function (map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm){
return (function __GT_t37432(p__37420__$1,map__37431__$2,map__37430__$2,owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__37421__$1,opts__$1,meta37433){return (new clustermap.components.search.t37432(p__37420__$1,map__37431__$2,map__37430__$2,owner__$1,path_fn__$1,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__37421__$1,opts__$1,meta37433));
});})(map__37430,map__37430__$1,search_result,type,name,map__37431,map__37431__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t37432(p__37420,map__37431__$1,map__37430__$1,owner,path_fn,search_result_link,name,comm,search_result,type,p__37421,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__37438,n){var map__37440 = p__37438;var map__37440__$1 = ((cljs.core.seq_QMARK_(map__37440))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37440):map__37440);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37440__$1,cljs.core.constant$keyword$884);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37440__$1,cljs.core.constant$keyword$969);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37440__$1,cljs.core.constant$keyword$951);var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$885,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$882,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$883,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__37447 = cljs.core._EQ__EQ_;var expr__37448 = e.keyCode;if(cljs.core.truth_((pred__37447.cljs$core$IFn$_invoke$arity$2 ? pred__37447.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__37448) : pred__37447.call(null,clustermap.components.search.ESCAPE_KEY,expr__37448))))
{var G__37450 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__37450__$1 = (((G__37450 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__37450));var G__37450__$2 = (((G__37450__$1 == null))?null:G__37450__$1.toggle());return G__37450__$2;
} else
{if(cljs.core.truth_((pred__37447.cljs$core$IFn$_invoke$arity$2 ? pred__37447.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__37448) : pred__37447.call(null,clustermap.components.search.ENTER_KEY,expr__37448))))
{var vec__37451 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$970);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37451,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37451,(1),null);var G__37452_37453 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__37452_37454__$1 = (((G__37452_37453 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__37452_37453));var G__37452_37455__$2 = (((G__37452_37454__$1 == null))?null:G__37452_37454__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$835,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__37447.cljs$core$IFn$_invoke$arity$2 ? pred__37447.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__37448) : pred__37447.call(null,clustermap.components.search.UP_ARROW,expr__37448))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$970,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$970);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__37447.cljs$core$IFn$_invoke$arity$2 ? pred__37447.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__37448) : pred__37447.call(null,clustermap.components.search.DOWN_ARROW,expr__37448))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$970,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$970);if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.search_component = (function search_component(p__37456,owner){var map__37488 = p__37456;var map__37488__$1 = ((cljs.core.seq_QMARK_(map__37488))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37488):map__37488);var map__37489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37488__$1,cljs.core.constant$keyword$944);var map__37489__$1 = ((cljs.core.seq_QMARK_(map__37489))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37489):map__37489);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489__$1,cljs.core.constant$keyword$797);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37489__$1,cljs.core.constant$keyword$828);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37488__$1,cljs.core.constant$keyword$971);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37488__$1,cljs.core.constant$keyword$972);var map__37490 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__37490__$1 = ((cljs.core.seq_QMARK_(map__37490))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37490):map__37490);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490__$1,cljs.core.constant$keyword$880);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37490__$1,cljs.core.constant$keyword$890);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__37491 = search_results;var map__37491__$1 = ((cljs.core.seq_QMARK_(map__37491))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37491):map__37491);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,cljs.core.constant$keyword$884);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,cljs.core.constant$keyword$969);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,cljs.core.constant$keyword$951);if(typeof clustermap.components.search.t37492 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t37492 = (function (p__37456,search_results,search_component,owner,map__37488,path_fn,view,portfolio_companies,constituencies,investor_companies,map__37489,selection_value,comm,selection_type,map__37491,map__37490,meta37493){
this.p__37456 = p__37456;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.map__37488 = map__37488;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__37489 = map__37489;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__37491 = map__37491;
this.map__37490 = map__37490;
this.meta37493 = meta37493;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t37492.cljs$lang$type = true;
clustermap.components.search.t37492.cljs$lang$ctorStr = "clustermap.components.search/t37492";
clustermap.components.search.t37492.cljs$lang$ctorPrWriter = ((function (map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t37492");
});})(map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t37492.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t37492.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$973,e.target.value], null));
});})(this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$973,e.target.value], null));
});})(this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$973,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3543__auto__ = cljs.core.constant$keyword$970.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$970.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$970,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$974,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$810,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$821,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$822,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$810,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function iter__37495(s__37496){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (){var s__37496__$1 = s__37496;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37496__$1);if(temp__4126__auto__)
{var s__37496__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37496__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37496__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37498 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37497 = (0);while(true){
if((i__37497 < size__4267__auto__))
{var vec__37501 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37497);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37501,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37501,(1),null);cljs.core.chunk_append(b__37498,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$890,self__.comm,cljs.core.constant$keyword$880,self__.path_fn], null),cljs.core.constant$keyword$872,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$867,((function (i__37497,vec__37501,idx,con,c__4266__auto__,size__4267__auto__,b__37498,s__37496__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$797,cljs.core.constant$keyword$885,cljs.core.array_seq([cljs.core.constant$keyword$799,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$800),cljs.core.constant$keyword$975,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$800)))], 0));
});})(i__37497,vec__37501,idx,con,c__4266__auto__,size__4267__auto__,b__37498,s__37496__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$870,cljs.core.constant$keyword$975], null)));
{
var G__37519 = (i__37497 + (1));
i__37497 = G__37519;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37498),iter__37495(cljs.core.chunk_rest(s__37496__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37498),null);
}
} else
{var vec__37502 = cljs.core.first(s__37496__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37502,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37502,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$890,self__.comm,cljs.core.constant$keyword$880,self__.path_fn], null),cljs.core.constant$keyword$872,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$867,((function (vec__37502,idx,con,s__37496__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$797,cljs.core.constant$keyword$885,cljs.core.array_seq([cljs.core.constant$keyword$799,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$800),cljs.core.constant$keyword$975,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$800)))], 0));
});})(vec__37502,idx,con,s__37496__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$870,cljs.core.constant$keyword$975], null)),iter__37495(cljs.core.rest(s__37496__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$822,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$810,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function iter__37503(s__37504){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (){var s__37504__$1 = s__37504;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37504__$1);if(temp__4126__auto__)
{var s__37504__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37504__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37504__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37506 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37505 = (0);while(true){
if((i__37505 < size__4267__auto__))
{var vec__37509 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37505);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37509,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37509,(1),null);cljs.core.chunk_append(b__37506,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$890,self__.comm,cljs.core.constant$keyword$880,self__.path_fn], null),cljs.core.constant$keyword$872,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$867,((function (i__37505,vec__37509,idx,pc,c__4266__auto__,size__4267__auto__,b__37506,s__37504__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$797,cljs.core.constant$keyword$882,cljs.core.array_seq([cljs.core.constant$keyword$799,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$893),cljs.core.constant$keyword$975,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$893)))], 0));
});})(i__37505,vec__37509,idx,pc,c__4266__auto__,size__4267__auto__,b__37506,s__37504__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$870,cljs.core.constant$keyword$975], null)));
{
var G__37520 = (i__37505 + (1));
i__37505 = G__37520;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37506),iter__37503(cljs.core.chunk_rest(s__37504__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37506),null);
}
} else
{var vec__37510 = cljs.core.first(s__37504__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37510,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37510,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$890,self__.comm,cljs.core.constant$keyword$880,self__.path_fn], null),cljs.core.constant$keyword$872,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$867,((function (vec__37510,idx,pc,s__37504__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$797,cljs.core.constant$keyword$882,cljs.core.array_seq([cljs.core.constant$keyword$799,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$893),cljs.core.constant$keyword$975,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$893)))], 0));
});})(vec__37510,idx,pc,s__37504__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$870,cljs.core.constant$keyword$975], null)),iter__37503(cljs.core.rest(s__37504__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$822,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$810,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function iter__37511(s__37512){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (){var s__37512__$1 = s__37512;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37512__$1);if(temp__4126__auto__)
{var s__37512__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37512__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37512__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37514 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37513 = (0);while(true){
if((i__37513 < size__4267__auto__))
{var vec__37517 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37513);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37517,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37517,(1),null);cljs.core.chunk_append(b__37514,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$890,self__.comm,cljs.core.constant$keyword$880,self__.path_fn], null),cljs.core.constant$keyword$872,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$867,((function (i__37513,vec__37517,idx,inv,c__4266__auto__,size__4267__auto__,b__37514,s__37512__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$797,cljs.core.constant$keyword$883,cljs.core.array_seq([cljs.core.constant$keyword$799,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$896),cljs.core.constant$keyword$975,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$896)))], 0));
});})(i__37513,vec__37517,idx,inv,c__4266__auto__,size__4267__auto__,b__37514,s__37512__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$870,cljs.core.constant$keyword$975], null)));
{
var G__37521 = (i__37513 + (1));
i__37513 = G__37521;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37514),iter__37511(cljs.core.chunk_rest(s__37512__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37514),null);
}
} else
{var vec__37518 = cljs.core.first(s__37512__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37518,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37518,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$873,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$890,self__.comm,cljs.core.constant$keyword$880,self__.path_fn], null),cljs.core.constant$keyword$872,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$833,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$867,((function (vec__37518,idx,inv,s__37512__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$797,cljs.core.constant$keyword$883,cljs.core.array_seq([cljs.core.constant$keyword$799,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$896),cljs.core.constant$keyword$975,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$896)))], 0));
});})(vec__37518,idx,inv,s__37512__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$870,cljs.core.constant$keyword$975], null)),iter__37511(cljs.core.rest(s__37512__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t37492.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (_37494){var self__ = this;
var _37494__$1 = this;return self__.meta37493;
});})(map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t37492.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function (_37494,meta37493__$1){var self__ = this;
var _37494__$1 = this;return (new clustermap.components.search.t37492(self__.p__37456,self__.search_results,self__.search_component,self__.owner,self__.map__37488,self__.path_fn,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.map__37489,self__.selection_value,self__.comm,self__.selection_type,self__.map__37491,self__.map__37490,meta37493__$1));
});})(map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t37492 = ((function (map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results){
return (function __GT_t37492(p__37456__$1,search_results__$1,search_component__$1,owner__$1,map__37488__$2,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__37489__$2,selection_value__$1,comm__$1,selection_type__$1,map__37491__$2,map__37490__$2,meta37493){return (new clustermap.components.search.t37492(p__37456__$1,search_results__$1,search_component__$1,owner__$1,map__37488__$2,path_fn__$2,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__37489__$2,selection_value__$1,comm__$1,selection_type__$1,map__37491__$2,map__37490__$2,meta37493));
});})(map__37490,map__37490__$1,path_fn,comm,path_fn__$1,map__37491,map__37491__$1,investor_companies,portfolio_companies,constituencies,map__37488,map__37488__$1,map__37489,map__37489__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t37492(p__37456,search_results,search_component,owner,map__37488__$1,path_fn__$1,view,portfolio_companies,constituencies,investor_companies,map__37489__$1,selection_value,comm,selection_type,map__37491__$1,map__37490__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$875,shared,cljs.core.constant$keyword$878,document.getElementById(elem_id)], null));
});
