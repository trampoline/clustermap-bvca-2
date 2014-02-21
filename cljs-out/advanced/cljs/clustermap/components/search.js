// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('clustermap.om');
goog.require('clustermap.model');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.model');
goog.require('om.core');
goog.require('jayq.core');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('jayq.core');
clustermap.components.search.ESCAPE_KEY = 27;
clustermap.components.search.ENTER_KEY = 13;
clustermap.components.search.LEFT_ARROW = 37;
clustermap.components.search.UP_ARROW = 38;
clustermap.components.search.RIGHT_ARROW = 39;
clustermap.components.search.DOWN_ARROW = 40;
clustermap.components.search.search_result_link = (function search_result_link(p__23003,owner,p__23004){var map__23013 = p__23003;var map__23013__$1 = ((cljs.core.seq_QMARK_(map__23013))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23013):map__23013);var search_result = map__23013__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,cljs.core.constant$keyword$277);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,cljs.core.constant$keyword$287);var map__23014 = p__23004;var map__23014__$1 = ((cljs.core.seq_QMARK_(map__23014))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23014):map__23014);var opts = map__23014__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.constant$keyword$320);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.constant$keyword$313);if(typeof clustermap.components.search.t23015 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23015 = (function (opts,path_fn,name,map__23014,comm,search_result,map__23013,owner,p__23004,p__23003,type,search_result_link,meta23016){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.map__23014 = map__23014;
this.comm = comm;
this.search_result = search_result;
this.map__23013 = map__23013;
this.owner = owner;
this.p__23004 = p__23004;
this.p__23003 = p__23003;
this.type = type;
this.search_result_link = search_result_link;
this.meta23016 = meta23016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23015.cljs$lang$type = true;
clustermap.components.search.t23015.cljs$lang$ctorStr = "clustermap.components.search/t23015";
clustermap.components.search.t23015.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23015");
});
clustermap.components.search.t23015.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23015.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23018){var self__ = this;
var map__23019 = p__23018;var map__23019__$1 = ((cljs.core.seq_QMARK_(map__23019))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23019):map__23019);var state = map__23019__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23019__$1,cljs.core.constant$keyword$292);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__23020 = l;var G__23020__$1 = (((G__23020 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23020));var G__23020__$2 = (((G__23020__$1 == null))?null:G__23020__$1.parents(".search-component"));var G__23020__$3 = (((G__23020__$2 == null))?null:G__23020__$2.toggle());return G__23020__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t23015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23017){var self__ = this;
var _23017__$1 = this;return self__.meta23016;
});
clustermap.components.search.t23015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23017,meta23016__$1){var self__ = this;
var _23017__$1 = this;return (new clustermap.components.search.t23015(self__.opts,self__.path_fn,self__.name,self__.map__23014,self__.comm,self__.search_result,self__.map__23013,self__.owner,self__.p__23004,self__.p__23003,self__.type,self__.search_result_link,meta23016__$1));
});
clustermap.components.search.__GT_t23015 = (function __GT_t23015(opts__$1,path_fn__$1,name__$1,map__23014__$2,comm__$1,search_result__$1,map__23013__$2,owner__$1,p__23004__$1,p__23003__$1,type__$1,search_result_link__$1,meta23016){return (new clustermap.components.search.t23015(opts__$1,path_fn__$1,name__$1,map__23014__$2,comm__$1,search_result__$1,map__23013__$2,owner__$1,p__23004__$1,p__23003__$1,type__$1,search_result_link__$1,meta23016));
});
}
return (new clustermap.components.search.t23015(opts,path_fn,name,map__23014__$1,comm,search_result,map__23013__$1,owner,p__23004,p__23003,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__23021,n){var map__23023 = p__23021;var map__23023__$1 = ((cljs.core.seq_QMARK_(map__23023))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23023):map__23023);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,cljs.core.constant$keyword$323);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,cljs.core.constant$keyword$407);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,cljs.core.constant$keyword$340);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3406__auto__ = portfolio_companies;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3406__auto__ = investor_companies;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$312,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$311,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__23030 = cljs.core._EQ__EQ_;var expr__23031 = e.keyCode;if(cljs.core.truth_((pred__23030.cljs$core$IFn$_invoke$arity$2 ? pred__23030.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__23031) : pred__23030.call(null,clustermap.components.search.ESCAPE_KEY,expr__23031))))
{var G__23033 = om.core.get_node(owner,"search-component");var G__23033__$1 = (((G__23033 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23033));var G__23033__$2 = (((G__23033__$1 == null))?null:G__23033__$1.toggle());return G__23033__$2;
} else
{if(cljs.core.truth_((pred__23030.cljs$core$IFn$_invoke$arity$2 ? pred__23030.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__23031) : pred__23030.call(null,clustermap.components.search.ENTER_KEY,expr__23031))))
{var vec__23034 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$408);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23034,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23034,1,null);var G__23035_23036 = om.core.get_node(owner,"search-component");var G__23035_23037__$1 = (((G__23035_23036 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23035_23036));var G__23035_23038__$2 = (((G__23035_23037__$1 == null))?null:G__23035_23037__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__23030.cljs$core$IFn$_invoke$arity$2 ? pred__23030.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__23031) : pred__23030.call(null,clustermap.components.search.UP_ARROW,expr__23031))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$408,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$408);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__23030.cljs$core$IFn$_invoke$arity$2 ? pred__23030.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__23031) : pred__23030.call(null,clustermap.components.search.DOWN_ARROW,expr__23031))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$408,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$408);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
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
clustermap.components.search.search_component = (function search_component(p__23039,owner){var map__23071 = p__23039;var map__23071__$1 = ((cljs.core.seq_QMARK_(map__23071))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23071):map__23071);var map__23072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23071__$1,cljs.core.constant$keyword$319);var map__23072__$1 = ((cljs.core.seq_QMARK_(map__23072))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23072):map__23072);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23072__$1,cljs.core.constant$keyword$277);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23072__$1,cljs.core.constant$keyword$242);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23071__$1,cljs.core.constant$keyword$409);var map__23073 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23073__$1 = ((cljs.core.seq_QMARK_(map__23073))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23073):map__23073);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23073__$1,cljs.core.constant$keyword$320);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23073__$1,cljs.core.constant$keyword$313);var map__23074 = search_results;var map__23074__$1 = ((cljs.core.seq_QMARK_(map__23074))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23074):map__23074);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23074__$1,cljs.core.constant$keyword$323);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23074__$1,cljs.core.constant$keyword$407);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23074__$1,cljs.core.constant$keyword$340);if(typeof clustermap.components.search.t23075 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23075 = (function (investor_companies,map__23074,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,p__23039,map__23071,map__23072,map__23073,search_results,meta23076){
this.investor_companies = investor_companies;
this.map__23074 = map__23074;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.p__23039 = p__23039;
this.map__23071 = map__23071;
this.map__23072 = map__23072;
this.map__23073 = map__23073;
this.search_results = search_results;
this.meta23076 = meta23076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23075.cljs$lang$type = true;
clustermap.components.search.t23075.cljs$lang$ctorStr = "clustermap.components.search/t23075";
clustermap.components.search.t23075.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23075");
});
clustermap.components.search.t23075.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23075.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$410,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$410,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$410,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"\u00D7")),(cljs.core.truth_(self__.selection_value)?React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(null,null) : self__.path_fn.call(null,null,null))},React.DOM.button({"className": "btn-reset", "type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$410,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"Reset to UK wide"))):null)),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$408.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$408.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$408,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$411,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$411,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23078(s__23079){return (new cljs.core.LazySeq(null,(function (){var s__23079__$1 = s__23079;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23079__$1);if(temp__4092__auto__)
{var s__23079__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23079__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23079__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23081 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23080 = 0;while(true){
if((i__23080 < size__4116__auto__))
{var vec__23084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23080);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23084,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23084,1,null);cljs.core.chunk_append(b__23081,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (i__23080,vec__23084,idx,con,c__4115__auto__,size__4116__auto__,b__23081,s__23079__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$312,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398),cljs.core.constant$keyword$412,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398))].join('')], 0));
});})(i__23080,vec__23084,idx,con,c__4115__auto__,size__4116__auto__,b__23081,s__23079__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$412], null)));
{
var G__23102 = (i__23080 + 1);
i__23080 = G__23102;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23081),iter__23078(cljs.core.chunk_rest(s__23079__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23081),null);
}
} else
{var vec__23085 = cljs.core.first(s__23079__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23085,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23085,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (vec__23085,idx,con,s__23079__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$312,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398),cljs.core.constant$keyword$412,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398))].join('')], 0));
});})(vec__23085,idx,con,s__23079__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$412], null)),iter__23078(cljs.core.rest(s__23079__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$411,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23086(s__23087){return (new cljs.core.LazySeq(null,(function (){var s__23087__$1 = s__23087;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23087__$1);if(temp__4092__auto__)
{var s__23087__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23087__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23087__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23089 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23088 = 0;while(true){
if((i__23088 < size__4116__auto__))
{var vec__23092 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23088);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23092,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23092,1,null);cljs.core.chunk_append(b__23089,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (i__23088,vec__23092,idx,pc,c__4115__auto__,size__4116__auto__,b__23089,s__23087__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$310,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$396),cljs.core.constant$keyword$412,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$396))].join('')], 0));
});})(i__23088,vec__23092,idx,pc,c__4115__auto__,size__4116__auto__,b__23089,s__23087__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$412], null)));
{
var G__23103 = (i__23088 + 1);
i__23088 = G__23103;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23089),iter__23086(cljs.core.chunk_rest(s__23087__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23089),null);
}
} else
{var vec__23093 = cljs.core.first(s__23087__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23093,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23093,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (vec__23093,idx,pc,s__23087__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$310,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$396),cljs.core.constant$keyword$412,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$396))].join('')], 0));
});})(vec__23093,idx,pc,s__23087__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$412], null)),iter__23086(cljs.core.rest(s__23087__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$411,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__23094(s__23095){return (new cljs.core.LazySeq(null,(function (){var s__23095__$1 = s__23095;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23095__$1);if(temp__4092__auto__)
{var s__23095__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23095__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23095__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23097 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23096 = 0;while(true){
if((i__23096 < size__4116__auto__))
{var vec__23100 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23096);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23100,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23100,1,null);cljs.core.chunk_append(b__23097,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (i__23096,vec__23100,idx,inv,c__4115__auto__,size__4116__auto__,b__23097,s__23095__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$311,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397),cljs.core.constant$keyword$412,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397))].join('')], 0));
});})(i__23096,vec__23100,idx,inv,c__4115__auto__,size__4116__auto__,b__23097,s__23095__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$412], null)));
{
var G__23104 = (i__23096 + 1);
i__23096 = G__23104;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23097),iter__23094(cljs.core.chunk_rest(s__23095__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23097),null);
}
} else
{var vec__23101 = cljs.core.first(s__23095__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23101,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23101,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (vec__23101,idx,inv,s__23095__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$311,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397),cljs.core.constant$keyword$412,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397))].join('')], 0));
});})(vec__23101,idx,inv,s__23095__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$412], null)),iter__23094(cljs.core.rest(s__23095__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_invs);
})()):null)], null)], null);
})():null)));
});
clustermap.components.search.t23075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23077){var self__ = this;
var _23077__$1 = this;return self__.meta23076;
});
clustermap.components.search.t23075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23077,meta23076__$1){var self__ = this;
var _23077__$1 = this;return (new clustermap.components.search.t23075(self__.investor_companies,self__.map__23074,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.p__23039,self__.map__23071,self__.map__23072,self__.map__23073,self__.search_results,meta23076__$1));
});
clustermap.components.search.__GT_t23075 = (function __GT_t23075(investor_companies__$1,map__23074__$2,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__23039__$1,map__23071__$2,map__23072__$2,map__23073__$2,search_results__$1,meta23076){return (new clustermap.components.search.t23075(investor_companies__$1,map__23074__$2,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__23039__$1,map__23071__$2,map__23072__$2,map__23073__$2,search_results__$1,meta23076));
});
}
return (new clustermap.components.search.t23075(investor_companies,map__23074__$1,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,p__23039,map__23071__$1,map__23072__$1,map__23073__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
