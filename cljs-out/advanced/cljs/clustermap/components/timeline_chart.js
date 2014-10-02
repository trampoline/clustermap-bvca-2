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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__40173){var map__40175 = p__40173;var map__40175__$1 = ((cljs.core.seq_QMARK_(map__40175))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40175):map__40175);var opts = map__40175__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40175__$1,cljs.core.constant$keyword$1049);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40175__$1,cljs.core.constant$keyword$1050);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1051,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1052,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,map__40175,map__40175__$1,opts,y1_title,y0_title){
return (function (p1__40167_SHARP_){return clustermap.formats.number.round_decimal(p1__40167_SHARP_,(0));
});})(x_labels,stats,map__40175,map__40175__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__40175,map__40175__$1,opts,y1_title,y0_title){
return (function (p1__40168_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__40168_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1052,cljs.core.constant$keyword$1053], null));
});})(x_labels,stats,map__40175,map__40175__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,map__40175,map__40175__$1,opts,y1_title,y0_title){
return (function (p1__40169_SHARP_){return clustermap.formats.number.round_decimal(p1__40169_SHARP_,(0));
});})(x_labels,stats,y_median,map__40175,map__40175__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__40175,map__40175__$1,opts,y1_title,y0_title){
return (function (p1__40170_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__40170_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1052,cljs.core.constant$keyword$1054], null));
});})(x_labels,stats,y_median,map__40175,map__40175__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean,map__40175,map__40175__$1,opts,y1_title,y0_title){
return (function (p1__40171_SHARP_){return clustermap.formats.number.round_decimal(p1__40171_SHARP_,(0));
});})(x_labels,stats,y_median,y_mean,map__40175,map__40175__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__40175,map__40175__$1,opts,y1_title,y0_title){
return (function (p1__40172_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__40172_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1052,cljs.core.constant$keyword$1055], null));
});})(x_labels,stats,y_median,y_mean,map__40175,map__40175__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1056,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1061,null,cljs.core.constant$keyword$1062,(300)], null),cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1063,null], null),cljs.core.constant$keyword$1058,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1064,x_labels,cljs.core.constant$keyword$1065,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1066,(270)], null)], null),cljs.core.constant$keyword$1059,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1063,y0_title], null),cljs.core.constant$keyword$1067,(0),cljs.core.constant$keyword$1065,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1068,((function (x_labels,stats,y_median,y_mean,y_total,map__40175,map__40175__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$1011,""], 0));
});})(x_labels,stats,y_median,y_mean,y_total,map__40175,map__40175__$1,opts,y1_title,y0_title))
], null)], null)], null),cljs.core.constant$keyword$1060,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$941,("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),cljs.core.constant$keyword$912,"line",cljs.core.constant$keyword$1059,(0),cljs.core.constant$keyword$999,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__40176){var map__40181 = p__40176;var map__40181__$1 = ((cljs.core.seq_QMARK_(map__40181))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40181):map__40181);var opts = map__40181__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40181__$1,cljs.core.constant$keyword$914);if(typeof clustermap.components.timeline_chart.t40182 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t40182 = (function (id,opts,map__40181,p__40176,owner,data,timeline_chart,meta40183){
this.id = id;
this.opts = opts;
this.map__40181 = map__40181;
this.p__40176 = p__40176;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta40183 = meta40183;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t40182.cljs$lang$type = true;
clustermap.components.timeline_chart.t40182.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t40182";
clustermap.components.timeline_chart.t40182.cljs$lang$ctorPrWriter = ((function (map__40181,map__40181__$1,opts,id){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.timeline-chart/t40182");
});})(map__40181,map__40181__$1,opts,id))
;
clustermap.components.timeline_chart.t40182.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t40182.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__40181,map__40181__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});})(map__40181,map__40181__$1,opts,id))
;
clustermap.components.timeline_chart.t40182.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t40182.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__40181,map__40181__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",((function (node,this$__$1,map__40181,map__40181__$1,opts,id){
return (function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__40181,map__40181__$1,opts,id))
);
});})(map__40181,map__40181__$1,opts,id))
;
clustermap.components.timeline_chart.t40182.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t40182.prototype.om$core$IRender$render$arity$1 = ((function (map__40181,map__40181__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__40181,map__40181__$1,opts,id))
;
clustermap.components.timeline_chart.t40182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40181,map__40181__$1,opts,id){
return (function (_40184){var self__ = this;
var _40184__$1 = this;return self__.meta40183;
});})(map__40181,map__40181__$1,opts,id))
;
clustermap.components.timeline_chart.t40182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40181,map__40181__$1,opts,id){
return (function (_40184,meta40183__$1){var self__ = this;
var _40184__$1 = this;return (new clustermap.components.timeline_chart.t40182(self__.id,self__.opts,self__.map__40181,self__.p__40176,self__.owner,self__.data,self__.timeline_chart,meta40183__$1));
});})(map__40181,map__40181__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t40182 = ((function (map__40181,map__40181__$1,opts,id){
return (function __GT_t40182(id__$1,opts__$1,map__40181__$2,p__40176__$1,owner__$1,data__$1,timeline_chart__$1,meta40183){return (new clustermap.components.timeline_chart.t40182(id__$1,opts__$1,map__40181__$2,p__40176__$1,owner__$1,data__$1,timeline_chart__$1,meta40183));
});})(map__40181,map__40181__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t40182(id,opts,map__40181__$1,p__40176,owner,data,timeline_chart,null));
});
