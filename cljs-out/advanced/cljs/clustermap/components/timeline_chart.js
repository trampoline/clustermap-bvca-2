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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__22879){var map__22881 = p__22879;var map__22881__$1 = ((cljs.core.seq_QMARK_(map__22881))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22881):map__22881);var opts = map__22881__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.constant$keyword$351);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22881__$1,cljs.core.constant$keyword$352);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$353,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$333,data);var y_count = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$354,data);var yt = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x_labels,y_mean,y_count){
return (function (t){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$355,t], null);
});})(x_labels,y_mean,y_count))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$328,data));var y_total = cljs.core.into(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(yt),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.last(yt),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$356,"#FF9900",cljs.core.constant$keyword$274,"Not all data received for year"], null)], 0))], null)));return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$357,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$362,null], null),cljs.core.constant$keyword$358,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$363,null], null),cljs.core.constant$keyword$359,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$364,x_labels,cljs.core.constant$keyword$365,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$366,270], null)], null),cljs.core.constant$keyword$360,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$358,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$363,y0_title], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$358,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$363,y1_title], null),cljs.core.constant$keyword$367,true], null)], null),cljs.core.constant$keyword$361,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$274,y0_title,cljs.core.constant$keyword$264,"column",cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$346,y_total], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$274,[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$264,"line",cljs.core.constant$keyword$360,0,cljs.core.constant$keyword$346,y_mean], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$274,y1_title,cljs.core.constant$keyword$264,"line",cljs.core.constant$keyword$360,1,cljs.core.constant$keyword$346,y_count], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,opts){if(typeof clustermap.components.timeline_chart.t22887 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t22887 = (function (opts,owner,data,timeline_chart,meta22888){
this.opts = opts;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta22888 = meta22888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t22887.cljs$lang$type = true;
clustermap.components.timeline_chart.t22887.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t22887";
clustermap.components.timeline_chart.t22887.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t22887");
});
clustermap.components.timeline_chart.t22887.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t22887.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t22887.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t22887.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t22887.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t22887.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "ref": "chart"});
});
clustermap.components.timeline_chart.t22887.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22889){var self__ = this;
var _22889__$1 = this;return self__.meta22888;
});
clustermap.components.timeline_chart.t22887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22889,meta22888__$1){var self__ = this;
var _22889__$1 = this;return (new clustermap.components.timeline_chart.t22887(self__.opts,self__.owner,self__.data,self__.timeline_chart,meta22888__$1));
});
clustermap.components.timeline_chart.__GT_t22887 = (function __GT_t22887(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta22888){return (new clustermap.components.timeline_chart.t22887(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta22888));
});
}
return (new clustermap.components.timeline_chart.t22887(opts,owner,data,timeline_chart,null));
});
