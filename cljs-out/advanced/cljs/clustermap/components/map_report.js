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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$80,"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11674 = apc_stats;var G__11674__$1 = (((G__11674 == null))?null:cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(G__11674));return G__11674__$1;
})();var ic_count = (function (){var G__11675 = apc_stats;var G__11675__$1 = (((G__11675 == null))?null:cljs.core.constant$keyword$93.cljs$core$IFn$_invoke$arity$1(G__11675));return G__11675__$1;
})();if(typeof clustermap.components.map_report.t11676 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11676 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11677){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11677 = meta11677;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11676.cljs$lang$type = true;
clustermap.components.map_report.t11676.cljs$lang$ctorStr = "clustermap.components.map-report/t11676";
clustermap.components.map_report.t11676.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t11676");
});
clustermap.components.map_report.t11676.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11676.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11681 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11681))
{return React.DOM.li(sablono.interpreter.attributes(attrs11681),(function (){var attrs11682 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs11682))
{return React.DOM.small(sablono.interpreter.attributes(attrs11682),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11682));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11681),(function (){var attrs11683 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs11683))
{return React.DOM.small(sablono.interpreter.attributes(attrs11683),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11683));
}
})());
}
})(),(function (){var attrs11684 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11684))
{return React.DOM.li(sablono.interpreter.attributes(attrs11684),(function (){var attrs11685 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs11685))
{return React.DOM.small(sablono.interpreter.attributes(attrs11685),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11685));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11684),(function (){var attrs11686 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs11686))
{return React.DOM.small(sablono.interpreter.attributes(attrs11686),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11686));
}
})());
}
})(),(function (){var attrs11687 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11697 = self__.apc_stats;var G__11697__$1 = (((G__11697 == null))?null:cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__11697));var G__11697__$2 = (((G__11697__$1 == null))?null:cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__11697__$1));return G__11697__$2;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11697 = self__.apc_stats;var G__11697__$1 = (((G__11697 == null))?null:cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__11697));var G__11697__$2 = (((G__11697__$1 == null))?null:cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__11697__$1));return G__11697__$2;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11687))
{return React.DOM.li(sablono.interpreter.attributes(attrs11687),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11687),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11692 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11698 = self__.apc_stats;var G__11698__$1 = (((G__11698 == null))?null:cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(G__11698));var G__11698__$2 = (((G__11698__$1 == null))?null:cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__11698__$1));return G__11698__$2;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11698 = self__.apc_stats;var G__11698__$1 = (((G__11698 == null))?null:cljs.core.constant$keyword$96.cljs$core$IFn$_invoke$arity$1(G__11698));var G__11698__$2 = (((G__11698__$1 == null))?null:cljs.core.constant$keyword$95.cljs$core$IFn$_invoke$arity$1(G__11698__$1));return G__11698__$2;
})(),cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11692))
{return React.DOM.li(sablono.interpreter.attributes(attrs11692),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11692),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t11676.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11678){var self__ = this;
var _11678__$1 = this;return self__.meta11677;
});
clustermap.components.map_report.t11676.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11678,meta11677__$1){var self__ = this;
var _11678__$1 = this;return (new clustermap.components.map_report.t11676(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11677__$1));
});
clustermap.components.map_report.__GT_t11676 = (function __GT_t11676(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11677){return (new clustermap.components.map_report.t11676(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11677));
});
}
return (new clustermap.components.map_report.t11676(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11723 = portfolio_company;var G__11723__$1 = (((G__11723 == null))?null:cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(G__11723));var G__11723__$2 = (((G__11723__$1 == null))?null:cljs.core.count(G__11723__$1));return G__11723__$2;
})();var const_count = (function (){var G__11724 = portfolio_company;var G__11724__$1 = (((G__11724 == null))?null:cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(G__11724));var G__11724__$2 = (((G__11724__$1 == null))?null:cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(G__11724__$1));var G__11724__$3 = (((G__11724__$2 == null))?null:cljs.core.count(G__11724__$2));return G__11724__$3;
})();if(typeof clustermap.components.map_report.t11725 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11725 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11726){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11726 = meta11726;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11725.cljs$lang$type = true;
clustermap.components.map_report.t11725.cljs$lang$ctorStr = "clustermap.components.map-report/t11725";
clustermap.components.map_report.t11725.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t11725");
});
clustermap.components.map_report.t11725.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11725.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11728 = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs11728))
{return React.DOM.h2(sablono.interpreter.attributes(attrs11728),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs11728));
}
})()),React.DOM.ul(null,(function (){var attrs11729 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs11729))
{return React.DOM.li(sablono.interpreter.attributes(attrs11729),(function (){var attrs11730 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs11730))
{return React.DOM.small(sablono.interpreter.attributes(attrs11730),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11730));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11729),(function (){var attrs11731 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs11731))
{return React.DOM.small(sablono.interpreter.attributes(attrs11731),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11731));
}
})());
}
})(),(function (){var attrs11732 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs11732))
{return React.DOM.li(sablono.interpreter.attributes(attrs11732),(function (){var attrs11733 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs11733))
{return React.DOM.small(sablono.interpreter.attributes(attrs11733),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11733));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11732),(function (){var attrs11734 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs11734))
{return React.DOM.small(sablono.interpreter.attributes(attrs11734),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11734));
}
})());
}
})(),(function (){var attrs11735 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11745 = self__.portfolio_company;var G__11745__$1 = (((G__11745 == null))?null:cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(G__11745));return G__11745__$1;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11745 = self__.portfolio_company;var G__11745__$1 = (((G__11745 == null))?null:cljs.core.constant$keyword$99.cljs$core$IFn$_invoke$arity$1(G__11745));return G__11745__$1;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11735))
{return React.DOM.li(sablono.interpreter.attributes(attrs11735),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11735),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11740 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11746 = self__.portfolio_company;var G__11746__$1 = (((G__11746 == null))?null:cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(G__11746));return G__11746__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11746 = self__.portfolio_company;var G__11746__$1 = (((G__11746 == null))?null:cljs.core.constant$keyword$102.cljs$core$IFn$_invoke$arity$1(G__11746));return G__11746__$1;
})(),cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11740))
{return React.DOM.li(sablono.interpreter.attributes(attrs11740),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11740),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t11725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11727){var self__ = this;
var _11727__$1 = this;return self__.meta11726;
});
clustermap.components.map_report.t11725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11727,meta11726__$1){var self__ = this;
var _11727__$1 = this;return (new clustermap.components.map_report.t11725(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11726__$1));
});
clustermap.components.map_report.__GT_t11725 = (function __GT_t11725(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11726){return (new clustermap.components.map_report.t11725(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11726));
});
}
return (new clustermap.components.map_report.t11725(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11771 = investor_company;var G__11771__$1 = (((G__11771 == null))?null:cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(G__11771));var G__11771__$2 = (((G__11771__$1 == null))?null:cljs.core.count(G__11771__$1));return G__11771__$2;
})();var const_count = (function (){var G__11772 = investor_company;var G__11772__$1 = (((G__11772 == null))?null:cljs.core.constant$keyword$148.cljs$core$IFn$_invoke$arity$1(G__11772));var G__11772__$2 = (((G__11772__$1 == null))?null:cljs.core.constant$keyword$149.cljs$core$IFn$_invoke$arity$1(G__11772__$1));var G__11772__$3 = (((G__11772__$2 == null))?null:cljs.core.count(G__11772__$2));return G__11772__$3;
})();if(typeof clustermap.components.map_report.t11773 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11773 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11774){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11774 = meta11774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11773.cljs$lang$type = true;
clustermap.components.map_report.t11773.cljs$lang$ctorStr = "clustermap.components.map-report/t11773";
clustermap.components.map_report.t11773.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t11773");
});
clustermap.components.map_report.t11773.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11773.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11776 = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs11776))
{return React.DOM.h2(sablono.interpreter.attributes(attrs11776),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs11776));
}
})()),React.DOM.ul(null,(function (){var attrs11777 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs11777))
{return React.DOM.li(sablono.interpreter.attributes(attrs11777),(function (){var attrs11778 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs11778))
{return React.DOM.small(sablono.interpreter.attributes(attrs11778),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11778));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11777),(function (){var attrs11779 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs11779))
{return React.DOM.small(sablono.interpreter.attributes(attrs11779),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11779));
}
})());
}
})(),(function (){var attrs11780 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs11780))
{return React.DOM.li(sablono.interpreter.attributes(attrs11780),(function (){var attrs11781 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs11781))
{return React.DOM.small(sablono.interpreter.attributes(attrs11781),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11781));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11780),(function (){var attrs11782 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs11782))
{return React.DOM.small(sablono.interpreter.attributes(attrs11782),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11782));
}
})());
}
})(),(function (){var attrs11783 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11793 = self__.investor_company;var G__11793__$1 = (((G__11793 == null))?null:cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(G__11793));return G__11793__$1;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11793 = self__.investor_company;var G__11793__$1 = (((G__11793 == null))?null:cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(G__11793));return G__11793__$1;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11783))
{return React.DOM.li(sablono.interpreter.attributes(attrs11783),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11783),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11788 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11794 = self__.investor_company;var G__11794__$1 = (((G__11794 == null))?null:cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(G__11794));return G__11794__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11794 = self__.investor_company;var G__11794__$1 = (((G__11794 == null))?null:cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(G__11794));return G__11794__$1;
})(),cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11788))
{return React.DOM.li(sablono.interpreter.attributes(attrs11788),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11788),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t11773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11775){var self__ = this;
var _11775__$1 = this;return self__.meta11774;
});
clustermap.components.map_report.t11773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11775,meta11774__$1){var self__ = this;
var _11775__$1 = this;return (new clustermap.components.map_report.t11773(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11774__$1));
});
clustermap.components.map_report.__GT_t11773 = (function __GT_t11773(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11774){return (new clustermap.components.map_report.t11773(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11774));
});
}
return (new clustermap.components.map_report.t11773(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11820 = constituency;var G__11820__$1 = (((G__11820 == null))?null:cljs.core.constant$keyword$143.cljs$core$IFn$_invoke$arity$1(G__11820));var G__11820__$2 = (((G__11820__$1 == null))?null:cljs.core.count(G__11820__$1));return G__11820__$2;
})();var ic_count = (function (){var G__11821 = constituency;var G__11821__$1 = (((G__11821 == null))?null:cljs.core.constant$keyword$142.cljs$core$IFn$_invoke$arity$1(G__11821));var G__11821__$2 = (((G__11821__$1 == null))?null:cljs.core.count(G__11821__$1));return G__11821__$2;
})();if(typeof clustermap.components.map_report.t11822 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11822 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11823){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11823 = meta11823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11822.cljs$lang$type = true;
clustermap.components.map_report.t11822.cljs$lang$ctorStr = "clustermap.components.map-report/t11822";
clustermap.components.map_report.t11822.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t11822");
});
clustermap.components.map_report.t11822.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11822.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11825 = cljs.core.constant$keyword$52.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs11825))
{return React.DOM.h2(sablono.interpreter.attributes(attrs11825),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs11825));
}
})(),(function (){var attrs11826 = cljs.core.constant$keyword$152.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs11826))
{return React.DOM.h3(sablono.interpreter.attributes(attrs11826),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs11826),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$153.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11827 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs11827))
{return React.DOM.li(sablono.interpreter.attributes(attrs11827),(function (){var attrs11828 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs11828))
{return React.DOM.small(sablono.interpreter.attributes(attrs11828),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11828));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11827),(function (){var attrs11829 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs11829))
{return React.DOM.small(sablono.interpreter.attributes(attrs11829),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11829));
}
})());
}
})(),(function (){var attrs11830 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs11830))
{return React.DOM.li(sablono.interpreter.attributes(attrs11830),(function (){var attrs11831 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs11831))
{return React.DOM.small(sablono.interpreter.attributes(attrs11831),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11831));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11830),(function (){var attrs11832 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs11832))
{return React.DOM.small(sablono.interpreter.attributes(attrs11832),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs11832));
}
})());
}
})(),(function (){var attrs11833 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__11843 = self__.constituency;var G__11843__$1 = (((G__11843 == null))?null:cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(G__11843));return G__11843__$1;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__11843 = self__.constituency;var G__11843__$1 = (((G__11843 == null))?null:cljs.core.constant$keyword$150.cljs$core$IFn$_invoke$arity$1(G__11843));return G__11843__$1;
})(),cljs.core.constant$keyword$72,2,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11833))
{return React.DOM.li(sablono.interpreter.attributes(attrs11833),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11833),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11838 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__11844 = self__.constituency;var G__11844__$1 = (((G__11844 == null))?null:cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(G__11844));return G__11844__$1;
})(),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__11844 = self__.constituency;var G__11844__$1 = (((G__11844 == null))?null:cljs.core.constant$keyword$151.cljs$core$IFn$_invoke$arity$1(G__11844));return G__11844__$1;
})(),cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11838))
{return React.DOM.li(sablono.interpreter.attributes(attrs11838),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs11838),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t11822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11824){var self__ = this;
var _11824__$1 = this;return self__.meta11823;
});
clustermap.components.map_report.t11822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11824,meta11823__$1){var self__ = this;
var _11824__$1 = this;return (new clustermap.components.map_report.t11822(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11823__$1));
});
clustermap.components.map_report.__GT_t11822 = (function __GT_t11822(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11823){return (new clustermap.components.map_report.t11822(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11823));
});
}
return (new clustermap.components.map_report.t11822(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$79);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,cljs.core.constant$keyword$41], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$81,cljs.core.constant$keyword$11], null));var pred__11848 = cljs.core._EQ__EQ_;var expr__11849 = type;if(cljs.core.truth_((pred__11848.cljs$core$IFn$_invoke$arity$2 ? pred__11848.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$76,expr__11849) : pred__11848.call(null,cljs.core.constant$keyword$76,expr__11849))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__11848.cljs$core$IFn$_invoke$arity$2 ? pred__11848.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,expr__11849) : pred__11848.call(null,cljs.core.constant$keyword$77,expr__11849))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__11848.cljs$core$IFn$_invoke$arity$2 ? pred__11848.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$78,expr__11849) : pred__11848.call(null,cljs.core.constant$keyword$78,expr__11849))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$79,comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
