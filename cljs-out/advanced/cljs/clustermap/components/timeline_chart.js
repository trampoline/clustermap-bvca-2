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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__12362){var map__12364 = p__12362;var map__12364__$1 = ((cljs.core.seq_QMARK_(map__12364))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12364):map__12364);var opts = map__12364__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12364__$1,cljs.core.constant$keyword$131);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12364__$1,cljs.core.constant$keyword$132);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$133,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$112,data);var y_count = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$134,data);var yt = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x_labels,y_mean,y_count){
return (function (t){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$135,t], null);
});})(x_labels,y_mean,y_count))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$107,data));var y_total = cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(yt),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(yt),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$136,"#FF9900",cljs.core.constant$keyword$54,"Not all data received for year"], null)], 0))], null)));return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$137,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$142,null], null),cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,null], null),cljs.core.constant$keyword$139,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$144,x_labels,cljs.core.constant$keyword$145,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$146,270], null)], null),cljs.core.constant$keyword$140,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,y0_title], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$138,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$143,y1_title], null),cljs.core.constant$keyword$147,true], null)], null),cljs.core.constant$keyword$141,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$54,y0_title,cljs.core.constant$keyword$44,"column",cljs.core.constant$keyword$140,0,cljs.core.constant$keyword$126,y_total], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$54,[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$44,"line",cljs.core.constant$keyword$140,0,cljs.core.constant$keyword$126,y_mean], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$54,y1_title,cljs.core.constant$keyword$44,"line",cljs.core.constant$keyword$140,1,cljs.core.constant$keyword$126,y_count], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,opts){if(typeof clustermap.components.timeline_chart.t12370 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t12370 = (function (opts,owner,data,timeline_chart,meta12371){
this.opts = opts;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta12371 = meta12371;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t12370.cljs$lang$type = true;
clustermap.components.timeline_chart.t12370.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t12370";
clustermap.components.timeline_chart.t12370.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t12370");
});
clustermap.components.timeline_chart.t12370.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t12370.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t12370.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t12370.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t12370.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t12370.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "ref": "chart"});
});
clustermap.components.timeline_chart.t12370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12372){var self__ = this;
var _12372__$1 = this;return self__.meta12371;
});
clustermap.components.timeline_chart.t12370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12372,meta12371__$1){var self__ = this;
var _12372__$1 = this;return (new clustermap.components.timeline_chart.t12370(self__.opts,self__.owner,self__.data,self__.timeline_chart,meta12371__$1));
});
clustermap.components.timeline_chart.__GT_t12370 = (function __GT_t12370(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta12371){return (new clustermap.components.timeline_chart.t12370(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta12371));
});
}
return (new clustermap.components.timeline_chart.t12370(opts,owner,data,timeline_chart,null));
});
