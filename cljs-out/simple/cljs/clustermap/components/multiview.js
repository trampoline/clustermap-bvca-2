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
clustermap.components.multiview.multiview_component = (function multiview_component(p__25372,owner){var map__25387 = p__25372;var map__25387__$1 = ((cljs.core.seq_QMARK_.call(null,map__25387))?cljs.core.apply.call(null,cljs.core.hash_map,map__25387):map__25387);var cursor = map__25387__$1;var filter_spec = cljs.core.get.call(null,map__25387__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t25388 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t25388 = (function (filter_spec,cursor,map__25387,owner,p__25372,multiview_component,meta25389){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__25387 = map__25387;
this.owner = owner;
this.p__25372 = p__25372;
this.multiview_component = multiview_component;
this.meta25389 = meta25389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t25388.cljs$lang$type = true;
clustermap.components.multiview.t25388.cljs$lang$ctorStr = "clustermap.components.multiview/t25388";
clustermap.components.multiview.t25388.cljs$lang$ctorPrWriter = ((function (map__25387,map__25387__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t25388");
});})(map__25387,map__25387__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25388.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t25388.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__25387,map__25387__$1,cursor,filter_spec){
return (function (this$,p__25391,next_state){var self__ = this;
var map__25392 = p__25391;var map__25392__$1 = ((cljs.core.seq_QMARK_.call(null,map__25392))?cljs.core.apply.call(null,cljs.core.hash_map,map__25392):map__25392);var map__25393 = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__25393__$1 = ((cljs.core.seq_QMARK_.call(null,map__25393))?cljs.core.apply.call(null,cljs.core.hash_map,map__25393):map__25393);var next_compiled_filter = cljs.core.get.call(null,map__25393__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__25392__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__25394 = om.core.get_props.call(null,self__.owner);var map__25394__$1 = ((cljs.core.seq_QMARK_.call(null,map__25394))?cljs.core.apply.call(null,cljs.core.hash_map,map__25394):map__25394);var map__25395 = cljs.core.get.call(null,map__25394__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__25395__$1 = ((cljs.core.seq_QMARK_.call(null,map__25395))?cljs.core.apply.call(null,cljs.core.hash_map,map__25395):map__25395);var compiled_filter = cljs.core.get.call(null,map__25395__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__25394__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__25396 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__25397 = null;var count__25398 = (0);var i__25399 = (0);while(true){
if((i__25399 < count__25398))
{var view_key = cljs.core._nth.call(null,chunk__25397,i__25399);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__25401 = seq__25396;
var G__25402 = chunk__25397;
var G__25403 = count__25398;
var G__25404 = (i__25399 + (1));
seq__25396 = G__25401;
chunk__25397 = G__25402;
count__25398 = G__25403;
i__25399 = G__25404;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25396);if(temp__4126__auto__)
{var seq__25396__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25396__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__25396__$1);{
var G__25405 = cljs.core.chunk_rest.call(null,seq__25396__$1);
var G__25406 = c__4299__auto__;
var G__25407 = cljs.core.count.call(null,c__4299__auto__);
var G__25408 = (0);
seq__25396 = G__25405;
chunk__25397 = G__25406;
count__25398 = G__25407;
i__25399 = G__25408;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__25396__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__25409 = cljs.core.next.call(null,seq__25396__$1);
var G__25410 = null;
var G__25411 = (0);
var G__25412 = (0);
seq__25396 = G__25409;
chunk__25397 = G__25410;
count__25398 = G__25411;
i__25399 = G__25412;
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
});})(map__25387,map__25387__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25388.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t25388.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25387,map__25387__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs25400 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs25400))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"search",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-component"], null)], null),attrs25400)):{"className": "search-component", "id": "search"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25400))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25400)], null))));
});})(map__25387,map__25387__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25388.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25387,map__25387__$1,cursor,filter_spec){
return (function (_25390){var self__ = this;
var _25390__$1 = this;return self__.meta25389;
});})(map__25387,map__25387__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25387,map__25387__$1,cursor,filter_spec){
return (function (_25390,meta25389__$1){var self__ = this;
var _25390__$1 = this;return (new clustermap.components.multiview.t25388(self__.filter_spec,self__.cursor,self__.map__25387,self__.owner,self__.p__25372,self__.multiview_component,meta25389__$1));
});})(map__25387,map__25387__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t25388 = ((function (map__25387,map__25387__$1,cursor,filter_spec){
return (function __GT_t25388(filter_spec__$1,cursor__$1,map__25387__$2,owner__$1,p__25372__$1,multiview_component__$1,meta25389){return (new clustermap.components.multiview.t25388(filter_spec__$1,cursor__$1,map__25387__$2,owner__$1,p__25372__$1,multiview_component__$1,meta25389));
});})(map__25387,map__25387__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t25388(filter_spec,cursor,map__25387__$1,owner,p__25372,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
