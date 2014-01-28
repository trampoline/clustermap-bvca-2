// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.details');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.core');
goog.require('clustermap.components.timeline_chart');
goog.require('om.core');
goog.require('clustermap.components.timeline_chart');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
clustermap.components.full_report.details.details = (function details(data,owner){if(typeof clustermap.components.full_report.details.t20923 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.details.t20923 = (function (owner,data,details,meta20924){
this.owner = owner;
this.data = data;
this.details = details;
this.meta20924 = meta20924;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.details.t20923.cljs$lang$type = true;
clustermap.components.full_report.details.t20923.cljs$lang$ctorStr = "clustermap.components.full-report.details/t20923";
clustermap.components.full_report.details.t20923.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.details/t20923");
});
clustermap.components.full_report.details.t20923.prototype.om$core$IRender$ = true;
clustermap.components.full_report.details.t20923.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;var attrs20926 = (function (){var temp__4090__auto__ = cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(temp__4090__auto__))
{var timelines = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$304,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$306,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$305,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$307,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$309,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,"Turnover"], null),om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$290,"Turnover",cljs.core.constant$keyword$289,"# Filings"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$308,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$311,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$310,"Employment"], null),om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$246,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$290,"Employment",cljs.core.constant$keyword$289,"# Filings"], null)], null))], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
})();if(cljs.core.map_QMARK_(attrs20926))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$208,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-details"], null)], null),attrs20926], 0))),null);
} else
{return React.DOM.div({"className": "full-report-details"},sablono.interpreter.interpret(attrs20926));
}
});
clustermap.components.full_report.details.t20923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20925){var self__ = this;
var _20925__$1 = this;return self__.meta20924;
});
clustermap.components.full_report.details.t20923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20925,meta20924__$1){var self__ = this;
var _20925__$1 = this;return (new clustermap.components.full_report.details.t20923(self__.owner,self__.data,self__.details,meta20924__$1));
});
clustermap.components.full_report.details.__GT_t20923 = (function __GT_t20923(owner__$1,data__$1,details__$1,meta20924){return (new clustermap.components.full_report.details.t20923(owner__$1,data__$1,details__$1,meta20924));
});
}
return (new clustermap.components.full_report.details.t20923(owner,data,details,null));
});
