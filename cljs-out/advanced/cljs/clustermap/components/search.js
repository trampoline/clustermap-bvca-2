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
clustermap.components.search.search_result_link = (function search_result_link(p__22955,owner,p__22956){var map__22965 = p__22955;var map__22965__$1 = ((cljs.core.seq_QMARK_(map__22965))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22965):map__22965);var search_result = map__22965__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22965__$1,cljs.core.constant$keyword$277);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22965__$1,cljs.core.constant$keyword$287);var map__22966 = p__22956;var map__22966__$1 = ((cljs.core.seq_QMARK_(map__22966))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22966):map__22966);var opts = map__22966__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22966__$1,cljs.core.constant$keyword$320);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22966__$1,cljs.core.constant$keyword$313);if(typeof clustermap.components.search.t22967 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22967 = (function (opts,path_fn,name,comm,p__22956,p__22955,search_result,map__22965,map__22966,owner,type,search_result_link,meta22968){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.p__22956 = p__22956;
this.p__22955 = p__22955;
this.search_result = search_result;
this.map__22965 = map__22965;
this.map__22966 = map__22966;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta22968 = meta22968;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22967.cljs$lang$type = true;
clustermap.components.search.t22967.cljs$lang$ctorStr = "clustermap.components.search/t22967";
clustermap.components.search.t22967.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22967");
});
clustermap.components.search.t22967.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22967.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__22970){var self__ = this;
var map__22971 = p__22970;var map__22971__$1 = ((cljs.core.seq_QMARK_(map__22971))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22971):map__22971);var state = map__22971__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22971__$1,cljs.core.constant$keyword$292);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22972 = l;var G__22972__$1 = (((G__22972 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22972));var G__22972__$2 = (((G__22972__$1 == null))?null:G__22972__$1.parents(".search-component"));var G__22972__$3 = (((G__22972__$2 == null))?null:G__22972__$2.toggle());return G__22972__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t22967.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22969){var self__ = this;
var _22969__$1 = this;return self__.meta22968;
});
clustermap.components.search.t22967.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22969,meta22968__$1){var self__ = this;
var _22969__$1 = this;return (new clustermap.components.search.t22967(self__.opts,self__.path_fn,self__.name,self__.comm,self__.p__22956,self__.p__22955,self__.search_result,self__.map__22965,self__.map__22966,self__.owner,self__.type,self__.search_result_link,meta22968__$1));
});
clustermap.components.search.__GT_t22967 = (function __GT_t22967(opts__$1,path_fn__$1,name__$1,comm__$1,p__22956__$1,p__22955__$1,search_result__$1,map__22965__$2,map__22966__$2,owner__$1,type__$1,search_result_link__$1,meta22968){return (new clustermap.components.search.t22967(opts__$1,path_fn__$1,name__$1,comm__$1,p__22956__$1,p__22955__$1,search_result__$1,map__22965__$2,map__22966__$2,owner__$1,type__$1,search_result_link__$1,meta22968));
});
}
return (new clustermap.components.search.t22967(opts,path_fn,name,comm,p__22956,p__22955,search_result,map__22965__$1,map__22966__$1,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22973,n){var map__22975 = p__22973;var map__22975__$1 = ((cljs.core.seq_QMARK_(map__22975))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22975):map__22975);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22975__$1,cljs.core.constant$keyword$323);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22975__$1,cljs.core.constant$keyword$408);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22975__$1,cljs.core.constant$keyword$340);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22982 = cljs.core._EQ__EQ_;var expr__22983 = e.keyCode;if(cljs.core.truth_((pred__22982.cljs$core$IFn$_invoke$arity$2 ? pred__22982.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22983) : pred__22982.call(null,clustermap.components.search.ESCAPE_KEY,expr__22983))))
{var G__22985 = om.core.get_node(owner,"search-component");var G__22985__$1 = (((G__22985 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22985));var G__22985__$2 = (((G__22985__$1 == null))?null:G__22985__$1.toggle());return G__22985__$2;
} else
{if(cljs.core.truth_((pred__22982.cljs$core$IFn$_invoke$arity$2 ? pred__22982.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22983) : pred__22982.call(null,clustermap.components.search.ENTER_KEY,expr__22983))))
{var vec__22986 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$409);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22986,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22986,1,null);var G__22987_22988 = om.core.get_node(owner,"search-component");var G__22987_22989__$1 = (((G__22987_22988 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22987_22988));var G__22987_22990__$2 = (((G__22987_22989__$1 == null))?null:G__22987_22989__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$293,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__22982.cljs$core$IFn$_invoke$arity$2 ? pred__22982.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22983) : pred__22982.call(null,clustermap.components.search.UP_ARROW,expr__22983))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$409,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$409);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22982.cljs$core$IFn$_invoke$arity$2 ? pred__22982.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22983) : pred__22982.call(null,clustermap.components.search.DOWN_ARROW,expr__22983))))
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
clustermap.components.search.search_component = (function search_component(p__22991,owner){var map__23023 = p__22991;var map__23023__$1 = ((cljs.core.seq_QMARK_(map__23023))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23023):map__23023);var map__23024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,cljs.core.constant$keyword$319);var map__23024__$1 = ((cljs.core.seq_QMARK_(map__23024))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23024):map__23024);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23024__$1,cljs.core.constant$keyword$277);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23024__$1,cljs.core.constant$keyword$242);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,cljs.core.constant$keyword$410);var map__23025 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23025__$1 = ((cljs.core.seq_QMARK_(map__23025))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23025):map__23025);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23025__$1,cljs.core.constant$keyword$320);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23025__$1,cljs.core.constant$keyword$313);var map__23026 = search_results;var map__23026__$1 = ((cljs.core.seq_QMARK_(map__23026))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23026):map__23026);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23026__$1,cljs.core.constant$keyword$323);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23026__$1,cljs.core.constant$keyword$408);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23026__$1,cljs.core.constant$keyword$340);if(typeof clustermap.components.search.t23027 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23027 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,map__23025,p__22991,map__23026,map__23023,map__23024,search_results,meta23028){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.map__23025 = map__23025;
this.p__22991 = p__22991;
this.map__23026 = map__23026;
this.map__23023 = map__23023;
this.map__23024 = map__23024;
this.search_results = search_results;
this.meta23028 = meta23028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23027.cljs$lang$type = true;
clustermap.components.search.t23027.cljs$lang$ctorStr = "clustermap.components.search/t23027";
clustermap.components.search.t23027.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23027");
});
clustermap.components.search.t23027.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23027.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$409.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$409,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$412,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$412,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23030(s__23031){return (new cljs.core.LazySeq(null,(function (){var s__23031__$1 = s__23031;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23031__$1);if(temp__4092__auto__)
{var s__23031__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23031__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23031__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23033 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23032 = 0;while(true){
if((i__23032 < size__4116__auto__))
{var vec__23036 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23032);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23036,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23036,1,null);cljs.core.chunk_append(b__23033,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (i__23032,vec__23036,idx,con,c__4115__auto__,size__4116__auto__,b__23033,s__23031__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$312,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$399),cljs.core.constant$keyword$413,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$399))].join('')], 0));
});})(i__23032,vec__23036,idx,con,c__4115__auto__,size__4116__auto__,b__23033,s__23031__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)));
{
var G__23054 = (i__23032 + 1);
i__23032 = G__23054;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23033),iter__23030(cljs.core.chunk_rest(s__23031__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23033),null);
}
} else
{var vec__23037 = cljs.core.first(s__23031__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23037,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23037,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (vec__23037,idx,con,s__23031__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$312,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$399),cljs.core.constant$keyword$413,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$399))].join('')], 0));
});})(vec__23037,idx,con,s__23031__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)),iter__23030(cljs.core.rest(s__23031__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$412,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23038(s__23039){return (new cljs.core.LazySeq(null,(function (){var s__23039__$1 = s__23039;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23039__$1);if(temp__4092__auto__)
{var s__23039__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23039__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23039__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23041 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23040 = 0;while(true){
if((i__23040 < size__4116__auto__))
{var vec__23044 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23040);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23044,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23044,1,null);cljs.core.chunk_append(b__23041,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (i__23040,vec__23044,idx,pc,c__4115__auto__,size__4116__auto__,b__23041,s__23039__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$310,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397),cljs.core.constant$keyword$413,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397))].join('')], 0));
});})(i__23040,vec__23044,idx,pc,c__4115__auto__,size__4116__auto__,b__23041,s__23039__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)));
{
var G__23055 = (i__23040 + 1);
i__23040 = G__23055;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23041),iter__23038(cljs.core.chunk_rest(s__23039__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23041),null);
}
} else
{var vec__23045 = cljs.core.first(s__23039__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23045,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23045,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (vec__23045,idx,pc,s__23039__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$310,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397),cljs.core.constant$keyword$413,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$397))].join('')], 0));
});})(vec__23045,idx,pc,s__23039__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)),iter__23038(cljs.core.rest(s__23039__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$412,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$267,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__23046(s__23047){return (new cljs.core.LazySeq(null,(function (){var s__23047__$1 = s__23047;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23047__$1);if(temp__4092__auto__)
{var s__23047__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23047__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23047__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23049 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23048 = 0;while(true){
if((i__23048 < size__4116__auto__))
{var vec__23052 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23048);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23052,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23052,1,null);cljs.core.chunk_append(b__23049,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (i__23048,vec__23052,idx,inv,c__4115__auto__,size__4116__auto__,b__23049,s__23047__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$311,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398),cljs.core.constant$keyword$413,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398))].join('')], 0));
});})(i__23048,vec__23052,idx,inv,c__4115__auto__,size__4116__auto__,b__23049,s__23047__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)));
{
var G__23056 = (i__23048 + 1);
i__23048 = G__23056;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23049),iter__23046(cljs.core.chunk_rest(s__23047__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23049),null);
}
} else
{var vec__23053 = cljs.core.first(s__23047__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23053,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23053,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$304,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$313,self__.comm,cljs.core.constant$keyword$320,self__.path_fn], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$292,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$305,((function (vec__23053,idx,inv,s__23047__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$277,cljs.core.constant$keyword$311,cljs.core.array_seq([cljs.core.constant$keyword$273,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398),cljs.core.constant$keyword$413,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$398))].join('')], 0));
});})(vec__23053,idx,inv,s__23047__$2,temp__4092__auto__))
,cljs.core.constant$keyword$303,cljs.core.constant$keyword$413], null)),iter__23046(cljs.core.rest(s__23047__$2)));
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
clustermap.components.search.t23027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23029){var self__ = this;
var _23029__$1 = this;return self__.meta23028;
});
clustermap.components.search.t23027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23029,meta23028__$1){var self__ = this;
var _23029__$1 = this;return (new clustermap.components.search.t23027(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.map__23025,self__.p__22991,self__.map__23026,self__.map__23023,self__.map__23024,self__.search_results,meta23028__$1));
});
clustermap.components.search.__GT_t23027 = (function __GT_t23027(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__23025__$2,p__22991__$1,map__23026__$2,map__23023__$2,map__23024__$2,search_results__$1,meta23028){return (new clustermap.components.search.t23027(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__23025__$2,p__22991__$1,map__23026__$2,map__23023__$2,map__23024__$2,search_results__$1,meta23028));
});
}
return (new clustermap.components.search.t23027(investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,map__23025__$1,p__22991,map__23026__$1,map__23023__$1,map__23024__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
