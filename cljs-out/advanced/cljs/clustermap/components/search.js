// Compiled by ClojureScript 0.0-2268
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
clustermap.components.search.search_result_link = (function search_result_link(p__39510,owner,p__39511){var map__39520 = p__39510;var map__39520__$1 = ((cljs.core.seq_QMARK_(map__39520))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39520):map__39520);var search_result = map__39520__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39520__$1,cljs.core.constant$keyword$806);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39520__$1,cljs.core.constant$keyword$836);var map__39521 = p__39511;var map__39521__$1 = ((cljs.core.seq_QMARK_(map__39521))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39521):map__39521);var opts = map__39521__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39521__$1,cljs.core.constant$keyword$889);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39521__$1,cljs.core.constant$keyword$899);if(typeof clustermap.components.search.t39522 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t39522 = (function (p__39511,owner,path_fn,search_result_link,name,p__39510,comm,search_result,type,map__39520,map__39521,opts,meta39523){
this.p__39511 = p__39511;
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.name = name;
this.p__39510 = p__39510;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.map__39520 = map__39520;
this.map__39521 = map__39521;
this.opts = opts;
this.meta39523 = meta39523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t39522.cljs$lang$type = true;
clustermap.components.search.t39522.cljs$lang$ctorStr = "clustermap.components.search/t39522";
clustermap.components.search.t39522.cljs$lang$ctorPrWriter = ((function (map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t39522");
});})(map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm))
;
clustermap.components.search.t39522.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t39522.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm){
return (function (this$,p__39525){var self__ = this;
var map__39526 = p__39525;var map__39526__$1 = ((cljs.core.seq_QMARK_(map__39526))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39526):map__39526);var state = map__39526__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39526__$1,cljs.core.constant$keyword$842);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__39526,map__39526__$1,state,selected,map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__39527 = l;var G__39527__$1 = (((G__39527 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__39527));var G__39527__$2 = (((G__39527__$1 == null))?null:G__39527__$1.parents(".search-component"));var G__39527__$3 = (((G__39527__$2 == null))?null:G__39527__$2.toggle());return G__39527__$3;
});})(path,this$__$1,map__39526,map__39526__$1,state,selected,map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm))
;
clustermap.components.search.t39522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm){
return (function (_39524){var self__ = this;
var _39524__$1 = this;return self__.meta39523;
});})(map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm))
;
clustermap.components.search.t39522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm){
return (function (_39524,meta39523__$1){var self__ = this;
var _39524__$1 = this;return (new clustermap.components.search.t39522(self__.p__39511,self__.owner,self__.path_fn,self__.search_result_link,self__.name,self__.p__39510,self__.comm,self__.search_result,self__.type,self__.map__39520,self__.map__39521,self__.opts,meta39523__$1));
});})(map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t39522 = ((function (map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm){
return (function __GT_t39522(p__39511__$1,owner__$1,path_fn__$1,search_result_link__$1,name__$1,p__39510__$1,comm__$1,search_result__$1,type__$1,map__39520__$2,map__39521__$2,opts__$1,meta39523){return (new clustermap.components.search.t39522(p__39511__$1,owner__$1,path_fn__$1,search_result_link__$1,name__$1,p__39510__$1,comm__$1,search_result__$1,type__$1,map__39520__$2,map__39521__$2,opts__$1,meta39523));
});})(map__39520,map__39520__$1,search_result,type,name,map__39521,map__39521__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t39522(p__39511,owner,path_fn,search_result_link,name,p__39510,comm,search_result,type,map__39520__$1,map__39521__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__39528,n){var map__39530 = p__39528;var map__39530__$1 = ((cljs.core.seq_QMARK_(map__39530))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39530):map__39530);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39530__$1,cljs.core.constant$keyword$893);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39530__$1,cljs.core.constant$keyword$978);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39530__$1,cljs.core.constant$keyword$960);var cons = (function (){var or__3543__auto__ = constituencies;if(cljs.core.truth_(or__3543__auto__))
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
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$894,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$891,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{if(true)
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$892,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);
} else
{return null;
}
}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__39537 = cljs.core._EQ__EQ_;var expr__39538 = e.keyCode;if(cljs.core.truth_((pred__39537.cljs$core$IFn$_invoke$arity$2 ? pred__39537.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__39538) : pred__39537.call(null,clustermap.components.search.ESCAPE_KEY,expr__39538))))
{var G__39540 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__39540__$1 = (((G__39540 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__39540));var G__39540__$2 = (((G__39540__$1 == null))?null:G__39540__$1.toggle());return G__39540__$2;
} else
{if(cljs.core.truth_((pred__39537.cljs$core$IFn$_invoke$arity$2 ? pred__39537.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__39538) : pred__39537.call(null,clustermap.components.search.ENTER_KEY,expr__39538))))
{var vec__39541 = clustermap.components.search.nth_search_result(cljs.core.deref(search_results),(function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$979);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39541,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39541,(1),null);var G__39542_39543 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__39542_39544__$1 = (((G__39542_39543 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__39542_39543));var G__39542_39545__$2 = (((G__39542_39544__$1 == null))?null:G__39542_39544__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$844,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__39537.cljs$core$IFn$_invoke$arity$2 ? pred__39537.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__39538) : pred__39537.call(null,clustermap.components.search.UP_ARROW,expr__39538))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$979,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$979);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__39537.cljs$core$IFn$_invoke$arity$2 ? pred__39537.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__39538) : pred__39537.call(null,clustermap.components.search.DOWN_ARROW,expr__39538))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$979,((function (){var or__3543__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$979);if(cljs.core.truth_(or__3543__auto__))
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
clustermap.components.search.search_component = (function search_component(p__39546,owner){var map__39578 = p__39546;var map__39578__$1 = ((cljs.core.seq_QMARK_(map__39578))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39578):map__39578);var map__39579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,cljs.core.constant$keyword$953);var map__39579__$1 = ((cljs.core.seq_QMARK_(map__39579))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39579):map__39579);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,cljs.core.constant$keyword$806);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39579__$1,cljs.core.constant$keyword$837);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,cljs.core.constant$keyword$980);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39578__$1,cljs.core.constant$keyword$981);var map__39580 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__39580__$1 = ((cljs.core.seq_QMARK_(map__39580))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39580):map__39580);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39580__$1,cljs.core.constant$keyword$889);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39580__$1,cljs.core.constant$keyword$899);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__39581 = search_results;var map__39581__$1 = ((cljs.core.seq_QMARK_(map__39581))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39581):map__39581);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39581__$1,cljs.core.constant$keyword$893);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39581__$1,cljs.core.constant$keyword$978);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39581__$1,cljs.core.constant$keyword$960);if(typeof clustermap.components.search.t39582 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t39582 = (function (p__39546,search_results,search_component,owner,path_fn,map__39581,view,portfolio_companies,constituencies,map__39580,investor_companies,selection_value,comm,selection_type,map__39578,map__39579,meta39583){
this.p__39546 = p__39546;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.map__39581 = map__39581;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__39580 = map__39580;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.map__39578 = map__39578;
this.map__39579 = map__39579;
this.meta39583 = meta39583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t39582.cljs$lang$type = true;
clustermap.components.search.t39582.cljs$lang$ctorStr = "clustermap.components.search/t39582";
clustermap.components.search.t39582.cljs$lang$ctorPrWriter = ((function (map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.search/t39582");
});})(map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t39582.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t39582.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"ref": "search-component", "className": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$982,e.target.value], null));
});})(this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$982,e.target.value], null));
});})(this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$982,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3543__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3543__auto____$1))
{return or__3543__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3543__auto__ = cljs.core.constant$keyword$979.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$979.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$979,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$983,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$819,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$830,cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$831,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$819,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function iter__39585(s__39586){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (){var s__39586__$1 = s__39586;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39586__$1);if(temp__4126__auto__)
{var s__39586__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39586__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__39586__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__39588 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__39587 = (0);while(true){
if((i__39587 < size__4267__auto__))
{var vec__39591 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__39587);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39591,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39591,(1),null);cljs.core.chunk_append(b__39588,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$882,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$899,self__.comm,cljs.core.constant$keyword$889,self__.path_fn], null),cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$842,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$876,((function (i__39587,vec__39591,idx,con,c__4266__auto__,size__4267__auto__,b__39588,s__39586__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$806,cljs.core.constant$keyword$894,cljs.core.array_seq([cljs.core.constant$keyword$808,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$809),cljs.core.constant$keyword$984,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$809)))], 0));
});})(i__39587,vec__39591,idx,con,c__4266__auto__,size__4267__auto__,b__39588,s__39586__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$879,cljs.core.constant$keyword$984], null)));
{
var G__39609 = (i__39587 + (1));
i__39587 = G__39609;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39588),iter__39585(cljs.core.chunk_rest(s__39586__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39588),null);
}
} else
{var vec__39592 = cljs.core.first(s__39586__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39592,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39592,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$882,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$899,self__.comm,cljs.core.constant$keyword$889,self__.path_fn], null),cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$842,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$876,((function (vec__39592,idx,con,s__39586__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$806,cljs.core.constant$keyword$894,cljs.core.array_seq([cljs.core.constant$keyword$808,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$809),cljs.core.constant$keyword$984,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$809)))], 0));
});})(vec__39592,idx,con,s__39586__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$879,cljs.core.constant$keyword$984], null)),iter__39585(cljs.core.rest(s__39586__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_cons);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$831,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$819,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function iter__39593(s__39594){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (){var s__39594__$1 = s__39594;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39594__$1);if(temp__4126__auto__)
{var s__39594__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39594__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__39594__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__39596 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__39595 = (0);while(true){
if((i__39595 < size__4267__auto__))
{var vec__39599 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__39595);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39599,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39599,(1),null);cljs.core.chunk_append(b__39596,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$882,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$899,self__.comm,cljs.core.constant$keyword$889,self__.path_fn], null),cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$842,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$876,((function (i__39595,vec__39599,idx,pc,c__4266__auto__,size__4267__auto__,b__39596,s__39594__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$806,cljs.core.constant$keyword$891,cljs.core.array_seq([cljs.core.constant$keyword$808,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$902),cljs.core.constant$keyword$984,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$902)))], 0));
});})(i__39595,vec__39599,idx,pc,c__4266__auto__,size__4267__auto__,b__39596,s__39594__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$879,cljs.core.constant$keyword$984], null)));
{
var G__39610 = (i__39595 + (1));
i__39595 = G__39610;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39596),iter__39593(cljs.core.chunk_rest(s__39594__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39596),null);
}
} else
{var vec__39600 = cljs.core.first(s__39594__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39600,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39600,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$882,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$899,self__.comm,cljs.core.constant$keyword$889,self__.path_fn], null),cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$842,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$876,((function (vec__39600,idx,pc,s__39594__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$806,cljs.core.constant$keyword$891,cljs.core.array_seq([cljs.core.constant$keyword$808,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$902),cljs.core.constant$keyword$984,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$902)))], 0));
});})(vec__39600,idx,pc,s__39594__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$879,cljs.core.constant$keyword$984], null)),iter__39593(cljs.core.rest(s__39594__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_pcs);
})():null),cljs.core.filter(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$831,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$819,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4268__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function iter__39601(s__39602){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (){var s__39602__$1 = s__39602;while(true){
var temp__4126__auto__ = cljs.core.seq(s__39602__$1);if(temp__4126__auto__)
{var s__39602__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__39602__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__39602__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__39604 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__39603 = (0);while(true){
if((i__39603 < size__4267__auto__))
{var vec__39607 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__39603);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39607,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39607,(1),null);cljs.core.chunk_append(b__39604,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$882,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$899,self__.comm,cljs.core.constant$keyword$889,self__.path_fn], null),cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$842,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$876,((function (i__39603,vec__39607,idx,inv,c__4266__auto__,size__4267__auto__,b__39604,s__39602__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$806,cljs.core.constant$keyword$892,cljs.core.array_seq([cljs.core.constant$keyword$808,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$905),cljs.core.constant$keyword$984,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$905)))], 0));
});})(i__39603,vec__39607,idx,inv,c__4266__auto__,size__4267__auto__,b__39604,s__39602__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$879,cljs.core.constant$keyword$984], null)));
{
var G__39611 = (i__39603 + (1));
i__39603 = G__39611;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__39604),iter__39601(cljs.core.chunk_rest(s__39602__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__39604),null);
}
} else
{var vec__39608 = cljs.core.first(s__39602__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39608,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39608,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$882,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$899,self__.comm,cljs.core.constant$keyword$889,self__.path_fn], null),cljs.core.constant$keyword$881,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$842,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$876,((function (vec__39608,idx,inv,s__39602__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$806,cljs.core.constant$keyword$892,cljs.core.array_seq([cljs.core.constant$keyword$808,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$905),cljs.core.constant$keyword$984,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$905)))], 0));
});})(vec__39608,idx,inv,s__39602__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$879,cljs.core.constant$keyword$984], null)),iter__39601(cljs.core.rest(s__39602__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
;return iter__4268__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t39582.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (_39584){var self__ = this;
var _39584__$1 = this;return self__.meta39583;
});})(map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t39582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function (_39584,meta39583__$1){var self__ = this;
var _39584__$1 = this;return (new clustermap.components.search.t39582(self__.p__39546,self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.map__39581,self__.view,self__.portfolio_companies,self__.constituencies,self__.map__39580,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.map__39578,self__.map__39579,meta39583__$1));
});})(map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t39582 = ((function (map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results){
return (function __GT_t39582(p__39546__$1,search_results__$1,search_component__$1,owner__$1,path_fn__$2,map__39581__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__39580__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__39578__$2,map__39579__$2,meta39583){return (new clustermap.components.search.t39582(p__39546__$1,search_results__$1,search_component__$1,owner__$1,path_fn__$2,map__39581__$2,view__$1,portfolio_companies__$1,constituencies__$1,map__39580__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,map__39578__$2,map__39579__$2,meta39583));
});})(map__39580,map__39580__$1,path_fn,comm,path_fn__$1,map__39581,map__39581__$1,investor_companies,portfolio_companies,constituencies,map__39578,map__39578__$1,map__39579,map__39579__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t39582(p__39546,search_results,search_component,owner,path_fn__$1,map__39581__$1,view,portfolio_companies,constituencies,map__39580__$1,investor_companies,selection_value,comm,selection_type,map__39578__$1,map__39579__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$884,shared,cljs.core.constant$keyword$887,document.getElementById(elem_id)], null));
});
