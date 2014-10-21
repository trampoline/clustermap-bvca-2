// Compiled by ClojureScript 0.0-2356
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
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t12238 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t12238 = (function (owner,threshold_colors,color_scale_component,meta12239){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta12239 = meta12239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t12238.cljs$lang$type = true;
clustermap.components.color_scale.t12238.cljs$lang$ctorStr = "clustermap.components.color-scale/t12238";
clustermap.components.color_scale.t12238.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.color-scale/t12238");
});
clustermap.components.color_scale.t12238.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t12238.prototype.om$core$IRender$render$arity$1 = (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return React.DOM.div({"className": "color-scale"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},cljs.core.into_array.call(null,(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1){
return (function iter__12241(s__12242){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1){
return (function (){var s__12242__$1 = s__12242;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__12242__$1);if(temp__4126__auto__)
{var s__12242__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__12242__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__12242__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__12244 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__12243 = (0);while(true){
if((i__12243 < size__4374__auto__))
{var vec__12247 = cljs.core._nth.call(null,c__4373__auto__,i__12243);var threshold = cljs.core.nth.call(null,vec__12247,(0),null);var color = cljs.core.nth.call(null,vec__12247,(1),null);cljs.core.chunk_append.call(null,b__12244,React.DOM.div({"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))));
{
var G__12249 = (i__12243 + (1));
i__12243 = G__12249;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12244),iter__12241.call(null,cljs.core.chunk_rest.call(null,s__12242__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__12244),null);
}
} else
{var vec__12248 = cljs.core.first.call(null,s__12242__$2);var threshold = cljs.core.nth.call(null,vec__12248,(0),null);var color = cljs.core.nth.call(null,vec__12248,(1),null);return cljs.core.cons.call(null,React.DOM.div({"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))),iter__12241.call(null,cljs.core.rest.call(null,s__12242__$2)));
}
} else
{return null;
}
break;
}
});})(this__10071__auto____$1))
,null,null));
});})(this__10071__auto____$1))
;return iter__4375__auto__.call(null,self__.threshold_colors);
})()))));
});
clustermap.components.color_scale.t12238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12240){var self__ = this;
var _12240__$1 = this;return self__.meta12239;
});
clustermap.components.color_scale.t12238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12240,meta12239__$1){var self__ = this;
var _12240__$1 = this;return (new clustermap.components.color_scale.t12238(self__.owner,self__.threshold_colors,self__.color_scale_component,meta12239__$1));
});
clustermap.components.color_scale.__GT_t12238 = (function __GT_t12238(owner__$1,threshold_colors__$1,color_scale_component__$1,meta12239){return (new clustermap.components.color_scale.t12238(owner__$1,threshold_colors__$1,color_scale_component__$1,meta12239));
});
}
return (new clustermap.components.color_scale.t12238(owner,threshold_colors,color_scale_component,null));
});
