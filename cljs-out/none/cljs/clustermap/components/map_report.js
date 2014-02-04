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
clustermap.components.map_report.all_portfolio_companies_summary_report = (function all_portfolio_companies_summary_report(apc_stats,comm){var pc_count = (function (){var G__11765 = apc_stats;var G__11765__$1 = (((G__11765 == null))?null:new cljs.core.Keyword(null,"portfolio_company_count","portfolio_company_count",1780206472).cljs$core$IFn$_invoke$arity$1(G__11765));return G__11765__$1;
})();var ic_count = (function (){var G__11766 = apc_stats;var G__11766__$1 = (((G__11766 == null))?null:new cljs.core.Keyword(null,"investor_company_count","investor_company_count",2333064920).cljs$core$IFn$_invoke$arity$1(G__11766));return G__11766__$1;
})();if(typeof clustermap.components.map_report.t11767 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11767 = (function (ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,meta11768){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.apc_stats = apc_stats;
this.all_portfolio_companies_summary_report = all_portfolio_companies_summary_report;
this.meta11768 = meta11768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11767.cljs$lang$type = true;
clustermap.components.map_report.t11767.cljs$lang$ctorStr = "clustermap.components.map-report/t11767";
clustermap.components.map_report.t11767.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11767");
});
clustermap.components.map_report.t11767.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11767.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},React.DOM.h2(null,"All portfolio companies"),React.DOM.h3(null,"UK wide")),React.DOM.ul(null,(function (){var attrs11772 = clustermap.formats.number.fnum.call(null,self__.pc_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11772))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11772),(function (){var attrs11773 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11773))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11773),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11773));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11772),(function (){var attrs11774 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11774))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11774),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11774));
}
})());
}
})(),(function (){var attrs11775 = clustermap.formats.number.fnum.call(null,self__.ic_count,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11775))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11775),(function (){var attrs11776 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11776))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11776),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11776));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11775),(function (){var attrs11777 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11777))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11777),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11777));
}
})());
}
})(),(function (){var attrs11778 = clustermap.formats.money.fmoney.call(null,(function (){var G__11788 = self__.apc_stats;var G__11788__$1 = (((G__11788 == null))?null:new cljs.core.Keyword(null,"turnover","turnover",1148922435).cljs$core$IFn$_invoke$arity$1(G__11788));var G__11788__$2 = (((G__11788__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11788__$1));return G__11788__$2;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11778))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11778),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11778),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11783 = clustermap.formats.number.fnum.call(null,(function (){var G__11789 = self__.apc_stats;var G__11789__$1 = (((G__11789 == null))?null:new cljs.core.Keyword(null,"employee_count","employee_count",2542621616).cljs$core$IFn$_invoke$arity$1(G__11789));var G__11789__$2 = (((G__11789__$1 == null))?null:new cljs.core.Keyword(null,"total","total",1124454070).cljs$core$IFn$_invoke$arity$1(G__11789__$1));return G__11789__$2;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11783))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11783),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11783),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11769){var self__ = this;
var _11769__$1 = this;return self__.meta11768;
});
clustermap.components.map_report.t11767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11769,meta11768__$1){var self__ = this;
var _11769__$1 = this;return (new clustermap.components.map_report.t11767(self__.ic_count,self__.pc_count,self__.comm,self__.apc_stats,self__.all_portfolio_companies_summary_report,meta11768__$1));
});
clustermap.components.map_report.__GT_t11767 = (function __GT_t11767(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11768){return (new clustermap.components.map_report.t11767(ic_count__$1,pc_count__$1,comm__$1,apc_stats__$1,all_portfolio_companies_summary_report__$1,meta11768));
});
}
return (new clustermap.components.map_report.t11767(ic_count,pc_count,comm,apc_stats,all_portfolio_companies_summary_report,null));
});
clustermap.components.map_report.portfolio_company_report = (function portfolio_company_report(portfolio_company,comm){var ic_count = (function (){var G__11814 = portfolio_company;var G__11814__$1 = (((G__11814 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11814));var G__11814__$2 = (((G__11814__$1 == null))?null:cljs.core.count.call(null,G__11814__$1));return G__11814__$2;
})();var const_count = (function (){var G__11815 = portfolio_company;var G__11815__$1 = (((G__11815 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11815));var G__11815__$2 = (((G__11815__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11815__$1));var G__11815__$3 = (((G__11815__$2 == null))?null:cljs.core.count.call(null,G__11815__$2));return G__11815__$3;
})();if(typeof clustermap.components.map_report.t11816 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11816 = (function (const_count,ic_count,comm,portfolio_company,portfolio_company_report,meta11817){
this.const_count = const_count;
this.ic_count = ic_count;
this.comm = comm;
this.portfolio_company = portfolio_company;
this.portfolio_company_report = portfolio_company_report;
this.meta11817 = meta11817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11816.cljs$lang$type = true;
clustermap.components.map_report.t11816.cljs$lang$ctorStr = "clustermap.components.map-report/t11816";
clustermap.components.map_report.t11816.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11816");
});
clustermap.components.map_report.t11816.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11816.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11819 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.portfolio_company);if(cljs.core.map_QMARK_.call(null,attrs11819))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11819),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11819));
}
})()),React.DOM.ul(null,(function (){var attrs11820 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11820))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11820),(function (){var attrs11821 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11821))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11821),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11821));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11820),(function (){var attrs11822 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11822))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11822),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11822));
}
})());
}
})(),(function (){var attrs11823 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11823))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11823),(function (){var attrs11824 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11824))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11824),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11824));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11823),(function (){var attrs11825 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11825))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11825),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11825));
}
})());
}
})(),(function (){var attrs11826 = clustermap.formats.money.fmoney.call(null,(function (){var G__11836 = self__.portfolio_company;var G__11836__$1 = (((G__11836 == null))?null:new cljs.core.Keyword(null,"latest_turnover","latest_turnover",2012435451).cljs$core$IFn$_invoke$arity$1(G__11836));return G__11836__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11826))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11826),React.DOM.small(null,"Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11826),React.DOM.small(null,"Turnover"));
}
})(),(function (){var attrs11831 = clustermap.formats.number.fnum.call(null,(function (){var G__11837 = self__.portfolio_company;var G__11837__$1 = (((G__11837 == null))?null:new cljs.core.Keyword(null,"latest_employee_count","latest_employee_count",905794408).cljs$core$IFn$_invoke$arity$1(G__11837));return G__11837__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11831))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11831),React.DOM.small(null,"Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11831),React.DOM.small(null,"Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11818){var self__ = this;
var _11818__$1 = this;return self__.meta11817;
});
clustermap.components.map_report.t11816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11818,meta11817__$1){var self__ = this;
var _11818__$1 = this;return (new clustermap.components.map_report.t11816(self__.const_count,self__.ic_count,self__.comm,self__.portfolio_company,self__.portfolio_company_report,meta11817__$1));
});
clustermap.components.map_report.__GT_t11816 = (function __GT_t11816(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11817){return (new clustermap.components.map_report.t11816(const_count__$1,ic_count__$1,comm__$1,portfolio_company__$1,portfolio_company_report__$1,meta11817));
});
}
return (new clustermap.components.map_report.t11816(const_count,ic_count,comm,portfolio_company,portfolio_company_report,null));
});
clustermap.components.map_report.investor_company_report = (function investor_company_report(investor_company,comm){var pc_count = (function (){var G__11862 = investor_company;var G__11862__$1 = (((G__11862 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11862));var G__11862__$2 = (((G__11862__$1 == null))?null:cljs.core.count.call(null,G__11862__$1));return G__11862__$2;
})();var const_count = (function (){var G__11863 = investor_company;var G__11863__$1 = (((G__11863 == null))?null:new cljs.core.Keyword(null,"boundarylinecolls","boundarylinecolls",2038297115).cljs$core$IFn$_invoke$arity$1(G__11863));var G__11863__$2 = (((G__11863__$1 == null))?null:new cljs.core.Keyword(null,"uk_constituencies","uk_constituencies",575411487).cljs$core$IFn$_invoke$arity$1(G__11863__$1));var G__11863__$3 = (((G__11863__$2 == null))?null:cljs.core.count.call(null,G__11863__$2));return G__11863__$3;
})();if(typeof clustermap.components.map_report.t11864 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11864 = (function (const_count,pc_count,comm,investor_company,investor_company_report,meta11865){
this.const_count = const_count;
this.pc_count = pc_count;
this.comm = comm;
this.investor_company = investor_company;
this.investor_company_report = investor_company_report;
this.meta11865 = meta11865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11864.cljs$lang$type = true;
clustermap.components.map_report.t11864.cljs$lang$ctorStr = "clustermap.components.map-report/t11864";
clustermap.components.map_report.t11864.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11864");
});
clustermap.components.map_report.t11864.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11864.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11867 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.investor_company);if(cljs.core.map_QMARK_.call(null,attrs11867))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11867),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11867));
}
})()),React.DOM.ul(null,(function (){var attrs11868 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11868))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11868),(function (){var attrs11869 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11869))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11869),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11869));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11868),(function (){var attrs11870 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11870))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11870),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11870));
}
})());
}
})(),(function (){var attrs11871 = clustermap.formats.number.fnum.call(null,self__.const_count);if(cljs.core.map_QMARK_.call(null,attrs11871))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11871),(function (){var attrs11872 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11872))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11872),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11872));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11871),(function (){var attrs11873 = clustermap.formats.string.pluralize.call(null,self__.const_count,"Constituency","Constituencies");if(cljs.core.map_QMARK_.call(null,attrs11873))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11873),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11873));
}
})());
}
})(),(function (){var attrs11874 = clustermap.formats.money.fmoney.call(null,(function (){var G__11884 = self__.investor_company;var G__11884__$1 = (((G__11884 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11884));return G__11884__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11874))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11874),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11874),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11879 = clustermap.formats.number.fnum.call(null,(function (){var G__11885 = self__.investor_company;var G__11885__$1 = (((G__11885 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11885));return G__11885__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11879))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11879),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11879),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11866){var self__ = this;
var _11866__$1 = this;return self__.meta11865;
});
clustermap.components.map_report.t11864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11866,meta11865__$1){var self__ = this;
var _11866__$1 = this;return (new clustermap.components.map_report.t11864(self__.const_count,self__.pc_count,self__.comm,self__.investor_company,self__.investor_company_report,meta11865__$1));
});
clustermap.components.map_report.__GT_t11864 = (function __GT_t11864(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11865){return (new clustermap.components.map_report.t11864(const_count__$1,pc_count__$1,comm__$1,investor_company__$1,investor_company_report__$1,meta11865));
});
}
return (new clustermap.components.map_report.t11864(const_count,pc_count,comm,investor_company,investor_company_report,null));
});
clustermap.components.map_report.constituency_report = (function constituency_report(constituency,comm){var pc_count = (function (){var G__11911 = constituency;var G__11911__$1 = (((G__11911 == null))?null:new cljs.core.Keyword(null,"portfolio_companies","portfolio_companies",4192656150).cljs$core$IFn$_invoke$arity$1(G__11911));var G__11911__$2 = (((G__11911__$1 == null))?null:cljs.core.count.call(null,G__11911__$1));return G__11911__$2;
})();var ic_count = (function (){var G__11912 = constituency;var G__11912__$1 = (((G__11912 == null))?null:new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(G__11912));var G__11912__$2 = (((G__11912__$1 == null))?null:cljs.core.count.call(null,G__11912__$1));return G__11912__$2;
})();if(typeof clustermap.components.map_report.t11913 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.map_report.t11913 = (function (ic_count,pc_count,comm,constituency,constituency_report,meta11914){
this.ic_count = ic_count;
this.pc_count = pc_count;
this.comm = comm;
this.constituency = constituency;
this.constituency_report = constituency_report;
this.meta11914 = meta11914;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.map_report.t11913.cljs$lang$type = true;
clustermap.components.map_report.t11913.cljs$lang$ctorStr = "clustermap.components.map-report/t11913";
clustermap.components.map_report.t11913.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.map-report/t11913");
});
clustermap.components.map_report.t11913.prototype.om$core$IRender$ = true;
clustermap.components.map_report.t11913.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div(null,React.DOM.header({"className": "secondary"},(function (){var attrs11916 = new cljs.core.Keyword(null,"name","name",1017277949).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11916))
{return React.DOM.h2(sablono.interpreter.attributes.call(null,attrs11916),null);
} else
{return React.DOM.h2(null,sablono.interpreter.interpret.call(null,attrs11916));
}
})(),(function (){var attrs11917 = new cljs.core.Keyword(null,"mp","mp",1013907733).cljs$core$IFn$_invoke$arity$1(self__.constituency);if(cljs.core.map_QMARK_.call(null,attrs11917))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,attrs11917),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
} else
{return React.DOM.h3(null,sablono.interpreter.interpret.call(null,attrs11917),React.DOM.small(null,"(",sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"political_party","political_party",2564439702).cljs$core$IFn$_invoke$arity$1(self__.constituency)),")"));
}
})()),React.DOM.ul(null,(function (){var attrs11918 = clustermap.formats.number.fnum.call(null,self__.pc_count);if(cljs.core.map_QMARK_.call(null,attrs11918))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11918),(function (){var attrs11919 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11919))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11919),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11919));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11918),(function (){var attrs11920 = clustermap.formats.string.pluralize.call(null,self__.pc_count,"Portfolio Company","Portfolio Companies");if(cljs.core.map_QMARK_.call(null,attrs11920))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11920),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11920));
}
})());
}
})(),(function (){var attrs11921 = clustermap.formats.number.fnum.call(null,self__.ic_count);if(cljs.core.map_QMARK_.call(null,attrs11921))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11921),(function (){var attrs11922 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11922))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11922),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11922));
}
})());
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11921),(function (){var attrs11923 = clustermap.formats.string.pluralize.call(null,self__.ic_count,"Investor");if(cljs.core.map_QMARK_.call(null,attrs11923))
{return React.DOM.small(sablono.interpreter.attributes.call(null,attrs11923),null);
} else
{return React.DOM.small(null,sablono.interpreter.interpret.call(null,attrs11923));
}
})());
}
})(),(function (){var attrs11924 = clustermap.formats.money.fmoney.call(null,(function (){var G__11934 = self__.constituency;var G__11934__$1 = (((G__11934 == null))?null:new cljs.core.Keyword(null,"total_turnover","total_turnover",4350667998).cljs$core$IFn$_invoke$arity$1(G__11934));return G__11934__$1;
})(),new cljs.core.Keyword(null,"sf","sf",1013907909),2,new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11924))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11924),React.DOM.small(null,"Portfolio Company Turnover"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11924),React.DOM.small(null,"Portfolio Company Turnover"));
}
})(),(function (){var attrs11929 = clustermap.formats.number.fnum.call(null,(function (){var G__11935 = self__.constituency;var G__11935__$1 = (((G__11935 == null))?null:new cljs.core.Keyword(null,"total_employee_count","total_employee_count",3727717899).cljs$core$IFn$_invoke$arity$1(G__11935));return G__11935__$1;
})(),new cljs.core.Keyword(null,"default","default",2558708147),"-");if(cljs.core.map_QMARK_.call(null,attrs11929))
{return React.DOM.li(sablono.interpreter.attributes.call(null,attrs11929),React.DOM.small(null,"Portfolio Company Employees"));
} else
{return React.DOM.li(null,sablono.interpreter.interpret.call(null,attrs11929),React.DOM.small(null,"Portfolio Company Employees"));
}
})()),sablono.interpreter.interpret.call(null,clustermap.components.map_report.full_report_button.call(null,self__.comm)));
});
clustermap.components.map_report.t11913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11915){var self__ = this;
var _11915__$1 = this;return self__.meta11914;
});
clustermap.components.map_report.t11913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11915,meta11914__$1){var self__ = this;
var _11915__$1 = this;return (new clustermap.components.map_report.t11913(self__.ic_count,self__.pc_count,self__.comm,self__.constituency,self__.constituency_report,meta11914__$1));
});
clustermap.components.map_report.__GT_t11913 = (function __GT_t11913(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11914){return (new clustermap.components.map_report.t11913(ic_count__$1,pc_count__$1,comm__$1,constituency__$1,constituency_report__$1,meta11914));
});
}
return (new clustermap.components.map_report.t11913(ic_count,pc_count,comm,constituency,constituency_report,null));
});
clustermap.components.map_report.map_report_component = (function map_report_component(data,owner){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));var type = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"type","type",1017479852)], null));var value = cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selection","selection",3592905982),new cljs.core.Keyword(null,"value","value",1125876963)], null));var pred__11939 = cljs.core._EQ__EQ_;var expr__11940 = type;if(cljs.core.truth_(pred__11939.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),expr__11940)))
{return clustermap.components.map_report.portfolio_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11939.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),expr__11940)))
{return clustermap.components.map_report.investor_company_report.call(null,value,comm);
} else
{if(cljs.core.truth_(pred__11939.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),expr__11940)))
{return clustermap.components.map_report.constituency_report.call(null,value,comm);
} else
{return clustermap.components.map_report.all_portfolio_companies_summary_report.call(null,new cljs.core.Keyword(null,"selection-portfolio-company-stats","selection-portfolio-company-stats",3535878587).cljs$core$IFn$_invoke$arity$1(data),comm);
}
}
}
});
clustermap.components.map_report.mount = (function mount(app_state,elem_id,comm){return om.core.root.call(null,app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"comm","comm",1016963710),comm], null),clustermap.components.map_report.map_report_component,document.getElementById(elem_id));
});

//# sourceMappingURL=map_report.js.map