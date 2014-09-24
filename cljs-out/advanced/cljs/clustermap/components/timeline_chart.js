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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__38952){var map__38954 = p__38952;var map__38954__$1 = ((cljs.core.seq_QMARK_(map__38954))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38954):map__38954);var opts = map__38954__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38954__$1,cljs.core.constant$keyword$999);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38954__$1,cljs.core.constant$keyword$1000);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1001,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1002,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,map__38954,map__38954__$1,opts,y1_title,y0_title){
return (function (p1__38946_SHARP_){return clustermap.formats.number.round_decimal(p1__38946_SHARP_,(0));
});})(x_labels,stats,map__38954,map__38954__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__38954,map__38954__$1,opts,y1_title,y0_title){
return (function (p1__38947_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38947_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1002,cljs.core.constant$keyword$1003], null));
});})(x_labels,stats,map__38954,map__38954__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,map__38954,map__38954__$1,opts,y1_title,y0_title){
return (function (p1__38948_SHARP_){return clustermap.formats.number.round_decimal(p1__38948_SHARP_,(0));
});})(x_labels,stats,y_median,map__38954,map__38954__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__38954,map__38954__$1,opts,y1_title,y0_title){
return (function (p1__38949_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38949_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1002,cljs.core.constant$keyword$1004], null));
});})(x_labels,stats,y_median,map__38954,map__38954__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean,map__38954,map__38954__$1,opts,y1_title,y0_title){
return (function (p1__38950_SHARP_){return clustermap.formats.number.round_decimal(p1__38950_SHARP_,(0));
});})(x_labels,stats,y_median,y_mean,map__38954,map__38954__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__38954,map__38954__$1,opts,y1_title,y0_title){
return (function (p1__38951_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38951_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1002,cljs.core.constant$keyword$1005], null));
});})(x_labels,stats,y_median,y_mean,map__38954,map__38954__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1006,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1011,null,cljs.core.constant$keyword$1012,(300)], null),cljs.core.constant$keyword$1007,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1013,null], null),cljs.core.constant$keyword$1008,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1014,x_labels,cljs.core.constant$keyword$1015,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1016,(270)], null)], null),cljs.core.constant$keyword$1009,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1007,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1013,y0_title], null),cljs.core.constant$keyword$1017,(0),cljs.core.constant$keyword$1015,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1018,((function (x_labels,stats,y_median,y_mean,y_total,map__38954,map__38954__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$963,""], 0));
});})(x_labels,stats,y_median,y_mean,y_total,map__38954,map__38954__$1,opts,y1_title,y0_title))
], null)], null)], null),cljs.core.constant$keyword$1010,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$912,("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),cljs.core.constant$keyword$880,"line",cljs.core.constant$keyword$1009,(0),cljs.core.constant$keyword$994,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__38955){var map__38960 = p__38955;var map__38960__$1 = ((cljs.core.seq_QMARK_(map__38960))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38960):map__38960);var opts = map__38960__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38960__$1,cljs.core.constant$keyword$882);if(typeof clustermap.components.timeline_chart.t38961 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t38961 = (function (id,opts,map__38960,p__38955,owner,data,timeline_chart,meta38962){
this.id = id;
this.opts = opts;
this.map__38960 = map__38960;
this.p__38955 = p__38955;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta38962 = meta38962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t38961.cljs$lang$type = true;
clustermap.components.timeline_chart.t38961.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t38961";
clustermap.components.timeline_chart.t38961.cljs$lang$ctorPrWriter = ((function (map__38960,map__38960__$1,opts,id){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.timeline-chart/t38961");
});})(map__38960,map__38960__$1,opts,id))
;
clustermap.components.timeline_chart.t38961.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t38961.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__38960,map__38960__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});})(map__38960,map__38960__$1,opts,id))
;
clustermap.components.timeline_chart.t38961.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t38961.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__38960,map__38960__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",((function (node,this$__$1,map__38960,map__38960__$1,opts,id){
return (function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__38960,map__38960__$1,opts,id))
);
});})(map__38960,map__38960__$1,opts,id))
;
clustermap.components.timeline_chart.t38961.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t38961.prototype.om$core$IRender$render$arity$1 = ((function (map__38960,map__38960__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__38960,map__38960__$1,opts,id))
;
clustermap.components.timeline_chart.t38961.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38960,map__38960__$1,opts,id){
return (function (_38963){var self__ = this;
var _38963__$1 = this;return self__.meta38962;
});})(map__38960,map__38960__$1,opts,id))
;
clustermap.components.timeline_chart.t38961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38960,map__38960__$1,opts,id){
return (function (_38963,meta38962__$1){var self__ = this;
var _38963__$1 = this;return (new clustermap.components.timeline_chart.t38961(self__.id,self__.opts,self__.map__38960,self__.p__38955,self__.owner,self__.data,self__.timeline_chart,meta38962__$1));
});})(map__38960,map__38960__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t38961 = ((function (map__38960,map__38960__$1,opts,id){
return (function __GT_t38961(id__$1,opts__$1,map__38960__$2,p__38955__$1,owner__$1,data__$1,timeline_chart__$1,meta38962){return (new clustermap.components.timeline_chart.t38961(id__$1,opts__$1,map__38960__$2,p__38955__$1,owner__$1,data__$1,timeline_chart__$1,meta38962));
});})(map__38960,map__38960__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t38961(id,opts,map__38960__$1,p__38955,owner,data,timeline_chart,null));
});
