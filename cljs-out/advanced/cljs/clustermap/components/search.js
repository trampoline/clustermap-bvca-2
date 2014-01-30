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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__11871){var map__11876 = p__11871;var map__11876__$1 = ((cljs.core.seq_QMARK_(map__11876))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11876):map__11876);var opts = map__11876__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11876__$1,cljs.core.constant$keyword$41);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11876__$1,cljs.core.constant$keyword$79);if(typeof clustermap.components.search.t11877 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t11877 = (function (comm,type,opts,map__11876,p__11871,owner,search_result,search_result_link,meta11878){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__11876 = map__11876;
this.p__11871 = p__11871;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta11878 = meta11878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t11877.cljs$lang$type = true;
clustermap.components.search.t11877.cljs$lang$ctorStr = "clustermap.components.search/t11877";
clustermap.components.search.t11877.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t11877");
});
clustermap.components.search.t11877.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t11877.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref(self__.search_result)], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$52) : self__.search_result.call(null,cljs.core.constant$keyword$52))),(cljs.core.truth_(cljs.core.constant$keyword$57.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t11877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11879){var self__ = this;
var _11879__$1 = this;return self__.meta11878;
});
clustermap.components.search.t11877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11879,meta11878__$1){var self__ = this;
var _11879__$1 = this;return (new clustermap.components.search.t11877(self__.comm,self__.type,self__.opts,self__.map__11876,self__.p__11871,self__.owner,self__.search_result,self__.search_result_link,meta11878__$1));
});
clustermap.components.search.__GT_t11877 = (function __GT_t11877(comm__$1,type__$1,opts__$1,map__11876__$2,p__11871__$1,owner__$1,search_result__$1,search_result_link__$1,meta11878){return (new clustermap.components.search.t11877(comm__$1,type__$1,opts__$1,map__11876__$2,p__11871__$1,owner__$1,search_result__$1,search_result_link__$1,meta11878));
});
}
return (new clustermap.components.search.t11877(comm,type,opts,map__11876__$1,p__11871,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__11880,n){var map__11882 = p__11880;var map__11882__$1 = ((cljs.core.seq_QMARK_(map__11882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11882):map__11882);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11882__$1,cljs.core.constant$keyword$142);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11882__$1,cljs.core.constant$keyword$143);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11882__$1,cljs.core.constant$keyword$89);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$78,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$76,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$77,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__11889 = cljs.core._EQ__EQ_;var expr__11890 = e.keyCode;if(cljs.core.truth_((pred__11889.cljs$core$IFn$_invoke$arity$2 ? pred__11889.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__11890) : pred__11889.call(null,clustermap.components.search.ESCAPE_KEY,expr__11890))))
{var G__11892 = om.core.get_node(owner,"search-component");var G__11892__$1 = (((G__11892 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__11892));var G__11892__$2 = (((G__11892__$1 == null))?null:G__11892__$1.toggle());return G__11892__$2;
} else
{if(cljs.core.truth_((pred__11889.cljs$core$IFn$_invoke$arity$2 ? pred__11889.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__11890) : pred__11889.call(null,clustermap.components.search.ENTER_KEY,expr__11890))))
{var vec__11893 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$144);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11893,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11893,1,null);var G__11894_11895 = om.core.get_node(owner,"search-component");var G__11894_11896__$1 = (((G__11894_11895 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__11894_11895));var G__11894_11897__$2 = (((G__11894_11896__$1 == null))?null:G__11894_11896__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$58,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__11889.cljs$core$IFn$_invoke$arity$2 ? pred__11889.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__11890) : pred__11889.call(null,clustermap.components.search.UP_ARROW,expr__11890))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$144,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$144);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__11889.cljs$core$IFn$_invoke$arity$2 ? pred__11889.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__11890) : pred__11889.call(null,clustermap.components.search.DOWN_ARROW,expr__11890))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$144,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$144);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$79);var map__11926 = search_results;var map__11926__$1 = ((cljs.core.seq_QMARK_(map__11926))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11926):map__11926);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11926__$1,cljs.core.constant$keyword$142);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11926__$1,cljs.core.constant$keyword$143);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11926__$1,cljs.core.constant$keyword$89);if(typeof clustermap.components.search.t11927 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t11927 = (function (constituencies,portfolio_companies,investor_companies,map__11926,comm,owner,search_results,search_component,meta11928){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__11926 = map__11926;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta11928 = meta11928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t11927.cljs$lang$type = true;
clustermap.components.search.t11927.cljs$lang$ctorStr = "clustermap.components.search/t11927";
clustermap.components.search.t11927.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t11927");
});
clustermap.components.search.t11927.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t11927.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$145,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$144.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$144,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__11930(s__11931){return (new cljs.core.LazySeq(null,(function (){var s__11931__$1 = s__11931;while(true){
var temp__4092__auto__ = cljs.core.seq(s__11931__$1);if(temp__4092__auto__)
{var s__11931__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__11931__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__11931__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__11933 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__11932 = 0;while(true){
if((i__11932 < size__4116__auto__))
{var vec__11936 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__11932);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11936,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11936,1,null);cljs.core.chunk_append(b__11933,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$79,self__.comm,cljs.core.constant$keyword$41,cljs.core.constant$keyword$78], null),cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__11954 = (i__11932 + 1);
i__11932 = G__11954;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11933),iter__11930(cljs.core.chunk_rest(s__11931__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11933),null);
}
} else
{var vec__11937 = cljs.core.first(s__11931__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11937,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11937,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$79,self__.comm,cljs.core.constant$keyword$41,cljs.core.constant$keyword$78], null),cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__11930(cljs.core.rest(s__11931__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__11938(s__11939){return (new cljs.core.LazySeq(null,(function (){var s__11939__$1 = s__11939;while(true){
var temp__4092__auto__ = cljs.core.seq(s__11939__$1);if(temp__4092__auto__)
{var s__11939__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__11939__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__11939__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__11941 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__11940 = 0;while(true){
if((i__11940 < size__4116__auto__))
{var vec__11944 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__11940);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11944,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11944,1,null);cljs.core.chunk_append(b__11941,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$79,self__.comm,cljs.core.constant$keyword$41,cljs.core.constant$keyword$76], null),cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__11955 = (i__11940 + 1);
i__11940 = G__11955;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11941),iter__11938(cljs.core.chunk_rest(s__11939__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11941),null);
}
} else
{var vec__11945 = cljs.core.first(s__11939__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11945,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11945,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$79,self__.comm,cljs.core.constant$keyword$41,cljs.core.constant$keyword$76], null),cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__11938(cljs.core.rest(s__11939__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__11946(s__11947){return (new cljs.core.LazySeq(null,(function (){var s__11947__$1 = s__11947;while(true){
var temp__4092__auto__ = cljs.core.seq(s__11947__$1);if(temp__4092__auto__)
{var s__11947__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__11947__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__11947__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__11949 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__11948 = 0;while(true){
if((i__11948 < size__4116__auto__))
{var vec__11952 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__11948);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11952,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11952,1,null);cljs.core.chunk_append(b__11949,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$79,self__.comm,cljs.core.constant$keyword$41,cljs.core.constant$keyword$77], null),cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__11956 = (i__11948 + 1);
i__11948 = G__11956;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__11949),iter__11946(cljs.core.chunk_rest(s__11947__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__11949),null);
}
} else
{var vec__11953 = cljs.core.first(s__11947__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11953,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11953,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$79,self__.comm,cljs.core.constant$keyword$41,cljs.core.constant$keyword$77], null),cljs.core.constant$keyword$66,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$57,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__11946(cljs.core.rest(s__11947__$2)));
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
clustermap.components.search.t11927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11929){var self__ = this;
var _11929__$1 = this;return self__.meta11928;
});
clustermap.components.search.t11927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11929,meta11928__$1){var self__ = this;
var _11929__$1 = this;return (new clustermap.components.search.t11927(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__11926,self__.comm,self__.owner,self__.search_results,self__.search_component,meta11928__$1));
});
clustermap.components.search.__GT_t11927 = (function __GT_t11927(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__11926__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta11928){return (new clustermap.components.search.t11927(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__11926__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta11928));
});
}
return (new clustermap.components.search.t11927(constituencies,portfolio_companies,investor_companies,map__11926__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,comm], null),clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$146),document.getElementById(elem_id));
});
