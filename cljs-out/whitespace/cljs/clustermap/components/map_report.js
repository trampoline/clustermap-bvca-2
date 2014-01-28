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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__30972 = apc_stats;var G__30972__$1 = (((G__30972 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__30972));return G__30972__$1;
})();var ic_count = (function (){var G__30973 = apc_stats;var G__30973__$1 = (((G__30973 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__30973));return G__30973__$1;
})();if(typeof clustermap.components.map_report.t30974 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t30974 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta30975){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta30975 = meta30975;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t30974.cljs$lang$type = true;
clustermap.components.map_report.t30974.cljs$lang$ctorStr = "clustermap.components.map-report/t30974";
clustermap.components.map_report.t30974.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t30974");
});
clustermap.components.map_report.t30974.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t30974.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs30979 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30979))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30979),(function (){var attrs30980 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30980))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30980),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30980));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30979),(function (){var attrs30981 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs30981))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30981),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30981));
}
})());
}
})(),(function (){var attrs30982 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30982))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30982),(function (){var attrs30983 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30983))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30983),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30983));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30982),(function (){var attrs30984 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs30984))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs30984),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs30984));
}
})());
}
})(),(function (){var attrs30985 = clustermap.formats.money.fmoney.call(null,(function (){var G__30995 = self__.apc_stats;var G__30995__$1 = (((G__30995 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__30995));var G__30995__$2 = (((G__30995__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__30995__$1));return G__30995__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30985))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30985),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30985),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs30990 = clustermap.formats.number.fnum.call(null,(function (){var G__30996 = self__.apc_stats;var G__30996__$1 = (((G__30996 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__30996));var G__30996__$2 = (((G__30996__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__30996__$1));return G__30996__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs30990))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs30990),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs30990),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t30974.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30976){var self__ = this;
var _30976__$1 = this;return self__.meta30975;
});
clustermap.components.map_report.t30974.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30976,meta30975__$1){var self__ = this;
var _30976__$1 = this;return (new clustermap.components.map_report.t30974(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta30975__$1));
});
clustermap.components.map_report.__GT_t30974 = (function __GT_t30974(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta30975){return (new clustermap.components.map_report.t30974(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta30975));
});
}
return (new clustermap.components.map_report.t30974(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__31021 = portfolio_company;var G__31021__$1 = (((G__31021 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31021));var G__31021__$2 = (((G__31021__$1 == null))?null:cljs.core.count.call(null,G__31021__$1));return G__31021__$2;
})();var const_count = (function (){var G__31022 = portfolio_company;var G__31022__$1 = (((G__31022 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31022));var G__31022__$2 = (((G__31022__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31022__$1));var G__31022__$3 = (((G__31022__$2 == null))?null:cljs.core.count.call(null,G__31022__$2));return G__31022__$3;
})();if(typeof clustermap.components.map_report.t31023 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31023 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta31024){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31024 = meta31024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31023.cljs$lang$type = true;
clustermap.components.map_report.t31023.cljs$lang$ctorStr = "clustermap.components.map-report/t31023";
clustermap.components.map_report.t31023.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31023");
});
clustermap.components.map_report.t31023.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31023.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31026 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31026))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31026),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31026));
}
})()),React.DOM.ul(null,(function (){var attrs31027 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31027))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31027),(function (){var attrs31028 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31028))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31028),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31028));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31027),(function (){var attrs31029 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31029))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31029),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31029));
}
})());
}
})(),(function (){var attrs31030 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31030))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31030),(function (){var attrs31031 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31031))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31031),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31031));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31030),(function (){var attrs31032 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31032))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31032),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31032));
}
})());
}
})(),(function (){var attrs31033 = clustermap.formats.money.fmoney.call(null,(function (){var G__31043 = self__.portfolio_company;var G__31043__$1 = (((G__31043 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__31043));return G__31043__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31033))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31033),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31033),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs31038 = clustermap.formats.number.fnum.call(null,(function (){var G__31044 = self__.portfolio_company;var G__31044__$1 = (((G__31044 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__31044));return G__31044__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31038))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31038),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31038),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t31023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31025){var self__ = this;
var _31025__$1 = this;return self__.meta31024;
});
clustermap.components.map_report.t31023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31025,meta31024__$1){var self__ = this;
var _31025__$1 = this;return (new clustermap.components.map_report.t31023(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta31024__$1));
});
clustermap.components.map_report.__GT_t31023 = (function __GT_t31023(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta31024){return (new clustermap.components.map_report.t31023(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta31024));
});
}
return (new clustermap.components.map_report.t31023(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__31069 = investor_company;var G__31069__$1 = (((G__31069 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31069));var G__31069__$2 = (((G__31069__$1 == null))?null:cljs.core.count.call(null,G__31069__$1));return G__31069__$2;
})();var const_count = (function (){var G__31070 = investor_company;var G__31070__$1 = (((G__31070 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31070));var G__31070__$2 = (((G__31070__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31070__$1));var G__31070__$3 = (((G__31070__$2 == null))?null:cljs.core.count.call(null,G__31070__$2));return G__31070__$3;
})();if(typeof clustermap.components.map_report.t31071 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31071 = (function (const_count,pc_count,investor_company,investor_company_report,meta31072){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta31072 = meta31072;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31071.cljs$lang$type = true;
clustermap.components.map_report.t31071.cljs$lang$ctorStr = "clustermap.components.map-report/t31071";
clustermap.components.map_report.t31071.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31071");
});
clustermap.components.map_report.t31071.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31071.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31074 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs31074))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31074),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31074));
}
})()),React.DOM.ul(null,(function (){var attrs31075 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31075))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31075),(function (){var attrs31076 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31076))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31076),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31076));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31075),(function (){var attrs31077 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31077))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31077),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31077));
}
})());
}
})(),(function (){var attrs31078 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31078))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31078),(function (){var attrs31079 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31079))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31079),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31079));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31078),(function (){var attrs31080 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31080))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31080),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31080));
}
})());
}
})(),(function (){var attrs31081 = clustermap.formats.money.fmoney.call(null,(function (){var G__31091 = self__.investor_company;var G__31091__$1 = (((G__31091 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31091));return G__31091__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31081))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31081),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31081),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31086 = clustermap.formats.number.fnum.call(null,(function (){var G__31092 = self__.investor_company;var G__31092__$1 = (((G__31092 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31092));return G__31092__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31086))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31086),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31086),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t31071.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31073){var self__ = this;
var _31073__$1 = this;return self__.meta31072;
});
clustermap.components.map_report.t31071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31073,meta31072__$1){var self__ = this;
var _31073__$1 = this;return (new clustermap.components.map_report.t31071(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta31072__$1));
});
clustermap.components.map_report.__GT_t31071 = (function __GT_t31071(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta31072){return (new clustermap.components.map_report.t31071(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta31072));
});
}
return (new clustermap.components.map_report.t31071(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__31118 = constituency;var G__31118__$1 = (((G__31118 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31118));var G__31118__$2 = (((G__31118__$1 == null))?null:cljs.core.count.call(null,G__31118__$1));return G__31118__$2;
})();var ic_count = (function (){var G__31119 = constituency;var G__31119__$1 = (((G__31119 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31119));var G__31119__$2 = (((G__31119__$1 == null))?null:cljs.core.count.call(null,G__31119__$1));return G__31119__$2;
})();if(typeof clustermap.components.map_report.t31120 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31120 = (function (ic_count,pc_count,constituency,constituency_report,meta31121){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta31121 = meta31121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31120.cljs$lang$type = true;
clustermap.components.map_report.t31120.cljs$lang$ctorStr = "clustermap.components.map-report/t31120";
clustermap.components.map_report.t31120.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31120");
});
clustermap.components.map_report.t31120.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31120.prototype.om$core$IRender$render$arity$1 = (function (this__9158__auto__){var self__ = this;
var this__9158__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31123 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31123))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31123),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31123));
}
})(),(function (){var attrs31124 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31124))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31124),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31124),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs31125 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31125))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31125),(function (){var attrs31126 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31126))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31126),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31126));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31125),(function (){var attrs31127 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31127))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31127),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31127));
}
})());
}
})(),(function (){var attrs31128 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31128))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31128),(function (){var attrs31129 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31129))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31129),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31129));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31128),(function (){var attrs31130 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31130))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31130),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31130));
}
})());
}
})(),(function (){var attrs31131 = clustermap.formats.money.fmoney.call(null,(function (){var G__31141 = self__.constituency;var G__31141__$1 = (((G__31141 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31141));return G__31141__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31131))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31131),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31131),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31136 = clustermap.formats.number.fnum.call(null,(function (){var G__31142 = self__.constituency;var G__31142__$1 = (((G__31142 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31142));return G__31142__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31136))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31136),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31136),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t31120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31122){var self__ = this;
var _31122__$1 = this;return self__.meta31121;
});
clustermap.components.map_report.t31120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31122,meta31121__$1){var self__ = this;
var _31122__$1 = this;return (new clustermap.components.map_report.t31120(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta31121__$1));
});
clustermap.components.map_report.__GT_t31120 = (function __GT_t31120(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta31121){return (new clustermap.components.map_report.t31120(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta31121));
});
}
return (new clustermap.components.map_report.t31120(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__31146 = cljs.core._EQ__EQ_;var expr__31147 = type;if(cljs.core.truth_(pred__31146.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31147)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__31146.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31147)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__31146.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31147)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
