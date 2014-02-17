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
clustermap.components.search.search_result_link = (function search_result_link(p__22781,owner,p__22782){var map__22791 = p__22781;var map__22791__$1 = ((cljs.core.seq_QMARK_(map__22791))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22791):map__22791);var search_result = map__22791__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22791__$1,cljs.core.constant$keyword$264);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22791__$1,cljs.core.constant$keyword$274);var map__22792 = p__22782;var map__22792__$1 = ((cljs.core.seq_QMARK_(map__22792))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22792):map__22792);var opts = map__22792__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.constant$keyword$304);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22792__$1,cljs.core.constant$keyword$300);if(typeof clustermap.components.search.t22793 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22793 = (function (opts,path_fn,map__22792,map__22791,p__22782,name,comm,p__22781,search_result,owner,type,search_result_link,meta22794){
this.opts = opts;
this.path_fn = path_fn;
this.map__22792 = map__22792;
this.map__22791 = map__22791;
this.p__22782 = p__22782;
this.name = name;
this.comm = comm;
this.p__22781 = p__22781;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta22794 = meta22794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22793.cljs$lang$type = true;
clustermap.components.search.t22793.cljs$lang$ctorStr = "clustermap.components.search/t22793";
clustermap.components.search.t22793.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22793");
});
clustermap.components.search.t22793.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22793.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__22796){var self__ = this;
var map__22797 = p__22796;var map__22797__$1 = ((cljs.core.seq_QMARK_(map__22797))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22797):map__22797);var state = map__22797__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22797__$1,cljs.core.constant$keyword$279);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22798 = l;var G__22798__$1 = (((G__22798 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22798));var G__22798__$2 = (((G__22798__$1 == null))?null:G__22798__$1.parents(".search-component"));var G__22798__$3 = (((G__22798__$2 == null))?null:G__22798__$2.toggle());return G__22798__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t22793.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22795){var self__ = this;
var _22795__$1 = this;return self__.meta22794;
});
clustermap.components.search.t22793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22795,meta22794__$1){var self__ = this;
var _22795__$1 = this;return (new clustermap.components.search.t22793(self__.opts,self__.path_fn,self__.map__22792,self__.map__22791,self__.p__22782,self__.name,self__.comm,self__.p__22781,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta22794__$1));
});
clustermap.components.search.__GT_t22793 = (function __GT_t22793(opts__$1,path_fn__$1,map__22792__$2,map__22791__$2,p__22782__$1,name__$1,comm__$1,p__22781__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta22794){return (new clustermap.components.search.t22793(opts__$1,path_fn__$1,map__22792__$2,map__22791__$2,p__22782__$1,name__$1,comm__$1,p__22781__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta22794));
});
}
return (new clustermap.components.search.t22793(opts,path_fn,map__22792__$1,map__22791__$1,p__22782,name,comm,p__22781,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22799,n){var map__22801 = p__22799;var map__22801__$1 = ((cljs.core.seq_QMARK_(map__22801))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22801):map__22801);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,cljs.core.constant$keyword$307);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,cljs.core.constant$keyword$387);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22801__$1,cljs.core.constant$keyword$324);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$299,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$297,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$298,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22808 = cljs.core._EQ__EQ_;var expr__22809 = e.keyCode;if(cljs.core.truth_((pred__22808.cljs$core$IFn$_invoke$arity$2 ? pred__22808.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22809) : pred__22808.call(null,clustermap.components.search.ESCAPE_KEY,expr__22809))))
{var G__22811 = om.core.get_node(owner,"search-component");var G__22811__$1 = (((G__22811 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22811));var G__22811__$2 = (((G__22811__$1 == null))?null:G__22811__$1.toggle());return G__22811__$2;
} else
{if(cljs.core.truth_((pred__22808.cljs$core$IFn$_invoke$arity$2 ? pred__22808.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22809) : pred__22808.call(null,clustermap.components.search.ENTER_KEY,expr__22809))))
{var vec__22812 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$388);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812,1,null);var G__22813_22814 = om.core.get_node(owner,"search-component");var G__22813_22815__$1 = (((G__22813_22814 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22813_22814));var G__22813_22816__$2 = (((G__22813_22815__$1 == null))?null:G__22813_22815__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__22808.cljs$core$IFn$_invoke$arity$2 ? pred__22808.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22809) : pred__22808.call(null,clustermap.components.search.UP_ARROW,expr__22809))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$388,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$388);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22808.cljs$core$IFn$_invoke$arity$2 ? pred__22808.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22809) : pred__22808.call(null,clustermap.components.search.DOWN_ARROW,expr__22809))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$388,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$388);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(p__22817,owner){var map__22849 = p__22817;var map__22849__$1 = ((cljs.core.seq_QMARK_(map__22849))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22849):map__22849);var map__22850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22849__$1,cljs.core.constant$keyword$303);var map__22850__$1 = ((cljs.core.seq_QMARK_(map__22850))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22850):map__22850);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22850__$1,cljs.core.constant$keyword$264);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22850__$1,cljs.core.constant$keyword$229);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22849__$1,cljs.core.constant$keyword$389);var map__22851 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__22851__$1 = ((cljs.core.seq_QMARK_(map__22851))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22851):map__22851);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22851__$1,cljs.core.constant$keyword$304);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22851__$1,cljs.core.constant$keyword$300);var map__22852 = search_results;var map__22852__$1 = ((cljs.core.seq_QMARK_(map__22852))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22852):map__22852);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22852__$1,cljs.core.constant$keyword$307);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22852__$1,cljs.core.constant$keyword$387);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22852__$1,cljs.core.constant$keyword$324);if(typeof clustermap.components.search.t22853 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22853 = (function (investor_companies,p__22817,selection_value,path_fn,portfolio_companies,search_component,map__22849,comm,selection_type,map__22852,owner,constituencies,map__22851,map__22850,search_results,meta22854){
this.investor_companies = investor_companies;
this.p__22817 = p__22817;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.map__22849 = map__22849;
this.comm = comm;
this.selection_type = selection_type;
this.map__22852 = map__22852;
this.owner = owner;
this.constituencies = constituencies;
this.map__22851 = map__22851;
this.map__22850 = map__22850;
this.search_results = search_results;
this.meta22854 = meta22854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22853.cljs$lang$type = true;
clustermap.components.search.t22853.cljs$lang$ctorStr = "clustermap.components.search/t22853";
clustermap.components.search.t22853.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22853");
});
clustermap.components.search.t22853.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22853.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$390,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$390,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$390,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"\u00D7")),(cljs.core.truth_(self__.selection_value)?React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(null,null) : self__.path_fn.call(null,null,null))},React.DOM.button({"className": "btn-reset", "type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$390,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"Reset to UK wide"))):null)),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$388,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$391,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$391,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__22856(s__22857){return (new cljs.core.LazySeq(null,(function (){var s__22857__$1 = s__22857;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22857__$1);if(temp__4092__auto__)
{var s__22857__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22857__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22857__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22859 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22858 = 0;while(true){
if((i__22858 < size__4116__auto__))
{var vec__22862 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22858);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22862,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22862,1,null);cljs.core.chunk_append(b__22859,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (i__22858,vec__22862,idx,con,c__4115__auto__,size__4116__auto__,b__22859,s__22857__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$299,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384),cljs.core.constant$keyword$392,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384))].join('')], 0));
});})(i__22858,vec__22862,idx,con,c__4115__auto__,size__4116__auto__,b__22859,s__22857__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$392], null)));
{
var G__22880 = (i__22858 + 1);
i__22858 = G__22880;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22859),iter__22856(cljs.core.chunk_rest(s__22857__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22859),null);
}
} else
{var vec__22863 = cljs.core.first(s__22857__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22863,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22863,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (vec__22863,idx,con,s__22857__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$299,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384),cljs.core.constant$keyword$392,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384))].join('')], 0));
});})(vec__22863,idx,con,s__22857__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$392], null)),iter__22856(cljs.core.rest(s__22857__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$391,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__22864(s__22865){return (new cljs.core.LazySeq(null,(function (){var s__22865__$1 = s__22865;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22865__$1);if(temp__4092__auto__)
{var s__22865__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22865__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22865__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22867 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22866 = 0;while(true){
if((i__22866 < size__4116__auto__))
{var vec__22870 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22866);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22870,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22870,1,null);cljs.core.chunk_append(b__22867,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (i__22866,vec__22870,idx,pc,c__4115__auto__,size__4116__auto__,b__22867,s__22865__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$297,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382),cljs.core.constant$keyword$392,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382))].join('')], 0));
});})(i__22866,vec__22870,idx,pc,c__4115__auto__,size__4116__auto__,b__22867,s__22865__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$392], null)));
{
var G__22881 = (i__22866 + 1);
i__22866 = G__22881;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22867),iter__22864(cljs.core.chunk_rest(s__22865__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22867),null);
}
} else
{var vec__22871 = cljs.core.first(s__22865__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22871,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22871,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (vec__22871,idx,pc,s__22865__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$297,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382),cljs.core.constant$keyword$392,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382))].join('')], 0));
});})(vec__22871,idx,pc,s__22865__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$392], null)),iter__22864(cljs.core.rest(s__22865__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$391,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__22872(s__22873){return (new cljs.core.LazySeq(null,(function (){var s__22873__$1 = s__22873;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22873__$1);if(temp__4092__auto__)
{var s__22873__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22873__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22873__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22875 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22874 = 0;while(true){
if((i__22874 < size__4116__auto__))
{var vec__22878 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22874);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22878,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22878,1,null);cljs.core.chunk_append(b__22875,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (i__22874,vec__22878,idx,inv,c__4115__auto__,size__4116__auto__,b__22875,s__22873__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$298,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$383),cljs.core.constant$keyword$392,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$383))].join('')], 0));
});})(i__22874,vec__22878,idx,inv,c__4115__auto__,size__4116__auto__,b__22875,s__22873__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$392], null)));
{
var G__22882 = (i__22874 + 1);
i__22874 = G__22882;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22875),iter__22872(cljs.core.chunk_rest(s__22873__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22875),null);
}
} else
{var vec__22879 = cljs.core.first(s__22873__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22879,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22879,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (vec__22879,idx,inv,s__22873__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$298,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$383),cljs.core.constant$keyword$392,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$383))].join('')], 0));
});})(vec__22879,idx,inv,s__22873__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$392], null)),iter__22872(cljs.core.rest(s__22873__$2)));
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
clustermap.components.search.t22853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22855){var self__ = this;
var _22855__$1 = this;return self__.meta22854;
});
clustermap.components.search.t22853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22855,meta22854__$1){var self__ = this;
var _22855__$1 = this;return (new clustermap.components.search.t22853(self__.investor_companies,self__.p__22817,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.map__22849,self__.comm,self__.selection_type,self__.map__22852,self__.owner,self__.constituencies,self__.map__22851,self__.map__22850,self__.search_results,meta22854__$1));
});
clustermap.components.search.__GT_t22853 = (function __GT_t22853(investor_companies__$1,p__22817__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__22849__$2,comm__$1,selection_type__$1,map__22852__$2,owner__$1,constituencies__$1,map__22851__$2,map__22850__$2,search_results__$1,meta22854){return (new clustermap.components.search.t22853(investor_companies__$1,p__22817__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,map__22849__$2,comm__$1,selection_type__$1,map__22852__$2,owner__$1,constituencies__$1,map__22851__$2,map__22850__$2,search_results__$1,meta22854));
});
}
return (new clustermap.components.search.t22853(investor_companies,p__22817,selection_value,path_fn,portfolio_companies,search_component,map__22849__$1,comm,selection_type,map__22852__$1,owner,constituencies,map__22851__$1,map__22850__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
