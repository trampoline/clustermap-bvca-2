// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
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
clustermap.components.search.search_result_link = (function search_result_link(p__34675,owner,p__34676){var map__34685 = p__34675;var map__34685__$1 = ((cljs.core.seq_QMARK_(map__34685))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34685):map__34685);var search_result = map__34685__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34685__$1,cljs.core.constant$keyword$584);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34685__$1,cljs.core.constant$keyword$594);var map__34686 = p__34676;var map__34686__$1 = ((cljs.core.seq_QMARK_(map__34686))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34686):map__34686);var opts = map__34686__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34686__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34686__$1,cljs.core.constant$keyword$633);if(typeof clustermap.components.search.t34687 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34687 = (function (map__34685,map__34686,opts,path_fn,p__34675,p__34676,name,comm,search_result,owner,type,search_result_link,meta34688){
this.map__34685 = map__34685;
this.map__34686 = map__34686;
this.opts = opts;
this.path_fn = path_fn;
this.p__34675 = p__34675;
this.p__34676 = p__34676;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta34688 = meta34688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34687.cljs$lang$type = true;
clustermap.components.search.t34687.cljs$lang$ctorStr = "clustermap.components.search/t34687";
clustermap.components.search.t34687.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34687");
});
clustermap.components.search.t34687.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34687.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__34690){var self__ = this;
var map__34691 = p__34690;var map__34691__$1 = ((cljs.core.seq_QMARK_(map__34691))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34691):map__34691);var state = map__34691__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34691__$1,cljs.core.constant$keyword$599);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__34692 = l;var G__34692__$1 = (((G__34692 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34692));var G__34692__$2 = (((G__34692__$1 == null))?null:G__34692__$1.parents(".search-component"));var G__34692__$3 = (((G__34692__$2 == null))?null:G__34692__$2.toggle());return G__34692__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t34687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34689){var self__ = this;
var _34689__$1 = this;return self__.meta34688;
});
clustermap.components.search.t34687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34689,meta34688__$1){var self__ = this;
var _34689__$1 = this;return (new clustermap.components.search.t34687(self__.map__34685,self__.map__34686,self__.opts,self__.path_fn,self__.p__34675,self__.p__34676,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta34688__$1));
});
clustermap.components.search.__GT_t34687 = (function __GT_t34687(map__34685__$2,map__34686__$2,opts__$1,path_fn__$1,p__34675__$1,p__34676__$1,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta34688){return (new clustermap.components.search.t34687(map__34685__$2,map__34686__$2,opts__$1,path_fn__$1,p__34675__$1,p__34676__$1,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta34688));
});
}
return (new clustermap.components.search.t34687(map__34685__$1,map__34686__$1,opts,path_fn,p__34675,p__34676,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__34693,n){var map__34695 = p__34693;var map__34695__$1 = ((cljs.core.seq_QMARK_(map__34695))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34695):map__34695);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34695__$1,cljs.core.constant$keyword$686);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34695__$1,cljs.core.constant$keyword$744);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34695__$1,cljs.core.constant$keyword$676);var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3441__auto__ = portfolio_companies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3441__auto__ = investor_companies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$631,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$629,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$630,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__34702 = cljs.core._EQ__EQ_;var expr__34703 = e.keyCode;if(cljs.core.truth_((pred__34702.cljs$core$IFn$_invoke$arity$2 ? pred__34702.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__34703) : pred__34702.call(null,clustermap.components.search.ESCAPE_KEY,expr__34703))))
{var G__34705 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34705__$1 = (((G__34705 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34705));var G__34705__$2 = (((G__34705__$1 == null))?null:G__34705__$1.toggle());return G__34705__$2;
} else
{if(cljs.core.truth_((pred__34702.cljs$core$IFn$_invoke$arity$2 ? pred__34702.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__34703) : pred__34702.call(null,clustermap.components.search.ENTER_KEY,expr__34703))))
{var vec__34706 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$745);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34706,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34706,1,null);var G__34707_34708 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34707_34709__$1 = (((G__34707_34708 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34707_34708));var G__34707_34710__$2 = (((G__34707_34709__$1 == null))?null:G__34707_34709__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__34702.cljs$core$IFn$_invoke$arity$2 ? pred__34702.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__34703) : pred__34702.call(null,clustermap.components.search.UP_ARROW,expr__34703))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$745,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$745);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__34702.cljs$core$IFn$_invoke$arity$2 ? pred__34702.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__34703) : pred__34702.call(null,clustermap.components.search.DOWN_ARROW,expr__34703))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$745,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$745);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
clustermap.components.search.search_component = (function search_component(p__34711,owner){var map__34743 = p__34711;var map__34743__$1 = ((cljs.core.seq_QMARK_(map__34743))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34743):map__34743);var map__34744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34743__$1,cljs.core.constant$keyword$639);var map__34744__$1 = ((cljs.core.seq_QMARK_(map__34744))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34744):map__34744);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34744__$1,cljs.core.constant$keyword$584);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34744__$1,cljs.core.constant$keyword$545);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34743__$1,cljs.core.constant$keyword$746);var map__34745 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34745__$1 = ((cljs.core.seq_QMARK_(map__34745))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34745):map__34745);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34745__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34745__$1,cljs.core.constant$keyword$633);var map__34746 = search_results;var map__34746__$1 = ((cljs.core.seq_QMARK_(map__34746))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34746):map__34746);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,cljs.core.constant$keyword$686);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,cljs.core.constant$keyword$744);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34746__$1,cljs.core.constant$keyword$676);if(typeof clustermap.components.search.t34747 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34747 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__34711,comm,selection_type,map__34746,owner,constituencies,search_results,map__34745,map__34744,map__34743,meta34748){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.p__34711 = p__34711;
this.comm = comm;
this.selection_type = selection_type;
this.map__34746 = map__34746;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.map__34745 = map__34745;
this.map__34744 = map__34744;
this.map__34743 = map__34743;
this.meta34748 = meta34748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34747.cljs$lang$type = true;
clustermap.components.search.t34747.cljs$lang$ctorStr = "clustermap.components.search/t34747";
clustermap.components.search.t34747.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34747");
});
clustermap.components.search.t34747.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34747.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$747,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$747,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$747,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
})},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3441__auto____$1))
{return or__3441__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3441__auto__ = cljs.core.constant$keyword$745.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$745.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$745,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$588,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34750(s__34751){return (new cljs.core.LazySeq(null,(function (){var s__34751__$1 = s__34751;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34751__$1);if(temp__4092__auto__)
{var s__34751__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34751__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34751__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34753 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34752 = 0;while(true){
if((i__34752 < size__4157__auto__))
{var vec__34756 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34752);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34756,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34756,1,null);cljs.core.chunk_append(b__34753,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34752,vec__34756,idx,con,c__4156__auto__,size__4157__auto__,b__34753,s__34751__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$631,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656),cljs.core.constant$keyword$749,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656))].join('')], 0));
});})(i__34752,vec__34756,idx,con,c__4156__auto__,size__4157__auto__,b__34753,s__34751__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)));
{
var G__34774 = (i__34752 + 1);
i__34752 = G__34774;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34753),iter__34750(cljs.core.chunk_rest(s__34751__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34753),null);
}
} else
{var vec__34757 = cljs.core.first(s__34751__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34757,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34757,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34757,idx,con,s__34751__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$631,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656),cljs.core.constant$keyword$749,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656))].join('')], 0));
});})(vec__34757,idx,con,s__34751__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)),iter__34750(cljs.core.rest(s__34751__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34758(s__34759){return (new cljs.core.LazySeq(null,(function (){var s__34759__$1 = s__34759;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34759__$1);if(temp__4092__auto__)
{var s__34759__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34759__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34759__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34761 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34760 = 0;while(true){
if((i__34760 < size__4157__auto__))
{var vec__34764 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34760);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34764,1,null);cljs.core.chunk_append(b__34761,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34760,vec__34764,idx,pc,c__4156__auto__,size__4157__auto__,b__34761,s__34759__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$629,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650),cljs.core.constant$keyword$749,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650))].join('')], 0));
});})(i__34760,vec__34764,idx,pc,c__4156__auto__,size__4157__auto__,b__34761,s__34759__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)));
{
var G__34775 = (i__34760 + 1);
i__34760 = G__34775;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34761),iter__34758(cljs.core.chunk_rest(s__34759__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34761),null);
}
} else
{var vec__34765 = cljs.core.first(s__34759__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34765,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34765,idx,pc,s__34759__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$629,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650),cljs.core.constant$keyword$749,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650))].join('')], 0));
});})(vec__34765,idx,pc,s__34759__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)),iter__34758(cljs.core.rest(s__34759__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__34766(s__34767){return (new cljs.core.LazySeq(null,(function (){var s__34767__$1 = s__34767;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34767__$1);if(temp__4092__auto__)
{var s__34767__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34767__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34767__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34769 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34768 = 0;while(true){
if((i__34768 < size__4157__auto__))
{var vec__34772 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34768);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34772,1,null);cljs.core.chunk_append(b__34769,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34768,vec__34772,idx,inv,c__4156__auto__,size__4157__auto__,b__34769,s__34767__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$630,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654),cljs.core.constant$keyword$749,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654))].join('')], 0));
});})(i__34768,vec__34772,idx,inv,c__4156__auto__,size__4157__auto__,b__34769,s__34767__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)));
{
var G__34776 = (i__34768 + 1);
i__34768 = G__34776;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34769),iter__34766(cljs.core.chunk_rest(s__34767__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34769),null);
}
} else
{var vec__34773 = cljs.core.first(s__34767__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34773,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34773,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34773,idx,inv,s__34767__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$630,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654),cljs.core.constant$keyword$749,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654))].join('')], 0));
});})(vec__34773,idx,inv,s__34767__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)),iter__34766(cljs.core.rest(s__34767__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_invs);
})()):null)], null)], null);
})():null)));
});
clustermap.components.search.t34747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34749){var self__ = this;
var _34749__$1 = this;return self__.meta34748;
});
clustermap.components.search.t34747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34749,meta34748__$1){var self__ = this;
var _34749__$1 = this;return (new clustermap.components.search.t34747(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.p__34711,self__.comm,self__.selection_type,self__.map__34746,self__.owner,self__.constituencies,self__.search_results,self__.map__34745,self__.map__34744,self__.map__34743,meta34748__$1));
});
clustermap.components.search.__GT_t34747 = (function __GT_t34747(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__34711__$1,comm__$1,selection_type__$1,map__34746__$2,owner__$1,constituencies__$1,search_results__$1,map__34745__$2,map__34744__$2,map__34743__$2,meta34748){return (new clustermap.components.search.t34747(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__34711__$1,comm__$1,selection_type__$1,map__34746__$2,owner__$1,constituencies__$1,search_results__$1,map__34745__$2,map__34744__$2,map__34743__$2,meta34748));
});
}
return (new clustermap.components.search.t34747(investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__34711,comm,selection_type,map__34746__$1,owner,constituencies,search_results,map__34745__$1,map__34744__$1,map__34743__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
