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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__31588 = apc_stats;var G__31588__$1 = (((G__31588 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31588));return G__31588__$1;
})();var ic_count = (function (){var G__31589 = apc_stats;var G__31589__$1 = (((G__31589 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31589));return G__31589__$1;
})();if(typeof clustermap.components.map_report.t31590 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31590 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta31591){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta31591 = meta31591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31590.cljs$lang$type = true;
clustermap.components.map_report.t31590.cljs$lang$ctorStr = "clustermap.components.map-report/t31590";
clustermap.components.map_report.t31590.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31590");
});
clustermap.components.map_report.t31590.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31590.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs31595 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31595))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31595),(function (){var attrs31596 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31596))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31596),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31596));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31595),(function (){var attrs31597 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31597))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31597),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31597));
}
})());
}
})(),(function (){var attrs31598 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31598))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31598),(function (){var attrs31599 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31599))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31599),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31599));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31598),(function (){var attrs31600 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31600))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31600),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31600));
}
})());
}
})(),(function (){var attrs31601 = clustermap.formats.money.fmoney.call(null,(function (){var G__31611 = self__.apc_stats;var G__31611__$1 = (((G__31611 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31611));var G__31611__$2 = (((G__31611__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31611__$1));return G__31611__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31601))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31601),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31601),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31606 = clustermap.formats.number.fnum.call(null,(function (){var G__31612 = self__.apc_stats;var G__31612__$1 = (((G__31612 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31612));var G__31612__$2 = (((G__31612__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31612__$1));return G__31612__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31606))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31606),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31606),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t31590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31592){var self__ = this;
var _31592__$1 = this;return self__.meta31591;
});
clustermap.components.map_report.t31590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31592,meta31591__$1){var self__ = this;
var _31592__$1 = this;return (new clustermap.components.map_report.t31590(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta31591__$1));
});
clustermap.components.map_report.__GT_t31590 = (function __GT_t31590(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31591){return (new clustermap.components.map_report.t31590(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31591));
});
}
return (new clustermap.components.map_report.t31590(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__31637 = portfolio_company;var G__31637__$1 = (((G__31637 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31637));var G__31637__$2 = (((G__31637__$1 == null))?null:cljs.core.count.call(null,G__31637__$1));return G__31637__$2;
})();var const_count = (function (){var G__31638 = portfolio_company;var G__31638__$1 = (((G__31638 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31638));var G__31638__$2 = (((G__31638__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31638__$1));var G__31638__$3 = (((G__31638__$2 == null))?null:cljs.core.count.call(null,G__31638__$2));return G__31638__$3;
})();if(typeof clustermap.components.map_report.t31639 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31639 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta31640){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31640 = meta31640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31639.cljs$lang$type = true;
clustermap.components.map_report.t31639.cljs$lang$ctorStr = "clustermap.components.map-report/t31639";
clustermap.components.map_report.t31639.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31639");
});
clustermap.components.map_report.t31639.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31639.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31642 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31642))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31642),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31642));
}
})()),React.DOM.ul(null,(function (){var attrs31643 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31643))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31643),(function (){var attrs31644 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31644))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31644),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31644));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31643),(function (){var attrs31645 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31645))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31645),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31645));
}
})());
}
})(),(function (){var attrs31646 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31646))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31646),(function (){var attrs31647 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31647))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31647),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31647));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31646),(function (){var attrs31648 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31648))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31648),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31648));
}
})());
}
})(),(function (){var attrs31649 = clustermap.formats.money.fmoney.call(null,(function (){var G__31659 = self__.portfolio_company;var G__31659__$1 = (((G__31659 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__31659));return G__31659__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31649))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31649),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31649),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs31654 = clustermap.formats.number.fnum.call(null,(function (){var G__31660 = self__.portfolio_company;var G__31660__$1 = (((G__31660 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__31660));return G__31660__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31654))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31654),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31654),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t31639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31641){var self__ = this;
var _31641__$1 = this;return self__.meta31640;
});
clustermap.components.map_report.t31639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31641,meta31640__$1){var self__ = this;
var _31641__$1 = this;return (new clustermap.components.map_report.t31639(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta31640__$1));
});
clustermap.components.map_report.__GT_t31639 = (function __GT_t31639(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta31640){return (new clustermap.components.map_report.t31639(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta31640));
});
}
return (new clustermap.components.map_report.t31639(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__31685 = investor_company;var G__31685__$1 = (((G__31685 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31685));var G__31685__$2 = (((G__31685__$1 == null))?null:cljs.core.count.call(null,G__31685__$1));return G__31685__$2;
})();var const_count = (function (){var G__31686 = investor_company;var G__31686__$1 = (((G__31686 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31686));var G__31686__$2 = (((G__31686__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31686__$1));var G__31686__$3 = (((G__31686__$2 == null))?null:cljs.core.count.call(null,G__31686__$2));return G__31686__$3;
})();if(typeof clustermap.components.map_report.t31687 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31687 = (function (const_count,pc_count,investor_company,investor_company_report,meta31688){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta31688 = meta31688;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31687.cljs$lang$type = true;
clustermap.components.map_report.t31687.cljs$lang$ctorStr = "clustermap.components.map-report/t31687";
clustermap.components.map_report.t31687.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31687");
});
clustermap.components.map_report.t31687.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31687.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31690 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs31690))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31690),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31690));
}
})()),React.DOM.ul(null,(function (){var attrs31691 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31691))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31691),(function (){var attrs31692 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31692))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31692),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31692));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31691),(function (){var attrs31693 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31693))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31693),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31693));
}
})());
}
})(),(function (){var attrs31694 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31694))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31694),(function (){var attrs31695 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31695))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31695),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31695));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31694),(function (){var attrs31696 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31696))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31696),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31696));
}
})());
}
})(),(function (){var attrs31697 = clustermap.formats.money.fmoney.call(null,(function (){var G__31707 = self__.investor_company;var G__31707__$1 = (((G__31707 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31707));return G__31707__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31697))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31697),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31697),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31702 = clustermap.formats.number.fnum.call(null,(function (){var G__31708 = self__.investor_company;var G__31708__$1 = (((G__31708 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31708));return G__31708__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31702))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31702),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31702),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t31687.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31689){var self__ = this;
var _31689__$1 = this;return self__.meta31688;
});
clustermap.components.map_report.t31687.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31689,meta31688__$1){var self__ = this;
var _31689__$1 = this;return (new clustermap.components.map_report.t31687(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta31688__$1));
});
clustermap.components.map_report.__GT_t31687 = (function __GT_t31687(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta31688){return (new clustermap.components.map_report.t31687(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta31688));
});
}
return (new clustermap.components.map_report.t31687(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__31734 = constituency;var G__31734__$1 = (((G__31734 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31734));var G__31734__$2 = (((G__31734__$1 == null))?null:cljs.core.count.call(null,G__31734__$1));return G__31734__$2;
})();var ic_count = (function (){var G__31735 = constituency;var G__31735__$1 = (((G__31735 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31735));var G__31735__$2 = (((G__31735__$1 == null))?null:cljs.core.count.call(null,G__31735__$1));return G__31735__$2;
})();if(typeof clustermap.components.map_report.t31736 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31736 = (function (ic_count,pc_count,constituency,constituency_report,meta31737){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta31737 = meta31737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31736.cljs$lang$type = true;
clustermap.components.map_report.t31736.cljs$lang$ctorStr = "clustermap.components.map-report/t31736";
clustermap.components.map_report.t31736.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31736");
});
clustermap.components.map_report.t31736.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31736.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31739 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31739))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31739),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31739));
}
})(),(function (){var attrs31740 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31740))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31740),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31740),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs31741 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31741))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31741),(function (){var attrs31742 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31742))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31742),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31742));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31741),(function (){var attrs31743 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31743))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31743),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31743));
}
})());
}
})(),(function (){var attrs31744 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31744))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31744),(function (){var attrs31745 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31745))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31745),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31745));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31744),(function (){var attrs31746 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31746))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31746),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31746));
}
})());
}
})(),(function (){var attrs31747 = clustermap.formats.money.fmoney.call(null,(function (){var G__31757 = self__.constituency;var G__31757__$1 = (((G__31757 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31757));return G__31757__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31747))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31747),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31747),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31752 = clustermap.formats.number.fnum.call(null,(function (){var G__31758 = self__.constituency;var G__31758__$1 = (((G__31758 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31758));return G__31758__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31752))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31752),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31752),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t31736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31738){var self__ = this;
var _31738__$1 = this;return self__.meta31737;
});
clustermap.components.map_report.t31736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31738,meta31737__$1){var self__ = this;
var _31738__$1 = this;return (new clustermap.components.map_report.t31736(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta31737__$1));
});
clustermap.components.map_report.__GT_t31736 = (function __GT_t31736(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta31737){return (new clustermap.components.map_report.t31736(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta31737));
});
}
return (new clustermap.components.map_report.t31736(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__31762 = cljs.core._EQ__EQ_;var expr__31763 = type;if(cljs.core.truth_(pred__31762.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31763)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__31762.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31763)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__31762.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31763)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});
