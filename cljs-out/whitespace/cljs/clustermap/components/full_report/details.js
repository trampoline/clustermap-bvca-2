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
clustermap.components.full_report.details.details = (function details(data,owner){if(typeof clustermap.components.full_report.details.t31678 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.details.t31678 = (function (owner,data,details,meta31679){
this.owner = owner;
this.data = data;
this.details = details;
this.meta31679 = meta31679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.details.t31678.cljs$lang$type = true;
clustermap.components.full_report.details.t31678.cljs$lang$ctorStr = "clustermap.components.full-report.details/t31678";
clustermap.components.full_report.details.t31678.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.details/t31678");
});
clustermap.components.full_report.details.t31678.prototype.om$core$IRender$ = true;
clustermap.components.full_report.details.t31678.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;var attrs31681 = (function (){var temp__4090__auto__ = new cljs.core.Keyword(null,"selection-portfolio-company-site-account-timelines","selection-portfolio-company-site-account-timelines",3586704052).cljs$core$IFn$_invoke$arity$1(self__.data);if(cljs.core.truth_(temp__4090__auto__))
{var timelines = temp__4090__auto__;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid","div.grid",1323787765),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl","div.tbl",2686480467),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell.charts","div.tbl-cell.charts",2527561447),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl","div.tbl",2686480467),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-row","div.tbl-row",1065043552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",2598766144),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box.box-first","div.box.box-first",2223624352),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",4087600639),"Turnover"], null),om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y0-title","y0-title",2489744212),"Turnover",new cljs.core.Keyword(null,"y1-title","y1-title",3377247893),"# Filings"], null)], null))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tbl-cell","div.tbl-cell",2598766144),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.box.box-last","div.box.box-last",1468740554),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",4087600639),"Employment"], null),om.core.build.call(null,clustermap.components.timeline_chart.timeline_chart,new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(timelines),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y0-title","y0-title",2489744212),"Employment",new cljs.core.Keyword(null,"y1-title","y1-title",3377247893),"# Filings"], null)], null))], null)], null)], null)], null)], null)], null)], null);
} else
{return null;
}
})();if(cljs.core.map_QMARK_.call(null,attrs31681))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-details"], null)], null),attrs31681)),null);
} else
{return React.DOM.div({"className": "full-report-details"},sablono.interpreter.interpret.call(null,attrs31681));
}
});
clustermap.components.full_report.details.t31678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31680){var self__ = this;
var _31680__$1 = this;return self__.meta31679;
});
clustermap.components.full_report.details.t31678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31680,meta31679__$1){var self__ = this;
var _31680__$1 = this;return (new clustermap.components.full_report.details.t31678(self__.owner,self__.data,self__.details,meta31679__$1));
});
clustermap.components.full_report.details.__GT_t31678 = (function __GT_t31678(owner__$1,data__$1,details__$1,meta31679){return (new clustermap.components.full_report.details.t31678(owner__$1,data__$1,details__$1,meta31679));
});
}
return (new clustermap.components.full_report.details.t31678(owner,data,details,null));
});
