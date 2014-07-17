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
clustermap.components.color_scale.color_scale_component = (function color_scale_component(threshold_colors,owner){if(typeof clustermap.components.color_scale.t36638 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.color_scale.t36638 = (function (owner,threshold_colors,color_scale_component,meta36639){
this.owner = owner;
this.threshold_colors = threshold_colors;
this.color_scale_component = color_scale_component;
this.meta36639 = meta36639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.color_scale.t36638.cljs$lang$type = true;
clustermap.components.color_scale.t36638.cljs$lang$ctorStr = "clustermap.components.color-scale/t36638";
clustermap.components.color_scale.t36638.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.color-scale/t36638");
});
clustermap.components.color_scale.t36638.prototype.om$core$IRender$ = true;
clustermap.components.color_scale.t36638.prototype.om$core$IRender$render$arity$1 = (function (this__9454__auto__){var self__ = this;
var this__9454__auto____$1 = this;return React.DOM.div({"className": "color-scale"},React.DOM.div({"className": "tbl"},React.DOM.div({"className": "tbl-row"},cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4268__auto__ = ((function (this__9454__auto____$1){
return (function iter__36641(s__36642){return (new cljs.core.LazySeq(null,((function (this__9454__auto____$1){
return (function (){var s__36642__$1 = s__36642;while(true){
var temp__4126__auto__ = cljs.core.seq(s__36642__$1);if(temp__4126__auto__)
{var s__36642__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_(s__36642__$2))
{var c__4266__auto__ = cljs.core.chunk_first(s__36642__$2);var size__4267__auto__ = cljs.core.count(c__4266__auto__);var b__36644 = cljs.core.chunk_buffer(size__4267__auto__);if((function (){var i__36643 = (0);while(true){
if((i__36643 < size__4267__auto__))
{var vec__36647 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4266__auto__,i__36643);var threshold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36647,(0),null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36647,(1),null);cljs.core.chunk_append(b__36644,React.DOM.div({"className": "tbl-cell", "style": {"background-color": color}},sablono.interpreter.interpret(clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(threshold,cljs.core.array_seq([cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$883,"",cljs.core.constant$keyword$763,""], 0)))));
{
var G__36649 = (i__36643 + (1));
i__36643 = G__36649;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__36644),iter__36641(cljs.core.chunk_rest(s__36642__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__36644),null);
}
} else
{var vec__36648 = cljs.core.first(s__36642__$2);var threshold = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36648,(0),null);var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36648,(1),null);return cljs.core.cons(React.DOM.div({"className": "tbl-cell", "style": {"background-color": color}},sablono.interpreter.interpret(clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(threshold,cljs.core.array_seq([cljs.core.constant$keyword$811,(2),cljs.core.constant$keyword$883,"",cljs.core.constant$keyword$763,""], 0)))),iter__36641(cljs.core.rest(s__36642__$2)));
}
} else
{return null;
}
break;
}
});})(this__9454__auto____$1))
,null,null));
});})(this__9454__auto____$1))
;return iter__4268__auto__(self__.threshold_colors);
})()))));
});
clustermap.components.color_scale.t36638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36640){var self__ = this;
var _36640__$1 = this;return self__.meta36639;
});
clustermap.components.color_scale.t36638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36640,meta36639__$1){var self__ = this;
var _36640__$1 = this;return (new clustermap.components.color_scale.t36638(self__.owner,self__.threshold_colors,self__.color_scale_component,meta36639__$1));
});
clustermap.components.color_scale.__GT_t36638 = (function __GT_t36638(owner__$1,threshold_colors__$1,color_scale_component__$1,meta36639){return (new clustermap.components.color_scale.t36638(owner__$1,threshold_colors__$1,color_scale_component__$1,meta36639));
});
}
return (new clustermap.components.color_scale.t36638(owner,threshold_colors,color_scale_component,null));
});
clustermap.components.color_scale.mount = (function mount(app_state,path,elem_id,shared){return om.core.root(clustermap.components.color_scale.color_scale_component,app_state,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$879,shared,cljs.core.constant$keyword$882,document.getElementById(elem_id),cljs.core.constant$keyword$854,path], null));
});
