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
clustermap.components.map_report.full_report_button = (function full_report_button(comm,view_path_fn){return React.DOM.a({"className": "btn btn-link", "href": (view_path_fn.cljs$core$IFn$_invoke$arity$1 ? view_path_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$1050) : view_path_fn.call(null,cljs.core.constant$keyword$1050))},React.DOM.i({"className": "icon-lists-sm"}),"Full report");
});
clustermap.components.map_report.summary_stats_report = (function summary_stats_report(map_report_data,comm,view_path_fn,p__38638){var map__38662 = p__38638;var map__38662__$1 = ((cljs.core.seq_QMARK_(map__38662))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38662):map__38662);var summary_stats_data = map__38662__$1;var map__38663 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38662__$1,cljs.core.constant$keyword$994);var map__38663__$1 = ((cljs.core.seq_QMARK_(map__38663))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38663):map__38663);var data = map__38663__$1;var map__38664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38663__$1,cljs.core.constant$keyword$1060);var map__38664__$1 = ((cljs.core.seq_QMARK_(map__38664))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38664):map__38664);var sum_employee_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38664__$1,cljs.core.constant$keyword$1061);var count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38664__$1,cljs.core.constant$keyword$1062);var map__38665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38663__$1,cljs.core.constant$keyword$871);var map__38665__$1 = ((cljs.core.seq_QMARK_(map__38665))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38665):map__38665);var sum_turnover = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38665__$1,cljs.core.constant$keyword$1061);return React.DOM.div(null,React.DOM.div({"className": "header secondary"},React.DOM.h2(null,"Summary stats")),React.DOM.ul(null,React.DOM.li(null,(sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1 ? sablono.interpreter.input.cljs$core$IFn$_invoke$arity$1({"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__38662,map__38662__$1,summary_stats_data,map__38663,map__38663__$1,data,map__38664,map__38664__$1,sum_employee_count,count,map__38665,map__38665__$1,sum_turnover){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(map_report_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1064,cljs.core.constant$keyword$1065], null),val);
});})(map__38662,map__38662__$1,summary_stats_data,map__38663,map__38663__$1,data,map__38664,map__38664__$1,sum_employee_count,count,map__38665,map__38665__$1,sum_turnover))
}) : sablono.interpreter.input.call(null,{"type": "checkbox", "name": "filter-by-view", "value": "true", "onChange": ((function (map__38662,map__38662__$1,summary_stats_data,map__38663,map__38663__$1,data,map__38664,map__38664__$1,sum_employee_count,count,map__38665,map__38665__$1,sum_turnover){
return (function (e){var val = e.target.checked;return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(map_report_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1063,cljs.core.constant$keyword$1064,cljs.core.constant$keyword$1065], null),val);
});})(map__38662,map__38662__$1,summary_stats_data,map__38663,map__38663__$1,data,map__38664,map__38664__$1,sum_employee_count,count,map__38665,map__38665__$1,sum_turnover))
})),React.DOM.small(null,"Filter by view")),(function (){var attrs38670 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(count,cljs.core.constant$keyword$835,"-") : clustermap.formats.number.fnum.call(null,count,cljs.core.constant$keyword$835,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38670))?sablono.interpreter.attributes(attrs38670):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38670))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Companies")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38670),React.DOM.small(null,"Companies")], null))));
})(),(function (){var attrs38675 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(sum_turnover,cljs.core.constant$keyword$890,(2),cljs.core.constant$keyword$835,"-") : clustermap.formats.money.fmoney.call(null,sum_turnover,cljs.core.constant$keyword$890,(2),cljs.core.constant$keyword$835,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38675))?sablono.interpreter.attributes(attrs38675):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38675))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total revenue")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38675),React.DOM.small(null,"Total revenue")], null))));
})(),(function (){var attrs38680 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(sum_employee_count,cljs.core.constant$keyword$892,(0),cljs.core.constant$keyword$835,"-") : clustermap.formats.number.fnum.call(null,sum_employee_count,cljs.core.constant$keyword$892,(0),cljs.core.constant$keyword$835,"-"));return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(React.DOM.li,((cljs.core.map_QMARK_(attrs38680))?sablono.interpreter.attributes(attrs38680):null),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,((cljs.core.map_QMARK_(attrs38680))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.small(null,"Total employees")], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs38680),React.DOM.small(null,"Total employees")], null))));
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(comm,view_path_fn)));
});
clustermap.components.map_report.request_summary_stats = (function request_summary_stats(resource,index,index_type,attrs,filter,bounds){return clustermap.ordered_resource.api_call.cljs$core$IFn$_invoke$arity$variadic(resource,clustermap.api.summary_stats,cljs.core.array_seq([index,index_type,attrs,filter,bounds], 0));
});
clustermap.components.map_report.map_report_component = (function map_report_component(p__38685,owner){var map__38703 = p__38685;var map__38703__$1 = ((cljs.core.seq_QMARK_(map__38703))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38703):map__38703);var data = map__38703__$1;var filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38703__$1,cljs.core.constant$keyword$865);var map__38704 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38703__$1,cljs.core.constant$keyword$1066);var map__38704__$1 = ((cljs.core.seq_QMARK_(map__38704))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38704):map__38704);var map_report = map__38704__$1;var map__38705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,cljs.core.constant$keyword$1063);var map__38705__$1 = ((cljs.core.seq_QMARK_(map__38705))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38705):map__38705);var controls = map__38705__$1;var map__38706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38705__$1,cljs.core.constant$keyword$1064);var map__38706__$1 = ((cljs.core.seq_QMARK_(map__38706))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38706):map__38706);var summary_stats = map__38706__$1;var filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38706__$1,cljs.core.constant$keyword$1065);var variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38706__$1,cljs.core.constant$keyword$1067);var index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38706__$1,cljs.core.constant$keyword$1068);var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38706__$1,cljs.core.constant$keyword$878);var summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38704__$1,cljs.core.constant$keyword$1069);var map__38707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38703__$1,cljs.core.constant$keyword$1070);var map__38707__$1 = ((cljs.core.seq_QMARK_(map__38707))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38707):map__38707);var bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38707__$1,cljs.core.constant$keyword$864);if(typeof clustermap.components.map_report.t38708 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t38708 = (function (map__38703,filt,index_type,owner,filter_by_view,data,map__38706,index,map__38705,map__38707,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,p__38685,bounds,map__38704,meta38709){
this.map__38703 = map__38703;
this.filt = filt;
this.index_type = index_type;
this.owner = owner;
this.filter_by_view = filter_by_view;
this.data = data;
this.map__38706 = map__38706;
this.index = index;
this.map__38705 = map__38705;
this.map__38707 = map__38707;
this.controls = controls;
this.summary_stats_data = summary_stats_data;
this.map_report = map_report;
this.summary_stats = summary_stats;
this.map_report_component = map_report_component;
this.variables = variables;
this.p__38685 = p__38685;
this.bounds = bounds;
this.map__38704 = map__38704;
this.meta38709 = meta38709;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t38708.cljs$lang$type = true;
clustermap.components.map_report.t38708.cljs$lang$ctorStr = "clustermap.components.map-report/t38708";
clustermap.components.map_report.t38708.cljs$lang$ctorPrWriter = ((function (map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write(writer__4126__auto__,"clustermap.components.map-report/t38708");
});})(map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds))
;
clustermap.components.map_report.t38708.prototype.om$core$IWillUpdate$ = true;
clustermap.components.map_report.t38708.prototype.om$core$IWillUpdate$will_update$arity$3 = ((function (map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds){
return (function (_,p__38711,p__38712){var self__ = this;
var map__38713 = p__38711;var map__38713__$1 = ((cljs.core.seq_QMARK_(map__38713))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38713):map__38713);var next_data = map__38713__$1;var next_filt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38713__$1,cljs.core.constant$keyword$865);var map__38714 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38713__$1,cljs.core.constant$keyword$1066);var map__38714__$1 = ((cljs.core.seq_QMARK_(map__38714))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38714):map__38714);var next_map_report = map__38714__$1;var map__38715 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38714__$1,cljs.core.constant$keyword$1063);var map__38715__$1 = ((cljs.core.seq_QMARK_(map__38715))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38715):map__38715);var next_controls = map__38715__$1;var map__38716 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38715__$1,cljs.core.constant$keyword$1064);var map__38716__$1 = ((cljs.core.seq_QMARK_(map__38716))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38716):map__38716);var next_summary_stats = map__38716__$1;var next_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38716__$1,cljs.core.constant$keyword$878);var next_index_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38716__$1,cljs.core.constant$keyword$1068);var next_variables = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38716__$1,cljs.core.constant$keyword$1067);var next_filter_by_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38716__$1,cljs.core.constant$keyword$1065);var next_summary_stats_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38714__$1,cljs.core.constant$keyword$1069);var map__38717 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38713__$1,cljs.core.constant$keyword$1070);var map__38717__$1 = ((cljs.core.seq_QMARK_(map__38717))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38717):map__38717);var map_controls = map__38717__$1;var next_bounds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38717__$1,cljs.core.constant$keyword$864);var map__38718 = p__38712;var map__38718__$1 = ((cljs.core.seq_QMARK_(map__38718))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38718):map__38718);var next_state = map__38718__$1;var summary_stats_resource = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38718__$1,cljs.core.constant$keyword$1071);var ___$1 = this;if(cljs.core.truth_((function (){var or__3558__auto__ = cljs.core.not(next_summary_stats_data);if(or__3558__auto__)
{return or__3558__auto__;
} else
{var or__3558__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filt,self__.filt);if(or__3558__auto____$1)
{return or__3558__auto____$1;
} else
{var or__3558__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_filter_by_view,self__.filter_by_view);if(or__3558__auto____$2)
{return or__3558__auto____$2;
} else
{var and__3546__auto__ = next_filter_by_view;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_bounds,self__.bounds);
} else
{return and__3546__auto__;
}
}
}
}
})()))
{return clustermap.components.map_report.request_summary_stats(summary_stats_resource,next_index,next_index_type,next_variables,next_filt,(cljs.core.truth_(next_filter_by_view)?om.core._value(next_bounds):null));
} else
{return null;
}
});})(map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds))
;
clustermap.components.map_report.t38708.prototype.om$core$IRenderState$ = true;
clustermap.components.map_report.t38708.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds){
return (function (_,state){var self__ = this;
var ___$1 = this;var map__38719 = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(self__.owner);var map__38719__$1 = ((cljs.core.seq_QMARK_(map__38719))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38719):map__38719);var view_path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38719__$1,cljs.core.constant$keyword$1072);var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38719__$1,cljs.core.constant$keyword$964);var comm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38719__$1,cljs.core.constant$keyword$974);return clustermap.components.map_report.summary_stats_report(self__.map_report,comm,view_path_fn,self__.summary_stats_data);
});})(map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds))
;
clustermap.components.map_report.t38708.prototype.om$core$IDidMount$ = true;
clustermap.components.map_report.t38708.prototype.om$core$IDidMount$did_mount$arity$1 = ((function (map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds){
return (function (_){var self__ = this;
var ___$1 = this;var ssr = clustermap.ordered_resource.make_discard_stale_resource("summary-stats");om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(self__.owner,cljs.core.constant$keyword$1071,ssr);
return clustermap.ordered_resource.retrieve_responses(ssr,((function (ssr,___$1,map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds){
return (function (ss){return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3(self__.map_report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$1069], null),ss);
});})(ssr,___$1,map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds))
);
});})(map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds))
;
clustermap.components.map_report.t38708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds){
return (function (_38710){var self__ = this;
var _38710__$1 = this;return self__.meta38709;
});})(map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds))
;
clustermap.components.map_report.t38708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds){
return (function (_38710,meta38709__$1){var self__ = this;
var _38710__$1 = this;return (new clustermap.components.map_report.t38708(self__.map__38703,self__.filt,self__.index_type,self__.owner,self__.filter_by_view,self__.data,self__.map__38706,self__.index,self__.map__38705,self__.map__38707,self__.controls,self__.summary_stats_data,self__.map_report,self__.summary_stats,self__.map_report_component,self__.variables,self__.p__38685,self__.bounds,self__.map__38704,meta38709__$1));
});})(map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds))
;
clustermap.components.map_report.__GT_t38708 = ((function (map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds){
return (function __GT_t38708(map__38703__$2,filt__$1,index_type__$1,owner__$1,filter_by_view__$1,data__$1,map__38706__$2,index__$1,map__38705__$2,map__38707__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__38685__$1,bounds__$1,map__38704__$2,meta38709){return (new clustermap.components.map_report.t38708(map__38703__$2,filt__$1,index_type__$1,owner__$1,filter_by_view__$1,data__$1,map__38706__$2,index__$1,map__38705__$2,map__38707__$2,controls__$1,summary_stats_data__$1,map_report__$1,summary_stats__$1,map_report_component__$1,variables__$1,p__38685__$1,bounds__$1,map__38704__$2,meta38709));
});})(map__38703,map__38703__$1,data,filt,map__38704,map__38704__$1,map_report,map__38705,map__38705__$1,controls,map__38706,map__38706__$1,summary_stats,filter_by_view,variables,index_type,index,summary_stats_data,map__38707,map__38707__$1,bounds))
;
}
return (new clustermap.components.map_report.t38708(map__38703__$1,filt,index_type,owner,filter_by_view,data,map__38706__$1,index,map__38705__$1,map__38707__$1,controls,summary_stats_data,map_report,summary_stats,map_report_component,variables,p__38685,bounds,map__38704__$1,null));
});
