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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__23055){var map__23057 = p__23055;var map__23057__$1 = ((cljs.core.seq_QMARK_(map__23057))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23057):map__23057);var opts = map__23057__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23057__$1,cljs.core.constant$keyword$357);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23057__$1,cljs.core.constant$keyword$358);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$339,data);var y_count = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$359,data);var yt = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x_labels,y_mean,y_count){
return (function (t){return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$360,t], null);
});})(x_labels,y_mean,y_count))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$334,data));var y_total = yt;return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$361,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$366,null], null),cljs.core.constant$keyword$362,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$367,null], null),cljs.core.constant$keyword$363,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$368,x_labels,cljs.core.constant$keyword$369,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$370,270], null)], null),cljs.core.constant$keyword$364,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$362,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$367,y0_title], null)], null)], null),cljs.core.constant$keyword$365,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$280,y0_title,cljs.core.constant$keyword$270,"boxplot",cljs.core.constant$keyword$364,0,cljs.core.constant$keyword$352,data], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__23058){var map__23063 = p__23058;var map__23063__$1 = ((cljs.core.seq_QMARK_(map__23063))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23063):map__23063);var opts = map__23063__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23063__$1,cljs.core.constant$keyword$266);if(typeof clustermap.components.timeline_chart.t23064 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t23064 = (function (id,opts,map__23063,p__23058,owner,data,timeline_chart,meta23065){
this.id = id;
this.opts = opts;
this.map__23063 = map__23063;
this.p__23058 = p__23058;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta23065 = meta23065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t23064.cljs$lang$type = true;
clustermap.components.timeline_chart.t23064.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t23064";
clustermap.components.timeline_chart.t23064.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t23064");
});
clustermap.components.timeline_chart.t23064.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t23064.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t23064.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t23064.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){return jayq.core.$.cljs$core$IFn$_invoke$arity$1([cljs.core.str("#"),cljs.core.str(self__.id)].join('')).highcharts().reflow();
}));
});
clustermap.components.timeline_chart.t23064.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t23064.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});
clustermap.components.timeline_chart.t23064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23066){var self__ = this;
var _23066__$1 = this;return self__.meta23065;
});
clustermap.components.timeline_chart.t23064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23066,meta23065__$1){var self__ = this;
var _23066__$1 = this;return (new clustermap.components.timeline_chart.t23064(self__.id,self__.opts,self__.map__23063,self__.p__23058,self__.owner,self__.data,self__.timeline_chart,meta23065__$1));
});
clustermap.components.timeline_chart.__GT_t23064 = (function __GT_t23064(id__$1,opts__$1,map__23063__$2,p__23058__$1,owner__$1,data__$1,timeline_chart__$1,meta23065){return (new clustermap.components.timeline_chart.t23064(id__$1,opts__$1,map__23063__$2,p__23058__$1,owner__$1,data__$1,timeline_chart__$1,meta23065));
});
}
return (new clustermap.components.timeline_chart.t23064(id,opts,map__23063__$1,p__23058,owner,data,timeline_chart,null));
});
