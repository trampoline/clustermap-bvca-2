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
clustermap.components.multiview.multiview_component = (function multiview_component(p__14204,owner){var map__14219 = p__14204;var map__14219__$1 = ((cljs.core.seq_QMARK_.call(null,map__14219))?cljs.core.apply.call(null,cljs.core.hash_map,map__14219):map__14219);var cursor = map__14219__$1;var filter_spec = cljs.core.get.call(null,map__14219__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t14220 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t14220 = (function (filter_spec,cursor,map__14219,owner,p__14204,multiview_component,meta14221){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__14219 = map__14219;
this.owner = owner;
this.p__14204 = p__14204;
this.multiview_component = multiview_component;
this.meta14221 = meta14221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t14220.cljs$lang$type = true;
clustermap.components.multiview.t14220.cljs$lang$ctorStr = "clustermap.components.multiview/t14220";
clustermap.components.multiview.t14220.cljs$lang$ctorPrWriter = ((function (map__14219,map__14219__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t14220");
});})(map__14219,map__14219__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14220.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t14220.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__14219,map__14219__$1,cursor,filter_spec){
return (function (this$,p__14223,next_state){var self__ = this;
var map__14224 = p__14223;var map__14224__$1 = ((cljs.core.seq_QMARK_.call(null,map__14224))?cljs.core.apply.call(null,cljs.core.hash_map,map__14224):map__14224);var map__14225 = cljs.core.get.call(null,map__14224__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__14225__$1 = ((cljs.core.seq_QMARK_.call(null,map__14225))?cljs.core.apply.call(null,cljs.core.hash_map,map__14225):map__14225);var next_compiled_filter = cljs.core.get.call(null,map__14225__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__14224__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__14226 = om.core.get_props.call(null,self__.owner);var map__14226__$1 = ((cljs.core.seq_QMARK_.call(null,map__14226))?cljs.core.apply.call(null,cljs.core.hash_map,map__14226):map__14226);var map__14227 = cljs.core.get.call(null,map__14226__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__14227__$1 = ((cljs.core.seq_QMARK_.call(null,map__14227))?cljs.core.apply.call(null,cljs.core.hash_map,map__14227):map__14227);var compiled_filter = cljs.core.get.call(null,map__14227__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__14226__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__14228 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__14229 = null;var count__14230 = (0);var i__14231 = (0);while(true){
if((i__14231 < count__14230))
{var view_key = cljs.core._nth.call(null,chunk__14229,i__14231);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__14233 = seq__14228;
var G__14234 = chunk__14229;
var G__14235 = count__14230;
var G__14236 = (i__14231 + (1));
seq__14228 = G__14233;
chunk__14229 = G__14234;
count__14230 = G__14235;
i__14231 = G__14236;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14228);if(temp__4126__auto__)
{var seq__14228__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14228__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14228__$1);{
var G__14237 = cljs.core.chunk_rest.call(null,seq__14228__$1);
var G__14238 = c__4299__auto__;
var G__14239 = cljs.core.count.call(null,c__4299__auto__);
var G__14240 = (0);
seq__14228 = G__14237;
chunk__14229 = G__14238;
count__14230 = G__14239;
i__14231 = G__14240;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__14228__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__14241 = cljs.core.next.call(null,seq__14228__$1);
var G__14242 = null;
var G__14243 = (0);
var G__14244 = (0);
seq__14228 = G__14241;
chunk__14229 = G__14242;
count__14230 = G__14243;
i__14231 = G__14244;
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
});})(map__14219,map__14219__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14220.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t14220.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14219,map__14219__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs14232 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14232))?sablono.interpreter.attributes.call(null,attrs14232):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14232))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14232)], null))));
});})(map__14219,map__14219__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14219,map__14219__$1,cursor,filter_spec){
return (function (_14222){var self__ = this;
var _14222__$1 = this;return self__.meta14221;
});})(map__14219,map__14219__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14219,map__14219__$1,cursor,filter_spec){
return (function (_14222,meta14221__$1){var self__ = this;
var _14222__$1 = this;return (new clustermap.components.multiview.t14220(self__.filter_spec,self__.cursor,self__.map__14219,self__.owner,self__.p__14204,self__.multiview_component,meta14221__$1));
});})(map__14219,map__14219__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t14220 = ((function (map__14219,map__14219__$1,cursor,filter_spec){
return (function __GT_t14220(filter_spec__$1,cursor__$1,map__14219__$2,owner__$1,p__14204__$1,multiview_component__$1,meta14221){return (new clustermap.components.multiview.t14220(filter_spec__$1,cursor__$1,map__14219__$2,owner__$1,p__14204__$1,multiview_component__$1,meta14221));
});})(map__14219,map__14219__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t14220(filter_spec,cursor,map__14219__$1,owner,p__14204,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
