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
clustermap.components.multiview.multiview_component = (function multiview_component(p__49242,owner){var map__49257 = p__49242;var map__49257__$1 = ((cljs.core.seq_QMARK_.call(null,map__49257))?cljs.core.apply.call(null,cljs.core.hash_map,map__49257):map__49257);var cursor = map__49257__$1;var filter_spec = cljs.core.get.call(null,map__49257__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t49258 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t49258 = (function (filter_spec,cursor,map__49257,owner,p__49242,multiview_component,meta49259){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__49257 = map__49257;
this.owner = owner;
this.p__49242 = p__49242;
this.multiview_component = multiview_component;
this.meta49259 = meta49259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t49258.cljs$lang$type = true;
clustermap.components.multiview.t49258.cljs$lang$ctorStr = "clustermap.components.multiview/t49258";
clustermap.components.multiview.t49258.cljs$lang$ctorPrWriter = ((function (map__49257,map__49257__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t49258");
});})(map__49257,map__49257__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49258.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t49258.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__49257,map__49257__$1,cursor,filter_spec){
return (function (this$,p__49261,next_state){var self__ = this;
var map__49262 = p__49261;var map__49262__$1 = ((cljs.core.seq_QMARK_.call(null,map__49262))?cljs.core.apply.call(null,cljs.core.hash_map,map__49262):map__49262);var map__49263 = cljs.core.get.call(null,map__49262__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__49263__$1 = ((cljs.core.seq_QMARK_.call(null,map__49263))?cljs.core.apply.call(null,cljs.core.hash_map,map__49263):map__49263);var next_compiled_filter = cljs.core.get.call(null,map__49263__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__49262__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__49264 = om.core.get_props.call(null,self__.owner);var map__49264__$1 = ((cljs.core.seq_QMARK_.call(null,map__49264))?cljs.core.apply.call(null,cljs.core.hash_map,map__49264):map__49264);var map__49265 = cljs.core.get.call(null,map__49264__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__49265__$1 = ((cljs.core.seq_QMARK_.call(null,map__49265))?cljs.core.apply.call(null,cljs.core.hash_map,map__49265):map__49265);var compiled_filter = cljs.core.get.call(null,map__49265__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__49264__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__49266 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__49267 = null;var count__49268 = (0);var i__49269 = (0);while(true){
if((i__49269 < count__49268))
{var view_key = cljs.core._nth.call(null,chunk__49267,i__49269);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__49271 = seq__49266;
var G__49272 = chunk__49267;
var G__49273 = count__49268;
var G__49274 = (i__49269 + (1));
seq__49266 = G__49271;
chunk__49267 = G__49272;
count__49268 = G__49273;
i__49269 = G__49274;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49266);if(temp__4126__auto__)
{var seq__49266__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49266__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__49266__$1);{
var G__49275 = cljs.core.chunk_rest.call(null,seq__49266__$1);
var G__49276 = c__4299__auto__;
var G__49277 = cljs.core.count.call(null,c__4299__auto__);
var G__49278 = (0);
seq__49266 = G__49275;
chunk__49267 = G__49276;
count__49268 = G__49277;
i__49269 = G__49278;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__49266__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__49279 = cljs.core.next.call(null,seq__49266__$1);
var G__49280 = null;
var G__49281 = (0);
var G__49282 = (0);
seq__49266 = G__49279;
chunk__49267 = G__49280;
count__49268 = G__49281;
i__49269 = G__49282;
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
});})(map__49257,map__49257__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49258.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t49258.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__49257,map__49257__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs49270 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs49270))?sablono.interpreter.attributes.call(null,attrs49270):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49270))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49270)], null))));
});})(map__49257,map__49257__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49257,map__49257__$1,cursor,filter_spec){
return (function (_49260){var self__ = this;
var _49260__$1 = this;return self__.meta49259;
});})(map__49257,map__49257__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49257,map__49257__$1,cursor,filter_spec){
return (function (_49260,meta49259__$1){var self__ = this;
var _49260__$1 = this;return (new clustermap.components.multiview.t49258(self__.filter_spec,self__.cursor,self__.map__49257,self__.owner,self__.p__49242,self__.multiview_component,meta49259__$1));
});})(map__49257,map__49257__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t49258 = ((function (map__49257,map__49257__$1,cursor,filter_spec){
return (function __GT_t49258(filter_spec__$1,cursor__$1,map__49257__$2,owner__$1,p__49242__$1,multiview_component__$1,meta49259){return (new clustermap.components.multiview.t49258(filter_spec__$1,cursor__$1,map__49257__$2,owner__$1,p__49242__$1,multiview_component__$1,meta49259));
});})(map__49257,map__49257__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t49258(filter_spec,cursor,map__49257__$1,owner,p__49242,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=multiview.js.map