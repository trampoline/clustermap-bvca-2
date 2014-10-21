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
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t77217 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t77217 = (function (owner,threshold_colors,color_scale_component,meta77218){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta77218 = meta77218;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t77217.cljs$lang$type = true;
clustermap.components.color_scale.t77217.cljs$lang$ctorStr = "clustermap.components.color-scale/t77217";
clustermap.components.color_scale.t77217.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.color-scale/t77217");
});
clustermap.components.color_scale.t77217.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t77217.prototype.om$core$IRender$render$arity$1 = (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;return React.DOM.div({"className": "color-scale"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},cljs.core.into_array.call(null,(function (){var iter__4375__auto__ = ((function (this__10071__auto____$1){
return (function iter__77220(s__77221){return (new cljs.core.LazySeq(null,((function (this__10071__auto____$1){
return (function (){var s__77221__$1 = s__77221;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__77221__$1);if(temp__4126__auto__)
{var s__77221__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__77221__$2))
{var c__4373__auto__ = cljs.core.chunk_first.call(null,s__77221__$2);var size__4374__auto__ = cljs.core.count.call(null,c__4373__auto__);var b__77223 = cljs.core.chunk_buffer.call(null,size__4374__auto__);if((function (){var i__77222 = (0);while(true){
if((i__77222 < size__4374__auto__))
{var vec__77226 = cljs.core._nth.call(null,c__4373__auto__,i__77222);var threshold = cljs.core.nth.call(null,vec__77226,(0),null);var color = cljs.core.nth.call(null,vec__77226,(1),null);cljs.core.chunk_append.call(null,b__77223,React.DOM.div({"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))));
{
var G__77228 = (i__77222 + (1));
i__77222 = G__77228;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77223),iter__77220.call(null,cljs.core.chunk_rest.call(null,s__77221__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__77223),null);
}
} else
{var vec__77227 = cljs.core.first.call(null,s__77221__$2);var threshold = cljs.core.nth.call(null,vec__77227,(0),null);var color = cljs.core.nth.call(null,vec__77227,(1),null);return cljs.core.cons.call(null,React.DOM.div({"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color.call(null,color)}},sablono.interpreter.interpret.call(null,clustermap.formats.money.readable.call(null,threshold,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"curr","curr",-1092372808),"",new cljs.core.Keyword(null,"default","default",-1987822328),""))),iter__77220.call(null,cljs.core.rest.call(null,s__77221__$2)));
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
clustermap.components.color_scale.t77217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77219){var self__ = this;
var _77219__$1 = this;return self__.meta77218;
});
clustermap.components.color_scale.t77217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77219,meta77218__$1){var self__ = this;
var _77219__$1 = this;return (new clustermap.components.color_scale.t77217(self__.owner,self__.threshold_colors,self__.color_scale_component,meta77218__$1));
});
clustermap.components.color_scale.__GT_t77217 = (function __GT_t77217(owner__$1,threshold_colors__$1,color_scale_component__$1,meta77218){return (new clustermap.components.color_scale.t77217(owner__$1,threshold_colors__$1,color_scale_component__$1,meta77218));
});
}
return (new clustermap.components.color_scale.t77217(owner,threshold_colors,color_scale_component,null));
});

//# sourceMappingURL=color_scale.js.map