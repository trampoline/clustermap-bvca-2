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
clustermap.components.multiview.multiview_component = (function multiview_component(p__25462,owner){var map__25477 = p__25462;var map__25477__$1 = ((cljs.core.seq_QMARK_.call(null,map__25477))?cljs.core.apply.call(null,cljs.core.hash_map,map__25477):map__25477);var cursor = map__25477__$1;var filter_spec = cljs.core.get.call(null,map__25477__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t25478 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t25478 = (function (filter_spec,cursor,map__25477,owner,p__25462,multiview_component,meta25479){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__25477 = map__25477;
this.owner = owner;
this.p__25462 = p__25462;
this.multiview_component = multiview_component;
this.meta25479 = meta25479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t25478.cljs$lang$type = true;
clustermap.components.multiview.t25478.cljs$lang$ctorStr = "clustermap.components.multiview/t25478";
clustermap.components.multiview.t25478.cljs$lang$ctorPrWriter = ((function (map__25477,map__25477__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t25478");
});})(map__25477,map__25477__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25478.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t25478.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__25477,map__25477__$1,cursor,filter_spec){
return (function (this$,p__25481,next_state){var self__ = this;
var map__25482 = p__25481;var map__25482__$1 = ((cljs.core.seq_QMARK_.call(null,map__25482))?cljs.core.apply.call(null,cljs.core.hash_map,map__25482):map__25482);var map__25483 = cljs.core.get.call(null,map__25482__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__25483__$1 = ((cljs.core.seq_QMARK_.call(null,map__25483))?cljs.core.apply.call(null,cljs.core.hash_map,map__25483):map__25483);var next_compiled_filter = cljs.core.get.call(null,map__25483__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__25482__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__25484 = om.core.get_props.call(null,self__.owner);var map__25484__$1 = ((cljs.core.seq_QMARK_.call(null,map__25484))?cljs.core.apply.call(null,cljs.core.hash_map,map__25484):map__25484);var map__25485 = cljs.core.get.call(null,map__25484__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__25485__$1 = ((cljs.core.seq_QMARK_.call(null,map__25485))?cljs.core.apply.call(null,cljs.core.hash_map,map__25485):map__25485);var compiled_filter = cljs.core.get.call(null,map__25485__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__25484__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__25486 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__25487 = null;var count__25488 = (0);var i__25489 = (0);while(true){
if((i__25489 < count__25488))
{var view_key = cljs.core._nth.call(null,chunk__25487,i__25489);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__25491 = seq__25486;
var G__25492 = chunk__25487;
var G__25493 = count__25488;
var G__25494 = (i__25489 + (1));
seq__25486 = G__25491;
chunk__25487 = G__25492;
count__25488 = G__25493;
i__25489 = G__25494;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25486);if(temp__4126__auto__)
{var seq__25486__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25486__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__25486__$1);{
var G__25495 = cljs.core.chunk_rest.call(null,seq__25486__$1);
var G__25496 = c__4299__auto__;
var G__25497 = cljs.core.count.call(null,c__4299__auto__);
var G__25498 = (0);
seq__25486 = G__25495;
chunk__25487 = G__25496;
count__25488 = G__25497;
i__25489 = G__25498;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__25486__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__25499 = cljs.core.next.call(null,seq__25486__$1);
var G__25500 = null;
var G__25501 = (0);
var G__25502 = (0);
seq__25486 = G__25499;
chunk__25487 = G__25500;
count__25488 = G__25501;
i__25489 = G__25502;
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
});})(map__25477,map__25477__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25478.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t25478.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25477,map__25477__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs25490 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs25490))?sablono.interpreter.attributes.call(null,attrs25490):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25490))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25490)], null))));
});})(map__25477,map__25477__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25477,map__25477__$1,cursor,filter_spec){
return (function (_25480){var self__ = this;
var _25480__$1 = this;return self__.meta25479;
});})(map__25477,map__25477__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25477,map__25477__$1,cursor,filter_spec){
return (function (_25480,meta25479__$1){var self__ = this;
var _25480__$1 = this;return (new clustermap.components.multiview.t25478(self__.filter_spec,self__.cursor,self__.map__25477,self__.owner,self__.p__25462,self__.multiview_component,meta25479__$1));
});})(map__25477,map__25477__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t25478 = ((function (map__25477,map__25477__$1,cursor,filter_spec){
return (function __GT_t25478(filter_spec__$1,cursor__$1,map__25477__$2,owner__$1,p__25462__$1,multiview_component__$1,meta25479){return (new clustermap.components.multiview.t25478(filter_spec__$1,cursor__$1,map__25477__$2,owner__$1,p__25462__$1,multiview_component__$1,meta25479));
});})(map__25477,map__25477__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t25478(filter_spec,cursor,map__25477__$1,owner,p__25462,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
