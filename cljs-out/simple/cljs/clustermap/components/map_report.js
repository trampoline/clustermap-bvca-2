// Compiled by ClojureScript 0.0-2356
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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__32362){var map__32384 = p__32362;var map__32384__$1 = ((cljs.core.seq_QMARK_.call(null,map__32384))?cljs.core.apply.call(null,cljs.core.hash_map,map__32384):map__32384);var summary_stats_data = map__32384__$1;var map__32385 = cljs.core.get.call(null,map__32384__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__32385__$1 = ((cljs.core.seq_QMARK_.call(null,map__32385))?cljs.core.apply.call(null,cljs.core.hash_map,map__32385):map__32385);var data = map__32385__$1;var map__32386 = cljs.core.get.call(null,map__32385__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__32386__$1 = ((cljs.core.seq_QMARK_.call(null,map__32386))?cljs.core.apply.call(null,cljs.core.hash_map,map__32386):map__32386);var sum_employee_count = cljs.core.get.call(null,map__32386__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__32386__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__32387 = cljs.core.get.call(null,map__32385__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__32387__$1 = ((cljs.core.seq_QMARK_.call(null,map__32387))?cljs.core.apply.call(null,cljs.core.hash_map,map__32387):map__32387);var sum_turnover = cljs.core.get.call(null,map__32387__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs32390 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs32390))?sablono.interpreter.attributes.call(null,attrs32390):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32390))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32390),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs32395 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs32395))?sablono.interpreter.attributes.call(null,attrs32395):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32395))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32395),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs32400 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs32400))?sablono.interpreter.attributes.call(null,attrs32400):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32400))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32400),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__32405,owner){var map__32425 = p__32405;var map__32425__$1 = ((cljs.core.seq_QMARK_.call(null,map__32425))?cljs.core.apply.call(null,cljs.core.hash_map,map__32425):map__32425);var data = map__32425__$1;var map__32426 = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32426__$1 = ((cljs.core.seq_QMARK_.call(null,map__32426))?cljs.core.apply.call(null,cljs.core.hash_map,map__32426):map__32426);var filter_by_view = cljs.core.get.call(null,map__32426__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filt = cljs.core.get.call(null,map__32426__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__32427 = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__32427__$1 = ((cljs.core.seq_QMARK_.call(null,map__32427))?cljs.core.apply.call(null,cljs.core.hash_map,map__32427):map__32427);var map_report = map__32427__$1;var map__32428 = cljs.core.get.call(null,map__32427__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32428__$1 = ((cljs.core.seq_QMARK_.call(null,map__32428))?cljs.core.apply.call(null,cljs.core.hash_map,map__32428):map__32428);var controls = map__32428__$1;var map__32429 = cljs.core.get.call(null,map__32428__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__32429__$1 = ((cljs.core.seq_QMARK_.call(null,map__32429))?cljs.core.apply.call(null,cljs.core.hash_map,map__32429):map__32429);var summary_stats = map__32429__$1;var variables = cljs.core.get.call(null,map__32429__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__32429__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__32429__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__32427__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__32430 = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__32430__$1 = ((cljs.core.seq_QMARK_.call(null,map__32430))?cljs.core.apply.call(null,cljs.core.hash_map,map__32430):map__32430);var bounds = cljs.core.get.call(null,map__32430__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t32431 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32431 = (function (filt,index_type,map__32426,owner,filter_by_view,data,index,map__32430,controls,summary_stats_data,map_report,summary_stats,map_report_component,p__32405,map__32425,variables,map__32427,bounds,map__32428,map__32429,meta32432){
this.filt = filt;
this.index_type = index_type;
this.map__32426 = map__32426;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.index = index;
this.map__32430 = map__32430;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.p__32405 = p__32405;
this.map__32425 = map__32425;
this.variables = variables;
this.map__32427 = map__32427;
this.bounds = bounds;
this.map__32428 = map__32428;
this.map__32429 = map__32429;
this.meta32432 = meta32432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32431.cljs$lang$type = true;
clustermap.components.map_report.t32431.cljs$lang$ctorStr = "clustermap.components.map-report/t32431";
clustermap.components.map_report.t32431.cljs$lang$ctorPrWriter = ((function (map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.map-report/t32431");
});})(map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds))
;
clustermap.components.map_report.t32431.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t32431.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds){
return (function (_,p__32434,p__32435){var self__ = this;
var map__32436 = p__32434;var map__32436__$1 = ((cljs.core.seq_QMARK_.call(null,map__32436))?cljs.core.apply.call(null,cljs.core.hash_map,map__32436):map__32436);var next_data = map__32436__$1;var map__32437 = cljs.core.get.call(null,map__32436__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__32437__$1 = ((cljs.core.seq_QMARK_.call(null,map__32437))?cljs.core.apply.call(null,cljs.core.hash_map,map__32437):map__32437);var next_filter_by_view = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filt = cljs.core.get.call(null,map__32437__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__32438 = cljs.core.get.call(null,map__32436__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__32438__$1 = ((cljs.core.seq_QMARK_.call(null,map__32438))?cljs.core.apply.call(null,cljs.core.hash_map,map__32438):map__32438);var next_map_report = map__32438__$1;var map__32439 = cljs.core.get.call(null,map__32438__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__32439__$1 = ((cljs.core.seq_QMARK_.call(null,map__32439))?cljs.core.apply.call(null,cljs.core.hash_map,map__32439):map__32439);var next_controls = map__32439__$1;var map__32440 = cljs.core.get.call(null,map__32439__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__32440__$1 = ((cljs.core.seq_QMARK_.call(null,map__32440))?cljs.core.apply.call(null,cljs.core.hash_map,map__32440):map__32440);var next_summary_stats = map__32440__$1;var next_index = cljs.core.get.call(null,map__32440__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__32440__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__32440__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__32438__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__32441 = cljs.core.get.call(null,map__32436__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__32441__$1 = ((cljs.core.seq_QMARK_.call(null,map__32441))?cljs.core.apply.call(null,cljs.core.hash_map,map__32441):map__32441);var map_controls = map__32441__$1;var next_bounds = cljs.core.get.call(null,map__32441__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__32442 = p__32435;var map__32442__$1 = ((cljs.core.seq_QMARK_.call(null,map__32442))?cljs.core.apply.call(null,cljs.core.hash_map,map__32442):map__32442);var next_state = map__32442__$1;var summary_stats_resource = cljs.core.get.call(null,map__32442__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.not_EQ_.call(null,next_filt,self__.filt);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{var or__3637__auto____$2 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__3637__auto____$2)
{return or__3637__auto____$2;
} else
{var and__3625__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3625__auto__))
{return cljs.core.not_EQ_.call(null,next_bounds,self__.bounds);
} else
{return and__3625__auto__;
}
}
}
}
})()))
{return clustermap.components.map_report.request_summary_stats.call(null,summary_stats_resource,next_index,next_index_type,next_variables,next_filt,(cljs.core.truth_(next_filter_by_view)?om.core._value.call(null,next_bounds):null));
} else
{return null;
}
});})(map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds))
;
clustermap.components.map_report.t32431.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t32431.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__32443 = om.core.get_shared.call(null,self__.owner);var map__32443__$1 = ((cljs.core.seq_QMARK_.call(null,map__32443))?cljs.core.apply.call(null,cljs.core.hash_map,map__32443):map__32443);var view_path_fn = cljs.core.get.call(null,map__32443__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__32443__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__32443__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds))
;
clustermap.components.map_report.t32431.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t32431.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds))
);
});})(map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds))
;
clustermap.components.map_report.t32431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds){
return (function (_32433){var self__ = this;
var _32433__$1 = this;return self__.meta32432;
});})(map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds))
;
clustermap.components.map_report.t32431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds){
return (function (_32433,meta32432__$1){var self__ = this;
var _32433__$1 = this;return (new clustermap.components.map_report.t32431(self__.filt,self__.index_type,self__.map__32426,self__.owner,self__.filter_by_view,self__.data,self__.index,self__.map__32430,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.p__32405,self__.map__32425,self__.variables,self__.map__32427,self__.bounds,self__.map__32428,self__.map__32429,meta32432__$1));
});})(map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds))
;
clustermap.components.map_report.__GT_t32431 = ((function (map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds){
return (function __GT_t32431(filt__$1,index_type__$1,map__32426__$2,owner__$1,filter_by_view__$1,data__$1,index__$1,map__32430__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,p__32405__$1,map__32425__$2,variables__$1,map__32427__$2,bounds__$1,map__32428__$2,map__32429__$2,meta32432){return (new clustermap.components.map_report.t32431(filt__$1,index_type__$1,map__32426__$2,owner__$1,filter_by_view__$1,data__$1,index__$1,map__32430__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,p__32405__$1,map__32425__$2,variables__$1,map__32427__$2,bounds__$1,map__32428__$2,map__32429__$2,meta32432));
});})(map__32425,map__32425__$1,data,map__32426,map__32426__$1,filter_by_view,filt,map__32427,map__32427__$1,map_report,map__32428,map__32428__$1,controls,map__32429,map__32429__$1,summary_stats,variables,index_type,index,summary_stats_data,map__32430,map__32430__$1,bounds))
;
}
return (new clustermap.components.map_report.t32431(filt,index_type,map__32426__$1,owner,filter_by_view,data,index,map__32430__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,p__32405,map__32425__$1,variables,map__32427__$1,bounds,map__32428__$1,map__32429__$1,null));
});
