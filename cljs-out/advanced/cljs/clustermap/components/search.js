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
clustermap.components.search.search_result_link = (function search_result_link(p__34603,owner,p__34604){var map__34613 = p__34603;var map__34613__$1 = ((cljs.core.seq_QMARK_(map__34613))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34613):map__34613);var search_result = map__34613__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34613__$1,cljs.core.constant$keyword$584);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34613__$1,cljs.core.constant$keyword$594);var map__34614 = p__34604;var map__34614__$1 = ((cljs.core.seq_QMARK_(map__34614))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34614):map__34614);var opts = map__34614__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34614__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34614__$1,cljs.core.constant$keyword$633);if(typeof clustermap.components.search.t34615 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34615 = (function (opts,map__34613,path_fn,name,comm,search_result,owner,p__34604,p__34603,map__34614,type,search_result_link,meta34616){
this.opts = opts;
this.map__34613 = map__34613;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.p__34604 = p__34604;
this.p__34603 = p__34603;
this.map__34614 = map__34614;
this.type = type;
this.search_result_link = search_result_link;
this.meta34616 = meta34616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34615.cljs$lang$type = true;
clustermap.components.search.t34615.cljs$lang$ctorStr = "clustermap.components.search/t34615";
clustermap.components.search.t34615.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34615");
});
clustermap.components.search.t34615.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34615.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__34618){var self__ = this;
var map__34619 = p__34618;var map__34619__$1 = ((cljs.core.seq_QMARK_(map__34619))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34619):map__34619);var state = map__34619__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34619__$1,cljs.core.constant$keyword$599);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__34620 = l;var G__34620__$1 = (((G__34620 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34620));var G__34620__$2 = (((G__34620__$1 == null))?null:G__34620__$1.parents(".search-component"));var G__34620__$3 = (((G__34620__$2 == null))?null:G__34620__$2.toggle());return G__34620__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t34615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34617){var self__ = this;
var _34617__$1 = this;return self__.meta34616;
});
clustermap.components.search.t34615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34617,meta34616__$1){var self__ = this;
var _34617__$1 = this;return (new clustermap.components.search.t34615(self__.opts,self__.map__34613,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.p__34604,self__.p__34603,self__.map__34614,self__.type,self__.search_result_link,meta34616__$1));
});
clustermap.components.search.__GT_t34615 = (function __GT_t34615(opts__$1,map__34613__$2,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__34604__$1,p__34603__$1,map__34614__$2,type__$1,search_result_link__$1,meta34616){return (new clustermap.components.search.t34615(opts__$1,map__34613__$2,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__34604__$1,p__34603__$1,map__34614__$2,type__$1,search_result_link__$1,meta34616));
});
}
return (new clustermap.components.search.t34615(opts,map__34613__$1,path_fn,name,comm,search_result,owner,p__34604,p__34603,map__34614__$1,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__34621,n){var map__34623 = p__34621;var map__34623__$1 = ((cljs.core.seq_QMARK_(map__34623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34623):map__34623);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34623__$1,cljs.core.constant$keyword$686);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34623__$1,cljs.core.constant$keyword$744);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34623__$1,cljs.core.constant$keyword$676);var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__34630 = cljs.core._EQ__EQ_;var expr__34631 = e.keyCode;if(cljs.core.truth_((pred__34630.cljs$core$IFn$_invoke$arity$2 ? pred__34630.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__34631) : pred__34630.call(null,clustermap.components.search.ESCAPE_KEY,expr__34631))))
{var G__34633 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34633__$1 = (((G__34633 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34633));var G__34633__$2 = (((G__34633__$1 == null))?null:G__34633__$1.toggle());return G__34633__$2;
} else
{if(cljs.core.truth_((pred__34630.cljs$core$IFn$_invoke$arity$2 ? pred__34630.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__34631) : pred__34630.call(null,clustermap.components.search.ENTER_KEY,expr__34631))))
{var vec__34634 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$745);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34634,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34634,1,null);var G__34635_34636 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34635_34637__$1 = (((G__34635_34636 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34635_34636));var G__34635_34638__$2 = (((G__34635_34637__$1 == null))?null:G__34635_34637__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__34630.cljs$core$IFn$_invoke$arity$2 ? pred__34630.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__34631) : pred__34630.call(null,clustermap.components.search.UP_ARROW,expr__34631))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$745,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$745);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__34630.cljs$core$IFn$_invoke$arity$2 ? pred__34630.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__34631) : pred__34630.call(null,clustermap.components.search.DOWN_ARROW,expr__34631))))
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
clustermap.components.search.search_component = (function search_component(p__34639,owner){var map__34671 = p__34639;var map__34671__$1 = ((cljs.core.seq_QMARK_(map__34671))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34671):map__34671);var map__34672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34671__$1,cljs.core.constant$keyword$639);var map__34672__$1 = ((cljs.core.seq_QMARK_(map__34672))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34672):map__34672);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34672__$1,cljs.core.constant$keyword$584);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34672__$1,cljs.core.constant$keyword$545);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34671__$1,cljs.core.constant$keyword$746);var map__34673 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34673__$1 = ((cljs.core.seq_QMARK_(map__34673))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34673):map__34673);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34673__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34673__$1,cljs.core.constant$keyword$633);var map__34674 = search_results;var map__34674__$1 = ((cljs.core.seq_QMARK_(map__34674))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34674):map__34674);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34674__$1,cljs.core.constant$keyword$686);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34674__$1,cljs.core.constant$keyword$744);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34674__$1,cljs.core.constant$keyword$676);if(typeof clustermap.components.search.t34675 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34675 = (function (p__34639,investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,map__34674,map__34672,map__34673,search_results,map__34671,meta34676){
this.p__34639 = p__34639;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.map__34674 = map__34674;
this.map__34672 = map__34672;
this.map__34673 = map__34673;
this.search_results = search_results;
this.map__34671 = map__34671;
this.meta34676 = meta34676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34675.cljs$lang$type = true;
clustermap.components.search.t34675.cljs$lang$ctorStr = "clustermap.components.search/t34675";
clustermap.components.search.t34675.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34675");
});
clustermap.components.search.t34675.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34675.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$745.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$745,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$588,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34678(s__34679){return (new cljs.core.LazySeq(null,(function (){var s__34679__$1 = s__34679;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34679__$1);if(temp__4092__auto__)
{var s__34679__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34679__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34679__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34681 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34680 = 0;while(true){
if((i__34680 < size__4157__auto__))
{var vec__34684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34680);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34684,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34684,1,null);cljs.core.chunk_append(b__34681,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34680,vec__34684,idx,con,c__4156__auto__,size__4157__auto__,b__34681,s__34679__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$631,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656),cljs.core.constant$keyword$749,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656))].join('')], 0));
});})(i__34680,vec__34684,idx,con,c__4156__auto__,size__4157__auto__,b__34681,s__34679__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)));
{
var G__34702 = (i__34680 + 1);
i__34680 = G__34702;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34681),iter__34678(cljs.core.chunk_rest(s__34679__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34681),null);
}
} else
{var vec__34685 = cljs.core.first(s__34679__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34685,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34685,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34685,idx,con,s__34679__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$631,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656),cljs.core.constant$keyword$749,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656))].join('')], 0));
});})(vec__34685,idx,con,s__34679__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)),iter__34678(cljs.core.rest(s__34679__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34686(s__34687){return (new cljs.core.LazySeq(null,(function (){var s__34687__$1 = s__34687;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34687__$1);if(temp__4092__auto__)
{var s__34687__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34687__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34687__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34689 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34688 = 0;while(true){
if((i__34688 < size__4157__auto__))
{var vec__34692 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34688);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34692,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34692,1,null);cljs.core.chunk_append(b__34689,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34688,vec__34692,idx,pc,c__4156__auto__,size__4157__auto__,b__34689,s__34687__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$629,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650),cljs.core.constant$keyword$749,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650))].join('')], 0));
});})(i__34688,vec__34692,idx,pc,c__4156__auto__,size__4157__auto__,b__34689,s__34687__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)));
{
var G__34703 = (i__34688 + 1);
i__34688 = G__34703;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34689),iter__34686(cljs.core.chunk_rest(s__34687__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34689),null);
}
} else
{var vec__34693 = cljs.core.first(s__34687__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34693,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34693,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34693,idx,pc,s__34687__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$629,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650),cljs.core.constant$keyword$749,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650))].join('')], 0));
});})(vec__34693,idx,pc,s__34687__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)),iter__34686(cljs.core.rest(s__34687__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$748,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__34694(s__34695){return (new cljs.core.LazySeq(null,(function (){var s__34695__$1 = s__34695;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34695__$1);if(temp__4092__auto__)
{var s__34695__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34695__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34695__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34697 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34696 = 0;while(true){
if((i__34696 < size__4157__auto__))
{var vec__34700 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34696);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34700,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34700,1,null);cljs.core.chunk_append(b__34697,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34696,vec__34700,idx,inv,c__4156__auto__,size__4157__auto__,b__34697,s__34695__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$630,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654),cljs.core.constant$keyword$749,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654))].join('')], 0));
});})(i__34696,vec__34700,idx,inv,c__4156__auto__,size__4157__auto__,b__34697,s__34695__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)));
{
var G__34704 = (i__34696 + 1);
i__34696 = G__34704;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34697),iter__34694(cljs.core.chunk_rest(s__34695__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34697),null);
}
} else
{var vec__34701 = cljs.core.first(s__34695__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34701,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34701,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34701,idx,inv,s__34695__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$630,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654),cljs.core.constant$keyword$749,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654))].join('')], 0));
});})(vec__34701,idx,inv,s__34695__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$749], null)),iter__34694(cljs.core.rest(s__34695__$2)));
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
clustermap.components.search.t34675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34677){var self__ = this;
var _34677__$1 = this;return self__.meta34676;
});
clustermap.components.search.t34675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34677,meta34676__$1){var self__ = this;
var _34677__$1 = this;return (new clustermap.components.search.t34675(self__.p__34639,self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.map__34674,self__.map__34672,self__.map__34673,self__.search_results,self__.map__34671,meta34676__$1));
});
clustermap.components.search.__GT_t34675 = (function __GT_t34675(p__34639__$1,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__34674__$2,map__34672__$2,map__34673__$2,search_results__$1,map__34671__$2,meta34676){return (new clustermap.components.search.t34675(p__34639__$1,investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__34674__$2,map__34672__$2,map__34673__$2,search_results__$1,map__34671__$2,meta34676));
});
}
return (new clustermap.components.search.t34675(p__34639,investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,map__34674__$1,map__34672__$1,map__34673__$1,search_results,map__34671__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
