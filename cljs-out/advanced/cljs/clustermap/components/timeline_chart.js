// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('clustermap.formats.number');
goog.require('jayq.core');
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__34830){var map__34832 = p__34830;var map__34832__$1 = ((cljs.core.seq_QMARK_(map__34832))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34832):map__34832);var opts = map__34832__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34832__$1,cljs.core.constant$keyword$706);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34832__$1,cljs.core.constant$keyword$707);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$708,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$709,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats){
return (function (p1__34826_SHARP_){return clustermap.formats.number.round_decimal(p1__34826_SHARP_,0);
});})(x_labels,stats))
,((function (x_labels,stats){
return (function (p1__34827_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__34827_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$709,cljs.core.constant$keyword$710], null));
});})(x_labels,stats))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median){
return (function (p1__34828_SHARP_){return clustermap.formats.number.round_decimal(p1__34828_SHARP_,0);
});})(x_labels,stats,y_median))
,((function (x_labels,stats,y_median){
return (function (p1__34829_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__34829_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$709,cljs.core.constant$keyword$685], null));
});})(x_labels,stats,y_median))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$711,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$716,null,cljs.core.constant$keyword$717,300], null),cljs.core.constant$keyword$712,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$718,null], null),cljs.core.constant$keyword$713,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$719,x_labels,cljs.core.constant$keyword$720,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$721,270], null)], null),cljs.core.constant$keyword$714,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$712,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$718,y0_title], null),cljs.core.constant$keyword$722,0], null)], null),cljs.core.constant$keyword$715,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$594,[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$584,"line",cljs.core.constant$keyword$714,0,cljs.core.constant$keyword$701,y_mean], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__34833){var map__34838 = p__34833;var map__34838__$1 = ((cljs.core.seq_QMARK_(map__34838))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34838):map__34838);var opts = map__34838__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34838__$1,cljs.core.constant$keyword$580);if(typeof clustermap.components.timeline_chart.t34839 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t34839 = (function (id,opts,map__34838,p__34833,owner,data,timeline_chart,meta34840){
this.id = id;
this.opts = opts;
this.map__34838 = map__34838;
this.p__34833 = p__34833;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta34840 = meta34840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t34839.cljs$lang$type = true;
clustermap.components.timeline_chart.t34839.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t34839";
clustermap.components.timeline_chart.t34839.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.timeline-chart/t34839");
});
clustermap.components.timeline_chart.t34839.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t34839.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t34839.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t34839.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
}));
});
clustermap.components.timeline_chart.t34839.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t34839.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});
clustermap.components.timeline_chart.t34839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34841){var self__ = this;
var _34841__$1 = this;return self__.meta34840;
});
clustermap.components.timeline_chart.t34839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34841,meta34840__$1){var self__ = this;
var _34841__$1 = this;return (new clustermap.components.timeline_chart.t34839(self__.id,self__.opts,self__.map__34838,self__.p__34833,self__.owner,self__.data,self__.timeline_chart,meta34840__$1));
});
clustermap.components.timeline_chart.__GT_t34839 = (function __GT_t34839(id__$1,opts__$1,map__34838__$2,p__34833__$1,owner__$1,data__$1,timeline_chart__$1,meta34840){return (new clustermap.components.timeline_chart.t34839(id__$1,opts__$1,map__34838__$2,p__34833__$1,owner__$1,data__$1,timeline_chart__$1,meta34840));
});
}
return (new clustermap.components.timeline_chart.t34839(id,opts,map__34838__$1,p__34833,owner,data,timeline_chart,null));
});
