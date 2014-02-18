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
clustermap.components.search.search_result_link = (function search_result_link(p__22914,owner,p__22915){var map__22924 = p__22914;var map__22924__$1 = ((cljs.core.seq_QMARK_(map__22924))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22924):map__22924);var search_result = map__22924__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22924__$1,cljs.core.constant$keyword$270);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22924__$1,cljs.core.constant$keyword$280);var map__22925 = p__22915;var map__22925__$1 = ((cljs.core.seq_QMARK_(map__22925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22925):map__22925);var opts = map__22925__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22925__$1,cljs.core.constant$keyword$310);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22925__$1,cljs.core.constant$keyword$306);if(typeof clustermap.components.search.t22926 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22926 = (function (opts,path_fn,map__22925,name,p__22914,comm,p__22915,search_result,owner,map__22924,type,search_result_link,meta22927){
this.opts = opts;
this.path_fn = path_fn;
this.map__22925 = map__22925;
this.name = name;
this.p__22914 = p__22914;
this.comm = comm;
this.p__22915 = p__22915;
this.search_result = search_result;
this.owner = owner;
this.map__22924 = map__22924;
this.type = type;
this.search_result_link = search_result_link;
this.meta22927 = meta22927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22926.cljs$lang$type = true;
clustermap.components.search.t22926.cljs$lang$ctorStr = "clustermap.components.search/t22926";
clustermap.components.search.t22926.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22926");
});
clustermap.components.search.t22926.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22926.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__22929){var self__ = this;
var map__22930 = p__22929;var map__22930__$1 = ((cljs.core.seq_QMARK_(map__22930))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22930):map__22930);var state = map__22930__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22930__$1,cljs.core.constant$keyword$285);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22931 = l;var G__22931__$1 = (((G__22931 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22931));var G__22931__$2 = (((G__22931__$1 == null))?null:G__22931__$1.parents(".search-component"));var G__22931__$3 = (((G__22931__$2 == null))?null:G__22931__$2.toggle());return G__22931__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t22926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22928){var self__ = this;
var _22928__$1 = this;return self__.meta22927;
});
clustermap.components.search.t22926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22928,meta22927__$1){var self__ = this;
var _22928__$1 = this;return (new clustermap.components.search.t22926(self__.opts,self__.path_fn,self__.map__22925,self__.name,self__.p__22914,self__.comm,self__.p__22915,self__.search_result,self__.owner,self__.map__22924,self__.type,self__.search_result_link,meta22927__$1));
});
clustermap.components.search.__GT_t22926 = (function __GT_t22926(opts__$1,path_fn__$1,map__22925__$2,name__$1,p__22914__$1,comm__$1,p__22915__$1,search_result__$1,owner__$1,map__22924__$2,type__$1,search_result_link__$1,meta22927){return (new clustermap.components.search.t22926(opts__$1,path_fn__$1,map__22925__$2,name__$1,p__22914__$1,comm__$1,p__22915__$1,search_result__$1,owner__$1,map__22924__$2,type__$1,search_result_link__$1,meta22927));
});
}
return (new clustermap.components.search.t22926(opts,path_fn,map__22925__$1,name,p__22914,comm,p__22915,search_result,owner,map__22924__$1,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22932,n){var map__22934 = p__22932;var map__22934__$1 = ((cljs.core.seq_QMARK_(map__22934))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22934):map__22934);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934__$1,cljs.core.constant$keyword$313);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934__$1,cljs.core.constant$keyword$396);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934__$1,cljs.core.constant$keyword$330);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22941 = cljs.core._EQ__EQ_;var expr__22942 = e.keyCode;if(cljs.core.truth_((pred__22941.cljs$core$IFn$_invoke$arity$2 ? pred__22941.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22942) : pred__22941.call(null,clustermap.components.search.ESCAPE_KEY,expr__22942))))
{var G__22944 = om.core.get_node(owner,"search-component");var G__22944__$1 = (((G__22944 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22944));var G__22944__$2 = (((G__22944__$1 == null))?null:G__22944__$1.toggle());return G__22944__$2;
} else
{if(cljs.core.truth_((pred__22941.cljs$core$IFn$_invoke$arity$2 ? pred__22941.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22942) : pred__22941.call(null,clustermap.components.search.ENTER_KEY,expr__22942))))
{var vec__22945 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$397);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22945,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22945,1,null);var G__22946_22947 = om.core.get_node(owner,"search-component");var G__22946_22948__$1 = (((G__22946_22947 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22946_22947));var G__22946_22949__$2 = (((G__22946_22948__$1 == null))?null:G__22946_22948__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__22941.cljs$core$IFn$_invoke$arity$2 ? pred__22941.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22942) : pred__22941.call(null,clustermap.components.search.UP_ARROW,expr__22942))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$397,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$397);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22941.cljs$core$IFn$_invoke$arity$2 ? pred__22941.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22942) : pred__22941.call(null,clustermap.components.search.DOWN_ARROW,expr__22942))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$397,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$397);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(p__22950,owner){var map__22982 = p__22950;var map__22982__$1 = ((cljs.core.seq_QMARK_(map__22982))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22982):map__22982);var map__22983 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22982__$1,cljs.core.constant$keyword$309);var map__22983__$1 = ((cljs.core.seq_QMARK_(map__22983))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22983):map__22983);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,cljs.core.constant$keyword$270);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22983__$1,cljs.core.constant$keyword$235);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22982__$1,cljs.core.constant$keyword$398);var map__22984 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__22984__$1 = ((cljs.core.seq_QMARK_(map__22984))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22984):map__22984);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22984__$1,cljs.core.constant$keyword$310);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22984__$1,cljs.core.constant$keyword$306);var map__22985 = search_results;var map__22985__$1 = ((cljs.core.seq_QMARK_(map__22985))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22985):map__22985);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22985__$1,cljs.core.constant$keyword$313);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22985__$1,cljs.core.constant$keyword$396);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22985__$1,cljs.core.constant$keyword$330);if(typeof clustermap.components.search.t22986 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22986 = (function (map__22982,investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__22985,map__22984,map__22983,comm,selection_type,owner,constituencies,search_results,p__22950,meta22987){
this.map__22982 = map__22982;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__22985 = map__22985;
this.map__22984 = map__22984;
this.map__22983 = map__22983;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.p__22950 = p__22950;
this.meta22987 = meta22987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22986.cljs$lang$type = true;
clustermap.components.search.t22986.cljs$lang$ctorStr = "clustermap.components.search/t22986";
clustermap.components.search.t22986.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22986");
});
clustermap.components.search.t22986.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22986.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"\u00D7")),(cljs.core.truth_(self__.selection_value)?React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(null,null) : self__.path_fn.call(null,null,null))},React.DOM.button({"className": "btn-reset", "type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$397.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$397.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$397,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$400,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$400,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__22989(s__22990){return (new cljs.core.LazySeq(null,(function (){var s__22990__$1 = s__22990;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22990__$1);if(temp__4092__auto__)
{var s__22990__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22990__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22990__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22992 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22991 = 0;while(true){
if((i__22991 < size__4116__auto__))
{var vec__22995 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22991);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22995,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22995,1,null);cljs.core.chunk_append(b__22992,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (i__22991,vec__22995,idx,con,c__4115__auto__,size__4116__auto__,b__22992,s__22990__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$305,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388),cljs.core.constant$keyword$401,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388))].join('')], 0));
});})(i__22991,vec__22995,idx,con,c__4115__auto__,size__4116__auto__,b__22992,s__22990__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)));
{
var G__23013 = (i__22991 + 1);
i__22991 = G__23013;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22992),iter__22989(cljs.core.chunk_rest(s__22990__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22992),null);
}
} else
{var vec__22996 = cljs.core.first(s__22990__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22996,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22996,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (vec__22996,idx,con,s__22990__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$305,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388),cljs.core.constant$keyword$401,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388))].join('')], 0));
});})(vec__22996,idx,con,s__22990__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)),iter__22989(cljs.core.rest(s__22990__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$400,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__22997(s__22998){return (new cljs.core.LazySeq(null,(function (){var s__22998__$1 = s__22998;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22998__$1);if(temp__4092__auto__)
{var s__22998__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22998__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22998__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23000 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22999 = 0;while(true){
if((i__22999 < size__4116__auto__))
{var vec__23003 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22999);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23003,1,null);cljs.core.chunk_append(b__23000,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (i__22999,vec__23003,idx,pc,c__4115__auto__,size__4116__auto__,b__23000,s__22998__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$303,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386),cljs.core.constant$keyword$401,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386))].join('')], 0));
});})(i__22999,vec__23003,idx,pc,c__4115__auto__,size__4116__auto__,b__23000,s__22998__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)));
{
var G__23014 = (i__22999 + 1);
i__22999 = G__23014;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23000),iter__22997(cljs.core.chunk_rest(s__22998__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23000),null);
}
} else
{var vec__23004 = cljs.core.first(s__22998__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23004,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23004,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (vec__23004,idx,pc,s__22998__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$303,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386),cljs.core.constant$keyword$401,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386))].join('')], 0));
});})(vec__23004,idx,pc,s__22998__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)),iter__22997(cljs.core.rest(s__22998__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$400,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__23005(s__23006){return (new cljs.core.LazySeq(null,(function (){var s__23006__$1 = s__23006;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23006__$1);if(temp__4092__auto__)
{var s__23006__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23006__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23006__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23008 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23007 = 0;while(true){
if((i__23007 < size__4116__auto__))
{var vec__23011 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23007);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23011,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23011,1,null);cljs.core.chunk_append(b__23008,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (i__23007,vec__23011,idx,inv,c__4115__auto__,size__4116__auto__,b__23008,s__23006__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$304,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387),cljs.core.constant$keyword$401,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387))].join('')], 0));
});})(i__23007,vec__23011,idx,inv,c__4115__auto__,size__4116__auto__,b__23008,s__23006__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)));
{
var G__23015 = (i__23007 + 1);
i__23007 = G__23015;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23008),iter__23005(cljs.core.chunk_rest(s__23006__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23008),null);
}
} else
{var vec__23012 = cljs.core.first(s__23006__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23012,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23012,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (vec__23012,idx,inv,s__23006__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$304,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387),cljs.core.constant$keyword$401,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387))].join('')], 0));
});})(vec__23012,idx,inv,s__23006__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)),iter__23005(cljs.core.rest(s__23006__$2)));
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
clustermap.components.search.t22986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22988){var self__ = this;
var _22988__$1 = this;return self__.meta22987;
});
clustermap.components.search.t22986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22988,meta22987__$1){var self__ = this;
var _22988__$1 = this;return (new clustermap.components.search.t22986(self__.map__22982,self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__22985,self__.map__22984,self__.map__22983,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,self__.p__22950,meta22987__$1));
});
clustermap.components.search.__GT_t22986 = (function __GT_t22986(map__22982__$2,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__22985__$2,map__22984__$2,map__22983__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,p__22950__$1,meta22987){return (new clustermap.components.search.t22986(map__22982__$2,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__22985__$2,map__22984__$2,map__22983__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,p__22950__$1,meta22987));
});
}
return (new clustermap.components.search.t22986(map__22982__$1,investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__22985__$1,map__22984__$1,map__22983__$1,comm,selection_type,owner,constituencies,search_results,p__22950,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
