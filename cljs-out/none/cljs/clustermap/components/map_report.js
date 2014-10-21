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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__58395){var map__58417 = p__58395;var map__58417__$1 = ((cljs.core.seq_QMARK_.call(null,map__58417))?cljs.core.apply.call(null,cljs.core.hash_map,map__58417):map__58417);var summary_stats_data = map__58417__$1;var map__58418 = cljs.core.get.call(null,map__58417__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__58418__$1 = ((cljs.core.seq_QMARK_.call(null,map__58418))?cljs.core.apply.call(null,cljs.core.hash_map,map__58418):map__58418);var data = map__58418__$1;var map__58419 = cljs.core.get.call(null,map__58418__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__58419__$1 = ((cljs.core.seq_QMARK_.call(null,map__58419))?cljs.core.apply.call(null,cljs.core.hash_map,map__58419):map__58419);var sum_employee_count = cljs.core.get.call(null,map__58419__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__58419__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__58420 = cljs.core.get.call(null,map__58418__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__58420__$1 = ((cljs.core.seq_QMARK_.call(null,map__58420))?cljs.core.apply.call(null,cljs.core.hash_map,map__58420):map__58420);var sum_turnover = cljs.core.get.call(null,map__58420__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs58423 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs58423))?sablono.interpreter.attributes.call(null,attrs58423):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58423))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58423),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs58428 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs58428))?sablono.interpreter.attributes.call(null,attrs58428):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58428))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58428),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs58433 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs58433))?sablono.interpreter.attributes.call(null,attrs58433):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs58433))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs58433),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__58438,owner){var map__58458 = p__58438;var map__58458__$1 = ((cljs.core.seq_QMARK_.call(null,map__58458))?cljs.core.apply.call(null,cljs.core.hash_map,map__58458):map__58458);var data = map__58458__$1;var map__58459 = cljs.core.get.call(null,map__58458__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__58459__$1 = ((cljs.core.seq_QMARK_.call(null,map__58459))?cljs.core.apply.call(null,cljs.core.hash_map,map__58459):map__58459);var filter_by_view = cljs.core.get.call(null,map__58459__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filt = cljs.core.get.call(null,map__58459__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__58460 = cljs.core.get.call(null,map__58458__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__58460__$1 = ((cljs.core.seq_QMARK_.call(null,map__58460))?cljs.core.apply.call(null,cljs.core.hash_map,map__58460):map__58460);var map_report = map__58460__$1;var map__58461 = cljs.core.get.call(null,map__58460__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__58461__$1 = ((cljs.core.seq_QMARK_.call(null,map__58461))?cljs.core.apply.call(null,cljs.core.hash_map,map__58461):map__58461);var controls = map__58461__$1;var map__58462 = cljs.core.get.call(null,map__58461__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__58462__$1 = ((cljs.core.seq_QMARK_.call(null,map__58462))?cljs.core.apply.call(null,cljs.core.hash_map,map__58462):map__58462);var summary_stats = map__58462__$1;var variables = cljs.core.get.call(null,map__58462__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__58462__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__58462__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__58460__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__58463 = cljs.core.get.call(null,map__58458__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__58463__$1 = ((cljs.core.seq_QMARK_.call(null,map__58463))?cljs.core.apply.call(null,cljs.core.hash_map,map__58463):map__58463);var bounds = cljs.core.get.call(null,map__58463__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t58464 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t58464 = (function (map__58463,filt,index_type,map__58459,map__58461,owner,filter_by_view,data,map__58460,p__58438,index,map__58458,map__58462,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,meta58465){
this.map__58463 = map__58463;
this.filt = filt;
this.index_type = index_type;
this.map__58459 = map__58459;
this.map__58461 = map__58461;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__58460 = map__58460;
this.p__58438 = p__58438;
this.index = index;
this.map__58458 = map__58458;
this.map__58462 = map__58462;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.bounds = bounds;
this.meta58465 = meta58465;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t58464.cljs$lang$type = true;
clustermap.components.map_report.t58464.cljs$lang$ctorStr = "clustermap.components.map-report/t58464";
clustermap.components.map_report.t58464.cljs$lang$ctorPrWriter = ((function (map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t58464");
});})(map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds))
;
clustermap.components.map_report.t58464.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t58464.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds){
return (function (_,p__58467,p__58468){var self__ = this;
var map__58469 = p__58467;var map__58469__$1 = ((cljs.core.seq_QMARK_.call(null,map__58469))?cljs.core.apply.call(null,cljs.core.hash_map,map__58469):map__58469);var next_data = map__58469__$1;var map__58470 = cljs.core.get.call(null,map__58469__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__58470__$1 = ((cljs.core.seq_QMARK_.call(null,map__58470))?cljs.core.apply.call(null,cljs.core.hash_map,map__58470):map__58470);var next_filter_by_view = cljs.core.get.call(null,map__58470__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filt = cljs.core.get.call(null,map__58470__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__58471 = cljs.core.get.call(null,map__58469__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__58471__$1 = ((cljs.core.seq_QMARK_.call(null,map__58471))?cljs.core.apply.call(null,cljs.core.hash_map,map__58471):map__58471);var next_map_report = map__58471__$1;var map__58472 = cljs.core.get.call(null,map__58471__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__58472__$1 = ((cljs.core.seq_QMARK_.call(null,map__58472))?cljs.core.apply.call(null,cljs.core.hash_map,map__58472):map__58472);var next_controls = map__58472__$1;var map__58473 = cljs.core.get.call(null,map__58472__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__58473__$1 = ((cljs.core.seq_QMARK_.call(null,map__58473))?cljs.core.apply.call(null,cljs.core.hash_map,map__58473):map__58473);var next_summary_stats = map__58473__$1;var next_index = cljs.core.get.call(null,map__58473__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__58473__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__58473__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__58471__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__58474 = cljs.core.get.call(null,map__58469__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__58474__$1 = ((cljs.core.seq_QMARK_.call(null,map__58474))?cljs.core.apply.call(null,cljs.core.hash_map,map__58474):map__58474);var map_controls = map__58474__$1;var next_bounds = cljs.core.get.call(null,map__58474__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__58475 = p__58468;var map__58475__$1 = ((cljs.core.seq_QMARK_.call(null,map__58475))?cljs.core.apply.call(null,cljs.core.hash_map,map__58475):map__58475);var next_state = map__58475__$1;var summary_stats_resource = cljs.core.get.call(null,map__58475__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__3558__auto__)
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
});})(map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds))
;
clustermap.components.map_report.t58464.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t58464.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__58476 = om.core.get_shared.call(null,self__.owner);var map__58476__$1 = ((cljs.core.seq_QMARK_.call(null,map__58476))?cljs.core.apply.call(null,cljs.core.hash_map,map__58476):map__58476);var view_path_fn = cljs.core.get.call(null,map__58476__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__58476__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__58476__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds))
;
clustermap.components.map_report.t58464.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t58464.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds))
);
});})(map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds))
;
clustermap.components.map_report.t58464.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds){
return (function (_58466){var self__ = this;
var _58466__$1 = this;return self__.meta58465;
});})(map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds))
;
clustermap.components.map_report.t58464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds){
return (function (_58466,meta58465__$1){var self__ = this;
var _58466__$1 = this;return (new clustermap.components.map_report.t58464(self__.map__58463,self__.filt,self__.index_type,self__.map__58459,self__.map__58461,self__.owner,self__.filter_by_view,self__.data,self__.map__58460,self__.p__58438,self__.index,self__.map__58458,self__.map__58462,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.bounds,meta58465__$1));
});})(map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds))
;
clustermap.components.map_report.__GT_t58464 = ((function (map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds){
return (function __GT_t58464(map__58463__$2,filt__$1,index_type__$1,map__58459__$2,map__58461__$2,owner__$1,filter_by_view__$1,data__$1,map__58460__$2,p__58438__$1,index__$1,map__58458__$2,map__58462__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,meta58465){return (new clustermap.components.map_report.t58464(map__58463__$2,filt__$1,index_type__$1,map__58459__$2,map__58461__$2,owner__$1,filter_by_view__$1,data__$1,map__58460__$2,p__58438__$1,index__$1,map__58458__$2,map__58462__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,meta58465));
});})(map__58458,map__58458__$1,data,map__58459,map__58459__$1,filter_by_view,filt,map__58460,map__58460__$1,map_report,map__58461,map__58461__$1,controls,map__58462,map__58462__$1,summary_stats,variables,index_type,index,summary_stats_data,map__58463,map__58463__$1,bounds))
;
}
return (new clustermap.components.map_report.t58464(map__58463__$1,filt,index_type,map__58459__$1,map__58461__$1,owner,filter_by_view,data,map__58460__$1,p__58438,index,map__58458__$1,map__58462__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,null));
});

//# sourceMappingURL=map_report.js.map