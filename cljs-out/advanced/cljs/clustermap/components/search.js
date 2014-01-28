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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__21351){var map__21356 = p__21351;var map__21356__$1 = ((cljs.core.seq_QMARK_(map__21356))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21356):map__21356);var opts = map__21356__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356__$1,cljs.core.constant$keyword$217);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356__$1,cljs.core.constant$keyword$314);if(typeof clustermap.components.search.t21357 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21357 = (function (comm,type,opts,map__21356,p__21351,owner,search_result,search_result_link,meta21358){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__21356 = map__21356;
this.p__21351 = p__21351;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta21358 = meta21358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21357.cljs$lang$type = true;
clustermap.components.search.t21357.cljs$lang$ctorStr = "clustermap.components.search/t21357";
clustermap.components.search.t21357.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21357");
});
clustermap.components.search.t21357.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21357.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref(self__.search_result)], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$228) : self__.search_result.call(null,cljs.core.constant$keyword$228))),(cljs.core.truth_(cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t21357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21359){var self__ = this;
var _21359__$1 = this;return self__.meta21358;
});
clustermap.components.search.t21357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21359,meta21358__$1){var self__ = this;
var _21359__$1 = this;return (new clustermap.components.search.t21357(self__.comm,self__.type,self__.opts,self__.map__21356,self__.p__21351,self__.owner,self__.search_result,self__.search_result_link,meta21358__$1));
});
clustermap.components.search.__GT_t21357 = (function __GT_t21357(comm__$1,type__$1,opts__$1,map__21356__$2,p__21351__$1,owner__$1,search_result__$1,search_result_link__$1,meta21358){return (new clustermap.components.search.t21357(comm__$1,type__$1,opts__$1,map__21356__$2,p__21351__$1,owner__$1,search_result__$1,search_result_link__$1,meta21358));
});
}
return (new clustermap.components.search.t21357(comm,type,opts,map__21356__$1,p__21351,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__21360,n){var map__21362 = p__21360;var map__21362__$1 = ((cljs.core.seq_QMARK_(map__21362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21362):map__21362);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362__$1,cljs.core.constant$keyword$315);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362__$1,cljs.core.constant$keyword$316);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21362__$1,cljs.core.constant$keyword$263);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$254,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$253,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){console.log(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$317));
var pred__21369 = cljs.core._EQ__EQ_;var expr__21370 = e.keyCode;if(cljs.core.truth_((pred__21369.cljs$core$IFn$_invoke$arity$2 ? pred__21369.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__21370) : pred__21369.call(null,clustermap.components.search.ESCAPE_KEY,expr__21370))))
{var G__21372 = om.core.get_node(owner,"search-component");var G__21372__$1 = (((G__21372 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21372));var G__21372__$2 = (((G__21372__$1 == null))?null:G__21372__$1.toggle());return G__21372__$2;
} else
{if(cljs.core.truth_((pred__21369.cljs$core$IFn$_invoke$arity$2 ? pred__21369.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__21370) : pred__21369.call(null,clustermap.components.search.ENTER_KEY,expr__21370))))
{var vec__21373 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$317);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21373,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21373,1,null);var G__21374_21375 = om.core.get_node(owner,"search-component");var G__21374_21376__$1 = (((G__21374_21375 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21374_21375));var G__21374_21377__$2 = (((G__21374_21376__$1 == null))?null:G__21374_21376__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$234,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__21369.cljs$core$IFn$_invoke$arity$2 ? pred__21369.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__21370) : pred__21369.call(null,clustermap.components.search.UP_ARROW,expr__21370))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$317,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$317);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__21369.cljs$core$IFn$_invoke$arity$2 ? pred__21369.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__21370) : pred__21369.call(null,clustermap.components.search.DOWN_ARROW,expr__21370))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$317,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$317);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$314);var map__21406 = search_results;var map__21406__$1 = ((cljs.core.seq_QMARK_(map__21406))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21406):map__21406);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21406__$1,cljs.core.constant$keyword$315);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21406__$1,cljs.core.constant$keyword$316);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21406__$1,cljs.core.constant$keyword$263);if(typeof clustermap.components.search.t21407 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21407 = (function (constituencies,portfolio_companies,investor_companies,map__21406,comm,owner,search_results,search_component,meta21408){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__21406 = map__21406;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta21408 = meta21408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21407.cljs$lang$type = true;
clustermap.components.search.t21407.cljs$lang$ctorStr = "clustermap.components.search/t21407";
clustermap.components.search.t21407.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21407");
});
clustermap.components.search.t21407.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21407.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$318,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$318,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$318,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$317,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__21410(s__21411){return (new cljs.core.LazySeq(null,(function (){var s__21411__$1 = s__21411;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21411__$1);if(temp__4092__auto__)
{var s__21411__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21411__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21411__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21413 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21412 = 0;while(true){
if((i__21412 < size__4116__auto__))
{var vec__21416 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21412);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21416,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21416,1,null);cljs.core.chunk_append(b__21413,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$314,self__.comm,cljs.core.constant$keyword$217,cljs.core.constant$keyword$254], null),cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$233,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21434 = (i__21412 + 1);
i__21412 = G__21434;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21413),iter__21410(cljs.core.chunk_rest(s__21411__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21413),null);
}
} else
{var vec__21417 = cljs.core.first(s__21411__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21417,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21417,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$314,self__.comm,cljs.core.constant$keyword$217,cljs.core.constant$keyword$254], null),cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$233,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21410(cljs.core.rest(s__21411__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__21418(s__21419){return (new cljs.core.LazySeq(null,(function (){var s__21419__$1 = s__21419;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21419__$1);if(temp__4092__auto__)
{var s__21419__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21419__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21419__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21421 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21420 = 0;while(true){
if((i__21420 < size__4116__auto__))
{var vec__21424 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21420);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21424,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21424,1,null);cljs.core.chunk_append(b__21421,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$314,self__.comm,cljs.core.constant$keyword$217,cljs.core.constant$keyword$252], null),cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$233,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21435 = (i__21420 + 1);
i__21420 = G__21435;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21421),iter__21418(cljs.core.chunk_rest(s__21419__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21421),null);
}
} else
{var vec__21425 = cljs.core.first(s__21419__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21425,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21425,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$314,self__.comm,cljs.core.constant$keyword$217,cljs.core.constant$keyword$252], null),cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$233,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21418(cljs.core.rest(s__21419__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__21426(s__21427){return (new cljs.core.LazySeq(null,(function (){var s__21427__$1 = s__21427;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21427__$1);if(temp__4092__auto__)
{var s__21427__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21427__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21427__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21429 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21428 = 0;while(true){
if((i__21428 < size__4116__auto__))
{var vec__21432 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21428);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21432,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21432,1,null);cljs.core.chunk_append(b__21429,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$314,self__.comm,cljs.core.constant$keyword$217,cljs.core.constant$keyword$253], null),cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$233,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21436 = (i__21428 + 1);
i__21428 = G__21436;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21429),iter__21426(cljs.core.chunk_rest(s__21427__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21429),null);
}
} else
{var vec__21433 = cljs.core.first(s__21427__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21433,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21433,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$314,self__.comm,cljs.core.constant$keyword$217,cljs.core.constant$keyword$253], null),cljs.core.constant$keyword$242,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$233,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21426(cljs.core.rest(s__21427__$2)));
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
clustermap.components.search.t21407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21409){var self__ = this;
var _21409__$1 = this;return self__.meta21408;
});
clustermap.components.search.t21407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21409,meta21408__$1){var self__ = this;
var _21409__$1 = this;return (new clustermap.components.search.t21407(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__21406,self__.comm,self__.owner,self__.search_results,self__.search_component,meta21408__$1));
});
clustermap.components.search.__GT_t21407 = (function __GT_t21407(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21406__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21408){return (new clustermap.components.search.t21407(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21406__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21408));
});
}
return (new clustermap.components.search.t21407(constituencies,portfolio_companies,investor_companies,map__21406__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$314,comm], null),clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$319),document.getElementById(elem_id));
});
