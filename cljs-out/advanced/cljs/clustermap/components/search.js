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
clustermap.components.search.search_result_link = (function search_result_link(p__22953,owner,p__22954){var map__22963 = p__22953;var map__22963__$1 = ((cljs.core.seq_QMARK_(map__22963))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22963):map__22963);var search_result = map__22963__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22963__$1,cljs.core.constant$keyword$270);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22963__$1,cljs.core.constant$keyword$280);var map__22964 = p__22954;var map__22964__$1 = ((cljs.core.seq_QMARK_(map__22964))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22964):map__22964);var opts = map__22964__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964__$1,cljs.core.constant$keyword$310);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964__$1,cljs.core.constant$keyword$306);if(typeof clustermap.components.search.t22965 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22965 = (function (opts,path_fn,name,comm,search_result,p__22954,owner,map__22964,map__22963,type,p__22953,search_result_link,meta22966){
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.p__22954 = p__22954;
this.owner = owner;
this.map__22964 = map__22964;
this.map__22963 = map__22963;
this.type = type;
this.p__22953 = p__22953;
this.search_result_link = search_result_link;
this.meta22966 = meta22966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22965.cljs$lang$type = true;
clustermap.components.search.t22965.cljs$lang$ctorStr = "clustermap.components.search/t22965";
clustermap.components.search.t22965.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22965");
});
clustermap.components.search.t22965.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22965.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__22968){var self__ = this;
var map__22969 = p__22968;var map__22969__$1 = ((cljs.core.seq_QMARK_(map__22969))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22969):map__22969);var state = map__22969__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22969__$1,cljs.core.constant$keyword$285);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22970 = l;var G__22970__$1 = (((G__22970 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22970));var G__22970__$2 = (((G__22970__$1 == null))?null:G__22970__$1.parents(".search-component"));var G__22970__$3 = (((G__22970__$2 == null))?null:G__22970__$2.toggle());return G__22970__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t22965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22967){var self__ = this;
var _22967__$1 = this;return self__.meta22966;
});
clustermap.components.search.t22965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22967,meta22966__$1){var self__ = this;
var _22967__$1 = this;return (new clustermap.components.search.t22965(self__.opts,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.p__22954,self__.owner,self__.map__22964,self__.map__22963,self__.type,self__.p__22953,self__.search_result_link,meta22966__$1));
});
clustermap.components.search.__GT_t22965 = (function __GT_t22965(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,p__22954__$1,owner__$1,map__22964__$2,map__22963__$2,type__$1,p__22953__$1,search_result_link__$1,meta22966){return (new clustermap.components.search.t22965(opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,p__22954__$1,owner__$1,map__22964__$2,map__22963__$2,type__$1,p__22953__$1,search_result_link__$1,meta22966));
});
}
return (new clustermap.components.search.t22965(opts,path_fn,name,comm,search_result,p__22954,owner,map__22964__$1,map__22963__$1,type,p__22953,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22971,n){var map__22973 = p__22971;var map__22973__$1 = ((cljs.core.seq_QMARK_(map__22973))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22973):map__22973);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22973__$1,cljs.core.constant$keyword$313);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22973__$1,cljs.core.constant$keyword$395);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22973__$1,cljs.core.constant$keyword$330);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$303,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22980 = cljs.core._EQ__EQ_;var expr__22981 = e.keyCode;if(cljs.core.truth_((pred__22980.cljs$core$IFn$_invoke$arity$2 ? pred__22980.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22981) : pred__22980.call(null,clustermap.components.search.ESCAPE_KEY,expr__22981))))
{var G__22983 = om.core.get_node(owner,"search-component");var G__22983__$1 = (((G__22983 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22983));var G__22983__$2 = (((G__22983__$1 == null))?null:G__22983__$1.toggle());return G__22983__$2;
} else
{if(cljs.core.truth_((pred__22980.cljs$core$IFn$_invoke$arity$2 ? pred__22980.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22981) : pred__22980.call(null,clustermap.components.search.ENTER_KEY,expr__22981))))
{var vec__22984 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$396);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22984,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22984,1,null);var G__22985_22986 = om.core.get_node(owner,"search-component");var G__22985_22987__$1 = (((G__22985_22986 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22985_22986));var G__22985_22988__$2 = (((G__22985_22987__$1 == null))?null:G__22985_22987__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__22980.cljs$core$IFn$_invoke$arity$2 ? pred__22980.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22981) : pred__22980.call(null,clustermap.components.search.UP_ARROW,expr__22981))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$396,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$396);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22980.cljs$core$IFn$_invoke$arity$2 ? pred__22980.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22981) : pred__22980.call(null,clustermap.components.search.DOWN_ARROW,expr__22981))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$396,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$396);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(p__22989,owner){var map__23021 = p__22989;var map__23021__$1 = ((cljs.core.seq_QMARK_(map__23021))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23021):map__23021);var map__23022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23021__$1,cljs.core.constant$keyword$309);var map__23022__$1 = ((cljs.core.seq_QMARK_(map__23022))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23022):map__23022);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23022__$1,cljs.core.constant$keyword$270);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23022__$1,cljs.core.constant$keyword$235);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23021__$1,cljs.core.constant$keyword$397);var map__23023 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23023__$1 = ((cljs.core.seq_QMARK_(map__23023))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23023):map__23023);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,cljs.core.constant$keyword$310);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23023__$1,cljs.core.constant$keyword$306);var map__23024 = search_results;var map__23024__$1 = ((cljs.core.seq_QMARK_(map__23024))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23024):map__23024);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23024__$1,cljs.core.constant$keyword$313);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23024__$1,cljs.core.constant$keyword$395);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23024__$1,cljs.core.constant$keyword$330);if(typeof clustermap.components.search.t23025 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23025 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,p__22989,map__23023,map__23024,search_results,map__23022,map__23021,meta23026){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.p__22989 = p__22989;
this.map__23023 = map__23023;
this.map__23024 = map__23024;
this.search_results = search_results;
this.map__23022 = map__23022;
this.map__23021 = map__23021;
this.meta23026 = meta23026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23025.cljs$lang$type = true;
clustermap.components.search.t23025.cljs$lang$ctorStr = "clustermap.components.search/t23025";
clustermap.components.search.t23025.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23025");
});
clustermap.components.search.t23025.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23025.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$398,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$398,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$398,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"\u00D7")),(cljs.core.truth_(self__.selection_value)?React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(null,null) : self__.path_fn.call(null,null,null))},React.DOM.button({"className": "btn-reset", "type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$398,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$396.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$396,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23028(s__23029){return (new cljs.core.LazySeq(null,(function (){var s__23029__$1 = s__23029;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23029__$1);if(temp__4092__auto__)
{var s__23029__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23029__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23029__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23031 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23030 = 0;while(true){
if((i__23030 < size__4116__auto__))
{var vec__23034 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23030);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23034,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23034,1,null);cljs.core.chunk_append(b__23031,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (i__23030,vec__23034,idx,con,c__4115__auto__,size__4116__auto__,b__23031,s__23029__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$305,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387),cljs.core.constant$keyword$400,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387))].join('')], 0));
});})(i__23030,vec__23034,idx,con,c__4115__auto__,size__4116__auto__,b__23031,s__23029__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$400], null)));
{
var G__23052 = (i__23030 + 1);
i__23030 = G__23052;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23031),iter__23028(cljs.core.chunk_rest(s__23029__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23031),null);
}
} else
{var vec__23035 = cljs.core.first(s__23029__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23035,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23035,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (vec__23035,idx,con,s__23029__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$305,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387),cljs.core.constant$keyword$400,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387))].join('')], 0));
});})(vec__23035,idx,con,s__23029__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$400], null)),iter__23028(cljs.core.rest(s__23029__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23036(s__23037){return (new cljs.core.LazySeq(null,(function (){var s__23037__$1 = s__23037;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23037__$1);if(temp__4092__auto__)
{var s__23037__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23037__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23037__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23039 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23038 = 0;while(true){
if((i__23038 < size__4116__auto__))
{var vec__23042 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23038);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23042,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23042,1,null);cljs.core.chunk_append(b__23039,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (i__23038,vec__23042,idx,pc,c__4115__auto__,size__4116__auto__,b__23039,s__23037__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$303,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$385),cljs.core.constant$keyword$400,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$385))].join('')], 0));
});})(i__23038,vec__23042,idx,pc,c__4115__auto__,size__4116__auto__,b__23039,s__23037__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$400], null)));
{
var G__23053 = (i__23038 + 1);
i__23038 = G__23053;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23039),iter__23036(cljs.core.chunk_rest(s__23037__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23039),null);
}
} else
{var vec__23043 = cljs.core.first(s__23037__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23043,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23043,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (vec__23043,idx,pc,s__23037__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$303,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$385),cljs.core.constant$keyword$400,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$385))].join('')], 0));
});})(vec__23043,idx,pc,s__23037__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$400], null)),iter__23036(cljs.core.rest(s__23037__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__23044(s__23045){return (new cljs.core.LazySeq(null,(function (){var s__23045__$1 = s__23045;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23045__$1);if(temp__4092__auto__)
{var s__23045__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23045__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23045__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23047 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23046 = 0;while(true){
if((i__23046 < size__4116__auto__))
{var vec__23050 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23046);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23050,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23050,1,null);cljs.core.chunk_append(b__23047,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (i__23046,vec__23050,idx,inv,c__4115__auto__,size__4116__auto__,b__23047,s__23045__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$304,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386),cljs.core.constant$keyword$400,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386))].join('')], 0));
});})(i__23046,vec__23050,idx,inv,c__4115__auto__,size__4116__auto__,b__23047,s__23045__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$400], null)));
{
var G__23054 = (i__23046 + 1);
i__23046 = G__23054;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23047),iter__23044(cljs.core.chunk_rest(s__23045__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23047),null);
}
} else
{var vec__23051 = cljs.core.first(s__23045__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23051,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23051,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (vec__23051,idx,inv,s__23045__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$304,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386),cljs.core.constant$keyword$400,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386))].join('')], 0));
});})(vec__23051,idx,inv,s__23045__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$400], null)),iter__23044(cljs.core.rest(s__23045__$2)));
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
clustermap.components.search.t23025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23027){var self__ = this;
var _23027__$1 = this;return self__.meta23026;
});
clustermap.components.search.t23025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23027,meta23026__$1){var self__ = this;
var _23027__$1 = this;return (new clustermap.components.search.t23025(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.p__22989,self__.map__23023,self__.map__23024,self__.search_results,self__.map__23022,self__.map__23021,meta23026__$1));
});
clustermap.components.search.__GT_t23025 = (function __GT_t23025(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__22989__$1,map__23023__$2,map__23024__$2,search_results__$1,map__23022__$2,map__23021__$2,meta23026){return (new clustermap.components.search.t23025(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__22989__$1,map__23023__$2,map__23024__$2,search_results__$1,map__23022__$2,map__23021__$2,meta23026));
});
}
return (new clustermap.components.search.t23025(investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,p__22989,map__23023__$1,map__23024__$1,search_results,map__23022__$1,map__23021__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
