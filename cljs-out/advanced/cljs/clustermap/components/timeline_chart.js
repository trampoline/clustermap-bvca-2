// Compiled by ClojureScript 0.0-2268
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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__38387){var map__38389 = p__38387;var map__38389__$1 = ((cljs.core.seq_QMARK_(map__38389))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38389):map__38389);var opts = map__38389__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38389__$1,cljs.core.constant$keyword$932);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38389__$1,cljs.core.constant$keyword$933);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$934,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$935,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,map__38389,map__38389__$1,opts,y1_title,y0_title){
return (function (p1__38381_SHARP_){return clustermap.formats.number.round_decimal(p1__38381_SHARP_,(0));
});})(x_labels,stats,map__38389,map__38389__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__38389,map__38389__$1,opts,y1_title,y0_title){
return (function (p1__38382_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38382_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$935,cljs.core.constant$keyword$936], null));
});})(x_labels,stats,map__38389,map__38389__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,map__38389,map__38389__$1,opts,y1_title,y0_title){
return (function (p1__38383_SHARP_){return clustermap.formats.number.round_decimal(p1__38383_SHARP_,(0));
});})(x_labels,stats,y_median,map__38389,map__38389__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__38389,map__38389__$1,opts,y1_title,y0_title){
return (function (p1__38384_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38384_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$935,cljs.core.constant$keyword$937], null));
});})(x_labels,stats,y_median,map__38389,map__38389__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean,map__38389,map__38389__$1,opts,y1_title,y0_title){
return (function (p1__38385_SHARP_){return clustermap.formats.number.round_decimal(p1__38385_SHARP_,(0));
});})(x_labels,stats,y_median,y_mean,map__38389,map__38389__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__38389,map__38389__$1,opts,y1_title,y0_title){
return (function (p1__38386_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__38386_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$935,cljs.core.constant$keyword$938], null));
});})(x_labels,stats,y_median,y_mean,map__38389,map__38389__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$939,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$944,null,cljs.core.constant$keyword$945,(300)], null),cljs.core.constant$keyword$940,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$946,null], null),cljs.core.constant$keyword$941,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$947,x_labels,cljs.core.constant$keyword$948,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$949,(270)], null)], null),cljs.core.constant$keyword$942,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$940,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$946,y0_title], null),cljs.core.constant$keyword$950,(0),cljs.core.constant$keyword$948,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$951,((function (x_labels,stats,y_median,y_mean,y_total,map__38389,map__38389__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$896,""], 0));
});})(x_labels,stats,y_median,y_mean,y_total,map__38389,map__38389__$1,opts,y1_title,y0_title))
], null)], null)], null),cljs.core.constant$keyword$943,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$844,("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),cljs.core.constant$keyword$814,"line",cljs.core.constant$keyword$942,(0),cljs.core.constant$keyword$927,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__38390){var map__38395 = p__38390;var map__38395__$1 = ((cljs.core.seq_QMARK_(map__38395))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38395):map__38395);var opts = map__38395__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38395__$1,cljs.core.constant$keyword$816);if(typeof clustermap.components.timeline_chart.t38396 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t38396 = (function (id,opts,map__38395,p__38390,owner,data,timeline_chart,meta38397){
this.id = id;
this.opts = opts;
this.map__38395 = map__38395;
this.p__38390 = p__38390;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta38397 = meta38397;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t38396.cljs$lang$type = true;
clustermap.components.timeline_chart.t38396.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t38396";
clustermap.components.timeline_chart.t38396.cljs$lang$ctorPrWriter = ((function (map__38395,map__38395__$1,opts,id){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.timeline-chart/t38396");
});})(map__38395,map__38395__$1,opts,id))
;
clustermap.components.timeline_chart.t38396.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t38396.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__38395,map__38395__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});})(map__38395,map__38395__$1,opts,id))
;
clustermap.components.timeline_chart.t38396.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t38396.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__38395,map__38395__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",((function (node,this$__$1,map__38395,map__38395__$1,opts,id){
return (function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__38395,map__38395__$1,opts,id))
);
});})(map__38395,map__38395__$1,opts,id))
;
clustermap.components.timeline_chart.t38396.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t38396.prototype.om$core$IRender$render$arity$1 = ((function (map__38395,map__38395__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__38395,map__38395__$1,opts,id))
;
clustermap.components.timeline_chart.t38396.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38395,map__38395__$1,opts,id){
return (function (_38398){var self__ = this;
var _38398__$1 = this;return self__.meta38397;
});})(map__38395,map__38395__$1,opts,id))
;
clustermap.components.timeline_chart.t38396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38395,map__38395__$1,opts,id){
return (function (_38398,meta38397__$1){var self__ = this;
var _38398__$1 = this;return (new clustermap.components.timeline_chart.t38396(self__.id,self__.opts,self__.map__38395,self__.p__38390,self__.owner,self__.data,self__.timeline_chart,meta38397__$1));
});})(map__38395,map__38395__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t38396 = ((function (map__38395,map__38395__$1,opts,id){
return (function __GT_t38396(id__$1,opts__$1,map__38395__$2,p__38390__$1,owner__$1,data__$1,timeline_chart__$1,meta38397){return (new clustermap.components.timeline_chart.t38396(id__$1,opts__$1,map__38395__$2,p__38390__$1,owner__$1,data__$1,timeline_chart__$1,meta38397));
});})(map__38395,map__38395__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t38396(id,opts,map__38395__$1,p__38390,owner,data,timeline_chart,null));
});
