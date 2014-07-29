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
clustermap.components.multiview.multiview_component = (function multiview_component(p__26027,owner){var map__26042 = p__26027;var map__26042__$1 = ((cljs.core.seq_QMARK_.call(null,map__26042))?cljs.core.apply.call(null,cljs.core.hash_map,map__26042):map__26042);var cursor = map__26042__$1;var filter_spec = cljs.core.get.call(null,map__26042__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t26043 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t26043 = (function (filter_spec,cursor,map__26042,owner,p__26027,multiview_component,meta26044){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__26042 = map__26042;
this.owner = owner;
this.p__26027 = p__26027;
this.multiview_component = multiview_component;
this.meta26044 = meta26044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t26043.cljs$lang$type = true;
clustermap.components.multiview.t26043.cljs$lang$ctorStr = "clustermap.components.multiview/t26043";
clustermap.components.multiview.t26043.cljs$lang$ctorPrWriter = ((function (map__26042,map__26042__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t26043");
});})(map__26042,map__26042__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26043.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t26043.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__26042,map__26042__$1,cursor,filter_spec){
return (function (this$,p__26046,next_state){var self__ = this;
var map__26047 = p__26046;var map__26047__$1 = ((cljs.core.seq_QMARK_.call(null,map__26047))?cljs.core.apply.call(null,cljs.core.hash_map,map__26047):map__26047);var map__26048 = cljs.core.get.call(null,map__26047__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__26048__$1 = ((cljs.core.seq_QMARK_.call(null,map__26048))?cljs.core.apply.call(null,cljs.core.hash_map,map__26048):map__26048);var next_compiled_filter = cljs.core.get.call(null,map__26048__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__26047__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__26049 = om.core.get_props.call(null,self__.owner);var map__26049__$1 = ((cljs.core.seq_QMARK_.call(null,map__26049))?cljs.core.apply.call(null,cljs.core.hash_map,map__26049):map__26049);var map__26050 = cljs.core.get.call(null,map__26049__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__26050__$1 = ((cljs.core.seq_QMARK_.call(null,map__26050))?cljs.core.apply.call(null,cljs.core.hash_map,map__26050):map__26050);var compiled_filter = cljs.core.get.call(null,map__26050__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__26049__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__26051 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__26052 = null;var count__26053 = (0);var i__26054 = (0);while(true){
if((i__26054 < count__26053))
{var view_key = cljs.core._nth.call(null,chunk__26052,i__26054);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__26056 = seq__26051;
var G__26057 = chunk__26052;
var G__26058 = count__26053;
var G__26059 = (i__26054 + (1));
seq__26051 = G__26056;
chunk__26052 = G__26057;
count__26053 = G__26058;
i__26054 = G__26059;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26051);if(temp__4126__auto__)
{var seq__26051__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26051__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__26051__$1);{
var G__26060 = cljs.core.chunk_rest.call(null,seq__26051__$1);
var G__26061 = c__4299__auto__;
var G__26062 = cljs.core.count.call(null,c__4299__auto__);
var G__26063 = (0);
seq__26051 = G__26060;
chunk__26052 = G__26061;
count__26053 = G__26062;
i__26054 = G__26063;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__26051__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__26064 = cljs.core.next.call(null,seq__26051__$1);
var G__26065 = null;
var G__26066 = (0);
var G__26067 = (0);
seq__26051 = G__26064;
chunk__26052 = G__26065;
count__26053 = G__26066;
i__26054 = G__26067;
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
});})(map__26042,map__26042__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26043.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t26043.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__26042,map__26042__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs26055 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26055))?sablono.interpreter.attributes.call(null,attrs26055):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26055))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26055)], null))));
});})(map__26042,map__26042__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26042,map__26042__$1,cursor,filter_spec){
return (function (_26045){var self__ = this;
var _26045__$1 = this;return self__.meta26044;
});})(map__26042,map__26042__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26042,map__26042__$1,cursor,filter_spec){
return (function (_26045,meta26044__$1){var self__ = this;
var _26045__$1 = this;return (new clustermap.components.multiview.t26043(self__.filter_spec,self__.cursor,self__.map__26042,self__.owner,self__.p__26027,self__.multiview_component,meta26044__$1));
});})(map__26042,map__26042__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t26043 = ((function (map__26042,map__26042__$1,cursor,filter_spec){
return (function __GT_t26043(filter_spec__$1,cursor__$1,map__26042__$2,owner__$1,p__26027__$1,multiview_component__$1,meta26044){return (new clustermap.components.multiview.t26043(filter_spec__$1,cursor__$1,map__26042__$2,owner__$1,p__26027__$1,multiview_component__$1,meta26044));
});})(map__26042,map__26042__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t26043(filter_spec,cursor,map__26042__$1,owner,p__26027,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
