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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__21090 = apc_stats;var G__21090__$1 = (((G__21090 == null))?null:cljs.core.constant$keyword$242.cljs$core$IFn$_invoke$arity$1(G__21090));return G__21090__$1;
})();var ic_count = (function (){var G__21091 = apc_stats;var G__21091__$1 = (((G__21091 == null))?null:cljs.core.constant$keyword$243.cljs$core$IFn$_invoke$arity$1(G__21091));return G__21091__$1;
})();if(typeof clustermap.components.map_report.t21092 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21092 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta21093){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta21093 = meta21093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21092.cljs$lang$type = true;
clustermap.components.map_report.t21092.cljs$lang$ctorStr = "clustermap.components.map-report/t21092";
clustermap.components.map_report.t21092.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21092");
});
clustermap.components.map_report.t21092.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21092.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs21097 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.pc_count,cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,self__.pc_count,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21097))
{return React.DOM.li(sablono.interpreter.attributes(attrs21097),(function (){var attrs21098 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21098))
{return React.DOM.small(sablono.interpreter.attributes(attrs21098),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21098));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21097),(function (){var attrs21099 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21099))
{return React.DOM.small(sablono.interpreter.attributes(attrs21099),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21099));
}
})());
}
})(),(function (){var attrs21100 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(self__.ic_count,cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,self__.ic_count,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21100))
{return React.DOM.li(sablono.interpreter.attributes(attrs21100),(function (){var attrs21101 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21101))
{return React.DOM.small(sablono.interpreter.attributes(attrs21101),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21101));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21100),(function (){var attrs21102 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21102))
{return React.DOM.small(sablono.interpreter.attributes(attrs21102),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21102));
}
})());
}
})(),(function (){var attrs21103 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21113 = self__.apc_stats;var G__21113__$1 = (((G__21113 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__21113));var G__21113__$2 = (((G__21113__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__21113__$1));return G__21113__$2;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21113 = self__.apc_stats;var G__21113__$1 = (((G__21113 == null))?null:cljs.core.constant$keyword$240.cljs$core$IFn$_invoke$arity$1(G__21113));var G__21113__$2 = (((G__21113__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__21113__$1));return G__21113__$2;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21103))
{return React.DOM.li(sablono.interpreter.attributes(attrs21103),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21103),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21108 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21114 = self__.apc_stats;var G__21114__$1 = (((G__21114 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__21114));var G__21114__$2 = (((G__21114__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__21114__$1));return G__21114__$2;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21114 = self__.apc_stats;var G__21114__$1 = (((G__21114 == null))?null:cljs.core.constant$keyword$246.cljs$core$IFn$_invoke$arity$1(G__21114));var G__21114__$2 = (((G__21114__$1 == null))?null:cljs.core.constant$keyword$245.cljs$core$IFn$_invoke$arity$1(G__21114__$1));return G__21114__$2;
})(),cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21108))
{return React.DOM.li(sablono.interpreter.attributes(attrs21108),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21108),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21094){var self__ = this;
var _21094__$1 = this;return self__.meta21093;
});
clustermap.components.map_report.t21092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21094,meta21093__$1){var self__ = this;
var _21094__$1 = this;return (new clustermap.components.map_report.t21092(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta21093__$1));
});
clustermap.components.map_report.__GT_t21092 = (function __GT_t21092(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21093){return (new clustermap.components.map_report.t21092(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta21093));
});
}
return (new clustermap.components.map_report.t21092(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__21139 = portfolio_company;var G__21139__$1 = (((G__21139 == null))?null:cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(G__21139));var G__21139__$2 = (((G__21139__$1 == null))?null:cljs.core.count(G__21139__$1));return G__21139__$2;
})();var const_count = (function (){var G__21140 = portfolio_company;var G__21140__$1 = (((G__21140 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21140));var G__21140__$2 = (((G__21140__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21140__$1));var G__21140__$3 = (((G__21140__$2 == null))?null:cljs.core.count(G__21140__$2));return G__21140__$3;
})();if(typeof clustermap.components.map_report.t21141 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21141 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta21142){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta21142 = meta21142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21141.cljs$lang$type = true;
clustermap.components.map_report.t21141.cljs$lang$ctorStr = "clustermap.components.map-report/t21141";
clustermap.components.map_report.t21141.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21141");
});
clustermap.components.map_report.t21141.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21141.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21144 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_(attrs21144))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21144),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21144));
}
})()),React.DOM.ul(null,(function (){var attrs21145 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21145))
{return React.DOM.li(sablono.interpreter.attributes(attrs21145),(function (){var attrs21146 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21146))
{return React.DOM.small(sablono.interpreter.attributes(attrs21146),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21146));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21145),(function (){var attrs21147 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21147))
{return React.DOM.small(sablono.interpreter.attributes(attrs21147),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21147));
}
})());
}
})(),(function (){var attrs21148 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21148))
{return React.DOM.li(sablono.interpreter.attributes(attrs21148),(function (){var attrs21149 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21149))
{return React.DOM.small(sablono.interpreter.attributes(attrs21149),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21149));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21148),(function (){var attrs21150 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21150))
{return React.DOM.small(sablono.interpreter.attributes(attrs21150),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21150));
}
})());
}
})(),(function (){var attrs21151 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21161 = self__.portfolio_company;var G__21161__$1 = (((G__21161 == null))?null:cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(G__21161));return G__21161__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21161 = self__.portfolio_company;var G__21161__$1 = (((G__21161 == null))?null:cljs.core.constant$keyword$249.cljs$core$IFn$_invoke$arity$1(G__21161));return G__21161__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21151))
{return React.DOM.li(sablono.interpreter.attributes(attrs21151),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21151),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs21156 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21162 = self__.portfolio_company;var G__21162__$1 = (((G__21162 == null))?null:cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(G__21162));return G__21162__$1;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21162 = self__.portfolio_company;var G__21162__$1 = (((G__21162 == null))?null:cljs.core.constant$keyword$251.cljs$core$IFn$_invoke$arity$1(G__21162));return G__21162__$1;
})(),cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21156))
{return React.DOM.li(sablono.interpreter.attributes(attrs21156),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21156),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t21141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21143){var self__ = this;
var _21143__$1 = this;return self__.meta21142;
});
clustermap.components.map_report.t21141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21143,meta21142__$1){var self__ = this;
var _21143__$1 = this;return (new clustermap.components.map_report.t21141(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta21142__$1));
});
clustermap.components.map_report.__GT_t21141 = (function __GT_t21141(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta21142){return (new clustermap.components.map_report.t21141(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta21142));
});
}
return (new clustermap.components.map_report.t21141(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__21187 = investor_company;var G__21187__$1 = (((G__21187 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21187));var G__21187__$2 = (((G__21187__$1 == null))?null:cljs.core.count(G__21187__$1));return G__21187__$2;
})();var const_count = (function (){var G__21188 = investor_company;var G__21188__$1 = (((G__21188 == null))?null:cljs.core.constant$keyword$272.cljs$core$IFn$_invoke$arity$1(G__21188));var G__21188__$2 = (((G__21188__$1 == null))?null:cljs.core.constant$keyword$273.cljs$core$IFn$_invoke$arity$1(G__21188__$1));var G__21188__$3 = (((G__21188__$2 == null))?null:cljs.core.count(G__21188__$2));return G__21188__$3;
})();if(typeof clustermap.components.map_report.t21189 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21189 = (function (const_count,pc_count,investor_company,investor_company_report,meta21190){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta21190 = meta21190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21189.cljs$lang$type = true;
clustermap.components.map_report.t21189.cljs$lang$ctorStr = "clustermap.components.map-report/t21189";
clustermap.components.map_report.t21189.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21189");
});
clustermap.components.map_report.t21189.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21189.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21192 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_(attrs21192))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21192),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21192));
}
})()),React.DOM.ul(null,(function (){var attrs21193 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21193))
{return React.DOM.li(sablono.interpreter.attributes(attrs21193),(function (){var attrs21194 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21194))
{return React.DOM.small(sablono.interpreter.attributes(attrs21194),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21194));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21193),(function (){var attrs21195 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21195))
{return React.DOM.small(sablono.interpreter.attributes(attrs21195),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21195));
}
})());
}
})(),(function (){var attrs21196 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.const_count) : clustermap.formats.number.fnum.call(null,self__.const_count));if(cljs.core.map_QMARK_(attrs21196))
{return React.DOM.li(sablono.interpreter.attributes(attrs21196),(function (){var attrs21197 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21197))
{return React.DOM.small(sablono.interpreter.attributes(attrs21197),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21197));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21196),(function (){var attrs21198 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.const_count,"Constituency",cljs.core.array_seq(["Constituencies"], 0));if(cljs.core.map_QMARK_(attrs21198))
{return React.DOM.small(sablono.interpreter.attributes(attrs21198),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21198));
}
})());
}
})(),(function (){var attrs21199 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21209 = self__.investor_company;var G__21209__$1 = (((G__21209 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21209));return G__21209__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21209 = self__.investor_company;var G__21209__$1 = (((G__21209 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21209));return G__21209__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21199))
{return React.DOM.li(sablono.interpreter.attributes(attrs21199),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21199),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21204 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21210 = self__.investor_company;var G__21210__$1 = (((G__21210 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21210));return G__21210__$1;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21210 = self__.investor_company;var G__21210__$1 = (((G__21210 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21210));return G__21210__$1;
})(),cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21204))
{return React.DOM.li(sablono.interpreter.attributes(attrs21204),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21204),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21191){var self__ = this;
var _21191__$1 = this;return self__.meta21190;
});
clustermap.components.map_report.t21189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21191,meta21190__$1){var self__ = this;
var _21191__$1 = this;return (new clustermap.components.map_report.t21189(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta21190__$1));
});
clustermap.components.map_report.__GT_t21189 = (function __GT_t21189(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21190){return (new clustermap.components.map_report.t21189(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta21190));
});
}
return (new clustermap.components.map_report.t21189(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__21236 = constituency;var G__21236__$1 = (((G__21236 == null))?null:cljs.core.constant$keyword$268.cljs$core$IFn$_invoke$arity$1(G__21236));var G__21236__$2 = (((G__21236__$1 == null))?null:cljs.core.count(G__21236__$1));return G__21236__$2;
})();var ic_count = (function (){var G__21237 = constituency;var G__21237__$1 = (((G__21237 == null))?null:cljs.core.constant$keyword$267.cljs$core$IFn$_invoke$arity$1(G__21237));var G__21237__$2 = (((G__21237__$1 == null))?null:cljs.core.count(G__21237__$1));return G__21237__$2;
})();if(typeof clustermap.components.map_report.t21238 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t21238 = (function (ic_count,pc_count,constituency,constituency_report,meta21239){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta21239 = meta21239;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t21238.cljs$lang$type = true;
clustermap.components.map_report.t21238.cljs$lang$ctorStr = "clustermap.components.map-report/t21238";
clustermap.components.map_report.t21238.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.map-report/t21238");
});
clustermap.components.map_report.t21238.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t21238.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs21241 = cljs.core.constant$keyword$205.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21241))
{return React.DOM.h2(sablono.interpreter.attributes(attrs21241),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret(attrs21241));
}
})(),(function (){var attrs21242 = cljs.core.constant$keyword$276.cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_(attrs21242))
{return React.DOM.h3(sablono.interpreter.attributes(attrs21242),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret(attrs21242),React.DOM.small(null,"(",sablono.interpreter.interpret(cljs.core.constant$keyword$277.cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs21243 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.pc_count) : clustermap.formats.number.fnum.call(null,self__.pc_count));if(cljs.core.map_QMARK_(attrs21243))
{return React.DOM.li(sablono.interpreter.attributes(attrs21243),(function (){var attrs21244 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21244))
{return React.DOM.small(sablono.interpreter.attributes(attrs21244),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21244));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21243),(function (){var attrs21245 = clustermap.formats.string.pluralize.cljs$core$IFn$_invoke$arity$variadic(self__.pc_count,"Portfolio Company",cljs.core.array_seq(["Portfolio Companies"], 0));if(cljs.core.map_QMARK_(attrs21245))
{return React.DOM.small(sablono.interpreter.attributes(attrs21245),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21245));
}
})());
}
})(),(function (){var attrs21246 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$1(self__.ic_count) : clustermap.formats.number.fnum.call(null,self__.ic_count));if(cljs.core.map_QMARK_(attrs21246))
{return React.DOM.li(sablono.interpreter.attributes(attrs21246),(function (){var attrs21247 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21247))
{return React.DOM.small(sablono.interpreter.attributes(attrs21247),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21247));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21246),(function (){var attrs21248 = clustermap.formats.string.pluralize(self__.ic_count,"Investor");if(cljs.core.map_QMARK_(attrs21248))
{return React.DOM.small(sablono.interpreter.attributes(attrs21248),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret(attrs21248));
}
})());
}
})(),(function (){var attrs21249 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5((function (){var G__21259 = self__.constituency;var G__21259__$1 = (((G__21259 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21259));return G__21259__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-") : clustermap.formats.money.fmoney.call(null,(function (){var G__21259 = self__.constituency;var G__21259__$1 = (((G__21259 == null))?null:cljs.core.constant$keyword$274.cljs$core$IFn$_invoke$arity$1(G__21259));return G__21259__$1;
})(),cljs.core.constant$keyword$225,2,cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21249))
{return React.DOM.li(sablono.interpreter.attributes(attrs21249),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21249),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs21254 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3((function (){var G__21260 = self__.constituency;var G__21260__$1 = (((G__21260 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21260));return G__21260__$1;
})(),cljs.core.constant$keyword$160,"-") : clustermap.formats.number.fnum.call(null,(function (){var G__21260 = self__.constituency;var G__21260__$1 = (((G__21260 == null))?null:cljs.core.constant$keyword$275.cljs$core$IFn$_invoke$arity$1(G__21260));return G__21260__$1;
})(),cljs.core.constant$keyword$160,"-"));if(cljs.core.map_QMARK_(attrs21254))
{return React.DOM.li(sablono.interpreter.attributes(attrs21254),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret(attrs21254),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t21238.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21240){var self__ = this;
var _21240__$1 = this;return self__.meta21239;
});
clustermap.components.map_report.t21238.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21240,meta21239__$1){var self__ = this;
var _21240__$1 = this;return (new clustermap.components.map_report.t21238(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta21239__$1));
});
clustermap.components.map_report.__GT_t21238 = (function __GT_t21238(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21239){return (new clustermap.components.map_report.t21238(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta21239));
});
}
return (new clustermap.components.map_report.t21238(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,cljs.core.constant$keyword$194], null));var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$232,cljs.core.constant$keyword$164], null));var pred__21264 = cljs.core._EQ__EQ_;var expr__21265 = type;if(cljs.core.truth_((pred__21264.cljs$core$IFn$_invoke$arity$2 ? pred__21264.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$229,expr__21265) : pred__21264.call(null,cljs.core.constant$keyword$229,expr__21265))))
{return clustermap.components.map_report.portfolio_company_report(value);
} else
{if(cljs.core.truth_((pred__21264.cljs$core$IFn$_invoke$arity$2 ? pred__21264.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$230,expr__21265) : pred__21264.call(null,cljs.core.constant$keyword$230,expr__21265))))
{return clustermap.components.map_report.investor_company_report(value);
} else
{if(cljs.core.truth_((pred__21264.cljs$core$IFn$_invoke$arity$2 ? pred__21264.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$231,expr__21265) : pred__21264.call(null,cljs.core.constant$keyword$231,expr__21265))))
{return clustermap.components.map_report.constituency_report(value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report(cljs.core.constant$keyword$236.cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.cljs$core$IFn$_invoke$arity$3(app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
