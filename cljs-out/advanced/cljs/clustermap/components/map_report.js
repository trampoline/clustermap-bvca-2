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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__46969){var map__46991 = p__46969;var map__46991__$1 = ((cljs.core.seq_QMARK_(map__46991))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46991):map__46991);var summary_stats_data = map__46991__$1;var map__46992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46991__$1,cljs.core.constant$keyword$1240);var map__46992__$1 = ((cljs.core.seq_QMARK_(map__46992))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46992):map__46992);var data = map__46992__$1;var map__46993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46992__$1,cljs.core.constant$keyword$1442);var map__46993__$1 = ((cljs.core.seq_QMARK_(map__46993))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46993):map__46993);var sum_employee_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46993__$1,cljs.core.constant$keyword$1443);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46993__$1,cljs.core.constant$keyword$1444);var map__46994 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46992__$1,cljs.core.constant$keyword$1445);var map__46994__$1 = ((cljs.core.seq_QMARK_(map__46994))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46994):map__46994);var sum_turnover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46994__$1,cljs.core.constant$keyword$1443);return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs46997 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(count,cljs.core.constant$keyword$1085,"-") : clustermap.formats.number.fnum.call(null,count,cljs.core.constant$keyword$1085,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs46997))?sablono.interpreter.attributes(attrs46997):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46997))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46997),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs47002 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(sum_turnover,cljs.core.constant$keyword$1128,(2),cljs.core.constant$keyword$1085,"-") : clustermap.formats.money.fmoney.call(null,sum_turnover,cljs.core.constant$keyword$1128,(2),cljs.core.constant$keyword$1085,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs47002))?sablono.interpreter.attributes(attrs47002):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47002))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47002),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs47007 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(sum_employee_count,cljs.core.constant$keyword$1130,(0),cljs.core.constant$keyword$1085,"-") : clustermap.formats.number.fnum.call(null,sum_employee_count,cljs.core.constant$keyword$1130,(0),cljs.core.constant$keyword$1085,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs47007))?sablono.interpreter.attributes(attrs47007):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs47007))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs47007),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.summary_stats,cljs.core.array_seq([index,index_type,attrs,filter,bounds], 0));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__47012,owner){var map__47032 = p__47012;var map__47032__$1 = ((cljs.core.seq_QMARK_(map__47032))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47032):map__47032);var data = map__47032__$1;var map__47033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47032__$1,cljs.core.constant$keyword$1122);var map__47033__$1 = ((cljs.core.seq_QMARK_(map__47033))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47033):map__47033);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47033__$1,cljs.core.constant$keyword$1271);var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47033__$1,cljs.core.constant$keyword$1272);var map__47034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47032__$1,cljs.core.constant$keyword$1446);var map__47034__$1 = ((cljs.core.seq_QMARK_(map__47034))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47034):map__47034);var map_report = map__47034__$1;var map__47035 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47034__$1,cljs.core.constant$keyword$1267);var map__47035__$1 = ((cljs.core.seq_QMARK_(map__47035))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47035):map__47035);var controls = map__47035__$1;var map__47036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47035__$1,cljs.core.constant$keyword$1447);var map__47036__$1 = ((cljs.core.seq_QMARK_(map__47036))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47036):map__47036);var summary_stats = map__47036__$1;var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47036__$1,cljs.core.constant$keyword$1448);var index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47036__$1,cljs.core.constant$keyword$1268);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47036__$1,cljs.core.constant$keyword$1133);var summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47034__$1,cljs.core.constant$keyword$1449);var map__47037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47032__$1,cljs.core.constant$keyword$1450);var map__47037__$1 = ((cljs.core.seq_QMARK_(map__47037))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47037):map__47037);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47037__$1,cljs.core.constant$keyword$1114);if(typeof clustermap.components.map_report.t47038 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t47038 = (function (filt,index_type,map__47033,owner,filter_by_view,data,map__47035,map__47037,map__47034,index,map__47036,controls,summary_stats_data,map__47032,map_report,summary_stats,map_report_component,variables,p__47012,bounds,meta47039){
this.filt = filt;
this.index_type = index_type;
this.map__47033 = map__47033;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__47035 = map__47035;
this.map__47037 = map__47037;
this.map__47034 = map__47034;
this.index = index;
this.map__47036 = map__47036;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map__47032 = map__47032;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.p__47012 = p__47012;
this.bounds = bounds;
this.meta47039 = meta47039;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t47038.cljs$lang$type = true;
clustermap.components.map_report.t47038.cljs$lang$ctorStr = "clustermap.components.map-report/t47038";
clustermap.components.map_report.t47038.cljs$lang$ctorPrWriter = ((function (map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map-report/t47038");
});})(map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds))
;
clustermap.components.map_report.t47038.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t47038.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds){
return (function (_,p__47041,p__47042){var self__ = this;
var map__47043 = p__47041;var map__47043__$1 = ((cljs.core.seq_QMARK_(map__47043))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47043):map__47043);var next_data = map__47043__$1;var map__47044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47043__$1,cljs.core.constant$keyword$1122);var map__47044__$1 = ((cljs.core.seq_QMARK_(map__47044))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47044):map__47044);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47044__$1,cljs.core.constant$keyword$1271);var next_filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47044__$1,cljs.core.constant$keyword$1272);var map__47045 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47043__$1,cljs.core.constant$keyword$1446);var map__47045__$1 = ((cljs.core.seq_QMARK_(map__47045))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47045):map__47045);var next_map_report = map__47045__$1;var map__47046 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47045__$1,cljs.core.constant$keyword$1267);var map__47046__$1 = ((cljs.core.seq_QMARK_(map__47046))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47046):map__47046);var next_controls = map__47046__$1;var map__47047 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47046__$1,cljs.core.constant$keyword$1447);var map__47047__$1 = ((cljs.core.seq_QMARK_(map__47047))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47047):map__47047);var next_summary_stats = map__47047__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47047__$1,cljs.core.constant$keyword$1133);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47047__$1,cljs.core.constant$keyword$1268);var next_variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47047__$1,cljs.core.constant$keyword$1448);var next_summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47045__$1,cljs.core.constant$keyword$1449);var map__47048 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47043__$1,cljs.core.constant$keyword$1450);var map__47048__$1 = ((cljs.core.seq_QMARK_(map__47048))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47048):map__47048);var map_controls = map__47048__$1;var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47048__$1,cljs.core.constant$keyword$1114);var map__47049 = p__47042;var map__47049__$1 = ((cljs.core.seq_QMARK_(map__47049))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47049):map__47049);var next_state = map__47049__$1;var summary_stats_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47049__$1,cljs.core.constant$keyword$1451);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_summary_stats_data);if(or__3558__auto__)
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
});})(map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds))
;
clustermap.components.map_report.t47038.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t47038.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__47050 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__47050__$1 = ((cljs.core.seq_QMARK_(map__47050))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__47050):map__47050);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47050__$1,cljs.core.constant$keyword$1452);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47050__$1,cljs.core.constant$keyword$1374);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47050__$1,cljs.core.constant$keyword$1385);return clustermap.components.map_report.summary_stats_report(self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds))
;
clustermap.components.map_report.t47038.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t47038.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource("summary-stats");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1451,ssr);
return clustermap.ordered_resource.retrieve_responses(ssr,((function (ssr,___$1,map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds){
return (function (ss){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1449], null),ss);
});})(ssr,___$1,map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds))
);
});})(map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds))
;
clustermap.components.map_report.t47038.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds){
return (function (_47040){var self__ = this;
var _47040__$1 = this;return self__.meta47039;
});})(map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds))
;
clustermap.components.map_report.t47038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds){
return (function (_47040,meta47039__$1){var self__ = this;
var _47040__$1 = this;return (new clustermap.components.map_report.t47038(self__.filt,self__.index_type,self__.map__47033,self__.owner,self__.filter_by_view,self__.data,self__.map__47035,self__.map__47037,self__.map__47034,self__.index,self__.map__47036,self__.controls,self__.summary_stats_data,self__.map__47032,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.p__47012,self__.bounds,meta47039__$1));
});})(map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds))
;
clustermap.components.map_report.__GT_t47038 = ((function (map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds){
return (function __GT_t47038(filt__$1,index_type__$1,map__47033__$2,owner__$1,filter_by_view__$1,data__$1,map__47035__$2,map__47037__$2,map__47034__$2,index__$1,map__47036__$2,controls__$1,summary_stats_data__$1,map__47032__$2,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__47012__$1,bounds__$1,meta47039){return (new clustermap.components.map_report.t47038(filt__$1,index_type__$1,map__47033__$2,owner__$1,filter_by_view__$1,data__$1,map__47035__$2,map__47037__$2,map__47034__$2,index__$1,map__47036__$2,controls__$1,summary_stats_data__$1,map__47032__$2,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__47012__$1,bounds__$1,meta47039));
});})(map__47032,map__47032__$1,data,map__47033,map__47033__$1,filter_by_view,filt,map__47034,map__47034__$1,map_report,map__47035,map__47035__$1,controls,map__47036,map__47036__$1,summary_stats,variables,index_type,index,summary_stats_data,map__47037,map__47037__$1,bounds))
;
}
return (new clustermap.components.map_report.t47038(filt,index_type,map__47033__$1,owner,filter_by_view,data,map__47035__$1,map__47037__$1,map__47034__$1,index,map__47036__$1,controls,summary_stats_data,map__47032__$1,map_report,summary_stats,map_report_component,variables,p__47012,bounds,null));
});
