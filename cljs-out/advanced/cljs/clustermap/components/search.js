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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__22147){var map__22153 = p__22147;var map__22153__$1 = ((cljs.core.seq_QMARK_(map__22153))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22153):map__22153);var opts = map__22153__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22153__$1,cljs.core.constant$keyword$242);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22153__$1,cljs.core.constant$keyword$278);if(typeof clustermap.components.search.t22154 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22154 = (function (comm,type,opts,map__22153,p__22147,owner,search_result,search_result_link,meta22155){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__22153 = map__22153;
this.p__22147 = p__22147;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta22155 = meta22155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22154.cljs$lang$type = true;
clustermap.components.search.t22154.cljs$lang$ctorStr = "clustermap.components.search/t22154";
clustermap.components.search.t22154.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22154");
});
clustermap.components.search.t22154.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22154.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22157_22158 = l;var G__22157_22159__$1 = (((G__22157_22158 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22157_22158));var G__22157_22160__$2 = (((G__22157_22159__$1 == null))?null:G__22157_22159__$1.parents(".search-component"));var G__22157_22161__$3 = (((G__22157_22160__$2 == null))?null:G__22157_22160__$2.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref(self__.search_result)], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$252) : self__.search_result.call(null,cljs.core.constant$keyword$252))),(cljs.core.truth_(cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t22154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22156){var self__ = this;
var _22156__$1 = this;return self__.meta22155;
});
clustermap.components.search.t22154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22156,meta22155__$1){var self__ = this;
var _22156__$1 = this;return (new clustermap.components.search.t22154(self__.comm,self__.type,self__.opts,self__.map__22153,self__.p__22147,self__.owner,self__.search_result,self__.search_result_link,meta22155__$1));
});
clustermap.components.search.__GT_t22154 = (function __GT_t22154(comm__$1,type__$1,opts__$1,map__22153__$2,p__22147__$1,owner__$1,search_result__$1,search_result_link__$1,meta22155){return (new clustermap.components.search.t22154(comm__$1,type__$1,opts__$1,map__22153__$2,p__22147__$1,owner__$1,search_result__$1,search_result_link__$1,meta22155));
});
}
return (new clustermap.components.search.t22154(comm,type,opts,map__22153__$1,p__22147,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22162,n){var map__22164 = p__22162;var map__22164__$1 = ((cljs.core.seq_QMARK_(map__22164))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22164):map__22164);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,cljs.core.constant$keyword$299);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,cljs.core.constant$keyword$356);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22164__$1,cljs.core.constant$keyword$288);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22171 = cljs.core._EQ__EQ_;var expr__22172 = e.keyCode;if(cljs.core.truth_((pred__22171.cljs$core$IFn$_invoke$arity$2 ? pred__22171.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22172) : pred__22171.call(null,clustermap.components.search.ESCAPE_KEY,expr__22172))))
{var G__22174 = om.core.get_node(owner,"search-component");var G__22174__$1 = (((G__22174 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22174));var G__22174__$2 = (((G__22174__$1 == null))?null:G__22174__$1.toggle());return G__22174__$2;
} else
{if(cljs.core.truth_((pred__22171.cljs$core$IFn$_invoke$arity$2 ? pred__22171.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22172) : pred__22171.call(null,clustermap.components.search.ENTER_KEY,expr__22172))))
{var vec__22175 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$357);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22175,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22175,1,null);var G__22176_22177 = om.core.get_node(owner,"search-component");var G__22176_22178__$1 = (((G__22176_22177 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22176_22177));var G__22176_22179__$2 = (((G__22176_22178__$1 == null))?null:G__22176_22178__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$258,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__22171.cljs$core$IFn$_invoke$arity$2 ? pred__22171.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22172) : pred__22171.call(null,clustermap.components.search.UP_ARROW,expr__22172))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$357,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$357);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22171.cljs$core$IFn$_invoke$arity$2 ? pred__22171.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22172) : pred__22171.call(null,clustermap.components.search.DOWN_ARROW,expr__22172))))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$278);var map__22208 = search_results;var map__22208__$1 = ((cljs.core.seq_QMARK_(map__22208))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22208):map__22208);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,cljs.core.constant$keyword$299);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,cljs.core.constant$keyword$356);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22208__$1,cljs.core.constant$keyword$288);if(typeof clustermap.components.search.t22209 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22209 = (function (constituencies,portfolio_companies,investor_companies,map__22208,comm,owner,search_results,search_component,meta22210){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__22208 = map__22208;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta22210 = meta22210;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22209.cljs$lang$type = true;
clustermap.components.search.t22209.cljs$lang$ctorStr = "clustermap.components.search/t22209";
clustermap.components.search.t22209.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22209");
});
clustermap.components.search.t22209.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22209.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
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
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$357,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__22212(s__22213){return (new cljs.core.LazySeq(null,(function (){var s__22213__$1 = s__22213;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22213__$1);if(temp__4092__auto__)
{var s__22213__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22213__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22213__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22215 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22214 = 0;while(true){
if((i__22214 < size__4116__auto__))
{var vec__22218 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22214);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22218,1,null);cljs.core.chunk_append(b__22215,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$277], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (i__22214,vec__22218,idx,con,c__4115__auto__,size__4116__auto__,b__22215,s__22213__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$353))].join(''));
});})(i__22214,vec__22218,idx,con,c__4115__auto__,size__4116__auto__,b__22215,s__22213__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)));
{
var G__22236 = (i__22214 + 1);
i__22214 = G__22236;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22215),iter__22212(cljs.core.chunk_rest(s__22213__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22215),null);
}
} else
{var vec__22219 = cljs.core.first(s__22213__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22219,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22219,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$277], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (vec__22219,idx,con,s__22213__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$353))].join(''));
});})(vec__22219,idx,con,s__22213__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)),iter__22212(cljs.core.rest(s__22213__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__22220(s__22221){return (new cljs.core.LazySeq(null,(function (){var s__22221__$1 = s__22221;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22221__$1);if(temp__4092__auto__)
{var s__22221__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22221__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22221__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22223 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22222 = 0;while(true){
if((i__22222 < size__4116__auto__))
{var vec__22226 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22222);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22226,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22226,1,null);cljs.core.chunk_append(b__22223,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$275], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (i__22222,vec__22226,idx,pc,c__4115__auto__,size__4116__auto__,b__22223,s__22221__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$351))].join(''));
});})(i__22222,vec__22226,idx,pc,c__4115__auto__,size__4116__auto__,b__22223,s__22221__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)));
{
var G__22237 = (i__22222 + 1);
i__22222 = G__22237;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22223),iter__22220(cljs.core.chunk_rest(s__22221__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22223),null);
}
} else
{var vec__22227 = cljs.core.first(s__22221__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22227,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22227,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$275], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (vec__22227,idx,pc,s__22221__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$351))].join(''));
});})(vec__22227,idx,pc,s__22221__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)),iter__22220(cljs.core.rest(s__22221__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__22228(s__22229){return (new cljs.core.LazySeq(null,(function (){var s__22229__$1 = s__22229;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22229__$1);if(temp__4092__auto__)
{var s__22229__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22229__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22229__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22231 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22230 = 0;while(true){
if((i__22230 < size__4116__auto__))
{var vec__22234 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22230);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22234,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22234,1,null);cljs.core.chunk_append(b__22231,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$276], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (i__22230,vec__22234,idx,inv,c__4115__auto__,size__4116__auto__,b__22231,s__22229__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$352))].join(''));
});})(i__22230,vec__22234,idx,inv,c__4115__auto__,size__4116__auto__,b__22231,s__22229__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)));
{
var G__22238 = (i__22230 + 1);
i__22230 = G__22238;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22231),iter__22228(cljs.core.chunk_rest(s__22229__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22231),null);
}
} else
{var vec__22235 = cljs.core.first(s__22229__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22235,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22235,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$278,self__.comm,cljs.core.constant$keyword$242,cljs.core.constant$keyword$276], null),cljs.core.constant$keyword$265,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$270,((function (vec__22235,idx,inv,s__22229__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$359,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$352))].join(''));
});})(vec__22235,idx,inv,s__22229__$2,temp__4092__auto__))
,cljs.core.constant$keyword$268,cljs.core.constant$keyword$359], null)),iter__22228(cljs.core.rest(s__22229__$2)));
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
clustermap.components.search.t22209.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22211){var self__ = this;
var _22211__$1 = this;return self__.meta22210;
});
clustermap.components.search.t22209.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22211,meta22210__$1){var self__ = this;
var _22211__$1 = this;return (new clustermap.components.search.t22209(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__22208,self__.comm,self__.owner,self__.search_results,self__.search_component,meta22210__$1));
});
clustermap.components.search.__GT_t22209 = (function __GT_t22209(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22208__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22210){return (new clustermap.components.search.t22209(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22208__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22210));
});
}
return (new clustermap.components.search.t22209(constituencies,portfolio_companies,investor_companies,map__22208__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$360),document.getElementById(elem_id));
});
