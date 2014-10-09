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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__40818){var map__40820 = p__40818;var map__40820__$1 = ((cljs.core.seq_QMARK_(map__40820))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40820):map__40820);var opts = map__40820__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40820__$1,cljs.core.constant$keyword$1041);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40820__$1,cljs.core.constant$keyword$1042);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1043,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$1044,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,map__40820,map__40820__$1,opts,y1_title,y0_title){
return (function (p1__40812_SHARP_){return clustermap.formats.number.round_decimal(p1__40812_SHARP_,(0));
});})(x_labels,stats,map__40820,map__40820__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__40820,map__40820__$1,opts,y1_title,y0_title){
return (function (p1__40813_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__40813_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1044,cljs.core.constant$keyword$1045], null));
});})(x_labels,stats,map__40820,map__40820__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,map__40820,map__40820__$1,opts,y1_title,y0_title){
return (function (p1__40814_SHARP_){return clustermap.formats.number.round_decimal(p1__40814_SHARP_,(0));
});})(x_labels,stats,y_median,map__40820,map__40820__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__40820,map__40820__$1,opts,y1_title,y0_title){
return (function (p1__40815_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__40815_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1044,cljs.core.constant$keyword$1046], null));
});})(x_labels,stats,y_median,map__40820,map__40820__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean,map__40820,map__40820__$1,opts,y1_title,y0_title){
return (function (p1__40816_SHARP_){return clustermap.formats.number.round_decimal(p1__40816_SHARP_,(0));
});})(x_labels,stats,y_median,y_mean,map__40820,map__40820__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__40820,map__40820__$1,opts,y1_title,y0_title){
return (function (p1__40817_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__40817_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1044,cljs.core.constant$keyword$1047], null));
});})(x_labels,stats,y_median,y_mean,map__40820,map__40820__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$1048,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1053,null,cljs.core.constant$keyword$1054,(300)], null),cljs.core.constant$keyword$1049,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1055,null], null),cljs.core.constant$keyword$1050,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$1056,x_labels,cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1058,(270)], null)], null),cljs.core.constant$keyword$1051,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$1049,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1055,y0_title], null),cljs.core.constant$keyword$1059,(0),cljs.core.constant$keyword$1057,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$1060,((function (x_labels,stats,y_median,y_mean,y_total,map__40820,map__40820__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$1003,""], 0));
});})(x_labels,stats,y_median,y_mean,y_total,map__40820,map__40820__$1,opts,y1_title,y0_title))
], null)], null)], null),cljs.core.constant$keyword$1052,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$933,("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),cljs.core.constant$keyword$904,"line",cljs.core.constant$keyword$1051,(0),cljs.core.constant$keyword$992,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__40821){var map__40826 = p__40821;var map__40826__$1 = ((cljs.core.seq_QMARK_(map__40826))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40826):map__40826);var opts = map__40826__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40826__$1,cljs.core.constant$keyword$906);if(typeof clustermap.components.timeline_chart.t40827 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t40827 = (function (id,opts,map__40826,p__40821,owner,data,timeline_chart,meta40828){
this.id = id;
this.opts = opts;
this.map__40826 = map__40826;
this.p__40821 = p__40821;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta40828 = meta40828;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t40827.cljs$lang$type = true;
clustermap.components.timeline_chart.t40827.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t40827";
clustermap.components.timeline_chart.t40827.cljs$lang$ctorPrWriter = ((function (map__40826,map__40826__$1,opts,id){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.timeline-chart/t40827");
});})(map__40826,map__40826__$1,opts,id))
;
clustermap.components.timeline_chart.t40827.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t40827.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__40826,map__40826__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});})(map__40826,map__40826__$1,opts,id))
;
clustermap.components.timeline_chart.t40827.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t40827.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__40826,map__40826__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",((function (node,this$__$1,map__40826,map__40826__$1,opts,id){
return (function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__40826,map__40826__$1,opts,id))
);
});})(map__40826,map__40826__$1,opts,id))
;
clustermap.components.timeline_chart.t40827.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t40827.prototype.om$core$IRender$render$arity$1 = ((function (map__40826,map__40826__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__40826,map__40826__$1,opts,id))
;
clustermap.components.timeline_chart.t40827.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40826,map__40826__$1,opts,id){
return (function (_40829){var self__ = this;
var _40829__$1 = this;return self__.meta40828;
});})(map__40826,map__40826__$1,opts,id))
;
clustermap.components.timeline_chart.t40827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40826,map__40826__$1,opts,id){
return (function (_40829,meta40828__$1){var self__ = this;
var _40829__$1 = this;return (new clustermap.components.timeline_chart.t40827(self__.id,self__.opts,self__.map__40826,self__.p__40821,self__.owner,self__.data,self__.timeline_chart,meta40828__$1));
});})(map__40826,map__40826__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t40827 = ((function (map__40826,map__40826__$1,opts,id){
return (function __GT_t40827(id__$1,opts__$1,map__40826__$2,p__40821__$1,owner__$1,data__$1,timeline_chart__$1,meta40828){return (new clustermap.components.timeline_chart.t40827(id__$1,opts__$1,map__40826__$2,p__40821__$1,owner__$1,data__$1,timeline_chart__$1,meta40828));
});})(map__40826,map__40826__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t40827(id,opts,map__40826__$1,p__40821,owner,data,timeline_chart,null));
});
