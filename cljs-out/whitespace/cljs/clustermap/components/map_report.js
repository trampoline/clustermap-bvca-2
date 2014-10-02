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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": view_path_fn.call(null,new cljs.core.Keyword(null,"lists","lists",-884730684))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__13660){var map__13684 = p__13660;var map__13684__$1 = ((cljs.core.seq_QMARK_.call(null,map__13684))?cljs.core.apply.call(null,cljs.core.hash_map,map__13684):map__13684);var summary_stats_data = map__13684__$1;var map__13685 = cljs.core.get.call(null,map__13684__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__13685__$1 = ((cljs.core.seq_QMARK_.call(null,map__13685))?cljs.core.apply.call(null,cljs.core.hash_map,map__13685):map__13685);var data = map__13685__$1;var map__13686 = cljs.core.get.call(null,map__13685__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__13686__$1 = ((cljs.core.seq_QMARK_.call(null,map__13686))?cljs.core.apply.call(null,cljs.core.hash_map,map__13686):map__13686);var sum_employee_count = cljs.core.get.call(null,map__13686__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__13686__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__13687 = cljs.core.get.call(null,map__13685__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__13687__$1 = ((cljs.core.seq_QMARK_.call(null,map__13687))?cljs.core.apply.call(null,cljs.core.hash_map,map__13687):map__13687);var sum_turnover = cljs.core.get.call(null,map__13687__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,React.DOM.li(null,sablono.interpreter.input.call(null,{"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__13684,map__13684__$1,summary_stats_data,map__13685,map__13685__$1,data,map__13686,map__13686__$1,sum_employee_count,count,map__13687,map__13687__$1,sum_turnover){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.call(null,map_report_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255)], null),val);
});})(map__13684,map__13684__$1,summary_stats_data,map__13685,map__13685__$1,data,map__13686,map__13686__$1,sum_employee_count,count,map__13687,map__13687__$1,sum_turnover))
}),React.DOM.small(null,"Filter by view")),(function (){var attrs13692 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13692))?sablono.interpreter.attributes.call(null,attrs13692):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13692))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13692),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs13697 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13697))?sablono.interpreter.attributes.call(null,attrs13697):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13697))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13697),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13702 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13702))?sablono.interpreter.attributes.call(null,attrs13702):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13702))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13702),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__13707,owner){var map__13725 = p__13707;var map__13725__$1 = ((cljs.core.seq_QMARK_.call(null,map__13725))?cljs.core.apply.call(null,cljs.core.hash_map,map__13725):map__13725);var data = map__13725__$1;var filt = cljs.core.get.call(null,map__13725__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13726 = cljs.core.get.call(null,map__13725__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__13726__$1 = ((cljs.core.seq_QMARK_.call(null,map__13726))?cljs.core.apply.call(null,cljs.core.hash_map,map__13726):map__13726);var map_report = map__13726__$1;var map__13727 = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13727__$1 = ((cljs.core.seq_QMARK_.call(null,map__13727))?cljs.core.apply.call(null,cljs.core.hash_map,map__13727):map__13727);var controls = map__13727__$1;var map__13728 = cljs.core.get.call(null,map__13727__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__13728__$1 = ((cljs.core.seq_QMARK_.call(null,map__13728))?cljs.core.apply.call(null,cljs.core.hash_map,map__13728):map__13728);var summary_stats = map__13728__$1;var filter_by_view = cljs.core.get.call(null,map__13728__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var variables = cljs.core.get.call(null,map__13728__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__13728__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__13728__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__13726__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__13729 = cljs.core.get.call(null,map__13725__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__13729__$1 = ((cljs.core.seq_QMARK_.call(null,map__13729))?cljs.core.apply.call(null,cljs.core.hash_map,map__13729):map__13729);var bounds = cljs.core.get.call(null,map__13729__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t13730 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13730 = (function (filt,map__13729,index_type,map__13727,owner,map__13728,filter_by_view,data,map__13725,index,map__13726,controls,summary_stats_data,map_report,summary_stats,map_report_component,p__13707,variables,bounds,meta13731){
this.filt = filt;
this.map__13729 = map__13729;
this.index_type = index_type;
this.map__13727 = map__13727;
this.owner = owner;
this.map__13728 = map__13728;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__13725 = map__13725;
this.index = index;
this.map__13726 = map__13726;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.p__13707 = p__13707;
this.variables = variables;
this.bounds = bounds;
this.meta13731 = meta13731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13730.cljs$lang$type = true;
clustermap.components.map_report.t13730.cljs$lang$ctorStr = "clustermap.components.map-report/t13730";
clustermap.components.map_report.t13730.cljs$lang$ctorPrWriter = ((function (map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t13730");
});})(map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds))
;
clustermap.components.map_report.t13730.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t13730.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds){
return (function (_,p__13733,p__13734){var self__ = this;
var map__13735 = p__13733;var map__13735__$1 = ((cljs.core.seq_QMARK_.call(null,map__13735))?cljs.core.apply.call(null,cljs.core.hash_map,map__13735):map__13735);var next_data = map__13735__$1;var next_filt = cljs.core.get.call(null,map__13735__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13736 = cljs.core.get.call(null,map__13735__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__13736__$1 = ((cljs.core.seq_QMARK_.call(null,map__13736))?cljs.core.apply.call(null,cljs.core.hash_map,map__13736):map__13736);var next_map_report = map__13736__$1;var map__13737 = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13737__$1 = ((cljs.core.seq_QMARK_.call(null,map__13737))?cljs.core.apply.call(null,cljs.core.hash_map,map__13737):map__13737);var next_controls = map__13737__$1;var map__13738 = cljs.core.get.call(null,map__13737__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__13738__$1 = ((cljs.core.seq_QMARK_.call(null,map__13738))?cljs.core.apply.call(null,cljs.core.hash_map,map__13738):map__13738);var next_summary_stats = map__13738__$1;var next_index = cljs.core.get.call(null,map__13738__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__13738__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__13738__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_filter_by_view = cljs.core.get.call(null,map__13738__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_summary_stats_data = cljs.core.get.call(null,map__13736__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__13739 = cljs.core.get.call(null,map__13735__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__13739__$1 = ((cljs.core.seq_QMARK_.call(null,map__13739))?cljs.core.apply.call(null,cljs.core.hash_map,map__13739):map__13739);var map_controls = map__13739__$1;var next_bounds = cljs.core.get.call(null,map__13739__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__13740 = p__13734;var map__13740__$1 = ((cljs.core.seq_QMARK_.call(null,map__13740))?cljs.core.apply.call(null,cljs.core.hash_map,map__13740):map__13740);var next_state = map__13740__$1;var summary_stats_resource = cljs.core.get.call(null,map__13740__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.call(null,next_filt,self__.filt);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,next_bounds,self__.bounds);
} else
{return and__3546__auto__;
}
}
}
}
})()))
{return clustermap.components.map_report.request_summary_stats.call(null,summary_stats_resource,next_index,next_index_type,next_variables,next_filt,(cljs.core.truth_(next_filter_by_view)?om.core._value.call(null,next_bounds):null));
} else
{return null;
}
});})(map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds))
;
clustermap.components.map_report.t13730.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t13730.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__13741 = om.core.get_shared.call(null,self__.owner);var map__13741__$1 = ((cljs.core.seq_QMARK_.call(null,map__13741))?cljs.core.apply.call(null,cljs.core.hash_map,map__13741):map__13741);var view_path_fn = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds))
;
clustermap.components.map_report.t13730.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t13730.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds))
);
});})(map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds))
;
clustermap.components.map_report.t13730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds){
return (function (_13732){var self__ = this;
var _13732__$1 = this;return self__.meta13731;
});})(map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds))
;
clustermap.components.map_report.t13730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds){
return (function (_13732,meta13731__$1){var self__ = this;
var _13732__$1 = this;return (new clustermap.components.map_report.t13730(self__.filt,self__.map__13729,self__.index_type,self__.map__13727,self__.owner,self__.map__13728,self__.filter_by_view,self__.data,self__.map__13725,self__.index,self__.map__13726,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.p__13707,self__.variables,self__.bounds,meta13731__$1));
});})(map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds))
;
clustermap.components.map_report.__GT_t13730 = ((function (map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds){
return (function __GT_t13730(filt__$1,map__13729__$2,index_type__$1,map__13727__$2,owner__$1,map__13728__$2,filter_by_view__$1,data__$1,map__13725__$2,index__$1,map__13726__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,p__13707__$1,variables__$1,bounds__$1,meta13731){return (new clustermap.components.map_report.t13730(filt__$1,map__13729__$2,index_type__$1,map__13727__$2,owner__$1,map__13728__$2,filter_by_view__$1,data__$1,map__13725__$2,index__$1,map__13726__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,p__13707__$1,variables__$1,bounds__$1,meta13731));
});})(map__13725,map__13725__$1,data,filt,map__13726,map__13726__$1,map_report,map__13727,map__13727__$1,controls,map__13728,map__13728__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13729,map__13729__$1,bounds))
;
}
return (new clustermap.components.map_report.t13730(filt,map__13729__$1,index_type,map__13727__$1,owner,map__13728__$1,filter_by_view,data,map__13725__$1,index,map__13726__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,p__13707,variables,bounds,null));
});
