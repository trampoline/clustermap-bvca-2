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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__36060){var map__36062 = p__36060;var map__36062__$1 = ((cljs.core.seq_QMARK_(map__36062))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36062):map__36062);var opts = map__36062__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36062__$1,cljs.core.constant$keyword$892);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36062__$1,cljs.core.constant$keyword$893);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$894,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$895,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,map__36062,map__36062__$1,opts,y1_title,y0_title){
return (function (p1__36054_SHARP_){return clustermap.formats.number.round_decimal(p1__36054_SHARP_,(0));
});})(x_labels,stats,map__36062,map__36062__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,map__36062,map__36062__$1,opts,y1_title,y0_title){
return (function (p1__36055_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__36055_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$895,cljs.core.constant$keyword$896], null));
});})(x_labels,stats,map__36062,map__36062__$1,opts,y1_title,y0_title))
),data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,map__36062,map__36062__$1,opts,y1_title,y0_title){
return (function (p1__36056_SHARP_){return clustermap.formats.number.round_decimal(p1__36056_SHARP_,(0));
});})(x_labels,stats,y_median,map__36062,map__36062__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,map__36062,map__36062__$1,opts,y1_title,y0_title){
return (function (p1__36057_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__36057_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$895,cljs.core.constant$keyword$897], null));
});})(x_labels,stats,y_median,map__36062,map__36062__$1,opts,y1_title,y0_title))
),data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median,y_mean,map__36062,map__36062__$1,opts,y1_title,y0_title){
return (function (p1__36058_SHARP_){return clustermap.formats.number.round_decimal(p1__36058_SHARP_,(0));
});})(x_labels,stats,y_median,y_mean,map__36062,map__36062__$1,opts,y1_title,y0_title))
,((function (x_labels,stats,y_median,y_mean,map__36062,map__36062__$1,opts,y1_title,y0_title){
return (function (p1__36059_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__36059_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$895,cljs.core.constant$keyword$898], null));
});})(x_labels,stats,y_median,y_mean,map__36062,map__36062__$1,opts,y1_title,y0_title))
),data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$899,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$904,null,cljs.core.constant$keyword$905,(300)], null),cljs.core.constant$keyword$900,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$906,null], null),cljs.core.constant$keyword$901,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$907,x_labels,cljs.core.constant$keyword$908,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$909,(270)], null)], null),cljs.core.constant$keyword$902,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$900,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$906,y0_title], null),cljs.core.constant$keyword$910,(0),cljs.core.constant$keyword$908,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$911,((function (x_labels,stats,y_median,y_mean,y_total,map__36062,map__36062__$1,opts,y1_title,y0_title){
return (function (){var this$ = this;return clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic(this$.value,cljs.core.array_seq([cljs.core.constant$keyword$856,""], 0));
});})(x_labels,stats,y_median,y_mean,y_total,map__36062,map__36062__$1,opts,y1_title,y0_title))
], null)], null)], null),cljs.core.constant$keyword$903,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$803,("Total "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(y0_title)),cljs.core.constant$keyword$772,"line",cljs.core.constant$keyword$902,(0),cljs.core.constant$keyword$887,y_total], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__36063){var map__36068 = p__36063;var map__36068__$1 = ((cljs.core.seq_QMARK_(map__36068))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36068):map__36068);var opts = map__36068__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36068__$1,cljs.core.constant$keyword$774);if(typeof clustermap.components.timeline_chart.t36069 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t36069 = (function (id,opts,map__36068,p__36063,owner,data,timeline_chart,meta36070){
this.id = id;
this.opts = opts;
this.map__36068 = map__36068;
this.p__36063 = p__36063;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta36070 = meta36070;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t36069.cljs$lang$type = true;
clustermap.components.timeline_chart.t36069.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t36069";
clustermap.components.timeline_chart.t36069.cljs$lang$ctorPrWriter = ((function (map__36068,map__36068__$1,opts,id){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write(writer__4111__auto__,"clustermap.components.timeline-chart/t36069");
});})(map__36068,map__36068__$1,opts,id))
;
clustermap.components.timeline_chart.t36069.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t36069.prototype.om$core$IDidUpdate$did_update$arity$3 = ((function (map__36068,map__36068__$1,opts,id){
return (function (this$,prev_props,prev_state){var self__ = this;
var this$__$1 = this;var root_node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
});})(map__36068,map__36068__$1,opts,id))
;
clustermap.components.timeline_chart.t36069.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t36069.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__36068,map__36068__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;var node = om.core.get_node.cljs$core$IFn$_invoke$arity$1(self__.owner);clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",((function (node,this$__$1,map__36068,map__36068__$1,opts,id){
return (function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node.cljs$core$IFn$_invoke$arity$2(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
});})(node,this$__$1,map__36068,map__36068__$1,opts,id))
);
});})(map__36068,map__36068__$1,opts,id))
;
clustermap.components.timeline_chart.t36069.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t36069.prototype.om$core$IRender$render$arity$1 = ((function (map__36068,map__36068__$1,opts,id){
return (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});})(map__36068,map__36068__$1,opts,id))
;
clustermap.components.timeline_chart.t36069.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__36068,map__36068__$1,opts,id){
return (function (_36071){var self__ = this;
var _36071__$1 = this;return self__.meta36070;
});})(map__36068,map__36068__$1,opts,id))
;
clustermap.components.timeline_chart.t36069.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__36068,map__36068__$1,opts,id){
return (function (_36071,meta36070__$1){var self__ = this;
var _36071__$1 = this;return (new clustermap.components.timeline_chart.t36069(self__.id,self__.opts,self__.map__36068,self__.p__36063,self__.owner,self__.data,self__.timeline_chart,meta36070__$1));
});})(map__36068,map__36068__$1,opts,id))
;
clustermap.components.timeline_chart.__GT_t36069 = ((function (map__36068,map__36068__$1,opts,id){
return (function __GT_t36069(id__$1,opts__$1,map__36068__$2,p__36063__$1,owner__$1,data__$1,timeline_chart__$1,meta36070){return (new clustermap.components.timeline_chart.t36069(id__$1,opts__$1,map__36068__$2,p__36063__$1,owner__$1,data__$1,timeline_chart__$1,meta36070));
});})(map__36068,map__36068__$1,opts,id))
;
}
return (new clustermap.components.timeline_chart.t36069(id,opts,map__36068__$1,p__36063,owner,data,timeline_chart,null));
});
