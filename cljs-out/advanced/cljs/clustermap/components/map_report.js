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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1193) : view_path_fn.call(null,cljs.core.constant$keyword$1193))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__46405){var map__46427 = p__46405;var map__46427__$1 = ((cljs.core.seq_QMARK_(map__46427))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46427):map__46427);var summary_stats_data = map__46427__$1;var map__46428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46427__$1,cljs.core.constant$keyword$1082);var map__46428__$1 = ((cljs.core.seq_QMARK_(map__46428))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46428):map__46428);var data = map__46428__$1;var map__46429 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46428__$1,cljs.core.constant$keyword$1203);var map__46429__$1 = ((cljs.core.seq_QMARK_(map__46429))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46429):map__46429);var sum_employee_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46429__$1,cljs.core.constant$keyword$1204);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46429__$1,cljs.core.constant$keyword$1205);var map__46430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46428__$1,cljs.core.constant$keyword$1206);var map__46430__$1 = ((cljs.core.seq_QMARK_(map__46430))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46430):map__46430);var sum_turnover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46430__$1,cljs.core.constant$keyword$1204);return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs46433 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(count,cljs.core.constant$keyword$927,"-") : clustermap.formats.number.fnum.call(null,count,cljs.core.constant$keyword$927,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs46433))?sablono.interpreter.attributes(attrs46433):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46433))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46433),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs46438 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(sum_turnover,cljs.core.constant$keyword$984,(2),cljs.core.constant$keyword$927,"-") : clustermap.formats.money.fmoney.call(null,sum_turnover,cljs.core.constant$keyword$984,(2),cljs.core.constant$keyword$927,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs46438))?sablono.interpreter.attributes(attrs46438):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46438))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46438),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs46443 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(sum_employee_count,cljs.core.constant$keyword$986,(0),cljs.core.constant$keyword$927,"-") : clustermap.formats.number.fnum.call(null,sum_employee_count,cljs.core.constant$keyword$986,(0),cljs.core.constant$keyword$927,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs46443))?sablono.interpreter.attributes(attrs46443):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs46443))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs46443),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.summary_stats,cljs.core.array_seq([index,index_type,attrs,filter,bounds], 0));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__46448,owner){var map__46468 = p__46448;var map__46468__$1 = ((cljs.core.seq_QMARK_(map__46468))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46468):map__46468);var data = map__46468__$1;var map__46469 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46468__$1,cljs.core.constant$keyword$964);var map__46469__$1 = ((cljs.core.seq_QMARK_(map__46469))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46469):map__46469);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46469__$1,cljs.core.constant$keyword$1113);var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46469__$1,cljs.core.constant$keyword$1114);var map__46470 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46468__$1,cljs.core.constant$keyword$1207);var map__46470__$1 = ((cljs.core.seq_QMARK_(map__46470))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46470):map__46470);var map_report = map__46470__$1;var map__46471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46470__$1,cljs.core.constant$keyword$1109);var map__46471__$1 = ((cljs.core.seq_QMARK_(map__46471))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46471):map__46471);var controls = map__46471__$1;var map__46472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46471__$1,cljs.core.constant$keyword$1208);var map__46472__$1 = ((cljs.core.seq_QMARK_(map__46472))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46472):map__46472);var summary_stats = map__46472__$1;var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46472__$1,cljs.core.constant$keyword$1209);var index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46472__$1,cljs.core.constant$keyword$1110);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46472__$1,cljs.core.constant$keyword$972);var summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46470__$1,cljs.core.constant$keyword$1210);var map__46473 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46468__$1,cljs.core.constant$keyword$1211);var map__46473__$1 = ((cljs.core.seq_QMARK_(map__46473))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46473):map__46473);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46473__$1,cljs.core.constant$keyword$956);if(typeof clustermap.components.map_report.t46474 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t46474 = (function (filt,index_type,map__46473,owner,filter_by_view,data,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,p__46448,map__46468,map__46469,map__46472,map__46471,map__46470,meta46475){
this.filt = filt;
this.index_type = index_type;
this.map__46473 = map__46473;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.index = index;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.bounds = bounds;
this.p__46448 = p__46448;
this.map__46468 = map__46468;
this.map__46469 = map__46469;
this.map__46472 = map__46472;
this.map__46471 = map__46471;
this.map__46470 = map__46470;
this.meta46475 = meta46475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t46474.cljs$lang$type = true;
clustermap.components.map_report.t46474.cljs$lang$ctorStr = "clustermap.components.map-report/t46474";
clustermap.components.map_report.t46474.cljs$lang$ctorPrWriter = ((function (map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map-report/t46474");
});})(map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds))
;
clustermap.components.map_report.t46474.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t46474.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds){
return (function (_,p__46477,p__46478){var self__ = this;
var map__46479 = p__46477;var map__46479__$1 = ((cljs.core.seq_QMARK_(map__46479))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46479):map__46479);var next_data = map__46479__$1;var map__46480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46479__$1,cljs.core.constant$keyword$964);var map__46480__$1 = ((cljs.core.seq_QMARK_(map__46480))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46480):map__46480);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46480__$1,cljs.core.constant$keyword$1113);var next_filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46480__$1,cljs.core.constant$keyword$1114);var map__46481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46479__$1,cljs.core.constant$keyword$1207);var map__46481__$1 = ((cljs.core.seq_QMARK_(map__46481))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46481):map__46481);var next_map_report = map__46481__$1;var map__46482 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46481__$1,cljs.core.constant$keyword$1109);var map__46482__$1 = ((cljs.core.seq_QMARK_(map__46482))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46482):map__46482);var next_controls = map__46482__$1;var map__46483 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46482__$1,cljs.core.constant$keyword$1208);var map__46483__$1 = ((cljs.core.seq_QMARK_(map__46483))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46483):map__46483);var next_summary_stats = map__46483__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46483__$1,cljs.core.constant$keyword$972);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46483__$1,cljs.core.constant$keyword$1110);var next_variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46483__$1,cljs.core.constant$keyword$1209);var next_summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46481__$1,cljs.core.constant$keyword$1210);var map__46484 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46479__$1,cljs.core.constant$keyword$1211);var map__46484__$1 = ((cljs.core.seq_QMARK_(map__46484))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46484):map__46484);var map_controls = map__46484__$1;var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46484__$1,cljs.core.constant$keyword$956);var map__46485 = p__46478;var map__46485__$1 = ((cljs.core.seq_QMARK_(map__46485))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46485):map__46485);var next_state = map__46485__$1;var summary_stats_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46485__$1,cljs.core.constant$keyword$1212);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_summary_stats_data);if(or__3558__auto__)
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
});})(map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds))
;
clustermap.components.map_report.t46474.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t46474.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__46486 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__46486__$1 = ((cljs.core.seq_QMARK_(map__46486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46486):map__46486);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46486__$1,cljs.core.constant$keyword$1213);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46486__$1,cljs.core.constant$keyword$1135);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46486__$1,cljs.core.constant$keyword$1146);return clustermap.components.map_report.summary_stats_report(self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds))
;
clustermap.components.map_report.t46474.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t46474.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource("summary-stats");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1212,ssr);
return clustermap.ordered_resource.retrieve_responses(ssr,((function (ssr,___$1,map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds){
return (function (ss){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1210], null),ss);
});})(ssr,___$1,map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds))
);
});})(map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds))
;
clustermap.components.map_report.t46474.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds){
return (function (_46476){var self__ = this;
var _46476__$1 = this;return self__.meta46475;
});})(map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds))
;
clustermap.components.map_report.t46474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds){
return (function (_46476,meta46475__$1){var self__ = this;
var _46476__$1 = this;return (new clustermap.components.map_report.t46474(self__.filt,self__.index_type,self__.map__46473,self__.owner,self__.filter_by_view,self__.data,self__.index,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.bounds,self__.p__46448,self__.map__46468,self__.map__46469,self__.map__46472,self__.map__46471,self__.map__46470,meta46475__$1));
});})(map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds))
;
clustermap.components.map_report.__GT_t46474 = ((function (map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds){
return (function __GT_t46474(filt__$1,index_type__$1,map__46473__$2,owner__$1,filter_by_view__$1,data__$1,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,p__46448__$1,map__46468__$2,map__46469__$2,map__46472__$2,map__46471__$2,map__46470__$2,meta46475){return (new clustermap.components.map_report.t46474(filt__$1,index_type__$1,map__46473__$2,owner__$1,filter_by_view__$1,data__$1,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,p__46448__$1,map__46468__$2,map__46469__$2,map__46472__$2,map__46471__$2,map__46470__$2,meta46475));
});})(map__46468,map__46468__$1,data,map__46469,map__46469__$1,filter_by_view,filt,map__46470,map__46470__$1,map_report,map__46471,map__46471__$1,controls,map__46472,map__46472__$1,summary_stats,variables,index_type,index,summary_stats_data,map__46473,map__46473__$1,bounds))
;
}
return (new clustermap.components.map_report.t46474(filt,index_type,map__46473__$1,owner,filter_by_view,data,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,p__46448,map__46468__$1,map__46469__$1,map__46472__$1,map__46471__$1,map__46470__$1,null));
});
