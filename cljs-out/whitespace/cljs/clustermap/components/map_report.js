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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__31599 = apc_stats;var G__31599__$1 = (((G__31599 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31599));return G__31599__$1;
})();var ic_count = (function (){var G__31600 = apc_stats;var G__31600__$1 = (((G__31600 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31600));return G__31600__$1;
})();if(typeof clustermap.components.map_report.t31601 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31601 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta31602){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta31602 = meta31602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31601.cljs$lang$type = true;
clustermap.components.map_report.t31601.cljs$lang$ctorStr = "clustermap.components.map-report/t31601";
clustermap.components.map_report.t31601.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31601");
});
clustermap.components.map_report.t31601.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31601.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs31606 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31606))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31606),(function (){var attrs31607 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31607))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31607),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31607));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31606),(function (){var attrs31608 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31608))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31608),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31608));
}
})());
}
})(),(function (){var attrs31609 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31609))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31609),(function (){var attrs31610 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31610))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31610),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31610));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31609),(function (){var attrs31611 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31611))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31611),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31611));
}
})());
}
})(),(function (){var attrs31612 = clustermap.formats.money.fmoney.call(null,(function (){var G__31622 = self__.apc_stats;var G__31622__$1 = (((G__31622 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31622));var G__31622__$2 = (((G__31622__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31622__$1));return G__31622__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31612))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31612),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31612),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31617 = clustermap.formats.number.fnum.call(null,(function (){var G__31623 = self__.apc_stats;var G__31623__$1 = (((G__31623 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31623));var G__31623__$2 = (((G__31623__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31623__$1));return G__31623__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31617))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31617),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31617),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31603){var self__ = this;
var _31603__$1 = this;return self__.meta31602;
});
clustermap.components.map_report.t31601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31603,meta31602__$1){var self__ = this;
var _31603__$1 = this;return (new clustermap.components.map_report.t31601(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta31602__$1));
});
clustermap.components.map_report.__GT_t31601 = (function __GT_t31601(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31602){return (new clustermap.components.map_report.t31601(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31602));
});
}
return (new clustermap.components.map_report.t31601(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__31648 = portfolio_company;var G__31648__$1 = (((G__31648 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31648));var G__31648__$2 = (((G__31648__$1 == null))?null:cljs.core.count.call(null,G__31648__$1));return G__31648__$2;
})();var const_count = (function (){var G__31649 = portfolio_company;var G__31649__$1 = (((G__31649 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31649));var G__31649__$2 = (((G__31649__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31649__$1));var G__31649__$3 = (((G__31649__$2 == null))?null:cljs.core.count.call(null,G__31649__$2));return G__31649__$3;
})();if(typeof clustermap.components.map_report.t31650 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31650 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta31651){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31651 = meta31651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31650.cljs$lang$type = true;
clustermap.components.map_report.t31650.cljs$lang$ctorStr = "clustermap.components.map-report/t31650";
clustermap.components.map_report.t31650.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31650");
});
clustermap.components.map_report.t31650.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31650.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31653 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31653))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31653),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31653));
}
})()),React.DOM.ul(null,(function (){var attrs31654 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31654))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31654),(function (){var attrs31655 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31655))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31655),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31655));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31654),(function (){var attrs31656 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31656))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31656),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31656));
}
})());
}
})(),(function (){var attrs31657 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31657))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31657),(function (){var attrs31658 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31658))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31658),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31658));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31657),(function (){var attrs31659 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31659))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31659),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31659));
}
})());
}
})(),(function (){var attrs31660 = clustermap.formats.money.fmoney.call(null,(function (){var G__31670 = self__.portfolio_company;var G__31670__$1 = (((G__31670 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__31670));return G__31670__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31660))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31660),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31660),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs31665 = clustermap.formats.number.fnum.call(null,(function (){var G__31671 = self__.portfolio_company;var G__31671__$1 = (((G__31671 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__31671));return G__31671__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31665))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31665),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31665),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31652){var self__ = this;
var _31652__$1 = this;return self__.meta31651;
});
clustermap.components.map_report.t31650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31652,meta31651__$1){var self__ = this;
var _31652__$1 = this;return (new clustermap.components.map_report.t31650(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta31651__$1));
});
clustermap.components.map_report.__GT_t31650 = (function __GT_t31650(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31651){return (new clustermap.components.map_report.t31650(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31651));
});
}
return (new clustermap.components.map_report.t31650(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__31696 = investor_company;var G__31696__$1 = (((G__31696 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31696));var G__31696__$2 = (((G__31696__$1 == null))?null:cljs.core.count.call(null,G__31696__$1));return G__31696__$2;
})();var const_count = (function (){var G__31697 = investor_company;var G__31697__$1 = (((G__31697 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31697));var G__31697__$2 = (((G__31697__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31697__$1));var G__31697__$3 = (((G__31697__$2 == null))?null:cljs.core.count.call(null,G__31697__$2));return G__31697__$3;
})();if(typeof clustermap.components.map_report.t31698 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31698 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta31699){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta31699 = meta31699;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31698.cljs$lang$type = true;
clustermap.components.map_report.t31698.cljs$lang$ctorStr = "clustermap.components.map-report/t31698";
clustermap.components.map_report.t31698.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31698");
});
clustermap.components.map_report.t31698.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31698.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31701 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs31701))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31701),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31701));
}
})()),React.DOM.ul(null,(function (){var attrs31702 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31702))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31702),(function (){var attrs31703 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31703))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31703),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31703));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31702),(function (){var attrs31704 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31704))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31704),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31704));
}
})());
}
})(),(function (){var attrs31705 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31705))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31705),(function (){var attrs31706 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31706))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31706),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31706));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31705),(function (){var attrs31707 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31707))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31707),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31707));
}
})());
}
})(),(function (){var attrs31708 = clustermap.formats.money.fmoney.call(null,(function (){var G__31718 = self__.investor_company;var G__31718__$1 = (((G__31718 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31718));return G__31718__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31708))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31708),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31708),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31713 = clustermap.formats.number.fnum.call(null,(function (){var G__31719 = self__.investor_company;var G__31719__$1 = (((G__31719 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31719));return G__31719__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31713))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31713),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31713),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31700){var self__ = this;
var _31700__$1 = this;return self__.meta31699;
});
clustermap.components.map_report.t31698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31700,meta31699__$1){var self__ = this;
var _31700__$1 = this;return (new clustermap.components.map_report.t31698(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta31699__$1));
});
clustermap.components.map_report.__GT_t31698 = (function __GT_t31698(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31699){return (new clustermap.components.map_report.t31698(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31699));
});
}
return (new clustermap.components.map_report.t31698(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__31745 = constituency;var G__31745__$1 = (((G__31745 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31745));var G__31745__$2 = (((G__31745__$1 == null))?null:cljs.core.count.call(null,G__31745__$1));return G__31745__$2;
})();var ic_count = (function (){var G__31746 = constituency;var G__31746__$1 = (((G__31746 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31746));var G__31746__$2 = (((G__31746__$1 == null))?null:cljs.core.count.call(null,G__31746__$1));return G__31746__$2;
})();if(typeof clustermap.components.map_report.t31747 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31747 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta31748){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta31748 = meta31748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31747.cljs$lang$type = true;
clustermap.components.map_report.t31747.cljs$lang$ctorStr = "clustermap.components.map-report/t31747";
clustermap.components.map_report.t31747.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31747");
});
clustermap.components.map_report.t31747.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31747.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31750 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31750))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31750),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31750));
}
})(),(function (){var attrs31751 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31751))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31751),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31751),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs31752 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31752))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31752),(function (){var attrs31753 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31753))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31753),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31753));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31752),(function (){var attrs31754 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31754))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31754),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31754));
}
})());
}
})(),(function (){var attrs31755 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31755))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31755),(function (){var attrs31756 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31756))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31756),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31756));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31755),(function (){var attrs31757 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31757))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31757),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31757));
}
})());
}
})(),(function (){var attrs31758 = clustermap.formats.money.fmoney.call(null,(function (){var G__31768 = self__.constituency;var G__31768__$1 = (((G__31768 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31768));return G__31768__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31758))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31758),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31758),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31763 = clustermap.formats.number.fnum.call(null,(function (){var G__31769 = self__.constituency;var G__31769__$1 = (((G__31769 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31769));return G__31769__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31763))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31763),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31763),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31749){var self__ = this;
var _31749__$1 = this;return self__.meta31748;
});
clustermap.components.map_report.t31747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31749,meta31748__$1){var self__ = this;
var _31749__$1 = this;return (new clustermap.components.map_report.t31747(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta31748__$1));
});
clustermap.components.map_report.__GT_t31747 = (function __GT_t31747(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta31748){return (new clustermap.components.map_report.t31747(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta31748));
});
}
return (new clustermap.components.map_report.t31747(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__31773 = cljs.core._EQ__EQ_;var expr__31774 = type;if(cljs.core.truth_(pred__31773.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31774)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__31773.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31774)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__31773.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31774)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
