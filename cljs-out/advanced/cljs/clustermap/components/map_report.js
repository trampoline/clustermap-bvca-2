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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21667 = apc_stats;var G__21667__$1 = (((G__21667 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21667));return G__21667__$1;
})();var ic_count = (function (){var G__21668 = apc_stats;var G__21668__$1 = (((G__21668 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21668));return G__21668__$1;
})();if(typeof clustermap.components.map_report.t21669 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21669 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21670){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21670 = meta21670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21669.cljs$lang$type = true;
clustermap.components.map_report.t21669.cljs$lang$ctorStr = "clustermap.components.map-report/t21669";
clustermap.components.map_report.t21669.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21669");
});
clustermap.components.map_report.t21669.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21669.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21674 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21674))
{return React.DOM.li(sablono.interpreter.attributes(attrs21674),(function (){var attrs21675 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21675))
{return React.DOM.small(sablono.interpreter.attributes(attrs21675),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21675));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21674),(function (){var attrs21676 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21676))
{return React.DOM.small(sablono.interpreter.attributes(attrs21676),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21676));
}
})());
}
})(),(function (){var attrs21677 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21677))
{return React.DOM.li(sablono.interpreter.attributes(attrs21677),(function (){var attrs21678 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21678))
{return React.DOM.small(sablono.interpreter.attributes(attrs21678),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21678));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21677),(function (){var attrs21679 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21679))
{return React.DOM.small(sablono.interpreter.attributes(attrs21679),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21679));
}
})());
}
})(),(function (){var attrs21680 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21690 = self__.apc_stats;var G__21690__$1 = (((G__21690 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21690));var G__21690__$2 = (((G__21690__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21690__$1));return G__21690__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21690 = self__.apc_stats;var G__21690__$1 = (((G__21690 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21690));var G__21690__$2 = (((G__21690__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21690__$1));return G__21690__$2;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21680))
{return React.DOM.li(sablono.interpreter.attributes(attrs21680),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21680),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21685 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21691 = self__.apc_stats;var G__21691__$1 = (((G__21691 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21691));var G__21691__$2 = (((G__21691__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21691__$1));return G__21691__$2;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21691 = self__.apc_stats;var G__21691__$1 = (((G__21691 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21691));var G__21691__$2 = (((G__21691__$1 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21691__$1));return G__21691__$2;
})(),cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21685))
{return React.DOM.li(sablono.interpreter.attributes(attrs21685),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21685),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21671){var self__ = this;
var _21671__$1 = this;return self__.meta21670;
});
clustermap.components.map_report.t21669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21671,meta21670__$1){var self__ = this;
var _21671__$1 = this;return (new clustermap.components.map_report.t21669(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21670__$1));
});
clustermap.components.map_report.__GT_t21669 = (function __GT_t21669(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21670){return (new clustermap.components.map_report.t21669(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21670));
});
}
return (new clustermap.components.map_report.t21669(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21716 = portfolio_company;var G__21716__$1 = (((G__21716 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__21716));var G__21716__$2 = (((G__21716__$1 == null))?null:cljs.core.count(G__21716__$1));return G__21716__$2;
})();var const_count = (function (){var G__21717 = portfolio_company;var G__21717__$1 = (((G__21717 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__21717));var G__21717__$2 = (((G__21717__$1 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__21717__$1));var G__21717__$3 = (((G__21717__$2 == null))?null:cljs.core.count(G__21717__$2));return G__21717__$3;
})();if(typeof clustermap.components.map_report.t21718 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21718 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta21719){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21719 = meta21719;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21718.cljs$lang$type = true;
clustermap.components.map_report.t21718.cljs$lang$ctorStr = "clustermap.components.map-report/t21718";
clustermap.components.map_report.t21718.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21718");
});
clustermap.components.map_report.t21718.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21718.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21721 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21721))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21721),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21721));
}
})()),React.DOM.ul(null,(function (){var attrs21722 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21722))
{return React.DOM.li(sablono.interpreter.attributes(attrs21722),(function (){var attrs21723 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21723))
{return React.DOM.small(sablono.interpreter.attributes(attrs21723),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21723));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21722),(function (){var attrs21724 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21724))
{return React.DOM.small(sablono.interpreter.attributes(attrs21724),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21724));
}
})());
}
})(),(function (){var attrs21725 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21725))
{return React.DOM.li(sablono.interpreter.attributes(attrs21725),(function (){var attrs21726 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21726))
{return React.DOM.small(sablono.interpreter.attributes(attrs21726),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21726));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21725),(function (){var attrs21727 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21727))
{return React.DOM.small(sablono.interpreter.attributes(attrs21727),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21727));
}
})());
}
})(),(function (){var attrs21728 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21738 = self__.portfolio_company;var G__21738__$1 = (((G__21738 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21738));return G__21738__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21738 = self__.portfolio_company;var G__21738__$1 = (((G__21738 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21738));return G__21738__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21728))
{return React.DOM.li(sablono.interpreter.attributes(attrs21728),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21728),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21733 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21739 = self__.portfolio_company;var G__21739__$1 = (((G__21739 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21739));return G__21739__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21739 = self__.portfolio_company;var G__21739__$1 = (((G__21739 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21739));return G__21739__$1;
})(),cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21733))
{return React.DOM.li(sablono.interpreter.attributes(attrs21733),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21733),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21720){var self__ = this;
var _21720__$1 = this;return self__.meta21719;
});
clustermap.components.map_report.t21718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21720,meta21719__$1){var self__ = this;
var _21720__$1 = this;return (new clustermap.components.map_report.t21718(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta21719__$1));
});
clustermap.components.map_report.__GT_t21718 = (function __GT_t21718(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21719){return (new clustermap.components.map_report.t21718(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21719));
});
}
return (new clustermap.components.map_report.t21718(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__21764 = investor_company;var G__21764__$1 = (((G__21764 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__21764));var G__21764__$2 = (((G__21764__$1 == null))?null:cljs.core.count(G__21764__$1));return G__21764__$2;
})();var const_count = (function (){var G__21765 = investor_company;var G__21765__$1 = (((G__21765 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__21765));var G__21765__$2 = (((G__21765__$1 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__21765__$1));var G__21765__$3 = (((G__21765__$2 == null))?null:cljs.core.count(G__21765__$2));return G__21765__$3;
})();if(typeof clustermap.components.map_report.t21766 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21766 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta21767){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21767 = meta21767;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21766.cljs$lang$type = true;
clustermap.components.map_report.t21766.cljs$lang$ctorStr = "clustermap.components.map-report/t21766";
clustermap.components.map_report.t21766.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21766");
});
clustermap.components.map_report.t21766.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21766.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21769 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21769))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21769),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21769));
}
})()),React.DOM.ul(null,(function (){var attrs21770 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21770))
{return React.DOM.li(sablono.interpreter.attributes(attrs21770),(function (){var attrs21771 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21771))
{return React.DOM.small(sablono.interpreter.attributes(attrs21771),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21771));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21770),(function (){var attrs21772 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21772))
{return React.DOM.small(sablono.interpreter.attributes(attrs21772),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21772));
}
})());
}
})(),(function (){var attrs21773 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21773))
{return React.DOM.li(sablono.interpreter.attributes(attrs21773),(function (){var attrs21774 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21774))
{return React.DOM.small(sablono.interpreter.attributes(attrs21774),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21774));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21773),(function (){var attrs21775 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21775))
{return React.DOM.small(sablono.interpreter.attributes(attrs21775),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21775));
}
})());
}
})(),(function (){var attrs21776 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21786 = self__.investor_company;var G__21786__$1 = (((G__21786 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__21786));return G__21786__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21786 = self__.investor_company;var G__21786__$1 = (((G__21786 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__21786));return G__21786__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21776))
{return React.DOM.li(sablono.interpreter.attributes(attrs21776),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21776),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21781 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21787 = self__.investor_company;var G__21787__$1 = (((G__21787 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__21787));return G__21787__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21787 = self__.investor_company;var G__21787__$1 = (((G__21787 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__21787));return G__21787__$1;
})(),cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21781))
{return React.DOM.li(sablono.interpreter.attributes(attrs21781),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21781),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21768){var self__ = this;
var _21768__$1 = this;return self__.meta21767;
});
clustermap.components.map_report.t21766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21768,meta21767__$1){var self__ = this;
var _21768__$1 = this;return (new clustermap.components.map_report.t21766(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta21767__$1));
});
clustermap.components.map_report.__GT_t21766 = (function __GT_t21766(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21767){return (new clustermap.components.map_report.t21766(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21767));
});
}
return (new clustermap.components.map_report.t21766(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__21813 = constituency;var G__21813__$1 = (((G__21813 == null))?null:cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(G__21813));var G__21813__$2 = (((G__21813__$1 == null))?null:cljs.core.count(G__21813__$1));return G__21813__$2;
})();var ic_count = (function (){var G__21814 = constituency;var G__21814__$1 = (((G__21814 == null))?null:cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(G__21814));var G__21814__$2 = (((G__21814__$1 == null))?null:cljs.core.count(G__21814__$1));return G__21814__$2;
})();if(typeof clustermap.components.map_report.t21815 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21815 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta21816){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21816 = meta21816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21815.cljs$lang$type = true;
clustermap.components.map_report.t21815.cljs$lang$ctorStr = "clustermap.components.map-report/t21815";
clustermap.components.map_report.t21815.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21815");
});
clustermap.components.map_report.t21815.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21815.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21818 = cljs.core.constant$keyword$235.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21818))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21818),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21818));
}
})(),(function (){var attrs21819 = cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21819))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21819),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21819),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21820 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21820))
{return React.DOM.li(sablono.interpreter.attributes(attrs21820),(function (){var attrs21821 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21821))
{return React.DOM.small(sablono.interpreter.attributes(attrs21821),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21821));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21820),(function (){var attrs21822 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21822))
{return React.DOM.small(sablono.interpreter.attributes(attrs21822),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21822));
}
})());
}
})(),(function (){var attrs21823 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21823))
{return React.DOM.li(sablono.interpreter.attributes(attrs21823),(function (){var attrs21824 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21824))
{return React.DOM.small(sablono.interpreter.attributes(attrs21824),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21824));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21823),(function (){var attrs21825 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21825))
{return React.DOM.small(sablono.interpreter.attributes(attrs21825),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21825));
}
})());
}
})(),(function (){var attrs21826 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21836 = self__.constituency;var G__21836__$1 = (((G__21836 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__21836));return G__21836__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21836 = self__.constituency;var G__21836__$1 = (((G__21836 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__21836));return G__21836__$1;
})(),cljs.core.constant$keyword$255,2,cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21826))
{return React.DOM.li(sablono.interpreter.attributes(attrs21826),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21826),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21831 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21837 = self__.constituency;var G__21837__$1 = (((G__21837 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__21837));return G__21837__$1;
})(),cljs.core.constant$keyword$190,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21837 = self__.constituency;var G__21837__$1 = (((G__21837 == null))?null:cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(G__21837));return G__21837__$1;
})(),cljs.core.constant$keyword$190,"-"));if(cljs.core.map_QMARK_(attrs21831))
{return React.DOM.li(sablono.interpreter.attributes(attrs21831),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21831),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21815.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21817){var self__ = this;
var _21817__$1 = this;return self__.meta21816;
});
clustermap.components.map_report.t21815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21817,meta21816__$1){var self__ = this;
var _21817__$1 = this;return (new clustermap.components.map_report.t21815(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta21816__$1));
});
clustermap.components.map_report.__GT_t21815 = (function __GT_t21815(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21816){return (new clustermap.components.map_report.t21815(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21816));
});
}
return (new clustermap.components.map_report.t21815(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$262);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,cljs.core.constant$keyword$224], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$264,cljs.core.constant$keyword$194], null));var pred__21841 = cljs.core._EQ__EQ_;var expr__21842 = type;if(cljs.core.truth_((pred__21841.cljs$core$IFn$_invoke$arity$2 ? pred__21841.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21842) : pred__21841.call(null,cljs.core.constant$keyword$259,expr__21842))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21841.cljs$core$IFn$_invoke$arity$2 ? pred__21841.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$260,expr__21842) : pred__21841.call(null,cljs.core.constant$keyword$260,expr__21842))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21841.cljs$core$IFn$_invoke$arity$2 ? pred__21841.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$261,expr__21842) : pred__21841.call(null,cljs.core.constant$keyword$261,expr__21842))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$262,comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
