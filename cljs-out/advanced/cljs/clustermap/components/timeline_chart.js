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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__22239){var map__22241 = p__22239;var map__22241__$1 = ((cljs.core.seq_QMARK_(map__22241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22241):map__22241);var opts = map__22241__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22241__$1,cljs.core.constant$keyword$321);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22241__$1,cljs.core.constant$keyword$322);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$323,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,data);var y_count = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$324,data);var yt = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x_labels,y_mean,y_count){
return (function (t){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$325,t], null);
});})(x_labels,y_mean,y_count))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$294,data));var y_total = cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(yt),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(yt),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$326,"#FF9900",cljs.core.constant$keyword$252,"Not all data received for year"], null)], 0))], null)));return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$327,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$332,null], null),cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$333,null], null),cljs.core.constant$keyword$329,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$334,x_labels,cljs.core.constant$keyword$335,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$336,270], null)], null),cljs.core.constant$keyword$330,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$333,y0_title], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$328,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$333,y1_title], null),cljs.core.constant$keyword$337,true], null)], null),cljs.core.constant$keyword$331,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$252,y0_title,cljs.core.constant$keyword$242,"column",cljs.core.constant$keyword$330,0,cljs.core.constant$keyword$316,y_total], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$252,[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$242,"line",cljs.core.constant$keyword$330,0,cljs.core.constant$keyword$316,y_mean], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$252,y1_title,cljs.core.constant$keyword$242,"line",cljs.core.constant$keyword$330,1,cljs.core.constant$keyword$316,y_count], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,opts){if(typeof clustermap.components.timeline_chart.t22247 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t22247 = (function (opts,owner,data,timeline_chart,meta22248){
this.opts = opts;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta22248 = meta22248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t22247.cljs$lang$type = true;
clustermap.components.timeline_chart.t22247.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t22247";
clustermap.components.timeline_chart.t22247.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t22247");
});
clustermap.components.timeline_chart.t22247.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t22247.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t22247.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t22247.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t22247.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t22247.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "ref": "chart"});
});
clustermap.components.timeline_chart.t22247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22249){var self__ = this;
var _22249__$1 = this;return self__.meta22248;
});
clustermap.components.timeline_chart.t22247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22249,meta22248__$1){var self__ = this;
var _22249__$1 = this;return (new clustermap.components.timeline_chart.t22247(self__.opts,self__.owner,self__.data,self__.timeline_chart,meta22248__$1));
});
clustermap.components.timeline_chart.__GT_t22247 = (function __GT_t22247(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta22248){return (new clustermap.components.timeline_chart.t22247(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta22248));
});
}
return (new clustermap.components.timeline_chart.t22247(opts,owner,data,timeline_chart,null));
});
