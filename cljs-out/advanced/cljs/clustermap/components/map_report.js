// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.map_report');
goog.require('cljs.core');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('cljs.core.async');
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
goog.require('cljs.core.async');
goog.require('clustermap.formats.string');
goog.require('clustermap.formats.number');
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$263,"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21659 = apc_stats;var G__21659__$1 = (((G__21659 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21659));return G__21659__$1;
})();var ic_count = (function (){var G__21660 = apc_stats;var G__21660__$1 = (((G__21660 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21660));return G__21660__$1;
})();if(typeof clustermap.components.map_report.t21661 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21661 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21662){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21662 = meta21662;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21661.cljs$lang$type = true;
clustermap.components.map_report.t21661.cljs$lang$ctorStr = "clustermap.components.map-report/t21661";
clustermap.components.map_report.t21661.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21661");
});
clustermap.components.map_report.t21661.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21661.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21666 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21666))
{return React.DOM.li(sablono.interpreter.attributes(attrs21666),(function (){var attrs21667 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21667))
{return React.DOM.small(sablono.interpreter.attributes(attrs21667),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21667));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21666),(function (){var attrs21668 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21668))
{return React.DOM.small(sablono.interpreter.attributes(attrs21668),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21668));
}
})());
}
})(),(function (){var attrs21669 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21669))
{return React.DOM.li(sablono.interpreter.attributes(attrs21669),(function (){var attrs21670 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21670))
{return React.DOM.small(sablono.interpreter.attributes(attrs21670),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21670));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21669),(function (){var attrs21671 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21671))
{return React.DOM.small(sablono.interpreter.attributes(attrs21671),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21671));
}
})());
}
})(),(function (){var attrs21672 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21682 = self__.apc_stats;var G__21682__$1 = (((G__21682 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21682));var G__21682__$2 = (((G__21682__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21682__$1));return G__21682__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21682 = self__.apc_stats;var G__21682__$1 = (((G__21682 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21682));var G__21682__$2 = (((G__21682__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21682__$1));return G__21682__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21672))
{return React.DOM.li(sablono.interpreter.attributes(attrs21672),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21672),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21677 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21683 = self__.apc_stats;var G__21683__$1 = (((G__21683 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21683));var G__21683__$2 = (((G__21683__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21683__$1));return G__21683__$2;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21683 = self__.apc_stats;var G__21683__$1 = (((G__21683 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21683));var G__21683__$2 = (((G__21683__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21683__$1));return G__21683__$2;
})(),cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21677))
{return React.DOM.li(sablono.interpreter.attributes(attrs21677),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21677),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21661.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21663){var self__ = this;
var _21663__$1 = this;return self__.meta21662;
});
clustermap.components.map_report.t21661.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21663,meta21662__$1){var self__ = this;
var _21663__$1 = this;return (new clustermap.components.map_report.t21661(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21662__$1));
});
clustermap.components.map_report.__GT_t21661 = (function __GT_t21661(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21662){return (new clustermap.components.map_report.t21661(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21662));
});
}
return (new clustermap.components.map_report.t21661(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21708 = portfolio_company;var G__21708__$1 = (((G__21708 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__21708));var G__21708__$2 = (((G__21708__$1 == null))?null:cljs.core.count(G__21708__$1));return G__21708__$2;
})();var const_count = (function (){var G__21709 = portfolio_company;var G__21709__$1 = (((G__21709 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__21709));var G__21709__$2 = (((G__21709__$1 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__21709__$1));var G__21709__$3 = (((G__21709__$2 == null))?null:cljs.core.count(G__21709__$2));return G__21709__$3;
})();if(typeof clustermap.components.map_report.t21710 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21710 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta21711){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21711 = meta21711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21710.cljs$lang$type = true;
clustermap.components.map_report.t21710.cljs$lang$ctorStr = "clustermap.components.map-report/t21710";
clustermap.components.map_report.t21710.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21710");
});
clustermap.components.map_report.t21710.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21710.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21713 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21713))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21713),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21713));
}
})()),React.DOM.ul(null,(function (){var attrs21714 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21714))
{return React.DOM.li(sablono.interpreter.attributes(attrs21714),(function (){var attrs21715 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21715))
{return React.DOM.small(sablono.interpreter.attributes(attrs21715),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21715));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21714),(function (){var attrs21716 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21716))
{return React.DOM.small(sablono.interpreter.attributes(attrs21716),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21716));
}
})());
}
})(),(function (){var attrs21717 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21717))
{return React.DOM.li(sablono.interpreter.attributes(attrs21717),(function (){var attrs21718 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21718))
{return React.DOM.small(sablono.interpreter.attributes(attrs21718),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21718));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21717),(function (){var attrs21719 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21719))
{return React.DOM.small(sablono.interpreter.attributes(attrs21719),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21719));
}
})());
}
})(),(function (){var attrs21720 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21730 = self__.portfolio_company;var G__21730__$1 = (((G__21730 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21730));return G__21730__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21730 = self__.portfolio_company;var G__21730__$1 = (((G__21730 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21730));return G__21730__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21720))
{return React.DOM.li(sablono.interpreter.attributes(attrs21720),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21720),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21725 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21731 = self__.portfolio_company;var G__21731__$1 = (((G__21731 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21731));return G__21731__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21731 = self__.portfolio_company;var G__21731__$1 = (((G__21731 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21731));return G__21731__$1;
})(),cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21725))
{return React.DOM.li(sablono.interpreter.attributes(attrs21725),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21725),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21712){var self__ = this;
var _21712__$1 = this;return self__.meta21711;
});
clustermap.components.map_report.t21710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21712,meta21711__$1){var self__ = this;
var _21712__$1 = this;return (new clustermap.components.map_report.t21710(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta21711__$1));
});
clustermap.components.map_report.__GT_t21710 = (function __GT_t21710(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21711){return (new clustermap.components.map_report.t21710(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21711));
});
}
return (new clustermap.components.map_report.t21710(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__21756 = investor_company;var G__21756__$1 = (((G__21756 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__21756));var G__21756__$2 = (((G__21756__$1 == null))?null:cljs.core.count(G__21756__$1));return G__21756__$2;
})();var const_count = (function (){var G__21757 = investor_company;var G__21757__$1 = (((G__21757 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__21757));var G__21757__$2 = (((G__21757__$1 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__21757__$1));var G__21757__$3 = (((G__21757__$2 == null))?null:cljs.core.count(G__21757__$2));return G__21757__$3;
})();if(typeof clustermap.components.map_report.t21758 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21758 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta21759){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21759 = meta21759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21758.cljs$lang$type = true;
clustermap.components.map_report.t21758.cljs$lang$ctorStr = "clustermap.components.map-report/t21758";
clustermap.components.map_report.t21758.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21758");
});
clustermap.components.map_report.t21758.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21758.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21761 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21761))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21761),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21761));
}
})()),React.DOM.ul(null,(function (){var attrs21762 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21762))
{return React.DOM.li(sablono.interpreter.attributes(attrs21762),(function (){var attrs21763 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21763))
{return React.DOM.small(sablono.interpreter.attributes(attrs21763),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21763));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21762),(function (){var attrs21764 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21764))
{return React.DOM.small(sablono.interpreter.attributes(attrs21764),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21764));
}
})());
}
})(),(function (){var attrs21765 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21765))
{return React.DOM.li(sablono.interpreter.attributes(attrs21765),(function (){var attrs21766 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21766))
{return React.DOM.small(sablono.interpreter.attributes(attrs21766),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21766));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21765),(function (){var attrs21767 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21767))
{return React.DOM.small(sablono.interpreter.attributes(attrs21767),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21767));
}
})());
}
})(),(function (){var attrs21768 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21778 = self__.investor_company;var G__21778__$1 = (((G__21778 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__21778));return G__21778__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21778 = self__.investor_company;var G__21778__$1 = (((G__21778 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__21778));return G__21778__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21768))
{return React.DOM.li(sablono.interpreter.attributes(attrs21768),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21768),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21773 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21779 = self__.investor_company;var G__21779__$1 = (((G__21779 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__21779));return G__21779__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21779 = self__.investor_company;var G__21779__$1 = (((G__21779 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__21779));return G__21779__$1;
})(),cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21773))
{return React.DOM.li(sablono.interpreter.attributes(attrs21773),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21773),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21760){var self__ = this;
var _21760__$1 = this;return self__.meta21759;
});
clustermap.components.map_report.t21758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21760,meta21759__$1){var self__ = this;
var _21760__$1 = this;return (new clustermap.components.map_report.t21758(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta21759__$1));
});
clustermap.components.map_report.__GT_t21758 = (function __GT_t21758(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21759){return (new clustermap.components.map_report.t21758(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21759));
});
}
return (new clustermap.components.map_report.t21758(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__21805 = constituency;var G__21805__$1 = (((G__21805 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__21805));var G__21805__$2 = (((G__21805__$1 == null))?null:cljs.core.count(G__21805__$1));return G__21805__$2;
})();var ic_count = (function (){var G__21806 = constituency;var G__21806__$1 = (((G__21806 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__21806));var G__21806__$2 = (((G__21806__$1 == null))?null:cljs.core.count(G__21806__$1));return G__21806__$2;
})();if(typeof clustermap.components.map_report.t21807 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21807 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta21808){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21808 = meta21808;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21807.cljs$lang$type = true;
clustermap.components.map_report.t21807.cljs$lang$ctorStr = "clustermap.components.map-report/t21807";
clustermap.components.map_report.t21807.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21807");
});
clustermap.components.map_report.t21807.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21807.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21810 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21810))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21810),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21810));
}
})(),(function (){var attrs21811 = cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21811))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21811),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21811),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21812 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21812))
{return React.DOM.li(sablono.interpreter.attributes(attrs21812),(function (){var attrs21813 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21813))
{return React.DOM.small(sablono.interpreter.attributes(attrs21813),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21813));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21812),(function (){var attrs21814 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21814))
{return React.DOM.small(sablono.interpreter.attributes(attrs21814),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21814));
}
})());
}
})(),(function (){var attrs21815 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21815))
{return React.DOM.li(sablono.interpreter.attributes(attrs21815),(function (){var attrs21816 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21816))
{return React.DOM.small(sablono.interpreter.attributes(attrs21816),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21816));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21815),(function (){var attrs21817 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21817))
{return React.DOM.small(sablono.interpreter.attributes(attrs21817),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21817));
}
})());
}
})(),(function (){var attrs21818 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21828 = self__.constituency;var G__21828__$1 = (((G__21828 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__21828));return G__21828__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21828 = self__.constituency;var G__21828__$1 = (((G__21828 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__21828));return G__21828__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21818))
{return React.DOM.li(sablono.interpreter.attributes(attrs21818),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21818),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21823 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21829 = self__.constituency;var G__21829__$1 = (((G__21829 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__21829));return G__21829__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21829 = self__.constituency;var G__21829__$1 = (((G__21829 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__21829));return G__21829__$1;
})(),cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21823))
{return React.DOM.li(sablono.interpreter.attributes(attrs21823),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21823),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21809){var self__ = this;
var _21809__$1 = this;return self__.meta21808;
});
clustermap.components.map_report.t21807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21809,meta21808__$1){var self__ = this;
var _21809__$1 = this;return (new clustermap.components.map_report.t21807(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta21808__$1));
});
clustermap.components.map_report.__GT_t21807 = (function __GT_t21807(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21808){return (new clustermap.components.map_report.t21807(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21808));
});
}
return (new clustermap.components.map_report.t21807(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$262);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,cljs.core.constant$keyword$224], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,cljs.core.constant$keyword$194], null));var pred__21833 = cljs.core._EQ__EQ_;var expr__21834 = type;if(cljs.core.truth_((pred__21833.cljs$core$IFn$_invoke$arity$2 ? pred__21833.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21834) : pred__21833.call(null,cljs.core.constant$keyword$259,expr__21834))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21833.cljs$core$IFn$_invoke$arity$2 ? pred__21833.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260,expr__21834) : pred__21833.call(null,cljs.core.constant$keyword$260,expr__21834))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21833.cljs$core$IFn$_invoke$arity$2 ? pred__21833.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261,expr__21834) : pred__21833.call(null,cljs.core.constant$keyword$261,expr__21834))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
