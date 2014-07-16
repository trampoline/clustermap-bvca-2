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
clustermap.components.multiview.multiview_component = (function multiview_component(p__13572,owner){var map__13587 = p__13572;var map__13587__$1 = ((cljs.core.seq_QMARK_.call(null,map__13587))?cljs.core.apply.call(null,cljs.core.hash_map,map__13587):map__13587);var cursor = map__13587__$1;var filter_spec = cljs.core.get.call(null,map__13587__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t13588 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t13588 = (function (filter_spec,cursor,map__13587,owner,p__13572,multiview_component,meta13589){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__13587 = map__13587;
this.owner = owner;
this.p__13572 = p__13572;
this.multiview_component = multiview_component;
this.meta13589 = meta13589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t13588.cljs$lang$type = true;
clustermap.components.multiview.t13588.cljs$lang$ctorStr = "clustermap.components.multiview/t13588";
clustermap.components.multiview.t13588.cljs$lang$ctorPrWriter = ((function (map__13587,map__13587__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t13588");
});})(map__13587,map__13587__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13588.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t13588.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13587,map__13587__$1,cursor,filter_spec){
return (function (this$,p__13591,next_state){var self__ = this;
var map__13592 = p__13591;var map__13592__$1 = ((cljs.core.seq_QMARK_.call(null,map__13592))?cljs.core.apply.call(null,cljs.core.hash_map,map__13592):map__13592);var map__13593 = cljs.core.get.call(null,map__13592__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13593__$1 = ((cljs.core.seq_QMARK_.call(null,map__13593))?cljs.core.apply.call(null,cljs.core.hash_map,map__13593):map__13593);var next_compiled_filter = cljs.core.get.call(null,map__13593__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__13592__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__13594 = om.core.get_props.call(null,self__.owner);var map__13594__$1 = ((cljs.core.seq_QMARK_.call(null,map__13594))?cljs.core.apply.call(null,cljs.core.hash_map,map__13594):map__13594);var map__13595 = cljs.core.get.call(null,map__13594__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13595__$1 = ((cljs.core.seq_QMARK_.call(null,map__13595))?cljs.core.apply.call(null,cljs.core.hash_map,map__13595):map__13595);var compiled_filter = cljs.core.get.call(null,map__13595__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__13594__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__13596 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__13597 = null;var count__13598 = (0);var i__13599 = (0);while(true){
if((i__13599 < count__13598))
{var view_key = cljs.core._nth.call(null,chunk__13597,i__13599);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__13601 = seq__13596;
var G__13602 = chunk__13597;
var G__13603 = count__13598;
var G__13604 = (i__13599 + (1));
seq__13596 = G__13601;
chunk__13597 = G__13602;
count__13598 = G__13603;
i__13599 = G__13604;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13596);if(temp__4126__auto__)
{var seq__13596__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13596__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13596__$1);{
var G__13605 = cljs.core.chunk_rest.call(null,seq__13596__$1);
var G__13606 = c__4299__auto__;
var G__13607 = cljs.core.count.call(null,c__4299__auto__);
var G__13608 = (0);
seq__13596 = G__13605;
chunk__13597 = G__13606;
count__13598 = G__13607;
i__13599 = G__13608;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__13596__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__13609 = cljs.core.next.call(null,seq__13596__$1);
var G__13610 = null;
var G__13611 = (0);
var G__13612 = (0);
seq__13596 = G__13609;
chunk__13597 = G__13610;
count__13598 = G__13611;
i__13599 = G__13612;
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
});})(map__13587,map__13587__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13588.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t13588.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13587,map__13587__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs13600 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13600))?sablono.interpreter.attributes.call(null,attrs13600):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13600))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13600)], null))));
});})(map__13587,map__13587__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13588.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13587,map__13587__$1,cursor,filter_spec){
return (function (_13590){var self__ = this;
var _13590__$1 = this;return self__.meta13589;
});})(map__13587,map__13587__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13587,map__13587__$1,cursor,filter_spec){
return (function (_13590,meta13589__$1){var self__ = this;
var _13590__$1 = this;return (new clustermap.components.multiview.t13588(self__.filter_spec,self__.cursor,self__.map__13587,self__.owner,self__.p__13572,self__.multiview_component,meta13589__$1));
});})(map__13587,map__13587__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t13588 = ((function (map__13587,map__13587__$1,cursor,filter_spec){
return (function __GT_t13588(filter_spec__$1,cursor__$1,map__13587__$2,owner__$1,p__13572__$1,multiview_component__$1,meta13589){return (new clustermap.components.multiview.t13588(filter_spec__$1,cursor__$1,map__13587__$2,owner__$1,p__13572__$1,multiview_component__$1,meta13589));
});})(map__13587,map__13587__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t13588(filter_spec,cursor,map__13587__$1,owner,p__13572,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
