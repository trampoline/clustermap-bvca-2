// Compiled by ClojureScript 0.0-2322
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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1432) : view_path_fn.call(null,cljs.core.constant$keyword$1432))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__46964){var map__46986 = p__46964;var map__46986__$1 = ((cljs.core.seq_QMARK_(map__46986))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46986):map__46986);var summary_stats_data = map__46986__$1;var map__46987 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46986__$1,cljs.core.constant$keyword$1240);var map__46987__$1 = ((cljs.core.seq_QMARK_(map__46987))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46987):map__46987);var data = map__46987__$1;var map__46988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46987__$1,cljs.core.constant$keyword$1442);var map__46988__$1 = ((cljs.core.seq_QMARK_(map__46988))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46988):map__46988);var sum_employee_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46988__$1,cljs.core.constant$keyword$1443);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46988__$1,cljs.core.constant$keyword$1444);var map__46989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46987__$1,cljs.core.constant$keyword$1445);var map__46989__$1 = ((cljs.core.seq_QMARK_(map__46989))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46989):map__46989);var sum_turnover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46989__$1,cljs.core.constant$keyword$1443);return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs46992 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(count,cljs.core.constant$keyword$1085,"-") : clustermap.formats.number.fnum.call(null,count,cljs.core.constant$keyword$1085,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs46992))?sablono.interpreter.attributes(attrs46992):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46992))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46992),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs46997 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(sum_turnover,cljs.core.constant$keyword$1128,(2),cljs.core.constant$keyword$1085,"-") : clustermap.formats.money.fmoney.call(null,sum_turnover,cljs.core.constant$keyword$1128,(2),cljs.core.constant$keyword$1085,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs46997))?sablono.interpreter.attributes(attrs46997):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46997))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46997),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs47002 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(sum_employee_count,cljs.core.constant$keyword$1130,(0),cljs.core.constant$keyword$1085,"-") : clustermap.formats.number.fnum.call(null,sum_employee_count,cljs.core.constant$keyword$1130,(0),cljs.core.constant$keyword$1085,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs47002))?sablono.interpreter.attributes(attrs47002):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47002))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47002),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.summary_stats,cljs.core.array_seq([index,index_type,attrs,filter,bounds], 0));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__47007,owner){var map__47027 = p__47007;var map__47027__$1 = ((cljs.core.seq_QMARK_(map__47027))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47027):map__47027);var data = map__47027__$1;var map__47028 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47027__$1,cljs.core.constant$keyword$1122);var map__47028__$1 = ((cljs.core.seq_QMARK_(map__47028))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47028):map__47028);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47028__$1,cljs.core.constant$keyword$1271);var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47028__$1,cljs.core.constant$keyword$1272);var map__47029 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47027__$1,cljs.core.constant$keyword$1446);var map__47029__$1 = ((cljs.core.seq_QMARK_(map__47029))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47029):map__47029);var map_report = map__47029__$1;var map__47030 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47029__$1,cljs.core.constant$keyword$1267);var map__47030__$1 = ((cljs.core.seq_QMARK_(map__47030))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47030):map__47030);var controls = map__47030__$1;var map__47031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47030__$1,cljs.core.constant$keyword$1447);var map__47031__$1 = ((cljs.core.seq_QMARK_(map__47031))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47031):map__47031);var summary_stats = map__47031__$1;var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47031__$1,cljs.core.constant$keyword$1448);var index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47031__$1,cljs.core.constant$keyword$1268);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47031__$1,cljs.core.constant$keyword$1133);var summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47029__$1,cljs.core.constant$keyword$1449);var map__47032 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47027__$1,cljs.core.constant$keyword$1450);var map__47032__$1 = ((cljs.core.seq_QMARK_(map__47032))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47032):map__47032);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47032__$1,cljs.core.constant$keyword$1114);if(typeof clustermap.components.map_report.t47033 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t47033 = (function (map__47031,filt,index_type,map__47028,owner,filter_by_view,data,index,map__47027,controls,summary_stats_data,map__47032,map_report,summary_stats,map_report_component,map__47030,variables,bounds,map__47029,p__47007,meta47034){
this.map__47031 = map__47031;
this.filt = filt;
this.index_type = index_type;
this.map__47028 = map__47028;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.index = index;
this.map__47027 = map__47027;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map__47032 = map__47032;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__47030 = map__47030;
this.variables = variables;
this.bounds = bounds;
this.map__47029 = map__47029;
this.p__47007 = p__47007;
this.meta47034 = meta47034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t47033.cljs$lang$type = true;
clustermap.components.map_report.t47033.cljs$lang$ctorStr = "clustermap.components.map-report/t47033";
clustermap.components.map_report.t47033.cljs$lang$ctorPrWriter = ((function (map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map-report/t47033");
});})(map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds))
;
clustermap.components.map_report.t47033.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t47033.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds){
return (function (_,p__47036,p__47037){var self__ = this;
var map__47038 = p__47036;var map__47038__$1 = ((cljs.core.seq_QMARK_(map__47038))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47038):map__47038);var next_data = map__47038__$1;var map__47039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,cljs.core.constant$keyword$1122);var map__47039__$1 = ((cljs.core.seq_QMARK_(map__47039))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47039):map__47039);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47039__$1,cljs.core.constant$keyword$1271);var next_filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47039__$1,cljs.core.constant$keyword$1272);var map__47040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,cljs.core.constant$keyword$1446);var map__47040__$1 = ((cljs.core.seq_QMARK_(map__47040))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47040):map__47040);var next_map_report = map__47040__$1;var map__47041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47040__$1,cljs.core.constant$keyword$1267);var map__47041__$1 = ((cljs.core.seq_QMARK_(map__47041))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47041):map__47041);var next_controls = map__47041__$1;var map__47042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47041__$1,cljs.core.constant$keyword$1447);var map__47042__$1 = ((cljs.core.seq_QMARK_(map__47042))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47042):map__47042);var next_summary_stats = map__47042__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47042__$1,cljs.core.constant$keyword$1133);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47042__$1,cljs.core.constant$keyword$1268);var next_variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47042__$1,cljs.core.constant$keyword$1448);var next_summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47040__$1,cljs.core.constant$keyword$1449);var map__47043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47038__$1,cljs.core.constant$keyword$1450);var map__47043__$1 = ((cljs.core.seq_QMARK_(map__47043))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47043):map__47043);var map_controls = map__47043__$1;var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47043__$1,cljs.core.constant$keyword$1114);var map__47044 = p__47037;var map__47044__$1 = ((cljs.core.seq_QMARK_(map__47044))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47044):map__47044);var next_state = map__47044__$1;var summary_stats_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47044__$1,cljs.core.constant$keyword$1451);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_summary_stats_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filt,self__.filt);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds);
} else
{return and__3546__auto__;
}
}
}
}
})()))
{return clustermap.components.map_report.request_summary_stats(summary_stats_resource,next_index,next_index_type,next_variables,next_filt,(cljs.core.truth_(next_filter_by_view)?om.core._value(next_bounds):null));
} else
{return null;
}
});})(map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds))
;
clustermap.components.map_report.t47033.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t47033.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__47045 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__47045__$1 = ((cljs.core.seq_QMARK_(map__47045))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47045):map__47045);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47045__$1,cljs.core.constant$keyword$1452);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47045__$1,cljs.core.constant$keyword$1374);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47045__$1,cljs.core.constant$keyword$1385);return clustermap.components.map_report.summary_stats_report(self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds))
;
clustermap.components.map_report.t47033.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t47033.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource("summary-stats");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1451,ssr);
return clustermap.ordered_resource.retrieve_responses(ssr,((function (ssr,___$1,map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds){
return (function (ss){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1449], null),ss);
});})(ssr,___$1,map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds))
);
});})(map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds))
;
clustermap.components.map_report.t47033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds){
return (function (_47035){var self__ = this;
var _47035__$1 = this;return self__.meta47034;
});})(map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds))
;
clustermap.components.map_report.t47033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds){
return (function (_47035,meta47034__$1){var self__ = this;
var _47035__$1 = this;return (new clustermap.components.map_report.t47033(self__.map__47031,self__.filt,self__.index_type,self__.map__47028,self__.owner,self__.filter_by_view,self__.data,self__.index,self__.map__47027,self__.controls,self__.summary_stats_data,self__.map__47032,self__.map_report,self__.summary_stats,self__.map_report_component,self__.map__47030,self__.variables,self__.bounds,self__.map__47029,self__.p__47007,meta47034__$1));
});})(map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds))
;
clustermap.components.map_report.__GT_t47033 = ((function (map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds){
return (function __GT_t47033(map__47031__$2,filt__$1,index_type__$1,map__47028__$2,owner__$1,filter_by_view__$1,data__$1,index__$1,map__47027__$2,controls__$1,summary_stats_data__$1,map__47032__$2,map_report__$1,summary_stats__$1,map_report_component__$1,map__47030__$2,variables__$1,bounds__$1,map__47029__$2,p__47007__$1,meta47034){return (new clustermap.components.map_report.t47033(map__47031__$2,filt__$1,index_type__$1,map__47028__$2,owner__$1,filter_by_view__$1,data__$1,index__$1,map__47027__$2,controls__$1,summary_stats_data__$1,map__47032__$2,map_report__$1,summary_stats__$1,map_report_component__$1,map__47030__$2,variables__$1,bounds__$1,map__47029__$2,p__47007__$1,meta47034));
});})(map__47027,map__47027__$1,data,map__47028,map__47028__$1,filter_by_view,filt,map__47029,map__47029__$1,map_report,map__47030,map__47030__$1,controls,map__47031,map__47031__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47032,map__47032__$1,bounds))
;
}
return (new clustermap.components.map_report.t47033(map__47031__$1,filt,index_type,map__47028__$1,owner,filter_by_view,data,index,map__47027__$1,controls,summary_stats_data,map__47032__$1,map_report,summary_stats,map_report_component,map__47030__$1,variables,bounds,map__47029__$1,p__47007,null));
});
