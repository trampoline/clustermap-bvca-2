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
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__22008){var map__22014 = p__22008;var map__22014__$1 = ((cljs.core.seq_QMARK_(map__22014))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22014):map__22014);var opts = map__22014__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22014__$1,cljs.core.constant$keyword$236);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22014__$1,cljs.core.constant$keyword$272);if(typeof clustermap.components.search.t22015 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22015 = (function (comm,type,opts,map__22014,p__22008,owner,search_result,search_result_link,meta22016){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__22014 = map__22014;
this.p__22008 = p__22008;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta22016 = meta22016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22015.cljs$lang$type = true;
clustermap.components.search.t22015.cljs$lang$ctorStr = "clustermap.components.search/t22015";
clustermap.components.search.t22015.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22015");
});
clustermap.components.search.t22015.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22015.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22018_22019 = l;var G__22018_22020__$1 = (((G__22018_22019 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22018_22019));var G__22018_22021__$2 = (((G__22018_22020__$1 == null))?null:G__22018_22020__$1.parents(".search-component"));var G__22018_22022__$3 = (((G__22018_22021__$2 == null))?null:G__22018_22021__$2.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,cljs.core.deref(self__.search_result)], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$246) : self__.search_result.call(null,cljs.core.constant$keyword$246))),(cljs.core.truth_(cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t22015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22017){var self__ = this;
var _22017__$1 = this;return self__.meta22016;
});
clustermap.components.search.t22015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22017,meta22016__$1){var self__ = this;
var _22017__$1 = this;return (new clustermap.components.search.t22015(self__.comm,self__.type,self__.opts,self__.map__22014,self__.p__22008,self__.owner,self__.search_result,self__.search_result_link,meta22016__$1));
});
clustermap.components.search.__GT_t22015 = (function __GT_t22015(comm__$1,type__$1,opts__$1,map__22014__$2,p__22008__$1,owner__$1,search_result__$1,search_result_link__$1,meta22016){return (new clustermap.components.search.t22015(comm__$1,type__$1,opts__$1,map__22014__$2,p__22008__$1,owner__$1,search_result__$1,search_result_link__$1,meta22016));
});
}
return (new clustermap.components.search.t22015(comm,type,opts,map__22014__$1,p__22008,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22023,n){var map__22025 = p__22023;var map__22025__$1 = ((cljs.core.seq_QMARK_(map__22025))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22025):map__22025);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22025__$1,cljs.core.constant$keyword$339);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22025__$1,cljs.core.constant$keyword$340);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22025__$1,cljs.core.constant$keyword$282);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$271,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$269,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$270,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22032 = cljs.core._EQ__EQ_;var expr__22033 = e.keyCode;if(cljs.core.truth_((pred__22032.cljs$core$IFn$_invoke$arity$2 ? pred__22032.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22033) : pred__22032.call(null,clustermap.components.search.ESCAPE_KEY,expr__22033))))
{var G__22035 = om.core.get_node(owner,"search-component");var G__22035__$1 = (((G__22035 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22035));var G__22035__$2 = (((G__22035__$1 == null))?null:G__22035__$1.toggle());return G__22035__$2;
} else
{if(cljs.core.truth_((pred__22032.cljs$core$IFn$_invoke$arity$2 ? pred__22032.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22033) : pred__22032.call(null,clustermap.components.search.ENTER_KEY,expr__22033))))
{var vec__22036 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$341);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22036,1,null);var G__22037_22038 = om.core.get_node(owner,"search-component");var G__22037_22039__$1 = (((G__22037_22038 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22037_22038));var G__22037_22040__$2 = (((G__22037_22039__$1 == null))?null:G__22037_22039__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$252,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__22032.cljs$core$IFn$_invoke$arity$2 ? pred__22032.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22033) : pred__22032.call(null,clustermap.components.search.UP_ARROW,expr__22033))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$341,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$341);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22032.cljs$core$IFn$_invoke$arity$2 ? pred__22032.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22033) : pred__22032.call(null,clustermap.components.search.DOWN_ARROW,expr__22033))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$341,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$341);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$272);var map__22069 = search_results;var map__22069__$1 = ((cljs.core.seq_QMARK_(map__22069))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22069):map__22069);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22069__$1,cljs.core.constant$keyword$339);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22069__$1,cljs.core.constant$keyword$340);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22069__$1,cljs.core.constant$keyword$282);if(typeof clustermap.components.search.t22070 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22070 = (function (constituencies,portfolio_companies,investor_companies,map__22069,comm,owner,search_results,search_component,meta22071){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__22069 = map__22069;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta22071 = meta22071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22070.cljs$lang$type = true;
clustermap.components.search.t22070.cljs$lang$ctorStr = "clustermap.components.search/t22070";
clustermap.components.search.t22070.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22070");
});
clustermap.components.search.t22070.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22070.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$342,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$342,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$342,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$341,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__22073(s__22074){return (new cljs.core.LazySeq(null,(function (){var s__22074__$1 = s__22074;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22074__$1);if(temp__4092__auto__)
{var s__22074__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22074__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22074__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22076 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22075 = 0;while(true){
if((i__22075 < size__4116__auto__))
{var vec__22079 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22075);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22079,1,null);cljs.core.chunk_append(b__22076,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,self__.comm,cljs.core.constant$keyword$236,cljs.core.constant$keyword$271], null),cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__22097 = (i__22075 + 1);
i__22075 = G__22097;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22076),iter__22073(cljs.core.chunk_rest(s__22074__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22076),null);
}
} else
{var vec__22080 = cljs.core.first(s__22074__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22080,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22080,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,self__.comm,cljs.core.constant$keyword$236,cljs.core.constant$keyword$271], null),cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__22073(cljs.core.rest(s__22074__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__22081(s__22082){return (new cljs.core.LazySeq(null,(function (){var s__22082__$1 = s__22082;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22082__$1);if(temp__4092__auto__)
{var s__22082__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22082__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22082__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22084 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22083 = 0;while(true){
if((i__22083 < size__4116__auto__))
{var vec__22087 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22083);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22087,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22087,1,null);cljs.core.chunk_append(b__22084,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,self__.comm,cljs.core.constant$keyword$236,cljs.core.constant$keyword$269], null),cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__22098 = (i__22083 + 1);
i__22083 = G__22098;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22084),iter__22081(cljs.core.chunk_rest(s__22082__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22084),null);
}
} else
{var vec__22088 = cljs.core.first(s__22082__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22088,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22088,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,self__.comm,cljs.core.constant$keyword$236,cljs.core.constant$keyword$269], null),cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__22081(cljs.core.rest(s__22082__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__22089(s__22090){return (new cljs.core.LazySeq(null,(function (){var s__22090__$1 = s__22090;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22090__$1);if(temp__4092__auto__)
{var s__22090__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22090__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22090__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22092 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22091 = 0;while(true){
if((i__22091 < size__4116__auto__))
{var vec__22095 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22091);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22095,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22095,1,null);cljs.core.chunk_append(b__22092,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,self__.comm,cljs.core.constant$keyword$236,cljs.core.constant$keyword$270], null),cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)));
{
var G__22099 = (i__22091 + 1);
i__22091 = G__22099;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22092),iter__22089(cljs.core.chunk_rest(s__22090__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22092),null);
}
} else
{var vec__22096 = cljs.core.first(s__22090__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22096,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22096,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$263,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$272,self__.comm,cljs.core.constant$keyword$236,cljs.core.constant$keyword$270], null),cljs.core.constant$keyword$259,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$251,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null)], null)),iter__22089(cljs.core.rest(s__22090__$2)));
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
clustermap.components.search.t22070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22072){var self__ = this;
var _22072__$1 = this;return self__.meta22071;
});
clustermap.components.search.t22070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22072,meta22071__$1){var self__ = this;
var _22072__$1 = this;return (new clustermap.components.search.t22070(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__22069,self__.comm,self__.owner,self__.search_results,self__.search_component,meta22071__$1));
});
clustermap.components.search.__GT_t22070 = (function __GT_t22070(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22069__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22071){return (new clustermap.components.search.t22070(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22069__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22071));
});
}
return (new clustermap.components.search.t22070(constituencies,portfolio_companies,investor_companies,map__22069__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,comm], null),clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$343),document.getElementById(elem_id));
});
