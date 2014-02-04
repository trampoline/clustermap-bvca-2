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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$272,"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21851 = apc_stats;var G__21851__$1 = (((G__21851 == null))?null:cljs.core.constant$keyword$284.cljs$core$IFn$_invoke$arity$1(G__21851));return G__21851__$1;
})();var ic_count = (function (){var G__21852 = apc_stats;var G__21852__$1 = (((G__21852 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21852));return G__21852__$1;
})();if(typeof clustermap.components.map_report.t21853 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21853 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21854){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21854 = meta21854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21853.cljs$lang$type = true;
clustermap.components.map_report.t21853.cljs$lang$ctorStr = "clustermap.components.map-report/t21853";
clustermap.components.map_report.t21853.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21853");
});
clustermap.components.map_report.t21853.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21853.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21858 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$199,"-"));if(cljs.core.map_QMARK_(attrs21858))
{return React.DOM.li(sablono.interpreter.attributes(attrs21858),(function (){var attrs21859 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21859))
{return React.DOM.small(sablono.interpreter.attributes(attrs21859),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21859));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21858),(function (){var attrs21860 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21860))
{return React.DOM.small(sablono.interpreter.attributes(attrs21860),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21860));
}
})());
}
})(),(function (){var attrs21861 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$199,"-"));if(cljs.core.map_QMARK_(attrs21861))
{return React.DOM.li(sablono.interpreter.attributes(attrs21861),(function (){var attrs21862 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21862))
{return React.DOM.small(sablono.interpreter.attributes(attrs21862),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21862));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21861),(function (){var attrs21863 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21863))
{return React.DOM.small(sablono.interpreter.attributes(attrs21863),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21863));
}
})());
}
})(),(function (){var attrs21864 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21874 = self__.apc_stats;var G__21874__$1 = (((G__21874 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21874));var G__21874__$2 = (((G__21874__$1 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21874__$1));return G__21874__$2;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21874 = self__.apc_stats;var G__21874__$1 = (((G__21874 == null))?null:cljs.core.constant$keyword$282.cljs$core$IFn$_invoke$arity$1(G__21874));var G__21874__$2 = (((G__21874__$1 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21874__$1));return G__21874__$2;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-"));if(cljs.core.map_QMARK_(attrs21864))
{return React.DOM.li(sablono.interpreter.attributes(attrs21864),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21864),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21869 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21875 = self__.apc_stats;var G__21875__$1 = (((G__21875 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21875));var G__21875__$2 = (((G__21875__$1 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21875__$1));return G__21875__$2;
})(),cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21875 = self__.apc_stats;var G__21875__$1 = (((G__21875 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21875));var G__21875__$2 = (((G__21875__$1 == null))?null:cljs.core.constant$keyword$287.cljs$core$IFn$_invoke$arity$1(G__21875__$1));return G__21875__$2;
})(),cljs.core.constant$keyword$199,"-"));if(cljs.core.map_QMARK_(attrs21869))
{return React.DOM.li(sablono.interpreter.attributes(attrs21869),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21869),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21855){var self__ = this;
var _21855__$1 = this;return self__.meta21854;
});
clustermap.components.map_report.t21853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21855,meta21854__$1){var self__ = this;
var _21855__$1 = this;return (new clustermap.components.map_report.t21853(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21854__$1));
});
clustermap.components.map_report.__GT_t21853 = (function __GT_t21853(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21854){return (new clustermap.components.map_report.t21853(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21854));
});
}
return (new clustermap.components.map_report.t21853(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21900 = portfolio_company;var G__21900__$1 = (((G__21900 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__21900));var G__21900__$2 = (((G__21900__$1 == null))?null:cljs.core.count(G__21900__$1));return G__21900__$2;
})();var const_count = (function (){var G__21901 = portfolio_company;var G__21901__$1 = (((G__21901 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__21901));var G__21901__$2 = (((G__21901__$1 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__21901__$1));var G__21901__$3 = (((G__21901__$2 == null))?null:cljs.core.count(G__21901__$2));return G__21901__$3;
})();if(typeof clustermap.components.map_report.t21902 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21902 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta21903){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21903 = meta21903;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21902.cljs$lang$type = true;
clustermap.components.map_report.t21902.cljs$lang$ctorStr = "clustermap.components.map-report/t21902";
clustermap.components.map_report.t21902.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21902");
});
clustermap.components.map_report.t21902.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21902.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21905 = cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21905))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21905),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21905));
}
})()),React.DOM.ul(null,(function (){var attrs21906 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21906))
{return React.DOM.li(sablono.interpreter.attributes(attrs21906),(function (){var attrs21907 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21907))
{return React.DOM.small(sablono.interpreter.attributes(attrs21907),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21907));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21906),(function (){var attrs21908 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21908))
{return React.DOM.small(sablono.interpreter.attributes(attrs21908),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21908));
}
})());
}
})(),(function (){var attrs21909 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21909))
{return React.DOM.li(sablono.interpreter.attributes(attrs21909),(function (){var attrs21910 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21910))
{return React.DOM.small(sablono.interpreter.attributes(attrs21910),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21910));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21909),(function (){var attrs21911 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21911))
{return React.DOM.small(sablono.interpreter.attributes(attrs21911),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21911));
}
})());
}
})(),(function (){var attrs21912 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21922 = self__.portfolio_company;var G__21922__$1 = (((G__21922 == null))?null:cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(G__21922));return G__21922__$1;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21922 = self__.portfolio_company;var G__21922__$1 = (((G__21922 == null))?null:cljs.core.constant$keyword$291.cljs$core$IFn$_invoke$arity$1(G__21922));return G__21922__$1;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-"));if(cljs.core.map_QMARK_(attrs21912))
{return React.DOM.li(sablono.interpreter.attributes(attrs21912),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21912),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21917 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21923 = self__.portfolio_company;var G__21923__$1 = (((G__21923 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21923));return G__21923__$1;
})(),cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21923 = self__.portfolio_company;var G__21923__$1 = (((G__21923 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21923));return G__21923__$1;
})(),cljs.core.constant$keyword$199,"-"));if(cljs.core.map_QMARK_(attrs21917))
{return React.DOM.li(sablono.interpreter.attributes(attrs21917),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21917),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21902.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21904){var self__ = this;
var _21904__$1 = this;return self__.meta21903;
});
clustermap.components.map_report.t21902.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21904,meta21903__$1){var self__ = this;
var _21904__$1 = this;return (new clustermap.components.map_report.t21902(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta21903__$1));
});
clustermap.components.map_report.__GT_t21902 = (function __GT_t21902(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21903){return (new clustermap.components.map_report.t21902(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21903));
});
}
return (new clustermap.components.map_report.t21902(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__21948 = investor_company;var G__21948__$1 = (((G__21948 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__21948));var G__21948__$2 = (((G__21948__$1 == null))?null:cljs.core.count(G__21948__$1));return G__21948__$2;
})();var const_count = (function (){var G__21949 = investor_company;var G__21949__$1 = (((G__21949 == null))?null:cljs.core.constant$keyword$344.cljs$core$IFn$_invoke$arity$1(G__21949));var G__21949__$2 = (((G__21949__$1 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__21949__$1));var G__21949__$3 = (((G__21949__$2 == null))?null:cljs.core.count(G__21949__$2));return G__21949__$3;
})();if(typeof clustermap.components.map_report.t21950 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21950 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta21951){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21951 = meta21951;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21950.cljs$lang$type = true;
clustermap.components.map_report.t21950.cljs$lang$ctorStr = "clustermap.components.map-report/t21950";
clustermap.components.map_report.t21950.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21950");
});
clustermap.components.map_report.t21950.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21950.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21953 = cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21953))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21953),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21953));
}
})()),React.DOM.ul(null,(function (){var attrs21954 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21954))
{return React.DOM.li(sablono.interpreter.attributes(attrs21954),(function (){var attrs21955 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21955))
{return React.DOM.small(sablono.interpreter.attributes(attrs21955),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21955));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21954),(function (){var attrs21956 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21956))
{return React.DOM.small(sablono.interpreter.attributes(attrs21956),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21956));
}
})());
}
})(),(function (){var attrs21957 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21957))
{return React.DOM.li(sablono.interpreter.attributes(attrs21957),(function (){var attrs21958 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21958))
{return React.DOM.small(sablono.interpreter.attributes(attrs21958),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21958));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21957),(function (){var attrs21959 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21959))
{return React.DOM.small(sablono.interpreter.attributes(attrs21959),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21959));
}
})());
}
})(),(function (){var attrs21960 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21970 = self__.investor_company;var G__21970__$1 = (((G__21970 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__21970));return G__21970__$1;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21970 = self__.investor_company;var G__21970__$1 = (((G__21970 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__21970));return G__21970__$1;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-"));if(cljs.core.map_QMARK_(attrs21960))
{return React.DOM.li(sablono.interpreter.attributes(attrs21960),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21960),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21965 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21971 = self__.investor_company;var G__21971__$1 = (((G__21971 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__21971));return G__21971__$1;
})(),cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21971 = self__.investor_company;var G__21971__$1 = (((G__21971 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__21971));return G__21971__$1;
})(),cljs.core.constant$keyword$199,"-"));if(cljs.core.map_QMARK_(attrs21965))
{return React.DOM.li(sablono.interpreter.attributes(attrs21965),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21965),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21952){var self__ = this;
var _21952__$1 = this;return self__.meta21951;
});
clustermap.components.map_report.t21950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21952,meta21951__$1){var self__ = this;
var _21952__$1 = this;return (new clustermap.components.map_report.t21950(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta21951__$1));
});
clustermap.components.map_report.__GT_t21950 = (function __GT_t21950(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21951){return (new clustermap.components.map_report.t21950(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21951));
});
}
return (new clustermap.components.map_report.t21950(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__21997 = constituency;var G__21997__$1 = (((G__21997 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__21997));var G__21997__$2 = (((G__21997__$1 == null))?null:cljs.core.count(G__21997__$1));return G__21997__$2;
})();var ic_count = (function (){var G__21998 = constituency;var G__21998__$1 = (((G__21998 == null))?null:cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(G__21998));var G__21998__$2 = (((G__21998__$1 == null))?null:cljs.core.count(G__21998__$1));return G__21998__$2;
})();if(typeof clustermap.components.map_report.t21999 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21999 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta22000){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22000 = meta22000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21999.cljs$lang$type = true;
clustermap.components.map_report.t21999.cljs$lang$ctorStr = "clustermap.components.map-report/t21999";
clustermap.components.map_report.t21999.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21999");
});
clustermap.components.map_report.t21999.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21999.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22002 = cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22002))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22002),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22002));
}
})(),(function (){var attrs22003 = cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22003))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22003),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22003),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22004 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22004))
{return React.DOM.li(sablono.interpreter.attributes(attrs22004),(function (){var attrs22005 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22005))
{return React.DOM.small(sablono.interpreter.attributes(attrs22005),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22005));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22004),(function (){var attrs22006 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22006))
{return React.DOM.small(sablono.interpreter.attributes(attrs22006),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22006));
}
})());
}
})(),(function (){var attrs22007 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22007))
{return React.DOM.li(sablono.interpreter.attributes(attrs22007),(function (){var attrs22008 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22008))
{return React.DOM.small(sablono.interpreter.attributes(attrs22008),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22008));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22007),(function (){var attrs22009 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22009))
{return React.DOM.small(sablono.interpreter.attributes(attrs22009),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22009));
}
})());
}
})(),(function (){var attrs22010 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22020 = self__.constituency;var G__22020__$1 = (((G__22020 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__22020));return G__22020__$1;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22020 = self__.constituency;var G__22020__$1 = (((G__22020 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__22020));return G__22020__$1;
})(),cljs.core.constant$keyword$264,2,cljs.core.constant$keyword$199,"-"));if(cljs.core.map_QMARK_(attrs22010))
{return React.DOM.li(sablono.interpreter.attributes(attrs22010),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22010),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22015 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22021 = self__.constituency;var G__22021__$1 = (((G__22021 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22021));return G__22021__$1;
})(),cljs.core.constant$keyword$199,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22021 = self__.constituency;var G__22021__$1 = (((G__22021 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22021));return G__22021__$1;
})(),cljs.core.constant$keyword$199,"-"));if(cljs.core.map_QMARK_(attrs22015))
{return React.DOM.li(sablono.interpreter.attributes(attrs22015),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22015),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22001){var self__ = this;
var _22001__$1 = this;return self__.meta22000;
});
clustermap.components.map_report.t21999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22001,meta22000__$1){var self__ = this;
var _22001__$1 = this;return (new clustermap.components.map_report.t21999(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta22000__$1));
});
clustermap.components.map_report.__GT_t21999 = (function __GT_t21999(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta22000){return (new clustermap.components.map_report.t21999(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta22000));
});
}
return (new clustermap.components.map_report.t21999(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$271);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,cljs.core.constant$keyword$235], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$273,cljs.core.constant$keyword$203], null));var pred__22025 = cljs.core._EQ__EQ_;var expr__22026 = type;if(cljs.core.truth_((pred__22025.cljs$core$IFn$_invoke$arity$2 ? pred__22025.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$268,expr__22026) : pred__22025.call(null,cljs.core.constant$keyword$268,expr__22026))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22025.cljs$core$IFn$_invoke$arity$2 ? pred__22025.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$269,expr__22026) : pred__22025.call(null,cljs.core.constant$keyword$269,expr__22026))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22025.cljs$core$IFn$_invoke$arity$2 ? pred__22025.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$270,expr__22026) : pred__22025.call(null,cljs.core.constant$keyword$270,expr__22026))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$271,comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
