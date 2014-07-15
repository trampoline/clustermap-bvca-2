// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.search');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
clustermap.components.search.ESCAPE_KEY = (27);
clustermap.components.search.ENTER_KEY = (13);
clustermap.components.search.LEFT_ARROW = (37);
clustermap.components.search.UP_ARROW = (38);
clustermap.components.search.RIGHT_ARROW = (39);
clustermap.components.search.DOWN_ARROW = (40);
clustermap.components.search.search_result_link = (function search_result_link(p__35549,owner,p__35550){var map__35559 = p__35549;var map__35559__$1 = ((cljs.core.seq_QMARK_(map__35559))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35559):map__35559);var search_result = map__35559__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35559__$1,cljs.core.constant$keyword$679);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35559__$1,cljs.core.constant$keyword$710);var map__35560 = p__35550;var map__35560__$1 = ((cljs.core.seq_QMARK_(map__35560))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35560):map__35560);var opts = map__35560__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35560__$1,cljs.core.constant$keyword$764);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35560__$1,cljs.core.constant$keyword$774);if(typeof clustermap.components.search.t35561 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t35561 = (function (owner,path_fn,map__35560,search_result_link,p__35549,name,comm,search_result,type,map__35559,p__35550,opts,meta35562){
this.owner = owner;
this.path_fn = path_fn;
this.map__35560 = map__35560;
this.search_result_link = search_result_link;
this.p__35549 = p__35549;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__35559 = map__35559;
this.p__35550 = p__35550;
this.opts = opts;
this.meta35562 = meta35562;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t35561.cljs$lang$type = true;
clustermap.components.search.t35561.cljs$lang$ctorStr = "clustermap.components.search/t35561";
clustermap.components.search.t35561.cljs$lang$ctorPrWriter = ((function (map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t35561");
});})(map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm))
;
clustermap.components.search.t35561.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t35561.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm){
return (function (this$,p__35564){var self__ = this;
var map__35565 = p__35564;var map__35565__$1 = ((cljs.core.seq_QMARK_(map__35565))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35565):map__35565);var state = map__35565__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35565__$1,cljs.core.constant$keyword$716);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__35565,map__35565__$1,state,selected,map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__35566 = l;var G__35566__$1 = (((G__35566 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35566));var G__35566__$2 = (((G__35566__$1 == null))?null:G__35566__$1.parents(".search-component"));var G__35566__$3 = (((G__35566__$2 == null))?null:G__35566__$2.toggle());return G__35566__$3;
});})(path,this$__$1,map__35565,map__35565__$1,state,selected,map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm))
;
clustermap.components.search.t35561.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm){
return (function (_35563){var self__ = this;
var _35563__$1 = this;return self__.meta35562;
});})(map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm))
;
clustermap.components.search.t35561.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm){
return (function (_35563,meta35562__$1){var self__ = this;
var _35563__$1 = this;return (new clustermap.components.search.t35561(self__.owner,self__.path_fn,self__.map__35560,self__.search_result_link,self__.p__35549,self__.name,self__.comm,self__.search_result,self__.type,self__.map__35559,self__.p__35550,self__.opts,meta35562__$1));
});})(map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t35561 = ((function (map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm){
return (function __GT_t35561(owner__$1,path_fn__$1,map__35560__$2,search_result_link__$1,p__35549__$1,name__$1,comm__$1,search_result__$1,type__$1,map__35559__$2,p__35550__$1,opts__$1,meta35562){return (new clustermap.components.search.t35561(owner__$1,path_fn__$1,map__35560__$2,search_result_link__$1,p__35549__$1,name__$1,comm__$1,search_result__$1,type__$1,map__35559__$2,p__35550__$1,opts__$1,meta35562));
});})(map__35559,map__35559__$1,search_result,type,name,map__35560,map__35560__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t35561(owner,path_fn,map__35560__$1,search_result_link,p__35549,name,comm,search_result,type,map__35559__$1,p__35550,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__35567,n){var map__35569 = p__35567;var map__35569__$1 = ((cljs.core.seq_QMARK_(map__35569))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35569):map__35569);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35569__$1,cljs.core.constant$keyword$768);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35569__$1,cljs.core.constant$keyword$853);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35569__$1,cljs.core.constant$keyword$835);var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3543__auto__ = portfolio_companies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3543__auto__ = investor_companies;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$769,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$766,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$767,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__35576 = cljs.core._EQ__EQ_;var expr__35577 = e.keyCode;if(cljs.core.truth_((pred__35576.cljs$core$IFn$_invoke$arity$2 ? pred__35576.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__35577) : pred__35576.call(null,clustermap.components.search.ESCAPE_KEY,expr__35577))))
{var G__35579 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__35579__$1 = (((G__35579 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35579));var G__35579__$2 = (((G__35579__$1 == null))?null:G__35579__$1.toggle());return G__35579__$2;
} else
{if(cljs.core.truth_((pred__35576.cljs$core$IFn$_invoke$arity$2 ? pred__35576.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__35577) : pred__35576.call(null,clustermap.components.search.ENTER_KEY,expr__35577))))
{var vec__35580 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$854);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580,(1),null);var G__35581_35582 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__35581_35583__$1 = (((G__35581_35582 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__35581_35582));var G__35581_35584__$2 = (((G__35581_35583__$1 == null))?null:G__35581_35583__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$718,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__35576.cljs$core$IFn$_invoke$arity$2 ? pred__35576.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__35577) : pred__35576.call(null,clustermap.components.search.UP_ARROW,expr__35577))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$854,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$854);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__35576.cljs$core$IFn$_invoke$arity$2 ? pred__35576.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__35577) : pred__35576.call(null,clustermap.components.search.DOWN_ARROW,expr__35577))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$854,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$854);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() + (1)));
} else
{return null;
}
}
}
}
});
clustermap.components.search.search_component = (function search_component(p__35585,owner){var map__35617 = p__35585;var map__35617__$1 = ((cljs.core.seq_QMARK_(map__35617))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35617):map__35617);var map__35618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,cljs.core.constant$keyword$828);var map__35618__$1 = ((cljs.core.seq_QMARK_(map__35618))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35618):map__35618);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35618__$1,cljs.core.constant$keyword$679);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35618__$1,cljs.core.constant$keyword$711);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,cljs.core.constant$keyword$855);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35617__$1,cljs.core.constant$keyword$856);var map__35619 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__35619__$1 = ((cljs.core.seq_QMARK_(map__35619))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35619):map__35619);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35619__$1,cljs.core.constant$keyword$764);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35619__$1,cljs.core.constant$keyword$774);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__35620 = search_results;var map__35620__$1 = ((cljs.core.seq_QMARK_(map__35620))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35620):map__35620);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35620__$1,cljs.core.constant$keyword$768);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35620__$1,cljs.core.constant$keyword$853);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35620__$1,cljs.core.constant$keyword$835);if(typeof clustermap.components.search.t35621 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t35621 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,map__35618,constituencies,p__35585,map__35617,investor_companies,selection_value,comm,map__35619,map__35620,selection_type,meta35622){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__35618 = map__35618;
this.constituencies = constituencies;
this.p__35585 = p__35585;
this.map__35617 = map__35617;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.map__35619 = map__35619;
this.map__35620 = map__35620;
this.selection_type = selection_type;
this.meta35622 = meta35622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t35621.cljs$lang$type = true;
clustermap.components.search.t35621.cljs$lang$ctorStr = "clustermap.components.search/t35621";
clustermap.components.search.t35621.cljs$lang$ctorPrWriter = ((function (map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t35621");
});})(map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35621.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t35621.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$857,e.target.value], null));
});})(this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$857,e.target.value], null));
});})(this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$857,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3543__auto__ = cljs.core.constant$keyword$854.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$854.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$854,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$858,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$692,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$704,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$705,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$692,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function iter__35624(s__35625){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35625__$1 = s__35625;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35625__$1);if(temp__4126__auto__)
{var s__35625__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35625__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__35625__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__35627 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__35626 = (0);while(true){
if((i__35626 < size__4267__auto__))
{var vec__35630 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__35626);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630,(1),null);cljs.core.chunk_append(b__35627,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$757,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$774,self__.comm,cljs.core.constant$keyword$764,self__.path_fn], null),cljs.core.constant$keyword$756,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$716,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$751,((function (i__35626,vec__35630,idx,con,c__4266__auto__,size__4267__auto__,b__35627,s__35625__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$679,cljs.core.constant$keyword$769,cljs.core.array_seq([cljs.core.constant$keyword$681,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$682),cljs.core.constant$keyword$859,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$682)))], 0));
});})(i__35626,vec__35630,idx,con,c__4266__auto__,size__4267__auto__,b__35627,s__35625__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$754,cljs.core.constant$keyword$859], null)));
{
var G__35648 = (i__35626 + (1));
i__35626 = G__35648;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35627),iter__35624(cljs.core.chunk_rest(s__35625__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35627),null);
}
} else
{var vec__35631 = cljs.core.first(s__35625__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35631,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35631,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$757,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$774,self__.comm,cljs.core.constant$keyword$764,self__.path_fn], null),cljs.core.constant$keyword$756,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$716,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$751,((function (vec__35631,idx,con,s__35625__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$679,cljs.core.constant$keyword$769,cljs.core.array_seq([cljs.core.constant$keyword$681,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$682),cljs.core.constant$keyword$859,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$682)))], 0));
});})(vec__35631,idx,con,s__35625__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$754,cljs.core.constant$keyword$859], null)),iter__35624(cljs.core.rest(s__35625__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$705,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$692,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function iter__35632(s__35633){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35633__$1 = s__35633;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35633__$1);if(temp__4126__auto__)
{var s__35633__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35633__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__35633__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__35635 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__35634 = (0);while(true){
if((i__35634 < size__4267__auto__))
{var vec__35638 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__35634);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35638,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35638,(1),null);cljs.core.chunk_append(b__35635,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$757,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$774,self__.comm,cljs.core.constant$keyword$764,self__.path_fn], null),cljs.core.constant$keyword$756,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$716,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$751,((function (i__35634,vec__35638,idx,pc,c__4266__auto__,size__4267__auto__,b__35635,s__35633__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$679,cljs.core.constant$keyword$766,cljs.core.array_seq([cljs.core.constant$keyword$681,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$777),cljs.core.constant$keyword$859,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$777)))], 0));
});})(i__35634,vec__35638,idx,pc,c__4266__auto__,size__4267__auto__,b__35635,s__35633__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$754,cljs.core.constant$keyword$859], null)));
{
var G__35649 = (i__35634 + (1));
i__35634 = G__35649;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35635),iter__35632(cljs.core.chunk_rest(s__35633__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35635),null);
}
} else
{var vec__35639 = cljs.core.first(s__35633__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35639,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35639,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$757,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$774,self__.comm,cljs.core.constant$keyword$764,self__.path_fn], null),cljs.core.constant$keyword$756,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$716,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$751,((function (vec__35639,idx,pc,s__35633__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$679,cljs.core.constant$keyword$766,cljs.core.array_seq([cljs.core.constant$keyword$681,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$777),cljs.core.constant$keyword$859,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$777)))], 0));
});})(vec__35639,idx,pc,s__35633__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$754,cljs.core.constant$keyword$859], null)),iter__35632(cljs.core.rest(s__35633__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$705,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$692,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function iter__35640(s__35641){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (){var s__35641__$1 = s__35641;while(true){
var temp__4126__auto__ = cljs.core.seq(s__35641__$1);if(temp__4126__auto__)
{var s__35641__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__35641__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__35641__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__35643 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__35642 = (0);while(true){
if((i__35642 < size__4267__auto__))
{var vec__35646 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__35642);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35646,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35646,(1),null);cljs.core.chunk_append(b__35643,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$757,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$774,self__.comm,cljs.core.constant$keyword$764,self__.path_fn], null),cljs.core.constant$keyword$756,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$716,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$751,((function (i__35642,vec__35646,idx,inv,c__4266__auto__,size__4267__auto__,b__35643,s__35641__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$679,cljs.core.constant$keyword$767,cljs.core.array_seq([cljs.core.constant$keyword$681,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$780),cljs.core.constant$keyword$859,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$780)))], 0));
});})(i__35642,vec__35646,idx,inv,c__4266__auto__,size__4267__auto__,b__35643,s__35641__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$754,cljs.core.constant$keyword$859], null)));
{
var G__35650 = (i__35642 + (1));
i__35642 = G__35650;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__35643),iter__35640(cljs.core.chunk_rest(s__35641__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__35643),null);
}
} else
{var vec__35647 = cljs.core.first(s__35641__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$757,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$774,self__.comm,cljs.core.constant$keyword$764,self__.path_fn], null),cljs.core.constant$keyword$756,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$716,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$751,((function (vec__35647,idx,inv,s__35641__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$679,cljs.core.constant$keyword$767,cljs.core.array_seq([cljs.core.constant$keyword$681,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$780),cljs.core.constant$keyword$859,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$780)))], 0));
});})(vec__35647,idx,inv,s__35641__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$754,cljs.core.constant$keyword$859], null)),iter__35640(cljs.core.rest(s__35641__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (_35623){var self__ = this;
var _35623__$1 = this;return self__.meta35622;
});})(map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t35621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function (_35623,meta35622__$1){var self__ = this;
var _35623__$1 = this;return (new clustermap.components.search.t35621(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__35618,self__.constituencies,self__.p__35585,self__.map__35617,self__.investor_companies,self__.selection_value,self__.comm,self__.map__35619,self__.map__35620,self__.selection_type,meta35622__$1));
});})(map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t35621 = ((function (map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results){
return (function __GT_t35621(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__35618__$2,constituencies__$1,p__35585__$1,map__35617__$2,investor_companies__$1,selection_value__$1,comm__$1,map__35619__$2,map__35620__$2,selection_type__$1,meta35622){return (new clustermap.components.search.t35621(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__35618__$2,constituencies__$1,p__35585__$1,map__35617__$2,investor_companies__$1,selection_value__$1,comm__$1,map__35619__$2,map__35620__$2,selection_type__$1,meta35622));
});})(map__35619,map__35619__$1,path_fn,comm,path_fn__$1,map__35620,map__35620__$1,investor_companies,portfolio_companies,constituencies,map__35617,map__35617__$1,map__35618,map__35618__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t35621(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,map__35618__$1,constituencies,p__35585,map__35617__$1,investor_companies,selection_value,comm,map__35619__$1,map__35620__$1,selection_type,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$759,shared,cljs.core.constant$keyword$762,document.getElementById(elem_id)], null));
});
