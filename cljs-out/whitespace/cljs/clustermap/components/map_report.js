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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__30873 = apc_stats;var G__30873__$1 = (((G__30873 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__30873));return G__30873__$1;
})();var ic_count = (function (){var G__30874 = apc_stats;var G__30874__$1 = (((G__30874 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__30874));return G__30874__$1;
})();if(typeof clustermap.components.map_report.t30875 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30875 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta30876){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta30876 = meta30876;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30875.cljs$lang$type = true;
clustermap.components.map_report.t30875.cljs$lang$ctorStr = "clustermap.components.map-report/t30875";
clustermap.components.map_report.t30875.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30875");
});
clustermap.components.map_report.t30875.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30875.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs30880 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30880))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30880),(function (){var attrs30881 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30881))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30881),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30881));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30880),(function (){var attrs30882 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30882))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30882),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30882));
}
})());
}
})(),(function (){var attrs30883 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30883))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30883),(function (){var attrs30884 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30884))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30884),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30884));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30883),(function (){var attrs30885 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30885))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30885),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30885));
}
})());
}
})(),(function (){var attrs30886 = clustermap.formats.money.fmoney.call(null,(function (){var G__30896 = self__.apc_stats;var G__30896__$1 = (((G__30896 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__30896));var G__30896__$2 = (((G__30896__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__30896__$1));return G__30896__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30886))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30886),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30886),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs30891 = clustermap.formats.number.fnum.call(null,(function (){var G__30897 = self__.apc_stats;var G__30897__$1 = (((G__30897 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__30897));var G__30897__$2 = (((G__30897__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__30897__$1));return G__30897__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30891))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30891),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30891),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30877){var self__ = this;
var _30877__$1 = this;return self__.meta30876;
});
clustermap.components.map_report.t30875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30877,meta30876__$1){var self__ = this;
var _30877__$1 = this;return (new clustermap.components.map_report.t30875(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta30876__$1));
});
clustermap.components.map_report.__GT_t30875 = (function __GT_t30875(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta30876){return (new clustermap.components.map_report.t30875(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta30876));
});
}
return (new clustermap.components.map_report.t30875(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__30922 = portfolio_company;var G__30922__$1 = (((G__30922 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__30922));var G__30922__$2 = (((G__30922__$1 == null))?null:cljs.core.count.call(null,G__30922__$1));return G__30922__$2;
})();var const_count = (function (){var G__30923 = portfolio_company;var G__30923__$1 = (((G__30923 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__30923));var G__30923__$2 = (((G__30923__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__30923__$1));var G__30923__$3 = (((G__30923__$2 == null))?null:cljs.core.count.call(null,G__30923__$2));return G__30923__$3;
})();if(typeof clustermap.components.map_report.t30924 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30924 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta30925){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta30925 = meta30925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30924.cljs$lang$type = true;
clustermap.components.map_report.t30924.cljs$lang$ctorStr = "clustermap.components.map-report/t30924";
clustermap.components.map_report.t30924.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30924");
});
clustermap.components.map_report.t30924.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30924.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30927 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs30927))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30927),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30927));
}
})()),React.DOM.ul(null,(function (){var attrs30928 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs30928))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30928),(function (){var attrs30929 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30929))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30929),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30929));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30928),(function (){var attrs30930 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30930))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30930),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30930));
}
})());
}
})(),(function (){var attrs30931 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs30931))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30931),(function (){var attrs30932 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30932))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30932),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30932));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30931),(function (){var attrs30933 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30933))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30933),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30933));
}
})());
}
})(),(function (){var attrs30934 = clustermap.formats.money.fmoney.call(null,(function (){var G__30944 = self__.portfolio_company;var G__30944__$1 = (((G__30944 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__30944));return G__30944__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30934))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30934),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30934),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs30939 = clustermap.formats.number.fnum.call(null,(function (){var G__30945 = self__.portfolio_company;var G__30945__$1 = (((G__30945 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__30945));return G__30945__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30939))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30939),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30939),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t30924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30926){var self__ = this;
var _30926__$1 = this;return self__.meta30925;
});
clustermap.components.map_report.t30924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30926,meta30925__$1){var self__ = this;
var _30926__$1 = this;return (new clustermap.components.map_report.t30924(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta30925__$1));
});
clustermap.components.map_report.__GT_t30924 = (function __GT_t30924(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta30925){return (new clustermap.components.map_report.t30924(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta30925));
});
}
return (new clustermap.components.map_report.t30924(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__30970 = investor_company;var G__30970__$1 = (((G__30970 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__30970));var G__30970__$2 = (((G__30970__$1 == null))?null:cljs.core.count.call(null,G__30970__$1));return G__30970__$2;
})();var const_count = (function (){var G__30971 = investor_company;var G__30971__$1 = (((G__30971 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__30971));var G__30971__$2 = (((G__30971__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__30971__$1));var G__30971__$3 = (((G__30971__$2 == null))?null:cljs.core.count.call(null,G__30971__$2));return G__30971__$3;
})();if(typeof clustermap.components.map_report.t30972 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30972 = (function (const_count,pc_count,investor_company,investor_company_report,meta30973){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta30973 = meta30973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30972.cljs$lang$type = true;
clustermap.components.map_report.t30972.cljs$lang$ctorStr = "clustermap.components.map-report/t30972";
clustermap.components.map_report.t30972.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30972");
});
clustermap.components.map_report.t30972.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30972.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs30975 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs30975))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs30975),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs30975));
}
})()),React.DOM.ul(null,(function (){var attrs30976 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs30976))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30976),(function (){var attrs30977 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30977))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30977),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30977));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30976),(function (){var attrs30978 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30978))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30978),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30978));
}
})());
}
})(),(function (){var attrs30979 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs30979))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30979),(function (){var attrs30980 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30980))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30980),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30980));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30979),(function (){var attrs30981 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs30981))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30981),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30981));
}
})());
}
})(),(function (){var attrs30982 = clustermap.formats.money.fmoney.call(null,(function (){var G__30992 = self__.investor_company;var G__30992__$1 = (((G__30992 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__30992));return G__30992__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30982))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30982),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30982),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs30987 = clustermap.formats.number.fnum.call(null,(function (){var G__30993 = self__.investor_company;var G__30993__$1 = (((G__30993 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__30993));return G__30993__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30987))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30987),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30987),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30974){var self__ = this;
var _30974__$1 = this;return self__.meta30973;
});
clustermap.components.map_report.t30972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30974,meta30973__$1){var self__ = this;
var _30974__$1 = this;return (new clustermap.components.map_report.t30972(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta30973__$1));
});
clustermap.components.map_report.__GT_t30972 = (function __GT_t30972(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta30973){return (new clustermap.components.map_report.t30972(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta30973));
});
}
return (new clustermap.components.map_report.t30972(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__31019 = constituency;var G__31019__$1 = (((G__31019 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31019));var G__31019__$2 = (((G__31019__$1 == null))?null:cljs.core.count.call(null,G__31019__$1));return G__31019__$2;
})();var ic_count = (function (){var G__31020 = constituency;var G__31020__$1 = (((G__31020 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31020));var G__31020__$2 = (((G__31020__$1 == null))?null:cljs.core.count.call(null,G__31020__$1));return G__31020__$2;
})();if(typeof clustermap.components.map_report.t31021 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31021 = (function (ic_count,pc_count,constituency,constituency_report,meta31022){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta31022 = meta31022;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31021.cljs$lang$type = true;
clustermap.components.map_report.t31021.cljs$lang$ctorStr = "clustermap.components.map-report/t31021";
clustermap.components.map_report.t31021.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31021");
});
clustermap.components.map_report.t31021.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31021.prototype.om$core$IRender$render$arity$1 = (function (this__9154__auto__){var self__ = this;
var this__9154__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31024 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31024))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31024),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31024));
}
})(),(function (){var attrs31025 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31025))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31025),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31025),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs31026 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31026))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31026),(function (){var attrs31027 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31027))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31027),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31027));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31026),(function (){var attrs31028 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31028))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31028),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31028));
}
})());
}
})(),(function (){var attrs31029 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31029))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31029),(function (){var attrs31030 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31030))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31030),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31030));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31029),(function (){var attrs31031 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31031))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31031),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31031));
}
})());
}
})(),(function (){var attrs31032 = clustermap.formats.money.fmoney.call(null,(function (){var G__31042 = self__.constituency;var G__31042__$1 = (((G__31042 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31042));return G__31042__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31032))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31032),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31032),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31037 = clustermap.formats.number.fnum.call(null,(function (){var G__31043 = self__.constituency;var G__31043__$1 = (((G__31043 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31043));return G__31043__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31037))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31037),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31037),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t31021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31023){var self__ = this;
var _31023__$1 = this;return self__.meta31022;
});
clustermap.components.map_report.t31021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31023,meta31022__$1){var self__ = this;
var _31023__$1 = this;return (new clustermap.components.map_report.t31021(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta31022__$1));
});
clustermap.components.map_report.__GT_t31021 = (function __GT_t31021(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta31022){return (new clustermap.components.map_report.t31021(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta31022));
});
}
return (new clustermap.components.map_report.t31021(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__31047 = cljs.core._EQ__EQ_;var expr__31048 = type;if(cljs.core.truth_(pred__31047.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31048)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__31047.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31048)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__31047.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31048)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
