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
clustermap.components.multiview.multiview_component = (function multiview_component(p__25959,owner){var map__25974 = p__25959;var map__25974__$1 = ((cljs.core.seq_QMARK_.call(null,map__25974))?cljs.core.apply.call(null,cljs.core.hash_map,map__25974):map__25974);var cursor = map__25974__$1;var filter_spec = cljs.core.get.call(null,map__25974__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t25975 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t25975 = (function (filter_spec,cursor,map__25974,owner,p__25959,multiview_component,meta25976){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__25974 = map__25974;
this.owner = owner;
this.p__25959 = p__25959;
this.multiview_component = multiview_component;
this.meta25976 = meta25976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t25975.cljs$lang$type = true;
clustermap.components.multiview.t25975.cljs$lang$ctorStr = "clustermap.components.multiview/t25975";
clustermap.components.multiview.t25975.cljs$lang$ctorPrWriter = ((function (map__25974,map__25974__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t25975");
});})(map__25974,map__25974__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25975.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t25975.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__25974,map__25974__$1,cursor,filter_spec){
return (function (this$,p__25978,next_state){var self__ = this;
var map__25979 = p__25978;var map__25979__$1 = ((cljs.core.seq_QMARK_.call(null,map__25979))?cljs.core.apply.call(null,cljs.core.hash_map,map__25979):map__25979);var map__25980 = cljs.core.get.call(null,map__25979__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__25980__$1 = ((cljs.core.seq_QMARK_.call(null,map__25980))?cljs.core.apply.call(null,cljs.core.hash_map,map__25980):map__25980);var next_compiled_filter = cljs.core.get.call(null,map__25980__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__25979__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__25981 = om.core.get_props.call(null,self__.owner);var map__25981__$1 = ((cljs.core.seq_QMARK_.call(null,map__25981))?cljs.core.apply.call(null,cljs.core.hash_map,map__25981):map__25981);var map__25982 = cljs.core.get.call(null,map__25981__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__25982__$1 = ((cljs.core.seq_QMARK_.call(null,map__25982))?cljs.core.apply.call(null,cljs.core.hash_map,map__25982):map__25982);var compiled_filter = cljs.core.get.call(null,map__25982__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__25981__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__25983 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__25984 = null;var count__25985 = (0);var i__25986 = (0);while(true){
if((i__25986 < count__25985))
{var view_key = cljs.core._nth.call(null,chunk__25984,i__25986);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__25988 = seq__25983;
var G__25989 = chunk__25984;
var G__25990 = count__25985;
var G__25991 = (i__25986 + (1));
seq__25983 = G__25988;
chunk__25984 = G__25989;
count__25985 = G__25990;
i__25986 = G__25991;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25983);if(temp__4126__auto__)
{var seq__25983__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25983__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__25983__$1);{
var G__25992 = cljs.core.chunk_rest.call(null,seq__25983__$1);
var G__25993 = c__4299__auto__;
var G__25994 = cljs.core.count.call(null,c__4299__auto__);
var G__25995 = (0);
seq__25983 = G__25992;
chunk__25984 = G__25993;
count__25985 = G__25994;
i__25986 = G__25995;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__25983__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__25996 = cljs.core.next.call(null,seq__25983__$1);
var G__25997 = null;
var G__25998 = (0);
var G__25999 = (0);
seq__25983 = G__25996;
chunk__25984 = G__25997;
count__25985 = G__25998;
i__25986 = G__25999;
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
});})(map__25974,map__25974__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25975.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t25975.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25974,map__25974__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs25987 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs25987))?sablono.interpreter.attributes.call(null,attrs25987):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25987))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25987)], null))));
});})(map__25974,map__25974__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25974,map__25974__$1,cursor,filter_spec){
return (function (_25977){var self__ = this;
var _25977__$1 = this;return self__.meta25976;
});})(map__25974,map__25974__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25974,map__25974__$1,cursor,filter_spec){
return (function (_25977,meta25976__$1){var self__ = this;
var _25977__$1 = this;return (new clustermap.components.multiview.t25975(self__.filter_spec,self__.cursor,self__.map__25974,self__.owner,self__.p__25959,self__.multiview_component,meta25976__$1));
});})(map__25974,map__25974__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t25975 = ((function (map__25974,map__25974__$1,cursor,filter_spec){
return (function __GT_t25975(filter_spec__$1,cursor__$1,map__25974__$2,owner__$1,p__25959__$1,multiview_component__$1,meta25976){return (new clustermap.components.multiview.t25975(filter_spec__$1,cursor__$1,map__25974__$2,owner__$1,p__25959__$1,multiview_component__$1,meta25976));
});})(map__25974,map__25974__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t25975(filter_spec,cursor,map__25974__$1,owner,p__25959,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
