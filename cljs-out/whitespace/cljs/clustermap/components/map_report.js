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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__31620 = apc_stats;var G__31620__$1 = (((G__31620 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31620));return G__31620__$1;
})();var ic_count = (function (){var G__31621 = apc_stats;var G__31621__$1 = (((G__31621 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31621));return G__31621__$1;
})();if(typeof clustermap.components.map_report.t31622 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31622 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta31623){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta31623 = meta31623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31622.cljs$lang$type = true;
clustermap.components.map_report.t31622.cljs$lang$ctorStr = "clustermap.components.map-report/t31622";
clustermap.components.map_report.t31622.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31622");
});
clustermap.components.map_report.t31622.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31622.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs31627 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31627))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31627),(function (){var attrs31628 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31628))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31628),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31628));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31627),(function (){var attrs31629 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31629))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31629),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31629));
}
})());
}
})(),(function (){var attrs31630 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31630))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31630),(function (){var attrs31631 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31631))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31631),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31631));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31630),(function (){var attrs31632 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31632))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31632),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31632));
}
})());
}
})(),(function (){var attrs31633 = clustermap.formats.money.fmoney.call(null,(function (){var G__31643 = self__.apc_stats;var G__31643__$1 = (((G__31643 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31643));var G__31643__$2 = (((G__31643__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31643__$1));return G__31643__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31633))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31633),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31633),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31638 = clustermap.formats.number.fnum.call(null,(function (){var G__31644 = self__.apc_stats;var G__31644__$1 = (((G__31644 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31644));var G__31644__$2 = (((G__31644__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31644__$1));return G__31644__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31638))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31638),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31638),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31624){var self__ = this;
var _31624__$1 = this;return self__.meta31623;
});
clustermap.components.map_report.t31622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31624,meta31623__$1){var self__ = this;
var _31624__$1 = this;return (new clustermap.components.map_report.t31622(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta31623__$1));
});
clustermap.components.map_report.__GT_t31622 = (function __GT_t31622(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31623){return (new clustermap.components.map_report.t31622(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31623));
});
}
return (new clustermap.components.map_report.t31622(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__31669 = portfolio_company;var G__31669__$1 = (((G__31669 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31669));var G__31669__$2 = (((G__31669__$1 == null))?null:cljs.core.count.call(null,G__31669__$1));return G__31669__$2;
})();var const_count = (function (){var G__31670 = portfolio_company;var G__31670__$1 = (((G__31670 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31670));var G__31670__$2 = (((G__31670__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31670__$1));var G__31670__$3 = (((G__31670__$2 == null))?null:cljs.core.count.call(null,G__31670__$2));return G__31670__$3;
})();if(typeof clustermap.components.map_report.t31671 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31671 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta31672){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31672 = meta31672;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31671.cljs$lang$type = true;
clustermap.components.map_report.t31671.cljs$lang$ctorStr = "clustermap.components.map-report/t31671";
clustermap.components.map_report.t31671.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31671");
});
clustermap.components.map_report.t31671.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31671.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31674 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31674))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31674),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31674));
}
})()),React.DOM.ul(null,(function (){var attrs31675 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31675))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31675),(function (){var attrs31676 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31676))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31676),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31676));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31675),(function (){var attrs31677 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31677))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31677),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31677));
}
})());
}
})(),(function (){var attrs31678 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31678))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31678),(function (){var attrs31679 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31679))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31679),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31679));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31678),(function (){var attrs31680 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31680))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31680),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31680));
}
})());
}
})(),(function (){var attrs31681 = clustermap.formats.money.fmoney.call(null,(function (){var G__31691 = self__.portfolio_company;var G__31691__$1 = (((G__31691 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__31691));return G__31691__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31681))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31681),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31681),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs31686 = clustermap.formats.number.fnum.call(null,(function (){var G__31692 = self__.portfolio_company;var G__31692__$1 = (((G__31692 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__31692));return G__31692__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31686))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31686),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31686),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31673){var self__ = this;
var _31673__$1 = this;return self__.meta31672;
});
clustermap.components.map_report.t31671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31673,meta31672__$1){var self__ = this;
var _31673__$1 = this;return (new clustermap.components.map_report.t31671(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta31672__$1));
});
clustermap.components.map_report.__GT_t31671 = (function __GT_t31671(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31672){return (new clustermap.components.map_report.t31671(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31672));
});
}
return (new clustermap.components.map_report.t31671(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__31717 = investor_company;var G__31717__$1 = (((G__31717 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31717));var G__31717__$2 = (((G__31717__$1 == null))?null:cljs.core.count.call(null,G__31717__$1));return G__31717__$2;
})();var const_count = (function (){var G__31718 = investor_company;var G__31718__$1 = (((G__31718 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31718));var G__31718__$2 = (((G__31718__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31718__$1));var G__31718__$3 = (((G__31718__$2 == null))?null:cljs.core.count.call(null,G__31718__$2));return G__31718__$3;
})();if(typeof clustermap.components.map_report.t31719 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31719 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta31720){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta31720 = meta31720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31719.cljs$lang$type = true;
clustermap.components.map_report.t31719.cljs$lang$ctorStr = "clustermap.components.map-report/t31719";
clustermap.components.map_report.t31719.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31719");
});
clustermap.components.map_report.t31719.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31719.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31722 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs31722))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31722),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31722));
}
})()),React.DOM.ul(null,(function (){var attrs31723 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31723))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31723),(function (){var attrs31724 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31724))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31724),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31724));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31723),(function (){var attrs31725 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31725))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31725),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31725));
}
})());
}
})(),(function (){var attrs31726 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31726))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31726),(function (){var attrs31727 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31727))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31727),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31727));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31726),(function (){var attrs31728 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31728))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31728),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31728));
}
})());
}
})(),(function (){var attrs31729 = clustermap.formats.money.fmoney.call(null,(function (){var G__31739 = self__.investor_company;var G__31739__$1 = (((G__31739 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31739));return G__31739__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31729))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31729),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31729),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31734 = clustermap.formats.number.fnum.call(null,(function (){var G__31740 = self__.investor_company;var G__31740__$1 = (((G__31740 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31740));return G__31740__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31734))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31734),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31734),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31719.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31721){var self__ = this;
var _31721__$1 = this;return self__.meta31720;
});
clustermap.components.map_report.t31719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31721,meta31720__$1){var self__ = this;
var _31721__$1 = this;return (new clustermap.components.map_report.t31719(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta31720__$1));
});
clustermap.components.map_report.__GT_t31719 = (function __GT_t31719(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31720){return (new clustermap.components.map_report.t31719(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31720));
});
}
return (new clustermap.components.map_report.t31719(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__31766 = constituency;var G__31766__$1 = (((G__31766 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31766));var G__31766__$2 = (((G__31766__$1 == null))?null:cljs.core.count.call(null,G__31766__$1));return G__31766__$2;
})();var ic_count = (function (){var G__31767 = constituency;var G__31767__$1 = (((G__31767 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31767));var G__31767__$2 = (((G__31767__$1 == null))?null:cljs.core.count.call(null,G__31767__$1));return G__31767__$2;
})();if(typeof clustermap.components.map_report.t31768 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31768 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta31769){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta31769 = meta31769;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31768.cljs$lang$type = true;
clustermap.components.map_report.t31768.cljs$lang$ctorStr = "clustermap.components.map-report/t31768";
clustermap.components.map_report.t31768.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31768");
});
clustermap.components.map_report.t31768.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31768.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31771 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31771))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31771),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31771));
}
})(),(function (){var attrs31772 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31772))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31772),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31772),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs31773 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31773))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31773),(function (){var attrs31774 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31774))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31774),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31774));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31773),(function (){var attrs31775 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31775))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31775),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31775));
}
})());
}
})(),(function (){var attrs31776 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31776))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31776),(function (){var attrs31777 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31777))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31777),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31777));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31776),(function (){var attrs31778 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31778))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31778),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31778));
}
})());
}
})(),(function (){var attrs31779 = clustermap.formats.money.fmoney.call(null,(function (){var G__31789 = self__.constituency;var G__31789__$1 = (((G__31789 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31789));return G__31789__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31779))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31779),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31779),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31784 = clustermap.formats.number.fnum.call(null,(function (){var G__31790 = self__.constituency;var G__31790__$1 = (((G__31790 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31790));return G__31790__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31784))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31784),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31784),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31768.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31770){var self__ = this;
var _31770__$1 = this;return self__.meta31769;
});
clustermap.components.map_report.t31768.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31770,meta31769__$1){var self__ = this;
var _31770__$1 = this;return (new clustermap.components.map_report.t31768(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta31769__$1));
});
clustermap.components.map_report.__GT_t31768 = (function __GT_t31768(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta31769){return (new clustermap.components.map_report.t31768(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta31769));
});
}
return (new clustermap.components.map_report.t31768(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__31794 = cljs.core._EQ__EQ_;var expr__31795 = type;if(cljs.core.truth_(pred__31794.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31795)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__31794.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31795)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__31794.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31795)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
