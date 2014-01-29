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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__21804){var map__21809 = p__21804;var map__21809__$1 = ((cljs.core.seq_QMARK_(map__21809))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21809):map__21809);var opts = map__21809__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,cljs.core.constant$keyword$222);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21809__$1,cljs.core.constant$keyword$260);if(typeof clustermap.components.search.t21810 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21810 = (function (comm,type,opts,map__21809,p__21804,owner,search_result,search_result_link,meta21811){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__21809 = map__21809;
this.p__21804 = p__21804;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta21811 = meta21811;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21810.cljs$lang$type = true;
clustermap.components.search.t21810.cljs$lang$ctorStr = "clustermap.components.search/t21810";
clustermap.components.search.t21810.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21810");
});
clustermap.components.search.t21810.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21810.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref(self__.search_result)], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$233) : self__.search_result.call(null,cljs.core.constant$keyword$233))),(cljs.core.truth_(cljs.core.constant$keyword$238.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t21810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21812){var self__ = this;
var _21812__$1 = this;return self__.meta21811;
});
clustermap.components.search.t21810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21812,meta21811__$1){var self__ = this;
var _21812__$1 = this;return (new clustermap.components.search.t21810(self__.comm,self__.type,self__.opts,self__.map__21809,self__.p__21804,self__.owner,self__.search_result,self__.search_result_link,meta21811__$1));
});
clustermap.components.search.__GT_t21810 = (function __GT_t21810(comm__$1,type__$1,opts__$1,map__21809__$2,p__21804__$1,owner__$1,search_result__$1,search_result_link__$1,meta21811){return (new clustermap.components.search.t21810(comm__$1,type__$1,opts__$1,map__21809__$2,p__21804__$1,owner__$1,search_result__$1,search_result_link__$1,meta21811));
});
}
return (new clustermap.components.search.t21810(comm,type,opts,map__21809__$1,p__21804,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__21813,n){var map__21815 = p__21813;var map__21815__$1 = ((cljs.core.seq_QMARK_(map__21815))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21815):map__21815);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,cljs.core.constant$keyword$323);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,cljs.core.constant$keyword$324);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21815__$1,cljs.core.constant$keyword$270);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$257,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){console.log(om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$325));
var pred__21822 = cljs.core._EQ__EQ_;var expr__21823 = e.keyCode;if(cljs.core.truth_((pred__21822.cljs$core$IFn$_invoke$arity$2 ? pred__21822.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__21823) : pred__21822.call(null,clustermap.components.search.ESCAPE_KEY,expr__21823))))
{var G__21825 = om.core.get_node(owner,"search-component");var G__21825__$1 = (((G__21825 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21825));var G__21825__$2 = (((G__21825__$1 == null))?null:G__21825__$1.toggle());return G__21825__$2;
} else
{if(cljs.core.truth_((pred__21822.cljs$core$IFn$_invoke$arity$2 ? pred__21822.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__21823) : pred__21822.call(null,clustermap.components.search.ENTER_KEY,expr__21823))))
{var vec__21826 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$325);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21826,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21826,1,null);var G__21827_21828 = om.core.get_node(owner,"search-component");var G__21827_21829__$1 = (((G__21827_21828 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__21827_21828));var G__21827_21830__$2 = (((G__21827_21829__$1 == null))?null:G__21827_21829__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$239,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__21822.cljs$core$IFn$_invoke$arity$2 ? pred__21822.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__21823) : pred__21822.call(null,clustermap.components.search.UP_ARROW,expr__21823))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$325,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$325);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__21822.cljs$core$IFn$_invoke$arity$2 ? pred__21822.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__21823) : pred__21822.call(null,clustermap.components.search.DOWN_ARROW,expr__21823))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$325,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$325);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$260);var map__21859 = search_results;var map__21859__$1 = ((cljs.core.seq_QMARK_(map__21859))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21859):map__21859);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21859__$1,cljs.core.constant$keyword$323);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21859__$1,cljs.core.constant$keyword$324);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21859__$1,cljs.core.constant$keyword$270);if(typeof clustermap.components.search.t21860 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t21860 = (function (constituencies,portfolio_companies,investor_companies,map__21859,comm,owner,search_results,search_component,meta21861){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__21859 = map__21859;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta21861 = meta21861;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t21860.cljs$lang$type = true;
clustermap.components.search.t21860.cljs$lang$ctorStr = "clustermap.components.search/t21860";
clustermap.components.search.t21860.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t21860");
});
clustermap.components.search.t21860.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t21860.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$325,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__21863(s__21864){return (new cljs.core.LazySeq(null,(function (){var s__21864__$1 = s__21864;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21864__$1);if(temp__4092__auto__)
{var s__21864__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21864__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21864__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21866 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21865 = 0;while(true){
if((i__21865 < size__4116__auto__))
{var vec__21869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21865);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21869,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21869,1,null);cljs.core.chunk_append(b__21866,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,self__.comm,cljs.core.constant$keyword$222,cljs.core.constant$keyword$259], null),cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21887 = (i__21865 + 1);
i__21865 = G__21887;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21866),iter__21863(cljs.core.chunk_rest(s__21864__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21866),null);
}
} else
{var vec__21870 = cljs.core.first(s__21864__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21870,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,self__.comm,cljs.core.constant$keyword$222,cljs.core.constant$keyword$259], null),cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21863(cljs.core.rest(s__21864__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__21871(s__21872){return (new cljs.core.LazySeq(null,(function (){var s__21872__$1 = s__21872;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21872__$1);if(temp__4092__auto__)
{var s__21872__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21872__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21872__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21874 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21873 = 0;while(true){
if((i__21873 < size__4116__auto__))
{var vec__21877 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21873);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21877,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21877,1,null);cljs.core.chunk_append(b__21874,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,self__.comm,cljs.core.constant$keyword$222,cljs.core.constant$keyword$257], null),cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21888 = (i__21873 + 1);
i__21873 = G__21888;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21874),iter__21871(cljs.core.chunk_rest(s__21872__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21874),null);
}
} else
{var vec__21878 = cljs.core.first(s__21872__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21878,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21878,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,self__.comm,cljs.core.constant$keyword$222,cljs.core.constant$keyword$257], null),cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21871(cljs.core.rest(s__21872__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__21879(s__21880){return (new cljs.core.LazySeq(null,(function (){var s__21880__$1 = s__21880;while(true){
var temp__4092__auto__ = cljs.core.seq(s__21880__$1);if(temp__4092__auto__)
{var s__21880__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__21880__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__21880__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__21882 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__21881 = 0;while(true){
if((i__21881 < size__4116__auto__))
{var vec__21885 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__21881);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21885,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21885,1,null);cljs.core.chunk_append(b__21882,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,self__.comm,cljs.core.constant$keyword$222,cljs.core.constant$keyword$258], null),cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__21889 = (i__21881 + 1);
i__21881 = G__21889;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__21882),iter__21879(cljs.core.chunk_rest(s__21880__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__21882),null);
}
} else
{var vec__21886 = cljs.core.first(s__21880__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21886,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21886,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$251,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$260,self__.comm,cljs.core.constant$keyword$222,cljs.core.constant$keyword$258], null),cljs.core.constant$keyword$247,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$238,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__21879(cljs.core.rest(s__21880__$2)));
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
clustermap.components.search.t21860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21862){var self__ = this;
var _21862__$1 = this;return self__.meta21861;
});
clustermap.components.search.t21860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21862,meta21861__$1){var self__ = this;
var _21862__$1 = this;return (new clustermap.components.search.t21860(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__21859,self__.comm,self__.owner,self__.search_results,self__.search_component,meta21861__$1));
});
clustermap.components.search.__GT_t21860 = (function __GT_t21860(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21859__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21861){return (new clustermap.components.search.t21860(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__21859__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta21861));
});
}
return (new clustermap.components.search.t21860(constituencies,portfolio_companies,investor_companies,map__21859__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,comm], null),clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$327),document.getElementById(elem_id));
});
