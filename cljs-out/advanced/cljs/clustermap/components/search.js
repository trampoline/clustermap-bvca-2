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
clustermap.components.search.search_result_link = (function search_result_link(p__22778,owner,p__22779){var map__22788 = p__22778;var map__22788__$1 = ((cljs.core.seq_QMARK_(map__22788))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22788):map__22788);var search_result = map__22788__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22788__$1,cljs.core.constant$keyword$264);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22788__$1,cljs.core.constant$keyword$274);var map__22789 = p__22779;var map__22789__$1 = ((cljs.core.seq_QMARK_(map__22789))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22789):map__22789);var opts = map__22789__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22789__$1,cljs.core.constant$keyword$304);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22789__$1,cljs.core.constant$keyword$300);if(typeof clustermap.components.search.t22790 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22790 = (function (opts,p__22779,p__22778,map__22789,path_fn,map__22788,name,comm,search_result,owner,type,search_result_link,meta22791){
this.opts = opts;
this.p__22779 = p__22779;
this.p__22778 = p__22778;
this.map__22789 = map__22789;
this.path_fn = path_fn;
this.map__22788 = map__22788;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta22791 = meta22791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22790.cljs$lang$type = true;
clustermap.components.search.t22790.cljs$lang$ctorStr = "clustermap.components.search/t22790";
clustermap.components.search.t22790.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22790");
});
clustermap.components.search.t22790.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22790.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__22793){var self__ = this;
var map__22794 = p__22793;var map__22794__$1 = ((cljs.core.seq_QMARK_(map__22794))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22794):map__22794);var state = map__22794__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22794__$1,cljs.core.constant$keyword$279);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22795 = l;var G__22795__$1 = (((G__22795 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22795));var G__22795__$2 = (((G__22795__$1 == null))?null:G__22795__$1.parents(".search-component"));var G__22795__$3 = (((G__22795__$2 == null))?null:G__22795__$2.toggle());return G__22795__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t22790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22792){var self__ = this;
var _22792__$1 = this;return self__.meta22791;
});
clustermap.components.search.t22790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22792,meta22791__$1){var self__ = this;
var _22792__$1 = this;return (new clustermap.components.search.t22790(self__.opts,self__.p__22779,self__.p__22778,self__.map__22789,self__.path_fn,self__.map__22788,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta22791__$1));
});
clustermap.components.search.__GT_t22790 = (function __GT_t22790(opts__$1,p__22779__$1,p__22778__$1,map__22789__$2,path_fn__$1,map__22788__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta22791){return (new clustermap.components.search.t22790(opts__$1,p__22779__$1,p__22778__$1,map__22789__$2,path_fn__$1,map__22788__$2,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta22791));
});
}
return (new clustermap.components.search.t22790(opts,p__22779,p__22778,map__22789__$1,path_fn,map__22788__$1,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22796,n){var map__22798 = p__22796;var map__22798__$1 = ((cljs.core.seq_QMARK_(map__22798))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22798):map__22798);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22798__$1,cljs.core.constant$keyword$307);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22798__$1,cljs.core.constant$keyword$387);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22798__$1,cljs.core.constant$keyword$324);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22805 = cljs.core._EQ__EQ_;var expr__22806 = e.keyCode;if(cljs.core.truth_((pred__22805.cljs$core$IFn$_invoke$arity$2 ? pred__22805.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22806) : pred__22805.call(null,clustermap.components.search.ESCAPE_KEY,expr__22806))))
{var G__22808 = om.core.get_node(owner,"search-component");var G__22808__$1 = (((G__22808 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22808));var G__22808__$2 = (((G__22808__$1 == null))?null:G__22808__$1.toggle());return G__22808__$2;
} else
{if(cljs.core.truth_((pred__22805.cljs$core$IFn$_invoke$arity$2 ? pred__22805.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22806) : pred__22805.call(null,clustermap.components.search.ENTER_KEY,expr__22806))))
{var vec__22809 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$388);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22809,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22809,1,null);var G__22810_22811 = om.core.get_node(owner,"search-component");var G__22810_22812__$1 = (((G__22810_22811 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22810_22811));var G__22810_22813__$2 = (((G__22810_22812__$1 == null))?null:G__22810_22812__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__22805.cljs$core$IFn$_invoke$arity$2 ? pred__22805.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22806) : pred__22805.call(null,clustermap.components.search.UP_ARROW,expr__22806))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$388,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$388);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22805.cljs$core$IFn$_invoke$arity$2 ? pred__22805.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22806) : pred__22805.call(null,clustermap.components.search.DOWN_ARROW,expr__22806))))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var map__22845 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__22845__$1 = ((cljs.core.seq_QMARK_(map__22845))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22845):map__22845);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22845__$1,cljs.core.constant$keyword$304);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22845__$1,cljs.core.constant$keyword$300);var map__22846 = search_results;var map__22846__$1 = ((cljs.core.seq_QMARK_(map__22846))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22846):map__22846);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22846__$1,cljs.core.constant$keyword$307);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22846__$1,cljs.core.constant$keyword$387);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22846__$1,cljs.core.constant$keyword$324);if(typeof clustermap.components.search.t22847 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22847 = (function (investor_companies,path_fn,portfolio_companies,search_component,comm,map__22845,owner,constituencies,map__22846,search_results,meta22848){
this.investor_companies = investor_companies;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.map__22845 = map__22845;
this.owner = owner;
this.constituencies = constituencies;
this.map__22846 = map__22846;
this.search_results = search_results;
this.meta22848 = meta22848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22847.cljs$lang$type = true;
clustermap.components.search.t22847.cljs$lang$ctorStr = "clustermap.components.search/t22847";
clustermap.components.search.t22847.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22847");
});
clustermap.components.search.t22847.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22847.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$389,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$389,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$389,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$388.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$388,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$390,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$390,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__22852(s__22853){return (new cljs.core.LazySeq(null,(function (){var s__22853__$1 = s__22853;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22853__$1);if(temp__4092__auto__)
{var s__22853__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22853__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22853__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22855 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22854 = 0;while(true){
if((i__22854 < size__4116__auto__))
{var vec__22858 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22854);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22858,1,null);cljs.core.chunk_append(b__22855,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (i__22854,vec__22858,idx,con,c__4115__auto__,size__4116__auto__,b__22855,s__22853__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$299,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384),cljs.core.constant$keyword$391,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384))].join('')], 0));
});})(i__22854,vec__22858,idx,con,c__4115__auto__,size__4116__auto__,b__22855,s__22853__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$391], null)));
{
var G__22876 = (i__22854 + 1);
i__22854 = G__22876;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22855),iter__22852(cljs.core.chunk_rest(s__22853__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22855),null);
}
} else
{var vec__22859 = cljs.core.first(s__22853__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22859,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (vec__22859,idx,con,s__22853__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$299,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384),cljs.core.constant$keyword$391,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$384))].join('')], 0));
});})(vec__22859,idx,con,s__22853__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$391], null)),iter__22852(cljs.core.rest(s__22853__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$390,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__22860(s__22861){return (new cljs.core.LazySeq(null,(function (){var s__22861__$1 = s__22861;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22861__$1);if(temp__4092__auto__)
{var s__22861__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22861__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22861__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22863 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22862 = 0;while(true){
if((i__22862 < size__4116__auto__))
{var vec__22866 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22862);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22866,1,null);cljs.core.chunk_append(b__22863,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (i__22862,vec__22866,idx,pc,c__4115__auto__,size__4116__auto__,b__22863,s__22861__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$297,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382),cljs.core.constant$keyword$391,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382))].join('')], 0));
});})(i__22862,vec__22866,idx,pc,c__4115__auto__,size__4116__auto__,b__22863,s__22861__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$391], null)));
{
var G__22877 = (i__22862 + 1);
i__22862 = G__22877;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22863),iter__22860(cljs.core.chunk_rest(s__22861__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22863),null);
}
} else
{var vec__22867 = cljs.core.first(s__22861__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22867,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (vec__22867,idx,pc,s__22861__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$297,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382),cljs.core.constant$keyword$391,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$382))].join('')], 0));
});})(vec__22867,idx,pc,s__22861__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$391], null)),iter__22860(cljs.core.rest(s__22861__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$390,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$254,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__22868(s__22869){return (new cljs.core.LazySeq(null,(function (){var s__22869__$1 = s__22869;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22869__$1);if(temp__4092__auto__)
{var s__22869__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22869__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22869__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22871 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22870 = 0;while(true){
if((i__22870 < size__4116__auto__))
{var vec__22874 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22870);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22874,1,null);cljs.core.chunk_append(b__22871,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (i__22870,vec__22874,idx,inv,c__4115__auto__,size__4116__auto__,b__22871,s__22869__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$298,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$383),cljs.core.constant$keyword$391,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$383))].join('')], 0));
});})(i__22870,vec__22874,idx,inv,c__4115__auto__,size__4116__auto__,b__22871,s__22869__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$391], null)));
{
var G__22878 = (i__22870 + 1);
i__22870 = G__22878;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22871),iter__22868(cljs.core.chunk_rest(s__22869__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22871),null);
}
} else
{var vec__22875 = cljs.core.first(s__22869__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22875,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$291,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$300,self__.comm,cljs.core.constant$keyword$304,self__.path_fn], null),cljs.core.constant$keyword$287,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$292,((function (vec__22875,idx,inv,s__22869__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$264,cljs.core.constant$keyword$298,cljs.core.array_seq([cljs.core.constant$keyword$260,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$383),cljs.core.constant$keyword$391,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$383))].join('')], 0));
});})(vec__22875,idx,inv,s__22869__$2,temp__4092__auto__))
,cljs.core.constant$keyword$290,cljs.core.constant$keyword$391], null)),iter__22868(cljs.core.rest(s__22869__$2)));
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
clustermap.components.search.t22847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22849){var self__ = this;
var _22849__$1 = this;return self__.meta22848;
});
clustermap.components.search.t22847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22849,meta22848__$1){var self__ = this;
var _22849__$1 = this;return (new clustermap.components.search.t22847(self__.investor_companies,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.map__22845,self__.owner,self__.constituencies,self__.map__22846,self__.search_results,meta22848__$1));
});
clustermap.components.search.__GT_t22847 = (function __GT_t22847(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,map__22845__$2,owner__$1,constituencies__$1,map__22846__$2,search_results__$1,meta22848){return (new clustermap.components.search.t22847(investor_companies__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,map__22845__$2,owner__$1,constituencies__$1,map__22846__$2,search_results__$1,meta22848));
});
}
return (new clustermap.components.search.t22847(investor_companies,path_fn,portfolio_companies,search_component,comm,map__22845__$1,owner,constituencies,map__22846__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$392),document.getElementById(elem_id));
});
