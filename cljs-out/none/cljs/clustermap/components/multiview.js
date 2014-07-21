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
clustermap.components.multiview.multiview_component = (function multiview_component(p__52041,owner){var map__52056 = p__52041;var map__52056__$1 = ((cljs.core.seq_QMARK_.call(null,map__52056))?cljs.core.apply.call(null,cljs.core.hash_map,map__52056):map__52056);var cursor = map__52056__$1;var filter_spec = cljs.core.get.call(null,map__52056__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t52057 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t52057 = (function (filter_spec,cursor,map__52056,owner,p__52041,multiview_component,meta52058){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__52056 = map__52056;
this.owner = owner;
this.p__52041 = p__52041;
this.multiview_component = multiview_component;
this.meta52058 = meta52058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t52057.cljs$lang$type = true;
clustermap.components.multiview.t52057.cljs$lang$ctorStr = "clustermap.components.multiview/t52057";
clustermap.components.multiview.t52057.cljs$lang$ctorPrWriter = ((function (map__52056,map__52056__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t52057");
});})(map__52056,map__52056__$1,cursor,filter_spec))
;
clustermap.components.multiview.t52057.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t52057.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__52056,map__52056__$1,cursor,filter_spec){
return (function (this$,p__52060,next_state){var self__ = this;
var map__52061 = p__52060;var map__52061__$1 = ((cljs.core.seq_QMARK_.call(null,map__52061))?cljs.core.apply.call(null,cljs.core.hash_map,map__52061):map__52061);var map__52062 = cljs.core.get.call(null,map__52061__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__52062__$1 = ((cljs.core.seq_QMARK_.call(null,map__52062))?cljs.core.apply.call(null,cljs.core.hash_map,map__52062):map__52062);var next_compiled_filter = cljs.core.get.call(null,map__52062__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__52061__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__52063 = om.core.get_props.call(null,self__.owner);var map__52063__$1 = ((cljs.core.seq_QMARK_.call(null,map__52063))?cljs.core.apply.call(null,cljs.core.hash_map,map__52063):map__52063);var map__52064 = cljs.core.get.call(null,map__52063__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__52064__$1 = ((cljs.core.seq_QMARK_.call(null,map__52064))?cljs.core.apply.call(null,cljs.core.hash_map,map__52064):map__52064);var compiled_filter = cljs.core.get.call(null,map__52064__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__52063__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__52065 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__52066 = null;var count__52067 = (0);var i__52068 = (0);while(true){
if((i__52068 < count__52067))
{var view_key = cljs.core._nth.call(null,chunk__52066,i__52068);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__52070 = seq__52065;
var G__52071 = chunk__52066;
var G__52072 = count__52067;
var G__52073 = (i__52068 + (1));
seq__52065 = G__52070;
chunk__52066 = G__52071;
count__52067 = G__52072;
i__52068 = G__52073;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52065);if(temp__4126__auto__)
{var seq__52065__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52065__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__52065__$1);{
var G__52074 = cljs.core.chunk_rest.call(null,seq__52065__$1);
var G__52075 = c__4299__auto__;
var G__52076 = cljs.core.count.call(null,c__4299__auto__);
var G__52077 = (0);
seq__52065 = G__52074;
chunk__52066 = G__52075;
count__52067 = G__52076;
i__52068 = G__52077;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__52065__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__52078 = cljs.core.next.call(null,seq__52065__$1);
var G__52079 = null;
var G__52080 = (0);
var G__52081 = (0);
seq__52065 = G__52078;
chunk__52066 = G__52079;
count__52067 = G__52080;
i__52068 = G__52081;
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
});})(map__52056,map__52056__$1,cursor,filter_spec))
;
clustermap.components.multiview.t52057.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t52057.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__52056,map__52056__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs52069 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs52069))?sablono.interpreter.attributes.call(null,attrs52069):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52069))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52069)], null))));
});})(map__52056,map__52056__$1,cursor,filter_spec))
;
clustermap.components.multiview.t52057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__52056,map__52056__$1,cursor,filter_spec){
return (function (_52059){var self__ = this;
var _52059__$1 = this;return self__.meta52058;
});})(map__52056,map__52056__$1,cursor,filter_spec))
;
clustermap.components.multiview.t52057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__52056,map__52056__$1,cursor,filter_spec){
return (function (_52059,meta52058__$1){var self__ = this;
var _52059__$1 = this;return (new clustermap.components.multiview.t52057(self__.filter_spec,self__.cursor,self__.map__52056,self__.owner,self__.p__52041,self__.multiview_component,meta52058__$1));
});})(map__52056,map__52056__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t52057 = ((function (map__52056,map__52056__$1,cursor,filter_spec){
return (function __GT_t52057(filter_spec__$1,cursor__$1,map__52056__$2,owner__$1,p__52041__$1,multiview_component__$1,meta52058){return (new clustermap.components.multiview.t52057(filter_spec__$1,cursor__$1,map__52056__$2,owner__$1,p__52041__$1,multiview_component__$1,meta52058));
});})(map__52056,map__52056__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t52057(filter_spec,cursor,map__52056__$1,owner,p__52041,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=multiview.js.map