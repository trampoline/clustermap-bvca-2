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
clustermap.components.multiview.multiview_component = (function multiview_component(p__13617,owner){var map__13632 = p__13617;var map__13632__$1 = ((cljs.core.seq_QMARK_.call(null,map__13632))?cljs.core.apply.call(null,cljs.core.hash_map,map__13632):map__13632);var cursor = map__13632__$1;var filter_spec = cljs.core.get.call(null,map__13632__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t13633 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t13633 = (function (filter_spec,cursor,map__13632,owner,p__13617,multiview_component,meta13634){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__13632 = map__13632;
this.owner = owner;
this.p__13617 = p__13617;
this.multiview_component = multiview_component;
this.meta13634 = meta13634;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t13633.cljs$lang$type = true;
clustermap.components.multiview.t13633.cljs$lang$ctorStr = "clustermap.components.multiview/t13633";
clustermap.components.multiview.t13633.cljs$lang$ctorPrWriter = ((function (map__13632,map__13632__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t13633");
});})(map__13632,map__13632__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13633.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t13633.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13632,map__13632__$1,cursor,filter_spec){
return (function (this$,p__13636,next_state){var self__ = this;
var map__13637 = p__13636;var map__13637__$1 = ((cljs.core.seq_QMARK_.call(null,map__13637))?cljs.core.apply.call(null,cljs.core.hash_map,map__13637):map__13637);var map__13638 = cljs.core.get.call(null,map__13637__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13638__$1 = ((cljs.core.seq_QMARK_.call(null,map__13638))?cljs.core.apply.call(null,cljs.core.hash_map,map__13638):map__13638);var next_compiled_filter = cljs.core.get.call(null,map__13638__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__13637__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__13639 = om.core.get_props.call(null,self__.owner);var map__13639__$1 = ((cljs.core.seq_QMARK_.call(null,map__13639))?cljs.core.apply.call(null,cljs.core.hash_map,map__13639):map__13639);var map__13640 = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13640__$1 = ((cljs.core.seq_QMARK_.call(null,map__13640))?cljs.core.apply.call(null,cljs.core.hash_map,map__13640):map__13640);var compiled_filter = cljs.core.get.call(null,map__13640__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__13639__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__13641 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__13642 = null;var count__13643 = (0);var i__13644 = (0);while(true){
if((i__13644 < count__13643))
{var view_key = cljs.core._nth.call(null,chunk__13642,i__13644);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__13646 = seq__13641;
var G__13647 = chunk__13642;
var G__13648 = count__13643;
var G__13649 = (i__13644 + (1));
seq__13641 = G__13646;
chunk__13642 = G__13647;
count__13643 = G__13648;
i__13644 = G__13649;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13641);if(temp__4126__auto__)
{var seq__13641__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13641__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13641__$1);{
var G__13650 = cljs.core.chunk_rest.call(null,seq__13641__$1);
var G__13651 = c__4299__auto__;
var G__13652 = cljs.core.count.call(null,c__4299__auto__);
var G__13653 = (0);
seq__13641 = G__13650;
chunk__13642 = G__13651;
count__13643 = G__13652;
i__13644 = G__13653;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__13641__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__13654 = cljs.core.next.call(null,seq__13641__$1);
var G__13655 = null;
var G__13656 = (0);
var G__13657 = (0);
seq__13641 = G__13654;
chunk__13642 = G__13655;
count__13643 = G__13656;
i__13644 = G__13657;
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
});})(map__13632,map__13632__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13633.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t13633.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13632,map__13632__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs13645 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13645))?sablono.interpreter.attributes.call(null,attrs13645):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13645))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13645)], null))));
});})(map__13632,map__13632__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13632,map__13632__$1,cursor,filter_spec){
return (function (_13635){var self__ = this;
var _13635__$1 = this;return self__.meta13634;
});})(map__13632,map__13632__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13632,map__13632__$1,cursor,filter_spec){
return (function (_13635,meta13634__$1){var self__ = this;
var _13635__$1 = this;return (new clustermap.components.multiview.t13633(self__.filter_spec,self__.cursor,self__.map__13632,self__.owner,self__.p__13617,self__.multiview_component,meta13634__$1));
});})(map__13632,map__13632__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t13633 = ((function (map__13632,map__13632__$1,cursor,filter_spec){
return (function __GT_t13633(filter_spec__$1,cursor__$1,map__13632__$2,owner__$1,p__13617__$1,multiview_component__$1,meta13634){return (new clustermap.components.multiview.t13633(filter_spec__$1,cursor__$1,map__13632__$2,owner__$1,p__13617__$1,multiview_component__$1,meta13634));
});})(map__13632,map__13632__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t13633(filter_spec,cursor,map__13632__$1,owner,p__13617,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
