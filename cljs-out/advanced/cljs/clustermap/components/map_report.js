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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$259,"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21629 = apc_stats;var G__21629__$1 = (((G__21629 == null))?null:cljs.core.constant$keyword$271.cljs$core$IFn$_invoke$arity$1(G__21629));return G__21629__$1;
})();var ic_count = (function (){var G__21630 = apc_stats;var G__21630__$1 = (((G__21630 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21630));return G__21630__$1;
})();if(typeof clustermap.components.map_report.t21631 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21631 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21632){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21632 = meta21632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21631.cljs$lang$type = true;
clustermap.components.map_report.t21631.cljs$lang$ctorStr = "clustermap.components.map-report/t21631";
clustermap.components.map_report.t21631.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21631");
});
clustermap.components.map_report.t21631.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21631.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21636 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$186,"-"));if(cljs.core.map_QMARK_(attrs21636))
{return React.DOM.li(sablono.interpreter.attributes(attrs21636),(function (){var attrs21637 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21637))
{return React.DOM.small(sablono.interpreter.attributes(attrs21637),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21637));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21636),(function (){var attrs21638 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21638))
{return React.DOM.small(sablono.interpreter.attributes(attrs21638),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21638));
}
})());
}
})(),(function (){var attrs21639 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$186,"-"));if(cljs.core.map_QMARK_(attrs21639))
{return React.DOM.li(sablono.interpreter.attributes(attrs21639),(function (){var attrs21640 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21640))
{return React.DOM.small(sablono.interpreter.attributes(attrs21640),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21640));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21639),(function (){var attrs21641 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21641))
{return React.DOM.small(sablono.interpreter.attributes(attrs21641),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21641));
}
})());
}
})(),(function (){var attrs21642 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21652 = self__.apc_stats;var G__21652__$1 = (((G__21652 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21652));var G__21652__$2 = (((G__21652__$1 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21652__$1));return G__21652__$2;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21652 = self__.apc_stats;var G__21652__$1 = (((G__21652 == null))?null:cljs.core.constant$keyword$269.cljs$core$IFn$_invoke$arity$1(G__21652));var G__21652__$2 = (((G__21652__$1 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21652__$1));return G__21652__$2;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-"));if(cljs.core.map_QMARK_(attrs21642))
{return React.DOM.li(sablono.interpreter.attributes(attrs21642),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21642),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21647 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21653 = self__.apc_stats;var G__21653__$1 = (((G__21653 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21653));var G__21653__$2 = (((G__21653__$1 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21653__$1));return G__21653__$2;
})(),cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21653 = self__.apc_stats;var G__21653__$1 = (((G__21653 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21653));var G__21653__$2 = (((G__21653__$1 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21653__$1));return G__21653__$2;
})(),cljs.core.constant$keyword$186,"-"));if(cljs.core.map_QMARK_(attrs21647))
{return React.DOM.li(sablono.interpreter.attributes(attrs21647),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21647),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21633){var self__ = this;
var _21633__$1 = this;return self__.meta21632;
});
clustermap.components.map_report.t21631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21633,meta21632__$1){var self__ = this;
var _21633__$1 = this;return (new clustermap.components.map_report.t21631(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21632__$1));
});
clustermap.components.map_report.__GT_t21631 = (function __GT_t21631(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21632){return (new clustermap.components.map_report.t21631(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21632));
});
}
return (new clustermap.components.map_report.t21631(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21678 = portfolio_company;var G__21678__$1 = (((G__21678 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__21678));var G__21678__$2 = (((G__21678__$1 == null))?null:cljs.core.count(G__21678__$1));return G__21678__$2;
})();var const_count = (function (){var G__21679 = portfolio_company;var G__21679__$1 = (((G__21679 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__21679));var G__21679__$2 = (((G__21679__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__21679__$1));var G__21679__$3 = (((G__21679__$2 == null))?null:cljs.core.count(G__21679__$2));return G__21679__$3;
})();if(typeof clustermap.components.map_report.t21680 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21680 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta21681){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21681 = meta21681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21680.cljs$lang$type = true;
clustermap.components.map_report.t21680.cljs$lang$ctorStr = "clustermap.components.map-report/t21680";
clustermap.components.map_report.t21680.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21680");
});
clustermap.components.map_report.t21680.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21680.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21683 = cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21683))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21683),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21683));
}
})()),React.DOM.ul(null,(function (){var attrs21684 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21684))
{return React.DOM.li(sablono.interpreter.attributes(attrs21684),(function (){var attrs21685 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21685))
{return React.DOM.small(sablono.interpreter.attributes(attrs21685),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21685));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21684),(function (){var attrs21686 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21686))
{return React.DOM.small(sablono.interpreter.attributes(attrs21686),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21686));
}
})());
}
})(),(function (){var attrs21687 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21687))
{return React.DOM.li(sablono.interpreter.attributes(attrs21687),(function (){var attrs21688 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21688))
{return React.DOM.small(sablono.interpreter.attributes(attrs21688),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21688));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21687),(function (){var attrs21689 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21689))
{return React.DOM.small(sablono.interpreter.attributes(attrs21689),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21689));
}
})());
}
})(),(function (){var attrs21690 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21700 = self__.portfolio_company;var G__21700__$1 = (((G__21700 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21700));return G__21700__$1;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21700 = self__.portfolio_company;var G__21700__$1 = (((G__21700 == null))?null:cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(G__21700));return G__21700__$1;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-"));if(cljs.core.map_QMARK_(attrs21690))
{return React.DOM.li(sablono.interpreter.attributes(attrs21690),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21690),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21695 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21701 = self__.portfolio_company;var G__21701__$1 = (((G__21701 == null))?null:cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(G__21701));return G__21701__$1;
})(),cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21701 = self__.portfolio_company;var G__21701__$1 = (((G__21701 == null))?null:cljs.core.constant$keyword$281.cljs$core$IFn$_invoke$arity$1(G__21701));return G__21701__$1;
})(),cljs.core.constant$keyword$186,"-"));if(cljs.core.map_QMARK_(attrs21695))
{return React.DOM.li(sablono.interpreter.attributes(attrs21695),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21695),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21682){var self__ = this;
var _21682__$1 = this;return self__.meta21681;
});
clustermap.components.map_report.t21680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21682,meta21681__$1){var self__ = this;
var _21682__$1 = this;return (new clustermap.components.map_report.t21680(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta21681__$1));
});
clustermap.components.map_report.__GT_t21680 = (function __GT_t21680(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21681){return (new clustermap.components.map_report.t21680(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21681));
});
}
return (new clustermap.components.map_report.t21680(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__21726 = investor_company;var G__21726__$1 = (((G__21726 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__21726));var G__21726__$2 = (((G__21726__$1 == null))?null:cljs.core.count(G__21726__$1));return G__21726__$2;
})();var const_count = (function (){var G__21727 = investor_company;var G__21727__$1 = (((G__21727 == null))?null:cljs.core.constant$keyword$327.cljs$core$IFn$_invoke$arity$1(G__21727));var G__21727__$2 = (((G__21727__$1 == null))?null:cljs.core.constant$keyword$328.cljs$core$IFn$_invoke$arity$1(G__21727__$1));var G__21727__$3 = (((G__21727__$2 == null))?null:cljs.core.count(G__21727__$2));return G__21727__$3;
})();if(typeof clustermap.components.map_report.t21728 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21728 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta21729){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21729 = meta21729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21728.cljs$lang$type = true;
clustermap.components.map_report.t21728.cljs$lang$ctorStr = "clustermap.components.map-report/t21728";
clustermap.components.map_report.t21728.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21728");
});
clustermap.components.map_report.t21728.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21728.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21731 = cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21731))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21731),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21731));
}
})()),React.DOM.ul(null,(function (){var attrs21732 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21732))
{return React.DOM.li(sablono.interpreter.attributes(attrs21732),(function (){var attrs21733 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21733))
{return React.DOM.small(sablono.interpreter.attributes(attrs21733),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21733));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21732),(function (){var attrs21734 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21734))
{return React.DOM.small(sablono.interpreter.attributes(attrs21734),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21734));
}
})());
}
})(),(function (){var attrs21735 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21735))
{return React.DOM.li(sablono.interpreter.attributes(attrs21735),(function (){var attrs21736 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21736))
{return React.DOM.small(sablono.interpreter.attributes(attrs21736),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21736));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21735),(function (){var attrs21737 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21737))
{return React.DOM.small(sablono.interpreter.attributes(attrs21737),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21737));
}
})());
}
})(),(function (){var attrs21738 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21748 = self__.investor_company;var G__21748__$1 = (((G__21748 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__21748));return G__21748__$1;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21748 = self__.investor_company;var G__21748__$1 = (((G__21748 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__21748));return G__21748__$1;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-"));if(cljs.core.map_QMARK_(attrs21738))
{return React.DOM.li(sablono.interpreter.attributes(attrs21738),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21738),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21743 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21749 = self__.investor_company;var G__21749__$1 = (((G__21749 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__21749));return G__21749__$1;
})(),cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21749 = self__.investor_company;var G__21749__$1 = (((G__21749 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__21749));return G__21749__$1;
})(),cljs.core.constant$keyword$186,"-"));if(cljs.core.map_QMARK_(attrs21743))
{return React.DOM.li(sablono.interpreter.attributes(attrs21743),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21743),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21728.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21730){var self__ = this;
var _21730__$1 = this;return self__.meta21729;
});
clustermap.components.map_report.t21728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21730,meta21729__$1){var self__ = this;
var _21730__$1 = this;return (new clustermap.components.map_report.t21728(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta21729__$1));
});
clustermap.components.map_report.__GT_t21728 = (function __GT_t21728(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21729){return (new clustermap.components.map_report.t21728(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21729));
});
}
return (new clustermap.components.map_report.t21728(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__21775 = constituency;var G__21775__$1 = (((G__21775 == null))?null:cljs.core.constant$keyword$322.cljs$core$IFn$_invoke$arity$1(G__21775));var G__21775__$2 = (((G__21775__$1 == null))?null:cljs.core.count(G__21775__$1));return G__21775__$2;
})();var ic_count = (function (){var G__21776 = constituency;var G__21776__$1 = (((G__21776 == null))?null:cljs.core.constant$keyword$321.cljs$core$IFn$_invoke$arity$1(G__21776));var G__21776__$2 = (((G__21776__$1 == null))?null:cljs.core.count(G__21776__$1));return G__21776__$2;
})();if(typeof clustermap.components.map_report.t21777 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21777 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta21778){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21778 = meta21778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21777.cljs$lang$type = true;
clustermap.components.map_report.t21777.cljs$lang$ctorStr = "clustermap.components.map-report/t21777";
clustermap.components.map_report.t21777.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21777");
});
clustermap.components.map_report.t21777.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21777.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21780 = cljs.core.constant$keyword$231.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21780))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21780),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21780));
}
})(),(function (){var attrs21781 = cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21781))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21781),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21781),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21782 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21782))
{return React.DOM.li(sablono.interpreter.attributes(attrs21782),(function (){var attrs21783 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21783))
{return React.DOM.small(sablono.interpreter.attributes(attrs21783),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21783));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21782),(function (){var attrs21784 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21784))
{return React.DOM.small(sablono.interpreter.attributes(attrs21784),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21784));
}
})());
}
})(),(function (){var attrs21785 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21785))
{return React.DOM.li(sablono.interpreter.attributes(attrs21785),(function (){var attrs21786 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21786))
{return React.DOM.small(sablono.interpreter.attributes(attrs21786),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21786));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21785),(function (){var attrs21787 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21787))
{return React.DOM.small(sablono.interpreter.attributes(attrs21787),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21787));
}
})());
}
})(),(function (){var attrs21788 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21798 = self__.constituency;var G__21798__$1 = (((G__21798 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__21798));return G__21798__$1;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21798 = self__.constituency;var G__21798__$1 = (((G__21798 == null))?null:cljs.core.constant$keyword$329.cljs$core$IFn$_invoke$arity$1(G__21798));return G__21798__$1;
})(),cljs.core.constant$keyword$251,2,cljs.core.constant$keyword$186,"-"));if(cljs.core.map_QMARK_(attrs21788))
{return React.DOM.li(sablono.interpreter.attributes(attrs21788),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21788),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21793 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21799 = self__.constituency;var G__21799__$1 = (((G__21799 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__21799));return G__21799__$1;
})(),cljs.core.constant$keyword$186,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21799 = self__.constituency;var G__21799__$1 = (((G__21799 == null))?null:cljs.core.constant$keyword$330.cljs$core$IFn$_invoke$arity$1(G__21799));return G__21799__$1;
})(),cljs.core.constant$keyword$186,"-"));if(cljs.core.map_QMARK_(attrs21793))
{return React.DOM.li(sablono.interpreter.attributes(attrs21793),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21793),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21779){var self__ = this;
var _21779__$1 = this;return self__.meta21778;
});
clustermap.components.map_report.t21777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21779,meta21778__$1){var self__ = this;
var _21779__$1 = this;return (new clustermap.components.map_report.t21777(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta21778__$1));
});
clustermap.components.map_report.__GT_t21777 = (function __GT_t21777(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21778){return (new clustermap.components.map_report.t21777(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21778));
});
}
return (new clustermap.components.map_report.t21777(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$258);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,cljs.core.constant$keyword$220], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$260,cljs.core.constant$keyword$190], null));var pred__21803 = cljs.core._EQ__EQ_;var expr__21804 = type;if(cljs.core.truth_((pred__21803.cljs$core$IFn$_invoke$arity$2 ? pred__21803.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$255,expr__21804) : pred__21803.call(null,cljs.core.constant$keyword$255,expr__21804))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21803.cljs$core$IFn$_invoke$arity$2 ? pred__21803.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$256,expr__21804) : pred__21803.call(null,cljs.core.constant$keyword$256,expr__21804))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21803.cljs$core$IFn$_invoke$arity$2 ? pred__21803.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$257,expr__21804) : pred__21803.call(null,cljs.core.constant$keyword$257,expr__21804))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$265.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$258,comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
