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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__21294 = apc_stats;var G__21294__$1 = (((G__21294 == null))?null:cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(G__21294));return G__21294__$1;
})();var ic_count = (function (){var G__21295 = apc_stats;var G__21295__$1 = (((G__21295 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21295));return G__21295__$1;
})();if(typeof clustermap.components.map_report.t21296 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21296 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta21297){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21297 = meta21297;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21296.cljs$lang$type = true;
clustermap.components.map_report.t21296.cljs$lang$ctorStr = "clustermap.components.map-report/t21296";
clustermap.components.map_report.t21296.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21296");
});
clustermap.components.map_report.t21296.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21296.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21301 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$184,"-"));if(cljs.core.map_QMARK_(attrs21301))
{return React.DOM.li(sablono.interpreter.attributes(attrs21301),(function (){var attrs21302 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21302))
{return React.DOM.small(sablono.interpreter.attributes(attrs21302),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21302));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21301),(function (){var attrs21303 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21303))
{return React.DOM.small(sablono.interpreter.attributes(attrs21303),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21303));
}
})());
}
})(),(function (){var attrs21304 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$184,"-"));if(cljs.core.map_QMARK_(attrs21304))
{return React.DOM.li(sablono.interpreter.attributes(attrs21304),(function (){var attrs21305 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21305))
{return React.DOM.small(sablono.interpreter.attributes(attrs21305),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21305));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21304),(function (){var attrs21306 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21306))
{return React.DOM.small(sablono.interpreter.attributes(attrs21306),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21306));
}
})());
}
})(),(function (){var attrs21307 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21317 = self__.apc_stats;var G__21317__$1 = (((G__21317 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__21317));var G__21317__$2 = (((G__21317__$1 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21317__$1));return G__21317__$2;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21317 = self__.apc_stats;var G__21317__$1 = (((G__21317 == null))?null:cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(G__21317));var G__21317__$2 = (((G__21317__$1 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21317__$1));return G__21317__$2;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-"));if(cljs.core.map_QMARK_(attrs21307))
{return React.DOM.li(sablono.interpreter.attributes(attrs21307),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21307),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21312 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21318 = self__.apc_stats;var G__21318__$1 = (((G__21318 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21318));var G__21318__$2 = (((G__21318__$1 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21318__$1));return G__21318__$2;
})(),cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21318 = self__.apc_stats;var G__21318__$1 = (((G__21318 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21318));var G__21318__$2 = (((G__21318__$1 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21318__$1));return G__21318__$2;
})(),cljs.core.constant$keyword$184,"-"));if(cljs.core.map_QMARK_(attrs21312))
{return React.DOM.li(sablono.interpreter.attributes(attrs21312),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21312),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21296.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21298){var self__ = this;
var _21298__$1 = this;return self__.meta21297;
});
clustermap.components.map_report.t21296.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21298,meta21297__$1){var self__ = this;
var _21298__$1 = this;return (new clustermap.components.map_report.t21296(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21297__$1));
});
clustermap.components.map_report.__GT_t21296 = (function __GT_t21296(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21297){return (new clustermap.components.map_report.t21296(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21297));
});
}
return (new clustermap.components.map_report.t21296(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__21343 = portfolio_company;var G__21343__$1 = (((G__21343 == null))?null:cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(G__21343));var G__21343__$2 = (((G__21343__$1 == null))?null:cljs.core.count(G__21343__$1));return G__21343__$2;
})();var const_count = (function (){var G__21344 = portfolio_company;var G__21344__$1 = (((G__21344 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__21344));var G__21344__$2 = (((G__21344__$1 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__21344__$1));var G__21344__$3 = (((G__21344__$2 == null))?null:cljs.core.count(G__21344__$2));return G__21344__$3;
})();if(typeof clustermap.components.map_report.t21345 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21345 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta21346){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21346 = meta21346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21345.cljs$lang$type = true;
clustermap.components.map_report.t21345.cljs$lang$ctorStr = "clustermap.components.map-report/t21345";
clustermap.components.map_report.t21345.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21345");
});
clustermap.components.map_report.t21345.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21345.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21348 = cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21348))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21348),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21348));
}
})()),React.DOM.ul(null,(function (){var attrs21349 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21349))
{return React.DOM.li(sablono.interpreter.attributes(attrs21349),(function (){var attrs21350 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21350))
{return React.DOM.small(sablono.interpreter.attributes(attrs21350),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21350));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21349),(function (){var attrs21351 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21351))
{return React.DOM.small(sablono.interpreter.attributes(attrs21351),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21351));
}
})());
}
})(),(function (){var attrs21352 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21352))
{return React.DOM.li(sablono.interpreter.attributes(attrs21352),(function (){var attrs21353 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21353))
{return React.DOM.small(sablono.interpreter.attributes(attrs21353),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21353));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21352),(function (){var attrs21354 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21354))
{return React.DOM.small(sablono.interpreter.attributes(attrs21354),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21354));
}
})());
}
})(),(function (){var attrs21355 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21365 = self__.portfolio_company;var G__21365__$1 = (((G__21365 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21365));return G__21365__$1;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21365 = self__.portfolio_company;var G__21365__$1 = (((G__21365 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21365));return G__21365__$1;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-"));if(cljs.core.map_QMARK_(attrs21355))
{return React.DOM.li(sablono.interpreter.attributes(attrs21355),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21355),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21360 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21366 = self__.portfolio_company;var G__21366__$1 = (((G__21366 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21366));return G__21366__$1;
})(),cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21366 = self__.portfolio_company;var G__21366__$1 = (((G__21366 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21366));return G__21366__$1;
})(),cljs.core.constant$keyword$184,"-"));if(cljs.core.map_QMARK_(attrs21360))
{return React.DOM.li(sablono.interpreter.attributes(attrs21360),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21360),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t21345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21347){var self__ = this;
var _21347__$1 = this;return self__.meta21346;
});
clustermap.components.map_report.t21345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21347,meta21346__$1){var self__ = this;
var _21347__$1 = this;return (new clustermap.components.map_report.t21345(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta21346__$1));
});
clustermap.components.map_report.__GT_t21345 = (function __GT_t21345(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta21346){return (new clustermap.components.map_report.t21345(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta21346));
});
}
return (new clustermap.components.map_report.t21345(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__21391 = investor_company;var G__21391__$1 = (((G__21391 == null))?null:cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(G__21391));var G__21391__$2 = (((G__21391__$1 == null))?null:cljs.core.count(G__21391__$1));return G__21391__$2;
})();var const_count = (function (){var G__21392 = investor_company;var G__21392__$1 = (((G__21392 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__21392));var G__21392__$2 = (((G__21392__$1 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__21392__$1));var G__21392__$3 = (((G__21392__$2 == null))?null:cljs.core.count(G__21392__$2));return G__21392__$3;
})();if(typeof clustermap.components.map_report.t21393 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21393 = (function (const_count,pc_count,investor_company,investor_company_report,meta21394){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21394 = meta21394;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21393.cljs$lang$type = true;
clustermap.components.map_report.t21393.cljs$lang$ctorStr = "clustermap.components.map-report/t21393";
clustermap.components.map_report.t21393.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21393");
});
clustermap.components.map_report.t21393.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21393.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21396 = cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21396))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21396),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21396));
}
})()),React.DOM.ul(null,(function (){var attrs21397 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21397))
{return React.DOM.li(sablono.interpreter.attributes(attrs21397),(function (){var attrs21398 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21398))
{return React.DOM.small(sablono.interpreter.attributes(attrs21398),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21398));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21397),(function (){var attrs21399 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21399))
{return React.DOM.small(sablono.interpreter.attributes(attrs21399),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21399));
}
})());
}
})(),(function (){var attrs21400 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21400))
{return React.DOM.li(sablono.interpreter.attributes(attrs21400),(function (){var attrs21401 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21401))
{return React.DOM.small(sablono.interpreter.attributes(attrs21401),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21401));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21400),(function (){var attrs21402 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21402))
{return React.DOM.small(sablono.interpreter.attributes(attrs21402),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21402));
}
})());
}
})(),(function (){var attrs21403 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21413 = self__.investor_company;var G__21413__$1 = (((G__21413 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__21413));return G__21413__$1;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21413 = self__.investor_company;var G__21413__$1 = (((G__21413 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__21413));return G__21413__$1;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-"));if(cljs.core.map_QMARK_(attrs21403))
{return React.DOM.li(sablono.interpreter.attributes(attrs21403),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21403),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21408 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21414 = self__.investor_company;var G__21414__$1 = (((G__21414 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__21414));return G__21414__$1;
})(),cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21414 = self__.investor_company;var G__21414__$1 = (((G__21414 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__21414));return G__21414__$1;
})(),cljs.core.constant$keyword$184,"-"));if(cljs.core.map_QMARK_(attrs21408))
{return React.DOM.li(sablono.interpreter.attributes(attrs21408),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21408),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21393.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21395){var self__ = this;
var _21395__$1 = this;return self__.meta21394;
});
clustermap.components.map_report.t21393.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21395,meta21394__$1){var self__ = this;
var _21395__$1 = this;return (new clustermap.components.map_report.t21393(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta21394__$1));
});
clustermap.components.map_report.__GT_t21393 = (function __GT_t21393(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21394){return (new clustermap.components.map_report.t21393(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21394));
});
}
return (new clustermap.components.map_report.t21393(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__21440 = constituency;var G__21440__$1 = (((G__21440 == null))?null:cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(G__21440));var G__21440__$2 = (((G__21440__$1 == null))?null:cljs.core.count(G__21440__$1));return G__21440__$2;
})();var ic_count = (function (){var G__21441 = constituency;var G__21441__$1 = (((G__21441 == null))?null:cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(G__21441));var G__21441__$2 = (((G__21441__$1 == null))?null:cljs.core.count(G__21441__$1));return G__21441__$2;
})();if(typeof clustermap.components.map_report.t21442 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21442 = (function (ic_count,pc_count,constituency,constituency_report,meta21443){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21443 = meta21443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21442.cljs$lang$type = true;
clustermap.components.map_report.t21442.cljs$lang$ctorStr = "clustermap.components.map-report/t21442";
clustermap.components.map_report.t21442.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21442");
});
clustermap.components.map_report.t21442.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21442.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21445 = cljs.core.constant$keyword$229.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21445))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21445),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21445));
}
})(),(function (){var attrs21446 = cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21446))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21446),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21446),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21447 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21447))
{return React.DOM.li(sablono.interpreter.attributes(attrs21447),(function (){var attrs21448 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21448))
{return React.DOM.small(sablono.interpreter.attributes(attrs21448),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21448));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21447),(function (){var attrs21449 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21449))
{return React.DOM.small(sablono.interpreter.attributes(attrs21449),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21449));
}
})());
}
})(),(function (){var attrs21450 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21450))
{return React.DOM.li(sablono.interpreter.attributes(attrs21450),(function (){var attrs21451 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21451))
{return React.DOM.small(sablono.interpreter.attributes(attrs21451),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21451));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21450),(function (){var attrs21452 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21452))
{return React.DOM.small(sablono.interpreter.attributes(attrs21452),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21452));
}
})());
}
})(),(function (){var attrs21453 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21463 = self__.constituency;var G__21463__$1 = (((G__21463 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__21463));return G__21463__$1;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21463 = self__.constituency;var G__21463__$1 = (((G__21463 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__21463));return G__21463__$1;
})(),cljs.core.constant$keyword$249,2,cljs.core.constant$keyword$184,"-"));if(cljs.core.map_QMARK_(attrs21453))
{return React.DOM.li(sablono.interpreter.attributes(attrs21453),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21453),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21458 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21464 = self__.constituency;var G__21464__$1 = (((G__21464 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__21464));return G__21464__$1;
})(),cljs.core.constant$keyword$184,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21464 = self__.constituency;var G__21464__$1 = (((G__21464 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__21464));return G__21464__$1;
})(),cljs.core.constant$keyword$184,"-"));if(cljs.core.map_QMARK_(attrs21458))
{return React.DOM.li(sablono.interpreter.attributes(attrs21458),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21458),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21444){var self__ = this;
var _21444__$1 = this;return self__.meta21443;
});
clustermap.components.map_report.t21442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21444,meta21443__$1){var self__ = this;
var _21444__$1 = this;return (new clustermap.components.map_report.t21442(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta21443__$1));
});
clustermap.components.map_report.__GT_t21442 = (function __GT_t21442(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21443){return (new clustermap.components.map_report.t21442(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21443));
});
}
return (new clustermap.components.map_report.t21442(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,cljs.core.constant$keyword$218], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$256,cljs.core.constant$keyword$188], null));var pred__21468 = cljs.core._EQ__EQ_;var expr__21469 = type;if(cljs.core.truth_((pred__21468.cljs$core$IFn$_invoke$arity$2 ? pred__21468.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$253,expr__21469) : pred__21468.call(null,cljs.core.constant$keyword$253,expr__21469))))
{return clustermap.components.map_report.portfolio_company_report(value);
} else
{if(cljs.core.truth_((pred__21468.cljs$core$IFn$_invoke$arity$2 ? pred__21468.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$254,expr__21469) : pred__21468.call(null,cljs.core.constant$keyword$254,expr__21469))))
{return clustermap.components.map_report.investor_company_report(value);
} else
{if(cljs.core.truth_((pred__21468.cljs$core$IFn$_invoke$arity$2 ? pred__21468.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$255,expr__21469) : pred__21468.call(null,cljs.core.constant$keyword$255,expr__21469))))
{return clustermap.components.map_report.constituency_report(value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$261.cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
