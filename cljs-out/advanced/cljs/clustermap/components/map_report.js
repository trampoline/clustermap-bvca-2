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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__20906 = apc_stats;var G__20906__$1 = (((G__20906 == null))?null:cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(G__20906));return G__20906__$1;
})();var ic_count = (function (){var G__20907 = apc_stats;var G__20907__$1 = (((G__20907 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__20907));return G__20907__$1;
})();if(typeof clustermap.components.map_report.t20908 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20908 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta20909){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta20909 = meta20909;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20908.cljs$lang$type = true;
clustermap.components.map_report.t20908.cljs$lang$ctorStr = "clustermap.components.map-report/t20908";
clustermap.components.map_report.t20908.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20908");
});
clustermap.components.map_report.t20908.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20908.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs20913 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$157,"-"));if(cljs.core.map_QMARK_(attrs20913))
{return React.DOM.li(sablono.interpreter.attributes(attrs20913),(function (){var attrs20914 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20914))
{return React.DOM.small(sablono.interpreter.attributes(attrs20914),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20914));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20913),(function (){var attrs20915 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs20915))
{return React.DOM.small(sablono.interpreter.attributes(attrs20915),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20915));
}
})());
}
})(),(function (){var attrs20916 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$157,"-"));if(cljs.core.map_QMARK_(attrs20916))
{return React.DOM.li(sablono.interpreter.attributes(attrs20916),(function (){var attrs20917 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20917))
{return React.DOM.small(sablono.interpreter.attributes(attrs20917),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20917));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20916),(function (){var attrs20918 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20918))
{return React.DOM.small(sablono.interpreter.attributes(attrs20918),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20918));
}
})());
}
})(),(function (){var attrs20919 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20929 = self__.apc_stats;var G__20929__$1 = (((G__20929 == null))?null:cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(G__20929));var G__20929__$2 = (((G__20929__$1 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20929__$1));return G__20929__$2;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20929 = self__.apc_stats;var G__20929__$1 = (((G__20929 == null))?null:cljs.core.constant$keyword$237.cljs$core$IFn$_invoke$arity$1(G__20929));var G__20929__$2 = (((G__20929__$1 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20929__$1));return G__20929__$2;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-"));if(cljs.core.map_QMARK_(attrs20919))
{return React.DOM.li(sablono.interpreter.attributes(attrs20919),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20919),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs20924 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20930 = self__.apc_stats;var G__20930__$1 = (((G__20930 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20930));var G__20930__$2 = (((G__20930__$1 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20930__$1));return G__20930__$2;
})(),cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20930 = self__.apc_stats;var G__20930__$1 = (((G__20930 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__20930));var G__20930__$2 = (((G__20930__$1 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__20930__$1));return G__20930__$2;
})(),cljs.core.constant$keyword$157,"-"));if(cljs.core.map_QMARK_(attrs20924))
{return React.DOM.li(sablono.interpreter.attributes(attrs20924),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20924),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t20908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20910){var self__ = this;
var _20910__$1 = this;return self__.meta20909;
});
clustermap.components.map_report.t20908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20910,meta20909__$1){var self__ = this;
var _20910__$1 = this;return (new clustermap.components.map_report.t20908(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta20909__$1));
});
clustermap.components.map_report.__GT_t20908 = (function __GT_t20908(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta20909){return (new clustermap.components.map_report.t20908(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta20909));
});
}
return (new clustermap.components.map_report.t20908(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__20955 = portfolio_company;var G__20955__$1 = (((G__20955 == null))?null:cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(G__20955));var G__20955__$2 = (((G__20955__$1 == null))?null:cljs.core.count(G__20955__$1));return G__20955__$2;
})();var const_count = (function (){var G__20956 = portfolio_company;var G__20956__$1 = (((G__20956 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__20956));var G__20956__$2 = (((G__20956__$1 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__20956__$1));var G__20956__$3 = (((G__20956__$2 == null))?null:cljs.core.count(G__20956__$2));return G__20956__$3;
})();if(typeof clustermap.components.map_report.t20957 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t20957 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta20958){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta20958 = meta20958;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t20957.cljs$lang$type = true;
clustermap.components.map_report.t20957.cljs$lang$ctorStr = "clustermap.components.map-report/t20957";
clustermap.components.map_report.t20957.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t20957");
});
clustermap.components.map_report.t20957.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t20957.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs20960 = cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs20960))
{return React.DOM.h2(sablono.interpreter.attributes(attrs20960),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs20960));
}
})()),React.DOM.ul(null,(function (){var attrs20961 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs20961))
{return React.DOM.li(sablono.interpreter.attributes(attrs20961),(function (){var attrs20962 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20962))
{return React.DOM.small(sablono.interpreter.attributes(attrs20962),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20962));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20961),(function (){var attrs20963 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs20963))
{return React.DOM.small(sablono.interpreter.attributes(attrs20963),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20963));
}
})());
}
})(),(function (){var attrs20964 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs20964))
{return React.DOM.li(sablono.interpreter.attributes(attrs20964),(function (){var attrs20965 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs20965))
{return React.DOM.small(sablono.interpreter.attributes(attrs20965),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20965));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20964),(function (){var attrs20966 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs20966))
{return React.DOM.small(sablono.interpreter.attributes(attrs20966),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs20966));
}
})());
}
})(),(function (){var attrs20967 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__20977 = self__.portfolio_company;var G__20977__$1 = (((G__20977 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20977));return G__20977__$1;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__20977 = self__.portfolio_company;var G__20977__$1 = (((G__20977 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__20977));return G__20977__$1;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-"));if(cljs.core.map_QMARK_(attrs20967))
{return React.DOM.li(sablono.interpreter.attributes(attrs20967),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20967),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs20972 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__20978 = self__.portfolio_company;var G__20978__$1 = (((G__20978 == null))?null:cljs.core.constant$keyword$248.cljs$core$IFn$_invoke$arity$1(G__20978));return G__20978__$1;
})(),cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__20978 = self__.portfolio_company;var G__20978__$1 = (((G__20978 == null))?null:cljs.core.constant$keyword$248.cljs$core$IFn$_invoke$arity$1(G__20978));return G__20978__$1;
})(),cljs.core.constant$keyword$157,"-"));if(cljs.core.map_QMARK_(attrs20972))
{return React.DOM.li(sablono.interpreter.attributes(attrs20972),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs20972),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t20957.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20959){var self__ = this;
var _20959__$1 = this;return self__.meta20958;
});
clustermap.components.map_report.t20957.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20959,meta20958__$1){var self__ = this;
var _20959__$1 = this;return (new clustermap.components.map_report.t20957(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta20958__$1));
});
clustermap.components.map_report.__GT_t20957 = (function __GT_t20957(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta20958){return (new clustermap.components.map_report.t20957(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta20958));
});
}
return (new clustermap.components.map_report.t20957(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__21003 = investor_company;var G__21003__$1 = (((G__21003 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__21003));var G__21003__$2 = (((G__21003__$1 == null))?null:cljs.core.count(G__21003__$1));return G__21003__$2;
})();var const_count = (function (){var G__21004 = investor_company;var G__21004__$1 = (((G__21004 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21004));var G__21004__$2 = (((G__21004__$1 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21004__$1));var G__21004__$3 = (((G__21004__$2 == null))?null:cljs.core.count(G__21004__$2));return G__21004__$3;
})();if(typeof clustermap.components.map_report.t21005 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21005 = (function (const_count,pc_count,investor_company,investor_company_report,meta21006){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21006 = meta21006;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21005.cljs$lang$type = true;
clustermap.components.map_report.t21005.cljs$lang$ctorStr = "clustermap.components.map-report/t21005";
clustermap.components.map_report.t21005.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21005");
});
clustermap.components.map_report.t21005.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21005.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21008 = cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21008))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21008),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21008));
}
})()),React.DOM.ul(null,(function (){var attrs21009 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21009))
{return React.DOM.li(sablono.interpreter.attributes(attrs21009),(function (){var attrs21010 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21010))
{return React.DOM.small(sablono.interpreter.attributes(attrs21010),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21010));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21009),(function (){var attrs21011 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21011))
{return React.DOM.small(sablono.interpreter.attributes(attrs21011),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21011));
}
})());
}
})(),(function (){var attrs21012 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21012))
{return React.DOM.li(sablono.interpreter.attributes(attrs21012),(function (){var attrs21013 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21013))
{return React.DOM.small(sablono.interpreter.attributes(attrs21013),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21013));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21012),(function (){var attrs21014 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21014))
{return React.DOM.small(sablono.interpreter.attributes(attrs21014),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21014));
}
})());
}
})(),(function (){var attrs21015 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21025 = self__.investor_company;var G__21025__$1 = (((G__21025 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21025));return G__21025__$1;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21025 = self__.investor_company;var G__21025__$1 = (((G__21025 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21025));return G__21025__$1;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-"));if(cljs.core.map_QMARK_(attrs21015))
{return React.DOM.li(sablono.interpreter.attributes(attrs21015),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21015),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21020 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21026 = self__.investor_company;var G__21026__$1 = (((G__21026 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21026));return G__21026__$1;
})(),cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21026 = self__.investor_company;var G__21026__$1 = (((G__21026 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21026));return G__21026__$1;
})(),cljs.core.constant$keyword$157,"-"));if(cljs.core.map_QMARK_(attrs21020))
{return React.DOM.li(sablono.interpreter.attributes(attrs21020),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21020),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21007){var self__ = this;
var _21007__$1 = this;return self__.meta21006;
});
clustermap.components.map_report.t21005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21007,meta21006__$1){var self__ = this;
var _21007__$1 = this;return (new clustermap.components.map_report.t21005(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta21006__$1));
});
clustermap.components.map_report.__GT_t21005 = (function __GT_t21005(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21006){return (new clustermap.components.map_report.t21005(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21006));
});
}
return (new clustermap.components.map_report.t21005(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__21052 = constituency;var G__21052__$1 = (((G__21052 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__21052));var G__21052__$2 = (((G__21052__$1 == null))?null:cljs.core.count(G__21052__$1));return G__21052__$2;
})();var ic_count = (function (){var G__21053 = constituency;var G__21053__$1 = (((G__21053 == null))?null:cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(G__21053));var G__21053__$2 = (((G__21053__$1 == null))?null:cljs.core.count(G__21053__$1));return G__21053__$2;
})();if(typeof clustermap.components.map_report.t21054 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21054 = (function (ic_count,pc_count,constituency,constituency_report,meta21055){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21055 = meta21055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21054.cljs$lang$type = true;
clustermap.components.map_report.t21054.cljs$lang$ctorStr = "clustermap.components.map-report/t21054";
clustermap.components.map_report.t21054.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21054");
});
clustermap.components.map_report.t21054.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21054.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21057 = cljs.core.constant$keyword$202.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21057))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21057),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21057));
}
})(),(function (){var attrs21058 = cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21058))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21058),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21058),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21059 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21059))
{return React.DOM.li(sablono.interpreter.attributes(attrs21059),(function (){var attrs21060 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21060))
{return React.DOM.small(sablono.interpreter.attributes(attrs21060),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21060));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21059),(function (){var attrs21061 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21061))
{return React.DOM.small(sablono.interpreter.attributes(attrs21061),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21061));
}
})());
}
})(),(function (){var attrs21062 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21062))
{return React.DOM.li(sablono.interpreter.attributes(attrs21062),(function (){var attrs21063 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21063))
{return React.DOM.small(sablono.interpreter.attributes(attrs21063),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21063));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21062),(function (){var attrs21064 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21064))
{return React.DOM.small(sablono.interpreter.attributes(attrs21064),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21064));
}
})());
}
})(),(function (){var attrs21065 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21075 = self__.constituency;var G__21075__$1 = (((G__21075 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21075));return G__21075__$1;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21075 = self__.constituency;var G__21075__$1 = (((G__21075 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21075));return G__21075__$1;
})(),cljs.core.constant$keyword$222,2,cljs.core.constant$keyword$157,"-"));if(cljs.core.map_QMARK_(attrs21065))
{return React.DOM.li(sablono.interpreter.attributes(attrs21065),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21065),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21070 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21076 = self__.constituency;var G__21076__$1 = (((G__21076 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21076));return G__21076__$1;
})(),cljs.core.constant$keyword$157,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21076 = self__.constituency;var G__21076__$1 = (((G__21076 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21076));return G__21076__$1;
})(),cljs.core.constant$keyword$157,"-"));if(cljs.core.map_QMARK_(attrs21070))
{return React.DOM.li(sablono.interpreter.attributes(attrs21070),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21070),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21056){var self__ = this;
var _21056__$1 = this;return self__.meta21055;
});
clustermap.components.map_report.t21054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21056,meta21055__$1){var self__ = this;
var _21056__$1 = this;return (new clustermap.components.map_report.t21054(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta21055__$1));
});
clustermap.components.map_report.__GT_t21054 = (function __GT_t21054(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21055){return (new clustermap.components.map_report.t21054(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21055));
});
}
return (new clustermap.components.map_report.t21054(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,cljs.core.constant$keyword$191], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$229,cljs.core.constant$keyword$161], null));var pred__21080 = cljs.core._EQ__EQ_;var expr__21081 = type;if(cljs.core.truth_((pred__21080.cljs$core$IFn$_invoke$arity$2 ? pred__21080.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$226,expr__21081) : pred__21080.call(null,cljs.core.constant$keyword$226,expr__21081))))
{return clustermap.components.map_report.portfolio_company_report(value);
} else
{if(cljs.core.truth_((pred__21080.cljs$core$IFn$_invoke$arity$2 ? pred__21080.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$227,expr__21081) : pred__21080.call(null,cljs.core.constant$keyword$227,expr__21081))))
{return clustermap.components.map_report.investor_company_report(value);
} else
{if(cljs.core.truth_((pred__21080.cljs$core$IFn$_invoke$arity$2 ? pred__21080.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$228,expr__21081) : pred__21080.call(null,cljs.core.constant$keyword$228,expr__21081))))
{return clustermap.components.map_report.constituency_report(value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
