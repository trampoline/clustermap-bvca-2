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
clustermap.components.search.search_result_link = (function search_result_link(p__22945,owner,p__22946){var map__22955 = p__22945;var map__22955__$1 = ((cljs.core.seq_QMARK_(map__22955))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22955):map__22955);var search_result = map__22955__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22955__$1,cljs.core.constant$keyword$269);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22955__$1,cljs.core.constant$keyword$279);var map__22956 = p__22946;var map__22956__$1 = ((cljs.core.seq_QMARK_(map__22956))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22956):map__22956);var opts = map__22956__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22956__$1,cljs.core.constant$keyword$309);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22956__$1,cljs.core.constant$keyword$305);if(typeof clustermap.components.search.t22957 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22957 = (function (opts,path_fn,name,comm,search_result,owner,p__22946,p__22945,map__22955,type,map__22956,search_result_link,meta22958){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.p__22946 = p__22946;
this.p__22945 = p__22945;
this.map__22955 = map__22955;
this.type = type;
this.map__22956 = map__22956;
this.search_result_link = search_result_link;
this.meta22958 = meta22958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22957.cljs$lang$type = true;
clustermap.components.search.t22957.cljs$lang$ctorStr = "clustermap.components.search/t22957";
clustermap.components.search.t22957.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22957");
});
clustermap.components.search.t22957.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22957.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__22960){var self__ = this;
var map__22961 = p__22960;var map__22961__$1 = ((cljs.core.seq_QMARK_(map__22961))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22961):map__22961);var state = map__22961__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22961__$1,cljs.core.constant$keyword$284);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22962 = l;var G__22962__$1 = (((G__22962 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22962));var G__22962__$2 = (((G__22962__$1 == null))?null:G__22962__$1.parents(".search-component"));var G__22962__$3 = (((G__22962__$2 == null))?null:G__22962__$2.toggle());return G__22962__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t22957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22959){var self__ = this;
var _22959__$1 = this;return self__.meta22958;
});
clustermap.components.search.t22957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22959,meta22958__$1){var self__ = this;
var _22959__$1 = this;return (new clustermap.components.search.t22957(self__.opts,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.p__22946,self__.p__22945,self__.map__22955,self__.type,self__.map__22956,self__.search_result_link,meta22958__$1));
});
clustermap.components.search.__GT_t22957 = (function __GT_t22957(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__22946__$1,p__22945__$1,map__22955__$2,type__$1,map__22956__$2,search_result_link__$1,meta22958){return (new clustermap.components.search.t22957(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__22946__$1,p__22945__$1,map__22955__$2,type__$1,map__22956__$2,search_result_link__$1,meta22958));
});
}
return (new clustermap.components.search.t22957(opts,path_fn,name,comm,search_result,owner,p__22946,p__22945,map__22955__$1,type,map__22956__$1,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22963,n){var map__22965 = p__22963;var map__22965__$1 = ((cljs.core.seq_QMARK_(map__22965))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22965):map__22965);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22965__$1,cljs.core.constant$keyword$312);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22965__$1,cljs.core.constant$keyword$394);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22965__$1,cljs.core.constant$keyword$329);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22972 = cljs.core._EQ__EQ_;var expr__22973 = e.keyCode;if(cljs.core.truth_((pred__22972.cljs$core$IFn$_invoke$arity$2 ? pred__22972.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22973) : pred__22972.call(null,clustermap.components.search.ESCAPE_KEY,expr__22973))))
{var G__22975 = om.core.get_node(owner,"search-component");var G__22975__$1 = (((G__22975 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22975));var G__22975__$2 = (((G__22975__$1 == null))?null:G__22975__$1.toggle());return G__22975__$2;
} else
{if(cljs.core.truth_((pred__22972.cljs$core$IFn$_invoke$arity$2 ? pred__22972.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22973) : pred__22972.call(null,clustermap.components.search.ENTER_KEY,expr__22973))))
{var vec__22976 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$395);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22976,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22976,1,null);var G__22977_22978 = om.core.get_node(owner,"search-component");var G__22977_22979__$1 = (((G__22977_22978 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22977_22978));var G__22977_22980__$2 = (((G__22977_22979__$1 == null))?null:G__22977_22979__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__22972.cljs$core$IFn$_invoke$arity$2 ? pred__22972.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22973) : pred__22972.call(null,clustermap.components.search.UP_ARROW,expr__22973))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$395,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$395);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22972.cljs$core$IFn$_invoke$arity$2 ? pred__22972.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22973) : pred__22972.call(null,clustermap.components.search.DOWN_ARROW,expr__22973))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$395,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$395);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(p__22981,owner){var map__23013 = p__22981;var map__23013__$1 = ((cljs.core.seq_QMARK_(map__23013))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23013):map__23013);var map__23014 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,cljs.core.constant$keyword$308);var map__23014__$1 = ((cljs.core.seq_QMARK_(map__23014))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23014):map__23014);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.constant$keyword$269);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23014__$1,cljs.core.constant$keyword$234);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23013__$1,cljs.core.constant$keyword$396);var map__23015 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23015__$1 = ((cljs.core.seq_QMARK_(map__23015))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23015):map__23015);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23015__$1,cljs.core.constant$keyword$309);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23015__$1,cljs.core.constant$keyword$305);var map__23016 = search_results;var map__23016__$1 = ((cljs.core.seq_QMARK_(map__23016))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23016):map__23016);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$312);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$394);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$329);if(typeof clustermap.components.search.t23017 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23017 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__23014,comm,map__23015,p__22981,map__23013,selection_type,owner,constituencies,search_results,map__23016,meta23018){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__23014 = map__23014;
this.comm = comm;
this.map__23015 = map__23015;
this.p__22981 = p__22981;
this.map__23013 = map__23013;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.map__23016 = map__23016;
this.meta23018 = meta23018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23017.cljs$lang$type = true;
clustermap.components.search.t23017.cljs$lang$ctorStr = "clustermap.components.search/t23017";
clustermap.components.search.t23017.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23017");
});
clustermap.components.search.t23017.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23017.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$397,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$397,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$397,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"\u00D7")),(cljs.core.truth_(self__.selection_value)?React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(null,null) : self__.path_fn.call(null,null,null))},React.DOM.button({"className": "btn-reset", "type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$397,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$395.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$395.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$395,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$398,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$398,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23020(s__23021){return (new cljs.core.LazySeq(null,(function (){var s__23021__$1 = s__23021;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23021__$1);if(temp__4092__auto__)
{var s__23021__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23021__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23021__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23023 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23022 = 0;while(true){
if((i__23022 < size__4116__auto__))
{var vec__23026 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23022);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23026,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23026,1,null);cljs.core.chunk_append(b__23023,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,self__.comm,cljs.core.constant$keyword$309,self__.path_fn], null),cljs.core.constant$keyword$292,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$297,((function (i__23022,vec__23026,idx,con,c__4115__auto__,size__4116__auto__,b__23023,s__23021__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$269,cljs.core.constant$keyword$304,cljs.core.array_seq([cljs.core.constant$keyword$265,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386),cljs.core.constant$keyword$399,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386))].join('')], 0));
});})(i__23022,vec__23026,idx,con,c__4115__auto__,size__4116__auto__,b__23023,s__23021__$2,temp__4092__auto__))
,cljs.core.constant$keyword$295,cljs.core.constant$keyword$399], null)));
{
var G__23044 = (i__23022 + 1);
i__23022 = G__23044;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23023),iter__23020(cljs.core.chunk_rest(s__23021__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23023),null);
}
} else
{var vec__23027 = cljs.core.first(s__23021__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23027,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23027,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,self__.comm,cljs.core.constant$keyword$309,self__.path_fn], null),cljs.core.constant$keyword$292,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$297,((function (vec__23027,idx,con,s__23021__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$269,cljs.core.constant$keyword$304,cljs.core.array_seq([cljs.core.constant$keyword$265,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386),cljs.core.constant$keyword$399,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386))].join('')], 0));
});})(vec__23027,idx,con,s__23021__$2,temp__4092__auto__))
,cljs.core.constant$keyword$295,cljs.core.constant$keyword$399], null)),iter__23020(cljs.core.rest(s__23021__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$398,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23028(s__23029){return (new cljs.core.LazySeq(null,(function (){var s__23029__$1 = s__23029;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23029__$1);if(temp__4092__auto__)
{var s__23029__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23029__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23029__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23031 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23030 = 0;while(true){
if((i__23030 < size__4116__auto__))
{var vec__23034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23030);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23034,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23034,1,null);cljs.core.chunk_append(b__23031,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,self__.comm,cljs.core.constant$keyword$309,self__.path_fn], null),cljs.core.constant$keyword$292,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$297,((function (i__23030,vec__23034,idx,pc,c__4115__auto__,size__4116__auto__,b__23031,s__23029__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$269,cljs.core.constant$keyword$302,cljs.core.array_seq([cljs.core.constant$keyword$265,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384),cljs.core.constant$keyword$399,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384))].join('')], 0));
});})(i__23030,vec__23034,idx,pc,c__4115__auto__,size__4116__auto__,b__23031,s__23029__$2,temp__4092__auto__))
,cljs.core.constant$keyword$295,cljs.core.constant$keyword$399], null)));
{
var G__23045 = (i__23030 + 1);
i__23030 = G__23045;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23031),iter__23028(cljs.core.chunk_rest(s__23029__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23031),null);
}
} else
{var vec__23035 = cljs.core.first(s__23029__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23035,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23035,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,self__.comm,cljs.core.constant$keyword$309,self__.path_fn], null),cljs.core.constant$keyword$292,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$297,((function (vec__23035,idx,pc,s__23029__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$269,cljs.core.constant$keyword$302,cljs.core.array_seq([cljs.core.constant$keyword$265,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384),cljs.core.constant$keyword$399,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384))].join('')], 0));
});})(vec__23035,idx,pc,s__23029__$2,temp__4092__auto__))
,cljs.core.constant$keyword$295,cljs.core.constant$keyword$399], null)),iter__23028(cljs.core.rest(s__23029__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$398,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$259,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__23036(s__23037){return (new cljs.core.LazySeq(null,(function (){var s__23037__$1 = s__23037;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23037__$1);if(temp__4092__auto__)
{var s__23037__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23037__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23037__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23039 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23038 = 0;while(true){
if((i__23038 < size__4116__auto__))
{var vec__23042 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23038);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23042,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23042,1,null);cljs.core.chunk_append(b__23039,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,self__.comm,cljs.core.constant$keyword$309,self__.path_fn], null),cljs.core.constant$keyword$292,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$297,((function (i__23038,vec__23042,idx,inv,c__4115__auto__,size__4116__auto__,b__23039,s__23037__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$269,cljs.core.constant$keyword$303,cljs.core.array_seq([cljs.core.constant$keyword$265,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$385),cljs.core.constant$keyword$399,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$385))].join('')], 0));
});})(i__23038,vec__23042,idx,inv,c__4115__auto__,size__4116__auto__,b__23039,s__23037__$2,temp__4092__auto__))
,cljs.core.constant$keyword$295,cljs.core.constant$keyword$399], null)));
{
var G__23046 = (i__23038 + 1);
i__23038 = G__23046;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23039),iter__23036(cljs.core.chunk_rest(s__23037__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23039),null);
}
} else
{var vec__23043 = cljs.core.first(s__23037__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23043,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23043,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$296,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,self__.comm,cljs.core.constant$keyword$309,self__.path_fn], null),cljs.core.constant$keyword$292,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$284,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$297,((function (vec__23043,idx,inv,s__23037__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$269,cljs.core.constant$keyword$303,cljs.core.array_seq([cljs.core.constant$keyword$265,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$385),cljs.core.constant$keyword$399,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$385))].join('')], 0));
});})(vec__23043,idx,inv,s__23037__$2,temp__4092__auto__))
,cljs.core.constant$keyword$295,cljs.core.constant$keyword$399], null)),iter__23036(cljs.core.rest(s__23037__$2)));
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
clustermap.components.search.t23017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23019){var self__ = this;
var _23019__$1 = this;return self__.meta23018;
});
clustermap.components.search.t23017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23019,meta23018__$1){var self__ = this;
var _23019__$1 = this;return (new clustermap.components.search.t23017(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__23014,self__.comm,self__.map__23015,self__.p__22981,self__.map__23013,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,self__.map__23016,meta23018__$1));
});
clustermap.components.search.__GT_t23017 = (function __GT_t23017(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__23014__$2,comm__$1,map__23015__$2,p__22981__$1,map__23013__$2,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,map__23016__$2,meta23018){return (new clustermap.components.search.t23017(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__23014__$2,comm__$1,map__23015__$2,p__22981__$1,map__23013__$2,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,map__23016__$2,meta23018));
});
}
return (new clustermap.components.search.t23017(investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__23014__$1,comm,map__23015__$1,p__22981,map__23013__$1,selection_type,owner,constituencies,search_results,map__23016__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
