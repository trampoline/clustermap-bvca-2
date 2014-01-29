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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__21616 = apc_stats;var G__21616__$1 = (((G__21616 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21616));return G__21616__$1;
})();var ic_count = (function (){var G__21617 = apc_stats;var G__21617__$1 = (((G__21617 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21617));return G__21617__$1;
})();if(typeof clustermap.components.map_report.t21618 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21618 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta21619){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21619 = meta21619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21618.cljs$lang$type = true;
clustermap.components.map_report.t21618.cljs$lang$ctorStr = "clustermap.components.map-report/t21618";
clustermap.components.map_report.t21618.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21618");
});
clustermap.components.map_report.t21618.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21618.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21623 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$187,"-"));if(cljs.core.map_QMARK_(attrs21623))
{return React.DOM.li(sablono.interpreter.attributes(attrs21623),(function (){var attrs21624 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21624))
{return React.DOM.small(sablono.interpreter.attributes(attrs21624),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21624));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21623),(function (){var attrs21625 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21625))
{return React.DOM.small(sablono.interpreter.attributes(attrs21625),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21625));
}
})());
}
})(),(function (){var attrs21626 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$187,"-"));if(cljs.core.map_QMARK_(attrs21626))
{return React.DOM.li(sablono.interpreter.attributes(attrs21626),(function (){var attrs21627 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21627))
{return React.DOM.small(sablono.interpreter.attributes(attrs21627),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21627));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21626),(function (){var attrs21628 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21628))
{return React.DOM.small(sablono.interpreter.attributes(attrs21628),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21628));
}
})());
}
})(),(function (){var attrs21629 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21639 = self__.apc_stats;var G__21639__$1 = (((G__21639 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21639));var G__21639__$2 = (((G__21639__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21639__$1));return G__21639__$2;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21639 = self__.apc_stats;var G__21639__$1 = (((G__21639 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21639));var G__21639__$2 = (((G__21639__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21639__$1));return G__21639__$2;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-"));if(cljs.core.map_QMARK_(attrs21629))
{return React.DOM.li(sablono.interpreter.attributes(attrs21629),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21629),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21634 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21640 = self__.apc_stats;var G__21640__$1 = (((G__21640 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21640));var G__21640__$2 = (((G__21640__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21640__$1));return G__21640__$2;
})(),cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21640 = self__.apc_stats;var G__21640__$1 = (((G__21640 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21640));var G__21640__$2 = (((G__21640__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21640__$1));return G__21640__$2;
})(),cljs.core.constant$keyword$187,"-"));if(cljs.core.map_QMARK_(attrs21634))
{return React.DOM.li(sablono.interpreter.attributes(attrs21634),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21634),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21620){var self__ = this;
var _21620__$1 = this;return self__.meta21619;
});
clustermap.components.map_report.t21618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21620,meta21619__$1){var self__ = this;
var _21620__$1 = this;return (new clustermap.components.map_report.t21618(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21619__$1));
});
clustermap.components.map_report.__GT_t21618 = (function __GT_t21618(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21619){return (new clustermap.components.map_report.t21618(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21619));
});
}
return (new clustermap.components.map_report.t21618(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__21665 = portfolio_company;var G__21665__$1 = (((G__21665 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__21665));var G__21665__$2 = (((G__21665__$1 == null))?null:cljs.core.count(G__21665__$1));return G__21665__$2;
})();var const_count = (function (){var G__21666 = portfolio_company;var G__21666__$1 = (((G__21666 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__21666));var G__21666__$2 = (((G__21666__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__21666__$1));var G__21666__$3 = (((G__21666__$2 == null))?null:cljs.core.count(G__21666__$2));return G__21666__$3;
})();if(typeof clustermap.components.map_report.t21667 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21667 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta21668){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21668 = meta21668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21667.cljs$lang$type = true;
clustermap.components.map_report.t21667.cljs$lang$ctorStr = "clustermap.components.map-report/t21667";
clustermap.components.map_report.t21667.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21667");
});
clustermap.components.map_report.t21667.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21667.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21670 = cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21670))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21670),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21670));
}
})()),React.DOM.ul(null,(function (){var attrs21671 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21671))
{return React.DOM.li(sablono.interpreter.attributes(attrs21671),(function (){var attrs21672 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21672))
{return React.DOM.small(sablono.interpreter.attributes(attrs21672),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21672));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21671),(function (){var attrs21673 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21673))
{return React.DOM.small(sablono.interpreter.attributes(attrs21673),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21673));
}
})());
}
})(),(function (){var attrs21674 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21674))
{return React.DOM.li(sablono.interpreter.attributes(attrs21674),(function (){var attrs21675 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21675))
{return React.DOM.small(sablono.interpreter.attributes(attrs21675),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21675));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21674),(function (){var attrs21676 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21676))
{return React.DOM.small(sablono.interpreter.attributes(attrs21676),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21676));
}
})());
}
})(),(function (){var attrs21677 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21687 = self__.portfolio_company;var G__21687__$1 = (((G__21687 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21687));return G__21687__$1;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21687 = self__.portfolio_company;var G__21687__$1 = (((G__21687 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21687));return G__21687__$1;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-"));if(cljs.core.map_QMARK_(attrs21677))
{return React.DOM.li(sablono.interpreter.attributes(attrs21677),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21677),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21682 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21688 = self__.portfolio_company;var G__21688__$1 = (((G__21688 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21688));return G__21688__$1;
})(),cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21688 = self__.portfolio_company;var G__21688__$1 = (((G__21688 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21688));return G__21688__$1;
})(),cljs.core.constant$keyword$187,"-"));if(cljs.core.map_QMARK_(attrs21682))
{return React.DOM.li(sablono.interpreter.attributes(attrs21682),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21682),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t21667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21669){var self__ = this;
var _21669__$1 = this;return self__.meta21668;
});
clustermap.components.map_report.t21667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21669,meta21668__$1){var self__ = this;
var _21669__$1 = this;return (new clustermap.components.map_report.t21667(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta21668__$1));
});
clustermap.components.map_report.__GT_t21667 = (function __GT_t21667(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta21668){return (new clustermap.components.map_report.t21667(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta21668));
});
}
return (new clustermap.components.map_report.t21667(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__21713 = investor_company;var G__21713__$1 = (((G__21713 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__21713));var G__21713__$2 = (((G__21713__$1 == null))?null:cljs.core.count(G__21713__$1));return G__21713__$2;
})();var const_count = (function (){var G__21714 = investor_company;var G__21714__$1 = (((G__21714 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__21714));var G__21714__$2 = (((G__21714__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__21714__$1));var G__21714__$3 = (((G__21714__$2 == null))?null:cljs.core.count(G__21714__$2));return G__21714__$3;
})();if(typeof clustermap.components.map_report.t21715 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21715 = (function (const_count,pc_count,investor_company,investor_company_report,meta21716){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21716 = meta21716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21715.cljs$lang$type = true;
clustermap.components.map_report.t21715.cljs$lang$ctorStr = "clustermap.components.map-report/t21715";
clustermap.components.map_report.t21715.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21715");
});
clustermap.components.map_report.t21715.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21715.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21718 = cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21718))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21718),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21718));
}
})()),React.DOM.ul(null,(function (){var attrs21719 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21719))
{return React.DOM.li(sablono.interpreter.attributes(attrs21719),(function (){var attrs21720 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21720))
{return React.DOM.small(sablono.interpreter.attributes(attrs21720),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21720));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21719),(function (){var attrs21721 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21721))
{return React.DOM.small(sablono.interpreter.attributes(attrs21721),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21721));
}
})());
}
})(),(function (){var attrs21722 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21722))
{return React.DOM.li(sablono.interpreter.attributes(attrs21722),(function (){var attrs21723 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21723))
{return React.DOM.small(sablono.interpreter.attributes(attrs21723),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21723));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21722),(function (){var attrs21724 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21724))
{return React.DOM.small(sablono.interpreter.attributes(attrs21724),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21724));
}
})());
}
})(),(function (){var attrs21725 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21735 = self__.investor_company;var G__21735__$1 = (((G__21735 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__21735));return G__21735__$1;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21735 = self__.investor_company;var G__21735__$1 = (((G__21735 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__21735));return G__21735__$1;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-"));if(cljs.core.map_QMARK_(attrs21725))
{return React.DOM.li(sablono.interpreter.attributes(attrs21725),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21725),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21730 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21736 = self__.investor_company;var G__21736__$1 = (((G__21736 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__21736));return G__21736__$1;
})(),cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21736 = self__.investor_company;var G__21736__$1 = (((G__21736 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__21736));return G__21736__$1;
})(),cljs.core.constant$keyword$187,"-"));if(cljs.core.map_QMARK_(attrs21730))
{return React.DOM.li(sablono.interpreter.attributes(attrs21730),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21730),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21717){var self__ = this;
var _21717__$1 = this;return self__.meta21716;
});
clustermap.components.map_report.t21715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21717,meta21716__$1){var self__ = this;
var _21717__$1 = this;return (new clustermap.components.map_report.t21715(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta21716__$1));
});
clustermap.components.map_report.__GT_t21715 = (function __GT_t21715(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21716){return (new clustermap.components.map_report.t21715(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21716));
});
}
return (new clustermap.components.map_report.t21715(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__21762 = constituency;var G__21762__$1 = (((G__21762 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__21762));var G__21762__$2 = (((G__21762__$1 == null))?null:cljs.core.count(G__21762__$1));return G__21762__$2;
})();var ic_count = (function (){var G__21763 = constituency;var G__21763__$1 = (((G__21763 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__21763));var G__21763__$2 = (((G__21763__$1 == null))?null:cljs.core.count(G__21763__$1));return G__21763__$2;
})();if(typeof clustermap.components.map_report.t21764 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21764 = (function (ic_count,pc_count,constituency,constituency_report,meta21765){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21765 = meta21765;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21764.cljs$lang$type = true;
clustermap.components.map_report.t21764.cljs$lang$ctorStr = "clustermap.components.map-report/t21764";
clustermap.components.map_report.t21764.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21764");
});
clustermap.components.map_report.t21764.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21764.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21767 = cljs.core.constant$keyword$232.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21767))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21767),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21767));
}
})(),(function (){var attrs21768 = cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21768))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21768),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21768),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21769 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21769))
{return React.DOM.li(sablono.interpreter.attributes(attrs21769),(function (){var attrs21770 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21770))
{return React.DOM.small(sablono.interpreter.attributes(attrs21770),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21770));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21769),(function (){var attrs21771 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21771))
{return React.DOM.small(sablono.interpreter.attributes(attrs21771),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21771));
}
})());
}
})(),(function (){var attrs21772 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21772))
{return React.DOM.li(sablono.interpreter.attributes(attrs21772),(function (){var attrs21773 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21773))
{return React.DOM.small(sablono.interpreter.attributes(attrs21773),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21773));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21772),(function (){var attrs21774 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21774))
{return React.DOM.small(sablono.interpreter.attributes(attrs21774),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21774));
}
})());
}
})(),(function (){var attrs21775 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21785 = self__.constituency;var G__21785__$1 = (((G__21785 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__21785));return G__21785__$1;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21785 = self__.constituency;var G__21785__$1 = (((G__21785 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__21785));return G__21785__$1;
})(),cljs.core.constant$keyword$252,2,cljs.core.constant$keyword$187,"-"));if(cljs.core.map_QMARK_(attrs21775))
{return React.DOM.li(sablono.interpreter.attributes(attrs21775),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21775),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21780 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21786 = self__.constituency;var G__21786__$1 = (((G__21786 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__21786));return G__21786__$1;
})(),cljs.core.constant$keyword$187,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21786 = self__.constituency;var G__21786__$1 = (((G__21786 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__21786));return G__21786__$1;
})(),cljs.core.constant$keyword$187,"-"));if(cljs.core.map_QMARK_(attrs21780))
{return React.DOM.li(sablono.interpreter.attributes(attrs21780),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21780),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21766){var self__ = this;
var _21766__$1 = this;return self__.meta21765;
});
clustermap.components.map_report.t21764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21766,meta21765__$1){var self__ = this;
var _21766__$1 = this;return (new clustermap.components.map_report.t21764(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta21765__$1));
});
clustermap.components.map_report.__GT_t21764 = (function __GT_t21764(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21765){return (new clustermap.components.map_report.t21764(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21765));
});
}
return (new clustermap.components.map_report.t21764(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,cljs.core.constant$keyword$221], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,cljs.core.constant$keyword$191], null));var pred__21790 = cljs.core._EQ__EQ_;var expr__21791 = type;if(cljs.core.truth_((pred__21790.cljs$core$IFn$_invoke$arity$2 ? pred__21790.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$256,expr__21791) : pred__21790.call(null,cljs.core.constant$keyword$256,expr__21791))))
{return clustermap.components.map_report.portfolio_company_report(value);
} else
{if(cljs.core.truth_((pred__21790.cljs$core$IFn$_invoke$arity$2 ? pred__21790.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21791) : pred__21790.call(null,cljs.core.constant$keyword$257,expr__21791))))
{return clustermap.components.map_report.investor_company_report(value);
} else
{if(cljs.core.truth_((pred__21790.cljs$core$IFn$_invoke$arity$2 ? pred__21790.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$258,expr__21791) : pred__21790.call(null,cljs.core.constant$keyword$258,expr__21791))))
{return clustermap.components.map_report.constituency_report(value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
