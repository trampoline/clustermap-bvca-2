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
clustermap.components.multiview.multiview_component = (function multiview_component(p__49034,owner){var map__49049 = p__49034;var map__49049__$1 = ((cljs.core.seq_QMARK_.call(null,map__49049))?cljs.core.apply.call(null,cljs.core.hash_map,map__49049):map__49049);var cursor = map__49049__$1;var filter_spec = cljs.core.get.call(null,map__49049__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t49050 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t49050 = (function (filter_spec,cursor,map__49049,owner,p__49034,multiview_component,meta49051){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__49049 = map__49049;
this.owner = owner;
this.p__49034 = p__49034;
this.multiview_component = multiview_component;
this.meta49051 = meta49051;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t49050.cljs$lang$type = true;
clustermap.components.multiview.t49050.cljs$lang$ctorStr = "clustermap.components.multiview/t49050";
clustermap.components.multiview.t49050.cljs$lang$ctorPrWriter = ((function (map__49049,map__49049__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t49050");
});})(map__49049,map__49049__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49050.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t49050.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__49049,map__49049__$1,cursor,filter_spec){
return (function (this$,p__49053,next_state){var self__ = this;
var map__49054 = p__49053;var map__49054__$1 = ((cljs.core.seq_QMARK_.call(null,map__49054))?cljs.core.apply.call(null,cljs.core.hash_map,map__49054):map__49054);var map__49055 = cljs.core.get.call(null,map__49054__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__49055__$1 = ((cljs.core.seq_QMARK_.call(null,map__49055))?cljs.core.apply.call(null,cljs.core.hash_map,map__49055):map__49055);var next_compiled_filter = cljs.core.get.call(null,map__49055__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__49054__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__49056 = om.core.get_props.call(null,self__.owner);var map__49056__$1 = ((cljs.core.seq_QMARK_.call(null,map__49056))?cljs.core.apply.call(null,cljs.core.hash_map,map__49056):map__49056);var map__49057 = cljs.core.get.call(null,map__49056__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__49057__$1 = ((cljs.core.seq_QMARK_.call(null,map__49057))?cljs.core.apply.call(null,cljs.core.hash_map,map__49057):map__49057);var compiled_filter = cljs.core.get.call(null,map__49057__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__49056__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__49058 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__49059 = null;var count__49060 = (0);var i__49061 = (0);while(true){
if((i__49061 < count__49060))
{var view_key = cljs.core._nth.call(null,chunk__49059,i__49061);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__49063 = seq__49058;
var G__49064 = chunk__49059;
var G__49065 = count__49060;
var G__49066 = (i__49061 + (1));
seq__49058 = G__49063;
chunk__49059 = G__49064;
count__49060 = G__49065;
i__49061 = G__49066;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49058);if(temp__4126__auto__)
{var seq__49058__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49058__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__49058__$1);{
var G__49067 = cljs.core.chunk_rest.call(null,seq__49058__$1);
var G__49068 = c__4299__auto__;
var G__49069 = cljs.core.count.call(null,c__4299__auto__);
var G__49070 = (0);
seq__49058 = G__49067;
chunk__49059 = G__49068;
count__49060 = G__49069;
i__49061 = G__49070;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__49058__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__49071 = cljs.core.next.call(null,seq__49058__$1);
var G__49072 = null;
var G__49073 = (0);
var G__49074 = (0);
seq__49058 = G__49071;
chunk__49059 = G__49072;
count__49060 = G__49073;
i__49061 = G__49074;
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
});})(map__49049,map__49049__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49050.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t49050.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__49049,map__49049__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs49062 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs49062))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"search",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-component"], null)], null),attrs49062)):{"className": "search-component", "id": "search"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49062))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49062)], null))));
});})(map__49049,map__49049__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49050.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49049,map__49049__$1,cursor,filter_spec){
return (function (_49052){var self__ = this;
var _49052__$1 = this;return self__.meta49051;
});})(map__49049,map__49049__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49049,map__49049__$1,cursor,filter_spec){
return (function (_49052,meta49051__$1){var self__ = this;
var _49052__$1 = this;return (new clustermap.components.multiview.t49050(self__.filter_spec,self__.cursor,self__.map__49049,self__.owner,self__.p__49034,self__.multiview_component,meta49051__$1));
});})(map__49049,map__49049__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t49050 = ((function (map__49049,map__49049__$1,cursor,filter_spec){
return (function __GT_t49050(filter_spec__$1,cursor__$1,map__49049__$2,owner__$1,p__49034__$1,multiview_component__$1,meta49051){return (new clustermap.components.multiview.t49050(filter_spec__$1,cursor__$1,map__49049__$2,owner__$1,p__49034__$1,multiview_component__$1,meta49051));
});})(map__49049,map__49049__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t49050(filter_spec,cursor,map__49049__$1,owner,p__49034,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=multiview.js.map