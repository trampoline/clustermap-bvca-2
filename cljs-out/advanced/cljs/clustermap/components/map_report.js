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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__21099 = apc_stats;var G__21099__$1 = (((G__21099 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__21099));return G__21099__$1;
})();var ic_count = (function (){var G__21100 = apc_stats;var G__21100__$1 = (((G__21100 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__21100));return G__21100__$1;
})();if(typeof clustermap.components.map_report.t21101 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21101 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta21102){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21102 = meta21102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21101.cljs$lang$type = true;
clustermap.components.map_report.t21101.cljs$lang$ctorStr = "clustermap.components.map-report/t21101";
clustermap.components.map_report.t21101.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21101");
});
clustermap.components.map_report.t21101.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21101.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21106 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21106))
{return React.DOM.li(sablono.interpreter.attributes(attrs21106),(function (){var attrs21107 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21107))
{return React.DOM.small(sablono.interpreter.attributes(attrs21107),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21107));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21106),(function (){var attrs21108 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21108))
{return React.DOM.small(sablono.interpreter.attributes(attrs21108),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21108));
}
})());
}
})(),(function (){var attrs21109 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21109))
{return React.DOM.li(sablono.interpreter.attributes(attrs21109),(function (){var attrs21110 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21110))
{return React.DOM.small(sablono.interpreter.attributes(attrs21110),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21110));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21109),(function (){var attrs21111 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21111))
{return React.DOM.small(sablono.interpreter.attributes(attrs21111),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21111));
}
})());
}
})(),(function (){var attrs21112 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21122 = self__.apc_stats;var G__21122__$1 = (((G__21122 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__21122));var G__21122__$2 = (((G__21122__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__21122__$1));return G__21122__$2;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21122 = self__.apc_stats;var G__21122__$1 = (((G__21122 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__21122));var G__21122__$2 = (((G__21122__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__21122__$1));return G__21122__$2;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21112))
{return React.DOM.li(sablono.interpreter.attributes(attrs21112),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21112),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21117 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21123 = self__.apc_stats;var G__21123__$1 = (((G__21123 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__21123));var G__21123__$2 = (((G__21123__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__21123__$1));return G__21123__$2;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21123 = self__.apc_stats;var G__21123__$1 = (((G__21123 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__21123));var G__21123__$2 = (((G__21123__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__21123__$1));return G__21123__$2;
})(),cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21117))
{return React.DOM.li(sablono.interpreter.attributes(attrs21117),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21117),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21103){var self__ = this;
var _21103__$1 = this;return self__.meta21102;
});
clustermap.components.map_report.t21101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21103,meta21102__$1){var self__ = this;
var _21103__$1 = this;return (new clustermap.components.map_report.t21101(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21102__$1));
});
clustermap.components.map_report.__GT_t21101 = (function __GT_t21101(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21102){return (new clustermap.components.map_report.t21101(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21102));
});
}
return (new clustermap.components.map_report.t21101(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__21148 = portfolio_company;var G__21148__$1 = (((G__21148 == null))?null:cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(G__21148));var G__21148__$2 = (((G__21148__$1 == null))?null:cljs.core.count(G__21148__$1));return G__21148__$2;
})();var const_count = (function (){var G__21149 = portfolio_company;var G__21149__$1 = (((G__21149 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21149));var G__21149__$2 = (((G__21149__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21149__$1));var G__21149__$3 = (((G__21149__$2 == null))?null:cljs.core.count(G__21149__$2));return G__21149__$3;
})();if(typeof clustermap.components.map_report.t21150 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21150 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta21151){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21151 = meta21151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21150.cljs$lang$type = true;
clustermap.components.map_report.t21150.cljs$lang$ctorStr = "clustermap.components.map-report/t21150";
clustermap.components.map_report.t21150.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21150");
});
clustermap.components.map_report.t21150.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21150.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21153 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21153))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21153),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21153));
}
})()),React.DOM.ul(null,(function (){var attrs21154 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21154))
{return React.DOM.li(sablono.interpreter.attributes(attrs21154),(function (){var attrs21155 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21155))
{return React.DOM.small(sablono.interpreter.attributes(attrs21155),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21155));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21154),(function (){var attrs21156 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21156))
{return React.DOM.small(sablono.interpreter.attributes(attrs21156),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21156));
}
})());
}
})(),(function (){var attrs21157 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21157))
{return React.DOM.li(sablono.interpreter.attributes(attrs21157),(function (){var attrs21158 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21158))
{return React.DOM.small(sablono.interpreter.attributes(attrs21158),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21158));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21157),(function (){var attrs21159 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21159))
{return React.DOM.small(sablono.interpreter.attributes(attrs21159),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21159));
}
})());
}
})(),(function (){var attrs21160 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21170 = self__.portfolio_company;var G__21170__$1 = (((G__21170 == null))?null:cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(G__21170));return G__21170__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21170 = self__.portfolio_company;var G__21170__$1 = (((G__21170 == null))?null:cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(G__21170));return G__21170__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21160))
{return React.DOM.li(sablono.interpreter.attributes(attrs21160),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21160),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21165 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21171 = self__.portfolio_company;var G__21171__$1 = (((G__21171 == null))?null:cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(G__21171));return G__21171__$1;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21171 = self__.portfolio_company;var G__21171__$1 = (((G__21171 == null))?null:cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(G__21171));return G__21171__$1;
})(),cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21165))
{return React.DOM.li(sablono.interpreter.attributes(attrs21165),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21165),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t21150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21152){var self__ = this;
var _21152__$1 = this;return self__.meta21151;
});
clustermap.components.map_report.t21150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21152,meta21151__$1){var self__ = this;
var _21152__$1 = this;return (new clustermap.components.map_report.t21150(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta21151__$1));
});
clustermap.components.map_report.__GT_t21150 = (function __GT_t21150(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta21151){return (new clustermap.components.map_report.t21150(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta21151));
});
}
return (new clustermap.components.map_report.t21150(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__21196 = investor_company;var G__21196__$1 = (((G__21196 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21196));var G__21196__$2 = (((G__21196__$1 == null))?null:cljs.core.count(G__21196__$1));return G__21196__$2;
})();var const_count = (function (){var G__21197 = investor_company;var G__21197__$1 = (((G__21197 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21197));var G__21197__$2 = (((G__21197__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21197__$1));var G__21197__$3 = (((G__21197__$2 == null))?null:cljs.core.count(G__21197__$2));return G__21197__$3;
})();if(typeof clustermap.components.map_report.t21198 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21198 = (function (const_count,pc_count,investor_company,investor_company_report,meta21199){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21199 = meta21199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21198.cljs$lang$type = true;
clustermap.components.map_report.t21198.cljs$lang$ctorStr = "clustermap.components.map-report/t21198";
clustermap.components.map_report.t21198.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21198");
});
clustermap.components.map_report.t21198.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21198.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21201 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21201))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21201),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21201));
}
})()),React.DOM.ul(null,(function (){var attrs21202 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21202))
{return React.DOM.li(sablono.interpreter.attributes(attrs21202),(function (){var attrs21203 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21203))
{return React.DOM.small(sablono.interpreter.attributes(attrs21203),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21203));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21202),(function (){var attrs21204 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21204))
{return React.DOM.small(sablono.interpreter.attributes(attrs21204),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21204));
}
})());
}
})(),(function (){var attrs21205 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21205))
{return React.DOM.li(sablono.interpreter.attributes(attrs21205),(function (){var attrs21206 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21206))
{return React.DOM.small(sablono.interpreter.attributes(attrs21206),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21206));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21205),(function (){var attrs21207 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21207))
{return React.DOM.small(sablono.interpreter.attributes(attrs21207),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21207));
}
})());
}
})(),(function (){var attrs21208 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21218 = self__.investor_company;var G__21218__$1 = (((G__21218 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21218));return G__21218__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21218 = self__.investor_company;var G__21218__$1 = (((G__21218 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21218));return G__21218__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21208))
{return React.DOM.li(sablono.interpreter.attributes(attrs21208),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21208),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21213 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21219 = self__.investor_company;var G__21219__$1 = (((G__21219 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21219));return G__21219__$1;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21219 = self__.investor_company;var G__21219__$1 = (((G__21219 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21219));return G__21219__$1;
})(),cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21213))
{return React.DOM.li(sablono.interpreter.attributes(attrs21213),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21213),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21198.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21200){var self__ = this;
var _21200__$1 = this;return self__.meta21199;
});
clustermap.components.map_report.t21198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21200,meta21199__$1){var self__ = this;
var _21200__$1 = this;return (new clustermap.components.map_report.t21198(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta21199__$1));
});
clustermap.components.map_report.__GT_t21198 = (function __GT_t21198(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21199){return (new clustermap.components.map_report.t21198(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21199));
});
}
return (new clustermap.components.map_report.t21198(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__21245 = constituency;var G__21245__$1 = (((G__21245 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21245));var G__21245__$2 = (((G__21245__$1 == null))?null:cljs.core.count(G__21245__$1));return G__21245__$2;
})();var ic_count = (function (){var G__21246 = constituency;var G__21246__$1 = (((G__21246 == null))?null:cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(G__21246));var G__21246__$2 = (((G__21246__$1 == null))?null:cljs.core.count(G__21246__$1));return G__21246__$2;
})();if(typeof clustermap.components.map_report.t21247 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21247 = (function (ic_count,pc_count,constituency,constituency_report,meta21248){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21248 = meta21248;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21247.cljs$lang$type = true;
clustermap.components.map_report.t21247.cljs$lang$ctorStr = "clustermap.components.map-report/t21247";
clustermap.components.map_report.t21247.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21247");
});
clustermap.components.map_report.t21247.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21247.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21250 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21250))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21250),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21250));
}
})(),(function (){var attrs21251 = cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21251))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21251),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21251),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21252 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21252))
{return React.DOM.li(sablono.interpreter.attributes(attrs21252),(function (){var attrs21253 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21253))
{return React.DOM.small(sablono.interpreter.attributes(attrs21253),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21253));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21252),(function (){var attrs21254 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21254))
{return React.DOM.small(sablono.interpreter.attributes(attrs21254),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21254));
}
})());
}
})(),(function (){var attrs21255 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21255))
{return React.DOM.li(sablono.interpreter.attributes(attrs21255),(function (){var attrs21256 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21256))
{return React.DOM.small(sablono.interpreter.attributes(attrs21256),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21256));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21255),(function (){var attrs21257 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21257))
{return React.DOM.small(sablono.interpreter.attributes(attrs21257),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21257));
}
})());
}
})(),(function (){var attrs21258 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21268 = self__.constituency;var G__21268__$1 = (((G__21268 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21268));return G__21268__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21268 = self__.constituency;var G__21268__$1 = (((G__21268 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21268));return G__21268__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21258))
{return React.DOM.li(sablono.interpreter.attributes(attrs21258),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21258),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21263 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21269 = self__.constituency;var G__21269__$1 = (((G__21269 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21269));return G__21269__$1;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21269 = self__.constituency;var G__21269__$1 = (((G__21269 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21269));return G__21269__$1;
})(),cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21263))
{return React.DOM.li(sablono.interpreter.attributes(attrs21263),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21263),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21249){var self__ = this;
var _21249__$1 = this;return self__.meta21248;
});
clustermap.components.map_report.t21247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21249,meta21248__$1){var self__ = this;
var _21249__$1 = this;return (new clustermap.components.map_report.t21247(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta21248__$1));
});
clustermap.components.map_report.__GT_t21247 = (function __GT_t21247(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21248){return (new clustermap.components.map_report.t21247(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21248));
});
}
return (new clustermap.components.map_report.t21247(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,cljs.core.constant$keyword$194], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,cljs.core.constant$keyword$164], null));var pred__21273 = cljs.core._EQ__EQ_;var expr__21274 = type;if(cljs.core.truth_((pred__21273.cljs$core$IFn$_invoke$arity$2 ? pred__21273.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,expr__21274) : pred__21273.call(null,cljs.core.constant$keyword$229,expr__21274))))
{return clustermap.components.map_report.portfolio_company_report(value);
} else
{if(cljs.core.truth_((pred__21273.cljs$core$IFn$_invoke$arity$2 ? pred__21273.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__21274) : pred__21273.call(null,cljs.core.constant$keyword$230,expr__21274))))
{return clustermap.components.map_report.investor_company_report(value);
} else
{if(cljs.core.truth_((pred__21273.cljs$core$IFn$_invoke$arity$2 ? pred__21273.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$231,expr__21274) : pred__21273.call(null,cljs.core.constant$keyword$231,expr__21274))))
{return clustermap.components.map_report.constituency_report(value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
