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
clustermap.components.search.search_result_link = (function search_result_link(p__47114,owner,p__47115){var map__47124 = p__47114;var map__47124__$1 = ((cljs.core.seq_QMARK_(map__47124))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47124):map__47124);var search_result = map__47124__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47124__$1,cljs.core.constant$keyword$1135);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47124__$1,cljs.core.constant$keyword$1156);var map__47125 = p__47115;var map__47125__$1 = ((cljs.core.seq_QMARK_(map__47125))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47125):map__47125);var opts = map__47125__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47125__$1,cljs.core.constant$keyword$1374);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47125__$1,cljs.core.constant$keyword$1385);if(typeof clustermap.components.search.t47126 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t47126 = (function (owner,path_fn,map__47124,search_result_link,name,comm,search_result,type,p__47114,p__47115,map__47125,opts,meta47127){
this.owner = owner;
this.path_fn = path_fn;
this.map__47124 = map__47124;
this.search_result_link = search_result_link;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__47114 = p__47114;
this.p__47115 = p__47115;
this.map__47125 = map__47125;
this.opts = opts;
this.meta47127 = meta47127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t47126.cljs$lang$type = true;
clustermap.components.search.t47126.cljs$lang$ctorStr = "clustermap.components.search/t47126";
clustermap.components.search.t47126.cljs$lang$ctorPrWriter = ((function (map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t47126");
});})(map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm))
;
clustermap.components.search.t47126.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t47126.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm){
return (function (this$,p__47129){var self__ = this;
var map__47130 = p__47129;var map__47130__$1 = ((cljs.core.seq_QMARK_(map__47130))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47130):map__47130);var state = map__47130__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47130__$1,cljs.core.constant$keyword$1227);var this$__$1 = this;var path = (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(self__.type,self__.search_result) : self__.path_fn.call(null,self__.type,self__.search_result));return React.DOM.li({"className": (cljs.core.truth_(selected)?"selected":null)},React.DOM.a({"href": path, "ref": "link", "onClick": ((function (path,this$__$1,map__47130,map__47130__$1,state,selected,map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__47131 = l;var G__47131__$1 = (((G__47131 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__47131));var G__47131__$2 = (((G__47131__$1 == null))?null:G__47131__$1.parents(".search-component"));var G__47131__$3 = (((G__47131__$2 == null))?null:G__47131__$2.toggle());return G__47131__$3;
});})(path,this$__$1,map__47130,map__47130__$1,state,selected,map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm))
},sablono.interpreter.interpret(self__.name)));
});})(map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm))
;
clustermap.components.search.t47126.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm){
return (function (_47128){var self__ = this;
var _47128__$1 = this;return self__.meta47127;
});})(map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm))
;
clustermap.components.search.t47126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm){
return (function (_47128,meta47127__$1){var self__ = this;
var _47128__$1 = this;return (new clustermap.components.search.t47126(self__.owner,self__.path_fn,self__.map__47124,self__.search_result_link,self__.name,self__.comm,self__.search_result,self__.type,self__.p__47114,self__.p__47115,self__.map__47125,self__.opts,meta47127__$1));
});})(map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t47126 = ((function (map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm){
return (function __GT_t47126(owner__$1,path_fn__$1,map__47124__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__47114__$1,p__47115__$1,map__47125__$2,opts__$1,meta47127){return (new clustermap.components.search.t47126(owner__$1,path_fn__$1,map__47124__$2,search_result_link__$1,name__$1,comm__$1,search_result__$1,type__$1,p__47114__$1,p__47115__$1,map__47125__$2,opts__$1,meta47127));
});})(map__47124,map__47124__$1,search_result,type,name,map__47125,map__47125__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t47126(owner,path_fn,map__47124__$1,search_result_link,name,comm,search_result,type,p__47114,p__47115,map__47125__$1,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__47132,n){var map__47134 = p__47132;var map__47134__$1 = ((cljs.core.seq_QMARK_(map__47134))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47134):map__47134);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47134__$1,cljs.core.constant$keyword$1378);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47134__$1,cljs.core.constant$keyword$1435);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47134__$1,cljs.core.constant$keyword$1416);var cons = (function (){var or__3558__auto__ = constituencies;if(cljs.core.truth_(or__3558__auto__))
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
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__47141 = cljs.core._EQ__EQ_;var expr__47142 = e.keyCode;if(cljs.core.truth_((pred__47141.cljs$core$IFn$_invoke$arity$2 ? pred__47141.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ESCAPE_KEY,expr__47142) : pred__47141.call(null,clustermap.components.search.ESCAPE_KEY,expr__47142))))
{var G__47144 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__47144__$1 = (((G__47144 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__47144));var G__47144__$2 = (((G__47144__$1 == null))?null:G__47144__$1.toggle());return G__47144__$2;
} else
{if(cljs.core.truth_((pred__47141.cljs$core$IFn$_invoke$arity$2 ? pred__47141.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.ENTER_KEY,expr__47142) : pred__47141.call(null,clustermap.components.search.ENTER_KEY,expr__47142))))
{var vec__47145 = clustermap.components.search.nth_search_result((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(search_results) : cljs.core.deref.call(null,search_results)),(function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1436);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47145,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47145,(1),null);var G__47146_47147 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__47146_47148__$1 = (((G__47146_47147 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__47146_47147));var G__47146_47149__$2 = (((G__47146_47148__$1 == null))?null:G__47146_47148__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((pred__47141.cljs$core$IFn$_invoke$arity$2 ? pred__47141.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.UP_ARROW,expr__47142) : pred__47141.call(null,clustermap.components.search.UP_ARROW,expr__47142))))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1436,((function (){var or__3558__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1436);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((pred__47141.cljs$core$IFn$_invoke$arity$2 ? pred__47141.cljs$core$IFn$_invoke$arity$2(clustermap.components.search.DOWN_ARROW,expr__47142) : pred__47141.call(null,clustermap.components.search.DOWN_ARROW,expr__47142))))
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
clustermap.components.search.search_component = (function search_component(p__47150,owner){var map__47182 = p__47150;var map__47182__$1 = ((cljs.core.seq_QMARK_(map__47182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47182):map__47182);var map__47183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47182__$1,cljs.core.constant$keyword$1409);var map__47183__$1 = ((cljs.core.seq_QMARK_(map__47183))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47183):map__47183);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,cljs.core.constant$keyword$1135);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,cljs.core.constant$keyword$1147);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47182__$1,cljs.core.constant$keyword$1437);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47182__$1,cljs.core.constant$keyword$1438);var map__47184 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__47184__$1 = ((cljs.core.seq_QMARK_(map__47184))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47184):map__47184);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47184__$1,cljs.core.constant$keyword$1374);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47184__$1,cljs.core.constant$keyword$1385);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__47185 = search_results;var map__47185__$1 = ((cljs.core.seq_QMARK_(map__47185))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47185):map__47185);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47185__$1,cljs.core.constant$keyword$1378);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47185__$1,cljs.core.constant$keyword$1435);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47185__$1,cljs.core.constant$keyword$1416);if(typeof clustermap.components.search.t47186 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t47186 = (function (search_results,search_component,owner,path_fn,p__47150,view,portfolio_companies,constituencies,investor_companies,map__47182,selection_value,comm,map__47185,selection_type,map__47184,map__47183,meta47187){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.p__47150 = p__47150;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__47182 = map__47182;
this.selection_value = selection_value;
this.comm = comm;
this.map__47185 = map__47185;
this.selection_type = selection_type;
this.map__47184 = map__47184;
this.map__47183 = map__47183;
this.meta47187 = meta47187;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t47186.cljs$lang$type = true;
clustermap.components.search.t47186.cljs$lang$ctorStr = "clustermap.components.search/t47186";
clustermap.components.search.t47186.cljs$lang$ctorPrWriter = ((function (map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.search/t47186");
});})(map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t47186.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t47186.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-cell", "style": {"width": "100%"}},(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1439,e.target.value], null));
});})(this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
}) : sablono.interpreter.input.call(null,{"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1439,e.target.value], null));
});})(this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
}))),React.DOM.div({"className": "tbl-cell", "style": {"width": "34"}},React.DOM.button({"type": "reset", "onClick": ((function (this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1439,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
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
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$1436.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1436,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1440,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1218,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function iter__47189(s__47190){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (){var s__47190__$1 = s__47190;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47190__$1);if(temp__4126__auto__)
{var s__47190__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47190__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47190__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47192 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47191 = (0);while(true){
if((i__47191 < size__4282__auto__))
{var vec__47195 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47191);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47195,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47195,(1),null);cljs.core.chunk_append(b__47192,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (i__47191,vec__47195,idx,con,c__4281__auto__,size__4282__auto__,b__47192,s__47190__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1379,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1138),cljs.core.constant$keyword$1441,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1138)))], 0));
});})(i__47191,vec__47195,idx,con,c__4281__auto__,size__4282__auto__,b__47192,s__47190__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)));
{
var G__47213 = (i__47191 + (1));
i__47191 = G__47213;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47192),iter__47189(cljs.core.chunk_rest(s__47190__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47192),null);
}
} else
{var vec__47196 = cljs.core.first(s__47190__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47196,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47196,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (vec__47196,idx,con,s__47190__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1379,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1138),cljs.core.constant$keyword$1441,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1138)))], 0));
});})(vec__47196,idx,con,s__47190__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)),iter__47189(cljs.core.rest(s__47190__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_cons);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function iter__47197(s__47198){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (){var s__47198__$1 = s__47198;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47198__$1);if(temp__4126__auto__)
{var s__47198__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47198__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47198__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47200 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47199 = (0);while(true){
if((i__47199 < size__4282__auto__))
{var vec__47203 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47199);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47203,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47203,(1),null);cljs.core.chunk_append(b__47200,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (i__47199,vec__47203,idx,pc,c__4281__auto__,size__4282__auto__,b__47200,s__47198__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1376,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1388),cljs.core.constant$keyword$1441,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1388)))], 0));
});})(i__47199,vec__47203,idx,pc,c__4281__auto__,size__4282__auto__,b__47200,s__47198__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)));
{
var G__47214 = (i__47199 + (1));
i__47199 = G__47214;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47200),iter__47197(cljs.core.chunk_rest(s__47198__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47200),null);
}
} else
{var vec__47204 = cljs.core.first(s__47198__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47204,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47204,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (vec__47204,idx,pc,s__47198__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1376,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1388),cljs.core.constant$keyword$1441,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1388)))], 0));
});})(vec__47204,idx,pc,s__47198__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)),iter__47197(cljs.core.rest(s__47198__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_pcs);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1219,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1207,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4283__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function iter__47205(s__47206){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (){var s__47206__$1 = s__47206;while(true){
var temp__4126__auto__ = cljs.core.seq(s__47206__$1);if(temp__4126__auto__)
{var s__47206__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__47206__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__47206__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__47208 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__47207 = (0);while(true){
if((i__47207 < size__4282__auto__))
{var vec__47211 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__47207);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47211,(1),null);cljs.core.chunk_append(b__47208,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (i__47207,vec__47211,idx,inv,c__4281__auto__,size__4282__auto__,b__47208,s__47206__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1377,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1391),cljs.core.constant$keyword$1441,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1391)))], 0));
});})(i__47207,vec__47211,idx,inv,c__4281__auto__,size__4282__auto__,b__47208,s__47206__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)));
{
var G__47215 = (i__47207 + (1));
i__47207 = G__47215;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__47208),iter__47205(cljs.core.chunk_rest(s__47206__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__47208),null);
}
} else
{var vec__47212 = cljs.core.first(s__47206__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47212,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47212,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1200,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1385,self__.comm,cljs.core.constant$keyword$1374,self__.path_fn], null),cljs.core.constant$keyword$1199,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1227,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1195,((function (vec__47212,idx,inv,s__47206__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1135,cljs.core.constant$keyword$1377,cljs.core.array_seq([cljs.core.constant$keyword$1137,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1391),cljs.core.constant$keyword$1441,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1391)))], 0));
});})(vec__47212,idx,inv,s__47206__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1168,cljs.core.constant$keyword$1441], null)),iter__47205(cljs.core.rest(s__47206__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,this$__$1,map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
;return iter__4283__auto__(idx_invs);
})():null)], null)], null);
})():null)));
});})(map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t47186.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (_47188){var self__ = this;
var _47188__$1 = this;return self__.meta47187;
});})(map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t47186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function (_47188,meta47187__$1){var self__ = this;
var _47188__$1 = this;return (new clustermap.components.search.t47186(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.p__47150,self__.view,self__.portfolio_companies,self__.constituencies,self__.investor_companies,self__.map__47182,self__.selection_value,self__.comm,self__.map__47185,self__.selection_type,self__.map__47184,self__.map__47183,meta47187__$1));
});})(map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t47186 = ((function (map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results){
return (function __GT_t47186(search_results__$1,search_component__$1,owner__$1,path_fn__$2,p__47150__$1,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__47182__$2,selection_value__$1,comm__$1,map__47185__$2,selection_type__$1,map__47184__$2,map__47183__$2,meta47187){return (new clustermap.components.search.t47186(search_results__$1,search_component__$1,owner__$1,path_fn__$2,p__47150__$1,view__$1,portfolio_companies__$1,constituencies__$1,investor_companies__$1,map__47182__$2,selection_value__$1,comm__$1,map__47185__$2,selection_type__$1,map__47184__$2,map__47183__$2,meta47187));
});})(map__47184,map__47184__$1,path_fn,comm,path_fn__$1,map__47185,map__47185__$1,investor_companies,portfolio_companies,constituencies,map__47182,map__47182__$1,map__47183,map__47183__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t47186(search_results,search_component,owner,path_fn__$1,p__47150,view,portfolio_companies,constituencies,investor_companies,map__47182__$1,selection_value,comm,map__47185__$1,selection_type,map__47184__$1,map__47183__$1,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1202,shared,cljs.core.constant$keyword$1205,document.getElementById(elem_id)], null));
});
