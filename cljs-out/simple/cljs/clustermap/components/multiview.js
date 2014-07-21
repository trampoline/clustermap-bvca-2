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
clustermap.components.multiview.multiview_component = (function multiview_component(p__26813,owner){var map__26828 = p__26813;var map__26828__$1 = ((cljs.core.seq_QMARK_.call(null,map__26828))?cljs.core.apply.call(null,cljs.core.hash_map,map__26828):map__26828);var cursor = map__26828__$1;var filter_spec = cljs.core.get.call(null,map__26828__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t26829 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t26829 = (function (filter_spec,cursor,map__26828,owner,p__26813,multiview_component,meta26830){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__26828 = map__26828;
this.owner = owner;
this.p__26813 = p__26813;
this.multiview_component = multiview_component;
this.meta26830 = meta26830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t26829.cljs$lang$type = true;
clustermap.components.multiview.t26829.cljs$lang$ctorStr = "clustermap.components.multiview/t26829";
clustermap.components.multiview.t26829.cljs$lang$ctorPrWriter = ((function (map__26828,map__26828__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t26829");
});})(map__26828,map__26828__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26829.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t26829.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__26828,map__26828__$1,cursor,filter_spec){
return (function (this$,p__26832,next_state){var self__ = this;
var map__26833 = p__26832;var map__26833__$1 = ((cljs.core.seq_QMARK_.call(null,map__26833))?cljs.core.apply.call(null,cljs.core.hash_map,map__26833):map__26833);var map__26834 = cljs.core.get.call(null,map__26833__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__26834__$1 = ((cljs.core.seq_QMARK_.call(null,map__26834))?cljs.core.apply.call(null,cljs.core.hash_map,map__26834):map__26834);var next_compiled_filter = cljs.core.get.call(null,map__26834__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__26833__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__26835 = om.core.get_props.call(null,self__.owner);var map__26835__$1 = ((cljs.core.seq_QMARK_.call(null,map__26835))?cljs.core.apply.call(null,cljs.core.hash_map,map__26835):map__26835);var map__26836 = cljs.core.get.call(null,map__26835__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__26836__$1 = ((cljs.core.seq_QMARK_.call(null,map__26836))?cljs.core.apply.call(null,cljs.core.hash_map,map__26836):map__26836);var compiled_filter = cljs.core.get.call(null,map__26836__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__26835__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__26837 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__26838 = null;var count__26839 = (0);var i__26840 = (0);while(true){
if((i__26840 < count__26839))
{var view_key = cljs.core._nth.call(null,chunk__26838,i__26840);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__26842 = seq__26837;
var G__26843 = chunk__26838;
var G__26844 = count__26839;
var G__26845 = (i__26840 + (1));
seq__26837 = G__26842;
chunk__26838 = G__26843;
count__26839 = G__26844;
i__26840 = G__26845;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26837);if(temp__4126__auto__)
{var seq__26837__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26837__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__26837__$1);{
var G__26846 = cljs.core.chunk_rest.call(null,seq__26837__$1);
var G__26847 = c__4299__auto__;
var G__26848 = cljs.core.count.call(null,c__4299__auto__);
var G__26849 = (0);
seq__26837 = G__26846;
chunk__26838 = G__26847;
count__26839 = G__26848;
i__26840 = G__26849;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__26837__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__26850 = cljs.core.next.call(null,seq__26837__$1);
var G__26851 = null;
var G__26852 = (0);
var G__26853 = (0);
seq__26837 = G__26850;
chunk__26838 = G__26851;
count__26839 = G__26852;
i__26840 = G__26853;
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
});})(map__26828,map__26828__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26829.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t26829.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__26828,map__26828__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs26841 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26841))?sablono.interpreter.attributes.call(null,attrs26841):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26841))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26841)], null))));
});})(map__26828,map__26828__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26828,map__26828__$1,cursor,filter_spec){
return (function (_26831){var self__ = this;
var _26831__$1 = this;return self__.meta26830;
});})(map__26828,map__26828__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26828,map__26828__$1,cursor,filter_spec){
return (function (_26831,meta26830__$1){var self__ = this;
var _26831__$1 = this;return (new clustermap.components.multiview.t26829(self__.filter_spec,self__.cursor,self__.map__26828,self__.owner,self__.p__26813,self__.multiview_component,meta26830__$1));
});})(map__26828,map__26828__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t26829 = ((function (map__26828,map__26828__$1,cursor,filter_spec){
return (function __GT_t26829(filter_spec__$1,cursor__$1,map__26828__$2,owner__$1,p__26813__$1,multiview_component__$1,meta26830){return (new clustermap.components.multiview.t26829(filter_spec__$1,cursor__$1,map__26828__$2,owner__$1,p__26813__$1,multiview_component__$1,meta26830));
});})(map__26828,map__26828__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t26829(filter_spec,cursor,map__26828__$1,owner,p__26813,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
