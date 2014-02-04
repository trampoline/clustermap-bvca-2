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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__22048){var map__22054 = p__22048;var map__22054__$1 = ((cljs.core.seq_QMARK_(map__22054))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22054):map__22054);var opts = map__22054__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22054__$1,cljs.core.constant$keyword$235);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22054__$1,cljs.core.constant$keyword$271);if(typeof clustermap.components.search.t22055 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22055 = (function (comm,type,opts,map__22054,p__22048,owner,search_result,search_result_link,meta22056){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__22054 = map__22054;
this.p__22048 = p__22048;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta22056 = meta22056;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22055.cljs$lang$type = true;
clustermap.components.search.t22055.cljs$lang$ctorStr = "clustermap.components.search/t22055";
clustermap.components.search.t22055.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22055");
});
clustermap.components.search.t22055.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22055.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22058_22059 = l;var G__22058_22060__$1 = (((G__22058_22059 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22058_22059));var G__22058_22061__$2 = (((G__22058_22060__$1 == null))?null:G__22058_22060__$1.parents(".search-component"));var G__22058_22062__$3 = (((G__22058_22061__$2 == null))?null:G__22058_22061__$2.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref(self__.search_result)], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$245) : self__.search_result.call(null,cljs.core.constant$keyword$245))),(cljs.core.truth_(cljs.core.constant$keyword$250.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t22055.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22057){var self__ = this;
var _22057__$1 = this;return self__.meta22056;
});
clustermap.components.search.t22055.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22057,meta22056__$1){var self__ = this;
var _22057__$1 = this;return (new clustermap.components.search.t22055(self__.comm,self__.type,self__.opts,self__.map__22054,self__.p__22048,self__.owner,self__.search_result,self__.search_result_link,meta22056__$1));
});
clustermap.components.search.__GT_t22055 = (function __GT_t22055(comm__$1,type__$1,opts__$1,map__22054__$2,p__22048__$1,owner__$1,search_result__$1,search_result_link__$1,meta22056){return (new clustermap.components.search.t22055(comm__$1,type__$1,opts__$1,map__22054__$2,p__22048__$1,owner__$1,search_result__$1,search_result_link__$1,meta22056));
});
}
return (new clustermap.components.search.t22055(comm,type,opts,map__22054__$1,p__22048,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22063,n){var map__22065 = p__22063;var map__22065__$1 = ((cljs.core.seq_QMARK_(map__22065))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22065):map__22065);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22065__$1,cljs.core.constant$keyword$338);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22065__$1,cljs.core.constant$keyword$339);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22065__$1,cljs.core.constant$keyword$281);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22072 = cljs.core._EQ__EQ_;var expr__22073 = e.keyCode;if(cljs.core.truth_((pred__22072.cljs$core$IFn$_invoke$arity$2 ? pred__22072.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22073) : pred__22072.call(null,clustermap.components.search.ESCAPE_KEY,expr__22073))))
{var G__22075 = om.core.get_node(owner,"search-component");var G__22075__$1 = (((G__22075 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22075));var G__22075__$2 = (((G__22075__$1 == null))?null:G__22075__$1.toggle());return G__22075__$2;
} else
{if(cljs.core.truth_((pred__22072.cljs$core$IFn$_invoke$arity$2 ? pred__22072.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22073) : pred__22072.call(null,clustermap.components.search.ENTER_KEY,expr__22073))))
{var vec__22076 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$340);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22076,1,null);var G__22077_22078 = om.core.get_node(owner,"search-component");var G__22077_22079__$1 = (((G__22077_22078 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22077_22078));var G__22077_22080__$2 = (((G__22077_22079__$1 == null))?null:G__22077_22079__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$251,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__22072.cljs$core$IFn$_invoke$arity$2 ? pred__22072.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22073) : pred__22072.call(null,clustermap.components.search.UP_ARROW,expr__22073))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$340,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$340);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22072.cljs$core$IFn$_invoke$arity$2 ? pred__22072.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22073) : pred__22072.call(null,clustermap.components.search.DOWN_ARROW,expr__22073))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$340,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$340);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$271);var map__22109 = search_results;var map__22109__$1 = ((cljs.core.seq_QMARK_(map__22109))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22109):map__22109);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22109__$1,cljs.core.constant$keyword$338);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22109__$1,cljs.core.constant$keyword$339);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22109__$1,cljs.core.constant$keyword$281);if(typeof clustermap.components.search.t22110 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22110 = (function (constituencies,portfolio_companies,investor_companies,map__22109,comm,owner,search_results,search_component,meta22111){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__22109 = map__22109;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta22111 = meta22111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22110.cljs$lang$type = true;
clustermap.components.search.t22110.cljs$lang$ctorStr = "clustermap.components.search/t22110";
clustermap.components.search.t22110.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22110");
});
clustermap.components.search.t22110.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22110.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$341,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$341,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$341,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$340,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__22113(s__22114){return (new cljs.core.LazySeq(null,(function (){var s__22114__$1 = s__22114;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22114__$1);if(temp__4092__auto__)
{var s__22114__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22114__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22114__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22116 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22115 = 0;while(true){
if((i__22115 < size__4116__auto__))
{var vec__22119 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22115);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22119,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22119,1,null);cljs.core.chunk_append(b__22116,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$271,self__.comm,cljs.core.constant$keyword$235,cljs.core.constant$keyword$270], null),cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__22137 = (i__22115 + 1);
i__22115 = G__22137;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22116),iter__22113(cljs.core.chunk_rest(s__22114__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22116),null);
}
} else
{var vec__22120 = cljs.core.first(s__22114__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22120,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22120,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$271,self__.comm,cljs.core.constant$keyword$235,cljs.core.constant$keyword$270], null),cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__22113(cljs.core.rest(s__22114__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__22121(s__22122){return (new cljs.core.LazySeq(null,(function (){var s__22122__$1 = s__22122;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22122__$1);if(temp__4092__auto__)
{var s__22122__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22122__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22122__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22124 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22123 = 0;while(true){
if((i__22123 < size__4116__auto__))
{var vec__22127 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22123);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22127,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22127,1,null);cljs.core.chunk_append(b__22124,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$271,self__.comm,cljs.core.constant$keyword$235,cljs.core.constant$keyword$268], null),cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__22138 = (i__22123 + 1);
i__22123 = G__22138;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22124),iter__22121(cljs.core.chunk_rest(s__22122__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22124),null);
}
} else
{var vec__22128 = cljs.core.first(s__22122__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22128,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22128,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$271,self__.comm,cljs.core.constant$keyword$235,cljs.core.constant$keyword$268], null),cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__22121(cljs.core.rest(s__22122__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__22129(s__22130){return (new cljs.core.LazySeq(null,(function (){var s__22130__$1 = s__22130;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22130__$1);if(temp__4092__auto__)
{var s__22130__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22130__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22130__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22132 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22131 = 0;while(true){
if((i__22131 < size__4116__auto__))
{var vec__22135 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22131);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22135,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22135,1,null);cljs.core.chunk_append(b__22132,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$271,self__.comm,cljs.core.constant$keyword$235,cljs.core.constant$keyword$269], null),cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__22139 = (i__22131 + 1);
i__22131 = G__22139;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22132),iter__22129(cljs.core.chunk_rest(s__22130__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22132),null);
}
} else
{var vec__22136 = cljs.core.first(s__22130__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22136,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22136,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$262,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$271,self__.comm,cljs.core.constant$keyword$235,cljs.core.constant$keyword$269], null),cljs.core.constant$keyword$258,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$250,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__22129(cljs.core.rest(s__22130__$2)));
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
clustermap.components.search.t22110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22112){var self__ = this;
var _22112__$1 = this;return self__.meta22111;
});
clustermap.components.search.t22110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22112,meta22111__$1){var self__ = this;
var _22112__$1 = this;return (new clustermap.components.search.t22110(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__22109,self__.comm,self__.owner,self__.search_results,self__.search_component,meta22111__$1));
});
clustermap.components.search.__GT_t22110 = (function __GT_t22110(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22109__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22111){return (new clustermap.components.search.t22110(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22109__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22111));
});
}
return (new clustermap.components.search.t22110(constituencies,portfolio_companies,investor_companies,map__22109__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,comm], null),clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$342),document.getElementById(elem_id));
});
