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
clustermap.components.multiview.multiview_component = (function multiview_component(p__13911,owner){var map__13926 = p__13911;var map__13926__$1 = ((cljs.core.seq_QMARK_.call(null,map__13926))?cljs.core.apply.call(null,cljs.core.hash_map,map__13926):map__13926);var cursor = map__13926__$1;var filter_spec = cljs.core.get.call(null,map__13926__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t13927 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t13927 = (function (filter_spec,cursor,map__13926,owner,p__13911,multiview_component,meta13928){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__13926 = map__13926;
this.owner = owner;
this.p__13911 = p__13911;
this.multiview_component = multiview_component;
this.meta13928 = meta13928;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t13927.cljs$lang$type = true;
clustermap.components.multiview.t13927.cljs$lang$ctorStr = "clustermap.components.multiview/t13927";
clustermap.components.multiview.t13927.cljs$lang$ctorPrWriter = ((function (map__13926,map__13926__$1,cursor,filter_spec){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.multiview/t13927");
});})(map__13926,map__13926__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13927.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t13927.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13926,map__13926__$1,cursor,filter_spec){
return (function (this$,p__13930,next_state){var self__ = this;
var map__13931 = p__13930;var map__13931__$1 = ((cljs.core.seq_QMARK_.call(null,map__13931))?cljs.core.apply.call(null,cljs.core.hash_map,map__13931):map__13931);var map__13932 = cljs.core.get.call(null,map__13931__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13932__$1 = ((cljs.core.seq_QMARK_.call(null,map__13932))?cljs.core.apply.call(null,cljs.core.hash_map,map__13932):map__13932);var next_compiled_filter = cljs.core.get.call(null,map__13932__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__13931__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__13933 = om.core.get_props.call(null,self__.owner);var map__13933__$1 = ((cljs.core.seq_QMARK_.call(null,map__13933))?cljs.core.apply.call(null,cljs.core.hash_map,map__13933):map__13933);var map__13934 = cljs.core.get.call(null,map__13933__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13934__$1 = ((cljs.core.seq_QMARK_.call(null,map__13934))?cljs.core.apply.call(null,cljs.core.hash_map,map__13934):map__13934);var compiled_filter = cljs.core.get.call(null,map__13934__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__13933__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__13935 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__13936 = null;var count__13937 = (0);var i__13938 = (0);while(true){
if((i__13938 < count__13937))
{var view_key = cljs.core._nth.call(null,chunk__13936,i__13938);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__13940 = seq__13935;
var G__13941 = chunk__13936;
var G__13942 = count__13937;
var G__13943 = (i__13938 + (1));
seq__13935 = G__13940;
chunk__13936 = G__13941;
count__13937 = G__13942;
i__13938 = G__13943;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13935);if(temp__4126__auto__)
{var seq__13935__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13935__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__13935__$1);{
var G__13944 = cljs.core.chunk_rest.call(null,seq__13935__$1);
var G__13945 = c__4297__auto__;
var G__13946 = cljs.core.count.call(null,c__4297__auto__);
var G__13947 = (0);
seq__13935 = G__13944;
chunk__13936 = G__13945;
count__13937 = G__13946;
i__13938 = G__13947;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__13935__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__13948 = cljs.core.next.call(null,seq__13935__$1);
var G__13949 = null;
var G__13950 = (0);
var G__13951 = (0);
seq__13935 = G__13948;
chunk__13936 = G__13949;
count__13937 = G__13950;
i__13938 = G__13951;
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
});})(map__13926,map__13926__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13927.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t13927.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13926,map__13926__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs13939 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13939))?sablono.interpreter.attributes.call(null,attrs13939):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13939))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13939)], null))));
});})(map__13926,map__13926__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13927.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13926,map__13926__$1,cursor,filter_spec){
return (function (_13929){var self__ = this;
var _13929__$1 = this;return self__.meta13928;
});})(map__13926,map__13926__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13926,map__13926__$1,cursor,filter_spec){
return (function (_13929,meta13928__$1){var self__ = this;
var _13929__$1 = this;return (new clustermap.components.multiview.t13927(self__.filter_spec,self__.cursor,self__.map__13926,self__.owner,self__.p__13911,self__.multiview_component,meta13928__$1));
});})(map__13926,map__13926__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t13927 = ((function (map__13926,map__13926__$1,cursor,filter_spec){
return (function __GT_t13927(filter_spec__$1,cursor__$1,map__13926__$2,owner__$1,p__13911__$1,multiview_component__$1,meta13928){return (new clustermap.components.multiview.t13927(filter_spec__$1,cursor__$1,map__13926__$2,owner__$1,p__13911__$1,multiview_component__$1,meta13928));
});})(map__13926,map__13926__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t13927(filter_spec,cursor,map__13926__$1,owner,p__13911,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
