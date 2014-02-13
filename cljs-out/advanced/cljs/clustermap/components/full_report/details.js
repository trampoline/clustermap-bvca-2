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
clustermap.components.full_report.details.details = (function details(data,owner){if(typeof clustermap.components.full_report.details.t21684 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.details.t21684 = (function (owner,data,details,meta21685){
this.owner = owner;
this.data = data;
this.details = details;
this.meta21685 = meta21685;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.details.t21684.cljs$lang$type = true;
clustermap.components.full_report.details.t21684.cljs$lang$ctorStr = "clustermap.components.full-report.details/t21684";
clustermap.components.full_report.details.t21684.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.details/t21684");
});
clustermap.components.full_report.details.t21684.prototype.om$core$IRender$ = true;
clustermap.components.full_report.details.t21684.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;var attrs21687 = (function (){var temp__4090__auto__ = cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(temp__4090__auto__))
{var timelines = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$339,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$340,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$340,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$342,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$343,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$344,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$345,"Turnover"], null),om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$322,"Turnover",cljs.core.constant$keyword$321,"# Filings"], null),cljs.core.constant$keyword$266,"turnover-chart"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$343,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$346,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$345,"Employment"], null),om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$269,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$322,"Employment",cljs.core.constant$keyword$321,"# Filings"], null),cljs.core.constant$keyword$266,"employment-chart"], null))], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
})();if(cljs.core.map_QMARK_(attrs21687))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$232,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-details"], null)], null),attrs21687], 0))),null);
} else
{return React.DOM.div({"className": "full-report-details"},sablono.interpreter.interpret(attrs21687));
}
});
clustermap.components.full_report.details.t21684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21686){var self__ = this;
var _21686__$1 = this;return self__.meta21685;
});
clustermap.components.full_report.details.t21684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21686,meta21685__$1){var self__ = this;
var _21686__$1 = this;return (new clustermap.components.full_report.details.t21684(self__.owner,self__.data,self__.details,meta21685__$1));
});
clustermap.components.full_report.details.__GT_t21684 = (function __GT_t21684(owner__$1,data__$1,details__$1,meta21685){return (new clustermap.components.full_report.details.t21684(owner__$1,data__$1,details__$1,meta21685));
});
}
return (new clustermap.components.full_report.details.t21684(owner,data,details,null));
});
