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
clustermap.components.search.search_result_link = (function search_result_link(p__34613,owner,p__34614){var map__34623 = p__34613;var map__34623__$1 = ((cljs.core.seq_QMARK_(map__34623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34623):map__34623);var search_result = map__34623__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34623__$1,cljs.core.constant$keyword$582);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34623__$1,cljs.core.constant$keyword$592);var map__34624 = p__34614;var map__34624__$1 = ((cljs.core.seq_QMARK_(map__34624))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34624):map__34624);var opts = map__34624__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34624__$1,cljs.core.constant$keyword$630);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34624__$1,cljs.core.constant$keyword$631);if(typeof clustermap.components.search.t34625 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34625 = (function (opts,path_fn,name,comm,p__34614,search_result,owner,map__34624,p__34613,map__34623,type,search_result_link,meta34626){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.p__34614 = p__34614;
this.search_result = search_result;
this.owner = owner;
this.map__34624 = map__34624;
this.p__34613 = p__34613;
this.map__34623 = map__34623;
this.type = type;
this.search_result_link = search_result_link;
this.meta34626 = meta34626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34625.cljs$lang$type = true;
clustermap.components.search.t34625.cljs$lang$ctorStr = "clustermap.components.search/t34625";
clustermap.components.search.t34625.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34625");
});
clustermap.components.search.t34625.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34625.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__34628){var self__ = this;
var map__34629 = p__34628;var map__34629__$1 = ((cljs.core.seq_QMARK_(map__34629))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34629):map__34629);var state = map__34629__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34629__$1,cljs.core.constant$keyword$597);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__34630 = l;var G__34630__$1 = (((G__34630 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34630));var G__34630__$2 = (((G__34630__$1 == null))?null:G__34630__$1.parents(".search-component"));var G__34630__$3 = (((G__34630__$2 == null))?null:G__34630__$2.toggle());return G__34630__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t34625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34627){var self__ = this;
var _34627__$1 = this;return self__.meta34626;
});
clustermap.components.search.t34625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34627,meta34626__$1){var self__ = this;
var _34627__$1 = this;return (new clustermap.components.search.t34625(self__.opts,self__.path_fn,self__.name,self__.comm,self__.p__34614,self__.search_result,self__.owner,self__.map__34624,self__.p__34613,self__.map__34623,self__.type,self__.search_result_link,meta34626__$1));
});
clustermap.components.search.__GT_t34625 = (function __GT_t34625(opts__$1,path_fn__$1,name__$1,comm__$1,p__34614__$1,search_result__$1,owner__$1,map__34624__$2,p__34613__$1,map__34623__$2,type__$1,search_result_link__$1,meta34626){return (new clustermap.components.search.t34625(opts__$1,path_fn__$1,name__$1,comm__$1,p__34614__$1,search_result__$1,owner__$1,map__34624__$2,p__34613__$1,map__34623__$2,type__$1,search_result_link__$1,meta34626));
});
}
return (new clustermap.components.search.t34625(opts,path_fn,name,comm,p__34614,search_result,owner,map__34624__$1,p__34613,map__34623__$1,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__34631,n){var map__34633 = p__34631;var map__34633__$1 = ((cljs.core.seq_QMARK_(map__34633))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34633):map__34633);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34633__$1,cljs.core.constant$keyword$682);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34633__$1,cljs.core.constant$keyword$741);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34633__$1,cljs.core.constant$keyword$672);var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$629,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$627,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$628,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__34640 = cljs.core._EQ__EQ_;var expr__34641 = e.keyCode;if(cljs.core.truth_((pred__34640.cljs$core$IFn$_invoke$arity$2 ? pred__34640.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__34641) : pred__34640.call(null,clustermap.components.search.ESCAPE_KEY,expr__34641))))
{var G__34643 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34643__$1 = (((G__34643 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34643));var G__34643__$2 = (((G__34643__$1 == null))?null:G__34643__$1.toggle());return G__34643__$2;
} else
{if(cljs.core.truth_((pred__34640.cljs$core$IFn$_invoke$arity$2 ? pred__34640.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__34641) : pred__34640.call(null,clustermap.components.search.ENTER_KEY,expr__34641))))
{var vec__34644 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$742);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34644,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34644,1,null);var G__34645_34646 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34645_34647__$1 = (((G__34645_34646 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34645_34646));var G__34645_34648__$2 = (((G__34645_34647__$1 == null))?null:G__34645_34647__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$598,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__34640.cljs$core$IFn$_invoke$arity$2 ? pred__34640.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__34641) : pred__34640.call(null,clustermap.components.search.UP_ARROW,expr__34641))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$742,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$742);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__34640.cljs$core$IFn$_invoke$arity$2 ? pred__34640.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__34641) : pred__34640.call(null,clustermap.components.search.DOWN_ARROW,expr__34641))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$742,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$742);if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.search_component = (function search_component(p__34649,owner){var map__34681 = p__34649;var map__34681__$1 = ((cljs.core.seq_QMARK_(map__34681))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34681):map__34681);var map__34682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34681__$1,cljs.core.constant$keyword$637);var map__34682__$1 = ((cljs.core.seq_QMARK_(map__34682))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34682):map__34682);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34682__$1,cljs.core.constant$keyword$582);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34682__$1,cljs.core.constant$keyword$543);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34681__$1,cljs.core.constant$keyword$743);var map__34683 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34683__$1 = ((cljs.core.seq_QMARK_(map__34683))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34683):map__34683);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34683__$1,cljs.core.constant$keyword$630);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34683__$1,cljs.core.constant$keyword$631);var map__34684 = search_results;var map__34684__$1 = ((cljs.core.seq_QMARK_(map__34684))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34684):map__34684);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34684__$1,cljs.core.constant$keyword$682);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34684__$1,cljs.core.constant$keyword$741);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34684__$1,cljs.core.constant$keyword$672);if(typeof clustermap.components.search.t34685 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34685 = (function (map__34683,investor_companies,map__34684,selection_value,path_fn,map__34682,portfolio_companies,map__34681,search_component,comm,selection_type,owner,constituencies,p__34649,search_results,meta34686){
this.map__34683 = map__34683;
this.investor_companies = investor_companies;
this.map__34684 = map__34684;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.map__34682 = map__34682;
this.portfolio_companies = portfolio_companies;
this.map__34681 = map__34681;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.p__34649 = p__34649;
this.search_results = search_results;
this.meta34686 = meta34686;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34685.cljs$lang$type = true;
clustermap.components.search.t34685.cljs$lang$ctorStr = "clustermap.components.search/t34685";
clustermap.components.search.t34685.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34685");
});
clustermap.components.search.t34685.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34685.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$744,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$744,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$744,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3441__auto__ = cljs.core.constant$keyword$742.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$742.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$742,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$745,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$586,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$745,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34688(s__34689){return (new cljs.core.LazySeq(null,(function (){var s__34689__$1 = s__34689;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34689__$1);if(temp__4092__auto__)
{var s__34689__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34689__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34689__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34691 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34690 = 0;while(true){
if((i__34690 < size__4157__auto__))
{var vec__34694 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34690);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34694,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34694,1,null);cljs.core.chunk_append(b__34691,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$631,self__.comm,cljs.core.constant$keyword$630,self__.path_fn], null),cljs.core.constant$keyword$612,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$597,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$619,((function (i__34690,vec__34694,idx,con,c__4156__auto__,size__4157__auto__,b__34691,s__34689__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$582,cljs.core.constant$keyword$629,cljs.core.array_seq([cljs.core.constant$keyword$578,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$652),cljs.core.constant$keyword$746,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$652))].join('')], 0));
});})(i__34690,vec__34694,idx,con,c__4156__auto__,size__4157__auto__,b__34691,s__34689__$2,temp__4092__auto__))
,cljs.core.constant$keyword$615,cljs.core.constant$keyword$746], null)));
{
var G__34712 = (i__34690 + 1);
i__34690 = G__34712;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34691),iter__34688(cljs.core.chunk_rest(s__34689__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34691),null);
}
} else
{var vec__34695 = cljs.core.first(s__34689__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34695,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34695,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$631,self__.comm,cljs.core.constant$keyword$630,self__.path_fn], null),cljs.core.constant$keyword$612,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$597,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$619,((function (vec__34695,idx,con,s__34689__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$582,cljs.core.constant$keyword$629,cljs.core.array_seq([cljs.core.constant$keyword$578,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$652),cljs.core.constant$keyword$746,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$652))].join('')], 0));
});})(vec__34695,idx,con,s__34689__$2,temp__4092__auto__))
,cljs.core.constant$keyword$615,cljs.core.constant$keyword$746], null)),iter__34688(cljs.core.rest(s__34689__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$745,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34696(s__34697){return (new cljs.core.LazySeq(null,(function (){var s__34697__$1 = s__34697;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34697__$1);if(temp__4092__auto__)
{var s__34697__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34697__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34697__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34699 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34698 = 0;while(true){
if((i__34698 < size__4157__auto__))
{var vec__34702 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34698);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34702,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34702,1,null);cljs.core.chunk_append(b__34699,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$631,self__.comm,cljs.core.constant$keyword$630,self__.path_fn], null),cljs.core.constant$keyword$612,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$597,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$619,((function (i__34698,vec__34702,idx,pc,c__4156__auto__,size__4157__auto__,b__34699,s__34697__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$582,cljs.core.constant$keyword$627,cljs.core.array_seq([cljs.core.constant$keyword$578,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$689),cljs.core.constant$keyword$746,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$689))].join('')], 0));
});})(i__34698,vec__34702,idx,pc,c__4156__auto__,size__4157__auto__,b__34699,s__34697__$2,temp__4092__auto__))
,cljs.core.constant$keyword$615,cljs.core.constant$keyword$746], null)));
{
var G__34713 = (i__34698 + 1);
i__34698 = G__34713;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34699),iter__34696(cljs.core.chunk_rest(s__34697__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34699),null);
}
} else
{var vec__34703 = cljs.core.first(s__34697__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34703,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$631,self__.comm,cljs.core.constant$keyword$630,self__.path_fn], null),cljs.core.constant$keyword$612,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$597,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$619,((function (vec__34703,idx,pc,s__34697__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$582,cljs.core.constant$keyword$627,cljs.core.array_seq([cljs.core.constant$keyword$578,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$689),cljs.core.constant$keyword$746,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$689))].join('')], 0));
});})(vec__34703,idx,pc,s__34697__$2,temp__4092__auto__))
,cljs.core.constant$keyword$615,cljs.core.constant$keyword$746], null)),iter__34696(cljs.core.rest(s__34697__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$745,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$587,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$572,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__34704(s__34705){return (new cljs.core.LazySeq(null,(function (){var s__34705__$1 = s__34705;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34705__$1);if(temp__4092__auto__)
{var s__34705__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34705__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34705__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34707 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34706 = 0;while(true){
if((i__34706 < size__4157__auto__))
{var vec__34710 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34706);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34710,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34710,1,null);cljs.core.chunk_append(b__34707,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$631,self__.comm,cljs.core.constant$keyword$630,self__.path_fn], null),cljs.core.constant$keyword$612,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$597,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$619,((function (i__34706,vec__34710,idx,inv,c__4156__auto__,size__4157__auto__,b__34707,s__34705__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$582,cljs.core.constant$keyword$628,cljs.core.array_seq([cljs.core.constant$keyword$578,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650),cljs.core.constant$keyword$746,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650))].join('')], 0));
});})(i__34706,vec__34710,idx,inv,c__4156__auto__,size__4157__auto__,b__34707,s__34705__$2,temp__4092__auto__))
,cljs.core.constant$keyword$615,cljs.core.constant$keyword$746], null)));
{
var G__34714 = (i__34706 + 1);
i__34706 = G__34714;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34707),iter__34704(cljs.core.chunk_rest(s__34705__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34707),null);
}
} else
{var vec__34711 = cljs.core.first(s__34705__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34711,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34711,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$631,self__.comm,cljs.core.constant$keyword$630,self__.path_fn], null),cljs.core.constant$keyword$612,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$597,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$619,((function (vec__34711,idx,inv,s__34705__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$582,cljs.core.constant$keyword$628,cljs.core.array_seq([cljs.core.constant$keyword$578,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650),cljs.core.constant$keyword$746,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650))].join('')], 0));
});})(vec__34711,idx,inv,s__34705__$2,temp__4092__auto__))
,cljs.core.constant$keyword$615,cljs.core.constant$keyword$746], null)),iter__34704(cljs.core.rest(s__34705__$2)));
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
clustermap.components.search.t34685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34687){var self__ = this;
var _34687__$1 = this;return self__.meta34686;
});
clustermap.components.search.t34685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34687,meta34686__$1){var self__ = this;
var _34687__$1 = this;return (new clustermap.components.search.t34685(self__.map__34683,self__.investor_companies,self__.map__34684,self__.selection_value,self__.path_fn,self__.map__34682,self__.portfolio_companies,self__.map__34681,self__.search_component,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.p__34649,self__.search_results,meta34686__$1));
});
clustermap.components.search.__GT_t34685 = (function __GT_t34685(map__34683__$2,investor_companies__$1,map__34684__$2,selection_value__$1,path_fn__$1,map__34682__$2,portfolio_companies__$1,map__34681__$2,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__34649__$1,search_results__$1,meta34686){return (new clustermap.components.search.t34685(map__34683__$2,investor_companies__$1,map__34684__$2,selection_value__$1,path_fn__$1,map__34682__$2,portfolio_companies__$1,map__34681__$2,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__34649__$1,search_results__$1,meta34686));
});
}
return (new clustermap.components.search.t34685(map__34683__$1,investor_companies,map__34684__$1,selection_value,path_fn,map__34682__$1,portfolio_companies,map__34681__$1,search_component,comm,selection_type,owner,constituencies,p__34649,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$617,shared,cljs.core.constant$keyword$622,document.getElementById(elem_id)], null));
});
