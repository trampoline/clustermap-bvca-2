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
clustermap.components.multiview.multiview_component = (function multiview_component(p__50333,owner){var map__50348 = p__50333;var map__50348__$1 = ((cljs.core.seq_QMARK_.call(null,map__50348))?cljs.core.apply.call(null,cljs.core.hash_map,map__50348):map__50348);var cursor = map__50348__$1;var filter_spec = cljs.core.get.call(null,map__50348__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t50349 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t50349 = (function (filter_spec,cursor,map__50348,owner,p__50333,multiview_component,meta50350){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__50348 = map__50348;
this.owner = owner;
this.p__50333 = p__50333;
this.multiview_component = multiview_component;
this.meta50350 = meta50350;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t50349.cljs$lang$type = true;
clustermap.components.multiview.t50349.cljs$lang$ctorStr = "clustermap.components.multiview/t50349";
clustermap.components.multiview.t50349.cljs$lang$ctorPrWriter = ((function (map__50348,map__50348__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t50349");
});})(map__50348,map__50348__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50349.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t50349.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__50348,map__50348__$1,cursor,filter_spec){
return (function (this$,p__50352,next_state){var self__ = this;
var map__50353 = p__50352;var map__50353__$1 = ((cljs.core.seq_QMARK_.call(null,map__50353))?cljs.core.apply.call(null,cljs.core.hash_map,map__50353):map__50353);var map__50354 = cljs.core.get.call(null,map__50353__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__50354__$1 = ((cljs.core.seq_QMARK_.call(null,map__50354))?cljs.core.apply.call(null,cljs.core.hash_map,map__50354):map__50354);var next_compiled_filter = cljs.core.get.call(null,map__50354__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__50353__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__50355 = om.core.get_props.call(null,self__.owner);var map__50355__$1 = ((cljs.core.seq_QMARK_.call(null,map__50355))?cljs.core.apply.call(null,cljs.core.hash_map,map__50355):map__50355);var map__50356 = cljs.core.get.call(null,map__50355__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__50356__$1 = ((cljs.core.seq_QMARK_.call(null,map__50356))?cljs.core.apply.call(null,cljs.core.hash_map,map__50356):map__50356);var compiled_filter = cljs.core.get.call(null,map__50356__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__50355__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__50357 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__50358 = null;var count__50359 = (0);var i__50360 = (0);while(true){
if((i__50360 < count__50359))
{var view_key = cljs.core._nth.call(null,chunk__50358,i__50360);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__50362 = seq__50357;
var G__50363 = chunk__50358;
var G__50364 = count__50359;
var G__50365 = (i__50360 + (1));
seq__50357 = G__50362;
chunk__50358 = G__50363;
count__50359 = G__50364;
i__50360 = G__50365;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50357);if(temp__4126__auto__)
{var seq__50357__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50357__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__50357__$1);{
var G__50366 = cljs.core.chunk_rest.call(null,seq__50357__$1);
var G__50367 = c__4299__auto__;
var G__50368 = cljs.core.count.call(null,c__4299__auto__);
var G__50369 = (0);
seq__50357 = G__50366;
chunk__50358 = G__50367;
count__50359 = G__50368;
i__50360 = G__50369;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__50357__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__50370 = cljs.core.next.call(null,seq__50357__$1);
var G__50371 = null;
var G__50372 = (0);
var G__50373 = (0);
seq__50357 = G__50370;
chunk__50358 = G__50371;
count__50359 = G__50372;
i__50360 = G__50373;
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
});})(map__50348,map__50348__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50349.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t50349.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__50348,map__50348__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs50361 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs50361))?sablono.interpreter.attributes.call(null,attrs50361):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50361))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50361)], null))));
});})(map__50348,map__50348__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50349.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50348,map__50348__$1,cursor,filter_spec){
return (function (_50351){var self__ = this;
var _50351__$1 = this;return self__.meta50350;
});})(map__50348,map__50348__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50349.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50348,map__50348__$1,cursor,filter_spec){
return (function (_50351,meta50350__$1){var self__ = this;
var _50351__$1 = this;return (new clustermap.components.multiview.t50349(self__.filter_spec,self__.cursor,self__.map__50348,self__.owner,self__.p__50333,self__.multiview_component,meta50350__$1));
});})(map__50348,map__50348__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t50349 = ((function (map__50348,map__50348__$1,cursor,filter_spec){
return (function __GT_t50349(filter_spec__$1,cursor__$1,map__50348__$2,owner__$1,p__50333__$1,multiview_component__$1,meta50350){return (new clustermap.components.multiview.t50349(filter_spec__$1,cursor__$1,map__50348__$2,owner__$1,p__50333__$1,multiview_component__$1,meta50350));
});})(map__50348,map__50348__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t50349(filter_spec,cursor,map__50348__$1,owner,p__50333,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=multiview.js.map