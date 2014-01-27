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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__30889 = apc_stats;var G__30889__$1 = (((G__30889 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__30889));return G__30889__$1;
})();var ic_count = (function (){var G__30890 = apc_stats;var G__30890__$1 = (((G__30890 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__30890));return G__30890__$1;
})();if(typeof clustermap.components.map_report.t30891 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30891 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta30892){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta30892 = meta30892;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30891.cljs$lang$type = true;
clustermap.components.map_report.t30891.cljs$lang$ctorStr = "clustermap.components.map-report/t30891";
clustermap.components.map_report.t30891.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30891");
});
clustermap.components.map_report.t30891.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30891.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs30896 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30896))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30896),(function (){var attrs30897 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30897))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30897),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30897));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30896),(function (){var attrs30898 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30898))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30898),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30898));
}
})());
}
})(),(function (){var attrs30899 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30899))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30899),(function (){var attrs30900 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30900))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30900),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30900));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30899),(function (){var attrs30901 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30901))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30901),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30901));
}
})());
}
})(),(function (){var attrs30902 = clustermap.formats.money.fmoney.call(null,(function (){var G__30912 = self__.apc_stats;var G__30912__$1 = (((G__30912 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__30912));var G__30912__$2 = (((G__30912__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__30912__$1));return G__30912__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30902))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30902),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30902),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs30907 = clustermap.formats.number.fnum.call(null,(function (){var G__30913 = self__.apc_stats;var G__30913__$1 = (((G__30913 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__30913));var G__30913__$2 = (((G__30913__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__30913__$1));return G__30913__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30907))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30907),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30907),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30891.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30893){var self__ = this;
var _30893__$1 = this;return self__.meta30892;
});
clustermap.components.map_report.t30891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30893,meta30892__$1){var self__ = this;
var _30893__$1 = this;return (new clustermap.components.map_report.t30891(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta30892__$1));
});
clustermap.components.map_report.__GT_t30891 = (function __GT_t30891(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta30892){return (new clustermap.components.map_report.t30891(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta30892));
});
}
return (new clustermap.components.map_report.t30891(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__30938 = portfolio_company;var G__30938__$1 = (((G__30938 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__30938));var G__30938__$2 = (((G__30938__$1 == null))?null:cljs.core.count.call(null,G__30938__$1));return G__30938__$2;
})();var const_count = (function (){var G__30939 = portfolio_company;var G__30939__$1 = (((G__30939 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__30939));var G__30939__$2 = (((G__30939__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__30939__$1));var G__30939__$3 = (((G__30939__$2 == null))?null:cljs.core.count.call(null,G__30939__$2));return G__30939__$3;
})();if(typeof clustermap.components.map_report.t30940 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30940 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta30941){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta30941 = meta30941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30940.cljs$lang$type = true;
clustermap.components.map_report.t30940.cljs$lang$ctorStr = "clustermap.components.map-report/t30940";
clustermap.components.map_report.t30940.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30940");
});
clustermap.components.map_report.t30940.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30940.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30943 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs30943))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30943),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30943));
}
})()),React.DOM.ul(null,(function (){var attrs30944 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs30944))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30944),(function (){var attrs30945 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30945))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30945),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30945));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30944),(function (){var attrs30946 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30946))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30946),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30946));
}
})());
}
})(),(function (){var attrs30947 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs30947))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30947),(function (){var attrs30948 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30948))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30948),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30948));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30947),(function (){var attrs30949 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30949))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30949),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30949));
}
})());
}
})(),(function (){var attrs30950 = clustermap.formats.money.fmoney.call(null,(function (){var G__30960 = self__.portfolio_company;var G__30960__$1 = (((G__30960 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__30960));return G__30960__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30950))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30950),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30950),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs30955 = clustermap.formats.number.fnum.call(null,(function (){var G__30961 = self__.portfolio_company;var G__30961__$1 = (((G__30961 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__30961));return G__30961__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30955))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30955),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30955),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t30940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30942){var self__ = this;
var _30942__$1 = this;return self__.meta30941;
});
clustermap.components.map_report.t30940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30942,meta30941__$1){var self__ = this;
var _30942__$1 = this;return (new clustermap.components.map_report.t30940(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta30941__$1));
});
clustermap.components.map_report.__GT_t30940 = (function __GT_t30940(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta30941){return (new clustermap.components.map_report.t30940(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta30941));
});
}
return (new clustermap.components.map_report.t30940(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__30986 = investor_company;var G__30986__$1 = (((G__30986 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__30986));var G__30986__$2 = (((G__30986__$1 == null))?null:cljs.core.count.call(null,G__30986__$1));return G__30986__$2;
})();var const_count = (function (){var G__30987 = investor_company;var G__30987__$1 = (((G__30987 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__30987));var G__30987__$2 = (((G__30987__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__30987__$1));var G__30987__$3 = (((G__30987__$2 == null))?null:cljs.core.count.call(null,G__30987__$2));return G__30987__$3;
})();if(typeof clustermap.components.map_report.t30988 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30988 = (function (const_count,pc_count,investor_company,investor_company_report,meta30989){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta30989 = meta30989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30988.cljs$lang$type = true;
clustermap.components.map_report.t30988.cljs$lang$ctorStr = "clustermap.components.map-report/t30988";
clustermap.components.map_report.t30988.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30988");
});
clustermap.components.map_report.t30988.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30988.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30991 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs30991))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30991),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30991));
}
})()),React.DOM.ul(null,(function (){var attrs30992 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs30992))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30992),(function (){var attrs30993 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30993))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30993),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30993));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30992),(function (){var attrs30994 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30994))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30994),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30994));
}
})());
}
})(),(function (){var attrs30995 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs30995))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30995),(function (){var attrs30996 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30996))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30996),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30996));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30995),(function (){var attrs30997 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30997))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30997),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30997));
}
})());
}
})(),(function (){var attrs30998 = clustermap.formats.money.fmoney.call(null,(function (){var G__31008 = self__.investor_company;var G__31008__$1 = (((G__31008 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31008));return G__31008__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30998))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30998),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30998),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31003 = clustermap.formats.number.fnum.call(null,(function (){var G__31009 = self__.investor_company;var G__31009__$1 = (((G__31009 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31009));return G__31009__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31003))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31003),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31003),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30990){var self__ = this;
var _30990__$1 = this;return self__.meta30989;
});
clustermap.components.map_report.t30988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30990,meta30989__$1){var self__ = this;
var _30990__$1 = this;return (new clustermap.components.map_report.t30988(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta30989__$1));
});
clustermap.components.map_report.__GT_t30988 = (function __GT_t30988(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta30989){return (new clustermap.components.map_report.t30988(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta30989));
});
}
return (new clustermap.components.map_report.t30988(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__31035 = constituency;var G__31035__$1 = (((G__31035 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31035));var G__31035__$2 = (((G__31035__$1 == null))?null:cljs.core.count.call(null,G__31035__$1));return G__31035__$2;
})();var ic_count = (function (){var G__31036 = constituency;var G__31036__$1 = (((G__31036 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31036));var G__31036__$2 = (((G__31036__$1 == null))?null:cljs.core.count.call(null,G__31036__$1));return G__31036__$2;
})();if(typeof clustermap.components.map_report.t31037 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31037 = (function (ic_count,pc_count,constituency,constituency_report,meta31038){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta31038 = meta31038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31037.cljs$lang$type = true;
clustermap.components.map_report.t31037.cljs$lang$ctorStr = "clustermap.components.map-report/t31037";
clustermap.components.map_report.t31037.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31037");
});
clustermap.components.map_report.t31037.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31037.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31040 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31040))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31040),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31040));
}
})(),(function (){var attrs31041 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31041))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31041),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31041),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs31042 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31042))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31042),(function (){var attrs31043 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31043))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31043),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31043));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31042),(function (){var attrs31044 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31044))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31044),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31044));
}
})());
}
})(),(function (){var attrs31045 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31045))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31045),(function (){var attrs31046 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31046))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31046),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31046));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31045),(function (){var attrs31047 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31047))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31047),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31047));
}
})());
}
})(),(function (){var attrs31048 = clustermap.formats.money.fmoney.call(null,(function (){var G__31058 = self__.constituency;var G__31058__$1 = (((G__31058 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31058));return G__31058__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31048))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31048),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31048),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31053 = clustermap.formats.number.fnum.call(null,(function (){var G__31059 = self__.constituency;var G__31059__$1 = (((G__31059 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31059));return G__31059__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31053))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31053),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31053),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t31037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31039){var self__ = this;
var _31039__$1 = this;return self__.meta31038;
});
clustermap.components.map_report.t31037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31039,meta31038__$1){var self__ = this;
var _31039__$1 = this;return (new clustermap.components.map_report.t31037(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta31038__$1));
});
clustermap.components.map_report.__GT_t31037 = (function __GT_t31037(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta31038){return (new clustermap.components.map_report.t31037(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta31038));
});
}
return (new clustermap.components.map_report.t31037(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__31063 = cljs.core._EQ__EQ_;var expr__31064 = type;if(cljs.core.truth_(pred__31063.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31064)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__31063.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31064)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__31063.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31064)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
