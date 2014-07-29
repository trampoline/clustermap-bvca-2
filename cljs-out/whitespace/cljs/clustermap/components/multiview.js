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
clustermap.components.multiview.multiview_component = (function multiview_component(p__13772,owner){var map__13787 = p__13772;var map__13787__$1 = ((cljs.core.seq_QMARK_.call(null,map__13787))?cljs.core.apply.call(null,cljs.core.hash_map,map__13787):map__13787);var cursor = map__13787__$1;var filter_spec = cljs.core.get.call(null,map__13787__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));if(typeof clustermap.components.multiview.t13788 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.multiview.t13788 = (function (filter_spec,cursor,map__13787,owner,p__13772,multiview_component,meta13789){
this.filter_spec = filter_spec;
this.cursor = cursor;
this.map__13787 = map__13787;
this.owner = owner;
this.p__13772 = p__13772;
this.multiview_component = multiview_component;
this.meta13789 = meta13789;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.multiview.t13788.cljs$lang$type = true;
clustermap.components.multiview.t13788.cljs$lang$ctorStr = "clustermap.components.multiview/t13788";
clustermap.components.multiview.t13788.cljs$lang$ctorPrWriter = ((function (map__13787,map__13787__$1,cursor,filter_spec){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.multiview/t13788");
});})(map__13787,map__13787__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13788.prototype.om$core$IWillUpdate$ = true;
clustermap.components.multiview.t13788.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13787,map__13787__$1,cursor,filter_spec){
return (function (this$,p__13791,next_state){var self__ = this;
var map__13792 = p__13791;var map__13792__$1 = ((cljs.core.seq_QMARK_.call(null,map__13792))?cljs.core.apply.call(null,cljs.core.hash_map,map__13792):map__13792);var map__13793 = cljs.core.get.call(null,map__13792__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13793__$1 = ((cljs.core.seq_QMARK_.call(null,map__13793))?cljs.core.apply.call(null,cljs.core.hash_map,map__13793):map__13793);var next_compiled_filter = cljs.core.get.call(null,map__13793__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var next_views = cljs.core.get.call(null,map__13792__$1,new cljs.core.Keyword(null,"views","views",1450155487));var this$__$1 = this;var map__13794 = om.core.get_props.call(null,self__.owner);var map__13794__$1 = ((cljs.core.seq_QMARK_.call(null,map__13794))?cljs.core.apply.call(null,cljs.core.hash_map,map__13794):map__13794);var map__13795 = cljs.core.get.call(null,map__13794__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13795__$1 = ((cljs.core.seq_QMARK_.call(null,map__13795))?cljs.core.apply.call(null,cljs.core.hash_map,map__13795):map__13795);var compiled_filter = cljs.core.get.call(null,map__13795__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var views = cljs.core.get.call(null,map__13794__$1,new cljs.core.Keyword(null,"views","views",1450155487));if(cljs.core.not_EQ_.call(null,next_compiled_filter,compiled_filter))
{var seq__13796 = cljs.core.seq.call(null,cljs.core.keys.call(null,next_views));var chunk__13797 = null;var count__13798 = (0);var i__13799 = (0);while(true){
if((i__13799 < count__13798))
{var view_key = cljs.core._nth.call(null,chunk__13797,i__13799);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__13801 = seq__13796;
var G__13802 = chunk__13797;
var G__13803 = count__13798;
var G__13804 = (i__13799 + (1));
seq__13796 = G__13801;
chunk__13797 = G__13802;
count__13798 = G__13803;
i__13799 = G__13804;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__13796);if(temp__4126__auto__)
{var seq__13796__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__13796__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__13796__$1);{
var G__13805 = cljs.core.chunk_rest.call(null,seq__13796__$1);
var G__13806 = c__4299__auto__;
var G__13807 = cljs.core.count.call(null,c__4299__auto__);
var G__13808 = (0);
seq__13796 = G__13805;
chunk__13797 = G__13806;
count__13798 = G__13807;
i__13799 = G__13808;
continue;
}
} else
{var view_key = cljs.core.first.call(null,seq__13796__$1);om.core.update_BANG_.call(null,self__.cursor,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view_key,new cljs.core.Keyword(null,"filter","filter",-948537934)], null),next_compiled_filter);
{
var G__13809 = cljs.core.next.call(null,seq__13796__$1);
var G__13810 = null;
var G__13811 = (0);
var G__13812 = (0);
seq__13796 = G__13809;
chunk__13797 = G__13810;
count__13798 = G__13811;
i__13799 = G__13812;
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
});})(map__13787,map__13787__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13788.prototype.om$core$IRenderState$ = true;
clustermap.components.multiview.t13788.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13787,map__13787__$1,cursor,filter_spec){
return (function (this$,state){var self__ = this;
var this$__$1 = this;var attrs13800 = om.core.build.call(null,clustermap.components.filter.filter_component,self__.filter_spec);return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs13800))?sablono.interpreter.attributes.call(null,attrs13800):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13800))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13800)], null))));
});})(map__13787,map__13787__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13787,map__13787__$1,cursor,filter_spec){
return (function (_13790){var self__ = this;
var _13790__$1 = this;return self__.meta13789;
});})(map__13787,map__13787__$1,cursor,filter_spec))
;
clustermap.components.multiview.t13788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13787,map__13787__$1,cursor,filter_spec){
return (function (_13790,meta13789__$1){var self__ = this;
var _13790__$1 = this;return (new clustermap.components.multiview.t13788(self__.filter_spec,self__.cursor,self__.map__13787,self__.owner,self__.p__13772,self__.multiview_component,meta13789__$1));
});})(map__13787,map__13787__$1,cursor,filter_spec))
;
clustermap.components.multiview.__GT_t13788 = ((function (map__13787,map__13787__$1,cursor,filter_spec){
return (function __GT_t13788(filter_spec__$1,cursor__$1,map__13787__$2,owner__$1,p__13772__$1,multiview_component__$1,meta13789){return (new clustermap.components.multiview.t13788(filter_spec__$1,cursor__$1,map__13787__$2,owner__$1,p__13772__$1,multiview_component__$1,meta13789));
});})(map__13787,map__13787__$1,cursor,filter_spec))
;
}
return (new clustermap.components.multiview.t13788(filter_spec,cursor,map__13787__$1,owner,p__13772,multiview_component,null));
});
clustermap.components.multiview.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.multiview.multiview_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});
