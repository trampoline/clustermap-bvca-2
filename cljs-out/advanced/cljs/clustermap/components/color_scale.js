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
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t52092 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t52092 = (function (owner,threshold_colors,color_scale_component,meta52093){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta52093 = meta52093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t52092.cljs$lang$type = true;
clustermap.components.color_scale.t52092.cljs$lang$ctorStr = "clustermap.components.color-scale/t52092";
clustermap.components.color_scale.t52092.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.color-scale/t52092");
});
clustermap.components.color_scale.t52092.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t52092.prototype.om$core$IRender$render$arity$1 = (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var G__52095 = {"className": "color-scale"};var G__52096 = (function (){var G__52097 = {"className": "tbl"};var G__52098 = (function (){var G__52099 = {"className": "tbl-row"};var G__52100 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4375__auto__ = ((function (G__52099,G__52097,G__52095,this__10071__auto____$1){
return (function iter__52101(s__52102){return (new cljs.core.LazySeq(null,((function (G__52099,G__52097,G__52095,this__10071__auto____$1){
return (function (){var s__52102__$1 = s__52102;while(true){
var temp__4126__auto__ = cljs.core.seq(s__52102__$1);if(temp__4126__auto__)
{var s__52102__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__52102__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__52102__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__52104 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__52103 = (0);while(true){
if((i__52103 < size__4374__auto__))
{var vec__52113 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__52103);var threshold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52113,(0),null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52113,(1),null);cljs.core.chunk_append(b__52104,(function (){var G__52114 = {"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color(color)}};var G__52115 = sablono.interpreter.interpret(clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(threshold,cljs.core.array_seq([cljs.core.constant$keyword$1315,(2),cljs.core.constant$keyword$1318,"",cljs.core.constant$keyword$1111,""], 0)));return React.DOM.div(G__52114,G__52115);
})());
{
var G__52119 = (i__52103 + (1));
i__52103 = G__52119;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__52104),iter__52101(cljs.core.chunk_rest(s__52102__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__52104),null);
}
} else
{var vec__52116 = cljs.core.first(s__52102__$2);var threshold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52116,(0),null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52116,(1),null);return cljs.core.cons((function (){var G__52117 = {"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color(color)}};var G__52118 = sablono.interpreter.interpret(clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(threshold,cljs.core.array_seq([cljs.core.constant$keyword$1315,(2),cljs.core.constant$keyword$1318,"",cljs.core.constant$keyword$1111,""], 0)));return React.DOM.div(G__52117,G__52118);
})(),iter__52101(cljs.core.rest(s__52102__$2)));
}
} else
{return null;
}
break;
}
});})(G__52099,G__52097,G__52095,this__10071__auto____$1))
,null,null));
});})(G__52099,G__52097,G__52095,this__10071__auto____$1))
;return iter__4375__auto__(self__.threshold_colors);
})());return React.DOM.div(G__52099,G__52100);
})();return React.DOM.div(G__52097,G__52098);
})();return React.DOM.div(G__52095,G__52096);
});
clustermap.components.color_scale.t52092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52094){var self__ = this;
var _52094__$1 = this;return self__.meta52093;
});
clustermap.components.color_scale.t52092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52094,meta52093__$1){var self__ = this;
var _52094__$1 = this;return (new clustermap.components.color_scale.t52092(self__.owner,self__.threshold_colors,self__.color_scale_component,meta52093__$1));
});
clustermap.components.color_scale.__GT_t52092 = (function __GT_t52092(owner__$1,threshold_colors__$1,color_scale_component__$1,meta52093){return (new clustermap.components.color_scale.t52092(owner__$1,threshold_colors__$1,color_scale_component__$1,meta52093));
});
}
return (new clustermap.components.color_scale.t52092(owner,threshold_colors,color_scale_component,null));
});
