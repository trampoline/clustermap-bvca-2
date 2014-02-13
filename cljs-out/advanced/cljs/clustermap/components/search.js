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
clustermap.components.search.extract_id = (function extract_id(type,obj){var pred__22124 = cljs.core._EQ_;var expr__22125 = type;if(cljs.core.truth_((pred__22124.cljs$core$IFn$_invoke$arity$2 ? pred__22124.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$280,expr__22125) : pred__22124.call(null,cljs.core.constant$keyword$280,expr__22125))))
{return cljs.core.constant$keyword$356.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__22124.cljs$core$IFn$_invoke$arity$2 ? pred__22124.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$281,expr__22125) : pred__22124.call(null,cljs.core.constant$keyword$281,expr__22125))))
{return cljs.core.constant$keyword$357.cljs$core$IFn$_invoke$arity$1(obj);
} else
{if(cljs.core.truth_((pred__22124.cljs$core$IFn$_invoke$arity$2 ? pred__22124.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$282,expr__22125) : pred__22124.call(null,cljs.core.constant$keyword$282,expr__22125))))
{return cljs.core.constant$keyword$358.cljs$core$IFn$_invoke$arity$1(obj);
} else
{return null;
}
}
}
});
clustermap.components.search.search_result_link = (function search_result_link(search_result,owner,p__22127){var map__22133 = p__22127;var map__22133__$1 = ((cljs.core.seq_QMARK_(map__22133))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22133):map__22133);var opts = map__22133__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22133__$1,cljs.core.constant$keyword$247);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22133__$1,cljs.core.constant$keyword$283);if(typeof clustermap.components.search.t22134 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22134 = (function (comm,type,opts,map__22133,p__22127,owner,search_result,search_result_link,meta22135){
this.comm = comm;
this.type = type;
this.opts = opts;
this.map__22133 = map__22133;
this.p__22127 = p__22127;
this.owner = owner;
this.search_result = search_result;
this.search_result_link = search_result_link;
this.meta22135 = meta22135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22134.cljs$lang$type = true;
clustermap.components.search.t22134.cljs$lang$ctorStr = "clustermap.components.search/t22134";
clustermap.components.search.t22134.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22134");
});
clustermap.components.search.t22134.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22134.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.li({"className": (cljs.core.truth_(cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(state))?"selected":null)},React.DOM.a({"ref": "link", "onClick": (function (e){var l = om.core.get_node(self__.owner,"link");var G__22137_22138 = l;var G__22137_22139__$1 = (((G__22137_22138 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22137_22138));var G__22137_22140__$2 = (((G__22137_22139__$1 == null))?null:G__22137_22139__$1.parents(".search-component"));var G__22137_22141__$3 = (((G__22137_22140__$2 == null))?null:G__22137_22140__$2.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,clustermap.components.search.extract_id(self__.type,cljs.core.deref(self__.search_result))], null)], null));
})},sablono.interpreter.interpret((self__.search_result.cljs$core$IFn$_invoke$arity$1 ? self__.search_result.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$257) : self__.search_result.call(null,cljs.core.constant$keyword$257))),(cljs.core.truth_(cljs.core.constant$keyword$262.cljs$core$IFn$_invoke$arity$1(state))?"*":null)));
});
clustermap.components.search.t22134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22136){var self__ = this;
var _22136__$1 = this;return self__.meta22135;
});
clustermap.components.search.t22134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22136,meta22135__$1){var self__ = this;
var _22136__$1 = this;return (new clustermap.components.search.t22134(self__.comm,self__.type,self__.opts,self__.map__22133,self__.p__22127,self__.owner,self__.search_result,self__.search_result_link,meta22135__$1));
});
clustermap.components.search.__GT_t22134 = (function __GT_t22134(comm__$1,type__$1,opts__$1,map__22133__$2,p__22127__$1,owner__$1,search_result__$1,search_result_link__$1,meta22135){return (new clustermap.components.search.t22134(comm__$1,type__$1,opts__$1,map__22133__$2,p__22127__$1,owner__$1,search_result__$1,search_result_link__$1,meta22135));
});
}
return (new clustermap.components.search.t22134(comm,type,opts,map__22133__$1,p__22127,owner,search_result,search_result_link,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__22142,n){var map__22144 = p__22142;var map__22144__$1 = ((cljs.core.seq_QMARK_(map__22144))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22144):map__22144);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22144__$1,cljs.core.constant$keyword$304);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22144__$1,cljs.core.constant$keyword$361);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22144__$1,cljs.core.constant$keyword$293);var cons = (function (){var or__3406__auto__ = constituencies;if(cljs.core.truth_(or__3406__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$282,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$280,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$281,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__22151 = cljs.core._EQ__EQ_;var expr__22152 = e.keyCode;if(cljs.core.truth_((pred__22151.cljs$core$IFn$_invoke$arity$2 ? pred__22151.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__22152) : pred__22151.call(null,clustermap.components.search.ESCAPE_KEY,expr__22152))))
{var G__22154 = om.core.get_node(owner,"search-component");var G__22154__$1 = (((G__22154 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22154));var G__22154__$2 = (((G__22154__$1 == null))?null:G__22154__$1.toggle());return G__22154__$2;
} else
{if(cljs.core.truth_((pred__22151.cljs$core$IFn$_invoke$arity$2 ? pred__22151.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__22152) : pred__22151.call(null,clustermap.components.search.ENTER_KEY,expr__22152))))
{var vec__22155 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$362);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22155,0,null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22155,1,null);var G__22156_22157 = om.core.get_node(owner,"search-component");var G__22156_22158__$1 = (((G__22156_22157 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__22156_22157));var G__22156_22159__$2 = (((G__22156_22158__$1 == null))?null:G__22156_22158__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,res], null)], null));
} else
{if(cljs.core.truth_((pred__22151.cljs$core$IFn$_invoke$arity$2 ? pred__22151.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__22152) : pred__22151.call(null,clustermap.components.search.UP_ARROW,expr__22152))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$362,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$362);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})() - 1));
} else
{if(cljs.core.truth_((pred__22151.cljs$core$IFn$_invoke$arity$2 ? pred__22151.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__22152) : pred__22151.call(null,clustermap.components.search.DOWN_ARROW,expr__22152))))
{return om.core.set_state_BANG_(owner,cljs.core.constant$keyword$362,((function (){var or__3406__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$362);if(cljs.core.truth_(or__3406__auto__))
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
clustermap.components.search.search_component = (function search_component(search_results,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$283);var map__22188 = search_results;var map__22188__$1 = ((cljs.core.seq_QMARK_(map__22188))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22188):map__22188);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22188__$1,cljs.core.constant$keyword$304);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22188__$1,cljs.core.constant$keyword$361);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22188__$1,cljs.core.constant$keyword$293);if(typeof clustermap.components.search.t22189 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t22189 = (function (constituencies,portfolio_companies,investor_companies,map__22188,comm,owner,search_results,search_component,meta22190){
this.constituencies = constituencies;
this.portfolio_companies = portfolio_companies;
this.investor_companies = investor_companies;
this.map__22188 = map__22188;
this.comm = comm;
this.owner = owner;
this.search_results = search_results;
this.search_component = search_component;
this.meta22190 = meta22190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t22189.cljs$lang$type = true;
clustermap.components.search.t22189.cljs$lang$ctorStr = "clustermap.components.search/t22189";
clustermap.components.search.t22189.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.search/t22189");
});
clustermap.components.search.t22189.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t22189.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"onKeyDown": (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
}), "id": "search", "className": "search-component", "ref": "search-component"},React.DOM.h2(null,"Search"),React.DOM.div(null,(om.dom.input.cljs$core$IFn$_invoke$arity$1 ? om.dom.input.cljs$core$IFn$_invoke$arity$1({"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$363,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"}) : om.dom.input.call(null,{"onChange": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$363,e.target.value], null));
}), "placeholder": "Enter your search", "type": "text", "ref": "search-field"})),React.DOM.button({"onClick": (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$363,""], null));
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
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,0),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3406__auto__ = cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return 0;
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$362.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$362,selected_idx):null);return React.DOM.div({"className": "search-results"},cljs.core.apply.cljs$core$IFn$_invoke$arity$3(om.dom.ul,{},cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.not_empty(idx_cons))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Constituencies")], null),(function (){var iter__4117__auto__ = (function iter__22192(s__22193){return (new cljs.core.LazySeq(null,(function (){var s__22193__$1 = s__22193;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22193__$1);if(temp__4092__auto__)
{var s__22193__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22193__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22193__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22195 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22194 = 0;while(true){
if((i__22194 < size__4116__auto__))
{var vec__22198 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22194);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22198,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22198,1,null);cljs.core.chunk_append(b__22195,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$283,self__.comm,cljs.core.constant$keyword$247,cljs.core.constant$keyword$282], null),cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$275,((function (i__22194,vec__22198,idx,con,c__4115__auto__,size__4116__auto__,b__22195,s__22193__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$364,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$358))].join(''));
});})(i__22194,vec__22198,idx,con,c__4115__auto__,size__4116__auto__,b__22195,s__22193__$2,temp__4092__auto__))
,cljs.core.constant$keyword$273,cljs.core.constant$keyword$364], null)));
{
var G__22216 = (i__22194 + 1);
i__22194 = G__22216;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22195),iter__22192(cljs.core.chunk_rest(s__22193__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22195),null);
}
} else
{var vec__22199 = cljs.core.first(s__22193__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22199,0,null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22199,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$283,self__.comm,cljs.core.constant$keyword$247,cljs.core.constant$keyword$282], null),cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$275,((function (vec__22199,idx,con,s__22193__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$364,[cljs.core.str("constituency:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$358))].join(''));
});})(vec__22199,idx,con,s__22193__$2,temp__4092__auto__))
,cljs.core.constant$keyword$273,cljs.core.constant$keyword$364], null)),iter__22192(cljs.core.rest(s__22193__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_cons);
})()):null),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Companies")], null),(function (){var iter__4117__auto__ = (function iter__22200(s__22201){return (new cljs.core.LazySeq(null,(function (){var s__22201__$1 = s__22201;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22201__$1);if(temp__4092__auto__)
{var s__22201__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22201__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22201__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22203 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22202 = 0;while(true){
if((i__22202 < size__4116__auto__))
{var vec__22206 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22202);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22206,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22206,1,null);cljs.core.chunk_append(b__22203,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$283,self__.comm,cljs.core.constant$keyword$247,cljs.core.constant$keyword$280], null),cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$275,((function (i__22202,vec__22206,idx,pc,c__4115__auto__,size__4116__auto__,b__22203,s__22201__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$364,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$356))].join(''));
});})(i__22202,vec__22206,idx,pc,c__4115__auto__,size__4116__auto__,b__22203,s__22201__$2,temp__4092__auto__))
,cljs.core.constant$keyword$273,cljs.core.constant$keyword$364], null)));
{
var G__22217 = (i__22202 + 1);
i__22202 = G__22217;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22203),iter__22200(cljs.core.chunk_rest(s__22201__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22203),null);
}
} else
{var vec__22207 = cljs.core.first(s__22201__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207,0,null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22207,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$283,self__.comm,cljs.core.constant$keyword$247,cljs.core.constant$keyword$280], null),cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$275,((function (vec__22207,idx,pc,s__22201__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$364,[cljs.core.str("portfolio-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$356))].join(''));
});})(vec__22207,idx,pc,s__22201__$2,temp__4092__auto__))
,cljs.core.constant$keyword$273,cljs.core.constant$keyword$364], null)),iter__22200(cljs.core.rest(s__22201__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4117__auto__(idx_pcs);
})()):null),cljs.core.array_seq([(cljs.core.truth_(cljs.core.not_empty(idx_invs))?cljs.core.into(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.li({"className": "search-results-header"},"Investors")], null),(function (){var iter__4117__auto__ = (function iter__22208(s__22209){return (new cljs.core.LazySeq(null,(function (){var s__22209__$1 = s__22209;while(true){
var temp__4092__auto__ = cljs.core.seq(s__22209__$1);if(temp__4092__auto__)
{var s__22209__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__22209__$2))
{var c__4115__auto__ = cljs.core.chunk_first(s__22209__$2);var size__4116__auto__ = cljs.core.count(c__4115__auto__);var b__22211 = cljs.core.chunk_buffer(size__4116__auto__);if((function (){var i__22210 = 0;while(true){
if((i__22210 < size__4116__auto__))
{var vec__22214 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4115__auto__,i__22210);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22214,1,null);cljs.core.chunk_append(b__22211,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$283,self__.comm,cljs.core.constant$keyword$247,cljs.core.constant$keyword$281], null),cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$275,((function (i__22210,vec__22214,idx,inv,c__4115__auto__,size__4116__auto__,b__22211,s__22209__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$364,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$357))].join(''));
});})(i__22210,vec__22214,idx,inv,c__4115__auto__,size__4116__auto__,b__22211,s__22209__$2,temp__4092__auto__))
,cljs.core.constant$keyword$273,cljs.core.constant$keyword$364], null)));
{
var G__22218 = (i__22210 + 1);
i__22210 = G__22218;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__22211),iter__22208(cljs.core.chunk_rest(s__22209__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__22211),null);
}
} else
{var vec__22215 = cljs.core.first(s__22209__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22215,0,null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22215,1,null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$283,self__.comm,cljs.core.constant$keyword$247,cljs.core.constant$keyword$281], null),cljs.core.constant$keyword$270,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$275,((function (vec__22215,idx,inv,s__22209__$2,temp__4092__auto__){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,cljs.core.constant$keyword$364,[cljs.core.str("investor-company:"),cljs.core.str(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$357))].join(''));
});})(vec__22215,idx,inv,s__22209__$2,temp__4092__auto__))
,cljs.core.constant$keyword$273,cljs.core.constant$keyword$364], null)),iter__22208(cljs.core.rest(s__22209__$2)));
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
clustermap.components.search.t22189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22191){var self__ = this;
var _22191__$1 = this;return self__.meta22190;
});
clustermap.components.search.t22189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22191,meta22190__$1){var self__ = this;
var _22191__$1 = this;return (new clustermap.components.search.t22189(self__.constituencies,self__.portfolio_companies,self__.investor_companies,self__.map__22188,self__.comm,self__.owner,self__.search_results,self__.search_component,meta22190__$1));
});
clustermap.components.search.__GT_t22189 = (function __GT_t22189(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22188__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22190){return (new clustermap.components.search.t22189(constituencies__$1,portfolio_companies__$1,investor_companies__$1,map__22188__$2,comm__$1,owner__$1,search_results__$1,search_component__$1,meta22190));
});
}
return (new clustermap.components.search.t22189(constituencies,portfolio_companies,investor_companies,map__22188__$1,comm,owner,search_results,search_component,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.om.burrow(clustermap.components.search.search_component,cljs.core.constant$keyword$365),document.getElementById(elem_id));
});
