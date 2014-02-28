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
clustermap.components.search.search_result_link = (function search_result_link(p__22971,owner,p__22972){var map__22981 = p__22971;var map__22981__$1 = ((cljs.core.seq_QMARK_(map__22981))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22981):map__22981);var search_result = map__22981__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,cljs.core.constant$keyword$286);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22981__$1,cljs.core.constant$keyword$296);var map__22982 = p__22972;var map__22982__$1 = ((cljs.core.seq_QMARK_(map__22982))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22982):map__22982);var opts = map__22982__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22982__$1,cljs.core.constant$keyword$329);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22982__$1,cljs.core.constant$keyword$322);if(typeof clustermap.components.search.t22983 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22983 = (function (map__22981,map__22982,opts,path_fn,p__22971,p__22972,name,comm,search_result,owner,type,search_result_link,meta22984){
this.map__22981 = map__22981;
this.map__22982 = map__22982;
this.opts = opts;
this.path_fn = path_fn;
this.p__22971 = p__22971;
this.p__22972 = p__22972;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta22984 = meta22984;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22983.cljs$lang$type = true;
clustermap.components.search.t22983.cljs$lang$ctorStr = "clustermap.components.search/t22983";
clustermap.components.search.t22983.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22983");
});
clustermap.components.search.t22983.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22983.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__22986){var self__ = this;
var map__22987 = p__22986;var map__22987__$1 = ((cljs.core.seq_QMARK_(map__22987))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22987):map__22987);var state = map__22987__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22987__$1,cljs.core.constant$keyword$301);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22988 = l;var G__22988__$1 = (((G__22988 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22988));var G__22988__$2 = (((G__22988__$1 == null))?null:G__22988__$1.parents(".search-component"));var G__22988__$3 = (((G__22988__$2 == null))?null:G__22988__$2.toggle());return G__22988__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t22983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22985){var self__ = this;
var _22985__$1 = this;return self__.meta22984;
});
clustermap.components.search.t22983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22985,meta22984__$1){var self__ = this;
var _22985__$1 = this;return (new clustermap.components.search.t22983(self__.map__22981,self__.map__22982,self__.opts,self__.path_fn,self__.p__22971,self__.p__22972,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta22984__$1));
});
clustermap.components.search.__GT_t22983 = (function __GT_t22983(map__22981__$2,map__22982__$2,opts__$1,path_fn__$1,p__22971__$1,p__22972__$1,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta22984){return (new clustermap.components.search.t22983(map__22981__$2,map__22982__$2,opts__$1,path_fn__$1,p__22971__$1,p__22972__$1,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta22984));
});
}
return (new clustermap.components.search.t22983(map__22981__$1,map__22982__$1,opts,path_fn,p__22971,p__22972,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22989,n){var map__22991 = p__22989;var map__22991__$1 = ((cljs.core.seq_QMARK_(map__22991))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22991):map__22991);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,cljs.core.constant$keyword$364);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,cljs.core.constant$keyword$422);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22991__$1,cljs.core.constant$keyword$354);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$321,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$319,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$320,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22998 = cljs.core._EQ__EQ_;var expr__22999 = e.keyCode;if(cljs.core.truth_((pred__22998.cljs$core$IFn$_invoke$arity$2 ? pred__22998.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22999) : pred__22998.call(null,clustermap.components.search.ESCAPE_KEY,expr__22999))))
{var G__23001 = om.core.get_node(owner,"search-component");var G__23001__$1 = (((G__23001 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23001));var G__23001__$2 = (((G__23001__$1 == null))?null:G__23001__$1.toggle());return G__23001__$2;
} else
{if(cljs.core.truth_((pred__22998.cljs$core$IFn$_invoke$arity$2 ? pred__22998.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22999) : pred__22998.call(null,clustermap.components.search.ENTER_KEY,expr__22999))))
{var vec__23002 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$423);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23002,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23002,1,null);var G__23003_23004 = om.core.get_node(owner,"search-component");var G__23003_23005__$1 = (((G__23003_23004 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23003_23004));var G__23003_23006__$2 = (((G__23003_23005__$1 == null))?null:G__23003_23005__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$302,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__22998.cljs$core$IFn$_invoke$arity$2 ? pred__22998.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22999) : pred__22998.call(null,clustermap.components.search.UP_ARROW,expr__22999))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$423,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$423);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22998.cljs$core$IFn$_invoke$arity$2 ? pred__22998.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22999) : pred__22998.call(null,clustermap.components.search.DOWN_ARROW,expr__22999))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$423,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$423);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(p__23007,owner){var map__23039 = p__23007;var map__23039__$1 = ((cljs.core.seq_QMARK_(map__23039))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23039):map__23039);var map__23040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23039__$1,cljs.core.constant$keyword$328);var map__23040__$1 = ((cljs.core.seq_QMARK_(map__23040))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23040):map__23040);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23040__$1,cljs.core.constant$keyword$286);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23040__$1,cljs.core.constant$keyword$249);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23039__$1,cljs.core.constant$keyword$424);var map__23041 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23041__$1 = ((cljs.core.seq_QMARK_(map__23041))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23041):map__23041);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23041__$1,cljs.core.constant$keyword$329);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23041__$1,cljs.core.constant$keyword$322);var map__23042 = search_results;var map__23042__$1 = ((cljs.core.seq_QMARK_(map__23042))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23042):map__23042);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23042__$1,cljs.core.constant$keyword$364);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23042__$1,cljs.core.constant$keyword$422);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23042__$1,cljs.core.constant$keyword$354);if(typeof clustermap.components.search.t23043 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23043 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__23042,map__23041,map__23039,comm,map__23040,selection_type,owner,constituencies,p__23007,search_results,meta23044){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__23042 = map__23042;
this.map__23041 = map__23041;
this.map__23039 = map__23039;
this.comm = comm;
this.map__23040 = map__23040;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.p__23007 = p__23007;
this.search_results = search_results;
this.meta23044 = meta23044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23043.cljs$lang$type = true;
clustermap.components.search.t23043.cljs$lang$ctorStr = "clustermap.components.search/t23043";
clustermap.components.search.t23043.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23043");
});
clustermap.components.search.t23043.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23043.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$425,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$425,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$425,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"\u00D7")),(cljs.core.truth_(self__.selection_value)?React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(null,null) : self__.path_fn.call(null,null,null))},React.DOM.button({"className": "btn-reset", "type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$425,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$423.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$423.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$423,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$426,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$290,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$426,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23046(s__23047){return (new cljs.core.LazySeq(null,(function (){var s__23047__$1 = s__23047;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23047__$1);if(temp__4092__auto__)
{var s__23047__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23047__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23047__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23049 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23048 = 0;while(true){
if((i__23048 < size__4116__auto__))
{var vec__23052 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23048);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23052,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23052,1,null);cljs.core.chunk_append(b__23049,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$322,self__.comm,cljs.core.constant$keyword$329,self__.path_fn], null),cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$314,((function (i__23048,vec__23052,idx,con,c__4115__auto__,size__4116__auto__,b__23049,s__23047__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$286,cljs.core.constant$keyword$321,cljs.core.array_seq([cljs.core.constant$keyword$282,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$337),cljs.core.constant$keyword$427,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$337))].join('')], 0));
});})(i__23048,vec__23052,idx,con,c__4115__auto__,size__4116__auto__,b__23049,s__23047__$2,temp__4092__auto__))
,cljs.core.constant$keyword$312,cljs.core.constant$keyword$427], null)));
{
var G__23070 = (i__23048 + 1);
i__23048 = G__23070;
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
{var vec__23053 = cljs.core.first(s__23047__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23053,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23053,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$322,self__.comm,cljs.core.constant$keyword$329,self__.path_fn], null),cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$314,((function (vec__23053,idx,con,s__23047__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$286,cljs.core.constant$keyword$321,cljs.core.array_seq([cljs.core.constant$keyword$282,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$337),cljs.core.constant$keyword$427,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$337))].join('')], 0));
});})(vec__23053,idx,con,s__23047__$2,temp__4092__auto__))
,cljs.core.constant$keyword$312,cljs.core.constant$keyword$427], null)),iter__23046(cljs.core.rest(s__23047__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$426,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23054(s__23055){return (new cljs.core.LazySeq(null,(function (){var s__23055__$1 = s__23055;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23055__$1);if(temp__4092__auto__)
{var s__23055__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23055__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23055__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23057 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23056 = 0;while(true){
if((i__23056 < size__4116__auto__))
{var vec__23060 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23056);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23060,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23060,1,null);cljs.core.chunk_append(b__23057,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$322,self__.comm,cljs.core.constant$keyword$329,self__.path_fn], null),cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$314,((function (i__23056,vec__23060,idx,pc,c__4115__auto__,size__4116__auto__,b__23057,s__23055__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$286,cljs.core.constant$keyword$319,cljs.core.array_seq([cljs.core.constant$keyword$282,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$331),cljs.core.constant$keyword$427,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$331))].join('')], 0));
});})(i__23056,vec__23060,idx,pc,c__4115__auto__,size__4116__auto__,b__23057,s__23055__$2,temp__4092__auto__))
,cljs.core.constant$keyword$312,cljs.core.constant$keyword$427], null)));
{
var G__23071 = (i__23056 + 1);
i__23056 = G__23071;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23057),iter__23054(cljs.core.chunk_rest(s__23055__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23057),null);
}
} else
{var vec__23061 = cljs.core.first(s__23055__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23061,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23061,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$322,self__.comm,cljs.core.constant$keyword$329,self__.path_fn], null),cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$314,((function (vec__23061,idx,pc,s__23055__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$286,cljs.core.constant$keyword$319,cljs.core.array_seq([cljs.core.constant$keyword$282,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$331),cljs.core.constant$keyword$427,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$331))].join('')], 0));
});})(vec__23061,idx,pc,s__23055__$2,temp__4092__auto__))
,cljs.core.constant$keyword$312,cljs.core.constant$keyword$427], null)),iter__23054(cljs.core.rest(s__23055__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$426,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$276,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__23062(s__23063){return (new cljs.core.LazySeq(null,(function (){var s__23063__$1 = s__23063;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23063__$1);if(temp__4092__auto__)
{var s__23063__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23063__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23063__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23065 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23064 = 0;while(true){
if((i__23064 < size__4116__auto__))
{var vec__23068 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23064);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23068,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23068,1,null);cljs.core.chunk_append(b__23065,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$322,self__.comm,cljs.core.constant$keyword$329,self__.path_fn], null),cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$314,((function (i__23064,vec__23068,idx,inv,c__4115__auto__,size__4116__auto__,b__23065,s__23063__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$286,cljs.core.constant$keyword$320,cljs.core.array_seq([cljs.core.constant$keyword$282,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$335),cljs.core.constant$keyword$427,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$335))].join('')], 0));
});})(i__23064,vec__23068,idx,inv,c__4115__auto__,size__4116__auto__,b__23065,s__23063__$2,temp__4092__auto__))
,cljs.core.constant$keyword$312,cljs.core.constant$keyword$427], null)));
{
var G__23072 = (i__23064 + 1);
i__23064 = G__23072;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23065),iter__23062(cljs.core.chunk_rest(s__23063__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23065),null);
}
} else
{var vec__23069 = cljs.core.first(s__23063__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23069,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23069,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$313,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$322,self__.comm,cljs.core.constant$keyword$329,self__.path_fn], null),cljs.core.constant$keyword$309,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$301,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$314,((function (vec__23069,idx,inv,s__23063__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$286,cljs.core.constant$keyword$320,cljs.core.array_seq([cljs.core.constant$keyword$282,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$335),cljs.core.constant$keyword$427,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$335))].join('')], 0));
});})(vec__23069,idx,inv,s__23063__$2,temp__4092__auto__))
,cljs.core.constant$keyword$312,cljs.core.constant$keyword$427], null)),iter__23062(cljs.core.rest(s__23063__$2)));
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
clustermap.components.search.t23043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23045){var self__ = this;
var _23045__$1 = this;return self__.meta23044;
});
clustermap.components.search.t23043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23045,meta23044__$1){var self__ = this;
var _23045__$1 = this;return (new clustermap.components.search.t23043(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__23042,self__.map__23041,self__.map__23039,self__.comm,self__.map__23040,self__.selection_type,self__.owner,self__.constituencies,self__.p__23007,self__.search_results,meta23044__$1));
});
clustermap.components.search.__GT_t23043 = (function __GT_t23043(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__23042__$2,map__23041__$2,map__23039__$2,comm__$1,map__23040__$2,selection_type__$1,owner__$1,constituencies__$1,p__23007__$1,search_results__$1,meta23044){return (new clustermap.components.search.t23043(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__23042__$2,map__23041__$2,map__23039__$2,comm__$1,map__23040__$2,selection_type__$1,owner__$1,constituencies__$1,p__23007__$1,search_results__$1,meta23044));
});
}
return (new clustermap.components.search.t23043(investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__23042__$1,map__23041__$1,map__23039__$1,comm,map__23040__$1,selection_type,owner,constituencies,p__23007,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
