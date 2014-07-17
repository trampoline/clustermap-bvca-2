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
clustermap.components.multiview.multiview_component = (function multiview_component(p__49422,owner){var map__49437 = p__49422;var map__49437__$1 = ((cljs.core.seq_QMARK_.call(null,map__49437))?cljs.core.apply.call(null,cljs.core.hash_map,map__49437):map__49437);var cursor = map__49437__$1;var filter_spec = cljs.core.get.call(null,map__49437__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t49438 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t49438 = (function (filter_spec,cursor,map__49437,owner,p__49422,multiview_component,meta49439){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__49437 = map__49437;
this.owner = owner;
this.p__49422 = p__49422;
this.multiview_component = multiview_component;
this.meta49439 = meta49439;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t49438.cljs$lang$type = true;
clustermap.components.multiview.t49438.cljs$lang$ctorStr = "clustermap.components.multiview/t49438";
clustermap.components.multiview.t49438.cljs$lang$ctorPrWriter = ((function (map__49437,map__49437__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t49438");
});})(map__49437,map__49437__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49438.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t49438.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__49437,map__49437__$1,cursor,filter_spec){
return (function (this$,p__49441,next_state){var self__ = this;
var map__49442 = p__49441;var map__49442__$1 = ((cljs.core.seq_QMARK_.call(null,map__49442))?cljs.core.apply.call(null,cljs.core.hash_map,map__49442):map__49442);var map__49443 = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__49443__$1 = ((cljs.core.seq_QMARK_.call(null,map__49443))?cljs.core.apply.call(null,cljs.core.hash_map,map__49443):map__49443);var next_compiled_filter = cljs.core.get.call(null,map__49443__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__49442__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__49444 = om.core.get_props.call(null,self__.owner);var map__49444__$1 = ((cljs.core.seq_QMARK_.call(null,map__49444))?cljs.core.apply.call(null,cljs.core.hash_map,map__49444):map__49444);var map__49445 = cljs.core.get.call(null,map__49444__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__49445__$1 = ((cljs.core.seq_QMARK_.call(null,map__49445))?cljs.core.apply.call(null,cljs.core.hash_map,map__49445):map__49445);var compiled_filter = cljs.core.get.call(null,map__49445__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__49444__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__49446 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__49447 = null;var count__49448 = (0);var i__49449 = (0);while(true){
if((i__49449 < count__49448))
{var view_key = cljs.core._nth.call(null,chunk__49447,i__49449);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__49451 = seq__49446;
var G__49452 = chunk__49447;
var G__49453 = count__49448;
var G__49454 = (i__49449 + (1));
seq__49446 = G__49451;
chunk__49447 = G__49452;
count__49448 = G__49453;
i__49449 = G__49454;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__49446);if(temp__4126__auto__)
{var seq__49446__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__49446__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__49446__$1);{
var G__49455 = cljs.core.chunk_rest.call(null,seq__49446__$1);
var G__49456 = c__4299__auto__;
var G__49457 = cljs.core.count.call(null,c__4299__auto__);
var G__49458 = (0);
seq__49446 = G__49455;
chunk__49447 = G__49456;
count__49448 = G__49457;
i__49449 = G__49458;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__49446__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__49459 = cljs.core.next.call(null,seq__49446__$1);
var G__49460 = null;
var G__49461 = (0);
var G__49462 = (0);
seq__49446 = G__49459;
chunk__49447 = G__49460;
count__49448 = G__49461;
i__49449 = G__49462;
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
});})(map__49437,map__49437__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49438.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t49438.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__49437,map__49437__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs49450 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs49450))?sablono.interpreter.attributes.call(null,attrs49450):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs49450))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs49450)], null))));
});})(map__49437,map__49437__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49438.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__49437,map__49437__$1,cursor,filter_spec){
return (function (_49440){var self__ = this;
var _49440__$1 = this;return self__.meta49439;
});})(map__49437,map__49437__$1,cursor,filter_spec))
;
clustermap.components.multiview.t49438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__49437,map__49437__$1,cursor,filter_spec){
return (function (_49440,meta49439__$1){var self__ = this;
var _49440__$1 = this;return (new clustermap.components.multiview.t49438(self__.filter_spec,self__.cursor,self__.map__49437,self__.owner,self__.p__49422,self__.multiview_component,meta49439__$1));
});})(map__49437,map__49437__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t49438 = ((function (map__49437,map__49437__$1,cursor,filter_spec){
return (function __GT_t49438(filter_spec__$1,cursor__$1,map__49437__$2,owner__$1,p__49422__$1,multiview_component__$1,meta49439){return (new clustermap.components.multiview.t49438(filter_spec__$1,cursor__$1,map__49437__$2,owner__$1,p__49422__$1,multiview_component__$1,meta49439));
});})(map__49437,map__49437__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t49438(filter_spec,cursor,map__49437__$1,owner,p__49422,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=multiview.js.map