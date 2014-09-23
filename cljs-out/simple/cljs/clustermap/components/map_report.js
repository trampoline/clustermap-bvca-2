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
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(comm,view_path_fn,p__26011){var map__26031 = p__26011;var map__26031__$1 = ((cljs.core.seq_QMARK_.call(null,map__26031))?cljs.core.apply.call(null,cljs.core.hash_map,map__26031):map__26031);var summary_stats_data = map__26031__$1;var map__26032 = cljs.core.get.call(null,map__26031__$1,new cljs.core.Keyword(null,"record","record",-779106859));var map__26032__$1 = ((cljs.core.seq_QMARK_.call(null,map__26032))?cljs.core.apply.call(null,cljs.core.hash_map,map__26032):map__26032);var record = map__26032__$1;var sum = cljs.core.get.call(null,map__26032__$1,new cljs.core.Keyword(null,"sum","sum",136986814));var count = cljs.core.get.call(null,map__26032__$1,new cljs.core.Keyword(null,"count","count",2139924085));return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs26035 = clustermap.formats.number.fnum.call(null,count,new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26035))?sablono.interpreter.attributes.call(null,attrs26035):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26035))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26035),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs26040 = clustermap.formats.money.fmoney.call(null,null,new cljs.core.Keyword(null,"sf","sf",-1949491738),(2),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26040))?sablono.interpreter.attributes.call(null,attrs26040):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26040))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26040),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs26045 = clustermap.formats.number.fnum.call(null,sum,new cljs.core.Keyword(null,"dec","dec",1888433436),(0),new cljs.core.Keyword(null,"default","default",-1987822328),"-");return cljs.core.apply.call(null,React.DOM.li,((cljs.core.map_QMARK_.call(null,attrs26045))?sablono.interpreter.attributes.call(null,attrs26045):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs26045))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26045),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attr,filter,bounds){return clustermap.ordered_resource.api_call.call(null,resource,clustermap.api.summary_stats,index,index_type,attr,filter,bounds);
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__26050,owner){var map__26066 = p__26050;var map__26066__$1 = ((cljs.core.seq_QMARK_.call(null,map__26066))?cljs.core.apply.call(null,cljs.core.hash_map,map__26066):map__26066);var data = map__26066__$1;var filt = cljs.core.get.call(null,map__26066__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__26067 = cljs.core.get.call(null,map__26066__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__26067__$1 = ((cljs.core.seq_QMARK_.call(null,map__26067))?cljs.core.apply.call(null,cljs.core.hash_map,map__26067):map__26067);var map_report = map__26067__$1;var map__26068 = cljs.core.get.call(null,map__26067__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__26068__$1 = ((cljs.core.seq_QMARK_.call(null,map__26068))?cljs.core.apply.call(null,cljs.core.hash_map,map__26068):map__26068);var controls = map__26068__$1;var map__26069 = cljs.core.get.call(null,map__26068__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__26069__$1 = ((cljs.core.seq_QMARK_.call(null,map__26069))?cljs.core.apply.call(null,cljs.core.hash_map,map__26069):map__26069);var summary_stats = map__26069__$1;var variable = cljs.core.get.call(null,map__26069__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));var index_type = cljs.core.get.call(null,map__26069__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var index = cljs.core.get.call(null,map__26069__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var summary_stats_data = cljs.core.get.call(null,map__26067__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));if(typeof clustermap.components.map_report.t26070 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t26070 = (function (filt,index_type,map__26069,owner,data,variable,map__26066,index,controls,summary_stats_data,map_report,p__26050,map__26067,summary_stats,map_report_component,map__26068,meta26071){
this.filt = filt;
this.index_type = index_type;
this.map__26069 = map__26069;
this.owner = owner;
this.data = data;
this.variable = variable;
this.map__26066 = map__26066;
this.index = index;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.p__26050 = p__26050;
this.map__26067 = map__26067;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.map__26068 = map__26068;
this.meta26071 = meta26071;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t26070.cljs$lang$type = true;
clustermap.components.map_report.t26070.cljs$lang$ctorStr = "clustermap.components.map-report/t26070";
clustermap.components.map_report.t26070.cljs$lang$ctorPrWriter = ((function (map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"clustermap.components.map-report/t26070");
});})(map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t26070.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t26070.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_,p__26073,p__26074){var self__ = this;
var map__26075 = p__26073;var map__26075__$1 = ((cljs.core.seq_QMARK_.call(null,map__26075))?cljs.core.apply.call(null,cljs.core.hash_map,map__26075):map__26075);var next_data = map__26075__$1;var next_filt = cljs.core.get.call(null,map__26075__$1,new cljs.core.Keyword(null,"filter","filter",-948537934));var map__26076 = cljs.core.get.call(null,map__26075__$1,new cljs.core.Keyword(null,"map-report","map-report",-254073588));var map__26076__$1 = ((cljs.core.seq_QMARK_.call(null,map__26076))?cljs.core.apply.call(null,cljs.core.hash_map,map__26076):map__26076);var next_map_report = map__26076__$1;var map__26077 = cljs.core.get.call(null,map__26076__$1,new cljs.core.Keyword(null,"controls","controls",1340701452));var map__26077__$1 = ((cljs.core.seq_QMARK_.call(null,map__26077))?cljs.core.apply.call(null,cljs.core.hash_map,map__26077):map__26077);var next_controls = map__26077__$1;var map__26078 = cljs.core.get.call(null,map__26077__$1,new cljs.core.Keyword(null,"summary-stats","summary-stats",-1745571251));var map__26078__$1 = ((cljs.core.seq_QMARK_.call(null,map__26078))?cljs.core.apply.call(null,cljs.core.hash_map,map__26078):map__26078);var next_summary_stats = map__26078__$1;var next_index = cljs.core.get.call(null,map__26078__$1,new cljs.core.Keyword(null,"index","index",-1531685915));var next_index_type = cljs.core.get.call(null,map__26078__$1,new cljs.core.Keyword(null,"index-type","index-type",500383962));var next_variable = cljs.core.get.call(null,map__26078__$1,new cljs.core.Keyword(null,"variable","variable",-281346492));var next_summary_stats_data = cljs.core.get.call(null,map__26076__$1,new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588));var map__26079 = p__26074;var map__26079__$1 = ((cljs.core.seq_QMARK_.call(null,map__26079))?cljs.core.apply.call(null,cljs.core.hash_map,map__26079):map__26079);var next_state = map__26079__$1;var summary_stats_resource = cljs.core.get.call(null,map__26079__$1,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160));var ___$1 = this;if((cljs.core.not.call(null,next_summary_stats_data)) || (cljs.core.not_EQ_.call(null,next_filt,self__.filt)))
{return clustermap.components.map_report.request_summary_stats.call(null,summary_stats_resource,next_index,next_index_type,next_variable,next_filt,null);
} else
{return null;
}
});})(map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t26070.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t26070.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__26080 = om.core.get_shared.call(null,self__.owner);var map__26080__$1 = ((cljs.core.seq_QMARK_.call(null,map__26080))?cljs.core.apply.call(null,cljs.core.hash_map,map__26080):map__26080);var view_path_fn = cljs.core.get.call(null,map__26080__$1,new cljs.core.Keyword(null,"view-path-fn","view-path-fn",630487502));var path_fn = cljs.core.get.call(null,map__26080__$1,new cljs.core.Keyword(null,"path-fn","path-fn",-778614691));var comm = cljs.core.get.call(null,map__26080__$1,new cljs.core.Keyword(null,"comm","comm",-1689770614));return clustermap.components.map_report.summary_stats_report.call(null,comm,view_path_fn,self__.summary_stats_data);
});})(map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t26070.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t26070.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource.call(null,"summary-stats");om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"summary-stats-resource","summary-stats-resource",-2107619160),ssr);
return clustermap.ordered_resource.retrieve_responses.call(null,ssr,((function (ssr,___$1,map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (ss){return om.core.update_BANG_.call(null,self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"summary-stats-data","summary-stats-data",1509580588)], null),ss);
});})(ssr,___$1,map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data))
);
});})(map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t26070.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_26072){var self__ = this;
var _26072__$1 = this;return self__.meta26071;
});})(map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t26070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_26072,meta26071__$1){var self__ = this;
var _26072__$1 = this;return (new clustermap.components.map_report.t26070(self__.filt,self__.index_type,self__.map__26069,self__.owner,self__.data,self__.variable,self__.map__26066,self__.index,self__.controls,self__.summary_stats_data,self__.map_report,self__.p__26050,self__.map__26067,self__.summary_stats,self__.map_report_component,self__.map__26068,meta26071__$1));
});})(map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t26070 = ((function (map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function __GT_t26070(filt__$1,index_type__$1,map__26069__$2,owner__$1,data__$1,variable__$1,map__26066__$2,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,p__26050__$1,map__26067__$2,summary_stats__$1,map_report_component__$1,map__26068__$2,meta26071){return (new clustermap.components.map_report.t26070(filt__$1,index_type__$1,map__26069__$2,owner__$1,data__$1,variable__$1,map__26066__$2,index__$1,controls__$1,summary_stats_data__$1,map_report__$1,p__26050__$1,map__26067__$2,summary_stats__$1,map_report_component__$1,map__26068__$2,meta26071));
});})(map__26066,map__26066__$1,data,filt,map__26067,map__26067__$1,map_report,map__26068,map__26068__$1,controls,map__26069,map__26069__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t26070(filt,index_type,map__26069__$1,owner,data,variable,map__26066__$1,index,controls,summary_stats_data,map_report,p__26050,map__26067__$1,summary_stats,map_report_component,map__26068__$1,null));
});
