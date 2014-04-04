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
clustermap.components.search.search_result_link = (function search_result_link(p__34415,owner,p__34416){var map__34425 = p__34415;var map__34425__$1 = ((cljs.core.seq_QMARK_(map__34425))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34425):map__34425);var search_result = map__34425__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34425__$1,cljs.core.constant$keyword$586);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34425__$1,cljs.core.constant$keyword$596);var map__34426 = p__34416;var map__34426__$1 = ((cljs.core.seq_QMARK_(map__34426))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34426):map__34426);var opts = map__34426__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34426__$1,cljs.core.constant$keyword$634);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34426__$1,cljs.core.constant$keyword$635);if(typeof clustermap.components.search.t34427 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34427 = (function (opts,path_fn,name,comm,search_result,p__34416,owner,map__34426,type,map__34425,p__34415,search_result_link,meta34428){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.p__34416 = p__34416;
this.owner = owner;
this.map__34426 = map__34426;
this.type = type;
this.map__34425 = map__34425;
this.p__34415 = p__34415;
this.search_result_link = search_result_link;
this.meta34428 = meta34428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34427.cljs$lang$type = true;
clustermap.components.search.t34427.cljs$lang$ctorStr = "clustermap.components.search/t34427";
clustermap.components.search.t34427.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34427");
});
clustermap.components.search.t34427.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34427.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__34430){var self__ = this;
var map__34431 = p__34430;var map__34431__$1 = ((cljs.core.seq_QMARK_(map__34431))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34431):map__34431);var state = map__34431__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34431__$1,cljs.core.constant$keyword$601);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__34432 = l;var G__34432__$1 = (((G__34432 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34432));var G__34432__$2 = (((G__34432__$1 == null))?null:G__34432__$1.parents(".search-component"));var G__34432__$3 = (((G__34432__$2 == null))?null:G__34432__$2.toggle());return G__34432__$3;
})},sablono.interpreter.interpret(self__.name)));
});
clustermap.components.search.t34427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34429){var self__ = this;
var _34429__$1 = this;return self__.meta34428;
});
clustermap.components.search.t34427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34429,meta34428__$1){var self__ = this;
var _34429__$1 = this;return (new clustermap.components.search.t34427(self__.opts,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.p__34416,self__.owner,self__.map__34426,self__.type,self__.map__34425,self__.p__34415,self__.search_result_link,meta34428__$1));
});
clustermap.components.search.__GT_t34427 = (function __GT_t34427(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,p__34416__$1,owner__$1,map__34426__$2,type__$1,map__34425__$2,p__34415__$1,search_result_link__$1,meta34428){return (new clustermap.components.search.t34427(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,p__34416__$1,owner__$1,map__34426__$2,type__$1,map__34425__$2,p__34415__$1,search_result_link__$1,meta34428));
});
}
return (new clustermap.components.search.t34427(opts,path_fn,name,comm,search_result,p__34416,owner,map__34426__$1,type,map__34425__$1,p__34415,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__34433,n){var map__34435 = p__34433;var map__34435__$1 = ((cljs.core.seq_QMARK_(map__34435))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34435):map__34435);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34435__$1,cljs.core.constant$keyword$687);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34435__$1,cljs.core.constant$keyword$746);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34435__$1,cljs.core.constant$keyword$677);var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$631,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$632,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__34442 = cljs.core._EQ__EQ_;var expr__34443 = e.keyCode;if(cljs.core.truth_((pred__34442.cljs$core$IFn$_invoke$arity$2 ? pred__34442.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__34443) : pred__34442.call(null,clustermap.components.search.ESCAPE_KEY,expr__34443))))
{var G__34445 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34445__$1 = (((G__34445 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34445));var G__34445__$2 = (((G__34445__$1 == null))?null:G__34445__$1.toggle());return G__34445__$2;
} else
{if(cljs.core.truth_((pred__34442.cljs$core$IFn$_invoke$arity$2 ? pred__34442.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__34443) : pred__34442.call(null,clustermap.components.search.ENTER_KEY,expr__34443))))
{var vec__34446 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$747);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34446,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34446,1,null);var G__34447_34448 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34447_34449__$1 = (((G__34447_34448 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34447_34448));var G__34447_34450__$2 = (((G__34447_34449__$1 == null))?null:G__34447_34449__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$602,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__34442.cljs$core$IFn$_invoke$arity$2 ? pred__34442.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__34443) : pred__34442.call(null,clustermap.components.search.UP_ARROW,expr__34443))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$747,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$747);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__34442.cljs$core$IFn$_invoke$arity$2 ? pred__34442.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__34443) : pred__34442.call(null,clustermap.components.search.DOWN_ARROW,expr__34443))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$747,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$747);if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.search_component = (function search_component(p__34451,owner){var map__34483 = p__34451;var map__34483__$1 = ((cljs.core.seq_QMARK_(map__34483))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34483):map__34483);var map__34484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$642);var map__34484__$1 = ((cljs.core.seq_QMARK_(map__34484))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34484):map__34484);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34484__$1,cljs.core.constant$keyword$586);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34484__$1,cljs.core.constant$keyword$547);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$748);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34483__$1,cljs.core.constant$keyword$749);var map__34485 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34485__$1 = ((cljs.core.seq_QMARK_(map__34485))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34485):map__34485);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,cljs.core.constant$keyword$634);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34485__$1,cljs.core.constant$keyword$635);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__34486 = search_results;var map__34486__$1 = ((cljs.core.seq_QMARK_(map__34486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34486):map__34486);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$687);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$746);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34486__$1,cljs.core.constant$keyword$677);if(typeof clustermap.components.search.t34487 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34487 = (function (investor_companies,map__34485,map__34486,selection_value,path_fn,portfolio_companies,map__34484,p__34451,view,map__34483,search_component,comm,selection_type,owner,constituencies,search_results,meta34488){
this.investor_companies = investor_companies;
this.map__34485 = map__34485;
this.map__34486 = map__34486;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.map__34484 = map__34484;
this.p__34451 = p__34451;
this.view = view;
this.map__34483 = map__34483;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta34488 = meta34488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34487.cljs$lang$type = true;
clustermap.components.search.t34487.cljs$lang$ctorStr = "clustermap.components.search/t34487";
clustermap.components.search.t34487.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34487");
});
clustermap.components.search.t34487.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34487.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$750,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$750,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$750,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3441__auto__ = cljs.core.constant$keyword$747.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$747.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$747,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$751,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$576,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$590,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$751,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$576,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34490(s__34491){return (new cljs.core.LazySeq(null,(function (){var s__34491__$1 = s__34491;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34491__$1);if(temp__4092__auto__)
{var s__34491__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34491__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34491__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34493 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34492 = 0;while(true){
if((i__34492 < size__4157__auto__))
{var vec__34496 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34492);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34496,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34496,1,null);cljs.core.chunk_append(b__34493,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$622,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$635,self__.comm,cljs.core.constant$keyword$634,self__.path_fn], null),cljs.core.constant$keyword$616,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$623,((function (i__34492,vec__34496,idx,con,c__4156__auto__,size__4157__auto__,b__34493,s__34491__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$586,cljs.core.constant$keyword$633,cljs.core.array_seq([cljs.core.constant$keyword$582,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$657),cljs.core.constant$keyword$752,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$657))].join('')], 0));
});})(i__34492,vec__34496,idx,con,c__4156__auto__,size__4157__auto__,b__34493,s__34491__$2,temp__4092__auto__))
,cljs.core.constant$keyword$619,cljs.core.constant$keyword$752], null)));
{
var G__34514 = (i__34492 + 1);
i__34492 = G__34514;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34493),iter__34490(cljs.core.chunk_rest(s__34491__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34493),null);
}
} else
{var vec__34497 = cljs.core.first(s__34491__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34497,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34497,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$622,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$635,self__.comm,cljs.core.constant$keyword$634,self__.path_fn], null),cljs.core.constant$keyword$616,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$623,((function (vec__34497,idx,con,s__34491__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$586,cljs.core.constant$keyword$633,cljs.core.array_seq([cljs.core.constant$keyword$582,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$657),cljs.core.constant$keyword$752,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$657))].join('')], 0));
});})(vec__34497,idx,con,s__34491__$2,temp__4092__auto__))
,cljs.core.constant$keyword$619,cljs.core.constant$keyword$752], null)),iter__34490(cljs.core.rest(s__34491__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$751,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$576,"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34498(s__34499){return (new cljs.core.LazySeq(null,(function (){var s__34499__$1 = s__34499;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34499__$1);if(temp__4092__auto__)
{var s__34499__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34499__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34499__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34501 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34500 = 0;while(true){
if((i__34500 < size__4157__auto__))
{var vec__34504 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34500);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34504,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34504,1,null);cljs.core.chunk_append(b__34501,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$622,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$635,self__.comm,cljs.core.constant$keyword$634,self__.path_fn], null),cljs.core.constant$keyword$616,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$623,((function (i__34500,vec__34504,idx,pc,c__4156__auto__,size__4157__auto__,b__34501,s__34499__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$586,cljs.core.constant$keyword$631,cljs.core.array_seq([cljs.core.constant$keyword$582,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$694),cljs.core.constant$keyword$752,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$694))].join('')], 0));
});})(i__34500,vec__34504,idx,pc,c__4156__auto__,size__4157__auto__,b__34501,s__34499__$2,temp__4092__auto__))
,cljs.core.constant$keyword$619,cljs.core.constant$keyword$752], null)));
{
var G__34515 = (i__34500 + 1);
i__34500 = G__34515;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34501),iter__34498(cljs.core.chunk_rest(s__34499__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34501),null);
}
} else
{var vec__34505 = cljs.core.first(s__34499__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34505,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34505,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$622,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$635,self__.comm,cljs.core.constant$keyword$634,self__.path_fn], null),cljs.core.constant$keyword$616,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$623,((function (vec__34505,idx,pc,s__34499__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$586,cljs.core.constant$keyword$631,cljs.core.array_seq([cljs.core.constant$keyword$582,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$694),cljs.core.constant$keyword$752,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$694))].join('')], 0));
});})(vec__34505,idx,pc,s__34499__$2,temp__4092__auto__))
,cljs.core.constant$keyword$619,cljs.core.constant$keyword$752], null)),iter__34498(cljs.core.rest(s__34499__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$751,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$591,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$576,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__34506(s__34507){return (new cljs.core.LazySeq(null,(function (){var s__34507__$1 = s__34507;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34507__$1);if(temp__4092__auto__)
{var s__34507__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34507__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34507__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34509 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34508 = 0;while(true){
if((i__34508 < size__4157__auto__))
{var vec__34512 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34508);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34512,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34512,1,null);cljs.core.chunk_append(b__34509,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$622,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$635,self__.comm,cljs.core.constant$keyword$634,self__.path_fn], null),cljs.core.constant$keyword$616,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$623,((function (i__34508,vec__34512,idx,inv,c__4156__auto__,size__4157__auto__,b__34509,s__34507__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$586,cljs.core.constant$keyword$632,cljs.core.array_seq([cljs.core.constant$keyword$582,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$655),cljs.core.constant$keyword$752,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$655))].join('')], 0));
});})(i__34508,vec__34512,idx,inv,c__4156__auto__,size__4157__auto__,b__34509,s__34507__$2,temp__4092__auto__))
,cljs.core.constant$keyword$619,cljs.core.constant$keyword$752], null)));
{
var G__34516 = (i__34508 + 1);
i__34508 = G__34516;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34509),iter__34506(cljs.core.chunk_rest(s__34507__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34509),null);
}
} else
{var vec__34513 = cljs.core.first(s__34507__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34513,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34513,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$622,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$635,self__.comm,cljs.core.constant$keyword$634,self__.path_fn], null),cljs.core.constant$keyword$616,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$601,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$623,((function (vec__34513,idx,inv,s__34507__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$586,cljs.core.constant$keyword$632,cljs.core.array_seq([cljs.core.constant$keyword$582,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$655),cljs.core.constant$keyword$752,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$655))].join('')], 0));
});})(vec__34513,idx,inv,s__34507__$2,temp__4092__auto__))
,cljs.core.constant$keyword$619,cljs.core.constant$keyword$752], null)),iter__34506(cljs.core.rest(s__34507__$2)));
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
clustermap.components.search.t34487.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34489){var self__ = this;
var _34489__$1 = this;return self__.meta34488;
});
clustermap.components.search.t34487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34489,meta34488__$1){var self__ = this;
var _34489__$1 = this;return (new clustermap.components.search.t34487(self__.investor_companies,self__.map__34485,self__.map__34486,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.map__34484,self__.p__34451,self__.view,self__.map__34483,self__.search_component,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.search_results,meta34488__$1));
});
clustermap.components.search.__GT_t34487 = (function __GT_t34487(investor_companies__$1,map__34485__$2,map__34486__$2,selection_value__$1,path_fn__$2,portfolio_companies__$1,map__34484__$2,p__34451__$1,view__$1,map__34483__$2,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta34488){return (new clustermap.components.search.t34487(investor_companies__$1,map__34485__$2,map__34486__$2,selection_value__$1,path_fn__$2,portfolio_companies__$1,map__34484__$2,p__34451__$1,view__$1,map__34483__$2,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,search_results__$1,meta34488));
});
}
return (new clustermap.components.search.t34487(investor_companies,map__34485__$1,map__34486__$1,selection_value,path_fn__$1,portfolio_companies,map__34484__$1,p__34451,view,map__34483__$1,search_component,comm,selection_type,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$621,shared,cljs.core.constant$keyword$626,document.getElementById(elem_id)], null));
});
