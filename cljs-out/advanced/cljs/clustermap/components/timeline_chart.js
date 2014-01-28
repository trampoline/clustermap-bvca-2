// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('jayq.core');
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__21437){var map__21439 = p__21437;var map__21439__$1 = ((cljs.core.seq_QMARK_(map__21439))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21439):map__21439);var opts = map__21439__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.constant$keyword$289);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21439__$1,cljs.core.constant$keyword$290);console.log(cljs.core.clj__GT_js(opts));
var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$291,data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$269,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$271,data);var y_count = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$292,data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$297,null], null),cljs.core.constant$keyword$294,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$298,x_labels,cljs.core.constant$keyword$299,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$300,270], null)], null),cljs.core.constant$keyword$295,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$297,y0_title], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$293,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$297,y1_title], null),cljs.core.constant$keyword$301,true], null)], null),cljs.core.constant$keyword$296,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$228,y0_title,cljs.core.constant$keyword$217,"column",cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$284,y_total], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$228,[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$217,"line",cljs.core.constant$keyword$295,0,cljs.core.constant$keyword$284,y_mean], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$228,y1_title,cljs.core.constant$keyword$217,"line",cljs.core.constant$keyword$295,1,cljs.core.constant$keyword$284,y_count], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,opts){console.log(cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OPTS:",opts], null)));
if(typeof clustermap.components.timeline_chart.t21447 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t21447 = (function (opts,owner,data,timeline_chart,meta21448){
this.opts = opts;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta21448 = meta21448;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t21447.cljs$lang$type = true;
clustermap.components.timeline_chart.t21447.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t21447";
clustermap.components.timeline_chart.t21447.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t21447");
});
clustermap.components.timeline_chart.t21447.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t21447.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(cljs.core.deref(self__.data),om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t21447.prototype.om$core$IRenderState$ = true;
clustermap.components.timeline_chart.t21447.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__21450){var self__ = this;
var map__21451 = p__21450;var map__21451__$1 = ((cljs.core.seq_QMARK_(map__21451))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21451):map__21451);var rendered_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21451__$1,cljs.core.constant$keyword$302);var this$__$1 = this;var new_data_21454 = cljs.core.deref(self__.data);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rendered_data,new_data_21454))
{} else
{om.core.set_state_BANG_(self__.owner,cljs.core.constant$keyword$302,new_data_21454);
}
return React.DOM.div({"className": "timeline-chart", "ref": "chart"});
});
clustermap.components.timeline_chart.t21447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21449){var self__ = this;
var _21449__$1 = this;return self__.meta21448;
});
clustermap.components.timeline_chart.t21447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21449,meta21448__$1){var self__ = this;
var _21449__$1 = this;return (new clustermap.components.timeline_chart.t21447(self__.opts,self__.owner,self__.data,self__.timeline_chart,meta21448__$1));
});
clustermap.components.timeline_chart.__GT_t21447 = (function __GT_t21447(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta21448){return (new clustermap.components.timeline_chart.t21447(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta21448));
});
}
return (new clustermap.components.timeline_chart.t21447(opts,owner,data,timeline_chart,null));
});
