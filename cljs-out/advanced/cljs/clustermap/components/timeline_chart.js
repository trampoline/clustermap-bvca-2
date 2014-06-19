// Compiled by ClojureScript 0.0-2227
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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__35287){var map__35289 = p__35287;var map__35289__$1 = ((cljs.core.seq_QMARK_(map__35289))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35289):map__35289);var opts = map__35289__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35289__$1,cljs.core.constant$keyword$734);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35289__$1,cljs.core.constant$keyword$735);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$736,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$737,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,map__35289,map__35289__$1,opts,y1_title,y0_title){
return (function (p1__35281_SHARP_){return clustermap.formats.number.round_decimal(p1__35281_SHARP_,0);
});})(x_labels,stats,map__35289,map__35289__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__35289,map__35289__$1,opts,y1_title,y0_title){
return (function (p1__35282_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__35282_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$737,cljs.core.constant$keyword$738], null));
});})(x_labels,stats,map__35289,map__35289__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,map__35289,map__35289__$1,opts,y1_title,y0_title){
return (function (p1__35283_SHARP_){return clustermap.formats.number.round_decimal(p1__35283_SHARP_,0);
});})(x_labels,stats,y_median,map__35289,map__35289__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__35289,map__35289__$1,opts,y1_title,y0_title){
return (function (p1__35284_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__35284_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$737,cljs.core.constant$keyword$739], null));
});})(x_labels,stats,y_median,map__35289,map__35289__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean,map__35289,map__35289__$1,opts,y1_title,y0_title){
return (function (p1__35285_SHARP_){return clustermap.formats.number.round_decimal(p1__35285_SHARP_,0);
});})(x_labels,stats,y_median,y_mean,map__35289,map__35289__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__35289,map__35289__$1,opts,y1_title,y0_title){
return (function (p1__35286_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__35286_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$737,cljs.core.constant$keyword$740], null));
});})(x_labels,stats,y_median,y_mean,map__35289,map__35289__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$741,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$746,null,cljs.core.constant$keyword$747,300], null),cljs.core.constant$keyword$742,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$748,null], null),cljs.core.constant$keyword$743,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$749,x_labels,cljs.core.constant$keyword$750,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$751,270], null)], null),cljs.core.constant$keyword$744,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$742,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$748,y0_title], null),cljs.core.constant$keyword$752,0,cljs.core.constant$keyword$750,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$753,((function (x_labels,stats,y_median,y_mean,y_total,map__35289,map__35289__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$697,""], 0));
});})(x_labels,stats,y_median,y_mean,y_total,map__35289,map__35289__$1,opts,y1_title,y0_title))
], null)], null)], null),cljs.core.constant$keyword$745,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$645,("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),cljs.core.constant$keyword$614,"line",cljs.core.constant$keyword$744,0,cljs.core.constant$keyword$729,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__35290){var map__35295 = p__35290;var map__35295__$1 = ((cljs.core.seq_QMARK_(map__35295))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35295):map__35295);var opts = map__35295__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35295__$1,cljs.core.constant$keyword$616);if(typeof clustermap.components.timeline_chart.t35296 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t35296 = (function (id,opts,map__35295,p__35290,owner,data,timeline_chart,meta35297){
this.id = id;
this.opts = opts;
this.map__35295 = map__35295;
this.p__35290 = p__35290;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta35297 = meta35297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t35296.cljs$lang$type = true;
clustermap.components.timeline_chart.t35296.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t35296";
clustermap.components.timeline_chart.t35296.cljs$lang$ctorPrWriter = ((function (map__35295,map__35295__$1,opts,id){
return (function (this__4106__auto__,writer__4107__auto__,opt__4108__auto__){return cljs.core._write(writer__4107__auto__,"clustermap.components.timeline-chart/t35296");
});})(map__35295,map__35295__$1,opts,id))
;
clustermap.components.timeline_chart.t35296.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t35296.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__35295,map__35295__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});})(map__35295,map__35295__$1,opts,id))
;
clustermap.components.timeline_chart.t35296.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t35296.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__35295,map__35295__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",((function (node,this$__$1,map__35295,map__35295__$1,opts,id){
return (function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__35295,map__35295__$1,opts,id))
);
});})(map__35295,map__35295__$1,opts,id))
;
clustermap.components.timeline_chart.t35296.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t35296.prototype.om$core$IRender$render$arity$1 = ((function (map__35295,map__35295__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__35295,map__35295__$1,opts,id))
;
clustermap.components.timeline_chart.t35296.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35295,map__35295__$1,opts,id){
return (function (_35298){var self__ = this;
var _35298__$1 = this;return self__.meta35297;
});})(map__35295,map__35295__$1,opts,id))
;
clustermap.components.timeline_chart.t35296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35295,map__35295__$1,opts,id){
return (function (_35298,meta35297__$1){var self__ = this;
var _35298__$1 = this;return (new clustermap.components.timeline_chart.t35296(self__.id,self__.opts,self__.map__35295,self__.p__35290,self__.owner,self__.data,self__.timeline_chart,meta35297__$1));
});})(map__35295,map__35295__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t35296 = ((function (map__35295,map__35295__$1,opts,id){
return (function __GT_t35296(id__$1,opts__$1,map__35295__$2,p__35290__$1,owner__$1,data__$1,timeline_chart__$1,meta35297){return (new clustermap.components.timeline_chart.t35296(id__$1,opts__$1,map__35295__$2,p__35290__$1,owner__$1,data__$1,timeline_chart__$1,meta35297));
});})(map__35295,map__35295__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t35296(id,opts,map__35295__$1,p__35290,owner,data,timeline_chart,null));
});
