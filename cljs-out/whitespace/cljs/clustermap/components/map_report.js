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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__16184){var map__16206 = p__16184;var map__16206__$1 = ((cljs.core.seq_QMARK_.call(null,map__16206))?cljs.core.apply.call(null,cljs.core.hash_map,map__16206):map__16206);var summary_stats_data = map__16206__$1;var map__16207 = cljs.core.get.call(null,map__16206__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__16207__$1 = ((cljs.core.seq_QMARK_.call(null,map__16207))?cljs.core.apply.call(null,cljs.core.hash_map,map__16207):map__16207);var data = map__16207__$1;var map__16208 = cljs.core.get.call(null,map__16207__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__16208__$1 = ((cljs.core.seq_QMARK_.call(null,map__16208))?cljs.core.apply.call(null,cljs.core.hash_map,map__16208):map__16208);var sum_employee_count = cljs.core.get.call(null,map__16208__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__16208__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__16209 = cljs.core.get.call(null,map__16207__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__16209__$1 = ((cljs.core.seq_QMARK_.call(null,map__16209))?cljs.core.apply.call(null,cljs.core.hash_map,map__16209):map__16209);var sum_turnover = cljs.core.get.call(null,map__16209__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs16212 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs16212))?sablono.interpreter.attributes.call(null,attrs16212):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16212))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16212),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs16217 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs16217))?sablono.interpreter.attributes.call(null,attrs16217):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16217))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16217),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs16222 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs16222))?sablono.interpreter.attributes.call(null,attrs16222):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs16222))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs16222),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__16227,owner){var map__16247 = p__16227;var map__16247__$1 = ((cljs.core.seq_QMARK_.call(null,map__16247))?cljs.core.apply.call(null,cljs.core.hash_map,map__16247):map__16247);var data = map__16247__$1;var map__16248 = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__16248__$1 = ((cljs.core.seq_QMARK_.call(null,map__16248))?cljs.core.apply.call(null,cljs.core.hash_map,map__16248):map__16248);var filter_by_view = cljs.core.get.call(null,map__16248__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filt = cljs.core.get.call(null,map__16248__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__16249 = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__16249__$1 = ((cljs.core.seq_QMARK_.call(null,map__16249))?cljs.core.apply.call(null,cljs.core.hash_map,map__16249):map__16249);var map_report = map__16249__$1;var map__16250 = cljs.core.get.call(null,map__16249__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__16250__$1 = ((cljs.core.seq_QMARK_.call(null,map__16250))?cljs.core.apply.call(null,cljs.core.hash_map,map__16250):map__16250);var controls = map__16250__$1;var map__16251 = cljs.core.get.call(null,map__16250__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__16251__$1 = ((cljs.core.seq_QMARK_.call(null,map__16251))?cljs.core.apply.call(null,cljs.core.hash_map,map__16251):map__16251);var summary_stats = map__16251__$1;var variables = cljs.core.get.call(null,map__16251__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__16251__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__16251__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__16249__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__16252 = cljs.core.get.call(null,map__16247__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__16252__$1 = ((cljs.core.seq_QMARK_.call(null,map__16252))?cljs.core.apply.call(null,cljs.core.hash_map,map__16252):map__16252);var bounds = cljs.core.get.call(null,map__16252__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t16253 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t16253 = (function (filt,index_type,map__16250,owner,map__16249,filter_by_view,data,map__16247,map__16252,map__16251,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__16248,p__16227,meta16254){
this.filt = filt;
this.index_type = index_type;
this.map__16250 = map__16250;
this.owner = owner;
this.map__16249 = map__16249;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__16247 = map__16247;
this.map__16252 = map__16252;
this.map__16251 = map__16251;
this.index = index;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.bounds = bounds;
this.map__16248 = map__16248;
this.p__16227 = p__16227;
this.meta16254 = meta16254;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t16253.cljs$lang$type = true;
clustermap.components.map_report.t16253.cljs$lang$ctorStr = "clustermap.components.map-report/t16253";
clustermap.components.map_report.t16253.cljs$lang$ctorPrWriter = ((function (map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t16253");
});})(map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds))
;
clustermap.components.map_report.t16253.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t16253.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds){
return (function (_,p__16256,p__16257){var self__ = this;
var map__16258 = p__16256;var map__16258__$1 = ((cljs.core.seq_QMARK_.call(null,map__16258))?cljs.core.apply.call(null,cljs.core.hash_map,map__16258):map__16258);var next_data = map__16258__$1;var map__16259 = cljs.core.get.call(null,map__16258__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__16259__$1 = ((cljs.core.seq_QMARK_.call(null,map__16259))?cljs.core.apply.call(null,cljs.core.hash_map,map__16259):map__16259);var next_filter_by_view = cljs.core.get.call(null,map__16259__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filt = cljs.core.get.call(null,map__16259__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__16260 = cljs.core.get.call(null,map__16258__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__16260__$1 = ((cljs.core.seq_QMARK_.call(null,map__16260))?cljs.core.apply.call(null,cljs.core.hash_map,map__16260):map__16260);var next_map_report = map__16260__$1;var map__16261 = cljs.core.get.call(null,map__16260__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__16261__$1 = ((cljs.core.seq_QMARK_.call(null,map__16261))?cljs.core.apply.call(null,cljs.core.hash_map,map__16261):map__16261);var next_controls = map__16261__$1;var map__16262 = cljs.core.get.call(null,map__16261__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__16262__$1 = ((cljs.core.seq_QMARK_.call(null,map__16262))?cljs.core.apply.call(null,cljs.core.hash_map,map__16262):map__16262);var next_summary_stats = map__16262__$1;var next_index = cljs.core.get.call(null,map__16262__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__16262__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__16262__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__16260__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__16263 = cljs.core.get.call(null,map__16258__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__16263__$1 = ((cljs.core.seq_QMARK_.call(null,map__16263))?cljs.core.apply.call(null,cljs.core.hash_map,map__16263):map__16263);var map_controls = map__16263__$1;var next_bounds = cljs.core.get.call(null,map__16263__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__16264 = p__16257;var map__16264__$1 = ((cljs.core.seq_QMARK_.call(null,map__16264))?cljs.core.apply.call(null,cljs.core.hash_map,map__16264):map__16264);var next_state = map__16264__$1;var summary_stats_resource = cljs.core.get.call(null,map__16264__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__3558__auto__)
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
});})(map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds))
;
clustermap.components.map_report.t16253.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t16253.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__16265 = om.core.get_shared.call(null,self__.owner);var map__16265__$1 = ((cljs.core.seq_QMARK_.call(null,map__16265))?cljs.core.apply.call(null,cljs.core.hash_map,map__16265):map__16265);var view_path_fn = cljs.core.get.call(null,map__16265__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__16265__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__16265__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds))
;
clustermap.components.map_report.t16253.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t16253.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds))
);
});})(map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds))
;
clustermap.components.map_report.t16253.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds){
return (function (_16255){var self__ = this;
var _16255__$1 = this;return self__.meta16254;
});})(map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds))
;
clustermap.components.map_report.t16253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds){
return (function (_16255,meta16254__$1){var self__ = this;
var _16255__$1 = this;return (new clustermap.components.map_report.t16253(self__.filt,self__.index_type,self__.map__16250,self__.owner,self__.map__16249,self__.filter_by_view,self__.data,self__.map__16247,self__.map__16252,self__.map__16251,self__.index,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.bounds,self__.map__16248,self__.p__16227,meta16254__$1));
});})(map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds))
;
clustermap.components.map_report.__GT_t16253 = ((function (map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds){
return (function __GT_t16253(filt__$1,index_type__$1,map__16250__$2,owner__$1,map__16249__$2,filter_by_view__$1,data__$1,map__16247__$2,map__16252__$2,map__16251__$2,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__16248__$2,p__16227__$1,meta16254){return (new clustermap.components.map_report.t16253(filt__$1,index_type__$1,map__16250__$2,owner__$1,map__16249__$2,filter_by_view__$1,data__$1,map__16247__$2,map__16252__$2,map__16251__$2,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__16248__$2,p__16227__$1,meta16254));
});})(map__16247,map__16247__$1,data,map__16248,map__16248__$1,filter_by_view,filt,map__16249,map__16249__$1,map_report,map__16250,map__16250__$1,controls,map__16251,map__16251__$1,summary_stats,variables,index_type,index,summary_stats_data,map__16252,map__16252__$1,bounds))
;
}
return (new clustermap.components.map_report.t16253(filt,index_type,map__16250__$1,owner,map__16249__$1,filter_by_view,data,map__16247__$1,map__16252__$1,map__16251__$1,index,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__16248__$1,p__16227,null));
});
