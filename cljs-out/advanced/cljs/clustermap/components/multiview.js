// Compiled by ClojureScript 0.0-2268
goog.provide('clustermap.components.multiview');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.components.filter');
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
goog.require('clustermap.components.filter');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
clustermap.components.multiview.multiview_component = (function multiview_component(p__39442,owner){var map__39457 = p__39442;var map__39457__$1 = ((cljs.core.seq_QMARK_(map__39457))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39457):map__39457);var cursor = map__39457__$1;var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39457__$1,cljs.core.constant$keyword$793);if(typeof clustermap.components.multiview.t39458 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t39458 = (function (filter_spec,cursor,map__39457,owner,p__39442,multiview_component,meta39459){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__39457 = map__39457;
this.owner = owner;
this.p__39442 = p__39442;
this.multiview_component = multiview_component;
this.meta39459 = meta39459;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t39458.cljs$lang$type = true;
clustermap.components.multiview.t39458.cljs$lang$ctorStr = "clustermap.components.multiview/t39458";
clustermap.components.multiview.t39458.cljs$lang$ctorPrWriter = ((function (map__39457,map__39457__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.multiview/t39458");
});})(map__39457,map__39457__$1,cursor,filter_spec))
;
clustermap.components.multiview.t39458.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t39458.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__39457,map__39457__$1,cursor,filter_spec){
return (function (this$,p__39461,next_state){var self__ = this;
var map__39462 = p__39461;var map__39462__$1 = ((cljs.core.seq_QMARK_(map__39462))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39462):map__39462);var map__39463 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39462__$1,cljs.core.constant$keyword$793);var map__39463__$1 = ((cljs.core.seq_QMARK_(map__39463))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39463):map__39463);var next_compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39463__$1,cljs.core.constant$keyword$1039);var next_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39462__$1,cljs.core.constant$keyword$1079);var this$__$1 = this;var map__39464 = om.core.get_props(self__.owner);var map__39464__$1 = ((cljs.core.seq_QMARK_(map__39464))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39464):map__39464);var map__39465 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39464__$1,cljs.core.constant$keyword$793);var map__39465__$1 = ((cljs.core.seq_QMARK_(map__39465))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39465):map__39465);var compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39465__$1,cljs.core.constant$keyword$1039);var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39464__$1,cljs.core.constant$keyword$1079);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_compiled_filter,compiled_filter))
{var seq__39466 = cljs.core.seq(cljs.core.keys(next_views));var chunk__39467 = null;var count__39468 = (0);var i__39469 = (0);while(true){
if((i__39469 < count__39468))
{var view_key = chunk__39467.cljs$core$IIndexed$_nth$arity$2(null,i__39469);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1079,view_key,cljs.core.constant$keyword$793], null),next_compiled_filter);
{
var G__39471 = seq__39466;
var G__39472 = chunk__39467;
var G__39473 = count__39468;
var G__39474 = (i__39469 + (1));
seq__39466 = G__39471;
chunk__39467 = G__39472;
count__39468 = G__39473;
i__39469 = G__39474;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39466);if(temp__4126__auto__)
{var seq__39466__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39466__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__39466__$1);{
var G__39475 = cljs.core.chunk_rest(seq__39466__$1);
var G__39476 = c__4299__auto__;
var G__39477 = cljs.core.count(c__4299__auto__);
var G__39478 = (0);
seq__39466 = G__39475;
chunk__39467 = G__39476;
count__39468 = G__39477;
i__39469 = G__39478;
continue;
}
} else
{var view_key = cljs.core.first(seq__39466__$1);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1079,view_key,cljs.core.constant$keyword$793], null),next_compiled_filter);
{
var G__39479 = cljs.core.next(seq__39466__$1);
var G__39480 = null;
var G__39481 = (0);
var G__39482 = (0);
seq__39466 = G__39479;
chunk__39467 = G__39480;
count__39468 = G__39481;
i__39469 = G__39482;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
});})(map__39457,map__39457__$1,cursor,filter_spec))
;
clustermap.components.multiview.t39458.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t39458.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__39457,map__39457__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs39470 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs39470))?sablono.interpreter.attributes(attrs39470):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39470))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39470)], null))));
});})(map__39457,map__39457__$1,cursor,filter_spec))
;
clustermap.components.multiview.t39458.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39457,map__39457__$1,cursor,filter_spec){
return (function (_39460){var self__ = this;
var _39460__$1 = this;return self__.meta39459;
});})(map__39457,map__39457__$1,cursor,filter_spec))
;
clustermap.components.multiview.t39458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39457,map__39457__$1,cursor,filter_spec){
return (function (_39460,meta39459__$1){var self__ = this;
var _39460__$1 = this;return (new clustermap.components.multiview.t39458(self__.filter_spec,self__.cursor,self__.map__39457,self__.owner,self__.p__39442,self__.multiview_component,meta39459__$1));
});})(map__39457,map__39457__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t39458 = ((function (map__39457,map__39457__$1,cursor,filter_spec){
return (function __GT_t39458(filter_spec__$1,cursor__$1,map__39457__$2,owner__$1,p__39442__$1,multiview_component__$1,meta39459){return (new clustermap.components.multiview.t39458(filter_spec__$1,cursor__$1,map__39457__$2,owner__$1,p__39442__$1,multiview_component__$1,meta39459));
});})(map__39457,map__39457__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t39458(filter_spec,cursor,map__39457__$1,owner,p__39442,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$884,shared,cljs.core.constant$keyword$887,document.getElementById(elem_id),cljs.core.constant$keyword$859,path], null));
});
