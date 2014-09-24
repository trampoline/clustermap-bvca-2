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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__51229){var map__51253 = p__51229;var map__51253__$1 = ((cljs.core.seq_QMARK_.call(null,map__51253))?cljs.core.apply.call(null,cljs.core.hash_map,map__51253):map__51253);var summary_stats_data = map__51253__$1;var map__51254 = cljs.core.get.call(null,map__51253__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__51254__$1 = ((cljs.core.seq_QMARK_.call(null,map__51254))?cljs.core.apply.call(null,cljs.core.hash_map,map__51254):map__51254);var data = map__51254__$1;var map__51255 = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__51255__$1 = ((cljs.core.seq_QMARK_.call(null,map__51255))?cljs.core.apply.call(null,cljs.core.hash_map,map__51255):map__51255);var sum_employee_count = cljs.core.get.call(null,map__51255__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__51255__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__51256 = cljs.core.get.call(null,map__51254__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__51256__$1 = ((cljs.core.seq_QMARK_.call(null,map__51256))?cljs.core.apply.call(null,cljs.core.hash_map,map__51256):map__51256);var sum_turnover = cljs.core.get.call(null,map__51256__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,React.DOM.li(null,sablono.interpreter.input.call(null,{"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__51253,map__51253__$1,summary_stats_data,map__51254,map__51254__$1,data,map__51255,map__51255__$1,sum_employee_count,count,map__51256,map__51256__$1,sum_turnover){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.call(null,map_report_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255)], null),val);
});})(map__51253,map__51253__$1,summary_stats_data,map__51254,map__51254__$1,data,map__51255,map__51255__$1,sum_employee_count,count,map__51256,map__51256__$1,sum_turnover))
}),React.DOM.small(null,"Filter by view")),(function (){var attrs51261 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51261))?sablono.interpreter.attributes.call(null,attrs51261):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51261))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51261),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs51266 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51266))?sablono.interpreter.attributes.call(null,attrs51266):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51266))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51266),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs51271 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs51271))?sablono.interpreter.attributes.call(null,attrs51271):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs51271))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs51271),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__51276,owner){var map__51294 = p__51276;var map__51294__$1 = ((cljs.core.seq_QMARK_.call(null,map__51294))?cljs.core.apply.call(null,cljs.core.hash_map,map__51294):map__51294);var data = map__51294__$1;var filt = cljs.core.get.call(null,map__51294__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__51295 = cljs.core.get.call(null,map__51294__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__51295__$1 = ((cljs.core.seq_QMARK_.call(null,map__51295))?cljs.core.apply.call(null,cljs.core.hash_map,map__51295):map__51295);var map_report = map__51295__$1;var map__51296 = cljs.core.get.call(null,map__51295__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__51296__$1 = ((cljs.core.seq_QMARK_.call(null,map__51296))?cljs.core.apply.call(null,cljs.core.hash_map,map__51296):map__51296);var controls = map__51296__$1;var map__51297 = cljs.core.get.call(null,map__51296__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__51297__$1 = ((cljs.core.seq_QMARK_.call(null,map__51297))?cljs.core.apply.call(null,cljs.core.hash_map,map__51297):map__51297);var summary_stats = map__51297__$1;var filter_by_view = cljs.core.get.call(null,map__51297__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var variables = cljs.core.get.call(null,map__51297__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__51297__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__51297__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__51295__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__51298 = cljs.core.get.call(null,map__51294__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__51298__$1 = ((cljs.core.seq_QMARK_.call(null,map__51298))?cljs.core.apply.call(null,cljs.core.hash_map,map__51298):map__51298);var bounds = cljs.core.get.call(null,map__51298__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t51299 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t51299 = (function (filt,index_type,owner,filter_by_view,data,index,p__51276,map__51298,map__51295,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__51294,variables,bounds,map__51296,map__51297,meta51300){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.index = index;
this.p__51276 = p__51276;
this.map__51298 = map__51298;
this.map__51295 = map__51295;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__51294 = map__51294;
this.variables = variables;
this.bounds = bounds;
this.map__51296 = map__51296;
this.map__51297 = map__51297;
this.meta51300 = meta51300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t51299.cljs$lang$type = true;
clustermap.components.map_report.t51299.cljs$lang$ctorStr = "clustermap.components.map-report/t51299";
clustermap.components.map_report.t51299.cljs$lang$ctorPrWriter = ((function (map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t51299");
});})(map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds))
;
clustermap.components.map_report.t51299.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t51299.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds){
return (function (_,p__51302,p__51303){var self__ = this;
var map__51304 = p__51302;var map__51304__$1 = ((cljs.core.seq_QMARK_.call(null,map__51304))?cljs.core.apply.call(null,cljs.core.hash_map,map__51304):map__51304);var next_data = map__51304__$1;var next_filt = cljs.core.get.call(null,map__51304__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__51305 = cljs.core.get.call(null,map__51304__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__51305__$1 = ((cljs.core.seq_QMARK_.call(null,map__51305))?cljs.core.apply.call(null,cljs.core.hash_map,map__51305):map__51305);var next_map_report = map__51305__$1;var map__51306 = cljs.core.get.call(null,map__51305__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__51306__$1 = ((cljs.core.seq_QMARK_.call(null,map__51306))?cljs.core.apply.call(null,cljs.core.hash_map,map__51306):map__51306);var next_controls = map__51306__$1;var map__51307 = cljs.core.get.call(null,map__51306__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__51307__$1 = ((cljs.core.seq_QMARK_.call(null,map__51307))?cljs.core.apply.call(null,cljs.core.hash_map,map__51307):map__51307);var next_summary_stats = map__51307__$1;var next_index = cljs.core.get.call(null,map__51307__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__51307__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__51307__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_filter_by_view = cljs.core.get.call(null,map__51307__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_summary_stats_data = cljs.core.get.call(null,map__51305__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__51308 = cljs.core.get.call(null,map__51304__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__51308__$1 = ((cljs.core.seq_QMARK_.call(null,map__51308))?cljs.core.apply.call(null,cljs.core.hash_map,map__51308):map__51308);var map_controls = map__51308__$1;var next_bounds = cljs.core.get.call(null,map__51308__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__51309 = p__51303;var map__51309__$1 = ((cljs.core.seq_QMARK_.call(null,map__51309))?cljs.core.apply.call(null,cljs.core.hash_map,map__51309):map__51309);var next_state = map__51309__$1;var summary_stats_resource = cljs.core.get.call(null,map__51309__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__3558__auto__)
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
});})(map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds))
;
clustermap.components.map_report.t51299.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t51299.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__51310 = om.core.get_shared.call(null,self__.owner);var map__51310__$1 = ((cljs.core.seq_QMARK_.call(null,map__51310))?cljs.core.apply.call(null,cljs.core.hash_map,map__51310):map__51310);var view_path_fn = cljs.core.get.call(null,map__51310__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__51310__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__51310__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds))
;
clustermap.components.map_report.t51299.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t51299.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds))
);
});})(map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds))
;
clustermap.components.map_report.t51299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds){
return (function (_51301){var self__ = this;
var _51301__$1 = this;return self__.meta51300;
});})(map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds))
;
clustermap.components.map_report.t51299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds){
return (function (_51301,meta51300__$1){var self__ = this;
var _51301__$1 = this;return (new clustermap.components.map_report.t51299(self__.filt,self__.index_type,self__.owner,self__.filter_by_view,self__.data,self__.index,self__.p__51276,self__.map__51298,self__.map__51295,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.map__51294,self__.variables,self__.bounds,self__.map__51296,self__.map__51297,meta51300__$1));
});})(map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds))
;
clustermap.components.map_report.__GT_t51299 = ((function (map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds){
return (function __GT_t51299(filt__$1,index_type__$1,owner__$1,filter_by_view__$1,data__$1,index__$1,p__51276__$1,map__51298__$2,map__51295__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__51294__$2,variables__$1,bounds__$1,map__51296__$2,map__51297__$2,meta51300){return (new clustermap.components.map_report.t51299(filt__$1,index_type__$1,owner__$1,filter_by_view__$1,data__$1,index__$1,p__51276__$1,map__51298__$2,map__51295__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,map__51294__$2,variables__$1,bounds__$1,map__51296__$2,map__51297__$2,meta51300));
});})(map__51294,map__51294__$1,data,filt,map__51295,map__51295__$1,map_report,map__51296,map__51296__$1,controls,map__51297,map__51297__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__51298,map__51298__$1,bounds))
;
}
return (new clustermap.components.map_report.t51299(filt,index_type,owner,filter_by_view,data,index,p__51276,map__51298__$1,map__51295__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,map__51294__$1,variables,bounds,map__51296__$1,map__51297__$1,null));
});

//# sourceMappingURL=map_report.js.map