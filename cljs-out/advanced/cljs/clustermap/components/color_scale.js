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
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t45762 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t45762 = (function (owner,threshold_colors,color_scale_component,meta45763){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta45763 = meta45763;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t45762.cljs$lang$type = true;
clustermap.components.color_scale.t45762.cljs$lang$ctorStr = "clustermap.components.color-scale/t45762";
clustermap.components.color_scale.t45762.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.color-scale/t45762");
});
clustermap.components.color_scale.t45762.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t45762.prototype.om$core$IRender$render$arity$1 = (function (this__9504__auto__){var self__ = this;
var this__9504__auto____$1 = this;return React.DOM.div({"className": "color-scale"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4283__auto__ = ((function (this__9504__auto____$1){
return (function iter__45765(s__45766){return (new cljs.core.LazySeq(null,((function (this__9504__auto____$1){
return (function (){var s__45766__$1 = s__45766;while(true){
var temp__4126__auto__ = cljs.core.seq(s__45766__$1);if(temp__4126__auto__)
{var s__45766__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__45766__$2))
{var c__4281__auto__ = cljs.core.chunk_first(s__45766__$2);var size__4282__auto__ = cljs.core.count(c__4281__auto__);var b__45768 = cljs.core.chunk_buffer(size__4282__auto__);if((function (){var i__45767 = (0);while(true){
if((i__45767 < size__4282__auto__))
{var vec__45771 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4281__auto__,i__45767);var threshold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45771,(0),null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45771,(1),null);cljs.core.chunk_append(b__45768,React.DOM.div({"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color(color)}},sablono.interpreter.interpret(clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(threshold,cljs.core.array_seq([cljs.core.constant$keyword$984,(2),cljs.core.constant$keyword$1087,"",cljs.core.constant$keyword$927,""], 0)))));
{
var G__45773 = (i__45767 + (1));
i__45767 = G__45773;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__45768),iter__45765(cljs.core.chunk_rest(s__45766__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__45768),null);
}
} else
{var vec__45772 = cljs.core.first(s__45766__$2);var threshold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45772,(0),null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45772,(1),null);return cljs.core.cons(React.DOM.div({"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color(color)}},sablono.interpreter.interpret(clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(threshold,cljs.core.array_seq([cljs.core.constant$keyword$984,(2),cljs.core.constant$keyword$1087,"",cljs.core.constant$keyword$927,""], 0)))),iter__45765(cljs.core.rest(s__45766__$2)));
}
} else
{return null;
}
break;
}
});})(this__9504__auto____$1))
,null,null));
});})(this__9504__auto____$1))
;return iter__4283__auto__(self__.threshold_colors);
})()))));
});
clustermap.components.color_scale.t45762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45764){var self__ = this;
var _45764__$1 = this;return self__.meta45763;
});
clustermap.components.color_scale.t45762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45764,meta45763__$1){var self__ = this;
var _45764__$1 = this;return (new clustermap.components.color_scale.t45762(self__.owner,self__.threshold_colors,self__.color_scale_component,meta45763__$1));
});
clustermap.components.color_scale.__GT_t45762 = (function __GT_t45762(owner__$1,threshold_colors__$1,color_scale_component__$1,meta45763){return (new clustermap.components.color_scale.t45762(owner__$1,threshold_colors__$1,color_scale_component__$1,meta45763));
});
}
return (new clustermap.components.color_scale.t45762(owner,threshold_colors,color_scale_component,null));
});
