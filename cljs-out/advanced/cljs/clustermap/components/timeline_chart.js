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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__37416){var map__37418 = p__37416;var map__37418__$1 = ((cljs.core.seq_QMARK_(map__37418))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37418):map__37418);var opts = map__37418__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37418__$1,cljs.core.constant$keyword$913);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37418__$1,cljs.core.constant$keyword$914);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$915,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$916,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,map__37418,map__37418__$1,opts,y1_title,y0_title){
return (function (p1__37410_SHARP_){return clustermap.formats.number.round_decimal(p1__37410_SHARP_,(0));
});})(x_labels,stats,map__37418,map__37418__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__37418,map__37418__$1,opts,y1_title,y0_title){
return (function (p1__37411_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__37411_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$916,cljs.core.constant$keyword$917], null));
});})(x_labels,stats,map__37418,map__37418__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,map__37418,map__37418__$1,opts,y1_title,y0_title){
return (function (p1__37412_SHARP_){return clustermap.formats.number.round_decimal(p1__37412_SHARP_,(0));
});})(x_labels,stats,y_median,map__37418,map__37418__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__37418,map__37418__$1,opts,y1_title,y0_title){
return (function (p1__37413_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__37413_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$916,cljs.core.constant$keyword$918], null));
});})(x_labels,stats,y_median,map__37418,map__37418__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean,map__37418,map__37418__$1,opts,y1_title,y0_title){
return (function (p1__37414_SHARP_){return clustermap.formats.number.round_decimal(p1__37414_SHARP_,(0));
});})(x_labels,stats,y_median,y_mean,map__37418,map__37418__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__37418,map__37418__$1,opts,y1_title,y0_title){
return (function (p1__37415_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__37415_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$916,cljs.core.constant$keyword$919], null));
});})(x_labels,stats,y_median,y_mean,map__37418,map__37418__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$920,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$925,null,cljs.core.constant$keyword$926,(300)], null),cljs.core.constant$keyword$921,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$927,null], null),cljs.core.constant$keyword$922,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$928,x_labels,cljs.core.constant$keyword$929,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$930,(270)], null)], null),cljs.core.constant$keyword$923,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$921,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$927,y0_title], null),cljs.core.constant$keyword$931,(0),cljs.core.constant$keyword$929,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$932,((function (x_labels,stats,y_median,y_mean,y_total,map__37418,map__37418__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$877,""], 0));
});})(x_labels,stats,y_median,y_mean,y_total,map__37418,map__37418__$1,opts,y1_title,y0_title))
], null)], null)], null),cljs.core.constant$keyword$924,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$825,("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),cljs.core.constant$keyword$795,"line",cljs.core.constant$keyword$923,(0),cljs.core.constant$keyword$908,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__37419){var map__37424 = p__37419;var map__37424__$1 = ((cljs.core.seq_QMARK_(map__37424))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37424):map__37424);var opts = map__37424__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37424__$1,cljs.core.constant$keyword$797);if(typeof clustermap.components.timeline_chart.t37425 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t37425 = (function (id,opts,map__37424,p__37419,owner,data,timeline_chart,meta37426){
this.id = id;
this.opts = opts;
this.map__37424 = map__37424;
this.p__37419 = p__37419;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta37426 = meta37426;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t37425.cljs$lang$type = true;
clustermap.components.timeline_chart.t37425.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t37425";
clustermap.components.timeline_chart.t37425.cljs$lang$ctorPrWriter = ((function (map__37424,map__37424__$1,opts,id){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.timeline-chart/t37425");
});})(map__37424,map__37424__$1,opts,id))
;
clustermap.components.timeline_chart.t37425.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t37425.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__37424,map__37424__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});})(map__37424,map__37424__$1,opts,id))
;
clustermap.components.timeline_chart.t37425.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t37425.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__37424,map__37424__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",((function (node,this$__$1,map__37424,map__37424__$1,opts,id){
return (function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__37424,map__37424__$1,opts,id))
);
});})(map__37424,map__37424__$1,opts,id))
;
clustermap.components.timeline_chart.t37425.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t37425.prototype.om$core$IRender$render$arity$1 = ((function (map__37424,map__37424__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__37424,map__37424__$1,opts,id))
;
clustermap.components.timeline_chart.t37425.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__37424,map__37424__$1,opts,id){
return (function (_37427){var self__ = this;
var _37427__$1 = this;return self__.meta37426;
});})(map__37424,map__37424__$1,opts,id))
;
clustermap.components.timeline_chart.t37425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__37424,map__37424__$1,opts,id){
return (function (_37427,meta37426__$1){var self__ = this;
var _37427__$1 = this;return (new clustermap.components.timeline_chart.t37425(self__.id,self__.opts,self__.map__37424,self__.p__37419,self__.owner,self__.data,self__.timeline_chart,meta37426__$1));
});})(map__37424,map__37424__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t37425 = ((function (map__37424,map__37424__$1,opts,id){
return (function __GT_t37425(id__$1,opts__$1,map__37424__$2,p__37419__$1,owner__$1,data__$1,timeline_chart__$1,meta37426){return (new clustermap.components.timeline_chart.t37425(id__$1,opts__$1,map__37424__$2,p__37419__$1,owner__$1,data__$1,timeline_chart__$1,meta37426));
});})(map__37424,map__37424__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t37425(id,opts,map__37424__$1,p__37419,owner,data,timeline_chart,null));
});
