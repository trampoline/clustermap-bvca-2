// Compiled by ClojureScript 0.0-2261
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('clustermap.formats.number');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('hiccups.runtime');
goog.require('sablono.core');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('clojure.set');
goog.require('jayq.core');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('hiccups.runtime');
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__37593){var map__37595 = p__37593;var map__37595__$1 = ((cljs.core.seq_QMARK_(map__37595))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37595):map__37595);var opts = map__37595__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37595__$1,cljs.core.constant$keyword$915);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37595__$1,cljs.core.constant$keyword$916);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$917,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$918,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,map__37595,map__37595__$1,opts,y1_title,y0_title){
return (function (p1__37587_SHARP_){return clustermap.formats.number.round_decimal(p1__37587_SHARP_,(0));
});})(x_labels,stats,map__37595,map__37595__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__37595,map__37595__$1,opts,y1_title,y0_title){
return (function (p1__37588_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__37588_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$918,cljs.core.constant$keyword$919], null));
});})(x_labels,stats,map__37595,map__37595__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,map__37595,map__37595__$1,opts,y1_title,y0_title){
return (function (p1__37589_SHARP_){return clustermap.formats.number.round_decimal(p1__37589_SHARP_,(0));
});})(x_labels,stats,y_median,map__37595,map__37595__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__37595,map__37595__$1,opts,y1_title,y0_title){
return (function (p1__37590_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__37590_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$918,cljs.core.constant$keyword$920], null));
});})(x_labels,stats,y_median,map__37595,map__37595__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean,map__37595,map__37595__$1,opts,y1_title,y0_title){
return (function (p1__37591_SHARP_){return clustermap.formats.number.round_decimal(p1__37591_SHARP_,(0));
});})(x_labels,stats,y_median,y_mean,map__37595,map__37595__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__37595,map__37595__$1,opts,y1_title,y0_title){
return (function (p1__37592_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__37592_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$918,cljs.core.constant$keyword$921], null));
});})(x_labels,stats,y_median,y_mean,map__37595,map__37595__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$922,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$927,null,cljs.core.constant$keyword$928,(300)], null),cljs.core.constant$keyword$923,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$929,null], null),cljs.core.constant$keyword$924,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$930,x_labels,cljs.core.constant$keyword$931,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$932,(270)], null)], null),cljs.core.constant$keyword$925,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$923,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$929,y0_title], null),cljs.core.constant$keyword$933,(0),cljs.core.constant$keyword$931,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$934,((function (x_labels,stats,y_median,y_mean,y_total,map__37595,map__37595__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$879,""], 0));
});})(x_labels,stats,y_median,y_mean,y_total,map__37595,map__37595__$1,opts,y1_title,y0_title))
], null)], null)], null),cljs.core.constant$keyword$926,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$827,("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),cljs.core.constant$keyword$797,"line",cljs.core.constant$keyword$925,(0),cljs.core.constant$keyword$910,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__37596){var map__37601 = p__37596;var map__37601__$1 = ((cljs.core.seq_QMARK_(map__37601))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37601):map__37601);var opts = map__37601__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37601__$1,cljs.core.constant$keyword$799);if(typeof clustermap.components.timeline_chart.t37602 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t37602 = (function (id,opts,map__37601,p__37596,owner,data,timeline_chart,meta37603){
this.id = id;
this.opts = opts;
this.map__37601 = map__37601;
this.p__37596 = p__37596;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta37603 = meta37603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t37602.cljs$lang$type = true;
clustermap.components.timeline_chart.t37602.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t37602";
clustermap.components.timeline_chart.t37602.cljs$lang$ctorPrWriter = ((function (map__37601,map__37601__$1,opts,id){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.timeline-chart/t37602");
});})(map__37601,map__37601__$1,opts,id))
;
clustermap.components.timeline_chart.t37602.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t37602.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__37601,map__37601__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});})(map__37601,map__37601__$1,opts,id))
;
clustermap.components.timeline_chart.t37602.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t37602.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__37601,map__37601__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",((function (node,this$__$1,map__37601,map__37601__$1,opts,id){
return (function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__37601,map__37601__$1,opts,id))
);
});})(map__37601,map__37601__$1,opts,id))
;
clustermap.components.timeline_chart.t37602.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t37602.prototype.om$core$IRender$render$arity$1 = ((function (map__37601,map__37601__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__37601,map__37601__$1,opts,id))
;
clustermap.components.timeline_chart.t37602.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37601,map__37601__$1,opts,id){
return (function (_37604){var self__ = this;
var _37604__$1 = this;return self__.meta37603;
});})(map__37601,map__37601__$1,opts,id))
;
clustermap.components.timeline_chart.t37602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37601,map__37601__$1,opts,id){
return (function (_37604,meta37603__$1){var self__ = this;
var _37604__$1 = this;return (new clustermap.components.timeline_chart.t37602(self__.id,self__.opts,self__.map__37601,self__.p__37596,self__.owner,self__.data,self__.timeline_chart,meta37603__$1));
});})(map__37601,map__37601__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t37602 = ((function (map__37601,map__37601__$1,opts,id){
return (function __GT_t37602(id__$1,opts__$1,map__37601__$2,p__37596__$1,owner__$1,data__$1,timeline_chart__$1,meta37603){return (new clustermap.components.timeline_chart.t37602(id__$1,opts__$1,map__37601__$2,p__37596__$1,owner__$1,data__$1,timeline_chart__$1,meta37603));
});})(map__37601,map__37601__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t37602(id,opts,map__37601__$1,p__37596,owner,data,timeline_chart,null));
});
