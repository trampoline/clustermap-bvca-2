// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t19642 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19642 = (function (empty_report,meta19643){
this.empty_report = empty_report;
this.meta19643 = meta19643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19642.cljs$lang$type = true;
clustermap.map_report.t19642.cljs$lang$ctorStr = "clustermap.map-report/t19642";
clustermap.map_report.t19642.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19642");
});
clustermap.map_report.t19642.prototype.om$core$IRender$ = true;
clustermap.map_report.t19642.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t19642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19644){var self__ = this;
var _19644__$1 = this;return self__.meta19643;
});
clustermap.map_report.t19642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19644,meta19643__$1){var self__ = this;
var _19644__$1 = this;return (new clustermap.map_report.t19642(self__.empty_report,meta19643__$1));
});
clustermap.map_report.__GT_t19642 = (function __GT_t19642(empty_report__$1,meta19643){return (new clustermap.map_report.t19642(empty_report__$1,meta19643));
});
}
return (new clustermap.map_report.t19642(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_summ = cljs.core.constant$keyword$181.cljs$core$IFn$_invoke$arity$1(data);var ic_summ = cljs.core.constant$keyword$182.cljs$core$IFn$_invoke$arity$1(data);if(typeof clustermap.map_report.t19676 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19676 = (function (ic_summ,pc_summ,data,all_portfolio_companies_summary_report,meta19677){
this.ic_summ = ic_summ;
this.pc_summ = pc_summ;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta19677 = meta19677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19676.cljs$lang$type = true;
clustermap.map_report.t19676.cljs$lang$ctorStr = "clustermap.map-report/t19676";
clustermap.map_report.t19676.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19676");
});
clustermap.map_report.t19676.prototype.om$core$IRender$ = true;
clustermap.map_report.t19676.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs19681 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__19701 = self__.pc_summ;var G__19701__$1 = (((G__19701 == null))?null:(G__19701["count"]));return G__19701__$1;
})(),cljs.core.constant$keyword$113,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__19701 = self__.pc_summ;var G__19701__$1 = (((G__19701 == null))?null:(G__19701["count"]));return G__19701__$1;
})(),cljs.core.constant$keyword$113,"-"));if(cljs.core.map_QMARK_(attrs19681))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19681], 0))),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19681),React.DOM.small(null,"Companies"));
}
})(),(function (){var attrs19686 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__19702 = self__.ic_summ;var G__19702__$1 = (((G__19702 == null))?null:(G__19702["count"]));return G__19702__$1;
})(),cljs.core.constant$keyword$113,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__19702 = self__.ic_summ;var G__19702__$1 = (((G__19702 == null))?null:(G__19702["count"]));return G__19702__$1;
})(),cljs.core.constant$keyword$113,"-"));if(cljs.core.map_QMARK_(attrs19686))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19686], 0))),React.DOM.small(null,"Investors"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19686),React.DOM.small(null,"Investors"));
}
})(),(function (){var attrs19691 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__19703 = self__.pc_summ;var G__19703__$1 = (((G__19703 == null))?null:(G__19703["latest_turnover_stats"]["total"]));return G__19703__$1;
})(),cljs.core.constant$keyword$177,2,cljs.core.constant$keyword$113,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__19703 = self__.pc_summ;var G__19703__$1 = (((G__19703 == null))?null:(G__19703["latest_turnover_stats"]["total"]));return G__19703__$1;
})(),cljs.core.constant$keyword$177,2,cljs.core.constant$keyword$113,"-"));if(cljs.core.map_QMARK_(attrs19691))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19691], 0))),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19691),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs19696 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__19704 = self__.pc_summ;var G__19704__$1 = (((G__19704 == null))?null:(G__19704["latest_employee_count_stats"]["total"]));return G__19704__$1;
})(),cljs.core.constant$keyword$113,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__19704 = self__.pc_summ;var G__19704__$1 = (((G__19704 == null))?null:(G__19704["latest_employee_count_stats"]["total"]));return G__19704__$1;
})(),cljs.core.constant$keyword$113,"-"));if(cljs.core.map_QMARK_(attrs19696))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19696], 0))),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19696),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t19676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19678){var self__ = this;
var _19678__$1 = this;return self__.meta19677;
});
clustermap.map_report.t19676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19678,meta19677__$1){var self__ = this;
var _19678__$1 = this;return (new clustermap.map_report.t19676(self__.ic_summ,self__.pc_summ,self__.data,self__.all_portfolio_companies_summary_report,meta19677__$1));
});
clustermap.map_report.__GT_t19676 = (function __GT_t19676(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta19677){return (new clustermap.map_report.t19676(ic_summ__$1,pc_summ__$1,data__$1,all_portfolio_companies_summary_report__$1,meta19677));
});
}
return (new clustermap.map_report.t19676(ic_summ,pc_summ,data,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t19710 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19710 = (function (data,selection_report,meta19711){
this.data = data;
this.selection_report = selection_report;
this.meta19711 = meta19711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19710.cljs$lang$type = true;
clustermap.map_report.t19710.cljs$lang$ctorStr = "clustermap.map-report/t19710";
clustermap.map_report.t19710.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19710");
});
clustermap.map_report.t19710.prototype.om$core$IRender$ = true;
clustermap.map_report.t19710.prototype.om$core$IRender$render$arity$1 = (function (this__8960__auto__){var self__ = this;
var this__8960__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t19710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19712){var self__ = this;
var _19712__$1 = this;return self__.meta19711;
});
clustermap.map_report.t19710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19712,meta19711__$1){var self__ = this;
var _19712__$1 = this;return (new clustermap.map_report.t19710(self__.data,self__.selection_report,meta19711__$1));
});
clustermap.map_report.__GT_t19710 = (function __GT_t19710(data__$1,selection_report__$1,meta19711){return (new clustermap.map_report.t19710(data__$1,selection_report__$1,meta19711));
});
}
return (new clustermap.map_report.t19710(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){if((cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(data) == null))
{return clustermap.map_report.all_portfolio_companies_summary_report(data);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$184,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$183,cljs.core.constant$keyword$142], null))))
{return clustermap.map_report.selection_report(cljs.core.constant$keyword$183.cljs$core$IFn$_invoke$arity$1(data));
} else
{return null;
}
}
});
clustermap.map_report.mount = (function mount(app_state,elem_id){return om.core.root(app_state,clustermap.map_report.widget,document.getElementById(elem_id));
});
