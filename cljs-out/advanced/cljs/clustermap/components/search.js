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
clustermap.components.search.search_result_link = (function search_result_link(p__22948,owner,p__22949){var map__22958 = p__22948;var map__22958__$1 = ((cljs.core.seq_QMARK_(map__22958))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22958):map__22958);var search_result = map__22958__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22958__$1,cljs.core.constant$keyword$270);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22958__$1,cljs.core.constant$keyword$280);var map__22959 = p__22949;var map__22959__$1 = ((cljs.core.seq_QMARK_(map__22959))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22959):map__22959);var opts = map__22959__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22959__$1,cljs.core.constant$keyword$310);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22959__$1,cljs.core.constant$keyword$306);if(typeof clustermap.components.search.t22960 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22960 = (function (map__22959,map__22958,opts,path_fn,name,comm,search_result,owner,p__22948,p__22949,type,search_result_link,meta22961){
this.map__22959 = map__22959;
this.map__22958 = map__22958;
this.opts = opts;
this.path_fn = path_fn;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.p__22948 = p__22948;
this.p__22949 = p__22949;
this.type = type;
this.search_result_link = search_result_link;
this.meta22961 = meta22961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22960.cljs$lang$type = true;
clustermap.components.search.t22960.cljs$lang$ctorStr = "clustermap.components.search/t22960";
clustermap.components.search.t22960.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22960");
});
clustermap.components.search.t22960.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22960.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__22963){var self__ = this;
var map__22964 = p__22963;var map__22964__$1 = ((cljs.core.seq_QMARK_(map__22964))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22964):map__22964);var state = map__22964__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964__$1,cljs.core.constant$keyword$285);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22965 = l;var G__22965__$1 = (((G__22965 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22965));var G__22965__$2 = (((G__22965__$1 == null))?null:G__22965__$1.parents(".search-component"));var G__22965__$3 = (((G__22965__$2 == null))?null:G__22965__$2.toggle());return G__22965__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t22960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22962){var self__ = this;
var _22962__$1 = this;return self__.meta22961;
});
clustermap.components.search.t22960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22962,meta22961__$1){var self__ = this;
var _22962__$1 = this;return (new clustermap.components.search.t22960(self__.map__22959,self__.map__22958,self__.opts,self__.path_fn,self__.name,self__.comm,self__.search_result,self__.owner,self__.p__22948,self__.p__22949,self__.type,self__.search_result_link,meta22961__$1));
});
clustermap.components.search.__GT_t22960 = (function __GT_t22960(map__22959__$2,map__22958__$2,opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__22948__$1,p__22949__$1,type__$1,search_result_link__$1,meta22961){return (new clustermap.components.search.t22960(map__22959__$2,map__22958__$2,opts__$1,path_fn__$1,name__$1,comm__$1,search_result__$1,owner__$1,p__22948__$1,p__22949__$1,type__$1,search_result_link__$1,meta22961));
});
}
return (new clustermap.components.search.t22960(map__22959__$1,map__22958__$1,opts,path_fn,name,comm,search_result,owner,p__22948,p__22949,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22966,n){var map__22968 = p__22966;var map__22968__$1 = ((cljs.core.seq_QMARK_(map__22968))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22968):map__22968);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22968__$1,cljs.core.constant$keyword$313);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22968__$1,cljs.core.constant$keyword$396);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22968__$1,cljs.core.constant$keyword$330);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22975 = cljs.core._EQ__EQ_;var expr__22976 = e.keyCode;if(cljs.core.truth_((pred__22975.cljs$core$IFn$_invoke$arity$2 ? pred__22975.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22976) : pred__22975.call(null,clustermap.components.search.ESCAPE_KEY,expr__22976))))
{var G__22978 = om.core.get_node(owner,"search-component");var G__22978__$1 = (((G__22978 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22978));var G__22978__$2 = (((G__22978__$1 == null))?null:G__22978__$1.toggle());return G__22978__$2;
} else
{if(cljs.core.truth_((pred__22975.cljs$core$IFn$_invoke$arity$2 ? pred__22975.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22976) : pred__22975.call(null,clustermap.components.search.ENTER_KEY,expr__22976))))
{var vec__22979 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$397);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22979,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22979,1,null);var G__22980_22981 = om.core.get_node(owner,"search-component");var G__22980_22982__$1 = (((G__22980_22981 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22980_22981));var G__22980_22983__$2 = (((G__22980_22982__$1 == null))?null:G__22980_22982__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$286,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__22975.cljs$core$IFn$_invoke$arity$2 ? pred__22975.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22976) : pred__22975.call(null,clustermap.components.search.UP_ARROW,expr__22976))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$397,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$397);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22975.cljs$core$IFn$_invoke$arity$2 ? pred__22975.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22976) : pred__22975.call(null,clustermap.components.search.DOWN_ARROW,expr__22976))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$397,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$397);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(p__22984,owner){var map__23016 = p__22984;var map__23016__$1 = ((cljs.core.seq_QMARK_(map__23016))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23016):map__23016);var map__23017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$309);var map__23017__$1 = ((cljs.core.seq_QMARK_(map__23017))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23017):map__23017);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23017__$1,cljs.core.constant$keyword$270);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23017__$1,cljs.core.constant$keyword$235);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23016__$1,cljs.core.constant$keyword$398);var map__23018 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23018__$1 = ((cljs.core.seq_QMARK_(map__23018))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23018):map__23018);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.constant$keyword$310);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23018__$1,cljs.core.constant$keyword$306);var map__23019 = search_results;var map__23019__$1 = ((cljs.core.seq_QMARK_(map__23019))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23019):map__23019);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23019__$1,cljs.core.constant$keyword$313);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23019__$1,cljs.core.constant$keyword$396);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23019__$1,cljs.core.constant$keyword$330);if(typeof clustermap.components.search.t23020 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23020 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,p__22984,map__23019,search_results,map__23018,map__23017,map__23016,meta23021){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.p__22984 = p__22984;
this.map__23019 = map__23019;
this.search_results = search_results;
this.map__23018 = map__23018;
this.map__23017 = map__23017;
this.map__23016 = map__23016;
this.meta23021 = meta23021;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23020.cljs$lang$type = true;
clustermap.components.search.t23020.cljs$lang$ctorStr = "clustermap.components.search/t23020";
clustermap.components.search.t23020.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23020");
});
clustermap.components.search.t23020.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23020.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"\u00D7")),(cljs.core.truth_(self__.selection_value)?React.DOM.div({"className": "tbl-cell", "style": {"width": "136"}},React.DOM.a({"href": (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(null,null) : self__.path_fn.call(null,null,null))},React.DOM.button({"className": "btn-reset", "type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$399,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$397.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$397.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$397,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$400,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$400,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23023(s__23024){return (new cljs.core.LazySeq(null,(function (){var s__23024__$1 = s__23024;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23024__$1);if(temp__4092__auto__)
{var s__23024__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23024__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23024__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23026 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23025 = 0;while(true){
if((i__23025 < size__4116__auto__))
{var vec__23029 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23025);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23029,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23029,1,null);cljs.core.chunk_append(b__23026,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (i__23025,vec__23029,idx,con,c__4115__auto__,size__4116__auto__,b__23026,s__23024__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$305,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388),cljs.core.constant$keyword$401,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388))].join('')], 0));
});})(i__23025,vec__23029,idx,con,c__4115__auto__,size__4116__auto__,b__23026,s__23024__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)));
{
var G__23047 = (i__23025 + 1);
i__23025 = G__23047;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23026),iter__23023(cljs.core.chunk_rest(s__23024__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23026),null);
}
} else
{var vec__23030 = cljs.core.first(s__23024__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23030,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23030,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (vec__23030,idx,con,s__23024__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$305,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388),cljs.core.constant$keyword$401,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$388))].join('')], 0));
});})(vec__23030,idx,con,s__23024__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)),iter__23023(cljs.core.rest(s__23024__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$400,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23031(s__23032){return (new cljs.core.LazySeq(null,(function (){var s__23032__$1 = s__23032;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23032__$1);if(temp__4092__auto__)
{var s__23032__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23032__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23032__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23034 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23033 = 0;while(true){
if((i__23033 < size__4116__auto__))
{var vec__23037 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23033);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23037,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23037,1,null);cljs.core.chunk_append(b__23034,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (i__23033,vec__23037,idx,pc,c__4115__auto__,size__4116__auto__,b__23034,s__23032__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$303,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386),cljs.core.constant$keyword$401,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386))].join('')], 0));
});})(i__23033,vec__23037,idx,pc,c__4115__auto__,size__4116__auto__,b__23034,s__23032__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)));
{
var G__23048 = (i__23033 + 1);
i__23033 = G__23048;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23034),iter__23031(cljs.core.chunk_rest(s__23032__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23034),null);
}
} else
{var vec__23038 = cljs.core.first(s__23032__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23038,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23038,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (vec__23038,idx,pc,s__23032__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$303,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386),cljs.core.constant$keyword$401,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$386))].join('')], 0));
});})(vec__23038,idx,pc,s__23032__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)),iter__23031(cljs.core.rest(s__23032__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$400,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$275,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__23039(s__23040){return (new cljs.core.LazySeq(null,(function (){var s__23040__$1 = s__23040;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23040__$1);if(temp__4092__auto__)
{var s__23040__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23040__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23040__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23042 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23041 = 0;while(true){
if((i__23041 < size__4116__auto__))
{var vec__23045 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23041);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23045,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23045,1,null);cljs.core.chunk_append(b__23042,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (i__23041,vec__23045,idx,inv,c__4115__auto__,size__4116__auto__,b__23042,s__23040__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$304,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387),cljs.core.constant$keyword$401,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387))].join('')], 0));
});})(i__23041,vec__23045,idx,inv,c__4115__auto__,size__4116__auto__,b__23042,s__23040__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)));
{
var G__23049 = (i__23041 + 1);
i__23041 = G__23049;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23042),iter__23039(cljs.core.chunk_rest(s__23040__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23042),null);
}
} else
{var vec__23046 = cljs.core.first(s__23040__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23046,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23046,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$297,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$306,self__.comm,cljs.core.constant$keyword$310,self__.path_fn], null),cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$285,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$298,((function (vec__23046,idx,inv,s__23040__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$270,cljs.core.constant$keyword$304,cljs.core.array_seq([cljs.core.constant$keyword$266,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387),cljs.core.constant$keyword$401,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$387))].join('')], 0));
});})(vec__23046,idx,inv,s__23040__$2,temp__4092__auto__))
,cljs.core.constant$keyword$296,cljs.core.constant$keyword$401], null)),iter__23039(cljs.core.rest(s__23040__$2)));
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
clustermap.components.search.t23020.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23022){var self__ = this;
var _23022__$1 = this;return self__.meta23021;
});
clustermap.components.search.t23020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23022,meta23021__$1){var self__ = this;
var _23022__$1 = this;return (new clustermap.components.search.t23020(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.p__22984,self__.map__23019,self__.search_results,self__.map__23018,self__.map__23017,self__.map__23016,meta23021__$1));
});
clustermap.components.search.__GT_t23020 = (function __GT_t23020(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__22984__$1,map__23019__$2,search_results__$1,map__23018__$2,map__23017__$2,map__23016__$2,meta23021){return (new clustermap.components.search.t23020(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,comm__$1,selection_type__$1,owner__$1,constituencies__$1,p__22984__$1,map__23019__$2,search_results__$1,map__23018__$2,map__23017__$2,map__23016__$2,meta23021));
});
}
return (new clustermap.components.search.t23020(investor_companies,selection_value,path_fn,portfolio_companies,search_component,comm,selection_type,owner,constituencies,p__22984,map__23019__$1,search_results,map__23018__$1,map__23017__$1,map__23016__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
