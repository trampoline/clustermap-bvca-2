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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1041) : view_path_fn.call(null,cljs.core.constant$keyword$1041))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(comm,view_path_fn,p__38578){var map__38598 = p__38578;var map__38598__$1 = ((cljs.core.seq_QMARK_(map__38598))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38598):map__38598);var summary_stats_data = map__38598__$1;var map__38599 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38598__$1,cljs.core.constant$keyword$1051);var map__38599__$1 = ((cljs.core.seq_QMARK_(map__38599))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38599):map__38599);var record = map__38599__$1;var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,cljs.core.constant$keyword$1052);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38599__$1,cljs.core.constant$keyword$920);return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,(function (){var attrs38602 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(count,cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,count,cljs.core.constant$keyword$827,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38602))?sablono.interpreter.attributes(attrs38602):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38602))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38602),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs38607 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(null,cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-") : clustermap.formats.money.fmoney.call(null,null,cljs.core.constant$keyword$881,(2),cljs.core.constant$keyword$827,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38607))?sablono.interpreter.attributes(attrs38607):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38607))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38607),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38612 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(sum,cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-") : clustermap.formats.number.fnum.call(null,sum,cljs.core.constant$keyword$883,(0),cljs.core.constant$keyword$827,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38612))?sablono.interpreter.attributes(attrs38612):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38612))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38612),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attr,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.summary_stats,cljs.core.array_seq([index,index_type,attr,filter,bounds], 0));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__38617,owner){var map__38633 = p__38617;var map__38633__$1 = ((cljs.core.seq_QMARK_(map__38633))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38633):map__38633);var data = map__38633__$1;var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38633__$1,cljs.core.constant$keyword$857);var map__38634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38633__$1,cljs.core.constant$keyword$1053);var map__38634__$1 = ((cljs.core.seq_QMARK_(map__38634))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38634):map__38634);var map_report = map__38634__$1;var map__38635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,cljs.core.constant$keyword$1054);var map__38635__$1 = ((cljs.core.seq_QMARK_(map__38635))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38635):map__38635);var controls = map__38635__$1;var map__38636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38635__$1,cljs.core.constant$keyword$1055);var map__38636__$1 = ((cljs.core.seq_QMARK_(map__38636))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38636):map__38636);var summary_stats = map__38636__$1;var variable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.constant$keyword$1056);var index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.constant$keyword$1057);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38636__$1,cljs.core.constant$keyword$869);var summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38634__$1,cljs.core.constant$keyword$1058);if(typeof clustermap.components.map_report.t38637 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38637 = (function (map__38636,filt,map__38633,index_type,owner,data,variable,index,map__38634,controls,summary_stats_data,map_report,summary_stats,map_report_component,p__38617,map__38635,meta38638){
this.map__38636 = map__38636;
this.filt = filt;
this.map__38633 = map__38633;
this.index_type = index_type;
this.owner = owner;
this.data = data;
this.variable = variable;
this.index = index;
this.map__38634 = map__38634;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.p__38617 = p__38617;
this.map__38635 = map__38635;
this.meta38638 = meta38638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38637.cljs$lang$type = true;
clustermap.components.map_report.t38637.cljs$lang$ctorStr = "clustermap.components.map-report/t38637";
clustermap.components.map_report.t38637.cljs$lang$ctorPrWriter = ((function (map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map-report/t38637");
});})(map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t38637.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t38637.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_,p__38640,p__38641){var self__ = this;
var map__38642 = p__38640;var map__38642__$1 = ((cljs.core.seq_QMARK_(map__38642))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38642):map__38642);var next_data = map__38642__$1;var next_filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38642__$1,cljs.core.constant$keyword$857);var map__38643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38642__$1,cljs.core.constant$keyword$1053);var map__38643__$1 = ((cljs.core.seq_QMARK_(map__38643))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38643):map__38643);var next_map_report = map__38643__$1;var map__38644 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,cljs.core.constant$keyword$1054);var map__38644__$1 = ((cljs.core.seq_QMARK_(map__38644))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38644):map__38644);var next_controls = map__38644__$1;var map__38645 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38644__$1,cljs.core.constant$keyword$1055);var map__38645__$1 = ((cljs.core.seq_QMARK_(map__38645))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38645):map__38645);var next_summary_stats = map__38645__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38645__$1,cljs.core.constant$keyword$869);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38645__$1,cljs.core.constant$keyword$1057);var next_variable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38645__$1,cljs.core.constant$keyword$1056);var next_summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38643__$1,cljs.core.constant$keyword$1058);var map__38646 = p__38641;var map__38646__$1 = ((cljs.core.seq_QMARK_(map__38646))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38646):map__38646);var next_state = map__38646__$1;var summary_stats_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38646__$1,cljs.core.constant$keyword$1059);var ___$1 = this;if((cljs.core.not(next_summary_stats_data)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filt,self__.filt)))
{return clustermap.components.map_report.request_summary_stats(summary_stats_resource,next_index,next_index_type,next_variable,next_filt,null);
} else
{return null;
}
});})(map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t38637.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t38637.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__38647 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38647__$1 = ((cljs.core.seq_QMARK_(map__38647))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38647):map__38647);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38647__$1,cljs.core.constant$keyword$1060);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38647__$1,cljs.core.constant$keyword$955);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38647__$1,cljs.core.constant$keyword$965);return clustermap.components.map_report.summary_stats_report(comm,view_path_fn,self__.summary_stats_data);
});})(map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t38637.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t38637.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource("summary-stats");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1059,ssr);
return clustermap.ordered_resource.retrieve_responses(ssr,((function (ssr,___$1,map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (ss){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1058], null),ss);
});})(ssr,___$1,map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data))
);
});})(map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t38637.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_38639){var self__ = this;
var _38639__$1 = this;return self__.meta38638;
});})(map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.t38637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function (_38639,meta38638__$1){var self__ = this;
var _38639__$1 = this;return (new clustermap.components.map_report.t38637(self__.map__38636,self__.filt,self__.map__38633,self__.index_type,self__.owner,self__.data,self__.variable,self__.index,self__.map__38634,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.p__38617,self__.map__38635,meta38638__$1));
});})(map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
clustermap.components.map_report.__GT_t38637 = ((function (map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data){
return (function __GT_t38637(map__38636__$2,filt__$1,map__38633__$2,index_type__$1,owner__$1,data__$1,variable__$1,index__$1,map__38634__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,p__38617__$1,map__38635__$2,meta38638){return (new clustermap.components.map_report.t38637(map__38636__$2,filt__$1,map__38633__$2,index_type__$1,owner__$1,data__$1,variable__$1,index__$1,map__38634__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,p__38617__$1,map__38635__$2,meta38638));
});})(map__38633,map__38633__$1,data,filt,map__38634,map__38634__$1,map_report,map__38635,map__38635__$1,controls,map__38636,map__38636__$1,summary_stats,variable,index_type,index,summary_stats_data))
;
}
return (new clustermap.components.map_report.t38637(map__38636__$1,filt,map__38633__$1,index_type,owner,data,variable,index,map__38634__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,p__38617,map__38635__$1,null));
});
