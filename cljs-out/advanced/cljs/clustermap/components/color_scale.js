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
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t74332 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t74332 = (function (owner,threshold_colors,color_scale_component,meta74333){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta74333 = meta74333;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t74332.cljs$lang$type = true;
clustermap.components.color_scale.t74332.cljs$lang$ctorStr = "clustermap.components.color-scale/t74332";
clustermap.components.color_scale.t74332.cljs$lang$ctorPrWriter = (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.color-scale/t74332");
});
clustermap.components.color_scale.t74332.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t74332.prototype.om$core$IRender$render$arity$1 = (function (this__10071__auto__){var self__ = this;
var this__10071__auto____$1 = this;var G__74335 = {"className": "color-scale"};var G__74336 = (function (){var G__74337 = {"className": "tbl"};var G__74338 = (function (){var G__74339 = {"className": "tbl-row"};var G__74340 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4375__auto__ = ((function (G__74339,G__74337,G__74335,this__10071__auto____$1){
return (function iter__74341(s__74342){return (new cljs.core.LazySeq(null,((function (G__74339,G__74337,G__74335,this__10071__auto____$1){
return (function (){var s__74342__$1 = s__74342;while(true){
var temp__4126__auto__ = cljs.core.seq(s__74342__$1);if(temp__4126__auto__)
{var s__74342__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__74342__$2))
{var c__4373__auto__ = cljs.core.chunk_first(s__74342__$2);var size__4374__auto__ = cljs.core.count(c__4373__auto__);var b__74344 = cljs.core.chunk_buffer(size__4374__auto__);if((function (){var i__74343 = (0);while(true){
if((i__74343 < size__4374__auto__))
{var vec__74353 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4373__auto__,i__74343);var threshold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74353,(0),null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74353,(1),null);cljs.core.chunk_append(b__74344,(function (){var G__74354 = {"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color(color)}};var G__74355 = sablono.interpreter.interpret(clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(threshold,cljs.core.array_seq([cljs.core.constant$keyword$1315,(2),cljs.core.constant$keyword$1346,"",cljs.core.constant$keyword$1111,""], 0)));return React.DOM.div(G__74354,G__74355);
})());
{
var G__74359 = (i__74343 + (1));
i__74343 = G__74359;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__74344),iter__74341(cljs.core.chunk_rest(s__74342__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__74344),null);
}
} else
{var vec__74356 = cljs.core.first(s__74342__$2);var threshold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74356,(0),null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74356,(1),null);return cljs.core.cons((function (){var G__74357 = {"className": "tbl-cell", "style": {"backgroundColor": color, "color": clustermap.formats.color.stand_out_color(color)}};var G__74358 = sablono.interpreter.interpret(clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(threshold,cljs.core.array_seq([cljs.core.constant$keyword$1315,(2),cljs.core.constant$keyword$1346,"",cljs.core.constant$keyword$1111,""], 0)));return React.DOM.div(G__74357,G__74358);
})(),iter__74341(cljs.core.rest(s__74342__$2)));
}
} else
{return null;
}
break;
}
});})(G__74339,G__74337,G__74335,this__10071__auto____$1))
,null,null));
});})(G__74339,G__74337,G__74335,this__10071__auto____$1))
;return iter__4375__auto__(self__.threshold_colors);
})());return React.DOM.div(G__74339,G__74340);
})();return React.DOM.div(G__74337,G__74338);
})();return React.DOM.div(G__74335,G__74336);
});
clustermap.components.color_scale.t74332.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_74334){var self__ = this;
var _74334__$1 = this;return self__.meta74333;
});
clustermap.components.color_scale.t74332.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_74334,meta74333__$1){var self__ = this;
var _74334__$1 = this;return (new clustermap.components.color_scale.t74332(self__.owner,self__.threshold_colors,self__.color_scale_component,meta74333__$1));
});
clustermap.components.color_scale.__GT_t74332 = (function __GT_t74332(owner__$1,threshold_colors__$1,color_scale_component__$1,meta74333){return (new clustermap.components.color_scale.t74332(owner__$1,threshold_colors__$1,color_scale_component__$1,meta74333));
});
}
return (new clustermap.components.color_scale.t74332(owner,threshold_colors,color_scale_component,null));
});
