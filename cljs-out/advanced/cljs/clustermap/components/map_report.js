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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1509) : view_path_fn.call(null,cljs.core.constant$keyword$1509))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__44329){var map__44351 = p__44329;var map__44351__$1 = ((cljs.core.seq_QMARK_(map__44351))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44351):map__44351);var summary_stats_data = map__44351__$1;var map__44352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44351__$1,cljs.core.constant$keyword$1275);var map__44352__$1 = ((cljs.core.seq_QMARK_(map__44352))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44352):map__44352);var data = map__44352__$1;var map__44353 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44352__$1,cljs.core.constant$keyword$1553);var map__44353__$1 = ((cljs.core.seq_QMARK_(map__44353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44353):map__44353);var sum_employee_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44353__$1,cljs.core.constant$keyword$1554);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44353__$1,cljs.core.constant$keyword$1555);var map__44354 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44352__$1,cljs.core.constant$keyword$1556);var map__44354__$1 = ((cljs.core.seq_QMARK_(map__44354))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44354):map__44354);var sum_turnover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44354__$1,cljs.core.constant$keyword$1554);return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs44357 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(count,cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,count,cljs.core.constant$keyword$1091,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs44357))?sablono.interpreter.attributes(attrs44357):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44357))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44357),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs44362 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(sum_turnover,cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-") : clustermap.formats.money.fmoney.call(null,sum_turnover,cljs.core.constant$keyword$1285,(2),cljs.core.constant$keyword$1091,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs44362))?sablono.interpreter.attributes(attrs44362):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44362))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44362),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs44367 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(sum_employee_count,cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-") : clustermap.formats.number.fnum.call(null,sum_employee_count,cljs.core.constant$keyword$1287,(0),cljs.core.constant$keyword$1091,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs44367))?sablono.interpreter.attributes(attrs44367):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs44367))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs44367),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.summary_stats,cljs.core.array_seq([index,index_type,attrs,filter,bounds], 0));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__44372,owner){var map__44392 = p__44372;var map__44392__$1 = ((cljs.core.seq_QMARK_(map__44392))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44392):map__44392);var data = map__44392__$1;var map__44393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44392__$1,cljs.core.constant$keyword$1128);var map__44393__$1 = ((cljs.core.seq_QMARK_(map__44393))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44393):map__44393);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,cljs.core.constant$keyword$1289);var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44393__$1,cljs.core.constant$keyword$1304);var map__44394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44392__$1,cljs.core.constant$keyword$1557);var map__44394__$1 = ((cljs.core.seq_QMARK_(map__44394))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44394):map__44394);var map_report = map__44394__$1;var map__44395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44394__$1,cljs.core.constant$keyword$1354);var map__44395__$1 = ((cljs.core.seq_QMARK_(map__44395))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44395):map__44395);var controls = map__44395__$1;var map__44396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44395__$1,cljs.core.constant$keyword$1558);var map__44396__$1 = ((cljs.core.seq_QMARK_(map__44396))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44396):map__44396);var summary_stats = map__44396__$1;var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44396__$1,cljs.core.constant$keyword$1559);var index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44396__$1,cljs.core.constant$keyword$1355);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44396__$1,cljs.core.constant$keyword$1136);var summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44394__$1,cljs.core.constant$keyword$1560);var map__44397 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44392__$1,cljs.core.constant$keyword$1561);var map__44397__$1 = ((cljs.core.seq_QMARK_(map__44397))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44397):map__44397);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44397__$1,cljs.core.constant$keyword$1120);if(typeof clustermap.components.map_report.t44398 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t44398 = (function (map__44393,filt,index_type,map__44395,owner,map__44392,filter_by_view,data,p__44372,index,map__44396,map__44394,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__44397,meta44399){
this.map__44393 = map__44393;
this.filt = filt;
this.index_type = index_type;
this.map__44395 = map__44395;
this.owner = owner;
this.map__44392 = map__44392;
this.filter_by_view = filter_by_view;
this.data = data;
this.p__44372 = p__44372;
this.index = index;
this.map__44396 = map__44396;
this.map__44394 = map__44394;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.bounds = bounds;
this.map__44397 = map__44397;
this.meta44399 = meta44399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t44398.cljs$lang$type = true;
clustermap.components.map_report.t44398.cljs$lang$ctorStr = "clustermap.components.map-report/t44398";
clustermap.components.map_report.t44398.cljs$lang$ctorPrWriter = ((function (map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map-report/t44398");
});})(map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds))
;
clustermap.components.map_report.t44398.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t44398.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds){
return (function (_,p__44401,p__44402){var self__ = this;
var map__44403 = p__44401;var map__44403__$1 = ((cljs.core.seq_QMARK_(map__44403))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44403):map__44403);var next_data = map__44403__$1;var map__44404 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44403__$1,cljs.core.constant$keyword$1128);var map__44404__$1 = ((cljs.core.seq_QMARK_(map__44404))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44404):map__44404);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44404__$1,cljs.core.constant$keyword$1289);var next_filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44404__$1,cljs.core.constant$keyword$1304);var map__44405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44403__$1,cljs.core.constant$keyword$1557);var map__44405__$1 = ((cljs.core.seq_QMARK_(map__44405))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44405):map__44405);var next_map_report = map__44405__$1;var map__44406 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44405__$1,cljs.core.constant$keyword$1354);var map__44406__$1 = ((cljs.core.seq_QMARK_(map__44406))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44406):map__44406);var next_controls = map__44406__$1;var map__44407 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44406__$1,cljs.core.constant$keyword$1558);var map__44407__$1 = ((cljs.core.seq_QMARK_(map__44407))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44407):map__44407);var next_summary_stats = map__44407__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44407__$1,cljs.core.constant$keyword$1136);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44407__$1,cljs.core.constant$keyword$1355);var next_variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44407__$1,cljs.core.constant$keyword$1559);var next_summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44405__$1,cljs.core.constant$keyword$1560);var map__44408 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44403__$1,cljs.core.constant$keyword$1561);var map__44408__$1 = ((cljs.core.seq_QMARK_(map__44408))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44408):map__44408);var map_controls = map__44408__$1;var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44408__$1,cljs.core.constant$keyword$1120);var map__44409 = p__44402;var map__44409__$1 = ((cljs.core.seq_QMARK_(map__44409))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44409):map__44409);var next_state = map__44409__$1;var summary_stats_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44409__$1,cljs.core.constant$keyword$1562);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_summary_stats_data);if(or__3558__auto__)
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
});})(map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds))
;
clustermap.components.map_report.t44398.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t44398.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__44410 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__44410__$1 = ((cljs.core.seq_QMARK_(map__44410))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__44410):map__44410);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44410__$1,cljs.core.constant$keyword$1563);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44410__$1,cljs.core.constant$keyword$1466);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44410__$1,cljs.core.constant$keyword$1282);return clustermap.components.map_report.summary_stats_report(self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds))
;
clustermap.components.map_report.t44398.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t44398.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource("summary-stats");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1562,ssr);
return clustermap.ordered_resource.retrieve_responses(ssr,((function (ssr,___$1,map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds){
return (function (ss){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1560], null),ss);
});})(ssr,___$1,map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds))
);
});})(map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds))
;
clustermap.components.map_report.t44398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds){
return (function (_44400){var self__ = this;
var _44400__$1 = this;return self__.meta44399;
});})(map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds))
;
clustermap.components.map_report.t44398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds){
return (function (_44400,meta44399__$1){var self__ = this;
var _44400__$1 = this;return (new clustermap.components.map_report.t44398(self__.map__44393,self__.filt,self__.index_type,self__.map__44395,self__.owner,self__.map__44392,self__.filter_by_view,self__.data,self__.p__44372,self__.index,self__.map__44396,self__.map__44394,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.bounds,self__.map__44397,meta44399__$1));
});})(map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds))
;
clustermap.components.map_report.__GT_t44398 = ((function (map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds){
return (function __GT_t44398(map__44393__$2,filt__$1,index_type__$1,map__44395__$2,owner__$1,map__44392__$2,filter_by_view__$1,data__$1,p__44372__$1,index__$1,map__44396__$2,map__44394__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__44397__$2,meta44399){return (new clustermap.components.map_report.t44398(map__44393__$2,filt__$1,index_type__$1,map__44395__$2,owner__$1,map__44392__$2,filter_by_view__$1,data__$1,p__44372__$1,index__$1,map__44396__$2,map__44394__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__44397__$2,meta44399));
});})(map__44392,map__44392__$1,data,map__44393,map__44393__$1,filter_by_view,filt,map__44394,map__44394__$1,map_report,map__44395,map__44395__$1,controls,map__44396,map__44396__$1,summary_stats,variables,index_type,index,summary_stats_data,map__44397,map__44397__$1,bounds))
;
}
return (new clustermap.components.map_report.t44398(map__44393__$1,filt,index_type,map__44395__$1,owner,map__44392__$1,filter_by_view,data,p__44372,index,map__44396__$1,map__44394__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__44397__$1,null));
});
