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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__22099){var map__22105 = p__22099;var map__22105__$1 = ((cljs.core.seq_QMARK_(map__22105))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22105):map__22105);var opts = map__22105__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22105__$1,cljs.core.constant$keyword$242);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22105__$1,cljs.core.constant$keyword$278);if(typeof clustermap.components.search.t22106 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22106 = (function (comm,type,opts,map__22105,p__22099,owner,search_result,search_result_link,meta22107){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__22105 = map__22105;
this.p__22099 = p__22099;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta22107 = meta22107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22106.cljs$lang$type = true;
clustermap.components.search.t22106.cljs$lang$ctorStr = "clustermap.components.search/t22106";
clustermap.components.search.t22106.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22106");
});
clustermap.components.search.t22106.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22106.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22109_22110 = l;var G__22109_22111__$1 = (((G__22109_22110 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22109_22110));var G__22109_22112__$2 = (((G__22109_22111__$1 == null))?null:G__22109_22111__$1.parents(".search-component"));var G__22109_22113__$3 = (((G__22109_22112__$2 == null))?null:G__22109_22112__$2.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref(self__.search_result)], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$252) : self__.search_result.call(null,cljs.core.constant$keyword$252))),(cljs.core.truth_(cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t22106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22108){var self__ = this;
var _22108__$1 = this;return self__.meta22107;
});
clustermap.components.search.t22106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22108,meta22107__$1){var self__ = this;
var _22108__$1 = this;return (new clustermap.components.search.t22106(self__.comm,self__.type,self__.opts,self__.map__22105,self__.p__22099,self__.owner,self__.search_result,self__.search_result_link,meta22107__$1));
});
clustermap.components.search.__GT_t22106 = (function __GT_t22106(comm__$1,type__$1,opts__$1,map__22105__$2,p__22099__$1,owner__$1,search_result__$1,search_result_link__$1,meta22107){return (new clustermap.components.search.t22106(comm__$1,type__$1,opts__$1,map__22105__$2,p__22099__$1,owner__$1,search_result__$1,search_result_link__$1,meta22107));
});
}
return (new clustermap.components.search.t22106(comm,type,opts,map__22105__$1,p__22099,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22114,n){var map__22116 = p__22114;var map__22116__$1 = ((cljs.core.seq_QMARK_(map__22116))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22116):map__22116);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22116__$1,cljs.core.constant$keyword$299);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22116__$1,cljs.core.constant$keyword$356);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22116__$1,cljs.core.constant$keyword$288);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$277,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$276,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22123 = cljs.core._EQ__EQ_;var expr__22124 = e.keyCode;if(cljs.core.truth_((pred__22123.cljs$core$IFn$_invoke$arity$2 ? pred__22123.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22124) : pred__22123.call(null,clustermap.components.search.ESCAPE_KEY,expr__22124))))
{var G__22126 = om.core.get_node(owner,"search-component");var G__22126__$1 = (((G__22126 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22126));var G__22126__$2 = (((G__22126__$1 == null))?null:G__22126__$1.toggle());return G__22126__$2;
} else
{if(cljs.core.truth_((pred__22123.cljs$core$IFn$_invoke$arity$2 ? pred__22123.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22124) : pred__22123.call(null,clustermap.components.search.ENTER_KEY,expr__22124))))
{var vec__22127 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$357);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22127,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22127,1,null);var G__22128_22129 = om.core.get_node(owner,"search-component");var G__22128_22130__$1 = (((G__22128_22129 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22128_22129));var G__22128_22131__$2 = (((G__22128_22130__$1 == null))?null:G__22128_22130__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__22123.cljs$core$IFn$_invoke$arity$2 ? pred__22123.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22124) : pred__22123.call(null,clustermap.components.search.UP_ARROW,expr__22124))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$357,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$357);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22123.cljs$core$IFn$_invoke$arity$2 ? pred__22123.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22124) : pred__22123.call(null,clustermap.components.search.DOWN_ARROW,expr__22124))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$357,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$357);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$278);var map__22160 = search_results;var map__22160__$1 = ((cljs.core.seq_QMARK_(map__22160))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22160):map__22160);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22160__$1,cljs.core.constant$keyword$299);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22160__$1,cljs.core.constant$keyword$356);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22160__$1,cljs.core.constant$keyword$288);if(typeof clustermap.components.search.t22161 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22161 = (function (constituencies,portfolio_companies,investor_companies,map__22160,comm,owner,search_results,search_component,meta22162){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__22160 = map__22160;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta22162 = meta22162;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22161.cljs$lang$type = true;
clustermap.components.search.t22161.cljs$lang$ctorStr = "clustermap.components.search/t22161";
clustermap.components.search.t22161.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22161");
});
clustermap.components.search.t22161.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22161.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$358,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$358,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$358,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$357,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__22164(s__22165){return (new cljs.core.LazySeq(null,(function (){var s__22165__$1 = s__22165;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22165__$1);if(temp__4092__auto__)
{var s__22165__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22165__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22165__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22167 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22166 = 0;while(true){
if((i__22166 < size__4116__auto__))
{var vec__22170 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22166);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22170,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22170,1,null);cljs.core.chunk_append(b__22167,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$277], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (i__22166,vec__22170,idx,con,c__4115__auto__,size__4116__auto__,b__22167,s__22165__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$353))].join(''));
});})(i__22166,vec__22170,idx,con,c__4115__auto__,size__4116__auto__,b__22167,s__22165__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)));
{
var G__22188 = (i__22166 + 1);
i__22166 = G__22188;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22167),iter__22164(cljs.core.chunk_rest(s__22165__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22167),null);
}
} else
{var vec__22171 = cljs.core.first(s__22165__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22171,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$277], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (vec__22171,idx,con,s__22165__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$353))].join(''));
});})(vec__22171,idx,con,s__22165__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)),iter__22164(cljs.core.rest(s__22165__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__22172(s__22173){return (new cljs.core.LazySeq(null,(function (){var s__22173__$1 = s__22173;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22173__$1);if(temp__4092__auto__)
{var s__22173__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22173__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22173__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22175 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22174 = 0;while(true){
if((i__22174 < size__4116__auto__))
{var vec__22178 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22174);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22178,1,null);cljs.core.chunk_append(b__22175,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$275], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (i__22174,vec__22178,idx,pc,c__4115__auto__,size__4116__auto__,b__22175,s__22173__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$351))].join(''));
});})(i__22174,vec__22178,idx,pc,c__4115__auto__,size__4116__auto__,b__22175,s__22173__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)));
{
var G__22189 = (i__22174 + 1);
i__22174 = G__22189;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22175),iter__22172(cljs.core.chunk_rest(s__22173__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22175),null);
}
} else
{var vec__22179 = cljs.core.first(s__22173__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22179,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22179,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$275], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (vec__22179,idx,pc,s__22173__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$351))].join(''));
});})(vec__22179,idx,pc,s__22173__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)),iter__22172(cljs.core.rest(s__22173__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__22180(s__22181){return (new cljs.core.LazySeq(null,(function (){var s__22181__$1 = s__22181;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22181__$1);if(temp__4092__auto__)
{var s__22181__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22181__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22181__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22183 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22182 = 0;while(true){
if((i__22182 < size__4116__auto__))
{var vec__22186 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22182);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22186,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22186,1,null);cljs.core.chunk_append(b__22183,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$276], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (i__22182,vec__22186,idx,inv,c__4115__auto__,size__4116__auto__,b__22183,s__22181__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$352))].join(''));
});})(i__22182,vec__22186,idx,inv,c__4115__auto__,size__4116__auto__,b__22183,s__22181__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)));
{
var G__22190 = (i__22182 + 1);
i__22182 = G__22190;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22183),iter__22180(cljs.core.chunk_rest(s__22181__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22183),null);
}
} else
{var vec__22187 = cljs.core.first(s__22181__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22187,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22187,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$276], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (vec__22187,idx,inv,s__22181__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$352))].join(''));
});})(vec__22187,idx,inv,s__22181__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)),iter__22180(cljs.core.rest(s__22181__$2)));
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
clustermap.components.search.t22161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22163){var self__ = this;
var _22163__$1 = this;return self__.meta22162;
});
clustermap.components.search.t22161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22163,meta22162__$1){var self__ = this;
var _22163__$1 = this;return (new clustermap.components.search.t22161(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__22160,self__.comm,self__.owner,self__.search_results,self__.search_component,meta22162__$1));
});
clustermap.components.search.__GT_t22161 = (function __GT_t22161(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22160__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22162){return (new clustermap.components.search.t22161(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22160__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22162));
});
}
return (new clustermap.components.search.t22161(constituencies,portfolio_companies,investor_companies,map__22160__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$360),document.getElementById(elem_id));
});
