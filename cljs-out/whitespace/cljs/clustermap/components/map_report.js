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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__31656 = apc_stats;var G__31656__$1 = (((G__31656 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31656));return G__31656__$1;
})();var ic_count = (function (){var G__31657 = apc_stats;var G__31657__$1 = (((G__31657 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31657));return G__31657__$1;
})();if(typeof clustermap.components.map_report.t31658 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31658 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta31659){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta31659 = meta31659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31658.cljs$lang$type = true;
clustermap.components.map_report.t31658.cljs$lang$ctorStr = "clustermap.components.map-report/t31658";
clustermap.components.map_report.t31658.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31658");
});
clustermap.components.map_report.t31658.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31658.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs31663 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31663))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31663),(function (){var attrs31664 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31664))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31664),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31664));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31663),(function (){var attrs31665 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31665))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31665),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31665));
}
})());
}
})(),(function (){var attrs31666 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31666))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31666),(function (){var attrs31667 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31667))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31667),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31667));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31666),(function (){var attrs31668 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31668))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31668),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31668));
}
})());
}
})(),(function (){var attrs31669 = clustermap.formats.money.fmoney.call(null,(function (){var G__31679 = self__.apc_stats;var G__31679__$1 = (((G__31679 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31679));var G__31679__$2 = (((G__31679__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31679__$1));return G__31679__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31669))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31669),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31669),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31674 = clustermap.formats.number.fnum.call(null,(function (){var G__31680 = self__.apc_stats;var G__31680__$1 = (((G__31680 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31680));var G__31680__$2 = (((G__31680__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31680__$1));return G__31680__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31674))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31674),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31674),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31660){var self__ = this;
var _31660__$1 = this;return self__.meta31659;
});
clustermap.components.map_report.t31658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31660,meta31659__$1){var self__ = this;
var _31660__$1 = this;return (new clustermap.components.map_report.t31658(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta31659__$1));
});
clustermap.components.map_report.__GT_t31658 = (function __GT_t31658(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31659){return (new clustermap.components.map_report.t31658(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31659));
});
}
return (new clustermap.components.map_report.t31658(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__31705 = portfolio_company;var G__31705__$1 = (((G__31705 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31705));var G__31705__$2 = (((G__31705__$1 == null))?null:cljs.core.count.call(null,G__31705__$1));return G__31705__$2;
})();var const_count = (function (){var G__31706 = portfolio_company;var G__31706__$1 = (((G__31706 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31706));var G__31706__$2 = (((G__31706__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31706__$1));var G__31706__$3 = (((G__31706__$2 == null))?null:cljs.core.count.call(null,G__31706__$2));return G__31706__$3;
})();if(typeof clustermap.components.map_report.t31707 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31707 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta31708){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31708 = meta31708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31707.cljs$lang$type = true;
clustermap.components.map_report.t31707.cljs$lang$ctorStr = "clustermap.components.map-report/t31707";
clustermap.components.map_report.t31707.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31707");
});
clustermap.components.map_report.t31707.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31707.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31710 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31710))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31710),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31710));
}
})()),React.DOM.ul(null,(function (){var attrs31711 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31711))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31711),(function (){var attrs31712 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31712))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31712),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31712));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31711),(function (){var attrs31713 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31713))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31713),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31713));
}
})());
}
})(),(function (){var attrs31714 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31714))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31714),(function (){var attrs31715 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31715))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31715),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31715));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31714),(function (){var attrs31716 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31716))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31716),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31716));
}
})());
}
})(),(function (){var attrs31717 = clustermap.formats.money.fmoney.call(null,(function (){var G__31727 = self__.portfolio_company;var G__31727__$1 = (((G__31727 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__31727));return G__31727__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31717))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31717),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31717),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs31722 = clustermap.formats.number.fnum.call(null,(function (){var G__31728 = self__.portfolio_company;var G__31728__$1 = (((G__31728 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__31728));return G__31728__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31722))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31722),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31722),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31709){var self__ = this;
var _31709__$1 = this;return self__.meta31708;
});
clustermap.components.map_report.t31707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31709,meta31708__$1){var self__ = this;
var _31709__$1 = this;return (new clustermap.components.map_report.t31707(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta31708__$1));
});
clustermap.components.map_report.__GT_t31707 = (function __GT_t31707(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31708){return (new clustermap.components.map_report.t31707(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31708));
});
}
return (new clustermap.components.map_report.t31707(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__31753 = investor_company;var G__31753__$1 = (((G__31753 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31753));var G__31753__$2 = (((G__31753__$1 == null))?null:cljs.core.count.call(null,G__31753__$1));return G__31753__$2;
})();var const_count = (function (){var G__31754 = investor_company;var G__31754__$1 = (((G__31754 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31754));var G__31754__$2 = (((G__31754__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31754__$1));var G__31754__$3 = (((G__31754__$2 == null))?null:cljs.core.count.call(null,G__31754__$2));return G__31754__$3;
})();if(typeof clustermap.components.map_report.t31755 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31755 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta31756){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta31756 = meta31756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31755.cljs$lang$type = true;
clustermap.components.map_report.t31755.cljs$lang$ctorStr = "clustermap.components.map-report/t31755";
clustermap.components.map_report.t31755.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31755");
});
clustermap.components.map_report.t31755.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31755.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31758 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs31758))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31758),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31758));
}
})()),React.DOM.ul(null,(function (){var attrs31759 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31759))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31759),(function (){var attrs31760 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31760))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31760),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31760));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31759),(function (){var attrs31761 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31761))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31761),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31761));
}
})());
}
})(),(function (){var attrs31762 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31762))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31762),(function (){var attrs31763 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31763))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31763),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31763));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31762),(function (){var attrs31764 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31764))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31764),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31764));
}
})());
}
})(),(function (){var attrs31765 = clustermap.formats.money.fmoney.call(null,(function (){var G__31775 = self__.investor_company;var G__31775__$1 = (((G__31775 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31775));return G__31775__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31765))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31765),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31765),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31770 = clustermap.formats.number.fnum.call(null,(function (){var G__31776 = self__.investor_company;var G__31776__$1 = (((G__31776 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31776));return G__31776__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31770))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31770),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31770),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31757){var self__ = this;
var _31757__$1 = this;return self__.meta31756;
});
clustermap.components.map_report.t31755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31757,meta31756__$1){var self__ = this;
var _31757__$1 = this;return (new clustermap.components.map_report.t31755(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta31756__$1));
});
clustermap.components.map_report.__GT_t31755 = (function __GT_t31755(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31756){return (new clustermap.components.map_report.t31755(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31756));
});
}
return (new clustermap.components.map_report.t31755(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__31802 = constituency;var G__31802__$1 = (((G__31802 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31802));var G__31802__$2 = (((G__31802__$1 == null))?null:cljs.core.count.call(null,G__31802__$1));return G__31802__$2;
})();var ic_count = (function (){var G__31803 = constituency;var G__31803__$1 = (((G__31803 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31803));var G__31803__$2 = (((G__31803__$1 == null))?null:cljs.core.count.call(null,G__31803__$1));return G__31803__$2;
})();if(typeof clustermap.components.map_report.t31804 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31804 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta31805){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta31805 = meta31805;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31804.cljs$lang$type = true;
clustermap.components.map_report.t31804.cljs$lang$ctorStr = "clustermap.components.map-report/t31804";
clustermap.components.map_report.t31804.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31804");
});
clustermap.components.map_report.t31804.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31804.prototype.om$core$IRender$render$arity$1 = (function (this__9200__auto__){var self__ = this;
var this__9200__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31807 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31807))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31807),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31807));
}
})(),(function (){var attrs31808 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs31808))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs31808),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs31808),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs31809 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31809))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31809),(function (){var attrs31810 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31810))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31810),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31810));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31809),(function (){var attrs31811 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31811))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31811),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31811));
}
})());
}
})(),(function (){var attrs31812 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31812))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31812),(function (){var attrs31813 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31813))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31813),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31813));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31812),(function (){var attrs31814 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31814))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31814),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31814));
}
})());
}
})(),(function (){var attrs31815 = clustermap.formats.money.fmoney.call(null,(function (){var G__31825 = self__.constituency;var G__31825__$1 = (((G__31825 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31825));return G__31825__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31815))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31815),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31815),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31820 = clustermap.formats.number.fnum.call(null,(function (){var G__31826 = self__.constituency;var G__31826__$1 = (((G__31826 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31826));return G__31826__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31820))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31820),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31820),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31806){var self__ = this;
var _31806__$1 = this;return self__.meta31805;
});
clustermap.components.map_report.t31804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31806,meta31805__$1){var self__ = this;
var _31806__$1 = this;return (new clustermap.components.map_report.t31804(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta31805__$1));
});
clustermap.components.map_report.__GT_t31804 = (function __GT_t31804(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta31805){return (new clustermap.components.map_report.t31804(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta31805));
});
}
return (new clustermap.components.map_report.t31804(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__31830 = cljs.core._EQ__EQ_;var expr__31831 = type;if(cljs.core.truth_(pred__31830.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__31831)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__31830.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__31831)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__31830.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__31831)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"all-portfolio-company-stats","all-portfolio-company-stats",2288554704).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
