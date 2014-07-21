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
clustermap.components.multiview.multiview_component = (function multiview_component(p__14199,owner){var map__14214 = p__14199;var map__14214__$1 = ((cljs.core.seq_QMARK_.call(null,map__14214))?cljs.core.apply.call(null,cljs.core.hash_map,map__14214):map__14214);var cursor = map__14214__$1;var filter_spec = cljs.core.get.call(null,map__14214__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t14215 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t14215 = (function (filter_spec,cursor,map__14214,owner,p__14199,multiview_component,meta14216){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__14214 = map__14214;
this.owner = owner;
this.p__14199 = p__14199;
this.multiview_component = multiview_component;
this.meta14216 = meta14216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t14215.cljs$lang$type = true;
clustermap.components.multiview.t14215.cljs$lang$ctorStr = "clustermap.components.multiview/t14215";
clustermap.components.multiview.t14215.cljs$lang$ctorPrWriter = ((function (map__14214,map__14214__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t14215");
});})(map__14214,map__14214__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14215.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t14215.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__14214,map__14214__$1,cursor,filter_spec){
return (function (this$,p__14218,next_state){var self__ = this;
var map__14219 = p__14218;var map__14219__$1 = ((cljs.core.seq_QMARK_.call(null,map__14219))?cljs.core.apply.call(null,cljs.core.hash_map,map__14219):map__14219);var map__14220 = cljs.core.get.call(null,map__14219__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__14220__$1 = ((cljs.core.seq_QMARK_.call(null,map__14220))?cljs.core.apply.call(null,cljs.core.hash_map,map__14220):map__14220);var next_compiled_filter = cljs.core.get.call(null,map__14220__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__14219__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__14221 = om.core.get_props.call(null,self__.owner);var map__14221__$1 = ((cljs.core.seq_QMARK_.call(null,map__14221))?cljs.core.apply.call(null,cljs.core.hash_map,map__14221):map__14221);var map__14222 = cljs.core.get.call(null,map__14221__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__14222__$1 = ((cljs.core.seq_QMARK_.call(null,map__14222))?cljs.core.apply.call(null,cljs.core.hash_map,map__14222):map__14222);var compiled_filter = cljs.core.get.call(null,map__14222__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__14221__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__14223 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__14224 = null;var count__14225 = (0);var i__14226 = (0);while(true){
if((i__14226 < count__14225))
{var view_key = cljs.core._nth.call(null,chunk__14224,i__14226);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__14228 = seq__14223;
var G__14229 = chunk__14224;
var G__14230 = count__14225;
var G__14231 = (i__14226 + (1));
seq__14223 = G__14228;
chunk__14224 = G__14229;
count__14225 = G__14230;
i__14226 = G__14231;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14223);if(temp__4126__auto__)
{var seq__14223__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14223__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__14223__$1);{
var G__14232 = cljs.core.chunk_rest.call(null,seq__14223__$1);
var G__14233 = c__4299__auto__;
var G__14234 = cljs.core.count.call(null,c__4299__auto__);
var G__14235 = (0);
seq__14223 = G__14232;
chunk__14224 = G__14233;
count__14225 = G__14234;
i__14226 = G__14235;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__14223__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__14236 = cljs.core.next.call(null,seq__14223__$1);
var G__14237 = null;
var G__14238 = (0);
var G__14239 = (0);
seq__14223 = G__14236;
chunk__14224 = G__14237;
count__14225 = G__14238;
i__14226 = G__14239;
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
});})(map__14214,map__14214__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14215.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t14215.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14214,map__14214__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs14227 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14227))?sablono.interpreter.attributes.call(null,attrs14227):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14227))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14227)], null))));
});})(map__14214,map__14214__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14214,map__14214__$1,cursor,filter_spec){
return (function (_14217){var self__ = this;
var _14217__$1 = this;return self__.meta14216;
});})(map__14214,map__14214__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14214,map__14214__$1,cursor,filter_spec){
return (function (_14217,meta14216__$1){var self__ = this;
var _14217__$1 = this;return (new clustermap.components.multiview.t14215(self__.filter_spec,self__.cursor,self__.map__14214,self__.owner,self__.p__14199,self__.multiview_component,meta14216__$1));
});})(map__14214,map__14214__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t14215 = ((function (map__14214,map__14214__$1,cursor,filter_spec){
return (function __GT_t14215(filter_spec__$1,cursor__$1,map__14214__$2,owner__$1,p__14199__$1,multiview_component__$1,meta14216){return (new clustermap.components.multiview.t14215(filter_spec__$1,cursor__$1,map__14214__$2,owner__$1,p__14199__$1,multiview_component__$1,meta14216));
});})(map__14214,map__14214__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t14215(filter_spec,cursor,map__14214__$1,owner,p__14199,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
