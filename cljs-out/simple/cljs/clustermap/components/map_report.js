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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__32047){var map__32069 = p__32047;var map__32069__$1 = ((cljs.core.seq_QMARK_.call(null,map__32069))?cljs.core.apply.call(null,cljs.core.hash_map,map__32069):map__32069);var summary_stats_data = map__32069__$1;var map__32070 = cljs.core.get.call(null,map__32069__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__32070__$1 = ((cljs.core.seq_QMARK_.call(null,map__32070))?cljs.core.apply.call(null,cljs.core.hash_map,map__32070):map__32070);var data = map__32070__$1;var map__32071 = cljs.core.get.call(null,map__32070__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__32071__$1 = ((cljs.core.seq_QMARK_.call(null,map__32071))?cljs.core.apply.call(null,cljs.core.hash_map,map__32071):map__32071);var sum_employee_count = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__32071__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__32072 = cljs.core.get.call(null,map__32070__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__32072__$1 = ((cljs.core.seq_QMARK_.call(null,map__32072))?cljs.core.apply.call(null,cljs.core.hash_map,map__32072):map__32072);var sum_turnover = cljs.core.get.call(null,map__32072__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs32075 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs32075))?sablono.interpreter.attributes.call(null,attrs32075):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32075))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32075),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs32080 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs32080))?sablono.interpreter.attributes.call(null,attrs32080):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32080))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32080),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs32085 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs32085))?sablono.interpreter.attributes.call(null,attrs32085):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32085))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32085),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__32090,owner){var map__32110 = p__32090;var map__32110__$1 = ((cljs.core.seq_QMARK_.call(null,map__32110))?cljs.core.apply.call(null,cljs.core.hash_map,map__32110):map__32110);var data = map__32110__$1;var map__32111 = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32111__$1 = ((cljs.core.seq_QMARK_.call(null,map__32111))?cljs.core.apply.call(null,cljs.core.hash_map,map__32111):map__32111);var filter_by_view = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filt = cljs.core.get.call(null,map__32111__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__32112 = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__32112__$1 = ((cljs.core.seq_QMARK_.call(null,map__32112))?cljs.core.apply.call(null,cljs.core.hash_map,map__32112):map__32112);var map_report = map__32112__$1;var map__32113 = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32113__$1 = ((cljs.core.seq_QMARK_.call(null,map__32113))?cljs.core.apply.call(null,cljs.core.hash_map,map__32113):map__32113);var controls = map__32113__$1;var map__32114 = cljs.core.get.call(null,map__32113__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__32114__$1 = ((cljs.core.seq_QMARK_.call(null,map__32114))?cljs.core.apply.call(null,cljs.core.hash_map,map__32114):map__32114);var summary_stats = map__32114__$1;var variables = cljs.core.get.call(null,map__32114__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__32114__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__32114__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__32112__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__32115 = cljs.core.get.call(null,map__32110__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__32115__$1 = ((cljs.core.seq_QMARK_.call(null,map__32115))?cljs.core.apply.call(null,cljs.core.hash_map,map__32115):map__32115);var bounds = cljs.core.get.call(null,map__32115__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t32116 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32116 = (function (filt,index_type,map__32111,owner,filter_by_view,data,map__32112,index,map__32115,map__32110,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,p__32090,bounds,map__32113,map__32114,meta32117){
this.filt = filt;
this.index_type = index_type;
this.map__32111 = map__32111;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__32112 = map__32112;
this.index = index;
this.map__32115 = map__32115;
this.map__32110 = map__32110;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.p__32090 = p__32090;
this.bounds = bounds;
this.map__32113 = map__32113;
this.map__32114 = map__32114;
this.meta32117 = meta32117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32116.cljs$lang$type = true;
clustermap.components.map_report.t32116.cljs$lang$ctorStr = "clustermap.components.map-report/t32116";
clustermap.components.map_report.t32116.cljs$lang$ctorPrWriter = ((function (map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t32116");
});})(map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds))
;
clustermap.components.map_report.t32116.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t32116.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds){
return (function (_,p__32119,p__32120){var self__ = this;
var map__32121 = p__32119;var map__32121__$1 = ((cljs.core.seq_QMARK_.call(null,map__32121))?cljs.core.apply.call(null,cljs.core.hash_map,map__32121):map__32121);var next_data = map__32121__$1;var map__32122 = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32122__$1 = ((cljs.core.seq_QMARK_.call(null,map__32122))?cljs.core.apply.call(null,cljs.core.hash_map,map__32122):map__32122);var next_filter_by_view = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filt = cljs.core.get.call(null,map__32122__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__32123 = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__32123__$1 = ((cljs.core.seq_QMARK_.call(null,map__32123))?cljs.core.apply.call(null,cljs.core.hash_map,map__32123):map__32123);var next_map_report = map__32123__$1;var map__32124 = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32124__$1 = ((cljs.core.seq_QMARK_.call(null,map__32124))?cljs.core.apply.call(null,cljs.core.hash_map,map__32124):map__32124);var next_controls = map__32124__$1;var map__32125 = cljs.core.get.call(null,map__32124__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__32125__$1 = ((cljs.core.seq_QMARK_.call(null,map__32125))?cljs.core.apply.call(null,cljs.core.hash_map,map__32125):map__32125);var next_summary_stats = map__32125__$1;var next_index = cljs.core.get.call(null,map__32125__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__32125__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__32125__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__32123__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__32126 = cljs.core.get.call(null,map__32121__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__32126__$1 = ((cljs.core.seq_QMARK_.call(null,map__32126))?cljs.core.apply.call(null,cljs.core.hash_map,map__32126):map__32126);var map_controls = map__32126__$1;var next_bounds = cljs.core.get.call(null,map__32126__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__32127 = p__32120;var map__32127__$1 = ((cljs.core.seq_QMARK_.call(null,map__32127))?cljs.core.apply.call(null,cljs.core.hash_map,map__32127):map__32127);var next_state = map__32127__$1;var summary_stats_resource = cljs.core.get.call(null,map__32127__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__3558__auto__)
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
});})(map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds))
;
clustermap.components.map_report.t32116.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t32116.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__32128 = om.core.get_shared.call(null,self__.owner);var map__32128__$1 = ((cljs.core.seq_QMARK_.call(null,map__32128))?cljs.core.apply.call(null,cljs.core.hash_map,map__32128):map__32128);var view_path_fn = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__32128__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds))
;
clustermap.components.map_report.t32116.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t32116.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds))
);
});})(map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds))
;
clustermap.components.map_report.t32116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds){
return (function (_32118){var self__ = this;
var _32118__$1 = this;return self__.meta32117;
});})(map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds))
;
clustermap.components.map_report.t32116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds){
return (function (_32118,meta32117__$1){var self__ = this;
var _32118__$1 = this;return (new clustermap.components.map_report.t32116(self__.filt,self__.index_type,self__.map__32111,self__.owner,self__.filter_by_view,self__.data,self__.map__32112,self__.index,self__.map__32115,self__.map__32110,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.p__32090,self__.bounds,self__.map__32113,self__.map__32114,meta32117__$1));
});})(map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds))
;
clustermap.components.map_report.__GT_t32116 = ((function (map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds){
return (function __GT_t32116(filt__$1,index_type__$1,map__32111__$2,owner__$1,filter_by_view__$1,data__$1,map__32112__$2,index__$1,map__32115__$2,map__32110__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__32090__$1,bounds__$1,map__32113__$2,map__32114__$2,meta32117){return (new clustermap.components.map_report.t32116(filt__$1,index_type__$1,map__32111__$2,owner__$1,filter_by_view__$1,data__$1,map__32112__$2,index__$1,map__32115__$2,map__32110__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__32090__$1,bounds__$1,map__32113__$2,map__32114__$2,meta32117));
});})(map__32110,map__32110__$1,data,map__32111,map__32111__$1,filter_by_view,filt,map__32112,map__32112__$1,map_report,map__32113,map__32113__$1,controls,map__32114,map__32114__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32115,map__32115__$1,bounds))
;
}
return (new clustermap.components.map_report.t32116(filt,index_type,map__32111__$1,owner,filter_by_view,data,map__32112__$1,index,map__32115__$1,map__32110__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,p__32090,bounds,map__32113__$1,map__32114__$1,null));
});
