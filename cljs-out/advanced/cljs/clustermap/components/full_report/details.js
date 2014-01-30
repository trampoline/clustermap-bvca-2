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
clustermap.components.full_report.details.details = (function details(data,owner){if(typeof clustermap.components.full_report.details.t11437 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.details.t11437 = (function (owner,data,details,meta11438){
this.owner = owner;
this.data = data;
this.details = details;
this.meta11438 = meta11438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.details.t11437.cljs$lang$type = true;
clustermap.components.full_report.details.t11437.cljs$lang$ctorStr = "clustermap.components.full-report.details/t11437";
clustermap.components.full_report.details.t11437.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.details/t11437");
});
clustermap.components.full_report.details.t11437.prototype.om$core$IRender$ = true;
clustermap.components.full_report.details.t11437.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;var attrs11440 = (function (){var temp__4090__auto__ = cljs.core.constant$keyword$131.cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(temp__4090__auto__))
{var timelines = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$132,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$133,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$133,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$135,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$137,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,"Turnover"], null),om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,"Turnover",cljs.core.constant$keyword$116,"# Filings"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$136,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$139,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$138,"Employment"], null),om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$70,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$117,"Employment",cljs.core.constant$keyword$116,"# Filings"], null)], null))], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
})();if(cljs.core.map_QMARK_(attrs11440))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$32,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-details"], null)], null),attrs11440], 0))),null);
} else
{return React.DOM.div({"className": "full-report-details"},sablono.interpreter.interpret(attrs11440));
}
});
clustermap.components.full_report.details.t11437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11439){var self__ = this;
var _11439__$1 = this;return self__.meta11438;
});
clustermap.components.full_report.details.t11437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11439,meta11438__$1){var self__ = this;
var _11439__$1 = this;return (new clustermap.components.full_report.details.t11437(self__.owner,self__.data,self__.details,meta11438__$1));
});
clustermap.components.full_report.details.__GT_t11437 = (function __GT_t11437(owner__$1,data__$1,details__$1,meta11438){return (new clustermap.components.full_report.details.t11437(owner__$1,data__$1,details__$1,meta11438));
});
}
return (new clustermap.components.full_report.details.t11437(owner,data,details,null));
});
