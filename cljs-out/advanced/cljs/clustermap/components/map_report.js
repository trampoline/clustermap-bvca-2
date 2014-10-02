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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1100) : view_path_fn.call(null,cljs.core.constant$keyword$1100))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__39671){var map__39695 = p__39671;var map__39695__$1 = ((cljs.core.seq_QMARK_(map__39695))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39695):map__39695);var summary_stats_data = map__39695__$1;var map__39696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39695__$1,cljs.core.constant$keyword$999);var map__39696__$1 = ((cljs.core.seq_QMARK_(map__39696))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39696):map__39696);var data = map__39696__$1;var map__39697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39696__$1,cljs.core.constant$keyword$1110);var map__39697__$1 = ((cljs.core.seq_QMARK_(map__39697))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39697):map__39697);var sum_employee_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39697__$1,cljs.core.constant$keyword$1111);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39697__$1,cljs.core.constant$keyword$1112);var map__39698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39696__$1,cljs.core.constant$keyword$1113);var map__39698__$1 = ((cljs.core.seq_QMARK_(map__39698))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39698):map__39698);var sum_turnover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39698__$1,cljs.core.constant$keyword$1111);return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,React.DOM.li(null,(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__39695,map__39695__$1,summary_stats_data,map__39696,map__39696__$1,data,map__39697,map__39697__$1,sum_employee_count,count,map__39698,map__39698__$1,sum_turnover){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(map_report_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1114,cljs.core.constant$keyword$1005], null),val);
});})(map__39695,map__39695__$1,summary_stats_data,map__39696,map__39696__$1,data,map__39697,map__39697__$1,sum_employee_count,count,map__39698,map__39698__$1,sum_turnover))
}) : sablono.interpreter.input.call(null,{"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__39695,map__39695__$1,summary_stats_data,map__39696,map__39696__$1,data,map__39697,map__39697__$1,sum_employee_count,count,map__39698,map__39698__$1,sum_turnover){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(map_report_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1003,cljs.core.constant$keyword$1114,cljs.core.constant$keyword$1005], null),val);
});})(map__39695,map__39695__$1,summary_stats_data,map__39696,map__39696__$1,data,map__39697,map__39697__$1,sum_employee_count,count,map__39698,map__39698__$1,sum_turnover))
})),React.DOM.small(null,"Filter by view")),(function (){var attrs39703 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(count,cljs.core.constant$keyword$871,"-") : clustermap.formats.number.fnum.call(null,count,cljs.core.constant$keyword$871,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39703))?sablono.interpreter.attributes(attrs39703):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39703))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39703),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs39708 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(sum_turnover,cljs.core.constant$keyword$1008,(2),cljs.core.constant$keyword$871,"-") : clustermap.formats.money.fmoney.call(null,sum_turnover,cljs.core.constant$keyword$1008,(2),cljs.core.constant$keyword$871,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39708))?sablono.interpreter.attributes(attrs39708):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39708))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39708),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs39713 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(sum_employee_count,cljs.core.constant$keyword$1010,(0),cljs.core.constant$keyword$871,"-") : clustermap.formats.number.fnum.call(null,sum_employee_count,cljs.core.constant$keyword$1010,(0),cljs.core.constant$keyword$871,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs39713))?sablono.interpreter.attributes(attrs39713):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs39713))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs39713),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.summary_stats,cljs.core.array_seq([index,index_type,attrs,filter,bounds], 0));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__39718,owner){var map__39736 = p__39718;var map__39736__$1 = ((cljs.core.seq_QMARK_(map__39736))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39736):map__39736);var data = map__39736__$1;var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736__$1,cljs.core.constant$keyword$901);var map__39737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736__$1,cljs.core.constant$keyword$1115);var map__39737__$1 = ((cljs.core.seq_QMARK_(map__39737))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39737):map__39737);var map_report = map__39737__$1;var map__39738 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39737__$1,cljs.core.constant$keyword$1003);var map__39738__$1 = ((cljs.core.seq_QMARK_(map__39738))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39738):map__39738);var controls = map__39738__$1;var map__39739 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39738__$1,cljs.core.constant$keyword$1114);var map__39739__$1 = ((cljs.core.seq_QMARK_(map__39739))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39739):map__39739);var summary_stats = map__39739__$1;var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39739__$1,cljs.core.constant$keyword$1005);var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39739__$1,cljs.core.constant$keyword$1116);var index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39739__$1,cljs.core.constant$keyword$1006);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39739__$1,cljs.core.constant$keyword$910);var summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39737__$1,cljs.core.constant$keyword$1117);var map__39740 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39736__$1,cljs.core.constant$keyword$1118);var map__39740__$1 = ((cljs.core.seq_QMARK_(map__39740))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39740):map__39740);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39740__$1,cljs.core.constant$keyword$900);if(typeof clustermap.components.map_report.t39741 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t39741 = (function (p__39718,filt,index_type,owner,filter_by_view,data,map__39738,index,map__39739,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__39737,map__39740,variables,bounds,map__39736,meta39742){
this.p__39718 = p__39718;
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__39738 = map__39738;
this.index = index;
this.map__39739 = map__39739;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__39737 = map__39737;
this.map__39740 = map__39740;
this.variables = variables;
this.bounds = bounds;
this.map__39736 = map__39736;
this.meta39742 = meta39742;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t39741.cljs$lang$type = true;
clustermap.components.map_report.t39741.cljs$lang$ctorStr = "clustermap.components.map-report/t39741";
clustermap.components.map_report.t39741.cljs$lang$ctorPrWriter = ((function (map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map-report/t39741");
});})(map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds))
;
clustermap.components.map_report.t39741.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t39741.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds){
return (function (_,p__39744,p__39745){var self__ = this;
var map__39746 = p__39744;var map__39746__$1 = ((cljs.core.seq_QMARK_(map__39746))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39746):map__39746);var next_data = map__39746__$1;var next_filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39746__$1,cljs.core.constant$keyword$901);var map__39747 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39746__$1,cljs.core.constant$keyword$1115);var map__39747__$1 = ((cljs.core.seq_QMARK_(map__39747))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39747):map__39747);var next_map_report = map__39747__$1;var map__39748 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39747__$1,cljs.core.constant$keyword$1003);var map__39748__$1 = ((cljs.core.seq_QMARK_(map__39748))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39748):map__39748);var next_controls = map__39748__$1;var map__39749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39748__$1,cljs.core.constant$keyword$1114);var map__39749__$1 = ((cljs.core.seq_QMARK_(map__39749))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39749):map__39749);var next_summary_stats = map__39749__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39749__$1,cljs.core.constant$keyword$910);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39749__$1,cljs.core.constant$keyword$1006);var next_variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39749__$1,cljs.core.constant$keyword$1116);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39749__$1,cljs.core.constant$keyword$1005);var next_summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39747__$1,cljs.core.constant$keyword$1117);var map__39750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39746__$1,cljs.core.constant$keyword$1118);var map__39750__$1 = ((cljs.core.seq_QMARK_(map__39750))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39750):map__39750);var map_controls = map__39750__$1;var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39750__$1,cljs.core.constant$keyword$900);var map__39751 = p__39745;var map__39751__$1 = ((cljs.core.seq_QMARK_(map__39751))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39751):map__39751);var next_state = map__39751__$1;var summary_stats_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39751__$1,cljs.core.constant$keyword$1119);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_summary_stats_data);if(or__3558__auto__)
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
});})(map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds))
;
clustermap.components.map_report.t39741.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t39741.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__39752 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__39752__$1 = ((cljs.core.seq_QMARK_(map__39752))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39752):map__39752);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39752__$1,cljs.core.constant$keyword$1120);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39752__$1,cljs.core.constant$keyword$1012);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39752__$1,cljs.core.constant$keyword$1023);return clustermap.components.map_report.summary_stats_report(self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds))
;
clustermap.components.map_report.t39741.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t39741.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource("summary-stats");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1119,ssr);
return clustermap.ordered_resource.retrieve_responses(ssr,((function (ssr,___$1,map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds){
return (function (ss){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1117], null),ss);
});})(ssr,___$1,map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds))
);
});})(map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds))
;
clustermap.components.map_report.t39741.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds){
return (function (_39743){var self__ = this;
var _39743__$1 = this;return self__.meta39742;
});})(map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds))
;
clustermap.components.map_report.t39741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds){
return (function (_39743,meta39742__$1){var self__ = this;
var _39743__$1 = this;return (new clustermap.components.map_report.t39741(self__.p__39718,self__.filt,self__.index_type,self__.owner,self__.filter_by_view,self__.data,self__.map__39738,self__.index,self__.map__39739,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.map__39737,self__.map__39740,self__.variables,self__.bounds,self__.map__39736,meta39742__$1));
});})(map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds))
;
clustermap.components.map_report.__GT_t39741 = ((function (map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds){
return (function __GT_t39741(p__39718__$1,filt__$1,index_type__$1,owner__$1,filter_by_view__$1,data__$1,map__39738__$2,index__$1,map__39739__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__39737__$2,map__39740__$2,variables__$1,bounds__$1,map__39736__$2,meta39742){return (new clustermap.components.map_report.t39741(p__39718__$1,filt__$1,index_type__$1,owner__$1,filter_by_view__$1,data__$1,map__39738__$2,index__$1,map__39739__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__39737__$2,map__39740__$2,variables__$1,bounds__$1,map__39736__$2,meta39742));
});})(map__39736,map__39736__$1,data,filt,map__39737,map__39737__$1,map_report,map__39738,map__39738__$1,controls,map__39739,map__39739__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__39740,map__39740__$1,bounds))
;
}
return (new clustermap.components.map_report.t39741(p__39718,filt,index_type,owner,filter_by_view,data,map__39738__$1,index,map__39739__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__39737__$1,map__39740__$1,variables,bounds,map__39736__$1,null));
});
