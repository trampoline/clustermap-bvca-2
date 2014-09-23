// Compiled by ClojureScript 0.0-2322
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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__38880){var map__38882 = p__38880;var map__38882__$1 = ((cljs.core.seq_QMARK_(map__38882))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38882):map__38882);var opts = map__38882__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38882__$1,cljs.core.constant$keyword$990);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38882__$1,cljs.core.constant$keyword$991);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$992,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$993,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,map__38882,map__38882__$1,opts,y1_title,y0_title){
return (function (p1__38874_SHARP_){return clustermap.formats.number.round_decimal(p1__38874_SHARP_,(0));
});})(x_labels,stats,map__38882,map__38882__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__38882,map__38882__$1,opts,y1_title,y0_title){
return (function (p1__38875_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38875_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$993,cljs.core.constant$keyword$994], null));
});})(x_labels,stats,map__38882,map__38882__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,map__38882,map__38882__$1,opts,y1_title,y0_title){
return (function (p1__38876_SHARP_){return clustermap.formats.number.round_decimal(p1__38876_SHARP_,(0));
});})(x_labels,stats,y_median,map__38882,map__38882__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__38882,map__38882__$1,opts,y1_title,y0_title){
return (function (p1__38877_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38877_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$993,cljs.core.constant$keyword$995], null));
});})(x_labels,stats,y_median,map__38882,map__38882__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean,map__38882,map__38882__$1,opts,y1_title,y0_title){
return (function (p1__38878_SHARP_){return clustermap.formats.number.round_decimal(p1__38878_SHARP_,(0));
});})(x_labels,stats,y_median,y_mean,map__38882,map__38882__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__38882,map__38882__$1,opts,y1_title,y0_title){
return (function (p1__38879_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38879_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$993,cljs.core.constant$keyword$996], null));
});})(x_labels,stats,y_median,y_mean,map__38882,map__38882__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$997,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1002,null,cljs.core.constant$keyword$1003,(300)], null),cljs.core.constant$keyword$998,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1004,null], null),cljs.core.constant$keyword$999,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1005,x_labels,cljs.core.constant$keyword$1006,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1007,(270)], null)], null),cljs.core.constant$keyword$1000,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$998,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1004,y0_title], null),cljs.core.constant$keyword$1008,(0),cljs.core.constant$keyword$1006,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1009,((function (x_labels,stats,y_median,y_mean,y_total,map__38882,map__38882__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$954,""], 0));
});})(x_labels,stats,y_median,y_mean,y_total,map__38882,map__38882__$1,opts,y1_title,y0_title))
], null)], null)], null),cljs.core.constant$keyword$1001,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$903,("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),cljs.core.constant$keyword$871,"line",cljs.core.constant$keyword$1000,(0),cljs.core.constant$keyword$985,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__38883){var map__38888 = p__38883;var map__38888__$1 = ((cljs.core.seq_QMARK_(map__38888))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38888):map__38888);var opts = map__38888__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38888__$1,cljs.core.constant$keyword$873);if(typeof clustermap.components.timeline_chart.t38889 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t38889 = (function (id,opts,map__38888,p__38883,owner,data,timeline_chart,meta38890){
this.id = id;
this.opts = opts;
this.map__38888 = map__38888;
this.p__38883 = p__38883;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta38890 = meta38890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t38889.cljs$lang$type = true;
clustermap.components.timeline_chart.t38889.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t38889";
clustermap.components.timeline_chart.t38889.cljs$lang$ctorPrWriter = ((function (map__38888,map__38888__$1,opts,id){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.timeline-chart/t38889");
});})(map__38888,map__38888__$1,opts,id))
;
clustermap.components.timeline_chart.t38889.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t38889.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__38888,map__38888__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});})(map__38888,map__38888__$1,opts,id))
;
clustermap.components.timeline_chart.t38889.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t38889.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__38888,map__38888__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",((function (node,this$__$1,map__38888,map__38888__$1,opts,id){
return (function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__38888,map__38888__$1,opts,id))
);
});})(map__38888,map__38888__$1,opts,id))
;
clustermap.components.timeline_chart.t38889.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t38889.prototype.om$core$IRender$render$arity$1 = ((function (map__38888,map__38888__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__38888,map__38888__$1,opts,id))
;
clustermap.components.timeline_chart.t38889.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38888,map__38888__$1,opts,id){
return (function (_38891){var self__ = this;
var _38891__$1 = this;return self__.meta38890;
});})(map__38888,map__38888__$1,opts,id))
;
clustermap.components.timeline_chart.t38889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38888,map__38888__$1,opts,id){
return (function (_38891,meta38890__$1){var self__ = this;
var _38891__$1 = this;return (new clustermap.components.timeline_chart.t38889(self__.id,self__.opts,self__.map__38888,self__.p__38883,self__.owner,self__.data,self__.timeline_chart,meta38890__$1));
});})(map__38888,map__38888__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t38889 = ((function (map__38888,map__38888__$1,opts,id){
return (function __GT_t38889(id__$1,opts__$1,map__38888__$2,p__38883__$1,owner__$1,data__$1,timeline_chart__$1,meta38890){return (new clustermap.components.timeline_chart.t38889(id__$1,opts__$1,map__38888__$2,p__38883__$1,owner__$1,data__$1,timeline_chart__$1,meta38890));
});})(map__38888,map__38888__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t38889(id,opts,map__38888__$1,p__38883,owner,data,timeline_chart,null));
});
