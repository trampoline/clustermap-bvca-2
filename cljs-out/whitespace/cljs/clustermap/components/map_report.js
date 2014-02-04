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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__31927 = apc_stats;var G__31927__$1 = (((G__31927 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31927));return G__31927__$1;
})();var ic_count = (function (){var G__31928 = apc_stats;var G__31928__$1 = (((G__31928 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31928));return G__31928__$1;
})();if(typeof clustermap.components.map_report.t31929 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31929 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta31930){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta31930 = meta31930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31929.cljs$lang$type = true;
clustermap.components.map_report.t31929.cljs$lang$ctorStr = "clustermap.components.map-report/t31929";
clustermap.components.map_report.t31929.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31929");
});
clustermap.components.map_report.t31929.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31929.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs31934 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31934))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31934),(function (){var attrs31935 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31935))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31935),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31935));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31934),(function (){var attrs31936 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31936))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31936),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31936));
}
})());
}
})(),(function (){var attrs31937 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31937))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31937),(function (){var attrs31938 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31938))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31938),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31938));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31937),(function (){var attrs31939 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31939))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31939),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31939));
}
})());
}
})(),(function (){var attrs31940 = clustermap.formats.money.fmoney.call(null,(function (){var G__31950 = self__.apc_stats;var G__31950__$1 = (((G__31950 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31950));var G__31950__$2 = (((G__31950__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31950__$1));return G__31950__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31940))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31940),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31940),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31945 = clustermap.formats.number.fnum.call(null,(function (){var G__31951 = self__.apc_stats;var G__31951__$1 = (((G__31951 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31951));var G__31951__$2 = (((G__31951__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31951__$1));return G__31951__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31945))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31945),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31945),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31931){var self__ = this;
var _31931__$1 = this;return self__.meta31930;
});
clustermap.components.map_report.t31929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31931,meta31930__$1){var self__ = this;
var _31931__$1 = this;return (new clustermap.components.map_report.t31929(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta31930__$1));
});
clustermap.components.map_report.__GT_t31929 = (function __GT_t31929(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31930){return (new clustermap.components.map_report.t31929(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31930));
});
}
return (new clustermap.components.map_report.t31929(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__31976 = portfolio_company;var G__31976__$1 = (((G__31976 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31976));var G__31976__$2 = (((G__31976__$1 == null))?null:cljs.core.count.call(null,G__31976__$1));return G__31976__$2;
})();var const_count = (function (){var G__31977 = portfolio_company;var G__31977__$1 = (((G__31977 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31977));var G__31977__$2 = (((G__31977__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31977__$1));var G__31977__$3 = (((G__31977__$2 == null))?null:cljs.core.count.call(null,G__31977__$2));return G__31977__$3;
})();if(typeof clustermap.components.map_report.t31978 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31978 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta31979){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31979 = meta31979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31978.cljs$lang$type = true;
clustermap.components.map_report.t31978.cljs$lang$ctorStr = "clustermap.components.map-report/t31978";
clustermap.components.map_report.t31978.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31978");
});
clustermap.components.map_report.t31978.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31978.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31981 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31981))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31981),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31981));
}
})()),React.DOM.ul(null,(function (){var attrs31982 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31982))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31982),(function (){var attrs31983 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31983))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31983),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31983));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31982),(function (){var attrs31984 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31984))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31984),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31984));
}
})());
}
})(),(function (){var attrs31985 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31985))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31985),(function (){var attrs31986 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31986))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31986),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31986));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31985),(function (){var attrs31987 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31987))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31987),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31987));
}
})());
}
})(),(function (){var attrs31988 = clustermap.formats.money.fmoney.call(null,(function (){var G__31998 = self__.portfolio_company;var G__31998__$1 = (((G__31998 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__31998));return G__31998__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31988))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31988),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31988),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs31993 = clustermap.formats.number.fnum.call(null,(function (){var G__31999 = self__.portfolio_company;var G__31999__$1 = (((G__31999 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__31999));return G__31999__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31993))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31993),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31993),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31980){var self__ = this;
var _31980__$1 = this;return self__.meta31979;
});
clustermap.components.map_report.t31978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31980,meta31979__$1){var self__ = this;
var _31980__$1 = this;return (new clustermap.components.map_report.t31978(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta31979__$1));
});
clustermap.components.map_report.__GT_t31978 = (function __GT_t31978(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31979){return (new clustermap.components.map_report.t31978(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31979));
});
}
return (new clustermap.components.map_report.t31978(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__32024 = investor_company;var G__32024__$1 = (((G__32024 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32024));var G__32024__$2 = (((G__32024__$1 == null))?null:cljs.core.count.call(null,G__32024__$1));return G__32024__$2;
})();var const_count = (function (){var G__32025 = investor_company;var G__32025__$1 = (((G__32025 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__32025));var G__32025__$2 = (((G__32025__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__32025__$1));var G__32025__$3 = (((G__32025__$2 == null))?null:cljs.core.count.call(null,G__32025__$2));return G__32025__$3;
})();if(typeof clustermap.components.map_report.t32026 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32026 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta32027){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta32027 = meta32027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32026.cljs$lang$type = true;
clustermap.components.map_report.t32026.cljs$lang$ctorStr = "clustermap.components.map-report/t32026";
clustermap.components.map_report.t32026.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32026");
});
clustermap.components.map_report.t32026.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32026.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32029 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs32029))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32029),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32029));
}
})()),React.DOM.ul(null,(function (){var attrs32030 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32030))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32030),(function (){var attrs32031 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32031))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32031),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32031));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32030),(function (){var attrs32032 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32032))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32032),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32032));
}
})());
}
})(),(function (){var attrs32033 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs32033))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32033),(function (){var attrs32034 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32034))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32034),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32034));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32033),(function (){var attrs32035 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs32035))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32035),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32035));
}
})());
}
})(),(function (){var attrs32036 = clustermap.formats.money.fmoney.call(null,(function (){var G__32046 = self__.investor_company;var G__32046__$1 = (((G__32046 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32046));return G__32046__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32036))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32036),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32036),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32041 = clustermap.formats.number.fnum.call(null,(function (){var G__32047 = self__.investor_company;var G__32047__$1 = (((G__32047 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32047));return G__32047__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32041))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32041),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32041),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32028){var self__ = this;
var _32028__$1 = this;return self__.meta32027;
});
clustermap.components.map_report.t32026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32028,meta32027__$1){var self__ = this;
var _32028__$1 = this;return (new clustermap.components.map_report.t32026(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta32027__$1));
});
clustermap.components.map_report.__GT_t32026 = (function __GT_t32026(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32027){return (new clustermap.components.map_report.t32026(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta32027));
});
}
return (new clustermap.components.map_report.t32026(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__32073 = constituency;var G__32073__$1 = (((G__32073 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32073));var G__32073__$2 = (((G__32073__$1 == null))?null:cljs.core.count.call(null,G__32073__$1));return G__32073__$2;
})();var ic_count = (function (){var G__32074 = constituency;var G__32074__$1 = (((G__32074 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32074));var G__32074__$2 = (((G__32074__$1 == null))?null:cljs.core.count.call(null,G__32074__$1));return G__32074__$2;
})();if(typeof clustermap.components.map_report.t32075 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32075 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta32076){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta32076 = meta32076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32075.cljs$lang$type = true;
clustermap.components.map_report.t32075.cljs$lang$ctorStr = "clustermap.components.map-report/t32075";
clustermap.components.map_report.t32075.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32075");
});
clustermap.components.map_report.t32075.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32075.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32078 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32078))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32078),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32078));
}
})(),(function (){var attrs32079 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32079))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs32079),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs32079),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs32080 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs32080))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32080),(function (){var attrs32081 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32081))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32081),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32081));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32080),(function (){var attrs32082 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs32082))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32082),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32082));
}
})());
}
})(),(function (){var attrs32083 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32083))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32083),(function (){var attrs32084 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32084))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32084),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32084));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32083),(function (){var attrs32085 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32085))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32085),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32085));
}
})());
}
})(),(function (){var attrs32086 = clustermap.formats.money.fmoney.call(null,(function (){var G__32096 = self__.constituency;var G__32096__$1 = (((G__32096 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32096));return G__32096__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32086))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32086),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32086),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32091 = clustermap.formats.number.fnum.call(null,(function (){var G__32097 = self__.constituency;var G__32097__$1 = (((G__32097 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32097));return G__32097__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32091))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32091),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32091),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32075.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32077){var self__ = this;
var _32077__$1 = this;return self__.meta32076;
});
clustermap.components.map_report.t32075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32077,meta32076__$1){var self__ = this;
var _32077__$1 = this;return (new clustermap.components.map_report.t32075(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta32076__$1));
});
clustermap.components.map_report.__GT_t32075 = (function __GT_t32075(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32076){return (new clustermap.components.map_report.t32075(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32076));
});
}
return (new clustermap.components.map_report.t32075(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__32101 = cljs.core._EQ__EQ_;var expr__32102 = type;if(cljs.core.truth_(pred__32101.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32102)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32101.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32102)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32101.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32102)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
