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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__21903){var map__21905 = p__21903;var map__21905__$1 = ((cljs.core.seq_QMARK_(map__21905))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21905):map__21905);var opts = map__21905__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21905__$1,cljs.core.constant$keyword$294);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21905__$1,cljs.core.constant$keyword$295);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$273,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$275,data);var y_count = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$298,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$303,null], null),cljs.core.constant$keyword$299,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$304,null], null),cljs.core.constant$keyword$300,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,x_labels,cljs.core.constant$keyword$306,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$307,270], null)], null),cljs.core.constant$keyword$301,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$299,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$304,y0_title], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$299,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$304,y1_title], null),cljs.core.constant$keyword$308,true], null)], null),cljs.core.constant$keyword$302,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$232,y0_title,cljs.core.constant$keyword$221,"column",cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$289,y_total], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$232,[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$221,"line",cljs.core.constant$keyword$301,0,cljs.core.constant$keyword$289,y_mean], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$232,y1_title,cljs.core.constant$keyword$221,"line",cljs.core.constant$keyword$301,1,cljs.core.constant$keyword$289,y_count], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,opts){if(typeof clustermap.components.timeline_chart.t21911 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t21911 = (function (opts,owner,data,timeline_chart,meta21912){
this.opts = opts;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta21912 = meta21912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t21911.cljs$lang$type = true;
clustermap.components.timeline_chart.t21911.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t21911";
clustermap.components.timeline_chart.t21911.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t21911");
});
clustermap.components.timeline_chart.t21911.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t21911.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(cljs.core.deref(self__.data),om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t21911.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t21911.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(cljs.core.deref(self__.data),om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t21911.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t21911.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "ref": "chart"});
});
clustermap.components.timeline_chart.t21911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21913){var self__ = this;
var _21913__$1 = this;return self__.meta21912;
});
clustermap.components.timeline_chart.t21911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21913,meta21912__$1){var self__ = this;
var _21913__$1 = this;return (new clustermap.components.timeline_chart.t21911(self__.opts,self__.owner,self__.data,self__.timeline_chart,meta21912__$1));
});
clustermap.components.timeline_chart.__GT_t21911 = (function __GT_t21911(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta21912){return (new clustermap.components.timeline_chart.t21911(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta21912));
});
}
return (new clustermap.components.timeline_chart.t21911(opts,owner,data,timeline_chart,null));
});
