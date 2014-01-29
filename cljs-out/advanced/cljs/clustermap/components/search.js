// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('om.core');
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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__21817){var map__21822 = p__21817;var map__21822__$1 = ((cljs.core.seq_QMARK_(map__21822))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21822):map__21822);var opts = map__21822__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21822__$1,cljs.core.constant$keyword$221);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21822__$1,cljs.core.constant$keyword$320);if(typeof clustermap.components.search.t21823 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21823 = (function (comm,type,opts,map__21822,p__21817,owner,search_result,search_result_link,meta21824){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__21822 = map__21822;
this.p__21817 = p__21817;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta21824 = meta21824;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21823.cljs$lang$type = true;
clustermap.components.search.t21823.cljs$lang$ctorStr = "clustermap.components.search/t21823";
clustermap.components.search.t21823.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21823");
});
clustermap.components.search.t21823.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21823.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref(self__.search_result)], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$232) : self__.search_result.call(null,cljs.core.constant$keyword$232))),(cljs.core.truth_(cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t21823.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21825){var self__ = this;
var _21825__$1 = this;return self__.meta21824;
});
clustermap.components.search.t21823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21825,meta21824__$1){var self__ = this;
var _21825__$1 = this;return (new clustermap.components.search.t21823(self__.comm,self__.type,self__.opts,self__.map__21822,self__.p__21817,self__.owner,self__.search_result,self__.search_result_link,meta21824__$1));
});
clustermap.components.search.__GT_t21823 = (function __GT_t21823(comm__$1,type__$1,opts__$1,map__21822__$2,p__21817__$1,owner__$1,search_result__$1,search_result_link__$1,meta21824){return (new clustermap.components.search.t21823(comm__$1,type__$1,opts__$1,map__21822__$2,p__21817__$1,owner__$1,search_result__$1,search_result_link__$1,meta21824));
});
}
return (new clustermap.components.search.t21823(comm,type,opts,map__21822__$1,p__21817,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__21826,n){var map__21828 = p__21826;var map__21828__$1 = ((cljs.core.seq_QMARK_(map__21828))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21828):map__21828);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21828__$1,cljs.core.constant$keyword$321);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21828__$1,cljs.core.constant$keyword$322);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21828__$1,cljs.core.constant$keyword$267);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){console.log(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$323));
var pred__21835 = cljs.core._EQ__EQ_;var expr__21836 = e.keyCode;if(cljs.core.truth_((pred__21835.cljs$core$IFn$_invoke$arity$2 ? pred__21835.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__21836) : pred__21835.call(null,clustermap.components.search.ESCAPE_KEY,expr__21836))))
{var G__21838 = om.core.get_node(owner,"search-component");var G__21838__$1 = (((G__21838 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21838));var G__21838__$2 = (((G__21838__$1 == null))?null:G__21838__$1.toggle());return G__21838__$2;
} else
{if(cljs.core.truth_((pred__21835.cljs$core$IFn$_invoke$arity$2 ? pred__21835.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__21836) : pred__21835.call(null,clustermap.components.search.ENTER_KEY,expr__21836))))
{var vec__21839 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$323);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21839,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21839,1,null);var G__21840_21841 = om.core.get_node(owner,"search-component");var G__21840_21842__$1 = (((G__21840_21841 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21840_21841));var G__21840_21843__$2 = (((G__21840_21842__$1 == null))?null:G__21840_21842__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$238,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__21835.cljs$core$IFn$_invoke$arity$2 ? pred__21835.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__21836) : pred__21835.call(null,clustermap.components.search.UP_ARROW,expr__21836))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$323,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$323);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__21835.cljs$core$IFn$_invoke$arity$2 ? pred__21835.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__21836) : pred__21835.call(null,clustermap.components.search.DOWN_ARROW,expr__21836))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$323,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$323);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() + 1));
} else
{return console.log(e.keyCode);
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$320);var map__21872 = search_results;var map__21872__$1 = ((cljs.core.seq_QMARK_(map__21872))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21872):map__21872);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872__$1,cljs.core.constant$keyword$321);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872__$1,cljs.core.constant$keyword$322);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21872__$1,cljs.core.constant$keyword$267);if(typeof clustermap.components.search.t21873 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21873 = (function (constituencies,portfolio_companies,investor_companies,map__21872,comm,owner,search_results,search_component,meta21874){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__21872 = map__21872;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta21874 = meta21874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21873.cljs$lang$type = true;
clustermap.components.search.t21873.cljs$lang$ctorStr = "clustermap.components.search/t21873";
clustermap.components.search.t21873.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21873");
});
clustermap.components.search.t21873.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21873.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
}), "type": "reset"},"\u00D7")),(cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$323,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__21876(s__21877){return (new cljs.core.LazySeq(null,(function (){var s__21877__$1 = s__21877;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21877__$1);if(temp__4092__auto__)
{var s__21877__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21877__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21877__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21879 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21878 = 0;while(true){
if((i__21878 < size__4116__auto__))
{var vec__21882 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21878);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21882,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21882,1,null);cljs.core.chunk_append(b__21879,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$320,self__.comm,cljs.core.constant$keyword$221,cljs.core.constant$keyword$258], null),cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21900 = (i__21878 + 1);
i__21878 = G__21900;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21879),iter__21876(cljs.core.chunk_rest(s__21877__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21879),null);
}
} else
{var vec__21883 = cljs.core.first(s__21877__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21883,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21883,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$320,self__.comm,cljs.core.constant$keyword$221,cljs.core.constant$keyword$258], null),cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21876(cljs.core.rest(s__21877__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__21884(s__21885){return (new cljs.core.LazySeq(null,(function (){var s__21885__$1 = s__21885;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21885__$1);if(temp__4092__auto__)
{var s__21885__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21885__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21885__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21887 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21886 = 0;while(true){
if((i__21886 < size__4116__auto__))
{var vec__21890 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21886);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21890,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21890,1,null);cljs.core.chunk_append(b__21887,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$320,self__.comm,cljs.core.constant$keyword$221,cljs.core.constant$keyword$256], null),cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21901 = (i__21886 + 1);
i__21886 = G__21901;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21887),iter__21884(cljs.core.chunk_rest(s__21885__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21887),null);
}
} else
{var vec__21891 = cljs.core.first(s__21885__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21891,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21891,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$320,self__.comm,cljs.core.constant$keyword$221,cljs.core.constant$keyword$256], null),cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21884(cljs.core.rest(s__21885__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__21892(s__21893){return (new cljs.core.LazySeq(null,(function (){var s__21893__$1 = s__21893;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21893__$1);if(temp__4092__auto__)
{var s__21893__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21893__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21893__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21895 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21894 = 0;while(true){
if((i__21894 < size__4116__auto__))
{var vec__21898 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21894);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21898,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21898,1,null);cljs.core.chunk_append(b__21895,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$320,self__.comm,cljs.core.constant$keyword$221,cljs.core.constant$keyword$257], null),cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21902 = (i__21894 + 1);
i__21894 = G__21902;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21895),iter__21892(cljs.core.chunk_rest(s__21893__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21895),null);
}
} else
{var vec__21899 = cljs.core.first(s__21893__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21899,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$250,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$320,self__.comm,cljs.core.constant$keyword$221,cljs.core.constant$keyword$257], null),cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21892(cljs.core.rest(s__21893__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_invs);
})()):null)], 0))));
})():null));
});
clustermap.components.search.t21873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21875){var self__ = this;
var _21875__$1 = this;return self__.meta21874;
});
clustermap.components.search.t21873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21875,meta21874__$1){var self__ = this;
var _21875__$1 = this;return (new clustermap.components.search.t21873(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__21872,self__.comm,self__.owner,self__.search_results,self__.search_component,meta21874__$1));
});
clustermap.components.search.__GT_t21873 = (function __GT_t21873(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21872__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21874){return (new clustermap.components.search.t21873(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21872__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21874));
});
}
return (new clustermap.components.search.t21873(constituencies,portfolio_companies,investor_companies,map__21872__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$320,comm], null),clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$325),document.getElementById(elem_id));
});
