// Compiled by ClojureScript 0.0-2322
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
clustermap.components.multiview.multiview_component = (function multiview_component(p__13988,owner){var map__14003 = p__13988;var map__14003__$1 = ((cljs.core.seq_QMARK_.call(null,map__14003))?cljs.core.apply.call(null,cljs.core.hash_map,map__14003):map__14003);var cursor = map__14003__$1;var filter_spec = cljs.core.get.call(null,map__14003__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t14004 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t14004 = (function (filter_spec,cursor,map__14003,owner,p__13988,multiview_component,meta14005){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__14003 = map__14003;
this.owner = owner;
this.p__13988 = p__13988;
this.multiview_component = multiview_component;
this.meta14005 = meta14005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t14004.cljs$lang$type = true;
clustermap.components.multiview.t14004.cljs$lang$ctorStr = "clustermap.components.multiview/t14004";
clustermap.components.multiview.t14004.cljs$lang$ctorPrWriter = ((function (map__14003,map__14003__$1,cursor,filter_spec){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.multiview/t14004");
});})(map__14003,map__14003__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14004.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t14004.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__14003,map__14003__$1,cursor,filter_spec){
return (function (this$,p__14007,next_state){var self__ = this;
var map__14008 = p__14007;var map__14008__$1 = ((cljs.core.seq_QMARK_.call(null,map__14008))?cljs.core.apply.call(null,cljs.core.hash_map,map__14008):map__14008);var map__14009 = cljs.core.get.call(null,map__14008__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__14009__$1 = ((cljs.core.seq_QMARK_.call(null,map__14009))?cljs.core.apply.call(null,cljs.core.hash_map,map__14009):map__14009);var next_compiled_filter = cljs.core.get.call(null,map__14009__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__14008__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__14010 = om.core.get_props.call(null,self__.owner);var map__14010__$1 = ((cljs.core.seq_QMARK_.call(null,map__14010))?cljs.core.apply.call(null,cljs.core.hash_map,map__14010):map__14010);var map__14011 = cljs.core.get.call(null,map__14010__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__14011__$1 = ((cljs.core.seq_QMARK_.call(null,map__14011))?cljs.core.apply.call(null,cljs.core.hash_map,map__14011):map__14011);var compiled_filter = cljs.core.get.call(null,map__14011__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__14010__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__14012 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__14013 = null;var count__14014 = (0);var i__14015 = (0);while(true){
if((i__14015 < count__14014))
{var view_key = cljs.core._nth.call(null,chunk__14013,i__14015);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__14017 = seq__14012;
var G__14018 = chunk__14013;
var G__14019 = count__14014;
var G__14020 = (i__14015 + (1));
seq__14012 = G__14017;
chunk__14013 = G__14018;
count__14014 = G__14019;
i__14015 = G__14020;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__14012);if(temp__4126__auto__)
{var seq__14012__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14012__$1))
{var c__4314__auto__ = cljs.core.chunk_first.call(null,seq__14012__$1);{
var G__14021 = cljs.core.chunk_rest.call(null,seq__14012__$1);
var G__14022 = c__4314__auto__;
var G__14023 = cljs.core.count.call(null,c__4314__auto__);
var G__14024 = (0);
seq__14012 = G__14021;
chunk__14013 = G__14022;
count__14014 = G__14023;
i__14015 = G__14024;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__14012__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__14025 = cljs.core.next.call(null,seq__14012__$1);
var G__14026 = null;
var G__14027 = (0);
var G__14028 = (0);
seq__14012 = G__14025;
chunk__14013 = G__14026;
count__14014 = G__14027;
i__14015 = G__14028;
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
});})(map__14003,map__14003__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14004.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t14004.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14003,map__14003__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs14016 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs14016))?sablono.interpreter.attributes.call(null,attrs14016):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs14016))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14016)], null))));
});})(map__14003,map__14003__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14003,map__14003__$1,cursor,filter_spec){
return (function (_14006){var self__ = this;
var _14006__$1 = this;return self__.meta14005;
});})(map__14003,map__14003__$1,cursor,filter_spec))
;
clustermap.components.multiview.t14004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14003,map__14003__$1,cursor,filter_spec){
return (function (_14006,meta14005__$1){var self__ = this;
var _14006__$1 = this;return (new clustermap.components.multiview.t14004(self__.filter_spec,self__.cursor,self__.map__14003,self__.owner,self__.p__13988,self__.multiview_component,meta14005__$1));
});})(map__14003,map__14003__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t14004 = ((function (map__14003,map__14003__$1,cursor,filter_spec){
return (function __GT_t14004(filter_spec__$1,cursor__$1,map__14003__$2,owner__$1,p__13988__$1,multiview_component__$1,meta14005){return (new clustermap.components.multiview.t14004(filter_spec__$1,cursor__$1,map__14003__$2,owner__$1,p__13988__$1,multiview_component__$1,meta14005));
});})(map__14003,map__14003__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t14004(filter_spec,cursor,map__14003__$1,owner,p__13988,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=multiview.js.map