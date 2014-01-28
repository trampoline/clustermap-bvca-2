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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__21150 = apc_stats;var G__21150__$1 = (((G__21150 == null))?null:cljs.core.constant$keyword$266.cljs$core$IFn$_invoke$arity$1(G__21150));return G__21150__$1;
})();var ic_count = (function (){var G__21151 = apc_stats;var G__21151__$1 = (((G__21151 == null))?null:cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(G__21151));return G__21151__$1;
})();if(typeof clustermap.components.map_report.t21152 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21152 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta21153){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21153 = meta21153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21152.cljs$lang$type = true;
clustermap.components.map_report.t21152.cljs$lang$ctorStr = "clustermap.components.map-report/t21152";
clustermap.components.map_report.t21152.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21152");
});
clustermap.components.map_report.t21152.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21152.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21157 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$183,"-"));if(cljs.core.map_QMARK_(attrs21157))
{return React.DOM.li(sablono.interpreter.attributes(attrs21157),(function (){var attrs21158 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21158))
{return React.DOM.small(sablono.interpreter.attributes(attrs21158),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21158));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21157),(function (){var attrs21159 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21159))
{return React.DOM.small(sablono.interpreter.attributes(attrs21159),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21159));
}
})());
}
})(),(function (){var attrs21160 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$183,"-"));if(cljs.core.map_QMARK_(attrs21160))
{return React.DOM.li(sablono.interpreter.attributes(attrs21160),(function (){var attrs21161 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21161))
{return React.DOM.small(sablono.interpreter.attributes(attrs21161),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21161));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21160),(function (){var attrs21162 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21162))
{return React.DOM.small(sablono.interpreter.attributes(attrs21162),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21162));
}
})());
}
})(),(function (){var attrs21163 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21173 = self__.apc_stats;var G__21173__$1 = (((G__21173 == null))?null:cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(G__21173));var G__21173__$2 = (((G__21173__$1 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21173__$1));return G__21173__$2;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21173 = self__.apc_stats;var G__21173__$1 = (((G__21173 == null))?null:cljs.core.constant$keyword$264.cljs$core$IFn$_invoke$arity$1(G__21173));var G__21173__$2 = (((G__21173__$1 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21173__$1));return G__21173__$2;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-"));if(cljs.core.map_QMARK_(attrs21163))
{return React.DOM.li(sablono.interpreter.attributes(attrs21163),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21163),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21168 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21174 = self__.apc_stats;var G__21174__$1 = (((G__21174 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21174));var G__21174__$2 = (((G__21174__$1 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21174__$1));return G__21174__$2;
})(),cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21174 = self__.apc_stats;var G__21174__$1 = (((G__21174 == null))?null:cljs.core.constant$keyword$270.cljs$core$IFn$_invoke$arity$1(G__21174));var G__21174__$2 = (((G__21174__$1 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21174__$1));return G__21174__$2;
})(),cljs.core.constant$keyword$183,"-"));if(cljs.core.map_QMARK_(attrs21168))
{return React.DOM.li(sablono.interpreter.attributes(attrs21168),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21168),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21154){var self__ = this;
var _21154__$1 = this;return self__.meta21153;
});
clustermap.components.map_report.t21152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21154,meta21153__$1){var self__ = this;
var _21154__$1 = this;return (new clustermap.components.map_report.t21152(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21153__$1));
});
clustermap.components.map_report.__GT_t21152 = (function __GT_t21152(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21153){return (new clustermap.components.map_report.t21152(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21153));
});
}
return (new clustermap.components.map_report.t21152(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__21199 = portfolio_company;var G__21199__$1 = (((G__21199 == null))?null:cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(G__21199));var G__21199__$2 = (((G__21199__$1 == null))?null:cljs.core.count(G__21199__$1));return G__21199__$2;
})();var const_count = (function (){var G__21200 = portfolio_company;var G__21200__$1 = (((G__21200 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__21200));var G__21200__$2 = (((G__21200__$1 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__21200__$1));var G__21200__$3 = (((G__21200__$2 == null))?null:cljs.core.count(G__21200__$2));return G__21200__$3;
})();if(typeof clustermap.components.map_report.t21201 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21201 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta21202){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21202 = meta21202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21201.cljs$lang$type = true;
clustermap.components.map_report.t21201.cljs$lang$ctorStr = "clustermap.components.map-report/t21201";
clustermap.components.map_report.t21201.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21201");
});
clustermap.components.map_report.t21201.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21201.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21204 = cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21204))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21204),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21204));
}
})()),React.DOM.ul(null,(function (){var attrs21205 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21205))
{return React.DOM.li(sablono.interpreter.attributes(attrs21205),(function (){var attrs21206 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21206))
{return React.DOM.small(sablono.interpreter.attributes(attrs21206),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21206));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21205),(function (){var attrs21207 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21207))
{return React.DOM.small(sablono.interpreter.attributes(attrs21207),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21207));
}
})());
}
})(),(function (){var attrs21208 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21208))
{return React.DOM.li(sablono.interpreter.attributes(attrs21208),(function (){var attrs21209 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21209))
{return React.DOM.small(sablono.interpreter.attributes(attrs21209),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21209));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21208),(function (){var attrs21210 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21210))
{return React.DOM.small(sablono.interpreter.attributes(attrs21210),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21210));
}
})());
}
})(),(function (){var attrs21211 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21221 = self__.portfolio_company;var G__21221__$1 = (((G__21221 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21221));return G__21221__$1;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21221 = self__.portfolio_company;var G__21221__$1 = (((G__21221 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21221));return G__21221__$1;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-"));if(cljs.core.map_QMARK_(attrs21211))
{return React.DOM.li(sablono.interpreter.attributes(attrs21211),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21211),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21216 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21222 = self__.portfolio_company;var G__21222__$1 = (((G__21222 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21222));return G__21222__$1;
})(),cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21222 = self__.portfolio_company;var G__21222__$1 = (((G__21222 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21222));return G__21222__$1;
})(),cljs.core.constant$keyword$183,"-"));if(cljs.core.map_QMARK_(attrs21216))
{return React.DOM.li(sablono.interpreter.attributes(attrs21216),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21216),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t21201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21203){var self__ = this;
var _21203__$1 = this;return self__.meta21202;
});
clustermap.components.map_report.t21201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21203,meta21202__$1){var self__ = this;
var _21203__$1 = this;return (new clustermap.components.map_report.t21201(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta21202__$1));
});
clustermap.components.map_report.__GT_t21201 = (function __GT_t21201(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta21202){return (new clustermap.components.map_report.t21201(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta21202));
});
}
return (new clustermap.components.map_report.t21201(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__21247 = investor_company;var G__21247__$1 = (((G__21247 == null))?null:cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(G__21247));var G__21247__$2 = (((G__21247__$1 == null))?null:cljs.core.count(G__21247__$1));return G__21247__$2;
})();var const_count = (function (){var G__21248 = investor_company;var G__21248__$1 = (((G__21248 == null))?null:cljs.core.constant$keyword$320.cljs$core$IFn$_invoke$arity$1(G__21248));var G__21248__$2 = (((G__21248__$1 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__21248__$1));var G__21248__$3 = (((G__21248__$2 == null))?null:cljs.core.count(G__21248__$2));return G__21248__$3;
})();if(typeof clustermap.components.map_report.t21249 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21249 = (function (const_count,pc_count,investor_company,investor_company_report,meta21250){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21250 = meta21250;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21249.cljs$lang$type = true;
clustermap.components.map_report.t21249.cljs$lang$ctorStr = "clustermap.components.map-report/t21249";
clustermap.components.map_report.t21249.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21249");
});
clustermap.components.map_report.t21249.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21249.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21252 = cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21252))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21252),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21252));
}
})()),React.DOM.ul(null,(function (){var attrs21253 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21253))
{return React.DOM.li(sablono.interpreter.attributes(attrs21253),(function (){var attrs21254 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21254))
{return React.DOM.small(sablono.interpreter.attributes(attrs21254),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21254));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21253),(function (){var attrs21255 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21255))
{return React.DOM.small(sablono.interpreter.attributes(attrs21255),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21255));
}
})());
}
})(),(function (){var attrs21256 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21256))
{return React.DOM.li(sablono.interpreter.attributes(attrs21256),(function (){var attrs21257 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21257))
{return React.DOM.small(sablono.interpreter.attributes(attrs21257),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21257));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21256),(function (){var attrs21258 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21258))
{return React.DOM.small(sablono.interpreter.attributes(attrs21258),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21258));
}
})());
}
})(),(function (){var attrs21259 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21269 = self__.investor_company;var G__21269__$1 = (((G__21269 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__21269));return G__21269__$1;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21269 = self__.investor_company;var G__21269__$1 = (((G__21269 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__21269));return G__21269__$1;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-"));if(cljs.core.map_QMARK_(attrs21259))
{return React.DOM.li(sablono.interpreter.attributes(attrs21259),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21259),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21264 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21270 = self__.investor_company;var G__21270__$1 = (((G__21270 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__21270));return G__21270__$1;
})(),cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21270 = self__.investor_company;var G__21270__$1 = (((G__21270 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__21270));return G__21270__$1;
})(),cljs.core.constant$keyword$183,"-"));if(cljs.core.map_QMARK_(attrs21264))
{return React.DOM.li(sablono.interpreter.attributes(attrs21264),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21264),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21251){var self__ = this;
var _21251__$1 = this;return self__.meta21250;
});
clustermap.components.map_report.t21249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21251,meta21250__$1){var self__ = this;
var _21251__$1 = this;return (new clustermap.components.map_report.t21249(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta21250__$1));
});
clustermap.components.map_report.__GT_t21249 = (function __GT_t21249(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21250){return (new clustermap.components.map_report.t21249(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21250));
});
}
return (new clustermap.components.map_report.t21249(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__21296 = constituency;var G__21296__$1 = (((G__21296 == null))?null:cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(G__21296));var G__21296__$2 = (((G__21296__$1 == null))?null:cljs.core.count(G__21296__$1));return G__21296__$2;
})();var ic_count = (function (){var G__21297 = constituency;var G__21297__$1 = (((G__21297 == null))?null:cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(G__21297));var G__21297__$2 = (((G__21297__$1 == null))?null:cljs.core.count(G__21297__$1));return G__21297__$2;
})();if(typeof clustermap.components.map_report.t21298 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21298 = (function (ic_count,pc_count,constituency,constituency_report,meta21299){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21299 = meta21299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21298.cljs$lang$type = true;
clustermap.components.map_report.t21298.cljs$lang$ctorStr = "clustermap.components.map-report/t21298";
clustermap.components.map_report.t21298.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21298");
});
clustermap.components.map_report.t21298.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21298.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21301 = cljs.core.constant$keyword$228.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21301))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21301),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21301));
}
})(),(function (){var attrs21302 = cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21302))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21302),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21302),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21303 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21303))
{return React.DOM.li(sablono.interpreter.attributes(attrs21303),(function (){var attrs21304 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21304))
{return React.DOM.small(sablono.interpreter.attributes(attrs21304),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21304));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21303),(function (){var attrs21305 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21305))
{return React.DOM.small(sablono.interpreter.attributes(attrs21305),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21305));
}
})());
}
})(),(function (){var attrs21306 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21306))
{return React.DOM.li(sablono.interpreter.attributes(attrs21306),(function (){var attrs21307 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21307))
{return React.DOM.small(sablono.interpreter.attributes(attrs21307),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21307));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21306),(function (){var attrs21308 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21308))
{return React.DOM.small(sablono.interpreter.attributes(attrs21308),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21308));
}
})());
}
})(),(function (){var attrs21309 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21319 = self__.constituency;var G__21319__$1 = (((G__21319 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__21319));return G__21319__$1;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21319 = self__.constituency;var G__21319__$1 = (((G__21319 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__21319));return G__21319__$1;
})(),cljs.core.constant$keyword$248,2,cljs.core.constant$keyword$183,"-"));if(cljs.core.map_QMARK_(attrs21309))
{return React.DOM.li(sablono.interpreter.attributes(attrs21309),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21309),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21314 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21320 = self__.constituency;var G__21320__$1 = (((G__21320 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__21320));return G__21320__$1;
})(),cljs.core.constant$keyword$183,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21320 = self__.constituency;var G__21320__$1 = (((G__21320 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__21320));return G__21320__$1;
})(),cljs.core.constant$keyword$183,"-"));if(cljs.core.map_QMARK_(attrs21314))
{return React.DOM.li(sablono.interpreter.attributes(attrs21314),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21314),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21300){var self__ = this;
var _21300__$1 = this;return self__.meta21299;
});
clustermap.components.map_report.t21298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21300,meta21299__$1){var self__ = this;
var _21300__$1 = this;return (new clustermap.components.map_report.t21298(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta21299__$1));
});
clustermap.components.map_report.__GT_t21298 = (function __GT_t21298(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21299){return (new clustermap.components.map_report.t21298(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21299));
});
}
return (new clustermap.components.map_report.t21298(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,cljs.core.constant$keyword$217], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$255,cljs.core.constant$keyword$187], null));var pred__21324 = cljs.core._EQ__EQ_;var expr__21325 = type;if(cljs.core.truth_((pred__21324.cljs$core$IFn$_invoke$arity$2 ? pred__21324.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$252,expr__21325) : pred__21324.call(null,cljs.core.constant$keyword$252,expr__21325))))
{return clustermap.components.map_report.portfolio_company_report(value);
} else
{if(cljs.core.truth_((pred__21324.cljs$core$IFn$_invoke$arity$2 ? pred__21324.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$253,expr__21325) : pred__21324.call(null,cljs.core.constant$keyword$253,expr__21325))))
{return clustermap.components.map_report.investor_company_report(value);
} else
{if(cljs.core.truth_((pred__21324.cljs$core$IFn$_invoke$arity$2 ? pred__21324.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$254,expr__21325) : pred__21324.call(null,cljs.core.constant$keyword$254,expr__21325))))
{return clustermap.components.map_report.constituency_report(value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$260.cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
