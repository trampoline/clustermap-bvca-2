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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__21161){var map__21183 = p__21161;var map__21183__$1 = ((cljs.core.seq_QMARK_.call(null,map__21183))?cljs.core.apply.call(null,cljs.core.hash_map,map__21183):map__21183);var summary_stats_data = map__21183__$1;var map__21184 = cljs.core.get.call(null,map__21183__$1,new cljs.core.Keyword(null,"data","data",-232669377));var map__21184__$1 = ((cljs.core.seq_QMARK_.call(null,map__21184))?cljs.core.apply.call(null,cljs.core.hash_map,map__21184):map__21184);var data = map__21184__$1;var map__21185 = cljs.core.get.call(null,map__21184__$1,new cljs.core.Keyword(null,"!latest_employee_count","!latest_employee_count",-1445524938));var map__21185__$1 = ((cljs.core.seq_QMARK_.call(null,map__21185))?cljs.core.apply.call(null,cljs.core.hash_map,map__21185):map__21185);var sum_employee_count = cljs.core.get.call(null,map__21185__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__21185__$1,new cljs.core.Keyword(null,"viewfilter_doc_count","viewfilter_doc_count",231005032));var map__21186 = cljs.core.get.call(null,map__21184__$1,new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972));var map__21186__$1 = ((cljs.core.seq_QMARK_.call(null,map__21186))?cljs.core.apply.call(null,cljs.core.hash_map,map__21186):map__21186);var sum_turnover = cljs.core.get.call(null,map__21186__$1,new cljs.core.Keyword(null,"sum","sum",136986814));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs21189 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs21189))?sablono.interpreter.attributes.call(null,attrs21189):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21189))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21189),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs21194 = clustermap.formats.money.fmoney.call(null,sum_turnover,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs21194))?sablono.interpreter.attributes.call(null,attrs21194):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21194))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21194),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs21199 = clustermap.formats.number.fnum.call(null,sum_employee_count,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs21199))?sablono.interpreter.attributes.call(null,attrs21199):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs21199))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs21199),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attrs,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__21204,owner){var map__21224 = p__21204;var map__21224__$1 = ((cljs.core.seq_QMARK_.call(null,map__21224))?cljs.core.apply.call(null,cljs.core.hash_map,map__21224):map__21224);var data = map__21224__$1;var map__21225 = cljs.core.get.call(null,map__21224__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__21225__$1 = ((cljs.core.seq_QMARK_.call(null,map__21225))?cljs.core.apply.call(null,cljs.core.hash_map,map__21225):map__21225);var filter_by_view = cljs.core.get.call(null,map__21225__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var filt = cljs.core.get.call(null,map__21225__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__21226 = cljs.core.get.call(null,map__21224__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__21226__$1 = ((cljs.core.seq_QMARK_.call(null,map__21226))?cljs.core.apply.call(null,cljs.core.hash_map,map__21226):map__21226);var map_report = map__21226__$1;var map__21227 = cljs.core.get.call(null,map__21226__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__21227__$1 = ((cljs.core.seq_QMARK_.call(null,map__21227))?cljs.core.apply.call(null,cljs.core.hash_map,map__21227):map__21227);var controls = map__21227__$1;var map__21228 = cljs.core.get.call(null,map__21227__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__21228__$1 = ((cljs.core.seq_QMARK_.call(null,map__21228))?cljs.core.apply.call(null,cljs.core.hash_map,map__21228):map__21228);var summary_stats = map__21228__$1;var variables = cljs.core.get.call(null,map__21228__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var index_type = cljs.core.get.call(null,map__21228__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__21228__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__21226__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__21229 = cljs.core.get.call(null,map__21224__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__21229__$1 = ((cljs.core.seq_QMARK_.call(null,map__21229))?cljs.core.apply.call(null,cljs.core.hash_map,map__21229):map__21229);var bounds = cljs.core.get.call(null,map__21229__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));if(typeof clustermap.components.map_report.t21230 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21230 = (function (filt,index_type,owner,filter_by_view,data,map__21225,index,map__21227,map__21228,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__21226,bounds,map__21229,map__21224,p__21204,meta21231){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__21225 = map__21225;
this.index = index;
this.map__21227 = map__21227;
this.map__21228 = map__21228;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.map__21226 = map__21226;
this.bounds = bounds;
this.map__21229 = map__21229;
this.map__21224 = map__21224;
this.p__21204 = p__21204;
this.meta21231 = meta21231;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21230.cljs$lang$type = true;
clustermap.components.map_report.t21230.cljs$lang$ctorStr = "clustermap.components.map-report/t21230";
clustermap.components.map_report.t21230.cljs$lang$ctorPrWriter = ((function (map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds){
return (function (this__8467__auto__,writer__8468__auto__,opt__8469__auto__){return cljs.core._write.call(null,writer__8468__auto__,"clustermap.components.map-report/t21230");
});})(map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds))
;
clustermap.components.map_report.t21230.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t21230.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds){
return (function (_,p__21233,p__21234){var self__ = this;
var map__21235 = p__21233;var map__21235__$1 = ((cljs.core.seq_QMARK_.call(null,map__21235))?cljs.core.apply.call(null,cljs.core.hash_map,map__21235):map__21235);var next_data = map__21235__$1;var map__21236 = cljs.core.get.call(null,map__21235__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));var map__21236__$1 = ((cljs.core.seq_QMARK_.call(null,map__21236))?cljs.core.apply.call(null,cljs.core.hash_map,map__21236):map__21236);var next_filter_by_view = cljs.core.get.call(null,map__21236__$1,new cljs.core.Keyword(null,"filter-by-view","filter-by-view",902292255));var next_filt = cljs.core.get.call(null,map__21236__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));var map__21237 = cljs.core.get.call(null,map__21235__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__21237__$1 = ((cljs.core.seq_QMARK_.call(null,map__21237))?cljs.core.apply.call(null,cljs.core.hash_map,map__21237):map__21237);var next_map_report = map__21237__$1;var map__21238 = cljs.core.get.call(null,map__21237__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__21238__$1 = ((cljs.core.seq_QMARK_.call(null,map__21238))?cljs.core.apply.call(null,cljs.core.hash_map,map__21238):map__21238);var next_controls = map__21238__$1;var map__21239 = cljs.core.get.call(null,map__21238__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__21239__$1 = ((cljs.core.seq_QMARK_.call(null,map__21239))?cljs.core.apply.call(null,cljs.core.hash_map,map__21239):map__21239);var next_summary_stats = map__21239__$1;var next_index = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variables = cljs.core.get.call(null,map__21239__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));var next_summary_stats_data = cljs.core.get.call(null,map__21237__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__21240 = cljs.core.get.call(null,map__21235__$1,new cljs.core.Keyword(null,"map-controls","map-controls",-1453318552));var map__21240__$1 = ((cljs.core.seq_QMARK_.call(null,map__21240))?cljs.core.apply.call(null,cljs.core.hash_map,map__21240):map__21240);var map_controls = map__21240__$1;var next_bounds = cljs.core.get.call(null,map__21240__$1,new cljs.core.Keyword(null,"bounds","bounds",1691609455));var map__21241 = p__21234;var map__21241__$1 = ((cljs.core.seq_QMARK_.call(null,map__21241))?cljs.core.apply.call(null,cljs.core.hash_map,map__21241):map__21241);var next_state = map__21241__$1;var summary_stats_resource = cljs.core.get.call(null,map__21241__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if(cljs.core.truth_((function (){var or__7900__auto__ = cljs.core.not.call(null,next_summary_stats_data);if(or__7900__auto__)
{return or__7900__auto__;
} else
{var or__7900__auto____$1 = cljs.core.not_EQ_.call(null,next_filt,self__.filt);if(or__7900__auto____$1)
{return or__7900__auto____$1;
} else
{var or__7900__auto____$2 = cljs.core.not_EQ_.call(null,next_filter_by_view,self__.filter_by_view);if(or__7900__auto____$2)
{return or__7900__auto____$2;
} else
{var and__7888__auto__ = next_filter_by_view;if(cljs.core.truth_(and__7888__auto__))
{return cljs.core.not_EQ_.call(null,next_bounds,self__.bounds);
} else
{return and__7888__auto__;
}
}
}
}
})()))
{return clustermap.components.map_report.request_summary_stats.call(null,summary_stats_resource,next_index,next_index_type,next_variables,next_filt,(cljs.core.truth_(next_filter_by_view)?om.core._value.call(null,next_bounds):null));
} else
{return null;
}
});})(map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds))
;
clustermap.components.map_report.t21230.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t21230.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__21242 = om.core.get_shared.call(null,self__.owner);var map__21242__$1 = ((cljs.core.seq_QMARK_.call(null,map__21242))?cljs.core.apply.call(null,cljs.core.hash_map,map__21242):map__21242);var view_path_fn = cljs.core.get.call(null,map__21242__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__21242__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__21242__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds))
;
clustermap.components.map_report.t21230.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t21230.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds))
);
});})(map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds))
;
clustermap.components.map_report.t21230.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds){
return (function (_21232){var self__ = this;
var _21232__$1 = this;return self__.meta21231;
});})(map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds))
;
clustermap.components.map_report.t21230.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds){
return (function (_21232,meta21231__$1){var self__ = this;
var _21232__$1 = this;return (new clustermap.components.map_report.t21230(self__.filt,self__.index_type,self__.owner,self__.filter_by_view,self__.data,self__.map__21225,self__.index,self__.map__21227,self__.map__21228,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.map__21226,self__.bounds,self__.map__21229,self__.map__21224,self__.p__21204,meta21231__$1));
});})(map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds))
;
clustermap.components.map_report.__GT_t21230 = ((function (map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds){
return (function __GT_t21230(filt__$1,index_type__$1,owner__$1,filter_by_view__$1,data__$1,map__21225__$2,index__$1,map__21227__$2,map__21228__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__21226__$2,bounds__$1,map__21229__$2,map__21224__$2,p__21204__$1,meta21231){return (new clustermap.components.map_report.t21230(filt__$1,index_type__$1,owner__$1,filter_by_view__$1,data__$1,map__21225__$2,index__$1,map__21227__$2,map__21228__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,map__21226__$2,bounds__$1,map__21229__$2,map__21224__$2,p__21204__$1,meta21231));
});})(map__21224,map__21224__$1,data,map__21225,map__21225__$1,filter_by_view,filt,map__21226,map__21226__$1,map_report,map__21227,map__21227__$1,controls,map__21228,map__21228__$1,summary_stats,variables,index_type,index,summary_stats_data,map__21229,map__21229__$1,bounds))
;
}
return (new clustermap.components.map_report.t21230(filt,index_type,owner,filter_by_view,data,map__21225__$1,index,map__21227__$1,map__21228__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,map__21226__$1,bounds,map__21229__$1,map__21224__$1,p__21204,null));
});

//# sourceMappingURL=map_report.js.map