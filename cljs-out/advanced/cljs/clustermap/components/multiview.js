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
clustermap.components.multiview.multiview_component = (function multiview_component(p__38146,owner){var map__38161 = p__38146;var map__38161__$1 = ((cljs.core.seq_QMARK_(map__38161))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38161):map__38161);var cursor = map__38161__$1;var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38161__$1,cljs.core.constant$keyword$804);if(typeof clustermap.components.multiview.t38162 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t38162 = (function (filter_spec,cursor,map__38161,owner,p__38146,multiview_component,meta38163){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__38161 = map__38161;
this.owner = owner;
this.p__38146 = p__38146;
this.multiview_component = multiview_component;
this.meta38163 = meta38163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t38162.cljs$lang$type = true;
clustermap.components.multiview.t38162.cljs$lang$ctorStr = "clustermap.components.multiview/t38162";
clustermap.components.multiview.t38162.cljs$lang$ctorPrWriter = ((function (map__38161,map__38161__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.multiview/t38162");
});})(map__38161,map__38161__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38162.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t38162.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__38161,map__38161__$1,cursor,filter_spec){
return (function (this$,p__38165,next_state){var self__ = this;
var map__38166 = p__38165;var map__38166__$1 = ((cljs.core.seq_QMARK_(map__38166))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38166):map__38166);var map__38167 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38166__$1,cljs.core.constant$keyword$804);var map__38167__$1 = ((cljs.core.seq_QMARK_(map__38167))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38167):map__38167);var next_compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38167__$1,cljs.core.constant$keyword$1049);var next_views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38166__$1,cljs.core.constant$keyword$1092);var this$__$1 = this;var map__38168 = om.core.get_props(self__.owner);var map__38168__$1 = ((cljs.core.seq_QMARK_(map__38168))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38168):map__38168);var map__38169 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168__$1,cljs.core.constant$keyword$804);var map__38169__$1 = ((cljs.core.seq_QMARK_(map__38169))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38169):map__38169);var compiled_filter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38169__$1,cljs.core.constant$keyword$1049);var views = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38168__$1,cljs.core.constant$keyword$1092);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_compiled_filter,compiled_filter))
{var seq__38170 = cljs.core.seq(cljs.core.keys(next_views));var chunk__38171 = null;var count__38172 = (0);var i__38173 = (0);while(true){
if((i__38173 < count__38172))
{var view_key = chunk__38171.cljs$core$IIndexed$_nth$arity$2(null,i__38173);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1092,view_key,cljs.core.constant$keyword$804], null),next_compiled_filter);
{
var G__38175 = seq__38170;
var G__38176 = chunk__38171;
var G__38177 = count__38172;
var G__38178 = (i__38173 + (1));
seq__38170 = G__38175;
chunk__38171 = G__38176;
count__38172 = G__38177;
i__38173 = G__38178;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq(seq__38170);if(temp__4126__auto__)
{var seq__38170__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(seq__38170__$1))
{var c__4299__auto__ = cljs.core.chunk_first(seq__38170__$1);{
var G__38179 = cljs.core.chunk_rest(seq__38170__$1);
var G__38180 = c__4299__auto__;
var G__38181 = cljs.core.count(c__4299__auto__);
var G__38182 = (0);
seq__38170 = G__38179;
chunk__38171 = G__38180;
count__38172 = G__38181;
i__38173 = G__38182;
continue;
}
} else
{var view_key = cljs.core.first(seq__38170__$1);om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1092,view_key,cljs.core.constant$keyword$804], null),next_compiled_filter);
{
var G__38183 = cljs.core.next(seq__38170__$1);
var G__38184 = null;
var G__38185 = (0);
var G__38186 = (0);
seq__38170 = G__38183;
chunk__38171 = G__38184;
count__38172 = G__38185;
i__38173 = G__38186;
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
});})(map__38161,map__38161__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38162.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t38162.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38161,map__38161__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs38174 = om.core.build.cljs$core$IFn$_invoke$arity$2(clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.div,((cljs.core.map_QMARK_(attrs38174))?sablono.interpreter.attributes(attrs38174):null),cljs.core.remove(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38174))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38174)], null))));
});})(map__38161,map__38161__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38161,map__38161__$1,cursor,filter_spec){
return (function (_38164){var self__ = this;
var _38164__$1 = this;return self__.meta38163;
});})(map__38161,map__38161__$1,cursor,filter_spec))
;
clustermap.components.multiview.t38162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38161,map__38161__$1,cursor,filter_spec){
return (function (_38164,meta38163__$1){var self__ = this;
var _38164__$1 = this;return (new clustermap.components.multiview.t38162(self__.filter_spec,self__.cursor,self__.map__38161,self__.owner,self__.p__38146,self__.multiview_component,meta38163__$1));
});})(map__38161,map__38161__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t38162 = ((function (map__38161,map__38161__$1,cursor,filter_spec){
return (function __GT_t38162(filter_spec__$1,cursor__$1,map__38161__$2,owner__$1,p__38146__$1,multiview_component__$1,meta38163){return (new clustermap.components.multiview.t38162(filter_spec__$1,cursor__$1,map__38161__$2,owner__$1,p__38146__$1,multiview_component__$1,meta38163));
});})(map__38161,map__38161__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t38162(filter_spec,cursor,map__38161__$1,owner,p__38146,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$894,shared,cljs.core.constant$keyword$897,document.getElementById(elem_id),cljs.core.constant$keyword$869,path], null));
});
