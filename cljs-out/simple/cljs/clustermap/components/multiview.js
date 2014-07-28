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
clustermap.components.multiview.multiview_component = (function multiview_component(p__26823,owner){var map__26838 = p__26823;var map__26838__$1 = ((cljs.core.seq_QMARK_.call(null,map__26838))?cljs.core.apply.call(null,cljs.core.hash_map,map__26838):map__26838);var cursor = map__26838__$1;var filter_spec = cljs.core.get.call(null,map__26838__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t26839 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t26839 = (function (filter_spec,cursor,map__26838,owner,p__26823,multiview_component,meta26840){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__26838 = map__26838;
this.owner = owner;
this.p__26823 = p__26823;
this.multiview_component = multiview_component;
this.meta26840 = meta26840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t26839.cljs$lang$type = true;
clustermap.components.multiview.t26839.cljs$lang$ctorStr = "clustermap.components.multiview/t26839";
clustermap.components.multiview.t26839.cljs$lang$ctorPrWriter = ((function (map__26838,map__26838__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t26839");
});})(map__26838,map__26838__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26839.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t26839.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__26838,map__26838__$1,cursor,filter_spec){
return (function (this$,p__26842,next_state){var self__ = this;
var map__26843 = p__26842;var map__26843__$1 = ((cljs.core.seq_QMARK_.call(null,map__26843))?cljs.core.apply.call(null,cljs.core.hash_map,map__26843):map__26843);var map__26844 = cljs.core.get.call(null,map__26843__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__26844__$1 = ((cljs.core.seq_QMARK_.call(null,map__26844))?cljs.core.apply.call(null,cljs.core.hash_map,map__26844):map__26844);var next_compiled_filter = cljs.core.get.call(null,map__26844__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__26843__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__26845 = om.core.get_props.call(null,self__.owner);var map__26845__$1 = ((cljs.core.seq_QMARK_.call(null,map__26845))?cljs.core.apply.call(null,cljs.core.hash_map,map__26845):map__26845);var map__26846 = cljs.core.get.call(null,map__26845__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__26846__$1 = ((cljs.core.seq_QMARK_.call(null,map__26846))?cljs.core.apply.call(null,cljs.core.hash_map,map__26846):map__26846);var compiled_filter = cljs.core.get.call(null,map__26846__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__26845__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__26847 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__26848 = null;var count__26849 = (0);var i__26850 = (0);while(true){
if((i__26850 < count__26849))
{var view_key = cljs.core._nth.call(null,chunk__26848,i__26850);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__26852 = seq__26847;
var G__26853 = chunk__26848;
var G__26854 = count__26849;
var G__26855 = (i__26850 + (1));
seq__26847 = G__26852;
chunk__26848 = G__26853;
count__26849 = G__26854;
i__26850 = G__26855;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26847);if(temp__4126__auto__)
{var seq__26847__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26847__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__26847__$1);{
var G__26856 = cljs.core.chunk_rest.call(null,seq__26847__$1);
var G__26857 = c__4299__auto__;
var G__26858 = cljs.core.count.call(null,c__4299__auto__);
var G__26859 = (0);
seq__26847 = G__26856;
chunk__26848 = G__26857;
count__26849 = G__26858;
i__26850 = G__26859;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__26847__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__26860 = cljs.core.next.call(null,seq__26847__$1);
var G__26861 = null;
var G__26862 = (0);
var G__26863 = (0);
seq__26847 = G__26860;
chunk__26848 = G__26861;
count__26849 = G__26862;
i__26850 = G__26863;
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
});})(map__26838,map__26838__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26839.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t26839.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__26838,map__26838__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs26851 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26851))?sablono.interpreter.attributes.call(null,attrs26851):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26851))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26851)], null))));
});})(map__26838,map__26838__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26838,map__26838__$1,cursor,filter_spec){
return (function (_26841){var self__ = this;
var _26841__$1 = this;return self__.meta26840;
});})(map__26838,map__26838__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26838,map__26838__$1,cursor,filter_spec){
return (function (_26841,meta26840__$1){var self__ = this;
var _26841__$1 = this;return (new clustermap.components.multiview.t26839(self__.filter_spec,self__.cursor,self__.map__26838,self__.owner,self__.p__26823,self__.multiview_component,meta26840__$1));
});})(map__26838,map__26838__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t26839 = ((function (map__26838,map__26838__$1,cursor,filter_spec){
return (function __GT_t26839(filter_spec__$1,cursor__$1,map__26838__$2,owner__$1,p__26823__$1,multiview_component__$1,meta26840){return (new clustermap.components.multiview.t26839(filter_spec__$1,cursor__$1,map__26838__$2,owner__$1,p__26823__$1,multiview_component__$1,meta26840));
});})(map__26838,map__26838__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t26839(filter_spec,cursor,map__26838__$1,owner,p__26823,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
