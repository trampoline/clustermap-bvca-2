// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.formats.string');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('om.dom');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(data){var pc_stats = cljs.core.constant$keyword$207.cljs$core$IFn$_invoke$arity$1(data);var pc_count = (function (){var G__20702 = pc_stats;var G__20702__$1 = (((G__20702 == null))?null:(G__20702["portfolio_company_count"]));return G__20702__$1;
})();var ic_count = (function (){var G__20703 = pc_stats;var G__20703__$1 = (((G__20703 == null))?null:(G__20703["investor_company_count"]));return G__20703__$1;
})();if(typeof clustermap.components.map_report.t20704 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20704 = (function (ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,meta20705){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.pc_stats = pc_stats;
this.data = data;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta20705 = meta20705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20704.cljs$lang$type = true;
clustermap.components.map_report.t20704.cljs$lang$ctorStr = "clustermap.components.map-report/t20704";
clustermap.components.map_report.t20704.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20704");
});
clustermap.components.map_report.t20704.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20704.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs20709 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$125,"-"));if(cljs.core.map_QMARK_(attrs20709))
{return React.DOM.li(sablono.interpreter.attributes(attrs20709),(function (){var attrs20710 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20710))
{return React.DOM.small(sablono.interpreter.attributes(attrs20710),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20710));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20709),(function (){var attrs20711 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20711))
{return React.DOM.small(sablono.interpreter.attributes(attrs20711),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20711));
}
})());
}
})(),(function (){var attrs20712 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$125,"-"));if(cljs.core.map_QMARK_(attrs20712))
{return React.DOM.li(sablono.interpreter.attributes(attrs20712),(function (){var attrs20713 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20713))
{return React.DOM.small(sablono.interpreter.attributes(attrs20713),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20713));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20712),(function (){var attrs20714 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20714))
{return React.DOM.small(sablono.interpreter.attributes(attrs20714),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20714));
}
})());
}
})(),(function (){var attrs20715 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20725 = self__.pc_stats;var G__20725__$1 = (((G__20725 == null))?null:(G__20725["turnover"]["total"]));return G__20725__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20725 = self__.pc_stats;var G__20725__$1 = (((G__20725 == null))?null:(G__20725["turnover"]["total"]));return G__20725__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-"));if(cljs.core.map_QMARK_(attrs20715))
{return React.DOM.li(sablono.interpreter.attributes(attrs20715),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20715),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs20720 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20726 = self__.pc_stats;var G__20726__$1 = (((G__20726 == null))?null:(G__20726["employee_count"]["total"]));return G__20726__$1;
})(),cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20726 = self__.pc_stats;var G__20726__$1 = (((G__20726 == null))?null:(G__20726["employee_count"]["total"]));return G__20726__$1;
})(),cljs.core.constant$keyword$125,"-"));if(cljs.core.map_QMARK_(attrs20720))
{return React.DOM.li(sablono.interpreter.attributes(attrs20720),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20720),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t20704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20706){var self__ = this;
var _20706__$1 = this;return self__.meta20705;
});
clustermap.components.map_report.t20704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20706,meta20705__$1){var self__ = this;
var _20706__$1 = this;return (new clustermap.components.map_report.t20704(self__.ic_count,self__.pc_count,self__.pc_stats,self__.data,self__.all_portfolio_companies_summary_report,meta20705__$1));
});
clustermap.components.map_report.__GT_t20704 = (function __GT_t20704(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta20705){return (new clustermap.components.map_report.t20704(ic_count__$1,pc_count__$1,pc_stats__$1,data__$1,all_portfolio_companies_summary_report__$1,meta20705));
});
}
return (new clustermap.components.map_report.t20704(ic_count,pc_count,pc_stats,data,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(data){var ic_count = (function (){var G__20751 = data;var G__20751__$1 = (((G__20751 == null))?null:(G__20751["investor_companies"]));var G__20751__$2 = (((G__20751__$1 == null))?null:cljs.core.count(G__20751__$1));return G__20751__$2;
})();var const_count = (function (){var G__20752 = data;var G__20752__$1 = (((G__20752 == null))?null:(G__20752["boundarylinecolls"]["uk_constituencies"]));var G__20752__$2 = (((G__20752__$1 == null))?null:cljs.core.count(G__20752__$1));return G__20752__$2;
})();if(typeof clustermap.components.map_report.t20753 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20753 = (function (const_count,ic_count,data,portfolio_company_report,meta20754){
this.const_count = const_count;
this.ic_count = ic_count;
this.data = data;
this.portfolio_company_report = portfolio_company_report;
this.meta20754 = meta20754;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20753.cljs$lang$type = true;
clustermap.components.map_report.t20753.cljs$lang$ctorStr = "clustermap.components.map-report/t20753";
clustermap.components.map_report.t20753.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20753");
});
clustermap.components.map_report.t20753.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20753.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20756 = (self__.data["name"]);if(cljs.core.map_QMARK_(attrs20756))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20756),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20756));
}
})()),React.DOM.ul(null,(function (){var attrs20757 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs20757))
{return React.DOM.li(sablono.interpreter.attributes(attrs20757),(function (){var attrs20758 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20758))
{return React.DOM.small(sablono.interpreter.attributes(attrs20758),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20758));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20757),(function (){var attrs20759 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20759))
{return React.DOM.small(sablono.interpreter.attributes(attrs20759),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20759));
}
})());
}
})(),(function (){var attrs20760 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs20760))
{return React.DOM.li(sablono.interpreter.attributes(attrs20760),(function (){var attrs20761 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs20761))
{return React.DOM.small(sablono.interpreter.attributes(attrs20761),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20761));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20760),(function (){var attrs20762 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs20762))
{return React.DOM.small(sablono.interpreter.attributes(attrs20762),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20762));
}
})());
}
})(),(function (){var attrs20763 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20773 = self__.data;var G__20773__$1 = (((G__20773 == null))?null:(G__20773["latest_turnover"]));return G__20773__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20773 = self__.data;var G__20773__$1 = (((G__20773 == null))?null:(G__20773["latest_turnover"]));return G__20773__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-"));if(cljs.core.map_QMARK_(attrs20763))
{return React.DOM.li(sablono.interpreter.attributes(attrs20763),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20763),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs20768 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20774 = self__.data;var G__20774__$1 = (((G__20774 == null))?null:(G__20774["latest_employee_count"]));return G__20774__$1;
})(),cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20774 = self__.data;var G__20774__$1 = (((G__20774 == null))?null:(G__20774["latest_employee_count"]));return G__20774__$1;
})(),cljs.core.constant$keyword$125,"-"));if(cljs.core.map_QMARK_(attrs20768))
{return React.DOM.li(sablono.interpreter.attributes(attrs20768),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20768),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t20753.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20755){var self__ = this;
var _20755__$1 = this;return self__.meta20754;
});
clustermap.components.map_report.t20753.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20755,meta20754__$1){var self__ = this;
var _20755__$1 = this;return (new clustermap.components.map_report.t20753(self__.const_count,self__.ic_count,self__.data,self__.portfolio_company_report,meta20754__$1));
});
clustermap.components.map_report.__GT_t20753 = (function __GT_t20753(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta20754){return (new clustermap.components.map_report.t20753(const_count__$1,ic_count__$1,data__$1,portfolio_company_report__$1,meta20754));
});
}
return (new clustermap.components.map_report.t20753(const_count,ic_count,data,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(data){var pc_count = (function (){var G__20799 = data;var G__20799__$1 = (((G__20799 == null))?null:(G__20799["portfolio_companies"]));var G__20799__$2 = (((G__20799__$1 == null))?null:cljs.core.count(G__20799__$1));return G__20799__$2;
})();var const_count = (function (){var G__20800 = data;var G__20800__$1 = (((G__20800 == null))?null:(G__20800["boundarylinecolls"]["uk_constituencies"]));var G__20800__$2 = (((G__20800__$1 == null))?null:cljs.core.count(G__20800__$1));return G__20800__$2;
})();if(typeof clustermap.components.map_report.t20801 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20801 = (function (const_count,pc_count,data,investor_company_report,meta20802){
this.const_count = const_count;
this.pc_count = pc_count;
this.data = data;
this.investor_company_report = investor_company_report;
this.meta20802 = meta20802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20801.cljs$lang$type = true;
clustermap.components.map_report.t20801.cljs$lang$ctorStr = "clustermap.components.map-report/t20801";
clustermap.components.map_report.t20801.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20801");
});
clustermap.components.map_report.t20801.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20801.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20804 = (self__.data["name"]);if(cljs.core.map_QMARK_(attrs20804))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20804),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20804));
}
})()),React.DOM.ul(null,(function (){var attrs20805 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs20805))
{return React.DOM.li(sablono.interpreter.attributes(attrs20805),(function (){var attrs20806 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20806))
{return React.DOM.small(sablono.interpreter.attributes(attrs20806),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20806));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20805),(function (){var attrs20807 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20807))
{return React.DOM.small(sablono.interpreter.attributes(attrs20807),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20807));
}
})());
}
})(),(function (){var attrs20808 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs20808))
{return React.DOM.li(sablono.interpreter.attributes(attrs20808),(function (){var attrs20809 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs20809))
{return React.DOM.small(sablono.interpreter.attributes(attrs20809),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20809));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20808),(function (){var attrs20810 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs20810))
{return React.DOM.small(sablono.interpreter.attributes(attrs20810),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20810));
}
})());
}
})(),(function (){var attrs20811 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20821 = self__.data;var G__20821__$1 = (((G__20821 == null))?null:(G__20821["total_turnover"]));return G__20821__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20821 = self__.data;var G__20821__$1 = (((G__20821 == null))?null:(G__20821["total_turnover"]));return G__20821__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-"));if(cljs.core.map_QMARK_(attrs20811))
{return React.DOM.li(sablono.interpreter.attributes(attrs20811),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20811),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs20816 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20822 = self__.data;var G__20822__$1 = (((G__20822 == null))?null:(G__20822["total_employee_count"]));return G__20822__$1;
})(),cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20822 = self__.data;var G__20822__$1 = (((G__20822 == null))?null:(G__20822["total_employee_count"]));return G__20822__$1;
})(),cljs.core.constant$keyword$125,"-"));if(cljs.core.map_QMARK_(attrs20816))
{return React.DOM.li(sablono.interpreter.attributes(attrs20816),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20816),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t20801.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20803){var self__ = this;
var _20803__$1 = this;return self__.meta20802;
});
clustermap.components.map_report.t20801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20803,meta20802__$1){var self__ = this;
var _20803__$1 = this;return (new clustermap.components.map_report.t20801(self__.const_count,self__.pc_count,self__.data,self__.investor_company_report,meta20802__$1));
});
clustermap.components.map_report.__GT_t20801 = (function __GT_t20801(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta20802){return (new clustermap.components.map_report.t20801(const_count__$1,pc_count__$1,data__$1,investor_company_report__$1,meta20802));
});
}
return (new clustermap.components.map_report.t20801(const_count,pc_count,data,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(data){var pc_count = (function (){var G__20848 = data;var G__20848__$1 = (((G__20848 == null))?null:(G__20848["portfolio_companies"]));var G__20848__$2 = (((G__20848__$1 == null))?null:cljs.core.count(G__20848__$1));return G__20848__$2;
})();var ic_count = (function (){var G__20849 = data;var G__20849__$1 = (((G__20849 == null))?null:(G__20849["investor_companies"]));var G__20849__$2 = (((G__20849__$1 == null))?null:cljs.core.count(G__20849__$1));return G__20849__$2;
})();if(typeof clustermap.components.map_report.t20850 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20850 = (function (ic_count,pc_count,data,constituency_report,meta20851){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.data = data;
this.constituency_report = constituency_report;
this.meta20851 = meta20851;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20850.cljs$lang$type = true;
clustermap.components.map_report.t20850.cljs$lang$ctorStr = "clustermap.components.map-report/t20850";
clustermap.components.map_report.t20850.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20850");
});
clustermap.components.map_report.t20850.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20850.prototype.om$core$IRender$render$arity$1 = (function (this__9144__auto__){var self__ = this;
var this__9144__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20853 = (self__.data["name"]);if(cljs.core.map_QMARK_(attrs20853))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20853),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20853));
}
})(),(function (){var attrs20854 = (self__.data["mp"]);if(cljs.core.map_QMARK_(attrs20854))
{return React.DOM.h3(sablono.interpreter.attributes(attrs20854),React.DOM.small(null,"(",sablono.interpreter.interpret((self__.data["political_party"])),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs20854),React.DOM.small(null,"(",sablono.interpreter.interpret((self__.data["political_party"])),")"));
}
})()),React.DOM.ul(null,(function (){var attrs20855 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs20855))
{return React.DOM.li(sablono.interpreter.attributes(attrs20855),(function (){var attrs20856 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20856))
{return React.DOM.small(sablono.interpreter.attributes(attrs20856),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20856));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20855),(function (){var attrs20857 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20857))
{return React.DOM.small(sablono.interpreter.attributes(attrs20857),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20857));
}
})());
}
})(),(function (){var attrs20858 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs20858))
{return React.DOM.li(sablono.interpreter.attributes(attrs20858),(function (){var attrs20859 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20859))
{return React.DOM.small(sablono.interpreter.attributes(attrs20859),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20859));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20858),(function (){var attrs20860 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20860))
{return React.DOM.small(sablono.interpreter.attributes(attrs20860),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20860));
}
})());
}
})(),(function (){var attrs20861 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20871 = self__.data;var G__20871__$1 = (((G__20871 == null))?null:(G__20871["total_turnover"]));return G__20871__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20871 = self__.data;var G__20871__$1 = (((G__20871 == null))?null:(G__20871["total_turnover"]));return G__20871__$1;
})(),cljs.core.constant$keyword$187,2,cljs.core.constant$keyword$125,"-"));if(cljs.core.map_QMARK_(attrs20861))
{return React.DOM.li(sablono.interpreter.attributes(attrs20861),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20861),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs20866 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20872 = self__.data;var G__20872__$1 = (((G__20872 == null))?null:(G__20872["total_employee_count"]));return G__20872__$1;
})(),cljs.core.constant$keyword$125,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20872 = self__.data;var G__20872__$1 = (((G__20872 == null))?null:(G__20872["total_employee_count"]));return G__20872__$1;
})(),cljs.core.constant$keyword$125,"-"));if(cljs.core.map_QMARK_(attrs20866))
{return React.DOM.li(sablono.interpreter.attributes(attrs20866),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20866),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t20850.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20852){var self__ = this;
var _20852__$1 = this;return self__.meta20851;
});
clustermap.components.map_report.t20850.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20852,meta20851__$1){var self__ = this;
var _20852__$1 = this;return (new clustermap.components.map_report.t20850(self__.ic_count,self__.pc_count,self__.data,self__.constituency_report,meta20851__$1));
});
clustermap.components.map_report.__GT_t20850 = (function __GT_t20850(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta20851){return (new clustermap.components.map_report.t20850(ic_count__$1,pc_count__$1,data__$1,constituency_report__$1,meta20851));
});
}
return (new clustermap.components.map_report.t20850(ic_count,pc_count,data,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$191,cljs.core.constant$keyword$158], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$191,cljs.core.constant$keyword$129], null));var pred__20876 = cljs.core._EQ__EQ_;var expr__20877 = type;if(cljs.core.truth_((pred__20876.cljs$core$IFn$_invoke$arity$2 ? pred__20876.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$203,expr__20877) : pred__20876.call(null,cljs.core.constant$keyword$203,expr__20877))))
{return clustermap.components.map_report.portfolio_company_report(value);
} else
{if(cljs.core.truth_((pred__20876.cljs$core$IFn$_invoke$arity$2 ? pred__20876.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$205,expr__20877) : pred__20876.call(null,cljs.core.constant$keyword$205,expr__20877))))
{return clustermap.components.map_report.investor_company_report(value);
} else
{if(cljs.core.truth_((pred__20876.cljs$core$IFn$_invoke$arity$2 ? pred__20876.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$206,expr__20877) : pred__20876.call(null,cljs.core.constant$keyword$206,expr__20877))))
{return clustermap.components.map_report.constituency_report(value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(data);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root(app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
