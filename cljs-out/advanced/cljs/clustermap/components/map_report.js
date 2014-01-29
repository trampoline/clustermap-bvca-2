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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$261,"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21607 = apc_stats;var G__21607__$1 = (((G__21607 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21607));return G__21607__$1;
})();var ic_count = (function (){var G__21608 = apc_stats;var G__21608__$1 = (((G__21608 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21608));return G__21608__$1;
})();if(typeof clustermap.components.map_report.t21609 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21609 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21610){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21610 = meta21610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21609.cljs$lang$type = true;
clustermap.components.map_report.t21609.cljs$lang$ctorStr = "clustermap.components.map-report/t21609";
clustermap.components.map_report.t21609.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21609");
});
clustermap.components.map_report.t21609.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21609.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21614 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$188,"-"));if(cljs.core.map_QMARK_(attrs21614))
{return React.DOM.li(sablono.interpreter.attributes(attrs21614),(function (){var attrs21615 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21615))
{return React.DOM.small(sablono.interpreter.attributes(attrs21615),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21615));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21614),(function (){var attrs21616 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21616))
{return React.DOM.small(sablono.interpreter.attributes(attrs21616),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21616));
}
})());
}
})(),(function (){var attrs21617 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$188,"-"));if(cljs.core.map_QMARK_(attrs21617))
{return React.DOM.li(sablono.interpreter.attributes(attrs21617),(function (){var attrs21618 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21618))
{return React.DOM.small(sablono.interpreter.attributes(attrs21618),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21618));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21617),(function (){var attrs21619 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21619))
{return React.DOM.small(sablono.interpreter.attributes(attrs21619),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21619));
}
})());
}
})(),(function (){var attrs21620 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21630 = self__.apc_stats;var G__21630__$1 = (((G__21630 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21630));var G__21630__$2 = (((G__21630__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21630__$1));return G__21630__$2;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21630 = self__.apc_stats;var G__21630__$1 = (((G__21630 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21630));var G__21630__$2 = (((G__21630__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21630__$1));return G__21630__$2;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-"));if(cljs.core.map_QMARK_(attrs21620))
{return React.DOM.li(sablono.interpreter.attributes(attrs21620),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21620),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21625 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21631 = self__.apc_stats;var G__21631__$1 = (((G__21631 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21631));var G__21631__$2 = (((G__21631__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21631__$1));return G__21631__$2;
})(),cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21631 = self__.apc_stats;var G__21631__$1 = (((G__21631 == null))?null:cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(G__21631));var G__21631__$2 = (((G__21631__$1 == null))?null:cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(G__21631__$1));return G__21631__$2;
})(),cljs.core.constant$keyword$188,"-"));if(cljs.core.map_QMARK_(attrs21625))
{return React.DOM.li(sablono.interpreter.attributes(attrs21625),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21625),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21611){var self__ = this;
var _21611__$1 = this;return self__.meta21610;
});
clustermap.components.map_report.t21609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21611,meta21610__$1){var self__ = this;
var _21611__$1 = this;return (new clustermap.components.map_report.t21609(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21610__$1));
});
clustermap.components.map_report.__GT_t21609 = (function __GT_t21609(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21610){return (new clustermap.components.map_report.t21609(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21610));
});
}
return (new clustermap.components.map_report.t21609(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21656 = portfolio_company;var G__21656__$1 = (((G__21656 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__21656));var G__21656__$2 = (((G__21656__$1 == null))?null:cljs.core.count(G__21656__$1));return G__21656__$2;
})();var const_count = (function (){var G__21657 = portfolio_company;var G__21657__$1 = (((G__21657 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__21657));var G__21657__$2 = (((G__21657__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__21657__$1));var G__21657__$3 = (((G__21657__$2 == null))?null:cljs.core.count(G__21657__$2));return G__21657__$3;
})();if(typeof clustermap.components.map_report.t21658 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21658 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta21659){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21659 = meta21659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21658.cljs$lang$type = true;
clustermap.components.map_report.t21658.cljs$lang$ctorStr = "clustermap.components.map-report/t21658";
clustermap.components.map_report.t21658.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21658");
});
clustermap.components.map_report.t21658.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21658.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21661 = cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21661))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21661),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21661));
}
})()),React.DOM.ul(null,(function (){var attrs21662 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21662))
{return React.DOM.li(sablono.interpreter.attributes(attrs21662),(function (){var attrs21663 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21663))
{return React.DOM.small(sablono.interpreter.attributes(attrs21663),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21663));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21662),(function (){var attrs21664 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21664))
{return React.DOM.small(sablono.interpreter.attributes(attrs21664),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21664));
}
})());
}
})(),(function (){var attrs21665 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21665))
{return React.DOM.li(sablono.interpreter.attributes(attrs21665),(function (){var attrs21666 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21666))
{return React.DOM.small(sablono.interpreter.attributes(attrs21666),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21666));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21665),(function (){var attrs21667 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21667))
{return React.DOM.small(sablono.interpreter.attributes(attrs21667),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21667));
}
})());
}
})(),(function (){var attrs21668 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21678 = self__.portfolio_company;var G__21678__$1 = (((G__21678 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21678));return G__21678__$1;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21678 = self__.portfolio_company;var G__21678__$1 = (((G__21678 == null))?null:cljs.core.constant$keyword$280.cljs$core$IFn$_invoke$arity$1(G__21678));return G__21678__$1;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-"));if(cljs.core.map_QMARK_(attrs21668))
{return React.DOM.li(sablono.interpreter.attributes(attrs21668),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21668),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21673 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21679 = self__.portfolio_company;var G__21679__$1 = (((G__21679 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21679));return G__21679__$1;
})(),cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21679 = self__.portfolio_company;var G__21679__$1 = (((G__21679 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21679));return G__21679__$1;
})(),cljs.core.constant$keyword$188,"-"));if(cljs.core.map_QMARK_(attrs21673))
{return React.DOM.li(sablono.interpreter.attributes(attrs21673),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21673),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21660){var self__ = this;
var _21660__$1 = this;return self__.meta21659;
});
clustermap.components.map_report.t21658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21660,meta21659__$1){var self__ = this;
var _21660__$1 = this;return (new clustermap.components.map_report.t21658(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta21659__$1));
});
clustermap.components.map_report.__GT_t21658 = (function __GT_t21658(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21659){return (new clustermap.components.map_report.t21658(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21659));
});
}
return (new clustermap.components.map_report.t21658(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__21704 = investor_company;var G__21704__$1 = (((G__21704 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__21704));var G__21704__$2 = (((G__21704__$1 == null))?null:cljs.core.count(G__21704__$1));return G__21704__$2;
})();var const_count = (function (){var G__21705 = investor_company;var G__21705__$1 = (((G__21705 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__21705));var G__21705__$2 = (((G__21705__$1 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__21705__$1));var G__21705__$3 = (((G__21705__$2 == null))?null:cljs.core.count(G__21705__$2));return G__21705__$3;
})();if(typeof clustermap.components.map_report.t21706 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21706 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta21707){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21707 = meta21707;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21706.cljs$lang$type = true;
clustermap.components.map_report.t21706.cljs$lang$ctorStr = "clustermap.components.map-report/t21706";
clustermap.components.map_report.t21706.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21706");
});
clustermap.components.map_report.t21706.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21706.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21709 = cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21709))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21709),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21709));
}
})()),React.DOM.ul(null,(function (){var attrs21710 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21710))
{return React.DOM.li(sablono.interpreter.attributes(attrs21710),(function (){var attrs21711 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21711))
{return React.DOM.small(sablono.interpreter.attributes(attrs21711),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21711));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21710),(function (){var attrs21712 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21712))
{return React.DOM.small(sablono.interpreter.attributes(attrs21712),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21712));
}
})());
}
})(),(function (){var attrs21713 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21713))
{return React.DOM.li(sablono.interpreter.attributes(attrs21713),(function (){var attrs21714 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21714))
{return React.DOM.small(sablono.interpreter.attributes(attrs21714),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21714));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21713),(function (){var attrs21715 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21715))
{return React.DOM.small(sablono.interpreter.attributes(attrs21715),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21715));
}
})());
}
})(),(function (){var attrs21716 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21726 = self__.investor_company;var G__21726__$1 = (((G__21726 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__21726));return G__21726__$1;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21726 = self__.investor_company;var G__21726__$1 = (((G__21726 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__21726));return G__21726__$1;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-"));if(cljs.core.map_QMARK_(attrs21716))
{return React.DOM.li(sablono.interpreter.attributes(attrs21716),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21716),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21721 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21727 = self__.investor_company;var G__21727__$1 = (((G__21727 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__21727));return G__21727__$1;
})(),cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21727 = self__.investor_company;var G__21727__$1 = (((G__21727 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__21727));return G__21727__$1;
})(),cljs.core.constant$keyword$188,"-"));if(cljs.core.map_QMARK_(attrs21721))
{return React.DOM.li(sablono.interpreter.attributes(attrs21721),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21721),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21708){var self__ = this;
var _21708__$1 = this;return self__.meta21707;
});
clustermap.components.map_report.t21706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21708,meta21707__$1){var self__ = this;
var _21708__$1 = this;return (new clustermap.components.map_report.t21706(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta21707__$1));
});
clustermap.components.map_report.__GT_t21706 = (function __GT_t21706(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21707){return (new clustermap.components.map_report.t21706(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21707));
});
}
return (new clustermap.components.map_report.t21706(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__21753 = constituency;var G__21753__$1 = (((G__21753 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__21753));var G__21753__$2 = (((G__21753__$1 == null))?null:cljs.core.count(G__21753__$1));return G__21753__$2;
})();var ic_count = (function (){var G__21754 = constituency;var G__21754__$1 = (((G__21754 == null))?null:cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(G__21754));var G__21754__$2 = (((G__21754__$1 == null))?null:cljs.core.count(G__21754__$1));return G__21754__$2;
})();if(typeof clustermap.components.map_report.t21755 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21755 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta21756){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21756 = meta21756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21755.cljs$lang$type = true;
clustermap.components.map_report.t21755.cljs$lang$ctorStr = "clustermap.components.map-report/t21755";
clustermap.components.map_report.t21755.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21755");
});
clustermap.components.map_report.t21755.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21755.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21758 = cljs.core.constant$keyword$233.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21758))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21758),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21758));
}
})(),(function (){var attrs21759 = cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21759))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21759),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21759),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21760 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21760))
{return React.DOM.li(sablono.interpreter.attributes(attrs21760),(function (){var attrs21761 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21761))
{return React.DOM.small(sablono.interpreter.attributes(attrs21761),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21761));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21760),(function (){var attrs21762 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21762))
{return React.DOM.small(sablono.interpreter.attributes(attrs21762),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21762));
}
})());
}
})(),(function (){var attrs21763 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21763))
{return React.DOM.li(sablono.interpreter.attributes(attrs21763),(function (){var attrs21764 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21764))
{return React.DOM.small(sablono.interpreter.attributes(attrs21764),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21764));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21763),(function (){var attrs21765 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21765))
{return React.DOM.small(sablono.interpreter.attributes(attrs21765),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21765));
}
})());
}
})(),(function (){var attrs21766 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21776 = self__.constituency;var G__21776__$1 = (((G__21776 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__21776));return G__21776__$1;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21776 = self__.constituency;var G__21776__$1 = (((G__21776 == null))?null:cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(G__21776));return G__21776__$1;
})(),cljs.core.constant$keyword$253,2,cljs.core.constant$keyword$188,"-"));if(cljs.core.map_QMARK_(attrs21766))
{return React.DOM.li(sablono.interpreter.attributes(attrs21766),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21766),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21771 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21777 = self__.constituency;var G__21777__$1 = (((G__21777 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__21777));return G__21777__$1;
})(),cljs.core.constant$keyword$188,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21777 = self__.constituency;var G__21777__$1 = (((G__21777 == null))?null:cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(G__21777));return G__21777__$1;
})(),cljs.core.constant$keyword$188,"-"));if(cljs.core.map_QMARK_(attrs21771))
{return React.DOM.li(sablono.interpreter.attributes(attrs21771),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21771),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21757){var self__ = this;
var _21757__$1 = this;return self__.meta21756;
});
clustermap.components.map_report.t21755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21757,meta21756__$1){var self__ = this;
var _21757__$1 = this;return (new clustermap.components.map_report.t21755(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta21756__$1));
});
clustermap.components.map_report.__GT_t21755 = (function __GT_t21755(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21756){return (new clustermap.components.map_report.t21755(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21756));
});
}
return (new clustermap.components.map_report.t21755(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$260);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,cljs.core.constant$keyword$222], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$262,cljs.core.constant$keyword$192], null));var pred__21781 = cljs.core._EQ__EQ_;var expr__21782 = type;if(cljs.core.truth_((pred__21781.cljs$core$IFn$_invoke$arity$2 ? pred__21781.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21782) : pred__21781.call(null,cljs.core.constant$keyword$257,expr__21782))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21781.cljs$core$IFn$_invoke$arity$2 ? pred__21781.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$258,expr__21782) : pred__21781.call(null,cljs.core.constant$keyword$258,expr__21782))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21781.cljs$core$IFn$_invoke$arity$2 ? pred__21781.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$259,expr__21782) : pred__21781.call(null,cljs.core.constant$keyword$259,expr__21782))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$260,comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
