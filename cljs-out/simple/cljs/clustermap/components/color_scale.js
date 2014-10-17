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
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t31376 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t31376 = (function (owner,threshold_colors,color_scale_component,meta31377){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta31377 = meta31377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t31376.cljs$lang$type = true;
clustermap.components.color_scale.t31376.cljs$lang$ctorStr = "clustermap.components.color-scale/t31376";
clustermap.components.color_scale.t31376.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.color-scale/t31376");
});
clustermap.components.color_scale.t31376.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t31376.prototype.om$core$IRender$render$arity$1 = (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"className": "color-scale"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},cljs.core.into_array.call(null,(function (){var iter__4283__auto__ = ((function (this__9504__auto____$1){
return (function iter__31379(s__31380){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1){
return (function (){var s__31380__$1 = s__31380;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31380__$1);if(temp__4126__auto__)
{var s__31380__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31380__$2))
{var c__4281__auto__ = cljs.core.chunk_first.call(null,s__31380__$2);var size__4282__auto__ = cljs.core.count.call(null,c__4281__auto__);var b__31382 = cljs.core.chunk_buffer.call(null,size__4282__auto__);if((function (){var i__31381 = (0);while(true){
if((i__31381 < size__4282__auto__))
{var vec__31385 = cljs.core._nth.call(null,c__4281__auto__,i__31381);var threshold = cljs.core.nth.call(null,vec__31385,(0),null);var color = cljs.core.nth.call(null,vec__31385,(1),null);cljs.core.chunk_append.call(null,b__31382,React.DOM.div({"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))));
{
var G__31387 = (i__31381 + (1));
i__31381 = G__31387;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31382),iter__31379.call(null,cljs.core.chunk_rest.call(null,s__31380__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31382),null);
}
} else
{var vec__31386 = cljs.core.first.call(null,s__31380__$2);var threshold = cljs.core.nth.call(null,vec__31386,(0),null);var color = cljs.core.nth.call(null,vec__31386,(1),null);return cljs.core.cons.call(null,React.DOM.div({"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))),iter__31379.call(null,cljs.core.rest.call(null,s__31380__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1))
,null,null));
});})(this__9504__auto____$1))
;return iter__4283__auto__.call(null,self__.threshold_colors);
})()))));
});
clustermap.components.color_scale.t31376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31378){var self__ = this;
var _31378__$1 = this;return self__.meta31377;
});
clustermap.components.color_scale.t31376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31378,meta31377__$1){var self__ = this;
var _31378__$1 = this;return (new clustermap.components.color_scale.t31376(self__.owner,self__.threshold_colors,self__.color_scale_component,meta31377__$1));
});
clustermap.components.color_scale.__GT_t31376 = (function __GT_t31376(owner__$1,threshold_colors__$1,color_scale_component__$1,meta31377){return (new clustermap.components.color_scale.t31376(owner__$1,threshold_colors__$1,color_scale_component__$1,meta31377));
});
}
return (new clustermap.components.color_scale.t31376(owner,threshold_colors,color_scale_component,null));
});
