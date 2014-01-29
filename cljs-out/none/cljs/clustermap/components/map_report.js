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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats){var pc_count = (function (){var G__11644 = apc_stats;var G__11644__$1 = (((G__11644 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11644));return G__11644__$1;
})();var ic_count = (function (){var G__11645 = apc_stats;var G__11645__$1 = (((G__11645 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11645));return G__11645__$1;
})();if(typeof clustermap.components.map_report.t11646 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11646 = (function (ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,meta11647){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11647 = meta11647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11646.cljs$lang$type = true;
clustermap.components.map_report.t11646.cljs$lang$ctorStr = "clustermap.components.map-report/t11646";
clustermap.components.map_report.t11646.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11646");
});
clustermap.components.map_report.t11646.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11646.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11651 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11651))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11651),(function (){var attrs11652 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11652))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11652),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11652));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11651),(function (){var attrs11653 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11653))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11653),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11653));
}
})());
}
})(),(function (){var attrs11654 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11654))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11654),(function (){var attrs11655 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11655))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11655),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11655));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11654),(function (){var attrs11656 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11656))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11656),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11656));
}
})());
}
})(),(function (){var attrs11657 = clustermap.formats.money.fmoney.call(null,(function (){var G__11667 = self__.apc_stats;var G__11667__$1 = (((G__11667 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11667));var G__11667__$2 = (((G__11667__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11667__$1));return G__11667__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11657))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11657),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11657),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11662 = clustermap.formats.number.fnum.call(null,(function (){var G__11668 = self__.apc_stats;var G__11668__$1 = (((G__11668 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11668));var G__11668__$2 = (((G__11668__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11668__$1));return G__11668__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11662))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11662),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11662),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11648){var self__ = this;
var _11648__$1 = this;return self__.meta11647;
});
clustermap.components.map_report.t11646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11648,meta11647__$1){var self__ = this;
var _11648__$1 = this;return (new clustermap.components.map_report.t11646(self__.ic_count,self__.pc_count,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11647__$1));
});
clustermap.components.map_report.__GT_t11646 = (function __GT_t11646(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11647){return (new clustermap.components.map_report.t11646(ic_count__$1,pc_count__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11647));
});
}
return (new clustermap.components.map_report.t11646(ic_count,pc_count,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company){var ic_count = (function (){var G__11693 = portfolio_company;var G__11693__$1 = (((G__11693 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11693));var G__11693__$2 = (((G__11693__$1 == null))?null:cljs.core.count.call(null,G__11693__$1));return G__11693__$2;
})();var const_count = (function (){var G__11694 = portfolio_company;var G__11694__$1 = (((G__11694 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11694));var G__11694__$2 = (((G__11694__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11694__$1));var G__11694__$3 = (((G__11694__$2 == null))?null:cljs.core.count.call(null,G__11694__$2));return G__11694__$3;
})();if(typeof clustermap.components.map_report.t11695 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11695 = (function (const_count,ic_count,portfolio_company,portfolio_company_report,meta11696){
this.const_count = const_count;
this.ic_count = ic_count;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11696 = meta11696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11695.cljs$lang$type = true;
clustermap.components.map_report.t11695.cljs$lang$ctorStr = "clustermap.components.map-report/t11695";
clustermap.components.map_report.t11695.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11695");
});
clustermap.components.map_report.t11695.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11695.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11698 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11698))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11698),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11698));
}
})()),React.DOM.ul(null,(function (){var attrs11699 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11699))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11699),(function (){var attrs11700 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11700))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11700),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11700));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11699),(function (){var attrs11701 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11701))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11701),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11701));
}
})());
}
})(),(function (){var attrs11702 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11702))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11702),(function (){var attrs11703 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11703))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11703),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11703));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11702),(function (){var attrs11704 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11704))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11704),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11704));
}
})());
}
})(),(function (){var attrs11705 = clustermap.formats.money.fmoney.call(null,(function (){var G__11715 = self__.portfolio_company;var G__11715__$1 = (((G__11715 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11715));return G__11715__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11705))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11705),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11705),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11710 = clustermap.formats.number.fnum.call(null,(function (){var G__11716 = self__.portfolio_company;var G__11716__$1 = (((G__11716 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11716));return G__11716__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11710))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11710),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11710),React.DOM.small(null,"Employees"));
}
})()));
});
clustermap.components.map_report.t11695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11697){var self__ = this;
var _11697__$1 = this;return self__.meta11696;
});
clustermap.components.map_report.t11695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11697,meta11696__$1){var self__ = this;
var _11697__$1 = this;return (new clustermap.components.map_report.t11695(self__.const_count,self__.ic_count,self__.portfolio_company,self__.portfolio_company_report,meta11696__$1));
});
clustermap.components.map_report.__GT_t11695 = (function __GT_t11695(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11696){return (new clustermap.components.map_report.t11695(const_count__$1,ic_count__$1,portfolio_company__$1,portfolio_company_report__$1,meta11696));
});
}
return (new clustermap.components.map_report.t11695(const_count,ic_count,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company){var pc_count = (function (){var G__11741 = investor_company;var G__11741__$1 = (((G__11741 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11741));var G__11741__$2 = (((G__11741__$1 == null))?null:cljs.core.count.call(null,G__11741__$1));return G__11741__$2;
})();var const_count = (function (){var G__11742 = investor_company;var G__11742__$1 = (((G__11742 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11742));var G__11742__$2 = (((G__11742__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11742__$1));var G__11742__$3 = (((G__11742__$2 == null))?null:cljs.core.count.call(null,G__11742__$2));return G__11742__$3;
})();if(typeof clustermap.components.map_report.t11743 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11743 = (function (const_count,pc_count,investor_company,investor_company_report,meta11744){
this.const_count = const_count;
this.pc_count = pc_count;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11744 = meta11744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11743.cljs$lang$type = true;
clustermap.components.map_report.t11743.cljs$lang$ctorStr = "clustermap.components.map-report/t11743";
clustermap.components.map_report.t11743.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11743");
});
clustermap.components.map_report.t11743.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11743.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11746 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11746))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11746),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11746));
}
})()),React.DOM.ul(null,(function (){var attrs11747 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11747))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11747),(function (){var attrs11748 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11748))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11748),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11748));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11747),(function (){var attrs11749 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11749))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11749),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11749));
}
})());
}
})(),(function (){var attrs11750 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11750))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11750),(function (){var attrs11751 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11751))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11751),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11751));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11750),(function (){var attrs11752 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11752))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11752),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11752));
}
})());
}
})(),(function (){var attrs11753 = clustermap.formats.money.fmoney.call(null,(function (){var G__11763 = self__.investor_company;var G__11763__$1 = (((G__11763 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11763));return G__11763__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11753))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11753),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11753),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11758 = clustermap.formats.number.fnum.call(null,(function (){var G__11764 = self__.investor_company;var G__11764__$1 = (((G__11764 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11764));return G__11764__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11758))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11758),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11758),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11745){var self__ = this;
var _11745__$1 = this;return self__.meta11744;
});
clustermap.components.map_report.t11743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11745,meta11744__$1){var self__ = this;
var _11745__$1 = this;return (new clustermap.components.map_report.t11743(self__.const_count,self__.pc_count,self__.investor_company,self__.investor_company_report,meta11744__$1));
});
clustermap.components.map_report.__GT_t11743 = (function __GT_t11743(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11744){return (new clustermap.components.map_report.t11743(const_count__$1,pc_count__$1,investor_company__$1,investor_company_report__$1,meta11744));
});
}
return (new clustermap.components.map_report.t11743(const_count,pc_count,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency){var pc_count = (function (){var G__11790 = constituency;var G__11790__$1 = (((G__11790 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11790));var G__11790__$2 = (((G__11790__$1 == null))?null:cljs.core.count.call(null,G__11790__$1));return G__11790__$2;
})();var ic_count = (function (){var G__11791 = constituency;var G__11791__$1 = (((G__11791 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11791));var G__11791__$2 = (((G__11791__$1 == null))?null:cljs.core.count.call(null,G__11791__$1));return G__11791__$2;
})();if(typeof clustermap.components.map_report.t11792 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11792 = (function (ic_count,pc_count,constituency,constituency_report,meta11793){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11793 = meta11793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11792.cljs$lang$type = true;
clustermap.components.map_report.t11792.cljs$lang$ctorStr = "clustermap.components.map-report/t11792";
clustermap.components.map_report.t11792.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11792");
});
clustermap.components.map_report.t11792.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11792.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11795 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11795))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11795),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11795));
}
})(),(function (){var attrs11796 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11796))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11796),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11796),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11797 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11797))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11797),(function (){var attrs11798 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11798))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11798),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11798));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11797),(function (){var attrs11799 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11799))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11799),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11799));
}
})());
}
})(),(function (){var attrs11800 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11800))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11800),(function (){var attrs11801 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11801))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11801),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11801));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11800),(function (){var attrs11802 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11802))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11802),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11802));
}
})());
}
})(),(function (){var attrs11803 = clustermap.formats.money.fmoney.call(null,(function (){var G__11813 = self__.constituency;var G__11813__$1 = (((G__11813 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11813));return G__11813__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11803))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11803),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11803),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11808 = clustermap.formats.number.fnum.call(null,(function (){var G__11814 = self__.constituency;var G__11814__$1 = (((G__11814 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11814));return G__11814__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11808))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11808),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11808),React.DOM.small(null,"Portfolio Company Employees"));
}
})()));
});
clustermap.components.map_report.t11792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11794){var self__ = this;
var _11794__$1 = this;return self__.meta11793;
});
clustermap.components.map_report.t11792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11794,meta11793__$1){var self__ = this;
var _11794__$1 = this;return (new clustermap.components.map_report.t11792(self__.ic_count,self__.pc_count,self__.constituency,self__.constituency_report,meta11793__$1));
});
clustermap.components.map_report.__GT_t11792 = (function __GT_t11792(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11793){return (new clustermap.components.map_report.t11792(ic_count__$1,pc_count__$1,constituency__$1,constituency_report__$1,meta11793));
});
}
return (new clustermap.components.map_report.t11792(ic_count,pc_count,constituency,constituency_report,null));
});
clustermap.components.map_report.widget = (function widget(data){var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11818 = cljs.core._EQ__EQ_;var expr__11819 = type;if(cljs.core.truth_(pred__11818.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11819)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11818.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11819)))
{return clustermap.components.map_report.investor_company_report.call(null,value);
} else
{if(cljs.core.truth_(pred__11818.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11819)))
{return clustermap.components.map_report.constituency_report.call(null,value);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data));
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id){return om.core.root.call(null,app_state,clustermap.components.map_report.widget,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map