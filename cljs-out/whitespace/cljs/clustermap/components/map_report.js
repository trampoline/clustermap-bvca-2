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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__13441){var map__13465 = p__13441;var map__13465__$1 = ((cljs.core.seq_QMARK_.call(null,map__13465))?cljs.core.apply.call(null,cljs.core.hash_map,map__13465):map__13465);var summary_stats_data = map__13465__$1;var map__13466 = cljs.core.get.call(null,map__13465__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__13466__$1 = ((cljs.core.seq_QMARK_.call(null,map__13466))?cljs.core.apply.call(null,cljs.core.hash_map,map__13466):map__13466);var data = map__13466__$1;var map__13467 = cljs.core.get.call(null,map__13466__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__13467__$1 = ((cljs.core.seq_QMARK_.call(null,map__13467))?cljs.core.apply.call(null,cljs.core.hash_map,map__13467):map__13467);var sum_employee_count = cljs.core.get.call(null,map__13467__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__13467__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__13468 = cljs.core.get.call(null,map__13466__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__13468__$1 = ((cljs.core.seq_QMARK_.call(null,map__13468))?cljs.core.apply.call(null,cljs.core.hash_map,map__13468):map__13468);var sum_turnover = cljs.core.get.call(null,map__13468__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,React.DOM.li(null,sablono.interpreter.input.call(null,{"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__13465,map__13465__$1,summary_stats_data,map__13466,map__13466__$1,data,map__13467,map__13467__$1,sum_employee_count,count,map__13468,map__13468__$1,sum_turnover){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.call(null,map_report_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251),new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255)], null),val);
});})(map__13465,map__13465__$1,summary_stats_data,map__13466,map__13466__$1,data,map__13467,map__13467__$1,sum_employee_count,count,map__13468,map__13468__$1,sum_turnover))
}),React.DOM.small(null,"Filter by view")),(function (){var attrs13473 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13473))?sablono.interpreter.attributes.call(null,attrs13473):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13473))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13473),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs13478 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13478))?sablono.interpreter.attributes.call(null,attrs13478):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13478))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13478),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13483 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13483))?sablono.interpreter.attributes.call(null,attrs13483):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13483))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13483),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__13488,owner){var map__13506 = p__13488;var map__13506__$1 = ((cljs.core.seq_QMARK_.call(null,map__13506))?cljs.core.apply.call(null,cljs.core.hash_map,map__13506):map__13506);var data = map__13506__$1;var filt = cljs.core.get.call(null,map__13506__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13507 = cljs.core.get.call(null,map__13506__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__13507__$1 = ((cljs.core.seq_QMARK_.call(null,map__13507))?cljs.core.apply.call(null,cljs.core.hash_map,map__13507):map__13507);var map_report = map__13507__$1;var map__13508 = cljs.core.get.call(null,map__13507__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13508__$1 = ((cljs.core.seq_QMARK_.call(null,map__13508))?cljs.core.apply.call(null,cljs.core.hash_map,map__13508):map__13508);var controls = map__13508__$1;var map__13509 = cljs.core.get.call(null,map__13508__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__13509__$1 = ((cljs.core.seq_QMARK_.call(null,map__13509))?cljs.core.apply.call(null,cljs.core.hash_map,map__13509):map__13509);var summary_stats = map__13509__$1;var filter_by_view = cljs.core.get.call(null,map__13509__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var variables = cljs.core.get.call(null,map__13509__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__13509__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__13509__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__13507__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__13510 = cljs.core.get.call(null,map__13506__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__13510__$1 = ((cljs.core.seq_QMARK_.call(null,map__13510))?cljs.core.apply.call(null,cljs.core.hash_map,map__13510):map__13510);var bounds = cljs.core.get.call(null,map__13510__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t13511 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13511 = (function (filt,index_type,owner,map__13509,filter_by_view,data,map__13506,index,map__13510,p__13488,map__13508,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__13507,meta13512){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.map__13509 = map__13509;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__13506 = map__13506;
this.index = index;
this.map__13510 = map__13510;
this.p__13488 = p__13488;
this.map__13508 = map__13508;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.bounds = bounds;
this.map__13507 = map__13507;
this.meta13512 = meta13512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13511.cljs$lang$type = true;
clustermap.components.map_report.t13511.cljs$lang$ctorStr = "clustermap.components.map-report/t13511";
clustermap.components.map_report.t13511.cljs$lang$ctorPrWriter = ((function (map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t13511");
});})(map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds))
;
clustermap.components.map_report.t13511.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t13511.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds){
return (function (_,p__13514,p__13515){var self__ = this;
var map__13516 = p__13514;var map__13516__$1 = ((cljs.core.seq_QMARK_.call(null,map__13516))?cljs.core.apply.call(null,cljs.core.hash_map,map__13516):map__13516);var next_data = map__13516__$1;var next_filt = cljs.core.get.call(null,map__13516__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13517 = cljs.core.get.call(null,map__13516__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__13517__$1 = ((cljs.core.seq_QMARK_.call(null,map__13517))?cljs.core.apply.call(null,cljs.core.hash_map,map__13517):map__13517);var next_map_report = map__13517__$1;var map__13518 = cljs.core.get.call(null,map__13517__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13518__$1 = ((cljs.core.seq_QMARK_.call(null,map__13518))?cljs.core.apply.call(null,cljs.core.hash_map,map__13518):map__13518);var next_controls = map__13518__$1;var map__13519 = cljs.core.get.call(null,map__13518__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__13519__$1 = ((cljs.core.seq_QMARK_.call(null,map__13519))?cljs.core.apply.call(null,cljs.core.hash_map,map__13519):map__13519);var next_summary_stats = map__13519__$1;var next_index = cljs.core.get.call(null,map__13519__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__13519__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__13519__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_filter_by_view = cljs.core.get.call(null,map__13519__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_summary_stats_data = cljs.core.get.call(null,map__13517__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__13520 = cljs.core.get.call(null,map__13516__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__13520__$1 = ((cljs.core.seq_QMARK_.call(null,map__13520))?cljs.core.apply.call(null,cljs.core.hash_map,map__13520):map__13520);var map_controls = map__13520__$1;var next_bounds = cljs.core.get.call(null,map__13520__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__13521 = p__13515;var map__13521__$1 = ((cljs.core.seq_QMARK_.call(null,map__13521))?cljs.core.apply.call(null,cljs.core.hash_map,map__13521):map__13521);var next_state = map__13521__$1;var summary_stats_resource = cljs.core.get.call(null,map__13521__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__3558__auto__)
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
});})(map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds))
;
clustermap.components.map_report.t13511.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t13511.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__13522 = om.core.get_shared.call(null,self__.owner);var map__13522__$1 = ((cljs.core.seq_QMARK_.call(null,map__13522))?cljs.core.apply.call(null,cljs.core.hash_map,map__13522):map__13522);var view_path_fn = cljs.core.get.call(null,map__13522__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13522__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13522__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds))
;
clustermap.components.map_report.t13511.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t13511.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds))
);
});})(map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds))
;
clustermap.components.map_report.t13511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds){
return (function (_13513){var self__ = this;
var _13513__$1 = this;return self__.meta13512;
});})(map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds))
;
clustermap.components.map_report.t13511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds){
return (function (_13513,meta13512__$1){var self__ = this;
var _13513__$1 = this;return (new clustermap.components.map_report.t13511(self__.filt,self__.index_type,self__.owner,self__.map__13509,self__.filter_by_view,self__.data,self__.map__13506,self__.index,self__.map__13510,self__.p__13488,self__.map__13508,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.bounds,self__.map__13507,meta13512__$1));
});})(map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds))
;
clustermap.components.map_report.__GT_t13511 = ((function (map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds){
return (function __GT_t13511(filt__$1,index_type__$1,owner__$1,map__13509__$2,filter_by_view__$1,data__$1,map__13506__$2,index__$1,map__13510__$2,p__13488__$1,map__13508__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__13507__$2,meta13512){return (new clustermap.components.map_report.t13511(filt__$1,index_type__$1,owner__$1,map__13509__$2,filter_by_view__$1,data__$1,map__13506__$2,index__$1,map__13510__$2,p__13488__$1,map__13508__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__13507__$2,meta13512));
});})(map__13506,map__13506__$1,data,filt,map__13507,map__13507__$1,map_report,map__13508,map__13508__$1,controls,map__13509,map__13509__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__13510,map__13510__$1,bounds))
;
}
return (new clustermap.components.map_report.t13511(filt,index_type,owner,map__13509__$1,filter_by_view,data,map__13506__$1,index,map__13510__$1,p__13488,map__13508__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__13507__$1,null));
});
