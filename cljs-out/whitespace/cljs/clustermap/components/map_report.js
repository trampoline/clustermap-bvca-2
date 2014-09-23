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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(comm,view_path_fn,p__13429){var map__13449 = p__13429;var map__13449__$1 = ((cljs.core.seq_QMARK_.call(null,map__13449))?cljs.core.apply.call(null,cljs.core.hash_map,map__13449):map__13449);var summary_stats_data = map__13449__$1;var map__13450 = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__13450__$1 = ((cljs.core.seq_QMARK_.call(null,map__13450))?cljs.core.apply.call(null,cljs.core.hash_map,map__13450):map__13450);var record = map__13450__$1;var sum = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__13450__$1,new cljs.core.Keyword(null,"count","count",2139924085));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs13453 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13453))?sablono.interpreter.attributes.call(null,attrs13453):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13453))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13453),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs13458 = clustermap.formats.money.fmoney.call(null,null,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13458))?sablono.interpreter.attributes.call(null,attrs13458):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13458))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13458),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs13463 = clustermap.formats.number.fnum.call(null,sum,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs13463))?sablono.interpreter.attributes.call(null,attrs13463):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs13463))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs13463),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attr,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attr,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__13468,owner){var map__13484 = p__13468;var map__13484__$1 = ((cljs.core.seq_QMARK_.call(null,map__13484))?cljs.core.apply.call(null,cljs.core.hash_map,map__13484):map__13484);var data = map__13484__$1;var filt = cljs.core.get.call(null,map__13484__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13485 = cljs.core.get.call(null,map__13484__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__13485__$1 = ((cljs.core.seq_QMARK_.call(null,map__13485))?cljs.core.apply.call(null,cljs.core.hash_map,map__13485):map__13485);var map_report = map__13485__$1;var map__13486 = cljs.core.get.call(null,map__13485__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13486__$1 = ((cljs.core.seq_QMARK_.call(null,map__13486))?cljs.core.apply.call(null,cljs.core.hash_map,map__13486):map__13486);var controls = map__13486__$1;var map__13487 = cljs.core.get.call(null,map__13486__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__13487__$1 = ((cljs.core.seq_QMARK_.call(null,map__13487))?cljs.core.apply.call(null,cljs.core.hash_map,map__13487):map__13487);var summary_stats = map__13487__$1;var variable = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));var index_type = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__13485__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t13488 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t13488 = (function (filt,index_type,owner,map__13484,data,variable,index,map__13487,controls,summary_stats_data,map_report,summary_stats,map_report_component,p__13468,map__13485,map__13486,meta13489){
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.map__13484 = map__13484;
this.data = data;
this.variable = variable;
this.index = index;
this.map__13487 = map__13487;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.p__13468 = p__13468;
this.map__13485 = map__13485;
this.map__13486 = map__13486;
this.meta13489 = meta13489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t13488.cljs$lang$type = true;
clustermap.components.map_report.t13488.cljs$lang$ctorStr = "clustermap.components.map-report/t13488";
clustermap.components.map_report.t13488.cljs$lang$ctorPrWriter = ((function (map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t13488");
});})(map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t13488.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t13488.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_,p__13491,p__13492){var self__ = this;
var map__13493 = p__13491;var map__13493__$1 = ((cljs.core.seq_QMARK_.call(null,map__13493))?cljs.core.apply.call(null,cljs.core.hash_map,map__13493):map__13493);var next_data = map__13493__$1;var next_filt = cljs.core.get.call(null,map__13493__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__13494 = cljs.core.get.call(null,map__13493__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__13494__$1 = ((cljs.core.seq_QMARK_.call(null,map__13494))?cljs.core.apply.call(null,cljs.core.hash_map,map__13494):map__13494);var next_map_report = map__13494__$1;var map__13495 = cljs.core.get.call(null,map__13494__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__13495__$1 = ((cljs.core.seq_QMARK_.call(null,map__13495))?cljs.core.apply.call(null,cljs.core.hash_map,map__13495):map__13495);var next_controls = map__13495__$1;var map__13496 = cljs.core.get.call(null,map__13495__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__13496__$1 = ((cljs.core.seq_QMARK_.call(null,map__13496))?cljs.core.apply.call(null,cljs.core.hash_map,map__13496):map__13496);var next_summary_stats = map__13496__$1;var next_index = cljs.core.get.call(null,map__13496__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__13496__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variable = cljs.core.get.call(null,map__13496__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));var next_summary_stats_data = cljs.core.get.call(null,map__13494__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__13497 = p__13492;var map__13497__$1 = ((cljs.core.seq_QMARK_.call(null,map__13497))?cljs.core.apply.call(null,cljs.core.hash_map,map__13497):map__13497);var next_state = map__13497__$1;var summary_stats_resource = cljs.core.get.call(null,map__13497__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{return clustermap.components.map_report.request_summary_stats.call(null,summary_stats_resource,next_index,next_index_type,next_variable,next_filt,null);
} else
{return null;
}
});})(map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t13488.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t13488.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__13498 = om.core.get_shared.call(null,self__.owner);var map__13498__$1 = ((cljs.core.seq_QMARK_.call(null,map__13498))?cljs.core.apply.call(null,cljs.core.hash_map,map__13498):map__13498);var view_path_fn = cljs.core.get.call(null,map__13498__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__13498__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__13498__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,comm,view_path_fn,self__.summary_stats_data);
});})(map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t13488.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t13488.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data))
);
});})(map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t13488.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_13490){var self__ = this;
var _13490__$1 = this;return self__.meta13489;
});})(map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t13488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_13490,meta13489__$1){var self__ = this;
var _13490__$1 = this;return (new clustermap.components.map_report.t13488(self__.filt,self__.index_type,self__.owner,self__.map__13484,self__.data,self__.variable,self__.index,self__.map__13487,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.p__13468,self__.map__13485,self__.map__13486,meta13489__$1));
});})(map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t13488 = ((function (map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function __GT_t13488(filt__$1,index_type__$1,owner__$1,map__13484__$2,data__$1,variable__$1,index__$1,map__13487__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,p__13468__$1,map__13485__$2,map__13486__$2,meta13489){return (new clustermap.components.map_report.t13488(filt__$1,index_type__$1,owner__$1,map__13484__$2,data__$1,variable__$1,index__$1,map__13487__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,p__13468__$1,map__13485__$2,map__13486__$2,meta13489));
});})(map__13484,map__13484__$1,data,filt,map__13485,map__13485__$1,map_report,map__13486,map__13486__$1,controls,map__13487,map__13487__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t13488(filt,index_type,owner,map__13484__$1,data,variable,index,map__13487__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,p__13468,map__13485__$1,map__13486__$1,null));
});
