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
clustermap.components.multiview.multiview_component = (function multiview_component(p__26239,owner){var map__26254 = p__26239;var map__26254__$1 = ((cljs.core.seq_QMARK_.call(null,map__26254))?cljs.core.apply.call(null,cljs.core.hash_map,map__26254):map__26254);var cursor = map__26254__$1;var filter_spec = cljs.core.get.call(null,map__26254__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t26255 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t26255 = (function (filter_spec,cursor,map__26254,owner,p__26239,multiview_component,meta26256){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__26254 = map__26254;
this.owner = owner;
this.p__26239 = p__26239;
this.multiview_component = multiview_component;
this.meta26256 = meta26256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t26255.cljs$lang$type = true;
clustermap.components.multiview.t26255.cljs$lang$ctorStr = "clustermap.components.multiview/t26255";
clustermap.components.multiview.t26255.cljs$lang$ctorPrWriter = ((function (map__26254,map__26254__$1,cursor,filter_spec){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.multiview/t26255");
});})(map__26254,map__26254__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26255.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t26255.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__26254,map__26254__$1,cursor,filter_spec){
return (function (this$,p__26258,next_state){var self__ = this;
var map__26259 = p__26258;var map__26259__$1 = ((cljs.core.seq_QMARK_.call(null,map__26259))?cljs.core.apply.call(null,cljs.core.hash_map,map__26259):map__26259);var map__26260 = cljs.core.get.call(null,map__26259__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__26260__$1 = ((cljs.core.seq_QMARK_.call(null,map__26260))?cljs.core.apply.call(null,cljs.core.hash_map,map__26260):map__26260);var next_compiled_filter = cljs.core.get.call(null,map__26260__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__26259__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__26261 = om.core.get_props.call(null,self__.owner);var map__26261__$1 = ((cljs.core.seq_QMARK_.call(null,map__26261))?cljs.core.apply.call(null,cljs.core.hash_map,map__26261):map__26261);var map__26262 = cljs.core.get.call(null,map__26261__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__26262__$1 = ((cljs.core.seq_QMARK_.call(null,map__26262))?cljs.core.apply.call(null,cljs.core.hash_map,map__26262):map__26262);var compiled_filter = cljs.core.get.call(null,map__26262__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__26261__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__26263 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__26264 = null;var count__26265 = (0);var i__26266 = (0);while(true){
if((i__26266 < count__26265))
{var view_key = cljs.core._nth.call(null,chunk__26264,i__26266);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__26268 = seq__26263;
var G__26269 = chunk__26264;
var G__26270 = count__26265;
var G__26271 = (i__26266 + (1));
seq__26263 = G__26268;
chunk__26264 = G__26269;
count__26265 = G__26270;
i__26266 = G__26271;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__26263);if(temp__4126__auto__)
{var seq__26263__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__26263__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__26263__$1);{
var G__26272 = cljs.core.chunk_rest.call(null,seq__26263__$1);
var G__26273 = c__4297__auto__;
var G__26274 = cljs.core.count.call(null,c__4297__auto__);
var G__26275 = (0);
seq__26263 = G__26272;
chunk__26264 = G__26273;
count__26265 = G__26274;
i__26266 = G__26275;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__26263__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__26276 = cljs.core.next.call(null,seq__26263__$1);
var G__26277 = null;
var G__26278 = (0);
var G__26279 = (0);
seq__26263 = G__26276;
chunk__26264 = G__26277;
count__26265 = G__26278;
i__26266 = G__26279;
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
});})(map__26254,map__26254__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26255.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t26255.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__26254,map__26254__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs26267 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs26267))?sablono.interpreter.attributes.call(null,attrs26267):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26267))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26267)], null))));
});})(map__26254,map__26254__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26254,map__26254__$1,cursor,filter_spec){
return (function (_26257){var self__ = this;
var _26257__$1 = this;return self__.meta26256;
});})(map__26254,map__26254__$1,cursor,filter_spec))
;
clustermap.components.multiview.t26255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26254,map__26254__$1,cursor,filter_spec){
return (function (_26257,meta26256__$1){var self__ = this;
var _26257__$1 = this;return (new clustermap.components.multiview.t26255(self__.filter_spec,self__.cursor,self__.map__26254,self__.owner,self__.p__26239,self__.multiview_component,meta26256__$1));
});})(map__26254,map__26254__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t26255 = ((function (map__26254,map__26254__$1,cursor,filter_spec){
return (function __GT_t26255(filter_spec__$1,cursor__$1,map__26254__$2,owner__$1,p__26239__$1,multiview_component__$1,meta26256){return (new clustermap.components.multiview.t26255(filter_spec__$1,cursor__$1,map__26254__$2,owner__$1,p__26239__$1,multiview_component__$1,meta26256));
});})(map__26254,map__26254__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t26255(filter_spec,cursor,map__26254__$1,owner,p__26239,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
