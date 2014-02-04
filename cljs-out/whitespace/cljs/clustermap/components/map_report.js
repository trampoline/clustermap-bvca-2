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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__31877 = apc_stats;var G__31877__$1 = (((G__31877 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__31877));return G__31877__$1;
})();var ic_count = (function (){var G__31878 = apc_stats;var G__31878__$1 = (((G__31878 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__31878));return G__31878__$1;
})();if(typeof clustermap.components.map_report.t31879 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31879 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta31880){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta31880 = meta31880;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31879.cljs$lang$type = true;
clustermap.components.map_report.t31879.cljs$lang$ctorStr = "clustermap.components.map-report/t31879";
clustermap.components.map_report.t31879.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31879");
});
clustermap.components.map_report.t31879.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31879.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs31884 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31884))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31884),(function (){var attrs31885 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31885))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31885),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31885));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31884),(function (){var attrs31886 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31886))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31886),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31886));
}
})());
}
})(),(function (){var attrs31887 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31887))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31887),(function (){var attrs31888 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31888))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31888),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31888));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31887),(function (){var attrs31889 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31889))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31889),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31889));
}
})());
}
})(),(function (){var attrs31890 = clustermap.formats.money.fmoney.call(null,(function (){var G__31900 = self__.apc_stats;var G__31900__$1 = (((G__31900 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__31900));var G__31900__$2 = (((G__31900__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31900__$1));return G__31900__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31890))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31890),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31890),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31895 = clustermap.formats.number.fnum.call(null,(function (){var G__31901 = self__.apc_stats;var G__31901__$1 = (((G__31901 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__31901));var G__31901__$2 = (((G__31901__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__31901__$1));return G__31901__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31895))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31895),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31895),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31881){var self__ = this;
var _31881__$1 = this;return self__.meta31880;
});
clustermap.components.map_report.t31879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31881,meta31880__$1){var self__ = this;
var _31881__$1 = this;return (new clustermap.components.map_report.t31879(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta31880__$1));
});
clustermap.components.map_report.__GT_t31879 = (function __GT_t31879(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31880){return (new clustermap.components.map_report.t31879(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta31880));
});
}
return (new clustermap.components.map_report.t31879(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__31926 = portfolio_company;var G__31926__$1 = (((G__31926 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__31926));var G__31926__$2 = (((G__31926__$1 == null))?null:cljs.core.count.call(null,G__31926__$1));return G__31926__$2;
})();var const_count = (function (){var G__31927 = portfolio_company;var G__31927__$1 = (((G__31927 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31927));var G__31927__$2 = (((G__31927__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31927__$1));var G__31927__$3 = (((G__31927__$2 == null))?null:cljs.core.count.call(null,G__31927__$2));return G__31927__$3;
})();if(typeof clustermap.components.map_report.t31928 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31928 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta31929){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta31929 = meta31929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31928.cljs$lang$type = true;
clustermap.components.map_report.t31928.cljs$lang$ctorStr = "clustermap.components.map-report/t31928";
clustermap.components.map_report.t31928.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31928");
});
clustermap.components.map_report.t31928.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31928.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31931 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs31931))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31931),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31931));
}
})()),React.DOM.ul(null,(function (){var attrs31932 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs31932))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31932),(function (){var attrs31933 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31933))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31933),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31933));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31932),(function (){var attrs31934 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs31934))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31934),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31934));
}
})());
}
})(),(function (){var attrs31935 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31935))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31935),(function (){var attrs31936 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31936))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31936),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31936));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31935),(function (){var attrs31937 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31937))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31937),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31937));
}
})());
}
})(),(function (){var attrs31938 = clustermap.formats.money.fmoney.call(null,(function (){var G__31948 = self__.portfolio_company;var G__31948__$1 = (((G__31948 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__31948));return G__31948__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31938))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31938),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31938),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs31943 = clustermap.formats.number.fnum.call(null,(function (){var G__31949 = self__.portfolio_company;var G__31949__$1 = (((G__31949 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__31949));return G__31949__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31943))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31943),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31943),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31930){var self__ = this;
var _31930__$1 = this;return self__.meta31929;
});
clustermap.components.map_report.t31928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31930,meta31929__$1){var self__ = this;
var _31930__$1 = this;return (new clustermap.components.map_report.t31928(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta31929__$1));
});
clustermap.components.map_report.__GT_t31928 = (function __GT_t31928(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31929){return (new clustermap.components.map_report.t31928(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta31929));
});
}
return (new clustermap.components.map_report.t31928(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__31974 = investor_company;var G__31974__$1 = (((G__31974 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__31974));var G__31974__$2 = (((G__31974__$1 == null))?null:cljs.core.count.call(null,G__31974__$1));return G__31974__$2;
})();var const_count = (function (){var G__31975 = investor_company;var G__31975__$1 = (((G__31975 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__31975));var G__31975__$2 = (((G__31975__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__31975__$1));var G__31975__$3 = (((G__31975__$2 == null))?null:cljs.core.count.call(null,G__31975__$2));return G__31975__$3;
})();if(typeof clustermap.components.map_report.t31976 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t31976 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta31977){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta31977 = meta31977;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t31976.cljs$lang$type = true;
clustermap.components.map_report.t31976.cljs$lang$ctorStr = "clustermap.components.map-report/t31976";
clustermap.components.map_report.t31976.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t31976");
});
clustermap.components.map_report.t31976.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t31976.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs31979 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs31979))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs31979),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs31979));
}
})()),React.DOM.ul(null,(function (){var attrs31980 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs31980))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31980),(function (){var attrs31981 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31981))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31981),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31981));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31980),(function (){var attrs31982 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs31982))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31982),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31982));
}
})());
}
})(),(function (){var attrs31983 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs31983))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31983),(function (){var attrs31984 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31984))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31984),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31984));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31983),(function (){var attrs31985 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs31985))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs31985),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs31985));
}
})());
}
})(),(function (){var attrs31986 = clustermap.formats.money.fmoney.call(null,(function (){var G__31996 = self__.investor_company;var G__31996__$1 = (((G__31996 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__31996));return G__31996__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31986))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31986),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31986),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs31991 = clustermap.formats.number.fnum.call(null,(function (){var G__31997 = self__.investor_company;var G__31997__$1 = (((G__31997 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__31997));return G__31997__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs31991))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs31991),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs31991),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t31976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31978){var self__ = this;
var _31978__$1 = this;return self__.meta31977;
});
clustermap.components.map_report.t31976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31978,meta31977__$1){var self__ = this;
var _31978__$1 = this;return (new clustermap.components.map_report.t31976(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta31977__$1));
});
clustermap.components.map_report.__GT_t31976 = (function __GT_t31976(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31977){return (new clustermap.components.map_report.t31976(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta31977));
});
}
return (new clustermap.components.map_report.t31976(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__32023 = constituency;var G__32023__$1 = (((G__32023 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__32023));var G__32023__$2 = (((G__32023__$1 == null))?null:cljs.core.count.call(null,G__32023__$1));return G__32023__$2;
})();var ic_count = (function (){var G__32024 = constituency;var G__32024__$1 = (((G__32024 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__32024));var G__32024__$2 = (((G__32024__$1 == null))?null:cljs.core.count.call(null,G__32024__$1));return G__32024__$2;
})();if(typeof clustermap.components.map_report.t32025 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t32025 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta32026){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta32026 = meta32026;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t32025.cljs$lang$type = true;
clustermap.components.map_report.t32025.cljs$lang$ctorStr = "clustermap.components.map-report/t32025";
clustermap.components.map_report.t32025.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t32025");
});
clustermap.components.map_report.t32025.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t32025.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs32028 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32028))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs32028),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs32028));
}
})(),(function (){var attrs32029 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs32029))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs32029),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs32029),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
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
})(),(function (){var attrs32033 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs32033))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32033),(function (){var attrs32034 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32034))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32034),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32034));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32033),(function (){var attrs32035 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs32035))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs32035),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs32035));
}
})());
}
})(),(function (){var attrs32036 = clustermap.formats.money.fmoney.call(null,(function (){var G__32046 = self__.constituency;var G__32046__$1 = (((G__32046 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__32046));return G__32046__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32036))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32036),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32036),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs32041 = clustermap.formats.number.fnum.call(null,(function (){var G__32047 = self__.constituency;var G__32047__$1 = (((G__32047 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__32047));return G__32047__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs32041))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs32041),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs32041),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t32025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32027){var self__ = this;
var _32027__$1 = this;return self__.meta32026;
});
clustermap.components.map_report.t32025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32027,meta32026__$1){var self__ = this;
var _32027__$1 = this;return (new clustermap.components.map_report.t32025(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta32026__$1));
});
clustermap.components.map_report.__GT_t32025 = (function __GT_t32025(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32026){return (new clustermap.components.map_report.t32025(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta32026));
});
}
return (new clustermap.components.map_report.t32025(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__32051 = cljs.core._EQ__EQ_;var expr__32052 = type;if(cljs.core.truth_(pred__32051.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__32052)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32051.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__32052)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__32051.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__32052)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});
