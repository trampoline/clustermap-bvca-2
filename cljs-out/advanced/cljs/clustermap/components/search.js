// Compiled by ClojureScript 0.0-2356
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
clustermap.components.search.search_result_link = (function search_result_link(p__72243,owner,p__72244){var map__72259 = p__72243;var map__72259__$1 = ((cljs.core.seq_QMARK_(map__72259))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72259):map__72259);var search_result = map__72259__$1;var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72259__$1,cljs.core.constant$keyword$1160);var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72259__$1,cljs.core.constant$keyword$1274);var map__72260 = p__72244;var map__72260__$1 = ((cljs.core.seq_QMARK_(map__72260))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72260):map__72260);var opts = map__72260__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72260__$1,cljs.core.constant$keyword$1491);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72260__$1,cljs.core.constant$keyword$1312);if(typeof clustermap.components.search.t72261 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t72261 = (function (owner,path_fn,search_result_link,map__72260,map__72259,p__72243,name,comm,search_result,type,p__72244,opts,meta72262){
this.owner = owner;
this.path_fn = path_fn;
this.search_result_link = search_result_link;
this.map__72260 = map__72260;
this.map__72259 = map__72259;
this.p__72243 = p__72243;
this.name = name;
this.comm = comm;
this.search_result = search_result;
this.type = type;
this.p__72244 = p__72244;
this.opts = opts;
this.meta72262 = meta72262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t72261.cljs$lang$type = true;
clustermap.components.search.t72261.cljs$lang$ctorStr = "clustermap.components.search/t72261";
clustermap.components.search.t72261.cljs$lang$ctorPrWriter = ((function (map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.search/t72261");
});})(map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm))
;
clustermap.components.search.t72261.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t72261.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm){
return (function (this$,p__72264){var self__ = this;
var map__72265 = p__72264;var map__72265__$1 = ((cljs.core.seq_QMARK_(map__72265))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72265):map__72265);var state = map__72265__$1;var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72265__$1,cljs.core.constant$keyword$1279);var this$__$1 = this;var path = (function (){var G__72266 = self__.type;var G__72267 = self__.search_result;return (self__.path_fn.cljs$core$IFn$_invoke$arity$2 ? self__.path_fn.cljs$core$IFn$_invoke$arity$2(G__72266,G__72267) : self__.path_fn.call(null,G__72266,G__72267));
})();var G__72268 = {"className": (cljs.core.truth_(selected)?"selected":null)};var G__72269 = (function (){var G__72270 = {"href": path, "ref": "link", "onClick": ((function (G__72268,path,this$__$1,map__72265,map__72265__$1,state,selected,map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm){
return (function (e){var l = om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"link");var G__72272 = l;var G__72272__$1 = (((G__72272 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__72272));var G__72272__$2 = (((G__72272__$1 == null))?null:G__72272__$1.parents(".search-component"));var G__72272__$3 = (((G__72272__$2 == null))?null:G__72272__$2.toggle());return G__72272__$3;
});})(G__72268,path,this$__$1,map__72265,map__72265__$1,state,selected,map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm))
};var G__72271 = sablono.interpreter.interpret(self__.name);return React.DOM.a(G__72270,G__72271);
})();return React.DOM.li(G__72268,G__72269);
});})(map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm))
;
clustermap.components.search.t72261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm){
return (function (_72263){var self__ = this;
var _72263__$1 = this;return self__.meta72262;
});})(map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm))
;
clustermap.components.search.t72261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm){
return (function (_72263,meta72262__$1){var self__ = this;
var _72263__$1 = this;return (new clustermap.components.search.t72261(self__.owner,self__.path_fn,self__.search_result_link,self__.map__72260,self__.map__72259,self__.p__72243,self__.name,self__.comm,self__.search_result,self__.type,self__.p__72244,self__.opts,meta72262__$1));
});})(map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm))
;
clustermap.components.search.__GT_t72261 = ((function (map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm){
return (function __GT_t72261(owner__$1,path_fn__$1,search_result_link__$1,map__72260__$2,map__72259__$2,p__72243__$1,name__$1,comm__$1,search_result__$1,type__$1,p__72244__$1,opts__$1,meta72262){return (new clustermap.components.search.t72261(owner__$1,path_fn__$1,search_result_link__$1,map__72260__$2,map__72259__$2,p__72243__$1,name__$1,comm__$1,search_result__$1,type__$1,p__72244__$1,opts__$1,meta72262));
});})(map__72259,map__72259__$1,search_result,type,name,map__72260,map__72260__$1,opts,path_fn,comm))
;
}
return (new clustermap.components.search.t72261(owner,path_fn,search_result_link,map__72260__$1,map__72259__$1,p__72243,name,comm,search_result,type,p__72244,opts,null));
});
clustermap.components.search.nth_search_result = (function nth_search_result(p__72273,n){var map__72275 = p__72273;var map__72275__$1 = ((cljs.core.seq_QMARK_(map__72275))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72275):map__72275);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72275__$1,cljs.core.constant$keyword$1493);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72275__$1,cljs.core.constant$keyword$1546);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72275__$1,cljs.core.constant$keyword$1527);var cons = (function (){var or__3637__auto__ = constituencies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var pcs = (function (){var or__3637__auto__ = portfolio_companies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();var invs = (function (){var or__3637__auto__ = investor_companies;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.PersistentVector.EMPTY;
}
})();if((n < cljs.core.count(cons)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1288,cljs.core.get.cljs$core$IFn$_invoke$arity$2(constituencies,n)], null);
} else
{if((n < (cljs.core.count(cons) + cljs.core.count(pcs))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1286,cljs.core.get.cljs$core$IFn$_invoke$arity$2(pcs,(n - cljs.core.count(cons)))], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1287,cljs.core.get.cljs$core$IFn$_invoke$arity$2(invs,((n - cljs.core.count(cons)) - cljs.core.count(pcs)))], null);

}
}
});
clustermap.components.search.key_down = (function key_down(e,search_results,owner,comm){var pred__72291 = cljs.core._EQ__EQ_;var expr__72292 = e.keyCode;if(cljs.core.truth_((function (){var G__72294 = clustermap.components.search.ESCAPE_KEY;var G__72295 = expr__72292;return (pred__72291.cljs$core$IFn$_invoke$arity$2 ? pred__72291.cljs$core$IFn$_invoke$arity$2(G__72294,G__72295) : pred__72291.call(null,G__72294,G__72295));
})()))
{var G__72296 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__72296__$1 = (((G__72296 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__72296));var G__72296__$2 = (((G__72296__$1 == null))?null:G__72296__$1.toggle());return G__72296__$2;
} else
{if(cljs.core.truth_((function (){var G__72297 = clustermap.components.search.ENTER_KEY;var G__72298 = expr__72292;return (pred__72291.cljs$core$IFn$_invoke$arity$2 ? pred__72291.cljs$core$IFn$_invoke$arity$2(G__72297,G__72298) : pred__72291.call(null,G__72297,G__72298));
})()))
{var vec__72299 = clustermap.components.search.nth_search_result((function (){var G__72300 = search_results;return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__72300) : cljs.core.deref.call(null,G__72300));
})(),(function (){var or__3637__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1547);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})());var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72299,(0),null);var res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72299,(1),null);var G__72301_72306 = om.core.get_node.cljs$core$IFn$_invoke$arity$2(owner,"search-component");var G__72301_72307__$1 = (((G__72301_72306 == null))?null:jayq.core.$.cljs$core$IFn$_invoke$arity$1(G__72301_72306));var G__72301_72308__$2 = (((G__72301_72307__$1 == null))?null:G__72301_72307__$1.toggle());return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1281,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,clustermap.model.extract_id(type,res)], null)], null));
} else
{if(cljs.core.truth_((function (){var G__72302 = clustermap.components.search.UP_ARROW;var G__72303 = expr__72292;return (pred__72291.cljs$core$IFn$_invoke$arity$2 ? pred__72291.cljs$core$IFn$_invoke$arity$2(G__72302,G__72303) : pred__72291.call(null,G__72302,G__72303));
})()))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1547,((function (){var or__3637__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1547);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})() - (1)));
} else
{if(cljs.core.truth_((function (){var G__72304 = clustermap.components.search.DOWN_ARROW;var G__72305 = expr__72292;return (pred__72291.cljs$core$IFn$_invoke$arity$2 ? pred__72291.cljs$core$IFn$_invoke$arity$2(G__72304,G__72305) : pred__72291.call(null,G__72304,G__72305));
})()))
{return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,cljs.core.constant$keyword$1547,((function (){var or__3637__auto__ = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$1547);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
clustermap.components.search.search_component = (function search_component(p__72309,owner){var map__72360 = p__72309;var map__72360__$1 = ((cljs.core.seq_QMARK_(map__72360))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72360):map__72360);var map__72361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72360__$1,cljs.core.constant$keyword$1520);var map__72361__$1 = ((cljs.core.seq_QMARK_(map__72361))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72361):map__72361);var selection_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72361__$1,cljs.core.constant$keyword$1160);var selection_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72361__$1,cljs.core.constant$keyword$1275);var view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72360__$1,cljs.core.constant$keyword$1548);var search_results = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72360__$1,cljs.core.constant$keyword$1549);var map__72362 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);var map__72362__$1 = ((cljs.core.seq_QMARK_(map__72362))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72362):map__72362);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72362__$1,cljs.core.constant$keyword$1491);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72362__$1,cljs.core.constant$keyword$1312);var path_fn__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(path_fn,view);var map__72363 = search_results;var map__72363__$1 = ((cljs.core.seq_QMARK_(map__72363))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72363):map__72363);var investor_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72363__$1,cljs.core.constant$keyword$1493);var portfolio_companies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72363__$1,cljs.core.constant$keyword$1546);var constituencies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72363__$1,cljs.core.constant$keyword$1527);if(typeof clustermap.components.search.t72364 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.search.t72364 = (function (search_results,search_component,owner,path_fn,view,portfolio_companies,map__72360,map__72361,constituencies,investor_companies,map__72363,map__72362,selection_value,comm,p__72309,selection_type,meta72365){
this.search_results = search_results;
this.search_component = search_component;
this.owner = owner;
this.path_fn = path_fn;
this.view = view;
this.portfolio_companies = portfolio_companies;
this.map__72360 = map__72360;
this.map__72361 = map__72361;
this.constituencies = constituencies;
this.investor_companies = investor_companies;
this.map__72363 = map__72363;
this.map__72362 = map__72362;
this.selection_value = selection_value;
this.comm = comm;
this.p__72309 = p__72309;
this.selection_type = selection_type;
this.meta72365 = meta72365;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.search.t72364.cljs$lang$type = true;
clustermap.components.search.t72364.cljs$lang$ctorStr = "clustermap.components.search/t72364";
clustermap.components.search.t72364.cljs$lang$ctorPrWriter = ((function (map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.search/t72364");
});})(map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t72364.prototype.om$core$IRenderState$ = true;
clustermap.components.search.t72364.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var G__72367 = {"className": "search-component", "ref": "search-component", "id": "search", "onKeyDown": ((function (this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (e){return clustermap.components.search.key_down(e,self__.search_results,self__.owner,self__.comm);
});})(this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
};var G__72368 = (function (){var G__72370 = {"className": "tbl"};var G__72371 = (function (){var G__72373 = {"className": "tbl-cell", "style": {"width": "100%"}};var G__72374 = (function (){var G__72375 = {"ref": "search-field", "type": "text", "placeholder": "Search", "onChange": ((function (G__72373,G__72370,G__72367,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1550,e.target.value], null));
});})(G__72373,G__72370,G__72367,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
};return (sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1(G__72375) : sablono.interpreter.input.call(null,G__72375));
})();return React.DOM.div(G__72373,G__72374);
})();var G__72372 = (function (){var G__72376 = {"className": "tbl-cell", "style": {"width": "34"}};var G__72377 = (function (){var G__72378 = {"type": "reset", "onClick": ((function (G__72376,G__72370,G__72371,G__72367,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1550,""], null));
return om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"search-field").value = "";
});})(G__72376,G__72370,G__72371,G__72367,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
};var G__72379 = "\u00D7";return React.DOM.button(G__72378,G__72379);
})();return React.DOM.div(G__72376,G__72377);
})();return React.DOM.div(G__72370,G__72371,G__72372);
})();var G__72369 = sablono.interpreter.interpret((cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not_empty(self__.constituencies);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.not_empty(self__.portfolio_companies);if(cljs.core.truth_(or__3637__auto____$1))
{return or__3637__auto____$1;
} else
{return cljs.core.not_empty(self__.investor_companies);
}
}
})())?(function (){var idx_cons = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(0)),self__.constituencies);var idx_pcs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,cljs.core.count(idx_cons)),self__.portfolio_companies);var idx_invs = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.iterate(cljs.core.inc,(cljs.core.count(idx_cons) + cljs.core.count(idx_pcs))),self__.investor_companies);var selected_idx = cljs.core.mod((function (){var or__3637__auto__ = cljs.core.constant$keyword$1547.cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return (0);
}
})(),((cljs.core.count(idx_cons) + cljs.core.count(idx_pcs)) + cljs.core.count(idx_invs)));var _ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_idx,cljs.core.constant$keyword$1547.cljs$core$IFn$_invoke$arity$1(state)))?om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1547,selected_idx):null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1551,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,"search-results"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1268,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_cons))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,"search-results-header"], null),"Constituencies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_cons))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function iter__72380(s__72381){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (){var s__72381__$1 = s__72381;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72381__$1);if(temp__4126__auto__)
{var s__72381__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72381__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__72381__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__72383 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__72382 = (0);while(true){
if((i__72382 < size__4374__auto__))
{var vec__72388 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__72382);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72388,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72388,(1),null);cljs.core.chunk_append(b__72383,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1491,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (i__72382,vec__72388,idx,con,c__4373__auto__,size__4374__auto__,b__72383,s__72381__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1288,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1163),cljs.core.constant$keyword$1552,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1163)))], 0));
});})(i__72382,vec__72388,idx,con,c__4373__auto__,size__4374__auto__,b__72383,s__72381__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1552], null)));
{
var G__72410 = (i__72382 + (1));
i__72382 = G__72410;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72383),iter__72380(cljs.core.chunk_rest(s__72381__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72383),null);
}
} else
{var vec__72389 = cljs.core.first(s__72381__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72389,(0),null);var con = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72389,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,con,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1491,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (vec__72389,idx,con,s__72381__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1288,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1163),cljs.core.constant$keyword$1552,("constituency-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1163)))], 0));
});})(vec__72389,idx,con,s__72381__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1552], null)),iter__72380(cljs.core.rest(s__72381__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__(idx_cons);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,"search-results-header"], null),"Investor-backed companies"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_pcs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function iter__72390(s__72391){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (){var s__72391__$1 = s__72391;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72391__$1);if(temp__4126__auto__)
{var s__72391__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72391__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__72391__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__72393 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__72392 = (0);while(true){
if((i__72392 < size__4374__auto__))
{var vec__72398 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__72392);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72398,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72398,(1),null);cljs.core.chunk_append(b__72393,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1491,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (i__72392,vec__72398,idx,pc,c__4373__auto__,size__4374__auto__,b__72393,s__72391__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1286,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1289),cljs.core.constant$keyword$1552,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1289)))], 0));
});})(i__72392,vec__72398,idx,pc,c__4373__auto__,size__4374__auto__,b__72393,s__72391__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1552], null)));
{
var G__72411 = (i__72392 + (1));
i__72392 = G__72411;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72393),iter__72390(cljs.core.chunk_rest(s__72391__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72393),null);
}
} else
{var vec__72399 = cljs.core.first(s__72391__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72399,(0),null);var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72399,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,pc,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1491,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (vec__72399,idx,pc,s__72391__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1286,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1289),cljs.core.constant$keyword$1552,("portfolio-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1289)))], 0));
});})(vec__72399,idx,pc,s__72391__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1552], null)),iter__72390(cljs.core.rest(s__72391__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__(idx_pcs);
})():null),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(cljs.core.not_empty(idx_invs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1269,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1257,"search-results-header"], null),"Investors"], null):null)], null)),(cljs.core.truth_(cljs.core.not_empty(idx_invs))?(function (){var iter__4375__auto__ = ((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function iter__72400(s__72401){return (new cljs.core.LazySeq(null,((function (idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (){var s__72401__$1 = s__72401;while(true){
var temp__4126__auto__ = cljs.core.seq(s__72401__$1);if(temp__4126__auto__)
{var s__72401__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__72401__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__72401__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__72403 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__72402 = (0);while(true){
if((i__72402 < size__4374__auto__))
{var vec__72408 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__72402);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72408,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72408,(1),null);cljs.core.chunk_append(b__72403,om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1491,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (i__72402,vec__72408,idx,inv,c__4373__auto__,size__4374__auto__,b__72403,s__72401__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1287,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1290),cljs.core.constant$keyword$1552,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1290)))], 0));
});})(i__72402,vec__72408,idx,inv,c__4373__auto__,size__4374__auto__,b__72403,s__72401__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1552], null)));
{
var G__72412 = (i__72402 + (1));
i__72402 = G__72412;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__72403),iter__72400(cljs.core.chunk_rest(s__72401__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__72403),null);
}
} else
{var vec__72409 = cljs.core.first(s__72401__$2);var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72409,(0),null);var inv = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72409,(1),null);return cljs.core.cons(om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.search.search_result_link,inv,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$1246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1312,self__.comm,cljs.core.constant$keyword$1491,self__.path_fn], null),cljs.core.constant$keyword$1245,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1279,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,selected_idx)], null),cljs.core.constant$keyword$1240,((function (vec__72409,idx,inv,s__72401__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (data){return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.constant$keyword$1160,cljs.core.constant$keyword$1287,cljs.core.array_seq([cljs.core.constant$keyword$1162,cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1290),cljs.core.constant$keyword$1552,("investor-company-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,cljs.core.constant$keyword$1290)))], 0));
});})(vec__72409,idx,inv,s__72401__$2,temp__4126__auto__,idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
,cljs.core.constant$keyword$1243,cljs.core.constant$keyword$1552], null)),iter__72400(cljs.core.rest(s__72401__$2)));
}
} else
{return null;
}
break;
}
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
,null,null));
});})(idx_cons,idx_pcs,idx_invs,selected_idx,_,G__72367,G__72368,this$__$1,map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
;return iter__4375__auto__(idx_invs);
})():null)], null)], null);
})():null));return React.DOM.div(G__72367,G__72368,G__72369);
});})(map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t72364.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (_72366){var self__ = this;
var _72366__$1 = this;return self__.meta72365;
});})(map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.t72364.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function (_72366,meta72365__$1){var self__ = this;
var _72366__$1 = this;return (new clustermap.components.search.t72364(self__.search_results,self__.search_component,self__.owner,self__.path_fn,self__.view,self__.portfolio_companies,self__.map__72360,self__.map__72361,self__.constituencies,self__.investor_companies,self__.map__72363,self__.map__72362,self__.selection_value,self__.comm,self__.p__72309,self__.selection_type,meta72365__$1));
});})(map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
;
clustermap.components.search.__GT_t72364 = ((function (map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results){
return (function __GT_t72364(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__72360__$2,map__72361__$2,constituencies__$1,investor_companies__$1,map__72363__$2,map__72362__$2,selection_value__$1,comm__$1,p__72309__$1,selection_type__$1,meta72365){return (new clustermap.components.search.t72364(search_results__$1,search_component__$1,owner__$1,path_fn__$2,view__$1,portfolio_companies__$1,map__72360__$2,map__72361__$2,constituencies__$1,investor_companies__$1,map__72363__$2,map__72362__$2,selection_value__$1,comm__$1,p__72309__$1,selection_type__$1,meta72365));
});})(map__72362,map__72362__$1,path_fn,comm,path_fn__$1,map__72363,map__72363__$1,investor_companies,portfolio_companies,constituencies,map__72360,map__72360__$1,map__72361,map__72361__$1,selection_type,selection_value,view,search_results))
;
}
return (new clustermap.components.search.t72364(search_results,search_component,owner,path_fn__$1,view,portfolio_companies,map__72360__$1,map__72361__$1,constituencies,investor_companies,map__72363__$1,map__72362__$1,selection_value,comm,p__72309,selection_type,null));
});
clustermap.components.search.mount = (function mount(app_state,elem_id,shared){return om.core.root(clustermap.components.search.search_component,app_state,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1248,shared,cljs.core.constant$keyword$1252,document.getElementById(elem_id)], null));
});
