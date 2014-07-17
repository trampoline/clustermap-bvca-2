// Compiled by ClojureScript 0.0-2261
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
clustermap.components.multiview.multiview_component = (function multiview_component(p__37487,owner){var map__37502 = p__37487;var map__37502__$1 = ((cljs.core.seq_QMARK_(map__37502))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37502):map__37502);var cursor = map__37502__$1;var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37502__$1,cljs.core.constant$keyword$788);if(typeof clustermap.components.multiview.t37503 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t37503 = (function (filter_spec,cursor,map__37502,owner,p__37487,multiview_component,meta37504){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__37502 = map__37502;
this.owner = owner;
this.p__37487 = p__37487;
this.multiview_component = multiview_component;
this.meta37504 = meta37504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t37503.cljs$lang$type = true;
clustermap.components.multiview.t37503.cljs$lang$ctorStr = "clustermap.components.multiview/t37503";
clustermap.components.multiview.t37503.cljs$lang$ctorPrWriter = ((function (map__37502,map__37502__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.multiview/t37503");
});})(map__37502,map__37502__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37503.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t37503.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__37502,map__37502__$1,cursor,filter_spec){
return (function (this$,p__37506,next_state){var self__ = this;
var map__37507 = p__37506;var map__37507__$1 = ((cljs.core.seq_QMARK_(map__37507))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37507):map__37507);var map__37508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507__$1,cljs.core.constant$keyword$788);var map__37508__$1 = ((cljs.core.seq_QMARK_(map__37508))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37508):map__37508);var next_compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37508__$1,cljs.core.constant$keyword$1034);var next_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37507__$1,cljs.core.constant$keyword$1076);var this$__$1 = this;var map__37509 = om.core.get_props(self__.owner);var map__37509__$1 = ((cljs.core.seq_QMARK_(map__37509))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37509):map__37509);var map__37510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37509__$1,cljs.core.constant$keyword$788);var map__37510__$1 = ((cljs.core.seq_QMARK_(map__37510))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37510):map__37510);var compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37510__$1,cljs.core.constant$keyword$1034);var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37509__$1,cljs.core.constant$keyword$1076);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_compiled_filter,compiled_filter))
{var seq__37511 = cljs.core.seq(cljs.core.keys(next_views));var chunk__37512 = null;var count__37513 = (0);var i__37514 = (0);while(true){
if((i__37514 < count__37513))
{var view_key = chunk__37512.cljs$core$IIndexed$_nth$arity$2(null,i__37514);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1076,view_key,cljs.core.constant$keyword$788], null),next_compiled_filter);
{
var G__37516 = seq__37511;
var G__37517 = chunk__37512;
var G__37518 = count__37513;
var G__37519 = (i__37514 + (1));
seq__37511 = G__37516;
chunk__37512 = G__37517;
count__37513 = G__37518;
i__37514 = G__37519;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37511);if(temp__4126__auto__)
{var seq__37511__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37511__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37511__$1);{
var G__37520 = cljs.core.chunk_rest(seq__37511__$1);
var G__37521 = c__4299__auto__;
var G__37522 = cljs.core.count(c__4299__auto__);
var G__37523 = (0);
seq__37511 = G__37520;
chunk__37512 = G__37521;
count__37513 = G__37522;
i__37514 = G__37523;
continue;
}
} else
{var view_key = cljs.core.first(seq__37511__$1);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1076,view_key,cljs.core.constant$keyword$788], null),next_compiled_filter);
{
var G__37524 = cljs.core.next(seq__37511__$1);
var G__37525 = null;
var G__37526 = (0);
var G__37527 = (0);
seq__37511 = G__37524;
chunk__37512 = G__37525;
count__37513 = G__37526;
i__37514 = G__37527;
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
});})(map__37502,map__37502__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37503.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t37503.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37502,map__37502__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs37515 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37515))?sablono.interpreter.attributes(attrs37515):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37515))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37515)], null))));
});})(map__37502,map__37502__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37502,map__37502__$1,cursor,filter_spec){
return (function (_37505){var self__ = this;
var _37505__$1 = this;return self__.meta37504;
});})(map__37502,map__37502__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37502,map__37502__$1,cursor,filter_spec){
return (function (_37505,meta37504__$1){var self__ = this;
var _37505__$1 = this;return (new clustermap.components.multiview.t37503(self__.filter_spec,self__.cursor,self__.map__37502,self__.owner,self__.p__37487,self__.multiview_component,meta37504__$1));
});})(map__37502,map__37502__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t37503 = ((function (map__37502,map__37502__$1,cursor,filter_spec){
return (function __GT_t37503(filter_spec__$1,cursor__$1,map__37502__$2,owner__$1,p__37487__$1,multiview_component__$1,meta37504){return (new clustermap.components.multiview.t37503(filter_spec__$1,cursor__$1,map__37502__$2,owner__$1,p__37487__$1,multiview_component__$1,meta37504));
});})(map__37502,map__37502__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t37503(filter_spec,cursor,map__37502__$1,owner,p__37487,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$879,shared,cljs.core.constant$keyword$882,document.getElementById(elem_id),cljs.core.constant$keyword$854,path], null));
});
