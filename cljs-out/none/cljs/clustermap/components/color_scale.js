// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.color_scale');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.om');
goog.require('om.dom');
goog.require('jayq.core');
goog.require('clustermap.model');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.routes');
goog.require('om.dom');
goog.require('clustermap.formats.number');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t48573 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t48573 = (function (owner,threshold_colors,color_scale_component,meta48574){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta48574 = meta48574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t48573.cljs$lang$type = true;
clustermap.components.color_scale.t48573.cljs$lang$ctorStr = "clustermap.components.color-scale/t48573";
clustermap.components.color_scale.t48573.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"clustermap.components.color-scale/t48573");
});
clustermap.components.color_scale.t48573.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t48573.prototype.om$core$IRender$render$arity$1 = (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div({"className": "color-scale"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},cljs.core.into_array.call(null,(function (){var iter__4268__auto__ = ((function (this__9454__auto____$1){
return (function iter__48576(s__48577){return (new cljs.core.LazySeq(null,((function (this__9454__auto____$1){
return (function (){var s__48577__$1 = s__48577;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__48577__$1);if(temp__4126__auto__)
{var s__48577__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__48577__$2))
{var c__4266__auto__ = cljs.core.chunk_first.call(null,s__48577__$2);var size__4267__auto__ = cljs.core.count.call(null,c__4266__auto__);var b__48579 = cljs.core.chunk_buffer.call(null,size__4267__auto__);if((function (){var i__48578 = (0);while(true){
if((i__48578 < size__4267__auto__))
{var vec__48582 = cljs.core._nth.call(null,c__4266__auto__,i__48578);var threshold = cljs.core.nth.call(null,vec__48582,(0),null);var color = cljs.core.nth.call(null,vec__48582,(1),null);cljs.core.chunk_append.call(null,b__48579,React.DOM.div({"className": "tbl-cell", "style": {"background-color": color}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))));
{
var G__48584 = (i__48578 + (1));
i__48578 = G__48584;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48579),iter__48576.call(null,cljs.core.chunk_rest.call(null,s__48577__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48579),null);
}
} else
{var vec__48583 = cljs.core.first.call(null,s__48577__$2);var threshold = cljs.core.nth.call(null,vec__48583,(0),null);var color = cljs.core.nth.call(null,vec__48583,(1),null);return cljs.core.cons.call(null,React.DOM.div({"className": "tbl-cell", "style": {"background-color": color}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))),iter__48576.call(null,cljs.core.rest.call(null,s__48577__$2)));
}
} else
{return null;
}
break;
}
});})(this__9454__auto____$1))
,null,null));
});})(this__9454__auto____$1))
;return iter__4268__auto__.call(null,self__.threshold_colors);
})()))));
});
clustermap.components.color_scale.t48573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48575){var self__ = this;
var _48575__$1 = this;return self__.meta48574;
});
clustermap.components.color_scale.t48573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48575,meta48574__$1){var self__ = this;
var _48575__$1 = this;return (new clustermap.components.color_scale.t48573(self__.owner,self__.threshold_colors,self__.color_scale_component,meta48574__$1));
});
clustermap.components.color_scale.__GT_t48573 = (function __GT_t48573(owner__$1,threshold_colors__$1,color_scale_component__$1,meta48574){return (new clustermap.components.color_scale.t48573(owner__$1,threshold_colors__$1,color_scale_component__$1,meta48574));
});
}
return (new clustermap.components.color_scale.t48573(owner,threshold_colors,color_scale_component,null));
});
clustermap.components.color_scale.mount = (function mount(app_state,path,elem_id,shared){return om.core.root.call(null,clustermap.components.color_scale.color_scale_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shared","shared",-384145993),shared,new cljs.core.Keyword(null,"target","target",253001721),document.getElementById(elem_id),new cljs.core.Keyword(null,"path","path",-188191168),path], null));
});

//# sourceMappingURL=color_scale.js.map