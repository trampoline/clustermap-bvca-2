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
clustermap.components.multiview.multiview_component = (function multiview_component(p__25552,owner){var map__25567 = p__25552;var map__25567__$1 = ((cljs.core.seq_QMARK_.call(null,map__25567))?cljs.core.apply.call(null,cljs.core.hash_map,map__25567):map__25567);var cursor = map__25567__$1;var filter_spec = cljs.core.get.call(null,map__25567__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t25568 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t25568 = (function (filter_spec,cursor,map__25567,owner,p__25552,multiview_component,meta25569){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__25567 = map__25567;
this.owner = owner;
this.p__25552 = p__25552;
this.multiview_component = multiview_component;
this.meta25569 = meta25569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t25568.cljs$lang$type = true;
clustermap.components.multiview.t25568.cljs$lang$ctorStr = "clustermap.components.multiview/t25568";
clustermap.components.multiview.t25568.cljs$lang$ctorPrWriter = ((function (map__25567,map__25567__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t25568");
});})(map__25567,map__25567__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25568.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t25568.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__25567,map__25567__$1,cursor,filter_spec){
return (function (this$,p__25571,next_state){var self__ = this;
var map__25572 = p__25571;var map__25572__$1 = ((cljs.core.seq_QMARK_.call(null,map__25572))?cljs.core.apply.call(null,cljs.core.hash_map,map__25572):map__25572);var map__25573 = cljs.core.get.call(null,map__25572__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__25573__$1 = ((cljs.core.seq_QMARK_.call(null,map__25573))?cljs.core.apply.call(null,cljs.core.hash_map,map__25573):map__25573);var next_compiled_filter = cljs.core.get.call(null,map__25573__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__25572__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__25574 = om.core.get_props.call(null,self__.owner);var map__25574__$1 = ((cljs.core.seq_QMARK_.call(null,map__25574))?cljs.core.apply.call(null,cljs.core.hash_map,map__25574):map__25574);var map__25575 = cljs.core.get.call(null,map__25574__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__25575__$1 = ((cljs.core.seq_QMARK_.call(null,map__25575))?cljs.core.apply.call(null,cljs.core.hash_map,map__25575):map__25575);var compiled_filter = cljs.core.get.call(null,map__25575__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__25574__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__25576 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__25577 = null;var count__25578 = (0);var i__25579 = (0);while(true){
if((i__25579 < count__25578))
{var view_key = cljs.core._nth.call(null,chunk__25577,i__25579);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__25581 = seq__25576;
var G__25582 = chunk__25577;
var G__25583 = count__25578;
var G__25584 = (i__25579 + (1));
seq__25576 = G__25581;
chunk__25577 = G__25582;
count__25578 = G__25583;
i__25579 = G__25584;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25576);if(temp__4126__auto__)
{var seq__25576__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25576__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__25576__$1);{
var G__25585 = cljs.core.chunk_rest.call(null,seq__25576__$1);
var G__25586 = c__4299__auto__;
var G__25587 = cljs.core.count.call(null,c__4299__auto__);
var G__25588 = (0);
seq__25576 = G__25585;
chunk__25577 = G__25586;
count__25578 = G__25587;
i__25579 = G__25588;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__25576__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__25589 = cljs.core.next.call(null,seq__25576__$1);
var G__25590 = null;
var G__25591 = (0);
var G__25592 = (0);
seq__25576 = G__25589;
chunk__25577 = G__25590;
count__25578 = G__25591;
i__25579 = G__25592;
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
});})(map__25567,map__25567__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25568.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t25568.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__25567,map__25567__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs25580 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs25580))?sablono.interpreter.attributes.call(null,attrs25580):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs25580))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs25580)], null))));
});})(map__25567,map__25567__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25568.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__25567,map__25567__$1,cursor,filter_spec){
return (function (_25570){var self__ = this;
var _25570__$1 = this;return self__.meta25569;
});})(map__25567,map__25567__$1,cursor,filter_spec))
;
clustermap.components.multiview.t25568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__25567,map__25567__$1,cursor,filter_spec){
return (function (_25570,meta25569__$1){var self__ = this;
var _25570__$1 = this;return (new clustermap.components.multiview.t25568(self__.filter_spec,self__.cursor,self__.map__25567,self__.owner,self__.p__25552,self__.multiview_component,meta25569__$1));
});})(map__25567,map__25567__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t25568 = ((function (map__25567,map__25567__$1,cursor,filter_spec){
return (function __GT_t25568(filter_spec__$1,cursor__$1,map__25567__$2,owner__$1,p__25552__$1,multiview_component__$1,meta25569){return (new clustermap.components.multiview.t25568(filter_spec__$1,cursor__$1,map__25567__$2,owner__$1,p__25552__$1,multiview_component__$1,meta25569));
});})(map__25567,map__25567__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t25568(filter_spec,cursor,map__25567__$1,owner,p__25552,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
