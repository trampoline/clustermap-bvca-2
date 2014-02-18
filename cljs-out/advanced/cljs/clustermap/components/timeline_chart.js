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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__23047){var map__23049 = p__23047;var map__23049__$1 = ((cljs.core.seq_QMARK_(map__23049))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23049):map__23049);var opts = map__23049__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.constant$keyword$356);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23049__$1,cljs.core.constant$keyword$357);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$338,data);var y_count = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$358,data);var yt = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x_labels,y_mean,y_count){
return (function (t){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$359,t], null);
});})(x_labels,y_mean,y_count))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$333,data));var y_total = yt;return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$360,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$365,null], null),cljs.core.constant$keyword$361,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$366,null], null),cljs.core.constant$keyword$362,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$367,x_labels,cljs.core.constant$keyword$368,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$369,270], null)], null),cljs.core.constant$keyword$363,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$361,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$366,y0_title], null)], null)], null),cljs.core.constant$keyword$364,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$279,y0_title,cljs.core.constant$keyword$269,"boxplot",cljs.core.constant$keyword$363,0,cljs.core.constant$keyword$351,data], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__23050){var map__23055 = p__23050;var map__23055__$1 = ((cljs.core.seq_QMARK_(map__23055))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23055):map__23055);var opts = map__23055__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23055__$1,cljs.core.constant$keyword$265);if(typeof clustermap.components.timeline_chart.t23056 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t23056 = (function (id,opts,map__23055,p__23050,owner,data,timeline_chart,meta23057){
this.id = id;
this.opts = opts;
this.map__23055 = map__23055;
this.p__23050 = p__23050;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta23057 = meta23057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t23056.cljs$lang$type = true;
clustermap.components.timeline_chart.t23056.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t23056";
clustermap.components.timeline_chart.t23056.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t23056");
});
clustermap.components.timeline_chart.t23056.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t23056.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t23056.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t23056.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){return jayq.core.$.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#"),cljs.core.str(self__.id)].join('')).highcharts().reflow();
}));
});
clustermap.components.timeline_chart.t23056.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t23056.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});
clustermap.components.timeline_chart.t23056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23058){var self__ = this;
var _23058__$1 = this;return self__.meta23057;
});
clustermap.components.timeline_chart.t23056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23058,meta23057__$1){var self__ = this;
var _23058__$1 = this;return (new clustermap.components.timeline_chart.t23056(self__.id,self__.opts,self__.map__23055,self__.p__23050,self__.owner,self__.data,self__.timeline_chart,meta23057__$1));
});
clustermap.components.timeline_chart.__GT_t23056 = (function __GT_t23056(id__$1,opts__$1,map__23055__$2,p__23050__$1,owner__$1,data__$1,timeline_chart__$1,meta23057){return (new clustermap.components.timeline_chart.t23056(id__$1,opts__$1,map__23055__$2,p__23050__$1,owner__$1,data__$1,timeline_chart__$1,meta23057));
});
}
return (new clustermap.components.timeline_chart.t23056(id,opts,map__23055__$1,p__23050,owner,data,timeline_chart,null));
});
