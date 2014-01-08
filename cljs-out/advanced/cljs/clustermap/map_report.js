// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.map_report');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.number');
clustermap.map_report.empty_report = (function empty_report(){if(typeof clustermap.map_report.t19575 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19575 = (function (empty_report,meta19576){
this.empty_report = empty_report;
this.meta19576 = meta19576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19575.cljs$lang$type = true;
clustermap.map_report.t19575.cljs$lang$ctorStr = "clustermap.map-report/t19575";
clustermap.map_report.t19575.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19575");
});
clustermap.map_report.t19575.prototype.om$core$IRender$ = true;
clustermap.map_report.t19575.prototype.om$core$IRender$render$arity$1 = (function (this__9105__auto__){var self__ = this;
var this__9105__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"-"),React.DOM.h3(null,"-")),React.DOM.ul(null,React.DOM.li(null,"-",React.DOM.small(null,"Companies")),React.DOM.li(null,"-",React.DOM.small(null,"Investors")),React.DOM.li(null,"-",React.DOM.small(null,"Turnover")),React.DOM.li(null,"-",React.DOM.small(null,"Employees"))));
});
clustermap.map_report.t19575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19577){var self__ = this;
var _19577__$1 = this;return self__.meta19576;
});
clustermap.map_report.t19575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19577,meta19576__$1){var self__ = this;
var _19577__$1 = this;return (new clustermap.map_report.t19575(self__.empty_report,meta19576__$1));
});
clustermap.map_report.__GT_t19575 = (function __GT_t19575(empty_report__$1,meta19576){return (new clustermap.map_report.t19575(empty_report__$1,meta19576));
});
}
return (new clustermap.map_report.t19575(empty_report,null));
});
clustermap.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(summary){if(typeof clustermap.map_report.t19602 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19602 = (function (summary,all_portfolio_companies_summary_report,meta19603){
this.summary = summary;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta19603 = meta19603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19602.cljs$lang$type = true;
clustermap.map_report.t19602.cljs$lang$ctorStr = "clustermap.map-report/t19602";
clustermap.map_report.t19602.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19602");
});
clustermap.map_report.t19602.prototype.om$core$IRender$ = true;
clustermap.map_report.t19602.prototype.om$core$IRender$render$arity$1 = (function (this__9105__auto__){var self__ = this;
var this__9105__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs19607 = clustermap.formats.number.readable((self__.summary["count"]));if(cljs.core.map_QMARK_(attrs19607))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19607], 0))),React.DOM.small(null,"Companies"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19607),React.DOM.small(null,"Companies"));
}
})(),React.DOM.li(null,"2",React.DOM.small(null,"Investors")),(function (){var attrs19614 = clustermap.formats.money.readable.cljs$core$IFn$_invoke$arity$variadic((self__.summary["latest_turnover_stats"]["total"]),cljs.core.array_seq([cljs.core.constant$keyword$171,2], 0));if(cljs.core.map_QMARK_(attrs19614))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19614], 0))),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19614),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs19619 = clustermap.formats.number.readable((self__.summary["latest_employee_count_stats"]["total"]));if(cljs.core.map_QMARK_(attrs19619))
{return React.DOM.li(sablono.interpreter.attributes(sablono.util.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.PersistentArrayMap.EMPTY,attrs19619], 0))),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs19619),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.map_report.t19602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19604){var self__ = this;
var _19604__$1 = this;return self__.meta19603;
});
clustermap.map_report.t19602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19604,meta19603__$1){var self__ = this;
var _19604__$1 = this;return (new clustermap.map_report.t19602(self__.summary,self__.all_portfolio_companies_summary_report,meta19603__$1));
});
clustermap.map_report.__GT_t19602 = (function __GT_t19602(summary__$1,all_portfolio_companies_summary_report__$1,meta19603){return (new clustermap.map_report.t19602(summary__$1,all_portfolio_companies_summary_report__$1,meta19603));
});
}
return (new clustermap.map_report.t19602(summary,all_portfolio_companies_summary_report,null));
});
clustermap.map_report.selection_report = (function selection_report(data){if(typeof clustermap.map_report.t19629 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.map_report.t19629 = (function (data,selection_report,meta19630){
this.data = data;
this.selection_report = selection_report;
this.meta19630 = meta19630;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.map_report.t19629.cljs$lang$type = true;
clustermap.map_report.t19629.cljs$lang$ctorStr = "clustermap.map-report/t19629";
clustermap.map_report.t19629.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.map-report/t19629");
});
clustermap.map_report.t19629.prototype.om$core$IRender$ = true;
clustermap.map_report.t19629.prototype.om$core$IRender$render$arity$1 = (function (this__9105__auto__){var self__ = this;
var this__9105__auto____$1 = this;return React.DOM.div(null,"boo");
});
clustermap.map_report.t19629.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19631){var self__ = this;
var _19631__$1 = this;return self__.meta19630;
});
clustermap.map_report.t19629.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19631,meta19630__$1){var self__ = this;
var _19631__$1 = this;return (new clustermap.map_report.t19629(self__.data,self__.selection_report,meta19630__$1));
});
clustermap.map_report.__GT_t19629 = (function __GT_t19629(data__$1,selection_report__$1,meta19630){return (new clustermap.map_report.t19629(data__$1,selection_report__$1,meta19630));
});
}
return (new clustermap.map_report.t19629(data,selection_report,null));
});
clustermap.map_report.widget = (function widget(data){if(((cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(data) == null)) && ((cljs.core.constant$keyword$176.cljs$core$IFn$_invoke$arity$1(data) == null)))
{return clustermap.map_report.empty_report();
} else
{if((cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(data) == null))
{return clustermap.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$176.cljs$core$IFn$_invoke$arity$1(data));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$177,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$175,cljs.core.constant$keyword$145], null))))
{return clustermap.map_report.selection_report(cljs.core.constant$keyword$175.cljs$core$IFn$_invoke$arity$1(data));
} else
{return null;
}
}
}
});
clustermap.map_report.mount = (function mount(app_state){return om.core.root(app_state,clustermap.map_report.widget,document.getElementById("map-report-content"));
});
