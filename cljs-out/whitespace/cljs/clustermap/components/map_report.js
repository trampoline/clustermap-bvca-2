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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__31644 = apc_stats;var G__31644__$1 = (((G__31644 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31644));return G__31644__$1;
})();var ic_count = (function (){var G__31645 = apc_stats;var G__31645__$1 = (((G__31645 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31645));return G__31645__$1;
})();if(typeof clustermap.components.map_report.t31646 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31646 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta31647){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta31647 = meta31647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31646.cljs$lang$type = true;
clustermap.components.map_report.t31646.cljs$lang$ctorStr = "clustermap.components.map-report/t31646";
clustermap.components.map_report.t31646.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31646");
});
clustermap.components.map_report.t31646.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31646.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs31651 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31651))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31651),(function (){var attrs31652 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31652))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31652),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31652));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31651),(function (){var attrs31653 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31653))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31653),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31653));
}
})());
}
})(),(function (){var attrs31654 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31654))
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
})(),(function (){var attrs31657 = clustermap.formats.money.fmoney.call(null,(function (){var G__31667 = self__.apc_stats;var G__31667__$1 = (((G__31667 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31667));var G__31667__$2 = (((G__31667__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31667__$1));return G__31667__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31657))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31657),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31657),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31662 = clustermap.formats.number.fnum.call(null,(function (){var G__31668 = self__.apc_stats;var G__31668__$1 = (((G__31668 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31668));var G__31668__$2 = (((G__31668__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31668__$1));return G__31668__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31662))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31662),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31662),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31648){var self__ = this;
var _31648__$1 = this;return self__.meta31647;
});
clustermap.components.map_report.t31646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31648,meta31647__$1){var self__ = this;
var _31648__$1 = this;return (new clustermap.components.map_report.t31646(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta31647__$1));
});
clustermap.components.map_report.__GT_t31646 = (function __GT_t31646(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31647){return (new clustermap.components.map_report.t31646(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31647));
});
}
return (new clustermap.components.map_report.t31646(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__31693 = portfolio_company;var G__31693__$1 = (((G__31693 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31693));var G__31693__$2 = (((G__31693__$1 == null))?null:cljs.core.count.call(null,G__31693__$1));return G__31693__$2;
})();var const_count = (function (){var G__31694 = portfolio_company;var G__31694__$1 = (((G__31694 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31694));var G__31694__$2 = (((G__31694__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31694__$1));var G__31694__$3 = (((G__31694__$2 == null))?null:cljs.core.count.call(null,G__31694__$2));return G__31694__$3;
})();if(typeof clustermap.components.map_report.t31695 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31695 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta31696){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31696 = meta31696;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31695.cljs$lang$type = true;
clustermap.components.map_report.t31695.cljs$lang$ctorStr = "clustermap.components.map-report/t31695";
clustermap.components.map_report.t31695.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31695");
});
clustermap.components.map_report.t31695.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31695.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31698 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31698))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31698),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31698));
}
})()),React.DOM.ul(null,(function (){var attrs31699 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31699))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31699),(function (){var attrs31700 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31700))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31700),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31700));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31699),(function (){var attrs31701 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31701))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31701),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31701));
}
})());
}
})(),(function (){var attrs31702 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31702))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31702),(function (){var attrs31703 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31703))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31703),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31703));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31702),(function (){var attrs31704 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31704))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31704),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31704));
}
})());
}
})(),(function (){var attrs31705 = clustermap.formats.money.fmoney.call(null,(function (){var G__31715 = self__.portfolio_company;var G__31715__$1 = (((G__31715 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__31715));return G__31715__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31705))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31705),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31705),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs31710 = clustermap.formats.number.fnum.call(null,(function (){var G__31716 = self__.portfolio_company;var G__31716__$1 = (((G__31716 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__31716));return G__31716__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31710))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31710),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31710),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31695.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31697){var self__ = this;
var _31697__$1 = this;return self__.meta31696;
});
clustermap.components.map_report.t31695.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31697,meta31696__$1){var self__ = this;
var _31697__$1 = this;return (new clustermap.components.map_report.t31695(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta31696__$1));
});
clustermap.components.map_report.__GT_t31695 = (function __GT_t31695(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31696){return (new clustermap.components.map_report.t31695(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31696));
});
}
return (new clustermap.components.map_report.t31695(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__31741 = investor_company;var G__31741__$1 = (((G__31741 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31741));var G__31741__$2 = (((G__31741__$1 == null))?null:cljs.core.count.call(null,G__31741__$1));return G__31741__$2;
})();var const_count = (function (){var G__31742 = investor_company;var G__31742__$1 = (((G__31742 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31742));var G__31742__$2 = (((G__31742__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31742__$1));var G__31742__$3 = (((G__31742__$2 == null))?null:cljs.core.count.call(null,G__31742__$2));return G__31742__$3;
})();if(typeof clustermap.components.map_report.t31743 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31743 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta31744){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta31744 = meta31744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31743.cljs$lang$type = true;
clustermap.components.map_report.t31743.cljs$lang$ctorStr = "clustermap.components.map-report/t31743";
clustermap.components.map_report.t31743.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31743");
});
clustermap.components.map_report.t31743.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31743.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31746 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs31746))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31746),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31746));
}
})()),React.DOM.ul(null,(function (){var attrs31747 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31747))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31747),(function (){var attrs31748 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31748))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31748),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31748));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31747),(function (){var attrs31749 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31749))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31749),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31749));
}
})());
}
})(),(function (){var attrs31750 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31750))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31750),(function (){var attrs31751 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31751))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31751),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31751));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31750),(function (){var attrs31752 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31752))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31752),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31752));
}
})());
}
})(),(function (){var attrs31753 = clustermap.formats.money.fmoney.call(null,(function (){var G__31763 = self__.investor_company;var G__31763__$1 = (((G__31763 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31763));return G__31763__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31753))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31753),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31753),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31758 = clustermap.formats.number.fnum.call(null,(function (){var G__31764 = self__.investor_company;var G__31764__$1 = (((G__31764 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31764));return G__31764__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31758))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31758),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31758),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31745){var self__ = this;
var _31745__$1 = this;return self__.meta31744;
});
clustermap.components.map_report.t31743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31745,meta31744__$1){var self__ = this;
var _31745__$1 = this;return (new clustermap.components.map_report.t31743(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta31744__$1));
});
clustermap.components.map_report.__GT_t31743 = (function __GT_t31743(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31744){return (new clustermap.components.map_report.t31743(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31744));
});
}
return (new clustermap.components.map_report.t31743(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__31790 = constituency;var G__31790__$1 = (((G__31790 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31790));var G__31790__$2 = (((G__31790__$1 == null))?null:cljs.core.count.call(null,G__31790__$1));return G__31790__$2;
})();var ic_count = (function (){var G__31791 = constituency;var G__31791__$1 = (((G__31791 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31791));var G__31791__$2 = (((G__31791__$1 == null))?null:cljs.core.count.call(null,G__31791__$1));return G__31791__$2;
})();if(typeof clustermap.components.map_report.t31792 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31792 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta31793){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta31793 = meta31793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31792.cljs$lang$type = true;
clustermap.components.map_report.t31792.cljs$lang$ctorStr = "clustermap.components.map-report/t31792";
clustermap.components.map_report.t31792.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31792");
});
clustermap.components.map_report.t31792.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31792.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31795 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31795))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31795),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31795));
}
})(),(function (){var attrs31796 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31796))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31796),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31796),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs31797 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31797))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31797),(function (){var attrs31798 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31798))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31798),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31798));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31797),(function (){var attrs31799 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31799))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31799),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31799));
}
})());
}
})(),(function (){var attrs31800 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31800))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31800),(function (){var attrs31801 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31801))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31801),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31801));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31800),(function (){var attrs31802 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31802))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31802),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31802));
}
})());
}
})(),(function (){var attrs31803 = clustermap.formats.money.fmoney.call(null,(function (){var G__31813 = self__.constituency;var G__31813__$1 = (((G__31813 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31813));return G__31813__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31803))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31803),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31803),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31808 = clustermap.formats.number.fnum.call(null,(function (){var G__31814 = self__.constituency;var G__31814__$1 = (((G__31814 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31814));return G__31814__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31808))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31808),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31808),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31794){var self__ = this;
var _31794__$1 = this;return self__.meta31793;
});
clustermap.components.map_report.t31792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31794,meta31793__$1){var self__ = this;
var _31794__$1 = this;return (new clustermap.components.map_report.t31792(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta31793__$1));
});
clustermap.components.map_report.__GT_t31792 = (function __GT_t31792(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta31793){return (new clustermap.components.map_report.t31792(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta31793));
});
}
return (new clustermap.components.map_report.t31792(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__31818 = cljs.core._EQ__EQ_;var expr__31819 = type;if(cljs.core.truth_(pred__31818.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31819)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__31818.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31819)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__31818.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31819)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
