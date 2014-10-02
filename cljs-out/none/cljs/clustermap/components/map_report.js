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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__52669){var map__52693 = p__52669;var map__52693__$1 = ((cljs.core.seq_QMARK_.call(null,map__52693))?cljs.core.apply.call(null,cljs.core.hash_map,map__52693):map__52693);var summary_stats_data = map__52693__$1;var map__52694 = cljs.core.get.call(null,map__52693__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__52694__$1 = ((cljs.core.seq_QMARK_.call(null,map__52694))?cljs.core.apply.call(null,cljs.core.hash_map,map__52694):map__52694);var data = map__52694__$1;var map__52695 = cljs.core.get.call(null,map__52694__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__52695__$1 = ((cljs.core.seq_QMARK_.call(null,map__52695))?cljs.core.apply.call(null,cljs.core.hash_map,map__52695):map__52695);var sum_employee_count = cljs.core.get.call(null,map__52695__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__52695__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__52696 = cljs.core.get.call(null,map__52694__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__52696__$1 = ((cljs.core.seq_QMARK_.call(null,map__52696))?cljs.core.apply.call(null,cljs.core.hash_map,map__52696):map__52696);var sum_turnover = cljs.core.get.call(null,map__52696__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,React.DOM.li(null,sablono.interpreter.input.call(null,{"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__52693,map__52693__$1,summary_stats_data,map__52694,map__52694__$1,data,map__52695,map__52695__$1,sum_employee_count,count,map__52696,map__52696__$1,sum_turnover){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.call(null,map_report_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255)], null),val);
});})(map__52693,map__52693__$1,summary_stats_data,map__52694,map__52694__$1,data,map__52695,map__52695__$1,sum_employee_count,count,map__52696,map__52696__$1,sum_turnover))
}),React.DOM.small(null,"Filter by view")),(function (){var attrs52701 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52701))?sablono.interpreter.attributes.call(null,attrs52701):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52701))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52701),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs52706 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52706))?sablono.interpreter.attributes.call(null,attrs52706):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52706))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52706),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs52711 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs52711))?sablono.interpreter.attributes.call(null,attrs52711):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs52711))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs52711),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__52716,owner){var map__52734 = p__52716;var map__52734__$1 = ((cljs.core.seq_QMARK_.call(null,map__52734))?cljs.core.apply.call(null,cljs.core.hash_map,map__52734):map__52734);var data = map__52734__$1;var filt = cljs.core.get.call(null,map__52734__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__52735 = cljs.core.get.call(null,map__52734__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__52735__$1 = ((cljs.core.seq_QMARK_.call(null,map__52735))?cljs.core.apply.call(null,cljs.core.hash_map,map__52735):map__52735);var map_report = map__52735__$1;var map__52736 = cljs.core.get.call(null,map__52735__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__52736__$1 = ((cljs.core.seq_QMARK_.call(null,map__52736))?cljs.core.apply.call(null,cljs.core.hash_map,map__52736):map__52736);var controls = map__52736__$1;var map__52737 = cljs.core.get.call(null,map__52736__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__52737__$1 = ((cljs.core.seq_QMARK_.call(null,map__52737))?cljs.core.apply.call(null,cljs.core.hash_map,map__52737):map__52737);var summary_stats = map__52737__$1;var filter_by_view = cljs.core.get.call(null,map__52737__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var variables = cljs.core.get.call(null,map__52737__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__52737__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__52737__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__52735__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__52738 = cljs.core.get.call(null,map__52734__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__52738__$1 = ((cljs.core.seq_QMARK_.call(null,map__52738))?cljs.core.apply.call(null,cljs.core.hash_map,map__52738):map__52738);var bounds = cljs.core.get.call(null,map__52738__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t52739 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t52739 = (function (filt,index_type,map__52734,owner,filter_by_view,data,index,map__52736,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__52738,bounds,p__52716,map__52737,map__52735,meta52740){
this.filt = filt;
this.index_type = index_type;
this.map__52734 = map__52734;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.index = index;
this.map__52736 = map__52736;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__52738 = map__52738;
this.bounds = bounds;
this.p__52716 = p__52716;
this.map__52737 = map__52737;
this.map__52735 = map__52735;
this.meta52740 = meta52740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t52739.cljs$lang$type = true;
clustermap.components.map_report.t52739.cljs$lang$ctorStr = "clustermap.components.map-report/t52739";
clustermap.components.map_report.t52739.cljs$lang$ctorPrWriter = ((function (map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t52739");
});})(map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds))
;
clustermap.components.map_report.t52739.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t52739.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds){
return (function (_,p__52742,p__52743){var self__ = this;
var map__52744 = p__52742;var map__52744__$1 = ((cljs.core.seq_QMARK_.call(null,map__52744))?cljs.core.apply.call(null,cljs.core.hash_map,map__52744):map__52744);var next_data = map__52744__$1;var next_filt = cljs.core.get.call(null,map__52744__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__52745 = cljs.core.get.call(null,map__52744__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__52745__$1 = ((cljs.core.seq_QMARK_.call(null,map__52745))?cljs.core.apply.call(null,cljs.core.hash_map,map__52745):map__52745);var next_map_report = map__52745__$1;var map__52746 = cljs.core.get.call(null,map__52745__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__52746__$1 = ((cljs.core.seq_QMARK_.call(null,map__52746))?cljs.core.apply.call(null,cljs.core.hash_map,map__52746):map__52746);var next_controls = map__52746__$1;var map__52747 = cljs.core.get.call(null,map__52746__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__52747__$1 = ((cljs.core.seq_QMARK_.call(null,map__52747))?cljs.core.apply.call(null,cljs.core.hash_map,map__52747):map__52747);var next_summary_stats = map__52747__$1;var next_index = cljs.core.get.call(null,map__52747__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__52747__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__52747__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_filter_by_view = cljs.core.get.call(null,map__52747__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_summary_stats_data = cljs.core.get.call(null,map__52745__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__52748 = cljs.core.get.call(null,map__52744__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__52748__$1 = ((cljs.core.seq_QMARK_.call(null,map__52748))?cljs.core.apply.call(null,cljs.core.hash_map,map__52748):map__52748);var map_controls = map__52748__$1;var next_bounds = cljs.core.get.call(null,map__52748__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__52749 = p__52743;var map__52749__$1 = ((cljs.core.seq_QMARK_.call(null,map__52749))?cljs.core.apply.call(null,cljs.core.hash_map,map__52749):map__52749);var next_state = map__52749__$1;var summary_stats_resource = cljs.core.get.call(null,map__52749__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__3558__auto__)
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
});})(map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds))
;
clustermap.components.map_report.t52739.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t52739.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__52750 = om.core.get_shared.call(null,self__.owner);var map__52750__$1 = ((cljs.core.seq_QMARK_.call(null,map__52750))?cljs.core.apply.call(null,cljs.core.hash_map,map__52750):map__52750);var view_path_fn = cljs.core.get.call(null,map__52750__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__52750__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__52750__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds))
;
clustermap.components.map_report.t52739.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t52739.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds))
);
});})(map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds))
;
clustermap.components.map_report.t52739.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds){
return (function (_52741){var self__ = this;
var _52741__$1 = this;return self__.meta52740;
});})(map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds))
;
clustermap.components.map_report.t52739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds){
return (function (_52741,meta52740__$1){var self__ = this;
var _52741__$1 = this;return (new clustermap.components.map_report.t52739(self__.filt,self__.index_type,self__.map__52734,self__.owner,self__.filter_by_view,self__.data,self__.index,self__.map__52736,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__52738,self__.bounds,self__.p__52716,self__.map__52737,self__.map__52735,meta52740__$1));
});})(map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds))
;
clustermap.components.map_report.__GT_t52739 = ((function (map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds){
return (function __GT_t52739(filt__$1,index_type__$1,map__52734__$2,owner__$1,filter_by_view__$1,data__$1,index__$1,map__52736__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__52738__$2,bounds__$1,p__52716__$1,map__52737__$2,map__52735__$2,meta52740){return (new clustermap.components.map_report.t52739(filt__$1,index_type__$1,map__52734__$2,owner__$1,filter_by_view__$1,data__$1,index__$1,map__52736__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__52738__$2,bounds__$1,p__52716__$1,map__52737__$2,map__52735__$2,meta52740));
});})(map__52734,map__52734__$1,data,filt,map__52735,map__52735__$1,map_report,map__52736,map__52736__$1,controls,map__52737,map__52737__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__52738,map__52738__$1,bounds))
;
}
return (new clustermap.components.map_report.t52739(filt,index_type,map__52734__$1,owner,filter_by_view,data,index,map__52736__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__52738__$1,bounds,p__52716,map__52737__$1,map__52735__$1,null));
});

//# sourceMappingURL=map_report.js.map