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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__21840 = apc_stats;var G__21840__$1 = (((G__21840 == null))?null:cljs.core.constant$keyword$285.cljs$core$IFn$_invoke$arity$1(G__21840));return G__21840__$1;
})();var ic_count = (function (){var G__21841 = apc_stats;var G__21841__$1 = (((G__21841 == null))?null:cljs.core.constant$keyword$286.cljs$core$IFn$_invoke$arity$1(G__21841));return G__21841__$1;
})();if(typeof clustermap.components.map_report.t21842 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21842 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta21843){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21843 = meta21843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21842.cljs$lang$type = true;
clustermap.components.map_report.t21842.cljs$lang$ctorStr = "clustermap.components.map-report/t21842";
clustermap.components.map_report.t21842.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21842");
});
clustermap.components.map_report.t21842.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21842.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21847 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21847))
{return React.DOM.li(sablono.interpreter.attributes(attrs21847),(function (){var attrs21848 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21848))
{return React.DOM.small(sablono.interpreter.attributes(attrs21848),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21848));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21847),(function (){var attrs21849 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21849))
{return React.DOM.small(sablono.interpreter.attributes(attrs21849),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21849));
}
})());
}
})(),(function (){var attrs21850 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21850))
{return React.DOM.li(sablono.interpreter.attributes(attrs21850),(function (){var attrs21851 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21851))
{return React.DOM.small(sablono.interpreter.attributes(attrs21851),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21851));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21850),(function (){var attrs21852 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21852))
{return React.DOM.small(sablono.interpreter.attributes(attrs21852),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21852));
}
})());
}
})(),(function (){var attrs21853 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21863 = self__.apc_stats;var G__21863__$1 = (((G__21863 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21863));var G__21863__$2 = (((G__21863__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21863__$1));return G__21863__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21863 = self__.apc_stats;var G__21863__$1 = (((G__21863 == null))?null:cljs.core.constant$keyword$283.cljs$core$IFn$_invoke$arity$1(G__21863));var G__21863__$2 = (((G__21863__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21863__$1));return G__21863__$2;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21853))
{return React.DOM.li(sablono.interpreter.attributes(attrs21853),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21853),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21858 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21864 = self__.apc_stats;var G__21864__$1 = (((G__21864 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21864));var G__21864__$2 = (((G__21864__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21864__$1));return G__21864__$2;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21864 = self__.apc_stats;var G__21864__$1 = (((G__21864 == null))?null:cljs.core.constant$keyword$289.cljs$core$IFn$_invoke$arity$1(G__21864));var G__21864__$2 = (((G__21864__$1 == null))?null:cljs.core.constant$keyword$288.cljs$core$IFn$_invoke$arity$1(G__21864__$1));return G__21864__$2;
})(),cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21858))
{return React.DOM.li(sablono.interpreter.attributes(attrs21858),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21858),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21844){var self__ = this;
var _21844__$1 = this;return self__.meta21843;
});
clustermap.components.map_report.t21842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21844,meta21843__$1){var self__ = this;
var _21844__$1 = this;return (new clustermap.components.map_report.t21842(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21843__$1));
});
clustermap.components.map_report.__GT_t21842 = (function __GT_t21842(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21843){return (new clustermap.components.map_report.t21842(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21843));
});
}
return (new clustermap.components.map_report.t21842(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__21889 = portfolio_company;var G__21889__$1 = (((G__21889 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__21889));var G__21889__$2 = (((G__21889__$1 == null))?null:cljs.core.count(G__21889__$1));return G__21889__$2;
})();var const_count = (function (){var G__21890 = portfolio_company;var G__21890__$1 = (((G__21890 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__21890));var G__21890__$2 = (((G__21890__$1 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__21890__$1));var G__21890__$3 = (((G__21890__$2 == null))?null:cljs.core.count(G__21890__$2));return G__21890__$3;
})();if(typeof clustermap.components.map_report.t21891 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21891 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta21892){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21892 = meta21892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21891.cljs$lang$type = true;
clustermap.components.map_report.t21891.cljs$lang$ctorStr = "clustermap.components.map-report/t21891";
clustermap.components.map_report.t21891.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21891");
});
clustermap.components.map_report.t21891.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21891.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21894 = cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21894))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21894),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21894));
}
})()),React.DOM.ul(null,(function (){var attrs21895 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21895))
{return React.DOM.li(sablono.interpreter.attributes(attrs21895),(function (){var attrs21896 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21896))
{return React.DOM.small(sablono.interpreter.attributes(attrs21896),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21896));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21895),(function (){var attrs21897 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21897))
{return React.DOM.small(sablono.interpreter.attributes(attrs21897),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21897));
}
})());
}
})(),(function (){var attrs21898 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21898))
{return React.DOM.li(sablono.interpreter.attributes(attrs21898),(function (){var attrs21899 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21899))
{return React.DOM.small(sablono.interpreter.attributes(attrs21899),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21899));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21898),(function (){var attrs21900 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21900))
{return React.DOM.small(sablono.interpreter.attributes(attrs21900),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21900));
}
})());
}
})(),(function (){var attrs21901 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21911 = self__.portfolio_company;var G__21911__$1 = (((G__21911 == null))?null:cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(G__21911));return G__21911__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21911 = self__.portfolio_company;var G__21911__$1 = (((G__21911 == null))?null:cljs.core.constant$keyword$292.cljs$core$IFn$_invoke$arity$1(G__21911));return G__21911__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21901))
{return React.DOM.li(sablono.interpreter.attributes(attrs21901),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21901),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21906 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21912 = self__.portfolio_company;var G__21912__$1 = (((G__21912 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21912));return G__21912__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21912 = self__.portfolio_company;var G__21912__$1 = (((G__21912 == null))?null:cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(G__21912));return G__21912__$1;
})(),cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21906))
{return React.DOM.li(sablono.interpreter.attributes(attrs21906),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21906),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21893){var self__ = this;
var _21893__$1 = this;return self__.meta21892;
});
clustermap.components.map_report.t21891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21893,meta21892__$1){var self__ = this;
var _21893__$1 = this;return (new clustermap.components.map_report.t21891(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta21892__$1));
});
clustermap.components.map_report.__GT_t21891 = (function __GT_t21891(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21892){return (new clustermap.components.map_report.t21891(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta21892));
});
}
return (new clustermap.components.map_report.t21891(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__21937 = investor_company;var G__21937__$1 = (((G__21937 == null))?null:cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(G__21937));var G__21937__$2 = (((G__21937__$1 == null))?null:cljs.core.count(G__21937__$1));return G__21937__$2;
})();var const_count = (function (){var G__21938 = investor_company;var G__21938__$1 = (((G__21938 == null))?null:cljs.core.constant$keyword$345.cljs$core$IFn$_invoke$arity$1(G__21938));var G__21938__$2 = (((G__21938__$1 == null))?null:cljs.core.constant$keyword$346.cljs$core$IFn$_invoke$arity$1(G__21938__$1));var G__21938__$3 = (((G__21938__$2 == null))?null:cljs.core.count(G__21938__$2));return G__21938__$3;
})();if(typeof clustermap.components.map_report.t21939 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21939 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta21940){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21940 = meta21940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21939.cljs$lang$type = true;
clustermap.components.map_report.t21939.cljs$lang$ctorStr = "clustermap.components.map-report/t21939";
clustermap.components.map_report.t21939.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21939");
});
clustermap.components.map_report.t21939.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21939.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21942 = cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21942))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21942),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21942));
}
})()),React.DOM.ul(null,(function (){var attrs21943 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21943))
{return React.DOM.li(sablono.interpreter.attributes(attrs21943),(function (){var attrs21944 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21944))
{return React.DOM.small(sablono.interpreter.attributes(attrs21944),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21944));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21943),(function (){var attrs21945 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21945))
{return React.DOM.small(sablono.interpreter.attributes(attrs21945),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21945));
}
})());
}
})(),(function (){var attrs21946 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21946))
{return React.DOM.li(sablono.interpreter.attributes(attrs21946),(function (){var attrs21947 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21947))
{return React.DOM.small(sablono.interpreter.attributes(attrs21947),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21947));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21946),(function (){var attrs21948 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21948))
{return React.DOM.small(sablono.interpreter.attributes(attrs21948),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21948));
}
})());
}
})(),(function (){var attrs21949 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21959 = self__.investor_company;var G__21959__$1 = (((G__21959 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__21959));return G__21959__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21959 = self__.investor_company;var G__21959__$1 = (((G__21959 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__21959));return G__21959__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21949))
{return React.DOM.li(sablono.interpreter.attributes(attrs21949),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21949),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21954 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21960 = self__.investor_company;var G__21960__$1 = (((G__21960 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__21960));return G__21960__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21960 = self__.investor_company;var G__21960__$1 = (((G__21960 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__21960));return G__21960__$1;
})(),cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21954))
{return React.DOM.li(sablono.interpreter.attributes(attrs21954),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21954),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21941){var self__ = this;
var _21941__$1 = this;return self__.meta21940;
});
clustermap.components.map_report.t21939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21941,meta21940__$1){var self__ = this;
var _21941__$1 = this;return (new clustermap.components.map_report.t21939(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta21940__$1));
});
clustermap.components.map_report.__GT_t21939 = (function __GT_t21939(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21940){return (new clustermap.components.map_report.t21939(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta21940));
});
}
return (new clustermap.components.map_report.t21939(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__21986 = constituency;var G__21986__$1 = (((G__21986 == null))?null:cljs.core.constant$keyword$340.cljs$core$IFn$_invoke$arity$1(G__21986));var G__21986__$2 = (((G__21986__$1 == null))?null:cljs.core.count(G__21986__$1));return G__21986__$2;
})();var ic_count = (function (){var G__21987 = constituency;var G__21987__$1 = (((G__21987 == null))?null:cljs.core.constant$keyword$339.cljs$core$IFn$_invoke$arity$1(G__21987));var G__21987__$2 = (((G__21987__$1 == null))?null:cljs.core.count(G__21987__$1));return G__21987__$2;
})();if(typeof clustermap.components.map_report.t21988 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21988 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta21989){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21989 = meta21989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21988.cljs$lang$type = true;
clustermap.components.map_report.t21988.cljs$lang$ctorStr = "clustermap.components.map-report/t21988";
clustermap.components.map_report.t21988.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21988");
});
clustermap.components.map_report.t21988.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21988.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21991 = cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21991))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21991),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21991));
}
})(),(function (){var attrs21992 = cljs.core.constant$keyword$349.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21992))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21992),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21992),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21993 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21993))
{return React.DOM.li(sablono.interpreter.attributes(attrs21993),(function (){var attrs21994 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21994))
{return React.DOM.small(sablono.interpreter.attributes(attrs21994),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21994));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21993),(function (){var attrs21995 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21995))
{return React.DOM.small(sablono.interpreter.attributes(attrs21995),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21995));
}
})());
}
})(),(function (){var attrs21996 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21996))
{return React.DOM.li(sablono.interpreter.attributes(attrs21996),(function (){var attrs21997 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21997))
{return React.DOM.small(sablono.interpreter.attributes(attrs21997),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21997));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21996),(function (){var attrs21998 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21998))
{return React.DOM.small(sablono.interpreter.attributes(attrs21998),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21998));
}
})());
}
})(),(function (){var attrs21999 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__22009 = self__.constituency;var G__22009__$1 = (((G__22009 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22009));return G__22009__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__22009 = self__.constituency;var G__22009__$1 = (((G__22009 == null))?null:cljs.core.constant$keyword$347.cljs$core$IFn$_invoke$arity$1(G__22009));return G__22009__$1;
})(),cljs.core.constant$keyword$265,2,cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs21999))
{return React.DOM.li(sablono.interpreter.attributes(attrs21999),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21999),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs22004 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__22010 = self__.constituency;var G__22010__$1 = (((G__22010 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__22010));return G__22010__$1;
})(),cljs.core.constant$keyword$200,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__22010 = self__.constituency;var G__22010__$1 = (((G__22010 == null))?null:cljs.core.constant$keyword$348.cljs$core$IFn$_invoke$arity$1(G__22010));return G__22010__$1;
})(),cljs.core.constant$keyword$200,"-"));if(cljs.core.map_QMARK_(attrs22004))
{return React.DOM.li(sablono.interpreter.attributes(attrs22004),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs22004),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret(clustermap.components.map_report.full_report_button(self__.comm)));
});
clustermap.components.map_report.t21988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21990){var self__ = this;
var _21990__$1 = this;return self__.meta21989;
});
clustermap.components.map_report.t21988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21990,meta21989__$1){var self__ = this;
var _21990__$1 = this;return (new clustermap.components.map_report.t21988(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta21989__$1));
});
clustermap.components.map_report.__GT_t21988 = (function __GT_t21988(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21989){return (new clustermap.components.map_report.t21988(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta21989));
});
}
return (new clustermap.components.map_report.t21988(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.constant$keyword$272);var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,cljs.core.constant$keyword$236], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$274,cljs.core.constant$keyword$204], null));var pred__22014 = cljs.core._EQ__EQ_;var expr__22015 = type;if(cljs.core.truth_((pred__22014.cljs$core$IFn$_invoke$arity$2 ? pred__22014.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$269,expr__22015) : pred__22014.call(null,cljs.core.constant$keyword$269,expr__22015))))
{return clustermap.components.map_report.portfolio_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22014.cljs$core$IFn$_invoke$arity$2 ? pred__22014.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$270,expr__22015) : pred__22014.call(null,cljs.core.constant$keyword$270,expr__22015))))
{return clustermap.components.map_report.investor_company_report(value,comm);
} else
{if(cljs.core.truth_((pred__22014.cljs$core$IFn$_invoke$arity$2 ? pred__22014.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$271,expr__22015) : pred__22014.call(null,cljs.core.constant$keyword$271,expr__22015))))
{return clustermap.components.map_report.constituency_report(value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$278.cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.cljs$core$IFn$_invoke$arity$4(app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$272,comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
