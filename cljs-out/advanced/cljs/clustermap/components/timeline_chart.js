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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__11957){var map__11959 = p__11957;var map__11959__$1 = ((cljs.core.seq_QMARK_(map__11959))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11959):map__11959);var opts = map__11959__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11959__$1,cljs.core.constant$keyword$116);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11959__$1,cljs.core.constant$keyword$117);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$118,data);var y_total = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$95,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$97,data);var y_count = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$119,data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$120,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$125,null], null),cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,null], null),cljs.core.constant$keyword$122,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$127,x_labels,cljs.core.constant$keyword$128,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$129,270], null)], null),cljs.core.constant$keyword$123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,y0_title], null)], null),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$121,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$126,y1_title], null),cljs.core.constant$keyword$130,true], null)], null),cljs.core.constant$keyword$124,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$52,y0_title,cljs.core.constant$keyword$41,"column",cljs.core.constant$keyword$123,0,cljs.core.constant$keyword$111,y_total], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$52,[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$41,"line",cljs.core.constant$keyword$123,0,cljs.core.constant$keyword$111,y_mean], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$52,y1_title,cljs.core.constant$keyword$41,"line",cljs.core.constant$keyword$123,1,cljs.core.constant$keyword$111,y_count], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,opts){if(typeof clustermap.components.timeline_chart.t11965 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t11965 = (function (opts,owner,data,timeline_chart,meta11966){
this.opts = opts;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta11966 = meta11966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t11965.cljs$lang$type = true;
clustermap.components.timeline_chart.t11965.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t11965";
clustermap.components.timeline_chart.t11965.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t11965");
});
clustermap.components.timeline_chart.t11965.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t11965.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(cljs.core.deref(self__.data),om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t11965.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t11965.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(cljs.core.deref(self__.data),om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t11965.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t11965.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "ref": "chart"});
});
clustermap.components.timeline_chart.t11965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11967){var self__ = this;
var _11967__$1 = this;return self__.meta11966;
});
clustermap.components.timeline_chart.t11965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11967,meta11966__$1){var self__ = this;
var _11967__$1 = this;return (new clustermap.components.timeline_chart.t11965(self__.opts,self__.owner,self__.data,self__.timeline_chart,meta11966__$1));
});
clustermap.components.timeline_chart.__GT_t11965 = (function __GT_t11965(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta11966){return (new clustermap.components.timeline_chart.t11965(opts__$1,owner__$1,data__$1,timeline_chart__$1,meta11966));
});
}
return (new clustermap.components.timeline_chart.t11965(opts,owner,data,timeline_chart,null));
});
