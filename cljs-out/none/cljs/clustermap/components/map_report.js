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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11787 = apc_stats;var G__11787__$1 = (((G__11787 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11787));return G__11787__$1;
})();var ic_count = (function (){var G__11788 = apc_stats;var G__11788__$1 = (((G__11788 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11788));return G__11788__$1;
})();if(typeof clustermap.components.map_report.t11789 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11789 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11790){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11790 = meta11790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11789.cljs$lang$type = true;
clustermap.components.map_report.t11789.cljs$lang$ctorStr = "clustermap.components.map-report/t11789";
clustermap.components.map_report.t11789.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11789");
});
clustermap.components.map_report.t11789.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11789.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11794 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11794))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11794),(function (){var attrs11795 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11795))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11795),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11795));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11794),(function (){var attrs11796 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11796))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11796),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11796));
}
})());
}
})(),(function (){var attrs11797 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11797))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11797),(function (){var attrs11798 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11798))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11798),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11798));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11797),(function (){var attrs11799 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11799))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11799),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11799));
}
})());
}
})(),(function (){var attrs11800 = clustermap.formats.money.fmoney.call(null,(function (){var G__11810 = self__.apc_stats;var G__11810__$1 = (((G__11810 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11810));var G__11810__$2 = (((G__11810__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11810__$1));return G__11810__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11800))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11800),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11800),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11805 = clustermap.formats.number.fnum.call(null,(function (){var G__11811 = self__.apc_stats;var G__11811__$1 = (((G__11811 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11811));var G__11811__$2 = (((G__11811__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11811__$1));return G__11811__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11805))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11805),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11805),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11791){var self__ = this;
var _11791__$1 = this;return self__.meta11790;
});
clustermap.components.map_report.t11789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11791,meta11790__$1){var self__ = this;
var _11791__$1 = this;return (new clustermap.components.map_report.t11789(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11790__$1));
});
clustermap.components.map_report.__GT_t11789 = (function __GT_t11789(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11790){return (new clustermap.components.map_report.t11789(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11790));
});
}
return (new clustermap.components.map_report.t11789(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11836 = portfolio_company;var G__11836__$1 = (((G__11836 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11836));var G__11836__$2 = (((G__11836__$1 == null))?null:cljs.core.count.call(null,G__11836__$1));return G__11836__$2;
})();var const_count = (function (){var G__11837 = portfolio_company;var G__11837__$1 = (((G__11837 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11837));var G__11837__$2 = (((G__11837__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11837__$1));var G__11837__$3 = (((G__11837__$2 == null))?null:cljs.core.count.call(null,G__11837__$2));return G__11837__$3;
})();if(typeof clustermap.components.map_report.t11838 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11838 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11839){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11839 = meta11839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11838.cljs$lang$type = true;
clustermap.components.map_report.t11838.cljs$lang$ctorStr = "clustermap.components.map-report/t11838";
clustermap.components.map_report.t11838.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11838");
});
clustermap.components.map_report.t11838.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11838.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11841 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11841))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11841),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11841));
}
})()),React.DOM.ul(null,(function (){var attrs11842 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11842))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11842),(function (){var attrs11843 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11843))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11843),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11843));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11842),(function (){var attrs11844 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11844))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11844),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11844));
}
})());
}
})(),(function (){var attrs11845 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11845))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11845),(function (){var attrs11846 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11846))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11846),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11846));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11845),(function (){var attrs11847 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11847))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11847),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11847));
}
})());
}
})(),(function (){var attrs11848 = clustermap.formats.money.fmoney.call(null,(function (){var G__11858 = self__.portfolio_company;var G__11858__$1 = (((G__11858 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11858));return G__11858__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11848))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11848),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11848),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11853 = clustermap.formats.number.fnum.call(null,(function (){var G__11859 = self__.portfolio_company;var G__11859__$1 = (((G__11859 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11859));return G__11859__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11853))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11853),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11853),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11840){var self__ = this;
var _11840__$1 = this;return self__.meta11839;
});
clustermap.components.map_report.t11838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11840,meta11839__$1){var self__ = this;
var _11840__$1 = this;return (new clustermap.components.map_report.t11838(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11839__$1));
});
clustermap.components.map_report.__GT_t11838 = (function __GT_t11838(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11839){return (new clustermap.components.map_report.t11838(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11839));
});
}
return (new clustermap.components.map_report.t11838(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11884 = investor_company;var G__11884__$1 = (((G__11884 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11884));var G__11884__$2 = (((G__11884__$1 == null))?null:cljs.core.count.call(null,G__11884__$1));return G__11884__$2;
})();var const_count = (function (){var G__11885 = investor_company;var G__11885__$1 = (((G__11885 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11885));var G__11885__$2 = (((G__11885__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11885__$1));var G__11885__$3 = (((G__11885__$2 == null))?null:cljs.core.count.call(null,G__11885__$2));return G__11885__$3;
})();if(typeof clustermap.components.map_report.t11886 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11886 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11887){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11887 = meta11887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11886.cljs$lang$type = true;
clustermap.components.map_report.t11886.cljs$lang$ctorStr = "clustermap.components.map-report/t11886";
clustermap.components.map_report.t11886.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11886");
});
clustermap.components.map_report.t11886.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11886.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11889 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11889))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11889),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11889));
}
})()),React.DOM.ul(null,(function (){var attrs11890 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11890))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11890),(function (){var attrs11891 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11891))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11891),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11891));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11890),(function (){var attrs11892 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11892))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11892),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11892));
}
})());
}
})(),(function (){var attrs11893 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11893))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11893),(function (){var attrs11894 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11894))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11894),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11894));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11893),(function (){var attrs11895 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11895))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11895),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11895));
}
})());
}
})(),(function (){var attrs11896 = clustermap.formats.money.fmoney.call(null,(function (){var G__11906 = self__.investor_company;var G__11906__$1 = (((G__11906 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11906));return G__11906__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11896))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11896),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11896),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11901 = clustermap.formats.number.fnum.call(null,(function (){var G__11907 = self__.investor_company;var G__11907__$1 = (((G__11907 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11907));return G__11907__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11901))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11901),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11901),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11886.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11888){var self__ = this;
var _11888__$1 = this;return self__.meta11887;
});
clustermap.components.map_report.t11886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11888,meta11887__$1){var self__ = this;
var _11888__$1 = this;return (new clustermap.components.map_report.t11886(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11887__$1));
});
clustermap.components.map_report.__GT_t11886 = (function __GT_t11886(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11887){return (new clustermap.components.map_report.t11886(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11887));
});
}
return (new clustermap.components.map_report.t11886(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11933 = constituency;var G__11933__$1 = (((G__11933 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11933));var G__11933__$2 = (((G__11933__$1 == null))?null:cljs.core.count.call(null,G__11933__$1));return G__11933__$2;
})();var ic_count = (function (){var G__11934 = constituency;var G__11934__$1 = (((G__11934 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11934));var G__11934__$2 = (((G__11934__$1 == null))?null:cljs.core.count.call(null,G__11934__$1));return G__11934__$2;
})();if(typeof clustermap.components.map_report.t11935 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11935 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11936){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11936 = meta11936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11935.cljs$lang$type = true;
clustermap.components.map_report.t11935.cljs$lang$ctorStr = "clustermap.components.map-report/t11935";
clustermap.components.map_report.t11935.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11935");
});
clustermap.components.map_report.t11935.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11935.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11938 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11938))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11938),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11938));
}
})(),(function (){var attrs11939 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11939))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11939),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11939),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11940 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11940))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11940),(function (){var attrs11941 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11941))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11941),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11941));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11940),(function (){var attrs11942 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11942))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11942),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11942));
}
})());
}
})(),(function (){var attrs11943 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11943))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11943),(function (){var attrs11944 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11944))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11944),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11944));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11943),(function (){var attrs11945 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11945))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11945),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11945));
}
})());
}
})(),(function (){var attrs11946 = clustermap.formats.money.fmoney.call(null,(function (){var G__11956 = self__.constituency;var G__11956__$1 = (((G__11956 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11956));return G__11956__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11946))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11946),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11946),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11951 = clustermap.formats.number.fnum.call(null,(function (){var G__11957 = self__.constituency;var G__11957__$1 = (((G__11957 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11957));return G__11957__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11951))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11951),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11951),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11937){var self__ = this;
var _11937__$1 = this;return self__.meta11936;
});
clustermap.components.map_report.t11935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11937,meta11936__$1){var self__ = this;
var _11937__$1 = this;return (new clustermap.components.map_report.t11935(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11936__$1));
});
clustermap.components.map_report.__GT_t11935 = (function __GT_t11935(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11936){return (new clustermap.components.map_report.t11935(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11936));
});
}
return (new clustermap.components.map_report.t11935(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11961 = cljs.core._EQ__EQ_;var expr__11962 = type;if(cljs.core.truth_(pred__11961.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11962)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11961.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11962)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11961.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11962)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,shared){return om.core.root.call(null,app_state,shared,clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map