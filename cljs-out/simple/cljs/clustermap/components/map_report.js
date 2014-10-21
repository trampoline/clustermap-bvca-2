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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__40704){var map__40726 = p__40704;var map__40726__$1 = ((cljs.core.seq_QMARK_.call(null,map__40726))?cljs.core.apply.call(null,cljs.core.hash_map,map__40726):map__40726);var summary_stats_data = map__40726__$1;var map__40727 = cljs.core.get.call(null,map__40726__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__40727__$1 = ((cljs.core.seq_QMARK_.call(null,map__40727))?cljs.core.apply.call(null,cljs.core.hash_map,map__40727):map__40727);var data = map__40727__$1;var map__40728 = cljs.core.get.call(null,map__40727__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__40728__$1 = ((cljs.core.seq_QMARK_.call(null,map__40728))?cljs.core.apply.call(null,cljs.core.hash_map,map__40728):map__40728);var sum_employee_count = cljs.core.get.call(null,map__40728__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__40728__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__40729 = cljs.core.get.call(null,map__40727__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__40729__$1 = ((cljs.core.seq_QMARK_.call(null,map__40729))?cljs.core.apply.call(null,cljs.core.hash_map,map__40729):map__40729);var sum_turnover = cljs.core.get.call(null,map__40729__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs40732 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs40732))?sablono.interpreter.attributes.call(null,attrs40732):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40732))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40732),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs40737 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs40737))?sablono.interpreter.attributes.call(null,attrs40737):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40737))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40737),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs40742 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs40742))?sablono.interpreter.attributes.call(null,attrs40742):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs40742))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs40742),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__40747,owner){var map__40767 = p__40747;var map__40767__$1 = ((cljs.core.seq_QMARK_.call(null,map__40767))?cljs.core.apply.call(null,cljs.core.hash_map,map__40767):map__40767);var data = map__40767__$1;var map__40768 = cljs.core.get.call(null,map__40767__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__40768__$1 = ((cljs.core.seq_QMARK_.call(null,map__40768))?cljs.core.apply.call(null,cljs.core.hash_map,map__40768):map__40768);var filter_by_view = cljs.core.get.call(null,map__40768__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filt = cljs.core.get.call(null,map__40768__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__40769 = cljs.core.get.call(null,map__40767__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__40769__$1 = ((cljs.core.seq_QMARK_.call(null,map__40769))?cljs.core.apply.call(null,cljs.core.hash_map,map__40769):map__40769);var map_report = map__40769__$1;var map__40770 = cljs.core.get.call(null,map__40769__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__40770__$1 = ((cljs.core.seq_QMARK_.call(null,map__40770))?cljs.core.apply.call(null,cljs.core.hash_map,map__40770):map__40770);var controls = map__40770__$1;var map__40771 = cljs.core.get.call(null,map__40770__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__40771__$1 = ((cljs.core.seq_QMARK_.call(null,map__40771))?cljs.core.apply.call(null,cljs.core.hash_map,map__40771):map__40771);var summary_stats = map__40771__$1;var variables = cljs.core.get.call(null,map__40771__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__40771__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__40771__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__40769__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__40772 = cljs.core.get.call(null,map__40767__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__40772__$1 = ((cljs.core.seq_QMARK_.call(null,map__40772))?cljs.core.apply.call(null,cljs.core.hash_map,map__40772):map__40772);var bounds = cljs.core.get.call(null,map__40772__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t40773 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t40773 = (function (map__40770,filt,index_type,map__40769,owner,filter_by_view,data,map__40771,map__40772,index,map__40767,p__40747,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__40768,bounds,meta40774){
this.map__40770 = map__40770;
this.filt = filt;
this.index_type = index_type;
this.map__40769 = map__40769;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__40771 = map__40771;
this.map__40772 = map__40772;
this.index = index;
this.map__40767 = map__40767;
this.p__40747 = p__40747;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__40768 = map__40768;
this.bounds = bounds;
this.meta40774 = meta40774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t40773.cljs$lang$type = true;
clustermap.components.map_report.t40773.cljs$lang$ctorStr = "clustermap.components.map-report/t40773";
clustermap.components.map_report.t40773.cljs$lang$ctorPrWriter = ((function (map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write.call(null,writer__4214__auto__,"clustermap.components.map-report/t40773");
});})(map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds))
;
clustermap.components.map_report.t40773.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t40773.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds){
return (function (_,p__40776,p__40777){var self__ = this;
var map__40778 = p__40776;var map__40778__$1 = ((cljs.core.seq_QMARK_.call(null,map__40778))?cljs.core.apply.call(null,cljs.core.hash_map,map__40778):map__40778);var next_data = map__40778__$1;var map__40779 = cljs.core.get.call(null,map__40778__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__40779__$1 = ((cljs.core.seq_QMARK_.call(null,map__40779))?cljs.core.apply.call(null,cljs.core.hash_map,map__40779):map__40779);var next_filter_by_view = cljs.core.get.call(null,map__40779__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filt = cljs.core.get.call(null,map__40779__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__40780 = cljs.core.get.call(null,map__40778__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__40780__$1 = ((cljs.core.seq_QMARK_.call(null,map__40780))?cljs.core.apply.call(null,cljs.core.hash_map,map__40780):map__40780);var next_map_report = map__40780__$1;var map__40781 = cljs.core.get.call(null,map__40780__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__40781__$1 = ((cljs.core.seq_QMARK_.call(null,map__40781))?cljs.core.apply.call(null,cljs.core.hash_map,map__40781):map__40781);var next_controls = map__40781__$1;var map__40782 = cljs.core.get.call(null,map__40781__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__40782__$1 = ((cljs.core.seq_QMARK_.call(null,map__40782))?cljs.core.apply.call(null,cljs.core.hash_map,map__40782):map__40782);var next_summary_stats = map__40782__$1;var next_index = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__40782__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__40780__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__40783 = cljs.core.get.call(null,map__40778__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__40783__$1 = ((cljs.core.seq_QMARK_.call(null,map__40783))?cljs.core.apply.call(null,cljs.core.hash_map,map__40783):map__40783);var map_controls = map__40783__$1;var next_bounds = cljs.core.get.call(null,map__40783__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__40784 = p__40777;var map__40784__$1 = ((cljs.core.seq_QMARK_.call(null,map__40784))?cljs.core.apply.call(null,cljs.core.hash_map,map__40784):map__40784);var next_state = map__40784__$1;var summary_stats_resource = cljs.core.get.call(null,map__40784__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__3637__auto__)
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
});})(map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds))
;
clustermap.components.map_report.t40773.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t40773.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__40785 = om.core.get_shared.call(null,self__.owner);var map__40785__$1 = ((cljs.core.seq_QMARK_.call(null,map__40785))?cljs.core.apply.call(null,cljs.core.hash_map,map__40785):map__40785);var view_path_fn = cljs.core.get.call(null,map__40785__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__40785__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__40785__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds))
;
clustermap.components.map_report.t40773.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t40773.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds))
);
});})(map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds))
;
clustermap.components.map_report.t40773.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds){
return (function (_40775){var self__ = this;
var _40775__$1 = this;return self__.meta40774;
});})(map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds))
;
clustermap.components.map_report.t40773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds){
return (function (_40775,meta40774__$1){var self__ = this;
var _40775__$1 = this;return (new clustermap.components.map_report.t40773(self__.map__40770,self__.filt,self__.index_type,self__.map__40769,self__.owner,self__.filter_by_view,self__.data,self__.map__40771,self__.map__40772,self__.index,self__.map__40767,self__.p__40747,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__40768,self__.bounds,meta40774__$1));
});})(map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds))
;
clustermap.components.map_report.__GT_t40773 = ((function (map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds){
return (function __GT_t40773(map__40770__$2,filt__$1,index_type__$1,map__40769__$2,owner__$1,filter_by_view__$1,data__$1,map__40771__$2,map__40772__$2,index__$1,map__40767__$2,p__40747__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__40768__$2,bounds__$1,meta40774){return (new clustermap.components.map_report.t40773(map__40770__$2,filt__$1,index_type__$1,map__40769__$2,owner__$1,filter_by_view__$1,data__$1,map__40771__$2,map__40772__$2,index__$1,map__40767__$2,p__40747__$1,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__40768__$2,bounds__$1,meta40774));
});})(map__40767,map__40767__$1,data,map__40768,map__40768__$1,filter_by_view,filt,map__40769,map__40769__$1,map_report,map__40770,map__40770__$1,controls,map__40771,map__40771__$1,summary_stats,variables,index_type,index,summary_stats_data,map__40772,map__40772__$1,bounds))
;
}
return (new clustermap.components.map_report.t40773(map__40770__$1,filt,index_type,map__40769__$1,owner,filter_by_view,data,map__40771__$1,map__40772__$1,index,map__40767__$1,p__40747,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__40768__$1,bounds,null));
});
