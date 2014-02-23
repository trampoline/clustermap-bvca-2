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
clustermap.components.search.search_result_link = (function search_result_link(p__22995,owner,p__22996){var map__23005 = p__22995;var map__23005__$1 = ((cljs.core.seq_QMARK_(map__23005))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23005):map__23005);var search_result = map__23005__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23005__$1,cljs.core.constant$keyword$277);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23005__$1,cljs.core.constant$keyword$287);var map__23006 = p__22996;var map__23006__$1 = ((cljs.core.seq_QMARK_(map__23006))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23006):map__23006);var opts = map__23006__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,cljs.core.constant$keyword$320);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23006__$1,cljs.core.constant$keyword$313);if(typeof clustermap.components.search.t23007 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23007 = (function (opts,path_fn,map__23006,map__23005,name,comm,search_result,owner,p__22996,type,search_result_link,p__22995,meta23008){
this.opts = opts;
this.path_fn = path_fn;
this.map__23006 = map__23006;
this.map__23005 = map__23005;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.p__22996 = p__22996;
this.type = type;
this.search_result_link = search_result_link;
this.p__22995 = p__22995;
this.meta23008 = meta23008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23007.cljs$lang$type = true;
clustermap.components.search.t23007.cljs$lang$ctorStr = "clustermap.components.search/t23007";
clustermap.components.search.t23007.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23007");
});
clustermap.components.search.t23007.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23007.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23010){var self__ = this;
var map__23011 = p__23010;var map__23011__$1 = ((cljs.core.seq_QMARK_(map__23011))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23011):map__23011);var state = map__23011__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23011__$1,cljs.core.constant$keyword$292);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__23012 = l;var G__23012__$1 = (((G__23012 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23012));var G__23012__$2 = (((G__23012__$1 == null))?null:G__23012__$1.parents(".search-component"));var G__23012__$3 = (((G__23012__$2 == null))?null:G__23012__$2.toggle());return G__23012__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t23007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23009){var self__ = this;
var _23009__$1 = this;return self__.meta23008;
});
clustermap.components.search.t23007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23009,meta23008__$1){var self__ = this;
var _23009__$1 = this;return (new clustermap.components.search.t23007(self__.opts,self__.path_fn,self__.map__23006,self__.map__23005,self__.name,self__.comm,self__.search_result,self__.owner,self__.p__22996,self__.type,self__.search_result_link,self__.p__22995,meta23008__$1));
});
clustermap.components.search.__GT_t23007 = (function __GT_t23007(opts__$1,path_fn__$1,map__23006__$2,map__23005__$2,name__$1,comm__$1,search_result__$1,owner__$1,p__22996__$1,type__$1,search_result_link__$1,p__22995__$1,meta23008){return (new clustermap.components.search.t23007(opts__$1,path_fn__$1,map__23006__$2,map__23005__$2,name__$1,comm__$1,search_result__$1,owner__$1,p__22996__$1,type__$1,search_result_link__$1,p__22995__$1,meta23008));
});
}
return (new clustermap.components.search.t23007(opts,path_fn,map__23006__$1,map__23005__$1,name,comm,search_result,owner,p__22996,type,search_result_link,p__22995,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__23013,n){var map__23015 = p__23013;var map__23015__$1 = ((cljs.core.seq_QMARK_(map__23015))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23015):map__23015);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23015__$1,cljs.core.constant$keyword$323);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23015__$1,cljs.core.constant$keyword$408);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23015__$1,cljs.core.constant$keyword$340);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__23022 = cljs.core._EQ__EQ_;var expr__23023 = e.keyCode;if(cljs.core.truth_((pred__23022.cljs$core$IFn$_invoke$arity$2 ? pred__23022.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__23023) : pred__23022.call(null,clustermap.components.search.ESCAPE_KEY,expr__23023))))
{var G__23025 = om.core.get_node(owner,"search-component");var G__23025__$1 = (((G__23025 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23025));var G__23025__$2 = (((G__23025__$1 == null))?null:G__23025__$1.toggle());return G__23025__$2;
} else
{if(cljs.core.truth_((pred__23022.cljs$core$IFn$_invoke$arity$2 ? pred__23022.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__23023) : pred__23022.call(null,clustermap.components.search.ENTER_KEY,expr__23023))))
{var vec__23026 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$409);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23026,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23026,1,null);var G__23027_23028 = om.core.get_node(owner,"search-component");var G__23027_23029__$1 = (((G__23027_23028 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23027_23028));var G__23027_23030__$2 = (((G__23027_23029__$1 == null))?null:G__23027_23029__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__23022.cljs$core$IFn$_invoke$arity$2 ? pred__23022.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__23023) : pred__23022.call(null,clustermap.components.search.UP_ARROW,expr__23023))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$409,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$409);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__23022.cljs$core$IFn$_invoke$arity$2 ? pred__23022.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__23023) : pred__23022.call(null,clustermap.components.search.DOWN_ARROW,expr__23023))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$409,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$409);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(p__23031,owner){var map__23063 = p__23031;var map__23063__$1 = ((cljs.core.seq_QMARK_(map__23063))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23063):map__23063);var map__23064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23063__$1,cljs.core.constant$keyword$319);var map__23064__$1 = ((cljs.core.seq_QMARK_(map__23064))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23064):map__23064);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23064__$1,cljs.core.constant$keyword$277);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23064__$1,cljs.core.constant$keyword$242);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23063__$1,cljs.core.constant$keyword$410);var map__23065 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23065__$1 = ((cljs.core.seq_QMARK_(map__23065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23065):map__23065);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23065__$1,cljs.core.constant$keyword$320);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23065__$1,cljs.core.constant$keyword$313);var map__23066 = search_results;var map__23066__$1 = ((cljs.core.seq_QMARK_(map__23066))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23066):map__23066);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23066__$1,cljs.core.constant$keyword$323);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23066__$1,cljs.core.constant$keyword$408);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23066__$1,cljs.core.constant$keyword$340);if(typeof clustermap.components.search.t23067 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23067 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__23031,comm,selection_type,owner,constituencies,map__23064,search_results,map__23063,map__23066,map__23065,meta23068){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.p__23031 = p__23031;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.map__23064 = map__23064;
this.search_results = search_results;
this.map__23063 = map__23063;
this.map__23066 = map__23066;
this.map__23065 = map__23065;
this.meta23068 = meta23068;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23067.cljs$lang$type = true;
clustermap.components.search.t23067.cljs$lang$ctorStr = "clustermap.components.search/t23067";
clustermap.components.search.t23067.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23067");
});
clustermap.components.search.t23067.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23067.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$411,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$411,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$411,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"\u00D7")),(cljs.core.truth_(self__.selection_value)?React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(null,null) : self__.path_fn.call(null,null,null))},React.DOM.button({"className": "btn-reset", "type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$411,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$409,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$412,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$412,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23070(s__23071){return (new cljs.core.LazySeq(null,(function (){var s__23071__$1 = s__23071;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23071__$1);if(temp__4092__auto__)
{var s__23071__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23071__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23071__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23073 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23072 = 0;while(true){
if((i__23072 < size__4116__auto__))
{var vec__23076 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23072);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23076,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23076,1,null);cljs.core.chunk_append(b__23073,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (i__23072,vec__23076,idx,con,c__4115__auto__,size__4116__auto__,b__23073,s__23071__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$312,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$399),cljs.core.constant$keyword$413,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$399))].join('')], 0));
});})(i__23072,vec__23076,idx,con,c__4115__auto__,size__4116__auto__,b__23073,s__23071__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)));
{
var G__23094 = (i__23072 + 1);
i__23072 = G__23094;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23073),iter__23070(cljs.core.chunk_rest(s__23071__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23073),null);
}
} else
{var vec__23077 = cljs.core.first(s__23071__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23077,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23077,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (vec__23077,idx,con,s__23071__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$312,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$399),cljs.core.constant$keyword$413,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$399))].join('')], 0));
});})(vec__23077,idx,con,s__23071__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)),iter__23070(cljs.core.rest(s__23071__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$412,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23078(s__23079){return (new cljs.core.LazySeq(null,(function (){var s__23079__$1 = s__23079;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23079__$1);if(temp__4092__auto__)
{var s__23079__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23079__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23079__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23081 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23080 = 0;while(true){
if((i__23080 < size__4116__auto__))
{var vec__23084 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23080);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23084,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23084,1,null);cljs.core.chunk_append(b__23081,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (i__23080,vec__23084,idx,pc,c__4115__auto__,size__4116__auto__,b__23081,s__23079__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$310,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397),cljs.core.constant$keyword$413,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397))].join('')], 0));
});})(i__23080,vec__23084,idx,pc,c__4115__auto__,size__4116__auto__,b__23081,s__23079__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)));
{
var G__23095 = (i__23080 + 1);
i__23080 = G__23095;
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
{var vec__23085 = cljs.core.first(s__23079__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23085,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23085,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (vec__23085,idx,pc,s__23079__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$310,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397),cljs.core.constant$keyword$413,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397))].join('')], 0));
});})(vec__23085,idx,pc,s__23079__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)),iter__23078(cljs.core.rest(s__23079__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$412,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__23086(s__23087){return (new cljs.core.LazySeq(null,(function (){var s__23087__$1 = s__23087;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23087__$1);if(temp__4092__auto__)
{var s__23087__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23087__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23087__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23089 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23088 = 0;while(true){
if((i__23088 < size__4116__auto__))
{var vec__23092 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23088);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23092,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23092,1,null);cljs.core.chunk_append(b__23089,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (i__23088,vec__23092,idx,inv,c__4115__auto__,size__4116__auto__,b__23089,s__23087__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$311,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398),cljs.core.constant$keyword$413,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398))].join('')], 0));
});})(i__23088,vec__23092,idx,inv,c__4115__auto__,size__4116__auto__,b__23089,s__23087__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)));
{
var G__23096 = (i__23088 + 1);
i__23088 = G__23096;
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
{var vec__23093 = cljs.core.first(s__23087__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23093,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23093,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (vec__23093,idx,inv,s__23087__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$311,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398),cljs.core.constant$keyword$413,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398))].join('')], 0));
});})(vec__23093,idx,inv,s__23087__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)),iter__23086(cljs.core.rest(s__23087__$2)));
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
clustermap.components.search.t23067.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23069){var self__ = this;
var _23069__$1 = this;return self__.meta23068;
});
clustermap.components.search.t23067.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23069,meta23068__$1){var self__ = this;
var _23069__$1 = this;return (new clustermap.components.search.t23067(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.p__23031,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.map__23064,self__.search_results,self__.map__23063,self__.map__23066,self__.map__23065,meta23068__$1));
});
clustermap.components.search.__GT_t23067 = (function __GT_t23067(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__23031__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__23064__$2,search_results__$1,map__23063__$2,map__23066__$2,map__23065__$2,meta23068){return (new clustermap.components.search.t23067(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__23031__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__23064__$2,search_results__$1,map__23063__$2,map__23066__$2,map__23065__$2,meta23068));
});
}
return (new clustermap.components.search.t23067(investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__23031,comm,selection_type,owner,constituencies,map__23064__$1,search_results,map__23063__$1,map__23066__$1,map__23065__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
