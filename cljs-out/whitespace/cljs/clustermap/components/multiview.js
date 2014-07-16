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
clustermap.components.multiview.multiview_component = (function multiview_component(p__13541,owner){var map__13556 = p__13541;var map__13556__$1 = ((cljs.core.seq_QMARK_.call(null,map__13556))?cljs.core.apply.call(null,cljs.core.hash_map,map__13556):map__13556);var cursor = map__13556__$1;var filter_spec = cljs.core.get.call(null,map__13556__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t13557 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t13557 = (function (filter_spec,cursor,map__13556,owner,p__13541,multiview_component,meta13558){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__13556 = map__13556;
this.owner = owner;
this.p__13541 = p__13541;
this.multiview_component = multiview_component;
this.meta13558 = meta13558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t13557.cljs$lang$type = true;
clustermap.components.multiview.t13557.cljs$lang$ctorStr = "clustermap.components.multiview/t13557";
clustermap.components.multiview.t13557.cljs$lang$ctorPrWriter = ((function (map__13556,map__13556__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t13557");
});})(map__13556,map__13556__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13557.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t13557.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13556,map__13556__$1,cursor,filter_spec){
return (function (this$,p__13560,next_state){var self__ = this;
var map__13561 = p__13560;var map__13561__$1 = ((cljs.core.seq_QMARK_.call(null,map__13561))?cljs.core.apply.call(null,cljs.core.hash_map,map__13561):map__13561);var map__13562 = cljs.core.get.call(null,map__13561__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13562__$1 = ((cljs.core.seq_QMARK_.call(null,map__13562))?cljs.core.apply.call(null,cljs.core.hash_map,map__13562):map__13562);var next_compiled_filter = cljs.core.get.call(null,map__13562__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__13561__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__13563 = om.core.get_props.call(null,self__.owner);var map__13563__$1 = ((cljs.core.seq_QMARK_.call(null,map__13563))?cljs.core.apply.call(null,cljs.core.hash_map,map__13563):map__13563);var map__13564 = cljs.core.get.call(null,map__13563__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13564__$1 = ((cljs.core.seq_QMARK_.call(null,map__13564))?cljs.core.apply.call(null,cljs.core.hash_map,map__13564):map__13564);var compiled_filter = cljs.core.get.call(null,map__13564__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__13563__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__13565 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__13566 = null;var count__13567 = (0);var i__13568 = (0);while(true){
if((i__13568 < count__13567))
{var view_key = cljs.core._nth.call(null,chunk__13566,i__13568);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__13570 = seq__13565;
var G__13571 = chunk__13566;
var G__13572 = count__13567;
var G__13573 = (i__13568 + (1));
seq__13565 = G__13570;
chunk__13566 = G__13571;
count__13567 = G__13572;
i__13568 = G__13573;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13565);if(temp__4126__auto__)
{var seq__13565__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13565__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13565__$1);{
var G__13574 = cljs.core.chunk_rest.call(null,seq__13565__$1);
var G__13575 = c__4299__auto__;
var G__13576 = cljs.core.count.call(null,c__4299__auto__);
var G__13577 = (0);
seq__13565 = G__13574;
chunk__13566 = G__13575;
count__13567 = G__13576;
i__13568 = G__13577;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__13565__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__13578 = cljs.core.next.call(null,seq__13565__$1);
var G__13579 = null;
var G__13580 = (0);
var G__13581 = (0);
seq__13565 = G__13578;
chunk__13566 = G__13579;
count__13567 = G__13580;
i__13568 = G__13581;
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
});})(map__13556,map__13556__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13557.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t13557.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13556,map__13556__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs13569 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13569))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"search",new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["search-component"], null)], null),attrs13569)):{"className": "search-component", "id": "search"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13569))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13569)], null))));
});})(map__13556,map__13556__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13557.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13556,map__13556__$1,cursor,filter_spec){
return (function (_13559){var self__ = this;
var _13559__$1 = this;return self__.meta13558;
});})(map__13556,map__13556__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13556,map__13556__$1,cursor,filter_spec){
return (function (_13559,meta13558__$1){var self__ = this;
var _13559__$1 = this;return (new clustermap.components.multiview.t13557(self__.filter_spec,self__.cursor,self__.map__13556,self__.owner,self__.p__13541,self__.multiview_component,meta13558__$1));
});})(map__13556,map__13556__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t13557 = ((function (map__13556,map__13556__$1,cursor,filter_spec){
return (function __GT_t13557(filter_spec__$1,cursor__$1,map__13556__$2,owner__$1,p__13541__$1,multiview_component__$1,meta13558){return (new clustermap.components.multiview.t13557(filter_spec__$1,cursor__$1,map__13556__$2,owner__$1,p__13541__$1,multiview_component__$1,meta13558));
});})(map__13556,map__13556__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t13557(filter_spec,cursor,map__13556__$1,owner,p__13541,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
