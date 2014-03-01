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
clustermap.components.search.search_result_link = (function search_result_link(p__23466,owner,p__23467){var map__23476 = p__23466;var map__23476__$1 = ((cljs.core.seq_QMARK_(map__23476))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23476):map__23476);var search_result = map__23476__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23476__$1,cljs.core.constant$keyword$305);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23476__$1,cljs.core.constant$keyword$315);var map__23477 = p__23467;var map__23477__$1 = ((cljs.core.seq_QMARK_(map__23477))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23477):map__23477);var opts = map__23477__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23477__$1,cljs.core.constant$keyword$341);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23477__$1,cljs.core.constant$keyword$342);if(typeof clustermap.components.search.t23478 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23478 = (function (map__23476,map__23477,opts,path_fn,p__23466,p__23467,name,comm,search_result,owner,type,search_result_link,meta23479){
this.map__23476 = map__23476;
this.map__23477 = map__23477;
this.opts = opts;
this.path_fn = path_fn;
this.p__23466 = p__23466;
this.p__23467 = p__23467;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta23479 = meta23479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23478.cljs$lang$type = true;
clustermap.components.search.t23478.cljs$lang$ctorStr = "clustermap.components.search/t23478";
clustermap.components.search.t23478.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23478");
});
clustermap.components.search.t23478.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23478.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__23481){var self__ = this;
var map__23482 = p__23481;var map__23482__$1 = ((cljs.core.seq_QMARK_(map__23482))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23482):map__23482);var state = map__23482__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23482__$1,cljs.core.constant$keyword$320);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__23483 = l;var G__23483__$1 = (((G__23483 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23483));var G__23483__$2 = (((G__23483__$1 == null))?null:G__23483__$1.parents(".search-component"));var G__23483__$3 = (((G__23483__$2 == null))?null:G__23483__$2.toggle());return G__23483__$3;
})},sablono.interpreter.interpret(self__.name),(cljs.core.truth_(selected)?"*":null)));
});
clustermap.components.search.t23478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23480){var self__ = this;
var _23480__$1 = this;return self__.meta23479;
});
clustermap.components.search.t23478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23480,meta23479__$1){var self__ = this;
var _23480__$1 = this;return (new clustermap.components.search.t23478(self__.map__23476,self__.map__23477,self__.opts,self__.path_fn,self__.p__23466,self__.p__23467,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta23479__$1));
});
clustermap.components.search.__GT_t23478 = (function __GT_t23478(map__23476__$2,map__23477__$2,opts__$1,path_fn__$1,p__23466__$1,p__23467__$1,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta23479){return (new clustermap.components.search.t23478(map__23476__$2,map__23477__$2,opts__$1,path_fn__$1,p__23466__$1,p__23467__$1,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta23479));
});
}
return (new clustermap.components.search.t23478(map__23476__$1,map__23477__$1,opts,path_fn,p__23466,p__23467,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__23484,n){var map__23486 = p__23484;var map__23486__$1 = ((cljs.core.seq_QMARK_(map__23486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23486):map__23486);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23486__$1,cljs.core.constant$keyword$395);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23486__$1,cljs.core.constant$keyword$454);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23486__$1,cljs.core.constant$keyword$385);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$340,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$338,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$339,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__23493 = cljs.core._EQ__EQ_;var expr__23494 = e.keyCode;if(cljs.core.truth_((pred__23493.cljs$core$IFn$_invoke$arity$2 ? pred__23493.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__23494) : pred__23493.call(null,clustermap.components.search.ESCAPE_KEY,expr__23494))))
{var G__23496 = om.core.get_node(owner,"search-component");var G__23496__$1 = (((G__23496 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23496));var G__23496__$2 = (((G__23496__$1 == null))?null:G__23496__$1.toggle());return G__23496__$2;
} else
{if(cljs.core.truth_((pred__23493.cljs$core$IFn$_invoke$arity$2 ? pred__23493.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__23494) : pred__23493.call(null,clustermap.components.search.ENTER_KEY,expr__23494))))
{var vec__23497 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$455);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23497,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23497,1,null);var G__23498_23499 = om.core.get_node(owner,"search-component");var G__23498_23500__$1 = (((G__23498_23499 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__23498_23499));var G__23498_23501__$2 = (((G__23498_23500__$1 == null))?null:G__23498_23500__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$321,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__23493.cljs$core$IFn$_invoke$arity$2 ? pred__23493.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__23494) : pred__23493.call(null,clustermap.components.search.UP_ARROW,expr__23494))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$455,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$455);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__23493.cljs$core$IFn$_invoke$arity$2 ? pred__23493.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__23494) : pred__23493.call(null,clustermap.components.search.DOWN_ARROW,expr__23494))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$455,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$455);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(p__23502,owner){var map__23534 = p__23502;var map__23534__$1 = ((cljs.core.seq_QMARK_(map__23534))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23534):map__23534);var map__23535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23534__$1,cljs.core.constant$keyword$348);var map__23535__$1 = ((cljs.core.seq_QMARK_(map__23535))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23535):map__23535);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535__$1,cljs.core.constant$keyword$305);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23535__$1,cljs.core.constant$keyword$266);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23534__$1,cljs.core.constant$keyword$456);var map__23536 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__23536__$1 = ((cljs.core.seq_QMARK_(map__23536))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23536):map__23536);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23536__$1,cljs.core.constant$keyword$341);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23536__$1,cljs.core.constant$keyword$342);var map__23537 = search_results;var map__23537__$1 = ((cljs.core.seq_QMARK_(map__23537))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23537):map__23537);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23537__$1,cljs.core.constant$keyword$395);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23537__$1,cljs.core.constant$keyword$454);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23537__$1,cljs.core.constant$keyword$385);if(typeof clustermap.components.search.t23538 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t23538 = (function (investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__23502,comm,selection_type,map__23537,owner,constituencies,search_results,map__23536,map__23535,map__23534,meta23539){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.search_component = search_component;
this.p__23502 = p__23502;
this.comm = comm;
this.selection_type = selection_type;
this.map__23537 = map__23537;
this.owner = owner;
this.constituencies = constituencies;
this.search_results = search_results;
this.map__23536 = map__23536;
this.map__23535 = map__23535;
this.map__23534 = map__23534;
this.meta23539 = meta23539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t23538.cljs$lang$type = true;
clustermap.components.search.t23538.cljs$lang$ctorStr = "clustermap.components.search/t23538";
clustermap.components.search.t23538.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t23538");
});
clustermap.components.search.t23538.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t23538.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$457,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$457,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$457,""], null));
return om.core.get_node(self__.owner,"search-field").value = "";
})},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3406__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3406__auto____$1))
{return or__3406__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$455.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$455.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$455,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$458,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$458,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23541(s__23542){return (new cljs.core.LazySeq(null,(function (){var s__23542__$1 = s__23542;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23542__$1);if(temp__4092__auto__)
{var s__23542__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23542__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23542__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23544 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23543 = 0;while(true){
if((i__23543 < size__4116__auto__))
{var vec__23547 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23543);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23547,1,null);cljs.core.chunk_append(b__23544,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$332,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$342,self__.comm,cljs.core.constant$keyword$341,self__.path_fn], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$320,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$333,((function (i__23543,vec__23547,idx,con,c__4115__auto__,size__4116__auto__,b__23544,s__23542__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$305,cljs.core.constant$keyword$340,cljs.core.array_seq([cljs.core.constant$keyword$301,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$365),cljs.core.constant$keyword$459,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$365))].join('')], 0));
});})(i__23543,vec__23547,idx,con,c__4115__auto__,size__4116__auto__,b__23544,s__23542__$2,temp__4092__auto__))
,cljs.core.constant$keyword$331,cljs.core.constant$keyword$459], null)));
{
var G__23565 = (i__23543 + 1);
i__23543 = G__23565;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23544),iter__23541(cljs.core.chunk_rest(s__23542__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23544),null);
}
} else
{var vec__23548 = cljs.core.first(s__23542__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23548,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23548,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$332,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$342,self__.comm,cljs.core.constant$keyword$341,self__.path_fn], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$320,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$333,((function (vec__23548,idx,con,s__23542__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$305,cljs.core.constant$keyword$340,cljs.core.array_seq([cljs.core.constant$keyword$301,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$365),cljs.core.constant$keyword$459,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$365))].join('')], 0));
});})(vec__23548,idx,con,s__23542__$2,temp__4092__auto__))
,cljs.core.constant$keyword$331,cljs.core.constant$keyword$459], null)),iter__23541(cljs.core.rest(s__23542__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$458,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,"search-results-header"], null),"Companies"], null)], null),(function (){var iter__4117__auto__ = (function iter__23549(s__23550){return (new cljs.core.LazySeq(null,(function (){var s__23550__$1 = s__23550;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23550__$1);if(temp__4092__auto__)
{var s__23550__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23550__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23550__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23552 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23551 = 0;while(true){
if((i__23551 < size__4116__auto__))
{var vec__23555 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23551);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23555,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23555,1,null);cljs.core.chunk_append(b__23552,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$332,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$342,self__.comm,cljs.core.constant$keyword$341,self__.path_fn], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$320,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$333,((function (i__23551,vec__23555,idx,pc,c__4115__auto__,size__4116__auto__,b__23552,s__23550__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$305,cljs.core.constant$keyword$338,cljs.core.array_seq([cljs.core.constant$keyword$301,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$359),cljs.core.constant$keyword$459,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$359))].join('')], 0));
});})(i__23551,vec__23555,idx,pc,c__4115__auto__,size__4116__auto__,b__23552,s__23550__$2,temp__4092__auto__))
,cljs.core.constant$keyword$331,cljs.core.constant$keyword$459], null)));
{
var G__23566 = (i__23551 + 1);
i__23551 = G__23566;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23552),iter__23549(cljs.core.chunk_rest(s__23550__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23552),null);
}
} else
{var vec__23556 = cljs.core.first(s__23550__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23556,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23556,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$332,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$342,self__.comm,cljs.core.constant$keyword$341,self__.path_fn], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$320,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$333,((function (vec__23556,idx,pc,s__23550__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$305,cljs.core.constant$keyword$338,cljs.core.array_seq([cljs.core.constant$keyword$301,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$359),cljs.core.constant$keyword$459,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$359))].join('')], 0));
});})(vec__23556,idx,pc,s__23550__$2,temp__4092__auto__))
,cljs.core.constant$keyword$331,cljs.core.constant$keyword$459], null)),iter__23549(cljs.core.rest(s__23550__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$458,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$295,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4117__auto__ = (function iter__23557(s__23558){return (new cljs.core.LazySeq(null,(function (){var s__23558__$1 = s__23558;while(true){
var temp__4092__auto__ = cljs.core.seq(s__23558__$1);if(temp__4092__auto__)
{var s__23558__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__23558__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__23558__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__23560 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__23559 = 0;while(true){
if((i__23559 < size__4116__auto__))
{var vec__23563 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__23559);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23563,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23563,1,null);cljs.core.chunk_append(b__23560,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$332,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$342,self__.comm,cljs.core.constant$keyword$341,self__.path_fn], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$320,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$333,((function (i__23559,vec__23563,idx,inv,c__4115__auto__,size__4116__auto__,b__23560,s__23558__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$305,cljs.core.constant$keyword$339,cljs.core.array_seq([cljs.core.constant$keyword$301,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$363),cljs.core.constant$keyword$459,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$363))].join('')], 0));
});})(i__23559,vec__23563,idx,inv,c__4115__auto__,size__4116__auto__,b__23560,s__23558__$2,temp__4092__auto__))
,cljs.core.constant$keyword$331,cljs.core.constant$keyword$459], null)));
{
var G__23567 = (i__23559 + 1);
i__23559 = G__23567;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__23560),iter__23557(cljs.core.chunk_rest(s__23558__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__23560),null);
}
} else
{var vec__23564 = cljs.core.first(s__23558__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23564,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23564,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$332,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$342,self__.comm,cljs.core.constant$keyword$341,self__.path_fn], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$320,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$333,((function (vec__23564,idx,inv,s__23558__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$305,cljs.core.constant$keyword$339,cljs.core.array_seq([cljs.core.constant$keyword$301,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$363),cljs.core.constant$keyword$459,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$363))].join('')], 0));
});})(vec__23564,idx,inv,s__23558__$2,temp__4092__auto__))
,cljs.core.constant$keyword$331,cljs.core.constant$keyword$459], null)),iter__23557(cljs.core.rest(s__23558__$2)));
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
clustermap.components.search.t23538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23540){var self__ = this;
var _23540__$1 = this;return self__.meta23539;
});
clustermap.components.search.t23538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23540,meta23539__$1){var self__ = this;
var _23540__$1 = this;return (new clustermap.components.search.t23538(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.search_component,self__.p__23502,self__.comm,self__.selection_type,self__.map__23537,self__.owner,self__.constituencies,self__.search_results,self__.map__23536,self__.map__23535,self__.map__23534,meta23539__$1));
});
clustermap.components.search.__GT_t23538 = (function __GT_t23538(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__23502__$1,comm__$1,selection_type__$1,map__23537__$2,owner__$1,constituencies__$1,search_results__$1,map__23536__$2,map__23535__$2,map__23534__$2,meta23539){return (new clustermap.components.search.t23538(investor_companies__$1,selection_value__$1,path_fn__$1,portfolio_companies__$1,search_component__$1,p__23502__$1,comm__$1,selection_type__$1,map__23537__$2,owner__$1,constituencies__$1,search_results__$1,map__23536__$2,map__23535__$2,map__23534__$2,meta23539));
});
}
return (new clustermap.components.search.t23538(investor_companies,selection_value,path_fn,portfolio_companies,search_component,p__23502,comm,selection_type,map__23537__$1,owner,constituencies,search_results,map__23536__$1,map__23535__$1,map__23534__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.search.search_component,document.getElementById(elem_id));
});
