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
clustermap.components.search.search_result_link = (function search_result_link(p__34687,owner,p__34688){var map__34697 = p__34687;var map__34697__$1 = ((cljs.core.seq_QMARK_(map__34697))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34697):map__34697);var search_result = map__34697__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34697__$1,cljs.core.constant$keyword$584);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34697__$1,cljs.core.constant$keyword$594);var map__34698 = p__34688;var map__34698__$1 = ((cljs.core.seq_QMARK_(map__34698))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34698):map__34698);var opts = map__34698__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34698__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34698__$1,cljs.core.constant$keyword$633);if(typeof clustermap.components.search.t34699 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34699 = (function (opts,path_fn,map__34698,map__34697,name,comm,search_result,p__34687,owner,p__34688,type,search_result_link,meta34700){
this.opts = opts;
this.path_fn = path_fn;
this.map__34698 = map__34698;
this.map__34697 = map__34697;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.p__34687 = p__34687;
this.owner = owner;
this.p__34688 = p__34688;
this.type = type;
this.search_result_link = search_result_link;
this.meta34700 = meta34700;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34699.cljs$lang$type = true;
clustermap.components.search.t34699.cljs$lang$ctorStr = "clustermap.components.search/t34699";
clustermap.components.search.t34699.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34699");
});
clustermap.components.search.t34699.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34699.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__34702){var self__ = this;
var map__34703 = p__34702;var map__34703__$1 = ((cljs.core.seq_QMARK_(map__34703))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34703):map__34703);var state = map__34703__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34703__$1,cljs.core.constant$keyword$599);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__34704 = l;var G__34704__$1 = (((G__34704 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34704));var G__34704__$2 = (((G__34704__$1 == null))?null:G__34704__$1.parents(".search-component"));var G__34704__$3 = (((G__34704__$2 == null))?null:G__34704__$2.toggle());return G__34704__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t34699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34701){var self__ = this;
var _34701__$1 = this;return self__.meta34700;
});
clustermap.components.search.t34699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34701,meta34700__$1){var self__ = this;
var _34701__$1 = this;return (new clustermap.components.search.t34699(self__.opts,self__.path_fn,self__.map__34698,self__.map__34697,self__.name,self__.comm,self__.search_result,self__.p__34687,self__.owner,self__.p__34688,self__.type,self__.search_result_link,meta34700__$1));
});
clustermap.components.search.__GT_t34699 = (function __GT_t34699(opts__$1,path_fn__$1,map__34698__$2,map__34697__$2,name__$1,comm__$1,search_result__$1,p__34687__$1,owner__$1,p__34688__$1,type__$1,search_result_link__$1,meta34700){return (new clustermap.components.search.t34699(opts__$1,path_fn__$1,map__34698__$2,map__34697__$2,name__$1,comm__$1,search_result__$1,p__34687__$1,owner__$1,p__34688__$1,type__$1,search_result_link__$1,meta34700));
});
}
return (new clustermap.components.search.t34699(opts,path_fn,map__34698__$1,map__34697__$1,name,comm,search_result,p__34687,owner,p__34688,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__34705,n){var map__34707 = p__34705;var map__34707__$1 = ((cljs.core.seq_QMARK_(map__34707))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34707):map__34707);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34707__$1,cljs.core.constant$keyword$686);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34707__$1,cljs.core.constant$keyword$746);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34707__$1,cljs.core.constant$keyword$676);var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__34714 = cljs.core._EQ__EQ_;var expr__34715 = e.keyCode;if(cljs.core.truth_((pred__34714.cljs$core$IFn$_invoke$arity$2 ? pred__34714.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__34715) : pred__34714.call(null,clustermap.components.search.ESCAPE_KEY,expr__34715))))
{var G__34717 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34717__$1 = (((G__34717 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34717));var G__34717__$2 = (((G__34717__$1 == null))?null:G__34717__$1.toggle());return G__34717__$2;
} else
{if(cljs.core.truth_((pred__34714.cljs$core$IFn$_invoke$arity$2 ? pred__34714.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__34715) : pred__34714.call(null,clustermap.components.search.ENTER_KEY,expr__34715))))
{var vec__34718 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$747);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34718,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34718,1,null);var G__34719_34720 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34719_34721__$1 = (((G__34719_34720 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34719_34720));var G__34719_34722__$2 = (((G__34719_34721__$1 == null))?null:G__34719_34721__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$600,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__34714.cljs$core$IFn$_invoke$arity$2 ? pred__34714.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__34715) : pred__34714.call(null,clustermap.components.search.UP_ARROW,expr__34715))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$747,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$747);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__34714.cljs$core$IFn$_invoke$arity$2 ? pred__34714.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__34715) : pred__34714.call(null,clustermap.components.search.DOWN_ARROW,expr__34715))))
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
clustermap.components.search.search_component = (function search_component(p__34723,owner){var map__34755 = p__34723;var map__34755__$1 = ((cljs.core.seq_QMARK_(map__34755))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34755):map__34755);var map__34756 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34755__$1,cljs.core.constant$keyword$639);var map__34756__$1 = ((cljs.core.seq_QMARK_(map__34756))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34756):map__34756);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34756__$1,cljs.core.constant$keyword$584);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34756__$1,cljs.core.constant$keyword$545);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34755__$1,cljs.core.constant$keyword$748);var map__34757 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34757__$1 = ((cljs.core.seq_QMARK_(map__34757))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34757):map__34757);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34757__$1,cljs.core.constant$keyword$632);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34757__$1,cljs.core.constant$keyword$633);var map__34758 = search_results;var map__34758__$1 = ((cljs.core.seq_QMARK_(map__34758))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34758):map__34758);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34758__$1,cljs.core.constant$keyword$686);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34758__$1,cljs.core.constant$keyword$746);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34758__$1,cljs.core.constant$keyword$676);if(typeof clustermap.components.search.t34759 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34759 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__34757,map__34758,comm,selection_type,map__34756,p__34723,map__34755,owner,constituencies,search_results,meta34760){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__34757 = map__34757;
this.map__34758 = map__34758;
this.comm = comm;
this.selection_type = selection_type;
this.map__34756 = map__34756;
this.p__34723 = p__34723;
this.map__34755 = map__34755;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.meta34760 = meta34760;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34759.cljs$lang$type = true;
clustermap.components.search.t34759.cljs$lang$ctorStr = "clustermap.components.search/t34759";
clustermap.components.search.t34759.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34759");
});
clustermap.components.search.t34759.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34759.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$749,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$749,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$749,""], null));
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
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$747.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$747,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$750,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$588,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$750,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34762(s__34763){return (new cljs.core.LazySeq(null,(function (){var s__34763__$1 = s__34763;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34763__$1);if(temp__4092__auto__)
{var s__34763__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34763__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34763__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34765 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34764 = 0;while(true){
if((i__34764 < size__4157__auto__))
{var vec__34768 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34764);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34768,1,null);cljs.core.chunk_append(b__34765,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34764,vec__34768,idx,con,c__4156__auto__,size__4157__auto__,b__34765,s__34763__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$631,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656),cljs.core.constant$keyword$751,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656))].join('')], 0));
});})(i__34764,vec__34768,idx,con,c__4156__auto__,size__4157__auto__,b__34765,s__34763__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$751], null)));
{
var G__34786 = (i__34764 + 1);
i__34764 = G__34786;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34765),iter__34762(cljs.core.chunk_rest(s__34763__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34765),null);
}
} else
{var vec__34769 = cljs.core.first(s__34763__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34769,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34769,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34769,idx,con,s__34763__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$631,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656),cljs.core.constant$keyword$751,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$656))].join('')], 0));
});})(vec__34769,idx,con,s__34763__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$751], null)),iter__34762(cljs.core.rest(s__34763__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$750,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34770(s__34771){return (new cljs.core.LazySeq(null,(function (){var s__34771__$1 = s__34771;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34771__$1);if(temp__4092__auto__)
{var s__34771__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34771__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34771__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34773 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34772 = 0;while(true){
if((i__34772 < size__4157__auto__))
{var vec__34776 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34772);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34776,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34776,1,null);cljs.core.chunk_append(b__34773,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34772,vec__34776,idx,pc,c__4156__auto__,size__4157__auto__,b__34773,s__34771__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$629,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650),cljs.core.constant$keyword$751,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650))].join('')], 0));
});})(i__34772,vec__34776,idx,pc,c__4156__auto__,size__4157__auto__,b__34773,s__34771__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$751], null)));
{
var G__34787 = (i__34772 + 1);
i__34772 = G__34787;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34773),iter__34770(cljs.core.chunk_rest(s__34771__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34773),null);
}
} else
{var vec__34777 = cljs.core.first(s__34771__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34777,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34777,idx,pc,s__34771__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$629,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650),cljs.core.constant$keyword$751,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$650))].join('')], 0));
});})(vec__34777,idx,pc,s__34771__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$751], null)),iter__34770(cljs.core.rest(s__34771__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$750,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$589,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$574,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__34778(s__34779){return (new cljs.core.LazySeq(null,(function (){var s__34779__$1 = s__34779;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34779__$1);if(temp__4092__auto__)
{var s__34779__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34779__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34779__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34781 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34780 = 0;while(true){
if((i__34780 < size__4157__auto__))
{var vec__34784 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34780);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34784,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34784,1,null);cljs.core.chunk_append(b__34781,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (i__34780,vec__34784,idx,inv,c__4156__auto__,size__4157__auto__,b__34781,s__34779__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$630,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654),cljs.core.constant$keyword$751,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654))].join('')], 0));
});})(i__34780,vec__34784,idx,inv,c__4156__auto__,size__4157__auto__,b__34781,s__34779__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$751], null)));
{
var G__34788 = (i__34780 + 1);
i__34780 = G__34788;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34781),iter__34778(cljs.core.chunk_rest(s__34779__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34781),null);
}
} else
{var vec__34785 = cljs.core.first(s__34779__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34785,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$620,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$633,self__.comm,cljs.core.constant$keyword$632,self__.path_fn], null),cljs.core.constant$keyword$614,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$599,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$621,((function (vec__34785,idx,inv,s__34779__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$584,cljs.core.constant$keyword$630,cljs.core.array_seq([cljs.core.constant$keyword$580,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654),cljs.core.constant$keyword$751,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$654))].join('')], 0));
});})(vec__34785,idx,inv,s__34779__$2,temp__4092__auto__))
,cljs.core.constant$keyword$617,cljs.core.constant$keyword$751], null)),iter__34778(cljs.core.rest(s__34779__$2)));
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
clustermap.components.search.t34759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34761){var self__ = this;
var _34761__$1 = this;return self__.meta34760;
});
clustermap.components.search.t34759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34761,meta34760__$1){var self__ = this;
var _34761__$1 = this;return (new clustermap.components.search.t34759(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__34757,self__.map__34758,self__.comm,self__.selection_type,self__.map__34756,self__.p__34723,self__.map__34755,self__.owner,self__.constituencies,self__.search_results,meta34760__$1));
});
clustermap.components.search.__GT_t34759 = (function __GT_t34759(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__34757__$2,map__34758__$2,comm__$1,selection_type__$1,map__34756__$2,p__34723__$1,map__34755__$2,owner__$1,constituencies__$1,search_results__$1,meta34760){return (new clustermap.components.search.t34759(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__34757__$2,map__34758__$2,comm__$1,selection_type__$1,map__34756__$2,p__34723__$1,map__34755__$2,owner__$1,constituencies__$1,search_results__$1,meta34760));
});
}
return (new clustermap.components.search.t34759(investor_companies,selection_value,path_fn,portfolio_companies,search_component,map__34757__$1,map__34758__$1,comm,selection_type,map__34756__$1,p__34723,map__34755__$1,owner,constituencies,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$619,shared,cljs.core.constant$keyword$624,document.getElementById(elem_id)], null));
});
