// Compiled by ClojureScript 0.0-2356
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('clustermap.api');
goog.require('clustermap.formats.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('domina.events');
goog.require('clustermap.ordered_resource');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.string');
goog.require('clustermap.components.reset_selection_button');
goog.require('clustermap.components.reset_selection_button');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.api');
goog.require('clustermap.ordered_resource');
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){var G__55955 = {"className": "btn btn-link", "href": (function (){var G__55958 = cljs.core.constant$keyword$1539;return (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(G__55958) : view_path_fn.call(null,G__55958));
})()};var G__55956 = (function (){var G__55959 = {"className": "icon-lists-sm"};return React.DOM.i(G__55959);
})();var G__55957 = "Full report";return React.DOM.a(G__55955,G__55956,G__55957);
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__55960){var map__56019 = p__55960;var map__56019__$1 = ((cljs.core.seq_QMARK_(map__56019))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56019):map__56019);var summary_stats_data = map__56019__$1;var map__56020 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56019__$1,cljs.core.constant$keyword$1305);var map__56020__$1 = ((cljs.core.seq_QMARK_(map__56020))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56020):map__56020);var data = map__56020__$1;var map__56021 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,cljs.core.constant$keyword$1583);var map__56021__$1 = ((cljs.core.seq_QMARK_(map__56021))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56021):map__56021);var sum_employee_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56021__$1,cljs.core.constant$keyword$1584);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56021__$1,cljs.core.constant$keyword$1585);var map__56022 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,cljs.core.constant$keyword$1586);var map__56022__$1 = ((cljs.core.seq_QMARK_(map__56022))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56022):map__56022);var sum_turnover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56022__$1,cljs.core.constant$keyword$1584);var G__56040 = null;var G__56041 = (function (){var G__56044 = {"className": "header secondary"};var G__56045 = (function (){var G__56046 = null;var G__56047 = "Summary stats";return React.DOM.h2(G__56046,G__56047);
})();return React.DOM.div(G__56044,G__56045);
})();var G__56042 = (function (){var G__56048 = null;var G__56049 = (function (){var attrs56025 = (function (){var G__56052 = count;var G__56053 = cljs.core.constant$keyword$1111;var G__56054 = "-";return (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(G__56052,G__56053,G__56054) : clustermap.formats.number.fnum.call(null,G__56052,G__56053,G__56054));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs56025))?sablono.interpreter.attributes(attrs56025):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56025))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56055 = null;var G__56056 = "Companies";return React.DOM.small(G__56055,G__56056);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56025),(function (){var G__56057 = null;var G__56058 = "Companies";return React.DOM.small(G__56057,G__56058);
})()], null))));
})();var G__56050 = (function (){var attrs56030 = (function (){var G__56059 = sum_turnover;var G__56060 = cljs.core.constant$keyword$1315;var G__56061 = (2);var G__56062 = cljs.core.constant$keyword$1111;var G__56063 = "-";return (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(G__56059,G__56060,G__56061,G__56062,G__56063) : clustermap.formats.money.fmoney.call(null,G__56059,G__56060,G__56061,G__56062,G__56063));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs56030))?sablono.interpreter.attributes(attrs56030):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56030))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56064 = null;var G__56065 = "Total revenue";return React.DOM.small(G__56064,G__56065);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56030),(function (){var G__56066 = null;var G__56067 = "Total revenue";return React.DOM.small(G__56066,G__56067);
})()], null))));
})();var G__56051 = (function (){var attrs56035 = (function (){var G__56068 = sum_employee_count;var G__56069 = cljs.core.constant$keyword$1317;var G__56070 = (0);var G__56071 = cljs.core.constant$keyword$1111;var G__56072 = "-";return (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(G__56068,G__56069,G__56070,G__56071,G__56072) : clustermap.formats.number.fnum.call(null,G__56068,G__56069,G__56070,G__56071,G__56072));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs56035))?sablono.interpreter.attributes(attrs56035):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs56035))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__56073 = null;var G__56074 = "Total employees";return React.DOM.small(G__56073,G__56074);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs56035),(function (){var G__56075 = null;var G__56076 = "Total employees";return React.DOM.small(G__56075,G__56076);
})()], null))));
})();return React.DOM.ul(G__56048,G__56049,G__56050,G__56051);
})();var G__56043 = sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(comm,view_path_fn));return React.DOM.div(G__56040,G__56041,G__56042,G__56043);
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.summary_stats,cljs.core.array_seq([index,index_type,attrs,filter,bounds], 0));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__56077,owner){var map__56097 = p__56077;var map__56097__$1 = ((cljs.core.seq_QMARK_(map__56097))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56097):map__56097);var data = map__56097__$1;var map__56098 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56097__$1,cljs.core.constant$keyword$1150);var map__56098__$1 = ((cljs.core.seq_QMARK_(map__56098))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56098):map__56098);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56098__$1,cljs.core.constant$keyword$1319);var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56098__$1,cljs.core.constant$keyword$1334);var map__56099 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56097__$1,cljs.core.constant$keyword$1587);var map__56099__$1 = ((cljs.core.seq_QMARK_(map__56099))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56099):map__56099);var map_report = map__56099__$1;var map__56100 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56099__$1,cljs.core.constant$keyword$1384);var map__56100__$1 = ((cljs.core.seq_QMARK_(map__56100))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56100):map__56100);var controls = map__56100__$1;var map__56101 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56100__$1,cljs.core.constant$keyword$1588);var map__56101__$1 = ((cljs.core.seq_QMARK_(map__56101))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56101):map__56101);var summary_stats = map__56101__$1;var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56101__$1,cljs.core.constant$keyword$1589);var index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56101__$1,cljs.core.constant$keyword$1385);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56101__$1,cljs.core.constant$keyword$1158);var summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56099__$1,cljs.core.constant$keyword$1590);var map__56102 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56097__$1,cljs.core.constant$keyword$1591);var map__56102__$1 = ((cljs.core.seq_QMARK_(map__56102))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56102):map__56102);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56102__$1,cljs.core.constant$keyword$1142);if(typeof clustermap.components.map_report.t56103 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t56103 = (function (map__56101,filt,index_type,p__56077,owner,filter_by_view,data,index,map__56100,map__56097,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__56102,map__56099,variables,bounds,map__56098,meta56104){
this.map__56101 = map__56101;
this.filt = filt;
this.index_type = index_type;
this.p__56077 = p__56077;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.index = index;
this.map__56100 = map__56100;
this.map__56097 = map__56097;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__56102 = map__56102;
this.map__56099 = map__56099;
this.variables = variables;
this.bounds = bounds;
this.map__56098 = map__56098;
this.meta56104 = meta56104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t56103.cljs$lang$type = true;
clustermap.components.map_report.t56103.cljs$lang$ctorStr = "clustermap.components.map-report/t56103";
clustermap.components.map_report.t56103.cljs$lang$ctorPrWriter = ((function (map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.map-report/t56103");
});})(map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds))
;
clustermap.components.map_report.t56103.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t56103.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds){
return (function (_,p__56106,p__56107){var self__ = this;
var map__56108 = p__56106;var map__56108__$1 = ((cljs.core.seq_QMARK_(map__56108))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56108):map__56108);var next_data = map__56108__$1;var map__56109 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56108__$1,cljs.core.constant$keyword$1150);var map__56109__$1 = ((cljs.core.seq_QMARK_(map__56109))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56109):map__56109);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56109__$1,cljs.core.constant$keyword$1319);var next_filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56109__$1,cljs.core.constant$keyword$1334);var map__56110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56108__$1,cljs.core.constant$keyword$1587);var map__56110__$1 = ((cljs.core.seq_QMARK_(map__56110))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56110):map__56110);var next_map_report = map__56110__$1;var map__56111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56110__$1,cljs.core.constant$keyword$1384);var map__56111__$1 = ((cljs.core.seq_QMARK_(map__56111))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56111):map__56111);var next_controls = map__56111__$1;var map__56112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56111__$1,cljs.core.constant$keyword$1588);var map__56112__$1 = ((cljs.core.seq_QMARK_(map__56112))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56112):map__56112);var next_summary_stats = map__56112__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56112__$1,cljs.core.constant$keyword$1158);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56112__$1,cljs.core.constant$keyword$1385);var next_variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56112__$1,cljs.core.constant$keyword$1589);var next_summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56110__$1,cljs.core.constant$keyword$1590);var map__56113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56108__$1,cljs.core.constant$keyword$1591);var map__56113__$1 = ((cljs.core.seq_QMARK_(map__56113))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56113):map__56113);var map_controls = map__56113__$1;var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56113__$1,cljs.core.constant$keyword$1142);var map__56114 = p__56107;var map__56114__$1 = ((cljs.core.seq_QMARK_(map__56114))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56114):map__56114);var next_state = map__56114__$1;var summary_stats_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56114__$1,cljs.core.constant$keyword$1592);var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not(next_summary_stats_data);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filt,self__.filt);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{var or__3637__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_by_view,self__.filter_by_view);if(or__3637__auto____$2)
{return or__3637__auto____$2;
} else
{var and__3625__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3625__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds);
} else
{return and__3625__auto__;
}
}
}
}
})()))
{return clustermap.components.map_report.request_summary_stats(summary_stats_resource,next_index,next_index_type,next_variables,next_filt,(cljs.core.truth_(next_filter_by_view)?om.core._value(next_bounds):null));
} else
{return null;
}
});})(map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds))
;
clustermap.components.map_report.t56103.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t56103.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__56115 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__56115__$1 = ((cljs.core.seq_QMARK_(map__56115))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56115):map__56115);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56115__$1,cljs.core.constant$keyword$1593);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56115__$1,cljs.core.constant$keyword$1496);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56115__$1,cljs.core.constant$keyword$1312);return clustermap.components.map_report.summary_stats_report(self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds))
;
clustermap.components.map_report.t56103.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t56103.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource("summary-stats");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1592,ssr);
return clustermap.ordered_resource.retrieve_responses(ssr,((function (ssr,___$1,map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds){
return (function (ss){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1590], null),ss);
});})(ssr,___$1,map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds))
);
});})(map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds))
;
clustermap.components.map_report.t56103.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds){
return (function (_56105){var self__ = this;
var _56105__$1 = this;return self__.meta56104;
});})(map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds))
;
clustermap.components.map_report.t56103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds){
return (function (_56105,meta56104__$1){var self__ = this;
var _56105__$1 = this;return (new clustermap.components.map_report.t56103(self__.map__56101,self__.filt,self__.index_type,self__.p__56077,self__.owner,self__.filter_by_view,self__.data,self__.index,self__.map__56100,self__.map__56097,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.map__56102,self__.map__56099,self__.variables,self__.bounds,self__.map__56098,meta56104__$1));
});})(map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds))
;
clustermap.components.map_report.__GT_t56103 = ((function (map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds){
return (function __GT_t56103(map__56101__$2,filt__$1,index_type__$1,p__56077__$1,owner__$1,filter_by_view__$1,data__$1,index__$1,map__56100__$2,map__56097__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__56102__$2,map__56099__$2,variables__$1,bounds__$1,map__56098__$2,meta56104){return (new clustermap.components.map_report.t56103(map__56101__$2,filt__$1,index_type__$1,p__56077__$1,owner__$1,filter_by_view__$1,data__$1,index__$1,map__56100__$2,map__56097__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__56102__$2,map__56099__$2,variables__$1,bounds__$1,map__56098__$2,meta56104));
});})(map__56097,map__56097__$1,data,map__56098,map__56098__$1,filter_by_view,filt,map__56099,map__56099__$1,map_report,map__56100,map__56100__$1,controls,map__56101,map__56101__$1,summary_stats,variables,index_type,index,summary_stats_data,map__56102,map__56102__$1,bounds))
;
}
return (new clustermap.components.map_report.t56103(map__56101__$1,filt,index_type,p__56077,owner,filter_by_view,data,index,map__56100__$1,map__56097__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__56102__$1,map__56099__$1,variables,bounds,map__56098__$1,null));
});
