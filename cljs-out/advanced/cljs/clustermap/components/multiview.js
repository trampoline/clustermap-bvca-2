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
clustermap.components.multiview.multiview_component = (function multiview_component(p__39427,owner){var map__39442 = p__39427;var map__39442__$1 = ((cljs.core.seq_QMARK_(map__39442))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39442):map__39442);var cursor = map__39442__$1;var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39442__$1,cljs.core.constant$keyword$792);if(typeof clustermap.components.multiview.t39443 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t39443 = (function (filter_spec,cursor,map__39442,owner,p__39427,multiview_component,meta39444){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__39442 = map__39442;
this.owner = owner;
this.p__39427 = p__39427;
this.multiview_component = multiview_component;
this.meta39444 = meta39444;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t39443.cljs$lang$type = true;
clustermap.components.multiview.t39443.cljs$lang$ctorStr = "clustermap.components.multiview/t39443";
clustermap.components.multiview.t39443.cljs$lang$ctorPrWriter = ((function (map__39442,map__39442__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.multiview/t39443");
});})(map__39442,map__39442__$1,cursor,filter_spec))
;
clustermap.components.multiview.t39443.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t39443.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__39442,map__39442__$1,cursor,filter_spec){
return (function (this$,p__39446,next_state){var self__ = this;
var map__39447 = p__39446;var map__39447__$1 = ((cljs.core.seq_QMARK_(map__39447))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39447):map__39447);var map__39448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39447__$1,cljs.core.constant$keyword$792);var map__39448__$1 = ((cljs.core.seq_QMARK_(map__39448))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39448):map__39448);var next_compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39448__$1,cljs.core.constant$keyword$1038);var next_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39447__$1,cljs.core.constant$keyword$1079);var this$__$1 = this;var map__39449 = om.core.get_props(self__.owner);var map__39449__$1 = ((cljs.core.seq_QMARK_(map__39449))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39449):map__39449);var map__39450 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,cljs.core.constant$keyword$792);var map__39450__$1 = ((cljs.core.seq_QMARK_(map__39450))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39450):map__39450);var compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39450__$1,cljs.core.constant$keyword$1038);var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39449__$1,cljs.core.constant$keyword$1079);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_compiled_filter,compiled_filter))
{var seq__39451 = cljs.core.seq(cljs.core.keys(next_views));var chunk__39452 = null;var count__39453 = (0);var i__39454 = (0);while(true){
if((i__39454 < count__39453))
{var view_key = chunk__39452.cljs$core$IIndexed$_nth$arity$2(null,i__39454);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1079,view_key,cljs.core.constant$keyword$792], null),next_compiled_filter);
{
var G__39456 = seq__39451;
var G__39457 = chunk__39452;
var G__39458 = count__39453;
var G__39459 = (i__39454 + (1));
seq__39451 = G__39456;
chunk__39452 = G__39457;
count__39453 = G__39458;
i__39454 = G__39459;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__39451);if(temp__4126__auto__)
{var seq__39451__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__39451__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__39451__$1);{
var G__39460 = cljs.core.chunk_rest(seq__39451__$1);
var G__39461 = c__4299__auto__;
var G__39462 = cljs.core.count(c__4299__auto__);
var G__39463 = (0);
seq__39451 = G__39460;
chunk__39452 = G__39461;
count__39453 = G__39462;
i__39454 = G__39463;
continue;
}
} else
{var view_key = cljs.core.first(seq__39451__$1);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1079,view_key,cljs.core.constant$keyword$792], null),next_compiled_filter);
{
var G__39464 = cljs.core.next(seq__39451__$1);
var G__39465 = null;
var G__39466 = (0);
var G__39467 = (0);
seq__39451 = G__39464;
chunk__39452 = G__39465;
count__39453 = G__39466;
i__39454 = G__39467;
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
});})(map__39442,map__39442__$1,cursor,filter_spec))
;
clustermap.components.multiview.t39443.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t39443.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__39442,map__39442__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs39455 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs39455))?sablono.interpreter.attributes(attrs39455):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39455))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39455)], null))));
});})(map__39442,map__39442__$1,cursor,filter_spec))
;
clustermap.components.multiview.t39443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39442,map__39442__$1,cursor,filter_spec){
return (function (_39445){var self__ = this;
var _39445__$1 = this;return self__.meta39444;
});})(map__39442,map__39442__$1,cursor,filter_spec))
;
clustermap.components.multiview.t39443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39442,map__39442__$1,cursor,filter_spec){
return (function (_39445,meta39444__$1){var self__ = this;
var _39445__$1 = this;return (new clustermap.components.multiview.t39443(self__.filter_spec,self__.cursor,self__.map__39442,self__.owner,self__.p__39427,self__.multiview_component,meta39444__$1));
});})(map__39442,map__39442__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t39443 = ((function (map__39442,map__39442__$1,cursor,filter_spec){
return (function __GT_t39443(filter_spec__$1,cursor__$1,map__39442__$2,owner__$1,p__39427__$1,multiview_component__$1,meta39444){return (new clustermap.components.multiview.t39443(filter_spec__$1,cursor__$1,map__39442__$2,owner__$1,p__39427__$1,multiview_component__$1,meta39444));
});})(map__39442,map__39442__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t39443(filter_spec,cursor,map__39442__$1,owner,p__39427,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$883,shared,cljs.core.constant$keyword$886,document.getElementById(elem_id),cljs.core.constant$keyword$858,path], null));
});
