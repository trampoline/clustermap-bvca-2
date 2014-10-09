// Compiled by ClojureScript 0.0-2322
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
clustermap.components.search.search_result_link = (function search_result_link(p__47105,owner,p__47106){var map__47115 = p__47105;var map__47115__$1 = ((cljs.core.seq_QMARK_(map__47115))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47115):map__47115);var search_result = map__47115__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,cljs.core.constant$keyword$1135);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47115__$1,cljs.core.constant$keyword$1156);var map__47116 = p__47106;var map__47116__$1 = ((cljs.core.seq_QMARK_(map__47116))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47116):map__47116);var opts = map__47116__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47116__$1,cljs.core.constant$keyword$1374);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47116__$1,cljs.core.constant$keyword$1385);if(typeof clustermap.components.search.t47117 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t47117 = (function (map__47116,owner,p__47106,path_fn,p__47105,map__47115,search_result_link,name,comm,search_result,type,opts,meta47118){
this.map__47116 = map__47116;
this.owner = owner;
this.p__47106 = p__47106;
this.path_fn = path_fn;
this.p__47105 = p__47105;
this.map__47115 = map__47115;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.opts = opts;
this.meta47118 = meta47118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t47117.cljs$lang$type = true;
clustermap.components.search.t47117.cljs$lang$ctorStr = "clustermap.components.search/t47117";
clustermap.components.search.t47117.cljs$lang$ctorPrWriter = ((function (map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t47117");
});})(map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm))
;
clustermap.components.search.t47117.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t47117.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm){
return (function (this$,p__47120){var self__ = this;
var map__47121 = p__47120;var map__47121__$1 = ((cljs.core.seq_QMARK_(map__47121))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47121):map__47121);var state = map__47121__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47121__$1,cljs.core.constant$keyword$1227);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__47121,map__47121__$1,state,selected,map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__47122 = l;var G__47122__$1 = (((G__47122 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__47122));var G__47122__$2 = (((G__47122__$1 == null))?null:G__47122__$1.parents(".search-component"));var G__47122__$3 = (((G__47122__$2 == null))?null:G__47122__$2.toggle());return G__47122__$3;
});})(path,this$__$1,map__47121,map__47121__$1,state,selected,map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm))
;
clustermap.components.search.t47117.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm){
return (function (_47119){var self__ = this;
var _47119__$1 = this;return self__.meta47118;
});})(map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm))
;
clustermap.components.search.t47117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm){
return (function (_47119,meta47118__$1){var self__ = this;
var _47119__$1 = this;return (new clustermap.components.search.t47117(self__.map__47116,self__.owner,self__.p__47106,self__.path_fn,self__.p__47105,self__.map__47115,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.opts,meta47118__$1));
});})(map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t47117 = ((function (map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm){
return (function __GT_t47117(map__47116__$2,owner__$1,p__47106__$1,path_fn__$1,p__47105__$1,map__47115__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,meta47118){return (new clustermap.components.search.t47117(map__47116__$2,owner__$1,p__47106__$1,path_fn__$1,p__47105__$1,map__47115__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,opts__$1,meta47118));
});})(map__47115,map__47115__$1,search_result,type,name,map__47116,map__47116__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t47117(map__47116__$1,owner,p__47106,path_fn,p__47105,map__47115__$1,search_result_link,name,comm,search_result,type,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__47123,n){var map__47125 = p__47123;var map__47125__$1 = ((cljs.core.seq_QMARK_(map__47125))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47125):map__47125);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47125__$1,cljs.core.constant$keyword$1378);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47125__$1,cljs.core.constant$keyword$1435);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47125__$1,cljs.core.constant$keyword$1416);var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3558__auto__ = portfolio_companies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3558__auto__ = investor_companies;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1379,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1376,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1377,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__47132 = cljs.core._EQ__EQ_;var expr__47133 = e.keyCode;if(cljs.core.truth_((pred__47132.cljs$core$IFn$_invoke$arity$2 ? pred__47132.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__47133) : pred__47132.call(null,clustermap.components.search.ESCAPE_KEY,expr__47133))))
{var G__47135 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__47135__$1 = (((G__47135 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__47135));var G__47135__$2 = (((G__47135__$1 == null))?null:G__47135__$1.toggle());return G__47135__$2;
} else
{if(cljs.core.truth_((pred__47132.cljs$core$IFn$_invoke$arity$2 ? pred__47132.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__47133) : pred__47132.call(null,clustermap.components.search.ENTER_KEY,expr__47133))))
{var vec__47136 = clustermap.components.search.nth_search_result((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_results) : cljs.core.deref.call(null,search_results)),(function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1436);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47136,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47136,(1),null);var G__47137_47138 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__47137_47139__$1 = (((G__47137_47138 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__47137_47138));var G__47137_47140__$2 = (((G__47137_47139__$1 == null))?null:G__47137_47139__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__47132.cljs$core$IFn$_invoke$arity$2 ? pred__47132.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__47133) : pred__47132.call(null,clustermap.components.search.UP_ARROW,expr__47133))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1436,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1436);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__47132.cljs$core$IFn$_invoke$arity$2 ? pred__47132.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__47133) : pred__47132.call(null,clustermap.components.search.DOWN_ARROW,expr__47133))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1436,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1436);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
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
clustermap.components.search.search_component = (function search_component(p__47141,owner){var map__47173 = p__47141;var map__47173__$1 = ((cljs.core.seq_QMARK_(map__47173))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47173):map__47173);var map__47174 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47173__$1,cljs.core.constant$keyword$1409);var map__47174__$1 = ((cljs.core.seq_QMARK_(map__47174))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47174):map__47174);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47174__$1,cljs.core.constant$keyword$1135);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47174__$1,cljs.core.constant$keyword$1147);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47173__$1,cljs.core.constant$keyword$1437);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47173__$1,cljs.core.constant$keyword$1438);var map__47175 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__47175__$1 = ((cljs.core.seq_QMARK_(map__47175))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47175):map__47175);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47175__$1,cljs.core.constant$keyword$1374);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47175__$1,cljs.core.constant$keyword$1385);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__47176 = search_results;var map__47176__$1 = ((cljs.core.seq_QMARK_(map__47176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47176):map__47176);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47176__$1,cljs.core.constant$keyword$1378);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47176__$1,cljs.core.constant$keyword$1435);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47176__$1,cljs.core.constant$keyword$1416);if(typeof clustermap.components.search.t47177 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t47177 = (function (map__47173,search_results,search_component,owner,path_fn,map__47176,view,map__47174,portfolio_companies,constituencies,map__47175,investor_companies,selection_value,comm,selection_type,p__47141,meta47178){
this.map__47173 = map__47173;
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.map__47176 = map__47176;
this.view = view;
this.map__47174 = map__47174;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.map__47175 = map__47175;
this.investor_companies = investor_companies;
this.selection_value = selection_value;
this.comm = comm;
this.selection_type = selection_type;
this.p__47141 = p__47141;
this.meta47178 = meta47178;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t47177.cljs$lang$type = true;
clustermap.components.search.t47177.cljs$lang$ctorStr = "clustermap.components.search/t47177";
clustermap.components.search.t47177.cljs$lang$ctorPrWriter = ((function (map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t47177");
});})(map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t47177.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t47177.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1439,e.target.value], null));
});})(this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1439,e.target.value], null));
});})(this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1439,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
},"\u00D7"))),sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3558__auto____$1))
{return or__3558__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3558__auto__ = cljs.core.constant$keyword$1436.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$1436.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1436,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1440,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1218,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function iter__47180(s__47181){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (){var s__47181__$1 = s__47181;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47181__$1);if(temp__4126__auto__)
{var s__47181__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47181__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47181__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47183 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47182 = (0);while(true){
if((i__47182 < size__4282__auto__))
{var vec__47186 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47182);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47186,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47186,(1),null);cljs.core.chunk_append(b__47183,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (i__47182,vec__47186,idx,con,c__4281__auto__,size__4282__auto__,b__47183,s__47181__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1379,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1138),cljs.core.constant$keyword$1441,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1138)))], 0));
});})(i__47182,vec__47186,idx,con,c__4281__auto__,size__4282__auto__,b__47183,s__47181__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)));
{
var G__47204 = (i__47182 + (1));
i__47182 = G__47204;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47183),iter__47180(cljs.core.chunk_rest(s__47181__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47183),null);
}
} else
{var vec__47187 = cljs.core.first(s__47181__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47187,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47187,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (vec__47187,idx,con,s__47181__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1379,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1138),cljs.core.constant$keyword$1441,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1138)))], 0));
});})(vec__47187,idx,con,s__47181__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)),iter__47180(cljs.core.rest(s__47181__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_cons);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function iter__47188(s__47189){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (){var s__47189__$1 = s__47189;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47189__$1);if(temp__4126__auto__)
{var s__47189__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47189__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47189__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47191 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47190 = (0);while(true){
if((i__47190 < size__4282__auto__))
{var vec__47194 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47190);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47194,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47194,(1),null);cljs.core.chunk_append(b__47191,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (i__47190,vec__47194,idx,pc,c__4281__auto__,size__4282__auto__,b__47191,s__47189__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1376,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1388),cljs.core.constant$keyword$1441,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1388)))], 0));
});})(i__47190,vec__47194,idx,pc,c__4281__auto__,size__4282__auto__,b__47191,s__47189__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)));
{
var G__47205 = (i__47190 + (1));
i__47190 = G__47205;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47191),iter__47188(cljs.core.chunk_rest(s__47189__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47191),null);
}
} else
{var vec__47195 = cljs.core.first(s__47189__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47195,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47195,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (vec__47195,idx,pc,s__47189__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1376,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1388),cljs.core.constant$keyword$1441,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1388)))], 0));
});})(vec__47195,idx,pc,s__47189__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)),iter__47188(cljs.core.rest(s__47189__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_pcs);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function iter__47196(s__47197){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (){var s__47197__$1 = s__47197;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47197__$1);if(temp__4126__auto__)
{var s__47197__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47197__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47197__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47199 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47198 = (0);while(true){
if((i__47198 < size__4282__auto__))
{var vec__47202 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47198);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47202,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47202,(1),null);cljs.core.chunk_append(b__47199,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (i__47198,vec__47202,idx,inv,c__4281__auto__,size__4282__auto__,b__47199,s__47197__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1377,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1391),cljs.core.constant$keyword$1441,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1391)))], 0));
});})(i__47198,vec__47202,idx,inv,c__4281__auto__,size__4282__auto__,b__47199,s__47197__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)));
{
var G__47206 = (i__47198 + (1));
i__47198 = G__47206;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47199),iter__47196(cljs.core.chunk_rest(s__47197__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47199),null);
}
} else
{var vec__47203 = cljs.core.first(s__47197__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47203,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47203,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (vec__47203,idx,inv,s__47197__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1377,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1391),cljs.core.constant$keyword$1441,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1391)))], 0));
});})(vec__47203,idx,inv,s__47197__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)),iter__47196(cljs.core.rest(s__47197__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t47177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (_47179){var self__ = this;
var _47179__$1 = this;return self__.meta47178;
});})(map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t47177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function (_47179,meta47178__$1){var self__ = this;
var _47179__$1 = this;return (new clustermap.components.search.t47177(self__.map__47173,self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.map__47176,self__.view,self__.map__47174,self__.portfolio_companies,self__.constituencies,self__.map__47175,self__.investor_companies,self__.selection_value,self__.comm,self__.selection_type,self__.p__47141,meta47178__$1));
});})(map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t47177 = ((function (map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results){
return (function __GT_t47177(map__47173__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,map__47176__$2,view__$1,map__47174__$2,portfolio_companies__$1,constituencies__$1,map__47175__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,p__47141__$1,meta47178){return (new clustermap.components.search.t47177(map__47173__$2,search_results__$1,search_component__$1,owner__$1,path_fn__$2,map__47176__$2,view__$1,map__47174__$2,portfolio_companies__$1,constituencies__$1,map__47175__$2,investor_companies__$1,selection_value__$1,comm__$1,selection_type__$1,p__47141__$1,meta47178));
});})(map__47175,map__47175__$1,path_fn,comm,path_fn__$1,map__47176,map__47176__$1,investor_companies,portfolio_companies,constituencies,map__47173,map__47173__$1,map__47174,map__47174__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t47177(map__47173__$1,search_results,search_component,owner,path_fn__$1,map__47176__$1,view,map__47174__$1,portfolio_companies,constituencies,map__47175__$1,investor_companies,selection_value,comm,selection_type,p__47141,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1205,document.getElementById(elem_id)], null));
});
