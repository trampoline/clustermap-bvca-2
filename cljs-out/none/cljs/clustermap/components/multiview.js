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
clustermap.components.multiview.multiview_component = (function multiview_component(p__50895,owner){var map__50910 = p__50895;var map__50910__$1 = ((cljs.core.seq_QMARK_.call(null,map__50910))?cljs.core.apply.call(null,cljs.core.hash_map,map__50910):map__50910);var cursor = map__50910__$1;var filter_spec = cljs.core.get.call(null,map__50910__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t50911 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t50911 = (function (filter_spec,cursor,map__50910,owner,p__50895,multiview_component,meta50912){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__50910 = map__50910;
this.owner = owner;
this.p__50895 = p__50895;
this.multiview_component = multiview_component;
this.meta50912 = meta50912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t50911.cljs$lang$type = true;
clustermap.components.multiview.t50911.cljs$lang$ctorStr = "clustermap.components.multiview/t50911";
clustermap.components.multiview.t50911.cljs$lang$ctorPrWriter = ((function (map__50910,map__50910__$1,cursor,filter_spec){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"clustermap.components.multiview/t50911");
});})(map__50910,map__50910__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50911.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t50911.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__50910,map__50910__$1,cursor,filter_spec){
return (function (this$,p__50914,next_state){var self__ = this;
var map__50915 = p__50914;var map__50915__$1 = ((cljs.core.seq_QMARK_.call(null,map__50915))?cljs.core.apply.call(null,cljs.core.hash_map,map__50915):map__50915);var map__50916 = cljs.core.get.call(null,map__50915__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__50916__$1 = ((cljs.core.seq_QMARK_.call(null,map__50916))?cljs.core.apply.call(null,cljs.core.hash_map,map__50916):map__50916);var next_compiled_filter = cljs.core.get.call(null,map__50916__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__50915__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__50917 = om.core.get_props.call(null,self__.owner);var map__50917__$1 = ((cljs.core.seq_QMARK_.call(null,map__50917))?cljs.core.apply.call(null,cljs.core.hash_map,map__50917):map__50917);var map__50918 = cljs.core.get.call(null,map__50917__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__50918__$1 = ((cljs.core.seq_QMARK_.call(null,map__50918))?cljs.core.apply.call(null,cljs.core.hash_map,map__50918):map__50918);var compiled_filter = cljs.core.get.call(null,map__50918__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__50917__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__50919 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__50920 = null;var count__50921 = (0);var i__50922 = (0);while(true){
if((i__50922 < count__50921))
{var view_key = cljs.core._nth.call(null,chunk__50920,i__50922);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__50924 = seq__50919;
var G__50925 = chunk__50920;
var G__50926 = count__50921;
var G__50927 = (i__50922 + (1));
seq__50919 = G__50924;
chunk__50920 = G__50925;
count__50921 = G__50926;
i__50922 = G__50927;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__50919);if(temp__4126__auto__)
{var seq__50919__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__50919__$1))
{var c__4297__auto__ = cljs.core.chunk_first.call(null,seq__50919__$1);{
var G__50928 = cljs.core.chunk_rest.call(null,seq__50919__$1);
var G__50929 = c__4297__auto__;
var G__50930 = cljs.core.count.call(null,c__4297__auto__);
var G__50931 = (0);
seq__50919 = G__50928;
chunk__50920 = G__50929;
count__50921 = G__50930;
i__50922 = G__50931;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__50919__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__50932 = cljs.core.next.call(null,seq__50919__$1);
var G__50933 = null;
var G__50934 = (0);
var G__50935 = (0);
seq__50919 = G__50932;
chunk__50920 = G__50933;
count__50921 = G__50934;
i__50922 = G__50935;
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
});})(map__50910,map__50910__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50911.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t50911.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__50910,map__50910__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs50923 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs50923))?sablono.interpreter.attributes.call(null,attrs50923):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs50923))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs50923)], null))));
});})(map__50910,map__50910__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50911.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__50910,map__50910__$1,cursor,filter_spec){
return (function (_50913){var self__ = this;
var _50913__$1 = this;return self__.meta50912;
});})(map__50910,map__50910__$1,cursor,filter_spec))
;
clustermap.components.multiview.t50911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__50910,map__50910__$1,cursor,filter_spec){
return (function (_50913,meta50912__$1){var self__ = this;
var _50913__$1 = this;return (new clustermap.components.multiview.t50911(self__.filter_spec,self__.cursor,self__.map__50910,self__.owner,self__.p__50895,self__.multiview_component,meta50912__$1));
});})(map__50910,map__50910__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t50911 = ((function (map__50910,map__50910__$1,cursor,filter_spec){
return (function __GT_t50911(filter_spec__$1,cursor__$1,map__50910__$2,owner__$1,p__50895__$1,multiview_component__$1,meta50912){return (new clustermap.components.multiview.t50911(filter_spec__$1,cursor__$1,map__50910__$2,owner__$1,p__50895__$1,multiview_component__$1,meta50912));
});})(map__50910,map__50910__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t50911(filter_spec,cursor,map__50910__$1,owner,p__50895,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=multiview.js.map