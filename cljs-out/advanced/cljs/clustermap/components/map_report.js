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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){var G__72422 = {"className": "btn btn-link", "href": (function (){var G__72425 = cljs.core.constant$keyword$1543;return (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(G__72425) : view_path_fn.call(null,G__72425));
})()};var G__72423 = (function (){var G__72426 = {"className": "icon-lists-sm"};return React.DOM.i(G__72426);
})();var G__72424 = "Full report";return React.DOM.a(G__72422,G__72423,G__72424);
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__72427){var map__72486 = p__72427;var map__72486__$1 = ((cljs.core.seq_QMARK_(map__72486))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72486):map__72486);var summary_stats_data = map__72486__$1;var map__72487 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72486__$1,cljs.core.constant$keyword$1305);var map__72487__$1 = ((cljs.core.seq_QMARK_(map__72487))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72487):map__72487);var data = map__72487__$1;var map__72488 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72487__$1,cljs.core.constant$keyword$1553);var map__72488__$1 = ((cljs.core.seq_QMARK_(map__72488))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72488):map__72488);var sum_employee_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72488__$1,cljs.core.constant$keyword$1554);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72488__$1,cljs.core.constant$keyword$1555);var map__72489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72487__$1,cljs.core.constant$keyword$1556);var map__72489__$1 = ((cljs.core.seq_QMARK_(map__72489))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72489):map__72489);var sum_turnover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72489__$1,cljs.core.constant$keyword$1554);var G__72507 = null;var G__72508 = (function (){var G__72511 = {"className": "header secondary"};var G__72512 = (function (){var G__72513 = null;var G__72514 = "Summary stats";return React.DOM.h2(G__72513,G__72514);
})();return React.DOM.div(G__72511,G__72512);
})();var G__72509 = (function (){var G__72515 = null;var G__72516 = (function (){var attrs72492 = (function (){var G__72519 = count;var G__72520 = cljs.core.constant$keyword$1111;var G__72521 = "-";return (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(G__72519,G__72520,G__72521) : clustermap.formats.number.fnum.call(null,G__72519,G__72520,G__72521));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs72492))?sablono.interpreter.attributes(attrs72492):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72492))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72522 = null;var G__72523 = "Companies";return React.DOM.small(G__72522,G__72523);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72492),(function (){var G__72524 = null;var G__72525 = "Companies";return React.DOM.small(G__72524,G__72525);
})()], null))));
})();var G__72517 = (function (){var attrs72497 = (function (){var G__72526 = sum_turnover;var G__72527 = cljs.core.constant$keyword$1315;var G__72528 = (2);var G__72529 = cljs.core.constant$keyword$1111;var G__72530 = "-";return (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(G__72526,G__72527,G__72528,G__72529,G__72530) : clustermap.formats.money.fmoney.call(null,G__72526,G__72527,G__72528,G__72529,G__72530));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs72497))?sablono.interpreter.attributes(attrs72497):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72497))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72531 = null;var G__72532 = "Total revenue";return React.DOM.small(G__72531,G__72532);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72497),(function (){var G__72533 = null;var G__72534 = "Total revenue";return React.DOM.small(G__72533,G__72534);
})()], null))));
})();var G__72518 = (function (){var attrs72502 = (function (){var G__72535 = sum_employee_count;var G__72536 = cljs.core.constant$keyword$1317;var G__72537 = (0);var G__72538 = cljs.core.constant$keyword$1111;var G__72539 = "-";return (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(G__72535,G__72536,G__72537,G__72538,G__72539) : clustermap.formats.number.fnum.call(null,G__72535,G__72536,G__72537,G__72538,G__72539));
})();return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs72502))?sablono.interpreter.attributes(attrs72502):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs72502))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72540 = null;var G__72541 = "Total employees";return React.DOM.small(G__72540,G__72541);
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs72502),(function (){var G__72542 = null;var G__72543 = "Total employees";return React.DOM.small(G__72542,G__72543);
})()], null))));
})();return React.DOM.ul(G__72515,G__72516,G__72517,G__72518);
})();var G__72510 = sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(comm,view_path_fn));return React.DOM.div(G__72507,G__72508,G__72509,G__72510);
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.summary_stats,cljs.core.array_seq([index,index_type,attrs,filter,bounds], 0));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__72544,owner){var map__72564 = p__72544;var map__72564__$1 = ((cljs.core.seq_QMARK_(map__72564))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72564):map__72564);var data = map__72564__$1;var map__72565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72564__$1,cljs.core.constant$keyword$1150);var map__72565__$1 = ((cljs.core.seq_QMARK_(map__72565))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72565):map__72565);var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72565__$1,cljs.core.constant$keyword$1372);var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72565__$1,cljs.core.constant$keyword$1373);var map__72566 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72564__$1,cljs.core.constant$keyword$1557);var map__72566__$1 = ((cljs.core.seq_QMARK_(map__72566))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72566):map__72566);var map_report = map__72566__$1;var map__72567 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72566__$1,cljs.core.constant$keyword$1368);var map__72567__$1 = ((cljs.core.seq_QMARK_(map__72567))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72567):map__72567);var controls = map__72567__$1;var map__72568 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72567__$1,cljs.core.constant$keyword$1558);var map__72568__$1 = ((cljs.core.seq_QMARK_(map__72568))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72568):map__72568);var summary_stats = map__72568__$1;var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72568__$1,cljs.core.constant$keyword$1559);var index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72568__$1,cljs.core.constant$keyword$1369);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72568__$1,cljs.core.constant$keyword$1158);var summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72566__$1,cljs.core.constant$keyword$1560);var map__72569 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72564__$1,cljs.core.constant$keyword$1561);var map__72569__$1 = ((cljs.core.seq_QMARK_(map__72569))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72569):map__72569);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72569__$1,cljs.core.constant$keyword$1142);if(typeof clustermap.components.map_report.t72570 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t72570 = (function (map__72566,filt,index_type,owner,map__72564,filter_by_view,data,map__72567,index,p__72544,map__72569,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__72565,map__72568,meta72571){
this.map__72566 = map__72566;
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.map__72564 = map__72564;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__72567 = map__72567;
this.index = index;
this.p__72544 = p__72544;
this.map__72569 = map__72569;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.bounds = bounds;
this.map__72565 = map__72565;
this.map__72568 = map__72568;
this.meta72571 = meta72571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t72570.cljs$lang$type = true;
clustermap.components.map_report.t72570.cljs$lang$ctorStr = "clustermap.components.map-report/t72570";
clustermap.components.map_report.t72570.cljs$lang$ctorPrWriter = ((function (map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds){
return (function (this__4213__auto__,writer__4214__auto__,opt__4215__auto__){return cljs.core._write(writer__4214__auto__,"clustermap.components.map-report/t72570");
});})(map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds))
;
clustermap.components.map_report.t72570.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t72570.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds){
return (function (_,p__72573,p__72574){var self__ = this;
var map__72575 = p__72573;var map__72575__$1 = ((cljs.core.seq_QMARK_(map__72575))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72575):map__72575);var next_data = map__72575__$1;var map__72576 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72575__$1,cljs.core.constant$keyword$1150);var map__72576__$1 = ((cljs.core.seq_QMARK_(map__72576))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72576):map__72576);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72576__$1,cljs.core.constant$keyword$1372);var next_filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72576__$1,cljs.core.constant$keyword$1373);var map__72577 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72575__$1,cljs.core.constant$keyword$1557);var map__72577__$1 = ((cljs.core.seq_QMARK_(map__72577))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72577):map__72577);var next_map_report = map__72577__$1;var map__72578 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72577__$1,cljs.core.constant$keyword$1368);var map__72578__$1 = ((cljs.core.seq_QMARK_(map__72578))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72578):map__72578);var next_controls = map__72578__$1;var map__72579 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72578__$1,cljs.core.constant$keyword$1558);var map__72579__$1 = ((cljs.core.seq_QMARK_(map__72579))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72579):map__72579);var next_summary_stats = map__72579__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72579__$1,cljs.core.constant$keyword$1158);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72579__$1,cljs.core.constant$keyword$1369);var next_variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72579__$1,cljs.core.constant$keyword$1559);var next_summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72577__$1,cljs.core.constant$keyword$1560);var map__72580 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72575__$1,cljs.core.constant$keyword$1561);var map__72580__$1 = ((cljs.core.seq_QMARK_(map__72580))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72580):map__72580);var map_controls = map__72580__$1;var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72580__$1,cljs.core.constant$keyword$1142);var map__72581 = p__72574;var map__72581__$1 = ((cljs.core.seq_QMARK_(map__72581))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72581):map__72581);var next_state = map__72581__$1;var summary_stats_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72581__$1,cljs.core.constant$keyword$1562);var ___$1 = this;if(cljs.core.truth_((function (){var or__3637__auto__ = cljs.core.not(next_summary_stats_data);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filt,self__.filt);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{var or__3637__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_by_view,self__.filter_by_view);if(or__3637__auto____$2)
{return or__3637__auto____$2;
} else
{var and__3625__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3625__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds);
} else
{return and__3625__auto__;
}
}
}
}
})()))
{return clustermap.components.map_report.request_summary_stats(summary_stats_resource,next_index,next_index_type,next_variables,next_filt,(cljs.core.truth_(next_filter_by_view)?om.core._value(next_bounds):null));
} else
{return null;
}
});})(map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds))
;
clustermap.components.map_report.t72570.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t72570.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__72582 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__72582__$1 = ((cljs.core.seq_QMARK_(map__72582))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72582):map__72582);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72582__$1,cljs.core.constant$keyword$1563);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72582__$1,cljs.core.constant$keyword$1491);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72582__$1,cljs.core.constant$keyword$1312);return clustermap.components.map_report.summary_stats_report(self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds))
;
clustermap.components.map_report.t72570.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t72570.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource("summary-stats");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1562,ssr);
return clustermap.ordered_resource.retrieve_responses(ssr,((function (ssr,___$1,map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds){
return (function (ss){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1560], null),ss);
});})(ssr,___$1,map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds))
);
});})(map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds))
;
clustermap.components.map_report.t72570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds){
return (function (_72572){var self__ = this;
var _72572__$1 = this;return self__.meta72571;
});})(map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds))
;
clustermap.components.map_report.t72570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds){
return (function (_72572,meta72571__$1){var self__ = this;
var _72572__$1 = this;return (new clustermap.components.map_report.t72570(self__.map__72566,self__.filt,self__.index_type,self__.owner,self__.map__72564,self__.filter_by_view,self__.data,self__.map__72567,self__.index,self__.p__72544,self__.map__72569,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.bounds,self__.map__72565,self__.map__72568,meta72571__$1));
});})(map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds))
;
clustermap.components.map_report.__GT_t72570 = ((function (map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds){
return (function __GT_t72570(map__72566__$2,filt__$1,index_type__$1,owner__$1,map__72564__$2,filter_by_view__$1,data__$1,map__72567__$2,index__$1,p__72544__$1,map__72569__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__72565__$2,map__72568__$2,meta72571){return (new clustermap.components.map_report.t72570(map__72566__$2,filt__$1,index_type__$1,owner__$1,map__72564__$2,filter_by_view__$1,data__$1,map__72567__$2,index__$1,p__72544__$1,map__72569__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,bounds__$1,map__72565__$2,map__72568__$2,meta72571));
});})(map__72564,map__72564__$1,data,map__72565,map__72565__$1,filter_by_view,filt,map__72566,map__72566__$1,map_report,map__72567,map__72567__$1,controls,map__72568,map__72568__$1,summary_stats,variables,index_type,index,summary_stats_data,map__72569,map__72569__$1,bounds))
;
}
return (new clustermap.components.map_report.t72570(map__72566__$1,filt,index_type,owner,map__72564__$1,filter_by_view,data,map__72567__$1,index,p__72544,map__72569__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,bounds,map__72565__$1,map__72568__$1,null));
});
