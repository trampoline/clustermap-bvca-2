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
clustermap.components.multiview.multiview_component = (function multiview_component(p__37352,owner){var map__37367 = p__37352;var map__37367__$1 = ((cljs.core.seq_QMARK_(map__37367))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37367):map__37367);var cursor = map__37367__$1;var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37367__$1,cljs.core.constant$keyword$784);if(typeof clustermap.components.multiview.t37368 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t37368 = (function (filter_spec,cursor,map__37367,owner,p__37352,multiview_component,meta37369){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__37367 = map__37367;
this.owner = owner;
this.p__37352 = p__37352;
this.multiview_component = multiview_component;
this.meta37369 = meta37369;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t37368.cljs$lang$type = true;
clustermap.components.multiview.t37368.cljs$lang$ctorStr = "clustermap.components.multiview/t37368";
clustermap.components.multiview.t37368.cljs$lang$ctorPrWriter = ((function (map__37367,map__37367__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.multiview/t37368");
});})(map__37367,map__37367__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37368.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t37368.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__37367,map__37367__$1,cursor,filter_spec){
return (function (this$,p__37371,next_state){var self__ = this;
var map__37372 = p__37371;var map__37372__$1 = ((cljs.core.seq_QMARK_(map__37372))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37372):map__37372);var map__37373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,cljs.core.constant$keyword$784);var map__37373__$1 = ((cljs.core.seq_QMARK_(map__37373))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37373):map__37373);var next_compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37373__$1,cljs.core.constant$keyword$1030);var next_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37372__$1,cljs.core.constant$keyword$1072);var this$__$1 = this;var map__37374 = om.core.get_props(self__.owner);var map__37374__$1 = ((cljs.core.seq_QMARK_(map__37374))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37374):map__37374);var map__37375 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37374__$1,cljs.core.constant$keyword$784);var map__37375__$1 = ((cljs.core.seq_QMARK_(map__37375))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37375):map__37375);var compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37375__$1,cljs.core.constant$keyword$1030);var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37374__$1,cljs.core.constant$keyword$1072);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_compiled_filter,compiled_filter))
{var seq__37376 = cljs.core.seq(cljs.core.keys(next_views));var chunk__37377 = null;var count__37378 = (0);var i__37379 = (0);while(true){
if((i__37379 < count__37378))
{var view_key = chunk__37377.cljs$core$IIndexed$_nth$arity$2(null,i__37379);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1072,view_key,cljs.core.constant$keyword$784], null),next_compiled_filter);
{
var G__37381 = seq__37376;
var G__37382 = chunk__37377;
var G__37383 = count__37378;
var G__37384 = (i__37379 + (1));
seq__37376 = G__37381;
chunk__37377 = G__37382;
count__37378 = G__37383;
i__37379 = G__37384;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__37376);if(temp__4126__auto__)
{var seq__37376__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__37376__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__37376__$1);{
var G__37385 = cljs.core.chunk_rest(seq__37376__$1);
var G__37386 = c__4299__auto__;
var G__37387 = cljs.core.count(c__4299__auto__);
var G__37388 = (0);
seq__37376 = G__37385;
chunk__37377 = G__37386;
count__37378 = G__37387;
i__37379 = G__37388;
continue;
}
} else
{var view_key = cljs.core.first(seq__37376__$1);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1072,view_key,cljs.core.constant$keyword$784], null),next_compiled_filter);
{
var G__37389 = cljs.core.next(seq__37376__$1);
var G__37390 = null;
var G__37391 = (0);
var G__37392 = (0);
seq__37376 = G__37389;
chunk__37377 = G__37390;
count__37378 = G__37391;
i__37379 = G__37392;
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
});})(map__37367,map__37367__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37368.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t37368.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__37367,map__37367__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs37380 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs37380))?sablono.interpreter.attributes(attrs37380):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs37380))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs37380)], null))));
});})(map__37367,map__37367__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37368.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37367,map__37367__$1,cursor,filter_spec){
return (function (_37370){var self__ = this;
var _37370__$1 = this;return self__.meta37369;
});})(map__37367,map__37367__$1,cursor,filter_spec))
;
clustermap.components.multiview.t37368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37367,map__37367__$1,cursor,filter_spec){
return (function (_37370,meta37369__$1){var self__ = this;
var _37370__$1 = this;return (new clustermap.components.multiview.t37368(self__.filter_spec,self__.cursor,self__.map__37367,self__.owner,self__.p__37352,self__.multiview_component,meta37369__$1));
});})(map__37367,map__37367__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t37368 = ((function (map__37367,map__37367__$1,cursor,filter_spec){
return (function __GT_t37368(filter_spec__$1,cursor__$1,map__37367__$2,owner__$1,p__37352__$1,multiview_component__$1,meta37369){return (new clustermap.components.multiview.t37368(filter_spec__$1,cursor__$1,map__37367__$2,owner__$1,p__37352__$1,multiview_component__$1,meta37369));
});})(map__37367,map__37367__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t37368(filter_spec,cursor,map__37367__$1,owner,p__37352,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$875,shared,cljs.core.constant$keyword$878,document.getElementById(elem_id),cljs.core.constant$keyword$850,path], null));
});
