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
clustermap.components.map_report.full_report_button = (function full_report_button(comm){return React.DOM.a({"href": "#", "onClick": (function (e){return cljs.core.async.put_BANG_.call(null,comm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-view","change-view",3608283668),"lists"], null));
})},React.DOM.button({"className": "btn", "type": "button"},React.DOM.i({"className": "icon-lists-sm"}),"Full report"));
});
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__31566 = apc_stats;var G__31566__$1 = (((G__31566 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31566));return G__31566__$1;
})();var ic_count = (function (){var G__31567 = apc_stats;var G__31567__$1 = (((G__31567 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31567));return G__31567__$1;
})();if(typeof clustermap.components.map_report.t31568 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31568 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta31569){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta31569 = meta31569;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31568.cljs$lang$type = true;
clustermap.components.map_report.t31568.cljs$lang$ctorStr = "clustermap.components.map-report/t31568";
clustermap.components.map_report.t31568.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31568");
});
clustermap.components.map_report.t31568.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31568.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs31573 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31573))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31573),(function (){var attrs31574 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31574))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31574),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31574));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31573),(function (){var attrs31575 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31575))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31575),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31575));
}
})());
}
})(),(function (){var attrs31576 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31576))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31576),(function (){var attrs31577 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31577))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31577),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31577));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31576),(function (){var attrs31578 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31578))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31578),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31578));
}
})());
}
})(),(function (){var attrs31579 = clustermap.formats.money.fmoney.call(null,(function (){var G__31589 = self__.apc_stats;var G__31589__$1 = (((G__31589 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31589));var G__31589__$2 = (((G__31589__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31589__$1));return G__31589__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31579))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31579),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31579),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31584 = clustermap.formats.number.fnum.call(null,(function (){var G__31590 = self__.apc_stats;var G__31590__$1 = (((G__31590 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31590));var G__31590__$2 = (((G__31590__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31590__$1));return G__31590__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31584))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31584),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31584),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31570){var self__ = this;
var _31570__$1 = this;return self__.meta31569;
});
clustermap.components.map_report.t31568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31570,meta31569__$1){var self__ = this;
var _31570__$1 = this;return (new clustermap.components.map_report.t31568(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta31569__$1));
});
clustermap.components.map_report.__GT_t31568 = (function __GT_t31568(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31569){return (new clustermap.components.map_report.t31568(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31569));
});
}
return (new clustermap.components.map_report.t31568(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__31615 = portfolio_company;var G__31615__$1 = (((G__31615 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31615));var G__31615__$2 = (((G__31615__$1 == null))?null:cljs.core.count.call(null,G__31615__$1));return G__31615__$2;
})();var const_count = (function (){var G__31616 = portfolio_company;var G__31616__$1 = (((G__31616 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31616));var G__31616__$2 = (((G__31616__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31616__$1));var G__31616__$3 = (((G__31616__$2 == null))?null:cljs.core.count.call(null,G__31616__$2));return G__31616__$3;
})();if(typeof clustermap.components.map_report.t31617 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31617 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta31618){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31618 = meta31618;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31617.cljs$lang$type = true;
clustermap.components.map_report.t31617.cljs$lang$ctorStr = "clustermap.components.map-report/t31617";
clustermap.components.map_report.t31617.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31617");
});
clustermap.components.map_report.t31617.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31617.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31620 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31620))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31620),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31620));
}
})()),React.DOM.ul(null,(function (){var attrs31621 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31621))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31621),(function (){var attrs31622 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31622))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31622),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31622));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31621),(function (){var attrs31623 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31623))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31623),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31623));
}
})());
}
})(),(function (){var attrs31624 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31624))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31624),(function (){var attrs31625 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31625))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31625),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31625));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31624),(function (){var attrs31626 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31626))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31626),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31626));
}
})());
}
})(),(function (){var attrs31627 = clustermap.formats.money.fmoney.call(null,(function (){var G__31637 = self__.portfolio_company;var G__31637__$1 = (((G__31637 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__31637));return G__31637__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31627))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31627),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31627),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs31632 = clustermap.formats.number.fnum.call(null,(function (){var G__31638 = self__.portfolio_company;var G__31638__$1 = (((G__31638 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__31638));return G__31638__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31632))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31632),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31632),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31619){var self__ = this;
var _31619__$1 = this;return self__.meta31618;
});
clustermap.components.map_report.t31617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31619,meta31618__$1){var self__ = this;
var _31619__$1 = this;return (new clustermap.components.map_report.t31617(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta31618__$1));
});
clustermap.components.map_report.__GT_t31617 = (function __GT_t31617(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31618){return (new clustermap.components.map_report.t31617(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31618));
});
}
return (new clustermap.components.map_report.t31617(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__31663 = investor_company;var G__31663__$1 = (((G__31663 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31663));var G__31663__$2 = (((G__31663__$1 == null))?null:cljs.core.count.call(null,G__31663__$1));return G__31663__$2;
})();var const_count = (function (){var G__31664 = investor_company;var G__31664__$1 = (((G__31664 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31664));var G__31664__$2 = (((G__31664__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31664__$1));var G__31664__$3 = (((G__31664__$2 == null))?null:cljs.core.count.call(null,G__31664__$2));return G__31664__$3;
})();if(typeof clustermap.components.map_report.t31665 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31665 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta31666){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta31666 = meta31666;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31665.cljs$lang$type = true;
clustermap.components.map_report.t31665.cljs$lang$ctorStr = "clustermap.components.map-report/t31665";
clustermap.components.map_report.t31665.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31665");
});
clustermap.components.map_report.t31665.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31665.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31668 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs31668))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31668),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31668));
}
})()),React.DOM.ul(null,(function (){var attrs31669 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31669))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31669),(function (){var attrs31670 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31670))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31670),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31670));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31669),(function (){var attrs31671 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31671))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31671),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31671));
}
})());
}
})(),(function (){var attrs31672 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31672))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31672),(function (){var attrs31673 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31673))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31673),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31673));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31672),(function (){var attrs31674 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31674))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31674),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31674));
}
})());
}
})(),(function (){var attrs31675 = clustermap.formats.money.fmoney.call(null,(function (){var G__31685 = self__.investor_company;var G__31685__$1 = (((G__31685 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31685));return G__31685__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31675))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31675),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31675),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31680 = clustermap.formats.number.fnum.call(null,(function (){var G__31686 = self__.investor_company;var G__31686__$1 = (((G__31686 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31686));return G__31686__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31680))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31680),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31680),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31665.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31667){var self__ = this;
var _31667__$1 = this;return self__.meta31666;
});
clustermap.components.map_report.t31665.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31667,meta31666__$1){var self__ = this;
var _31667__$1 = this;return (new clustermap.components.map_report.t31665(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta31666__$1));
});
clustermap.components.map_report.__GT_t31665 = (function __GT_t31665(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31666){return (new clustermap.components.map_report.t31665(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31666));
});
}
return (new clustermap.components.map_report.t31665(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__31712 = constituency;var G__31712__$1 = (((G__31712 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31712));var G__31712__$2 = (((G__31712__$1 == null))?null:cljs.core.count.call(null,G__31712__$1));return G__31712__$2;
})();var ic_count = (function (){var G__31713 = constituency;var G__31713__$1 = (((G__31713 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31713));var G__31713__$2 = (((G__31713__$1 == null))?null:cljs.core.count.call(null,G__31713__$1));return G__31713__$2;
})();if(typeof clustermap.components.map_report.t31714 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31714 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta31715){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta31715 = meta31715;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31714.cljs$lang$type = true;
clustermap.components.map_report.t31714.cljs$lang$ctorStr = "clustermap.components.map-report/t31714";
clustermap.components.map_report.t31714.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31714");
});
clustermap.components.map_report.t31714.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31714.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31717 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31717))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31717),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31717));
}
})(),(function (){var attrs31718 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31718))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31718),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31718),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs31719 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31719))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31719),(function (){var attrs31720 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31720))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31720),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31720));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31719),(function (){var attrs31721 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31721))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31721),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31721));
}
})());
}
})(),(function (){var attrs31722 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31722))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31722),(function (){var attrs31723 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31723))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31723),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31723));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31722),(function (){var attrs31724 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31724))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31724),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31724));
}
})());
}
})(),(function (){var attrs31725 = clustermap.formats.money.fmoney.call(null,(function (){var G__31735 = self__.constituency;var G__31735__$1 = (((G__31735 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31735));return G__31735__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31725))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31725),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31725),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31730 = clustermap.formats.number.fnum.call(null,(function (){var G__31736 = self__.constituency;var G__31736__$1 = (((G__31736 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31736));return G__31736__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31730))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31730),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31730),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31716){var self__ = this;
var _31716__$1 = this;return self__.meta31715;
});
clustermap.components.map_report.t31714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31716,meta31715__$1){var self__ = this;
var _31716__$1 = this;return (new clustermap.components.map_report.t31714(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta31715__$1));
});
clustermap.components.map_report.__GT_t31714 = (function __GT_t31714(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta31715){return (new clustermap.components.map_report.t31714(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta31715));
});
}
return (new clustermap.components.map_report.t31714(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__31740 = cljs.core._EQ__EQ_;var expr__31741 = type;if(cljs.core.truth_(pred__31740.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31741)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__31740.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31741)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__31740.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31741)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
