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
clustermap.components.full_report.details.details = (function details(data,owner){if(typeof clustermap.components.full_report.details.t21672 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.details.t21672 = (function (owner,data,details,meta21673){
this.owner = owner;
this.data = data;
this.details = details;
this.meta21673 = meta21673;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.details.t21672.cljs$lang$type = true;
clustermap.components.full_report.details.t21672.cljs$lang$ctorStr = "clustermap.components.full-report.details/t21672";
clustermap.components.full_report.details.t21672.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.details/t21672");
});
clustermap.components.full_report.details.t21672.prototype.om$core$IRender$ = true;
clustermap.components.full_report.details.t21672.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;var attrs21675 = (function (){var temp__4090__auto__ = cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(temp__4090__auto__))
{var timelines = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$344,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$345,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$346,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$345,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$347,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$348,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$349,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,"Turnover"], null),om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Turnover",cljs.core.constant$keyword$326,"# Filings"], null),cljs.core.constant$keyword$271,"turnover-chart"], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$348,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$351,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$350,"Employment"], null),om.core.build.cljs$core$IFn$_invoke$arity$3(clustermap.components.timeline_chart.timeline_chart,cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$274,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$327,"Employment",cljs.core.constant$keyword$326,"# Filings"], null),cljs.core.constant$keyword$271,"employment-chart"], null))], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
})();if(cljs.core.map_QMARK_(attrs21675))
{return React.DOM.div(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$237,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-details"], null)], null),attrs21675], 0))),null);
} else
{return React.DOM.div({"className": "full-report-details"},sablono.interpreter.interpret(attrs21675));
}
});
clustermap.components.full_report.details.t21672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21674){var self__ = this;
var _21674__$1 = this;return self__.meta21673;
});
clustermap.components.full_report.details.t21672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21674,meta21673__$1){var self__ = this;
var _21674__$1 = this;return (new clustermap.components.full_report.details.t21672(self__.owner,self__.data,self__.details,meta21673__$1));
});
clustermap.components.full_report.details.__GT_t21672 = (function __GT_t21672(owner__$1,data__$1,details__$1,meta21673){return (new clustermap.components.full_report.details.t21672(owner__$1,data__$1,details__$1,meta21673));
});
}
return (new clustermap.components.full_report.details.t21672(owner,data,details,null));
});
