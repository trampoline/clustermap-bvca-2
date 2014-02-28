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
clustermap.components.timeline_chart.create_chart = (function create_chart(data,node,p__23075){var map__23077 = p__23075;var map__23077__$1 = ((cljs.core.seq_QMARK_(map__23077))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23077):map__23077);var opts = map__23077__$1;var y1_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23077__$1,cljs.core.constant$keyword$383);var y0_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23077__$1,cljs.core.constant$keyword$384);var x_labels = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$385,data);var stats = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$386,data);var y_median = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats){
return (function (p1__23073_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__23073_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$386,cljs.core.constant$keyword$387], null));
});})(x_labels,stats))
,data);var y_mean = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x_labels,stats,y_median){
return (function (p1__23074_SHARP_){return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__23074_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$386,cljs.core.constant$keyword$363], null));
});})(x_labels,stats,y_median))
,data);return jayq.core.$.cljs$core$IFn$_invoke$arity$1(node).highcharts(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$388,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$393,null,cljs.core.constant$keyword$394,300], null),cljs.core.constant$keyword$389,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$395,null], null),cljs.core.constant$keyword$390,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$396,x_labels,cljs.core.constant$keyword$397,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$398,270], null)], null),cljs.core.constant$keyword$391,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$389,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$395,y0_title], null),cljs.core.constant$keyword$399,0], null)], null),cljs.core.constant$keyword$392,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$296,[cljs.core.str("Mean "),cljs.core.str(y0_title)].join(''),cljs.core.constant$keyword$286,"line",cljs.core.constant$keyword$391,0,cljs.core.constant$keyword$378,y_mean], null)], null)], null)));
});
clustermap.components.timeline_chart.timeline_chart = (function timeline_chart(data,owner,p__23078){var map__23083 = p__23078;var map__23083__$1 = ((cljs.core.seq_QMARK_(map__23083))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23083):map__23083);var opts = map__23083__$1;var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23083__$1,cljs.core.constant$keyword$282);if(typeof clustermap.components.timeline_chart.t23084 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.timeline_chart.t23084 = (function (id,opts,map__23083,p__23078,owner,data,timeline_chart,meta23085){
this.id = id;
this.opts = opts;
this.map__23083 = map__23083;
this.p__23078 = p__23078;
this.owner = owner;
this.data = data;
this.timeline_chart = timeline_chart;
this.meta23085 = meta23085;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.timeline_chart.t23084.cljs$lang$type = true;
clustermap.components.timeline_chart.t23084.cljs$lang$ctorStr = "clustermap.components.timeline-chart/t23084";
clustermap.components.timeline_chart.t23084.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.timeline-chart/t23084");
});
clustermap.components.timeline_chart.t23084.prototype.om$core$IDidUpdate$ = true;
clustermap.components.timeline_chart.t23084.prototype.om$core$IDidUpdate$did_update$arity$4 = (function (this$,prev_props,prev_state,root_node){var self__ = this;
var this$__$1 = this;return clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
});
clustermap.components.timeline_chart.t23084.prototype.om$core$IDidMount$ = true;
clustermap.components.timeline_chart.t23084.prototype.om$core$IDidMount$did_mount$arity$2 = (function (this$,node){var self__ = this;
var this$__$1 = this;clustermap.components.timeline_chart.create_chart(self__.data,om.core.get_node(self__.owner,"chart"),self__.opts);
return jayq.core.$.cljs$core$IFn$_invoke$arity$1(document).on("clustermap-change-view",(function (e){var chart = jayq.core.$.cljs$core$IFn$_invoke$arity$1(om.core.get_node(self__.owner,"chart"));if(cljs.core.truth_(chart.is(":visible")))
{return chart.highcharts().reflow();
} else
{return null;
}
}));
});
clustermap.components.timeline_chart.t23084.prototype.om$core$IRender$ = true;
clustermap.components.timeline_chart.t23084.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.div({"className": "timeline-chart", "id": self__.id, "ref": "chart"});
});
clustermap.components.timeline_chart.t23084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23086){var self__ = this;
var _23086__$1 = this;return self__.meta23085;
});
clustermap.components.timeline_chart.t23084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23086,meta23085__$1){var self__ = this;
var _23086__$1 = this;return (new clustermap.components.timeline_chart.t23084(self__.id,self__.opts,self__.map__23083,self__.p__23078,self__.owner,self__.data,self__.timeline_chart,meta23085__$1));
});
clustermap.components.timeline_chart.__GT_t23084 = (function __GT_t23084(id__$1,opts__$1,map__23083__$2,p__23078__$1,owner__$1,data__$1,timeline_chart__$1,meta23085){return (new clustermap.components.timeline_chart.t23084(id__$1,opts__$1,map__23083__$2,p__23078__$1,owner__$1,data__$1,timeline_chart__$1,meta23085));
});
}
return (new clustermap.components.timeline_chart.t23084(id,opts,map__23083__$1,p__23078,owner,data,timeline_chart,null));
});
