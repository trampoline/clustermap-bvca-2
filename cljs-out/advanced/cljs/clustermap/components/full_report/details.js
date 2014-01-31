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
clustermap.components.full_report.details.details = (function details(data,owner){if(typeof clustermap.components.full_report.details.t21402 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.details.t21402 = (function (owner,data,details,meta21403){
this.owner = owner;
this.data = data;
this.details = details;
this.meta21403 = meta21403;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.details.t21402.cljs$lang$type = true;
clustermap.components.full_report.details.t21402.cljs$lang$ctorStr = "clustermap.components.full-report.details/t21402";
clustermap.components.full_report.details.t21402.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.details/t21402");
});
clustermap.components.full_report.details.t21402.prototype.om$core$IRender$ = true;
clustermap.components.full_report.details.t21402.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;var attrs21405 = (function (){var temp__4090__auto__ = cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(temp__4090__auto__))
{var timelines = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$322,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$323,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$323,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$325,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$327,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328,"Turnover"], null),om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,"Turnover",cljs.core.constant$keyword$304,"# Filings"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$326,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$329,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$328,"Employment"], null),om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$257,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$305,"Employment",cljs.core.constant$keyword$304,"# Filings"], null)], null))], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
})();if(cljs.core.map_QMARK_(attrs21405))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-details"], null)], null),attrs21405], 0))),null);
} else
{return React.DOM.div({"className": "full-report-details"},sablono.interpreter.interpret(attrs21405));
}
});
clustermap.components.full_report.details.t21402.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21404){var self__ = this;
var _21404__$1 = this;return self__.meta21403;
});
clustermap.components.full_report.details.t21402.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21404,meta21403__$1){var self__ = this;
var _21404__$1 = this;return (new clustermap.components.full_report.details.t21402(self__.owner,self__.data,self__.details,meta21403__$1));
});
clustermap.components.full_report.details.__GT_t21402 = (function __GT_t21402(owner__$1,data__$1,details__$1,meta21403){return (new clustermap.components.full_report.details.t21402(owner__$1,data__$1,details__$1,meta21403));
});
}
return (new clustermap.components.full_report.details.t21402(owner,data,details,null));
});
