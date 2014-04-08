// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('sablono.core');
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
clustermap.components.search.search_result_link = (function search_result_link(p__34439,owner,p__34440){var map__34449 = p__34439;var map__34449__$1 = ((cljs.core.seq_QMARK_(map__34449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34449):map__34449);var search_result = map__34449__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34449__$1,cljs.core.constant$keyword$588);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34449__$1,cljs.core.constant$keyword$598);var map__34450 = p__34440;var map__34450__$1 = ((cljs.core.seq_QMARK_(map__34450))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34450):map__34450);var opts = map__34450__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34450__$1,cljs.core.constant$keyword$636);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34450__$1,cljs.core.constant$keyword$637);if(typeof clustermap.components.search.t34451 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34451 = (function (opts,p__34439,map__34449,path_fn,map__34450,p__34440,name,comm,search_result,owner,type,search_result_link,meta34452){
this.opts = opts;
this.p__34439 = p__34439;
this.map__34449 = map__34449;
this.path_fn = path_fn;
this.map__34450 = map__34450;
this.p__34440 = p__34440;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.owner = owner;
this.type = type;
this.search_result_link = search_result_link;
this.meta34452 = meta34452;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34451.cljs$lang$type = true;
clustermap.components.search.t34451.cljs$lang$ctorStr = "clustermap.components.search/t34451";
clustermap.components.search.t34451.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34451");
});
clustermap.components.search.t34451.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34451.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__34454){var self__ = this;
var map__34455 = p__34454;var map__34455__$1 = ((cljs.core.seq_QMARK_(map__34455))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34455):map__34455);var state = map__34455__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34455__$1,cljs.core.constant$keyword$603);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__34456 = l;var G__34456__$1 = (((G__34456 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34456));var G__34456__$2 = (((G__34456__$1 == null))?null:G__34456__$1.parents(".search-component"));var G__34456__$3 = (((G__34456__$2 == null))?null:G__34456__$2.toggle());return G__34456__$3;
})},sablono.interpreter.interpret(self__.name)));
});
clustermap.components.search.t34451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34453){var self__ = this;
var _34453__$1 = this;return self__.meta34452;
});
clustermap.components.search.t34451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34453,meta34452__$1){var self__ = this;
var _34453__$1 = this;return (new clustermap.components.search.t34451(self__.opts,self__.p__34439,self__.map__34449,self__.path_fn,self__.map__34450,self__.p__34440,self__.name,self__.comm,self__.search_result,self__.owner,self__.type,self__.search_result_link,meta34452__$1));
});
clustermap.components.search.__GT_t34451 = (function __GT_t34451(opts__$1,p__34439__$1,map__34449__$2,path_fn__$1,map__34450__$2,p__34440__$1,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta34452){return (new clustermap.components.search.t34451(opts__$1,p__34439__$1,map__34449__$2,path_fn__$1,map__34450__$2,p__34440__$1,name__$1,comm__$1,search_result__$1,owner__$1,type__$1,search_result_link__$1,meta34452));
});
}
return (new clustermap.components.search.t34451(opts,p__34439,map__34449__$1,path_fn,map__34450__$1,p__34440,name,comm,search_result,owner,type,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__34457,n){var map__34459 = p__34457;var map__34459__$1 = ((cljs.core.seq_QMARK_(map__34459))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34459):map__34459);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34459__$1,cljs.core.constant$keyword$689);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34459__$1,cljs.core.constant$keyword$748);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34459__$1,cljs.core.constant$keyword$679);var cons = (function (){var or__3441__auto__ = constituencies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3441__auto__ = portfolio_companies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3441__auto__ = investor_companies;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$635,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$633,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$634,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__34466 = cljs.core._EQ__EQ_;var expr__34467 = e.keyCode;if(cljs.core.truth_((pred__34466.cljs$core$IFn$_invoke$arity$2 ? pred__34466.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__34467) : pred__34466.call(null,clustermap.components.search.ESCAPE_KEY,expr__34467))))
{var G__34469 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34469__$1 = (((G__34469 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34469));var G__34469__$2 = (((G__34469__$1 == null))?null:G__34469__$1.toggle());return G__34469__$2;
} else
{if(cljs.core.truth_((pred__34466.cljs$core$IFn$_invoke$arity$2 ? pred__34466.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__34467) : pred__34466.call(null,clustermap.components.search.ENTER_KEY,expr__34467))))
{var vec__34470 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$749);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34470,1,null);var G__34471_34472 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__34471_34473__$1 = (((G__34471_34472 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__34471_34472));var G__34471_34474__$2 = (((G__34471_34473__$1 == null))?null:G__34471_34473__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__34466.cljs$core$IFn$_invoke$arity$2 ? pred__34466.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__34467) : pred__34466.call(null,clustermap.components.search.UP_ARROW,expr__34467))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$749,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$749);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__34466.cljs$core$IFn$_invoke$arity$2 ? pred__34466.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__34467) : pred__34466.call(null,clustermap.components.search.DOWN_ARROW,expr__34467))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$749,((function (){var or__3441__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$749);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
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
clustermap.components.search.search_component = (function search_component(p__34475,owner){var map__34507 = p__34475;var map__34507__$1 = ((cljs.core.seq_QMARK_(map__34507))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34507):map__34507);var map__34508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34507__$1,cljs.core.constant$keyword$644);var map__34508__$1 = ((cljs.core.seq_QMARK_(map__34508))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34508):map__34508);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34508__$1,cljs.core.constant$keyword$588);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34508__$1,cljs.core.constant$keyword$549);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34507__$1,cljs.core.constant$keyword$750);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34507__$1,cljs.core.constant$keyword$751);var map__34509 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__34509__$1 = ((cljs.core.seq_QMARK_(map__34509))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34509):map__34509);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34509__$1,cljs.core.constant$keyword$636);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34509__$1,cljs.core.constant$keyword$637);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__34510 = search_results;var map__34510__$1 = ((cljs.core.seq_QMARK_(map__34510))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34510):map__34510);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34510__$1,cljs.core.constant$keyword$689);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34510__$1,cljs.core.constant$keyword$748);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34510__$1,cljs.core.constant$keyword$679);if(typeof clustermap.components.search.t34511 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t34511 = (function (investor_companies,selection_value,path_fn,portfolio_companies,view,search_component,p__34475,map__34509,map__34508,comm,selection_type,owner,constituencies,map__34507,map__34510,search_results,meta34512){
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.path_fn = path_fn;
this.portfolio_companies = portfolio_companies;
this.view = view;
this.search_component = search_component;
this.p__34475 = p__34475;
this.map__34509 = map__34509;
this.map__34508 = map__34508;
this.comm = comm;
this.selection_type = selection_type;
this.owner = owner;
this.constituencies = constituencies;
this.map__34507 = map__34507;
this.map__34510 = map__34510;
this.search_results = search_results;
this.meta34512 = meta34512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t34511.cljs$lang$type = true;
clustermap.components.search.t34511.cljs$lang$ctorStr = "clustermap.components.search/t34511";
clustermap.components.search.t34511.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.search/t34511");
});
clustermap.components.search.t34511.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t34511.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
})},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$752,e.target.value], null));
})}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$752,e.target.value], null));
})}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$752,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
})},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3441__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3441__auto____$1))
{return or__3441__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3441__auto__ = cljs.core.constant$keyword$749.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$749.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$749,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$753,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,"search-results"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$592,(cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$753,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,"search-results-header"], null),"Constituencies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34514(s__34515){return (new cljs.core.LazySeq(null,(function (){var s__34515__$1 = s__34515;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34515__$1);if(temp__4092__auto__)
{var s__34515__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34515__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34515__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34517 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34516 = 0;while(true){
if((i__34516 < size__4157__auto__))
{var vec__34520 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34516);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34520,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34520,1,null);cljs.core.chunk_append(b__34517,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$624,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$637,self__.comm,cljs.core.constant$keyword$636,self__.path_fn], null),cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$625,((function (i__34516,vec__34520,idx,con,c__4156__auto__,size__4157__auto__,b__34517,s__34515__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$588,cljs.core.constant$keyword$635,cljs.core.array_seq([cljs.core.constant$keyword$584,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$659),cljs.core.constant$keyword$754,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$659))].join('')], 0));
});})(i__34516,vec__34520,idx,con,c__4156__auto__,size__4157__auto__,b__34517,s__34515__$2,temp__4092__auto__))
,cljs.core.constant$keyword$621,cljs.core.constant$keyword$754], null)));
{
var G__34538 = (i__34516 + 1);
i__34516 = G__34538;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34517),iter__34514(cljs.core.chunk_rest(s__34515__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34517),null);
}
} else
{var vec__34521 = cljs.core.first(s__34515__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34521,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34521,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$624,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$637,self__.comm,cljs.core.constant$keyword$636,self__.path_fn], null),cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$625,((function (vec__34521,idx,con,s__34515__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$588,cljs.core.constant$keyword$635,cljs.core.array_seq([cljs.core.constant$keyword$584,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$659),cljs.core.constant$keyword$754,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$659))].join('')], 0));
});})(vec__34521,idx,con,s__34515__$2,temp__4092__auto__))
,cljs.core.constant$keyword$621,cljs.core.constant$keyword$754], null)),iter__34514(cljs.core.rest(s__34515__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$753,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,"search-results-header"], null),"Investor-backed companies"], null)], null),(function (){var iter__4158__auto__ = (function iter__34522(s__34523){return (new cljs.core.LazySeq(null,(function (){var s__34523__$1 = s__34523;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34523__$1);if(temp__4092__auto__)
{var s__34523__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34523__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34523__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34525 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34524 = 0;while(true){
if((i__34524 < size__4157__auto__))
{var vec__34528 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34524);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34528,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34528,1,null);cljs.core.chunk_append(b__34525,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$624,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$637,self__.comm,cljs.core.constant$keyword$636,self__.path_fn], null),cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$625,((function (i__34524,vec__34528,idx,pc,c__4156__auto__,size__4157__auto__,b__34525,s__34523__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$588,cljs.core.constant$keyword$633,cljs.core.array_seq([cljs.core.constant$keyword$584,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$696),cljs.core.constant$keyword$754,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$696))].join('')], 0));
});})(i__34524,vec__34528,idx,pc,c__4156__auto__,size__4157__auto__,b__34525,s__34523__$2,temp__4092__auto__))
,cljs.core.constant$keyword$621,cljs.core.constant$keyword$754], null)));
{
var G__34539 = (i__34524 + 1);
i__34524 = G__34539;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34525),iter__34522(cljs.core.chunk_rest(s__34523__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34525),null);
}
} else
{var vec__34529 = cljs.core.first(s__34523__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34529,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34529,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$624,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$637,self__.comm,cljs.core.constant$keyword$636,self__.path_fn], null),cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$625,((function (vec__34529,idx,pc,s__34523__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$588,cljs.core.constant$keyword$633,cljs.core.array_seq([cljs.core.constant$keyword$584,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$696),cljs.core.constant$keyword$754,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$696))].join('')], 0));
});})(vec__34529,idx,pc,s__34523__$2,temp__4092__auto__))
,cljs.core.constant$keyword$621,cljs.core.constant$keyword$754], null)),iter__34522(cljs.core.rest(s__34523__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_pcs);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$753,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$593,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$578,"search-results-header"], null),"Investors"], null)], null),(function (){var iter__4158__auto__ = (function iter__34530(s__34531){return (new cljs.core.LazySeq(null,(function (){var s__34531__$1 = s__34531;while(true){
var temp__4092__auto__ = cljs.core.seq(s__34531__$1);if(temp__4092__auto__)
{var s__34531__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__34531__$2))
{var c__4156__auto__ = cljs.core.chunk_first(s__34531__$2);var size__4157__auto__ = cljs.core.count(c__4156__auto__);var b__34533 = cljs.core.chunk_buffer(size__4157__auto__);if((function (){var i__34532 = 0;while(true){
if((i__34532 < size__4157__auto__))
{var vec__34536 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4156__auto__,i__34532);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34536,1,null);cljs.core.chunk_append(b__34533,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$624,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$637,self__.comm,cljs.core.constant$keyword$636,self__.path_fn], null),cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$625,((function (i__34532,vec__34536,idx,inv,c__4156__auto__,size__4157__auto__,b__34533,s__34531__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$588,cljs.core.constant$keyword$634,cljs.core.array_seq([cljs.core.constant$keyword$584,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$657),cljs.core.constant$keyword$754,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$657))].join('')], 0));
});})(i__34532,vec__34536,idx,inv,c__4156__auto__,size__4157__auto__,b__34533,s__34531__$2,temp__4092__auto__))
,cljs.core.constant$keyword$621,cljs.core.constant$keyword$754], null)));
{
var G__34540 = (i__34532 + 1);
i__34532 = G__34540;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__34533),iter__34530(cljs.core.chunk_rest(s__34531__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__34533),null);
}
} else
{var vec__34537 = cljs.core.first(s__34531__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34537,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34537,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$624,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$637,self__.comm,cljs.core.constant$keyword$636,self__.path_fn], null),cljs.core.constant$keyword$618,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$603,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$625,((function (vec__34537,idx,inv,s__34531__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$588,cljs.core.constant$keyword$634,cljs.core.array_seq([cljs.core.constant$keyword$584,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$657),cljs.core.constant$keyword$754,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$657))].join('')], 0));
});})(vec__34537,idx,inv,s__34531__$2,temp__4092__auto__))
,cljs.core.constant$keyword$621,cljs.core.constant$keyword$754], null)),iter__34530(cljs.core.rest(s__34531__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4158__auto__(idx_invs);
})()):null)], null)], null);
})():null)));
});
clustermap.components.search.t34511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34513){var self__ = this;
var _34513__$1 = this;return self__.meta34512;
});
clustermap.components.search.t34511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34513,meta34512__$1){var self__ = this;
var _34513__$1 = this;return (new clustermap.components.search.t34511(self__.investor_companies,self__.selection_value,self__.path_fn,self__.portfolio_companies,self__.view,self__.search_component,self__.p__34475,self__.map__34509,self__.map__34508,self__.comm,self__.selection_type,self__.owner,self__.constituencies,self__.map__34507,self__.map__34510,self__.search_results,meta34512__$1));
});
clustermap.components.search.__GT_t34511 = (function __GT_t34511(investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,p__34475__$1,map__34509__$2,map__34508__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__34507__$2,map__34510__$2,search_results__$1,meta34512){return (new clustermap.components.search.t34511(investor_companies__$1,selection_value__$1,path_fn__$2,portfolio_companies__$1,view__$1,search_component__$1,p__34475__$1,map__34509__$2,map__34508__$2,comm__$1,selection_type__$1,owner__$1,constituencies__$1,map__34507__$2,map__34510__$2,search_results__$1,meta34512));
});
}
return (new clustermap.components.search.t34511(investor_companies,selection_value,path_fn__$1,portfolio_companies,view,search_component,p__34475,map__34509__$1,map__34508__$1,comm,selection_type,owner,constituencies,map__34507__$1,map__34510__$1,search_results,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$623,shared,cljs.core.constant$keyword$628,document.getElementById(elem_id)], null));
});
