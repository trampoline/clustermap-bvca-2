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
clustermap.components.multiview.multiview_component = (function multiview_component(p__38248,owner){var map__38263 = p__38248;var map__38263__$1 = ((cljs.core.seq_QMARK_(map__38263))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38263):map__38263);var cursor = map__38263__$1;var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38263__$1,cljs.core.constant$keyword$798);if(typeof clustermap.components.multiview.t38264 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t38264 = (function (filter_spec,cursor,map__38263,owner,p__38248,multiview_component,meta38265){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__38263 = map__38263;
this.owner = owner;
this.p__38248 = p__38248;
this.multiview_component = multiview_component;
this.meta38265 = meta38265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t38264.cljs$lang$type = true;
clustermap.components.multiview.t38264.cljs$lang$ctorStr = "clustermap.components.multiview/t38264";
clustermap.components.multiview.t38264.cljs$lang$ctorPrWriter = ((function (map__38263,map__38263__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.multiview/t38264");
});})(map__38263,map__38263__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38264.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t38264.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__38263,map__38263__$1,cursor,filter_spec){
return (function (this$,p__38267,next_state){var self__ = this;
var map__38268 = p__38267;var map__38268__$1 = ((cljs.core.seq_QMARK_(map__38268))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38268):map__38268);var map__38269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38268__$1,cljs.core.constant$keyword$798);var map__38269__$1 = ((cljs.core.seq_QMARK_(map__38269))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38269):map__38269);var next_compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38269__$1,cljs.core.constant$keyword$1043);var next_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38268__$1,cljs.core.constant$keyword$1083);var this$__$1 = this;var map__38270 = om.core.get_props(self__.owner);var map__38270__$1 = ((cljs.core.seq_QMARK_(map__38270))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38270):map__38270);var map__38271 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38270__$1,cljs.core.constant$keyword$798);var map__38271__$1 = ((cljs.core.seq_QMARK_(map__38271))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38271):map__38271);var compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38271__$1,cljs.core.constant$keyword$1043);var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38270__$1,cljs.core.constant$keyword$1083);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_compiled_filter,compiled_filter))
{var seq__38272 = cljs.core.seq(cljs.core.keys(next_views));var chunk__38273 = null;var count__38274 = (0);var i__38275 = (0);while(true){
if((i__38275 < count__38274))
{var view_key = chunk__38273.cljs$core$IIndexed$_nth$arity$2(null,i__38275);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1083,view_key,cljs.core.constant$keyword$798], null),next_compiled_filter);
{
var G__38277 = seq__38272;
var G__38278 = chunk__38273;
var G__38279 = count__38274;
var G__38280 = (i__38275 + (1));
seq__38272 = G__38277;
chunk__38273 = G__38278;
count__38274 = G__38279;
i__38275 = G__38280;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38272);if(temp__4126__auto__)
{var seq__38272__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38272__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__38272__$1);{
var G__38281 = cljs.core.chunk_rest(seq__38272__$1);
var G__38282 = c__4299__auto__;
var G__38283 = cljs.core.count(c__4299__auto__);
var G__38284 = (0);
seq__38272 = G__38281;
chunk__38273 = G__38282;
count__38274 = G__38283;
i__38275 = G__38284;
continue;
}
} else
{var view_key = cljs.core.first(seq__38272__$1);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1083,view_key,cljs.core.constant$keyword$798], null),next_compiled_filter);
{
var G__38285 = cljs.core.next(seq__38272__$1);
var G__38286 = null;
var G__38287 = (0);
var G__38288 = (0);
seq__38272 = G__38285;
chunk__38273 = G__38286;
count__38274 = G__38287;
i__38275 = G__38288;
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
});})(map__38263,map__38263__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38264.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t38264.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38263,map__38263__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs38276 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38276))?sablono.interpreter.attributes(attrs38276):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38276))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38276)], null))));
});})(map__38263,map__38263__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38264.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38263,map__38263__$1,cursor,filter_spec){
return (function (_38266){var self__ = this;
var _38266__$1 = this;return self__.meta38265;
});})(map__38263,map__38263__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38263,map__38263__$1,cursor,filter_spec){
return (function (_38266,meta38265__$1){var self__ = this;
var _38266__$1 = this;return (new clustermap.components.multiview.t38264(self__.filter_spec,self__.cursor,self__.map__38263,self__.owner,self__.p__38248,self__.multiview_component,meta38265__$1));
});})(map__38263,map__38263__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t38264 = ((function (map__38263,map__38263__$1,cursor,filter_spec){
return (function __GT_t38264(filter_spec__$1,cursor__$1,map__38263__$2,owner__$1,p__38248__$1,multiview_component__$1,meta38265){return (new clustermap.components.multiview.t38264(filter_spec__$1,cursor__$1,map__38263__$2,owner__$1,p__38248__$1,multiview_component__$1,meta38265));
});})(map__38263,map__38263__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t38264(filter_spec,cursor,map__38263__$1,owner,p__38248,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$888,shared,cljs.core.constant$keyword$891,document.getElementById(elem_id),cljs.core.constant$keyword$863,path], null));
});
