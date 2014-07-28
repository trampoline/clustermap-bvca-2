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
clustermap.components.multiview.multiview_component = (function multiview_component(p__52061,owner){var map__52076 = p__52061;var map__52076__$1 = ((cljs.core.seq_QMARK_.call(null,map__52076))?cljs.core.apply.call(null,cljs.core.hash_map,map__52076):map__52076);var cursor = map__52076__$1;var filter_spec = cljs.core.get.call(null,map__52076__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t52077 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t52077 = (function (filter_spec,cursor,map__52076,owner,p__52061,multiview_component,meta52078){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__52076 = map__52076;
this.owner = owner;
this.p__52061 = p__52061;
this.multiview_component = multiview_component;
this.meta52078 = meta52078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t52077.cljs$lang$type = true;
clustermap.components.multiview.t52077.cljs$lang$ctorStr = "clustermap.components.multiview/t52077";
clustermap.components.multiview.t52077.cljs$lang$ctorPrWriter = ((function (map__52076,map__52076__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t52077");
});})(map__52076,map__52076__$1,cursor,filter_spec))
;
clustermap.components.multiview.t52077.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t52077.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__52076,map__52076__$1,cursor,filter_spec){
return (function (this$,p__52080,next_state){var self__ = this;
var map__52081 = p__52080;var map__52081__$1 = ((cljs.core.seq_QMARK_.call(null,map__52081))?cljs.core.apply.call(null,cljs.core.hash_map,map__52081):map__52081);var map__52082 = cljs.core.get.call(null,map__52081__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__52082__$1 = ((cljs.core.seq_QMARK_.call(null,map__52082))?cljs.core.apply.call(null,cljs.core.hash_map,map__52082):map__52082);var next_compiled_filter = cljs.core.get.call(null,map__52082__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__52081__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__52083 = om.core.get_props.call(null,self__.owner);var map__52083__$1 = ((cljs.core.seq_QMARK_.call(null,map__52083))?cljs.core.apply.call(null,cljs.core.hash_map,map__52083):map__52083);var map__52084 = cljs.core.get.call(null,map__52083__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__52084__$1 = ((cljs.core.seq_QMARK_.call(null,map__52084))?cljs.core.apply.call(null,cljs.core.hash_map,map__52084):map__52084);var compiled_filter = cljs.core.get.call(null,map__52084__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__52083__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__52085 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__52086 = null;var count__52087 = (0);var i__52088 = (0);while(true){
if((i__52088 < count__52087))
{var view_key = cljs.core._nth.call(null,chunk__52086,i__52088);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__52090 = seq__52085;
var G__52091 = chunk__52086;
var G__52092 = count__52087;
var G__52093 = (i__52088 + (1));
seq__52085 = G__52090;
chunk__52086 = G__52091;
count__52087 = G__52092;
i__52088 = G__52093;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__52085);if(temp__4126__auto__)
{var seq__52085__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__52085__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__52085__$1);{
var G__52094 = cljs.core.chunk_rest.call(null,seq__52085__$1);
var G__52095 = c__4299__auto__;
var G__52096 = cljs.core.count.call(null,c__4299__auto__);
var G__52097 = (0);
seq__52085 = G__52094;
chunk__52086 = G__52095;
count__52087 = G__52096;
i__52088 = G__52097;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__52085__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__52098 = cljs.core.next.call(null,seq__52085__$1);
var G__52099 = null;
var G__52100 = (0);
var G__52101 = (0);
seq__52085 = G__52098;
chunk__52086 = G__52099;
count__52087 = G__52100;
i__52088 = G__52101;
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
});})(map__52076,map__52076__$1,cursor,filter_spec))
;
clustermap.components.multiview.t52077.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t52077.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__52076,map__52076__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs52089 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs52089))?sablono.interpreter.attributes.call(null,attrs52089):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52089))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52089)], null))));
});})(map__52076,map__52076__$1,cursor,filter_spec))
;
clustermap.components.multiview.t52077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__52076,map__52076__$1,cursor,filter_spec){
return (function (_52079){var self__ = this;
var _52079__$1 = this;return self__.meta52078;
});})(map__52076,map__52076__$1,cursor,filter_spec))
;
clustermap.components.multiview.t52077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__52076,map__52076__$1,cursor,filter_spec){
return (function (_52079,meta52078__$1){var self__ = this;
var _52079__$1 = this;return (new clustermap.components.multiview.t52077(self__.filter_spec,self__.cursor,self__.map__52076,self__.owner,self__.p__52061,self__.multiview_component,meta52078__$1));
});})(map__52076,map__52076__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t52077 = ((function (map__52076,map__52076__$1,cursor,filter_spec){
return (function __GT_t52077(filter_spec__$1,cursor__$1,map__52076__$2,owner__$1,p__52061__$1,multiview_component__$1,meta52078){return (new clustermap.components.multiview.t52077(filter_spec__$1,cursor__$1,map__52076__$2,owner__$1,p__52061__$1,multiview_component__$1,meta52078));
});})(map__52076,map__52076__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t52077(filter_spec,cursor,map__52076__$1,owner,p__52061,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=multiview.js.map