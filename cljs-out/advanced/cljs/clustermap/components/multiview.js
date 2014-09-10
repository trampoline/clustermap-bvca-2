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
clustermap.components.multiview.multiview_component = (function multiview_component(p__38567,owner){var map__38582 = p__38567;var map__38582__$1 = ((cljs.core.seq_QMARK_(map__38582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38582):map__38582);var cursor = map__38582__$1;var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38582__$1,cljs.core.constant$keyword$808);if(typeof clustermap.components.multiview.t38583 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t38583 = (function (filter_spec,cursor,map__38582,owner,p__38567,multiview_component,meta38584){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__38582 = map__38582;
this.owner = owner;
this.p__38567 = p__38567;
this.multiview_component = multiview_component;
this.meta38584 = meta38584;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t38583.cljs$lang$type = true;
clustermap.components.multiview.t38583.cljs$lang$ctorStr = "clustermap.components.multiview/t38583";
clustermap.components.multiview.t38583.cljs$lang$ctorPrWriter = ((function (map__38582,map__38582__$1,cursor,filter_spec){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"clustermap.components.multiview/t38583");
});})(map__38582,map__38582__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38583.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t38583.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__38582,map__38582__$1,cursor,filter_spec){
return (function (this$,p__38586,next_state){var self__ = this;
var map__38587 = p__38586;var map__38587__$1 = ((cljs.core.seq_QMARK_(map__38587))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38587):map__38587);var map__38588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38587__$1,cljs.core.constant$keyword$808);var map__38588__$1 = ((cljs.core.seq_QMARK_(map__38588))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38588):map__38588);var next_compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38588__$1,cljs.core.constant$keyword$1055);var next_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38587__$1,cljs.core.constant$keyword$1098);var this$__$1 = this;var map__38589 = om.core.get_props(self__.owner);var map__38589__$1 = ((cljs.core.seq_QMARK_(map__38589))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38589):map__38589);var map__38590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38589__$1,cljs.core.constant$keyword$808);var map__38590__$1 = ((cljs.core.seq_QMARK_(map__38590))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38590):map__38590);var compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38590__$1,cljs.core.constant$keyword$1055);var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38589__$1,cljs.core.constant$keyword$1098);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_compiled_filter,compiled_filter))
{var seq__38591 = cljs.core.seq(cljs.core.keys(next_views));var chunk__38592 = null;var count__38593 = (0);var i__38594 = (0);while(true){
if((i__38594 < count__38593))
{var view_key = chunk__38592.cljs$core$IIndexed$_nth$arity$2(null,i__38594);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1098,view_key,cljs.core.constant$keyword$808], null),next_compiled_filter);
{
var G__38596 = seq__38591;
var G__38597 = chunk__38592;
var G__38598 = count__38593;
var G__38599 = (i__38594 + (1));
seq__38591 = G__38596;
chunk__38592 = G__38597;
count__38593 = G__38598;
i__38594 = G__38599;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38591);if(temp__4126__auto__)
{var seq__38591__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38591__$1))
{var c__4297__auto__ = cljs.core.chunk_first(seq__38591__$1);{
var G__38600 = cljs.core.chunk_rest(seq__38591__$1);
var G__38601 = c__4297__auto__;
var G__38602 = cljs.core.count(c__4297__auto__);
var G__38603 = (0);
seq__38591 = G__38600;
chunk__38592 = G__38601;
count__38593 = G__38602;
i__38594 = G__38603;
continue;
}
} else
{var view_key = cljs.core.first(seq__38591__$1);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1098,view_key,cljs.core.constant$keyword$808], null),next_compiled_filter);
{
var G__38604 = cljs.core.next(seq__38591__$1);
var G__38605 = null;
var G__38606 = (0);
var G__38607 = (0);
seq__38591 = G__38604;
chunk__38592 = G__38605;
count__38593 = G__38606;
i__38594 = G__38607;
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
});})(map__38582,map__38582__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38583.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t38583.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38582,map__38582__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs38595 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38595))?sablono.interpreter.attributes(attrs38595):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38595))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38595)], null))));
});})(map__38582,map__38582__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38583.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38582,map__38582__$1,cursor,filter_spec){
return (function (_38585){var self__ = this;
var _38585__$1 = this;return self__.meta38584;
});})(map__38582,map__38582__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38583.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38582,map__38582__$1,cursor,filter_spec){
return (function (_38585,meta38584__$1){var self__ = this;
var _38585__$1 = this;return (new clustermap.components.multiview.t38583(self__.filter_spec,self__.cursor,self__.map__38582,self__.owner,self__.p__38567,self__.multiview_component,meta38584__$1));
});})(map__38582,map__38582__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t38583 = ((function (map__38582,map__38582__$1,cursor,filter_spec){
return (function __GT_t38583(filter_spec__$1,cursor__$1,map__38582__$2,owner__$1,p__38567__$1,multiview_component__$1,meta38584){return (new clustermap.components.multiview.t38583(filter_spec__$1,cursor__$1,map__38582__$2,owner__$1,p__38567__$1,multiview_component__$1,meta38584));
});})(map__38582,map__38582__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t38583(filter_spec,cursor,map__38582__$1,owner,p__38567,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$900,shared,cljs.core.constant$keyword$903,document.getElementById(elem_id),cljs.core.constant$keyword$875,path], null));
});
