// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.timeline_chart');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('jayq.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('hiccups.runtime');
goog.require('hiccups.runtime');
goog.require('clojure.set');
goog.require('om.dom');
goog.require('clojure.set');
goog.require('jayq.core');
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__22831){var map__22833 = p__22831;var map__22833__$1 = ((cljs.core.seq_QMARK_(map__22833))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22833):map__22833);var opts = map__22833__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22833__$1,cljs.core.constant$keyword$349);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22833__$1,cljs.core.constant$keyword$350);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$351,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$331,data);var y_count = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$352,data);var yt = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x_labels,y_mean,y_count){
return (function (t){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$353,t], null);
});})(x_labels,y_mean,y_count))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$326,data));var y_total = cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(yt),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(yt),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$354,"#FF9900",cljs.core.constant$keyword$273,"Not all data received for year"], null)], 0))], null)));return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$355,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$360,null], null),cljs.core.constant$keyword$356,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$361,null], null),cljs.core.constant$keyword$357,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$362,x_labels,cljs.core.constant$keyword$363,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$364,270], null)], null),cljs.core.constant$keyword$358,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$356,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$361,y0_title], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$356,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$361,y1_title], null),cljs.core.constant$keyword$365,true], null)], null),cljs.core.constant$keyword$359,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$273,y0_title,cljs.core.constant$keyword$263,"column",cljs.core.constant$keyword$358,0,cljs.core.constant$keyword$344,y_total], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$273,[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$263,"line",cljs.core.constant$keyword$358,0,cljs.core.constant$keyword$344,y_mean], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$273,y1_title,cljs.core.constant$keyword$263,"line",cljs.core.constant$keyword$358,1,cljs.core.constant$keyword$344,y_count], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,opts){if(typeof clustermap.components.timeline_chart.t22839 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t22839 = (function (opts,owner,data,timeline_chart,meta22840){
this.opts = opts;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta22840 = meta22840;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t22839.cljs$lang$type = true;
clustermap.components.timeline_chart.t22839.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t22839";
clustermap.components.timeline_chart.t22839.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t22839");
});
clustermap.components.timeline_chart.t22839.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t22839.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t22839.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t22839.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t22839.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t22839.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "ref": "chart"});
});
clustermap.components.timeline_chart.t22839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22841){var self__ = this;
var _22841__$1 = this;return self__.meta22840;
});
clustermap.components.timeline_chart.t22839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22841,meta22840__$1){var self__ = this;
var _22841__$1 = this;return (new clustermap.components.timeline_chart.t22839(self__.opts,self__.owner,self__.data,self__.timeline_chart,meta22840__$1));
});
clustermap.components.timeline_chart.__GT_t22839 = (function __GT_t22839(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta22840){return (new clustermap.components.timeline_chart.t22839(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta22840));
});
}
return (new clustermap.components.timeline_chart.t22839(opts,owner,data,timeline_chart,null));
});
