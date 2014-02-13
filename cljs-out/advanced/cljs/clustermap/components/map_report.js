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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$284,"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21924 = apc_stats;var G__21924__$1 = (((G__21924 == null))?null:cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(G__21924));return G__21924__$1;
})();var ic_count = (function (){var G__21925 = apc_stats;var G__21925__$1 = (((G__21925 == null))?null:cljs.core.constant$keyword$297.cljs$core$IFn$_invoke$arity$1(G__21925));return G__21925__$1;
})();if(typeof clustermap.components.map_report.t21926 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21926 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21927){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21927 = meta21927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21926.cljs$lang$type = true;
clustermap.components.map_report.t21926.cljs$lang$ctorStr = "clustermap.components.map-report/t21926";
clustermap.components.map_report.t21926.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21926");
});
clustermap.components.map_report.t21926.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21926.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21931 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs21931))
{return React.DOM.li(sablono.interpreter.attributes(attrs21931),(function (){var attrs21932 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21932))
{return React.DOM.small(sablono.interpreter.attributes(attrs21932),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21932));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21931),(function (){var attrs21933 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21933))
{return React.DOM.small(sablono.interpreter.attributes(attrs21933),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21933));
}
})());
}
})(),(function (){var attrs21934 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs21934))
{return React.DOM.li(sablono.interpreter.attributes(attrs21934),(function (){var attrs21935 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21935))
{return React.DOM.small(sablono.interpreter.attributes(attrs21935),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21935));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21934),(function (){var attrs21936 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21936))
{return React.DOM.small(sablono.interpreter.attributes(attrs21936),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21936));
}
})());
}
})(),(function (){var attrs21937 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21947 = self__.apc_stats;var G__21947__$1 = (((G__21947 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21947));var G__21947__$2 = (((G__21947__$1 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__21947__$1));return G__21947__$2;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21947 = self__.apc_stats;var G__21947__$1 = (((G__21947 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21947));var G__21947__$2 = (((G__21947__$1 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__21947__$1));return G__21947__$2;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs21937))
{return React.DOM.li(sablono.interpreter.attributes(attrs21937),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21937),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21942 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21948 = self__.apc_stats;var G__21948__$1 = (((G__21948 == null))?null:cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(G__21948));var G__21948__$2 = (((G__21948__$1 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__21948__$1));return G__21948__$2;
})(),cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21948 = self__.apc_stats;var G__21948__$1 = (((G__21948 == null))?null:cljs.core.constant$keyword$300.cljs$core$IFn$_invoke$arity$1(G__21948));var G__21948__$2 = (((G__21948__$1 == null))?null:cljs.core.constant$keyword$299.cljs$core$IFn$_invoke$arity$1(G__21948__$1));return G__21948__$2;
})(),cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs21942))
{return React.DOM.li(sablono.interpreter.attributes(attrs21942),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21942),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21928){var self__ = this;
var _21928__$1 = this;return self__.meta21927;
});
clustermap.components.map_report.t21926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21928,meta21927__$1){var self__ = this;
var _21928__$1 = this;return (new clustermap.components.map_report.t21926(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21927__$1));
});
clustermap.components.map_report.__GT_t21926 = (function __GT_t21926(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21927){return (new clustermap.components.map_report.t21926(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21927));
});
}
return (new clustermap.components.map_report.t21926(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21973 = portfolio_company;var G__21973__$1 = (((G__21973 == null))?null:cljs.core.constant$keyword$304.cljs$core$IFn$_invoke$arity$1(G__21973));var G__21973__$2 = (((G__21973__$1 == null))?null:cljs.core.count(G__21973__$1));return G__21973__$2;
})();var const_count = (function (){var G__21974 = portfolio_company;var G__21974__$1 = (((G__21974 == null))?null:cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(G__21974));var G__21974__$2 = (((G__21974__$1 == null))?null:cljs.core.constant$keyword$368.cljs$core$IFn$_invoke$arity$1(G__21974__$1));var G__21974__$3 = (((G__21974__$2 == null))?null:cljs.core.count(G__21974__$2));return G__21974__$3;
})();if(typeof clustermap.components.map_report.t21975 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21975 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta21976){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21976 = meta21976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21975.cljs$lang$type = true;
clustermap.components.map_report.t21975.cljs$lang$ctorStr = "clustermap.components.map-report/t21975";
clustermap.components.map_report.t21975.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21975");
});
clustermap.components.map_report.t21975.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21975.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21978 = cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21978))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21978),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21978));
}
})()),React.DOM.ul(null,(function (){var attrs21979 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21979))
{return React.DOM.li(sablono.interpreter.attributes(attrs21979),(function (){var attrs21980 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21980))
{return React.DOM.small(sablono.interpreter.attributes(attrs21980),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21980));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21979),(function (){var attrs21981 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21981))
{return React.DOM.small(sablono.interpreter.attributes(attrs21981),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21981));
}
})());
}
})(),(function (){var attrs21982 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21982))
{return React.DOM.li(sablono.interpreter.attributes(attrs21982),(function (){var attrs21983 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21983))
{return React.DOM.small(sablono.interpreter.attributes(attrs21983),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21983));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21982),(function (){var attrs21984 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21984))
{return React.DOM.small(sablono.interpreter.attributes(attrs21984),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21984));
}
})());
}
})(),(function (){var attrs21985 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21995 = self__.portfolio_company;var G__21995__$1 = (((G__21995 == null))?null:cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(G__21995));return G__21995__$1;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21995 = self__.portfolio_company;var G__21995__$1 = (((G__21995 == null))?null:cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(G__21995));return G__21995__$1;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs21985))
{return React.DOM.li(sablono.interpreter.attributes(attrs21985),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21985),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21990 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21996 = self__.portfolio_company;var G__21996__$1 = (((G__21996 == null))?null:cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(G__21996));return G__21996__$1;
})(),cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21996 = self__.portfolio_company;var G__21996__$1 = (((G__21996 == null))?null:cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(G__21996));return G__21996__$1;
})(),cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs21990))
{return React.DOM.li(sablono.interpreter.attributes(attrs21990),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21990),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21977){var self__ = this;
var _21977__$1 = this;return self__.meta21976;
});
clustermap.components.map_report.t21975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21977,meta21976__$1){var self__ = this;
var _21977__$1 = this;return (new clustermap.components.map_report.t21975(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta21976__$1));
});
clustermap.components.map_report.__GT_t21975 = (function __GT_t21975(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21976){return (new clustermap.components.map_report.t21975(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21976));
});
}
return (new clustermap.components.map_report.t21975(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__22021 = investor_company;var G__22021__$1 = (((G__22021 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22021));var G__22021__$2 = (((G__22021__$1 == null))?null:cljs.core.count(G__22021__$1));return G__22021__$2;
})();var const_count = (function (){var G__22022 = investor_company;var G__22022__$1 = (((G__22022 == null))?null:cljs.core.constant$keyword$367.cljs$core$IFn$_invoke$arity$1(G__22022));var G__22022__$2 = (((G__22022__$1 == null))?null:cljs.core.constant$keyword$368.cljs$core$IFn$_invoke$arity$1(G__22022__$1));var G__22022__$3 = (((G__22022__$2 == null))?null:cljs.core.count(G__22022__$2));return G__22022__$3;
})();if(typeof clustermap.components.map_report.t22023 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22023 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta22024){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta22024 = meta22024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22023.cljs$lang$type = true;
clustermap.components.map_report.t22023.cljs$lang$ctorStr = "clustermap.components.map-report/t22023";
clustermap.components.map_report.t22023.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22023");
});
clustermap.components.map_report.t22023.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22023.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22026 = cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs22026))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22026),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22026));
}
})()),React.DOM.ul(null,(function (){var attrs22027 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22027))
{return React.DOM.li(sablono.interpreter.attributes(attrs22027),(function (){var attrs22028 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22028))
{return React.DOM.small(sablono.interpreter.attributes(attrs22028),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22028));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22027),(function (){var attrs22029 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22029))
{return React.DOM.small(sablono.interpreter.attributes(attrs22029),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22029));
}
})());
}
})(),(function (){var attrs22030 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs22030))
{return React.DOM.li(sablono.interpreter.attributes(attrs22030),(function (){var attrs22031 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22031))
{return React.DOM.small(sablono.interpreter.attributes(attrs22031),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22031));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22030),(function (){var attrs22032 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs22032))
{return React.DOM.small(sablono.interpreter.attributes(attrs22032),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22032));
}
})());
}
})(),(function (){var attrs22033 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22043 = self__.investor_company;var G__22043__$1 = (((G__22043 == null))?null:cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(G__22043));return G__22043__$1;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22043 = self__.investor_company;var G__22043__$1 = (((G__22043 == null))?null:cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(G__22043));return G__22043__$1;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs22033))
{return React.DOM.li(sablono.interpreter.attributes(attrs22033),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22033),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22038 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22044 = self__.investor_company;var G__22044__$1 = (((G__22044 == null))?null:cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(G__22044));return G__22044__$1;
})(),cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22044 = self__.investor_company;var G__22044__$1 = (((G__22044 == null))?null:cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(G__22044));return G__22044__$1;
})(),cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs22038))
{return React.DOM.li(sablono.interpreter.attributes(attrs22038),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22038),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22025){var self__ = this;
var _22025__$1 = this;return self__.meta22024;
});
clustermap.components.map_report.t22023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22025,meta22024__$1){var self__ = this;
var _22025__$1 = this;return (new clustermap.components.map_report.t22023(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta22024__$1));
});
clustermap.components.map_report.__GT_t22023 = (function __GT_t22023(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta22024){return (new clustermap.components.map_report.t22023(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta22024));
});
}
return (new clustermap.components.map_report.t22023(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__22070 = constituency;var G__22070__$1 = (((G__22070 == null))?null:cljs.core.constant$keyword$361.cljs$core$IFn$_invoke$arity$1(G__22070));var G__22070__$2 = (((G__22070__$1 == null))?null:cljs.core.count(G__22070__$1));return G__22070__$2;
})();var ic_count = (function (){var G__22071 = constituency;var G__22071__$1 = (((G__22071 == null))?null:cljs.core.constant$keyword$304.cljs$core$IFn$_invoke$arity$1(G__22071));var G__22071__$2 = (((G__22071__$1 == null))?null:cljs.core.count(G__22071__$1));return G__22071__$2;
})();if(typeof clustermap.components.map_report.t22072 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t22072 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta22073){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta22073 = meta22073;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t22072.cljs$lang$type = true;
clustermap.components.map_report.t22072.cljs$lang$ctorStr = "clustermap.components.map-report/t22072";
clustermap.components.map_report.t22072.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t22072");
});
clustermap.components.map_report.t22072.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t22072.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs22075 = cljs.core.constant$keyword$257.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22075))
{return React.DOM.h2(sablono.interpreter.attributes(attrs22075),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs22075));
}
})(),(function (){var attrs22076 = cljs.core.constant$keyword$371.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs22076))
{return React.DOM.h3(sablono.interpreter.attributes(attrs22076),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs22076),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$372.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs22077 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs22077))
{return React.DOM.li(sablono.interpreter.attributes(attrs22077),(function (){var attrs22078 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22078))
{return React.DOM.small(sablono.interpreter.attributes(attrs22078),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22078));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22077),(function (){var attrs22079 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs22079))
{return React.DOM.small(sablono.interpreter.attributes(attrs22079),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22079));
}
})());
}
})(),(function (){var attrs22080 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs22080))
{return React.DOM.li(sablono.interpreter.attributes(attrs22080),(function (){var attrs22081 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22081))
{return React.DOM.small(sablono.interpreter.attributes(attrs22081),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22081));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22080),(function (){var attrs22082 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs22082))
{return React.DOM.small(sablono.interpreter.attributes(attrs22082),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs22082));
}
})());
}
})(),(function (){var attrs22083 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22093 = self__.constituency;var G__22093__$1 = (((G__22093 == null))?null:cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(G__22093));return G__22093__$1;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22093 = self__.constituency;var G__22093__$1 = (((G__22093 == null))?null:cljs.core.constant$keyword$369.cljs$core$IFn$_invoke$arity$1(G__22093));return G__22093__$1;
})(),cljs.core.constant$keyword$276,2,cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs22083))
{return React.DOM.li(sablono.interpreter.attributes(attrs22083),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22083),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22088 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22094 = self__.constituency;var G__22094__$1 = (((G__22094 == null))?null:cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(G__22094));return G__22094__$1;
})(),cljs.core.constant$keyword$211,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22094 = self__.constituency;var G__22094__$1 = (((G__22094 == null))?null:cljs.core.constant$keyword$370.cljs$core$IFn$_invoke$arity$1(G__22094));return G__22094__$1;
})(),cljs.core.constant$keyword$211,"-"));if(cljs.core.map_QMARK_(attrs22088))
{return React.DOM.li(sablono.interpreter.attributes(attrs22088),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22088),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t22072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22074){var self__ = this;
var _22074__$1 = this;return self__.meta22073;
});
clustermap.components.map_report.t22072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22074,meta22073__$1){var self__ = this;
var _22074__$1 = this;return (new clustermap.components.map_report.t22072(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta22073__$1));
});
clustermap.components.map_report.__GT_t22072 = (function __GT_t22072(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta22073){return (new clustermap.components.map_report.t22072(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta22073));
});
}
return (new clustermap.components.map_report.t22072(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$283);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,cljs.core.constant$keyword$247], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$285,cljs.core.constant$keyword$215], null));var pred__22098 = cljs.core._EQ__EQ_;var expr__22099 = type;if(cljs.core.truth_((pred__22098.cljs$core$IFn$_invoke$arity$2 ? pred__22098.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$280,expr__22099) : pred__22098.call(null,cljs.core.constant$keyword$280,expr__22099))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22098.cljs$core$IFn$_invoke$arity$2 ? pred__22098.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$281,expr__22099) : pred__22098.call(null,cljs.core.constant$keyword$281,expr__22099))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22098.cljs$core$IFn$_invoke$arity$2 ? pred__22098.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$282,expr__22099) : pred__22098.call(null,cljs.core.constant$keyword$282,expr__22099))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
