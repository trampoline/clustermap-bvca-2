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
clustermap.components.search.search_result_link = (function search_result_link(p__37555,owner,p__37556){var map__37565 = p__37555;var map__37565__$1 = ((cljs.core.seq_QMARK_(map__37565))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37565):map__37565);var search_result = map__37565__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,cljs.core.constant$keyword$801);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37565__$1,cljs.core.constant$keyword$831);var map__37566 = p__37556;var map__37566__$1 = ((cljs.core.seq_QMARK_(map__37566))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37566):map__37566);var opts = map__37566__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37566__$1,cljs.core.constant$keyword$884);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37566__$1,cljs.core.constant$keyword$894);if(typeof clustermap.components.search.t37567 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t37567 = (function (owner,path_fn,p__37555,map__37566,search_result_link,p__37556,name,comm,search_result,type,map__37565,opts,meta37568){
this.owner = owner;
this.path_fn = path_fn;
this.p__37555 = p__37555;
this.map__37566 = map__37566;
this.search_result_link = search_result_link;
this.p__37556 = p__37556;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__37565 = map__37565;
this.opts = opts;
this.meta37568 = meta37568;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t37567.cljs$lang$type = true;
clustermap.components.search.t37567.cljs$lang$ctorStr = "clustermap.components.search/t37567";
clustermap.components.search.t37567.cljs$lang$ctorPrWriter = ((function (map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t37567");
});})(map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm))
;
clustermap.components.search.t37567.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t37567.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm){
return (function (this$,p__37570){var self__ = this;
var map__37571 = p__37570;var map__37571__$1 = ((cljs.core.seq_QMARK_(map__37571))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37571):map__37571);var state = map__37571__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37571__$1,cljs.core.constant$keyword$837);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__37571,map__37571__$1,state,selected,map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__37572 = l;var G__37572__$1 = (((G__37572 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__37572));var G__37572__$2 = (((G__37572__$1 == null))?null:G__37572__$1.parents(".search-component"));var G__37572__$3 = (((G__37572__$2 == null))?null:G__37572__$2.toggle());return G__37572__$3;
});})(path,this$__$1,map__37571,map__37571__$1,state,selected,map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm))
;
clustermap.components.search.t37567.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm){
return (function (_37569){var self__ = this;
var _37569__$1 = this;return self__.meta37568;
});})(map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm))
;
clustermap.components.search.t37567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm){
return (function (_37569,meta37568__$1){var self__ = this;
var _37569__$1 = this;return (new clustermap.components.search.t37567(self__.owner,self__.path_fn,self__.p__37555,self__.map__37566,self__.search_result_link,self__.p__37556,self__.name,self__.comm,self__.search_result,self__.type,self__.map__37565,self__.opts,meta37568__$1));
});})(map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t37567 = ((function (map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm){
return (function __GT_t37567(owner__$1,path_fn__$1,p__37555__$1,map__37566__$2,search_result_link__$1,p__37556__$1,name__$1,comm__$1,search_result__$1,type__$1,map__37565__$2,opts__$1,meta37568){return (new clustermap.components.search.t37567(owner__$1,path_fn__$1,p__37555__$1,map__37566__$2,search_result_link__$1,p__37556__$1,name__$1,comm__$1,search_result__$1,type__$1,map__37565__$2,opts__$1,meta37568));
});})(map__37565,map__37565__$1,search_result,type,name,map__37566,map__37566__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t37567(owner,path_fn,p__37555,map__37566__$1,search_result_link,p__37556,name,comm,search_result,type,map__37565__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__37573,n){var map__37575 = p__37573;var map__37575__$1 = ((cljs.core.seq_QMARK_(map__37575))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37575):map__37575);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575__$1,cljs.core.constant$keyword$888);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575__$1,cljs.core.constant$keyword$973);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37575__$1,cljs.core.constant$keyword$955);var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$889,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$886,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$887,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__37582 = cljs.core._EQ__EQ_;var expr__37583 = e.keyCode;if(cljs.core.truth_((pred__37582.cljs$core$IFn$_invoke$arity$2 ? pred__37582.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__37583) : pred__37582.call(null,clustermap.components.search.ESCAPE_KEY,expr__37583))))
{var G__37585 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__37585__$1 = (((G__37585 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__37585));var G__37585__$2 = (((G__37585__$1 == null))?null:G__37585__$1.toggle());return G__37585__$2;
} else
{if(cljs.core.truth_((pred__37582.cljs$core$IFn$_invoke$arity$2 ? pred__37582.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__37583) : pred__37582.call(null,clustermap.components.search.ENTER_KEY,expr__37583))))
{var vec__37586 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$974);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37586,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37586,(1),null);var G__37587_37588 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__37587_37589__$1 = (((G__37587_37588 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__37587_37588));var G__37587_37590__$2 = (((G__37587_37589__$1 == null))?null:G__37587_37589__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$839,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__37582.cljs$core$IFn$_invoke$arity$2 ? pred__37582.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__37583) : pred__37582.call(null,clustermap.components.search.UP_ARROW,expr__37583))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$974,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$974);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__37582.cljs$core$IFn$_invoke$arity$2 ? pred__37582.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__37583) : pred__37582.call(null,clustermap.components.search.DOWN_ARROW,expr__37583))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$974,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$974);if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.search_component = (function search_component(p__37591,owner){var map__37623 = p__37591;var map__37623__$1 = ((cljs.core.seq_QMARK_(map__37623))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37623):map__37623);var map__37624 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37623__$1,cljs.core.constant$keyword$948);var map__37624__$1 = ((cljs.core.seq_QMARK_(map__37624))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37624):map__37624);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37624__$1,cljs.core.constant$keyword$801);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37624__$1,cljs.core.constant$keyword$832);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37623__$1,cljs.core.constant$keyword$975);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37623__$1,cljs.core.constant$keyword$976);var map__37625 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__37625__$1 = ((cljs.core.seq_QMARK_(map__37625))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37625):map__37625);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,cljs.core.constant$keyword$884);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37625__$1,cljs.core.constant$keyword$894);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__37626 = search_results;var map__37626__$1 = ((cljs.core.seq_QMARK_(map__37626))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37626):map__37626);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37626__$1,cljs.core.constant$keyword$888);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37626__$1,cljs.core.constant$keyword$973);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37626__$1,cljs.core.constant$keyword$955);if(typeof clustermap.components.search.t37627 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t37627 = (function (search_results,search_component,owner,map__37626,path_fn,view,map__37625,portfolio_companies,map__37623,constituencies,investor_companies,p__37591,map__37624,selection_value,comm,selection_type,meta37628){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.map__37626 = map__37626;
this.path_fn = path_fn;
this.view = view;
this.map__37625 = map__37625;
this.portfolio_companies = portfolio_companies;
this.map__37623 = map__37623;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.p__37591 = p__37591;
this.map__37624 = map__37624;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.meta37628 = meta37628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t37627.cljs$lang$type = true;
clustermap.components.search.t37627.cljs$lang$ctorStr = "clustermap.components.search/t37627";
clustermap.components.search.t37627.cljs$lang$ctorPrWriter = ((function (map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t37627");
});})(map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t37627.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t37627.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$977,e.target.value], null));
});})(this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$977,e.target.value], null));
});})(this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$977,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3543__auto__ = cljs.core.constant$keyword$974.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$974.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$974,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$978,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$814,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$825,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$826,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$814,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function iter__37630(s__37631){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (){var s__37631__$1 = s__37631;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37631__$1);if(temp__4126__auto__)
{var s__37631__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37631__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37631__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37633 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37632 = (0);while(true){
if((i__37632 < size__4267__auto__))
{var vec__37636 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37632);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37636,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37636,(1),null);cljs.core.chunk_append(b__37633,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$877,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$894,self__.comm,cljs.core.constant$keyword$884,self__.path_fn], null),cljs.core.constant$keyword$876,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$837,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$871,((function (i__37632,vec__37636,idx,con,c__4266__auto__,size__4267__auto__,b__37633,s__37631__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$801,cljs.core.constant$keyword$889,cljs.core.array_seq([cljs.core.constant$keyword$803,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$804),cljs.core.constant$keyword$979,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$804)))], 0));
});})(i__37632,vec__37636,idx,con,c__4266__auto__,size__4267__auto__,b__37633,s__37631__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$874,cljs.core.constant$keyword$979], null)));
{
var G__37654 = (i__37632 + (1));
i__37632 = G__37654;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37633),iter__37630(cljs.core.chunk_rest(s__37631__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37633),null);
}
} else
{var vec__37637 = cljs.core.first(s__37631__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37637,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37637,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$877,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$894,self__.comm,cljs.core.constant$keyword$884,self__.path_fn], null),cljs.core.constant$keyword$876,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$837,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$871,((function (vec__37637,idx,con,s__37631__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$801,cljs.core.constant$keyword$889,cljs.core.array_seq([cljs.core.constant$keyword$803,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$804),cljs.core.constant$keyword$979,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$804)))], 0));
});})(vec__37637,idx,con,s__37631__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$874,cljs.core.constant$keyword$979], null)),iter__37630(cljs.core.rest(s__37631__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$826,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$814,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function iter__37638(s__37639){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (){var s__37639__$1 = s__37639;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37639__$1);if(temp__4126__auto__)
{var s__37639__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37639__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37639__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37641 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37640 = (0);while(true){
if((i__37640 < size__4267__auto__))
{var vec__37644 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37640);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37644,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37644,(1),null);cljs.core.chunk_append(b__37641,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$877,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$894,self__.comm,cljs.core.constant$keyword$884,self__.path_fn], null),cljs.core.constant$keyword$876,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$837,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$871,((function (i__37640,vec__37644,idx,pc,c__4266__auto__,size__4267__auto__,b__37641,s__37639__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$801,cljs.core.constant$keyword$886,cljs.core.array_seq([cljs.core.constant$keyword$803,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$897),cljs.core.constant$keyword$979,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$897)))], 0));
});})(i__37640,vec__37644,idx,pc,c__4266__auto__,size__4267__auto__,b__37641,s__37639__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$874,cljs.core.constant$keyword$979], null)));
{
var G__37655 = (i__37640 + (1));
i__37640 = G__37655;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37641),iter__37638(cljs.core.chunk_rest(s__37639__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37641),null);
}
} else
{var vec__37645 = cljs.core.first(s__37639__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37645,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37645,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$877,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$894,self__.comm,cljs.core.constant$keyword$884,self__.path_fn], null),cljs.core.constant$keyword$876,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$837,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$871,((function (vec__37645,idx,pc,s__37639__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$801,cljs.core.constant$keyword$886,cljs.core.array_seq([cljs.core.constant$keyword$803,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$897),cljs.core.constant$keyword$979,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$897)))], 0));
});})(vec__37645,idx,pc,s__37639__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$874,cljs.core.constant$keyword$979], null)),iter__37638(cljs.core.rest(s__37639__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$826,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$814,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function iter__37646(s__37647){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (){var s__37647__$1 = s__37647;while(true){
var temp__4126__auto__ = cljs.core.seq(s__37647__$1);if(temp__4126__auto__)
{var s__37647__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__37647__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__37647__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__37649 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__37648 = (0);while(true){
if((i__37648 < size__4267__auto__))
{var vec__37652 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__37648);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37652,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37652,(1),null);cljs.core.chunk_append(b__37649,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$877,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$894,self__.comm,cljs.core.constant$keyword$884,self__.path_fn], null),cljs.core.constant$keyword$876,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$837,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$871,((function (i__37648,vec__37652,idx,inv,c__4266__auto__,size__4267__auto__,b__37649,s__37647__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$801,cljs.core.constant$keyword$887,cljs.core.array_seq([cljs.core.constant$keyword$803,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$900),cljs.core.constant$keyword$979,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$900)))], 0));
});})(i__37648,vec__37652,idx,inv,c__4266__auto__,size__4267__auto__,b__37649,s__37647__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$874,cljs.core.constant$keyword$979], null)));
{
var G__37656 = (i__37648 + (1));
i__37648 = G__37656;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__37649),iter__37646(cljs.core.chunk_rest(s__37647__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__37649),null);
}
} else
{var vec__37653 = cljs.core.first(s__37647__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37653,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37653,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$877,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$894,self__.comm,cljs.core.constant$keyword$884,self__.path_fn], null),cljs.core.constant$keyword$876,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$837,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$871,((function (vec__37653,idx,inv,s__37647__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$801,cljs.core.constant$keyword$887,cljs.core.array_seq([cljs.core.constant$keyword$803,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$900),cljs.core.constant$keyword$979,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$900)))], 0));
});})(vec__37653,idx,inv,s__37647__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$874,cljs.core.constant$keyword$979], null)),iter__37646(cljs.core.rest(s__37647__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t37627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (_37629){var self__ = this;
var _37629__$1 = this;return self__.meta37628;
});})(map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t37627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function (_37629,meta37628__$1){var self__ = this;
var _37629__$1 = this;return (new clustermap.components.search.t37627(self__.search_results,self__.search_component,self__.owner,self__.map__37626,self__.path_fn,self__.view,self__.map__37625,self__.portfolio_companies,self__.map__37623,self__.constituencies,self__.investor_companies,self__.p__37591,self__.map__37624,self__.selection_value,self__.comm,self__.selection_type,meta37628__$1));
});})(map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t37627 = ((function (map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results){
return (function __GT_t37627(search_results__$1,search_component__$1,owner__$1,map__37626__$2,path_fn__$2,view__$1,map__37625__$2,portfolio_companies__$1,map__37623__$2,constituencies__$1,investor_companies__$1,p__37591__$1,map__37624__$2,selection_value__$1,comm__$1,selection_type__$1,meta37628){return (new clustermap.components.search.t37627(search_results__$1,search_component__$1,owner__$1,map__37626__$2,path_fn__$2,view__$1,map__37625__$2,portfolio_companies__$1,map__37623__$2,constituencies__$1,investor_companies__$1,p__37591__$1,map__37624__$2,selection_value__$1,comm__$1,selection_type__$1,meta37628));
});})(map__37625,map__37625__$1,path_fn,comm,path_fn__$1,map__37626,map__37626__$1,investor_companies,portfolio_companies,constituencies,map__37623,map__37623__$1,map__37624,map__37624__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t37627(search_results,search_component,owner,map__37626__$1,path_fn__$1,view,map__37625__$1,portfolio_companies,map__37623__$1,constituencies,investor_companies,p__37591,map__37624__$1,selection_value,comm,selection_type,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$879,shared,cljs.core.constant$keyword$882,document.getElementById(elem_id)], null));
});
