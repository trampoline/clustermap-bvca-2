// Compiled by ClojureScript 0.0-2322
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
goog.require('clustermap.formats.color');
goog.require('clustermap.formats.number');
goog.require('clustermap.om');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('clustermap.formats.color');
goog.require('clustermap.model');
goog.require('jayq.core');
goog.require('clustermap.routes');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t50597 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t50597 = (function (owner,threshold_colors,color_scale_component,meta50598){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta50598 = meta50598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t50597.cljs$lang$type = true;
clustermap.components.color_scale.t50597.cljs$lang$ctorStr = "clustermap.components.color-scale/t50597";
clustermap.components.color_scale.t50597.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.color-scale/t50597");
});
clustermap.components.color_scale.t50597.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t50597.prototype.om$core$IRender$render$arity$1 = (function (this__9536__auto__){var self__ = this;
var this__9536__auto____$1 = this;return React.DOM.div({"className": "color-scale"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},cljs.core.into_array.call(null,(function (){var iter__4283__auto__ = ((function (this__9536__auto____$1){
return (function iter__50600(s__50601){return (new cljs.core.LazySeq(null,((function (this__9536__auto____$1){
return (function (){var s__50601__$1 = s__50601;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__50601__$1);if(temp__4126__auto__)
{var s__50601__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__50601__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__50601__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__50603 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__50602 = (0);while(true){
if((i__50602 < size__4282__auto__))
{var vec__50606 = cljs.core._nth.call(null,c__4281__auto__,i__50602);var threshold = cljs.core.nth.call(null,vec__50606,(0),null);var color = cljs.core.nth.call(null,vec__50606,(1),null);cljs.core.chunk_append.call(null,b__50603,React.DOM.div({"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))));
{
var G__50608 = (i__50602 + (1));
i__50602 = G__50608;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50603),iter__50600.call(null,cljs.core.chunk_rest.call(null,s__50601__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50603),null);
}
} else
{var vec__50607 = cljs.core.first.call(null,s__50601__$2);var threshold = cljs.core.nth.call(null,vec__50607,(0),null);var color = cljs.core.nth.call(null,vec__50607,(1),null);return cljs.core.cons.call(null,React.DOM.div({"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))),iter__50600.call(null,cljs.core.rest.call(null,s__50601__$2)));
}
} else
{return null;
}
break;
}
});})(this__9536__auto____$1))
,null,null));
});})(this__9536__auto____$1))
;return iter__4283__auto__.call(null,self__.threshold_colors);
})()))));
});
clustermap.components.color_scale.t50597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50599){var self__ = this;
var _50599__$1 = this;return self__.meta50598;
});
clustermap.components.color_scale.t50597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50599,meta50598__$1){var self__ = this;
var _50599__$1 = this;return (new clustermap.components.color_scale.t50597(self__.owner,self__.threshold_colors,self__.color_scale_component,meta50598__$1));
});
clustermap.components.color_scale.__GT_t50597 = (function __GT_t50597(owner__$1,threshold_colors__$1,color_scale_component__$1,meta50598){return (new clustermap.components.color_scale.t50597(owner__$1,threshold_colors__$1,color_scale_component__$1,meta50598));
});
}
return (new clustermap.components.color_scale.t50597(owner,threshold_colors,color_scale_component,null));
});

//# sourceMappingURL=color_scale.js.map