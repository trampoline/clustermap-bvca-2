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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__31937 = apc_stats;var G__31937__$1 = (((G__31937 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31937));return G__31937__$1;
})();var ic_count = (function (){var G__31938 = apc_stats;var G__31938__$1 = (((G__31938 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31938));return G__31938__$1;
})();if(typeof clustermap.components.map_report.t31939 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31939 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta31940){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta31940 = meta31940;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31939.cljs$lang$type = true;
clustermap.components.map_report.t31939.cljs$lang$ctorStr = "clustermap.components.map-report/t31939";
clustermap.components.map_report.t31939.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31939");
});
clustermap.components.map_report.t31939.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31939.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs31944 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31944))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31944),(function (){var attrs31945 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31945))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31945),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31945));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31944),(function (){var attrs31946 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31946))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31946),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31946));
}
})());
}
})(),(function (){var attrs31947 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31947))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31947),(function (){var attrs31948 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31948))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31948),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31948));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31947),(function (){var attrs31949 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31949))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31949),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31949));
}
})());
}
})(),(function (){var attrs31950 = clustermap.formats.money.fmoney.call(null,(function (){var G__31960 = self__.apc_stats;var G__31960__$1 = (((G__31960 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31960));var G__31960__$2 = (((G__31960__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31960__$1));return G__31960__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31950))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31950),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31950),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31955 = clustermap.formats.number.fnum.call(null,(function (){var G__31961 = self__.apc_stats;var G__31961__$1 = (((G__31961 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31961));var G__31961__$2 = (((G__31961__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31961__$1));return G__31961__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31955))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31955),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31955),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31941){var self__ = this;
var _31941__$1 = this;return self__.meta31940;
});
clustermap.components.map_report.t31939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31941,meta31940__$1){var self__ = this;
var _31941__$1 = this;return (new clustermap.components.map_report.t31939(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta31940__$1));
});
clustermap.components.map_report.__GT_t31939 = (function __GT_t31939(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31940){return (new clustermap.components.map_report.t31939(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31940));
});
}
return (new clustermap.components.map_report.t31939(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__31986 = portfolio_company;var G__31986__$1 = (((G__31986 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31986));var G__31986__$2 = (((G__31986__$1 == null))?null:cljs.core.count.call(null,G__31986__$1));return G__31986__$2;
})();var const_count = (function (){var G__31987 = portfolio_company;var G__31987__$1 = (((G__31987 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31987));var G__31987__$2 = (((G__31987__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31987__$1));var G__31987__$3 = (((G__31987__$2 == null))?null:cljs.core.count.call(null,G__31987__$2));return G__31987__$3;
})();if(typeof clustermap.components.map_report.t31988 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31988 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta31989){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31989 = meta31989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31988.cljs$lang$type = true;
clustermap.components.map_report.t31988.cljs$lang$ctorStr = "clustermap.components.map-report/t31988";
clustermap.components.map_report.t31988.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31988");
});
clustermap.components.map_report.t31988.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31988.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31991 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31991))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31991),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31991));
}
})()),React.DOM.ul(null,(function (){var attrs31992 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31992))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31992),(function (){var attrs31993 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31993))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31993),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31993));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31992),(function (){var attrs31994 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31994))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31994),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31994));
}
})());
}
})(),(function (){var attrs31995 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31995))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31995),(function (){var attrs31996 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31996))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31996),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31996));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31995),(function (){var attrs31997 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31997))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31997),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31997));
}
})());
}
})(),(function (){var attrs31998 = clustermap.formats.money.fmoney.call(null,(function (){var G__32008 = self__.portfolio_company;var G__32008__$1 = (((G__32008 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__32008));return G__32008__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31998))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31998),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31998),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs32003 = clustermap.formats.number.fnum.call(null,(function (){var G__32009 = self__.portfolio_company;var G__32009__$1 = (((G__32009 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__32009));return G__32009__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32003))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32003),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32003),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31990){var self__ = this;
var _31990__$1 = this;return self__.meta31989;
});
clustermap.components.map_report.t31988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31990,meta31989__$1){var self__ = this;
var _31990__$1 = this;return (new clustermap.components.map_report.t31988(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta31989__$1));
});
clustermap.components.map_report.__GT_t31988 = (function __GT_t31988(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31989){return (new clustermap.components.map_report.t31988(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31989));
});
}
return (new clustermap.components.map_report.t31988(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__32034 = investor_company;var G__32034__$1 = (((G__32034 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32034));var G__32034__$2 = (((G__32034__$1 == null))?null:cljs.core.count.call(null,G__32034__$1));return G__32034__$2;
})();var const_count = (function (){var G__32035 = investor_company;var G__32035__$1 = (((G__32035 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__32035));var G__32035__$2 = (((G__32035__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__32035__$1));var G__32035__$3 = (((G__32035__$2 == null))?null:cljs.core.count.call(null,G__32035__$2));return G__32035__$3;
})();if(typeof clustermap.components.map_report.t32036 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32036 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta32037){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta32037 = meta32037;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32036.cljs$lang$type = true;
clustermap.components.map_report.t32036.cljs$lang$ctorStr = "clustermap.components.map-report/t32036";
clustermap.components.map_report.t32036.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32036");
});
clustermap.components.map_report.t32036.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32036.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32039 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs32039))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32039),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32039));
}
})()),React.DOM.ul(null,(function (){var attrs32040 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32040))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32040),(function (){var attrs32041 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32041))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32041),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32041));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32040),(function (){var attrs32042 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32042))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32042),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32042));
}
})());
}
})(),(function (){var attrs32043 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32043))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32043),(function (){var attrs32044 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32044))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32044),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32044));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32043),(function (){var attrs32045 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32045))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32045),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32045));
}
})());
}
})(),(function (){var attrs32046 = clustermap.formats.money.fmoney.call(null,(function (){var G__32056 = self__.investor_company;var G__32056__$1 = (((G__32056 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32056));return G__32056__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32046))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32046),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32046),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32051 = clustermap.formats.number.fnum.call(null,(function (){var G__32057 = self__.investor_company;var G__32057__$1 = (((G__32057 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32057));return G__32057__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32051))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32051),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32051),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32038){var self__ = this;
var _32038__$1 = this;return self__.meta32037;
});
clustermap.components.map_report.t32036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32038,meta32037__$1){var self__ = this;
var _32038__$1 = this;return (new clustermap.components.map_report.t32036(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta32037__$1));
});
clustermap.components.map_report.__GT_t32036 = (function __GT_t32036(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32037){return (new clustermap.components.map_report.t32036(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32037));
});
}
return (new clustermap.components.map_report.t32036(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__32083 = constituency;var G__32083__$1 = (((G__32083 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32083));var G__32083__$2 = (((G__32083__$1 == null))?null:cljs.core.count.call(null,G__32083__$1));return G__32083__$2;
})();var ic_count = (function (){var G__32084 = constituency;var G__32084__$1 = (((G__32084 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32084));var G__32084__$2 = (((G__32084__$1 == null))?null:cljs.core.count.call(null,G__32084__$1));return G__32084__$2;
})();if(typeof clustermap.components.map_report.t32085 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32085 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta32086){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta32086 = meta32086;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32085.cljs$lang$type = true;
clustermap.components.map_report.t32085.cljs$lang$ctorStr = "clustermap.components.map-report/t32085";
clustermap.components.map_report.t32085.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32085");
});
clustermap.components.map_report.t32085.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32085.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32088 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32088))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32088),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32088));
}
})(),(function (){var attrs32089 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32089))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs32089),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs32089),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs32090 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32090))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32090),(function (){var attrs32091 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32091))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32091),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32091));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32090),(function (){var attrs32092 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32092))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32092),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32092));
}
})());
}
})(),(function (){var attrs32093 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32093))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32093),(function (){var attrs32094 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32094))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32094),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32094));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32093),(function (){var attrs32095 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32095))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32095),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32095));
}
})());
}
})(),(function (){var attrs32096 = clustermap.formats.money.fmoney.call(null,(function (){var G__32106 = self__.constituency;var G__32106__$1 = (((G__32106 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32106));return G__32106__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32096))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32096),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32096),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32101 = clustermap.formats.number.fnum.call(null,(function (){var G__32107 = self__.constituency;var G__32107__$1 = (((G__32107 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32107));return G__32107__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32101))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32101),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32101),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32085.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32087){var self__ = this;
var _32087__$1 = this;return self__.meta32086;
});
clustermap.components.map_report.t32085.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32087,meta32086__$1){var self__ = this;
var _32087__$1 = this;return (new clustermap.components.map_report.t32085(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta32086__$1));
});
clustermap.components.map_report.__GT_t32085 = (function __GT_t32085(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32086){return (new clustermap.components.map_report.t32085(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32086));
});
}
return (new clustermap.components.map_report.t32085(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__32111 = cljs.core._EQ__EQ_;var expr__32112 = type;if(cljs.core.truth_(pred__32111.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32112)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32111.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32112)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32111.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32112)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
