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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1092) : view_path_fn.call(null,cljs.core.constant$keyword$1092))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__40218){var map__40240 = p__40218;var map__40240__$1 = ((cljs.core.seq_QMARK_(map__40240))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40240):map__40240);var summary_stats_data = map__40240__$1;var map__40241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40240__$1,cljs.core.constant$keyword$992);var map__40241__$1 = ((cljs.core.seq_QMARK_(map__40241))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40241):map__40241);var data = map__40241__$1;var map__40242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40241__$1,cljs.core.constant$keyword$1102);var map__40242__$1 = ((cljs.core.seq_QMARK_(map__40242))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40242):map__40242);var sum_employee_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40242__$1,cljs.core.constant$keyword$1103);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40242__$1,cljs.core.constant$keyword$1104);var map__40243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40241__$1,cljs.core.constant$keyword$1105);var map__40243__$1 = ((cljs.core.seq_QMARK_(map__40243))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40243):map__40243);var sum_turnover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40243__$1,cljs.core.constant$keyword$1103);return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs40246 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(count,cljs.core.constant$keyword$863,"-") : clustermap.formats.number.fnum.call(null,count,cljs.core.constant$keyword$863,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs40246))?sablono.interpreter.attributes(attrs40246):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40246))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40246),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs40251 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(sum_turnover,cljs.core.constant$keyword$1000,(2),cljs.core.constant$keyword$863,"-") : clustermap.formats.money.fmoney.call(null,sum_turnover,cljs.core.constant$keyword$1000,(2),cljs.core.constant$keyword$863,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs40251))?sablono.interpreter.attributes(attrs40251):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40251))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40251),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs40256 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(sum_employee_count,cljs.core.constant$keyword$1002,(0),cljs.core.constant$keyword$863,"-") : clustermap.formats.number.fnum.call(null,sum_employee_count,cljs.core.constant$keyword$1002,(0),cljs.core.constant$keyword$863,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs40256))?sablono.interpreter.attributes(attrs40256):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs40256))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs40256),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.summary_stats,cljs.core.array_seq([index,index_type,attrs,filter,bounds], 0));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__40261,owner){var map__40281 = p__40261;var map__40281__$1 = ((cljs.core.seq_QMARK_(map__40281))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40281):map__40281);var data = map__40281__$1;var map__40282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40281__$1,cljs.core.constant$keyword$996);var map__40282__$1 = ((cljs.core.seq_QMARK_(map__40282))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40282):map__40282);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40282__$1,cljs.core.constant$keyword$990);var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40282__$1,cljs.core.constant$keyword$997);var map__40283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40281__$1,cljs.core.constant$keyword$1106);var map__40283__$1 = ((cljs.core.seq_QMARK_(map__40283))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40283):map__40283);var map_report = map__40283__$1;var map__40284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40283__$1,cljs.core.constant$keyword$980);var map__40284__$1 = ((cljs.core.seq_QMARK_(map__40284))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40284):map__40284);var controls = map__40284__$1;var map__40285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40284__$1,cljs.core.constant$keyword$1107);var map__40285__$1 = ((cljs.core.seq_QMARK_(map__40285))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40285):map__40285);var summary_stats = map__40285__$1;var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40285__$1,cljs.core.constant$keyword$1108);var index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40285__$1,cljs.core.constant$keyword$998);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40285__$1,cljs.core.constant$keyword$902);var summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40283__$1,cljs.core.constant$keyword$1109);var map__40286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40281__$1,cljs.core.constant$keyword$1110);var map__40286__$1 = ((cljs.core.seq_QMARK_(map__40286))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40286):map__40286);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286__$1,cljs.core.constant$keyword$892);if(typeof clustermap.components.map_report.t40287 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t40287 = (function (map__40285,filt,index_type,p__40261,map__40286,owner,filter_by_view,data,map__40282,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__40281,map__40283,map__40284,meta40288){
this.map__40285 = map__40285;
this.filt = filt;
this.index_type = index_type;
this.p__40261 = p__40261;
this.map__40286 = map__40286;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__40282 = map__40282;
this.index = index;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.bounds = bounds;
this.map__40281 = map__40281;
this.map__40283 = map__40283;
this.map__40284 = map__40284;
this.meta40288 = meta40288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t40287.cljs$lang$type = true;
clustermap.components.map_report.t40287.cljs$lang$ctorStr = "clustermap.components.map-report/t40287";
clustermap.components.map_report.t40287.cljs$lang$ctorPrWriter = ((function (map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map-report/t40287");
});})(map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds))
;
clustermap.components.map_report.t40287.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t40287.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds){
return (function (_,p__40290,p__40291){var self__ = this;
var map__40292 = p__40290;var map__40292__$1 = ((cljs.core.seq_QMARK_(map__40292))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40292):map__40292);var next_data = map__40292__$1;var map__40293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40292__$1,cljs.core.constant$keyword$996);var map__40293__$1 = ((cljs.core.seq_QMARK_(map__40293))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40293):map__40293);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40293__$1,cljs.core.constant$keyword$990);var next_filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40293__$1,cljs.core.constant$keyword$997);var map__40294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40292__$1,cljs.core.constant$keyword$1106);var map__40294__$1 = ((cljs.core.seq_QMARK_(map__40294))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40294):map__40294);var next_map_report = map__40294__$1;var map__40295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,cljs.core.constant$keyword$980);var map__40295__$1 = ((cljs.core.seq_QMARK_(map__40295))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40295):map__40295);var next_controls = map__40295__$1;var map__40296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40295__$1,cljs.core.constant$keyword$1107);var map__40296__$1 = ((cljs.core.seq_QMARK_(map__40296))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40296):map__40296);var next_summary_stats = map__40296__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,cljs.core.constant$keyword$902);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,cljs.core.constant$keyword$998);var next_variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40296__$1,cljs.core.constant$keyword$1108);var next_summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40294__$1,cljs.core.constant$keyword$1109);var map__40297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40292__$1,cljs.core.constant$keyword$1110);var map__40297__$1 = ((cljs.core.seq_QMARK_(map__40297))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40297):map__40297);var map_controls = map__40297__$1;var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40297__$1,cljs.core.constant$keyword$892);var map__40298 = p__40291;var map__40298__$1 = ((cljs.core.seq_QMARK_(map__40298))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40298):map__40298);var next_state = map__40298__$1;var summary_stats_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40298__$1,cljs.core.constant$keyword$1111);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_summary_stats_data);if(or__3558__auto__)
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
});})(map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds))
;
clustermap.components.map_report.t40287.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t40287.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__40299 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__40299__$1 = ((cljs.core.seq_QMARK_(map__40299))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__40299):map__40299);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40299__$1,cljs.core.constant$keyword$1112);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40299__$1,cljs.core.constant$keyword$1004);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40299__$1,cljs.core.constant$keyword$1015);return clustermap.components.map_report.summary_stats_report(self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds))
;
clustermap.components.map_report.t40287.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t40287.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource("summary-stats");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1111,ssr);
return clustermap.ordered_resource.retrieve_responses(ssr,((function (ssr,___$1,map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds){
return (function (ss){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1109], null),ss);
});})(ssr,___$1,map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds))
);
});})(map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds))
;
clustermap.components.map_report.t40287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds){
return (function (_40289){var self__ = this;
var _40289__$1 = this;return self__.meta40288;
});})(map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds))
;
clustermap.components.map_report.t40287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds){
return (function (_40289,meta40288__$1){var self__ = this;
var _40289__$1 = this;return (new clustermap.components.map_report.t40287(self__.map__40285,self__.filt,self__.index_type,self__.p__40261,self__.map__40286,self__.owner,self__.filter_by_view,self__.data,self__.map__40282,self__.index,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.bounds,self__.map__40281,self__.map__40283,self__.map__40284,meta40288__$1));
});})(map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds))
;
clustermap.components.map_report.__GT_t40287 = ((function (map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds){
return (function __GT_t40287(map__40285__$2,filt__$1,index_type__$1,p__40261__$1,map__40286__$2,owner__$1,filter_by_view__$1,data__$1,map__40282__$2,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__40281__$2,map__40283__$2,map__40284__$2,meta40288){return (new clustermap.components.map_report.t40287(map__40285__$2,filt__$1,index_type__$1,p__40261__$1,map__40286__$2,owner__$1,filter_by_view__$1,data__$1,map__40282__$2,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__40281__$2,map__40283__$2,map__40284__$2,meta40288));
});})(map__40281,map__40281__$1,data,map__40282,map__40282__$1,filter_by_view,filt,map__40283,map__40283__$1,map_report,map__40284,map__40284__$1,controls,map__40285,map__40285__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40286,map__40286__$1,bounds))
;
}
return (new clustermap.components.map_report.t40287(map__40285__$1,filt,index_type,p__40261,map__40286__$1,owner,filter_by_view,data,map__40282__$1,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__40281__$1,map__40283__$1,map__40284__$1,null));
});
