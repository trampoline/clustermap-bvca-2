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
clustermap.components.search.extract_id = (function extract_id(type,obj){var pred__22272 = cljs.core._EQ_;var expr__22273 = type;if(cljs.core.truth_((pred__22272.cljs$core$IFn$_invoke$arity$2 ? pred__22272.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$284,expr__22273) : pred__22272.call(null,cljs.core.constant$keyword$284,expr__22273))))
{return cljs.core.constant$keyword$364.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__22272.cljs$core$IFn$_invoke$arity$2 ? pred__22272.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$285,expr__22273) : pred__22272.call(null,cljs.core.constant$keyword$285,expr__22273))))
{return cljs.core.constant$keyword$365.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__22272.cljs$core$IFn$_invoke$arity$2 ? pred__22272.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$286,expr__22273) : pred__22272.call(null,cljs.core.constant$keyword$286,expr__22273))))
{return cljs.core.constant$keyword$366.cljs$core$IFn$_invoke$arity$1(obj);
} else
{return null;
}
}
}
});
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__22275){var map__22281 = p__22275;var map__22281__$1 = ((cljs.core.seq_QMARK_(map__22281))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22281):map__22281);var opts = map__22281__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22281__$1,cljs.core.constant$keyword$251);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22281__$1,cljs.core.constant$keyword$287);if(typeof clustermap.components.search.t22282 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22282 = (function (comm,type,opts,map__22281,p__22275,owner,search_result,search_result_link,meta22283){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__22281 = map__22281;
this.p__22275 = p__22275;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta22283 = meta22283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22282.cljs$lang$type = true;
clustermap.components.search.t22282.cljs$lang$ctorStr = "clustermap.components.search/t22282";
clustermap.components.search.t22282.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22282");
});
clustermap.components.search.t22282.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22282.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22285_22286 = l;var G__22285_22287__$1 = (((G__22285_22286 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22285_22286));var G__22285_22288__$2 = (((G__22285_22287__$1 == null))?null:G__22285_22287__$1.parents(".search-component"));var G__22285_22289__$3 = (((G__22285_22288__$2 == null))?null:G__22285_22288__$2.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,clustermap.components.search.extract_id(self__.type,cljs.core.deref(self__.search_result))], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$261) : self__.search_result.call(null,cljs.core.constant$keyword$261))),(cljs.core.truth_(cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t22282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22284){var self__ = this;
var _22284__$1 = this;return self__.meta22283;
});
clustermap.components.search.t22282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22284,meta22283__$1){var self__ = this;
var _22284__$1 = this;return (new clustermap.components.search.t22282(self__.comm,self__.type,self__.opts,self__.map__22281,self__.p__22275,self__.owner,self__.search_result,self__.search_result_link,meta22283__$1));
});
clustermap.components.search.__GT_t22282 = (function __GT_t22282(comm__$1,type__$1,opts__$1,map__22281__$2,p__22275__$1,owner__$1,search_result__$1,search_result_link__$1,meta22283){return (new clustermap.components.search.t22282(comm__$1,type__$1,opts__$1,map__22281__$2,p__22275__$1,owner__$1,search_result__$1,search_result_link__$1,meta22283));
});
}
return (new clustermap.components.search.t22282(comm,type,opts,map__22281__$1,p__22275,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22290,n){var map__22292 = p__22290;var map__22292__$1 = ((cljs.core.seq_QMARK_(map__22292))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22292):map__22292);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22292__$1,cljs.core.constant$keyword$293);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22292__$1,cljs.core.constant$keyword$369);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22292__$1,cljs.core.constant$keyword$305);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22299 = cljs.core._EQ__EQ_;var expr__22300 = e.keyCode;if(cljs.core.truth_((pred__22299.cljs$core$IFn$_invoke$arity$2 ? pred__22299.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22300) : pred__22299.call(null,clustermap.components.search.ESCAPE_KEY,expr__22300))))
{var G__22302 = om.core.get_node(owner,"search-component");var G__22302__$1 = (((G__22302 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22302));var G__22302__$2 = (((G__22302__$1 == null))?null:G__22302__$1.toggle());return G__22302__$2;
} else
{if(cljs.core.truth_((pred__22299.cljs$core$IFn$_invoke$arity$2 ? pred__22299.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22300) : pred__22299.call(null,clustermap.components.search.ENTER_KEY,expr__22300))))
{var vec__22303 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$370);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22303,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22303,1,null);var G__22304_22305 = om.core.get_node(owner,"search-component");var G__22304_22306__$1 = (((G__22304_22305 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22304_22305));var G__22304_22307__$2 = (((G__22304_22306__$1 == null))?null:G__22304_22306__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__22299.cljs$core$IFn$_invoke$arity$2 ? pred__22299.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22300) : pred__22299.call(null,clustermap.components.search.UP_ARROW,expr__22300))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$370,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$370);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22299.cljs$core$IFn$_invoke$arity$2 ? pred__22299.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22300) : pred__22299.call(null,clustermap.components.search.DOWN_ARROW,expr__22300))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$370,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$370);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$287);var map__22336 = search_results;var map__22336__$1 = ((cljs.core.seq_QMARK_(map__22336))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22336):map__22336);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22336__$1,cljs.core.constant$keyword$293);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22336__$1,cljs.core.constant$keyword$369);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22336__$1,cljs.core.constant$keyword$305);if(typeof clustermap.components.search.t22337 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22337 = (function (constituencies,portfolio_companies,investor_companies,map__22336,comm,owner,search_results,search_component,meta22338){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__22336 = map__22336;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta22338 = meta22338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22337.cljs$lang$type = true;
clustermap.components.search.t22337.cljs$lang$ctorStr = "clustermap.components.search/t22337";
clustermap.components.search.t22337.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22337");
});
clustermap.components.search.t22337.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22337.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$371,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$371,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$371,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$370,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__22340(s__22341){return (new cljs.core.LazySeq(null,(function (){var s__22341__$1 = s__22341;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22341__$1);if(temp__4092__auto__)
{var s__22341__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22341__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22341__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22343 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22342 = 0;while(true){
if((i__22342 < size__4116__auto__))
{var vec__22346 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22342);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22346,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22346,1,null);cljs.core.chunk_append(b__22343,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,self__.comm,cljs.core.constant$keyword$251,cljs.core.constant$keyword$286], null),cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$279,((function (i__22342,vec__22346,idx,con,c__4115__auto__,size__4116__auto__,b__22343,s__22341__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$372,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$366))].join(''));
});})(i__22342,vec__22346,idx,con,c__4115__auto__,size__4116__auto__,b__22343,s__22341__$2,temp__4092__auto__))
,cljs.core.constant$keyword$277,cljs.core.constant$keyword$372], null)));
{
var G__22364 = (i__22342 + 1);
i__22342 = G__22364;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22343),iter__22340(cljs.core.chunk_rest(s__22341__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22343),null);
}
} else
{var vec__22347 = cljs.core.first(s__22341__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22347,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22347,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,self__.comm,cljs.core.constant$keyword$251,cljs.core.constant$keyword$286], null),cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$279,((function (vec__22347,idx,con,s__22341__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$372,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$366))].join(''));
});})(vec__22347,idx,con,s__22341__$2,temp__4092__auto__))
,cljs.core.constant$keyword$277,cljs.core.constant$keyword$372], null)),iter__22340(cljs.core.rest(s__22341__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__22348(s__22349){return (new cljs.core.LazySeq(null,(function (){var s__22349__$1 = s__22349;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22349__$1);if(temp__4092__auto__)
{var s__22349__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22349__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22349__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22351 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22350 = 0;while(true){
if((i__22350 < size__4116__auto__))
{var vec__22354 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22350);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22354,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22354,1,null);cljs.core.chunk_append(b__22351,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,self__.comm,cljs.core.constant$keyword$251,cljs.core.constant$keyword$284], null),cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$279,((function (i__22350,vec__22354,idx,pc,c__4115__auto__,size__4116__auto__,b__22351,s__22349__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$372,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$364))].join(''));
});})(i__22350,vec__22354,idx,pc,c__4115__auto__,size__4116__auto__,b__22351,s__22349__$2,temp__4092__auto__))
,cljs.core.constant$keyword$277,cljs.core.constant$keyword$372], null)));
{
var G__22365 = (i__22350 + 1);
i__22350 = G__22365;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22351),iter__22348(cljs.core.chunk_rest(s__22349__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22351),null);
}
} else
{var vec__22355 = cljs.core.first(s__22349__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22355,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22355,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,self__.comm,cljs.core.constant$keyword$251,cljs.core.constant$keyword$284], null),cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$279,((function (vec__22355,idx,pc,s__22349__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$372,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$364))].join(''));
});})(vec__22355,idx,pc,s__22349__$2,temp__4092__auto__))
,cljs.core.constant$keyword$277,cljs.core.constant$keyword$372], null)),iter__22348(cljs.core.rest(s__22349__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__22356(s__22357){return (new cljs.core.LazySeq(null,(function (){var s__22357__$1 = s__22357;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22357__$1);if(temp__4092__auto__)
{var s__22357__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22357__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22357__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22359 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22358 = 0;while(true){
if((i__22358 < size__4116__auto__))
{var vec__22362 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22358);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22362,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22362,1,null);cljs.core.chunk_append(b__22359,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,self__.comm,cljs.core.constant$keyword$251,cljs.core.constant$keyword$285], null),cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$279,((function (i__22358,vec__22362,idx,inv,c__4115__auto__,size__4116__auto__,b__22359,s__22357__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$372,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$365))].join(''));
});})(i__22358,vec__22362,idx,inv,c__4115__auto__,size__4116__auto__,b__22359,s__22357__$2,temp__4092__auto__))
,cljs.core.constant$keyword$277,cljs.core.constant$keyword$372], null)));
{
var G__22366 = (i__22358 + 1);
i__22358 = G__22366;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22359),iter__22356(cljs.core.chunk_rest(s__22357__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22359),null);
}
} else
{var vec__22363 = cljs.core.first(s__22357__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22363,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22363,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$278,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$287,self__.comm,cljs.core.constant$keyword$251,cljs.core.constant$keyword$285], null),cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$279,((function (vec__22363,idx,inv,s__22357__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$372,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$365))].join(''));
});})(vec__22363,idx,inv,s__22357__$2,temp__4092__auto__))
,cljs.core.constant$keyword$277,cljs.core.constant$keyword$372], null)),iter__22356(cljs.core.rest(s__22357__$2)));
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
clustermap.components.search.t22337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22339){var self__ = this;
var _22339__$1 = this;return self__.meta22338;
});
clustermap.components.search.t22337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22339,meta22338__$1){var self__ = this;
var _22339__$1 = this;return (new clustermap.components.search.t22337(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__22336,self__.comm,self__.owner,self__.search_results,self__.search_component,meta22338__$1));
});
clustermap.components.search.__GT_t22337 = (function __GT_t22337(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22336__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22338){return (new clustermap.components.search.t22337(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22336__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22338));
});
}
return (new clustermap.components.search.t22337(constituencies,portfolio_companies,investor_companies,map__22336__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$373),document.getElementById(elem_id));
});
