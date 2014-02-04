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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21811 = apc_stats;var G__21811__$1 = (((G__21811 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21811));return G__21811__$1;
})();var ic_count = (function (){var G__21812 = apc_stats;var G__21812__$1 = (((G__21812 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__21812));return G__21812__$1;
})();if(typeof clustermap.components.map_report.t21813 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21813 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21814){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21814 = meta21814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21813.cljs$lang$type = true;
clustermap.components.map_report.t21813.cljs$lang$ctorStr = "clustermap.components.map-report/t21813";
clustermap.components.map_report.t21813.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21813");
});
clustermap.components.map_report.t21813.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21813.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21818 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21818))
{return React.DOM.li(sablono.interpreter.attributes(attrs21818),(function (){var attrs21819 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21819))
{return React.DOM.small(sablono.interpreter.attributes(attrs21819),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21819));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21818),(function (){var attrs21820 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21820))
{return React.DOM.small(sablono.interpreter.attributes(attrs21820),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21820));
}
})());
}
})(),(function (){var attrs21821 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21821))
{return React.DOM.li(sablono.interpreter.attributes(attrs21821),(function (){var attrs21822 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21822))
{return React.DOM.small(sablono.interpreter.attributes(attrs21822),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21822));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21821),(function (){var attrs21823 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21823))
{return React.DOM.small(sablono.interpreter.attributes(attrs21823),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21823));
}
})());
}
})(),(function (){var attrs21824 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21834 = self__.apc_stats;var G__21834__$1 = (((G__21834 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21834));var G__21834__$2 = (((G__21834__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21834__$1));return G__21834__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21834 = self__.apc_stats;var G__21834__$1 = (((G__21834 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21834));var G__21834__$2 = (((G__21834__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21834__$1));return G__21834__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21824))
{return React.DOM.li(sablono.interpreter.attributes(attrs21824),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21824),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21829 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21835 = self__.apc_stats;var G__21835__$1 = (((G__21835 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21835));var G__21835__$2 = (((G__21835__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21835__$1));return G__21835__$2;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21835 = self__.apc_stats;var G__21835__$1 = (((G__21835 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21835));var G__21835__$2 = (((G__21835__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21835__$1));return G__21835__$2;
})(),cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21829))
{return React.DOM.li(sablono.interpreter.attributes(attrs21829),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21829),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21815){var self__ = this;
var _21815__$1 = this;return self__.meta21814;
});
clustermap.components.map_report.t21813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21815,meta21814__$1){var self__ = this;
var _21815__$1 = this;return (new clustermap.components.map_report.t21813(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21814__$1));
});
clustermap.components.map_report.__GT_t21813 = (function __GT_t21813(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21814){return (new clustermap.components.map_report.t21813(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21814));
});
}
return (new clustermap.components.map_report.t21813(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21860 = portfolio_company;var G__21860__$1 = (((G__21860 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__21860));var G__21860__$2 = (((G__21860__$1 == null))?null:cljs.core.count(G__21860__$1));return G__21860__$2;
})();var const_count = (function (){var G__21861 = portfolio_company;var G__21861__$1 = (((G__21861 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__21861));var G__21861__$2 = (((G__21861__$1 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__21861__$1));var G__21861__$3 = (((G__21861__$2 == null))?null:cljs.core.count(G__21861__$2));return G__21861__$3;
})();if(typeof clustermap.components.map_report.t21862 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21862 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta21863){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21863 = meta21863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21862.cljs$lang$type = true;
clustermap.components.map_report.t21862.cljs$lang$ctorStr = "clustermap.components.map-report/t21862";
clustermap.components.map_report.t21862.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21862");
});
clustermap.components.map_report.t21862.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21862.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21865 = cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21865))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21865),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21865));
}
})()),React.DOM.ul(null,(function (){var attrs21866 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21866))
{return React.DOM.li(sablono.interpreter.attributes(attrs21866),(function (){var attrs21867 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21867))
{return React.DOM.small(sablono.interpreter.attributes(attrs21867),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21867));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21866),(function (){var attrs21868 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21868))
{return React.DOM.small(sablono.interpreter.attributes(attrs21868),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21868));
}
})());
}
})(),(function (){var attrs21869 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21869))
{return React.DOM.li(sablono.interpreter.attributes(attrs21869),(function (){var attrs21870 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21870))
{return React.DOM.small(sablono.interpreter.attributes(attrs21870),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21870));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21869),(function (){var attrs21871 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21871))
{return React.DOM.small(sablono.interpreter.attributes(attrs21871),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21871));
}
})());
}
})(),(function (){var attrs21872 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21882 = self__.portfolio_company;var G__21882__$1 = (((G__21882 == null))?null:cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(G__21882));return G__21882__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21882 = self__.portfolio_company;var G__21882__$1 = (((G__21882 == null))?null:cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(G__21882));return G__21882__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21872))
{return React.DOM.li(sablono.interpreter.attributes(attrs21872),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21872),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21877 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21883 = self__.portfolio_company;var G__21883__$1 = (((G__21883 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21883));return G__21883__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21883 = self__.portfolio_company;var G__21883__$1 = (((G__21883 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21883));return G__21883__$1;
})(),cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21877))
{return React.DOM.li(sablono.interpreter.attributes(attrs21877),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21877),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21864){var self__ = this;
var _21864__$1 = this;return self__.meta21863;
});
clustermap.components.map_report.t21862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21864,meta21863__$1){var self__ = this;
var _21864__$1 = this;return (new clustermap.components.map_report.t21862(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta21863__$1));
});
clustermap.components.map_report.__GT_t21862 = (function __GT_t21862(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21863){return (new clustermap.components.map_report.t21862(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21863));
});
}
return (new clustermap.components.map_report.t21862(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__21908 = investor_company;var G__21908__$1 = (((G__21908 == null))?null:cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(G__21908));var G__21908__$2 = (((G__21908__$1 == null))?null:cljs.core.count(G__21908__$1));return G__21908__$2;
})();var const_count = (function (){var G__21909 = investor_company;var G__21909__$1 = (((G__21909 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__21909));var G__21909__$2 = (((G__21909__$1 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__21909__$1));var G__21909__$3 = (((G__21909__$2 == null))?null:cljs.core.count(G__21909__$2));return G__21909__$3;
})();if(typeof clustermap.components.map_report.t21910 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21910 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta21911){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21911 = meta21911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21910.cljs$lang$type = true;
clustermap.components.map_report.t21910.cljs$lang$ctorStr = "clustermap.components.map-report/t21910";
clustermap.components.map_report.t21910.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21910");
});
clustermap.components.map_report.t21910.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21910.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21913 = cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21913))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21913),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21913));
}
})()),React.DOM.ul(null,(function (){var attrs21914 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21914))
{return React.DOM.li(sablono.interpreter.attributes(attrs21914),(function (){var attrs21915 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21915))
{return React.DOM.small(sablono.interpreter.attributes(attrs21915),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21915));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21914),(function (){var attrs21916 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21916))
{return React.DOM.small(sablono.interpreter.attributes(attrs21916),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21916));
}
})());
}
})(),(function (){var attrs21917 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21917))
{return React.DOM.li(sablono.interpreter.attributes(attrs21917),(function (){var attrs21918 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21918))
{return React.DOM.small(sablono.interpreter.attributes(attrs21918),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21918));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21917),(function (){var attrs21919 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21919))
{return React.DOM.small(sablono.interpreter.attributes(attrs21919),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21919));
}
})());
}
})(),(function (){var attrs21920 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21930 = self__.investor_company;var G__21930__$1 = (((G__21930 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__21930));return G__21930__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21930 = self__.investor_company;var G__21930__$1 = (((G__21930 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__21930));return G__21930__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21920))
{return React.DOM.li(sablono.interpreter.attributes(attrs21920),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21920),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21925 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21931 = self__.investor_company;var G__21931__$1 = (((G__21931 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__21931));return G__21931__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21931 = self__.investor_company;var G__21931__$1 = (((G__21931 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__21931));return G__21931__$1;
})(),cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21925))
{return React.DOM.li(sablono.interpreter.attributes(attrs21925),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21925),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21912){var self__ = this;
var _21912__$1 = this;return self__.meta21911;
});
clustermap.components.map_report.t21910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21912,meta21911__$1){var self__ = this;
var _21912__$1 = this;return (new clustermap.components.map_report.t21910(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta21911__$1));
});
clustermap.components.map_report.__GT_t21910 = (function __GT_t21910(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21911){return (new clustermap.components.map_report.t21910(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21911));
});
}
return (new clustermap.components.map_report.t21910(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__21957 = constituency;var G__21957__$1 = (((G__21957 == null))?null:cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(G__21957));var G__21957__$2 = (((G__21957__$1 == null))?null:cljs.core.count(G__21957__$1));return G__21957__$2;
})();var ic_count = (function (){var G__21958 = constituency;var G__21958__$1 = (((G__21958 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__21958));var G__21958__$2 = (((G__21958__$1 == null))?null:cljs.core.count(G__21958__$1));return G__21958__$2;
})();if(typeof clustermap.components.map_report.t21959 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21959 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta21960){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21960 = meta21960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21959.cljs$lang$type = true;
clustermap.components.map_report.t21959.cljs$lang$ctorStr = "clustermap.components.map-report/t21959";
clustermap.components.map_report.t21959.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21959");
});
clustermap.components.map_report.t21959.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21959.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21962 = cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21962))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21962),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21962));
}
})(),(function (){var attrs21963 = cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21963))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21963),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21963),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21964 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21964))
{return React.DOM.li(sablono.interpreter.attributes(attrs21964),(function (){var attrs21965 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21965))
{return React.DOM.small(sablono.interpreter.attributes(attrs21965),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21965));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21964),(function (){var attrs21966 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21966))
{return React.DOM.small(sablono.interpreter.attributes(attrs21966),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21966));
}
})());
}
})(),(function (){var attrs21967 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21967))
{return React.DOM.li(sablono.interpreter.attributes(attrs21967),(function (){var attrs21968 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21968))
{return React.DOM.small(sablono.interpreter.attributes(attrs21968),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21968));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21967),(function (){var attrs21969 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21969))
{return React.DOM.small(sablono.interpreter.attributes(attrs21969),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21969));
}
})());
}
})(),(function (){var attrs21970 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21980 = self__.constituency;var G__21980__$1 = (((G__21980 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__21980));return G__21980__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21980 = self__.constituency;var G__21980__$1 = (((G__21980 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__21980));return G__21980__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21970))
{return React.DOM.li(sablono.interpreter.attributes(attrs21970),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21970),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21975 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21981 = self__.constituency;var G__21981__$1 = (((G__21981 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__21981));return G__21981__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21981 = self__.constituency;var G__21981__$1 = (((G__21981 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__21981));return G__21981__$1;
})(),cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21975))
{return React.DOM.li(sablono.interpreter.attributes(attrs21975),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21975),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21961){var self__ = this;
var _21961__$1 = this;return self__.meta21960;
});
clustermap.components.map_report.t21959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21961,meta21960__$1){var self__ = this;
var _21961__$1 = this;return (new clustermap.components.map_report.t21959(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta21960__$1));
});
clustermap.components.map_report.__GT_t21959 = (function __GT_t21959(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21960){return (new clustermap.components.map_report.t21959(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21960));
});
}
return (new clustermap.components.map_report.t21959(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$272);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,cljs.core.constant$keyword$236], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,cljs.core.constant$keyword$204], null));var pred__21985 = cljs.core._EQ__EQ_;var expr__21986 = type;if(cljs.core.truth_((pred__21985.cljs$core$IFn$_invoke$arity$2 ? pred__21985.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$269,expr__21986) : pred__21985.call(null,cljs.core.constant$keyword$269,expr__21986))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21985.cljs$core$IFn$_invoke$arity$2 ? pred__21985.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$270,expr__21986) : pred__21985.call(null,cljs.core.constant$keyword$270,expr__21986))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__21985.cljs$core$IFn$_invoke$arity$2 ? pred__21985.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$271,expr__21986) : pred__21985.call(null,cljs.core.constant$keyword$271,expr__21986))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
