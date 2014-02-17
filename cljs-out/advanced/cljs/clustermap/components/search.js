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
clustermap.components.search.search_result_link = (function search_result_link(p__22730,owner,p__22731){var map__22740 = p__22730;var map__22740__$1 = ((cljs.core.seq_QMARK_(map__22740))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22740):map__22740);var search_result = map__22740__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740__$1,cljs.core.constant$keyword$263);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22740__$1,cljs.core.constant$keyword$273);var map__22741 = p__22731;var map__22741__$1 = ((cljs.core.seq_QMARK_(map__22741))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22741):map__22741);var opts = map__22741__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22741__$1,cljs.core.constant$keyword$302);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22741__$1,cljs.core.constant$keyword$299);if(typeof clustermap.components.search.t22742 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22742 = (function (map__22740,opts,path_fn,p__22730,p__22731,map__22741,name,comm,search_result,owner,type,search_result_link,meta22743){
this.map__22740 = map__22740;
this.opts = opts;
this.path_fn = path_fn;
this.p__22730 = p__22730;
this.p__22731 = p__22731;
this.map__22741 = map__22741;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta22743 = meta22743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22742.cljs$lang$type = true;
clustermap.components.search.t22742.cljs$lang$ctorStr = "clustermap.components.search/t22742";
clustermap.components.search.t22742.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22742");
});
clustermap.components.search.t22742.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22742.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__22745){var self__ = this;
var map__22746 = p__22745;var map__22746__$1 = ((cljs.core.seq_QMARK_(map__22746))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22746):map__22746);var state = map__22746__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22746__$1,cljs.core.constant$keyword$278);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22747 = l;var G__22747__$1 = (((G__22747 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22747));var G__22747__$2 = (((G__22747__$1 == null))?null:G__22747__$1.parents(".search-component"));var G__22747__$3 = (((G__22747__$2 == null))?null:G__22747__$2.toggle());return G__22747__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t22742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22744){var self__ = this;
var _22744__$1 = this;return self__.meta22743;
});
clustermap.components.search.t22742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22744,meta22743__$1){var self__ = this;
var _22744__$1 = this;return (new clustermap.components.search.t22742(self__.map__22740,self__.opts,self__.path_fn,self__.p__22730,self__.p__22731,self__.map__22741,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta22743__$1));
});
clustermap.components.search.__GT_t22742 = (function __GT_t22742(map__22740__$2,opts__$1,path_fn__$1,p__22730__$1,p__22731__$1,map__22741__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta22743){return (new clustermap.components.search.t22742(map__22740__$2,opts__$1,path_fn__$1,p__22730__$1,p__22731__$1,map__22741__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta22743));
});
}
return (new clustermap.components.search.t22742(map__22740__$1,opts,path_fn,p__22730,p__22731,map__22741__$1,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22748,n){var map__22750 = p__22748;var map__22750__$1 = ((cljs.core.seq_QMARK_(map__22750))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22750):map__22750);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22750__$1,cljs.core.constant$keyword$305);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22750__$1,cljs.core.constant$keyword$385);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22750__$1,cljs.core.constant$keyword$322);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$298,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$296,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$297,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22757 = cljs.core._EQ__EQ_;var expr__22758 = e.keyCode;if(cljs.core.truth_((pred__22757.cljs$core$IFn$_invoke$arity$2 ? pred__22757.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22758) : pred__22757.call(null,clustermap.components.search.ESCAPE_KEY,expr__22758))))
{var G__22760 = om.core.get_node(owner,"search-component");var G__22760__$1 = (((G__22760 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22760));var G__22760__$2 = (((G__22760__$1 == null))?null:G__22760__$1.toggle());return G__22760__$2;
} else
{if(cljs.core.truth_((pred__22757.cljs$core$IFn$_invoke$arity$2 ? pred__22757.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22758) : pred__22757.call(null,clustermap.components.search.ENTER_KEY,expr__22758))))
{var vec__22761 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$386);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22761,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22761,1,null);var G__22762_22763 = om.core.get_node(owner,"search-component");var G__22762_22764__$1 = (((G__22762_22763 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22762_22763));var G__22762_22765__$2 = (((G__22762_22764__$1 == null))?null:G__22762_22764__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$279,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__22757.cljs$core$IFn$_invoke$arity$2 ? pred__22757.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22758) : pred__22757.call(null,clustermap.components.search.UP_ARROW,expr__22758))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$386,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$386);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22757.cljs$core$IFn$_invoke$arity$2 ? pred__22757.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22758) : pred__22757.call(null,clustermap.components.search.DOWN_ARROW,expr__22758))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$386,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$386);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var map__22797 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__22797__$1 = ((cljs.core.seq_QMARK_(map__22797))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22797):map__22797);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,cljs.core.constant$keyword$302);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,cljs.core.constant$keyword$299);var map__22798 = search_results;var map__22798__$1 = ((cljs.core.seq_QMARK_(map__22798))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22798):map__22798);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22798__$1,cljs.core.constant$keyword$305);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22798__$1,cljs.core.constant$keyword$385);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22798__$1,cljs.core.constant$keyword$322);if(typeof clustermap.components.search.t22799 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22799 = (function (investor_companies,path_fn,map__22798,map__22797,portfolio_companies,search_component,comm,owner,constituencies,search_results,meta22800){
this.investor_companies = investor_companies;
this.path_fn = path_fn;
this.map__22798 = map__22798;
this.map__22797 = map__22797;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta22800 = meta22800;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22799.cljs$lang$type = true;
clustermap.components.search.t22799.cljs$lang$ctorStr = "clustermap.components.search/t22799";
clustermap.components.search.t22799.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22799");
});
clustermap.components.search.t22799.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22799.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$387,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$387,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$387,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"\u00D7")),React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(null,null) : self__.path_fn.call(null,null,null))},React.DOM.button({"className": "btn-reset", "type": "reset"},"Reset to UK wide")))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$386.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$386,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$388,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$388,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__22804(s__22805){return (new cljs.core.LazySeq(null,(function (){var s__22805__$1 = s__22805;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22805__$1);if(temp__4092__auto__)
{var s__22805__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22805__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22805__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22807 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22806 = 0;while(true){
if((i__22806 < size__4116__auto__))
{var vec__22810 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22806);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22810,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22810,1,null);cljs.core.chunk_append(b__22807,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$299,self__.comm,cljs.core.constant$keyword$302,self__.path_fn], null),cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$291,((function (i__22806,vec__22810,idx,con,c__4115__auto__,size__4116__auto__,b__22807,s__22805__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$263,cljs.core.constant$keyword$298,cljs.core.array_seq([cljs.core.constant$keyword$259,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382),cljs.core.constant$keyword$389,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382))].join('')], 0));
});})(i__22806,vec__22810,idx,con,c__4115__auto__,size__4116__auto__,b__22807,s__22805__$2,temp__4092__auto__))
,cljs.core.constant$keyword$289,cljs.core.constant$keyword$389], null)));
{
var G__22828 = (i__22806 + 1);
i__22806 = G__22828;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22807),iter__22804(cljs.core.chunk_rest(s__22805__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22807),null);
}
} else
{var vec__22811 = cljs.core.first(s__22805__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22811,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22811,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$299,self__.comm,cljs.core.constant$keyword$302,self__.path_fn], null),cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$291,((function (vec__22811,idx,con,s__22805__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$263,cljs.core.constant$keyword$298,cljs.core.array_seq([cljs.core.constant$keyword$259,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382),cljs.core.constant$keyword$389,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382))].join('')], 0));
});})(vec__22811,idx,con,s__22805__$2,temp__4092__auto__))
,cljs.core.constant$keyword$289,cljs.core.constant$keyword$389], null)),iter__22804(cljs.core.rest(s__22805__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$388,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__22812(s__22813){return (new cljs.core.LazySeq(null,(function (){var s__22813__$1 = s__22813;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22813__$1);if(temp__4092__auto__)
{var s__22813__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22813__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22813__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22815 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22814 = 0;while(true){
if((i__22814 < size__4116__auto__))
{var vec__22818 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22814);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22818,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22818,1,null);cljs.core.chunk_append(b__22815,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$299,self__.comm,cljs.core.constant$keyword$302,self__.path_fn], null),cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$291,((function (i__22814,vec__22818,idx,pc,c__4115__auto__,size__4116__auto__,b__22815,s__22813__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$263,cljs.core.constant$keyword$296,cljs.core.array_seq([cljs.core.constant$keyword$259,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$380),cljs.core.constant$keyword$389,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$380))].join('')], 0));
});})(i__22814,vec__22818,idx,pc,c__4115__auto__,size__4116__auto__,b__22815,s__22813__$2,temp__4092__auto__))
,cljs.core.constant$keyword$289,cljs.core.constant$keyword$389], null)));
{
var G__22829 = (i__22814 + 1);
i__22814 = G__22829;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22815),iter__22812(cljs.core.chunk_rest(s__22813__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22815),null);
}
} else
{var vec__22819 = cljs.core.first(s__22813__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22819,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$299,self__.comm,cljs.core.constant$keyword$302,self__.path_fn], null),cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$291,((function (vec__22819,idx,pc,s__22813__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$263,cljs.core.constant$keyword$296,cljs.core.array_seq([cljs.core.constant$keyword$259,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$380),cljs.core.constant$keyword$389,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$380))].join('')], 0));
});})(vec__22819,idx,pc,s__22813__$2,temp__4092__auto__))
,cljs.core.constant$keyword$289,cljs.core.constant$keyword$389], null)),iter__22812(cljs.core.rest(s__22813__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$388,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$253,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__22820(s__22821){return (new cljs.core.LazySeq(null,(function (){var s__22821__$1 = s__22821;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22821__$1);if(temp__4092__auto__)
{var s__22821__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22821__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22821__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22823 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22822 = 0;while(true){
if((i__22822 < size__4116__auto__))
{var vec__22826 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22822);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22826,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22826,1,null);cljs.core.chunk_append(b__22823,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$299,self__.comm,cljs.core.constant$keyword$302,self__.path_fn], null),cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$291,((function (i__22822,vec__22826,idx,inv,c__4115__auto__,size__4116__auto__,b__22823,s__22821__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$263,cljs.core.constant$keyword$297,cljs.core.array_seq([cljs.core.constant$keyword$259,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$381),cljs.core.constant$keyword$389,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$381))].join('')], 0));
});})(i__22822,vec__22826,idx,inv,c__4115__auto__,size__4116__auto__,b__22823,s__22821__$2,temp__4092__auto__))
,cljs.core.constant$keyword$289,cljs.core.constant$keyword$389], null)));
{
var G__22830 = (i__22822 + 1);
i__22822 = G__22830;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22823),iter__22820(cljs.core.chunk_rest(s__22821__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22823),null);
}
} else
{var vec__22827 = cljs.core.first(s__22821__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22827,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22827,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$290,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$299,self__.comm,cljs.core.constant$keyword$302,self__.path_fn], null),cljs.core.constant$keyword$286,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$278,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$291,((function (vec__22827,idx,inv,s__22821__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$263,cljs.core.constant$keyword$297,cljs.core.array_seq([cljs.core.constant$keyword$259,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$381),cljs.core.constant$keyword$389,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$381))].join('')], 0));
});})(vec__22827,idx,inv,s__22821__$2,temp__4092__auto__))
,cljs.core.constant$keyword$289,cljs.core.constant$keyword$389], null)),iter__22820(cljs.core.rest(s__22821__$2)));
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
clustermap.components.search.t22799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22801){var self__ = this;
var _22801__$1 = this;return self__.meta22800;
});
clustermap.components.search.t22799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22801,meta22800__$1){var self__ = this;
var _22801__$1 = this;return (new clustermap.components.search.t22799(self__.investor_companies,self__.path_fn,self__.map__22798,self__.map__22797,self__.portfolio_companies,self__.search_component,self__.comm,self__.owner,self__.constituencies,self__.search_results,meta22800__$1));
});
clustermap.components.search.__GT_t22799 = (function __GT_t22799(investor_companies__$1,path_fn__$1,map__22798__$2,map__22797__$2,portfolio_companies__$1,search_component__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta22800){return (new clustermap.components.search.t22799(investor_companies__$1,path_fn__$1,map__22798__$2,map__22797__$2,portfolio_companies__$1,search_component__$1,comm__$1,owner__$1,constituencies__$1,search_results__$1,meta22800));
});
}
return (new clustermap.components.search.t22799(investor_companies,path_fn,map__22798__$1,map__22797__$1,portfolio_companies,search_component,comm,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$390),document.getElementById(elem_id));
});
