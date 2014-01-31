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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$267,"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21641 = apc_stats;var G__21641__$1 = (((G__21641 == null))?null:cljs.core.constant$keyword$279.cljs$core$IFn$_invoke$arity$1(G__21641));return G__21641__$1;
})();var ic_count = (function (){var G__21642 = apc_stats;var G__21642__$1 = (((G__21642 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21642));return G__21642__$1;
})();if(typeof clustermap.components.map_report.t21643 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21643 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21644){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21644 = meta21644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21643.cljs$lang$type = true;
clustermap.components.map_report.t21643.cljs$lang$ctorStr = "clustermap.components.map-report/t21643";
clustermap.components.map_report.t21643.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21643");
});
clustermap.components.map_report.t21643.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21643.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21648 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$194,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$194,"-"));if(cljs.core.map_QMARK_(attrs21648))
{return React.DOM.li(sablono.interpreter.attributes(attrs21648),(function (){var attrs21649 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21649))
{return React.DOM.small(sablono.interpreter.attributes(attrs21649),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21649));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21648),(function (){var attrs21650 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21650))
{return React.DOM.small(sablono.interpreter.attributes(attrs21650),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21650));
}
})());
}
})(),(function (){var attrs21651 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$194,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$194,"-"));if(cljs.core.map_QMARK_(attrs21651))
{return React.DOM.li(sablono.interpreter.attributes(attrs21651),(function (){var attrs21652 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21652))
{return React.DOM.small(sablono.interpreter.attributes(attrs21652),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21652));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21651),(function (){var attrs21653 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21653))
{return React.DOM.small(sablono.interpreter.attributes(attrs21653),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21653));
}
})());
}
})(),(function (){var attrs21654 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21664 = self__.apc_stats;var G__21664__$1 = (((G__21664 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21664));var G__21664__$2 = (((G__21664__$1 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21664__$1));return G__21664__$2;
})(),cljs.core.constant$keyword$259,2,cljs.core.constant$keyword$194,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21664 = self__.apc_stats;var G__21664__$1 = (((G__21664 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21664));var G__21664__$2 = (((G__21664__$1 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21664__$1));return G__21664__$2;
})(),cljs.core.constant$keyword$259,2,cljs.core.constant$keyword$194,"-"));if(cljs.core.map_QMARK_(attrs21654))
{return React.DOM.li(sablono.interpreter.attributes(attrs21654),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21654),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21659 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21665 = self__.apc_stats;var G__21665__$1 = (((G__21665 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21665));var G__21665__$2 = (((G__21665__$1 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21665__$1));return G__21665__$2;
})(),cljs.core.constant$keyword$194,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21665 = self__.apc_stats;var G__21665__$1 = (((G__21665 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21665));var G__21665__$2 = (((G__21665__$1 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21665__$1));return G__21665__$2;
})(),cljs.core.constant$keyword$194,"-"));if(cljs.core.map_QMARK_(attrs21659))
{return React.DOM.li(sablono.interpreter.attributes(attrs21659),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21659),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21645){var self__ = this;
var _21645__$1 = this;return self__.meta21644;
});
clustermap.components.map_report.t21643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21645,meta21644__$1){var self__ = this;
var _21645__$1 = this;return (new clustermap.components.map_report.t21643(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21644__$1));
});
clustermap.components.map_report.__GT_t21643 = (function __GT_t21643(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21644){return (new clustermap.components.map_report.t21643(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21644));
});
}
return (new clustermap.components.map_report.t21643(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21690 = portfolio_company;var G__21690__$1 = (((G__21690 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__21690));var G__21690__$2 = (((G__21690__$1 == null))?null:cljs.core.count(G__21690__$1));return G__21690__$2;
})();var const_count = (function (){var G__21691 = portfolio_company;var G__21691__$1 = (((G__21691 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__21691));var G__21691__$2 = (((G__21691__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__21691__$1));var G__21691__$3 = (((G__21691__$2 == null))?null:cljs.core.count(G__21691__$2));return G__21691__$3;
})();if(typeof clustermap.components.map_report.t21692 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21692 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta21693){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21693 = meta21693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21692.cljs$lang$type = true;
clustermap.components.map_report.t21692.cljs$lang$ctorStr = "clustermap.components.map-report/t21692";
clustermap.components.map_report.t21692.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21692");
});
clustermap.components.map_report.t21692.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21692.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21695 = cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21695))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21695),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21695));
}
})()),React.DOM.ul(null,(function (){var attrs21696 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21696))
{return React.DOM.li(sablono.interpreter.attributes(attrs21696),(function (){var attrs21697 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21697))
{return React.DOM.small(sablono.interpreter.attributes(attrs21697),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21697));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21696),(function (){var attrs21698 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21698))
{return React.DOM.small(sablono.interpreter.attributes(attrs21698),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21698));
}
})());
}
})(),(function (){var attrs21699 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21699))
{return React.DOM.li(sablono.interpreter.attributes(attrs21699),(function (){var attrs21700 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21700))
{return React.DOM.small(sablono.interpreter.attributes(attrs21700),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21700));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21699),(function (){var attrs21701 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21701))
{return React.DOM.small(sablono.interpreter.attributes(attrs21701),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21701));
}
})());
}
})(),(function (){var attrs21702 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21712 = self__.portfolio_company;var G__21712__$1 = (((G__21712 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__21712));return G__21712__$1;
})(),cljs.core.constant$keyword$259,2,cljs.core.constant$keyword$194,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21712 = self__.portfolio_company;var G__21712__$1 = (((G__21712 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__21712));return G__21712__$1;
})(),cljs.core.constant$keyword$259,2,cljs.core.constant$keyword$194,"-"));if(cljs.core.map_QMARK_(attrs21702))
{return React.DOM.li(sablono.interpreter.attributes(attrs21702),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21702),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21707 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21713 = self__.portfolio_company;var G__21713__$1 = (((G__21713 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21713));return G__21713__$1;
})(),cljs.core.constant$keyword$194,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21713 = self__.portfolio_company;var G__21713__$1 = (((G__21713 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21713));return G__21713__$1;
})(),cljs.core.constant$keyword$194,"-"));if(cljs.core.map_QMARK_(attrs21707))
{return React.DOM.li(sablono.interpreter.attributes(attrs21707),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21707),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21694){var self__ = this;
var _21694__$1 = this;return self__.meta21693;
});
clustermap.components.map_report.t21692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21694,meta21693__$1){var self__ = this;
var _21694__$1 = this;return (new clustermap.components.map_report.t21692(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta21693__$1));
});
clustermap.components.map_report.__GT_t21692 = (function __GT_t21692(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21693){return (new clustermap.components.map_report.t21692(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21693));
});
}
return (new clustermap.components.map_report.t21692(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__21738 = investor_company;var G__21738__$1 = (((G__21738 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__21738));var G__21738__$2 = (((G__21738__$1 == null))?null:cljs.core.count(G__21738__$1));return G__21738__$2;
})();var const_count = (function (){var G__21739 = investor_company;var G__21739__$1 = (((G__21739 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__21739));var G__21739__$2 = (((G__21739__$1 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__21739__$1));var G__21739__$3 = (((G__21739__$2 == null))?null:cljs.core.count(G__21739__$2));return G__21739__$3;
})();if(typeof clustermap.components.map_report.t21740 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21740 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta21741){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21741 = meta21741;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21740.cljs$lang$type = true;
clustermap.components.map_report.t21740.cljs$lang$ctorStr = "clustermap.components.map-report/t21740";
clustermap.components.map_report.t21740.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21740");
});
clustermap.components.map_report.t21740.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21740.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21743 = cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21743))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21743),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21743));
}
})()),React.DOM.ul(null,(function (){var attrs21744 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21744))
{return React.DOM.li(sablono.interpreter.attributes(attrs21744),(function (){var attrs21745 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21745))
{return React.DOM.small(sablono.interpreter.attributes(attrs21745),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21745));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21744),(function (){var attrs21746 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21746))
{return React.DOM.small(sablono.interpreter.attributes(attrs21746),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21746));
}
})());
}
})(),(function (){var attrs21747 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21747))
{return React.DOM.li(sablono.interpreter.attributes(attrs21747),(function (){var attrs21748 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21748))
{return React.DOM.small(sablono.interpreter.attributes(attrs21748),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21748));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21747),(function (){var attrs21749 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21749))
{return React.DOM.small(sablono.interpreter.attributes(attrs21749),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21749));
}
})());
}
})(),(function (){var attrs21750 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21760 = self__.investor_company;var G__21760__$1 = (((G__21760 == null))?null:cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(G__21760));return G__21760__$1;
})(),cljs.core.constant$keyword$259,2,cljs.core.constant$keyword$194,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21760 = self__.investor_company;var G__21760__$1 = (((G__21760 == null))?null:cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(G__21760));return G__21760__$1;
})(),cljs.core.constant$keyword$259,2,cljs.core.constant$keyword$194,"-"));if(cljs.core.map_QMARK_(attrs21750))
{return React.DOM.li(sablono.interpreter.attributes(attrs21750),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21750),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21755 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21761 = self__.investor_company;var G__21761__$1 = (((G__21761 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__21761));return G__21761__$1;
})(),cljs.core.constant$keyword$194,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21761 = self__.investor_company;var G__21761__$1 = (((G__21761 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__21761));return G__21761__$1;
})(),cljs.core.constant$keyword$194,"-"));if(cljs.core.map_QMARK_(attrs21755))
{return React.DOM.li(sablono.interpreter.attributes(attrs21755),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21755),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21742){var self__ = this;
var _21742__$1 = this;return self__.meta21741;
});
clustermap.components.map_report.t21740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21742,meta21741__$1){var self__ = this;
var _21742__$1 = this;return (new clustermap.components.map_report.t21740(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta21741__$1));
});
clustermap.components.map_report.__GT_t21740 = (function __GT_t21740(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21741){return (new clustermap.components.map_report.t21740(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21741));
});
}
return (new clustermap.components.map_report.t21740(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__21787 = constituency;var G__21787__$1 = (((G__21787 == null))?null:cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(G__21787));var G__21787__$2 = (((G__21787__$1 == null))?null:cljs.core.count(G__21787__$1));return G__21787__$2;
})();var ic_count = (function (){var G__21788 = constituency;var G__21788__$1 = (((G__21788 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__21788));var G__21788__$2 = (((G__21788__$1 == null))?null:cljs.core.count(G__21788__$1));return G__21788__$2;
})();if(typeof clustermap.components.map_report.t21789 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21789 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta21790){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21790 = meta21790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21789.cljs$lang$type = true;
clustermap.components.map_report.t21789.cljs$lang$ctorStr = "clustermap.components.map-report/t21789";
clustermap.components.map_report.t21789.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21789");
});
clustermap.components.map_report.t21789.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21789.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21792 = cljs.core.constant$keyword$239.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21792))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21792),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21792));
}
})(),(function (){var attrs21793 = cljs.core.constant$keyword$342.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21793))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21793),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21793),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$343.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21794 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21794))
{return React.DOM.li(sablono.interpreter.attributes(attrs21794),(function (){var attrs21795 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21795))
{return React.DOM.small(sablono.interpreter.attributes(attrs21795),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21795));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21794),(function (){var attrs21796 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21796))
{return React.DOM.small(sablono.interpreter.attributes(attrs21796),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21796));
}
})());
}
})(),(function (){var attrs21797 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21797))
{return React.DOM.li(sablono.interpreter.attributes(attrs21797),(function (){var attrs21798 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21798))
{return React.DOM.small(sablono.interpreter.attributes(attrs21798),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21798));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21797),(function (){var attrs21799 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21799))
{return React.DOM.small(sablono.interpreter.attributes(attrs21799),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21799));
}
})());
}
})(),(function (){var attrs21800 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21810 = self__.constituency;var G__21810__$1 = (((G__21810 == null))?null:cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(G__21810));return G__21810__$1;
})(),cljs.core.constant$keyword$259,2,cljs.core.constant$keyword$194,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21810 = self__.constituency;var G__21810__$1 = (((G__21810 == null))?null:cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(G__21810));return G__21810__$1;
})(),cljs.core.constant$keyword$259,2,cljs.core.constant$keyword$194,"-"));if(cljs.core.map_QMARK_(attrs21800))
{return React.DOM.li(sablono.interpreter.attributes(attrs21800),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21800),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21805 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21811 = self__.constituency;var G__21811__$1 = (((G__21811 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__21811));return G__21811__$1;
})(),cljs.core.constant$keyword$194,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21811 = self__.constituency;var G__21811__$1 = (((G__21811 == null))?null:cljs.core.constant$keyword$341.cljs$core$IFn$_invoke$arity$1(G__21811));return G__21811__$1;
})(),cljs.core.constant$keyword$194,"-"));if(cljs.core.map_QMARK_(attrs21805))
{return React.DOM.li(sablono.interpreter.attributes(attrs21805),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21805),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21791){var self__ = this;
var _21791__$1 = this;return self__.meta21790;
});
clustermap.components.map_report.t21789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21791,meta21790__$1){var self__ = this;
var _21791__$1 = this;return (new clustermap.components.map_report.t21789(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta21790__$1));
});
clustermap.components.map_report.__GT_t21789 = (function __GT_t21789(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21790){return (new clustermap.components.map_report.t21789(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21790));
});
}
return (new clustermap.components.map_report.t21789(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$266);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$228], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$268,cljs.core.constant$keyword$198], null));var pred__21815 = cljs.core._EQ__EQ_;var expr__21816 = type;if(cljs.core.truth_((pred__21815.cljs$core$IFn$_invoke$arity$2 ? pred__21815.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$263,expr__21816) : pred__21815.call(null,cljs.core.constant$keyword$263,expr__21816))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21815.cljs$core$IFn$_invoke$arity$2 ? pred__21815.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$264,expr__21816) : pred__21815.call(null,cljs.core.constant$keyword$264,expr__21816))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21815.cljs$core$IFn$_invoke$arity$2 ? pred__21815.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$265,expr__21816) : pred__21815.call(null,cljs.core.constant$keyword$265,expr__21816))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$266,comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
