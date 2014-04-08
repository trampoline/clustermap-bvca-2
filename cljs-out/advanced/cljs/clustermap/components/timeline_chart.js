// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('clustermap.formats.number');
goog.require('jayq.core');
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__34584){var map__34586 = p__34584;var map__34586__$1 = ((cljs.core.seq_QMARK_(map__34586))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34586):map__34586);var opts = map__34586__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34586__$1,cljs.core.constant$keyword$709);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34586__$1,cljs.core.constant$keyword$710);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$711,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$712,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats){
return (function (p1__34578_SHARP_){return clustermap.formats.number.round_decimal(p1__34578_SHARP_,0);
});})(x_labels,stats))
,((function (x_labels,stats){
return (function (p1__34579_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__34579_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$712,cljs.core.constant$keyword$713], null));
});})(x_labels,stats))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median){
return (function (p1__34580_SHARP_){return clustermap.formats.number.round_decimal(p1__34580_SHARP_,0);
});})(x_labels,stats,y_median))
,((function (x_labels,stats,y_median){
return (function (p1__34581_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__34581_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$712,cljs.core.constant$keyword$688], null));
});})(x_labels,stats,y_median))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean){
return (function (p1__34582_SHARP_){return clustermap.formats.number.round_decimal(p1__34582_SHARP_,0);
});})(x_labels,stats,y_median,y_mean))
,((function (x_labels,stats,y_median,y_mean){
return (function (p1__34583_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__34583_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$712,cljs.core.constant$keyword$683], null));
});})(x_labels,stats,y_median,y_mean))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$714,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$719,null,cljs.core.constant$keyword$720,300], null),cljs.core.constant$keyword$715,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$721,null], null),cljs.core.constant$keyword$716,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$722,x_labels,cljs.core.constant$keyword$723,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$724,270], null)], null),cljs.core.constant$keyword$717,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$715,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$721,y0_title], null),cljs.core.constant$keyword$725,0,cljs.core.constant$keyword$723,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$726,(function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$632,""], 0));
})], null)], null)], null),cljs.core.constant$keyword$718,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$598,[cljs.core.str("Total "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$588,"line",cljs.core.constant$keyword$717,0,cljs.core.constant$keyword$704,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__34587){var map__34592 = p__34587;var map__34592__$1 = ((cljs.core.seq_QMARK_(map__34592))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34592):map__34592);var opts = map__34592__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34592__$1,cljs.core.constant$keyword$584);if(typeof clustermap.components.timeline_chart.t34593 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t34593 = (function (id,opts,map__34592,p__34587,owner,data,timeline_chart,meta34594){
this.id = id;
this.opts = opts;
this.map__34592 = map__34592;
this.p__34587 = p__34587;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta34594 = meta34594;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t34593.cljs$lang$type = true;
clustermap.components.timeline_chart.t34593.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t34593";
clustermap.components.timeline_chart.t34593.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write(writer__4009__auto__,"clustermap.components.timeline-chart/t34593");
});
clustermap.components.timeline_chart.t34593.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t34593.prototype.om$core$IDidUpdate$did_update$arity$3 = (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t34593.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t34593.prototype.om$core$IDidMount$did_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
}));
});
clustermap.components.timeline_chart.t34593.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t34593.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});
clustermap.components.timeline_chart.t34593.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34595){var self__ = this;
var _34595__$1 = this;return self__.meta34594;
});
clustermap.components.timeline_chart.t34593.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34595,meta34594__$1){var self__ = this;
var _34595__$1 = this;return (new clustermap.components.timeline_chart.t34593(self__.id,self__.opts,self__.map__34592,self__.p__34587,self__.owner,self__.data,self__.timeline_chart,meta34594__$1));
});
clustermap.components.timeline_chart.__GT_t34593 = (function __GT_t34593(id__$1,opts__$1,map__34592__$2,p__34587__$1,owner__$1,data__$1,timeline_chart__$1,meta34594){return (new clustermap.components.timeline_chart.t34593(id__$1,opts__$1,map__34592__$2,p__34587__$1,owner__$1,data__$1,timeline_chart__$1,meta34594));
});
}
return (new clustermap.components.timeline_chart.t34593(id,opts,map__34592__$1,p__34587,owner,data,timeline_chart,null));
});
